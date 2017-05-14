<template>
    <div class="theme">
        <img :src="data.image" class="bgimg">
        <h2 class="bgtitle">{{data.name}}</h2>
        <p class="discrib">{{data.description}}</p>


        <div  v-for="list in stories">
            <div class="theme-list" @click="go(list.id)">
                <img v-if="list.images" :src="list.images[0]" >
                <p>{{list.title}}</p>
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
//             vue.save(data)
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
<style>
    .theme{
        position: relative;
        top: 50px;
        /*padding: 8px;*/
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

    .theme-list{
        position:relative ;
        display: flex;
        border-radius: 8px;
        background-color: white;
        margin: 10px 10px;
        padding: 8px;
        box-shadow: #666666 1px 1px 9px;
        transition: 0.3s;
    }
    .theme-list img{
        width: 80px;
        height: 80px;
    }
    .theme-list p{
        margin-left: 10px;
        text-align: left;
    }
    @media screen and (min-width:420px ) {
        .theme{
            position: absolute;
            width: 60%;
            margin: auto 20%;
            box-shadow: #666666 0 0 5px;
        }
        .theme-list{
            margin: 20px auto ;
            width: 90%;
            /*float: left;*/
        }
        .theme-list:hover{
            box-shadow: #2d78e7 0 0 9px;
        }
    }
</style>