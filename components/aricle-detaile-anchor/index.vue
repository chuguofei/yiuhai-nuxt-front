<template>
  <div>
    <a-anchor-link
      v-for="(item, index) in list"
      :key="index"
      :href="`#${item.anchor}`"
      :title="item.text"
    >
      <AnchorLink v-if="item.children" :list="item.children" />
    </a-anchor-link>
  </div>
</template>


<script>
export default {
  name: "AnchorLink",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>