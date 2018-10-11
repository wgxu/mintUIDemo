<template>
  <div>
    <Head :headParam="headParam"></Head>
    <div class="page-full-wrap">
      <div class="form">
        <div class="cell">
          <label>用户名</label>
          <div class="cell-box">
            <input type="text" placeholder="请输入用户名" v-model="form.user">
          </div>
        </div>

        <div class="cell">
          <label>性别</label>
          <div class="cell-box" @click="openSexPick">
            <div class="select-box" v-text="form.sexName || '请选择性别'"></div>
          </div>
        </div>
        <Select :selectParam = 'sexSelect' v-on:setPickerData="getSexPicker"></Select>

      </div>
    </div>
  </div>

</template>
<script>
  import Head from '@/comonents/Head';
  import Select from  '@/comonents/Select';
  export default {
    name: 'Form',
    components: {Head,Select},
    data(){
      return{
        headParam: {
          title: '表单',
          isTabPage: false,
          smallTitle: ''
        },
        sexSelect: {
          values: [{
            id: 1,
            name: '宝马'
          },{
            id: 2,
            name: '奔驰'
          },{
            id: 3,
            name: '奥迪'
          },{
            id: 4,
            name: '保时捷'
          }],
          title:'请选择性别',
          show:false
        },
        form:{}
      }
    },
    methods:{
      openSexPick(){
        this.sexSelect.show = true;
      },
      getSexPicker(data) {
        this.$set(this.form,'sexName',data.name);
       console.log(this.form.sexName)
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
  .select-box {
    line-height: pxToRem(60px);
    text-align: right;
  }
</style>
