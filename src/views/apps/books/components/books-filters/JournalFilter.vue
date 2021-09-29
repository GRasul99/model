<template>
  <v-autocomplete
    v-model="journalFilter"
    outlined
    dense
    label="Journal filter"
    :items="journalOptions"
    item-text="name"
    item-value="id"
  />
</template>

<script>
import _ from 'lodash'
import axios from '@/libs/axios'

export default {
  name: 'JournalFilter',
  data() {
    return {
      journalFilter: '',
      journalOptions: [],
      journalSearch: '',
    }
  },
  created() {
    this.fetchJournalOptions()
  },
  watch: {
    journalSearch: _.debounce(function journalSearch() {
      this.fetchUdcOptions()
    }, 500),
    journalFilter: _.debounce(function querySearch() {
      this.$emit('journal-filter', this.journalFilter)
    }, 1000),
  },
  methods: {
    async fetchJournalOptions() {
      const { data } = await axios.get('/library/journal/list/', {
        params: {
          search: this.journalSearch,
        },
      })
      this.journalOptions = data.results
    },
  },
}
</script>

<style scoped></style>
