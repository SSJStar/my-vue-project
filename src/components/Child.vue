<!--11111-->

<!--<template>-->
<!--  <div class="hello" style="width: 100%;height: 100%;">-->
<!--&lt;!&ndash;    <el-dialog title="提示"  width="30%" :before-close="close">&ndash;&gt;-->

<!--    <el-dialog title="提示"  width="300px">-->
<!--      <span>这是一段信息</span>-->
<!--      <template #footer>-->
<!--        <span class="dialog-footer">-->
<!--          <el-button @click="close">取 消</el-button>-->
<!--          <el-button type="primary" @click="confirm">确 定</el-button>-->
<!--        </span>-->
<!--      </template>-->
<!--    </el-dialog>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import {onMounted, ref, watch} from 'vue'-->

<!--export default {-->
<!--  props: {-->
<!--    visible: {-->
<!--      type: Boolean,-->
<!--      default: false-->
<!--    }-->
<!--  },-->

<!--  setup(props, ctx) {-->

<!--    onMounted(() => {-->
<!--      console.log("child.vue is do")-->
<!--    })-->

<!--    const dialogVisble = ref(false)-->

<!--    const close = () => {-->
<!--      ctx.emit("update:visible", false);-->
<!--    };-->

<!--    const confirm = () => {-->
<!--      console.log('你点击了确定按钮')-->
<!--      ctx.emit("update:visible", false);-->
<!--    }-->

<!--    watch(() => props.visible, (val) => {-->
<!--      console.log(props.visible, val);-->
<!--      dialogVisble.value = val-->
<!--    });-->

<!--    return {-->
<!--      dialogVisble,-->
<!--      confirm,-->
<!--      close-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->







<!--22222-->

<!--<template>-->
<!--  <transition name="dialog">-->
<!--    <div-->
<!--        class="modal-wrapper"-->
<!--        ref="dialogWrapperRef"-->
<!--        v-show="visibleDialog"-->
<!--        @click.self="handleWrapperClick"-->
<!--        @mousewheel.prevent.stop-->
<!--    >-->
<!--      <div-->
<!--          ref="dialogRef"-->
<!--          :class="['default-dialog', customClass]"-->
<!--          v-if="dialogRender"-->
<!--          @mousewheel.passive.stop-->
<!--      >-->
<!--        &lt;!&ndash; 对话框主体 &ndash;&gt;-->
<!--        <div class="modal-body">-->
<!--          <button-->
<!--              type="button"-->
<!--              class="close-btn"-->
<!--              aria-label="close"-->
<!--              v-if="displayClose"-->
<!--              @click="handleClose"-->
<!--          ></button>-->
<!--          &lt;!&ndash; 默认插槽 &ndash;&gt;-->
<!--          <slot></slot>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </transition>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--import { nextTick, watch, ref } from 'vue';-->

<!--const visibleDialog = ref(false);-->
<!--const dialogRender = ref(false);-->
<!--const dialogWrapperRef = ref<HTMLElement | null>(null);-->
<!--const dialogRef = ref<HTMLElement | null>(null);-->

<!--// 采用定义props接口-->
<!--interface Props {-->
<!--  visible?: boolean;-->
<!--  title?: string;-->
<!--  // 关闭弹窗前的回调（接收一个参数 done()）-->
<!--  beforeClose?: (updateVisible: () => void) => {};-->
<!--  modal?: boolean;-->
<!--  lockScroll?: boolean;-->
<!--  closeOnClickModal?: boolean | string;-->
<!--  displayClose?: boolean;-->
<!--  // 最大宽高-->
<!--  width?: string;-->
<!--  height?: string;-->
<!--  top?: string;-->
<!--  dark?: boolean;-->
<!--  customClass?: string;-->
<!--}-->

<!--// 采用ts专有声明，有默认值-->
<!--const props = withDefaults(defineProps<Props>(), {-->
<!--  visible: false,-->
<!--  title: '',-->
<!--  // 是否需要遮罩层-->
<!--  modal: true,-->
<!--  // 是否在 Dialog 出现时将 body 滚动锁定-->
<!--  lockScroll: true,-->
<!--  // 是否可以通过点击 modal 关闭 Dialog-->
<!--  closeOnClickModal: false,-->
<!--  // 是否显示右上角关闭按钮-->
<!--  displayClose: true,-->
<!--  top: '5vh',-->
<!--  // 主题颜色 - 高亮（默认） | 夜间-->
<!--  dark: false,-->
<!--  // 自定义类-->
<!--  customClass: ''-->
<!--});-->

<!--// 解构props-->
<!--const {-->
<!--  visible,-->
<!--  title,-->
<!--  beforeClose,-->
<!--  modal,-->
<!--  lockScroll,-->
<!--  closeOnClickModal,-->
<!--  displayClose,-->
<!--  width,-->
<!--  height,-->
<!--  top,-->
<!--  dark,-->
<!--  customClass,-->
<!--} = props;-->

<!--// 定义emit方法名称-->
<!--const emit = defineEmits(['close', 'open', 'update:visible']);-->

<!--// 监听visible改变-->
<!--watch(-->
<!--    () => props.visible,-->
<!--    (newVal) => {-->
<!--      if (newVal) {-->
<!--        visibleDialog.value = true;-->
<!--        dialogRender.value = true;-->
<!--        // 依据props修改样式-->
<!--        changeDialogStyle();-->
<!--        emit('open');-->
<!--      } else {-->
<!--        visibleDialog.value = false;-->
<!--        dialogRender.value = false;-->
<!--        emit('close');-->
<!--      }-->
<!--    }-->
<!--);-->

<!--const handleWrapperClick = () => {-->
<!--  if (typeof closeOnClickModal == 'boolean' && closeOnClickModal) {-->
<!--    handleClose();-->
<!--  }-->
<!--};-->

<!--// 处理关闭对话框，若存在beforeClose则调用-->
<!--const handleClose = () => {-->
<!--  if (typeof beforeClose === 'function') {-->
<!--    beforeClose(updateVisible);-->
<!--  } else {-->
<!--    updateVisible();-->
<!--  }-->
<!--};-->

<!--// 通知更新visible = false-->
<!--const updateVisible = () => {-->
<!--  emit('update:visible', false);-->
<!--};-->

<!--// 根据Props值修改Dialog样式-->
<!--const changeDialogStyle = async () => {-->
<!--  // lockScroll - 实现底层禁止滚动-->
<!--  // if (this.lockScroll) {-->
<!--  //   document.body.style['overflow'] = 'hidden'-->
<!--  // }-->
<!--  await nextTick(()=> {-->
<!--    const dialogWrapperStyle = dialogWrapperRef.value.style;-->
<!--    const dialogStyle = dialogRef.value.style;-->
<!--    if (width) {-->
<!--      dialogStyle.width = width;-->
<!--    }-->
<!--    if (height) {-->
<!--      dialogStyle.height = height;-->
<!--    }-->
<!--    // if (top) {-->
<!--    //   dialogStyle.marginTop = that.top-->
<!--    // }-->
<!--    // 实现无遮罩层-->
<!--    if (!modal) {-->
<!--      dialogWrapperStyle.background = 'transparent';-->
<!--    }-->
<!--  });-->
<!--};-->
<!--</script>-->

<!--<style lang="less" scoped>-->
<!--.modal-wrapper {-->
<!--  position: absolute;-->
<!--  top: 0;-->
<!--  bottom: 0;-->
<!--  right: 0;-->
<!--  left: 0;-->
<!--  background: rgba(0, 0, 0, 0.6);-->
<!--  z-index: 100;-->

<!--  // 默认样式-->
<!--  .default-dialog {-->
<!--    position: absolute;-->
<!--    border-radius: 5px;-->
<!--    color: #303952;-->
<!--    padding: 10px;-->
<!--    left: 50%;-->
<!--    top: 50%;-->
<!--    transform: translate(-50%, -50%);-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    justify-content: space-between;-->
<!--    min-width: 200px;-->
<!--    min-height: 100px;-->

<!--    .modal-body {-->
<!--      height: 100%;-->
<!--      position: relative;-->
<!--      .close-btn {-->
<!--        position: absolute;-->
<!--        right: 10px;-->
<!--        top: 10px;-->
<!--        height: 40px;-->
<!--        width: 40px;-->
<!--        background-color: transparent;-->
<!--        border-color: transparent;-->
<!--        padding: 0;-->
<!--        outline: none;-->
<!--        cursor: pointer;-->
<!--        text-align: center;-->
<!--        z-index: 1;-->
<!--        font-size: 0px;-->
<!--        display: block;-->
<!--        box-sizing: content-box;-->
<!--        &::before,-->
<!--        &::after {-->
<!--          content: '';-->
<!--          width: 40px;-->
<!--          height: 2px;-->
<!--          background: gray;-->
<!--          display: block;-->
<!--          transition: all 0.25s ease-in-out;-->
<!--        }-->
<!--        &::before {-->
<!--          transform: rotate(45deg);-->
<!--        }-->
<!--        &::after {-->
<!--          transform: translateY(-2px) rotate(-45deg);-->
<!--        }-->
<!--        &:hover::before,-->
<!--        &:hover::after {-->
<!--          background: #0a59f7;-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->

<!--/* 命名过渡动画 */-->
<!--.dialog-enter-active,-->
<!--.dialog-leave-active {-->
<!--  transition: all 0.3s ease;-->
<!--}-->
<!--.dialog-enter-from,-->
<!--.dialog-leave-to {-->
<!--  opacity: 0;-->
<!--}-->
<!--</style>-->



<template>
  <div>
    <el-button @click="showSSJDialog">点我弹窗</el-button>

    <SSJDialog ref="dialogRef"></SSJDialog>
  </div>
</template>

<script setup>
import SSJDialog from "@/components/SSJDialog"
import {getCurrentInstance, ref} from "vue";
// const currentInstance = getCurrentInstance()

// let showDialog = ref(false)
let dialogRef = ref(null)
function showSSJDialog() {
  console.log("showSSJDialog~~")
  // showDialog.value = true
  dialogRef.value.show(true, "正在导出文件", "文件名")
  // currentInstance.proxy.$forceUpdate()
}



</script>




