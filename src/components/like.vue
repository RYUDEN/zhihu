<template>

  <div class="list">
    <div class="like-title"><i class="fa fa-heart">收藏</i></div>
    <div class="like-main">
      <div v-for="item in menu" class="like-item" @click="tryTo(item.id)">
        <img :src="item.image" alt="">
        <p class="item-title">{{item.title}}</p>
      </div>
    </div>
  </div>

</template>
<script type="text/ecmascript-6">
  export default{
    created(){
      let li = JSON.parse(window.localStorage.zhihu);
      this.menu = li;
      this.$emit('ref',this.$route.path)

    },
    data(){
        return{
            menu:{}
        }
    },
    methods:{
        tryTo(id){
          this.$router.push(
            {
              path:"cont",
              query:{
                id:id
              }
            }
          )
        }
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  .list{
    margin-bottom: 45px;
    .like-title{
      width: 100%;
      position: fixed;
      top: 0;
      text-align: center;
      height: 35px;
      line-height: 35px;
      background-color: #2287de;
      color: #fff;
      z-index: 999;
    }
    .like-main{
      margin-top: 35px;
      .like-item {
        position: relative;
        width: 100%;
        height: 200px;
        overflow: hidden;
        img{
          width: 100%;
          position: absolute;
          overflow: hidden;
        }
        .item-title{
          position: absolute;
          bottom: 0;
          right: 0;
          color: white;
          font-size: 21px;
          text-align: right;
          background-color: rgba(0, 0, 0, 0.54);
          padding: 5px 15px;
        }
      }
    }
  }
</style>
