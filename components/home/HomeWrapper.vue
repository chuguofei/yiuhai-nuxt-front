<template>
  <div class="right-body">
    <div class="blog-info-container enter-x">
      <!-- 头像框框 -->
      <div class="blog-info-wrapper">
        <div class="my-photo">
          <img src="~/assets/images/blog-logo.jpg" />
        </div>
        <div class="my-alias margin-tb-3">GF</div>
        <div class="flex margin-top-10 statistical">
          <div class="flex flex-direction align-center justify-center">
            <h3 v-text="articleCount"></h3>
            <h6>文章</h6>
          </div>
          <div class="line"></div>
          <div class="flex flex-direction align-center justify-center">
            <h3 v-text="categoryList.length"></h3>
            <h6>分类</h6>
          </div>
          <div class="line"></div>
          <div class="flex flex-direction align-center justify-center">
            <h3 v-text="tagsList.length"></h3>
            <h6>标签</h6>
          </div>
        </div>
      </div>
      <!-- 生活账号 -->
      <about-account></about-account>
      <!-- 分类 -->
      <div class="article-category-box">
        <div class="label margin-left-10">
          <i class="fa fa-th-large" aria-hidden="true"></i>
          <span class="margin-left-10">分类</span>
        </div>
        <ul
          class="category-list enter-y"
          v-for="(item, index) in categoryList"
          :key="index"
        >
          <li class="category-item">
            <span class="t" v-text="item.category_name"></span>
            <span
              class="c"
              :style="{
                background: `${rightCategoryColosArr[index]} !important`,
              }"
            >
              {{ item.count }}
            </span>
          </li>
        </ul>
      </div>
      <div class="article-tag-box margin-left-10">
        <div class="label">
          <i class="fa fa-tags" aria-hidden="true"></i>
          <span class="margin-left-10">标签</span>
        </div>
        <div class="margin-top-5 flex flex-wrap">
          <span class="t-e enter-y" :style="tagStyleComp()">全部</span>
          <span
            v-for="(item, index) in tagsList"
            :key="index"
            class="t-e enter-y"
            :style="tagStyleComp()"
            v-text="item.tag"
          ></span>
        </div>
      </div>
      <!-- 广告位 -->
      <AdvertisingHomeRight
        :list="['http://www.guofeian.cn/assets/home-header-bg.1d8b896a.jpg']"
      ></AdvertisingHomeRight>
    </div>
  </div>
</template>


<script>
import { getRandomColor, getRandomRGB } from "@/plugins/common";
import AdvertisingHomeRight from "@/components/advertising/Home";
import AboutAccount from "./AboutAccount.vue";
export default {
  components: { AdvertisingHomeRight, AboutAccount },
  props: {
    rightCategoryArr: {
      type: Array,
      default: () => [],
    },
    rightTagArr: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      guanggaoIndex: 0, // 广告下标
      rightCategoryColosArr: [], // 分类颜色
    };
  },
  mounted() {
    this.rightCategoryArr.forEach(() => {
      this.rightCategoryColosArr.push(getRandomColor());
    });
  },
  computed: {
    tagStyleComp() {
      return function () {
        let rgb = getRandomRGB();
        return { border: `1px ${rgb} solid !important`, color: rgb };
      };
    },
    articleCount() {
      return this.$store.state.home_info.articleCount;
    },
    categoryList() {
      let rightCategoryArr = this.$store.state.home_info.categoryList;
      rightCategoryArr.forEach(() => {
        this.rightCategoryColosArr.push(getRandomColor());
      });
      return rightCategoryArr;
    },
    tagsList() {
      return this.$store.state.home_info.tagsList;
    },
  },
};
</script>


<style lang="scss">
.right-body {
  width: 20%;
  height: auto;
  .blog-info-container {
    box-shadow: 0 0 5px #ccc;
  }
  // 头像框框
  .blog-info-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 20px 0 20px;
    border-radius: 5px;

    .my-photo {
      width: 100px;
      height: 100px;
      overflow: hidden;
      text-align: center;
      line-height: 100px;
      border-radius: 100%;
      border: 1px #ccc solid;
      img {
        object-fit: cover;
        width: 98px;
        height: 98px;
        border-radius: 100%;
        transition: all 0.6s;
        &:hover {
          transform: rotate(360deg) scale(1.1);
        }
      }
    }

    .my-alias {
      font-weight: bold;
      user-select: none;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(
        -225deg,
        #473b7b 0%,
        #3584a7 51%,
        #30d2be 100%
      );
    }

    .statistical {
      width: 100%;
      border-bottom: 1px solid #ccc;
      display: flex;
      justify-content: space-evenly;
      .line {
        width: 1px;
        border-right:0.1px #ccc solid;
        margin-bottom: 8px;
      }
      // & > div {
      //   width: 50px;
      //   // padding: 0 20px;
      //   position: relative;
      //   &:not(:last-child) {
      //     &:after {
      //       content: "";
      //       position: absolute;
      //       right: 0;
      //       width: 1;
      //       top: 20%;
      //       height: 60%;
      //       border-right: 1px solid #ccc;
      //     }
      //   }
      // }
    }
  }
  // 文章分类
  .article-category-box {
    .label {
      color: rgb(134, 126, 126);
    }
    // 分类列表
    .category-list {
      list-style: none;
      margin: 0;
      padding: 0;
      .category-item {
        line-height: 20px;
        margin: 10px;
        display: flex;
        padding: 10px;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 5px #999;
        border-radius: 5px;
        transition: all 0.2s ease-in-out;
        &:hover {
          cursor: pointer;
          transform: scale(1.04);
        }
        .t {
          font-size: 14px;
          position: relative;
          padding-left: 1.3rem;
          &::after {
            content: "";
            background: url("../../assets/images/t.gif") no-repeat;
            width: 1.9rem;
            height: 1.9rem;
            background-size: contain;
            position: absolute;
            left: -5px;
            top: -10px;
          }
        }
        .c {
          display: inline-block;
          width: 25px;
          height: 25px;
          line-height: 25px;
          text-align: center;
          color: #fff;
          font-size: 10px;
          border-radius: 5px;
        }
      }
    }
  }
  // 标签
  .article-tag-box {
    .label {
      color: rgb(134, 126, 126);
    }
    .t-e {
      display: inline-block;
      border: 1px solid rgba(255, 255, 255, 0.8);
      border-color: #bfbfbf;
      border-radius: 999em;
      padding: 0 10px;
      line-height: 24px;
      font-size: 12px;
      margin: 0 3px;
      margin-bottom: 6px;
      &:hover {
        transition: all 2s ease-in-out !important;
        cursor: pointer;
        transform: scale(1.06) !important;
      }
    }
  }
}

// 广告
.advertising {
  text-align: center;
}

// @media screen and (min-width: 1200px) {
//   .right-body {
//     display: block;
//   }
// }
@media screen and (max-width: 1000px) {
  .right-body {
    display: none;
  }
}
</style>
