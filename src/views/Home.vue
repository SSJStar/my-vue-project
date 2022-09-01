
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





<!--第二种-->

<template>
  <div class="index">
    <div>
      <HeadNav></HeadNav>
    </div>
    <div>
      <LeftMenu class="left"></LeftMenu>
    </div>
    <div class="router-div">
<!--      <component :is="HomeView"></component>-->
<!--      <HomeView></HomeView>-->
    </div>

  </div>
</template>

<script>
import HeadNav from '../components/HeadNav'
import LeftMenu from '../components/LeftMenu'
// import {nextTick, reactive} from "vue/dist/vue";
export default {
  name:'index',
  components: {
    HeadNav,
    LeftMenu,
    // PersonInfoView,
  }
  // data:{
  //   scrH:document.documentElement.clientHeight
  // }


//   const state = reactive({
//     hHeight: 0
//   })
//   nextTick(()=>{
//   state.hHeight = document.documentElement.clientHeight;
//   console.log(document.documentElement.clientHeight)
// })

}
</script>

<style>

.index{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;/*不加这句，高度不能铺满*/
}

.left {
  background-color: gray;
  width: 200px;
  height: 100%;
}

.router-div {
  width: calc(100% - 280px);
  height: calc(100% - 71px);
  background-color: gray;
}
</style>