<template>
  <div class="home">
      <div class="header">
        <span class="title">图灵</span>
        <div class="header-box">
          <span @click="getall" class="iconfont icon-jia"></span>
         
        </div>
      </div>
      <router-view></router-view>
      
 <van-tabbar v-model="active">
      
      <van-tabbar-item to="/home/list"	 icon="chat" info="20">
        消息
      </van-tabbar-item>
      <van-tabbar-item to="/home/mail" icon="idcard" dot>
        联系人 
      </van-tabbar-item>
      <van-tabbar-item to="/home/about" icon="contact" >我的</van-tabbar-item>
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
  methods: {
    getall() {
      this.ws.emit("getuser");
      this.ws.on("alluser", msg => {
        this.list = [];
        for (let i in msg) {
          if (msg[i].name && msg[i].name != "server") {
            this.list.push(msg[i]);
          }
        }
      });
    }
  },
  created() {}
};
</script>
<style scoped>
.home {
  position: absolute;
  width: 100%;
  min-height: 100vh;
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