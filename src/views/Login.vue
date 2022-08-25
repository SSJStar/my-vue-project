<template>
  <div id="login" style="width: 100%;height: 100%;background-color: gray;position: relative">
<!--    position: fixed-->
<!--    text-align: right;justify-content: flex-end-->
    <div style="background-color: bisque;width: 100%;height: 100%;position: absolute;">
      <img src="@/assets/kejiBG.png" style="width: 100%;height: 100%; "/>
    </div>
<!--    <img src="@/assets/logo.png" style="width: 20%;height: 20%;position: absolute">-->
    <div style="background-color:#323bb6;width: 20%;height: 20%; position: absolute;z-index: 1">

      <h1 class="myH1">欢迎登录</h1>
      <input ref="uName" placeholder="请输入账号"/><br/>
      <input ref="pwd" placeholder="请输入密码"/><br/>
      <button @click="loginActionFunc">确 认</button>
    </div>
  </div>




<!--  <div id="outer-div" style="height:80px;width:100px;border: 1px solid red;position: relative;">-->
<!--    <div id="first-div" style="width:50%;height:100%;border-right: 2px solid #619e38;"></div>-->
<!--    <div id="cell-icon" style="border:1px solid blue; position: absolute; top: 50%; left: 50%; transform:translate(-50%, -50%); background-color: #fff;z-index:1; ">anFAicon</div>-->
<!--  </div>-->




<!--  <div class="title clear fwb" style="overflow:hidden;position:relative;width: 100%;height: 100%;background-color: #42b983">-->
<!--    <div class="author fl" style="color: red;overflow: hidden;position: absolute;top: 0px;right: 0px;">-->
<!--      当前在线人数：<label id="onlineusernum"></label>人-->
<!--    </div>-->
<!--  </div>-->
</template>

<script setup>

import router from "../router";
// import SSJButton from "@/components/SSJButton";
import {getRegisterCode, loginWithUNameAndPwd} from "@/api/api";
import {ref} from 'vue'
// export default {
  // components: {SSJButton},
  // methods: {
    function loginActionFunc(){
      // console.log("点击了按钮1:"+this.$refs.uName.value)
  const  e = ref(uName)
  console.log("点击了按钮1:"+e.value)
      // this.$emit()
      // alert("登录成功！即将跳转首页")
      // router.push("/home")

      // getRegisterCode({"username":this.$refs.uName.textContent}).then(
      //     (res) => {
      //       console.log("请求结束了\\n")
      //       console.log(res)
      //     }
      // ).catch((err) =>{
      //   console.log("请求错误信息："+ err)
      // })

      //开始请求
      loginWithUNameAndPwd({"username":this.$refs.uName.textContent, "password": this.$refs.pwd.textContent}).then(
          (res) => {
            console.log("请求结束了\\n")
            console.log(res)
          }
      ).catch((err) =>{
        console.log("请求错误信息："+ err)
      })

    }
  // }
// }



</script>

<style>
/* 定义样式：id="login" */
/*#login{*/
/*  background-color: slategray;*/
/*}*/
/* 定义样式：class="myH1" */
.myH1{
  color: cadetblue;
}






/*#outer-div {*/
/*  height:80px;*/
/*  width:100px;*/
/*  border: 1px solid red;*/
/*  position: relative;*/
/*}*/
/*#first-div {*/
/*  width:50%;*/
/*  height:100%;*/
/*  border-right: 2px solid #619e38*/
/*}*/
/*#cell-icon {*/
/*  border:1px solid blue;*/
/*  position: absolute;*/
/*  top: 50%;*/
/*  left: 50%;*/
/*  transform:translate(-50%, -50%);*/
/*  background-color: #fff;*/
/*  z-index:1;*/
/*}*/


</style>




<!--<template>-->
<!--  <div id="test">-->
<!--    <SSJButton title="测试一下" @btnClick="doSome" />-->
<!--  </div>-->

<!--</template>-->
<!--<script>-->
<!--import SSJButton from "../components/SSJButton";-->
<!--export default {-->
<!--  components: {SSJButton},-->
<!--  methods: {-->
<!--    doSome(val){-->
<!--      alert("父组件打印："+val)-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->




<!--&lt;!&ndash;    <p>&ndash;&gt;-->
<!--&lt;!&ndash;      <router-link to="home">进入首页</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;    </p>&ndash;&gt;-->

<!--&lt;!&ndash;    <el-row>&ndash;&gt;-->
<!--&lt;!&ndash;      <el-button type="primary">主要num按钮</el-button>&ndash;&gt;-->
<!--&lt;!&ndash;    </el-row>&ndash;&gt;-->

<!--&lt;!&ndash;    <SSJButton title="自定义按钮" @btnClick="customBtnAction"></SSJButton>&ndash;&gt;-->