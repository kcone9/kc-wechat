import { IMyApp } from '../../app'
const app = getApp<IMyApp>()
var getapp:any = getApp()
var domain:string= getapp.globalData.domain
Page({
  data: {
    motto: '点击 “编译” 以构建',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    nav: [], navids: 0,
    swiper: [domain + "/chat/swiper/1.jpg", domain + "/chat/swiper/2.jpg", domain +"/chat/swiper/3.jpg"],
    navtrans: "rotate(0deg)", navoper: [], isnavtrans: true, navtab: "none", navtabwid: "0%", show: false, truescroll: true, page: 1, txet: "normal",
    
  },
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    this.inits()
    this.getscroll()
  },
  inits() {
    wx.request({
      url: domain+"/details/chat_nav",
      success: (res: any) => {
        var list: any = res.data;
        list.unshift({ cid: 0, title: "推荐", time: "2019-07-10T09:53:09.000Z" })
        for (var l of list) {
          l.cb = false
          l.cd = false
        }
        list[0].cb = true
        list[0].cd = true
        this.setData!({ nav: list })
      }
    })
    
  },
  navbtn(e?: any) {
    var id: any = e.target.dataset.ids
    var list: any = this.data.nav

    for (var l of list) {
      l.cb = false
    }
    list[id].cb = true
    this.setData!({
      nav: list,
      navids: id
    })
    this.navget(id)
  },
  navtab() {
    var istrans = this.data.isnavtrans
    if (istrans) {
      this.setData!({
        navtrans: "rotate(-180deg)",
        isnavtrans: false,
        navtab: "flex",
        navtabwid: "100%"
      })
    } else {
      this.setData!({
        navtrans: "rotate(-360deg)",
        isnavtrans: true,
        navtab: "none",
        navtabwid: "0%"
      })
    }
  },
  navtabbtn(e?: any) {
    var id: any = e.target.dataset.ids
    var list: any = this.data.nav
    for (var r of list) {
      r.cd = false
    }
    list[id].cd = true
    this.setData!({
      nav: list
    })
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
  navget(e?: any) {
    if (e == 0) {
      this.setData!({ show: false })
    } else {
      wx.request({
        url: domain +"/details/chat_nav?list=" + e,
        success: (res: any) => {
          if (res.data.code == 1) {
            var list: any = res.data.pro
            list[9].img = "https://static.biyao.com/mnew/img/master/index/classify_more@2x_0ed30f2.png",
              list[9].titlt = "查看全部"
            this.setData!({ show: true, navoper: list })
          } else {
            wx.showToast({
              title: "未更新当前数据",
              duration: 1200,
              icon: "none"
            })
          }
        }
      })
    }
  },
  gooper() {
    var id: number = this.data.navids
    wx.navigateTo({
      url: "../all/all?id=" + id
    })
  }
})
