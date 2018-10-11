<template>
  <div>
    <Head :headParam="headParam"></Head>
    <div class="page-full-wrap">
      详情内容请关注
    </div>
  </div>

</template>
<script>
  import Head from '@/comonents/Head';
  export default {
    name: 'Dept',
    components: {Head},
    data(){
      return{
        headParam: {
          title: '详情',
          isTabPage: false,
          smallTitle: ''
        },
      }
    }
  }
</script>
<style lang="scss"></style>
