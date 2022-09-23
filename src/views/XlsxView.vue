<template>
<div>
  <h1 @click="created">读取文件《高中二班女子800米成绩统计.xlsx》</h1><br>
  <h1 @click="ExportXlsx">导出数据到xlsx文件</h1>
</div>
</template>



<!--<script setup lang="ts">-->
<!--function dd(){-->
<!--  console.log("This is dd.")-->
<!--}-->

<!--const { proxy }: any = getCurrentInstance();-->
<!-- class OperateStepsPage {-->
<!--   private static jsUse: OperateStepsPage;-->
<!--   private operateStepsPage: OperateStepsPage | undefined;-->

<!--   // constructor(-->
<!--   //     public alertController: AlertController,-->
<!--   //     public activatedRoute: ActivatedRoute,-->
<!--   //     public router: Router,-->
<!--   //     public eventService: EventService,-->
<!--   // )-->

<!--   public init() {   // 做一个全局注册-->
<!--     OperateStepsPage.jsUse = this;-->
<!--     // 若下面window['operateStepsPage']提示：object access via string literals is disallowed（不允许通过字符串文本访问对象），可先定义再访问-->
<!--     // 若不提示错误，可省略定义：const operateStepsPage= 'operateStepsPage';直接window['operateStepsPage']-->
<!--     const operateStepsPage = 'operateStepsPage';-->
<!--     window['operateStepsPage'] = OperateStepsPage.jsUse;-->
<!--   }-->

<!--  public aa() {-->
<!--    console.log("This is aa.")-->
<!--    // proxy.$subDialog({-->
<!--    //   title: "title",-->
<!--    //   width: "550px",-->
<!--    //   option: {-->
<!--    //-->
<!--    //   },-->
<!--    //   cancelClick: () => {},-->
<!--    //   saveClick: async (val: any) => {-->
<!--    //     console.log(val)-->
<!--    //   },-->
<!--    // });-->
<!--  }-->
<!--}-->



<!--</script>-->

<!--<script setup>-->

<!--// import {getCurrentInstance} from "vue";-->
<!--// const currentInstance = getCurrentInstance()-->
<!--// const { proxy }: any = getCurrentInstance();-->

<!--// function bb() {-->
<!--//   console.log("This is bb.")-->
<!--//   require(this.aa())-->
<!--// }-->


<!--</script>-->






<script setup>

import axios from 'axios';
const XLSX = require('xlsx')
import transformSheets from './read_xlsx';
import {inject} from "vue";    //导入转制函数

// let emit = defineEmits("showSSJDialog")


let contentValue = {}

function created() {
  let url = "/高中二班女子800米成绩统计.xlsx"  //放在public目录下可以直接访问
  //读取二进制excel文件,参考https://github.com/SheetJS/js-xlsx#utility-functions
  axios.get(url, {responseType:'arraybuffer'}).then((res) => {
    let data = new Uint8Array(res.data);
    let wb = XLSX.read(data, {type:"array"});
    let sheets = wb.Sheets;
    let content = transformSheets(sheets); // 整理xlsx返回的数据
    contentValue = content  //  复制给contentValue
    console.log('content:');
    console.log(content);
    let list = [];
    let arr = content.slice(1);
    for (let i = 0; i < arr.length; i++) {
      let obj = {};
      arr[i].forEach((item, index) => {
        obj['data'+(index+1)] = item;
        if(index + 1 == 9){
          // obj['data'+(index+1)] = this.formatExcelDate(item);
          obj['data'+(index+1)] = formatExcelDate(item);
        }
      })
      list.push(obj);
    }
    console.log('list:');
    console.log(list);

  }).catch( err =>{
    // this.err = err;
    console.log("err is:"+err)
  })
}
  // 处理表格中的日期时间
  function formatExcelDate (numb, format = "-") {
    // 如果numb为空则返回空字符串
    if (!numb) {
      return "";
    }
    let time = new Date(new Date("1900-1-1").getTime() + (numb - 1) * 3600*24*1000);
    const year = time.getFullYear() + '';
    const month = time.getMonth() + 1 + '';
    const date = time.getDate();
    if (format && format.length === 1) {
      return year + format + (month < 10 ? '0' + month : month) + format + (date < 10 ? '0' + date : date)
    }
    return year + (month < 10 ? '0' + month : month) + (date < 10 ? '0' + date : date)
  }


// const tableData = ([
//   {
//     date: "2016-05-02",
//     name: "王小虎",
//     address: "上海市普陀区金沙江路 1518 弄",
//   },
//   {
//     date: "2016-05-04",
//     name: "王小虎",
//     address: "上海市普陀区金沙江路 1517 弄",
//   },
//   {
//     date: "2016-05-01",
//     name: "王小虎",
//     address: "上海市普陀区金沙江路 1519 弄",
//   },
//   {
//     date: "2016-05-03",
//     name: "王小虎",
//     address: "上海市普陀区金沙江路 1516 弄",
//   },
// ])

// const currentInstance = getCurrentInstance()
// const { proxy }: any = getCurrentInstance();

//接收父组件showSSJDialogKEY对应的函数
const injectMessage = inject("showSSJDialogKEY")



//将contentValue这个json变量，写入xlsx文件
const ExportXlsx = () => {
  // currentInstance.proxy.$forceUpdate()

  // currentInstance.proxy.$ssjDialog()
  // currentInstance.proxy.$ssjDialog({
  //   title: "title",
  //   width: "550px",
  //   option: {
  //
  //   },
  //   cancelClick: () => {},
  //   saveClick: async (val) => {
  //     console.log(val)
  //   },
  // });

  // this.aa()



  injectMessage("正在导出文件", "文件名")

  return

  // 创建工作表
  // const data = XLSX.utils.json_to_sheet(tableData)
  const data = XLSX.utils.json_to_sheet(contentValue)
  // 创建工作簿
  const wb = XLSX.utils.book_new()
  // 将工作表放入工作簿中
  XLSX.utils.book_append_sheet(wb, data, 'data')
  // 生成文件并下载
  XLSX.writeFile(wb, '新生成的文件.xlsx')
}
</script>