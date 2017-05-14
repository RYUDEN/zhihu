<template>
  <div id="header">
    <transition name="title">
      <div v-if="!open" class="title" @click="navBar">
        <img class="logo" src="./logo.png" alt="">
      </div>
    </transition>
    <transition name="bar">
      <div v-if="open" class="titleNav">
        <div><router-link to="/">首页</router-link></div>
        <div><router-link to="/themes">主题日报</router-link></div>
        <div><router-link to="/me">关于</router-link></div>
        <div @click="navBar"><i class="close-btn fa fa-times "></i></div>
      </div>
    </transition>

  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    data(){
      return{
        open:true
      }
    },
    methods:{
      navBar:function () {
        this.open = !this.open
      }

    }
  }
</script>
<style>
  .title{
    position: fixed;
    /*box-sizing: border-box;*/
    top:0;
    margin: 0;
    padding: 5px;
    height: 40px;
    background-color: white;
    width: 100%;
    box-shadow: rgba(0,0,0,0.4) 0 0 5px;
    z-index: 999;
  }
  .logo{
    height: 40px;
  }
  .titleNav{
    position: fixed;
    top: 0;
    margin: 0;
    padding: 5px;
    height: 40px;
    width: 100%;
    display: flex;
    background-color: rgba(255,255,255,0.8);
    box-shadow: rgba(0,0,0,0.4) 0 0 5px;
    z-index: 999;
  }
  .titleNav div{
    line-height: 40px;
    flex: 1;
  }
  .close-btn{
    font-size: 14px;
    color: #2d78e7;
  }
  .title-enter-active{
    animation: title-in 0.6s;
  }
  .title-leave-active{
    animation: title-out 0.6s;
  }
  @keyframes  title-in{
    from{
      /*transform: translateX(-100%);*/
      opacity: 0;
      transform: scale(0.8)
    }
    to{transform: translateX(0)}
  }
  @keyframes title-out {
    from{
      transform: translateX(0)}
    to{
      /*transform: translateX(100%);*/
      opacity: 0;
      transform: scale(0.8)
    }
  }
  .bar-enter-active{
    animation: bar-in 0.6s;
  }
  .bar-leave-active{
    animation: bar-out 0.6s;
  }
  @keyframes bar-in {
    from{
      /*transform: translateX(-100%);*/
      opacity: 0;
      transform: scale(0.8)
    }
    to{transform: translateX(0)}
  }
  @keyframes bar-out {
    from{transform: translateX(0)}
    to{
      /*transform: translateX(100%);*/
      opacity: 0;
      transform: scale(0.8)
    }
  }
</style>
