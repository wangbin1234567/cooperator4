// pages/meditation/meditation.js
//获取应用实例
const imgs = require('../../utils/img')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    columns: []
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('imgs....', imgs);
    this.setData({
      columns: [imgs.slice(0, 30), imgs.slice(30, 60), imgs.slice(60, 90)]
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('用户触发了下拉操作....');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('用户触发了上拉加载操作.....');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '我的页面',
      path: '/pages/meditation/meditation',
      imageUrl: ''
    }
  }
})