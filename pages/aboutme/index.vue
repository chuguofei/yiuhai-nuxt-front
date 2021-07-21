<template>
  <div class="about-me-view fade-in">
    <div class="left-body app-bg-color margin-right-10">
      <div v-for="(item, index) in aboutMeData" :key="index" class="enter-y">
        <h3 class="skills-title">
          <i :class="item.icon"></i>
          {{ item.title }}
        </h3>
        <time-line class="enter-y" :infoList="item.infoList"></time-line>
      </div>
    </div>
    <HomeWrapper></HomeWrapper>
  </div>
</template>

<script>
import HomeWrapper from "~/components/home/HomeWrapper.vue";
import timeLine from "./timeLine.vue";
export default {
  components: { HomeWrapper, timeLine },
  head() {
    return {
      title: "GF.关于我",
    };
  },
  data() {
    return {
      aboutMeData: [
        {
          title: "关于",
          icon: "fa fa-address-card-o",
          infoList: [
            {
              label: "昵称：GF",
            },
            {
              label: "爱好：写Bug，找Bug，修复Bug",
            },
            {
              label: "开发经验：2年",
            },
            {
              label: `Blog：`,
              href: "www.guofeian.cn",
            },
            {
              label: `Github：`,
              href: "www.github.com/chuguofei",
            },
            {
              label: "QQ：1633295931",
            },
          ],
        },
        {
          title: "技能",
          icon: "fa fa-fw fa-rocket",
          infoList: [
            {
              label: "Java",
              infoData: [
                "熟练使用 Springboot 框架搭建项目架构、了解 Springboot 运行原理。",
                "熟练使用 maven、ssm、mybatis、mybatis plus 等 Orm 框架。",
                "熟悉Dubbo + Zookeeper RPC 微服务架构。",
                "熟悉Spring Cloud 及 Eureka、Hystrix、Ribbon、Feign、Zuul、等相关依赖组件。",
                // "了解一点Jvm调优。",
                "熟练使用Redis缓存中间件，了解主从模式，哨兵模式。",
                "熟练使用RabbitMQ，了解MQ机制。",
                "熟练使用Docker，Docker Compose等编排工具。",
                "了解Jenkins 自动部署工具。",
                "熟练使用Mysql等数据库。",
                "熟练使用linux命令，熟练使用nginx,tomcat,pm2等容器部署前后端项目，负载均衡等配置。",
              ],
            },
            {
              label: "GoLang",
              infoData: [
                "熟练使用Bee Go、Gin 等开源框架。",
                "掌握gorm、xorm 等orm框架。",
                "研究过gin-vue-admin、gin-admin 等开源项目源码。",
              ],
            },
            {
              label: "Python",
              infoData: [
                "熟练使用Python3语法。",
                "可使用python写一些爬虫、处理excel等相关脚本。",
              ],
            },
            {
              label: "Vue",
              infoData: [
                "了解Mvvm，了解Vue运行原理，看过Vue源码。",
                "熟练使用vue全家桶,熟练es6+、typescript语法。",
                "熟练使用Sass+Cs3样式编排。",
                "了解Webpack 、Gulp等打包工具，了解Loader解析工具，了解Plugin相关插件。",
                "熟练Vue项目优化：首屏优化、Webpack体积优化，CDN优化，路由懒加载，Gzip等相关优化。",
                "熟练使用 Vue3.0 + typeScript + Vite 开发。",
                "了解qiankun.js微框架。",
                "mp-vue :熟练",
                "uni-app :熟练",
                "nuxt.js :熟练,掌握SEO。",
              ],
            },
            {
              label: "其他前端框架",
              infoData: ["React：学习中", "Angular：学习中"],
            },
            {
              label: "Flutter",
              infoData: [
                "熟练使用Dart语言。",
                "熟练使用flutter+android+swift做app跨端应用。",
                "熟练使用MethodChannel,EventChannel做底层交互，使用通道封装过高德地图等相关api。",
                "了解推送原理，app防杀机制，白名单引导等。",
                "注：前公司已有发布到商店app。",
              ],
            },
          ],
        },
        {
          title: "最后",
          icon: "fa fa-fw fa-rocket",
          infoList: [
            {
              infoData: [
                "写Blog的意义在于个人学习，以加深对技术点的理解，记录自己的成长经历，可以结交更多志同道合的朋友，在自己进步的同时，传播正能量，帮助他人，服务社会。",
                "网站内的文章，可能是原创，也可能是转载或者笔记，如果你有任何的意见或者建议，都可以通过社交账号联系我。",
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.about-me-view {
  width: 80%;
  margin: auto;
  box-shadow: 0 0 5px #ccc;
  display: flex;
  padding-top: 10px;
  .left-body {
    flex: 1;
    padding: 10px;
    .skills-title {
      border-bottom: 1px #ccd dashed;
    }
  }
}
</style>
