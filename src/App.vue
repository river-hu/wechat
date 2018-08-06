<template>
  <div id="app">
    
    <transition :name="$store.state.states">
    <router-view/>
    </transition>
    
  </div>
</template>
<script>
export default {
  name: "app",
  watch: {
    $route(to) {
      if (to.path == "/") {
        this.$store.commit("setTransition", "turn-off");
      } else {
        this.$store.commit("setTransition", "turn-on");
      }
    }
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 22px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.turn-on-enter {
  position: absolute;
  width: 100%;
  transform: translateX(100%);
}
.turn-on-leave-to {
  position: absolute;
  width: 100%;
  transform: translateX(-100%);
}
.turn-on-enter-active,
.turn-on-leave-active {
  position: absolute;
  width: 100%;
  transition: transform 0.5s ease;
}
.turn-off-enter {
   position: absolute;
  width: 100%;
  transform: translateX(-100%);
}

.turn-off-leave-to {
   position: absolute;
  width: 100%;
  transform: translateX(100%);
}
.turn-off-enter-active,
.turn-off-leave-active {
    position: absolute;
  width: 100%;
  transition: transform 0.5s ease;
}
.turn-off-leave-active {
  z-index: 2;
}
body{
  margin: 0;
  padding: 0;

}
</style>
