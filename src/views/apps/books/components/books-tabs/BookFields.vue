<template>
  <v-card flat>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Book title</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field id="title" v-model="bookTitle" outlined dense placeholder="Book title" hide-details />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Edition</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field id="title" v-model="edition" outlined dense placeholder="Edition" hide-details />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Chapter</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field id="title" v-model="chapter" outlined dense placeholder="Chapter" hide-details />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">UDC</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field id="title" v-model="udc" outlined dense placeholder="UDC" hide-details />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Copyright mark</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field id="title" v-model="copyrightMark" outlined dense placeholder="Copyright mark" hide-details />
            <v-icon small color="warning" class="mx-2 cursor-pointer" @click.prevent="edit">
              {{ icons.mdiPencilOutline }}
            </v-icon>
            <v-icon small class="cursor-pointer" color="success" @click="add">
              {{ icons.mdiPlusOutline }}
            </v-icon>
            <v-icon small class="cursor-pointer ml-2">
              {{ icons.mdiDeleteOutline }}
            </v-icon>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiPlusOutline, mdiDeleteOutline, mdiPencilOutline } from '@mdi/js'

export default {
  name: 'BookFields',
  props: {
    propsBookTitle: {
      type: String,
      default: '',
    },
    propsEdition: {
      type: String,
      default: '',
    },
    propsChapter: {
      type: String,
      default: '',
    },
    propsCopyrightMark: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      icons: {
        mdiPlusOutline,
        mdiDeleteOutline,
        mdiPencilOutline,
      },
      bookTitle: this.propsBookTitle,
      edition: this.edition,
      chapter: this.chapter,
      udc: this.udc,
      copyrightMark: this.copyrightMark,
    }
  },
  methods: {
    add() {},
    edit() {},
  },
  watch: {
    bookTitle(value) {
      this.$emit('bookTitle', value)
    },
    edition(value) {
      this.$emit('edition', value)
    },
    chapter(value) {
      this.$emit('chapter', value)
    },
    udc(value) {
      this.$emit('udc', value)
    },
    copyrightMark(value) {
      this.$emit('copyrightMark', value)
    },
  },
}
</script>
