import { IMyApp } from '../../app'
const app = getApp<IMyApp>()
var getapp: any = getApp()
var domain: string = getapp.globalData.domain
Page({
  data: {
    rule: ["7天无忧退货", "先行赔付", "超时赔偿","顺丰包邮"],scrollx:[],
    detail:[],swiper:[],img:[],info:[]
    },width:300
  onLoad(options:any) {
    this.getscrollx()
    this.getdetail(options.pid)
  },
  getscrollx(){
    wx.request({
      url: domain+"/details/chat_detail_scroll",
      success:(e)=>{
        this.setData!({scrollx:e.data})
      }
    })
    wx.getSystemInfo({
      success:(e)=>{
        this.setData!({ width: e.windowWidth})
      }
    })
  },
  getdetail(pid:number){
    wx.request({
      url: domain +"/details/chat_detail?pid="+pid,
      success:(res:any)=>{
        this.setData!({
          detail: res.data.detail,
          swiper:res.data.swiper,
          info:res.data.info,
          img:res.data.img
        })
      }
    })
  },
  addcart(){
    var info:any=this.data.info
    var detail:any=this.data.detail
    var gets: any = wx.getStorageSync("kc-cookie")
    var header: any = {}
    header["Cookie"] = gets
    wx.request({
      url: domain +"/user/islogin",
      header: header,
      success:(res:any)=>{
        if(res.data.code==1){
          res.data.reg.uid
          wx.request({
            url: domain +"/details/chat_addcart",
            data: { uid: res.data.reg.uid, pid: info[0].pid
              , img: detail[0].img, title: detail[0].titles, pro: detail[0].content, label: detail[0].label, yell: detail[0].title, price: detail[0].price, contant: detail[0].comment
            },
            success:(res:any)=>{
              if(res.data.code==1){
                var title:string="商品添加成功"
              } else if (res.data.code == 2){ 
                var title:string="已加入购物差"
              }
              wx.showToast({
                icon:"none",
                title:title,
                duration:800
              })
            }
          })
        }else{
          wx.showToast({
            icon:"none",
            title:"请登录",
            duration:800
          })
        }
        
      }
    })
  }
})
