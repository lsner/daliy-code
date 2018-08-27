Page({
  data: {

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
 
  onRentClick: function () {
    wx.redirectTo({
      url: '/pages/pintuan-pay/pintuan-pay'
    })
  }
})