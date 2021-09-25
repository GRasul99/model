<template>
  <v-autocomplete
    v-model="udcFilter"
    outlined
    dense
    label="udc"
    :items="udcOptions"
    item-text="udc"
    item-value="udc"
    :search-input.sync="udcSearch"
  />
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'UDCFilter',
  setup() {
    const udcFilter = ref('')
    const udcOptions = ref([])
    const udcSearch = ref('')

    return {
      udcFilter,
      udcOptions,
      udcSearch,
    }
  },
}
</script>

<style scoped></style>
