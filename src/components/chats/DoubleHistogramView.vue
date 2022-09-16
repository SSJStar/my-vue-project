
<script setup>
import {ref, onMounted, onBeforeMount} from "vue";
//  按需引入 echarts
import * as echarts from "echarts";
import transformSheets from '@/views/read_xlsx';
const main = ref(); // 使用ref创建虚拟DOM引用，使用时用main.value


const emit = defineEmits(['click'])
const props = defineProps({
  xAxis_data: Array,//x轴数据
  yAxis_data_left: Array,//y轴数据 - 左边
  yAxis_data_right:Array,//y轴数据 - 右边
  legend_left: {type: String,default:""},//图例 - 左
  legend_right: String,//图例 - 右

})


onBeforeMount(()=>{

})
onMounted(() => {
  init();
  //readXlsxFile是异步方法，但是内部在获取完数据后，会执行updateChatCustom来刷新图标
  // readXlsxFile();
});



/**
 * 这个方法，会读取xAxis_data和yAxis_data的值，并再次绘制
 * -> 暴露给外界调用
 *
 * 作者: 小青龙
 * 时间：2022/09/15 15:34:23
 * @return {void}
 */
function updateChatCustom(x_data, y_data_left, y_data_right, legend_left, legend_right){
  // 指定图表的配置项和数据
  let option = {
    title: {
      text: '高中二班女子身高体重'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' }
    },
    legend: {
      data: [props.legend_left,props.legend_right], //图例
    },
    xAxis: {
      data: x_data,//props.xAxis_data,
      // axisLine:{
      //   symbol:"arrow",
      //   lineStyle:{
      //     type:"dash" //箭头
      //   }
      // }
    },
    yAxis: [
      {
        type:"value",
        name: legend_left,//props.legend_left,
        splitLine:{show:true},
        // nameLocation:"middle",
        // nameGap:170,
        axisLabel: {
          formatter: '{value} ml'
        }
      },
      {
        type:"value",
        name: legend_right,//props.legend_right,
        splitLine:{show:true},
        // nameLocation:"right",
        // nameGap:150,
        axisLabel: {
          formatter: '{value} ml'
        }
      }
    ],
    series: [
      {
        name: legend_left,//props.legend_left,
        type: 'bar',
        yAxisIndex: 0,
        data: y_data_left,//props.yAxis_data_left
      },
      {
        name: legend_right,//props.legend_right,
        type: 'bar',
        yAxisIndex: 1,
        data: y_data_right,//props.yAxis_data_right
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

  // 指定图表的配置项和数据,并显示图表。
  updateChatCustom(props.xAxis_data, props.yAxis_data_left, props.yAxis_data_right, props.legend_left, props.legend_right)

  myChart.on('click', function(params) {
    console.log("value----"+params["value"])
    // window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
  });
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
      let yAxis_data_h = [] //身高
      let yAxis_data_w = [] //体重
      for (let i = 0; i < arr.length; i++) {
        let obj = {};
        console.log("ssssssss:"+arr[0][1])
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
              yAxis_data_h.push(item)
            }
            if(index == 2){
              yAxis_data_w.push(item)
            }
          }


        })
        list.push(obj);
      }

      xAxis_data.value = xAxis_data_array;
      yAxis_data_height.value = yAxis_data_h;
      yAxis_data_weight.value = yAxis_data_w;

      console.log('list:');
      console.log(list);

      console.log('xAxis_data:');
      console.log(xAxis_data);

      console.log('yAxis_data:');
      console.log(yAxis_data_height);
      console.log(yAxis_data_weight);
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


// 暴露给外界调用
defineExpose({updateChatCustom})

</script>

<template>
  <!--  <div ref="main" style="width: 100%; height: 400px"></div>-->
  <div style="background-color: cadetblue">
    <h1>sssss</h1>
  </div>
</template>