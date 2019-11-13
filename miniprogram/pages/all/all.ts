import { IMyApp } from '../../app'
const app = getApp<IMyApp>()
Page({
  data: {
    height: 300, page: 1, truescroll:true
  },
  onLoad(options:any) {
    this.getscroll(options.id)
    wx.getSystemInfo({
      success:(res:any)=>{
        this.setData!({ height: res.windowHeight})
        
      }
    })
  },
  scroll:null,
  getscroll(e:any) {
    this.scroll = this.selectComponent("#scroll");
    this.scroll.getdata(0, 0);
    this.scroll.other(e)
  },
  getdata(){
    var page: any = this.data.page
    page = page + 1
    this.setData!({
      page: page
    })
    if (this.data.truescroll) {
      this.scroll.getdata(page)
    }
  }
})
