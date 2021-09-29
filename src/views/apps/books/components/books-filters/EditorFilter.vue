<template>
  <v-autocomplete
    v-model="editorFilter"
    outlined
    dense
    label="Editor"
    :items="editorOptions"
    item-text="name"
    item-value="id"
    :search-input.sync="editorSearch"
  >
  </v-autocomplete>
</template>

<script>
import _ from 'lodash'
import axios from '@/libs/axios'

export default {
  name: 'EditorFilter',
  data() {
    return {
      editorFilter: '',
      editorOptions: [],
      editorSearch: '',
    }
  },
  created() {
    this.fetchEditorOptions()
  },
  watch: {
    editorSearch: _.debounce(function editorSearch() {
      this.fetchEditorOptions()
    }, 500),
    editorFilter: _.debounce(function querySearch() {
      this.$emit('editor-filter', this.editorFilter)
    }, 1000),
  },
  methods: {
    async fetchEditorOptions() {
      const { data } = await axios.get('/library/udc/list/', {
        params: {
          search: this.editorSearch,
        },
      })
      this.editorOptions = data.results
    },
  },
}
</script>

<style scoped></style>
