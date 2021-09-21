<template>
  <div>
    <v-row>
      <v-col>
        <h2>{{ selected }}</h2>
      </v-col>
      <v-col cols="3">
        <v-select
          v-model="selected"
          :items="items"
          dense
          outlined
          item-text="title"
          item-value="title"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <template v-if="selected === 'Books'">
        <v-row>
          <v-col>
            <BooksList />
          </v-col>
        </v-row>
      </template>
      <template v-if="selected === 'Users'">
        <div>Users</div>
      </template>
      <template v-if="selected === 'Orders'">
        <div>Orders</div>
      </template>
    </v-row>
  </div>
</template>

<script>
import BooksList from '@/views/apps/books/books-list/BooksList.vue'

export default {
  name: 'Statistics',
  components: { BooksList },
  data() {
    return {
      selected: 'Books',
      items: [
        { title: 'Books', label: 'book' },
        { title: 'Users', label: 'user' },
        { title: 'Orders', label: 'order' },
      ],
    }
  },
}
</script>
