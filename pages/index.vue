<template>
  <div>
    <home-info
      :articleList="homeData.articleList"
      :categoryList="homeData.categoryList"
      :tagsList="homeData.tagsList"
    ></home-info>
  </div>
</template>

<script>
import Vue from "vue";
import HomeInfo from "~/components/home/HomeInfo.vue";
export default Vue.extend({
  components: { HomeInfo },
  async asyncData({ app }) {
    let [homeData] = await Promise.all([
      app.$axios.get("/b/h/1").then((res) => {
        let { articleList, categoryList,tagsList } = res.data.data;
        return {
          articleList,
          categoryList,
          tagsList,
        };
      }),
    ]);
    return { homeData };
  },
});
</script>


<style lang="scss">
</style>