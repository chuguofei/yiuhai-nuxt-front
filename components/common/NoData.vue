<template>
  <div class="no-more">
    <span class="content">我是有底线的</span>
  </div>
</template>


<style lang="scss" scoped>
.no-more {
  text-align: center;
  margin: 0 10px;
  position: relative;
  &::after{
    content: "";
    width: calc(50% - 50px);
    position: absolute;
    left: 0;
    top: 12px;
    border-bottom: 0.5px solid #ddd;
  }
  &::before{
    content: "";
    width: calc(50% - 50px);
    position: absolute;
    right: 0;
    top: 12px;
    border-bottom: 1px solid #ddd;
  }
  .content {
    color: #ccc;
    font-size: 12px;
  }
}
</style>