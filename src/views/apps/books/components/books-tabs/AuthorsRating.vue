<template>
  <v-card flat>
    <v-card-text>
      <p class="font-weight-medium">
        Authors rating
      </p>
      <v-card flat v-for="authorRank in authorRanks" :key="authorRank.author">
        <v-row>
          <v-col cols="12" md="3">
            <label for="title">Author</label>
          </v-col>

          <v-col cols="12" md="9">
            <div class="d-flex align-center">
              <v-autocomplete
                id="title"
                v-model="authorRank.author"
                outlined
                dense
                placeholder="Authors rating"
                hide-details
              />
              <v-icon small color="warning" class="mx-2 cursor-pointer" @click.prevent="edit">
                {{ icons.mdiPencilOutline }}
              </v-icon>
              <v-icon small class="cursor-pointer" color="success" @click="addAuthorsRating">
                {{ icons.mdiPlusOutline }}
              </v-icon>
              <v-icon small class="cursor-pointer ml-2" v-if="authorRanks.length > 1" @click="remove(authorRank)">
                {{ icons.mdiDeleteOutline }}
              </v-icon>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="3">
            <label for="title">Rating</label>
          </v-col>

          <v-col cols="12" md="9">
            <div class="d-flex align-center">
              <v-text-field
                id="title"
                v-model="authorRank.rank"
                outlined
                dense
                placeholder="Authors rating"
                hide-details
              />
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
  name: 'AuthorsRating',
  props: {
    propsAuthorRanks: {
      type: Array,
      default() {
        return [{ author: '', rank: 0 }]
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
      authorRanks: this.propsAuthorRanks,
    }
  },
  watch: {
    authorRanks: {
      handler(value) {
        this.$emit('author-rank', value)
      },
      deep: true,
    },
  },
  methods: {
    addAuthorsRating() {
      this.authorRanks.push({ author: '', rank: 0 })
    },
    edit() {},
    remove(authorRank) {
      this.authorRanks.splice(authorRank, 1)
    },
  },
}
</script>

<style scoped></style>
