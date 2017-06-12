<template>
  <transition name="homeCard">
  <div class="hello">
    <div class="timeTitle">
      <p class="list-time">{{time}}</p>
    </div>
    <div class="list" v-for="(x,index) in ul">
      <p class="list-time" v-if="index>0">{{x.date}}</p>
      <div  @click="go(y.id)" v-for="y in x.stories">
        <div class="list-con">
          <img :src="y.images[0]" alt="">
          <div class="list-title"><p>{{y.title}}</p></div>
        </div>
      </div>
    </div>
    <div class="maskCard" v-show="loading">
      <i class="fa fa-spinner fa-spin fa-2x loading"></i>
    </div>
  </div>
  </transition>
</template>

<script>
import api from './../api/index'
export default {
  props:{
    list:Array,
    cot:Number
  },
  created(){
    var li = this.list;
    this.ul = li;
    this.count = this.cot;
    this.$emit('ref',this.$route.path)

  },
    mounted(){
        addEventListener('scroll',this.show)
  },
    beforeDestroy() {
      removeEventListener('scroll',this.show)
    },
  name: 'hello',
    data () {
    return {
      time:'今日热闻',
      ul:[],
      scroller: null,
      loading:false,
      count:null
    }
  },
    methods:{
    go(id){
      this.$router.push(
        {
          path:"cont",
          query:{
            id:id
          }
        }
      )
    },
    show(){
            let vue = this;
            let Screen = window.innerHeight;//屏幕高度
            let scroll =    document.body.scrollTop;//滚动条 滚动的高度
            let plus = document.body.scrollHeight;// 文档总共的高度     当文档滚动到最下方时候,screen + scroll = plus
            let time= document.getElementsByClassName('list-time');//所有的时间
            if(Screen+scroll>=plus){
               removeEventListener('scroll',this.show);
               this.loadBefore()
            };
            for (let index = 0;index<time.length;index++){
              let offset = time[index].getBoundingClientRect().top;
              if(offset<0){
                vue.time = vue.ul[index].date
              }
            };
    },
    getList(){
      var vue = this;
      api.getBefore(vue.GetDate(vue.count)).then((res) => {
        let ai = res.body;
        ai.date = ai.date.substring(0,4)+"年"+ai.date.substring(4,6)+"月"+ai.date.substring(6,8)  +"日";
        vue.ul.push(ai);
        vue.loading = false
      });
    },

    loadBefore(){
      var vue = this;
      vue.loading = true;
      setTimeout(() => {
        vue.count--;
        let date = vue.count
        vue.$emit('callCount',date)
        vue.getList();
        addEventListener('scroll',this.show)
      },3000)
    },
    GetDate(Count) {
      var dd = new Date();
      dd.setDate(dd.getDate() + Count);
      var y = dd.getFullYear();
      var m = dd.getMonth() + 1;
      m = m > 10 ? m : "0" + m
      var d = dd.getDate();
      d = d >= 10 ? d : "0" + d;
      return y + "" + m + "" + d;
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .hello{
    margin-bottom: 50px;
    margin-top: 35px;
    .timeTitle{
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 999;
      .list-time{
        width: 100%;
        text-align: center;
        line-height: 35px;
        background-color: #2287de;
        color: white;
      }
    }
    .list-con {
      padding: 15px;
      background-color: #ffffff;
      position: relative;
      height: 90px;
      border-bottom: 1px solid #EEE;
      img{
        position: absolute;
        width: 90px;
      }
      .list-title{
          margin-left: 120px;
          position: absolute;
          bottom: 45px;
          right: 30px;
          color: #2287de;
          text-align: right;
      }
    }
    .list-time{
        width: 100%;
        text-align: center;
        line-height: 35px;
        background-color: #2287de;
        color: white;
    }
    .maskCard{
      position: fixed;
      background-color: rgba(34, 135, 222, 0.05);
      width: 100%;
      height: 100%;
      top:0;
      transition: 0.5s;
    }
    .loading{
      margin: 80% auto;
      width: 100%;
      text-align: center;
    }
  }
.homeCard-enter-active{
  animation:homeIn 0.5s;
}
.homeCard-leave-active{
  animation:homeOut 0.5s;
}
@keyframes homeIn{
  from{
    opacity: 0;
    /*transform:scale(1.5);*/
  }
  to{
    opacity: 1;
    /*transform:scale(1);*/
  }
}
@keyframes homeOut{
  from{
    opacity: 1;
    /*transform:scale(1);*/
  }
  to{
    opacity: 0;
    /*transform:scale(1.5);*/
  }
}
</style>
