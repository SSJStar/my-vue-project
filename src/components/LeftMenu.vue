<!--<template>-->
<!--  <el-row class="menu_page">-->
<!--    <el-col>-->
<!--      <el-menu-->
<!--          class="el-menu-vertical-demo"-->
<!--          background-color="#324057"-->
<!--          text-color="#fff"-->
<!--          active-text-color="#409eff"-->
<!--      >-->
<!--        <router-link to="/home">-->
<!--          <el-menu-item index="0">-->
<!--            <i class="fa fa-margin fa-server"></i>-->
<!--            <span slot="title">首页</span>-->
<!--          </el-menu-item>-->

<!--          <template v-for="item in items">-->
<!--            <el-submenu v-if="item.children" :index="item.path" :key="item.path">-->
<!--              <template slot="title">-->
<!--                <i :class="'fa fa-margin'+item.icon"></i>-->
<!--                <span slot="title">{{item.name}}</span>-->
<!--              </template>-->
<!--              <router-link v-for="(citem,cindex) in item.children" :to="citem.path" :key="cindex">-->
<!--                <el-menu-item :index="citem.path">-->
<!--                  <span slot="title">{{citem.name}}</span>-->
<!--                </el-menu-item>-->
<!--              </router-link>-->
<!--            </el-submenu>-->
<!--          </template>-->
<!--        </router-link>-->
<!--      </el-menu>-->
<!--    </el-col>-->
<!--  </el-row>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "left-menu",-->
<!--  data() {-->
<!--    return {-->
<!--      items: [-->
<!--        {-->
<!--          icon: "fa-money",-->
<!--          name: "资金管理",-->
<!--          path: "fund",-->
<!--          children: [{ path: "fundlist", name: "资金流水" }]-->
<!--        },-->
<!--        {-->
<!--          icon: "fa-asterisk",-->
<!--          name: "信息管理",-->
<!--          path: "info",-->
<!--          children: [{ path: "infoshow", name: "个人信息" }]-->
<!--        }-->
<!--      ]-->
<!--    };-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.menu_page{-->
<!--  position: fixed;-->
<!--  top: 71px;-->
<!--  left: 0;-->
<!--  min-height: 100%;-->
<!--  background-color: #324057;-->
<!--  z-index: 99;-->
<!--}-->
<!--.el-menu {-->
<!--  border: none;-->
<!--}-->
<!--.fa-margin {-->
<!--  margin-right: 5px;-->
<!--}-->
<!--.el-menu-vertical-demo:not(.el-menu&#45;&#45;collapse) {-->
<!--  width: 180px;-->
<!--  min-height: 400px;-->
<!--}-->

<!--.el-menu-vertical-demo {-->
<!--  width: 35px;-->
<!--}-->
<!--.el-submenu .el-menu-item {-->
<!--  min-width: 180px;-->
<!--}-->
<!--.hiddenDropdown,-->
<!--.hiddenDropname {-->
<!--  display: none;-->
<!--}-->
<!--a {-->
<!--  text-decoration: none;-->
<!--}-->
<!--</style>-->










<!--第2种-->

<!--<template>-->
<!--  <div>-->
<!--    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
<!--      <el-radio-button :label="false">展开</el-radio-button>-->
<!--      <el-radio-button :label="true">收起</el-radio-button>-->
<!--    </el-radio-group>-->
<!--    <el-menu default-active="zhuye" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">-->
<!--      <el-menu-item index="zhuye">-->
<!--        <span slot="title">主页</span>-->
<!--      </el-menu-item>-->
<!--      <el-submenu :index="item.id" v-for="(item,index) in items" :key="index">-->
<!--        <template slot="title">-->
<!--          <i class="el-icon-location"></i>-->
<!--          <span slot="title">{{item.name}}</span>-->
<!--        </template>-->
<!--        <el-submenu :index="sub.id" v-for="(sub,index) in item.subitem" :key="index">-->
<!--          <span slot="title">{{sub.name}}</span>-->
<!--          <el-menu-item :index="sun.id" v-for="(sun,index) in sub.subitem" :key="index">-->
<!--            {{sun.name}}-->
<!--          </el-menu-item>-->
<!--        </el-submenu>-->
<!--      </el-submenu>-->
<!--    </el-menu>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name:'NavMenu',-->
<!--  data() {-->
<!--    return {-->
<!--      isCollapse: false,-->
<!--      items:[-->
<!--        {-->
<!--          name:"一级菜单A",-->
<!--          id:"1",-->
<!--          subitem:[-->
<!--            {-->
<!--              name:"二级菜单A",-->
<!--              id:"1-1",-->
<!--              subitem:[-->
<!--                {-->
<!--                  name:"三级菜单A",-->
<!--                  id:"1-1-1"-->
<!--                },-->
<!--                {-->
<!--                  name:"三级菜单B",-->
<!--                  id:"1-1-2"-->
<!--                }-->
<!--              ]-->
<!--            },-->
<!--            {-->
<!--              name:"二级菜单B",-->
<!--              id:"1-2",-->
<!--              subitem:[-->
<!--                {-->
<!--                  name:"三级菜单A",-->
<!--                  id:"1-2-1"-->
<!--                },-->
<!--                {-->
<!--                  name:"三级菜单B",-->
<!--                  id:"1-2-2"-->
<!--                }-->
<!--              ]-->
<!--            }-->
<!--          ]-->
<!--        },-->
<!--        {-->
<!--          name:"一级菜单B",-->
<!--          id:"2",-->
<!--          subitem:[-->
<!--            {-->
<!--              name:"二级菜单A",-->
<!--              id:"2-1",-->
<!--              subitem:[-->
<!--                {-->
<!--                  name:"三级菜单A",-->
<!--                  id:"2-1-1"-->
<!--                },-->
<!--                {-->
<!--                  name:"三级菜单B",-->
<!--                  id:"2-1-2"-->
<!--                }-->
<!--              ]-->
<!--            }-->
<!--          ]-->
<!--        },-->
<!--        {-->
<!--          name:"一级菜单C",-->
<!--          id:"3",-->
<!--          subitem:[-->
<!--            {-->
<!--              name:"二级菜单A",-->
<!--              id:"3-1",-->
<!--              subitem:[-->
<!--                {-->
<!--                  name:"三级菜单A",-->
<!--                  id:"3-1-1"-->
<!--                },-->
<!--                {-->
<!--                  name:"三级菜单B",-->
<!--                  id:"3-1-2"-->
<!--                }-->
<!--              ]-->
<!--            }-->
<!--          ]-->
<!--        },-->
<!--      ]-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    handleOpen(key, keyPath) {-->
<!--      console.log(key, keyPath);-->
<!--    },-->
<!--    handleClose(key, keyPath) {-->
<!--      console.log(key, keyPath);-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--.el-menu-vertical-demo:not(.el-menu&#45;&#45;collapse) {-->
<!--  width: 280px;-->
<!--  min-height: 400px;-->
<!--}-->
<!--.el-submenu .el-menu-item {-->
<!--  padding: 0 15px;-->
<!--}-->
<!--</style>-->






<!--第三种-->
<!--<template>-->
<!--  -->
<!--    <el-col :span="12" class="menu-el-col">-->
<!--      <el-menu-->
<!--          active-text-color="#ffd04b"-->
<!--          background-color="#545c64"-->
<!--          class="el-menu-vertical-demo"-->
<!--          default-active="4"-->
<!--          text-color="#fff"-->
<!--          @open="handleOpen"-->
<!--          @close="handleClose"-->
<!--      >-->
<!--        &lt;!&ndash;   Navigator One     &ndash;&gt;-->
<!--        <el-sub-menu index="1">-->
<!--          <template #title>-->
<!--            <el-icon><location /></el-icon>-->
<!--            <span>Navigator One</span>-->
<!--          </template>-->
<!--          <el-menu-item-group title="Group One">-->
<!--            <el-menu-item index="1-1">item one</el-menu-item>-->
<!--            <el-menu-item index="1-2">item two</el-menu-item>-->
<!--          </el-menu-item-group>-->
<!--          <el-menu-item-group title="Group Two">-->
<!--            <el-menu-item index="1-3">item three</el-menu-item>-->
<!--          </el-menu-item-group>-->
<!--          <el-sub-menu index="1-4">-->
<!--            <template #title>item four</template>-->
<!--            <el-menu-item index="1-4-1">item one</el-menu-item>-->
<!--          </el-sub-menu>-->
<!--        </el-sub-menu>-->

<!--      &lt;!&ndash;   Navigator Two    &ndash;&gt;-->
<!--        <el-menu-item index="2">-->
<!--          <el-icon><icon-menu /></el-icon>-->
<!--          <span>Navigator Two</span>-->
<!--        </el-menu-item>-->

<!--        &lt;!&ndash;   Navigator Three    &ndash;&gt;-->
<!--        <el-menu-item index="3" disabled>-->
<!--          <el-icon><document /></el-icon>-->
<!--          <span>Navigator Three</span>-->
<!--        </el-menu-item>-->

<!--        &lt;!&ndash;   Navigator Four    &ndash;&gt;-->
<!--        <el-menu-item index="4">-->
<!--          <el-icon><setting /></el-icon>-->
<!--          <span>Navigator Four</span>-->
<!--        </el-menu-item>-->

<!--        &lt;!&ndash;   Navigator Five     &ndash;&gt;-->
<!--        <el-sub-menu index="5">-->
<!--          <template #title>-->
<!--            <el-icon><location /></el-icon>-->
<!--            <span>地图</span>-->
<!--          </template>-->
<!--&lt;!&ndash;-->
<!--el-menu-item-group  组-->
<!--el-menu-item        组下面的成员-->
<!--&ndash;&gt;-->
<!--          <el-menu-item-group title="浙江">-->
<!--            <el-menu-item index="5-1">杭州</el-menu-item>-->
<!--            <el-menu-item index="5-2">台州</el-menu-item>-->
<!--          </el-menu-item-group>-->
<!--          <el-menu-item-group title="上海">-->
<!--            <el-menu-item index="5-3">青浦区</el-menu-item>-->
<!--          </el-menu-item-group>-->

<!--        </el-sub-menu>-->


<!--      </el-menu>-->

<!--    </el-col>-->
<!--  -->
<!--</template>-->





<!--第四种-->

<template>
  <el-menu active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="4"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose">

      <el-sub-menu :index="item.parent_id" v-for="item in listJson.list" :key="item.parent_id">
        <template #title>
          <i class="el-icon-s-home"></i>
          <span class="caidan-auth">{{ item.title }}</span>
        </template>
        <el-menu-item :index="item2.index" v-for="item2 in item.children" :key="item2.id" @click="goUrl(item.title,item2.title,item2.index)">
          <i class="item.icons"></i>
          <span class="caidan-auth">{{ item2.menu_name }}</span>
        </el-menu-item>
      </el-sub-menu>

      </el-menu>
    </template>



    <!--<script lang="ts" setup>-->
<!--import {-->
<!--  Document,-->
<!--  Menu as IconMenu,-->
<!--  Location,-->
<!--  Setting,-->
<!--} from '@element-plus/icons-vue'-->
<!--const handleOpen = (key: string, keyPath: string[]) => {-->
<!--  console.log(key, keyPath)-->
<!--}-->
<!--const handleClose = (key: string, keyPath: string[]) => {-->
<!--  console.log(key, keyPath)-->
<!--}-->
<!--</script>-->


<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'


let listJson = {
  title:"列表数据",
  list:[
    {
      index:"1",
      iconName:"",
      title:"浙江",
      childrens:[
        {
          index:"1-1",
          parent_id: "1",
          iconName:"",
          title:"杭州",
          childrens:[]
        },
        {
          index:"1-2",
          parent_id: "1",
          iconName:"",
          title:"绍兴",
          childrens:[]
        },
        {
          index:"1-3",
          parent_id: "1",
          iconName:"",
          title:"宁波",
          childrens:[]
        },
        {
          index:"1-4",
          parent_id: "1",
          iconName:"",
          title:"台州",
          childrens:[]
        },
      ]
    },
    {
      index:"2",
      iconName:"",
      title:"上海",
      childrens:[]
    },
    {
      iconName:"3",
      title:"内蒙",
      childrens:[]
    },
  ]
}

function goUrl(title,title2,index){
  alert("点击"+index)
}


//key: string, keyPath: string[]
const handleOpen =(key, keyPath) => {
  console.log(key, keyPath)
}

//key: string, keyPath: string[]
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style>
/*.menu-el-col{*/
/*  width: 200px;*/
/*  height: calc();*/
/*}*/
</style>