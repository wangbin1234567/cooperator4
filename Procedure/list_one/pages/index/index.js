//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    birthday: 0, //选择时间值
    year: 0, //年
    month: 0, //月
    distance: 0, //总月数
    end: '',
    percent: 0
  },
  onShow(){
    let now = new Date();
    this.setData({
      end: `${now.getFullYear()} - ${String(now.getMonth() + 1).padStart(2, '0')}`
    })
  },
  bindDateChange(e){
    let value = e.detail.value.split('-')
    let distance = this.getMonth(e.detail.value,this.data.end);
    this.setData({
      birthday: e.detail.value,
      year: value[0],
      month: value[1],
      distance,
      percent: (distance/9).toFixed(0)
    })
  },
  getMonth(pre,now){
    let preArr = pre.split('-'),
        nowArr = now.split('-');
    return Number((nowArr[0]-preArr[0])*12) + Number(nowArr[1] - preArr[1])
  },
  clear(){
    let now = new Date();
    this.setData({
      birthday:0,
      month: String(now.getMonth() + 1).padStart(2, '0'),
      year: now.getFullYear(),
      distance: 0
    })
  }
})
