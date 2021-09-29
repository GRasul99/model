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
          <u-d-c-filter @udc-filter="filterByUDC" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <type-filter @type-filter="filterByType" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <author-filter @author-filter="filterByAuthor" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <department-filter @department-filter="filterByDepartment" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field v-model="getDateFilter" outlined dense label="Date get" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field v-model="publicationYearFilter" outlined dense label="Publication year" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <copyright-mark-filter @copyright-mark-filter="filterByCopyrightMark" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <journal-filter @journal-filter="filterByJournal" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <discipline-filter @discipline-filter="filterByDiscipline" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <publisher-filter @publisher-filter="filterByPublisher" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <faculty-filter @faculty-filter="filterByFaculty" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <editor-filter @editor-filter="filterByEditor" />
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <language-filter @language-filter="filterByLanguage" />
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
        <v-col cols="12" offset-md="1" md="9">
          <v-card-text>
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
          </v-card-text>
        </v-col>
        <v-col cols="12" md="2">
          <v-card-text>
            <v-btn color="primary" :to="{ name: 'apps-books-create' }">
              Book create
            </v-btn>
          </v-card-text>
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
import UDCFilter from '@/views/apps/books/components/books-filters/UDCFilter.vue'
import TypeFilter from '@/views/apps/books/components/books-filters/TypeFilter.vue'
import AuthorFilter from '@/views/apps/books/components/books-filters/AuthorFilter.vue'
import DepartmentFilter from '@/views/apps/books/components/books-filters/DepartmentFilter.vue'
import CopyrightMarkFilter from '@/views/apps/books/components/books-filters/CopyrightMarkFilter.vue'
import JournalFilter from '@/views/apps/books/components/books-filters/JournalFilter.vue'
import DisciplineFilter from '@/views/apps/books/components/books-filters/DisciplineFilter.vue'
import PublisherFilter from '@/views/apps/books/components/books-filters/PublisherFilter.vue'
import FacultyFilter from '@/views/apps/books/components/books-filters/FacultyFilter.vue'
import EditorFilter from '@/views/apps/books/components/books-filters/EditorFilter.vue'
import LanguageFilter from '@/views/apps/books/components/books-filters/LanguageFilter.vue'

export default {
  name: 'BooksList',
  components: {
    LanguageFilter,
    EditorFilter,
    FacultyFilter,
    PublisherFilter,
    DisciplineFilter,
    JournalFilter,
    CopyrightMarkFilter,
    DepartmentFilter,
    AuthorFilter,
    TypeFilter,
    UDCFilter,
    BooksStatistics,
  },
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
    const specialBooksOptions = [
      { text: 'Yes', value: true },
      { text: 'No', value: false },
    ]
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
      items,
      headers,
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
      getDateFilter: null,
      publicationYearFilter: null,
      udcFilter: null,
      authorFilter: null,
      departmentFilter: null,
      journalFilter: null,
      disciplineFilter: null,
      publisherFilter: null,
      facultyFilter: null,
      editorFilter: null,
      languageFilter: null,
    }
  },
  watch: {
    search: _.debounce(function querySearch() {
      this.fetchBookList()
    }, 1000),
    publicationYearFilter: _.debounce(function querySearch() {
      this.fetchBookList()
    }, 1000),
    getDateFilter: _.debounce(function querySearch() {
      this.fetchBookList()
    }, 1000),
  },
  created() {
    this.fetchBookList()
  },
  methods: {
    filterByUDC(value) {
      this.udcFilter = value
      this.fetchBookList()
    },
    filterByType(value) {
      this.typeFilter = value
      this.fetchBookList()
    },
    filterByAuthor(value) {
      this.authorFilter = value
      this.fetchBookList()
    },
    filterByDepartment(value) {
      this.departmentFilter = value
      this.fetchBookList()
    },
    filterByCopyrightMark(value) {
      this.copyrightMarkFilter = value
      this.fetchBookList()
    },
    filterByJournal(value) {
      this.journalFilter = value
      this.fetchBookList()
    },
    filterByDiscipline(value) {
      this.disciplineFilter = value
      this.fetchBookList()
    },
    filterByPublisher(value) {
      this.publisherFilter = value
      this.fetchBookList()
    },
    filterByFaculty(value) {
      this.facultyFilter = value
      this.fetchBookList()
    },
    filterByEditor(value) {
      this.editorFilter = value
      this.fetchBookList()
    },
    filterByLanguage(value) {
      this.languageFilter = value
      this.fetchBookList()
    },
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
            type: this.typeFilter,
            author: this.authorFilter,
            department: this.departmentFilter,
            copyright_mark: this.copyrightMarkFilter,
            journal: this.journalFilter,
            discipline: this.disciplineFilter,
            publisher: this.publisherFilter,
            editor: this.editorFilter,
            language: this.languageFilter,
            publication_year: this.publicationYearFilter,
            date_get: this.getDateFilter,
          },
        })
        this.books = data.results
        this.totalBooks = data.count
        this.pageCount()
      } catch (error) {
        console.log(error.message)
      }
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
