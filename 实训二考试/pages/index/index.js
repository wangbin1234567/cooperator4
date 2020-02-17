//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    currentData:0
  },
  onLoad:function(opction){
    
  },
  changeTab:function(e){
    const that = this;
    console.log(e,"---------");
    that.setData({
      currentData: e.currentTarget.dataset.current
    })
  }
})