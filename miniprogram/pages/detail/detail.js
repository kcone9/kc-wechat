"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
var getapp = getApp();
var domain = getapp.globalData.domain;
Page({
    data: {
        rule: ["7天无忧退货", "先行赔付", "超时赔偿", "顺丰包邮"], scrollx: [],
        detail: [], swiper: [], img: [], info: []
    }, width: 300,
    onLoad: function (options) {
        this.getscrollx();
        this.getdetail(options.pid);
    },
    getscrollx: function () {
        var _this = this;
        wx.request({
            url: domain + "/details/chat_detail_scroll",
            success: function (e) {
                _this.setData({ scrollx: e.data });
            }
        });
        wx.getSystemInfo({
            success: function (e) {
                _this.setData({ width: e.windowWidth });
            }
        });
    },
    getdetail: function (pid) {
        var _this = this;
        wx.request({
            url: domain + "/details/chat_detail?pid=" + pid,
            success: function (res) {
                _this.setData({
                    detail: res.data.detail,
                    swiper: res.data.swiper,
                    info: res.data.info,
                    img: res.data.img
                });
            }
        });
    },
    addcart: function () {
        var info = this.data.info;
        var detail = this.data.detail;
        var gets = wx.getStorageSync("kc-cookie");
        var header = {};
        header["Cookie"] = gets;
        wx.request({
            url: domain + "/user/islogin",
            header: header,
            success: function (res) {
                if (res.data.code == 1) {
                    res.data.reg.uid;
                    wx.request({
                        url: domain + "/details/chat_addcart",
                        data: { uid: res.data.reg.uid, pid: info[0].pid,
                            img: detail[0].img, title: detail[0].titles, pro: detail[0].content, label: detail[0].label, yell: detail[0].title, price: detail[0].price, contant: detail[0].comment
                        },
                        success: function (res) {
                            if (res.data.code == 1) {
                                var title = "商品添加成功";
                            }
                            else if (res.data.code == 2) {
                                var title = "已加入购物差";
                            }
                            wx.showToast({
                                icon: "none",
                                title: title,
                                duration: 800
                            });
                        }
                    });
                }
                else {
                    wx.showToast({
                        icon: "none",
                        title: "请登录",
                        duration: 800
                    });
                }
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFVLENBQUE7QUFDNUIsSUFBSSxNQUFNLEdBQVEsTUFBTSxFQUFFLENBQUE7QUFDMUIsSUFBSSxNQUFNLEdBQVcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUE7QUFDN0MsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUMsTUFBTSxDQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUU7UUFDbEQsTUFBTSxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLEVBQUU7S0FDakMsRUFBQyxLQUFLLEVBQUMsR0FBRztJQUNiLE1BQU0sWUFBQyxPQUFXO1FBQ2hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBQ0QsVUFBVTtRQUFWLGlCQVlDO1FBWEMsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSxNQUFNLEdBQUMsNkJBQTZCO1lBQ3pDLE9BQU8sRUFBQyxVQUFDLENBQUM7Z0JBQ1IsS0FBSSxDQUFDLE9BQVEsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQTtZQUNqQyxDQUFDO1NBQ0YsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUNmLE9BQU8sRUFBQyxVQUFDLENBQUM7Z0JBQ1IsS0FBSSxDQUFDLE9BQVEsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQTtZQUN4QyxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lB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QUNKLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJTXlBcHAgfSBmcm9tICcuLi8uLi9hcHAnXHJcbmNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KClcclxudmFyIGdldGFwcDogYW55ID0gZ2V0QXBwKClcclxudmFyIGRvbWFpbjogc3RyaW5nID0gZ2V0YXBwLmdsb2JhbERhdGEuZG9tYWluXHJcblBhZ2Uoe1xyXG4gIGRhdGE6IHtcclxuICAgIHJ1bGU6IFtcIjflpKnml6Dlv6fpgIDotKdcIiwgXCLlhYjooYzotZTku5hcIiwgXCLotoXml7botZTlgb9cIixcIumhuuS4sOWMhemCrlwiXSxzY3JvbGx4OltdLFxyXG4gICAgZGV0YWlsOltdLHN3aXBlcjpbXSxpbWc6W10saW5mbzpbXVxyXG4gICAgfSx3aWR0aDozMDBcclxuICBvbkxvYWQob3B0aW9uczphbnkpIHtcclxuICAgIHRoaXMuZ2V0c2Nyb2xseCgpXHJcbiAgICB0aGlzLmdldGRldGFpbChvcHRpb25zLnBpZClcclxuICB9LFxyXG4gIGdldHNjcm9sbHgoKXtcclxuICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IGRvbWFpbitcIi9kZXRhaWxzL2NoYXRfZGV0YWlsX3Njcm9sbFwiLFxyXG4gICAgICBzdWNjZXNzOihlKT0+e1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe3Njcm9sbHg6ZS5kYXRhfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHd4LmdldFN5c3RlbUluZm8oe1xyXG4gICAgICBzdWNjZXNzOihlKT0+e1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSEoeyB3aWR0aDogZS53aW5kb3dXaWR0aH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSxcclxuICBnZXRkZXRhaWwocGlkOm51bWJlcil7XHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBkb21haW4gK1wiL2RldGFpbHMvY2hhdF9kZXRhaWw/cGlkPVwiK3BpZCxcclxuICAgICAgc3VjY2VzczoocmVzOmFueSk9PntcclxuICAgICAgICB0aGlzLnNldERhdGEhKHtcclxuICAgICAgICAgIGRldGFpbDogcmVzLmRhdGEuZGV0YWlsLFxyXG4gICAgICAgICAgc3dpcGVyOnJlcy5kYXRhLnN3aXBlcixcclxuICAgICAgICAgIGluZm86cmVzLmRhdGEuaW5mbyxcclxuICAgICAgICAgIGltZzpyZXMuZGF0YS5pbWdcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0sXHJcbiAgYWRkY2FydCgpe1xyXG4gICAgdmFyIGluZm86YW55PXRoaXMuZGF0YS5pbmZvXHJcbiAgICB2YXIgZGV0YWlsOmFueT10aGlzLmRhdGEuZGV0YWlsXHJcbiAgICB2YXIgZ2V0czogYW55ID0gd3guZ2V0U3RvcmFnZVN5bmMoXCJrYy1jb29raWVcIilcclxuICAgIHZhciBoZWFkZXI6IGFueSA9IHt9XHJcbiAgICBoZWFkZXJbXCJDb29raWVcIl0gPSBnZXRzXHJcbiAgICB3eC5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBkb21haW4gK1wiL3VzZXIvaXNsb2dpblwiLFxyXG4gICAgICBoZWFkZXI6IGhlYWRlcixcclxuICAgICAgc3VjY2VzczoocmVzOmFueSk9PntcclxuICAgICAgICBpZihyZXMuZGF0YS5jb2RlPT0xKXtcclxuICAgICAgICAgIHJlcy5kYXRhLnJlZy51aWRcclxuICAgICAgICAgIHd4LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IGRvbWFpbiArXCIvZGV0YWlscy9jaGF0X2FkZGNhcnRcIixcclxuICAgICAgICAgICAgZGF0YTogeyB1aWQ6IHJlcy5kYXRhLnJlZy51aWQsIHBpZDogaW5mb1swXS5waWRcclxuICAgICAgICAgICAgICAsIGltZzogZGV0YWlsWzBdLmltZywgdGl0bGU6IGRldGFpbFswXS50aXRsZXMsIHBybzogZGV0YWlsWzBdLmNvbnRlbnQsIGxhYmVsOiBkZXRhaWxbMF0ubGFiZWwsIHllbGw6IGRldGFpbFswXS50aXRsZSwgcHJpY2U6IGRldGFpbFswXS5wcmljZSwgY29udGFudDogZGV0YWlsWzBdLmNvbW1lbnRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3VjY2VzczoocmVzOmFueSk9PntcclxuICAgICAgICAgICAgICBpZihyZXMuZGF0YS5jb2RlPT0xKXtcclxuICAgICAgICAgICAgICAgIHZhciB0aXRsZTpzdHJpbmc9XCLllYblk4Hmt7vliqDmiJDlip9cIlxyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmRhdGEuY29kZSA9PSAyKXsgXHJcbiAgICAgICAgICAgICAgICB2YXIgdGl0bGU6c3RyaW5nPVwi5bey5Yqg5YWl6LSt54mp5beuXCJcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIGljb246XCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTp0aXRsZSxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOjgwMFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICBpY29uOlwibm9uZVwiLFxyXG4gICAgICAgICAgICB0aXRsZTpcIuivt+eZu+W9lVwiLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjo4MDBcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufSlcclxuIl19