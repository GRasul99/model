<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <books-statistics />
      </v-col>
    </v-row>
    <v-card class="my-4 px-3">
      <v-row>
        <v-col cols="12" sm="6" md="3">
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
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-autocomplete v-model="typeFilter" outlined dense label="Type" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-autocomplete v-model="authorFilter" outlined dense label="Authors" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-autocomplete v-model="departmentFilter" outlined dense label="Department" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-autocomplete v-model="getDateFilter" outlined dense label="Date get" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-autocomplete v-model="copyrightMarkFilter" outlined dense label="Copyright mark" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-autocomplete v-model="publisherFilter" outlined dense label="Publisher" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-select
            v-model="eBook"
            label="E book"
            outlined
            dense
            :items="specialBooksOptions"
            item-text="text"
            item-value="value"
          />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-select
            v-model="specialBook"
            label="Special book"
            outlined
            dense
            :items="specialBooksOptions"
            item-text="text"
            item-value="value"
          />
        </v-col>
      </v-row>
    </v-card>
    <v-card>
      <v-row>
        <v-col cols="10" offset-md="8" md="4">
          <v-text-field
            v-model="search"
            class="mr-6"
            :append-icon="icons.mdiMagnify"
            label="Search"
            single-line
            hide-details
            dense
            outlined
          />
        </v-col>
        <v-col cols="2">
          <v-btn color="primary" :to="{ name: 'apps-books-create' }">
            Book create
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="books"
          :items-per-page="itemsPerPage"
          :page.sync="currentPage"
          hide-default-footer
          @page-count="pageCount"
        >
          <template v-slot:item.authors="{ item }">
            <p v-for="author in item.authors" :key="author.id">
              {{ author.initial_name }}
            </p>
          </template>
          <template v-slot:item.special_books="{ item }">
            <p v-if="item.special_books">
              Да
            </p>
            <p v-else>
              Нет
            </p>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-menu offset-y>
              <template #activator="{ on, attrs }">
                <v-btn icon v-bind="attrs" v-on="on">
                  <v-icon>
                    {{ icons.mdiDotsVertical }}
                  </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title>
                    <v-btn :to="{ name: 'apps-books-edit', params: { id: item.id } }">
                      <v-icon small class="mr-2 pl-0">
                        {{ icons.mdiPencilOutline }}
                      </v-icon>
                      Edit
                    </v-btn>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-data-table>
        <v-card-text class="pt-2">
          <v-row>
            <v-col lg="2" cols="3">
              <v-select
                :value="itemsPerPage"
                :items="perPageOptions"
                label="Rows per page:"
                dense
                outlined
                hide-details
                @change="change"
              />
            </v-col>

            <v-col lg="10" cols="9" class="d-flex justify-end">
              <v-pagination
                v-model="currentPage"
                total-visible="7"
                :length="pageCount()"
                @input="fetchBookList"
              ></v-pagination>
            </v-col>
          </v-row>
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {
  mdiDotsVertical,
  mdiPencilOutline,
  mdiDeleteOutline,
  mdiMagnify,
  mdiBagPersonalOutline,
  mdiFlash,
} from '@mdi/js'
import { ref } from '@vue/composition-api'
import _ from 'lodash'
import BooksStatistics from '@/views/apps/books/BooksStatistics.vue'
import axios from '@/libs/axios'

export default {
  name: 'BooksList',
  components: { BooksStatistics },
  setup() {
    const headers = [
      { text: 'Id', value: 'id' },
      { text: 'Title', value: 'title' },
      { text: 'Authors', value: 'authors' },
      { text: 'Udc', value: 'udc' },
      { text: 'Language', value: 'language' },
      { text: 'Pages', value: 'pages' },
      { text: 'Publication date', value: 'publication_date' },
      { text: 'Key words', value: 'key_words' },
      { text: 'Rating', value: 'rating' },
      { text: 'Image' },
      { text: 'Special book', value: 'special_books' },
      { text: 'Actions', value: 'actions' },
    ]
    const filters = [
      {
        id: 1,
        name: 'udc',
        items: 'udc',
        text: 'udc',
        value: 'udc',
      },
      {
        id: 2,
        name: 'type',
        items: 'type',
        text: 'type',
        value: 'type',
      },
    ]
    const specialBooksOptions = [
      { text: 'Yes', value: true },
      { text: 'No', value: false },
    ]
    const totalBooks = ref(null)
    const typeFilter = ref('')
    const authorFilter = ref('')
    const departmentFilter = ref('')
    const getDateFilter = ref('')
    const copyrightMarkFilter = ref('')
    const publisherFilter = ref('')
    const udcOptions = ref([])
    const items = ref([])

    return {
      icons: {
        mdiDotsVertical,
        mdiPencilOutline,
        mdiDeleteOutline,
        mdiMagnify,
        mdiBagPersonalOutline,
        mdiFlash,
      },
      specialBooksOptions,
      filters,
      udcOptions,
      items,
      typeFilter,
      authorFilter,
      departmentFilter,
      getDateFilter,
      copyrightMarkFilter,
      publisherFilter,
      headers,
      totalBooks,
    }
  },
  data() {
    return {
      isLoading: false,
      search: '',
      udcSearch: '',
      currentPage: 1,
      itemsPerPage: 30,
      perPageOptions: [30, 60, 100],
      books: [],
      totalBooks: 0,
      eBook: null,
      specialBook: null,
      udcFilter: null,
    }
  },
  watch: {
    search: _.debounce(function querySearch() {
      console.log(this.search)
      this.fetchBookList()
    }, 1000),
    udcSearch: _.debounce(function udcSearch() {
      this.fetchUdcOptions()
    }, 500),
    udcFilter() {
      this.fetchBookList()
    },
  },
  created() {
    this.fetchBookList()
    this.fetchUdcOptions()
  },
  methods: {
    async fetchBookList() {
      try {
        const { data } = await axios.get('/library/book/list/', {
          params: {
            search: this.search,
            offset: (this.currentPage - 1) * this.itemsPerPage,
            limit: this.itemsPerPage,
            e_book: this.eBook,
            special_books: this.specialBook,
            udc: this.udcFilter,
          },
        })
        this.books = data.results
        this.totalBooks = data.count
        this.pageCount()
      } catch (error) {
        console.log(error.message)
      }
    },
    async fetchUdcOptions() {
      const { data } = await axios.get('/library/udc/list/', {
        params: {
          search: this.udcSearch,
        },
      })
      this.udcOptions = data.results
    },
    pageCount() {
      return Math.ceil(this.totalBooks / this.itemsPerPage)
    },
    change(perPage) {
      this.itemsPerPage = perPage
    },
  },
}
</script>
