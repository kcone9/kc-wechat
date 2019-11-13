"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
var getapp = getApp();
var domain = getapp.globalData.domain;
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        nav: [], navids: 0,
        swiper: [domain + "/chat/swiper/1.jpg", domain + "/chat/swiper/2.jpg", domain + "/chat/swiper/3.jpg"],
        navtrans: "rotate(0deg)", navoper: [], isnavtrans: true, navtab: "none", navtabwid: "0%", show: false, truescroll: true, page: 1, txet: "normal",
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        });
    },
    onLoad: function () {
        this.inits();
        this.getscroll();
    },
    inits: function () {
        var _this = this;
        wx.request({
            url: domain + "/details/chat_nav",
            success: function (res) {
                var list = res.data;
                list.unshift({ cid: 0, title: "推荐", time: "2019-07-10T09:53:09.000Z" });
                for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                    var l = list_1[_i];
                    l.cb = false;
                    l.cd = false;
                }
                list[0].cb = true;
                list[0].cd = true;
                _this.setData({ nav: list });
            }
        });
    },
    navbtn: function (e) {
        var id = e.target.dataset.ids;
        var list = this.data.nav;
        for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
            var l = list_2[_i];
            l.cb = false;
        }
        list[id].cb = true;
        this.setData({
            nav: list,
            navids: id
        });
        this.navget(id);
    },
    navtab: function () {
        var istrans = this.data.isnavtrans;
        if (istrans) {
            this.setData({
                navtrans: "rotate(-180deg)",
                isnavtrans: false,
                navtab: "flex",
                navtabwid: "100%"
            });
        }
        else {
            this.setData({
                navtrans: "rotate(-360deg)",
                isnavtrans: true,
                navtab: "none",
                navtabwid: "0%"
            });
        }
    },
    navtabbtn: function (e) {
        var id = e.target.dataset.ids;
        var list = this.data.nav;
        for (var _i = 0, list_3 = list; _i < list_3.length; _i++) {
            var r = list_3[_i];
            r.cd = false;
        }
        list[id].cd = true;
        this.setData({
            nav: list
        });
    },
    scroll: null,
    getscroll: function () {
        this.scroll = this.selectComponent("#scroll");
        this.scroll.getdata(0, 0);
    },
    onReachBottom: function () {
        var page = this.data.page;
        page = page + 1;
        this.setData({
            page: page
        });
        if (this.data.truescroll) {
            this.scroll.getdata(page);
        }
    },
    navget: function (e) {
        var _this = this;
        if (e == 0) {
            this.setData({ show: false });
        }
        else {
            wx.request({
                url: domain + "/details/chat_nav?list=" + e,
                success: function (res) {
                    if (res.data.code == 1) {
                        var list = res.data.pro;
                        list[9].img = "https://static.biyao.com/mnew/img/master/index/classify_more@2x_0ed30f2.png",
                            list[9].titlt = "查看全部";
                        _this.setData({ show: true, navoper: list });
                    }
                    else {
                        wx.showToast({
                            title: "未更新当前数据",
                            duration: 1200,
                            icon: "none"
                        });
                    }
                }
            });
        }
    },
    gooper: function () {
        var id = this.data.navids;
        wx.navigateTo({
            url: "../all/all?id=" + id
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBQzVCLElBQUksTUFBTSxHQUFPLE1BQU0sRUFBRSxDQUFBO0FBQ3pCLElBQUksTUFBTSxHQUFTLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFBO0FBQzNDLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsR0FBRyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUNsQixNQUFNLEVBQUUsQ0FBQyxNQUFNLEdBQUcsb0JBQW9CLEVBQUUsTUFBTSxHQUFHLG9CQUFvQixFQUFFLE1BQU0sR0FBRSxvQkFBb0IsQ0FBQztRQUNwRyxRQUFRLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVE7S0FFako7SUFDRCxXQUFXO1FBQ1QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxjQUFjO1NBQ3BCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCxNQUFNO1FBQ0osSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ1osSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQ2xCLENBQUM7SUFDRCxLQUFLO1FBQUwsaUJBZ0JDO1FBZkMsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSxNQUFN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Q2hCLFFBQVEsRUFBRSxJQUFJOzRCQUNkLElBQUksRUFBRSxNQUFNO3lCQUNiLENBQUMsQ0FBQTtxQkFDSDtnQkFDSCxDQUFDO2FBQ0YsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0lBQ0QsTUFBTTtRQUNKLElBQUksRUFBRSxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO1FBQ2pDLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDWixHQUFHLEVBQUUsZ0JBQWdCLEdBQUcsRUFBRTtTQUMzQixDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJ1xuY29uc3QgYXBwID0gZ2V0QXBwPElNeUFwcD4oKVxudmFyIGdldGFwcDphbnkgPSBnZXRBcHAoKVxudmFyIGRvbWFpbjpzdHJpbmc9IGdldGFwcC5nbG9iYWxEYXRhLmRvbWFpblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBtb3R0bzogJ+eCueWHuyDigJznvJbor5HigJ0g5Lul5p6E5bu6JyxcbiAgICB1c2VySW5mbzoge30sXG4gICAgaGFzVXNlckluZm86IGZhbHNlLFxuICAgIGNhbklVc2U6IHd4LmNhbklVc2UoJ2J1dHRvbi5vcGVuLXR5cGUuZ2V0VXNlckluZm8nKSxcbiAgICBuYXY6IFtdLCBuYXZpZHM6IDAsXG4gICAgc3dpcGVyOiBbZG9tYWluICsgXCIvY2hhdC9zd2lwZXIvMS5qcGdcIiwgZG9tYWluICsgXCIvY2hhdC9zd2lwZXIvMi5qcGdcIiwgZG9tYWluICtcIi9jaGF0L3N3aXBlci8zLmpwZ1wiXSxcbiAgICBuYXZ0cmFuczogXCJyb3RhdGUoMGRlZylcIiwgbmF2b3BlcjogW10sIGlzbmF2dHJhbnM6IHRydWUsIG5hdnRhYjogXCJub25lXCIsIG5hdnRhYndpZDogXCIwJVwiLCBzaG93OiBmYWxzZSwgdHJ1ZXNjcm9sbDogdHJ1ZSwgcGFnZTogMSwgdHhldDogXCJub3JtYWxcIixcbiAgICBcbiAgfSxcbiAgYmluZFZpZXdUYXAoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9sb2dzL2xvZ3MnXG4gICAgfSlcbiAgfSxcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuaW5pdHMoKVxuICAgIHRoaXMuZ2V0c2Nyb2xsKClcbiAgfSxcbiAgaW5pdHMoKSB7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IGRvbWFpbitcIi9kZXRhaWxzL2NoYXRfbmF2XCIsXG4gICAgICBzdWNjZXNzOiAocmVzOiBhbnkpID0+IHtcbiAgICAgICAgdmFyIGxpc3Q6IGFueSA9IHJlcy5kYXRhO1xuICAgICAgICBsaXN0LnVuc2hpZnQoeyBjaWQ6IDAsIHRpdGxlOiBcIuaOqOiNkFwiLCB0aW1lOiBcIjIwMTktMDctMTBUMDk6NTM6MDkuMDAwWlwiIH0pXG4gICAgICAgIGZvciAodmFyIGwgb2YgbGlzdCkge1xuICAgICAgICAgIGwuY2IgPSBmYWxzZVxuICAgICAgICAgIGwuY2QgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIGxpc3RbMF0uY2IgPSB0cnVlXG4gICAgICAgIGxpc3RbMF0uY2QgPSB0cnVlXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoeyBuYXY6IGxpc3QgfSlcbiAgICAgIH1cbiAgICB9KVxuICAgIFxuICB9LFxuICBuYXZidG4oZT86IGFueSkge1xuICAgIHZhciBpZDogYW55ID0gZS50YXJnZXQuZGF0YXNldC5pZHNcbiAgICB2YXIgbGlzdDogYW55ID0gdGhpcy5kYXRhLm5hdlxuXG4gICAgZm9yICh2YXIgbCBvZiBsaXN0KSB7XG4gICAgICBsLmNiID0gZmFsc2VcbiAgICB9XG4gICAgbGlzdFtpZF0uY2IgPSB0cnVlXG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBuYXY6IGxpc3QsXG4gICAgICBuYXZpZHM6IGlkXG4gICAgfSlcbiAgICB0aGlzLm5hdmdldChpZClcbiAgfSxcbiAgbmF2dGFiKCkge1xuICAgIHZhciBpc3RyYW5zID0gdGhpcy5kYXRhLmlzbmF2dHJhbnNcbiAgICBpZiAoaXN0cmFucykge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIG5hdnRyYW5zOiBcInJvdGF0ZSgtMTgwZGVnKVwiLFxuICAgICAgICBpc25hdnRyYW5zOiBmYWxzZSxcbiAgICAgICAgbmF2dGFiOiBcImZsZXhcIixcbiAgICAgICAgbmF2dGFid2lkOiBcIjEwMCVcIlxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIG5hdnRyYW5zOiBcInJvdGF0ZSgtMzYwZGVnKVwiLFxuICAgICAgICBpc25hdnRyYW5zOiB0cnVlLFxuICAgICAgICBuYXZ0YWI6IFwibm9uZVwiLFxuICAgICAgICBuYXZ0YWJ3aWQ6IFwiMCVcIlxuICAgICAgfSlcbiAgICB9XG4gIH0sXG4gIG5hdnRhYmJ0bihlPzogYW55KSB7XG4gICAgdmFyIGlkOiBhbnkgPSBlLnRhcmdldC5kYXRhc2V0Lmlkc1xuICAgIHZhciBsaXN0OiBhbnkgPSB0aGlzLmRhdGEubmF2XG4gICAgZm9yICh2YXIgciBvZiBsaXN0KSB7XG4gICAgICByLmNkID0gZmFsc2VcbiAgICB9XG4gICAgbGlzdFtpZF0uY2QgPSB0cnVlXG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBuYXY6IGxpc3RcbiAgICB9KVxuICB9LFxuICBzY3JvbGw6IG51bGwsXG4gIGdldHNjcm9sbCgpIHtcbiAgICB0aGlzLnNjcm9sbCA9IHRoaXMuc2VsZWN0Q29tcG9uZW50KFwiI3Njcm9sbFwiKTtcbiAgICB0aGlzLnNjcm9sbC5nZXRkYXRhKDAsIDApO1xuICB9LFxuICBvblJlYWNoQm90dG9tKCk6IHZvaWQge1xuICAgIHZhciBwYWdlOiBhbnkgPSB0aGlzLmRhdGEucGFnZVxuICAgIHBhZ2UgPSBwYWdlICsgMVxuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgcGFnZTogcGFnZVxuICAgIH0pXG4gICAgaWYgKHRoaXMuZGF0YS50cnVlc2Nyb2xsKSB7XG4gICAgICB0aGlzLnNjcm9sbC5nZXRkYXRhKHBhZ2UpXG4gICAgfVxuICB9LFxuICBuYXZnZXQoZT86IGFueSkge1xuICAgIGlmIChlID09IDApIHtcbiAgICAgIHRoaXMuc2V0RGF0YSEoeyBzaG93OiBmYWxzZSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBkb21haW4gK1wiL2RldGFpbHMvY2hhdF9uYXY/bGlzdD1cIiArIGUsXG4gICAgICAgIHN1Y2Nlc3M6IChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChyZXMuZGF0YS5jb2RlID09IDEpIHtcbiAgICAgICAgICAgIHZhciBsaXN0OiBhbnkgPSByZXMuZGF0YS5wcm9cbiAgICAgICAgICAgIGxpc3RbOV0uaW1nID0gXCJodHRwczovL3N0YXRpYy5iaXlhby5jb20vbW5ldy9pbWcvbWFzdGVyL2luZGV4L2NsYXNzaWZ5X21vcmVAMnhfMGVkMzBmMi5wbmdcIixcbiAgICAgICAgICAgICAgbGlzdFs5XS50aXRsdCA9IFwi5p+l55yL5YWo6YOoXCJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSEoeyBzaG93OiB0cnVlLCBuYXZvcGVyOiBsaXN0IH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBcIuacquabtOaWsOW9k+WJjeaVsOaNrlwiLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMTIwMCxcbiAgICAgICAgICAgICAgaWNvbjogXCJub25lXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSxcbiAgZ29vcGVyKCkge1xuICAgIHZhciBpZDogbnVtYmVyID0gdGhpcy5kYXRhLm5hdmlkc1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBcIi4uL2FsbC9hbGw/aWQ9XCIgKyBpZFxuICAgIH0pXG4gIH1cbn0pXG4iXX0=