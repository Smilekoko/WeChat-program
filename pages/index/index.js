//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    jojo: "我不做人了",
    choose_index: 0,
    tabbar: {
      "color": "#999999",
      "selectedColor": "#7788dd",
      "borderStyle": "#dcdcdc",
      "backgroundColor": "#ffffff",
      "list": [{
          "key": "home",
          "iconPath": "/images/icon_home.png",
          "selectedIconPath": "/images/icon_home_active.png",
          "text": "首页"
        },
        {
          "key": "tag",
          "iconPath": "/images/icon_gift.png",
          "selectedIconPath": "/images/icon_gift_active.png",
          "text": "礼品"
        },
        {
          "key": "new",
          "iconPath": "/images/icon_plus_big.png",
          "iconType": "big overflow circle shadow",
          "choose": "disable"
        },
        {
          "key": "notebook",
          "iconPath": "/images/icon_message.png",
          "selectedIconPath": "/images/icon_message_active.png",
          "text": "信息"
        },
        {
          "key": "me",
          "iconPath": "/images/icon_contract.png",
          "selectedIconPath": "/images/icon_contract_active.png",
          "text": "我"
        }
      ]
    }
  },

  onLoad: function() {

  },
  tabChange: function(e) {
    console.log('你点击了一下')
  }
})