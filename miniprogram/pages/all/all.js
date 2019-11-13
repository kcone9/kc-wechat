"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        height: 300, page: 1, truescroll: true
    },
    onLoad: function (options) {
        var _this = this;
        this.getscroll(options.id);
        wx.getSystemInfo({
            success: function (res) {
                _this.setData({ height: res.windowHeight });
            }
        });
    },
    scroll: null,
    getscroll: function (e) {
        this.scroll = this.selectComponent("#scroll");
        this.scroll.getdata(0, 0);
        this.scroll.other(e);
    },
    getdata: function () {
        var page = this.data.page;
        page = page + 1;
        this.setData({
            page: page
        });
        if (this.data.truescroll) {
            this.scroll.getdata(page);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUE7QUFDNUIsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFVBQVUsRUFBQyxJQUFJO0tBQ3RDO0lBQ0QsTUFBTSxZQUFDLE9BQVc7UUFBbEIsaUJBUUM7UUFQQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUMxQixFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ2YsT0FBTyxFQUFDLFVBQUMsR0FBTztnQkFDZCxLQUFJLENBQUMsT0FBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxZQUFZLEVBQUMsQ0FBQyxDQUFBO1lBRTVDLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsTUFBTSxFQUFDLElBQUk7SUFDWCxTQUFTLFlBQUMsQ0FBSztRQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDdEIsQ0FBQztJQUNELE9BQU87UUFDTCxJQUFJLElBQUksR0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQTtRQUM5QixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQTtRQUNmLElBQUksQ0FBQyxPQUFRLENBQUM7WUFDWixJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUMsQ0FBQTtRQUNGLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUE7U0FDMUI7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJ1xyXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIGhlaWdodDogMzAwLCBwYWdlOiAxLCB0cnVlc2Nyb2xsOnRydWVcclxuICB9LFxyXG4gIG9uTG9hZChvcHRpb25zOmFueSkge1xyXG4gICAgdGhpcy5nZXRzY3JvbGwob3B0aW9ucy5pZClcclxuICAgIHd4LmdldFN5c3RlbUluZm8oe1xyXG4gICAgICBzdWNjZXNzOihyZXM6YW55KT0+e1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoeyBoZWlnaHQ6IHJlcy53aW5kb3dIZWlnaHR9KVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgc2Nyb2xsOm51bGwsXHJcbiAgZ2V0c2Nyb2xsKGU6YW55KSB7XHJcbiAgICB0aGlzLnNjcm9sbCA9IHRoaXMuc2VsZWN0Q29tcG9uZW50KFwiI3Njcm9sbFwiKTtcclxuICAgIHRoaXMuc2Nyb2xsLmdldGRhdGEoMCwgMCk7XHJcbiAgICB0aGlzLnNjcm9sbC5vdGhlcihlKVxyXG4gIH0sXHJcbiAgZ2V0ZGF0YSgpe1xyXG4gICAgdmFyIHBhZ2U6IGFueSA9IHRoaXMuZGF0YS5wYWdlXHJcbiAgICBwYWdlID0gcGFnZSArIDFcclxuICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICBwYWdlOiBwYWdlXHJcbiAgICB9KVxyXG4gICAgaWYgKHRoaXMuZGF0YS50cnVlc2Nyb2xsKSB7XHJcbiAgICAgIHRoaXMuc2Nyb2xsLmdldGRhdGEocGFnZSlcclxuICAgIH1cclxuICB9XHJcbn0pXHJcbiJdfQ==