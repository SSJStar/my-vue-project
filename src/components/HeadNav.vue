
<!--<template>-->
<!--&lt;!&ndash;  <suspense>&ndash;&gt;-->

<!--    <div>-->
<!--      <h1>这是Home.vue</h1>-->

<!--&lt;!&ndash;      <PersonInfo/>&ndash;&gt;-->
<!--&lt;!&ndash;      全局&ndash;&gt;-->
<!--      <GlobalView/>-->
<!--&lt;!&ndash;      局部&ndash;&gt;-->
<!--      <PartView/>-->
<!--    </div>-->

<!--&lt;!&ndash;  </suspense>&ndash;&gt;-->

<!--</template>-->

<!--<script>-->
<!--// @ is an alias to /src-->
<!--// import PersonInfo from '@/components/PersonInfoView'-->
<!--// 局部注册组件 - PersonInfo-->
<!--import PartView from '@/components/PartView'-->
<!--export  default {-->
<!--  components: {PartView},-->
<!--}-->
<!--</script>-->


<!--&lt;!&ndash;    <v-form-render :form-json="formJson" :form-data="formData" :option-data="optionData" ref="vFormRef">&ndash;&gt;-->
<!--&lt;!&ndash;    </v-form-render>&ndash;&gt;-->
<!--&lt;!&ndash;    <el-button type="primary" @click="submitForm">Submit</el-button>&ndash;&gt;-->
<!--&lt;!&ndash;    <Test></Test>&ndash;&gt;-->







<template>
  <div class="head-nav">
这是头部
    <el-page-header>
      <!-- Line 1 -->
      <template #breadcrumb />
      <!-- Line 2 -->
      <template #icon />
      <template #title />
      <template #content />
      <template #extra />
      <!-- Lines after 2 -->
      <template #default />
    </el-page-header>
  </div>
</template>

<script>

export default {
  name:'head-nav',
  components: {
    // HeadNav,
    // LeftMenu
  }
}
</script>

<style>
.head-nav{
  width: 100%;
  height: 71px;
  overflow: hidden;
  background-color: cadetblue;
}

</style>