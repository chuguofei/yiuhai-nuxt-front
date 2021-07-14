<template>
  <div>
    <home-info
      :articleList="articleList"
      :categoryList="categoryList"
      :tagsList="tagsList"
    ></home-info>
  </div>
</template>

<script>
import Vue from "vue";
import HomeInfo from "~/components/home/HomeInfo.vue";
export default Vue.extend({
  components: { HomeInfo },
  // async asyncData({ app }) {
  //   let [homeData] = await Promise.all([
  //     app.$axios.get("/b/h/1").then((res) => {
  //       let { articleList, categoryList,tagsList } = res.data.data;
  //       return {
  //         articleList,
  //         categoryList,
  //         tagsList,
  //       };
  //     }),
  //   ]);
  //   return { homeData };
  // },
  async fetch({ $axios, store, params }) {
    let result = await $axios.get("/b/h/1");
    store.commit('article_list/SET_ARTICLE_HOME_DATA', result.data.data)
    // await store.dispatch("getArticlHomeDataApi");
  },
  computed: {
    articleList() {
      return this.$store.state.article_list.articleList;
    },
    categoryList() {
      return this.$store.state.article_list.categoryList;
    },
    tagsList() {
      return this.$store.state.article_list.tagsList;
    },
  },
});
</script>


<style lang="scss">
</style>