<template>
  <div class="me">
    <h3>知乎日报（VUE）</h3>
    <p>使用vuejs框架编写的webapp</p>
    <p>侵删~~~</p>
    <br>    <br>


    <p>mail to wiszx@qq.com</p>
    <span>喜欢就关注下微博啦~QAQ<a href="http://weibo.com/chuanchuanliu">@碎髙高</a></span>
    <!--<a href=""></a>-->
  </div>
</template>
<script type="text/ecmascript-6">
  import api from "./../api/index"
  export default{
    data(){
      return{
        start:""
      }
    }
  }
</script>
<style>
  .me{
    position: relative;
    top: 250px;
    border: 1px solid;
    margin: 15px;
    padding: 15px ;
  }
  .me p{
    text-align: center;
  }
  .me a{
    display: inline-block;
    color: #2d78e7;
  }
</style>
