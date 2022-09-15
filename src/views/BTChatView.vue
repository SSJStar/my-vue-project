
<script setup>
import {ref, onMounted, onBeforeMount} from "vue";
//  按需引入 echarts
import * as echarts from "echarts";
import transformSheets from './read_xlsx';

import DoubleHistogramView from '@/components/chats/DoubleHistogramView'

const main = ref(); // 使用ref创建虚拟DOM引用，使用时用main.value
const doubleHistogram = ref(null)

let  xAxis_data_value = ref(['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'])//x轴数据  数据加载中，请等待
let yAxis_data_left_value = ref([5, 20, 36, 10, 10, 20])//y轴数据 - 左边
let yAxis_data_right_value = ref([5, 20, 36, 10, 10, 20])//y轴数据 - 右边
let legend_left_value = ref("身高")//图例 - 左
let legend_right_value = ref("体重")//图例 - 右

onBeforeMount(()=>{

})
onMounted(() => {
  // init();
  // //readXlsxFile是异步方法，但是内部在获取完数据后，会执行updateChatCustom来刷新图标
  readXlsxFile();
});

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

      xAxis_data_value.value = xAxis_data_array;//x轴数据
      yAxis_data_left_value.value = yAxis_data_h;//y轴数据 - 左边
      yAxis_data_right_value.value = yAxis_data_w;//y轴数据 - 右边

      // console.log('list:');
      // console.log(list);
      //
      // console.log('xAxis_data:');
      // console.log(xAxis_data);
      //
      // console.log('yAxis_data:');
      // console.log(yAxis_data_height);
      // console.log(yAxis_data_weight);
      // console.log("list1--"+ list[0]" ");
      console.log("开始二次渲染")

      doubleHistogram.value.updateChatCustom();

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
  <div id="main" style="width: 600px;height:400px;">
    <DoubleHistogramView ref="doubleHistogram" :xAxis_data="xAxis_data_value"
                         :yAxis_data_left="yAxis_data_left_value"
                         :yAxis_data_right="yAxis_data_right_value"
                         :legend_left= "legend_left_value"
                         :legend_right="legend_right_value"></DoubleHistogramView>
  </div>
</template>

