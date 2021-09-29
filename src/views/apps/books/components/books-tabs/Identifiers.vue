<template>
  <v-card flat>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">DOI</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field id="title" v-model="doi" outlined dense placeholder="DOI" hide-details />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">ISSN</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field id="title" v-model="issn" outlined dense placeholder="ISSN" hide-details />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">PMID</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field id="title" v-model="pmid" outlined dense placeholder="PMID" hide-details />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Inventory number</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field
              id="title"
              v-model="inventoryNumber"
              outlined
              dense
              placeholder="Inventory number"
              hide-details
            />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">ISBN</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field id="title" v-model="isbn" outlined dense placeholder="ISBN" hide-details />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">ISBN2</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field id="title" v-model="isbn2" outlined dense placeholder="ISBN" hide-details />
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Identifiers',
  props: {
    propsDoi: {
      type: String,
      default: '',
    },
    propsIssn: {
      type: String,
      default: '',
    },
    propsPmid: {
      type: String,
      default: '',
    },
    propsInventoryNumber: {
      type: String,
      default: '',
    },
    propsIsbn: {
      type: String,
      default: '',
    },
    propsIsbn2: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      doi: this.propsDoi,
      issn: this.propsIssn,
      pmid: this.propsPmid,
      inventoryNumber: this.propsInventoryNumber,
      isbn: this.propsIsbn,
      isbn2: this.propsIsbn2,
    }
  },
  watch: {
    doi(value) {
      this.$emit('doi', value)
    },
    issn(value) {
      this.$emit('issn', value)
    },
    pmid(value) {
      this.$emit('pmid', value)
    },
    inventoryNumber(value) {
      this.$emit('inventoryNumber', value)
    },
    isbn(value) {
      this.$emit('isbn', value)
    },
    isbn2(value) {
      this.$emit('isbn2', value)
    },
  },
}
</script>
