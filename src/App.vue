<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
    }
  },
}
</script>

<style lang="scss">
  ::-webkit-scrollbar {
    display: none;
  }
  body {
    font-size: pxToRem( $bodySize);
  }
  .page-wrap {
    padding: pxToRem($headHeight) 0 pxToRem($footHeight) 0;
  }
  .page-full-wrap {
    padding-top: pxToRem($headHeight);
  }
</style>
