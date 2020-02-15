// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: 0,
    content: "点击设置出生年月，查看人生进度",
    clear: "",
    top: 0,
    left: 10,
    right: 10,
    monthCounts: 0,
    percentage: '100%',
    lineHeight: 260
  },
  bindDateChange: function (event) {
    console.log(event.detail.value)
    //计算两个时间的月份差
    let options = {
      startDate: event.detail.value,
      endDate: '2020-02'
    }
    let start = new Date(options.startDate.replace("-", "/"));
    let end = new Date(options.endDate.replace("-", "/"));
    let startYear = start.getFullYear();
    let startMonth = start.getMonth();
    let endYear = end.getFullYear();
    let endMonth = end.getMonth();
    let monthCount = endYear * 12 + endMonth - (startYear * 12 + startMonth);

    let percentages = (Math.round(900 - monthCount) / 900 * 10000 / 100.00).toFixed(2) + "%"

    let tops = parseInt(260 / 900 * monthCount)
    
    let lineHeights = 260 - tops
    this.setData({
      date: event.detail.value,
      content: "换一个日期",
      clear: "清除记录",
      top: tops,
      left: 0,
      right: 0,
      monthCounts: monthCount,
      percentage: percentages,
      lineHeight: lineHeights
    })
  },
  handleTouch: function () {
    this.setData({
      date: 0,
      content: "点击设置出生年月，查看人生进度",
      clear: "",
      top: 0,
      left: 10,
      right: 10,
      percentage: '100%',
      lineHeight: 260
    })
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