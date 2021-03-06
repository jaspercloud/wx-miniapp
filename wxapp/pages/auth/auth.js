// pages/auth/auth.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: false,
    userInfo: {},
    resultUrl: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.data.resultUrl = options.resultUrl
  },
  onGetUserInfo: function(e) {
    var that = this
    console.log(e)
    that.data.hasUserInfo = true
    this.data.userInfo = e.detail.userInfo
    that.setData({
      hasUserInfo: that.data.hasUserInfo,
      userInfo: this.data.userInfo
    })
    wx.showToast({
      title: "加载中",
      mask: true,
      duration: 3000,
      success: function() {
        app.refreshPage("pages/settings/settings")
        wx.navigateBack()
      }
    })
  }
})