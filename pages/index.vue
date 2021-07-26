<template>
  <div class="home-body-box flex">
    <div class="left-body app-bg-color margin-right-10">
      <a-row class="padding-10" :gutter="16">
        <a-col
          v-for="item in articleList"
          :key="item.id"
          data-wow-delay="0.1s"
          data-wow-offset="5"
          class="margin-tb-5"
          :xs="24"
          :sm="12"
          :md="12"
          :lg="12"
          :xl="8"
        >
          <div class="essay-item animated fadeIn wow">
            <nuxt-link :to="`/article_details/${item.id}`">
              <div class="eassay-preview-img-box">
                <img v-lazy="item.article_img" class="eassay-preview-img" />
              </div>
            </nuxt-link>
            <!-- 文章标题 -->
            <div class="eassay-title text-center">{{ item.article_title }}</div>
            <!-- 工具 -->
            <div class="eassay-common flex">
              <div class="create-time">
                <i class="fa fa-calendar margin-right-5 font-10"></i>
                <span class="font-10">{{ item.create_time }}</span>
              </div>
              <div class="love">
                <i class="fa fa-eye font-10" aria-hidden="true"></i>
                <span class="font-10">{{ item.article_sentiment }}</span>
              </div>
              <!-- <div class="love">
              <i class="fa fa-heart margin-right-5 font-10"></i>
              <span class="font-10">9999</span>
            </div>
            <div class="collection">
              <i class="fa fa-star margin-right-5 font-10"></i>
              <span class="font-10">9999</span>
            </div> -->
            </div>
            <!-- 文章解释 -->
            <div class="eassay-explain">{{ item.article_explain }}</div>
            <!-- 文章标签 -->
            <div class="eassay-tag flew flex-warp">
              <span
                class="tag-item chip"
                :key="_item"
                v-for="_item in item.article_tags.split(',')"
                >{{ _item }}</span
              >
            </div>
            <!-- 文章详情 -->
            <div class="text-right">
              <nuxt-link :to="`/article_details/${item.id}`">
                <button class="to-details-btn">详情</button>
              </nuxt-link>
            </div>
          </div>
        </a-col>
      </a-row>
      <!-- <a-button class="width--97 margin-left-10 fade-in enter-y" type="primary" block @click="touchMoreMeth">
        点击加载更多
      </a-button>
      <no-data class="enter-y"></no-data> -->
    </div>
    <info-wrapper></info-wrapper>
  </div>
</template>

<script>
import Vue from "vue";
import HomeInfo from "~/components/home/HomeInfo.vue";
import infoWrapper from "~/components/home/HomeWrapper.vue";
import NoData from "~/components/common/NoData.vue";
if (process.browser) {
  // 在这里根据环境引入wow.js
  var { WOW } = require("wowjs");
}
export default Vue.extend({
  components: { HomeInfo, infoWrapper, NoData },
  async fetch({ $axios, store, query, params }) {
    const page = query.page ? Number(query.page) : 1;
    let result = await $axios.get(`/b/h`);
    if (result) {
      store.commit("article_list/SET_ARTICLE_HOME_DATA", result.data);
    }
    // await store.dispatch("getArticlHomeDataApi");
  },
  data() {
    return {
      page: this.$route.query.page || 1,
    };
  },
  computed: {
    articleList() {
      return this.$store.state.article_list.articleList;
    },
  },
  mounted() {
    if (process.browser) {
      // 在页面mounted生命周期里面 根据环境实例化WOW
      new WOW({
        live: false,
        offset: 0,
      }).init();
    }
  },
  watchQuery: ["page"],
  methods: {
    toAircleDetailsMeth(id) {
      this.$router.push({
        path: `/article_details/${id}`,
      });
    },
    touchMoreMeth() {
      this.$router.push({
        name: "index",
        params: { page: 1 },
        query: { page: this.page + 1 },
      });
    },
  },
});
</script>

<style lang="scss">
.home-body-box {
  width: 70%;
  margin: 0 auto;
  // background: #fff;
  padding-top: 10px;

  .left-body {
    width: 100%;
    // display: flex;
    // flex-direction: column;
    // flex-wrap: wrap;
    transition: all 1s ease-in-out;
    .essay-item {
      border-radius: 5px;
      padding: 5px;
      box-shadow: 0px 0px 5px #ccc;
      background: #fff;
      // width: calc(100% / 3 - 23px);

      &:hover {
        transition: all 0.2s ease-in-out;
        box-shadow: 2px 2px 5px rgb(117, 114, 114);
      }

      .eassay-preview-img-box {
        // width: 100%;
        height: 250px;
        width: 100%;
        border-radius: 10px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          transition: all 0.6s;
          object-fit: fill;
          &:hover {
            cursor: pointer;
            -webkit-transform: scale(1.1);
            -moz-transform: scale(1.1);
            -o-transform: scale(1.1);
            -ms-transform: scale(1.1);
            transform: scale(1.1);
          }
        }
      }
      .eassay-title {
        font-family: "楷体", "Microsoft YaHei", "黑体", "宋体", sans-serif;
      }
      .eassay-common {
        & > div:not(:last-child):after {
          content: ".";
          position: absolute;
          right: -10px;
          top: -4px;
        }
      }

      .create-time,
      .love,
      .collection {
        color: #858585;
        margin-right: 16px;
        position: relative;
      }

      .eassay-explain {
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: normal;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin: 10px 0;
        text-indent: 2em;
        letter-spacing: 1px;
        font-size: 12px;
        font-family: "楷体", "Microsoft YaHei", "黑体", "宋体", sans-serif;
        color: #333;
        height: 3rem;
      }

      .eassay-tag {
        border-top: 1px solid rgba(160, 160, 160, 0.2);
        border-bottom: 1px solid rgba(160, 160, 160, 0.2);
        padding: 5px 0;
        height: 60px;
        overflow: hidden;
        .tag-item {
          display: inline-block;
          height: 22px;
          line-height: 22px;
          padding: 0 5px;
          cursor: pointer;
          font-size: 12px;
          transform: scale(0.9);
          background-image: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%);
        }
      }

      .to-details-btn {
        padding: 5px 20px;
        font-size: 12px;
        color: #333;
        overflow: hidden;
        color: inherit;
        font-weight: 500;
        border-radius: 5px;
        letter-spacing: 2px;
        white-space: nowrap;
        text-align: center;
        background: #fff;
        border: 1px solid #dcdfe6;
        color: #606266;
        margin-top: 5px;
        &:hover {
          color: #409eff;
          border-color: #c6e2ff;
          background-color: #ecf5ff;
          cursor: pointer;
        }
        &:active {
          border-color: #3a8ee6;
          color: #3a8ee6;
        }
      }
    }
  }

  .right-body {
    transition: all 1s ease-in-out;
  }
}

$essayBorderColor: #409eff;
/** 鼠标移到盒子上的边框效果 */
.home-body-box .essay-item {
  border: 0;
  box-sizing: border-box;
  transform: translateX(0);

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -999;
    border-radius: 5px;
  }

  &::before,
  &::after {
    border: 2px solid transparent;
    width: 0;
    height: 0;
  }

  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    bottom: 0;
    right: 0;
  }

  &:hover::before,
  &:hover::after {
    width: 100%;
    height: 100%;
  }

  &:hover::before {
    border-top-color: $essayBorderColor;
    border-right-color: $essayBorderColor;
    transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
  }

  &:hover::after {
    border-bottom-color: $essayBorderColor;
    border-left-color: $essayBorderColor;
    transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s,
      height 0.25s ease-out 0.75s;
  }

  &::after {
    top: 0;
    left: 0;
  }

  &:hover::after {
    transition: height 0.25s ease-out, width 0.25s ease-out 0.25s;
  }
}

@media screen and (max-width: 1600px) and (min-width: 1400px) {
  .home-body-box {
    width: 80%;
  }
}
@media screen and (max-width: 1400px) and (min-width: 1200px) {
  .home-body-box {
    width: 75%;
  }
}

@media screen and (max-width: 1200px) and (min-width: 1000px) {
  .home-body-box {
    width: calc(100% - 40px);
  }
}
@media screen and (max-width: 1000px) and (min-width: 800px) {
  .home-body-box {
    width: calc(100% - 40px);
  }
}
@media screen and (max-width: 800px) {
  .home-body-box {
    width: calc(100% - 40px);
  }
}
</style>
