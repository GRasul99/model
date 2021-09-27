<template>
  <v-app>
    <vertical-nav-menu :is-drawer-open.sync="isDrawerOpen"></vertical-nav-menu>
    <v-app-bar app absolute class="mx-6 rounded-lg">
      <div class="boxed-container w-full">
        <div class="d-flex align-center mx-6">
          <!-- Left Content -->
          <v-app-bar-nav-icon class="d-block d-lg-none me-2" @click="isDrawerOpen = !isDrawerOpen" />
          <v-text-field
            rounded
            dense
            outlined
            :prepend-inner-icon="icons.mdiMagnify"
            class="app-bar-search flex-grow-0"
            hide-details
          />

          <v-spacer />

          <!-- Right Content -->
          <a
            href="https://github.com/themeselection/materio-vuetify-vuejs-admin-template-free"
            target="_blank"
            rel="nofollow"
          >
            <v-icon class="ms-6 me-4">
              {{ icons.mdiGithub }}
            </v-icon>
          </a>
          <theme-switcher />
          <v-btn icon small class="ms-3">
            <v-icon>
              {{ icons.mdiBellOutline }}
            </v-icon>
          </v-btn>
          <app-bar-user-menu></app-bar-user-menu>
        </div>
      </div>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <div class="">
          <router-view :key="$route.fullPath"></router-view>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiBellOutline, mdiGithub, mdiMagnify } from '@mdi/js'
import VerticalNavMenu from '@/layouts/components/vertical-nav-menu/VerticalNavMenu.vue'
import ThemeSwitcher from '@/layouts/components/ThemeSwitcher.vue'
import AppBarUserMenu from '@/layouts/components/AppBarUserMenu.vue'

export default {
  name: 'App',
  components: {
    VerticalNavMenu,
    ThemeSwitcher,
    AppBarUserMenu,
  },
  setup() {
    const isDrawerOpen = ref(null)

    return {
      isDrawerOpen,

      // Icons
      icons: {
        mdiMagnify,
        mdiBellOutline,
        mdiGithub,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.v-app-bar ::v-deep {
  .v-toolbar__content {
    padding: 0;

    .app-bar-search {
      .v-input__slot {
        padding-left: 18px;
      }
    }
  }
}
</style>
