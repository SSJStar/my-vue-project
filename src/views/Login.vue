<template>
  <div id="login">
    <h1 class="myH1">欢迎登录</h1>
<!--    id="account"  id="pwd"  -->
<!--    <input ref="uName" placeholder="请输入账号"/>-->
<!--    <input ref="pwd" placeholder="请输入密码"/>-->
<!--    <button @click="loginActionFunc">确 认</button>-->
<!--    <p>-->
<!--      <router-link to="home">进入首页</router-link>-->
<!--    </p>-->
<!--    <el-row>-->
<!--      <el-button type="primary">主要num按钮</el-button>-->
<!--    </el-row>-->
<!--    <SSJButton title="自定义按钮" @btnClick="customBtnAction"></SSJButton>-->

<!--使用VForm3表单库-->
    <v-form-render :form-json="formJson" :form-data="formData" :option-data="optionData" ref="vFormRef">
    </v-form-render>
    <el-button type="primary" @click="submitForm">Submit</el-button>

  </div>

</template>

<script setup>

// import router from "../router";
// import SSJButton from "@/components/SSJButton";
// import {getRegisterCode} from "@/api/api";
//
// export default {
//   components: {SSJButton},
//   methods: {
//     loginActionFunc (){
//       console.log("点击了按钮1:"+this.$refs.uName.value)
//       // this.$emit()
//       // alert("登录成功！即将跳转首页")
//       // router.push("/home")
//
//       getRegisterCode({"username":this.$refs.uName.textContent}).then(
//           (res) => {
//             console.log("请求结束了\\n")
//             console.log(res)
//           }
//       ).catch((err) =>{
//         console.log("请求错误信息："+ err)
//       })
//
//     },
//     customBtnAction(val){
//       alert("父组件-SSJButton点击附带参数："+val)
//     }
//   }
// }

import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import {loginWithUNameAndPwd} from "@/api/api";

const formJson = reactive({"widgetList":[{"key":104100,ref:"accountInput","type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"input95445","label":"账号","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":true,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input95445"},{"key":104100,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"input71664","label":"密码","labelAlign":"","type":"password","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":true,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input71664"}],"formConfig":{"modelName":"formData","refName":"vForm","rulesName":"rules","labelWidth":80,"labelPosition":"left","size":"","labelAlign":"label-left-align","cssCode":"","customClass":[],"functions":"","layoutType":"PC","jsonVersion":3,"onFormCreated":"","onFormMounted":"","onFormDataChange":"","onFormValidate":""}})
const formData = reactive({})
const optionData = reactive({})
const vFormRef = ref(null)

const submitForm = () => {
  vFormRef.value.getFormData().then(formData => {
    // Form Validation OK
    // alert( JSON.stringify(formData) )
    let uName = formData.input95445
    let pwd = formData.input71664
    alert( "输入内容：用户名:" + uName + " 密码：" + pwd)


    //开始请求
    loginWithUNameAndPwd({"username":uName, "password": pwd}).then(
          (res) => {
            console.log("请求结束了\\n")
            console.log(res)
          }
      ).catch((err) =>{
        console.log("请求错误信息："+ err)
      })
  }).catch(error => {
    // Form Validation failed
    ElMessage.error(error)
  })
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
