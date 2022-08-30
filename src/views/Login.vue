<template>
  <div id="login" style="width: 100%;height: 100%;background-color: gray;">

    <div id="backgroundDIV" >
      <img src="@/assets/keji_bg.png"/>
    </div>

    <div id="loginModuleDIV">
<!--      现在使用的框架是:vue3 + element-plus-->
      <h1 class="loginModuleDIV-title">欢迎登录</h1>
      <h2 class="loginModuleDIV-subtitle">现在讲解的是 - 图形验证码</h2>

<!--   账号   -->
      <div class="div-el-input" style="margin-top: 40px;">
        <el-input ref="uName" v-model="nameValue"  placeholder="请输入账号" :prefix-icon="Avatar"   @input="changeHandle($event)"></el-input>
      </div>

<!--   密码   -->
      <div class="div-el-input" style="margin-top: 20px;">
        <el-input v-model="pwdValue" placeholder="请输入密码"  :prefix-icon="Lock" @input="pwdChangeHandle($event)"></el-input>
      </div>

<!--   验证   -->
      <div class="div-el-input" style="margin-top: 20px;">
        <!-- 验证码输入框-->
        <el-input v-model="codeInputValue" placeholder="请输入验证码" :prefix-icon="Check" style="width: calc(100%  - 110px);vertical-align:middle;float: left;" @input="codeChangeHandle($event)"></el-input>
        <!--图形验证码-->
        <div class="login_code" @click="refreshCode">
          <imageValidate :contentWidth=100 :contentHeight=40 style="float: right"  :identifyCode="identifyCode"></imageValidate>
        </div>

      </div>
<!--登录按钮-->
      <div style="width: 100%;height: auto;display: flex;justify-content: center;">
      <el-button id="loginModuleDIV-loginButton" type="primary" @click="loginActionFunc">登 录</el-button>
      </div>
<!--      注册按钮-->
      <div style="width: auto;height: auto">
        <button id="loginModuleDIV-registerButton" @click="registerActionFunc">注 册</button>
      </div>

    </div>
  </div>

</template>


<script>
export default {
  data() {
    return {
      //这里一定要记得返回v-model中绑定的值！
      nameValue: '',
      pwdValue:'',
      codeInputValue:'',
    }
  }
}
</script>

<script setup>
import { Avatar, Lock, Check } from "@element-plus/icons-vue";
import imageValidate from "@/components/ssj-image-validate.vue";

// loginInput:{
//   let nameValue = "",
//       pwdValue = ""
// }

let nameValue = ""
let pwdValue = ""
let codeInputValue = ""

// 图形验证码
let identifyCodes = "1234567890"
let identifyCode = ref('3212')

import router from "../router";
// import SSJButton from "@/components/SSJButton";
import {getRegisterCode, loginWithUNameAndPwd} from "@/api/api";
import {getCurrentInstance, onMounted, ref} from 'vue'

// let codeInputRef = ref(null)


// const datab = getCurrentInstance();

let uName = ""

//登录按钮 - 点击
function loginActionFunc(){
      const  e = ref(uName)
  console.log("点击了按钮:"+e.value)
  //     let  uName = ref(null)
  console.log("账号:"+nameValue)
  console.log("密码:"+pwdValue.valueOf())


  console.log("输入的验证码:"+codeInputValue)

  if (codeInputValue == identifyCode.value) {
    alert("验证码-校验成功")
  }else {
    alert("您输入的验证码不对："+codeInputValue+"\t 应该是:"+identifyCode.value)
  }



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

      // //开始请求
      // loginWithUNameAndPwd({"username":this.$refs.uName.textContent, "password": this.$refs.pwd.textContent}).then(
      //     (res) => {
      //       console.log("请求结束了\\n")
      //       console.log(res)
      //     }
      // ).catch((err) =>{
      //   console.log("请求错误信息："+ err)
      // })

    }

//注册按钮-点击
function registerActionFunc(){
// console.log("注册模块，还没开始写")
  alert("注册模块，还没开始写")
}

//定义在方法外面，才有效
const currentInstance = getCurrentInstance()

//账号-内容变化
function changeHandle (e) { // input事件
  // console.log("changeHandle1:"+ document.getElementById('inputUname').value)
  console.log("changeHandle->nameValue:"+ nameValue +"\t e:"+e)
  currentInstance.proxy.$forceUpdate()
  nameValue = e
}

//密码-内容变化
function pwdChangeHandle (e) { // input事件
                            // console.log("changeHandle1:"+ document.getElementById('inputUname').value)
  console.log("pwdChangeHandle->pwdValue:"+ pwdValue +"\t e:"+e)
  currentInstance.proxy.$forceUpdate()
pwdValue = e
}

//验证码-内容变化
// let codeInput = ref(null)
function codeChangeHandle(e){


  // console.log("输入的验证码:"+codeInput.value)

  // console.log("codeChangeHandle->pwdValue:"+ codeInputValue +"\t e:"+ e +"\t 通过ref获取验证码："+codeInputRef.value)
  console.log("codeChangeHandle->pwdValue:"+ codeInputValue +"\t e:"+ e)
currentInstance.proxy.$forceUpdate()
  codeInputValue = e
}


//点击事件 - 刷新验证码
const refreshCode = () => {
  identifyCode.value = "";
  makeCode(identifyCodes, 4);
}
const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}
const makeCode = (o, l) => {
  for (let i = 0; i < l; i++) {
    identifyCode.value += o[
        randomNum(0, o.length)
        ];
  }
  console.log("刷新后验证码是:"+identifyCode.value)
}


// return {
//   codeInput,
//   childRef,//记得要返回子组件的ref，不然访问不到
// };

onMounted( ()=> {
  console.log("onMounted---codeInputRef---",codeInputValue.value)
});

</script>


<style>

/* 背景div */
#backgroundDIV{
  background-color: bisque;
  width: 100%;
  height: 100%;
  position: absolute;
}

/* 背景图片 */
#backgroundDIV img{
  width: 100%;height: 100%;
}

/* 登录模块 */
#loginModuleDIV{
  /*background-color:#323bb6;*/

  /*! autoprefixer: ignore next */
  background:-webkit-gradient(linear, 100% 0, 0 0, from(rgb(58 96 199)), to(rgb(57 63 187)));

  width: 40%;height: 65%;
  position: absolute;
  top: 50%;
  left:50%;
  transform:translate(-50%,-50%);
  border-radius: 10px;/*设置四分之一圆角*/
  border: 0px solid rgb(255,255,255);/* border-radius要配合这句使用，否则输入框会出现内阴影*/
}

/* 主标题 */
.loginModuleDIV-title{
  color: rgba(255,255,255,0.9);
  padding: 0;
  margin: 40px 0 0 0;
}

/* 副标题 */
.loginModuleDIV-subtitle{
  color: rgba(255,255,255,0.9);
  padding: 0;
  margin: 30px 0 0 0;
}

/*账号、密码div公共样式设置：*/
.div-el-input{
  width: 100%;padding: 0px 20px 0px 20px;box-sizing: border-box;
}

/*el-input内部实际上也用到了input组件，所以这里的设置，对账号和密码这两个el-input也有效果*/
#loginModuleDIV input{
  height: 40px;
  border-radius: 10px;/*设置四分之一圆角*/
  border: 0px solid rgb(255,255,255);/* border-radius要配合这句使用，否则输入框会出现内阴影*/
}

/*>>> .el-input__inner{*/
/*  width: 190px;*/
/*  height: 500px;*/
/*}*/

/*#inputPwd{*/
/*  !*margin-top: 20px;*!*/
/*  !*width: 200px;*!*/
/*}*/

/* 登录按钮 */
#loginModuleDIV-loginButton{
 margin-top: 48px;
  width: 45%;
  height: 47px;
  /*transform: translate(-50%,-50%)*/
}

/* 注册按钮 */
#loginModuleDIV-registerButton{
  margin-top: 27px;
  /*按钮设置透明：background-color + border-width */
  background-color: rgba(0,0,0,0);
  border-width: 0;
  color: rgba(57 157 189);
  font-weight: bold;
  font-size: 14px;
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


<!--图形验证码-->
<!--        <div style="width: 120px;height: 40px;display: inline-block;position: relative;">-->
<!--          <img src="@/assets/keji_bg.png" @click="imgValidateFunc($event)" style="width: calc(100% - 20px);height:100%;position: relative;left: 10px"/>-->
<!--          <label style="color: rgba(255, 255, 255, 0.9) ;left: 42%;top: 30%;position:absolute;">A F C</label>-->
<!--        </div>-->

<!--function imgValidateFunc(e){-->
<!--//切换验证码图片-->
<!--console.log("切换验证码图片");-->
<!--}-->