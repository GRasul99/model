<template>
  <v-tabs
    vertical
    class="elevation-1 rounded-lg"
  >
    <v-tab>
      Publication main parts
    </v-tab>
    <v-tab>
      Identifiers
    </v-tab>
    <v-tab>
      Book fields
    </v-tab>
    <v-tab>
      PhD thesis
    </v-tab>
    <v-tab>
      Trudy
    </v-tab>
    <v-tab>
      Other
    </v-tab>
    <v-tab>
      Cross references
    </v-tab>
    <v-tab>
      Additional information
    </v-tab>
    <v-tab>
      Author rating
    </v-tab>
    <v-tab>
      Storage
    </v-tab>

    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <v-row>
            <v-col
              cols="12"
              md="3"
            >
              <label for="firstname">First Name</label>
            </v-col>

            <v-col
              cols="12"
              md="9"
            >
              <v-autocomplete
                id="firstname"
                v-model="firstname"
                outlined
                dense
                placeholder="First Name"
                hide-details
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              md="3"
            >
              <label for="firstname">First Name</label>
            </v-col>

            <v-col
              cols="12"
              md="9"
            >
              <v-text-field
                id="firstname"
                v-model="firstname"
                outlined
                dense
                placeholder="First Name"
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae
            iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non
            adipiscing dolor urna a orci.
          </p>

          <p class="mb-0">
            Suspendisse feugiat. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae
            iaculis lacus elit id tortor.
          </p>
        </v-card-text>
      </v-card>
    </v-tab-item>
    <v-tab-item>
      <v-card flat>
        <v-card-text>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit
            amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere
            eget, vestibulum et, tempor auctor, justo.
          </p>

          <p class="mb-0">
            Cras sagittis. Phasellus nec sem in justo pellentesque facilisis. Proin sapien ipsum, porta a, auctor quis,
            euismod ut, mi. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </p>
        </v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import { mdiAccountOutline, mdiLockOutline, mdiAccessPoint } from '@mdi/js'

export default {
  name: 'BooksEdit',
  setup() {
    return {
      icons: {
        mdiAccountOutline,
        mdiLockOutline,
        mdiAccessPoint,
      },
    }
  },
}
</script>
