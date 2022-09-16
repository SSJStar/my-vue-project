import staticVars from "@/statics/global";

class EchatConfig{
    // name: string
    // age: number
    // constructor(name: String, age: number) {
    //     this.name = ""
    //     this.age = 0
    // }


    // title: string
    // xAxis_data: Array           //x轴数据
    // yAxis_data_left: Array      //y轴数据 - 左边
    // yAxis_data_right:Array      //y轴数据 - 右边
    // legend_left: {type: String,default:""} //图例 - 左
    // legend_right: string        //图例 - 右
    // unit_left: string           //y轴数据 - 左边单位
    // unit_right: string          //y轴数据 - 右边单位

    // constructor(title:string ,xAxis_data: Array, yAxis_data_left: Array,yAxis_data_right: Array , legend_left: string,legend_right: string,unit_left: string, unit_right: string) {
    constructor(title ,xAxis_data, yAxis_data_left,yAxis_data_right , legend_left,legend_right,unit_left, unit_right) {
        this.title = title
        this.xAxis_data = xAxis_data
        this.yAxis_data_left = yAxis_data_left
        this.yAxis_data_right = yAxis_data_right
        this.legend_left = legend_left
        this.legend_right = legend_right
        this.unit_left = unit_left
        this.unit_right = unit_right
    }
}

export default EchatConfig