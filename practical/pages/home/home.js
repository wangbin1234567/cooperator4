// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titleList: ['目标', '习惯','手记'],
    curIndex: 0,
    list: [{
      title: '多彩周末体验计划',
      tain: [{
        flag: true,
        con: '看一场私人电影'
      },{
          flag: false,
          con: '玩一次保龄球'
        }]
    },{
        title: '我的习惯',
        tain: [{
          fag: true,
          cun: 0,
          con: '每天早上空腹喝一杯水'
        }]
      },{
        title: '我的手记',
        tain: [{
          con: '三月份找工作'
        }]
      }],
     lists: {},
    str: [{
      title: '目标',
      lists: ['体验一次VR', '看完豆瓣电影top250']
    }, {
      title: '习惯',
      lists: ['看书一小时', '看TED']
    }]
  },
  bindViewTap: function () {
    let drr=this.data.str.filter((item,index)=>item.title=='目标')
    wx.navigateTo({
      url: '../target/target',
      success: function (res) {
        // 通过eventChannel向被打开页面传送数据
        let test = drr[0].lists
        res.eventChannel.emit('acceptDataFromOpenerPage', test )
      }
    })
  },
  handleIndex: function (event) {
    let index = event.currentTarget.dataset['index'];
    let arr = this.data.list[index]
    this.setData({
      curIndex: index,
      lists: arr
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let arr = this.data.list[0]
    this.setData({
      lists: arr
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