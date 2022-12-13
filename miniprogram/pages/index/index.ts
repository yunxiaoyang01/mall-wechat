// 0 引入 用来发送请求的 方法 一定要把路径补全
import { request } from "../../request/index";
//Page Object
Page({
  data: {
    // 轮播图数组
    swiperList: [],
    catesList: [],
    // 楼层数据
    floorList: [],
  },
  // 页面开始加载的时候，就会触发
  onLoad: function (options) {
    // 1. 发送异步请求获取轮播图数据
    this.getSwiperList()
    // 1. 发送异步请求获取分类数据
    this.getCateList()
  },
  // 获取轮播图数据
  getSwiperList() {
    request({ url: "/home/swiperdata" })
      .then((result: any) => {
        result.forEach((v: { navigator_url: string; }, i: string | number) => {
          result[i].navigator_url = v.navigator_url.replace('main', 'goods_detail')
        })
        this.setData({
          swiperList: result
        })
      })
  },
  // 获取 分类导航数据
  getCateList() {
    request({ url: "/home/catitems" })
      .then((result: any) => {
        this.setData({
          catesList: result
        })
      })
  },
  // 获取 楼层数据
  getFloorList() {
    request({ url: "/home/floordata" })
      .then((result: any) => {
        this.setData({
          floorList: result
        })
      })
  },

  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  },
  onPageScroll: function () {

  },
  //item(index,pagePath,text)
  onTabItemTap: function (item) {

  }
});
