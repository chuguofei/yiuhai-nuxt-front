export const state = () => ({

    // 文章的详情
    articleCount:0,
    categoryList: [],
    tagsList: [],


})

export const mutations = {
    // 文章列表
    SET_ARTICLE_HOME_INFO_DATA(state, data) {
        state.articleCount = data.articleCount;
        state.categoryList = data.categoryList;
        state.tagsList = data.tagsList;
    },
}