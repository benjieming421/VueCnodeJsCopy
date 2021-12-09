import { get } from '@/axios/index'

export default {
  getArticleLists (context) {
    var para = {
      params: {
        page: 1,
        limit: 10,
        mdrender: 'false'
      }
    }
    get('/topics', para).then(res => {
      context.commit('addArticleLists', res.data)
    }).catch((res) => {
      console.log('MaiSec.vue: ', res)
    })
  },
  getArticle (context, url) {
    get(url).then(res => {
      context.commit('addArticle', res.data)
    }).catch(onerror => {
      console.log(onerror)
    })
  },
  getauthor (context, url) {
    get(url).then(res => {
      context.commit('getauthor', res.data)
    })
  }
}
