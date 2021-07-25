<template>
  <!-- 广告component -->
  <div class="advertising margin-top-10 margin-lr-5" v-if="list.length > 0">
    <a-carousel autoplay dots>
      <div :key="index.id" v-for="(item, index) in list">
        <!-- @/assets/images/home-header-bg.jpg -->
        <img @click="aliyunJump(item.href)" :src="item.url" :style="{ height: height }" />
      </div>
    </a-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    height: {
      type: String,
      default: "200px",
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    aliyunJump(url) {
      window.open(url);
    },
  },
};
</script>
