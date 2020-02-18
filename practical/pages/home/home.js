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
          con: '我爱学习，学习使我快乐'
        }]
      }],
     lists: {},
    str: [{
      title: '目标',
      lists: ['体验一次VR', '看完豆瓣电影top250']
    }, {
      title: '习惯',
      lists: ['看书一小时', '看TED']
    },{
        title: '手记',
        lists: ['保持一颗快乐的心', '不忘初心，方得始终']
    }],
    dtr: '目标'
  },
  bindViewTap: function () {
    let drrs = this.data.dtr
    let drr=this.data.str.filter((item,index)=>item.title==drrs)
    let tests = drr[0].lists
    let test=JSON.stringify(tests)
    wx.navigateTo({
      url: '../target/target?test='+test,
      // success: function (res) {
      //   // 通过eventChannel向被打开页面传送数据
      //   let test = drr[0].lists
      //   res.eventChannel.emit('acceptDataFromOpenerPage', test )
      // }
    })
  },
  handleIndex: function (event) {
    let index = event.currentTarget.dataset['index'];
    let arr = this.data.list[index]
    let dtrs = this.data.titleList[index]
    this.setData({
      curIndex: index,
      lists: arr,
      dtr: dtrs
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
    wx.setStorage({
      key: "key",
      data: ""
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
    let that=this
    wx.getStorage({
      key: 'key',
      success(res) {
        console.log(res.data)
        if (!res.data) {
           return
         }
        let obj={
          flag: false,
          con: res.data
        }
        let obj1 = {
          fag: true,
          cun: 0,
          con: res.data
        }
        let obj2 = {
          con: res.data
        }
        if (that.data.dtr=='目标'){
          let arrs = that.data.list[0].tain
          let drrs = that.data.list[0].tain.push(obj)
          that.setData({
            arrs: drrs
          })
        }
        if (that.data.dtr == '习惯') {
          let arrs = that.data.list[1].tain
          let drrs = that.data.list[1].tain.push(obj1)
          that.setData({
            arrs: drrs
          })
        }
        if (that.data.dtr == '手记') {
          let arrs = that.data.list[2].tain
          let drrs = that.data.list[2].tain.push(obj2)
          that.setData({
            arrs: drrs
          })
        }
        that.onLoad()
      }
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