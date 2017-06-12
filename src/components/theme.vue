<template>
    <transition name="themeCard">
    <div class="theme">
        <img :src="data.image" class="bgimg">
        <h2 class="bgtitle">{{data.name}}</h2>
        <p class="discrib">{{data.description}}</p>
        <div  @click="go(list.id)" v-for="list in stories">
            <div class="list-con">
              <img :src="list.images[0]" alt="" v-if="list.images">
              <img :src="data.image" v-else>
              <div class="list-title"><p>{{list.title}}</p></div>
            </div>
        </div>
        <div v-if="loading" class="loading">
            <div></div>
        </div>
    </div>
    </transition>
</template>
<script type="text/ecmascript-6">
    import api from './../api/index'
    export default{
        data(){
            return{
                data:{},
                stories:{},
                editors:{},
                loading:false
            }
        },
        created(){
            var vue = this;
            vue.loading = true;
            api.getThemeId(this.$route.query.id).then((data) => {
                data = data.body;
                this.data = data;
                this.stories = data.stories;
                this.editors = data.editors;
                vue.loading = false
            })
          this.$emit('ref',this.$route.path)

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
            }
        }
    }
</script>
<style lang="less">
    .theme{
        position: relative;
        /*padding: 8px;*/
        margin-bottom: 45px;
    }
    .bgimg{
        position: relative;
        top:0;
        left: 0;
        width: 100%;
        border-radius: 0;
    }
    .discrib{
        position: relative;
        width: 76%;
        margin: 0;
        padding: 10px;
        text-align: left;
        /*z-index: 5;*/
    }
    .bgtitle{
        position: relative;
        /*top: 80px;*/
        padding: 10px;
        margin: 0;
        text-align: left;
        z-index: 5;
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
    .themeCard-enter-active{
      animation:themeIn 0.5s;
    }
    .themeCard-leave-active{
      animation:themeOut 0.5s;
    }
    @keyframes themeIn{
      from{
        opacity: 0;
        transform:scale(0.5);
      }
      to{
        opacity: 1;
        transform:scale(1);
      }
    }
    @keyframes themeOut{
      from{
        opacity: 1;
        transform:scale(1);
      }
      to{
        opacity: 0;
        transform:scale(0.5);
      }
    }
</style>
