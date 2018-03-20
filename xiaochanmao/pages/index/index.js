//index.js
//获取应用实例
const app = getApp()
//引入本地json数据，这里引入的就是第一步定义的json数据  
var postData = require('../../json/postDate.js'); 

Page({
  data: {
    imgUrls: [
      'http://7xspa8.com1.z0.glb.clouddn.com/wechat_web_2.jpg',
      'http://7xspa8.com1.z0.glb.clouddn.com/wechat_web_1.jpg',
      'http://7xspa8.com1.z0.glb.clouddn.com/wechat_web_3.jpg'
    ],
    productIcon: [
      'http://7xspa8.com1.z0.glb.clouddn.com/ping_navbar3.1.jpg',
      'http://7xspa8.com1.z0.glb.clouddn.com/ping_navbar3.2.jpg'
    ],
    picBtn:[
      {
        picImg:'http://7xspa8.com1.z0.glb.clouddn.com/ping_new1.png',
        text:'馋猫超市'
      },
      {
        picImg: 'http://7xspa8.com1.z0.glb.clouddn.com/ping_new2.png',
        text: '全球购'
      },
      {
        picImg: 'http://7xspa8.com1.z0.glb.clouddn.com/ping_new3.png',
        text: '馋猫生鲜'
      },
      {
        picImg: 'http://7xspa8.com1.z0.glb.clouddn.com/ping_new13.png',
        text: '馋猫家电'
      }
    ],
    picBtn2:[
      {
        picImg: 'http://7xspa8.com1.z0.glb.clouddn.com/ping_new7.png',
        text: '充值中心'
      },
      {
        picImg: 'http://7xspa8.com1.z0.glb.clouddn.com/ping_new12.png',
        text: '领劵'
      },
      {
        picImg: 'http://7xspa8.com1.z0.glb.clouddn.com/ping_new10.png',
        text: '领豆豆'
      },
      {
        picImg: 'http://7xspa8.com1.z0.glb.clouddn.com/ping_new15.png',
        text: '旅行机票'
      }
    ],
    TextUrls: [
      '毕业花束送好友',
      '春装新品上市',
      '鲜果满149减20',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    indicatorDots2:false,
    vertical:true,
    productPic:{},
    circular:false,
    product4:{}
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onReady:function(){
    this.setData({//获取数据成功后的数据绑定  
      productPic: postData.productTab
     
  })
    this.setData({//获取数据成功后的数据绑定  
      productPic2: postData.productTab2

    })
    this.setData({//获取数据成功后的数据绑定  
      product4: postData.productFour

    })
  },
  more:function(){
     wx.navigateTo({
       url: '../moreProduct/moreProduct',
     })
  }
})
