// pages/found/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnHid:false,
    imgPic:'../../assets/imgs/index/bottom.png',
    articleList:[]
  },
  tabBtn:function(){
    var that=this;
    var pic = '../../assets/imgs/index/bottom.png';
    var pic2= '../../assets/imgs/index/top.png';
    if (!that.btnHid){
      that.setData({
        imgPic: '../../assets/imgs/index/top.png',
        btnHid:true
      })
      that.btnHid=true;
    }
      
     else{
      that.setData({
        imgPic: '../../assets/imgs/index/bottom.png',
        btnHid: false
      })
      that.btnHid = false;
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://7xspa8.com1.z0.glb.clouddn.com/found2.json',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          articleList: res.data.showArticle
        })
      }
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