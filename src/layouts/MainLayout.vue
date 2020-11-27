<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-header(elevated)
      q-toolbar
        q-btn(
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        )

        q-toolbar-title Quasar App

        div Quasar v{{ $q.version }}

    q-drawer(
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    )
      q-list
        q-item-label(
          header
          class="text-grey-8"
        ) Essential Links
        EssentialLink(
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        )

    q-page-container
      transition(
        appear
        enter-active-class="animated bounceInRight"
        leave-active-class="animated fadeOutLeft"
      )
        router-view
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Index',
    caption: 'back to home',
    icon: 'school',
    link: '/'
  },
  {
    title: 'Page 1',
    caption: 'First Page',
    icon: 'school',
    link: 'page1'
  },
  {
    title: 'Page 2',
    caption: 'Second Page',
    icon: 'code',
    link: 'page2'
  },
  {
    title: 'Page 3',
    caption: 'Third Page',
    icon: 'chat',
    link: 'page3'
  },
  {
    title: 'Page 4',
    caption: 'Fourth Page',
    icon: 'record_voice_over',
    link: 'page4'
  },
  {
    title: 'Page 5',
    caption: 'Fifth Page',
    icon: 'rss_feed',
    link: 'page5'
  },
  {
    title: 'Page 6',
    caption: 'Sixth Page',
    icon: 'public',
    link: 'page6'
  },
  {
    title: 'Page 7',
    caption: 'Seventh Page',
    icon: 'favorite',
    link: 'page7'
  }
]

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
