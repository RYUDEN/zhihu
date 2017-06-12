<template>
  <div id="app">
    <router-view :list="news" :cot="count" @callCount="baseCount" @ref="Rpfath"></router-view>
    <transition name="foot">
      <div id="foot" v-if="!open">
        <div @click="navToggle"><i class="fa fa-th"></i></div>
        <div><router-link to="/" class="fa fa-home"></router-link></div>
        <div><router-link to="/like" class="fa fa-heart"></router-link></div>
        <div @click="back"><i class="fa fa-reply" ></i></div>
      </div>
    </transition>
    <transition name="nav">
      <div id="navBar" v-if="open">
        <h2 class="title">知乎日报</h2>
        <div class="list">
          <ul>
            <li @click="go(item.id)" v-for="item in nav">
              <h4>
                {{item.name}}
              </h4>
              <p>
                {{item.description}}</p>
            </li>
          </ul>
        </div>
        <div class="close" @click="navToggle">
            <i class="fa fa-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import api from './api/index'
export default {
  name: 'app',
  data(){
    return{
      open:false,
      nav:[],
      news:[],
      count:1,
      like:true,
      path:''
    }
  },
  created(){
    let vue = this;

    api.getThemes().then((res) => {
      vue.nav = res.body.others;
    });
    api.getNews().then((res) => {

      let afe = res.body;
      let news = Object.assign({status:0},afe);
      news.date = news.date.substring(0,4)+"年"+news.date.substring(4,6)+"月"+news.date.substring(6,8)  +"日";
      vue.news.push(news)
    });
  },
  methods:{
    Rpfath(k){
        this.path = k
    },
    baseCount(c){
      this.count = c
    },
    navToggle(){
      this.open = !this.open
    },
      go(id){
      this.open = !this.open;
      this.$router.push(
        {
          path:"theme",
          query:{
            id:id
          }
        }
      )
    },
    back(){
      if(this.path ==='/cont'){
          window.history.back()
      }
    }

  }
}
</script>

<style lang="less" type="text/less">
@base:#2287de;
@active:#1e76c1;
h1,h2,h3,h4,h5,h6,p{
  margin: 0;
}
*{
  margin: 0;
  padding: 0;
}
h2.title {
  top: 50px;
  position: absolute;
  text-align: center;
  width: 100%;
}
#app{
  #foot{
    position: fixed;
    width: 100%;
    height: 45px;
    display: flex;
    bottom: 0;
    color: white;
    div{
      flex:1;
      text-align: center;
      line-height: 45px;
      vertical-align: middle;
      background-color: @base;
      a{
        color: white;
        display: block;
        line-height: 45px;
        vertical-align: middle;
        text-decoration: none;
      }
      &:active{
        background-color:@active;
      }
    }
  }
  #navBar{
    position: fixed;
    top: 0;
    width: 50%;
    height: 100%;
    background-color: @base;
    color: white;
    z-index: 99;
    .list{
      position: relative;
      height: 60%;
      top: 30%;
      overflow: scroll;
      ul{
        list-style: none;
        li{
          box-sizing: border-box;
          padding: 8px;

          width: 100%;
          &:active{
            background-color: @active;
          }
          h4{
            margin: 4px;
          }
          p{
            font-size: 13px;
            color: #e1e1e1;
          }
        }
      }
    }
    .close{
      position: absolute;
      box-sizing: border-box;
      width: 100%;
      height: 45px;
      bottom: 0;
      font-size: 20px;
      line-height: 35px;
      vertical-align: center;
      text-align: center;
      padding: 5px;
      &:active{
        background-color: @active;
      }
    }
  }
}
div{
  .fa{
    transition:0.3s;
  }
  &:active>.fa{
    transform:scale(1.5);
    opacity: 0;
  }
}
.nav-enter-active{
  animation:navBarIn 0.6s;
}
.nav-leave-active{
  animation:navBarOut 0.6s;
}
@keyframes navBarIn{
  from{
    opacity: 0;
    transform:translateX(-100%);
  }
  to{
    opacity: 1;
    transform:translateX(0);
  }
}
@keyframes navBarOut{
  from{
    opacity: 1;
    transform:translateX(0);
  }
  to{
    opacity: 0;
    transform:translateX(-100%);
  }
}
.foot-enter-active{
  animation:footIn 0.3s;
}
.foot-leave-active{
  animation:footOut 0.3s;
}
@keyframes footIn{
  from{
    opacity: 0;
    transform:transitionY(-100%);
  }
  to{
    opacity: 1;
    transform:translateY(0);
  }
}
@keyframes footOut{
  from{
    opacity: 1;
    transform:transitionY(0);
  }
  to{
    opacity: 0;
    transform:translateY(100%);
  }
}
</style>
