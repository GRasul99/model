<template>
  <v-card flat>
    <v-card-text>
      <p class="font-weight-medium">
        Storage
      </p>
      <v-card flat v-for="storage in storages" :key="storage.storage">
        <v-row>
          <v-col cols="12" md="3">
            <label for="title">Storage</label>
          </v-col>

          <v-col cols="12" md="9">
            <div class="d-flex align-center">
              <v-autocomplete id="title" v-model="storage.storage" outlined dense placeholder="Storage" hide-details />
              <v-icon small color="warning" class="mx-2 cursor-pointer" @click.prevent="edit">
                {{ icons.mdiPencilOutline }}
              </v-icon>
              <v-icon small class="cursor-pointer" color="success" @click="addStorages">
                {{ icons.mdiPlusOutline }}
              </v-icon>
              <v-icon small class="cursor-pointer ml-2" v-if="storages.length > 1" @click="remove(storage)">
                {{ icons.mdiDeleteOutline }}
              </v-icon>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="3">
            <label for="title">Quantity</label>
          </v-col>

          <v-col cols="12" md="9">
            <div class="d-flex align-center">
              <v-text-field id="title" v-model="storage.quantity" outlined dense placeholder="Quantity" hide-details />
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiPlusOutline, mdiDeleteOutline, mdiPencilOutline } from '@mdi/js'

export default {
  name: 'Storage',
  props: {
    propsStorages: {
      type: Array,
      default() {
        return [{ storage: '', quantity: 0 }]
      },
    },
  },
  data() {
    return {
      icons: {
        mdiPlusOutline,
        mdiDeleteOutline,
        mdiPencilOutline,
      },
      storages: this.propsStorages,
    }
  },
  watch: {
    storages: {
      handler(value) {
        this.$emit('storage', value)
      },
      deep: true,
    },
  },
  methods: {
    addStorages() {
      this.storages.push({ author: '', rank: 0 })
    },
    edit() {},
    remove(storage) {
      this.storages.splice(storage, 1)
    },
  },
}
</script>

<style scoped></style>
