// declare module "*.vue" {
//     import Vue from "vue";
//     export default Vue;
// }


declare module "*.vue" {
    import Vue from "vue";
    import  {defineComponent} from "vue";
    const Component: ReturnType<typeof defineComponent>;
    // @ts-ignore
    export default {Vue,Component};
}

declare module '@/views/read_xlsx.js'