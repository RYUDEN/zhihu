/**
 * Created by liu on 17-4-8.
 */
  import Vue from "vue"
  import resource from "vue-resource"
  import {
    newsLatest,
    newsBefore,
    newsId,
    startImg,
    newThemes,
    themeId
    } from "./config"
  export default {
     getNews(){
       return Vue.http.get(newsLatest)
     },
     getBefore(date){
       return Vue.http.get(newsBefore+date) //date获取的如“20170410”代表2017年4月9日的内容
     },
     getId(id){
       return Vue.http.get(newsId + id)  //根据文章id获得
     },
     getStartImg(){
       return Vue.http.get(startImg)
     },
     getThemes(){
       return Vue.http.get(newThemes)
     },
     getThemeId(id){
       return Vue.http.get(themeId+id)   //获得相关主题id
     }
  }
