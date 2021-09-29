<template>
  <v-card flat>
    <v-card-text>
      <v-row>
        <v-col cols="12" md="3">
          <label for="title">Organization</label>
        </v-col>

        <v-col cols="12" md="9">
          <div class="d-flex align-center">
            <v-text-field id="title" v-model="organization" outlined dense placeholder="Organization" hide-details />
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Labors',
  props: {
    propsOrganization: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      organization: this.propsOrganization,
    }
  },
  watch: {
    organization(value) {
      this.$emit('organization', value)
    },
  },
}
</script>

<style scoped></style>
