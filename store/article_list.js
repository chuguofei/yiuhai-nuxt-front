export const state = () => ({

    // 文章的详情
    articleList: [],
    categoryList: [],
    tagsList: [],


})

export const mutations = {
    // 文章列表
    SET_ARTICLE_HOME_DATA(state, data) {
        state.articleList = data.articleList;
        state.categoryList = data.categoryList;
        state.tagsList = data.categoryList;
    },
}