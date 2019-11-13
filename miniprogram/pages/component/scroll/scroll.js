var getapp = getApp()
var domain = getapp.globalData.domain
Component({
  properties: {},
  data: {
    classify: "rotate(0deg)",
    isclass: true,shows:false,
    isprice: true,othertrans:"rotate(0deg)",
    pricetrans: "rotate(0deg)",
    pricenum: 1,
    priceurl: domain+"/chat/icon/arr_up_all.png",
    page: 1,
    details: [],otherlist:[],
    show: false,
    truescroll: true,
    nav: [],
    nav_shade: "hidden", 
    navscroll: true
  },
  methods: {
    classf: function(clear) {
      var isclass = this.data.isclass;
      if (isclass) {
        var classify = "rotate(-180deg)"
        var classes = false
        var shade = "normal"
        var height = "32vh"
      } else {
        var classify = "rotate(-360deg)"
        var classes = true
        var shade = "hidden"
      }
      this.setData({
        classify: classify,
        isclass: classes,
        nav_shade: shade
      });
    },
    go(e) {
      //console.log("阻止冒泡站位", e)
    },
    clear(e) {
      var id = e.target.dataset.id
      if (id == "1") {
        this.setData({
          isclass: true,
          classify: "rotate(-360deg)",
          nav_shade: "hidden"
        })
      }
    },
    price: function() {
      var isprice = this.data.isprice;
      var num = this.data.pricenum;
      var list = this.data.details
      if (num == 1) {
        this.setData({
          priceurl: domain +"/chat/icon/arr_up_down.png"
        })
      }
      if (isprice) {
        var pricetrans = "rotate(-180deg)"
        var prices = false
        list.sort((a, b) => {
          if (a.price < b.price) {
            return 1
          } else if (a.price > b.price) {
            return -1
          } else {
            if (a.price > b.price) {
              return 1
            } else if (a.price < b.price) {
              return -1
            }
            return 0
          }
        })
      } else {
        var pricetrans = "rotate(-360deg)"
        var prices = true
        list.sort((b, a) => {
          if (a.price < b.price) {
            return 1
          } else if (a.price > b.price) {
            return -1
          } else {
            if (a.price > b.price) {
              return 1
            } else if (a.price < b.price) {
              return -1
            }
            return 0
          }
        })
      }
      this.setData({
        pricetrans: pricetrans,
        isprice: prices,
        pricenum: num = num + 1,
        details: list
      })
    },
    getdata: function(i, time) {
      this.nav()
      var _this = this;
      if (time === void 0) {
        time = 1000;
      }
      if (!i) {
        var page = this.data.page;
        i = page;
      }
      var show = this.data.show;
      if (show) {
        wx.showToast({
          title: "正在加载",
          icon: "loading",
          duration: 1000
        });
      }
      this.setData({
        truescroll: false
      });
      setTimeout(function() {
        wx.request({
          url: domain +"/details/chat_index?page=" + i,
          success: function(res) {
            if (res.data.code == 1) {
              var details = _this.data.details;
              details = details.concat(res.data.reg);
              for (var i = 0; i < details.length; i++) {
                if (i % 2 != 0) {
                  details[i].cb = false;
                } else {
                  details[i].cb = true;
                }
              }
              _this.setData({
                details: details,
                show: true,
                truescroll: true
              });
            } else {
              wx.stopPullDownRefresh();
              _this.setData({
                show: false,
                truescroll: false
              });
              wx.showToast({
                title: "没有更多了",
                duration: 900,
                icon: "none"
              });
            }
          }
        });
      }, time);
    },
    nav() {
      wx.request({
        url: domain +"/details/chat_nav",
        success: (res) => {
          this.setData({
            nav: res.data
          })
        }
      })
    },
    other(e){
      wx.request({
        url: domain +"/details/chat_nav?list="+e,
        success:(res)=>{ 
          var list = res.data.pro
          for(var l of list){
            l.cb=false
          }
          list[0].cb=true
          var row=[]
          for(var l of list){
            row.push({ title: l.titlt})
          }
          this.setData({shows:true,otherlist:list,nav:row})
        }
      })
    },
    otherbtn(e){
      var id = e.currentTarget.dataset.id
      var list=this.data.otherlist
      for(var l of list){
          l.cb=false
      }
      list[id].cb=true
      this.setData({
        otherlist:list
      })
    },
    otherrotate(){
      var op=this.data.othertrans
      if (op =="rotate(0deg)"){
        var open = "normal"
        var othertrans ="rotate(180deg)"
      } else if(op =="rotate(180deg)"){
        var open="hidden"
        var othertrans ="rotate(0deg)"
      } 
      this.setData({ othertrans: othertrans, nav_shade:open})
    },
    jump(e){
      var pid = e.currentTarget.dataset.pid
      wx.navigateTo({
        url:"../detail/detail?pid="+pid
      })
    }
  }
})