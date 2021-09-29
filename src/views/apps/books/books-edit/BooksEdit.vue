<template>
  <v-container fluid v-if="loaded">
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
          :document-type="book.document_type"
          :propsTitle="book.title"
          :props-journal="book.journal"
          :props-volume="book.volume"
          :props-language="book.language"
          :props-created="book.created"
        />
      </v-tab-item>
      <v-tab-item>
        <identifiers
          :props-doi="book.doi"
          :props-issn="book.issn"
          :props-pmid="book.pmid"
          :props-inventory-number="book.inventory_number"
          :props-isbn="book.isbn"
          :props-isbn2="book.isbn2"
        />
      </v-tab-item>
      <v-tab-item>
        <book-fields
          :props-book-title="book.booktitle"
          :props-edition="book.edition"
          :props-chapter="book.chapter"
          :props-copyright-mark="book.copyright_mark"
        />
      </v-tab-item>
      <v-tab-item>
        <phd-thesis :props-school="book.school" />
      </v-tab-item>
      <v-tab-item>
        <labors :props-organization="book.organization" />
      </v-tab-item>
      <v-tab-item>
        <miscellaneous
          :props-editors="book.editors"
          :props-publisher="book.publisher"
          :props-address="book.address"
          :props-annote="book.annote"
          :props-note="book.note"
        />
      </v-tab-item>
      <v-tab-item>
        <cross-references :props-cross-references="book.crossref" />
      </v-tab-item>
      <v-tab-item>
        <additional-information
          :props-printed-book="book.printed_book"
          :props-e-book="book.e_book"
          :props-special-books="book.special_books"
          :props-faculty="book.faculty"
          :props-kafedra="book.kafedra"
          :props-discipline="book.discipline"
          :props-thumbnail="book.img"
          :props-file="book.file"
          :props-key-words="book.key_words"
          :props-quantity="book.quantity"
          :props-real-time-count="book.real_time_count"
          :props-price="book.price"
          :props-used="book.used"
          :props-rating="book.rating"
          :props-date-get="book.date_get"
        />
      </v-tab-item>
      <v-tab-item>
        <authors-rating :props-author-ranks="book.author_ranks" />
      </v-tab-item>
      <v-tab-item>
        <storage :props-storages="book.storage" />
      </v-tab-item>
    </v-tabs>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" @click="updateBook">
        Update book
      </v-btn>
    </v-card-actions>
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
import axios from '@/libs/axios'
import AdditionalInformation from '@/views/apps/books/components/books-tabs/AdditionalInformation.vue'
import AuthorsRating from '@/views/apps/books/components/books-tabs/AuthorsRating.vue'
import Storage from '@/views/apps/books/components/books-tabs/Storage.vue'

export default {
  name: 'BooksEdit',
  components: {
    Storage,
    AuthorsRating,
    AdditionalInformation,
    CrossReferences,
    Miscellaneous,
    Labors,
    PhdThesis,
    BookFields,
    Identifiers,
    PublicationMainParts,
  },
  created() {
    this.fetchBook()
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
      loaded: false,
      book: {},
    }
  },
  methods: {
    fetchBook() {
      this.laoded = false
      axios.get(`/library/book/${this.$route.params.id}`).then(response => {
        this.book = response.data
        this.loaded = true
      })
    },
    updateBook() {
      axios.post(`/library/book/${this.$route.params.id}`, this.book)
    },
  },
}
</script>
