<template>
  <v-autocomplete
    v-model="udcFilter"
    outlined
    dense
    label="Udc"
    :items="udcOptions"
    item-text="udc"
    item-value="id"
    :search-input.sync="udcSearch"
  >
    <template slot="item" slot-scope="{ item }"> {{ item.udc }} - {{ item.name }} </template>
  </v-autocomplete>
</template>

<script>
import _ from 'lodash'
import axios from '@/libs/axios'

export default {
  name: 'UDCFilter',
  data() {
    return {
      udcFilter: '',
      udcOptions: [],
      udcSearch: '',
    }
  },
  created() {
    this.fetchUdcOptions()
  },
  watch: {
    udcSearch: _.debounce(function udcSearch() {
      this.fetchUdcOptions()
    }, 500),
    udcFilter: _.debounce(function querySearch() {
      this.$emit('udc-filter', this.udcFilter)
    }, 1000),
  },
  methods: {
    async fetchUdcOptions() {
      const { data } = await axios.get('/library/udc/list/', {
        params: {
          search: this.udcSearch,
        },
      })
      this.udcOptions = data.results
    },
  },
}
</script>

<style scoped></style>
