<template>
  <div class="main-div">
<!--    <h1>这是主页（Main）</h1>-->
    <h1>当前页：{{route.query["title"]}}</h1>
  </div>
</template>


<script setup>

import {useRoute} from "vue-router";

const route=useRoute()
console.log("route.query:",route.query);
console.log("title:",route.query["title"]);

</script>

<style>

.main-div {
  width: 100%;
  height: 100%;
  background-color: burlywood;
  margin: 0;
  padding: 0;
}

.main-div h1 {
  padding: 0;
  margin-top: 0px;
}

</style>