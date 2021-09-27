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
        <publication-main-parts @title="title(title)" />
      </v-tab-item>
      <v-tab-item>
        <identifiers />
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
      book: {},
    }
  },
  methods: {
    title(title) {
      this.book.title = title
    },
  },
}
</script>
