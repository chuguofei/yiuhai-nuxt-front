export const state = () => ({

    // 文章的详情
    articleItem: null,


})

export const mutations = {
    // 文章的详情
    SET_ARTICLE_ITEM(state, data) {
        state.articleItem = data
    },
}