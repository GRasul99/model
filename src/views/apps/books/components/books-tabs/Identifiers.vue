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
  data() {
    return {
      doi: null,
      issn: null,
      pmid: null,
      inventoryNumber: null,
      isbn: null,
      isbn2: null,
    }
  },
}
</script>
