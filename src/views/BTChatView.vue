
<script setup>
import {ref, onMounted, onBeforeMount} from "vue";
//  按需引入 echarts
// import * as echarts from "echarts";
import transformSheets from './read_xlsx';

import DoubleHistogramView from '@/components/chats/DoubleHistogramView'
import EchatConfig from "@/components/chats/chatClass";


const main = ref(); // 使用ref创建虚拟DOM引用，使用时用main.value
const doubleHistogram = ref(null)

let  xAxis_data_value = ref(['正在初始化数据'])//x轴数据  数据加载中，请等待
let yAxis_data_left_value = ref([0])//y轴数据 - 左边
let yAxis_data_right_value = ref([0])//y轴数据 - 右边
let legend_left_value = ref("身高")//图例 - 左
let legend_right_value = ref("体重")//图例 - 右
let conf = new EchatConfig('高中二班女子身高体重',xAxis_data_value.value, yAxis_data_left_value.value, yAxis_data_right_value.value, legend_left_value.value, legend_right_value.value,'ml','斤')
let histogram_config = ref(conf)

// function fun1() {
//   return new Promise((resolve, reject) => {
//     try{
//       console.log('这里写fun1的逻辑')
//       resolve() //这个要实现
//     }catch (e) {
//       console.log('fun1异常逻辑')
//       reject()
//     }
//   })
// }
//
// function fun2() {
//   return new Promise((resolve, reject) => {
//     try{
//       //用setTimeout模拟耗时操作，比如网络请求
//       setTimeout(()=>{
//         console.log('这里写fun2的逻辑')
//         resolve() //这个要实现
//       },2000)
//
//     }catch (e) {
//       console.log('fun2异常逻辑')
//       reject()
//     }
//   })
// }

onMounted(() => {

  // Promise.all([fun1(), fun2()]).then(()=>{
  //   //中括号里所有方法执行完后，会进入这里
  //   console.log("中括号里所有方法执行完后，会进入这里")
  // })



  //readXlsxFile执行完，再执行then语句块
  Promise.all([readXlsxFile()]).then(()=>{
      console.log("开始二次渲染222")
      // 配置图表信息和展示数据，并调用updateChatCustom刷新图表
      conf = new EchatConfig('高中二班女子身高体重',xAxis_data_value.value, yAxis_data_left_value.value, yAxis_data_right_value.value, legend_left_value.value, legend_right_value.value,'ml','斤')
      console.log("xAxis_data_value.value---->"+xAxis_data_value.value)
      doubleHistogram.value.updateChatCustom(conf);
    }
  )

  // const promise = new Promise((resolve, reject) => {
  //   console.log(1)
  //   resolve()
  //   console.log(2)
  // })
  //
  // promise.then(() => {
  //   console.log(3)
  // })
  //
  // console.log(4)

});

// async function initMethod() {
//   //readXlsxFile是异步方法，用来读取xlsx文件（内部在获取完数据后，会执行updateChatCustom来刷新图表）
//  await readXlsxFile().then( ()=>{
//    console.log("then执行")
//  });
//  //
//   console.log("开始二次渲染111")
//   // 配置图表信息和展示数据，并调用updateChatCustom刷新图表
//   conf = new EchatConfig('高中二班女子身高体重',xAxis_data_value.value, yAxis_data_left_value.value, yAxis_data_right_value.value, legend_left_value.value, legend_right_value.value,'ml','斤')
//   console.log("xAxis_data_value.value---->"+xAxis_data_value.value)
//   doubleHistogram.value.updateChatCustom(conf);
// }



// function testMethod() {
//   console.log("---A")
//
//   // await fun1('Tom').then(name => {
//   //   console.log("---B")
//   // })
//   Promise.all([fun1()]).then(
//       console.log(100)
//   )
//   // fun1('Tom').then(name => {
//   //   console.log("---B")
//   // })
//
//   console.log("---C")
// }

// function fun1(name){
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       console.log("---D")
//       return name
//     },1500)
//     console.log("---E")
//   })
// }

// 读取xlsx文件
const XLSX = require('xlsx')
let contentValue = {}

 function readXlsxFile() {
  //模拟延迟加载 （setTimeout）
  // setTimeout(function (){

   return new Promise((resolve, reject) => {

     console.log("开始读取数据")
     let url = "/高中二班女子800米成绩统计.xlsx"  //放在public目录下可以直接访问
     //读取二进制excel文件,参考https://github.com/SheetJS/js-xlsx#utility-functions
     axios.get(url, {responseType: 'arraybuffer'}).then((res) => {
       let data = new Uint8Array(res.data);
       let wb = XLSX.read(data, {type: "array"});
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
         arr[i].forEach((item, index) => {
           obj['data' + (index + 1)] = item;
           if (index + 1 == 9) {
             obj['data' + (index + 1)] = formatExcelDate(item);
           }
           //第0行是标题 不需要遍历
           if (i > 0) {
             if (index == 0) {
               xAxis_data_array.push(item)
             }
             if (index == 1) {
               yAxis_data_h.push(item)
             }
             if (index == 2) {
               yAxis_data_w.push(item)
             }
           }
         })
         list.push(obj);
       }

       xAxis_data_value.value = xAxis_data_array;//x轴数据
       yAxis_data_left_value.value = yAxis_data_h;//y轴数据 - 左边
       yAxis_data_right_value.value = yAxis_data_w;//y轴数据 - 右边

       console.log("readXlsxFile执行完了")
       // console.log("开始二次渲染")
       // // 配置图表信息和展示数据，并调用updateChatCustom刷新图表
       // conf = new EchatConfig('高中二班女子身高体重',xAxis_data_value.value, yAxis_data_left_value.value, yAxis_data_right_value.value, legend_left_value.value, legend_right_value.value,'ml','斤')
       // doubleHistogram.value.updateChatCustom(conf);

       resolve()

     }).catch(err => {
       console.log("err is:" + err)

       reject()
     })
     // },2000)

   })

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
<!--    <DoubleHistogramView ref="doubleHistogram" :xAxis_data="xAxis_data_value"-->
<!--                         :yAxis_data_left="yAxis_data_left_value"-->
<!--                         :yAxis_data_right="yAxis_data_right_value"-->
<!--                         :legend_left= "legend_left_value"-->
<!--                         :legend_right="legend_right_value"></DoubleHistogramView>-->

<!--    <DoubleHistogramView ref="doubleHistogram" :config="histogram_config"></DoubleHistogramView>-->
    <DoubleHistogramView ref="doubleHistogram" :config="histogram_config"></DoubleHistogramView>

  </div>
</template>

