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
      </v-row>
    </v-card>
    <v-card>
      <v-row>
        <v-col
          cols="12"
          offset-md="8"
          md="4"
        >
          <v-text-field
            v-model="search"
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
          <template #[`item.actions`]="{ item }">
            <v-icon
              small
              class="me-2"
              @click="editItem(item)"
            >
              {{ icons.mdiPencilOutline }}
            </v-icon>
            <v-icon
              small
              @click="deleteItem(item)"
            >
              {{ icons.mdiDeleteOutline }}
            </v-icon>
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
      { text: 'Authors' },
      { text: 'Udc', value: 'udc' },
      { text: 'Language', value: 'language' },
      { text: 'Pages', value: 'pages' },
      { text: 'Publication date', value: 'publication_date' },
      { text: 'Key words', value: 'key_words' },
      { text: 'Rating', value: 'rating' },
      { text: 'Image' },
      { text: 'Special book' },
      { text: 'Actions' },
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
