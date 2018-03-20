// //引入本地json数据，这里引入的就是第一步定义的json数据  
// var postData = require('../../json/postDate.js'); 

// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     product4: {}
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
//     this.setData({//获取数据成功后的数据绑定  
//       product4: postData.productFour

//     })
//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {
  
//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {
  
//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {
  
//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {
  
//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {
  
//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {
  
//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {
  
//   }
// })


var app = getApp()
Page({
  data: {
    arr_all: [],
    pageNo: 1,
    showMore:false
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '秒杀商品'
    })
    wx.showToast({
      icon: 'loading',
      duration: 1000
    })
    this.getMoreData();
  },
  //滚动到底部加载数据
  lower: function () {
    wx.showToast({
      icon: 'loading',
      duration: 1000
    })
    this.getMoreData();
  },
  getMoreData: function () {
    var that = this;
    // console.log(that.data.arr_all)
    that.data.pageNo++;
    // console.log(that.data.pageNo);
    wx.request({
      url: 'http://7xspa8.com1.z0.glb.clouddn.com/postData.json',
      data: {
        "limit": 3,   //传的参数给后台，后台判断完再返回相应的数据回来
        "page": that.data.pageNo
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        // for (var i = 1; i<res.data.showProduct.length;i++){
        //   var productAll = res.data.showProduct[i];
        //   console.log(res.data.showProduct.length);
        //   that.setData({
        //     arr_all: that.data.arr_all.concat(res.data.showProduct[i])
        //   })  
        //     // }

        // 虚拟假数据，强制设置个总数停止加载数据了
        if (res.data.showProduct.length >= 41) {
          that.setData({
            showMore: true
          })
          return;
          wx.hideToast();
        }
        else {
          console.log(res.data.showProduct.length);
          that.setData({
            arr_all: that.data.arr_all.concat(res.data.showProduct),
          })
          that.setData({
            showMore: false
          })
        }




        // that.setData({
        //   arr_all: res.data.showProduct
        // })  
        wx.hideToast();
      }

    })
  },
  onReachBottom() {
    wx.showToast({
      icon: 'loading',
      duration: 1000
    })
    this.getMoreData();
  }
})
