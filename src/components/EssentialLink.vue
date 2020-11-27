<template lang="pug">
  q-item(
    clickable
    tag="a"
    :to="link"
    exact
    @click="recordEvent('menu',title)"
  )
    q-item-section(
      v-if="icon"
      avatar
    )
      q-icon(:name="icon")

    q-item-section
      q-item-label {{ title }}
      q-item-label(caption) {{ caption }}
</template>

<script>
import RecordEvent from 'src/mixins/recordEvent'
export default {
  name: 'EssentialLink',
  mixins: [
    RecordEvent
  ],
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
