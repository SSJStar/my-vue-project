<template>
  <div id="login">
    <h1 class="myH1">欢迎登录</h1>
    <input id="account" placeholder="请输入账号"/>
    <input id="pwd" placeholder="请输入密码"/>
    <button @click="loginActionFunc">确 认</button>
<!--    <p>-->
<!--      <router-link to="homeView">进入首页</router-link>-->
<!--    </p>-->
<!--    <el-row>-->
<!--      <el-button type="primary">主要num按钮</el-button>-->
<!--    </el-row>-->
<!--    <SSJButton title="自定义按钮" @btnClick="customBtnAction"></SSJButton>-->
  </div>

</template>

<script>

// import router from "../router";
import SSJButton from "@/components/SSJButton";
import {getRegisterCode} from "@/api/api";

export default {
  components: {SSJButton},
  methods: {
    loginActionFunc (){
      console.log("点击了按钮")
      // this.$emit()
      // alert("登录成功！即将跳转首页")
      // router.push("/home")

      getRegisterCode({"username":"13396551781"}).then(
          (res) => {
            console.log("请求结束了\\n")
            console.log(res)
          }
      ).catch((err) =>{
        console.log("请求错误信息："+ err)
      })

    },
    customBtnAction(val){
      alert("父组件-SSJButton点击附带参数："+val)
    }
  }
}

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
