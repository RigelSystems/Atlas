<script lang="ts">
import NNavigationBar from '@rigelsystems/novaui/src/stories/NNavigationBar/NNavigationBar.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    const links = [
      { label: 'Home', url: '/' },
      { label: 'Info', url: '/info' },
    ]

    return { links }
  },
})
</script>

<template>
  <NNavigationBar :links="links" />
  <router-view />
</template>

<style>
  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  .n-navigation-bar {
    height: 30px !important;
  }
</style>
