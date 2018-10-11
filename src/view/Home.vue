<template>
  <div class="wrap">
    <Head :headParam="headParam"></Head>
    <div class="page-wrap">
      <mt-swipe :auto="4000" class="swiper">
        <mt-swipe-item  v-for="swiper in swipers">
          <img :src="swiper">
        </mt-swipe-item>
      </mt-swipe>

      <ul class="index-nav clearfix">
        <router-link to="/form">
          <li class="index-nav-item fl">
            <div class="iconfont-box" style="background: #ffc03d">
              <span class="iconfont icon-liwu"></span>
            </div>
            <p class="text">表单Demo</p>
          </li>
        </router-link>
        <li class="index-nav-item fl">
          <div class="iconfont-box" style="background: #23d3d1">
            <span class="iconfont icon-icon-futrue2"></span>
          </div>
          <p class="text">智能预测</p>
        </li>
        <li class="index-nav-item fl">
          <div class="iconfont-box" style="background: #9ce33c">
            <span class="iconfont icon-tui"></span>
          </div>
          <p class="text">不中退款</p>
        </li>
        <li class="index-nav-item fl">
          <div class="iconfont-box" style="background: #f9675c">
            <span class="iconfont icon-tuiguangyingli"></span>
          </div>
          <p class="text">盈利套餐</p>
        </li>
        <li class="index-nav-item fl">
          <div class="iconfont-box" style="background: #2798f4">
            <span class="iconfont icon-linshi"></span>
          </div>
          <p class="text">临场专区</p>
        </li>
      </ul>

      <div class="com-title">
        <div class="com-title-top clearfix">
          <p class="com-title-left fl">赛事推荐</p>
        </div>
      </div>
      <div class="news-box">
        <ul class="news-main">
          <router-link to="/dept">
          <li class="news-item clearfix">
            <img src="../assets/logo.png" alt="" class="news fl">
            <div class="news-item-right fl">
              <p class="content">类似于a标签的方式，路由跳转！</p>
              <p class="time">2018-10-01 18:24</p>
            </div>
          </li>
          </router-link>

          <li class="news-item clearfix" @click="toDept">
            <img src="../assets/logo.png" alt="" class="news fl">
            <div class="news-item-right fl">
              <p class="content">直接通过点击事件模拟跳转，类似于jquery绑定的click事件</p>
              <p class="time">2018-10-01 18:24</p>
            </div>
          </li>
        </ul>
      </div>

    </div>

    <Foot></Foot>
  </div>
</template>
<script>
  import Head from "../comonents/Head";
  import Foot from "../comonents/Foot";

  export  default {
    components: {Head,Foot},
    name: 'Home',
    data(){
      return {
        headParam: {
          title: '推荐',
          isTabPage: true,
          smallTitle: ''
        },
        swipers: ['https://zq.guliao.vip/file/c3677fb386eb4d24aaeb85be275f1e05.jpg',
          'https://zq.guliao.vip/file/eb4620afa2ce48c4abf7aba368c99144.jpg']
      }
    },
    methods: {
      toDept(){
        this.$router.push({path: '/dept'})
      }
    }
  }
</script>
<style lang="scss">
  .swiper {
    height: pxToRem(400px);
  }
  .swiper img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .mint-swipe-indicator {
    width: 10px;
    height: 10px;
    background-color: #fff;
    opacity: 1;
  }
  .mint-swipe-indicator.is-active {
    width: 30px;
    border-radius: 10px;
  }

  .index-nav{
    &{
      padding-top: pxToRem(30px);
      width: 100%;
      height: pxToRem(143px);
      background: #ffffff;
    }
    .index-nav-item{
      width: 20%;
      text-align: center;
      color: #333333;
      font-size: pxToRem(24px);
    }
    .index-nav-item .iconfont-box{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      width: pxToRem(70px);
      height: pxToRem(70px);
      border-radius: 50%;
    }
    .index-nav-item .text{
      margin-top: pxToRem(18px);
    }
    .iconfont-box .iconfont{
      font-size: pxToRem(32px);
      color: #fff;
    }
    .iconfont-box .icon-liwu{
      font-size: pxToRem(54px);
    }
    .iconfont-box .icon-icon-futrue2{
      font-size: pxToRem(40px);
    }
    .iconfont-box .icon-tuiguangyingli{
      font-size: pxToRem(44px);
    }
    .iconfont-box .icon-linshi{
      font-size: pxToRem(56px);
    }
  }

  .com-title {
    & {
      width: 100%;
      padding-top: pxToRem(30px);
      padding-bottom: pxToRem(20px);
    }
    .com-title-top {

    }
    .com-title-left {
      padding-left: pxToRem(20px);
      color: #313131;
      letter-spacing: pxToRem(2px);
      font-size: pxToRem(32px);
      border-left: pxToRem(10px) solid #e2231a;
      line-height: pxToRem(30px);
      font-weight: 600;
    }
    .com-title-right span {
      padding: 0 pxToRem(15px);
      display: inline-block;
      color: #666666;
      font-size: pxToRem(24px);
      border-right: 1px solid #c7c7c7;
    }
    .com-title-right span:last-child {
      padding-right: pxToRem(36px);
      border-right: 0;
    }
    .com-title-right .red-span.active {
      color: #e2231a;
    }
    .com-title-bottom {

    }
    .com-title-bottom .list-item {
      margin-top: pxToRem(20px);
      margin-left: pxToRem(30px);
      display: inline-block;
      width: pxToRem(128px);
      height: pxToRem(48px);
      line-height: pxToRem(48px);
      color: #333333;
      border: 1px solid #a6a6a6;
      text-align: center;
      border-radius: pxToRem(24px);
    }
    .com-title-bottom .list-item.active {
      background: #e2231a;
      color: #fff;
      border-color: #fff;
    }
  }

  .news-box{
    &{
      padding: pxToRem(30px);
      padding-right: pxToRem(25px);
    }
    .news-main{
      width: 100%;
    }
    .news{
      width: 28%;
      height: pxToRem(130px);
      border-radius: pxToRem(8px);
    }
    .news-item-right{
      padding-left: 2%;
      width: 70%;
    }
    .news-item{
      margin-top: pxToRem(20px);
    }
    .news-item:first-child{
      margin-top: 0;
    }
    .content{
      padding-top: pxToRem(10px);
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      color: #101010;
      line-height: pxToRem(34px);
      font-size: pxToRem(24px);
    }
    .time{
      margin-top: pxToRem(15px);
      font-size: pxToRem(24px);
      color: #999999;
      text-align: right;
    }
  }
</style>
