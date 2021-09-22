<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <books-statistics />
      </v-col>
    </v-row>
    <v-card class="my-4 px-3">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-autocomplete
            v-model="udcFilter"
            outlined
            dense
            label="udc"
            :items="udcOptions"
            item-text="udc"
            item-value="udc"
            :search-input.sync="udcSearch"
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-autocomplete
            outlined
            dense
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-autocomplete
            outlined
            dense
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-autocomplete
            outlined
            dense
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-autocomplete
            outlined
            dense
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-autocomplete
            outlined
            dense
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-autocomplete
            outlined
            dense
          />
        </v-col>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
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
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
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
        <v-col
          cols="10"
          offset-md="8"
          md="4"
        >
          <v-text-field
            v-model="search"
            class="mr-6"
            :append-icon="icons.mdiMagnify"
            label="Search"
            single-line
            hide-details
            dense
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card>
    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="items"
          :items-per-page="itemsPerPage"
          :page.sync="currentPage"
          hide-default-footer
          @page-count="pageCount"
        >
          <template v-slot:item.authors="{ item }">
            <p
              v-for="author in item.authors"
              :key="author.id"
            >
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
                <v-btn
                  icon
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>
                    {{ icons.mdiDotsVertical }}
                  </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title>
                    <v-btn :to="{ name: 'apps-books-edit', params: { id: item.id } }">
                      <v-icon
                        small
                        class="mr-2 pl-0"
                      >
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
            <v-col
              lg="2"
              cols="3"
            >
              <v-select
                :value="itemsPerPage"
                :items="perPageOptions"
                label="Rows per page:"
                dense
                outlined
                hide-details
                @change="change"
              ></v-select>
            </v-col>

            <v-col
              lg="10"
              cols="9"
              class="d-flex justify-end"
            >
              <v-pagination
                v-model="currentPage"
                total-visible="7"
                :length="pageCount()"
                @input="fetchBooksList"
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
import { ref, onMounted, watch } from '@vue/composition-api'
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
    const specialBook = ref(null)
    const eBook = ref(null)
    const search = ref('')
    const currentPage = ref(1)
    const itemsPerPage = ref(10)
    const perPageOptions = ref([10, 30, 50])
    const totalBooks = ref(null)
    const udcFilter = ref('')
    const udcOptions = ref([])
    const udcSearch = ref('')
    const items = ref([])
    function pageCount() {
      return Math.ceil(totalBooks.value / itemsPerPage.value)
    }
    async function fetchBooksList() {
      try {
        const { data } = await axios.get('/library/book/list/', {
          params: {
            search: search.value,
            offset: (currentPage.value - 1) * itemsPerPage.value,
            limit: itemsPerPage.value,
            udc: udcFilter.value,
          },
        })
        items.value = data.results
        totalBooks.value = data.count
        pageCount()
      } catch (error) {
        console.log(error.message)
      }
    }
    function change(perPage) {
      itemsPerPage.value = perPage
      fetchBooksList()
    }
    async function fetchUdcOptions() {
      try {
        const { data } = await axios.get('/library/udc/list')
        udcOptions.value = data.results
      } catch (error) {
        console.log(error.message)
      }
    }
    onMounted(() => {
      fetchBooksList()
    })
    watch([search, udcFilter, itemsPerPage], () => {
      fetchBooksList()
    })

    return {
      icons: {
        mdiDotsVertical,
        mdiPencilOutline,
        mdiDeleteOutline,
        mdiMagnify,
        mdiBagPersonalOutline,
        mdiFlash,
      },
      change,
      eBook,
      specialBook,
      specialBooksOptions,
      filters,
      udcSearch,
      fetchUdcOptions,
      udcOptions,
      search,
      items,
      udcFilter,
      currentPage,
      fetchBooksList,
      headers,
      itemsPerPage,
      perPageOptions,
      pageCount,
      totalBooks,
    }
  },
}
</script>
