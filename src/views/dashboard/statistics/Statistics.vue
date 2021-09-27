<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h2>{{ selected }}</h2>
      </v-col>
      <v-col cols="12" sm="3">
        <v-select v-model="selected" :items="items" dense outlined item-text="title" item-value="title" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" v-if="selected === 'Books'">
        <BooksList />
      </v-col>
      <v-col v-if="selected === 'Users'">
        <div>Users</div>
      </v-col>
      <v-col v-if="selected === 'Orders'">
        <div>Orders</div>
      </v-col>
    </v-row>
  </v-container>
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
