<template>
  <v-card flat>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="3">
          <label for="documentType">Document type</label>
        </v-col>
        <v-col cols="12" md="9">
          <v-autocomplete
            id="documentType"
            v-model="document_type"
            outlined
            dense
            placeholder="Document type"
            hide-details
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Title</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field id="title" v-model="title" outlined dense placeholder="Title" hide-details />
            <v-icon small color="warning" class="mx-2 cursor-pointer" @click.prevent="edit">
              {{ icons.mdiPencilOutline }}
            </v-icon>
            <v-icon small class="cursor-pointer" color="success" @click="add">
              {{ icons.mdiPlusOutline }}
            </v-icon>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Journal</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field id="title" v-model="journal" outlined dense placeholder="Journal" hide-details />
            <v-icon small class="cursor-pointer mx-2" color="success" @click.prevent="add">
              {{ icons.mdiPlusOutline }}
            </v-icon>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Volume</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field id="title" v-model="volume" outlined dense placeholder="First Name" hide-details />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Pages</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field id="title" v-model="pages" outlined dense placeholder="First Name" hide-details />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Language</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-autocomplete id="title" v-model="language" outlined dense placeholder="Language" hide-details />
            <v-icon small color="warning" class="mx-2 cursor-pointer" @click.prevent="edit">
              {{ icons.mdiPencilOutline }}
            </v-icon>
            <v-icon small class="cursor-pointer" color="success" @click="add">
              {{ icons.mdiPlusOutline }}
            </v-icon>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Date get</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field id="title" v-model="getDate" outlined dense placeholder="Language" hide-details />
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiPencilOutline, mdiPlusOutline } from '@mdi/js'

export default {
  name: 'PublicationMainParts',
  props: {
    documentType: {
      type: String,
      default: '',
    },
    propsTitle: {
      type: String,
      default: '',
    },
    propsJournal: {
      type: String,
      default: '',
    },
    propsVolume: {
      type: Number,
      default: 0,
    },
    propsPages: {
      type: Number,
      default: 0,
    },
    propsLanguage: {
      type: String,
      default: '',
    },
    propsGetDate: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      icons: {
        mdiPencilOutline,
        mdiPlusOutline,
      },
      document_type: this.documentType,
      title: this.propsTitle,
      journal: this.propsJournal,
      volume: this.propsVolume,
      pages: this.propsPages,
      language: this.propsLanguage,
      getDate: this.propsGetDate,
    }
  },
  methods: {
    edit() {
      console.log('here')
    },
    add() {
      console.log('here')
    },
  },
  watch: {
    title(value) {
      this.$emit('title', value)
    },
    journal(value) {
      this.$emit('journal', value)
    },
    volume(value) {
      this.$emit('volume', value)
    },
    pages(value) {
      this.$emit('pages', value)
    },
    language(value) {
      this.$emit('language', value)
    },
    getDate(value) {
      this.$emit('getDate', value)
    },
  },
}
</script>
