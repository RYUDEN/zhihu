/**
 * Created by liu on 17-4-8.
 */
var ROOT_API =
    // "http://news-at.zhihu.com/api"
  "https://zhihu-agent.herokuapp.com/get?api="
  ;
var apiZhihu = {
    news:'/4/news/latest',
    newsbydate:"/4/news/before/",
    newsbyid:"/4/news/",
    startimage:"/4/start-image/1080*1776",
    themes:"/4/themes",
    theme:"/4/theme/"
};
export const newsLatest = ROOT_API.concat(apiZhihu.news)
export const newsBefore = ROOT_API.concat(apiZhihu.newsbydate)
export const newsId = ROOT_API.concat(apiZhihu.newsbyid)
export const startImg = ROOT_API.concat(apiZhihu.startimage)
export const newThemes = ROOT_API.concat(apiZhihu.themes)
export const themeId = ROOT_API.concat(apiZhihu.theme)
