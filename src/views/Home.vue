<template>
  <div class="home">
      <div class="header">
        <span class="title">图灵</span>
        <div class="header-box">
          <span class="iconfont icon-jia"></span>
         
        </div>
      </div>
      <router-view></router-view>
      <van-tabbar v-model="active">
      
      <van-tabbar-item icon="chat" info="20">
        消息
      </van-tabbar-item>
      <van-tabbar-item icon="idcard" dot>
        联系人 
      </van-tabbar-item>
      <van-tabbar-item icon="browsing-history" info="5">发现</van-tabbar-item>
      <van-tabbar-item icon="contact" >我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  data() {
    return {
      active: 0
    };
  },
  watch: {
    active() {
      switch (this.active) {
        case 0:
          this.$router.push("/home/list");
          break;
        case 1:
          this.$router.push("/home/mail");
          break;
        case 2:
          this.$router.push("/home/find");
          break;
        case 3:
          this.$router.push("/home/list");
          break;
      }
    }
  },
  created() {
     switch (this.$route.path) {
        case "/home/list":
          this.active = 0;
          break;
        case "/home/mail":
           this.active = 1;
          break;
        case "/home/find":
          this.active = 2;
          break;
        case 3:
          this.$router.push("/home/list");
          break;
      }
  },
};
</script>
<style scoped>
.home {
  position: absolute;
  width: 100%;
}
.header {
  height: 1.533333rem;
  background: rgb(48, 48, 48);
  color: #fff;
  line-height: 1.533333rem;
  text-align: left;
  padding-left: 0.533333rem;
  font-size: 0.55rem;
}
.header-box {
  display: block;
  margin-right: 0.4rem;
  float: right;
}
.header-box span {
  font-size: 0.5rem;
}
.header-box .icon-fangdajing {
  margin-right: 0.8rem;
  font-size: 0.6rem;
}
.van-tabbar-item a {
  color: #666;
}
.van-tabbar-item--active a {
  color: #38f;
}
</style>