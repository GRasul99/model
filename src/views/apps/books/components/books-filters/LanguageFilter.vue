<template>
  <v-autocomplete
    v-model="languageFilter"
    outlined
    dense
    label="Language"
    :items="languageOptions"
    item-text="udc"
    item-value="id"
    :search-input.sync="languageSearch"
  >
  </v-autocomplete>
</template>

<script>
import _ from 'lodash'
import axios from '@/libs/axios'

export default {
  name: 'LanguageFilter',
  data() {
    return {
      languageFilter: '',
      languageOptions: [],
      languageSearch: '',
    }
  },
  created() {
    this.fetchLanguageOptions()
  },
  watch: {
    languageSearch: _.debounce(function languageSearch() {
      this.fetchLanguageOptions()
    }, 500),
    languageFilter: _.debounce(function querySearch() {
      this.$emit('language-filter', this.languageFilter)
    }, 1000),
  },
  methods: {
    async fetchLanguageOptions() {
      const { data } = await axios.get('/library/language/list/', {
        params: {
          search: this.languageSearch,
        },
      })
      this.languageOptions = data.results
    },
  },
}
</script>

<style scoped></style>
