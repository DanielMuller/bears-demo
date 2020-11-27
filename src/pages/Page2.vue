<template lang="pug">
  q-page.q-pa-md.bg-indigo-2(padding)
    h1.text-center This is page 2
    div.text-body1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id arcu tincidunt, ultricies est et, commodo erat. Curabitur a congue sapien. Nulla nec ante finibus magna lobortis tincidunt sit amet vehicula neque. Aliquam imperdiet porta dapibus. Integer vitae urna et urna cursus lobortis. Nulla fringilla mattis est, semper tristique odio viverra sed. Sed volutpat varius sem sed aliquam. Vivamus dignissim dictum velit, ac eleifend neque lacinia ut. Donec vulputate pharetra elit, sed hendrerit turpis euismod vitae.

    div.q-mt-md Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc nibh mauris, condimentum ut ipsum vel, fringilla bibendum metus. Etiam diam neque, vulputate et tincidunt et, consectetur eget turpis. In hac habitasse platea dictumst. Nam ut leo mi. Suspendisse potenti. Aliquam erat volutpat. Nam eu odio vel sapien varius porttitor id eget tellus. Mauris aliquet purus consequat, porta lectus et, pretium enim. Morbi nec sem non sapien convallis pharetra a at ligula.

    div
      a(href="javascript:void(0)" @click="goto('page7', 'page2', 'page7')") Link to page 7
    div
      a(href="javascript:void(0)" @click="goto('/','page2','index')") Link to index
</template>
<script>
import RecordEvent from 'src/mixins/recordEvent'
export default {
  mixins: [
    RecordEvent
  ],
  methods: {
    goto (route, eventName, payload) {
      this.recordEvent(eventName, payload)
      this.$router.push(route)
    }
  }
}
</script>
