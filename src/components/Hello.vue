<template>
  <div class="hello">
    <div class="list" v-for="x in list">
      <p class="list-time">{{x.date.substring(0,4)+"/"+x.date.substring(4,6)+"/"+x.date.substring(6,8)}}</p>
      <div  @click="go(y.id)" v-for="y in x.stories">
        <div class="list-con">
          <img :src="y.images[0]" alt="">
          <div class="list-title"><p>{{y.title}}</p></div>
        </div>
      </div>
    </div>
    <i class="fa fa-spinner fa-spin fa-2x"  v-show="loading"></i>
  </div>
</template>

<script>
  import api from './../api/index'
export default {
  created(){
    var vue = this;
    vue.loading = true;
    api.getNews().then((response) => {
        console.log(response.body);
        response = response.body;
        vue.list.push(response);
        vue.loading = false
    })
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
      list:[],
      count:1,
      scroller: null,
      loading:false
    }
  },
  methods:{
    go(id) {
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
            var Screen = window.innerHeight;//屏幕高度
            var scroll =    document.body.scrollTop;//滚动条 滚动的高度
            var plus = document.body.scrollHeight;// 文档总共的高度     当文档滚动到最下方时候,screen + scroll = plus

            if(Screen+scroll>=plus){
               removeEventListener('scroll',this.show);
               this.loadBefore()
            }
    },
    getList(){
      var vue = this;
      api.getBefore(vue.GetDate(vue.count)).then((res) => {
        res = res.body;
        vue.list.push(res);
        vue.loading = false
      })
    },
    loadBefore(){
      var vue = this;
      vue.loading = true;
      setTimeout(() => {
        vue.count--;
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    position: relative;
    top: 50px;
    padding: 10px;
  }
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
  .list-time{
    font-size: 20px;
    color: white;
    display: inline-block;
    background-color: #2d78e7;
    padding: 2px 20px;
    border-radius: 13px;

    /*width: 100%;*/
  }
  .list-con{
    position: relative;
    display: flex;
    margin: 10px 0;
    padding: 8px;
    border-radius: 8px;
    box-shadow: #666666 1px 1px 9px;
  }
  .list-con img{
    width: 100px;
    height: 100px;
  }
  .list-title{
    /*display: flex;*/
    width: 100%;
    bottom: 0;
    padding: 2px;
    margin-left: 5px;
    z-index: 9 ;
    background-color: white;
  }
  @media screen and (min-width:420px ) {
    .hello{
      width: 60%;
      margin: auto 20%;
      box-shadow: #666666 0 0 5px;
    }
    .list-con{
      width: 90%;
      margin: 20px auto;
    }
  }

</style>
