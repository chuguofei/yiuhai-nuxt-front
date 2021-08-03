<template>
  <div class="quick-nav-view fade-in app-bg-color margin-bottom-5">
    <div class="recommend-nav" v-for="(item, index) in quickData.quickData" :key="index">
      <div class="margin-tb-10 headline">
        <b>{{ item.navTypeName }}</b>
      </div>
      <ul>
        <li
          :key="_item.id"
          v-for="_item in item.quickNavList"
          class="e-link-item enter-x"
        >
          <a target="_blank" :href="_item.href">
            <img :src="_item.icon" />
            <span class="e-name" v-text="_item.name"></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "GF.快捷导航",
    };
  },
  async asyncData({ $axios }) {
    let [quickData] = await Promise.all([
      await $axios.get("/b/q").then((res) => {
        return { quickData: res.data };
      }),
    ]);
    return { quickData: quickData };
  },
};
</script>

<style lang="scss">
.quick-nav-view {
  width: 80%;
  margin: auto;
  min-height: 200px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    &::after {
      content: "";
      display: block;
      clear: both;
    }
  }
  // 推荐导航
  .recommend-nav {
    padding: 5px 0 0 10px;
    box-shadow: 0 0 5px #ccc;
    border-radius: 5px;
    li.e-link-item {
      float: left;
      margin: 0 20px 20px 0px;
      width: 100px;
      text-align: center;

      a {
        display: flex;
        text-decoration: none;
        color: #999;
        align-items: center;
        justify-content: center;
        padding: 5px;
        border-radius: 5px;
        &:hover {
          border: 1px #999 dashed;
          transition: all 0.5s ease-in-out;
          transform: scale(1.1);
        }
      }
      .e-name {
        font-size: 14px;
      }
      img {
        width: 20px;
        height: 20px;
        margin-right: 6px;
      }
    }
  }
}
</style>
