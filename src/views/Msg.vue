<template>
  <div class="msg">
      <div class="header">
        <van-icon @click="back" name="arrow-left" />
        <span>{{name}}</span>
        <van-icon  name="more-o" class="pos" />
      </div>
      
        <div class="box">
          <div class="list-box" id="box">
            <div class="list" :class="{userlist:item.isuser,melist:!item.isuser}" v-for="(item,index) in msglist" v-bind:key="index">
              <img :src="item.userimg" class="img1" alt="">
              <div class="msg-box">  <div  :class="{user:item.isuser,me:!item.isuser}"></div>  <div v-html="item.content"></div> </div>
              <img :src="item.userimg" class="img2" alt="">
              
           </div>
            
          </div>
        </div>
     
      <div class="bottom">
         <van-field
          v-model="message"
          type="textarea"
           center
         clearable
          placeholder="请输入消息内容"
          rows="1"
          autosize
        >
        <van-button slot="button" @click="send" size="small" type="primary">发送</van-button>
        </van-field>
      </div>
  </div>
</template>

<script>
import io from "socket.io-client";
export default {
  name: "msg",
  data() {
    return {
      count: 0,
      isLoading: false,
      message: "",
      ws: {},
      name: "",
      id:"",
      msglist: [
        
      ]
    };
  },
  watch: {
    msglist: "scrollToBottom"
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    scrollToBottom: function() {
      this.$nextTick(() => {
        var div = document.getElementById("box");

        div.scrollTop = div.scrollHeight;
      });
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    sendMsg(msg) {
      let name = this.id;
      this.ws.emit("send.message", name,msg);
    },
    addMessage(from, msg) {
      this.msglist.push({
        userimg: "./header.jpg",
        content: msg,
        isuser: true
      });
    },
    send() {
      let msg = this.message;
      if (msg == "") {
        this.$toast("消息内容不能为空");
        return;
      }
      this.sendMsg(msg);
      this.msglist.push({
        userimg: "./header.jpg",
        content: msg,
        isuser: false
      });
      this.message = "";
    }
  },
  created() {
    let url = this.url;
    this.ws = io.connect(url);
    this.name = this.$route.query.name;
    this.id = this.$route.query.id;
 
    let name = this.name;
    this.ws.on("connect", () => {
      this.ws.emit("join", "server");
    });
    this.ws.on("send.message", (from, msg,id) => {
      //检测私聊信息
      if(from==name){
          this.addMessage(from, msg);
          this.id = id;
      }
    });
     this.ws.on("all", (from, msg) => {
      //检测私聊信息
      this.addMessage(from, msg);
    });
  }
};
</script>
<style lang="less" scoped>
.msg {
  background: #fff;
  min-height: 100vh;
  .box {
    width: 100vw;
    margin-top: 1.6rem;
    background: #f1f1f1;
    height: 100vh;
    box-sizing: border-box;
    padding-top: 1.7rem;
    .list-box {
      width: 100%;
      position: absolute;
      bottom: 0rem;
      max-height: 100vh;
      overflow-y: scroll;
      padding-bottom: 2rem;
      box-sizing: border-box;
    }
    .userlist {
      text-align: left;
      .msg-box {
        margin-left: 0.3rem;
      }
      .img2 {
        display: none;
      }
    }
    .melist {
      text-align: right;
      .msg-box {
        margin-right: 0.3rem;
      }
      .img1 {
        display: none;
      }
    }
    .list {
      width: 100%;
      color: #000;
      font-size: 0.3rem;
      line-height: 1rem;
      margin: 0.3rem 0;
      img {
        width: 1rem;
        height: 1rem;
        margin: 0.2rem;
        vertical-align: top;
      }
      .msg-box {
        display: inline-block;
        vertical-align: top;
        padding: 0 0.2rem;
        background: #fff;
        max-width: 7rem;
        border: 1px solid #eee;
        position: relative;
        border-radius: 5px;
        .user {
          width: 0;
          height: 0;
          position: absolute;
          border: 0.2rem solid transparent;
          border-right-color: #fff;
          left: -0.4rem;
          top: 0.3rem;
        }
        .me {
          width: 0;
          height: 0;
          position: absolute;
          border: 0.2rem solid transparent;
          border-left-color: #fff;
          right: -0.4rem;
          top: 0.3rem;
        }
      }
    }
  }
  .bg {
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 1000;
    box-sizing: border-box;
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
  .bottom {
    width: 100vw;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
    border-top: 1px solid #eee;
    box-shadow: -6px 0px 20px 7px #dedede;
  }
}
</style>

