<template>
  <div class="about-me-view fade-in">
    <div class="left-body">
      <div v-for="(item, index) in aboutMeData" :key="index" class="enter-y">
        <h3 class="skills-title">
          <i :class="item.icon"></i>
          {{ item.title }}
        </h3>
        <time-line
          class="enter-y"
          v-for="(_item, _index) in item.skills"
          :key="_index"
          :firstTitle="_item.firstTitle"
          :infoList="_item.infoList"
        ></time-line>
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
  data() {
    return {
      aboutMeData: [
        {
          title: "关于",
          icon: "fa fa-address-card-o",
          skills: [
            {
              firstTitle: "",
              infoList: [
                {
                  label: "昵称：GF",
                },
                {
                  label: "爱好：写Bug，找Bug，修复Bug",
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
          ],
        },
        {
          title: "技能",
          icon: "fa fa-fw fa-rocket",
          skills: [
            {
              firstTitle: "后端",
              infoList: [
                {
                  label: "Java",
                  infoData: [
                    "熟练使用 MyBatis、MyBatis Plus 等Orm框架",
                    "了解Spring Boot 启动原理",
                    "了解 Dubbo、Spring Cloud",
                  ],
                },
                {
                  label: "GoLang",
                  infoData: ["熟练使用Vue全家桶"],
                },
              ],
            },
            {
              firstTitle: "前端",
              infoList: [
                {
                  label: "Vue",
                  infoData: ["熟练使用Vue全家桶"],
                },
                {
                  label: "React",
                  infoData: ["熟练使用Vue全家桶"],
                },
                {
                  label: "Angule",
                  infoData: ["熟练使用Vue全家桶"],
                },
              ],
            },
            {
              firstTitle: "数据库",
              infoList: [
                {
                  label: "Mysql",
                  infoData: [
                    "熟练使用 MyBatis、MyBatis Plus 等Orm框架",
                    "了解Spring Boot 启动原理",
                    "了解 Dubbo、Spring Cloud",
                  ],
                },
              ],
            },
            {
              firstTitle: "服务器",
              infoList: [
                {
                  label: "linux",
                  infoData: [
                    "熟练使用 MyBatis、MyBatis Plus 等Orm框架",
                    "了解Spring Boot 启动原理",
                    "了解 Dubbo、Spring Cloud",
                  ],
                },
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
