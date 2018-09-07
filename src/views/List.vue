<template>
    
      <div class="body">
          <v-touch v-for="(v,index) in list"  :key="index" v-on:swipeleft="del(index)" v-on:swiperight="close(index)">
              <div @click="goto(index)">
              <van-row  class="list-box"  :class="{'list-active':index==listIndex}">
                    <van-col class="header-list" span="13">
                        <img src="../../public/header.jpg" alt="">
                        <span class="user-name">{{v.name}}</span>
                    </van-col>
                    <van-col span="3">&nbsp;</van-col>
                    <van-col span="8" class="time-list">上午 08:30</van-col>
                    <div class="set icon-shanchu iconfont" v-fb @click="delto(index)">

                    </div>
                </van-row>
              </div>
               
          </v-touch>

      </div>

</template>

<script>
import axios from 'axios';
export default {
  name: "list",
  data() {
    return {
      list: [],
      listIndex: -1
    };
  },
  methods: {
    del(index) {
      this.listIndex = index;
    },
    goto(index){
      let name = this.list[index].name;
      this.$router.push('/msg?name='+name);
    },
    delto(index){
      this.list.splice(index,1)
    },
    close(index) {
        if(this.listIndex == index){
            this.listIndex = -1;
        }
    }
  },
  created(){
    let url = this.url;
    axios.get(url+"/socket").then((res)=>{
      console.log(res.data)
      this.list = res.data;
     
    })
  }
};
</script> 


<style scoped>
.body {
  width: 100%;
  overflow: hidden;
  position: relative;
  top: -2px;
}
.list-box {
  height: 1.892593rem;
  border-bottom: 1px solid rgb(217, 217, 217);
  padding-left: 0.361111rem;
  padding-top: .15rem;
  position: relative;
  transition: all 0.2s linear;
  box-sizing: border-box;
  transform: translateX(0rem);
}
.list-active {
  transform: translateX(-2rem);
}
.header-list {
  padding-top: 0.185185rem;
  box-sizing: border-box;
  text-align: left;
  height: 1.592593rem;
}
.header-list img {
  width: 1.222222rem;
  height: 1.222222rem;
}
.user-name {
  font-size: 0.398148rem;
  font-weight: bold;
  vertical-align: top;
  margin-left: 0.324074rem;
  line-height: 0.8rem;
}
.time-list {
  color: #aaa;
  line-height: 0.85rem;
  text-align: right;
  padding-right: 0.277778rem;
  font-size: 0.35rem;
}
.set {
  height: 100%;
  position: absolute;
  width: 2rem;
  top: 0;
  background: red;
  line-height: 1.892593rem;
  color: #fff;
  right: -2rem;
  border-bottom: 1px solid rgb(217, 217, 217);
  font-size: 0.65rem;
  transition: all .3s linear;
}
</style>

