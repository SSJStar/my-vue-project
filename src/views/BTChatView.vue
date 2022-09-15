
<script setup>
import {ref, onMounted, onBeforeMount} from "vue";
//  按需引入 echarts
import * as echarts from "echarts";
import transformSheets from './read_xlsx';
const main = ref(); // 使用ref创建虚拟DOM引用，使用时用main.value

// let xAxis_data = ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'] //x轴数据
// let yAxis_data = [5, 20, 36, 10, 10, 20] //y轴数据
let xAxis_data = ref(["数据加载中，请等待"]) //x轴数据
let yAxis_data_girl = ref(["0"]) //y轴数据
let yAxis_data_boy = ref(["0"]) //y轴数据

onBeforeMount(()=>{

})
onMounted(() => {
  init();
  //readXlsxFile是异步方法，但是内部在获取完数据后，会执行updateChatCustom来刷新图标
  readXlsxFile();
});



//这个方法，会读取xAxis_data和yAxis_data的值，并再次绘制
function updateChatCustom(){
  // 指定图表的配置项和数据
  let option = {
    title: {
      text: '高中二班女子身高'
    },
    tooltip: {},
    legend: {
      data: ['女子身高','男子身高']
    },
    xAxis: {
      data: xAxis_data.value
    },
    yAxis: {},
    series: [
      {
        name: '女子身高',
        type: 'bar',
        data: yAxis_data_girl.value
      },
      {
        name: '男子身高',
        type: 'bar',
        data: yAxis_data_boy.value
      }
    ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}

let myChart = null
function init() {


  // 基于准备好的dom，初始化echarts实例
  myChart = echarts.init(document.getElementById('main'));

  console.log('xAxis_data222:');
  console.log(xAxis_data);

  console.log('yAxis_data222:');
  console.log(yAxis_data_girl);
  console.log(yAxis_data_boy);
  // 指定图表的配置项和数据,并显示图表。
  updateChatCustom()

  // // 基于准备好的dom，初始化echarts实例
  // let myChart = echarts.init(main.value);
  // const datas = [
  //   [
  //     {name: "银河帝国5：迈向基地", value: 3.8},
  //     {name: "俞军产品方法论", value: 2.3},
  //     {name: "艺术的逃难", value: 2.2},
  //     {name: "第一次世界大战回忆录（全五卷）", value: 1.3},
  //     {name: "Scrum 精髓", value: 1.2},
  //     {name: "其它", value: 5.7},
  //   ],
  // ];
  // // 指定图表的配置项和数据
  // const option = {
  //   title: {
  //     text: "阅读书籍分布",
  //     left: "center",
  //     top: "center",
  //     textStyle: {
  //       color: "#999",
  //       fontWeight: "normal",
  //       fontSize: 12,
  //     },
  //   },
  //   series: datas.map(function (data) {
  //     return {
  //       type: "pie",
  //       radius: [40, 60],
  //       height: "33.33%",
  //       left: "center",
  //       top: "center",
  //       width: 400,
  //       itemStyle: {
  //         borderColor: "#fff",
  //         borderWidth: 2,
  //       },
  //       label: {
  //         alignTo: "edge",
  //         formatter: "{name|{b}}\n{time|{c} 小时}",
  //         minMargin: 5,
  //         edgeDistance: 10,
  //         lineHeight: 15,
  //         rich: {
  //           time: {
  //             fontSize: 10,
  //             color: "#999",
  //           },
  //         },
  //       },
  //       labelLine: {
  //         length: 15,
  //         length2: 0,
  //         maxSurfaceAngle: 80,
  //       },
  //       labelLayout: function (params: any) {
  //         const isLeft = params.labelRect.x < myChart.getWidth() / 2;
  //         const points = params.labelLinePoints;
  //         // Update the end point.
  //         points[2][0] = isLeft
  //             ? params.labelRect.x
  //             : params.labelRect.x + params.labelRect.width;
  //         return {
  //           labelLinePoints: points,
  //         };
  //       },
  //       data: data,
  //     };
  //   }),
  // };
  // // 使用刚指定的配置项和数据显示图表。
  // myChart.setOption(option);
}

// 读取xlsx文件
const XLSX = require('xlsx')
let contentValue = {}
function readXlsxFile() {
  //模拟延迟加载 （setTimeout）

  setTimeout(function (){
    console.log("开始读取数据")
    let url = "/高中二班女子800米成绩统计.xlsx"  //放在public目录下可以直接访问
    //读取二进制excel文件,参考https://github.com/SheetJS/js-xlsx#utility-functions
    axios.get(url, {responseType:'arraybuffer'}).then((res) => {
      let data = new Uint8Array(res.data);
      let wb = XLSX.read(data, {type:"array"});
      let sheets = wb.Sheets;
      let content = transformSheets(sheets); // 整理xlsx返回的数据
      contentValue = content  //  复制给contentValue
      console.log('content:');
      console.log(content);//content内容是从表格，逐行读取
      let list = [];
      let arr = content.slice(1);
      let xAxis_data_array = []
      let yAxis_data_g = []
      let yAxis_data_b = []
      for (let i = 0; i < arr.length; i++) {
        let obj = {};

        arr[i].forEach((item, index) => {
          obj['data'+(index+1)] = item;
          if(index + 1 == 9){
            // obj['data'+(index+1)] = this.formatExcelDate(item);
            obj['data'+(index+1)] = formatExcelDate(item);
          }
          //第一行是标题 不需要遍历
          if (i>0){
            if(index == 0){
              xAxis_data_array.push(item)
            }
            if(index == 1){
              yAxis_data_g.push(item)
              yAxis_data_b.push(item)

            }
          }


        })
        list.push(obj);
      }

      xAxis_data.value = xAxis_data_array;
      yAxis_data_girl.value = yAxis_data_g;
      yAxis_data_boy.value = yAxis_data_b;

      console.log('list:');
      console.log(list);

      console.log('xAxis_data:');
      console.log(xAxis_data);

      console.log('yAxis_data:');
      console.log(yAxis_data_girl);
      console.log(yAxis_data_boy);
      // console.log("list1--"+ list[0]" ");
      console.log("开始二次渲染")
      updateChatCustom();

    }).catch( err =>{
      // this.err = err;
      console.log("err is:"+err)
    })


  },2000)

}
// 处理表格中的日期时间
function formatExcelDate (numb, format = "-") {
  // 如果numb为空则返回空字符串
  if (!numb) {
    return "";
  }
  let time = new Date(new Date("1900-1-1").getTime() + (numb - 1) * 3600*24*1000);
  const year = time.getFullYear() + '';
  const month = time.getMonth() + 1 + '';
  const date = time.getDate();
  if (format && format.length === 1) {
    return year + format + (month < 10 ? '0' + month : month) + format + (date < 10 ? '0' + date : date)
  }
  return year + (month < 10 ? '0' + month : month) + (date < 10 ? '0' + date : date)
}

</script>

<template>
<!--  <div ref="main" style="width: 100%; height: 400px"></div>-->
  <div id="main" style="width: 600px;height:400px;"></div>
</template>