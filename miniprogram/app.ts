//app.ts
export interface IMyApp {
  userInfoReadyCallback?(res: wx.UserInfo): void
  globalData: {
    userInfo?: wx.UserInfo
    // domain:"kcone"
  }
}
App<IMyApp>({
  onLaunch():void {
        
  },
  globalData:{
    domain : "https://kcone.applinzi.com"
  }
})