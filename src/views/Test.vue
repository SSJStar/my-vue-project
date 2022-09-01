<!--<template>-->
<!--  <div id="test">-->
<!--    <v-form-render :form-json="formJson" :form-data="formData" :option-data="optionData" ref="vFormRef">-->
<!--    </v-form-render>-->
<!--    <el-button type="primary" @click="submitForm">Submit</el-button>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--import { ref, reactive } from 'vue'-->
<!--import { ElMessage } from 'element-plus'-->

<!--const formJson = reactive({"widgetList":[{"key":56625,"type":"date","icon":"date-field","formItemFlag":true,"options":{"name":"date68160","label":"date","labelAlign":"label-left-align","type":"date","defaultValue":null,"placeholder":"","columnWidth":"200px","size":"","autoFullWidth":true,"labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"editable":false,"format":"YYYY-MM-DD","valueFormat":"YYYY-MM-DD","required":false,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"date68160"},{"key":104089,"type":"card","category":"container","icon":"card","widgetList":[],"options":{"name":"card42878","label":"card","hidden":false,"folded":false,"showFold":true,"cardWidth":"100%","shadow":"never","customClass":[]},"id":"card42878"},{"key":50519,"type":"grid","category":"container","icon":"grid","cols":[{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"key":42615,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"input86274","label":"输入名字","labelAlign":"label-left-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input86274"},{"key":25539,"type":"static-text","icon":"static-text","formItemFlag":false,"options":{"name":"statictext45036","columnWidth":"200px","hidden":false,"textContent":"static text","customClass":[],"onCreated":"","onMounted":"","label":"static-text"},"id":"statictext45036"}],"options":{"name":"gridCol90469","hidden":false,"span":12,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":[]},"id":"grid-col-90469"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[],"options":{"name":"gridCol18273","hidden":false,"span":12,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-18273"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[],"options":{"name":"gridCol6651","hidden":false,"span":12,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-6651"}],"options":{"name":"grid29017","hidden":false,"gutter":12,"colHeight":null,"customClass":""},"id":"grid29017"}],"formConfig":{"modelName":"formData","refName":"vForm","rulesName":"rules","labelWidth":80,"labelPosition":"left","size":"","labelAlign":"label-left-align","cssCode":"","customClass":[],"functions":"","layoutType":"PC","jsonVersion":3,"onFormCreated":"","onFormMounted":"","onFormDataChange":""}})-->
<!--const formData = reactive({})-->
<!--const optionData = reactive({})-->
<!--const vFormRef = ref(null)-->

<!--const submitForm = () => {-->
<!--  vFormRef.value.getFormData().then(formData => {-->
<!--    // Form Validation OK-->
<!--    alert( JSON.stringify(formData) )-->
<!--  }).catch(error => {-->
<!--    // Form Validation failed-->
<!--    ElMessage.error(error)-->
<!--  })-->
<!--}-->
<!--// export default {-->
<!--//   name:"Test"-->
<!--// }-->
<!--</script>-->





<!--左侧菜单 - 点击展开/收起-->

<!--<template>-->

<!--  <el-container class="home_container">-->
<!--    &lt;!&ndash; 头部区域 &ndash;&gt;-->
<!--    <el-header>-->
<!--      <h1>{{ss}}</h1>-->
<!--      <div>-->
<!--        <img src="../assets/keji_bg.png" alt="" />-->
<!--        <span>电商后台管理系统</span>-->
<!--      </div>-->
<!--      <el-button type="info" @click="logout">退出</el-button>-->
<!--    </el-header>-->
<!--    &lt;!&ndash; 页面主体区域 &ndash;&gt;-->
<!--    <el-container>-->
<!--      &lt;!&ndash; 侧边栏 &ndash;&gt;-->
<!--      <el-aside :width="isCollapse ? '64px':'200px'">-->
<!--        <div class="toggle-button" @click="toggleCollapse">|||</div>-->
<!--        &lt;!&ndash; 侧边栏菜单区域 &ndash;&gt;-->
<!--        <el-menu active-text-color="#409Eff"-->
<!--                 background-color="#545c64"-->
<!--                 text-color="#fff" unique-opened :collapse="isCollapse" :collapse-transition="false">-->
<!--          &lt;!&ndash; 一级菜单 &ndash;&gt;-->
<!--          <el-submenu :index="item.id+''" v-for="item in menulist" :key="item.id">-->
<!--            &lt;!&ndash; 一级菜单模板区域 &ndash;&gt;-->
<!--            <template #title>-->
<!--              <el-icon :class="iconsObj[item.id]"></el-icon>-->
<!--              <span>{{item.authName}}</span>-->
<!--            </template>-->
<!--            &lt;!&ndash; 二级菜单 &ndash;&gt;-->
<!--            <el-menu-item :index="subItem.id+''" v-for="subItem in item.children" :key="subItem.id">-->
<!--              <template #title>-->
<!--                <el-icon><iconMenu /></el-icon>-->
<!--                <span>{{subItem.authName}}</span>-->
<!--              </template>-->
<!--            </el-menu-item>-->
<!--          </el-submenu>-->
<!--        </el-menu>-->
<!--      </el-aside>-->
<!--      &lt;!&ndash; 右侧内容主体区域 &ndash;&gt;-->
<!--      <el-main>Main</el-main>-->
<!--    </el-container>-->
<!--  </el-container>-->
<!--</template>-->


<!--&lt;!&ndash;<script>&ndash;&gt;-->
<!--&lt;!&ndash;export default {&ndash;&gt;-->
<!--&lt;!&ndash;  data () {&ndash;&gt;-->
<!--&lt;!&ndash;    return {&ndash;&gt;-->
<!--&lt;!&ndash;      isCollapse: false&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;  },&ndash;&gt;-->
<!--&lt;!&ndash;  created () {},&ndash;&gt;-->
<!--&lt;!&ndash;  methods: {&ndash;&gt;-->
<!--&lt;!&ndash;    // 点击按钮，切换菜单的折叠与展开&ndash;&gt;-->
<!--&lt;!&ndash;    toggleCollapse () {&ndash;&gt;-->
<!--&lt;!&ndash;      this.isCollapse = !this.isCollapse&ndash;&gt;-->
<!--&lt;!&ndash;    }&ndash;&gt;-->
<!--&lt;!&ndash;  }&ndash;&gt;-->
<!--&lt;!&ndash;}&ndash;&gt;-->
<!--&lt;!&ndash;</script>&ndash;&gt;-->



<!--<script setup>-->

<!--import {ref} from "vue";-->

<!--let ss = ref(123)-->
<!--let isCollapse = ref(false)-->

<!--function toggleCollapse() {-->

<!--  console.log("isCollapse&#45;&#45;改变前"+isCollapse.value)-->
<!--  isCollapse.value = !isCollapse.value-->
<!--  console.log("isCollapse&#45;&#45;改变后"+isCollapse.value)-->

<!--  console.log("ss&#45;&#45;改变前"+ss.value)-->
<!--  ss.value++-->
<!--  console.log("ss&#45;&#45;改变后"+ss.value)-->
<!--}-->
<!--</script>-->





<!--&lt;!&ndash;<style lang="less" scoped>&ndash;&gt;-->
<!--<style>-->
<!--.home_container {-->
<!--  height: 100%;-->
<!--}-->
<!--.el-header {-->
<!--  background-color: #363d40;-->
<!--  /*// 给头部设置一下弹性布局*/-->
<!--  display: flex;-->
<!--  /*// 让它贴标左右对齐*/-->
<!--  justify-content: space-between;-->
<!--  /*// 清空图片左侧padding*/-->
<!--  padding-left: 0;-->
<!--  /*// 按钮居中*/-->
<!--  align-items: center;-->
<!--  /*// 文本颜色*/-->
<!--  color: #fff;-->
<!--  /*// 设置文本字体大小*/-->
<!--  font-size: 20px;-->
<!--  /*// 嵌套*/-->
<!--  /*> div {*/-->
<!--  /*  // 弹性布局*/-->
<!--  /*  display: flex;*/-->
<!--  /*  // 纵向上居中对齐*/-->
<!--  /*  align-items: center;*/-->
<!--  /*  // 给文本和图片添加间距，使用类选择器*/-->
<!--  /*  span {*/-->
<!--  /*    margin-left: 15px;*/-->
<!--  /*  }*/-->
<!--  /*}*/-->
<!--}-->

<!--.el-aside {-->
<!--  background-color: #313743;-->

<!--}-->

<!--.el-aside .el-menu {-->
<!--  border-right: none;-->
<!--}-->
<!--.el-main {-->
<!--  background-color: #e9edf1;-->
<!--}-->
<!--.iconfont{-->
<!--  margin-right: 10px;-->
<!--}-->
<!--.toggle-button{-->
<!--  /*// 添加背景颜色*/-->
<!--  background-color: #4A5064;-->
<!--  /*// 设置文本大小*/-->
<!--  font-size:10px;-->
<!--  /*// 设置文本行高*/-->
<!--  line-height:24px;-->
<!--  /*// 设置文本颜色*/-->
<!--  color:#fff;-->
<!--  /*// 设置文本居中*/-->
<!--  text-align: center;-->
<!--  /*// 设置文本间距*/-->
<!--  letter-spacing: 0.2em;-->
<!--  /*// 设置鼠标悬浮变小手效果*/-->
<!--  cursor:pointer;-->
<!--}-->
<!--</style>-->










<!--第三种-->
<template>

    <el-col :span="12" class="menu-el-col">
      <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="4"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
      >
        <!--   Navigator One     -->
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>

      <!--   Navigator Two    -->
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>

        <!--   Navigator Three    -->
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>

        <!--   Navigator Four    -->
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>

        <!--   Navigator Five     -->
        <el-sub-menu index="5">
          <template #title>
            <el-icon><location /></el-icon>
            <span>地图</span>
          </template>
<!--
el-menu-item-group  组
el-menu-item        组下面的成员
-->
          <el-menu-item-group title="浙江">
            <el-menu-item index="5-1">杭州</el-menu-item>
            <el-menu-item index="5-2">台州</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="上海">
            <el-menu-item index="5-3">青浦区</el-menu-item>
          </el-menu-item-group>

        </el-sub-menu>


      </el-menu>

    </el-col>

</template>



<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>