<template>
  <ElForm :model="form" :rules="{ foo: [{ min: 10 }] }">
    <ElFormItem prop="foo" label="has suffix-icon">
      <div>
        <ElInput v-model="form.foo" :suffix-icon="Search" />
      </div>
    </ElFormItem>

    <ElFormItem prop="foo" label="no suffix-icon">
      <div>
        <ElInput v-model="form.foo" />
      </div>
    </ElFormItem>
  </ElForm>

  <p>showStatusIcon<ElSwitch v-model="showStatusIcon"></ElSwitch></p>
  <ElForm
    ref="ruleFormRef"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :status-icon="showStatusIcon"
    :model="ruleForm"
  >
    <ElFormItem label="Activity name" prop="name">
      <ElInput v-model="ruleForm.name" :suffix-icon="Search"></ElInput>
    </ElFormItem>
    <ElFormItem label="Activity zone" prop="region">
      <ElSelect v-model="ruleForm.region" placeholder="Activity zone">
        <ElOption label="Zone one" value="shanghai"></ElOption>
        <ElOption label="Zone two" value="beijing"></ElOption>
      </ElSelect>
    </ElFormItem>
    <ElFormItem label="Activity time" required>
      <ElCol :span="11">
        <ElFormItem prop="date1">
          <ElDatePicker
            v-model="ruleForm.date1"
            type="date"
            placeholder="Pick a date"
            style="width: 100%"
          ></ElDatePicker>
        </ElFormItem>
      </ElCol>
      <ElCol class="line" :span="2">-</ElCol>
      <ElCol :span="11">
        <ElFormItem prop="date2">
          <ElTimePicker
            v-model="ruleForm.date2"
            placeholder="Pick a time"
            style="width: 100%"
          ></ElTimePicker>
        </ElFormItem>
      </ElCol>
    </ElFormItem>
    <ElFormItem label="Instant delivery" prop="delivery">
      <ElSwitch v-model="ruleForm.delivery"></ElSwitch>
    </ElFormItem>
    <ElFormItem label="Activity type" prop="type">
      <ElCheckboxGroup v-model="ruleForm.type">
        <ElCheckbox label="Online activities" name="type"></ElCheckbox>
        <ElCheckbox label="Promotion activities" name="type"></ElCheckbox>
        <ElCheckbox label="Offline activities" name="type"></ElCheckbox>
        <ElCheckbox label="Simple brand exposure" name="type"></ElCheckbox>
      </ElCheckboxGroup>
    </ElFormItem>
    <ElFormItem label="Resources" prop="resource">
      <ElRadioGroup v-model="ruleForm.resource">
        <ElRadio label="Sponsorship"></ElRadio>
        <ElRadio label="Venue"></ElRadio>
      </ElRadioGroup>
    </ElFormItem>
    <ElFormItem label="Activity form" prop="desc">
      <ElInput v-model="ruleForm.desc" type="textarea"></ElInput>
    </ElFormItem>
    <ElFormItem>
      <ElButton type="primary" @click="submitForm">Create</ElButton>
      <ElButton @click="resetForm">Reset</ElButton>
    </ElFormItem>
  </ElForm>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import {
  ElInput,
  ElForm,
  ElFormItem,
  ElIcon,
  ElRadio,
  ElButton,
  ElCheckbox,
  ElCheckboxGroup,
  ElSwitch,
  ElRadioGroup,
  ElTimePicker,
  ElOption,
  ElSelect,
  ElDatePicker,
  ElCol,
} from 'element-plus'
import { Search } from '@element-plus/icons'
import Comp from './Comp.vue'
import Comp2 from './Comp2.vue'

const msg = ref('Hello World!')
console.log('sxx', Search)
const form = ref({
  foo: '1',
})

const ruleForm = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const ruleFormRef = ref<{
  validate: (cb: any) => void
  resetFields: () => void
} | null>(null)
const submitForm = () => {
  ruleFormRef.value?.validate((valid: any) => {
    if (valid) {
      alert('submit!')
    } else {
      console.log('error submit!!')
      return false
    }
  })
}

const resetForm = () => {
  ruleFormRef.value?.resetFields()
}

const rules = {
  name: [
    {
      required: true,
      message: 'Please input Activity name',
      trigger: 'blur',
    },
    {
      min: 3,
      max: 5,
      message: 'Length should be 3 to 5',
      trigger: 'blur',
    },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  desc: [
    {
      required: true,
      message: 'Please input activity form',
      trigger: 'blur',
    },
  ],
}

const showStatusIcon = ref(false)
</script>
