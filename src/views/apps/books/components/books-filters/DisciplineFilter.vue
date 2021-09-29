<template>
  <v-autocomplete
    v-model="disciplineFilter"
    outlined
    dense
    label="Discipline"
    :items="disciplineOptions"
    item-text="name"
    item-value="id"
  />
</template>

<script>
import _ from 'lodash'
import axios from '@/libs/axios'

export default {
  name: 'DisciplineFilter',
  data() {
    return {
      disciplineFilter: '',
      disciplineOptions: [],
      disciplineSearch: '',
    }
  },
  created() {
    this.fetchDisciplineOptions()
  },
  watch: {
    departmentSearch: _.debounce(function disciplineSearch() {
      this.fetchDisciplineOptions()
    }, 500),
    disciplineFilter: _.debounce(function querySearch() {
      this.$emit('discipline-filter', this.disciplineFilter)
    }, 1000),
  },
  methods: {
    async fetchDisciplineOptions() {
      const { data } = await axios.get('/library/discipline/list/', {
        params: {
          search: this.disciplineSearch,
        },
      })
      this.disciplineOptions = data.results
    },
  },
}
</script>
