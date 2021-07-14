<template>
  <div>
    <home-info
      :articleList="articleList"
    ></home-info>
  </div>
</template>

<script>
import Vue from "vue";
import HomeInfo from "~/components/home/HomeInfo.vue";
export default Vue.extend({
  components: { HomeInfo },
  async fetch({ $axios, store, params }) {
    let result = await $axios.get("/b/h/1");
    store.commit('article_list/SET_ARTICLE_HOME_DATA', result.data.data)
    // await store.dispatch("getArticlHomeDataApi");
  },
  computed: {
    articleList() {
      return this.$store.state.article_list.articleList;
    },
  },
});
</script>


<style lang="scss">
</style>