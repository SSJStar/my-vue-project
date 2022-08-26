<template>
  <div id="login" style="width: 100%;height: 100%;background-color: gray;">

    <div id="backgroundDIV" >
      <img src="@/assets/kejiBG.png"/>
    </div>

    <div id="loginModuleDIV">
<!--      现在使用的框架是:vue3 + element-plus-->
      <h1 class="loginModuleDIV-title">欢迎登录</h1>
      <h2 class="loginModuleDIV-subtitle">第一个Vue3页面</h2>
      <input ref="uName" id="inputUname" placeholder="请输入账号"/><br/>
      <input ref="pwd" id="inputPwd" placeholder="请输入密码"/><br/>
<!--      <button @click="loginActionFunc">确 认</button>-->
<!--      customBtnAction-->
      <el-button id="loginModuleDIV-loginButton" type="primary" @click="loginActionFunc">登 录</el-button>
      <div style="width: 100%;height: auto">
        <button id="loginModuleDIV-registerButton" @click="registerActionFunc">注 册</button>
      </div>

    </div>
  </div>

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


/* backgroundDIV */
#backgroundDIV{
  background-color: bisque;
  width: 100%;
  height: 100%;
  position: absolute;
}

#backgroundDIV img{
  width: 100%;height: 100%;
}

/* loginModuleDIV 模块 */
#loginModuleDIV{
  /*background-color:#323bb6;*/

  /*! autoprefixer: ignore next */
  background:-webkit-gradient(linear, 100% 0, 0 0, from(rgb(58 96 199)), to(rgb(57 63 187)));

  width: 40%;height: 50%;
  position: absolute;
  top: 50%;
  left:50%;
  transform:translate(-50%,-50%);
  border-radius: 10px;/*设置四分之一圆角*/
  border: 0px solid rgb(255,255,255);/* border-radius要配合这句使用，否则输入框会出现内阴影*/
}


.loginModuleDIV-title{
  color: cadetblue;
  padding: 0;
  margin: 40px 0 0 0;
}

.loginModuleDIV-subtitle{
  color: cadetblue;
  padding: 0;
  margin: 30px 0 0 0;
}


#loginModuleDIV input{
  width: 90%;
  height: 40px;
  border-radius: 10px;/*设置四分之一圆角*/
  border: 0px solid rgb(255,255,255);/* border-radius要配合这句使用，否则输入框会出现内阴影*/
}
#inputUname{
  margin-top: 40px;
}
#inputPwd{
  margin-top: 20px;
}

#loginModuleDIV-loginButton{
 margin-top: 40px;
  width: 45%;
  height: 47px;
}

#loginModuleDIV-registerButton{
  left: 20px;
  margin-top: 40px;
  /*按钮设置透明：background-color + border-width */
  background-color: rgba(0,0,0,0);
  border-width: 0;
  /*height: 40px;*/
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




<!--&lt;!&ndash;    <p>&ndash;&gt;-->
<!--&lt;!&ndash;      <router-link to="home">进入首页</router-link>&ndash;&gt;-->
<!--&lt;!&ndash;    </p>&ndash;&gt;-->

<!--&lt;!&ndash;    <el-row>&ndash;&gt;-->
<!--&lt;!&ndash;      <el-button type="primary">主要num按钮</el-button>&ndash;&gt;-->
<!--&lt;!&ndash;    </el-row>&ndash;&gt;-->

<!--&lt;!&ndash;    <SSJButton title="自定义按钮" @btnClick="customBtnAction"></SSJButton>&ndash;&gt;-->
