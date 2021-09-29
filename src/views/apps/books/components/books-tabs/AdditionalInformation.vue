<template>
  <v-card flat>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="9">
          <div class="d-flex align-center justify-space-between">
            <v-checkbox v-model="printedBook" label="Printed book" />
            <v-checkbox v-model="eBook" label="E book" />
            <v-checkbox v-model="specialBooks" label="Speacial book" />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Faculty</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-autocomplete id="title" v-model="faculty" outlined dense placeholder="Faculty" hide-details />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Kafedra</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-autocomplete id="title" v-model="kafedra" outlined dense placeholder="Kafedra" hide-details />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Discipline</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-autocomplete id="title" v-model="discipline" outlined dense placeholder="Discipline" hide-details />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Thumbnail</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-file-input v-model="thumbnail" label="Thumbnail" outlined dense></v-file-input>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">File</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-file-input v-model="file" label="File" outlined dense></v-file-input>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Key words</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-textarea v-model="keyWords" label="Key words" outlined dense></v-textarea>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Quantity</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field v-model="quantity" label="Quantity" outlined dense></v-text-field>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Real time count</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field v-model="realTimeCount" label="Real time count" outlined dense></v-text-field>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Price</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field v-model="price" label="Price" outlined dense></v-text-field>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Used</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field v-model="used" label="Used" outlined dense></v-text-field>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Rating</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field v-model="rating" label="Rating" outlined dense></v-text-field>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Date get</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field v-model="dateGet" label="Date get" outlined dense></v-text-field>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'AdditionalInformation',
  props: {
    propsPrintedBook: {
      type: String,
      default: '',
    },
    propsEBook: {
      type: String,
      default: '',
    },
    propsSpecialBooks: {
      type: String,
      default: '',
    },
    propsFaculty: {
      type: String,
      default: '',
    },
    propsKafedra: {
      type: String,
      default: '',
    },
    propsDiscipline: {
      type: String,
      default: '',
    },
    propsThumbnail: {
      type: String,
      default: '',
    },
    propsFile: {
      type: String,
      default: '',
    },
    propsKeyWords: {
      type: String,
      default: '',
    },
    propsQuantity: {
      type: Number,
      default: 0,
    },
    propsRealTimeCount: {
      type: Number,
      default: 0,
    },
    propsPrice: {
      type: Number,
      default: 0,
    },
    propsUsed: {
      type: Number,
      default: 0,
    },
    propsRating: {
      type: Number,
      default: 0,
    },
    propsDateGet: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      printedBook: this.propsPrintedBook,
      eBook: this.propsEBook,
      specialBooks: this.propsSpecialBooks,
      faculty: this.propsFaculty,
      kafedra: this.propsKafedra,
      discipline: this.propsDiscipline,
      thumbnail: this.propsThumbnail,
      file: this.propsFile,
      keyWords: this.propsKeyWords,
      quantity: this.propsQuantity,
      realTimeCount: this.propsRealTimeCount,
      price: this.propsPrice,
      used: this.propsUsed,
      rating: this.propsRating,
      dateGet: this.propsDateGet,
    }
  },
  watch: {
    printedBook(value) {
      this.$emit('printedBook', value)
    },
    eBook(value) {
      this.$emit('eBook:', value)
    },
    specialBooks(value) {
      this.$emit('specialBooks', value)
    },
    faculty(value) {
      this.$emit('faculty', value)
    },
    kafedra(value) {
      this.$emit('kafedra', value)
    },
    discipline(value) {
      this.$emit('discipline', value)
    },
    thumbnail(value) {
      this.$emit('thumbnail', value)
    },
    file(value) {
      this.$emit('file', value)
    },
    keyWords(value) {
      this.$emit('keyWords', value)
    },
    quantity(value) {
      this.$emit('quantity', value)
    },
    realTimeCount(value) {
      this.$emit('realTimeCount', value)
    },
    price(value) {
      this.$emit('price', value)
    },
    used(value) {
      this.$emit('used', value)
    },
    rating(value) {
      this.$emit('rating', value)
    },
    dateGet(value) {
      this.$emit('dateGet', value)
    },
  },
}
</script>

<style scoped></style>
