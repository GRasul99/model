<template>
  <v-autocomplete
    v-model="facultyFilter"
    outlined
    dense
    label="Faculty"
    :items="facultyOptions"
    item-text="name"
    item-value="id"
    :search-input.sync="facultySearch"
  >
  </v-autocomplete>
</template>

<script>
import _ from 'lodash'
import axios from '@/libs/axios'

export default {
  name: 'FacultyFilter',
  data() {
    return {
      facultyFilter: '',
      facultyOptions: [],
      facultySearch: '',
    }
  },
  created() {
    this.fetchFacultyOptions()
  },
  watch: {
    facultySearch: _.debounce(function facultySearch() {
      this.fetchFacultyOptions()
    }, 500),
    facultyFilter: _.debounce(function querySearch() {
      this.$emit('faculty-filter', this.facultyFilter)
    }, 1000),
  },
  methods: {
    async fetchFacultyOptions() {
      const { data } = await axios.get('/library/faculty/list/', {
        params: {
          search: this.facultySearch,
        },
      })
      this.facultyOptions = data.results
    },
  },
}
</script>

<style scoped></style>
