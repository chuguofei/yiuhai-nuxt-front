import service from '../api'


export const actions = {
    // nuxtServerInit(store, { params, route, req }) {


    //     return Promise.all()
    // },

    // 获取文章详情
    async getArticleDetails({ commit, state }, params) {
        const res = await service.getArticleDetails(params.id).catch(err => {
            console.log(err, "=--")
        });
        console.log(res, "===")
        if (res && res.code === 200) {
            commit('article_details/SET_ARTICLE_ITEM', res.data)
        }
    },

}