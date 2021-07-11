<template>
  <div class="blog-footed-box">
    <div class="blog-footed">
      <p>
        服务运行
        <span v-html="longTime"></span>
        <span class="timeJump">(●'◡'●)ﾉ♥</span>
      </p>
      <p>Copyright © www.guofeian.cn All Rights Reserved.</p>
      <p>
        © 2021 <a href="#">GF.Blog</a>. 由
        <a href="https://vitejs.cn/" target="_blank">Vite</a> 强力驱动. 备案号
        津ICP备20001237号-1
      </p>
    </div>
    <div id="flying-fish"></div>
    <a-back-top>
      <div class="to-top">
        <img src="@/assets/images/tp-top.png" width="50" height="50" />
      </div>
    </a-back-top>
  </div>
</template>

<script >
import FishRun from "@/plugins/animation/fish";
export default {
  data() {
    return {
      longTime: "",
    };
  },
  mounted() {
    this.runTime();
    FishRun.init("#flying-fish", "#b2bec3");
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    runTime() {
      var oldTime = new Date("2021/06/20 00:00:00");
      this.timer = setInterval(() => {
        let nowTime = new Date();
        let longTime = nowTime - oldTime;
        var days = longTime / 1000 / 60 / 60 / 24; //计算剩余的天数
        var hours = (longTime / 1000 / 60 / 60) % 24; //计算剩余的小时
        var minutes = (longTime / 1000 / 60) % 60; //计算剩余的分钟
        var seconds = (longTime / 1000) % 60; //计算剩余的秒数
        this.longTime =
          parseInt(days.toString(), 10) +
          "天" +
          parseInt(hours.toString(), 10) +
          "小时" +
          parseInt(minutes.toString(), 10) +
          "分" +
          parseInt(seconds.toString(), 10) +
          "秒";
      }, 1000);
    },
  },
};
</script>

<style lang="scss">
.blog-footed-box {
  padding: 10px;
  text-align: center;
  background: #232323;
  color: #fff;
  margin-top: 200px;
}
.blog-footed {
  /*时间跳动*/
  .timeJump {
    animation: my-face 5s infinite ease-in-out;
    -webkit-animation: my-face 5s infinite ease-in-out;
    display: inline-block;
    margin: 0 5px;
  }
  > p {
    margin: 5px 0;
    font-size: 12px;
  }
}
// 去顶部
.to-top {
  border-radius: 5px;
  background: #fff;
  display: flex;
  justify-content: center;
  box-shadow: 2px 2px 5px #409eff;
}
</style>