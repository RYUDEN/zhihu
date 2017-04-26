<template>
  <div class="cont">
    <div v-if="data.image" class="cont-img">
      <img  :src="data.image" alt="">
      <div class="cont-img-mask"></div>
      <h2 class="cont-title">{{data.title}}</h2>
    </div>
    <div class="cont-answer" >
      <div @click.prevent="pop($event)" v-html="data.body">
      </div>
    </div>
    <div v-if="loading" class="loading">
      <div></div>
    </div>
    <h3 class="back" @click="backTohis"><span>←      返回</span></h3>
  </div>
</template>
<script type="text/ecmascript-6">
  import api from './../api/index'
  import touch from './../touch/touch'
  export default{
    created(){
      var vue =this;
      vue.loading = true;
      api.getId(this.$route.query.id).then(
        (response) => {
          response = response.body;
          this.data = response;
          vue.loading = false
        }
      );

    },
    data(){
      return{
        data:'',
        loading:false
      }
    },
    methods:{
      pop(e) {
        let href = e.target.href;
        if (href) {
          window.open(href);
        }
    },
      back(event){
        touch.startHandler(event);
        touch.moveHandler(event);
        touch.endHandler();
        touch.addListener()
      },
      backTohis:function () {
        window.history.back()
      }
  }
  }
</script>
<style>
  .cont{
    position: relative;
    margin-bottom: 50px;
  }
  .cont-img{
    position: relative;
    width: 100%;
  }
  .cont-img img{
    width: 100%;
    filter: blur(1px);
  }
  .cont-img-mask{
    position: absolute;
    bottom:0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 238, 248, 0.3);
  }
.cont-title{
  position: absolute;
  right: 0;
  bottom: 0;
  color: black;
  margin: 15px;
  width: 66%;
  text-align: right;
  text-shadow: dimgray 0 0 1px;
  }
  .cont-answer{
    position: relative;
    padding: 3%;
  }
  h2,li,p{
    text-align: left;
    padding: 2px;
  }
  a{
    word-break: break-all;
  }
  .headline-title{
    color: #5b7492;
  }
  .meta{
    text-align: left;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .meta .avatar{
    vertical-align: middle;
    display: inline-block;
    width: 40px;
    border-radius: 50%;
  }
  .meta span{
    color: #666;
  }
  .meta .author{
    color: #aa488c;
    display: inline-table;
  }
  .question:before{
    content: "";
    display: block;
    height: 100%;
    border-right: 1px solid black;
  }
  .content-image{
    max-width:100%;
  }
  .view-more{
    text-align: center;
    margin-bottom: 5px;
    padding: 5px;
    position: relative;
    border: 1px solid #2d78e7;
  }
  .back{
    position: fixed;
    bottom: 0;
    margin-bottom: 0;
    vertical-align: middle;
    background-color:rgba(255,255,255,0.8);
    width: 100%;
    height: 35px;
    z-index:999;
  }
  @media screen and (min-width:420px ) {
    .cont{
      width: 60%;
      margin: auto;
    }
  }
</style>
