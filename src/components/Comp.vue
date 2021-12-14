<template>
  <div>
    state: {{ validateState }}
    <div>
      <el-input
        v-model="value"
        :suffix-icon="Search"
        show-word-limit
        :maxlength="10"
      />
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
      console.log('x', formItem.validateStatus)
      return formItem.validateState || ''
    })

    const value = ref(props.modelValue)
    watch(value, (v) => {
      ctx.emit('update:modelValue', v)
    })

    return {
      validateState,
      Search,
      value,
    }
  },
})
</script>
