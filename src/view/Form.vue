<template>
  <div>
    <Head :headParam="headParam"></Head>
    <div class="page-full-wrap">
      <div class="form">
        <div class="cell">
          <label>用户名</label>
          <div class="cell-box">
            <input type="text" placeholder="请输入用户名">
          </div>
        </div>

        <div class="cell">
          <label>性别</label>
          <div class="cell-box" v-text="sex" @click="openSexPick">
          </div>
        </div>

        <mt-popup v-model="showSexPick" position="bottom">
          <mt-picker :slots="slots" @change="onValuesChange" showToolbar>
         <div class="usi-btn-cancel" @click="popupVisible = !popupVisible">取消</div>
         <div class="">请选择代理区域</div>
         <div class="usi-btn-sure" @click="popupVisible = !popupVisible">确定</div>
          </mt-picker>
        </mt-popup>


      </div>
    </div>
  </div>

</template>
<script>
  import Head from '@/comonents/Head';
  export default {
    name: 'Form',
    components: {Head},
    data(){
      return{
        headParam: {
          title: '表单',
          isTabPage: false,
          smallTitle: ''
        },
        slots: [
          {
            values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
            className: 'slot1',
            textAlign: 'right'
          }
        ],
        sex:'请选择性别',
        showSexPick: false
      }
    },
    methods:{
      onValuesChange(e){
      },
      openSexPick(){
        this.showSexPick = true;
      }
    }
  }
</script>
<style lang="scss">
  .form {
    padding: 0 pxToRem(20px);
  }
  .cell {
    margin-top: pxToRem(30px);
    display: -webkit-flex;
    display: flex;
  }
  .cell label {
    width: 20%;
    height: pxToRem(60px);
    line-height: pxToRem(60px);
    flex-grow: 0;
    flex-shrink: 0;
  }
  .cell .cell-box {
      flex-grow: 1;
      padding-right: pxToRem(20px);
  }
  .cell .cell-box input{
    flex-grow: 1;
    width: 100%;
    height: pxToRem(60px);
    line-height: pxToRem(60px);
    padding: 0 pxToRem(10px);
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .mint-popup-bottom {
    width: 100%;
  }
</style>
