<template>
  <v-card flat>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">School</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field id="title" v-model="copyrightMark" outlined dense placeholder="Copyright mark" hide-details />
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'PhdThesis',
  data() {
    return {
      copyrightMark: null,
    }
  },
  methods: {
    add() {},
    edit() {},
    remove() {},
  },
}
</script>

<style scoped></style>
