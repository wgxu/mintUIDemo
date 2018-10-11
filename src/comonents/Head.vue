<template>
  <div class="page-head">
    <div class="page-head-box">
      <div v-if="!param.isTabPage" class="page-back" @click="back">
        <span class="iconfont icon-zuo1"></span>
      </div>
      <div class="page-title-text" v-text="param.title"></div>
      <div class="small-title" v-if="param.smallTitle" v-text="param.smallTitle"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Head',
    props: ['headParam'],
    data(){
      return{
        param: {}
      }
    },
    methods:{
      back(){
        this.$router.go(-1);
      }
    },
    mounted(){},
    created(){
      this.param = this.headParam;
    }

  }
</script>

<style lang="scss">
  .page-head {
    & {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: pxToRem($headHeight);
      background-color: $headBackgroundColor;
    }
    .page-head-box {
      position: relative;
      padding: 0 pxToRem($headHeight);
      box-sizing: border-box;
      height: 100%;
    }
    .page-back {
      position: absolute;
      top: 0;
      left: 0;
      width: pxToRem($headHeight);
      height: pxToRem($headHeight);
      line-height: pxToRem($headHeight);
      text-align: center;
      color: $headColor;
    }
    .page-back .iconfont {
      font-size: pxToRem($backArrowFontSize);
    }
    .page-title-text {
      line-height: pxToRem($headHeight);
      text-align: center;
      color: $headColor;
      font-size: pxToRem(32px);
    }
    .small-title {
      position: absolute;
      top: 0;
      right: 0;
      width: pxToRem($headHeight);
      height: pxToRem($headHeight);
      line-height: pxToRem($headHeight);
      text-align: center;
      color: $headColor;
      font-size: pxToRem(28px);
    }
  }
</style>
