<template lang="pug">
  q-page.q-pa-md.bg-indigo-1(padding)
    h1.text-center This is page 1
    div.text-body1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu tincidunt, ultricies est et, commodo erat. Curabitur a congue sapien. Nulla nec ante finibus magna lobortis tincidunt sit amet vehicula neque. Aliquam imperdiet porta dapibus. Integer vitae urna et urna cursus lobortis. Nulla fringilla mattis est, semper tristique odio viverra sed. Sed volutpat varius sem sed aliquam. Vivamus dignissim dictum velit, ac eleifend neque lacinia ut. Donec vulputate pharetra elit, sed hendrerit turpis euismod vitae.

    div.q-pa-md.q-gutter-sm
      q-btn(push color="teal" label="Change image" @click="refresh1")
      q-img(
        :src="url1"
        spinner-color="white"
        style="height: 140px; max-width: 150px"
      )
    div.q-pa-md.q-gutter-sm
      q-btn(push color="teal" label="Change image" @click="refresh2")
      q-img(
        :src="url2"
        spinner-color="white"
        style="height: 140px; max-width: 150px"
      )
</template>
<script>
import RecordEvent from 'src/mixins/recordEvent'
export default {
  data () {
    return {
      url1: 'https://placeimg.com/500/300/nature',
      url2: 'https://placeimg.com/500/300/tech'
    }
  },
  mixins: [
    RecordEvent
  ],
  methods: {
    refresh1 () {
      this.recordEvent('page1', 'image1')
      this.url1 = 'https://placeimg.com/500/300/nature?t=' + Math.random()
    },
    refresh2 () {
      this.recordEvent('page1', 'image2')
      this.url2 = 'https://placeimg.com/500/300/tech?t=' + Math.random()
    }
  }
}
</script>
