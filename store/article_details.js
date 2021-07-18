export const state = () => ({

    // 文章的详情
    articleItem: null,
    status: 200,


})

export const mutations = {
    // 是否非法访问
    SET_ARTICLE_STATUS(state, code) {
        state.status = code
    },
    // 文章的详情
    SET_ARTICLE_ITEM(state, data) {
        state.articleItem = data
    },
}