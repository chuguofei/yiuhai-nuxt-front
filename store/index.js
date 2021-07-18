import service from '../api'


export const actions = {
    async nuxtServerInit({ commit }, { app }) {
        // 获取侧边栏信息
        let result = await app.$axios.get(`/b/homeInfo`);
        if (result) {
            commit('home_info/SET_ARTICLE_HOME_INFO_DATA', result.data)
        }
    },
    // 获取文章列表
    async getArticlHomeDataApi({ commit, state }, params) {
        const res = await service.getArticleList().catch(err => {
            console.log(err)
        });
        if (res && res.code === 200) {
            commit('article_list/SET_ARTICLE_HOME_DATA', res.data)
        }
    },

    // 获取文章详情
    async getArticleDetails({ commit, state }, params) {
        const res = await service.getArticleDetails(params.id).catch(err => {
            console.log(err, "=--")
        });
        if (res && res.code === 200) {
            commit('article_details/SET_ARTICLE_ITEM', res.data)
        }
    },

}