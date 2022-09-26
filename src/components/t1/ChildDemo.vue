<!--ChildDemo.vue -->
<template>
  <div id="ChildDemo">
    {{params}}

    <button @click="close('关闭了弹窗')" >关闭弹窗</button>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  close: (msg?: any) => void;
  params: any;
}>();
</script>