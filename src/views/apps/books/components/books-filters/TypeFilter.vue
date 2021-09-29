<template>
  <v-autocomplete
    v-model="typeFilter"
    outlined
    dense
    label="Type"
    :items="typeOptions"
    item-text="name"
    item-value="id"
    :search-input.sync="typeSearch"
  />
</template>

<script>
import _ from 'lodash'
import axios from '@/libs/axios'

export default {
  name: 'TypeFilter',
  data() {
    return {
      typeFilter: '',
      typeOptions: '',
      typeSearch: '',
    }
  },
  created() {
    this.fetchTypeOptions()
  },
  watch: {
    typeSearch: _.debounce(function typeSearch() {
      this.fetchTypeOptions()
    }, 500),
    typeFilter: _.debounce(function querySearch() {
      this.$emit('type-filter', this.typeFilter)
    }, 1000),
  },
  methods: {
    async fetchTypeOptions() {
      const { data } = await axios.get('/library/type/list/', {
        params: {
          search: this.typeSearch,
        },
      })
      this.typeOptions = data.results
    },
  },
}
</script>

<style scoped></style>
