<template>
  <div>
    state: {{ validateState }}
    <div>
      <el-input v-model="value" show-word-limit :maxlength="10" />
    </div>
  </div>
</template>
<script lang="ts">
import { useFormItem, ElInput } from 'element-plus'
import { computed, defineComponent, ref, watch } from 'vue'
import { Search } from '@element-plus/icons'

export default defineComponent({
  components: {
    ElInput,
  },
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  setup(props, ctx) {
    const { form, formItem } = useFormItem()
    const validateState = computed(() => {
      console.log('x ??', formItem?.validateState)
      return formItem?.validateState || ''
    })

    const value = ref(props.modelValue)
    watch(value, (v) => {
      ctx.emit('update:modelValue', v)
    })
    watch(
      () => props.modelValue,
      (v, p) => {
        if (v === p) return
        value.value = v
      }
    )

    return {
      validateState,
      Search,
      value,
    }
  },
})
</script>
