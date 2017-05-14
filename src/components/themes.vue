<template>
  <div class="themes">
    <div @click="go(list.id)" class="themes-list" v-for="list in themes">
      <div class="list-box">
        <img :src="list.thumbnail">
        <h3>{{list.name}}</h3>
        <span>{{list.description}}</span>
      </div>
    </div>
    <div v-if="loading" class="loading">
      <div></div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import api from './../api/index'
  export default{
    data(){
      return{
        themes:{},
        loading:false
      }
    },
    created(){
      var vue = this;
      vue.loading = true;
      api.getThemes().then((data) =>  {
        data = data.body;
        this.themes = data.others;
        vue.loading = false

      })
    },
    methods:{
      go(id) {
        this.$router.push(
                {
                  path:"theme",
                  query:{
                    id:id
                  }
                }
        )
      },
    }
  }
</script>
<style>
  .themes{
    position: absolute;
    top: 50px;
    padding: 5px;
  }
  .themes-list{
    position: relative;
    box-sizing: border-box;
    margin: 8px 0;
    width: 50%;
    height: 251px;
    float: left;
    /*display: flex;*/
    padding: 5px;
    transition: 0.5s;
  }
  .themes-list:hover,.themes-list:focus{
    transform: translate(2px) scale(1.01);
  }
  .themes-list img{
    width: 100%;
  }
  .themes-list h3{
    margin: 0 auto;
    font-size: 16px;
  }
  .themes-list span{
    font-size: 14px;
  }
  @media screen and (min-width:420px ) {
    .themes{
      width: 60%;
      margin: auto 20%;
      box-shadow: #666666 0 0 5px;
    }
    .themes-list{
      box-sizing: border-box;
      margin: 8px 0;
      width: 200px;
      height: 251px;
      float: left;
      /*display: flex;*/
      padding: 5px;
      transition: 0.5s;
    }
  }
</style>
