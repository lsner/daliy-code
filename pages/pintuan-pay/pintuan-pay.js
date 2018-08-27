var util = require('../../utils/util.js')
Page({
  data: {
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' }
    ],
    date: ""
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    console.log("====时间====", util.formatDate(new Date()))
    this.setData({
      date: util.formatDate(new Date())
    })

  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  onDateChange: function (e) {
    console.log('日期发生change事件，携带value值为：', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  onPay: function () {
    wx.requestPayment({
      'timeStamp': `${+ new Date()}`,
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success': function (res) {
      },
      'fail': function (res) {
      }
    })
  }
})