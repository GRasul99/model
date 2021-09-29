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
          @created="created"
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
        <book-fields
          @bookt-title="bookTitle"
          @edition="edition"
          @chapter="chapter"
          @udc="udc"
          @copyright-mark="copyrightMark"
        />
      </v-tab-item>
      <v-tab-item>
        <phd-thesis @school="school" />
      </v-tab-item>
      <v-tab-item>
        <labors @organization="organization" />
      </v-tab-item>
      <v-tab-item>
        <miscellaneous @editors="editors" @publisher="publisher" @address="address" @annote="annote" @note="note" />
      </v-tab-item>
      <v-tab-item>
        <cross-references @cross-references="crossReferences" />
      </v-tab-item>
      <v-tab-item>
        <additional-information
          @printed-book="printedBook"
          @e-book="eBook"
          @special-books="specialBooks"
          @faculty="faculty"
          @kafedra="kafedra"
          @discipline="discipline"
          @thumbnail="thumbnail"
          @file="file"
          @key-words="keyWords"
          @quantity="quantity"
          @real-time-count="realTimeCount"
          @price="price"
          @used="used"
          @rating="rating"
          @date-get="dateGet"
        />
      </v-tab-item>
      <v-tab-item>
        <authors-rating @author-rank="authorRank" />
      </v-tab-item>
      <v-tab-item>
        <storage @storage="storage" />
      </v-tab-item>
    </v-tabs>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" @click="createBook">
        Create book
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
  name: 'BooksCreate',
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
        volume: '',
        pages: 0,
        languages: '',
        created: '',
        doi: '',
        issn: '',
        pmid: '',
        inventory_number: '',
        isbn: '',
        isbn2: '',
        booktitle: '',
        edition: '',
        chapter: '',
        udc: '',
        copyright_mark: '',
        school: '',
        organization: '',
        editors: [],
        publisher: null,
        address: '',
        annote: '',
        note: '',
        crossref: [],
        printed_book: false,
        special_books: false,
        e_book: false,
        faculty: '',
        quantity: 0,
        real_time_count: 0,
        price: 0,
        rating: 0.0,
        used: 0,
        img: '',
        file: '',
        discipline: '',
        kafedra: '',
        key_words: '',
        date_get: '',
        author_ranks: [],
        storage: [],
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
    created(value) {
      this.book.created = value
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
    bookTitle(value) {
      this.book.book_title = value
    },
    edition(value) {
      this.book.edition = value
    },
    chapter(value) {
      this.book.chapter = value
    },
    udc(value) {
      this.book.udc = value
    },
    copyrightMark(value) {
      this.book.copyright_mark = value
    },
    school(value) {
      this.book.school = value
    },
    organization(value) {
      this.book.organization = value
    },
    editors(value) {
      this.book.editors.push(value)
    },
    publisher(value) {
      this.book.publisher = value
    },
    address(value) {
      this.book.address = value
    },
    annote(value) {
      this.book.annote = value
    },
    note(value) {
      this.book.note = value
    },
    crossReferences(value) {
      this.book.crossref = value
    },
    printedBook(value) {
      this.book.printed_book = value
    },
    eBook(value) {
      this.book.e_book = value
    },
    specialBooks(value) {
      this.book.special_books = value
    },
    faculty(value) {
      this.book.faculty = value
    },
    kafedra(value) {
      this.book.kafedra = value
    },
    discipline(value) {
      this.book.discipline = value
    },
    thumbnail(value) {
      this.book.img = value
    },
    file(value) {
      this.book.file = value
    },
    keyWords(value) {
      this.book.key_words = value
    },
    quantity(value) {
      this.book.quantity = value
    },
    realTimeCount(value) {
      this.book.real_time_count = value
    },
    price(value) {
      this.book.price = value
    },
    used(value) {
      this.book.used = value
    },
    rating(value) {
      this.book.rating = value
    },
    dateGet(value) {
      this.book.date_get = value
    },
    authorRank(value) {
      this.book.author_ranks = value
    },
    storage(value) {
      this.book.storage = value
    },
    createBook() {
      axios.post('/library/book/create/', this.book)
    },
  },
}
</script>
