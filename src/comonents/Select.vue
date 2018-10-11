<template>
  <mt-popup v-model="param.show" position="bottom">
    <mt-picker :slots="param.slots" showToolbar value-key="name" @change="changeVal">
        <div class="tool-bar-title">
          <div class="select-btn btn-cancel" @click="param.show = !param.show">取消</div>
          <div class="select-title" v-text="param.title"></div>
          <div class="select-btn btn-ok" @click="selectVal">确定</div>
        </div>
    </mt-picker>
  </mt-popup>
</template>

<script>
  export default {
    components: {},
    name: 'Select',
    props:['selectParam'],
    data(){
      return{
        param: {
          show: false,
          slots: [
            {
              values: [],
              className: 'slot1',
              textAlign: 'center'
            }
          ]
        },
        selectData:null
      }
    },
    created(){
      if(this.selectParam) {
        this.selectParam.slots = [
          {
            values: this.selectParam.values,
            className: 'slot1',
            textAlign: 'center'
          }
        ]
      }
      this.param = this.selectParam || this.param;
    },
    methods:{
      //确定选中值，以及发送给父组件
      selectVal(){
        this.param.show = false;
        this.$emit('setPickerData',this.selectData.data,this.selectData.idx);
      },
      //切换值
      changeVal(picker,values){
        let arr = this.param.slots[0].values,
            idx = 0;
        arr.forEach((item,i)=>{
          if(item == values[0]) {
            idx = i;
          }
        })
        this.selectData = {
          idx: idx,
          data: values[0]
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .tool-bar-title {
    display: -webkit-flex;
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  .select-btn {
    flex-grow: 0;
    flex-shrink: 0;
    width: 80px;
    line-height: 40px;
  }
  .btn-cancel {
    color: #999;
  }
  .btn-ok {
    text-align: right;
    color: #e2231a;
  }
  .select-title {
    text-align: center;
    line-height: 40px;
  }
</style>
