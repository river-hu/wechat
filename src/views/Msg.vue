<template>
  <div class="msg">
      <div class="header">
        <van-icon @click="back" name="arrow-left" />
        <span>用户1</span>
        <van-icon name="more-o" class="pos" />
      </div>
      <van-pull-refresh class="bg" v-model="isLoading"  @refresh="onRefresh">
        <div class="box">
          <div class="list-box">
            <div class="list" :class="{userlist:item.isuser,melist:!item.isuser}" v-for="(item,index) in msglist" v-bind:key="index">
              <img :src="item.userimg" class="img1" alt="">
              <div class="msg-box">  <div  :class="{user:item.isuser,me:!item.isuser}"></div>  <div v-html="item.content"></div> </div>
              <img :src="item.userimg" class="img2" alt="">
              
           </div>
            
          </div>
        </div>
      </van-pull-refresh>
      <div class="bottom"></div>
  </div>
</template>

<script>
export default {
  name: "msg",
  data() {
    return {
    count: 0,
      isLoading: false,
      msglist:[
        {
          userimg:"https://avatar.csdn.net/0/B/E/3_huchangjiang0.jpg",
          content:`asdhkjashdkjashk <i>chehsijajaj</i>`,
          isuser:false,

        },
        {
          userimg:"https://avatar.csdn.net/0/B/E/3_huchangjiang0.jpg",
          content:"消息的内容",
          isuser:false,
          
        },
        {
          userimg:"https://avatar.csdn.net/0/B/E/3_huchangjiang0.jpg",
          content:"消息的内容",
          isuser:true,
          
        },
        {
          userimg:"https://avatar.csdn.net/0/B/E/3_huchangjiang0.jpg",
          content:"消息的内容",
          isuser:false,
          
        }
      ]
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
     onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    }
  }
};
</script>
<style lang="less" scoped>
.msg {
  background: #fff;
  min-height: 100vh;
  .box{
    width: 100vw;
    margin-top: -1.7rem;
    background: #f1f1f1;
    height: 100vh;
    box-sizing: border-box;
    padding-top: 1.7rem;
    .list-box{
      width: 100%;
      position: absolute;
      bottom: 2rem;
      max-height: 100vh;
    }
    .userlist{
        text-align: left;
        .msg-box{
           margin-left: .3rem;
        }
        .img2{
          display: none;
        }
    }
    .melist{
      text-align: right;
       .msg-box{
           margin-right: .3rem;
        }
        .img1{
          display: none;
        }
    }
    .list{
      width: 100%;
      color: #000;
      font-size: .3rem;
      line-height: 1rem;
      margin: .3rem 0;
      img{
        width: 1rem;
        height: 1rem;
        margin: .2rem;
        vertical-align: top;
      }
      .msg-box{
        display: inline-block;
        vertical-align: top;
        padding: 0 .2rem;
        background: #fff;
        max-width: 7rem;
        border:1px solid #eee;
        position: relative;
        border-radius: 5px;
        .user{
          width: 0;
          height: 0;
          position: absolute;
          border: .2rem solid transparent;
          border-right-color: #fff;
          left: -.4rem;
          top: .3rem;
        }
        .me{
           width: 0;
          height: 0;
          position: absolute;
          border: .2rem solid transparent;
          border-left-color: #fff;
          right: -.4rem;
          top: .3rem;
        }
      }
      
    }
  }
  .bg{
    width: 100vw;
  }
  .header {
    height: 1.533333rem;
    background: rgb(48, 48, 48);
    color: #fff;
    line-height: 1.533333rem;
    text-align: left;
    padding-left: 0.533333rem;
    font-size: 0.55rem;
    i {
      line-height: 1.6rem;
      vertical-align: middle;
    }
    span {
      font-size: 0.5rem;
      line-height: 1.2rem;
      vertical-align: middle;
      margin-left: 0.3rem;
    }
    .pos {
      float: right;
      margin-right: 0.5rem;
    }
  }
  .bottom{
    width: 100vw;
    height: 1rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
  }
}
</style>

