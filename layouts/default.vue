<template>
  <div>
    <MyHeader></MyHeader>
    <nuxt />
    <MyFooted></MyFooted>
  </div>
</template>

<script>
import MyHeader from "~/components/layout/MyHeader.vue";
import MyFooted from "~/components/layout/MyFooted.vue";
export default {
  components: { MyHeader, MyFooted },
  data() {
    return {};
  },
};
</script>