<template>
  <div class="sidesec" v-if="articles.author">
    <div>
      <img :src="articles.author.avatar_url" alt="">
      <span>{{articles.author.loginname}}</span>
    </div>
    <div>
      <p>{{articles.reply_count}}</p>
      <p>https://github.com/{{articles.author.loginname}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideSec',
  data () {
    return {}
  },
  computed: {
    articles () {
      return this.$store.state.addArticle
    }
  }
}
</script>

<style scoped>
.sidesec {
  background-color: #f9fafc;
  border: 1px solid gray;
  padding: 10px;
  margin: 2% auto 0;
}

</style>
