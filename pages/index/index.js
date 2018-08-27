//获取应用实例
var app = getApp()
Page({
    data: {
        loadingHidden: false  // loading
    },

    onLoad: function () {
        var that = this
        setTimeout(function () {
            console.log('========lsner======')
            that.setData({
                loadingHidden: true
            })
        }, 2000);
    },

    onScanClick: function () {
        // 只允许从相机扫码
        wx.scanCode({
            onlyFromCamera: true,
            success: (res) => {
                console.log("lsner----res",res)
                if (res.result) {
                    wx.navigateTo({
                        url: '/' + res.result
                    });
                }
            }
        })
    }
})
