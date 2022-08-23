<template>
  <div id="test">
    <v-form-render :form-json="formJson" :form-data="formData" :option-data="optionData" ref="vFormRef">
    </v-form-render>
    <el-button type="primary" @click="submitForm">Submit</el-button>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'

const formJson = reactive({"widgetList":[{"key":56625,"type":"date","icon":"date-field","formItemFlag":true,"options":{"name":"date68160","label":"date","labelAlign":"label-left-align","type":"date","defaultValue":null,"placeholder":"","columnWidth":"200px","size":"","autoFullWidth":true,"labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"editable":false,"format":"YYYY-MM-DD","valueFormat":"YYYY-MM-DD","required":false,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"date68160"},{"key":104089,"type":"card","category":"container","icon":"card","widgetList":[],"options":{"name":"card42878","label":"card","hidden":false,"folded":false,"showFold":true,"cardWidth":"100%","shadow":"never","customClass":[]},"id":"card42878"},{"key":50519,"type":"grid","category":"container","icon":"grid","cols":[{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"key":42615,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"input86274","label":"输入名字","labelAlign":"label-left-align","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":"","labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input86274"},{"key":25539,"type":"static-text","icon":"static-text","formItemFlag":false,"options":{"name":"statictext45036","columnWidth":"200px","hidden":false,"textContent":"static text","customClass":[],"onCreated":"","onMounted":"","label":"static-text"},"id":"statictext45036"}],"options":{"name":"gridCol90469","hidden":false,"span":12,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":[]},"id":"grid-col-90469"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[],"options":{"name":"gridCol18273","hidden":false,"span":12,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-18273"},{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[],"options":{"name":"gridCol6651","hidden":false,"span":12,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-6651"}],"options":{"name":"grid29017","hidden":false,"gutter":12,"colHeight":null,"customClass":""},"id":"grid29017"}],"formConfig":{"modelName":"formData","refName":"vForm","rulesName":"rules","labelWidth":80,"labelPosition":"left","size":"","labelAlign":"label-left-align","cssCode":"","customClass":[],"functions":"","layoutType":"PC","jsonVersion":3,"onFormCreated":"","onFormMounted":"","onFormDataChange":""}})
const formData = reactive({})
const optionData = reactive({})
const vFormRef = ref(null)

const submitForm = () => {
  vFormRef.value.getFormData().then(formData => {
    // Form Validation OK
    alert( JSON.stringify(formData) )
  }).catch(error => {
    // Form Validation failed
    ElMessage.error(error)
  })
}
// export default {
//   name:"Test"
// }
</script>