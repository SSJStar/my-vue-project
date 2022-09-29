<template>
  <button @click="openDemo" >打开弹窗11</button>
<!--  <ChildDemo></ChildDemo>-->
</template>

<script lang="ts" setup>
import ChildDemo from "@/components/t1/ChildDemo.vue";
import { useDialog } from "@/components/t1/useDialog";
import {Component, defineComponent } from "vue";

const { open } = useDialog();


const openDemo = () => {
  open({
    component: ChildDemo,
    options: { title: "弹窗demo" },
    params:{abc:'1'}
  }).then((msg: any)=>{
    console.log('关闭弹窗触发',msg)
  });
};
</script>