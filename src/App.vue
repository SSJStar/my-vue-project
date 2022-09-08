<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
<!--    <div>-->
<!--      <p>-->
<!--        If Element is successfully added to this project, you'll see an-->
<!--        <code v-text="'<el-button>'"></code>-->
<!--        below-->
<!--      </p>-->
<!--      <el-button>el-button</el-button>-->
<!--    </div>-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <router-view/>
<!--    <Login></Login>-->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Login from "@/views/Login";

export default {
  name: 'app',
  components: {
    Login,
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  /*margin: 0px;*/
  /*padding: 0px;*/
}
body{
  margin: 0px;
  padding: 0px;
}
</style>
