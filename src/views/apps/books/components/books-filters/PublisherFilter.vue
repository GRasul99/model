<template>
  <v-autocomplete
    v-model="publisherFilter"
    outlined
    dense
    label="Publisher"
    :items="publisherOptions"
    item-value="id"
    item-text="name"
  />
</template>

<script>
import _ from 'lodash'
import axios from '@/libs/axios'

export default {
  name: 'PublisherFilter',
  data() {
    return {
      publisherFilter: '',
      publisherOptions: [],
      publisherSearch: '',
    }
  },
  created() {
    this.fetchPublisherOptions()
  },
  watch: {
    publisherSearch: _.debounce(function publisherSearch() {
      this.fetchPublisherOptions()
    }, 500),
    udcFilter: _.debounce(function querySearch() {
      this.$emit('udc-filter', this.udcFilter)
    }, 1000),
  },
  methods: {
    async fetchPublisherOptions() {
      const { data } = await axios.get('/library/publisher/list/', {
        params: {
          search: this.publisherSearch,
        },
      })
      this.publisherOptions = data.results
    },
  },
}
</script>
