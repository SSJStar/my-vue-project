<template>
  <div>

    <v-form-render :form-json="formJson" :form-data="formData" :option-data="optionData" ref="vFormRef">
    </v-form-render>
    <el-button type="primary" @click="submitForm">Submit</el-button>
  </div>
</template>



<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'

const formJson = reactive({"widgetList":[{"key":83617,"type":"grid","category":"container","icon":"grid","cols":[{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"key":42615,"type":"input","icon":"text-field","formItemFlag":true,"options":{"name":"input109875","label":"您的昵称","labelAlign":"","type":"text","defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"showPassword":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"prefixIcon":"","suffixIcon":"","appendButton":false,"appendButtonDisabled":false,"buttonIcon":"custom-search","onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"input109875"}],"options":{"name":"gridCol44113","hidden":false,"span":12,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-44113"}],"options":{"name":"grid80590","hidden":false,"gutter":12,"colHeight":null,"customClass":""},"id":"grid80590"},{"type":"grid","category":"container","icon":"grid","cols":[{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"key":56625,"type":"date","icon":"date-field","formItemFlag":true,"options":{"name":"date68160","label":"出生日期","labelAlign":"label-left-align","type":"date","defaultValue":null,"placeholder":"","columnWidth":"200px","size":"","autoFullWidth":true,"labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"clearable":true,"editable":false,"format":"YYYY-MM-DD","valueFormat":"YYYY-MM-DD","required":false,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"date68160"}],"options":{"name":"gridCol33989","hidden":false,"span":12,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-33989"}],"options":{"name":"grid109473","hidden":false,"gutter":12,"colHeight":null,"customClass":""},"id":"grid109473"},{"type":"grid","category":"container","icon":"grid","cols":[{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"key":109095,"type":"radio","icon":"radio-field","formItemFlag":true,"options":{"name":"radio69697","label":"性别","labelAlign":"","defaultValue":3,"columnWidth":"200px","size":"","displayStyle":"inline","buttonStyle":false,"border":false,"labelWidth":null,"labelHidden":false,"disabled":false,"hidden":false,"optionItems":[{"label":"男","value":1},{"label":"女","value":2}],"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"onCreated":"","onMounted":"","onChange":"","onValidate":""},"id":"radio69697"}],"options":{"name":"gridCol19247","hidden":false,"span":12,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-19247"}],"options":{"name":"grid34155","hidden":false,"gutter":12,"colHeight":null,"customClass":[]},"id":"grid34155"},{"type":"grid","category":"container","icon":"grid","cols":[{"type":"grid-col","category":"container","icon":"grid-col","internal":true,"widgetList":[{"key":38131,"type":"textarea","icon":"textarea-field","formItemFlag":true,"options":{"name":"textarea52928","label":"爱好","labelAlign":"","rows":3,"defaultValue":"","placeholder":"","columnWidth":"200px","size":"","labelWidth":null,"labelHidden":false,"readonly":false,"disabled":false,"hidden":false,"required":false,"requiredHint":"","validation":"","validationHint":"","customClass":[],"labelIconClass":null,"labelIconPosition":"rear","labelTooltip":null,"minLength":null,"maxLength":null,"showWordLimit":false,"onCreated":"","onMounted":"","onInput":"","onChange":"","onFocus":"","onBlur":"","onValidate":""},"id":"textarea52928"}],"options":{"name":"gridCol57275","hidden":false,"span":12,"offset":0,"push":0,"pull":0,"responsive":false,"md":12,"sm":12,"xs":12,"customClass":""},"id":"grid-col-57275"}],"options":{"name":"grid105264","hidden":false,"gutter":12,"colHeight":null,"customClass":""},"id":"grid105264"}],"formConfig":{"modelName":"formData","refName":"vForm","rulesName":"rules","labelWidth":80,"labelPosition":"left","size":"","labelAlign":"label-left-align","cssCode":"","customClass":[],"functions":"","layoutType":"PC","jsonVersion":3,"onFormCreated":"","onFormMounted":"","onFormDataChange":"","onFormValidate":""}})
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
</script>