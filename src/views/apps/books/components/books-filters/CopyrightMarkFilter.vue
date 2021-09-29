<template>
  <v-autocomplete
    v-model="copyrightMarkFilter"
    outlined
    dense
    label="Copyright mark"
    :items="copyrightMarkOptions"
    item-value="id"
    item-text="name"
  />
</template>

<script>
import _ from 'lodash'
import axios from '@/libs/axios'

export default {
  name: 'CopyrightMarkFilter',
  data() {
    return {
      copyrightMarkFilter: '',
      copyrightMarkOptions: [],
      copyrightMarkSearch: '',
    }
  },
  created() {
    this.fetchCopyrightMarkOptions()
  },
  watch: {
    copyrightMarkSearch: _.debounce(function copyrightMarkSearch() {
      this.fetchCopyrightMarkOptions()
    }, 500),
    copyrightMarkFilter: _.debounce(function querySearch() {
      this.$emit('copyright-mark-filter', this.copyrightMarkFilter)
    }, 1000),
  },
  methods: {
    async fetchCopyrightMarkOptions() {
      const { data } = await axios.get('/library/copyright_mark/list/', {
        params: {
          search: this.copyrightMarkSearch,
        },
      })
      this.copyrightMarkOptions = data.results
    },
  },
}
</script>

<style scoped></style>
