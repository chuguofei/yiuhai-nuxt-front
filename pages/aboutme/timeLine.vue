<template>
  <div>
    <h4 v-text="firstTitle"></h4>
    <ul class="time-line">
      <li v-for="(item, index) in infoList" :key="index">
        <div class="title" v-html="item.label"></div>
        <template v-if="item.infoData">
          <span :key="_index" v-for="(_p, _index) in item.infoData" class="block font-12"
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
    firstTitle: {
      type: String,
      default: "",
    },
    infoList: {
      type: Array,
      default: () => [],
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
