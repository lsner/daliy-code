//获取应用实例
var app = getApp()
Page({
    data: {
        loadingHidden: false  // loading
    },

    onLoad: function () {
        var that = this
        //显示分享转发
        wx.showShareMenu({
            withShareTicket: true
        })
        //加载数据
        wx.request({
            url: 'https://www.easy-mock.com/mock/5b2c99e2195e43541145771d/getInfo/info/detail',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function (res) {
                console.log("--测试easy mock的时候到了---", res)
                that.setData({
                    loadingHidden: true
                })
            }
        })

    },

    onScanClick: function () {
        // 只允许从相机扫码
        wx.scanCode({
            onlyFromCamera: true,
            success: (res) => {
                console.log("lsner----res", res)
                if (res.result) {
                    wx.navigateTo({
                        url: '/' + res.result
                    });
                }
            }
        })
    }
})
