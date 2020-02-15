// pages/day/day.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date1: '',
    date: '',
    day: 0
  },
  bindDateChange: function (event) {
    this.setData({
      date: event.detail.value
    })
  },
  bindDateChanges: function (event) {
    this.setData({
      date1: event.detail.value
    })
  },
  handleTouch: function () {
    let arr = this.data.date
    let str=this.data.date1
    let mistiming = this.dateDiffIncludeToday(arr, str)
    this.setData({
      day: mistiming
    })
  },
  //计算2个日期相差的天数，包含今天，如：2016-12 - 13到2016-12 - 15，相差3天
  dateDiffIncludeToday: function (startDateString, endDateString) {
    let separator = "-"; //日期分隔符
    let startDates = startDateString.split(separator);
    let endDates = endDateString.split(separator);
    let startDate = new Date(startDates[0], startDates[1] - 1, startDates[2]);
    let endDate = new Date(endDates[0], endDates[1] - 1, endDates[2]);
    //把相差的毫秒数转换为天数
    return parseInt(Math.abs(endDate - startDate) / 1000 / 60 / 60 / 24) + 1;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let day1 = new Date();
    day1.setTime(day1.getTime());
    let s1 = day1.getFullYear() + "-" + (day1.getMonth() + 1) + "-" + day1.getDate();
    this.setData({
      date1: s1
    })
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})