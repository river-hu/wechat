<template>
  <div class="about">
      <div class="header">
        <img src="../../public/header.jpg" alt="">
        <div class="title">微信昵称</div>
      </div>
  </div>
</template>

<script>
export default {
  name: "about"
};
</script>
<style lang="less" scoped>
.about {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: -1;
  background: #f1f1f1;
  text-align: left;
  .header {
    width: 100%;
    height: 1.6rem;
    background: #fff;
    margin-top: .38rem;
    img{
      width: 1.333333rem;
      height: 1.333333rem;
      vertical-align: middle;
      line-height: 1.6rem;
      margin-top: .133333rem;
      margin-left: .266667rem;
    }
    .title{
      display: inline-block;
      width: 50%;
      height: 1.066667rem;
      font-size: .45rem;
      padding-left: .4rem;
    }
  }
}
</style>
