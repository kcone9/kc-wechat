import { IMyApp } from '../../app'
const app = getApp<IMyApp>()
var getapp: any = getApp()
var domain: string = getapp.globalData.domain
Page({
  data:{
    nav:[],
    index:0,list:[]
  },
  onLoad(){
    this.inite()
    this.details(1)
  },
  inite(){
    wx.request({
      url: domain+"/details/chat_nav",
      success:(e:any)=>{
        var list:any=e.data
        for(var r of list){
          r.cb=false
        }
        list[0].cb=true
        this.setData!({
          nav:list
        })
      }
    })
  },
  details(i:number):void{
    wx.request({
      url: domain +"/details/chat_nav?list="+i,
      success:(res:any)=>{
        var nav:any=this.data.nav
        var list:any=this.data.list
        list=res.data.ctitle
        for(var i of list){
          i.reg=[]
          for(var j of res.data.pro){
            if(i.tid==j.tid){
              i.reg.push(j)
            }
          }
        }
        this.setData!({
          list:list
        })
      }
    })
  },
  navleft(e?:any):void{
    var id:any = e.target.dataset.id;
    var nav:any=this.data.nav
    for(var n of nav){
      n.cb=false
    }
    nav[id].cb=true
    this.setData!({
      nav:nav,
      index:id
    })
    this.details(id+1)
  }
})