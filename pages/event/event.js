// pages/event/event.js
Page({

  //事件
  tapName: function(event) {
    console.log(event)
  },
  longpressName: function(event) {
    console.log(event)
  },
  bindOutView: function(event) {
    console.log("bindOutView")
  },
  bindInnertView: function(event) {
    console.log("bindInnertView")
  },
  captureBindOutView: function(event) {
    console.log("captureBindOutView")
  },
  captureBindInnertView: function(event) {
    console.log("captureBindInnertView")
  },
  captureCatchOutView: function(evet) {
    console.log("captureCatchOutView")
  },
  captureCatchInnertView: function(event) {
    console.log("captureCatchInnertView")
  },
  /**
   * 获取dataset自定义属性，用于事件处理
   * 属性值会转换成小写
   * 可以定义多个
   */
  getDataset: function(event) {
    console.log(event.currentTarget.dataset.customdata)
  },
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})