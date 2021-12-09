<template>
  <div class="usercom">
    1
  </div>
</template>

<script>
export default {
  name: 'Usercom',
  data () {
    return {}
  },
  created () {
    this.$store.dispatch('getauthor', this.$route.path)
  }
}
</script>

<style scoped>

</style>
