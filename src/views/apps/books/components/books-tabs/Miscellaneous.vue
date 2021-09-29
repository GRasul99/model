<template>
  <v-card flat>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Editors</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-autocomplete id="title" v-model="editors" outlined dense placeholder="Editors" hide-details />
            <v-icon small class="cursor-pointer ml-2" color="success" @click="add">
              {{ icons.mdiPlusOutline }}
            </v-icon>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Publisher</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-autocomplete id="title" v-model="publisher" outlined dense placeholder="Publisher" hide-details />
            <v-icon small class="cursor-pointer" color="success" @click="add">
              {{ icons.mdiPlusOutline }}
            </v-icon>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Address</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field id="title" v-model="address" outlined dense placeholder="Address" hide-details />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Annotation</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field id="title" v-model="annote" outlined dense placeholder="Annotation" hide-details />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Note</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field id="title" v-model="note" outlined dense placeholder="Note" hide-details />
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiPlusOutline } from '@mdi/js'

export default {
  name: 'Miscellaneous',
  props: {
    propsEditors: {
      type: Array,
      default() {
        return []
      },
    },
    propsPublisher: {
      type: String,
      default: '',
    },
    propsAddress: {
      type: String,
      default: '',
    },
    propsAnnote: {
      type: String,
      default: '',
    },
    propsNote: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      icons: {
        mdiPlusOutline,
      },
      editors: this.propsEditors,
      publisher: this.propsPublisher,
      address: this.propsAddress,
      annote: this.propsAnnote,
      note: this.propsNote,
    }
  },
  watch: {
    editors(value) {
      this.$emit('editors', value)
    },
    publisher(value) {
      this.$emit('publisher', value)
    },
    address(value) {
      this.$emit('address', value)
    },
    annote(value) {
      this.$emit('annote', value)
    },
    note(value) {
      this.$emit('note', value)
    },
  },
  methods: {
    add() {},
  },
}
</script>

<style scoped></style>
