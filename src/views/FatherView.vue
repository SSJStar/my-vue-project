<template>
  <div style="background-color: cadetblue;width: 100%;height: 100%;position: absolute;">
    <button @click="useChildMethod" style="margin-top: 20px;margin-bottom: 30px;">点击调用子组件方法</button>
    <div>
      <ChildView ref="childViewRef" @fold="responseFold" foo="你好啊，子组件！" style="width: 200px;height:100px;background-color: burlywood;align-items: center;display: inline-block;"></ChildView>
    </div>


  </div>

</template>

<script setup>

import ChildView from "@/components/ChildView";
import {defineComponent, ref} from "vue";

function  responseFold(){
  console.log("我是父组件方法 -> responseFold")
}

// 定义与 ref 同名变量
const childViewRef = ref(null)

// //父组件 - 调用子组件方法
// function useChildMethod() {
//   // 调用子组件的方法
//   ref.value.doSth("111")
// }

const useChildMethod = () => {
  // 调用子组件的方法
  childViewRef.value.childViewMethod1("111")
}

</script>