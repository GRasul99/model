<template>
  <v-autocomplete
    v-model="authorFilter"
    outlined
    dense
    label="Authors"
    :items="authorOptions"
    item-text="initial_name"
    item-value="id"
  />
</template>

<script>
import _ from 'lodash'
import axios from '@/libs/axios'

export default {
  name: 'AuthorFilter',
  data() {
    return {
      authorFilter: '',
      authorOptions: [],
      authorSearch: '',
    }
  },
  created() {
    this.fetchAuthorOptions()
  },
  watch: {
    authorSearch: _.debounce(function authorSearch() {
      this.fetchAuthorOptions()
    }, 500),
    authorFilter: _.debounce(function querySearch() {
      this.$emit('author-filter', this.authorFilter)
    }, 1000),
  },
  methods: {
    async fetchAuthorOptions() {
      const { data } = await axios.get('/library/author/list/', {
        params: {
          search: this.authorSearch,
        },
      })
      this.authorOptions = data.results
    },
  },
}
</script>
