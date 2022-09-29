<!--ChildDemo.vue -->
<template>
  <div id="ChildDemo">
    {{params}}我搞定了

    <button @click="close('关闭了弹窗')" >关闭弹窗</button>
  </div>
</template>
<script lang="ts" setup>
import {Component, defineComponent } from "vue";
const props = defineProps<{
  close: (msg?: any) => void;
  params: any;
}>();

// export default defineComponent({
//
// })

// let Component: ReturnType<typeof  defineComponent>;

</script>