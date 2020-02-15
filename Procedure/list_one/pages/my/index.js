//index.js
//获取应用实例
const imgs = require('../../utils/img')
const app = getApp()


Page({
  data: {
    columns: []
  },
  onShow(){
    console.log('imgs....', imgs);
    this.setData({
      columns: [imgs.slice(0, 30), imgs.slice(30, 60), imgs.slice(60, 90)]
    })
  },
  onPullDownRefresh(){
    console.log('用户触发了下拉操作....');
  },
  onReachBottom(){
    console.log('用户触发了上拉加载操作.....');
  },
  onShareAppMessage(info){
    return {
      title: '我的页面',
      path: '/pages/my/index',
      imageUrl: ''
    }
  }
})
