<template>
  <div class="quick-nav-view fade-in">
    <div class="recommend-nav">
      <div class="margin-tb-5 headline">
        <b>推荐导航</b>
      </div>
      <ul>
        <li
          :key="index"
          v-for="(item, index) in externalLinkArr"
          class="e-link-item"
        >
          <a target="_blank" :href="item.href">
            <img :src="item.icon" />
            <span class="e-name" v-text="item.name"></span>
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
  data() {
    return {
      externalLinkArr: [
        {
          name: "BootCDN",
          icon: "https://www.bootcdn.cn/assets/ico/favicon.ico",
          href: "https://www.bootcdn.cn/",
        },
        {
          name: "bilibili",
          icon: "https://space.bilibili.com/favicon.ico",
          href: "https://www.bilibili.com/",
        },
        {
          name: "知乎",
          icon: "https://static.zhihu.com/heifetz/favicon.ico",
          href: "https://www.zhihu.com/",
        },
        {
          name: "掘金",
          icon: "https://sf3-scmcdn2-tos.pstatp.com/xitu_juejin_web/6bdafd801c878b10edb5fed5d00969e9.svg",
          href: "https://juejin.im/",
        },
        {
          name: "语雀",
          icon: "https://gw.alipayobjects.com/mdn/prod_resou/afts/img/A*dbj2Tp-tmVgAAAAAAAAAAABkARQnAQ",
          href: "https://www.yuque.com/",
        },
        {
          name: "tinypng",
          icon: "https://tinypng.com/images/favicon.ico",
          href: "https://tinypng.com/",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.quick-nav-view {
  width: 80%;
  box-shadow: 0 0 5px #ccc;
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
