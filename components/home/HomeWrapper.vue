<template>
  <div class="right-body">
    <div class="blog-info-container enter-x">
      <!-- 头像框框 -->
      <div class="blog-info-wrapper">
        <div class="my-photo">
          <img src="~/assets/images/blog-logo.jpg" />
        </div>
        <div class="flex margin-top-10 statistical">
          <div class="flex flex-direction align-center justify-center">
            <h3>1</h3>
            <h6>文章</h6>
          </div>
          <div class="flex flex-direction align-center justify-center">
            <h3>9</h3>
            <h6>分类</h6>
          </div>
        </div>
      </div>
      <!-- 分类 -->
      <div class="article-category-box">
        <div class="label margin-left-10">
          <i class="fa fa-th-large" aria-hidden="true"></i>
          <span class="margin-left-10">分类</span>
        </div>
        <ul
          class="category-list enter-y"
          v-for="(item, index) in rightCategoryArr"
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
      <div class="article-tag-box margin-left-10 flex flex-wrap">
        <div class="label">
          <i class="fa fa-tags" aria-hidden="true"></i>
          <span class="margin-left-10">标签</span>
        </div>
        <div class="margin-top-5">
          <span class="t-e enter-y" :style="tagStyleComp()">全部</span>
          <span
            v-for="(item, index) in rightTagArr"
            :key="index"
            class="t-e enter-y"
            :style="tagStyleComp()"
            v-text="item"
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
export default {
  components: { AdvertisingHomeRight },
  props: {
    rightCategoryArr: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      guanggaoIndex: 0, // 广告下标
      // rightCategoryArr: [
      //   { title: "Vue", number: 0 },
      //   { title: "React", number: 0 },
      //   { title: "Angular", number: 0 },
      //   { title: "Flutter", number: 0 },
      //   { title: "Java", number: 0 },
      //   { title: "Python", number: 0 },
      //   { title: "C++", number: 0 },
      //   { title: "Golang", number: 0 },
      //   { title: "Mysql", number: 0 },
      // ],
      rightCategoryColosArr: [], // 分类颜色
      rightTagArr: [
        "VUE",
        "React",
        "Angular",
        "Spring Boot",
        "Dubbo",
        "Zookpeer",
        "Spring",
        "Js",
        "Jquery",
      ],
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
  },
};
</script>


<style lang="scss">
.right-body {
  margin-top: 10px;
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
    padding: 20px;
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
    .statistical {
      border-bottom: 1px solid #ccc;

      & > div {
        padding: 0 25px;
        &:nth-child(1) {
          position: relative;
          &:after {
            content: "";
            position: absolute;
            right: 0;
            width: 1;
            top: 20%;
            height: 60%;
            border-right: 1px solid #ccc;
          }
        }
      }
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
</style>
