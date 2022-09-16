
<script setup>
import {onMounted, onBeforeMount} from "vue";
import * as echarts from "echarts";//  按需引入 echarts
import EchatConfig from "@/components/chats/chatClass";//引入自定义类EchatConfig

let myChart = null//图表对象

const emit = defineEmits(['click'])//声明接口

const props = defineProps({ //暴露属性
  config: EchatConfig
})

//有点类似于iOS里的viewDidload方法
onMounted(() => {
  initChart();
  // console.log("sssssss~~~"+props.config.title + +props.config.xAxis_data + +props.config.legend_left )
});


/**
 * 这个方法，会读取config的值，并再次绘制图表
 * -> 暴露给外界调用
 *
 * 作者: 小青龙
 * 时间：2022/09/16 14:06:45
 * @param config {EchatConfig}  配置信息，包含横、纵坐标的数据、标题，纵坐标的单位
 * @return {返回类型}
 */
function updateChatCustom(config){
  // 指定图表的配置项和数据
  let option = {
    title: {
      text: config.valueOf().title//'高中二班女子身高体重'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'cross' }
    },
    legend: {
      data: [config.valueOf().legend_left,config.valueOf().legend_right],//[props.legend_left,props.legend_right], //图例
    },
    xAxis: {
      data: config.valueOf().xAxis_data,//x_data,//props.xAxis_data,
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
        name: config.valueOf().legend_left,//legend_left,//props.legend_left,
        splitLine:{show:true},
        // nameLocation:"middle",
        // nameGap:170,
        axisLabel: {
          formatter: '{value} '+config.valueOf().unit_left//'{value} ml'
        }
      },
      {
        type:"value",
        name: config.valueOf().legend_right,//legend_right,//props.legend_right,
        splitLine:{show:true},
        // nameLocation:"right",
        // nameGap:150,
        axisLabel: {
          formatter: '{value} '+config.valueOf().unit_right//'{value} ml'
        }
      }
    ],
    series: [
      {
        name: config.valueOf().legend_left,//legend_left,//props.legend_left,
        type: 'bar',
        yAxisIndex: 0,
        data: config.valueOf().yAxis_data_left,//y_data_left,//props.yAxis_data_left
      },
      {
        name: config.valueOf().legend_right,//legend_right,//props.legend_right,
        type: 'bar',
        yAxisIndex: 1,
        data: config.valueOf().yAxis_data_right,//y_data_right,//props.yAxis_data_right
      }
    ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}

/**
 * 图表初始化方法
 *
 *  （包含->点击事件的实现）
 * 作者: 小青龙
 * 时间：2022/09/16 15:40:44
 */
function initChart() {
  // 基于准备好的dom，初始化echarts实例
  myChart = echarts.init(document.getElementById('main'));

  // 指定图表的配置项和数据,并显示图表。
  let conf = new EchatConfig(props.config.title, props.config.xAxis_data, props.config.yAxis_data_left, props.config.yAxis_data_right, props.config.legend_left, props.config.legend_right,'ml','斤')
  updateChatCustom(conf)

  // 点击事件
  myChart.on('click', function(params) {
    console.log("value----"+params["value"])
    // window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
  });
}

// 暴露给外界调用
defineExpose({updateChatCustom})

</script>

<template>
  <!--  <div ref="main" style="width: 100%; height: 400px"></div>-->
<!--  <div style="background-color: cadetblue">-->
<!--&lt;!&ndash;    <h1>sssss</h1>&ndash;&gt;-->
<!--  </div>-->
</template>