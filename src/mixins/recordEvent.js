export default {
  methods: {
    recordEvent (type, item) {
      const url = `https://${process.env.BEARS}/events/${type}`
      const payload = { item }
      this.$axios.put(url, payload)
        .then(res => {
          const color = res.status === 200 ? 'positive' : 'negative'
          const icon = res.status === 200 ? 'thumb_up' : 'report_problem'
          console.log(res)
          this.$q.notify({
            color,
            position: 'bottom',
            message: 'Endpoint:<br>' + url + '<br>Payload:<br><pre>' + JSON.stringify(payload, null, 2) + '</pre><br>Response:<br><pre>' + JSON.stringify(res.data, null, 2) + '</pre>',
            html: true,
            icon
          })
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            position: 'bottom',
            message: 'Event call failed',
            icon: 'report_problem'
          })
        })
    }
  }
}
