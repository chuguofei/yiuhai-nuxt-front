<template>
  <div>
    <ul class="time-line">
      <li v-for="(item, index) in infoList" :key="index">
        <div class="title">
          <span v-text="item.label"></span>
          <a v-if="item.href" :href="`http://${item.href}`" target="_blank">{{
            item.href
          }}</a>
        </div>
        <template v-if="item.infoData">
          <span
            :key="_index"
            v-for="(_p, _index) in item.infoData"
            class="block font-13"
            ><i v-text="_p"></i
          ></span>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    infoList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    toLink(href) {
      window.location.href = href;
    },
  },
};
</script>

<style scoped lang="scss">
.time-line {
  border-left: 2px #394a5a solid;
  padding: 0;
  margin: 0;

  li {
    list-style: none;
    position: relative;
    margin: 15px;
    &::after {
      content: "";
      position: absolute;
      left: -23px;
      top: 5px;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: #394a5a;
    }
  }
}
</style>
