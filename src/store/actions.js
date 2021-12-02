import Vue from 'vue'

export default {
  getArticleLists (context) {
    Vue.$http.get('https://cnodejs.org/api/v1/topics', {
      page: 1,
      limit: 10,
      mdrender: 'false'
    }).then(res => {
      context.commit('addArticleLists', res.data)
    })
  }
}
