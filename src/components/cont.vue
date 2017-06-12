<template>
    <transition name="cont">
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
    <div v-if="likeS" class="likeBtn" @click="insertLike" :class='{isLike:likeItem.like}'>
      <i class="fa fa-heart"></i>
    </div>
    <div v-if="loading" class="maskCard">
       <p class="loading"><i class="fa fa-spinner fa-spin"  v-show="loading"></i>wait...</p>
    </div>
  </div>
  </transition>

</template>
<script>
  import api from '@/api/index'
  export default{
    mounted(){
      addEventListener('scroll',this.showBtn)
    },
    beforeDestroy() {
      removeEventListener('scroll',this.showBtn)
    },
    created(){
      var vue =this;
      vue.loading = true;
      api.getId(this.$route.query.id).then(
        (response) => {
          response = response.body;
          this.data = response;
          this.likeItem.id = response.id;
          this.likeItem.image = response.image;
          this.likeItem.title = response.title;
          this.fetchLike();
          vue.loading = false;
        }
      );
      this.$emit('ref',this.$route.path)
    },
    data(){
      return{
        data:'',
        loading:false,
        likeS:false,
        likeItem:{
            title:'',
            id:'',
            image:'',
            like:false
        },
        ulLike:{}
      }
    },
    methods:{
      fetchLike(){
          if(window.localStorage.zhihu){
              let dd = JSON.parse(window.localStorage.getItem('zhihu'));
              let id = this.likeItem.id;
              if(dd[id]){
                this.likeItem.like=dd[id].like
              };
              this.ulLike = dd
          }
      },
      insertLike(){
          this.likeItem.like = !this.likeItem.like;
          let ulike = this.ulLike;
          ulike[this.likeItem.id] = this.likeItem;
          window.localStorage.setItem('zhihu',JSON.stringify(ulike))
      },
      showBtn(){
        let cont =  document.getElementsByClassName('cont')[0].getBoundingClientRect().top;
        if(cont<-300){
            this.likeS = true
        }else{
            this.likeS = false
        }
      },
      pop(e) {
        let href = e.target.href;
        if (href) {
          window.open(href);
        }
    },
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
  @media screen and (min-width:420px ) {
    .cont{
      width: 60%;
      margin: auto;
    }
  }
    .contCard-enter-active{
      animation:contIn 0.5s;
    }
    .contCard-leave-active{
      animation:contOut 0.5s;
    }
    @keyframes contIn{
      from{
        opacity: 0;
        transform:scale(0.5);
      }
      to{
        opacity: 1;
        transform:scale(1);
      }
    }
    @keyframes contOut{
      from{
        opacity: 1;
        transform:scale(1);
      }
      to{
        opacity: 0;
        transform:scale(0.5);
      }
    }
    .likeBtn {
      position: fixed;
      z-index: 99;
      right: 15px;
      bottom: 128px;
      padding: 15px;
      background-color: rgba(34, 135, 222, 0.37);
      color: #fff;
    }
    .isLike{
      color:#ff7b7b;
    }
</style>
