<template>
  <div id="app">
    <!--<img class="logo" src="./assets/logo.png">-->
    <head-view></head-view>
    <router-view></router-view>
  </div>
</template>

<script>
  import  api from './api/index'
  import headView from "./components/header/header"

export default {
  name: 'app',
  components:{headView},}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  body{
    margin: 0;
    padding: 0;
  }
  a{
    display: block;
    margin: 0;
    text-decoration: none;
    color: black;
  }
  img{
    border-radius: 5px;
  }
.loading{
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(200,200,200,0.5);
  z-index: 998;
}
@keyframes load {
  from {opacity: 0.8;transform: scale(0.5)}
  to {opacity: 0.2;transform: scale(1)}
}
  img{
    max-width: 100%;
  }
</style>
