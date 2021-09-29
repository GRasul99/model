<template>
  <v-autocomplete v-model="departmentFilter" outlined dense label="Department" :items="departmentOptions" />
</template>

<script>
import _ from 'lodash'
import axios from '@/libs/axios'

export default {
  name: 'DepartmentFilter',
  data() {
    return {
      departmentFilter: '',
      departmentOptions: [],
      departmentSearch: '',
    }
  },
  created() {
    this.fetchDepartmentOptions()
  },
  watch: {
    departmentSearch: _.debounce(function departmentSearch() {
      this.fetchDepartmentOptions()
    }, 500),
    departmentFilter: _.debounce(function querySearch() {
      this.$emit('department-filter', this.departmentFilter)
    }, 1000),
  },
  methods: {
    async fetchDepartmentOptions() {
      const { data } = await axios.get('/library/department/list/', {
        params: {
          search: this.departmentSearch,
        },
      })
      this.departmentOptions = data.results
    },
  },
}
</script>
