<template>
  <div class="about-account-view">
    <div class="flex justify-center margin-tb-15">
      <a-popover placement="top" v-for="item in aboutAcountData" :key="item.title">
        <template slot="content">
          <span v-if="item.type == 'text'"
            ><a :href="item.href">{{ item.href }}</a></span
          >
          <img v-if="item.type == 'img'" width="150" height="150" :src="item.href" />
        </template>
        <template slot="title">
          <span class="font-bold" v-text="item.title"></span>
        </template>
        <div class="account-box" @click="linkTo(item)">
          <i class="account-icon" :class="item.icon" aria-hidden="true"></i>
        </div>
      </a-popover>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutAcountData: [
        {
          type: "img",
          title: "QQ",
          icon: "fa fa-qq",
          href:
            "https://gf-oss.oss-cn-beijing.aliyuncs.com/common/28da48280caf75f58c54fbc00af67b9.jpg",
        },
        {
          type: "img",
          title: "wechat",
          icon: "fa fa-weixin",
          href:
            "https://gf-oss.oss-cn-beijing.aliyuncs.com/common/47549ff790c16faf7b869d663e9d28a.jpg",
        },
        {
          type: "text",
          title: "GitHub",
          icon: "fa fa-github",
          href: "https://github.com/chuguofei",
        },
      ],
    };
  },
  methods: {
    linkTo(item) {
      window.open(item.href);
    },
  },
};
</script>

<style scoped lang="scss">
.about-account-view {
  .account-box {
    padding: 5px;
    display: inline-block;
    background: rgba(0, 0, 0, 0.5);
    margin: 0 6px;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    text-align: center;
    cursor: pointer;
    .account-icon {
      font-size: 16px;
      color: #fff;
    }
  }
}
</style>
