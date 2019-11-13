"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
var getapp = getApp();
var domain = getapp.globalData.domain;
Page({
    data: {
        nav: [],
        index: 0, list: []
    },
    onLoad: function () {
        this.inite();
        this.details(1);
    },
    inite: function () {
        var _this = this;
        wx.request({
            url: domain + "/details/chat_nav",
            success: function (e) {
                var list = e.data;
                for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                    var r = list_1[_i];
                    r.cb = false;
                }
                list[0].cb = true;
                _this.setData({
                    nav: list
                });
            }
        });
    },
    details: function (i) {
        var _this = this;
        wx.request({
            url: domain + "/details/chat_nav?list=" + i,
            success: function (res) {
                var nav = _this.data.nav;
                var list = _this.data.list;
                list = res.data.ctitle;
                for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
                    var i = list_2[_i];
                    i.reg = [];
                    for (var _a = 0, _b = res.data.pro; _a < _b.length; _a++) {
                        var j = _b[_a];
                        if (i.tid == j.tid) {
                            i.reg.push(j);
                        }
                    }
                }
                _this.setData({
                    list: list
                });
            }
        });
    },
    navleft: function (e) {
        var id = e.target.dataset.id;
        var nav = this.data.nav;
        for (var _i = 0, nav_1 = nav; _i < nav_1.length; _i++) {
            var n = nav_1[_i];
            n.cb = false;
        }
        nav[id].cb = true;
        this.setData({
            nav: nav,
            index: id
        });
        this.details(id + 1);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NpZnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjbGFzc2lmeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBQzVCLElBQUksTUFBTSxHQUFRLE1BQU0sRUFBRSxDQUFBO0FBQzFCLElBQUksTUFBTSxHQUFXLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFBO0FBQzdDLElBQUksQ0FBQztJQUNILElBQUksRUFBQztRQUNILEdBQUcsRUFBQyxFQUFFO1FBQ04sS0FBSyxFQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsRUFBRTtLQUNoQjtJQUNELE1BQU07UUFDSixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2pCLENBQUM7SUFDRCxLQUFLO1FBQUwsaUJBY0M7UUFiQyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLE1BQU0sR0FBQyxtQkFBbUI7WUFDL0IsT0FBTyxFQUFDLFVBQUMsQ0FBSztnQkFDWixJQUFJLElBQUksR0FBSyxDQUFDLENBQUMsSUFBSSxDQUFBO2dCQUNuQixLQUFhLFVBQUksRUFBSixhQUFJLEVBQUosa0JBQUksRUFBSixJQUFJLEVBQUM7b0JBQWQsSUFBSSxDQUFDLGFBQUE7b0JBQ1AsQ0FBQyxDQUFDLEVBQUUsR0FBQyxLQUFLLENBQUE7aUJBQ1g7Z0JBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUE7Z0JBQ2YsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixHQUFHLEVBQUMsSUFBSTtpQkFDVCxDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE9BQU8sRUFBUCxVQUFRLENBQVE7UUFBaEIsaUJBb0JDO1FBbkJDLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUsTUFBTSxHQUFFLHlCQUF5QixHQUFDLENBQUM7WUFDeEMsT0FBTyxFQUFDLFVBQUMsR0FBTztnQkFDZCxJQUFJLEdBQUcsR0FBSyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQTtnQkFDekIsSUFBSSxJQUFJLEdBQUssS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUE7Z0JBQzNCLElBQUksR0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQTtnQkFDcEIsS0FBYSxVQUFJLEVBQUosYUFBSSxFQUFKLGtCQUFJLEVBQUosSUFBSSxFQUFDO29CQUFkLElBQUksQ0FBQyxhQUFBO29CQUNQLENBQUMsQ0FBQyxHQUFHLEdBQUMsRUFBRSxDQUFBO29CQUNSLEtBQWEsVUFBWSxFQUFaLEtBQUEsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQVosY0FBWSxFQUFaLElBQVksRUFBQzt3QkFBdEIsSUFBSSxDQUFDLFNBQUE7d0JBQ1AsSUFBRyxDQUFDLENBQUMsR0FBRyxJQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUM7NEJBQ2QsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7eUJBQ2Q7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixJQUFJLEVBQUMsSUFBSTtpQkFDVixDQUFDLENBQUE7WUFDSixDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE9BQU8sRUFBUCxVQUFRLENBQU07UUFDWixJQUFJLEVBQUUsR0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDakMsSUFBSSxHQUFHLEdBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUE7UUFDekIsS0FBYSxVQUFHLEVBQUgsV0FBRyxFQUFILGlCQUFHLEVBQUgsSUFBRyxFQUFDO1lBQWIsSUFBSSxDQUFDLFlBQUE7WUFDUCxDQUFDLENBQUMsRUFBRSxHQUFDLEtBQUssQ0FBQTtTQUNYO1FBQ0QsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBQyxJQUFJLENBQUE7UUFDZixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osR0FBRyxFQUFDLEdBQUc7WUFDUCxLQUFLLEVBQUMsRUFBRTtTQUNULENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3BCLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXHJcbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcclxudmFyIGdldGFwcDogYW55ID0gZ2V0QXBwKClcclxudmFyIGRvbWFpbjogc3RyaW5nID0gZ2V0YXBwLmdsb2JhbERhdGEuZG9tYWluXHJcblBhZ2Uoe1xyXG4gIGRhdGE6e1xyXG4gICAgbmF2OltdLFxyXG4gICAgaW5kZXg6MCxsaXN0OltdXHJcbiAgfSxcclxuICBvbkxvYWQoKXtcclxuICAgIHRoaXMuaW5pdGUoKVxyXG4gICAgdGhpcy5kZXRhaWxzKDEpXHJcbiAgfSxcclxuICBpbml0ZSgpe1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDogZG9tYWluK1wiL2RldGFpbHMvY2hhdF9uYXZcIixcclxuICAgICAgc3VjY2VzczooZTphbnkpPT57XHJcbiAgICAgICAgdmFyIGxpc3Q6YW55PWUuZGF0YVxyXG4gICAgICAgIGZvcih2YXIgciBvZiBsaXN0KXtcclxuICAgICAgICAgIHIuY2I9ZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgbGlzdFswXS5jYj10cnVlXHJcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XHJcbiAgICAgICAgICBuYXY6bGlzdFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuICBkZXRhaWxzKGk6bnVtYmVyKTp2b2lke1xyXG4gICAgd3gucmVxdWVzdCh7XHJcbiAgICAgIHVybDogZG9tYWluICtcIi9kZXRhaWxzL2NoYXRfbmF2P2xpc3Q9XCIraSxcclxuICAgICAgc3VjY2VzczoocmVzOmFueSk9PntcclxuICAgICAgICB2YXIgbmF2OmFueT10aGlzLmRhdGEubmF2XHJcbiAgICAgICAgdmFyIGxpc3Q6YW55PXRoaXMuZGF0YS5saXN0XHJcbiAgICAgICAgbGlzdD1yZXMuZGF0YS5jdGl0bGVcclxuICAgICAgICBmb3IodmFyIGkgb2YgbGlzdCl7XHJcbiAgICAgICAgICBpLnJlZz1bXVxyXG4gICAgICAgICAgZm9yKHZhciBqIG9mIHJlcy5kYXRhLnBybyl7XHJcbiAgICAgICAgICAgIGlmKGkudGlkPT1qLnRpZCl7XHJcbiAgICAgICAgICAgICAgaS5yZWcucHVzaChqKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xyXG4gICAgICAgICAgbGlzdDpsaXN0XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LFxyXG4gIG5hdmxlZnQoZT86YW55KTp2b2lke1xyXG4gICAgdmFyIGlkOmFueSA9IGUudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICB2YXIgbmF2OmFueT10aGlzLmRhdGEubmF2XHJcbiAgICBmb3IodmFyIG4gb2YgbmF2KXtcclxuICAgICAgbi5jYj1mYWxzZVxyXG4gICAgfVxyXG4gICAgbmF2W2lkXS5jYj10cnVlXHJcbiAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgbmF2Om5hdixcclxuICAgICAgaW5kZXg6aWRcclxuICAgIH0pXHJcbiAgICB0aGlzLmRldGFpbHMoaWQrMSlcclxuICB9XHJcbn0pIl19