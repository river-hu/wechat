<template>
    <div class="mail">
         <v-touch >
                <van-row  class="list-box">
                    <van-col class="header-list" span="8">
                        <img src="../../public/header.jpg" alt="">
                        <span class="user-name">用户名称</span>
                    </van-col>
                </van-row>
          </v-touch>
             <v-touch >
                <van-row  class="list-box">
                    <van-col class="header-list" span="8">
                        <img src="../../public/header.jpg" alt="">
                        <span class="user-name">用户名称</span>
                    </van-col>
                </van-row>
          </v-touch>
             <v-touch >
                <van-row  class="list-box">
                    <van-col class="header-list" span="8">
                        <img src="../../public/header.jpg" alt="">
                        <span class="user-name">用户名称</span>
                    </van-col>
                </van-row>
          </v-touch>
             <v-touch >
                <van-row  class="list-box">
                    <van-col class="header-list" span="8">
                        <img src="../../public/header.jpg" alt="">
                        <span class="user-name">用户名称</span>
                    </van-col>
                </van-row>
          </v-touch>
    </div>
</template>

<script>
export default {
  name: "mail"
};
</script>

<style scoped>
.list-box {
  height: 1.592593rem;
  border-bottom: 1px solid rgb(217, 217, 217);
  padding-left: 0.361111rem;
  position: relative;
  transition: all 0.2s linear;
  box-sizing: border-box;
  transform: translateX(0rem);
}
.header-list {
  padding-top: 0.185185rem;
  box-sizing: border-box;
  text-align: left;
  height: 1.592593rem;
}
.header-list img {
  width: 1.122222rem;
  height: 1.122222rem;
}
.user-name {
  font-size: 0.398148rem;
  font-weight: bold;
  vertical-align: top;
  margin-left: 0.324074rem;
  line-height: 0.8rem;
}
</style>


