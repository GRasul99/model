<template>
  <v-container fluid>
    <v-tabs vertical class="elevation-1 rounded-lg">
      <v-tab>
        Publication main parts
      </v-tab>
      <v-tab>
        Identifiers
      </v-tab>
      <v-tab>
        Book fields
      </v-tab>
      <v-tab>
        PhD thesis
      </v-tab>
      <v-tab>
        Labors
      </v-tab>
      <v-tab>
        Miscellaneous
      </v-tab>
      <v-tab>
        Cross references
      </v-tab>
      <v-tab>
        Additional information
      </v-tab>
      <v-tab>
        Author rating
      </v-tab>
      <v-tab>
        Storage
      </v-tab>

      <v-tab-item>
        <publication-main-parts
          @title="title"
          @journal="journal"
          @volume="volume"
          @pages="pages"
          @languages="languages"
          @getDate="getDate"
        />
      </v-tab-item>
      <v-tab-item>
        <identifiers
          @doi="doi"
          @issn="issn"
          @pmid="pmid"
          @inventory-number="inventoryNumber"
          @isbn="isbn"
          @isbn2="isbn2"
        />
      </v-tab-item>
      <v-tab-item>
        <book-fields />
      </v-tab-item>
      <v-tab-item>
        <phd-thesis />
      </v-tab-item>
      <v-tab-item>
        <labors />
      </v-tab-item>
      <v-tab-item>
        <miscellaneous />
      </v-tab-item>
      <v-tab-item>
        <cross-references />
      </v-tab-item>
    </v-tabs>
    {{ book }}
  </v-container>
</template>

<script>
import { mdiAccountOutline, mdiLockOutline, mdiAccessPoint } from '@mdi/js'
import PublicationMainParts from '@/views/apps/books/components/books-tabs/PublicationMainParts.vue'
import Identifiers from '@/views/apps/books/components/books-tabs/Identifiers.vue'
import BookFields from '@/views/apps/books/components/books-tabs/BookFields.vue'
import PhdThesis from '@/views/apps/books/components/books-tabs/PhdThesis.vue'
import Labors from '@/views/apps/books/components/books-tabs/Labors.vue'
import Miscellaneous from '@/views/apps/books/components/books-tabs/Miscellaneous.vue'
import CrossReferences from '@/views/apps/books/components/books-tabs/CrossReferences.vue'

export default {
  name: 'BooksCreate',
  components: {
    CrossReferences,
    Miscellaneous,
    Labors,
    PhdThesis,
    BookFields,
    Identifiers,
    PublicationMainParts,
  },
  setup() {
    return {
      icons: {
        mdiAccountOutline,
        mdiLockOutline,
        mdiAccessPoint,
      },
    }
  },
  data() {
    return {
      book: {
        title: '',
        journal: '',
        volume: 0,
        pages: 0,
        languages: '',
        getDate: '',
      },
    }
  },
  methods: {
    title(value) {
      this.book.title = value
    },
    journal(value) {
      this.book.journal = value
    },
    volume(value) {
      this.book.volume = value
    },
    pages(value) {
      this.book.pages = value
    },
    languages(value) {
      this.book.languages = value
    },
    getDate(value) {
      this.book.getDate = value
    },
    doi(value) {
      this.book.doi = value
    },
    issn(value) {
      this.book.issn = value
    },
    pmid(value) {
      this.book.pmid = value
    },
    inventoryNumber(value) {
      this.book.inventoryNumber = value
    },
    isbn(value) {
      this.book.isbn = value
    },
    isbn2(value) {
      this.book.isbn2 = value
    },
  },
}
</script>
