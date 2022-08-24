<!--<template>-->
<!--  <div>-->
<!--    <h1>这是首页</h1>-->
<!--  </div>-->
<!--</template>-->

<!--<script></script>-->

<!--<style>-->
<!--</style>-->

<template>
<!--  <suspense>-->

    <div>
      <h1>这是Home.vue</h1>

<!--      <PersonInfo/>-->
<!--      全局-->
      <GlobalView/>
<!--      局部-->
      <PartView/>
    </div>

<!--  </suspense>-->

</template>

<script>

// @ is an alias to /src
// import PersonInfo from '@/components/PersonInfoView'
// 局部注册组件 - PersonInfo
import PartView from '@/components/PartView'
export  default {
  components: {PartView},
}


</script>


<!--    <v-form-render :form-json="formJson" :form-data="formData" :option-data="optionData" ref="vFormRef">-->
<!--    </v-form-render>-->
<!--    <el-button type="primary" @click="submitForm">Submit</el-button>-->
<!--    <Test></Test>-->