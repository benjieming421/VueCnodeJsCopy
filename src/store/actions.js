import { get } from '@/axios/index'

export default {
  getArticleLists (context) {
    var para = {
      params: {
        page: 1,
        limit: 2,
        mdrender: 'false'
      }
    }
    get('/topics', para).then(res => {
      context.commit('addArticleLists', res.data)
    }).catch((res) => {
      console.log('MaiSec.vue: ', res)
    })
  }
}
