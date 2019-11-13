var getapp= getApp()
var domain = getapp.globalData.domain
Component({
  properties: {

  },
  data: {
    user: "", pass: "", message: "请登录", login: "flex"
  },
  methods: {
    user(e) {
      this.setData({
        user: e.detail.value
      })
    },
    pass(e) {
      this.setData({
        pass: e.detail.value
      })
    },
    islogin() {
      var gets = wx.getStorageSync("kc-cookie")
      var header = {}
      header["Cookie"] = gets
      wx.request({
        url: domain+"/user/islogin",
        header: header,
        success: (res) => {
          if(res.data.code==1){
            var login="none"
            
          }else{
            var login="flex"
          }
          this.setData({
            login:login
          })
        }
      })
    },
    noshow(e){
      if(e==true){
        var is="none"
      }else{
        var is="flex"
      }
      this.setData({login:is})
    },
    login() {
      wx.request({
        url: domain +"/user/login",
        header: {
          "content-type": "application/x-www-form-urlencoded"
        },
        method: "POST",
        data: `user_name=${this.data.user}&pass=${this.data.pass}`,
        success: (e) => {
          if (e.data.code == 1) {
            var message = "登录成功!"
            wx.setStorageSync("kc-cookie", e.header["set-cookie"])
            // this.islogin();
            var islogin = "none"
            this.triggerEvent("showdata", { ids: e.data.data[0].user_id})
            
          } else {
            var message = "登录失败！用户名或密码错误"
            var islogin = "flex"
          }
          this.setData({
            message: message,
          })
          setTimeout(()=>{
            this.setData({
              message: message,
              login: islogin
            })
          },1000)
          
        }
      })
    },
  }
})
