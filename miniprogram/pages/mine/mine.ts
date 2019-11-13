import { IMyApp } from '../../app'
const app = getApp<IMyApp>()
var getapp: any = getApp()
var domain: string = getapp.globalData.domain
Page({
  data: {
    truescroll: true, page: 1,user:"未登录"
  },
  onLoad() {
    this.getscroll()
    this.islogin()
  },
  scroll: null,
  getscroll() {
    this.scroll = this.selectComponent("#scroll");
    this.scroll.getdata(0, 0);
  },
  onReachBottom(): void {
    var page: any = this.data.page
    page = page + 1
    this.setData!({
      page: page
    })
    if (this.data.truescroll) {
      this.scroll.getdata(page)
    }
  },
  islogin() {
    var gets: any = wx.getStorageSync("kc-cookie")
    var header: any = {}
    header["Cookie"] = gets
    wx.request({
      url: domain+"/user/islogin",
      header: header,
      success: (res) => {
        this.setData({user:res.data.reg.name})
      }
    })
  }
})
