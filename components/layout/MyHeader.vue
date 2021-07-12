<template>
  <div class="blog-header-box">
    <div class="menu-container">
      <div class="header-menu-pc">
        <div class="blog-name">GF.Blog</div>
        <ul class="menu-list">
          <li
            v-for="(item, index) in menuArr"
            :key="index"
            @click="menuItemClick(item.path)"
            v-text="item.title"
          ></li>
        </ul>
      </div>

      <div class="header-menu-mobile">
        <div class="flex align-center justify-center menu-title">
          <i
            class="fa fa-bars menubar-icon"
            @click="mobileMenuBarFlag = !mobileMenuBarFlag"
          ></i>
          <span class="flex-1 text-center">GF-Blog</span>
        </div>
        <ul class="menu-list" v-if="mobileMenuBarFlag">
          <li
            v-for="(item, index) in menuArr"
            :key="index"
            @click="menuItemClick(item.path)"
            v-text="item.title"
          ></li>
        </ul>
      </div>
    </div>
    <!-- 键盘敲字 -->
    <div class="header-img-box">
      <div class="typeing">
        <span id="work"></span>
      </div>
    </div>
  </div>
</template>

<script >
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      menuArr: [
        { title: "首页", path: "/" },
        { title: "时间轴", path: "/tl" },
        { title: "友链", path: "/fl" },
        { title: "导航", path: "/quicknav" },
        { title: "关于我", path: "/aboutme" },
      ],
      mobileMenuBarFlag: false,
    };
  },
  methods: {
    /**
     * 路由跳转
     */
    menuItemClick(path) {
      this.mobileMenuBarFlag = !this.mobileMenuBarFlag;
      this.$router.push(path);
    },
  },
});
</script>
<style lang="scss" scoped>
.blog-header-box {
  width: 100%;
  .menu-container {
    background: rgba(40, 42, 44, 0.6);
    z-index: 1000;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    /** PC端 */
    .header-menu-pc {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .blog-name {
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        font-family: "Poiret One", "华文行楷", cursive;
      }
      ul.menu-list {
        list-style: none;
        padding: 0;
        margin: 0;
        max-width: 80%;
        height: 50px;
        // margin: 0 auto;
        animation: animationOpacity 2s;

        li {
          float: left;
          margin-left: 20px;
          line-height: 50px;
          color: #fff;
          letter-spacing: 5px;
          position: relative;

          &:hover {
            cursor: pointer;
            &:before {
              left: 0;
              width: 100%;
              background: #409eff;
            }
          }
          &::before {
            content: "";
            position: absolute;
            bottom: -2px;
            left: 50%;
            width: 0;
            height: 3px;
            transition: all 0.3s;
          }
        }

        &::after {
          content: "";
          height: 0px;
          width: 0px;
          clear: both;
          display: block;
          overflow: hidden;
        }
      }
    }
    /** 手机端 */
    .header-menu-mobile {
      animation: animationOpacity 2s;
      color: #fff;

      .menu-title {
        height: 50px;
      }

      .menubar-icon {
        position: absolute;
        left: 10px;
        font-size: 25px !important;
        &:hover {
          cursor: pointer;
        }

        &.show {
          transition: all 0.2s ease-in;
          transform: rotate(90deg);
        }
      }

      .menu-list {
        margin-top: 5px;
        animation: menuListShow 3s;

        li {
          line-height: 30px;
          padding: 0 10px;
          vertical-align: middle;
          margin: 10px 0;

          &:hover {
            cursor: pointer;
            border-bottom: 1px dashed #999;
            border-top: 1px dashed #999;
          }
        }
      }
    }
  }

  .header-img-box {
    width: 100%;
    height: 650px;
    position: relative;
    transition: all 0.5s ease-in;
    -moz-transition: all 0.5s ease-in;
    -webkit-transition: all 0.5s ease-in;
    -o-transition: all 0.5s ease-in;
    &::before {
      content: "";
      filter: blur(2px);
      background-size: cover;
      background-position: center 50%;
      background-repeat: no-repeat;
      background-image: url("~/assets/images/bg-1.jpg");
      box-sizing: border-box;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      // z-index: -1;
    }
    .typeing {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      #work {
        font-size: 40px;
        color: #fff;
        font-weight: bold;
        font-family: "Poiret One", "华文行楷", cursive;
      }
    }
  }
}
/** pc */
@media screen and (min-width: 1400px) {
  .header-menu-pc {
    display: flex;
  }
  .header-menu-mobile {
    display: none;
  }
}
@media screen and (max-width: 1400px) and (min-width: 1200px) {
  .header-menu-pc {
    display: flex;
  }
  .header-menu-mobile {
    display: none;
  }
}

@media screen and (max-width: 1200px) and (min-width: 1000px) {
  .header-menu-pc {
    display: flex;
  }
  .header-menu-mobile {
    display: none;
  }
}
@media screen and (max-width: 1000px) and (min-width: 800px) {
  .header-menu-pc {
    display: flex;
  }
  .header-menu-mobile {
    display: none;
  }
}
/** mobile */
@media screen and (max-width: 800px) {
  .header-menu-pc {
    display: none !important;
  }
  .header-menu-mobile {
    display: block;
  }
  .header-img-box {
    height: 450px !important;
  }
  #work {
    font-size: 20px !important;
  }
}
// @media screen and (max-width: 600px) {
//     .header-menu-pc {
//         display: none;
//     }
//     .header-menu-mobile {
//         display: block;
//     }
//     .header-img-box {
//         height: 450px !important;
//     }

//     #work {
//         font-size: 20px !important;
//         color: blue !important;
//     }
// }

/** 动画  */
@keyframes menuListShow {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: 100%;
    opacity: 1;
  }
}
</style>