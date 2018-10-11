<template>
  <div class="page-footer">
    <ul class="clearfix">
      <li>
        <div class="icon-box">
          <span class="iconfont icon-saishi"></span>
        </div>
        <p>赛事</p>
      </li>
      <li>
        <div class="icon-box">
          <span class="iconfont icon-faxian"></span>
        </div>
        <p>发现</p>
      </li>
      <li class="active">
        <div class="icon-box">
          <span  class="iconfont icon-tuijian"></span>
        </div>
        <p>推荐</p>
      </li>
      <li>
        <div class="icon-box">
          <span class="iconfont icon-zhuanjia"></span>
        </div>
        <p>专家</p>
      </li>
      <li>
        <div class="icon-box">
          <span class="iconfont icon-wode"></span>
        </div>
        <p>我的</p>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'Foot',
    data(){
      return{}
    }
  }
</script>
<style lang="scss">
  .page-footer {
    & {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: pxToRem($footHeight);
      background-color: $footBackgroundColor;
      box-shadow: 1px  -1px 2px 1px #ddd;
    }
    ul {
      height: 100%;
    }
    li {
      float: left;
      width: 20%;
      height: 100%;
      color: #afafaf;
    }
    li.active {
      color: #e2231a;
    }
    .icon-box {
      margin-top: pxToRem(10px);
      height: pxToRem(50px);
      line-height: pxToRem(50px);
      text-align: center;
    }
    .icon-box  .iconfont {
      font-size: pxToRem(50px);
    }
    li p {
      margin-top: pxToRem(8px);
      font-size: pxToRem(28px);
      text-align: center;
    }
  }
</style>
