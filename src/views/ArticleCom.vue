<template>
  <div class="article" v-if="articles">
    <div class="article-title">
      <p>发布于：{{articles.last_reply_at}}</p>
      <router-link :to="{name:'usercom',params:{username: articles.author.loginname}}"><p v-if="articles.author">作者：{{articles.author.loginname}}</p></router-link>
      <p>浏览量：{{articles.visit_count}}</p>
      <p>来自：{{articles.tab}}</p>
    </div>
    <h1>{{articles.title}}</h1>
    <div v-html="articles.content" class="content-style"></div>
    <template v-for="item in articles.replies">
      <div class="comments" :key="item.id">
        <img :src="item.author.avatar_url" alt="">
        <div class="comments-children">
          <div class="time-date">
            <p>{{item.author.loginname}}</p>
            <p>{{item.create_at}}</p>
          </div>
          <p v-html="item.content"></p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ArticleCom',
  data () {
    return {}
  },
  methods: {
    getData () {
      this.$store.dispatch('getArticle', this.$route.path)
    }
  },
  created () {
    this.getData()
  },
  computed: {
    articles () {
      return this.$store.state.addArticle
    }
  }
}
</script>

<style lang="scss" scoped>
.article-title{
  display: flex;
  width: 65%;
  justify-content: space-between;
}
.content-style{
  ::v-deep img{
    max-width: 100%;
  }
}
.comments{
  display: flex;
  width: 40%;
  justify-content: space-between;
  height: 120px;
  overflow: hidden;
  margin-top: 2%;
  img{
    max-width: 100%;
  }
}
</style>
