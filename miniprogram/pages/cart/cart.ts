import { IMyApp } from '../../app'
const app = getApp<IMyApp>()
var getapp: any = getApp()
var domain: string = getapp.globalData.domain
Page({
  data: {
    cart: true, list: [], late:"translate(-45%,0)",width:"-45%"
  },
  onLoad() {},
  onShow(){
    this.login()
  },
  onHide(){
    console.log(344)
  },
  login(){
    var gets: any = wx.getStorageSync("kc-cookie")
    var header:any={}
    header["Cookie"]=gets
    wx.request({
      url: domain +"/user/islogin",
      header:header,
      success:(res:any)=>{
        var login: any = this.selectComponent("#login")
        if(res.data.code==1){ //用户已登录
          login.noshow(true)
          this.showdata(res.data.reg.uid)
        }else{
          login.noshow(false)
        }
      }
    })
  },
  showdata(uid:any){
    if (typeof(uid)==="number"){
      uid=uid
    } else if (typeof(uid)==="object"){
      uid=uid.detail.ids
    }
    wx.request({
      url: domain+"/details/chat_cart?uid=" + uid,
      success: (res: any) => {
        var list: any = res.data.reg
        for (var li of list) {
          li.late = "translate(0%,0)"
        }
        this.setData!({ list: list, cart: true })
      }
    })
  },
  shopping(){
    wx.navigateTo({
      url:"../all/all?id=1"
    })
  },
  oper(e:any){
    var id:number = e.currentTarget.dataset.id
    var list:any=this.data.list
    if (list[id].late=="translate(0%,0)"){
      list[id].late = "translate(-30%,0)"
      for(var i=0;i<list.length;i++){
        if(id!=i){
          list[i].late="translate(0%,0)"
        }
      }
    }else{
      list[id].late = "translate(0%,0)"
    }
    this.setData!({list:list})
  },
  del(e:any){
    var id:number=e.currentTarget.dataset.id
    var list:any=this.data.list
    wx.request({
      url: domain +"/details/chat_delcart",
      data:{uid:list[id].uid,pid:list[id].pid},
      success: (res: any) => {
        if(res.data.code==1){
          var title:string="删除成功"
          list.splice(id,1)
        }else{
          var title:string = "删除失败"
        }
        wx.showToast({
          title:title,
          icon:"none",
          duration:800
        })
        this.setData!({list:list})
      }
    })
  }
})
