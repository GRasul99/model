<template>
  <v-card flat>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Cross references</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field
              id="title"
              v-model="crossReferences"
              outlined
              dense
              placeholder="Cross references"
              hide-details
            />
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'CrossReferences',
  data() {
    return {
      crossReferences: null,
    }
  },
}
</script>

<style scoped></style>
