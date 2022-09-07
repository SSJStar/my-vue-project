
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
  <div class="home">
    <div>
      <HeadNav></HeadNav>
    </div>
<!--    <el-row>-->
      <div style="width: 100%;height: 100%;display: flex">
        <div class="left">
<!--          <LeftMenu style="background-color: gray;  width: 200px;  height: 100%;" @change="childFoldAction" ref="leftmenuRef"></LeftMenu>-->
          <LeftMenu @change="childFoldAction" ref="leftmenuRef" v-bind:foldOn_width="foldOnW" v-bind:foldOff_width="foldOffW"></LeftMenu>
        </div>
        <div class="router-div">
          <MainView></MainView>
<!--          <PersonInfoView></PersonInfoView>-->
        </div>
      </div>
<!--    </el-row>-->


  </div>
</template>

<!--<template>-->
<!--<div class="home">-->
<!--&lt;!&ndash;<HelloWorld msg="Welcome to Your Vue.js App"/>&ndash;&gt;\-->
<!--  <PersonInfoView></PersonInfoView>-->

<!--</div>-->
<!--</template>-->

<script>
import HeadNav from '../components/HeadNav'
import LeftMenu from '../components/LeftMenu'
// import {nextTick, reactive} from "vue/dist/vue";
// import HelloWorld from '@/components/HelloWorld.vue'
import PersonInfoView from '@/views/PersonInfoView.vue'
import MainView from '@/views/Main.vue'
export default {
  name:'Home',
  components: {
    HeadNav,
    LeftMenu,
    // HelloWorld
    MainView,
  },


//   const state = reactive({
//     hHeight: 0
//   })
//   nextTick(()=>{
//   state.hHeight = document.documentElement.clientHeight;
//   console.log(document.documentElement.clientHeight)
// })

}

</script>

<script setup>
import {ref} from "vue";
import staticVars from "@/statics/global";

//菜单-展开宽度
let foldOnW = staticVars.LEFTMENU_FOLDONW

//菜单-收起宽度
let foldOffW = staticVars.LEFTMENU_FOLDOFFW

//我晕，样式里不能直接使用右边的，所以这里定义一个常量接收，然后再使用
// 更诡异的是，直接使用staticVars.BACKGROUNBD_COLOR虽然会报错误，但是浏览器可以正常运行。。。
const leftMenuBgColor = staticVars.BACKGROUNBD_COLOR

//响应式变量，要这么写
let leftMenuWidth = ref('200px')

// 得到LeftMenu组件实例对象
const leftmenuRef = ref(null)

/**
 * LeftMenu组件折叠动作，会给当前组件发送change指令，最终会调用这个方法
 *
 * 作者: 小青龙
 * 时间：2022/09/05 16:41:10
 * @param value {boolean}  true表示展开，false表示收起
 * @return {void}
 */
function childFoldAction(value){
  if(value){
    console.log("这是响应子组件方法：展开");
    leftMenuWidth.value = foldOnW//同步更新LeftMenu宽度
  }else {
    console.log("这是响应子组件方法： 收起");
    leftMenuWidth.value = foldOffW//同步更新LeftMenu宽度
    // let b = currentInstance.appContext.config.globalProperties.$staticVars.leftMenu_foldOffW
  }
}

/**
 * 点击父组件按钮，触发这个方法
 *
 * 作者: 小青龙
 * 时间：2022/09/05 16:39:58
 * @return {void}
 */
function useChildMehtod(){
  // 调用LeftMenu组件的pubMethod方法，并传入参数 "外部参数12"
  leftmenuRef.value.pubMethod("外部参数123")
}

</script>

<style>

.home{
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;/*不加这句，高度不能铺满*/
}

.left {
  background-color: white;
  width: v-bind(leftMenuWidth);
  /*width: var(--global:leftWid);*/
  background-color: v-bind(leftMenuBgColor);
  height: 100%;
}

.router-div {
  /*width: v-bind(100% - leftMenuWidth);*/
  flex: 1;
  height: calc(100% - 71px);
  background-color: gray;
  /*position: relative;*/
}
</style>