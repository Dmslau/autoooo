//Tue Aug 06 2024 14:43:33 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
window.__require = function t(e, o, n) {
  function i(s, a) {
    if (!o[s]) {
      if (!e[s]) {
        var c = s.split("/");
        c = c[c.length - 1];
        if (!e[c]) {
          var l = "function" == typeof __require && __require;
          if (!a && l) {
            return l(c, !0);
          }
          if (r) {
            return r(c, !0);
          }
          throw new Error("Cannot find module '" + s + "'");
        }
        s = c;
      }
      var u = o[s] = {
        exports: {}
      };
      e[s][0].call(u.exports, function (t) {
        return i(e[s][1][t] || t);
      }, u, u.exports, t, e, o, n);
    }
    return o[s].exports;
  }
  for (var r = "function" == typeof __require && __require, s = 0; s < n.length; s++) i(n[s]);
  return i;
}({
  AfunRiskSDKController: [function (t, e, o) {
    cc._RF.push(e, "ae221gJFuJHv4T8EWCrP/4X", "AfunRiskSDKController");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.AfunRiskSDKType = 0;
    var n = function () {
      function t() {
        this._sdk = null;
      }
      Object.defineProperty(t, "inst", {
        get: function () {
          this._inst || (this._inst = new t());
          return this._inst;
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.init = function () {
        if (!window.AfunRiskSDK) {
          return null;
        }
        this._sdk = window.AfunRiskSDK;
      };
      t.prototype.report = function (t, e, o) {
        0 === e && (e = "");
        0 === o && (o = "LIANLIANKAN");
        if (!this._sdk) {
          console.error("NO SDK AfunRiskSDK");
          return this.init();
        }
        console.log("AfunRiskSDK----------", t, e);
        this._sdk.call({
          scope: "risk",
          method: t,
          payload: {
            gameOperateName: o,
            gameTaskId: e
          }
        });
      };
      return t;
    }();
    o.default = n;
    (function (t) {
      t.enterGame = "enterGame";
      t.enterLevel = "enterLevel";
      t.completeLevel = "completeLevel";
      t.completeAll = "completeAll";
      t.showTask = "showTask";
      t.getAward = "getAward";
      t.getCoin = "getCoin";
    })(o.AfunRiskSDKType || (o.AfunRiskSDKType = {}));
    cc._RF.pop();
  }, {}],
  AlgorithmSystem: [function (t, e, o) {
    cc._RF.push(e, "f359drNi/JLwpwAnQwPlE0x", "AlgorithmSystem");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        if (null === e) {
          t.prototype = Object.create(e);
        } else {
          t.prototype = (o.prototype = e.prototype, new o());
        }
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      },
      s = this && this.__read || function (t, e) {
        var o = "function" == typeof Symbol && t[Symbol.iterator];
        if (!o) {
          return t;
        }
        var n,
          i,
          r = o.call(t),
          s = [];
        try {
          for (; (0 === e || e-- > 0) && !(n = r.next()).done;) s.push(n.value);
        } catch (a) {
          i = {
            error: a
          };
        } finally {
          try {
            if (n && !n.done && (o = r.return)) {
              o.call(r);
            }
          } finally {
            if (i) {
              throw i.error;
            }
          }
        }
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.AlgorithmSystem = 0;
    var a = t("../Common/Constant"),
      c = cc._decorator,
      l = c.ccclass,
      u = (c.property, function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        var o;
        i(e, t);
        o = e;
        e.canBeRemoved = function (t, e, o) {
          this.routes = [];
          this.routes.push(t);
          if (this.isSamePoint(t, e)) {
            return !1;
          }
          if (o[t.x][t.y] !== o[e.x][e.y]) {
            return !1;
          }
          if (this.isHorizon(t, e, o)) {
            this.routes.push(e);
            return !0;
          }
          if (this.isVertical(t, e, o)) {
            this.routes.push(e);
            return !0;
          }
          var n = s(this.isTurnOnce(t, e, o), 2),
            i = n[0],
            r = n[1];
          return i ? (this.routes.push(r), this.routes.push(e), !0) : !!this.isTurnTwice(t, e, o) && (this.routes.push(e), !0);
        };
        e.isHorizon = function (t, e, o) {
          if (t.y !== e.y) {
            return !1;
          }
          for (var n = Math.min(t.x, e.x), i = Math.max(t.x, e.x), r = n + 1; r < i; ++r) if (this.isBlocked(cc.v2(r, t.y), o)) {
            return !1;
          }
          return !0;
        };
        e.isVertical = function (t, e, o) {
          if (t.x !== e.x) {
            return !1;
          }
          for (var n = Math.min(t.y, e.y), i = Math.max(t.y, e.y), r = n + 1; r < i; ++r) if (this.isBlocked(cc.v2(t.x, r), o)) {
            return !1;
          }
          return !0;
        };
        e.isTurnOnce = function (t, e, o) {
          var n = cc.v2(t.x, e.y),
            i = cc.v2(e.x, t.y);
          return !this.isBlocked(n, o) && (this.isHorizon(n, e, o) && this.isVertical(n, t, o) || this.isVertical(n, e, o) && this.isHorizon(n, t, o)) ? [!0, n] : !this.isBlocked(i, o) && (this.isHorizon(i, e, o) && this.isVertical(i, t, o) || this.isVertical(i, e, o) && this.isHorizon(i, t, o)) ? [!0, i] : [!1, null];
        };
        e.isTurnTwice = function (t, e, o) {
          var n;
          if (t.y === e.y) {
            for (var i = o[0].length - 1; i >= 0; --i) if (n = cc.v2(t.x, i), !this.isBlocked(n, o)) {
              var r = s(this.isTurnOnce(n, e, o), 2),
                a = r[0],
                c = r[1];
              if (this.isVertical(n, t, o) && a) {
                this.routes.push(n);
                this.routes.push(c);
                return !0;
              }
            }
          }
          if (t.x === e.x) {
            for (var l = 0; l < o.length; ++l) if (n = cc.v2(l, t.y), !this.isBlocked(n, o)) {
              var u = s(this.isTurnOnce(n, e, o), 2);
              a = u[0];
              c = u[1];
              if (this.isHorizon(n, t, o) && a) {
                this.routes.push(n);
                this.routes.push(c);
                return !0;
              }
            }
          }
          for (var p = o.length - 1; p >= 0; --p) if (n = cc.v2(p, t.y), !this.isBlocked(n, o)) {
            var f = s(this.isTurnOnce(n, e, o), 2);
            a = f[0];
            c = f[1];
            if (this.isHorizon(n, t, o) && a) {
              this.routes.push(n);
              this.routes.push(c);
              return !0;
            }
          }
          for (i = o[0].length - 1; i >= 0; --i) if (n = cc.v2(t.x, i), !this.isBlocked(n, o)) {
            var h = s(this.isTurnOnce(n, e, o), 2);
            a = h[0];
            c = h[1];
            if (this.isVertical(n, t, o) && a) {
              this.routes.push(n);
              this.routes.push(c);
              return !0;
            }
          }
          return !1;
        };
        e.isBlocked = function (t, e) {
          var o = e[t.x][t.y];
          return 0 != o && o != a.LINK_GAME_EMPTY_ID;
        };
        e.isSamePoint = function (t, e) {
          return t.x === e.x && t.y === e.y;
        };
        e.createNodes = function () {};
        e.removeNodes = function () {};
        e.isVaildId = function (t) {
          return t != a.LINK_GAME_OBSTACLE_ID && t != a.LINK_GAME_EMPTY_ID;
        };
        e.isImpasse = function (t) {
          this._findCnt = 0;
          for (var e = t.length, o = t[0].length, n = 1; n < e - 1; ++n) for (var i = 1; i < o - 1; ++i) {
            var r = t[n][i];
            if (r && this.isVaildId(r) && !this._subCheckImpasse(n, i, e, o, t)) {
              return !1;
            }
          }
          return !0;
        };
        e._subCheckImpasse = function (t, e, n, i, r) {
          for (var s = t; s < n - 1; ++s) for (var a = 1; a < i - 1; ++a) {
            var c = r[s][a];
            if (!(t == s && e >= a) && c && this.isVaildId(c) && (this._findCnt++, o.canBeRemoved(new cc.Vec2(t, e), new cc.Vec2(s, a), r))) {
              return !1;
            }
          }
          return !0;
        };
        e.routes = [];
        e._findCnt = 0;
        return o = r([l], e);
      }(cc.Component));
    o.AlgorithmSystem = u;
    cc._RF.pop();
  }, {
    "../Common/Constant": "Constant"
  }],
  AntiAddictionController: [function (t, e, o) {
    cc._RF.push(e, "e3770hiNdhClYtXPVE6I/jw", "AntiAddictionController");
    var n = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      i = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.CroResType = o.Status = 0;
    var r = t("../Define/EventId"),
      s = t("../Define/UIDefs"),
      a = t("../Framework/Event/EventMgr"),
      c = t("../Framework/Net/HttpRequest"),
      l = t("../Framework/UI/UIFacade"),
      u = t("../Framework/UI/UIMgr"),
      p = t("./MtopMgr");
    (function (t) {
      t.ADULT = "Adult";
      t.juvenile = "juvenile";
    })(o.Status || (o.Status = {}));
    (function (t) {
      t[t.fail = 0] = "fail";
      t[t.suc = 1] = "suc";
      t[t.unkown = 2] = "unkown";
    })(o.CroResType || (o.CroResType = {}));
    var f = function () {
      function t() {
        this._isOpenAnti = !1;
      }
      Object.defineProperty(t, "inst", {
        get: function () {
          this._inst || (this._inst = new t());
          return this._inst;
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.getUserInfo = function () {
        return n(this, 0, 0, function () {
          var e;
          return i(this, function (o) {
            switch (o.label) {
              case 0:
                {
                  return c.HttpRequest.isWeb ? (a.EVENT.emit(r.EventId.ON_ANTI_ADDICTION_SUC), [2]) : [4, p.default.inst.authentication()];
                }
              case 1:
                {
                  e = o.sent();
                  console.log(e, "\u8eab\u4efd\u4fe1\u606f");
                  return e ? e.data.authentication || this._isOpenAnti ? (this._isOpenAnti && u.default.inst.close(s.UIType.AntiAddiction), e.data.adult ? (t.isAdult = !0, a.EVENT.emit(r.EventId.ON_ANTI_ADDICTION_SUC), [2]) : (u.default.inst.open(s.UIType.Unable), [2])) : (this._isOpenAnti = !0, u.default.inst.open(s.UIType.AntiAddiction), [2]) : (l.UIFacade.showToast("\u670d\u52a1\u5fd9\u788c \u8bf7\u91cd\u65b0\u8fdb\u5165\u6e38\u620f"), [2]);
                }
            }
          });
        });
      };
      t.prototype.cardCheck = function (t) {
        return /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(t);
      };
      t.isAdult = !1;
      return t;
    }();
    o.default = f;
    cc._RF.pop();
  }, {
    "../Define/EventId": "EventId",
    "../Define/UIDefs": "UIDefs",
    "../Framework/Event/EventMgr": "EventMgr",
    "../Framework/Net/HttpRequest": "HttpRequest",
    "../Framework/UI/UIFacade": "UIFacade",
    "../Framework/UI/UIMgr": "UIMgr",
    "./MtopMgr": "MtopMgr"
  }],
  AntiAddiction: [function (t, e, o) {
    cc._RF.push(e, "5c78dJZgHZKpZb6T5a9fLRG", "AntiAddiction");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      },
      s = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      a = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var c = t("../../../Controller/AntiAddictionController"),
      l = t("../../../Controller/LTrackerMgr"),
      u = t("../../../Controller/MtopMgr"),
      p = t("../../../Controller/WindVaneMgr"),
      f = t("../../../Framework/UI/UIFacade"),
      h = t("../../../Framework/UIBase"),
      d = cc._decorator,
      _ = d.ccclass,
      y = d.property,
      v = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.labName = null;
          e.labIdCrad = null;
          return e;
        }
        i(e, t);
        e.prototype.onLoad = function () {
          l.default.inst.expo("cx156051", {});
        };
        e.prototype.onCloseGame = function () {
          l.default.inst.click("cx156051.dx204659", {});
          p.default.inst.closeWindow();
          l.default.inst.logEvent(l.EventName.page_view, {
            sname: "NameExp",
            isnamed: 1
          });
        };
        e.prototype.onSubmit = function () {
          return s(this, 0, 0, function () {
            var t, e, o, n;
            return a(this, function (i) {
              switch (i.label) {
                case 0:
                  {
                    t = this.labIdCrad.string.trim();
                    e = this.labName.string.trim();
                    o = c.default.inst.cardCheck(t);
                    return e ? o ? (console.log(this.labName.string, this.labIdCrad.string), [4, u.default.inst.checkByCro(e, t)]) : (f.UIFacade.showToast("\u683c\u5f0f\u4e0d\u6b63\u786e"), l.default.inst.click("cx156051.dx204651", {
                      stype: 2
                    }), [2]) : (f.UIFacade.showToast("\u59d3\u540d\u4e0d\u80fd\u4e3a\u7a7a"), l.default.inst.click("cx156051.dx204651", {
                      stype: 2
                    }), [2]);
                  }
                case 1:
                  {
                    n = i.sent();
                    console.log(n, "croInfo");
                    return n ? (n.status == c.CroResType.suc ? (c.default.inst.getUserInfo(), l.default.inst.click("cx156051.dx204651", {
                      stype: 1
                    })) : (f.UIFacade.showToast("\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u8eab\u4efd\u4fe1\u606f"), l.default.inst.click("cx156051.dx204651", {
                      stype: 2
                    })), [2]) : (f.UIFacade.showToast("\u670d\u52a1\u5fd9\u788c \u8bf7\u91cd\u65b0\u8fdb\u5165\u6e38\u620f"), l.default.inst.click("cx156051.dx204651", {
                      stype: 2
                    }), [2]);
                  }
              }
            });
          });
        };
        r([y(cc.Label)], e.prototype, "labName", 0);
        r([y(cc.Label)], e.prototype, "labIdCrad", 0);
        return r([_], e);
      }(h.default);
    o.default = v;
    cc._RF.pop();
  }, {
    "../../../Controller/AntiAddictionController": "AntiAddictionController",
    "../../../Controller/LTrackerMgr": "LTrackerMgr",
    "../../../Controller/MtopMgr": "MtopMgr",
    "../../../Controller/WindVaneMgr": "WindVaneMgr",
    "../../../Framework/UI/UIFacade": "UIFacade",
    "../../../Framework/UIBase": "UIBase"
  }],
  ArchiveSystem: [function (t, e, o) {
    cc._RF.push(e, "f54edTeoHxLhKdvU7oI8WGF", "ArchiveSystem");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      });
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var r = t("../Common/Archive"),
      s = t("../Framework/Platform/Platform"),
      a = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        i(e, t);
        e.prototype.initialize = function () {
          var t = this;
          this._userID = s.Platform.getGameId();
          this._localData = r.default.createLocalData(this._userID);
          this.__saveLocalData();
          this.localData = new Proxy(this._localData, {
            get: function (t, e) {
              return t[e];
            },
            set: function (e, o, n) {
              e[o] = n;
              t.__saveLocalData();
              return !0;
            }
          });
        };
        e.prototype.switchMusic = function () {
          this.localData.music = !this.localData.music;
        };
        e.prototype.switchSound = function () {
          this.localData.sound = !this.localData.sound;
        };
        e.prototype.__saveLocalData = function () {
          r.default.saveLocalData(this._userID, this._localData);
        };
        return e;
      }(cc.Component);
    o.default = new a();
    cc._RF.pop();
  }, {
    "../Common/Archive": "Archive",
    "../Framework/Platform/Platform": "Platform"
  }],
  Archive: [function (t, e, o) {
    cc._RF.push(e, "92263jpZiJM2IvgvwLP0vMZ", "Archive");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = t("../Framework/Platform/Platform"),
      i = t("../Model/PlayerModel"),
      r = {
        music: !0,
        sound: !0
      },
      s = function () {
        function t() {}
        t.prototype.createLocalData = function (t) {
          var e = cc.sys.localStorage.getItem(t + "_localData");
          return e ? Object.assign(Object.assign({}, r), JSON.parse(e)) : r;
        };
        t.prototype.saveLocalData = function (t, e) {
          cc.sys.localStorage.setItem(t + "_localData", JSON.stringify(e));
        };
        t.prototype.saveLocalGameReport = function (t) {
          var e = n.Platform.getGameId();
          cc.sys.localStorage.setItem(e + "_report", JSON.stringify(t));
        };
        t.prototype.cleanLoaclGameReport = function () {
          var t = n.Platform.getGameId();
          cc.sys.localStorage.removeItem(t + "_report");
        };
        t.prototype.getLocalGameReport = function () {
          var t = n.Platform.getGameId() + "_report",
            e = cc.sys.localStorage.getItem(t),
            o = JSON.parse(e);
          if (this.checkReportValid(o)) {
            return o;
          }
        };
        t.prototype.checkReportValid = function (t) {
          return !!t && (i.default.inst.getGameCode(), !0);
        };
        return t;
      }();
    o.default = new s();
    cc._RF.pop();
  }, {
    "../Framework/Platform/Platform": "Platform",
    "../Model/PlayerModel": "PlayerModel"
  }],
  AudioConfig: [function (t, e, o) {
    cc._RF.push(e, "2529dRNEIBFz7vH6WZdtNPk", "AudioConfig");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.AUDIOS_ENUM = o.AUDIOS_PATH = 0;
    o.AUDIOS_PATH = {
      block_click: "block_click",
      common_click: "common_click",
      bg_music: "bg_music",
      fail: "fail",
      flash: "flash",
      get_reward: "get_reward"
    };
    o.AUDIOS_ENUM = cc.Enum({
      common_click: 0,
      block_click: 1,
      bg_music: 2,
      fail: 3,
      flash: 4,
      get_reward: 5
    });
    cc._RF.pop();
  }, {}],
  AudioSystem: [function (t, e, o) {
    cc._RF.push(e, "6844blYuNBN8qXoQDMwYDkg", "AudioSystem");
    var n = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      i = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      },
      r = this && this.__values || function (t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          o = e && t[e],
          n = 0;
        if (o) {
          return o.call(t);
        }
        if (t && "number" == typeof t.length) {
          return {
            next: function () {
              t && n >= t.length && (t = 0);
              return {
                value: t && t[n++],
                done: !t
              };
            }
          };
        }
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../Common/AudioConfig"),
      a = t("./ArchiveSystem"),
      c = function () {
        function t() {
          this.audios = {};
          this.audiosID = {};
          this._musicID = null;
        }
        t.prototype.initialize = function () {
          return n(this, 0, Promise, function () {
            var t, e, o, n, a, c, l, u, p;
            return i(this, function (f) {
              switch (f.label) {
                case 0:
                  {
                    return [4, new Promise(function (t, e) {
                      cc.assetManager.loadBundle("bundle_audios", function (o, n) {
                        o ? e(o) : t(n);
                      });
                    })];
                  }
                case 1:
                  {
                    t = f.sent();
                    e = function (e) {
                      var n, r;
                      return i(this, function (i) {
                        switch (i.label) {
                          case 0:
                            {
                              n = o.audios;
                              r = e;
                              return [4, new Promise(function (o, n) {
                                t.load(e, cc.AudioClip, function (t, e) {
                                  t ? n(t) : o(e);
                                });
                              })];
                            }
                          case 1:
                            {
                              n[r] = i.sent();
                              return [2];
                            }
                        }
                      });
                    };
                    o = this;
                    f.label = 2;
                  }
                case 2:
                  {
                    f.trys.push([2, 7, 8, 9]);
                    n = r(Object.values(s.AUDIOS_PATH));
                    a = n.next();
                    f.label = 3;
                  }
                case 3:
                  {
                    return a.done ? [3, 6] : (c = a.value, [5, e(c)]);
                  }
                case 4:
                  {
                    f.sent();
                    f.label = 5;
                  }
                case 5:
                  {
                    a = n.next();
                    return [3, 3];
                  }
                case 6:
                  {
                    return [3, 9];
                  }
                case 7:
                  {
                    l = f.sent();
                    u = {
                      error: l
                    };
                    return [3, 9];
                  }
                case 8:
                  {
                    try {
                      if (a && !a.done && (p = n.return)) {
                        p.call(n);
                      }
                    } finally {
                      if (u) {
                        throw u.error;
                      }
                    }
                    return [7];
                  }
                case 9:
                  {
                    this.playMusic();
                    return [2];
                  }
              }
            });
          });
        };
        t.prototype.play = function (t, e, o) {
          0 === e && (e = !1);
          0 === o && (o = 1);
          if (a.default.localData.sound && t in this.audios) {
            var n = cc.audioEngine.play(this.audios[t], e, o);
            if (e) {
              this.audiosID[t] = n;
            }
          }
        };
        t.prototype.stop = function (t) {
          if (t in this.audiosID) {
            cc.audioEngine.stop(this.audiosID[t]);
            delete this.audiosID[t];
          }
        };
        t.prototype.playMusic = function () {
          if (null === this._musicID && a.default.localData.music && this.audios.hasOwnProperty(s.AUDIOS_PATH.bg_music)) {
            this.checkPlay();
            this._musicID = cc.audioEngine.playMusic(this.audios[s.AUDIOS_PATH.bg_music], !0);
          }
        };
        t.prototype.stopMusic = function () {
          cc.audioEngine.stopMusic();
          this._musicID = null;
        };
        t.prototype.checkPlay = function () {
          if (cc.sys.__audioSupport && cc.sys.__audioSupport.WEB_AUDIO) {
            cc.sys.__audioSupport.context ? "suspended" == cc.sys.__audioSupport.context.state && cc.sys.__audioSupport.context.resume() : cc.sys.__audioSupport.context = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext)();
          }
        };
        return t;
      }();
    o.default = new c();
    cc._RF.pop();
  }, {
    "../Common/AudioConfig": "AudioConfig",
    "./ArchiveSystem": "ArchiveSystem"
  }],
  BaseInfo: [function (t, e, o) {
    cc._RF.push(e, "5778cqIUwhK468XZKS4fhxj", "BaseInfo");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = function () {
      function t() {}
      t.ENTRY_TASK_ID = "9082001";
      t.BIZ_SCENE = "LIANLIANKAN";
      t.ACTID = "20221109110333363185784428";
      t.COLLECTIONID = ["20221109110333382980175806"];
      t.ENV = "Test";
      t.TASK_PANNEL_ID = "532";
      t.ENTRY_TASK_KEY = "gameSource";
      t.ENTRY_TASK_VALUE = "extVisit";
      t.SHOP_URL = "https://tb.ele.me/wow/alsc/mod/1ac2d023148529a61680d995";
      t.RULE_URL = "https://tb.ele.me/wow/alsc/mod/55a9bb35c50c86cbc2beb857";
      t.DETAIN_TASK = "T001";
      t.ADULT_SCENE = "ELEME_ELMYLY";
      t.GAME_NAME = "linkgame";
      t.TASK_GAME_PROP = "682";
      t.RANK_COPY_ID = "20230322110239030345029714";
      t.RANK_ACT_ID = "20230322104235680173870646";
      return t;
    }();
    o.default = n;
    cc._RF.pop();
  }, {}],
  Bootstrap: [function (t, e, o) {
    cc._RF.push(e, "8cd6alGYuhCLKFZeKRcKhd1", "Bootstrap");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__assign || function () {
        return (r = Object.assign || function (t) {
          for (var e, o = 1, n = arguments.length; o < n; o++) for (var i in e = arguments[o]) if (Object.prototype.hasOwnProperty.call(e, i)) {
            t[i] = e[i];
          }
          return t;
        }).apply(this, arguments);
      },
      s = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      },
      a = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      c = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var l = t("../../Controller/AntiAddictionController"),
      u = t("../../Controller/ExLogCtr"),
      p = t("../../Controller/LTrackerMgr"),
      f = t("../../Controller/PlatMgr"),
      h = t("../../Controller/TableMgr"),
      d = t("../../Define/Define"),
      _ = t("../../Define/EventId"),
      y = t("../../Framework/Event/EventMgr"),
      v = t("../../Framework/Platform/Platform"),
      m = t("../../Framework/Res/ResUtil"),
      g = t("../../Framework/Scene/SceneBase"),
      b = t("../../Framework/Scene/SceneMgr"),
      I = t("../../Framework/Utils/Utils"),
      w = t("../../Model/PlayerModel"),
      T = t("../../System/ArchiveSystem"),
      E = cc._decorator,
      S = E.ccclass,
      P = E.property,
      O = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.uiRoot = null;
          e._isLogin = !1;
          e._isAdult = !1;
          return e;
        }
        i(e, t);
        e.prototype.onLoad = function () {
          if (cc.sys.isBrowser) {
            window.onerror = function () {
              for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
              var o = r({}, t);
              u.default.inst.logJsError(o[4], !0);
            };
          }
        };
        e.prototype.onEnable = function () {
          y.EVENT.on(_.EventId.ON_LOGIN_RET, this.onLoginRet, this);
          y.EVENT.on(_.EventId.ON_ANTI_ADDICTION_SUC, this.onAntiAddiction, this);
        };
        e.prototype.onDisable = function () {
          y.EVENT.off(_.EventId.ON_LOGIN_RET, this.onLoginRet, this);
          y.EVENT.off(_.EventId.ON_ANTI_ADDICTION_SUC, this.onAntiAddiction, this);
        };
        e.prototype.start = function () {
          return a(this, 0, 0, function () {
            return c(this, function (t) {
              switch (t.label) {
                case 0:
                  {
                    window.setExitBtn && window.setExitBtn();
                    T.default.initialize();
                    return [4, f.default.inst.init()];
                  }
                case 1:
                  {
                    t.sent();
                    l.default.inst.getUserInfo();
                    return [4, this.initGame()];
                  }
                case 2:
                  {
                    t.sent();
                    return [4, this.platformInit()];
                  }
                case 3:
                  {
                    t.sent();
                    return [2];
                  }
              }
            });
          });
        };
        e.prototype.initFramework = function () {
          return a(this, 0, 0, function () {
            var t;
            return c(this, function (e) {
              switch (e.label) {
                case 0:
                  {
                    t = m.ResUtil.instantiate(this.uiRoot);
                    console.log("initFrameWork ...................", t);
                    cc.director.getScene().addChild(t);
                    cc.game.addPersistRootNode(t);
                    return [4, h.TABLE.loadTableRes()];
                  }
                case 1:
                  {
                    e.sent();
                    return [2];
                  }
              }
            });
          });
        };
        e.prototype.initGame = function () {
          return a(this, 0, 0, function () {
            return c(this, function (t) {
              switch (t.label) {
                case 0:
                  {
                    return [4, this.initFramework()];
                  }
                case 1:
                  {
                    t.sent();
                    T.default.initialize();
                    return [2];
                  }
              }
            });
          });
        };
        e.prototype.__dailyCheck = function () {};
        e.prototype.__debugInit = function () {
          switch (cc.sys.platform) {
            case cc.sys.WECHAT_GAME:
              {}
            case cc.sys.ANDROID:
              {}
          }
        };
        e.prototype.platformInit = function () {
          return a(this, 0, 0, function () {
            var t, e;
            return c(this, function (o) {
              switch (o.label) {
                case 0:
                  {
                    t = I.default.getUrlParams("gameId");
                    e = I.default.getUrlParams("inviterId");
                    return [4, v.Platform.init(t, e)];
                  }
                case 1:
                  {
                    o.sent();
                    return [2];
                  }
              }
            });
          });
        };
        e.prototype.onLoginRet = function (t) {
          return a(this, 0, 0, function () {
            return c(this, function () {
              w.default.inst.initData(t);
              this._isLogin = !0;
              this._goMain();
              return [2];
            });
          });
        };
        e.prototype.onAntiAddiction = function () {
          this._isAdult = !0;
          this._goMain();
        };
        e.prototype._goMain = function () {
          console.warn("789///");
          if (this._isLogin && this._isAdult) {
            u.default.inst.logCustomPerformance();
            var t = w.default.inst._isNew ? "regist" : "all",
              e = !!I.default.getUrlParams("inviterId");
            p.default.inst.logEvent(p.EventName.page_view, {
              sname: "LoginExp",
              logintype: t,
              sinvite: e,
              isnamed: l.default.isAdult ? 0 : 1
            });
            b.SCENE.loadScene(d.SceneType.Main);
          }
        };
        s([P(cc.Prefab)], e.prototype, "uiRoot", 0);
        return s([S], e);
      }(g.default);
    o.default = O;
    cc._RF.pop();
  }, {
    "../../Controller/AntiAddictionController": "AntiAddictionController",
    "../../Controller/ExLogCtr": "ExLogCtr",
    "../../Controller/LTrackerMgr": "LTrackerMgr",
    "../../Controller/PlatMgr": "PlatMgr",
    "../../Controller/TableMgr": "TableMgr",
    "../../Define/Define": "Define",
    "../../Define/EventId": "EventId",
    "../../Framework/Event/EventMgr": "EventMgr",
    "../../Framework/Platform/Platform": "Platform",
    "../../Framework/Res/ResUtil": "ResUtil",
    "../../Framework/Scene/SceneBase": "SceneBase",
    "../../Framework/Scene/SceneMgr": "SceneMgr",
    "../../Framework/Utils/Utils": "Utils",
    "../../Model/PlayerModel": "PlayerModel",
    "../../System/ArchiveSystem": "ArchiveSystem"
  }],
  ButtonAudio: [function (t, e, o) {
    cc._RF.push(e, "f276cH0XyxLEbwHx5IVtttF", "ButtonAudio");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../Common/AudioConfig"),
      a = t("./AudioSystem"),
      c = cc._decorator,
      l = c.ccclass,
      u = c.property,
      p = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.clickAudioType = s.AUDIOS_ENUM.common_click;
          return e;
        }
        i(e, t);
        e.prototype.onLoad = function () {
          var t = this;
          if (this.node.getComponent(cc.Button)) {
            this.node.on(cc.Node.EventType.TOUCH_END, function () {
              a.default.play(s.AUDIOS_PATH[s.AUDIOS_ENUM[t.clickAudioType]]);
            });
          }
        };
        r([u({
          type: s.AUDIOS_ENUM
        })], e.prototype, "clickAudioType", 0);
        return r([l], e);
      }(cc.Component);
    o.default = p;
    cc._RF.pop();
  }, {
    "../Common/AudioConfig": "AudioConfig",
    "./AudioSystem": "AudioSystem"
  }],
  ButtonClickLimiter: [function (t, e, o) {
    cc._RF.push(e, "eb6fcOMRKVIRq2ZVI1TloAM", "ButtonClickLimiter");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = cc._decorator,
      a = s.ccclass,
      c = s.property,
      l = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.clickCD = .5;
          return e;
        }
        i(e, t);
        e.prototype.onLoad = function () {
          var t = this,
            e = this.getComponent(cc.Button);
          if (e) {
            this.clickEvents = e.clickEvents;
            this.node.on("click", function () {
              e.clickEvents = [];
              t.scheduleOnce(function () {
                e.clickEvents = t.clickEvents;
              }, t.clickCD);
            }, this);
          }
        };
        r([c], e.prototype, "clickCD", 0);
        return r([a], e);
      }(cc.Component);
    o.default = l;
    cc._RF.pop();
  }, {}],
  CommonDialog: [function (t, e, o) {
    cc._RF.push(e, "641a8EEFyhOWaUm/7UZkTLk", "CommonDialog");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../../../Framework/UIBase"),
      a = cc._decorator,
      c = a.ccclass,
      l = a.property,
      u = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.lblTittle = null;
          e.lblDes = null;
          e.lblCancelText = null;
          e.lblAffirmText = null;
          e._dialogData = null;
          return e;
        }
        i(e, t);
        e.prototype.start = function () {
          var t = this._para;
          this._dialogData = t;
          this.lblTittle.string = t.title;
          this.lblDes.string = t.describe;
          this.lblCancelText.string = t.cancelText || "\u53d6\u6d88";
          this.lblAffirmText.string = t.affirmText || "\u786e\u8ba4";
        };
        e.prototype.onClickCancelBtn = function () {
          this._dialogData && this._dialogData.cancelHandle && this._dialogData.cancelHandle();
          this.close();
        };
        e.prototype.onClickAffirmBtn = function () {
          this._dialogData && this._dialogData.affirmHandle && this._dialogData.affirmHandle();
          t.prototype.close.call(this);
        };
        e.prototype.onClickCloseBtn = function () {
          this._dialogData && this._dialogData.closeToCanel && this._dialogData.cancelHandle && this._dialogData.cancelHandle();
          this.close();
        };
        r([l(cc.Label)], e.prototype, "lblTittle", 0);
        r([l(cc.Label)], e.prototype, "lblDes", 0);
        r([l(cc.Label)], e.prototype, "lblCancelText", 0);
        r([l(cc.Label)], e.prototype, "lblAffirmText", 0);
        return r([c], e);
      }(s.default);
    o.default = u;
    cc._RF.pop();
  }, {
    "../../../Framework/UIBase": "UIBase"
  }],
  CommonToast: [function (t, e, o) {
    cc._RF.push(e, "c2ba2y6ZDtG7ZP9ddIgV9aw", "CommonToast");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../../Controller/ExLogCtr"),
      a = cc._decorator,
      c = a.ccclass,
      l = a.property,
      u = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.item = null;
          e._isOpening = !1;
          e._runTime = 0;
          e._tipList = [];
          e.openTime = 0;
          e.minOpenTime = 3;
          e.maxOpenTime = 17;
          e.isOpeningCount = !1;
          e.showingNext = !1;
          e.nowItem = null;
          e.lastItem = null;
          e.label = null;
          return e;
        }
        i(e, t);
        Object.defineProperty(e.prototype, "isOpening", {
          get: function () {
            return this._isOpening;
          },
          enumerable: !1,
          configurable: !0
        });
        e.prototype.showTips = function (t) {
          try {
            this.freshWidth(t);
            this._tipList.push(t);
            if (1 == this._tipList.length && 0 == this._isOpening) {
              this.showingNext = !0;
              this.item.width = 40 * t.length + 20;
              this._showNext();
            } else {
              if (this._tipList.length > 2) {
                for (var e = {}, o = 0; o < this._tipList.length; o++) if (e[this._tipList[o]] || this.label && this._tipList[o] == this.label.string) {
                  this._tipList.splice(o, 1);
                  if (this._tipList.length <= 2) {
                    break;
                  }
                  o--;
                } else {
                  e[this._tipList[o]] = 1;
                }
              }
              if (this._tipList.length > 0 && 0 == this._isOpening && 0 == this.isOpeningCount && 0 == this.showingNext) {
                this.showingNext = !0;
                this._showNext();
              }
            }
          } catch (n) {
            this.node && (this.node.active = !1);
            cc.log("ShowTips", n);
            s.default.inst.logJsError(n);
          }
        };
        e.prototype.freshWidth = function (t) {
          this.item.width = 40 * t.length + 20;
        };
        e.prototype._showNext = function () {
          this.nowItem ? (cc.log("tip\u5b58\u5728"), this.showingNext = !1) : (this.nowItem = cc.instantiate(this.item), this.nowItem.parent = this.node, this.nowItem.active = !0, this._showOneTip(this._tipList[0]) && (this._tipList.shift(), this.openTime = 0), this.showingNext = !1);
        };
        e.prototype._showOneTip = function (t) {
          cc.log("ShowOneTip");
          if (this._isOpening) {
            cc.log("\u4e0d\u80fd\u540c\u65f6\u6253\u5f00\u591a\u4e2a\u63d0\u793a");
            return !1;
          }
          if (!this.nowItem) {
            cc.log("\u5f53\u524dtip\u5df2\u9500\u6bc1");
            return !1;
          }
          this.isOpeningCount = !0;
          this._isOpening = !0;
          var e = this.nowItem.getChildByName("Label");
          if (e) {
            var o = e.getComponent(cc.Label);
            o ? (this.label = o, o.string = t) : cc.log("tip   \u627e\u4e0d\u5230label");
          } else {
            cc.log("tip   \u627e\u4e0d\u5230 node   label");
          }
          this.nowItem.opacity = 0;
          this.nowItem.runAction(cc.spawn(cc.moveBy(.15, cc.v2(0, 60)), cc.fadeIn(.2)));
          return !0;
        };
        e.prototype._removeTips = function () {
          this.lastItem && (this.lastItem.stopAllActions(), this.lastItem.removeFromParent());
          this.lastItem = this.nowItem;
          this.nowItem = null;
          this.lastItem && (this._tipList.length > 0 ? this.lastItem.runAction(cc.sequence(cc.spawn(cc.moveBy(.25, cc.v2(0, 80)), cc.sequence(cc.delayTime(.1), cc.fadeOut(.15).easing(cc.easeQuadraticActionIn()))), cc.removeSelf(!0))) : this.lastItem.runAction(cc.sequence(cc.spawn(cc.moveBy(.25, cc.v2(0, 80)), cc.fadeOut(.25)), cc.removeSelf(!0))));
          this._isOpening = !1;
          this._tipList.length > 0 && (this.showingNext = !0, this._showNext());
        };
        e.prototype.update = function (t) {
          this._runTime += t;
          if (!(this._runTime < .1)) {
            this._runTime = 0;
            try {
              if (this._isOpening && this.isOpeningCount) {
                this.openTime++;
                if (this.openTime > this.maxOpenTime) {
                  this.isOpeningCount = !1;
                  return this._removeTips();
                }
                if (this._tipList.length > 0 && this.openTime > this.minOpenTime) {
                  this.isOpeningCount = !1;
                  return this._removeTips();
                }
              }
            } catch (e) {
              this.node && (this.node.active = !1);
              cc.log("ShowTips", e);
              s.default.inst.logJsError(e);
            }
          }
        };
        r([l(cc.Node)], e.prototype, "item", 0);
        return r([c], e);
      }(cc.Component);
    o.default = u;
    cc._RF.pop();
  }, {
    "../../Controller/ExLogCtr": "ExLogCtr"
  }],
  ComponetBase: [function (t, e, o) {
    cc._RF.push(e, "e96cebPc8BMbrFONsvMjb/z", "ComponetBase");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = cc._decorator,
      a = s.ccclass,
      c = (s.property, function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        i(e, t);
        e.prototype.isLive = function () {
          return !!(this && this.node && this.node.isValid && this.isValid);
        };
        e.prototype.getName = function () {
          return this.isLive() ? this.name : "destroy";
        };
        return r([a], e);
      }(cc.Component));
    o.default = c;
    cc._RF.pop();
  }, {}],
  ConfirmView: [function (t, e, o) {
    cc._RF.push(e, "4bd0cWxOm5HY4Z53vlUCbph", "ConfirmView");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../UIBase"),
      a = t("../Event/EventMgr"),
      c = t("../../Define/EventId"),
      l = cc._decorator,
      u = l.ccclass,
      p = l.property,
      f = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.lblContent = null;
          e.confirmTxt = null;
          e.cancelTxt = null;
          return e;
        }
        i(e, t);
        e.prototype.start = function () {
          this.renderView(this._para.content, this._para.confirmBtnTxt, this._para.cancelBtnTxt);
        };
        e.prototype.renderView = function (t) {
          this.lblContent.string = t;
        };
        e.prototype.onBtnCloseClick = function () {
          this.close();
          a.default.inst.emit(c.EventId.EVENT_CONFIRM, !1);
        };
        e.prototype.onClickButton1 = function () {
          this.close();
          a.default.inst.emit(c.EventId.EVENT_CONFIRM, !1);
        };
        e.prototype.onClickButton2 = function () {
          this.close();
          a.default.inst.emit(c.EventId.EVENT_CONFIRM, !0);
        };
        r([p(cc.Label)], e.prototype, "lblContent", 0);
        r([p(cc.Label)], e.prototype, "confirmTxt", 0);
        r([p(cc.Label)], e.prototype, "cancelTxt", 0);
        return r([u], e);
      }(s.default);
    o.default = f;
    cc._RF.pop();
  }, {
    "../../Define/EventId": "EventId",
    "../Event/EventMgr": "EventMgr",
    "../UIBase": "UIBase"
  }],
  Constant: [function (t, e, o) {
    cc._RF.push(e, "b951bSvkUpP276XkUYAFM33", "Constant");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.FailType = o.GAME_ITEM_STATE = o.PROP_ID = o.SCENES_NAME = o.GAME_TIPS_SHOW_TIME = o.LINK_GAME_COLMN = o.LINK_GAME_ROW = o.LINK_GAME_EMPTY_ID = o.LINK_GAME_OBSTACLE_ID = o.LINK_GAME_PIC_DROP_COUNT = o.LINK_GAME_PIC_DROP_CD = o.LINK_GAME_PIC_KIND_COUNT = o.LINK_GAME_PIC_TOTAL_COUNT = 0;
    o.LINK_GAME_PIC_TOTAL_COUNT = 100;
    o.LINK_GAME_PIC_KIND_COUNT = 12;
    o.LINK_GAME_PIC_DROP_CD = 10;
    o.LINK_GAME_PIC_DROP_COUNT = 20;
    o.LINK_GAME_OBSTACLE_ID = 999;
    o.LINK_GAME_EMPTY_ID = 9999;
    o.LINK_GAME_ROW = 6;
    o.LINK_GAME_COLMN = 8;
    o.GAME_TIPS_SHOW_TIME = 1;
    o.SCENES_NAME = {
      MainScen: "Scenes/MainScene",
      GameScene: "Scenes/GameScene"
    };
    (function (t) {
      t.Hint = "D003";
      t.RemoveObstacle = "D004";
    })(o.PROP_ID || (o.PROP_ID = {}));
    (function (t) {
      t[t.UnGet = 0] = "UnGet";
      t[t.UnUse = 1] = "UnUse";
      t[t.Used = 2] = "Used";
    })(o.GAME_ITEM_STATE || (o.GAME_ITEM_STATE = {}));
    (function (t) {
      t[t.Impasse = 0] = "Impasse";
      t[t.Time = 1] = "Time";
    })(o.FailType || (o.FailType = {}));
    cc._RF.pop();
  }, {}],
  Crypto: [function (t, e, o) {
    cc._RF.push(e, "a93691M77pGN4PqVYeQWT7m", "Crypto");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = t("../Model/PlayerModel"),
      i = function () {
        function t() {
          this._sdk = null;
        }
        Object.defineProperty(t, "inst", {
          get: function () {
            this._inst || (this._inst = new t());
            return this._inst;
          },
          enumerable: !1,
          configurable: !0
        });
        t.prototype.init = function () {
          this._sdk = window.CryptoJS;
        };
        t.prototype.getSign = function (t, e) {
          var o = "Game[" + n.default.inst.getOpenId() + "]-" + n.default.inst.getToken() + "|" + t + e,
            i = this.encryptWithHMACMD5(o);
          console.log("res: ", i);
          return i;
        };
        t.prototype.encryptWithHMACMD5 = function (t) {
          console.log("encryptWithHMACMD5------------------\x3e", t);
          return this._sdk.MD5(t).toString();
        };
        return t;
      }();
    o.default = i;
    cc._RF.pop();
  }, {
    "../Model/PlayerModel": "PlayerModel"
  }],
  Define: [function (t, e, o) {
    cc._RF.push(e, "9d4e4ZPBHxBDr1UOayG7XXC", "Define");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.SceneType = 0;
    (function (t) {
      t[t.$Start = 0] = "$Start";
      t[t.NONE = 1] = "NONE";
      t[t.Bootstrap = 2] = "Bootstrap";
      t[t.Main = 3] = "Main";
      t[t.Game = 4] = "Game";
      t[t.$End = 5] = "$End";
    })(o.SceneType || (o.SceneType = {}));
    cc._RF.pop();
  }, {}],
  Detain: [function (t, e, o) {
    cc._RF.push(e, "9346c+dApNMrYY6O9Supgzc", "Detain");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      },
      s = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      a = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var c = t("../../../Controller/AfunRiskSDKController"),
      l = t("../../../Controller/LTrackerMgr"),
      u = t("../../../Controller/ShareMgr"),
      p = t("../../../Controller/TableMgr"),
      f = t("../../../Define/UIDefs"),
      h = t("../../../Framework/Tools/BaseInfo"),
      d = t("../../../Framework/UI/UIFacade"),
      _ = t("../../../Framework/UI/UIMgr"),
      y = t("../../../Framework/UIBase"),
      v = t("../../../Network/Net"),
      m = cc._decorator,
      g = m.ccclass,
      b = m.property,
      I = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.labAwardNum = null;
          e.sprAward = null;
          e.labTaskDesc = null;
          return e;
        }
        i(e, t);
        e.prototype.onLoad = function () {
          var t = p.TABLE.getTaskInfo(h.default.DETAIN_TASK).asTaskReward[0].split(",");
          this.labAwardNum.string = "X" + t[1];
          l.default.inst.expo("cx155915", {});
        };
        e.prototype.onClickShare = function () {
          return s(this, 0, 0, function () {
            var t = this;
            return a(this, function () {
              u.default.inst.share(u.ShareContent.TONGYONG, function () {
                return s(t, 0, 0, function () {
                  var t, e;
                  return a(this, function (o) {
                    switch (o.label) {
                      case 0:
                        {
                          l.default.inst.expo("cx156035", {
                            stype: 1,
                            spage: 1
                          });
                          c.default.inst.report(c.AfunRiskSDKType.getCoin);
                          return [4, v.Net.updateTask(h.default.DETAIN_TASK)];
                        }
                      case 1:
                        {
                          t = o.sent();
                          (null === (null == t ? e = 0 : e = t.data) || 0 === e ? 0 : e.rewardItems.length) > 0 ? _.default.inst.open(f.UIType.GetItemLayer, t.data.rewardItems) : d.UIFacade.showToast("\u4e50\u56ed\u5e01\u53d1\u653e\u5931\u8d25\uff0c\u8bf7\u8054\u7cfb\u5ba2\u670d\u5904\u7406");
                          this.close();
                          return [2];
                        }
                    }
                  });
                });
              }, function () {
                d.UIFacade.showToast("\u5206\u4eab\u5931\u8d25");
                l.default.inst.expo("cx156035", {
                  stype: 2,
                  spage: 1
                });
              });
              l.default.inst.click("cx155915.dx204419", {});
              return [2];
            });
          });
        };
        e.prototype.onClickClose = function () {
          l.default.inst.click("cx155915.dx204427", {});
          this.close();
        };
        e.prototype.onDestroy = function () {
          u.default.inst.clear();
        };
        r([b(cc.Label)], e.prototype, "labAwardNum", 0);
        r([b(cc.Sprite)], e.prototype, "sprAward", 0);
        r([b(cc.Label)], e.prototype, "labTaskDesc", 0);
        return r([g], e);
      }(y.default);
    o.default = I;
    cc._RF.pop();
  }, {
    "../../../Controller/AfunRiskSDKController": "AfunRiskSDKController",
    "../../../Controller/LTrackerMgr": "LTrackerMgr",
    "../../../Controller/ShareMgr": "ShareMgr",
    "../../../Controller/TableMgr": "TableMgr",
    "../../../Define/UIDefs": "UIDefs",
    "../../../Framework/Tools/BaseInfo": "BaseInfo",
    "../../../Framework/UI/UIFacade": "UIFacade",
    "../../../Framework/UI/UIMgr": "UIMgr",
    "../../../Framework/UIBase": "UIBase",
    "../../../Network/Net": "Net"
  }],
  DoubleAwardController: [function (t, e, o) {
    cc._RF.push(e, "3b98c+eJ8dEFYsZUjUOQrUJ", "DoubleAwardController");
    var n = this && this.__assign || function () {
        return (n = Object.assign || function (t) {
          for (var e, o = 1, n = arguments.length; o < n; o++) for (var i in e = arguments[o]) if (Object.prototype.hasOwnProperty.call(e, i)) {
            t[i] = e[i];
          }
          return t;
        }).apply(this, arguments);
      },
      i = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      r = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../Define/EventId"),
      a = t("../Framework/Event/EventMgr"),
      c = t("../Model/PlayerModel"),
      l = t("../Model/TaskModel"),
      u = t("./TaskController"),
      p = t("./TurnTaskController"),
      f = t("./WindVaneMgr"),
      h = function () {
        function t() {
          this._sucCallback = null;
          this._failCallback = null;
          this._taskID = null;
          this._taskInfo = null;
          this._isDoing = !1;
          this._extInfo = null;
        }
        Object.defineProperty(t, "inst", {
          get: function () {
            this._inst || (this._inst = new t());
            return this._inst;
          },
          enumerable: !1,
          configurable: !0
        });
        t.prototype.init = function () {
          a.EVENT.on(s.EventId.ON_SHOW, this._onShow, this);
        };
        t.prototype.getNewAction = function (t, e, o, i) {
          0 === e && (e = null);
          0 === o && (o = null);
          0 === i && (i = {});
          p.default.inst.changeIdx();
          this._sucCallback = null;
          this._failCallback = null;
          this._taskID = t;
          this._sucCallback = e;
          this._failCallback = o;
          this._extInfo = n({
            type: "GameProp",
            token: c.default.inst.getToken(),
            sceneId: t.sID,
            gameCode: c.default.inst.getGameCode()
          }, i);
          this._toFinishTask();
        };
        t.prototype._toFinishTask = function (t) {
          var e, o, n, s, a, c, p, h;
          0 === t && (t = !1);
          return i(this, 0, 0, function () {
            var i, d, _, y, v;
            return r(this, function (r) {
              switch (r.label) {
                case 0:
                  {
                    r.trys.push([0, 6,, 7]);
                    return [4, u.default.inst.queryTaskItem(this._taskID.sMissionCollectionID, this._taskID.sMissionID)];
                  }
                case 1:
                  {
                    (i = r.sent()).status = u.default.inst.changeTaskStatus(i);
                    this._taskInfo = i;
                    console.log("\u5224\u5b9a\u4efb\u52a1\u9886\u53d6\u72b6\u6001", i.receiveType, l.MissionReceiveType.RECEIVE, " &&", i.receiveStatus, l.ReceiveStatus.TORECEIVE);
                    return i.receiveType != l.MissionReceiveType.RECEIVE || i.receiveStatus != l.ReceiveStatus.TORECEIVE ? [3, 3] : [4, u.default.inst.getTask(this._taskID.sMissionCollectionID, this._taskID.sMissionID)];
                  }
                case 2:
                  {
                    r.sent();
                    this._taskInfo.receiveStatus = l.ReceiveStatus.HAVERECEIVED;
                    r.label = 3;
                  }
                case 3:
                  {
                    (null === (e = i.stage) || 0 === e ? 0 : e.count) ? null === (o = i.stage) || 0 === o ? d = 0 : d = o.count : d = 1;
                    null === (n = i.missionStageDTOS[d - 1]) || 0 === n ? _ = 0 : _ = n.rewardStatus;
                    console.log("\u5224\u5b9a\u4efb\u52a1\u5956\u52b1\u72b6\u6001", i.status, l.MissionStatusType.FINISH, "\u9886\u5956\u72b6\u6001", _);
                    return i.status != l.MissionStatusType.FINISH || _ == l.TaskRewardStatus.SUCCESS ? [3, 5] : [4, u.default.inst.getAward(i, this._extInfo)];
                  }
                case 4:
                  {
                    y = r.sent();
                    console.log(y.data, "\u9886\u5956\u4fe1\u606f");
                    v = {};
                    y.data.rlist.forEach(function (t) {
                      var e;
                      t.type && t.value && (t.type, Number(t.value));
                      (null === (null == t ? e = 0 : e = t.ext) || 0 === e ? 0 : e.rewardDesc) && (v = JSON.parse(t.ext.rewardDesc));
                    });
                    this._sucCallback && this._sucCallback(v);
                    return [2];
                  }
                case 5:
                  {
                    t || i.status != l.MissionStatusType.RUNNING ? this._failCallback && this._failCallback() : ((null === (null === (s = i.actionConfig) || 0 === s ? a = 0 : a = s.actionValue) || 0 === a ? 0 : a.executeOpportunity) ? f.default.inst.openBrowser(null === (null === (p = i.ext) || 0 === p ? h = 0 : h = p.extValue) || 0 === h ? 0 : h.missionActionUrl) : f.default.inst.openTaskBrowser(null === (c = i.ext.extValue) || 0 === c ? 0 : c.missionActionUrl, i), this._isDoing = !0);
                    return [3, 7];
                  }
                case 6:
                  {
                    r.sent();
                    this._failCallback && this._failCallback();
                    return [3, 7];
                  }
                case 7:
                  {
                    return [2];
                  }
              }
            });
          });
        };
        t.prototype._onShow = function () {
          return i(this, 0, 0, function () {
            var t = this;
            return r(this, function () {
              return this._isDoing ? (this._isDoing = !1, u.default.inst.refreshTaskInfo(this._taskInfo, function () {
                t._toFinishTask(!0);
              }), [2]) : [2];
            });
          });
        };
        return t;
      }();
    o.default = h;
    cc._RF.pop();
  }, {
    "../Define/EventId": "EventId",
    "../Framework/Event/EventMgr": "EventMgr",
    "../Model/PlayerModel": "PlayerModel",
    "../Model/TaskModel": "TaskModel",
    "./TaskController": "TaskController",
    "./TurnTaskController": "TurnTaskController",
    "./WindVaneMgr": "WindVaneMgr"
  }],
  DropSystem: [function (t, e, o) {
    cc._RF.push(e, "6665fx6jXpIJpCsFq63oGWX", "DropSystem");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = t("../Common/Constant"),
      i = t("../Framework/Utils/Utils"),
      r = t("./GamingSystem"),
      s = t("./PicSystem"),
      a = function () {
        function t() {}
        t.prototype.getPicDropPools = function () {
          var t = n.LINK_GAME_PIC_KIND_COUNT,
            e = n.LINK_GAME_PIC_TOTAL_COUNT;
          if (e % 2 == 0) {
            for (var o = s.default.getRandomPic(t), i = new Array(), r = 0; r < e / 2; r++) {
              var a = Math.floor(Math.random() * o.length);
              i.push(o[a]);
              i.push(o[a]);
            }
            i.sort(function () {
              return Math.random() > .5 ? -1 : 1;
            });
            return i;
          }
          console.error("\u6389\u843d\u683c\u5b50\u603b\u6570\u4e3a\u5947\u6570\uff0c\u914d\u7f6e\u9519\u8bef");
        };
        t.prototype.getLevelDropPools = function () {
          var t = r.default.getCurMapConfig();
          return t ? 0 != t.asDefaultPools.length ? i.default.clone(t.asDefaultPools) : this.getCustomDropPools(t) : console.error("\u914d\u7f6e\u9519\u8bef-------------------");
        };
        t.prototype.getCustomDropPools = function (t) {
          var e = t.aiDropPoolsA,
            o = t.aiDropPoolsB,
            i = t.aiDropPoolsC,
            r = new Array(),
            a = t.aiRandomPoolKind[0],
            c = t.aiRandomPoolKind[1],
            l = s.default.getRandomPic(a + c),
            u = l.splice(0, a),
            p = l.splice(0, c),
            f = this._getDropPicPool(u, e[0]),
            h = this._getDropPicPool(p, o[0]),
            d = this._getSameAarry(n.LINK_GAME_OBSTACLE_ID.toString(), i[0]);
          r = r.concat(f, h, d);
          var _ = {};
          r.forEach(function (t) {
            _[t] || (_[t] = 0);
            _[t]++;
          });
          for (var y = this._getDropotalCount(e), v = this._getDropotalCount(o), m = this._getDropotalCount(i), g = this._getDropPicPool(u, y), b = this._getDropPicPool(p, v), I = this._getSameAarry(n.LINK_GAME_OBSTACLE_ID.toString(), m), w = t.aiDropPoolsA.length, T = 1; T < w; T++) {
            var E = g.splice(0, e[T]),
              S = b.splice(0, o[T]),
              P = I.splice(0, i[T]),
              O = new Array().concat(E, S, P);
            O.sort(function () {
              return Math.random() > .5 ? -1 : 1;
            });
            r = r.concat(O);
          }
          var C = {};
          r.forEach(function (t) {
            C[t] || (C[t] = 0);
            C[t]++;
          });
          return r;
        };
        t.prototype._getDropPicPool = function (t, e) {
          if (e % 2 == 0) {
            for (var o = new Array(), n = 0, i = 0; i < e / 2; i++) {
              var r = t[n];
              o.push(r);
              o.push(r);
              ++n >= t.length && (n = 0);
            }
            o.sort(function () {
              return Math.random() > .5 ? -1 : 1;
            });
            return o;
          }
          console.error("\u6389\u843d\u683c\u5b50\u603b\u6570\u4e3a\u5947\u6570\uff0c\u914d\u7f6e\u9519\u8bef");
        };
        t.prototype._getSameAarry = function (t, e) {
          for (var o = new Array(), n = 0; n < e; n++) o.push(t);
          return o;
        };
        t.prototype._getRandomTotalCount = function (t) {
          var e = 0;
          t.forEach(function (t) {
            e += t;
          });
          return e;
        };
        t.prototype._getDropotalCount = function (t) {
          for (var e = 0, o = 1; o < t.length; o++) e += t[o];
          return e;
        };
        t.prototype.getNextDropPlan = function (t) {
          var e = r.default.getCurMapConfig().aiDropCompound;
          if (e) {
            for (var o = 0; o < e.length; o++) {
              var n = e[o];
              if (t < n) {
                return n;
              }
              t -= n;
            }
          }
        };
        return t;
      }();
    o.default = new a();
    cc._RF.pop();
  }, {
    "../Common/Constant": "Constant",
    "../Framework/Utils/Utils": "Utils",
    "./GamingSystem": "GamingSystem",
    "./PicSystem": "PicSystem"
  }],
  EffectLayerController: [function (t, e, o) {
    cc._RF.push(e, "87089uMeeZEwIHekHgafxEG", "EffectLayerController");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../../../Common/Constant"),
      a = t("../../../Define/EventId"),
      c = t("../../../Framework/Event/EventMgr"),
      l = cc._decorator,
      u = l.ccclass,
      p = l.property,
      f = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.faillParticle = null;
          e.hammerAni = null;
          e.propSprite = null;
          e.propSpriteFrames = [];
          e._particleNode = null;
          return e;
        }
        i(e, t);
        e.prototype.onLoad = function () {};
        e.prototype.start = function () {};
        e.prototype.onEnable = function () {
          c.EVENT.on(a.EventId.ON_NEW_PROP_DROP_ACTION, this.playGetPropItem, this);
        };
        e.prototype.onDisable = function () {
          c.EVENT.off(a.EventId.ON_UPDATE_LOADING_PROGRESS, this.playGetPropItem, this);
        };
        e.prototype.playFallAni = function () {
          if (this._particleNode) {
            this._particleNode.destroy();
            this._particleNode = null;
          }
          var t = cc.instantiate(this.faillParticle);
          this.node.addChild(t);
          this._particleNode = t;
        };
        e.prototype.playHammerAction = function (t) {
          this.hammerAni.node.active = !0;
          this.hammerAni.node.position = new cc.Vec3(t.x, t.y);
          this.hammerAni.play();
        };
        e.prototype.playGetPropItem = function (t) {
          var e = this;
          t == s.PROP_ID.Hint ? this.propSprite.spriteFrame = this.propSpriteFrames[0] : this.propSprite.spriteFrame = this.propSpriteFrames[1];
          this.propSprite.node.active = !0;
          this.propSprite.node.position = new cc.Vec3(0, -100);
          cc.tween(this.propSprite.node).to(.05, {
            angle: -15
          }).to(.1, {
            angle: 15
          }).to(.1, {
            angle: -15
          }).to(.1, {
            angle: 15
          }).to(.4, {
            y: -460
          }).call(function () {
            e.propSprite.node.active = !1;
          }).start();
        };
        r([p(cc.Prefab)], e.prototype, "faillParticle", 0);
        r([p(cc.Animation)], e.prototype, "hammerAni", 0);
        r([p(cc.Sprite)], e.prototype, "propSprite", 0);
        r([p([cc.SpriteFrame])], e.prototype, "propSpriteFrames", 0);
        return r([u], e);
      }(cc.Component);
    o.default = f;
    cc._RF.pop();
  }, {
    "../../../Common/Constant": "Constant",
    "../../../Define/EventId": "EventId",
    "../../../Framework/Event/EventMgr": "EventMgr"
  }],
  EventId: [function (t, e, o) {
    cc._RF.push(e, "11b6fpZP7FGr7WF79E8hZzj", "EventId");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.EventId = 0;
    o.EventId = {
      ON_UI_OPEN_FAIL: "EventId.ON_UI_OPEN_FAIL",
      CHANGE_SCENE: "EventId.CHANGE_SCENE",
      EVENT_CONFIRM: "EventId.EVENT_CONFIRM",
      ON_UI_OPEN: "EventId.EVENT_ON_UI_OPEN",
      ON_UI_CLOSE: "EventId.EVENT_ON_UI_CLOSE",
      ON_UPDATE_LOADING_PROGRESS: "EventId.ON_UPDATE_LOADING_PROGRESS",
      ON_UPDATE_LOADING_TTP: "EventId.ON_UPDATE_LOADING_TTP",
      ON_LOGIN_RET: "EventId.ON_LOGIN_RET",
      ON_ANTI_ADDICTION_SUC: "EventId.ON_ANTI_ADDICTION_SUC",
      ON_SHOW: "ON_SHOW",
      ON_SETTING_END: "ON_SETTING_END",
      ON_HIDE: "ON_HIDE",
      ON_INIT_MAP: "EventId.ON_INIT_MAP",
      ON_CLICK_LINK_GAME_PIC: "EventId.ON_CLICK_LINK_GAME_PIC",
      ON_CLICK_LINK_GAME_OBSTACLE: "EventId.ON_CLICK_LINK_GAME_OBSTACLE",
      ON_UPDATE_PROP_STATE: "EventId.ON_UPDATE_PROP_STATE",
      ON_USE_ITEM: "EventId.ON_USE_ITEM",
      ON_GAME_REVIVE_SUCC: "EventId.ON_GAME_REVIVE_SUCC",
      ON_CANCEL_GAME_REVIVE: "EventId.ON_CANCEL_GAME_REVIVE",
      ON_USING_REMOVE_OBSTACLE: "EventId.ON_USING_REMOVE_OBSTACLE",
      ON_NEW_PROP_DROP_ACTION: "EventId.ON_NEW_PROP_DROP_ACTION",
      ON_PLAY_RESOURCE_FLY_ANI: "ON_PLAY_RESOURCE_FLY_ANI",
      ON_DROP_NEW_PIC: "EventId.ON_DROP_NEW_PIC",
      ON_GAME_TIME_OVER: "EventId.ON_GAME_TIME_OVER",
      ON_CLEAN_GAME_DIRTY_DATA: "EventId.ON_CLEAN_GAME_DIRTY_DATA",
      ON_ITEM_CHANGE: "EventId.ON_ITEM_CHANGE",
      ON_REFRESH_COIN: "EventId.ON_REFRESH_COIN",
      ON_REFRESH_TASK: "EventId.ON_REFRESH_TASK",
      ON_UPDATE_STAMINA: "ON_UPDATE_STAMINA",
      ON_FLY: "ON_FLY",
      ON_CLOSE_SETTLEMENT: "ON_CLOSE_SETTLEMENT"
    };
    cc._RF.pop();
  }, {}],
  EventMgr: [function (t, e, o) {
    cc._RF.push(e, "0b580U6y3NDDoFSQ+d5eIuN", "EventMgr");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      });
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.EVENT = 0;
    var r = function (t) {
      function e() {
        return t.call(this) || this;
      }
      i(e, t);
      Object.defineProperty(e, "inst", {
        get: function () {
          return e._inst || (e._inst = new e());
        },
        enumerable: !1,
        configurable: !0
      });
      return e;
    }(t("./EventObject").EventObject);
    o.EVENT = r.inst;
    cc._RF.pop();
  }, {
    "./EventObject": "EventObject"
  }],
  EventObject: [function (t, e, o) {
    cc._RF.push(e, "14ee7hO/SlNf5Mlf/0SarrA", "EventObject");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__read || function (t, e) {
        var o = "function" == typeof Symbol && t[Symbol.iterator];
        if (!o) {
          return t;
        }
        var n,
          i,
          r = o.call(t),
          s = [];
        try {
          for (; (0 === e || e-- > 0) && !(n = r.next()).done;) s.push(n.value);
        } catch (a) {
          i = {
            error: a
          };
        } finally {
          try {
            if (n && !n.done && (o = r.return)) {
              o.call(r);
            }
          } finally {
            if (i) {
              throw i.error;
            }
          }
        }
        return s;
      },
      s = this && this.__spread || function () {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(r(arguments[e]));
        return t;
      },
      a = this && this.__values || function (t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          o = e && t[e],
          n = 0;
        if (o) {
          return o.call(t);
        }
        if (t && "number" == typeof t.length) {
          return {
            next: function () {
              t && n >= t.length && (t = 0);
              return {
                value: t && t[n++],
                done: !t
              };
            }
          };
        }
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.EventObject = 0;
    var c = t("../Utils/Utils"),
      l = function () {
        this.name = "";
      },
      u = function () {
        function t() {
          this._callbackInfoList = [];
        }
        t.prototype.getInfo = function () {
          return this._callbackInfoList.length > 0 ? this._callbackInfoList.pop() : new l();
        };
        t.prototype.recovery = function (t) {
          this._callbackInfoList.push(t);
        };
        return t;
      }(),
      p = function (t) {
        function e() {
          var e = t.call(this) || this;
          e._eventList = {};
          e._callbackInfoPool = new u();
          return e;
        }
        i(e, t);
        e.prototype.on = function (e, o, n, i) {
          for (var r = [], a = 4; a < arguments.length; a++) r[a - 4] = arguments[a];
          if (-1 != this.findEvent(e, o, n)) {
            return o;
          }
          if (0 === this._eventList[e]) {
            this._eventList[e] = [];
          }
          var l = this._callbackInfoPool.getInfo();
          if (n instanceof cc.Component) {
            var u = n;
            if (!c.default.isComponentLive(u)) {
              return cc.error("component is not live!");
            }
            l.name = u.node.name;
          }
          l.type = e;
          l.callback = o;
          l.target = n;
          l.useCapture = i;
          l.args = r;
          l.realCallback = function () {
            for (var t, e, o = [], n = 0; n < arguments.length; n++) o[n] = arguments[n];
            var i = l.target;
            try {
              var r = l.args && l.args.filter(function (t) {
                  return null != t;
                }) || [],
                a = o && o.filter(function (t) {
                  return null != t;
                }) || [],
                u = r.concat(a);
              if (l.callback && i) {
                if (i instanceof cc.Component) {
                  var p = i;
                  if (c.default.isComponentLive(p)) {
                    (t = l.callback).call.apply(t, s([i], u));
                  }
                } else {
                  (e = l.callback).call.apply(e, s([i], u));
                }
              } else {
                if (l.callback) {
                  l.callback.apply(l, s(u));
                }
              }
            } catch (f) {
              cc.error("EVENT.on callback faild!" + f);
            }
          };
          this._eventList[e].push(l);
          t.prototype.on ? t.prototype.on.call(this, e, l.realCallback, n) : cc.error("\u65b0\u5f15\u64ce\u7248\u672c EventTarget \u6ca1on\u51fd\u6570");
          n && n.__eventTargets && n.__eventTargets.push(this);
          return o;
        };
        e.prototype.off = function (e, o, n) {
          var i, r;
          if (!o) {
            if (this._eventList[e]) {
              try {
                for (var s = a(this._eventList[e]), c = s.next(); !c.done; c = s.next()) {
                  var l = c.value;
                  this._callbackInfoPool.recovery(l);
                }
              } catch (h) {
                i = {
                  error: h
                };
              } finally {
                try {
                  if (c && !c.done && (r = s.return)) {
                    r.call(s);
                  }
                } finally {
                  if (i) {
                    throw i.error;
                  }
                }
              }
            }
            this._eventList[e] = 0;
            return t.prototype.off.call(this, e, 0, 0);
          }
          var u = this.findEvent(e, o, n);
          if (-1 != u) {
            var p = this._eventList[e],
              f = p[u];
            t.prototype.off.call(this, e, f.realCallback, n);
            this._callbackInfoPool.recovery(f);
            p.splice(u, 1);
            p.length <= 0 && (this._eventList[e] = 0);
          }
        };
        e.prototype.targetOff = function (e) {
          if (e && this._eventList && !(Object.keys(this._eventList).length <= 0)) {
            for (var o = Object.keys(this._eventList), n = o.length - 1; n >= 0; --n) {
              var i = o[n],
                r = this._eventList[i];
              if (r && 0 != r.length) {
                for (var s = r.length - 1; s >= 0; --s) {
                  var a = r[s];
                  if (a.target == e) {
                    r.splice(s, 1);
                    this._callbackInfoPool.recovery(a);
                  }
                }
                if (r.length <= 0) {
                  this._eventList[i] = 0;
                }
              }
            }
            t.prototype.targetOff.call(this, e);
          }
        };
        e.prototype.findEvent = function (t, e, o) {
          var n = this._eventList[t];
          if (!n || 0 == n.length) {
            return -1;
          }
          for (var i = 0; i < n.length; i++) if (n[i].callback === e && n[i].target == o) {
            return i;
          }
          return -1;
        };
        return e;
      }(cc.EventTarget);
    o.EventObject = p;
    cc._RF.pop();
  }, {
    "../Utils/Utils": "Utils"
  }],
  ExLogCtr: [function (t, e, o) {
    cc._RF.push(e, "e122fhS6PtM/pl7hFcEUqL6", "ExLogCtr");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = function () {
      function t() {
        this._sdk = null;
      }
      Object.defineProperty(t, "inst", {
        get: function () {
          this._inst || (this._inst = new t());
          return this._inst;
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.init = function () {
        this._sdk = window.ExLog;
      };
      t.prototype.logApiError = function (t, e) {
        this._sdk ? (console.log("Api\u5f02\u5e38", t), this._sdk.logApiError({
          code: e,
          message: (null == t ? 0 : t.errorMsg) || "",
          errorCode: (null == t ? 0 : t.errorCode) || "",
          traceId: (null == t ? 0 : t.traceId) || ""
        })) : console.error("NO SDK");
      };
      t.prototype.logJsError = function (t, e) {
        0 === e && (e = !1);
        t && (this._sdk ? (console.log("JS\u5f02\u5e38", t), this._sdk.logJsError({
          code: e ? "game" : "other",
          message: null == t ? 0 : t.message,
          stack: null == t ? 0 : t.stack
        })) : console.error("NO SDK"));
      };
      t.prototype.logCustomPerformance = function () {
        if (this._sdk) {
          var t = new Date().getTime() - window.startLoadingTime;
          console.log(t, "useTime");
          this._sdk.logCustomPerformance({
            code: "bizAvailable",
            costTime: t
          });
        } else {
          console.error("NO SDK");
        }
      };
      return t;
    }();
    o.default = n;
    cc._RF.pop();
  }, {}],
  ExitController: [function (t, e, o) {
    cc._RF.push(e, "cf607ZD5lFHMrgcZXTIdE+Y", "ExitController");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = t("../Define/UIDefs"),
      i = t("../Framework/Tools/BaseInfo"),
      r = t("../Framework/UI/UIMgr"),
      s = t("../Model/TaskModel"),
      a = t("./WindVaneMgr"),
      c = function () {
        function t() {
          this._isFirstOpen = !0;
        }
        Object.defineProperty(t, "inst", {
          get: function () {
            this._inst || (this._inst = new t());
            return this._inst;
          },
          enumerable: !1,
          configurable: !0
        });
        t.prototype.openExit = function () {
          this._isFirstOpen ? (this.isTodayFirst() ? (r.default.inst.open(n.UIType.ExitGame), window.setSureExitBtn()) : r.default.inst.open(n.UIType.ExitShare), this._isFirstOpen = !1) : a.default.inst.closeWindow();
        };
        t.prototype.isTodayFirst = function () {
          var t;
          return null === (t = s.default.inst.gameTaskPro[i.default.DETAIN_TASK]) || 0 === t ? 0 : t.isFinishe;
        };
        return t;
      }();
    o.default = c;
    cc._RF.pop();
  }, {
    "../Define/UIDefs": "UIDefs",
    "../Framework/Tools/BaseInfo": "BaseInfo",
    "../Framework/UI/UIMgr": "UIMgr",
    "../Model/TaskModel": "TaskModel",
    "./WindVaneMgr": "WindVaneMgr"
  }],
  ExitGame: [function (t, e, o) {
    cc._RF.push(e, "4713dU7+TpFUZOf9knLzYu/", "ExitGame");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../../Controller/LTrackerMgr"),
      a = t("../../Framework/UIBase"),
      c = cc._decorator,
      l = c.ccclass,
      u = c.property,
      p = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.exitSpr = null;
          return e;
        }
        i(e, t);
        e.prototype.start = function () {
          s.default.inst.expo("cx155923", {});
        };
        e.prototype.onClickAffirmBtn = function () {};
        e.prototype.onContinueGame = function () {
          s.default.inst.click("cx155923v.dx204435", {});
          this.close();
        };
        e.prototype.onClose = function () {
          window.closeExitDialog();
        };
        r([u(cc.Sprite)], e.prototype, "exitSpr", 0);
        return r([l], e);
      }(a.default);
    o.default = p;
    cc._RF.pop();
  }, {
    "../../Controller/LTrackerMgr": "LTrackerMgr",
    "../../Framework/UIBase": "UIBase"
  }],
  FlyResMgr: [function (t, e, o) {
    cc._RF.push(e, "c7db02m2ORIbaUIYzhrhBS7", "FlyResMgr");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = cc._decorator,
      a = s.ccclass,
      c = s.property,
      l = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.coinPrefab = null;
          e.leYuanCoinSpr = null;
          e.coinPool = null;
          return e;
        }
        var o;
        i(e, t);
        o = e;
        Object.defineProperty(e, "Inst", {
          get: function () {
            return this._instance;
          },
          enumerable: !1,
          configurable: !0
        });
        e.prototype.onLoad = function () {
          o._instance = this;
          this.coinPool = new cc.NodePool();
        };
        e.prototype.getFlyResNode = function () {
          return this.coinPool.size() > 0 ? this.coinPool.get() : cc.instantiate(this.coinPrefab);
        };
        e.prototype.playFlyCoinAni = function (t, e) {
          var o = this;
          t = this.node.convertToNodeSpaceAR(t);
          e = this.node.convertToNodeSpaceAR(e);
          var n = this.getFlyResNode();
          n.setPosition(t);
          this.node.addChild(n);
          n.stopAllActions();
          Math.random();
          var i = new cc.Vec2(e.x - 200, e.y - t.y);
          n.runAction(cc.sequence(cc.bezierTo(.6, [new cc.Vec2(t.x, t.y), i, new cc.Vec2(e.x, e.y)]).easing(cc.easeIn(1)), cc.callFunc(function () {
            o.coinPool.put(n);
          })));
        };
        e.prototype.flyAni = function (t, e) {
          for (var o = this, n = 0; n < 6; n++) setTimeout(function () {
            o.playFlyCoinAni(t, e);
          }, 120 * n);
        };
        r([c(cc.Prefab)], e.prototype, "coinPrefab", 0);
        r([c(cc.SpriteFrame)], e.prototype, "leYuanCoinSpr", 0);
        return o = r([a], e);
      }(cc.Component);
    o.default = l;
    cc._RF.pop();
  }, {}],
  FlyTxtPool: [function (t, e, o) {
    cc._RF.push(e, "d1eb456XFxEWqxsx1npcyVp", "FlyTxtPool");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.FlyTxtPool = 0;
    var n = t("../Res/NodePool"),
      i = t("./FlyTxt"),
      r = t("../../Define/UIDefs"),
      s = t("./UIMgr"),
      a = function () {
        function t() {}
        t.init = function (t) {
          var e = this;
          0 === t && (t = 10);
          this._flyTxtPool || (this._flyTxtPool = new n.NodePool(), this._flyTxtPool.setWaterMark(t), this._flyTxtPool.init("UIPrefab/Common/FlyTxt", function () {
            e._flyPoolReady = !0;
            e._flyNextTxt();
          }));
        };
        t.flyTxt = function (t, e, o) {
          this._flyList.push({
            txt: t,
            pos: e,
            color: o
          });
          this._flyTxtPool || this.init();
          this._flyPoolReady && this._flyNextTxt();
        };
        t._flyNextTxt = function () {
          var t = this;
          if (this._flyList.length > 0 && this._currentShowCount < this._maxShowCount) {
            var e = this._flyList.shift(),
              o = this._flyTxtPool.getNode();
            if (o) {
              this._currentShowCount++;
              var n = o.getComponent(i.default);
              n.setTxt(e.txt, e.color);
              var a = s.default.inst.getLayer(r.LayerType.Tip);
              a.addChild(o);
              o.setPosition(a.convertToNodeSpaceAR(e.pos));
              o.once(i.default.EVNENT_ON_FLY_ANI_COMPLETE, function () {
                t._currentShowCount--;
                t._flyTxtPool.freeNode(o);
                t._flyNextTxt();
              });
              n.playFlyAni();
            }
          }
        };
        t._flyList = [];
        t._flyPoolReady = !1;
        t._maxShowCount = 3;
        t._currentShowCount = 0;
        return t;
      }();
    o.FlyTxtPool = a;
    cc._RF.pop();
  }, {
    "../../Define/UIDefs": "UIDefs",
    "../Res/NodePool": "NodePool",
    "./FlyTxt": "FlyTxt",
    "./UIMgr": "UIMgr"
  }],
  FlyTxt: [function (t, e, o) {
    cc._RF.push(e, "9e3772aotlL5qHiXIwuk7TB", "FlyTxt");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = cc._decorator,
      a = s.ccclass,
      c = s.property,
      l = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.lblTxt = null;
          e.flyAni = null;
          return e;
        }
        var o;
        i(e, t);
        o = e;
        e.prototype.setTxt = function (t, e) {
          this.lblTxt.string = t;
          this.lblTxt.node.color = e;
        };
        e.prototype.playFlyAni = function () {
          var t = this;
          this.flyAni.play(0, 0);
          this.flyAni.once("finished", function () {
            t.node.emit(o.EVNENT_ON_FLY_ANI_COMPLETE);
          }, this);
        };
        e.EVNENT_ON_FLY_ANI_COMPLETE = "FlyTxt.EVNENT_ON_FLY_ANI_COMPLETE";
        r([c(cc.Label)], e.prototype, "lblTxt", 0);
        r([c(cc.Animation)], e.prototype, "flyAni", 0);
        return o = r([a], e);
      }(cc.Component);
    o.default = l;
    cc._RF.pop();
  }, {}],
  GameDrop: [function (t, e, o) {
    cc._RF.push(e, "10ee4q3Fj1EqL/k1k9nYCUB", "GameDrop");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../../../Common/Constant"),
      a = t("../../../Controller/LTrackerMgr"),
      c = t("../../../Framework/UIBase"),
      l = t("../../../System/GamingSystem"),
      u = cc._decorator,
      p = u.ccclass,
      f = u.property,
      h = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.obstacleDrop = null;
          e.lblTitle = null;
          e.lblDes = null;
          return e;
        }
        i(e, t);
        e.prototype.start = function () {
          this.initView();
          this.cdClose();
        };
        e.prototype.initView = function () {
          var t = l.default.dropIdx;
          a.default.inst.expo("cx155987", {
            icount: t
          });
          this.lblTitle.string = "\u7b2c" + t + "\u8f6e\u6389\u843d";
          var e = l.default.getCurMapConfig(),
            o = e.aiDropCompound.length - t;
          0 == o ? this.lblDes.string = "\u6700\u540e\u4e00\u8f6e\u6389\u843d\u5566\uff0c\u80dc\u5229\u8fd1\u5728\u773c\u524d" : this.lblDes.string = "\u63a5\u4e0b\u6765\u8fd8\u6709" + o + "\u6b21\u6389\u843d\u54e6\uff0c\u79bb\u901a\u5173\u4e00\u6b65\u4e4b\u9065";
          var n = e.aiDropPoolsC,
            i = n[t] && n[t] > 0;
          this.obstacleDrop.active = i;
        };
        e.prototype.cdClose = function () {
          var t = this;
          this.scheduleOnce(function () {
            t.close();
          }, s.GAME_TIPS_SHOW_TIME);
        };
        r([f(cc.Node)], e.prototype, "obstacleDrop", 0);
        r([f(cc.Label)], e.prototype, "lblTitle", 0);
        r([f(cc.Label)], e.prototype, "lblDes", 0);
        return r([p], e);
      }(c.default);
    o.default = h;
    cc._RF.pop();
  }, {
    "../../../Common/Constant": "Constant",
    "../../../Controller/LTrackerMgr": "LTrackerMgr",
    "../../../Framework/UIBase": "UIBase",
    "../../../System/GamingSystem": "GamingSystem"
  }],
  GameFail: [function (t, e, o) {
    cc._RF.push(e, "2541b73X8pIg4PUGedIuoNV", "GameFail");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../../../Framework/UIBase"),
      a = t("../../../System/GamingSystem"),
      c = t("../../../System/PlayerSystem"),
      l = cc._decorator,
      u = l.ccclass,
      p = (l.property, function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        i(e, t);
        e.prototype.start = function () {};
        e.prototype.onClickReplayBtn = function () {
          c.default.startGame();
          this.close();
        };
        e.prototype.onClickShareBtn = function () {
          a.default.backMainScene();
          this.close();
        };
        return r([u], e);
      }(s.default));
    o.default = p;
    cc._RF.pop();
  }, {
    "../../../Framework/UIBase": "UIBase",
    "../../../System/GamingSystem": "GamingSystem",
    "../../../System/PlayerSystem": "PlayerSystem"
  }],
  GameGuide: [function (t, e, o) {
    cc._RF.push(e, "175abpcrc5E9YgK1LVarysd", "GameGuide");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../../../Controller/LTrackerMgr"),
      a = t("../../../Framework/UIBase"),
      c = cc._decorator,
      l = c.ccclass,
      u = (c.property, function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        i(e, t);
        e.prototype.start = function () {
          s.default.inst.expo("cx155979", {});
        };
        return r([l], e);
      }(a.default));
    o.default = u;
    cc._RF.pop();
  }, {
    "../../../Controller/LTrackerMgr": "LTrackerMgr",
    "../../../Framework/UIBase": "UIBase"
  }],
  GamePause: [function (t, e, o) {
    cc._RF.push(e, "631a0T7HR5KYp4HZ1pL8vfE", "GamePause");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../../../Controller/LTrackerMgr"),
      a = t("../../../Framework/UIBase"),
      c = t("../../../System/GamingSystem"),
      l = t("../../../System/PlayerSystem"),
      u = cc._decorator,
      p = u.ccclass,
      f = (u.property, function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        i(e, t);
        e.prototype.start = function () {
          s.default.inst.expo("cx155971", {});
          c.default.setPause(!0);
        };
        e.prototype.onClickBackMainBtn = function () {
          s.default.inst.click("cx155971.dx204571", {});
          c.default.backMainScene();
          this.close();
        };
        e.prototype.onClickReplayBtn = function () {
          s.default.inst.click("cx155971.dx204579", {});
          l.default.startGame();
          this.close();
        };
        e.prototype.onClickContinueBtn = function () {
          s.default.inst.click("cx155971.dx204563", {});
          c.default.setPause(!1);
          this.close();
        };
        return r([p], e);
      }(a.default));
    o.default = f;
    cc._RF.pop();
  }, {
    "../../../Controller/LTrackerMgr": "LTrackerMgr",
    "../../../Framework/UIBase": "UIBase",
    "../../../System/GamingSystem": "GamingSystem",
    "../../../System/PlayerSystem": "PlayerSystem"
  }],
  GameSettlement: [function (t, e, o) {
    cc._RF.push(e, "991b26S9VVK8KAXEK6o1uh9", "GameSettlement");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../../../Controller/LTrackerMgr"),
      a = t("../../../Controller/ShareMgr"),
      c = t("../../../Define/EventId"),
      l = t("../../../Framework/Event/EventMgr"),
      u = t("../../../Framework/UIBase"),
      p = t("../../../Framework/Utils/Utils"),
      f = t("../../../System/GamingSystem"),
      h = t("../../../System/PlayerSystem"),
      d = t("../../Scene/Game"),
      _ = cc._decorator,
      y = _.ccclass,
      v = _.property,
      m = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.lblTime = null;
          e.lblCoin = null;
          e.succNode = null;
          e.failNode = null;
          e._isSucc = !1;
          return e;
        }
        i(e, t);
        e.prototype.onLoad = function () {
          l.EVENT.on(c.EventId.ON_CLOSE_SETTLEMENT, this.close, this);
        };
        e.prototype.onDestroy = function () {
          l.EVENT.off(c.EventId.ON_CLOSE_SETTLEMENT, this.close, this);
        };
        e.prototype.start = function () {
          this.initView();
        };
        e.prototype.initView = function () {
          var t = d.Game.inst.getPlayTime(),
            e = p.default.getFormatingTimeStr(t);
          this.lblTime.string = "\u6e38\u620f\u65f6\u95f4\uff1a" + e;
          this.lblCoin.string = "x" + this._para.CoinNum;
          var o = this._para.isSucc;
          this.succNode.active = o;
          this.failNode.active = !o;
          this._isSucc = o;
          o ? (s.default.inst.logEvent(s.EventName.page_view, {
            sname: "GamePassExp",
            iplaytime: t,
            irise: f.default.isRevive ? 0 : 1,
            icount: this._para.CoinNum
          }), s.default.inst.expo("cx156019", {
            iplaytime: t,
            irise: f.default.isRevive ? 0 : 1,
            icount: this._para.CoinNum
          })) : (s.default.inst.logEvent(s.EventName.page_view, {
            sname: "GameFailExp",
            failurereason: f.default.failType,
            irise: f.default.isRevive ? 0 : 1,
            droptimes: f.default.dropIdx
          }), s.default.inst.expo("cx156027", {
            failurereason: f.default.failType,
            irise: f.default.isRevive ? 0 : 1,
            droptimes: f.default.dropIdx
          }));
        };
        e.prototype.onClickReplayBtn = function () {
          s.default.inst.click("cx156027.dx204627", {});
          h.default.startGame();
        };
        e.prototype.onClickSuccShareBtn = function () {
          s.default.inst.click("cx156019.dx204611", {});
          f.default.backMainScene();
          a.default.inst.share(a.ShareContent.TONGYONG, function () {
            s.default.inst.expo("cx156035", {
              stype: 1,
              spage: 2
            });
          }, function () {
            s.default.inst.expo("cx156035", {
              stype: 2,
              spage: 2
            });
          });
        };
        e.prototype.onClickFailShareBtn = function () {
          s.default.inst.click("cx156027.dx204635", {});
          f.default.backMainScene();
          a.default.inst.share(a.ShareContent.TONGYONG, function () {
            s.default.inst.expo("cx156035", {
              stype: 1,
              spage: 3
            });
          }, function () {
            s.default.inst.expo("cx156035", {
              stype: 2,
              spage: 3
            });
          });
        };
        e.prototype.onClickCloseBtn = function () {
          this._isSucc ? s.default.inst.click("cx156019.dx204619", {}) : s.default.inst.click("cx156027.dx204643", {});
          f.default.backMainScene();
          this.close();
        };
        r([v(cc.Label)], e.prototype, "lblTime", 0);
        r([v(cc.Label)], e.prototype, "lblCoin", 0);
        r([v(cc.Node)], e.prototype, "succNode", 0);
        r([v(cc.Node)], e.prototype, "failNode", 0);
        return r([y], e);
      }(u.default);
    o.default = m;
    cc._RF.pop();
  }, {
    "../../../Controller/LTrackerMgr": "LTrackerMgr",
    "../../../Controller/ShareMgr": "ShareMgr",
    "../../../Define/EventId": "EventId",
    "../../../Framework/Event/EventMgr": "EventMgr",
    "../../../Framework/UIBase": "UIBase",
    "../../../Framework/Utils/Utils": "Utils",
    "../../../System/GamingSystem": "GamingSystem",
    "../../../System/PlayerSystem": "PlayerSystem",
    "../../Scene/Game": "Game"
  }],
  GameTips: [function (t, e, o) {
    cc._RF.push(e, "64e5ddMR9VBSKzt1QJQQ40O", "GameTips");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../../../Common/Constant"),
      a = t("../../../Framework/UIBase"),
      c = cc._decorator,
      l = c.ccclass,
      u = c.property,
      p = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.lblTitle = null;
          e.lblDes = null;
          e._tipData = null;
          return e;
        }
        i(e, t);
        e.prototype.start = function () {
          this.initView();
          this.cdClose();
        };
        e.prototype.initView = function () {
          var t = this._para;
          this._tipData = t;
          this.lblTitle.string = t.title;
          this.lblDes.node.active = null != t.describe;
          t.describe && (this.lblDes.string = t.describe);
        };
        e.prototype.cdClose = function () {
          var t = this;
          this.scheduleOnce(function () {
            t._tipData.closeHandle && t._tipData.closeHandle();
            t.close();
          }, s.GAME_TIPS_SHOW_TIME);
        };
        r([u(cc.Label)], e.prototype, "lblTitle", 0);
        r([u(cc.Label)], e.prototype, "lblDes", 0);
        return r([l], e);
      }(a.default);
    o.default = p;
    cc._RF.pop();
  }, {
    "../../../Common/Constant": "Constant",
    "../../../Framework/UIBase": "UIBase"
  }],
  Game: [function (t, e, o) {
    cc._RF.push(e, "58a08xGvSBAA6hqKVzIw7+s", "Game");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.Game = 0;
    var s = t("../../Common/Constant"),
      a = t("../../Controller/LTrackerMgr"),
      c = t("../../Controller/TableMgr"),
      l = t("../../Define/EventId"),
      u = t("../../Define/UIDefs"),
      p = t("../../Framework/Event/EventMgr"),
      f = t("../../Framework/Scene/SceneBase"),
      h = t("../../Framework/UI/UIMgr"),
      d = t("../../Framework/Utils/Utils"),
      _ = t("../../System/AudioSystem"),
      y = t("../../System/GamingSystem"),
      v = t("../UI/Game/PropItemController"),
      m = cc._decorator,
      g = m.ccclass,
      b = m.property,
      I = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.removeBubble = null;
          e.hintProp = null;
          e.removeProp = null;
          e.progressBar = null;
          e.dropBar = null;
          e.brightStars = [];
          e.lblDropBatch = null;
          e.dropNode = null;
          e.timeNode = null;
          e.lblSeason = null;
          e.lblTime = null;
          e.DROP_MAX_COUNT = 3;
          e.SHOW_COUNT_DOWN_TIME = 20;
          return e;
        }
        var o;
        i(e, t);
        o = e;
        Object.defineProperty(e.prototype, "timer", {
          get: function () {
            return this._timer;
          },
          set: function (t) {
            this._timer = t;
            t < 0 && (this._timer = 0);
            t > this._fullTime && (this._timer = this._fullTime);
            var e = this.timer / this._fullTime;
            this.progressBar.progress = e;
          },
          enumerable: !1,
          configurable: !0
        });
        e.prototype.onLoad = function () {
          o.inst = this;
          this.init();
          this.initDefault();
        };
        e.prototype.start = function () {
          _.default.initialize();
          this.bindPropCmpt();
          this.refreshDropBatchUI();
          this.checkDialog();
          this.initSeasonLabel();
          a.default.inst.expo("cx155955", {});
          a.default.inst.logEvent(a.EventName.page_view, {
            sname: "GameExp",
            level: Number(y.default.level) - 1
          });
        };
        e.prototype.init = function () {
          var t = c.TABLE.getLevel(y.default.level);
          this._fullTime = t.iTime;
          this.timer = this._fullTime;
          this._passTime = 0;
        };
        e.prototype.getPlayTime = function () {
          return Math.ceil(1e3 * this._passTime);
        };
        e.prototype.update = function (t) {
          if (y.default.inPlaying()) {
            this._passTime += t;
            this.timer <= 0 || 0 != this._fullTime && (this.timer -= t, this.timer <= 0 && p.EVENT.emit(l.EventId.ON_GAME_TIME_OVER), this.timer <= this.SHOW_COUNT_DOWN_TIME ? (this.lblTime.node.active = !0, this.lblTime.string = Math.floor(this.timer) + "\u79d2") : this.lblTime.node.active = !1);
          }
        };
        e.prototype.onEnable = function () {
          p.EVENT.on(l.EventId.ON_GAME_REVIVE_SUCC, this.onGameReviveSucc, this);
          p.EVENT.on(l.EventId.ON_DROP_NEW_PIC, this.refreshDropBatchUI, this);
          p.EVENT.on(l.EventId.ON_USING_REMOVE_OBSTACLE, this.showRemoveBubble, this);
        };
        e.prototype.onDisable = function () {
          p.EVENT.off(l.EventId.ON_GAME_REVIVE_SUCC, this.onGameReviveSucc, this);
          p.EVENT.off(l.EventId.ON_DROP_NEW_PIC, this.refreshDropBatchUI, this);
          p.EVENT.off(l.EventId.ON_USING_REMOVE_OBSTACLE, this.showRemoveBubble, this);
        };
        e.prototype.initDefault = function () {
          var t = "1" != y.default.level;
          this.dropNode.active = t;
          this.timeNode.active = t;
        };
        e.prototype.onGameReviveSucc = function () {
          y.default.gameComplete = !1;
          h.default.inst.showToast("\u7ee7\u7eed\u6e38\u620f");
          var t = this._fullTime * Number(c.TABLE.getGlobalById("G003").sGlobalData) / 100;
          this.timer = Math.min(this._fullTime, this.timer + t);
        };
        e.prototype.bindPropCmpt = function () {
          this.hintProp.getComponent(v.default).bind(s.PROP_ID.Hint);
          this.removeProp.getComponent(v.default).bind(s.PROP_ID.RemoveObstacle);
        };
        e.prototype.refreshDropBatchUI = function () {
          var t = y.default.dropIdx;
          this.lblDropBatch.string = "\u6389\u843d\u8f6e\u6b21\uff1a" + t;
          this.brightStars.forEach(function (e, o) {
            e.active = o < t;
          });
          this.dropBar.progress = t / this.DROP_MAX_COUNT;
        };
        e.prototype.showRemoveBubble = function (t) {
          this.removeBubble.active = t;
        };
        e.prototype.onClickPauseBtn = function () {
          h.default.inst.open(u.UIType.GamePause);
        };
        e.prototype.checkDialog = function () {
          y.default.tutorialFlag ? y.default.difficultySpike && (y.default.difficultySpike = !1, h.default.inst.open(u.UIType.GameTips, {
            title: "\u96be\u5ea6\u98d9\u5347",
            describe: "\u6d88\u9664\u6240\u6709\u5143\u7d20\u5373\u53ef\u901a\u5173\n\u8bf7\u8c28\u614e\u8d70\u6bcf\u4e00\u6b65\u54e6~"
          })) : h.default.inst.open(u.UIType.GameGuide);
        };
        e.prototype.initSeasonLabel = function () {
          var t = new Date(c.TABLE.getGlobalById("G004").sGlobalData).getTime(),
            e = d.default.getServerTime(),
            o = Math.ceil((e - t) / 864e5);
          o = Math.max(1, o);
          var n = "\u7b2c" + d.default.getFormatingNum(o, 3) + "\u671f";
          console.log("initSeasonLabel.................", n);
          this.lblSeason.string = n;
        };
        r([b(cc.Node)], e.prototype, "removeBubble", 0);
        r([b(cc.Node)], e.prototype, "hintProp", 0);
        r([b(cc.Node)], e.prototype, "removeProp", 0);
        r([b(cc.ProgressBar)], e.prototype, "progressBar", 0);
        r([b(cc.ProgressBar)], e.prototype, "dropBar", 0);
        r([b([cc.Node])], e.prototype, "brightStars", 0);
        r([b(cc.Label)], e.prototype, "lblDropBatch", 0);
        r([b(cc.Node)], e.prototype, "dropNode", 0);
        r([b(cc.Node)], e.prototype, "timeNode", 0);
        r([b(cc.Label)], e.prototype, "lblSeason", 0);
        r([b(cc.Label)], e.prototype, "lblTime", 0);
        return o = r([g], e);
      }(f.default);
    o.Game = I;
    cc._RF.pop();
  }, {
    "../../Common/Constant": "Constant",
    "../../Controller/LTrackerMgr": "LTrackerMgr",
    "../../Controller/TableMgr": "TableMgr",
    "../../Define/EventId": "EventId",
    "../../Define/UIDefs": "UIDefs",
    "../../Framework/Event/EventMgr": "EventMgr",
    "../../Framework/Scene/SceneBase": "SceneBase",
    "../../Framework/UI/UIMgr": "UIMgr",
    "../../Framework/Utils/Utils": "Utils",
    "../../System/AudioSystem": "AudioSystem",
    "../../System/GamingSystem": "GamingSystem",
    "../UI/Game/PropItemController": "PropItemController"
  }],
  GamingSystem: [function (t, e, o) {
    cc._RF.push(e, "57e3cDXUUNASKXbYcCYlCD6", "GamingSystem");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = t("../Controller/TableMgr"),
      i = t("../Define/Define"),
      r = t("../Framework/Scene/SceneMgr"),
      s = function () {
        function t() {
          this.gameOver = !1;
          this.gameComplete = !1;
          this.gamePause = !1;
          this._isRevive = !1;
          this.dropIdx = 0;
          this.failType = null;
          this.tutorialFlag = !0;
          this.difficultySpike = !1;
          this.isSettlement = !1;
        }
        t.prototype.init = function () {
          this.gameOver = !1;
          this.gameComplete = !1;
          this.gamePause = !1;
          this._isRevive = !1;
          this.dropIdx = 0;
          this.failType = null;
          this.isSettlement = !1;
        };
        t.prototype.setPause = function (t) {
          this.gamePause = t;
        };
        t.prototype.inPlaying = function () {
          return !(this.gamePause || this.gameOver || this.gameComplete);
        };
        Object.defineProperty(t.prototype, "isRevive", {
          get: function () {
            return this._isRevive;
          },
          set: function (t) {
            this._isRevive = !!t;
          },
          enumerable: !1,
          configurable: !0
        });
        t.prototype.startGame = function (t) {
          this.init();
          this.level = t;
          r.SCENE.loadScene(i.SceneType.Game);
        };
        t.prototype.backGame = function () {
          this.gamePause = !1;
        };
        t.prototype.backMainScene = function () {
          r.SCENE.loadScene(i.SceneType.Main);
        };
        t.prototype.getCirclePosByAngle = function (t, e) {
          return {
            x: e * Math.sin(Math.PI / 180 * (90 - t)),
            y: e * Math.sin(Math.PI / 180 * t)
          };
        };
        t.prototype.getCurMapConfig = function () {
          var t = n.TABLE.getLevel(this.level).sMapId;
          return n.TABLE.getMap(t);
        };
        t.prototype.addDropBatch = function () {
          this.dropIdx++;
        };
        return t;
      }();
    o.default = new s();
    cc._RF.pop();
  }, {
    "../Controller/TableMgr": "TableMgr",
    "../Define/Define": "Define",
    "../Framework/Scene/SceneMgr": "SceneMgr"
  }],
  GetItemLayer: [function (t, e, o) {
    cc._RF.push(e, "98577r05z9PWZ/XC7x4l6DE", "GetItemLayer");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../../Common/AudioConfig"),
      a = t("../../Controller/LTrackerMgr"),
      c = t("../../Define/EventId"),
      l = t("../../Framework/Event/EventMgr"),
      u = t("../../Framework/UIBase"),
      p = t("../../System/AudioSystem"),
      f = cc._decorator,
      h = f.ccclass,
      d = f.property,
      _ = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.labelAmount = null;
          e.propSpr = null;
          e.smallPropSpr = null;
          return e;
        }
        i(e, t);
        e.prototype.onLoad = function () {};
        e.prototype.start = function () {
          this.show();
        };
        e.prototype.onDisable = function () {};
        e.prototype.onDestroy = function () {};
        e.prototype.show = function () {
          p.default.play(s.AUDIOS_PATH.get_reward);
          var t = this._para[0];
          this.labelAmount.string = "x" + t.num.toString();
          a.default.inst.expo("cx156043", {
            icount: t.num
          });
        };
        e.prototype.collect = function () {
          this.close();
        };
        e.prototype.close = function () {
          console.log("onClose ....................", this.smallPropSpr);
          var e = this.smallPropSpr.node.parent.convertToWorldSpaceAR(this.smallPropSpr.node.position);
          l.EVENT.emit(c.EventId.ON_PLAY_RESOURCE_FLY_ANI, e);
          t.prototype.close.call(this);
        };
        r([d(cc.Label)], e.prototype, "labelAmount", 0);
        r([d(cc.Sprite)], e.prototype, "propSpr", 0);
        r([d(cc.Sprite)], e.prototype, "smallPropSpr", 0);
        return r([h], e);
      }(u.default);
    o.default = _;
    cc._RF.pop();
  }, {
    "../../Common/AudioConfig": "AudioConfig",
    "../../Controller/LTrackerMgr": "LTrackerMgr",
    "../../Define/EventId": "EventId",
    "../../Framework/Event/EventMgr": "EventMgr",
    "../../Framework/UIBase": "UIBase",
    "../../System/AudioSystem": "AudioSystem"
  }],
  GetPower: [function (t, e, o) {
    cc._RF.push(e, "8ef961YV8BI37RRFyQmAHgZ", "GetPower");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      },
      s = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      a = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var c = t("../../../Controller/LTrackerMgr"),
      l = t("../../../Controller/TurnTaskController"),
      u = t("../../../Framework/UI/UIFacade"),
      p = t("../../../Framework/UIBase"),
      f = t("../../../System/PlayerSystem"),
      h = t("./LifeSystem"),
      d = cc._decorator,
      _ = d.ccclass,
      y = (d.property, d.menu),
      v = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e._debounce = !1;
          return e;
        }
        i(e, t);
        e.prototype.onLoad = function () {
          c.default.inst.expo("cx224100", {});
        };
        e.prototype.onWatchAbs = function () {
          return s(this, 0, 0, function () {
            var t = this;
            return a(this, function () {
              return this._debounce ? [2] : (this._debounce = !0, this.scheduleOnce(function () {
                t._debounce = !1;
              }, 1), l.default.inst.getProp("D005", function (e) {
                t.setData(e);
                c.default.inst.click("cx224100.dx333092", {
                  isuccess: 1
                });
                c.default.inst.logEvent(c.EventName.btn_click, {
                  sname: "AdsClick",
                  success: 1,
                  source: "EnergyOnce"
                });
              }, function () {
                c.default.inst.click("cx224100.dx333092", {
                  isuccess: 0
                });
                u.UIFacade.showToast("\u6d4f\u89c8\u65f6\u95f4\u4e0d\u8db3\uff0c\u8bf7\u518d\u8bd5\u8bd5\u54e6~");
                c.default.inst.logEvent(c.EventName.btn_click, {
                  sname: "AdsClick",
                  success: 0,
                  source: "EnergyOnce"
                });
              }), [2]);
            });
          });
        };
        e.prototype.setData = function (t) {
          t.energy && h.default.initialize(t.energy, t.infiniteEnergyAdNum);
          this.close();
          f.default.startGame();
        };
        return r([_, y("\u997f\u4e86\u4e48/GetPower")], e);
      }(p.default);
    o.default = v;
    cc._RF.pop();
  }, {
    "../../../Controller/LTrackerMgr": "LTrackerMgr",
    "../../../Controller/TurnTaskController": "TurnTaskController",
    "../../../Framework/UI/UIFacade": "UIFacade",
    "../../../Framework/UIBase": "UIBase",
    "../../../System/PlayerSystem": "PlayerSystem",
    "./LifeSystem": "LifeSystem"
  }],
  GuideAbility: [function (t, e, o) {
    cc._RF.push(e, "d773bqDIZ9J9oWlN9dgIoNm", "GuideAbility");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = cc._decorator,
      a = s.ccclass,
      c = s.property,
      l = function () {
        function t() {
          this.target = null;
          this.name = "";
        }
        r([c({
          type: cc.Node,
          displayName: "\u8282\u70b9"
        })], t.prototype, "target", 0);
        r([c({
          displayName: "\u914d\u7f6e\u540d"
        })], t.prototype, "name", 0);
        return r([a("GuideItem")], t);
      }(),
      u = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.guideItems = [];
          return e;
        }
        i(e, t);
        e.prototype.getGuideItem = function (t) {
          for (var e = 0; e < this.guideItems.length; ++e) if (this.guideItems[e].name == t) {
            return this.guideItems[e].target;
          }
          return null;
        };
        r([c({
          type: [l],
          displayName: "\u5f15\u5bfc\u8282\u70b9"
        })], e.prototype, "guideItems", 0);
        return r([a], e);
      }(cc.Component);
    o.default = u;
    cc._RF.pop();
  }, {}],
  GuideEvent: [function (t, e, o) {
    cc._RF.push(e, "dda8aQ+c0hPE4qHRddhNnOh", "GuideEvent");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s,
      a = t("../Event/EventMgr"),
      c = t("../../Define/EventId"),
      l = cc._decorator,
      u = l.ccclass,
      p = l.property;
    (function (t) {
      t[t.open = 0] = "open";
      t[t.close = 1] = "close";
    })(s || (s = {}));
    var f = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.params = "";
        e.sendChance = s.open;
        return e;
      }
      i(e, t);
      e.prototype.onLoad = function () {
        if (this.sendChance == s.open) {
          a.default.inst.emit(c.EventId.ON_GUIDE_NEXT_TRIGGER, this.params);
        }
      };
      e.prototype.onDestroy = function () {
        if (this.sendChance == s.close) {
          a.default.inst.emit(c.EventId.ON_GUIDE_NEXT_TRIGGER, this.params);
        }
      };
      r([p({
        displayName: "\u6d3e\u53d1\u4e8b\u4ef6"
      })], e.prototype, "params", 0);
      r([p({
        type: cc.Enum(s),
        displayName: "\u6d3e\u53d1\u65f6\u673a"
      })], e.prototype, "sendChance", 0);
      return r([u], e);
    }(cc.Component);
    o.default = f;
    cc._RF.pop();
  }, {
    "../../Define/EventId": "EventId",
    "../Event/EventMgr": "EventMgr"
  }],
  Handler: [function (t, e, o) {
    cc._RF.push(e, "bb19cbiRV9AtbVU8Xzku9i+", "Handler");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.Handler = 0;
    var n = function () {
      function t(t, e, o, n) {
        0 === t && (t = null);
        0 === e && (e = null);
        0 === o && (o = null);
        0 === n && (n = !1);
        this.once = !1;
        this._id = 0;
        this.setTo(t, e, o, n);
      }
      t.prototype.setTo = function (e, o, n, i) {
        0 === i && (i = !1);
        this._id = t._gid++;
        this.caller = e;
        this.method = o;
        this.args = n;
        this.once = i;
        return this;
      };
      t.prototype.run = function () {
        if (null == this.method) {
          return null;
        }
        var t = this._id,
          e = this.method.apply(this.caller, this.args);
        this._id === t && this.once && this.recover();
        return e;
      };
      t.prototype.runWith = function (t) {
        if (null == this.method) {
          return null;
        }
        var e = this._id;
        if (null == t) {
          var o = this.method.apply(this.caller, this.args);
        } else {
          this.args || t.unshift ? this.args ? o = this.method.apply(this.caller, this.args.concat(t)) : o = this.method.apply(this.caller, t) : o = this.method.call(this.caller, t);
        }
        this._id === e && this.once && this.recover();
        return o;
      };
      t.prototype.clear = function () {
        this.caller = null;
        this.method = null;
        this.args = null;
        return this;
      };
      t.prototype.recover = function () {
        if (this._id > 0) {
          this._id = 0;
          t._pool.push(this.clear());
        }
      };
      t.create = function (e, o, n, i) {
        0 === n && (n = null);
        0 === i && (i = !0);
        return t._pool.length ? t._pool.pop().setTo(e, o, n, i) : new t(e, o, n, i);
      };
      t._pool = [];
      t._gid = 1;
      return t;
    }();
    o.Handler = n;
    cc._RF.pop();
  }, {}],
  HashMap: [function (t, e, o) {
    cc._RF.push(e, "c5683xzu09P04/rmW8wbPze", "HashMap");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = function () {
      function t(t) {
        this._data = {};
        t && (this._data = t);
      }
      t.prototype.get = function (t) {
        return this._data[t] || [];
      };
      t.prototype.add = function (t, e) {
        this._data[t] || (this._data[t] = []);
        this._data[t].push(e);
      };
      t.prototype.set = function (t, e) {
        this._data[t] = e;
      };
      Object.defineProperty(t.prototype, "keys", {
        get: function () {
          return Object.keys(this._data);
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.del = function (t) {
        delete this._data[t];
      };
      t.prototype.clear = function () {
        this._data = {};
      };
      return t;
    }();
    o.default = n;
    cc._RF.pop();
  }, {}],
  Helper: [function (t, e, o) {
    cc._RF.push(e, "fa96b3P7PlCvLR5kb5g41Q2", "Helper");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      },
      s = this && this.__values || function (t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          o = e && t[e],
          n = 0;
        if (o) {
          return o.call(t);
        }
        if (t && "number" == typeof t.length) {
          return {
            next: function () {
              t && n >= t.length && (t = 0);
              return {
                value: t && t[n++],
                done: !t
              };
            }
          };
        }
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = function (t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this;
      }
      i(e, t);
      e.prototype.timeFormat = function (t, e) {
        if (0 === e) {
          e = !1;
        }
        var o = Math.floor(t / 60),
          n = t % 60;
        return e ? Math.floor(o / 60).toString().padStart(2, "0") + ":" + (o % 60).toString().padStart(2, "0") + ":" + n.toString().padStart(2, "0") : o.toString().padStart(2, "0") + ":" + n.toString().padStart(2, "0");
      };
      e.prototype.getContent = function (t, e) {
        if (e && t) {
          for (var o in e) t = t.replace("{{ " + o + " }}", e[o].toString());
        }
        return t;
      };
      e.prototype.verbatim = function (t) {
        return r(this, function (e) {
          switch (e.label) {
            case 0:
              {
                return t.hasOwnProperty("length") ? [5, s(t)] : [2];
              }
            case 1:
              {
                e.sent();
                return [2];
              }
          }
        });
      };
      e.prototype.labelVerbatim = function (t, e, o) {
        var n = this;
        if (0 === o) {
          o = .05;
        }
        var i = this.verbatim(e);
        t.string = "";
        return new Promise(function (r) {
          n.schedule(function () {
            var e = i.next();
            e.done ? r() : t.string += e.value;
          }, o, e.length);
        });
      };
      e.prototype.isNormalScreen = function () {
        return cc.winSize.height / cc.winSize.width < 1.78;
      };
      return e;
    }(cc.Component);
    o.default = new a();
    cc._RF.pop();
  }, {}],
  HttpRequest: [function (t, e, o) {
    cc._RF.push(e, "49b29pyN75LeJmjTJ+3L0nc", "HttpRequest");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.HttpRequest = 0;
    var n = t("../../Controller/MtopMgr"),
      i = t("../../Network/NetApi"),
      r = t("../../Network/NetBase"),
      s = t("../Tools/BaseInfo"),
      a = function () {
        function t() {}
        Object.defineProperty(t, "sBaseURL", {
          get: function () {
            var t = (window.location.protocol || "http:") + "//" + this._serverUrl;
            cc.sys.isNative ? t = "http://" + this._serverUrl : window.wx && (t = "https://" + this._serverUrl);
            return t;
          },
          enumerable: !1,
          configurable: !0
        });
        t.setServerUrl = function (t) {
          this._serverUrl = t;
        };
        t.get = function (t, e, o, n) {
          0 === o && (o = {
            "Content-Type": "application/json"
          });
          0 === n && (n = 5);
          return this._doHttp(this._combURL(t, e), {}, o, "GET", n);
        };
        t.post = function (e, o, n, i, r) {
          0 === i && (i = {
            "Content-Type": "application/json"
          });
          0 === r && (r = 5);
          return t.isWeb ? this._doHttp(this._combURL(e, o), n, i, "POST", r) : this._doMtop(e, n);
        };
        t._doMtop = function (t, e) {
          var o = i.NetApi.Apis,
            r = "";
          for (var a in o) if (t == o[a]) {
            r = a;
          }
          return n.default.inst.dispatch(s.default.BIZ_SCENE, r, e);
        };
        t._doHttp = function (t, e, o, n) {
          var i = this;
          t = r.NetBase.sBaseURL + t;
          return new Promise(function (r, s) {
            var a = new XMLHttpRequest();
            a.responseType = "text";
            a.onreadystatechange = function () {
              cc.log("HttpMgr, onReadyStateChange, readyState=" + a.readyState + ", status=" + a.status);
              if (4 === a.readyState && a.status >= 200 && a.status < 300) {
                cc.log("HttpMgr, onReadyStateChange, responseText=" + a.responseText);
                var t = {};
                try {
                  t = JSON.parse(a.responseText);
                } catch (e) {
                  cc.error(e);
                }
                i._removeXhrEvent(a);
                r(t);
              }
            };
            a.ontimeout = function () {
              cc.warn(t + ", request ontimeout");
              i._removeXhrEvent(a);
              s();
            };
            a.onerror = function () {
              cc.warn(t + ", request onerror");
              i._removeXhrEvent(a);
              s();
            };
            a.onabort = function () {
              cc.warn(t + ", request onabort");
              i._removeXhrEvent(a);
              s();
            };
            cc.log("HttpMgr, doHttp url=" + t + ", method=" + n);
            a.open(n, t, !0);
            o && i._setHttpHeaders(a, o);
            e && "object" == typeof e ? a.send(JSON.stringify(e)) : a.send();
          });
        };
        t._combURL = function (t, e) {
          t += "?";
          Object.keys(e).forEach(function (o) {
            t += o + "=" + e[o] + "&";
          });
          return t.slice(0, t.length - 1);
        };
        t._combData = function (t) {
          var e = "";
          Object.keys(t).forEach(function (o) {
            e += o + "=" + t[o] + "&";
          });
          return e.slice(0, e.length - 1);
        };
        t._removeXhrEvent = function (t) {
          t.ontimeout = null;
          t.onerror = null;
          t.onabort = null;
          t.onreadystatechange = null;
        };
        t._setHttpHeaders = function (t, e) {
          for (var o in e) t.setRequestHeader(o, e[o]);
        };
        t.isWeb = !1;
        return t;
      }();
    o.HttpRequest = a;
    cc._RF.pop();
  }, {
    "../../Controller/MtopMgr": "MtopMgr",
    "../../Network/NetApi": "NetApi",
    "../../Network/NetBase": "NetBase",
    "../Tools/BaseInfo": "BaseInfo"
  }],
  ICallbackOwner: [function (t, e, o) {
    cc._RF.push(e, "0ed0fxZQntJ4I9INCD5TJIf", "ICallbackOwner");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    cc._RF.pop();
  }, {}],
  LTrackerMgr: [function (t, e, o) {
    cc._RF.push(e, "b7b91eL6NlOOL6Og+4YLkoP", "LTrackerMgr");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.EventName = 0;
    var n = t("../Network/Net"),
      i = function () {
        function t() {
          this._spm = "a2ogi.bx903203";
          this._sdk = null;
        }
        Object.defineProperty(t, "inst", {
          get: function () {
            this._inst || (this._inst = new t());
            return this._inst;
          },
          enumerable: !1,
          configurable: !0
        });
        t.prototype.init = function () {
          this._sdk = window.LTracker;
        };
        t.prototype.expo = function (t, e) {
          0 === e && (e = {});
          this._sdk ? (t = this._spm + "." + t, this._sdk.expo(t, "up", e)) : console.error("NO LTracker");
        };
        t.prototype.click = function (t, e) {
          0 === e && (e = {});
          console.log(e, "\u57cb\u70b9\u4fe1\u606f");
          this._sdk ? (t = this._spm + "." + t, this._sdk.click(t, e)) : console.error("NO LTracker");
        };
        t.prototype.logEvent = function (t, e) {
          console.log("\u57cb\u70b9TGA", t, e);
          t ? n.Net.reportLog([{
            name: t,
            obj: e
          }]) : n.Net.reportLog([{
            obj: e
          }]);
        };
        return t;
      }();
    o.default = i;
    (function (t) {
      t.active = "active";
      t.btn_click = "btn_click";
      t.page_view = "page_view";
    })(o.EventName || (o.EventName = {}));
    cc._RF.pop();
  }, {
    "../Network/Net": "Net"
  }],
  LifeShowController: [function (t, e, o) {
    cc._RF.push(e, "de64cWJqgdLvIQapb8aq5o4", "LifeShowController");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../../../Controller/TableMgr"),
      a = t("../../../Define/EventId"),
      c = t("../../../Define/UIDefs"),
      l = t("../../../Framework/Event/EventMgr"),
      u = t("../../../Framework/UI/UIFacade"),
      p = t("../../../Framework/UI/UIMgr"),
      f = t("../../../Framework/Utils/Utils"),
      h = t("./LifeSystem"),
      d = cc._decorator,
      _ = d.ccclass,
      y = d.property,
      v = d.menu,
      m = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.labelLifeLeft = null;
          e.labelTimer = null;
          e.nodeMore = null;
          e._nextRefreshTime = null;
          e._timer = 0;
          return e;
        }
        i(e, t);
        e.prototype.onLoad = function () {
          l.EVENT.on(a.EventId.ON_UPDATE_STAMINA, this.initTick, this);
        };
        e.prototype.onDestroy = function () {
          l.EVENT.off(a.EventId.ON_UPDATE_STAMINA, this.initTick, this);
        };
        e.prototype.start = function () {
          this.initTick();
        };
        e.prototype.initTick = function () {
          this.unscheduleAllCallbacks();
          h.default.updateEnergy();
          var t = h.default.getEnergy(),
            e = Number(s.TABLE.getGlobalById("G005").sGlobalData);
          this.labelLifeLeft.string = t.num.toString() + "/" + e;
          var o = f.default.getServerTime() - t.lastUpdateTime,
            n = 1e3 * Number(s.TABLE.getGlobalById("G006").sGlobalData),
            i = Math.ceil(o / n);
          this._nextRefreshTime = t.lastUpdateTime + i * n;
          this.unschedule(this.refreshTimeStr);
          this.schedule(this.refreshTimeStr, 1);
          this.refreshTimeStr();
        };
        e.prototype.refreshTimeStr = function () {
          var t = h.default.isFullEndTime - f.default.getServerTime();
          h.default.isFullEndTime > f.default.getServerTime() ? (this.nodeMore.active = !0, h.default.isFull = !0) : (h.default.isFull = !1, this.nodeMore.active = !1);
          h.default.isFull ? (this.labelTimer.string = f.default.getFormatingTimeStr(t), this.labelLifeLeft.node.active = !1) : (this.labelTimer.string = "\u65e0\u9650\u6311\u6218\u6b21\u6570", this.labelLifeLeft.node.active = !0);
          t < 0 && this.initTick();
        };
        e.prototype.onClick = function () {
          h.default.isFull ? u.UIFacade.showToast("\u5f53\u524d\u662f\u65e0\u9650\u6311\u6218\u65f6\u95f4\uff0c\u5feb\u53bb\u6311\u6218\u5427!") : p.default.inst.open(c.UIType.MorePower);
        };
        r([y(cc.Label)], e.prototype, "labelLifeLeft", 0);
        r([y(cc.Label)], e.prototype, "labelTimer", 0);
        r([y(cc.Node)], e.prototype, "nodeMore", 0);
        return r([_, v("\u997f\u4e86\u4e48/TiliShowController")], e);
      }(cc.Component);
    o.default = m;
    cc._RF.pop();
  }, {
    "../../../Controller/TableMgr": "TableMgr",
    "../../../Define/EventId": "EventId",
    "../../../Define/UIDefs": "UIDefs",
    "../../../Framework/Event/EventMgr": "EventMgr",
    "../../../Framework/UI/UIFacade": "UIFacade",
    "../../../Framework/UI/UIMgr": "UIMgr",
    "../../../Framework/Utils/Utils": "Utils",
    "./LifeSystem": "LifeSystem"
  }],
  LifeSystem: [function (t, e, o) {
    cc._RF.push(e, "7de95z783pCkIU5z7OIqfAU", "LifeSystem");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      });
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var r = t("../../../Controller/TableMgr"),
      s = t("../../../Define/EventId"),
      a = t("../../../Framework/Event/EventMgr"),
      c = t("../../../Framework/Utils/Utils"),
      l = function (t) {
        function e() {
          var e = t.call(this) || this;
          e._energy = null;
          e._isFull = !1;
          e._isFullEndTime = 0;
          e._infiniteEnergyAdNum = 0;
          return e;
        }
        i(e, t);
        e.prototype.initialize = function (t, e) {
          0 === e && (e = 0);
          console.log("Life system update........", t);
          this._energy = t;
          this.isFullEndTime = t.infiniteEndTime;
          c.default.getServerTime() > t.infiniteEndTime ? this._isFull = !1 : this._isFull = !0;
          e && (this._infiniteEnergyAdNum = e);
          this.updateEnergy();
          a.EVENT.emit(s.EventId.ON_UPDATE_STAMINA);
        };
        e.prototype.lifeIsEmpty = function () {
          return 0 === this._energy.num;
        };
        e.prototype.updateEnergy = function () {
          var t = this._energy.lastUpdateTime,
            e = this._energy.num,
            o = c.default.getServerTime() - t,
            n = Number(r.TABLE.getGlobalById("G005").sGlobalData),
            i = 1e3 * Number(r.TABLE.getGlobalById("G006").sGlobalData);
          if (o > i && e < n) {
            var s = Math.floor(o / i);
            this._energy.num = Math.min(n, this._energy.num + s);
            this._energy.lastUpdateTime += s * i;
          }
        };
        e.prototype.getEnergy = function () {
          return this._energy;
        };
        e.prototype.getEnergyNum = function () {
          return this._energy.num;
        };
        Object.defineProperty(e.prototype, "isFull", {
          get: function () {
            return this._isFull;
          },
          set: function (t) {
            this._isFull = t;
          },
          enumerable: !1,
          configurable: !0
        });
        Object.defineProperty(e.prototype, "isFullEndTime", {
          get: function () {
            return this._isFullEndTime;
          },
          set: function (t) {
            this._isFullEndTime = t;
          },
          enumerable: !1,
          configurable: !0
        });
        Object.defineProperty(e.prototype, "infiniteEnergyAdNum", {
          get: function () {
            return this._infiniteEnergyAdNum || 0;
          },
          set: function (t) {
            this._infiniteEnergyAdNum = t;
          },
          enumerable: !1,
          configurable: !0
        });
        return e;
      }(cc.Component);
    o.default = new l();
    cc._RF.pop();
  }, {
    "../../../Controller/TableMgr": "TableMgr",
    "../../../Define/EventId": "EventId",
    "../../../Framework/Event/EventMgr": "EventMgr",
    "../../../Framework/Utils/Utils": "Utils"
  }],
  ListViewOptimizer: [function (t, e, o) {
    cc._RF.push(e, "32d9e6Poj1Ak48G6b7J8+v0", "ListViewOptimizer");
    var n,
      i,
      r = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      s = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    (function (t) {
      t[t.Top = 0] = "Top";
      t[t.Center = 1] = "Center";
      t[t.Bottom = 2] = "Bottom";
    })(i || (i = {}));
    var a = cc._decorator,
      c = a.ccclass,
      l = a.property,
      u = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.itemTemplate = null;
          e.arrow = null;
          e.spacing = 0;
          e.initNum = 1;
          e.initIdx = 1;
          e.cacheNum = 2;
          e.initType = i.Top;
          e.data = [];
          e.rowNum = 0;
          e.isVertical = !0;
          e.itemNum = 0;
          e.canUpdateFrame = !0;
          e.items = [];
          e.topIdx = 0;
          e.downIdx = 0;
          e.isInit = !1;
          e.lastContentPos = 0;
          e.isRefresh = !1;
          e.arrowNode = null;
          e.nodeDesc = "listview";
          e.itemsPos = [];
          e.jumpFinished = !1;
          return e;
        }
        r(e, t);
        Object.defineProperty(e.prototype, "scrollView", {
          get: function () {
            return this.listview;
          },
          enumerable: !1,
          configurable: !0
        });
        e.prototype.onLoad = function () {
          this.listview = this.node.getComponent(cc.ScrollView);
          this.content = this.listview.content;
          this.content.on(cc.Node.EventType.POSITION_CHANGED, this._updateContentView.bind(this));
          this.isVertical = this.listview.vertical;
          this.itemNum = this.initNum + this.cacheNum;
          this.isVertical || (this.content.anchorX = 0, this.content.anchorY = .5, this.content.x = -this.listview.node.width / 2, this.content.y = 0);
        };
        e.prototype.setData = function (t, e, o) {
          if (0 === o) {
            o = !1;
          }
          var n = this.items.length - t.length;
          n > 0 && this.items.splice(t.length, n);
          this.isRefresh = this.items.length > 0;
          this.isInit = !1;
          this.canUpdateFrame = !0;
          this.itemNum = Math.min(t.length, this.initNum + this.cacheNum);
          this.isInit = this.initialize(t, e, 0 == this.items.length || o);
          this._createArrow();
        };
        e.prototype._createArrow = function () {
          var t = this.listview.content.width,
            e = this.listview.node.width,
            o = -90;
          this.isVertical && (t = this.listview.content.height, e = this.listview.node.height, o = 0);
          this.arrowNode = this.listview.node.getChildByName("_arrow_");
          if (!(!this.arrow || t <= e || this.arrowNode)) {
            this.arrowNode = cc.instantiate(this.arrow);
            this.arrowNode.parent = this.listview.node;
            this.arrowNode.angle = o;
            this.arrowNode.name = "_arrow_";
            var n = cc.v2(this.listview.node.width - this.arrowNode.height / 2 - 20, 0);
            this.isVertical && (n = cc.v2(0, -this.listview.node.height / 2 + this.arrowNode.height / 2 + 20));
            this.arrowNode.setPosition(n);
          }
        };
        e.prototype.setArrowPosition = function (t) {
          if (this.arrowNode) {
            this.arrowNode.setPosition(t);
          }
        };
        e.prototype.hideArrow = function () {
          if (this.arrowNode) {
            this.arrowNode.active = !1;
          }
        };
        e.prototype.showArrow = function () {
          if (this.arrowNode) {
            this.arrowNode.active = !0;
          }
        };
        e.prototype.initialize = function (t, e, o) {
          if (!(e && t && 0 !== t.length && this.itemTemplate && this.listview)) {
            t && 0 === t.length && this.content.removeAllChildren();
            cc.log("\u521d\u59cb\u5316\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u6240\u6709\u5fc5\u8981\u53c2\u6570");
            return !1;
          }
          var n = Math.min(this.initIdx + this.itemNum - 1, t.length);
          if (!this.isRefresh && this.initIdx > n) {
            cc.log("\u521d\u59cb\u5316\u4f4d\u7f6e\u9519\u8bef " + this.initIdx);
            return !1;
          }
          this.data = t;
          this.rowNum = t.length;
          this.itemUpdateFunc = e;
          this.content.removeAllChildren();
          this.content.getComponent(cc.Layout) && this.content.removeComponent(cc.Layout);
          var i = 0,
            r = 0,
            s = this.initIdx;
          if (this.initIdx + this.itemNum > this.data.length) {
            this.initIdx = this.data.length - this.itemNum + 1;
          }
          var a = this.initIdx,
            c = n;
          this.isRefresh && (c = Math.min(this.downIdx + 1, this.rowNum), a = (c = Math.max(this.itemNum, c)) - this.itemNum + 1);
          this.itemsPos = [];
          var l = 1;
          if (this.isVertical) {
            l = -1;
          }
          for (var u = 0; u < t.length; u++) {
            var p = this.items[r];
            p || (this.items.length < this.itemNum ? (p = cc.instantiate(this.itemTemplate), this.items.push(p)) : p = this.items[this.items.length - 1]);
            this.itemUpdateFunc(u, p, this.data[u]);
            var f = this.isVertical ? p.height : p.width;
            i += f + this.spacing;
            this.itemsPos.push(l * (i - f));
            if (Number(u) + 1 >= a && Number(u) + 1 <= c) {
              this.content.addChild(p);
              var h = 0,
                d = 0;
              this.isVertical ? (d = f / 2 - i, h = this.spacing + p.width / 2 - this.content.width / 2) : (h = i - f / 2, d = this.spacing + p.height / 2 - this.content.height / 2);
              p.x = h;
              p.y = d;
              r++;
            }
          }
          this.itemUpdateFunc(c - 1, this.items[this.items.length - 1], this.data[c - 1]);
          i += this.spacing;
          this.topIdx = a - 1;
          this.downIdx = c - 1;
          this.isVertical ? this.content.height = i : this.content.width = i;
          o && this.jumpTo(s - 1);
          return !0;
        };
        e.prototype.getPositionInView = function (t) {
          var e = t.parent.convertToWorldSpaceAR(t.position);
          return this.listview.node.convertToNodeSpaceAR(e);
        };
        e.prototype.getItem = function (t) {
          for (var e = this.content.childrenCount, o = 0; o < e; ++o) {
            var n = this.content.children[o],
              i = n.getPosition();
            i = n.parent.convertToWorldSpaceAR(i);
            i = cc.director.getScene().convertToNodeSpaceAR(i);
            if (cc.rect(i.x - n.width / 2, i.y - n.height / 2, n.width, n.height).contains(t)) {
              return n;
            }
          }
          return null;
        };
        e.prototype.getItemsHeight = function () {
          for (var t = 0, e = 0; e < this.items.length; e++) {
            var o = this.items[e],
              n = this.isVertical ? o.height : o.width;
            t += n += this.spacing;
          }
          return t;
        };
        e.prototype.getItemsLength = function (t) {
          for (var e = 0, o = 0; o < t; o++) {
            var n = this.items[o],
              i = this.isVertical ? n.height : n.width;
            e += i += this.spacing;
          }
          var r = this.items[t - 1];
          return e - (this.isVertical ? r.height : r.width) / 2 - this.spacing;
        };
        e.prototype._updateContentView = function (t) {
          if (this.isInit && this.canUpdateFrame) {
            var e = this.content.x;
            this.isVertical && (e = this.content.y);
            this.canUpdateFrame = !1;
            var o = e > this.lastContentPos;
            if (this.isVertical) {
              o = e <= this.lastContentPos;
            }
            for (var n = this.getItemsHeight(), i = n / 2, r = 0; r < this.items.length; r++) {
              var s = this.items[r],
                a = this.getPositionInView(s);
              if (o) {
                if (this.isVertical && a.y < -i && (t || this.topIdx - 1 >= 0) || !this.isVertical && a.x > i && (t || this.topIdx - 1 >= 0)) {
                  this.topIdx--;
                  var c = this.topIdx,
                    l = 0;
                  this.topIdx < 0 && (c = this.rowNum - 1, this.topIdx = 0, l = -1);
                  this.downIdx = this.topIdx + this.items.length - 1 + l;
                  var u = this.isVertical ? s.height : s.width;
                  this.itemUpdateFunc(c, s, this.data[c]);
                  var p = s.width,
                    f = -1,
                    h = "x";
                  this.isVertical && (p = s.height, f = 1, h = "y");
                  s[h] = s[h] + f * (n + (p - u) / 2);
                }
              } else {
                if (this.isVertical && a.y > i && (t || this.downIdx + 1 <= this.rowNum - 1) || !this.isVertical && a.x < -i && (t || this.downIdx + 1 <= this.rowNum - 1)) {
                  this.downIdx++;
                  c = this.downIdx;
                  l = 0;
                  this.downIdx > this.rowNum - 1 && (this.downIdx = this.rowNum - 1, c = 0, l = 1);
                  this.topIdx = this.downIdx - this.items.length + 1 + l;
                  this.isVertical ? u = s.height : u = s.width;
                  this.itemUpdateFunc(c, s, this.data[c]);
                  p = s.width;
                  f = 1;
                  h = "x";
                  this.isVertical && (p = s.height, f = -1, h = "y");
                  s[h] = s[h] + f * (n + (p - u) / 2);
                }
              }
            }
            this.isVertical ? this.lastContentPos = this.listview.content.y : this.lastContentPos = this.listview.content.x;
            this.canUpdateFrame = !0;
            this.showArrow();
            (this.isVertical && this.lastContentPos + this.listview.node.height / 2 >= this.listview.content.height || !this.isVertical && Math.abs(this.lastContentPos) - this.listview.node.width / 2 >= this.listview.content.width) && this.hideArrow();
          }
        };
        e.prototype.scrollTo = function (t, e) {
          if (0 === e) {
            e = .1;
          }
          var o = this.itemsPos[t],
            n = 0,
            i = 0;
          this.isVertical ? i = Math.abs(o) : n = o;
          this.listview.scrollToOffset(cc.v2(n, i), e);
        };
        e.prototype._getDownIdxs = function (t) {
          var e = this.listview.node.width;
          if (this.isVertical) {
            e = this.listview.node.height;
          }
          for (var o = 0, n = 0, i = 1; i <= t + 1; i++) {
            var r = Math.abs(this.itemsPos[i]);
            1 == i ? n += (r - o - this.spacing) / 2 + this.spacing : n += r - o;
          }
          if (n < e / 2) {
            return Math.min(this.data.length - 1, this.itemNum - 1);
          }
          o = Math.abs(this.itemsPos[t]);
          var s = 0,
            a = 0;
          for (i = t + 1; i < this.itemsPos.length; i++) if (a++, r = Math.abs(this.itemsPos[i]), 1 == a ? s += (r - o - this.spacing) / 2 + this.spacing : s += r - o, o = r, s >= e / 2) {
            return i - 1;
          }
          return this.data.length - 1;
        };
        e.prototype.jumpTo = function (t) {
          var e = this;
          this.jumpFinished = !1;
          this.listview.stopAutoScroll();
          this.canUpdateFrame = !1;
          if (this.initType == i.Bottom) {
            this.downIdx = Math.min(t, this.data.length - 1);
            (o = this.downIdx - this.items.length + 1) < 0 && (this.downIdx += Math.abs(o), o = 0);
            this.topIdx = o;
          } else {
            if (this.initType == i.Center) {
              var o;
              this.downIdx = this._getDownIdxs(t);
              (o = this.downIdx - this.items.length + 1) < 0 && (this.downIdx += Math.abs(o), o = 0);
              this.topIdx = o;
            } else {
              if (this.initType == i.Top) {
                this.downIdx = Math.min(t + this.items.length - 1, this.data.length - 1);
                this.topIdx = this.downIdx - this.items.length + 1;
              }
            }
          }
          for (var n = 0; n < this.downIdx - this.topIdx + 1; n++) {
            var r = this.items[n],
              s = this.topIdx + n;
            this.itemUpdateFunc(s, r, this.data[s]);
            var a = r.getContentSize(),
              c = "x",
              l = a.width / 2;
            this.isVertical && (c = "y", l = -a.height / 2);
            r[c] = this.itemsPos[s] + l;
          }
          var u = 0,
            p = 0,
            f = this.itemsPos[this.topIdx];
          if (this.isVertical) {
            p = Math.abs(f);
            var h = this.listview.node.height,
              d = Math.max(this.listview.content.height, h) - h / 2;
            if (this.initType == i.Bottom) {
              if (0 == this.topIdx) {
                p = this.listview.node.height / 2;
              } else {
                var _ = this.getItemsHeight();
                p = p + _ - this.listview.node.height / 2;
              }
            } else {
              this.initType == i.Center ? (_ = this.getItemsLength(t - this.topIdx + 1), p += _, p = Math.max(p, this.listview.node.height / 2)) : this.initType == i.Top && (p = this.itemsPos[t] + this.listview.node.height / 2);
            }
            p = Math.min(d, p);
          } else {
            u = f;
            var y = this.listview.node.width,
              v = -(Math.max(this.listview.content.width, y) - y / 2);
            this.initType == i.Bottom ? 0 == this.topIdx ? u = this.listview.node.width / 2 : (_ = this.getItemsHeight(), u = u + _ - this.listview.node.width / 2) : this.initType == i.Center ? (_ = this.getItemsLength(t - this.topIdx + 1), u += _, u = Math.max(u, this.listview.node.width / 2)) : this.initType == i.Top && (u = this.itemsPos[t] + this.listview.node.width / 2);
            u = Math.max(v, -u);
          }
          this.scheduleOnce(function () {
            e.listview.setContentPosition(cc.v2(u, p));
            e.canUpdateFrame = !0;
            e.jumpFinished = !0;
          });
        };
        e.prototype.jumpToTop = function () {
          this.jumpTo(0);
        };
        e.prototype.jumpToBottom = function () {
          this.jumpTo(this.rowNum - 1);
        };
        e.prototype.isJumpFinished = function () {
          return this.jumpFinished;
        };
        s([l(cc.Prefab)], e.prototype, "itemTemplate", 0);
        s([l(cc.Prefab)], e.prototype, "arrow", 0);
        s([l], e.prototype, "spacing", 0);
        s([l], e.prototype, "initNum", 0);
        s([l], e.prototype, "initIdx", 0);
        s([l], e.prototype, "cacheNum", 0);
        s([l({
          type: cc.Enum(i)
        })], e.prototype, "initType", 0);
        return s([c], e);
      }(cc.Component);
    o.default = u;
    cc._RF.pop();
  }, {}],
  Loading: [function (t, e, o) {
    cc._RF.push(e, "8e60frIN1lH0bfXqlrFv2FQ", "Loading");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../../Controller/LTrackerMgr"),
      a = t("../../Define/EventId"),
      c = t("../../Framework/Event/EventMgr"),
      l = t("../../Framework/Platform/Platform"),
      u = t("../../Framework/Tools/BaseInfo"),
      p = t("../../Framework/UIBase"),
      f = t("../../Model/PlayerModel"),
      h = cc._decorator,
      d = h.ccclass,
      _ = h.property,
      y = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.loadingBar = null;
          e.lblProgress = null;
          return e;
        }
        i(e, t);
        e.prototype.start = function () {
          this.lblProgress.string = "";
          this.loadingBar.progress = 0;
          var t = !0,
            e = f.default.inst._isNew ? "regist" : "login";
          l.Platform.getUrlInfo(u.default.ENTRY_TASK_KEY) == u.default.ENTRY_TASK_VALUE && (t = !1);
          s.default.inst.expo("cx155891", {
            stype: e,
            sinvite: t
          });
          s.default.inst.logEvent(s.EventName.page_view, {
            sname: "LoadingExp"
          });
        };
        e.prototype.onEnable = function () {
          c.EVENT.on(a.EventId.ON_UPDATE_LOADING_PROGRESS, this.onUpdateProgress, this);
        };
        e.prototype.onDisable = function () {
          c.EVENT.off(a.EventId.ON_UPDATE_LOADING_PROGRESS, this.onUpdateProgress, this);
        };
        e.prototype.onUpdateProgress = function (t, e) {
          this.loadingBar.progress = t / e;
          this.lblProgress.string = Math.floor(t / e * 100) + "%";
        };
        r([_(cc.ProgressBar)], e.prototype, "loadingBar", 0);
        r([_(cc.Label)], e.prototype, "lblProgress", 0);
        return r([d], e);
      }(p.default);
    o.default = y;
    cc._RF.pop();
  }, {
    "../../Controller/LTrackerMgr": "LTrackerMgr",
    "../../Define/EventId": "EventId",
    "../../Framework/Event/EventMgr": "EventMgr",
    "../../Framework/Platform/Platform": "Platform",
    "../../Framework/Tools/BaseInfo": "BaseInfo",
    "../../Framework/UIBase": "UIBase",
    "../../Model/PlayerModel": "PlayerModel"
  }],
  LocalKey: [function (t, e, o) {
    cc._RF.push(e, "c1ba8+5yQRAmrGXr1KLNCy9", "LocalKey");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.LocalKey = 0;
    var n = function () {
      function t() {}
      t.SoundVolum = "LocalKey.SoundVolum";
      t.TestLocalAccount = "LocalKey.TestLocalAccount";
      t.GuideStep = "LocalKey.GuideStep";
      t.AudioVolumeMusic = "LocalKey.AudioVolumeMusic";
      t.AudioVolumeMusicMute = "LocalKey.AudioVolumeMute";
      t.AudioVolumeEffect = "LocalKey.AudioVolumeEffect";
      t.AudioVolumeEffectMute = "LocalKey.AudioVolumeEffectMute";
      return t;
    }();
    o.LocalKey = n;
    cc._RF.pop();
  }, {}],
  LocalStorageMgr: [function (t, e, o) {
    cc._RF.push(e, "04b82MsYBBMHqMcStr1U61V", "LocalStorageMgr");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.LocalStorageMgr = 0;
    var n = function () {
      function t() {}
      t.setHashID = function (e) {
        t.hashID = e;
        t.setItem("hashID", e, !0);
      };
      t.getHashID = function () {
        return t.getItem("hashID", !0);
      };
      t.setItem = function (e, o, n) {
        0 === n && (n = !1);
        n ? cc.sys.localStorage.setItem(e, o) : cc.sys.localStorage.setItem(t.hashID + "_" + e, o);
      };
      t.getItem = function (e, o) {
        0 === o && (o = !1);
        return o ? cc.sys.localStorage.getItem(e) : cc.sys.localStorage.getItem(t.hashID + "_" + e);
      };
      t.removeItem = function (e, o) {
        0 === o && (o = !1);
        o ? cc.sys.localStorage.removeItem(e) : cc.sys.localStorage.removeItem(t.hashID + "_" + e);
      };
      t.clearAll = function () {
        cc.sys.localStorage.clear();
      };
      return t;
    }();
    o.LocalStorageMgr = n;
    cc._RF.pop();
  }, {}],
  LogUtil: [function (t, e, o) {
    cc._RF.push(e, "ecccd1uvWBKsaPUKosdi9y1", "LogUtil");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.LogUtil = 0;
    var n = function () {
      function t() {}
      t.logInfo = function (t) {
        for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
        "string" == typeof t ? (t = "%c" + t, cc.log(t, "color:#0f0;")) : cc.log(t, e);
      };
      t.logWarn = function (t) {
        for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
        "string" == typeof t ? (t = "%c" + t, cc.log(t, "color:#FFD700;")) : cc.log(t, e);
      };
      t.logError = function (t) {
        for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
        "string" == typeof t ? (t = "%c" + t, cc.log(t, "color:#FF3030;")) : cc.log(t, e);
      };
      return t;
    }();
    o.LogUtil = n;
    cc._RF.pop();
  }, {}],
  MD5: [function (t, e, o) {
    cc._RF.push(e, "b4b35+TNQVGqItiIosa/WeB", "MD5");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = function () {
      function t() {
        this.hexcase = 0;
        this.b64pad = "";
      }
      t.prototype.hex_md5 = function (t) {
        return this.rstr2hex(this.rstr_md5(this.str2rstr_utf8(t)));
      };
      t.prototype.b64_md5 = function (t) {
        return this.rstr2b64(this.rstr_md5(this.str2rstr_utf8(t)));
      };
      t.prototype.any_md5 = function (t, e) {
        return this.rstr2any(this.rstr_md5(this.str2rstr_utf8(t)), e);
      };
      t.prototype.hex_hmac_md5 = function (t, e) {
        return this.rstr2hex(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)));
      };
      t.prototype.b64_hmac_md5 = function (t, e) {
        return this.rstr2b64(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)));
      };
      t.prototype.any_hmac_md5 = function (t, e, o) {
        return this.rstr2any(this.rstr_hmac_md5(this.str2rstr_utf8(t), this.str2rstr_utf8(e)), o);
      };
      t.prototype.md5_vm_test = function () {
        return "900150983cd24fb0d6963f7d28e17f72" == this.hex_md5("abc").toLowerCase();
      };
      t.prototype.rstr_md5 = function (t) {
        return this.binl2rstr(this.binl_md5(this.rstr2binl(t), 8 * t.length));
      };
      t.prototype.rstr_hmac_md5 = function (t, e) {
        var o = this.rstr2binl(t);
        if (o.length > 16) {
          o = this.binl_md5(o, 8 * t.length);
        }
        for (var n = Array(16), i = Array(16), r = 0; r < 16; r++) {
          n[r] = 909522486 ^ o[r];
          i[r] = 1549556828 ^ o[r];
        }
        var s = this.binl_md5(n.concat(this.rstr2binl(e)), 512 + 8 * e.length);
        return this.binl2rstr(this.binl_md5(i.concat(s), 640));
      };
      t.prototype.rstr2hex = function (t) {
        try {
          this.hexcase;
        } catch (r) {
          this.hexcase = 0;
        }
        for (var e, o = this.hexcase ? "0123456789ABCDEF" : "0123456789abcdef", n = "", i = 0; i < t.length; i++) {
          e = t.charCodeAt(i);
          n += o.charAt(e >>> 4 & 15) + o.charAt(15 & e);
        }
        return n;
      };
      t.prototype.rstr2b64 = function (t) {
        try {
          this.b64pad;
        } catch (s) {
          this.b64pad = "";
        }
        for (var e = "", o = t.length, n = 0; n < o; n += 3) for (var i = t.charCodeAt(n) << 16 | (n + 1 < o ? t.charCodeAt(n + 1) << 8 : 0) | (n + 2 < o ? t.charCodeAt(n + 2) : 0), r = 0; r < 4; r++) 8 * n + 6 * r > 8 * t.length ? e += this.b64pad : e += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i >>> 6 * (3 - r) & 63);
        return e;
      };
      t.prototype.rstr2any = function (t, e) {
        var o,
          n,
          i,
          r,
          s,
          a = e.length,
          c = Array(Math.ceil(t.length / 2));
        for (o = 0; o < c.length; o++) c[o] = t.charCodeAt(2 * o) << 8 | t.charCodeAt(2 * o + 1);
        var l = Math.ceil(8 * t.length / (Math.log(e.length) / Math.log(2))),
          u = Array(l);
        for (n = 0; n < l; n++) {
          for (s = Array(), r = 0, o = 0; o < c.length; o++) {
            r = (r << 16) + c[o];
            r -= (i = Math.floor(r / a)) * a;
            (s.length > 0 || i > 0) && (s[s.length] = i);
          }
          u[n] = r;
          c = s;
        }
        var p = "";
        for (o = u.length - 1; o >= 0; o--) p += e.charAt(u[o]);
        return p;
      };
      t.prototype.str2rstr_utf8 = function (t) {
        for (var e, o, n = "", i = -1; ++i < t.length;) {
          e = t.charCodeAt(i);
          i + 1 < t.length ? o = t.charCodeAt(i + 1) : o = 0;
          55296 <= e && e <= 56319 && 56320 <= o && o <= 57343 && (e = 65536 + ((1023 & e) << 10) + (1023 & o), i++);
          e <= 127 ? n += String.fromCharCode(e) : e <= 2047 ? n += String.fromCharCode(192 | e >>> 6 & 31, 128 | 63 & e) : e <= 65535 ? n += String.fromCharCode(224 | e >>> 12 & 15, 128 | e >>> 6 & 63, 128 | 63 & e) : e <= 2097151 && (n += String.fromCharCode(240 | e >>> 18 & 7, 128 | e >>> 12 & 63, 128 | e >>> 6 & 63, 128 | 63 & e));
        }
        return n;
      };
      t.prototype.str2rstr_utf16le = function (t) {
        for (var e = "", o = 0; o < t.length; o++) e += String.fromCharCode(255 & t.charCodeAt(o), t.charCodeAt(o) >>> 8 & 255);
        return e;
      };
      t.prototype.str2rstr_utf16be = function (t) {
        for (var e = "", o = 0; o < t.length; o++) e += String.fromCharCode(t.charCodeAt(o) >>> 8 & 255, 255 & t.charCodeAt(o));
        return e;
      };
      t.prototype.rstr2binl = function (t) {
        for (var e = Array(t.length >> 2), o = 0; o < e.length; o++) e[o] = 0;
        for (o = 0; o < 8 * t.length; o += 8) e[o >> 5] |= (255 & t.charCodeAt(o / 8)) << o % 32;
        return e;
      };
      t.prototype.binl2rstr = function (t) {
        for (var e = "", o = 0; o < 32 * t.length; o += 8) e += String.fromCharCode(t[o >> 5] >>> o % 32 & 255);
        return e;
      };
      t.prototype.binl_md5 = function (t, e) {
        t[e >> 5] |= 128 << e % 32;
        t[14 + (e + 64 >>> 9 << 4)] = e;
        for (var o = 1732584193, n = -271733879, i = -1732584194, r = 271733878, s = 0; s < t.length; s += 16) {
          var a = o,
            c = n,
            l = i,
            u = r;
          o = this.md5_ff(o, n, i, r, t[s + 0], 7, -680876936);
          r = this.md5_ff(r, o, n, i, t[s + 1], 12, -389564586);
          i = this.md5_ff(i, r, o, n, t[s + 2], 17, 606105819);
          n = this.md5_ff(n, i, r, o, t[s + 3], 22, -1044525330);
          o = this.md5_ff(o, n, i, r, t[s + 4], 7, -176418897);
          r = this.md5_ff(r, o, n, i, t[s + 5], 12, 1200080426);
          i = this.md5_ff(i, r, o, n, t[s + 6], 17, -1473231341);
          n = this.md5_ff(n, i, r, o, t[s + 7], 22, -45705983);
          o = this.md5_ff(o, n, i, r, t[s + 8], 7, 1770035416);
          r = this.md5_ff(r, o, n, i, t[s + 9], 12, -1958414417);
          i = this.md5_ff(i, r, o, n, t[s + 10], 17, -42063);
          n = this.md5_ff(n, i, r, o, t[s + 11], 22, -1990404162);
          o = this.md5_ff(o, n, i, r, t[s + 12], 7, 1804603682);
          r = this.md5_ff(r, o, n, i, t[s + 13], 12, -40341101);
          i = this.md5_ff(i, r, o, n, t[s + 14], 17, -1502002290);
          n = this.md5_ff(n, i, r, o, t[s + 15], 22, 1236535329);
          o = this.md5_gg(o, n, i, r, t[s + 1], 5, -165796510);
          r = this.md5_gg(r, o, n, i, t[s + 6], 9, -1069501632);
          i = this.md5_gg(i, r, o, n, t[s + 11], 14, 643717713);
          n = this.md5_gg(n, i, r, o, t[s + 0], 20, -373897302);
          o = this.md5_gg(o, n, i, r, t[s + 5], 5, -701558691);
          r = this.md5_gg(r, o, n, i, t[s + 10], 9, 38016083);
          i = this.md5_gg(i, r, o, n, t[s + 15], 14, -660478335);
          n = this.md5_gg(n, i, r, o, t[s + 4], 20, -405537848);
          o = this.md5_gg(o, n, i, r, t[s + 9], 5, 568446438);
          r = this.md5_gg(r, o, n, i, t[s + 14], 9, -1019803690);
          i = this.md5_gg(i, r, o, n, t[s + 3], 14, -187363961);
          n = this.md5_gg(n, i, r, o, t[s + 8], 20, 1163531501);
          o = this.md5_gg(o, n, i, r, t[s + 13], 5, -1444681467);
          r = this.md5_gg(r, o, n, i, t[s + 2], 9, -51403784);
          i = this.md5_gg(i, r, o, n, t[s + 7], 14, 1735328473);
          n = this.md5_gg(n, i, r, o, t[s + 12], 20, -1926607734);
          o = this.md5_hh(o, n, i, r, t[s + 5], 4, -378558);
          r = this.md5_hh(r, o, n, i, t[s + 8], 11, -2022574463);
          i = this.md5_hh(i, r, o, n, t[s + 11], 16, 1839030562);
          n = this.md5_hh(n, i, r, o, t[s + 14], 23, -35309556);
          o = this.md5_hh(o, n, i, r, t[s + 1], 4, -1530992060);
          r = this.md5_hh(r, o, n, i, t[s + 4], 11, 1272893353);
          i = this.md5_hh(i, r, o, n, t[s + 7], 16, -155497632);
          n = this.md5_hh(n, i, r, o, t[s + 10], 23, -1094730640);
          o = this.md5_hh(o, n, i, r, t[s + 13], 4, 681279174);
          r = this.md5_hh(r, o, n, i, t[s + 0], 11, -358537222);
          i = this.md5_hh(i, r, o, n, t[s + 3], 16, -722521979);
          n = this.md5_hh(n, i, r, o, t[s + 6], 23, 76029189);
          o = this.md5_hh(o, n, i, r, t[s + 9], 4, -640364487);
          r = this.md5_hh(r, o, n, i, t[s + 12], 11, -421815835);
          i = this.md5_hh(i, r, o, n, t[s + 15], 16, 530742520);
          n = this.md5_hh(n, i, r, o, t[s + 2], 23, -995338651);
          o = this.md5_ii(o, n, i, r, t[s + 0], 6, -198630844);
          r = this.md5_ii(r, o, n, i, t[s + 7], 10, 1126891415);
          i = this.md5_ii(i, r, o, n, t[s + 14], 15, -1416354905);
          n = this.md5_ii(n, i, r, o, t[s + 5], 21, -57434055);
          o = this.md5_ii(o, n, i, r, t[s + 12], 6, 1700485571);
          r = this.md5_ii(r, o, n, i, t[s + 3], 10, -1894986606);
          i = this.md5_ii(i, r, o, n, t[s + 10], 15, -1051523);
          n = this.md5_ii(n, i, r, o, t[s + 1], 21, -2054922799);
          o = this.md5_ii(o, n, i, r, t[s + 8], 6, 1873313359);
          r = this.md5_ii(r, o, n, i, t[s + 15], 10, -30611744);
          i = this.md5_ii(i, r, o, n, t[s + 6], 15, -1560198380);
          n = this.md5_ii(n, i, r, o, t[s + 13], 21, 1309151649);
          o = this.md5_ii(o, n, i, r, t[s + 4], 6, -145523070);
          r = this.md5_ii(r, o, n, i, t[s + 11], 10, -1120210379);
          i = this.md5_ii(i, r, o, n, t[s + 2], 15, 718787259);
          n = this.md5_ii(n, i, r, o, t[s + 9], 21, -343485551);
          o = this.safe_add(o, a);
          n = this.safe_add(n, c);
          i = this.safe_add(i, l);
          r = this.safe_add(r, u);
        }
        return [o, n, i, r];
      };
      t.prototype.md5_cmn = function (t, e, o, n, i, r) {
        return this.safe_add(this.bit_rol(this.safe_add(this.safe_add(e, t), this.safe_add(n, r)), i), o);
      };
      t.prototype.md5_ff = function (t, e, o, n, i, r, s) {
        return this.md5_cmn(e & o | ~e & n, t, e, i, r, s);
      };
      t.prototype.md5_gg = function (t, e, o, n, i, r, s) {
        return this.md5_cmn(e & n | o & ~n, t, e, i, r, s);
      };
      t.prototype.md5_hh = function (t, e, o, n, i, r, s) {
        return this.md5_cmn(e ^ o ^ n, t, e, i, r, s);
      };
      t.prototype.md5_ii = function (t, e, o, n, i, r, s) {
        return this.md5_cmn(o ^ (e | ~n), t, e, i, r, s);
      };
      t.prototype.safe_add = function (t, e) {
        var o = (65535 & t) + (65535 & e);
        return (t >> 16) + (e >> 16) + (o >> 16) << 16 | 65535 & o;
      };
      t.prototype.bit_rol = function (t, e) {
        return t << e | t >>> 32 - e;
      };
      return t;
    }();
    o.default = n;
    cc._RF.pop();
  }, {}],
  Main: [function (t, e, o) {
    cc._RF.push(e, "7649dQyjaZLU71BlsLKPlgm", "Main");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      },
      s = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      a = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.Main = 0;
    var c,
      l = t("../../Controller/AfunRiskSDKController"),
      u = t("../../Controller/LTrackerMgr"),
      p = t("../../Controller/MtopMgr"),
      f = t("../../Controller/RankController"),
      h = t("../../Controller/WindVaneMgr"),
      d = t("../../Define/EventId"),
      _ = t("../../Define/UIDefs"),
      y = t("../../Framework/Event/EventMgr"),
      v = t("../../Framework/Platform/Platform"),
      m = t("../../Framework/Scene/SceneBase"),
      g = t("../../Framework/Tools/BaseInfo"),
      b = t("../../Framework/UI/UIFacade"),
      I = t("../../Framework/UI/UIMgr"),
      w = t("../../Framework/Utils/Utils"),
      T = t("../../Model/PlayerModel"),
      E = t("../../System/PicSystem"),
      S = t("../../System/PlayerSystem"),
      P = t("../UI/Game/FlyResMgr"),
      O = t("../UI/Power/LifeSystem"),
      C = cc._decorator,
      N = C.ccclass,
      M = C.property;
    (function (t) {
      t[t.Start = 0] = "Start";
      t[t.Replay = 1] = "Replay";
      t[t.Pass = 2] = "Pass";
    })(c || (c = {}));
    var R = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.btnSprite = null;
        e.btnSpriteFrames = [];
        e.leYuanCoinNode = null;
        e.labCoin = null;
        e.lblReset = null;
        e.nodeMore = null;
        e._btnState = null;
        return e;
      }
      i(e, t);
      e.prototype.onLoad = function () {
        return s(this, 0, 0, function () {
          return a(this, function () {
            return [2];
          });
        });
      };
      e.prototype.start = function () {
        E.default.initialize();
        this.initBtn();
        var t = T.default.inst.isNew ? "regist" : "login";
        u.default.inst.expo("cx155907", {
          stype: t
        });
        this.onRefreshCoin();
        this.preloadGameScene();
        u.default.inst.logEvent(u.EventName.page_view, {
          sname: "MainExp"
        });
      };
      e.prototype.onEnable = function () {
        y.EVENT.on(d.EventId.ON_PLAY_RESOURCE_FLY_ANI, this.playFlyAni, this);
        y.EVENT.on(d.EventId.ON_REFRESH_COIN, this.onRefreshCoin, this);
        y.EVENT.on(d.EventId.ON_FLY, this._gain, this);
        window.setExitBtn && window.setExitBtn();
        l.default.inst.report(l.AfunRiskSDKType.enterGame);
      };
      e.prototype.onDisable = function () {
        y.EVENT.off(d.EventId.ON_PLAY_RESOURCE_FLY_ANI, this.playFlyAni, this);
        y.EVENT.off(d.EventId.ON_REFRESH_COIN, this.onRefreshCoin, this);
        y.EVENT.off(d.EventId.ON_FLY, this._gain, this);
        window.clearBtn && window.clearBtn();
      };
      e.prototype.initBtn = function () {
        var t = T.default.inst.levelId;
        "1" == t ? (this._btnState = c.Start, this.btnSprite.spriteFrame = this.btnSpriteFrames[0], this.lblReset.node.active = !1) : "2" == t ? (this._btnState = c.Replay, this.btnSprite.spriteFrame = this.btnSpriteFrames[1], this.lblReset.node.active = !1) : (this._btnState = c.Pass, this.btnSprite.spriteFrame = this.btnSpriteFrames[2], this.lblReset.node.active = !0);
      };
      e.prototype.onClickStartBtn = function () {
        if (this._btnState == c.Pass) {
          I.default.inst.showToast("\u4eca\u65e5\u5df2\u6311\u6218\u6210\u529f\uff0c\u660e\u65e5\u518d\u6765\u5427");
          u.default.inst.click("cx155907.dx204411", {});
          return u.default.inst.logEvent(u.EventName.btn_click, {
            sname: "GameStartClick",
            starttype: "over"
          });
        }
        if (this._btnState == c.Replay) {
          u.default.inst.click("cx155907.dx204403", {});
          u.default.inst.logEvent(u.EventName.btn_click, {
            sname: "GameStartClick",
            starttype: "again"
          });
        } else {
          var t = T.default.inst.isNew ? "regist" : "login";
          u.default.inst.click("cx155907.dx204395", {
            stype: t
          });
          u.default.inst.logEvent(u.EventName.btn_click, {
            sname: "GameStartClick",
            starttype: "start"
          });
        }
        S.default.startGame();
      };
      e.prototype.onRank = function () {
        return s(this, 0, 0, function () {
          return a(this, function (t) {
            switch (t.label) {
              case 0:
                {
                  return [4, f.default.inst.getRankInfo()];
                }
              case 1:
                {
                  t.sent();
                  I.default.inst.open(_.UIType.Rank);
                  return [2];
                }
            }
          });
        });
      };
      e.prototype.onSet = function () {
        I.default.inst.open(_.UIType.Set);
      };
      e.prototype.onOpenRule = function () {
        u.default.inst.click("cx155907.dx204387", {});
        h.default.inst.openBrowser(g.default.RULE_URL);
      };
      e.prototype.onOpenShop = function () {
        u.default.inst.click("cx155907.dx204379", {});
        var t = v.Platform.getUrlInfo("shopStatus");
        t && "creating" == t ? b.UIFacade.showToast("\u5151\u6362\u5546\u57ce\u8d27\u54c1\u4e0a\u67b6\u4e2d\uff0c\u656c\u8bf7\u671f\u5f85~") : h.default.inst.openBrowser(g.default.SHOP_URL);
      };
      e.prototype.playFlyAni = function (t) {
        var e = this;
        P.default.Inst.flyAni(t, this.leYuanCoinNode.parent.convertToWorldSpaceAR(this.leYuanCoinNode.position));
        this.scheduleOnce(function () {
          e.onRefreshCoin();
        }, .5);
      };
      e.prototype.onRefreshCoin = function () {
        var t;
        return s(this, 0, 0, function () {
          var e;
          return a(this, function (o) {
            switch (o.label) {
              case 0:
                {
                  return [4, p.default.inst.queryCoin()];
                }
              case 1:
                {
                  e = o.sent();
                  (null === (null == e ? t = 0 : t = e.propertyList[0]) || 0 === t ? 0 : t.amount) ? this.labCoin.string = e.propertyList[0].amount + "" : this.labCoin.string = "0";
                  return [2];
                }
            }
          });
        });
      };
      e.prototype.preloadGameScene = function () {
        cc.director.preloadScene("Game");
      };
      e.prototype._gain = function (t, e) {
        var o = I.default.inst.getLayer(_.LayerType.Top),
          n = cc.instantiate(t),
          i = t.position;
        o.addChild(n);
        n.setPosition(i);
        var r = this.nodeMore.convertToWorldSpaceAR(cc.v2(0, 0)),
          s = this.node.convertToNodeSpaceAR(r),
          a = new cc.Vec3(s.x, s.y, 0);
        w.default.playFlying(n, a, !1, function () {
          console.log("\u62b5\u8fbe");
          n.destroy();
          O.default.initialize(e.energy, e.infiniteEnergyAdNum);
        });
      };
      r([M(cc.Sprite)], e.prototype, "btnSprite", 0);
      r([M([cc.SpriteFrame])], e.prototype, "btnSpriteFrames", 0);
      r([M(cc.Node)], e.prototype, "leYuanCoinNode", 0);
      r([M(cc.Label)], e.prototype, "labCoin", 0);
      r([M(cc.Label)], e.prototype, "lblReset", 0);
      r([M(cc.Node)], e.prototype, "nodeMore", 0);
      return r([N], e);
    }(m.default);
    o.Main = R;
    cc._RF.pop();
  }, {
    "../../Controller/AfunRiskSDKController": "AfunRiskSDKController",
    "../../Controller/LTrackerMgr": "LTrackerMgr",
    "../../Controller/MtopMgr": "MtopMgr",
    "../../Controller/RankController": "RankController",
    "../../Controller/WindVaneMgr": "WindVaneMgr",
    "../../Define/EventId": "EventId",
    "../../Define/UIDefs": "UIDefs",
    "../../Framework/Event/EventMgr": "EventMgr",
    "../../Framework/Platform/Platform": "Platform",
    "../../Framework/Scene/SceneBase": "SceneBase",
    "../../Framework/Tools/BaseInfo": "BaseInfo",
    "../../Framework/UI/UIFacade": "UIFacade",
    "../../Framework/UI/UIMgr": "UIMgr",
    "../../Framework/Utils/Utils": "Utils",
    "../../Model/PlayerModel": "PlayerModel",
    "../../System/PicSystem": "PicSystem",
    "../../System/PlayerSystem": "PlayerSystem",
    "../UI/Game/FlyResMgr": "FlyResMgr",
    "../UI/Power/LifeSystem": "LifeSystem"
  }],
  MapController: [function (t, e, o) {
    cc._RF.push(e, "7f735yuHSJO+rIWw9H6Hu5A", "MapController");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      },
      s = this && this.__values || function (t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          o = e && t[e],
          n = 0;
        if (o) {
          return o.call(t);
        }
        if (t && "number" == typeof t.length) {
          return {
            next: function () {
              t && n >= t.length && (t = 0);
              return {
                value: t && t[n++],
                done: !t
              };
            }
          };
        }
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.MapController = 0;
    var a = cc._decorator,
      c = a.ccclass,
      l = a.property,
      u = t("../../../Common/Archive"),
      p = t("../../../Common/AudioConfig"),
      f = t("../../../Common/Constant"),
      h = t("../../../Controller/LTrackerMgr"),
      d = t("../../../Define/EventId"),
      _ = t("../../../Define/UIDefs"),
      y = t("../../../Framework/Event/EventMgr"),
      v = t("../../../Framework/Res/NodePool"),
      m = t("../../../Framework/UI/UIMgr"),
      g = t("../../../Model/PlayerModel"),
      b = t("../../../System/AlgorithmSystem"),
      I = t("../../../System/AudioSystem"),
      w = t("../../../System/DropSystem"),
      T = t("../../../System/GamingSystem"),
      E = t("../../../System/PlayerSystem"),
      S = t("./EffectLayerController"),
      P = t("./Picitem"),
      O = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.picParent = null;
          e.picPrefab = null;
          e.flashs = [];
          e.effectLayer = null;
          e._gridWidth = 84;
          e._rows = 0;
          e._colmns = 0;
          e._picItemCmpts = new Array();
          e._lastChooseItem = null;
          e._dropPicDatas = [];
          e._curRemoveCnt = 0;
          e._nextDropRemoveValue = 0;
          e._nextDropPicValue = 0;
          e._isImpasse = !1;
          e._hintRoutes = null;
          e._isPlayAni = !1;
          e._inRefreshing = !1;
          e._usingRemove = !1;
          e._gridGap = 6;
          return e;
        }
        i(e, t);
        e.prototype.onLoad = function () {
          this.initPicPools();
          this.initMapArray();
        };
        e.prototype.start = function () {
          this.initMap();
        };
        e.prototype.initMap = function () {
          this.initDefault();
          this.initGame();
          this.updateNextDropPicData();
          this.onCheckImpasse();
        };
        e.prototype.onEnable = function () {
          y.EVENT.on(d.EventId.ON_CLICK_LINK_GAME_PIC, this.onClickLinkGamePic, this);
          y.EVENT.on(d.EventId.ON_GAME_REVIVE_SUCC, this.onGameReviveSucc, this);
          y.EVENT.on(d.EventId.ON_CANCEL_GAME_REVIVE, this.onCancelRevive, this);
          y.EVENT.on(d.EventId.ON_GAME_TIME_OVER, this.onTimeOver, this);
          y.EVENT.on(d.EventId.ON_CLICK_LINK_GAME_OBSTACLE, this.onClickObstacle, this);
          y.EVENT.on(d.EventId.ON_USE_ITEM, this.onUseItem, this);
        };
        e.prototype.onDisable = function () {
          y.EVENT.off(d.EventId.ON_CLICK_LINK_GAME_PIC, this.onClickLinkGamePic, this);
          y.EVENT.off(d.EventId.ON_GAME_REVIVE_SUCC, this.onGameReviveSucc, this);
          y.EVENT.off(d.EventId.ON_CANCEL_GAME_REVIVE, this.onCancelRevive, this);
          y.EVENT.off(d.EventId.ON_GAME_TIME_OVER, this.onTimeOver, this);
          y.EVENT.off(d.EventId.ON_CLICK_LINK_GAME_OBSTACLE, this.onClickObstacle, this);
          y.EVENT.off(d.EventId.ON_USE_ITEM, this.onUseItem, this);
        };
        e.prototype.initDefault = function () {};
        e.prototype.initGame = function () {
          this.startNewGame();
        };
        e.prototype.startNewGame = function () {
          this.initDropPicDatas();
          this.initPicItems();
        };
        e.prototype.initPicPools = function () {
          this._picPool || (this._picPool = new v.NodePool(), this._picPool.init(this.picPrefab));
        };
        e.prototype.onDestroyPicItem = function (t) {
          if (t) {
            this._picPool.freeNode(t);
          }
        };
        e.prototype.onCreatePicItem = function () {
          return this._picPool.getNode();
        };
        e.prototype.initMapArray = function () {
          this._rows = f.LINK_GAME_ROW + 2;
          this._colmns = f.LINK_GAME_COLMN + 2;
          this._mapArray = [];
          for (var t = 0; t < this._rows; ++t) {
            this._mapArray[t] = Array(this._colmns);
            for (var e = 0; e < this._colmns; ++e) this._mapArray[t][e] = 0;
          }
          for (var o = T.default.getCurMapConfig().sMapSet, n = 0; n < o.length; n++) {
            var i = n % f.LINK_GAME_ROW + 1,
              r = Math.floor(n / f.LINK_GAME_ROW) + 1;
            if ("0" == o[n]) {
              this._mapArray[i][r] = f.LINK_GAME_EMPTY_ID;
            }
          }
        };
        e.prototype._getPicPosition = function (t, e) {
          return {
            x: 10 + (t - 1) * (this._gridWidth + this._gridGap) - this.picParent.width / 2 + this._gridWidth / 2,
            y: (1 - e) * (this._gridWidth + this._gridGap) - 10 + this.picParent.height / 2 - this._gridWidth / 2
          };
        };
        e.prototype.addPicItemToMap = function (t, e, o) {
          var n = this.onCreatePicItem();
          this.picParent.addChild(n);
          var i = this._getPicPosition(t, e);
          n.setPosition(i.x, i.y);
          var r = this._dropPicDatas.shift(),
            s = n.getComponent(P.Picitem);
          s.initItem(r, cc.v2(t, e));
          s.playDelayShow(o || 60 * e);
          this._mapArray[t][e] = r;
          this._picItemCmpts.push(s);
          return s;
        };
        e.prototype.initPicItems = function () {
          for (var t = 1; t < this._rows - 1; ++t) for (var e = 1; e < this._colmns - 1; ++e) if (this._mapArray[t][e] != f.LINK_GAME_EMPTY_ID) {
            this.addPicItemToMap(t, e);
          }
        };
        e.prototype.initDropPicDatas = function () {
          this._dropPicDatas = w.default.getLevelDropPools();
        };
        e.prototype.removePicNode = function (t) {
          var e = this,
            o = this._picItemCmpts.indexOf(t);
          this._picItemCmpts.splice(o, 1);
          this._mapArray[t.pos.x][t.pos.y] = 0;
          t.playDisappear(function () {
            e.onDestroyPicItem(t.node);
          });
        };
        e.prototype.onClickLinkGamePic = function (t) {
          var e = this;
          if (!this._inRefreshing && !this._isPlayAni) {
            if (this._usingRemove) {
              h.default.inst.click("cx155955.dx204491", {
                stype: 2
              });
              this.hideRemoveHint();
            }
            var o = this._lastChooseItem;
            if (!o) {
              this._lastChooseItem = t;
              return t.selected();
            }
            if (o != t) {
              t.selected();
              b.AlgorithmSystem.canBeRemoved(o.pos, t.pos, this._mapArray) ? (this._isPlayAni = !0, this._hintRoutes = b.AlgorithmSystem.routes, this.drawHintLine(), this.scheduleOnce(function () {
                e._isPlayAni = !1;
                e.removePicNode(o);
                e.removePicNode(t);
                var n = e.updateDropData();
                e.checkPassGame() || n || e.onCheckImpasse();
              }, .2), this._lastChooseItem = null) : (o.unSelected(), this._lastChooseItem = t);
            }
          }
        };
        e.prototype.updateDropData = function () {
          var t = this;
          this._curRemoveCnt += 2;
          return !!this.checkDropPic() && (T.default.addDropBatch(), m.default.inst.open(_.UIType.GameDrop), this.scheduleOnce(function () {
            t.dropNewPicItem();
            t.updateNextDropPicData();
          }, f.GAME_TIPS_SHOW_TIME), !0);
        };
        e.prototype.updateNextDropPicData = function () {
          this._nextDropPicValue = w.default.getNextDropPlan(this._curRemoveCnt);
          this._nextDropRemoveValue += this._nextDropPicValue;
        };
        e.prototype.checkDropPic = function () {
          return !!this._nextDropPicValue && this._curRemoveCnt >= this._nextDropRemoveValue;
        };
        e.prototype.dropNewPicItem = function () {
          var t = this;
          this._isPlayAni = !0;
          for (var e = 0, o = 1; o < this._rows - 1; ++o) for (var n = 1; n < this._colmns - 1; ++n) if (e < this._nextDropPicValue && 0 == this._mapArray[o][n]) {
            console.log("drop new pic ........", e, o, n);
            this.addPicItemToMap(o, n, 30 * e);
            e++;
          }
          this.effectLayer.playFallAni();
          this.onCheckImpasse();
          y.EVENT.emit(d.EventId.ON_DROP_NEW_PIC);
          this.scheduleOnce(function () {
            t._isPlayAni = !1;
            t._isImpasse && t.refreshPicPosition();
          }, .8);
        };
        e.prototype.checkPassGame = function () {
          var t, e;
          if (this._dropPicDatas.length > 0) {
            return !1;
          }
          try {
            for (var o = s(this._picItemCmpts), n = o.next(); !n.done; n = o.next()) {
              var i = n.value;
              if (i.picId != f.LINK_GAME_OBSTACLE_ID && i.picId != f.LINK_GAME_EMPTY_ID) {
                return !1;
              }
            }
          } catch (r) {
            t = {
              error: r
            };
          } finally {
            try {
              if (n && !n.done && (e = o.return)) {
                e.call(o);
              }
            } finally {
              if (t) {
                throw t.error;
              }
            }
          }
          this.levelSuccess();
          return !0;
        };
        e.prototype.onCheckImpasse = function () {
          this._isImpasse = b.AlgorithmSystem.isImpasse(this._mapArray);
          this._isImpasse ? (T.default.failType = f.FailType.Impasse, this.settlement()) : this._hintRoutes = b.AlgorithmSystem.routes;
        };
        e.prototype.levelFail = function () {
          var t = this;
          T.default.gameOver = !0;
          I.default.play(p.AUDIOS_PATH.fail);
          var e = T.default.failType == f.FailType.Impasse,
            o = {
              title: e ? "\u554a\u54e6\uff0c\u4f60\u7684\u8def\u7ebf\u89c4\u5212\u4e0d\u5408\u7406" : "\u65f6\u95f4\u8017\u5c3d",
              describe: e ? "\u5f53\u524d\u5df2\u65e0\u53ef\u8fde\u5143\u7d20" : null,
              closeHandle: function () {
                t._uploadGame(!1);
              }
            };
          m.default.inst.open(_.UIType.GameTips, o);
        };
        e.prototype.cleanDirtyData = function () {
          T.default.init();
          u.default.cleanLoaclGameReport();
        };
        e.prototype.levelSuccess = function () {
          T.default.gameComplete = !0;
          this._uploadGame(!0);
        };
        e.prototype.onTimeOver = function () {
          T.default.failType = f.FailType.Time;
          this.settlement();
        };
        e.prototype.settlement = function () {
          T.default.isRevive ? this.onEndGame() : this.showReviveUI();
        };
        e.prototype.showReviveUI = function () {
          T.default.gamePause = !0;
          I.default.play(p.AUDIOS_PATH.fail);
          m.default.inst.open(_.UIType.ReviveUI);
        };
        e.prototype.onEndGame = function () {
          T.default.gameOver = !0;
          this.levelFail();
        };
        e.prototype.onCancelRevive = function () {
          T.default.gameOver = !0;
          this._uploadGame(!1);
        };
        e.prototype._uploadGame = function (t) {
          console.log("Log - Test _uploadGame.......1");
          T.default.isSettlement || (console.log("Log - Test _uploadGame.......2"), T.default.isSettlement = !0, E.default.uploadGame(t));
        };
        e.prototype.refreshPicCmpt = function () {
          for (var t = this, e = new Array(), o = new Array(), n = 1; n < this._rows - 1; ++n) for (var i = 1; i < this._colmns - 1; ++i) {
            var r = this._mapArray[n][i];
            if (r && r != f.LINK_GAME_EMPTY_ID) {
              e.push({
                x: n,
                y: i
              });
              o.push(r);
            }
          }
          e.sort(function () {
            return Math.random() > .5 ? -1 : 1;
          });
          o.sort(function () {
            return Math.random() > .5 ? -1 : 1;
          });
          e.forEach(function (e, n) {
            t._mapArray[e.x][e.y] = o[n];
          });
          this._picItemCmpts.forEach(function (e) {
            e.initItem(t._mapArray[e.pos.x][e.pos.y], e.pos);
          });
          this.onCheckImpasse();
        };
        e.prototype.onGameReviveSucc = function () {
          T.default.gamePause = !1;
          this.refreshPicPosition();
        };
        e.prototype.refreshPicPosition = function () {
          var t = this;
          this._inRefreshing = !0;
          var e = 0,
            o = 360 / this._picItemCmpts.length;
          this.picParent.angle = 0;
          cc.tween(this.picParent).call(function () {
            t._picItemCmpts.forEach(function (t) {
              var n = T.default.getCirclePosByAngle(e, 100);
              e += o;
              cc.tween(t.node).to(.3, {
                x: n.x,
                y: n.y
              }).start();
            });
          }).delay(.3).call(function () {
            t.refreshPicCmpt();
          }).to(1, {
            angle: 720
          }).call(function () {
            t._picItemCmpts.forEach(function (e) {
              var o = t._getPicPosition(e.pos.x, e.pos.y);
              cc.tween(e.node).to(.3, {
                x: o.x,
                y: o.y
              }).start();
            });
          }).delay(.3).call(function () {
            t._inRefreshing = !1;
          }).start();
        };
        e.prototype._checkPropVaild = function (t) {
          var e = g.default.inst.getGameItemState(t);
          console.log("_checkPropVaild.............................", e);
          return e == f.GAME_ITEM_STATE.Used ? (m.default.inst.showToast("\u6bcf\u5173\u53ea\u80fd\u4f7f\u7528\u4e00\u6b21\u9053\u5177\u54e6"), !1) : e != f.GAME_ITEM_STATE.UnGet || (m.default.inst.open(_.UIType.WatchAD, t), !1);
        };
        e.prototype.onRemovePic = function () {
          var t, e;
          if (!this._inRefreshing && !this._isPlayAni && this._checkPropVaild(f.PROP_ID.RemoveObstacle)) {
            var o = !1;
            try {
              for (var n = s(this._picItemCmpts), i = n.next(); !i.done; i = n.next()) if (i.value.isObstacle()) {
                o = !0;
              }
            } catch (r) {
              t = {
                error: r
              };
            } finally {
              try {
                if (i && !i.done && (e = n.return)) {
                  e.call(n);
                }
              } finally {
                if (t) {
                  throw t.error;
                }
              }
            }
            if (!o) {
              h.default.inst.click("cx155955.dx204491", {
                stype: 3
              });
              return m.default.inst.showToast("\u6ca1\u6709\u969c\u788d\u53ef\u4ee5\u6e05\u9664");
            }
            h.default.inst.logEvent(h.EventName.page_view, {
              sname: "ItemObsClick"
            });
            this.showRemoveHint();
          }
        };
        e.prototype.showRemoveHint = function () {
          this._usingRemove = !0;
          this._picItemCmpts.forEach(function (t) {
            if (t.isObstacle()) {
              t.showObstacleHint();
            }
          });
          y.EVENT.emit(d.EventId.ON_USING_REMOVE_OBSTACLE, !0);
        };
        e.prototype.hideRemoveHint = function () {
          this._usingRemove = !1;
          this._picItemCmpts.forEach(function (t) {
            if (t.isObstacle()) {
              t.hideObstacleHint();
            }
          });
          y.EVENT.emit(d.EventId.ON_USING_REMOVE_OBSTACLE, !1);
        };
        e.prototype.onClickObstacle = function (t) {
          if (this._usingRemove) {
            h.default.inst.click("cx155955.dx204491", {
              stype: 1
            });
            this.hideRemoveHint();
            g.default.inst.setGameItemState(f.PROP_ID.RemoveObstacle, f.GAME_ITEM_STATE.Used);
            var e = this._getPicPosition(t.pos.x, t.pos.y);
            this.effectLayer.playHammerAction(e);
            this.removePicNode(t);
          }
        };
        e.prototype.drawHintLine = function () {
          var t = this._hintRoutes;
          if (t && 0 != t.length) {
            for (var e = 1; e < t.length; e++) {
              var o = t[e - 1],
                n = t[e],
                i = this._getPicPosition(o.x, o.y),
                r = this._getPicPosition(n.x, n.y),
                s = this.flashs[e - 1].node;
              this.flashs[e - 1].play();
              s.active = !0;
              s.x = (i.x + r.x) / 2;
              s.y = (i.y + r.y) / 2;
              var a = Math.abs(i.x - r.x),
                c = Math.abs(i.y - r.y);
              s.scale = Math.sqrt(a * a + c * c) / 400;
              o.x == n.x ? s.angle = 0 : s.angle = 90;
            }
            I.default.play(p.AUDIOS_PATH.flash);
          }
        };
        e.prototype.showHint = function () {
          if (!this._inRefreshing && !this._isPlayAni && this._checkPropVaild(f.PROP_ID.Hint)) {
            var t = this._hintRoutes;
            if (t && 0 != t.length) {
              g.default.inst.setGameItemState(f.PROP_ID.Hint, f.GAME_ITEM_STATE.Used);
              h.default.inst.click("cx155955.dx204483", {});
              h.default.inst.logEvent(h.EventName.page_view, {
                sname: "ItemTipClick"
              });
              var e = t[0],
                o = t[t.length - 1];
              this._picItemCmpts.forEach(function (t) {
                if (t.pos.x == e.x && t.pos.y == e.y || t.pos.x == o.x && t.pos.y == o.y) {
                  t.showJumpHint();
                }
              });
            }
          }
        };
        e.prototype.onUseItem = function (t) {
          t == f.PROP_ID.Hint ? this.showHint() : t == f.PROP_ID.RemoveObstacle && this.onRemovePic();
        };
        r([l(cc.Node)], e.prototype, "picParent", 0);
        r([l(cc.Prefab)], e.prototype, "picPrefab", 0);
        r([l([cc.Animation])], e.prototype, "flashs", 0);
        r([l(S.default)], e.prototype, "effectLayer", 0);
        return r([c], e);
      }(cc.Component);
    o.MapController = O;
    cc._RF.pop();
  }, {
    "../../../Common/Archive": "Archive",
    "../../../Common/AudioConfig": "AudioConfig",
    "../../../Common/Constant": "Constant",
    "../../../Controller/LTrackerMgr": "LTrackerMgr",
    "../../../Define/EventId": "EventId",
    "../../../Define/UIDefs": "UIDefs",
    "../../../Framework/Event/EventMgr": "EventMgr",
    "../../../Framework/Res/NodePool": "NodePool",
    "../../../Framework/UI/UIMgr": "UIMgr",
    "../../../Model/PlayerModel": "PlayerModel",
    "../../../System/AlgorithmSystem": "AlgorithmSystem",
    "../../../System/AudioSystem": "AudioSystem",
    "../../../System/DropSystem": "DropSystem",
    "../../../System/GamingSystem": "GamingSystem",
    "../../../System/PlayerSystem": "PlayerSystem",
    "./EffectLayerController": "EffectLayerController",
    "./Picitem": "Picitem"
  }],
  MeshPolygonSprite: [function (t, e, o) {
    cc._RF.push(e, "67afc4rFktEb6lNkHHYixu1", "MeshPolygonSprite");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      },
      s = this && this.__read || function (t, e) {
        var o = "function" == typeof Symbol && t[Symbol.iterator];
        if (!o) {
          return t;
        }
        var n,
          i,
          r = o.call(t),
          s = [];
        try {
          for (; (0 === e || e-- > 0) && !(n = r.next()).done;) s.push(n.value);
        } catch (a) {
          i = {
            error: a
          };
        } finally {
          try {
            if (n && !n.done && (o = r.return)) {
              o.call(r);
            }
          } finally {
            if (i) {
              throw i.error;
            }
          }
        }
        return s;
      },
      a = this && this.__spread || function () {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(s(arguments[e]));
        return t;
      },
      c = this && this.__values || function (t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          o = e && t[e],
          n = 0;
        if (o) {
          return o.call(t);
        }
        if (t && "number" == typeof t.length) {
          return {
            next: function () {
              t && n >= t.length && (t = 0);
              return {
                value: t && t[n++],
                done: !t
              };
            }
          };
        }
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var l = cc.gfx,
      u = cc._decorator,
      p = u.ccclass,
      f = u.property,
      h = u.executeInEditMode,
      d = u.requireComponent,
      _ = u.menu,
      y = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e._offset = cc.v2(0, 0);
          e._spriteFrame = null;
          e._vertexes = [cc.v2(0, 0), cc.v2(0, 100), cc.v2(100, 100), cc.v2(100, 0)];
          e.renderer = null;
          e.mesh = null;
          e._meshCache = {};
          return e;
        }
        i(e, t);
        Object.defineProperty(e.prototype, "offset", {
          get: function () {
            return this._offset;
          },
          set: function (t) {
            this._offset = t;
            this._updateMesh();
            this._applyVertexes();
          },
          enumerable: !1,
          configurable: !0
        });
        Object.defineProperty(e.prototype, "spriteFrame", {
          get: function () {
            return this._spriteFrame;
          },
          set: function (t) {
            this._spriteFrame = t;
            this._refreshAll();
          },
          enumerable: !1,
          configurable: !0
        });
        Object.defineProperty(e.prototype, "vertexes", {
          get: function () {
            return this._vertexes;
          },
          set: function (t) {
            this._vertexes = t;
            this._updateMesh();
            this._applyVertexes();
          },
          enumerable: !1,
          configurable: !0
        });
        e.prototype.onLoad = function () {
          this._meshCache = {};
          var t = this.node.getComponent(cc.MeshRenderer) || this.node.addComponent(cc.MeshRenderer);
          t.mesh = null;
          this.renderer = t;
          var e = cc.Material.getBuiltinMaterial("unlit");
          t.setMaterial(0, e);
        };
        e.prototype.onEnable = function () {
          this._refreshAll();
        };
        e.prototype._refreshAll = function () {
          this._updateMesh();
          this._applySpriteFrame();
          this._applyVertexes();
        };
        e.prototype._updateMesh = function () {
          var t = this._meshCache[this.vertexes.length];
          t || ((t = new cc.Mesh()).init(new l.VertexFormat([{
            name: l.ATTR_POSITION,
            type: l.ATTR_TYPE_FLOAT32,
            num: 2
          }, {
            name: l.ATTR_UV0,
            type: l.ATTR_TYPE_FLOAT32,
            num: 2
          }]), this.vertexes.length, !0), this._meshCache[this.vertexes.length] = t);
          cc.log(t.nativeUrl);
          this.mesh = t;
        };
        e.prototype._lerp = function (t, e, o) {
          return t + o * (e - t);
        };
        e.prototype._applyVertexes = function () {
          var t = this.mesh;
          t.setVertices(l.ATTR_POSITION, this.vertexes);
          this._calculateUV();
          if (this.vertexes.length >= 3) {
            var e = [],
              o = this.vertexes.map(function (t) {
                return {
                  x: t.x,
                  y: t.y
                };
              }),
              n = new poly2tri.SweepContext(o, {
                cloneArrays: !0
              });
            try {
              n.triangulate();
              n.getTriangles().forEach(function (t) {
                t.getPoints().forEach(function (t) {
                  var n = o.indexOf(t);
                  e.push(n);
                });
              });
            } catch (i) {
              cc.error("poly2tri error", i);
            }
            0 === e.length && (cc.log("\u8ba1\u7b97\u9876\u70b9\u7d22\u5f15 \u5931\u8d25"), e.push.apply(e, a(this.vertexes.map(function (t, e) {
              return e;
            }))));
            t.setIndices(e);
            this.renderer.mesh = t;
          }
        };
        e.prototype._calculateUV = function () {
          var t,
            e,
            o = this.mesh;
          if (this.spriteFrame) {
            var n = this.spriteFrame.uv,
              i = this.spriteFrame.getTexture(),
              r = n[0],
              s = n[6],
              a = n[3],
              u = n[5],
              p = [];
            try {
              for (var f = c(this.vertexes), h = f.next(); !h.done; h = f.next()) {
                var d = h.value,
                  _ = this._lerp(r, s, (d.x + i.width / 2 + this.offset.x) / i.width),
                  y = this._lerp(a, u, (d.y + i.height / 2 - this.offset.y) / i.height);
                p.push(cc.v2(_, y));
              }
            } catch (v) {
              t = {
                error: v
              };
            } finally {
              try {
                if (h && !h.done && (e = f.return)) {
                  e.call(f);
                }
              } finally {
                if (t) {
                  throw t.error;
                }
              }
            }
            o.setVertices(l.ATTR_UV0, p);
          }
        };
        e.prototype._applySpriteFrame = function () {
          if (this.spriteFrame) {
            var t = this.renderer.getMaterial(0),
              e = this.spriteFrame.getTexture();
            t.define("USE_DIFFUSE_TEXTURE", !0);
            t.setProperty("diffuseTexture", e);
          }
        };
        r([f], e.prototype, "_offset", 0);
        r([f({
          type: cc.Vec2,
          tooltip: "\u4f4d\u7f6e\u504f\u79fb\u91cf"
        })], e.prototype, "offset", null);
        r([f], e.prototype, "_spriteFrame", 0);
        r([f({
          type: cc.SpriteFrame,
          tooltip: "\u7cbe\u7075\u7684\u7cbe\u7075\u5e27"
        })], e.prototype, "spriteFrame", null);
        r([f], e.prototype, "_vertexes", 0);
        r([f({
          type: cc.Vec2,
          tooltip: "\u9876\u70b9\u5750\u6807"
        })], e.prototype, "vertexes", null);
        return r([p, h, d(cc.MeshRenderer), _("ui-extensions/MeshPolygonSprite")], e);
      }(cc.Component);
    o.default = y;
    cc._RF.pop();
  }, {}],
  MorePower: [function (t, e, o) {
    cc._RF.push(e, "ee7fdf8vthKJYnkx8LO/H/q", "MorePower");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      },
      s = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      a = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var c = t("../../../Controller/LTrackerMgr"),
      l = t("../../../Controller/TableMgr"),
      u = t("../../../Controller/TurnTaskController"),
      p = t("../../../Define/EventId"),
      f = t("../../../Framework/Event/EventMgr"),
      h = t("../../../Framework/UI/UIFacade"),
      d = t("../../../Framework/UIBase"),
      _ = t("../../../Framework/Utils/Utils"),
      y = t("./LifeSystem"),
      v = cc._decorator,
      m = v.ccclass,
      g = v.property,
      b = v.menu,
      I = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.labPro = null;
          e.nodeIcon = null;
          e._debounce = !1;
          return e;
        }
        i(e, t);
        e.prototype.onLoad = function () {
          c.default.inst.expo("cx224092", {});
          var t = l.TABLE.getGlobalById("G010").sGlobalData;
          this.labPro.string = y.default.infiniteEnergyAdNum + "/" + t;
        };
        e.prototype.onWatchAbs = function () {
          return s(this, 0, 0, function () {
            var t = this;
            return a(this, function () {
              return this._debounce ? [2] : (this._debounce = !0, this.scheduleOnce(function () {
                t._debounce = !1;
              }, 1), u.default.inst.getProp("D006", function (e) {
                c.default.inst.click("cx224092.dx333084", {
                  isuccess: 1
                });
                c.default.inst.logEvent(c.EventName.btn_click, {
                  sname: "AdsClick",
                  success: 1,
                  source: "EnergyLimitless"
                });
                t.setData(e);
              }, function () {
                c.default.inst.click("cx224092.dx333084", {
                  isuccess: 0
                });
                h.UIFacade.showToast("\u6d4f\u89c8\u65f6\u95f4\u4e0d\u8db3\uff0c\u8bf7\u518d\u8bd5\u8bd5\u54e6~");
                c.default.inst.logEvent(c.EventName.btn_click, {
                  sname: "AdsClick",
                  success: 0,
                  source: "EnergyLimitless"
                });
              }), [2]);
            });
          });
        };
        e.prototype.setData = function (t) {
          var e;
          y.default.infiniteEnergyAdNum = t.infiniteEnergyAdNum;
          var o = l.TABLE.getGlobalById("G010").sGlobalData;
          this.labPro.string = y.default.infiniteEnergyAdNum + "/" + o;
          (null === (e = t.energy) || 0 === e ? 0 : e.infiniteEndTime) && t.energy.infiniteEndTime > _.default.getServerTime() ? (f.EVENT.emit(p.EventId.ON_FLY, this.nodeIcon, t), h.UIFacade.showToast("\u83b7\u5f97\u65e0\u9650\u6311\u6218\u673a\u4f1a"), this.close()) : h.UIFacade.showToast("\u89c6\u9891\u89c2\u770b\u6210\u529f");
        };
        r([g(cc.Label)], e.prototype, "labPro", 0);
        r([g(cc.Node)], e.prototype, "nodeIcon", 0);
        return r([m, b("\u997f\u4e86\u4e48/MorePower")], e);
      }(d.default);
    o.default = I;
    cc._RF.pop();
  }, {
    "../../../Controller/LTrackerMgr": "LTrackerMgr",
    "../../../Controller/TableMgr": "TableMgr",
    "../../../Controller/TurnTaskController": "TurnTaskController",
    "../../../Define/EventId": "EventId",
    "../../../Framework/Event/EventMgr": "EventMgr",
    "../../../Framework/UI/UIFacade": "UIFacade",
    "../../../Framework/UIBase": "UIBase",
    "../../../Framework/Utils/Utils": "Utils",
    "./LifeSystem": "LifeSystem"
  }],
  MoxiHelper: [function (t, e, o) {
    cc._RF.push(e, "2ddf6xqK3hMp68AWugPRr2H", "MoxiHelper");
    var n = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      i = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.MoxiHelper = 0;
    var r = t("./VXPlatform"),
      s = function () {
        function t() {}
        t.init = function () {
          this._sdk = window.MiniGame;
          window.Notice = function () {
            console.error("\u505c\u670d");
          };
          window.SendMessage = function (t) {
            r.VXPlatform.wxToast(t);
            console.error("\u5f02\u5e38", t);
          };
          return "";
        };
        t.checkBuyInfo = function () {
          return n(this, 0, 0, function () {
            var t;
            return i(this, function () {
              t = {};
              this._sdk.checkBuyInfo(t).then(function (t) {
                console.log(t);
              });
              return [2];
            });
          });
        };
        return t;
      }();
    o.MoxiHelper = s;
    cc._RF.pop();
  }, {
    "./VXPlatform": "VXPlatform"
  }],
  MoxiModel: [function (t, e, o) {
    cc._RF.push(e, "14a0fJiX5ZPspruW/SzDokj", "MoxiModel");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.EmailType = 0;
    var n = t("./Platform");
    (function (t) {
      t[t.putongjiangli = 0] = "putongjiangli";
      t[t.email = 1] = "email";
      t[t.compensation = 2] = "compensation";
    })(o.EmailType || (o.EmailType = {}));
    var i = function () {
      function t() {
        this._taskInfo = null;
        this._userID = "";
        this._platId = "";
        this._exchangeInfo = {
          month: 0,
          monthLimit: 3
        };
      }
      Object.defineProperty(t, "inst", {
        get: function () {
          this._inst || (this._inst = new t());
          return this._inst;
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.initData = function (t) {
        if (t) {
          t.taskInfo && (this._taskInfo = t.taskInfo, cc.log(this._taskInfo));
          t.userInfo && (this._userInfo = t.userInfo, t.userInfo.inviteGameid && (n.Platform.inviterGameId = t.userInfo.inviteGameid), console.log(this._userInfo));
          this._authInfo = t.authInfo;
          this._userID = this._authInfo.pltId;
        }
      };
      t.prototype.getUserId = function () {
        return this._userID;
      };
      t.prototype.getPlatId = function () {
        return this._platId;
      };
      t.prototype.getAuthInfo = function () {
        return this._authInfo;
      };
      t.prototype.getInviterId = function () {
        console.log("inviterGameid:" + this._userInfo.inviteGameid);
        return this._userInfo.inviteGameid;
      };
      t.prototype.getAvatarUrl = function () {
        return this._userInfo.avatarUrl;
      };
      return t;
    }();
    o.default = i;
    cc._RF.pop();
  }, {
    "./Platform": "Platform"
  }],
  MtopApi: [function (t, e, o) {
    cc._RF.push(e, "39c7eOc0JNJWq4mVcBL+Fxc", "MtopApi");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = function () {
      function t() {}
      t.Apis = {
        querytask: "mtop.ele.biz.growth.task.core.querytask",
        receivetask: "mtop.ele.biz.growth.task.core.receivetask",
        receiveprize: "mtop.ele.biz.growth.task.core.receiveprize",
        pageview: "mtop.ele.biz.growth.task.event.pageview",
        trigger: "mtop.ele.biz.growth.task.event.trigger",
        query: "mtop.alsc.playgame.mini.game.index",
        dispatch: "mtop.alsc.playgame.mini.game.dispatch",
        convertUrl: "mtop.elebiz.interactivesns.fcurl.convertUrl",
        checkByCro: "mtop.alsc.user.realName.checkByCro",
        authentication: "mtop.alsc.playgame.common.real.name.authentication",
        genShortLink: "mtop.elebiz.interactivesns.link.genShortLink",
        querypagerankandself: "mtop.koubei.elebizinteractivesns.rank.querypagerankandself"
      };
      return t;
    }();
    o.default = n;
    cc._RF.pop();
  }, {}],
  MtopMgr: [function (t, e, o) {
    cc._RF.push(e, "4c826nLb8ZNT5U953Wxq4QQ", "MtopMgr");
    var n = this && this.__assign || function () {
        return (n = Object.assign || function (t) {
          for (var e, o = 1, n = arguments.length; o < n; o++) for (var i in e = arguments[o]) if (Object.prototype.hasOwnProperty.call(e, i)) {
            t[i] = e[i];
          }
          return t;
        }).apply(this, arguments);
      },
      i = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      r = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../Framework/Tools/BaseInfo"),
      a = t("./MtopApi"),
      c = t("./Request"),
      l = t("./WindVaneMgr"),
      u = function () {
        function t() {
          this._sdk = null;
          this._userInfo = {
            site: 25,
            userId: "16132902"
          };
          this._locationInfos = [];
          this._deviceInfo = {};
        }
        Object.defineProperty(t, "inst", {
          get: function () {
            this._inst || (this._inst = new t());
            return this._inst;
          },
          enumerable: !1,
          configurable: !0
        });
        t.prototype.init = function () {
          return i(this, 0, 0, function () {
            var t;
            return r(this, function (e) {
              switch (e.label) {
                case 0:
                  {
                    this._sdk = window.lib;
                    t = this;
                    return [4, l.default.inst.getFullLocation()];
                  }
                case 1:
                  {
                    t._locationInfos = e.sent();
                    console.log(this._locationInfos, "this._locationInfos");
                    return this._sdk ? [2] : (console.error("NO SDK"), [2]);
                  }
              }
            });
          });
        };
        t.prototype.querytask = function (t) {
          return i(this, 0, 0, function () {
            return r(this, function (e) {
              switch (e.label) {
                case 0:
                  {
                    return [4, this._mtop(a.default.Apis.querytask, "1.0", t)];
                  }
                case 1:
                  {
                    return [2, e.sent()];
                  }
              }
            });
          });
        };
        t.prototype.pageview = function (t) {
          return i(this, 0, 0, function () {
            return r(this, function (e) {
              switch (e.label) {
                case 0:
                  {
                    return [4, this._mtop(a.default.Apis.pageview, "1.0", t)];
                  }
                case 1:
                  {
                    return [2, e.sent()];
                  }
              }
            });
          });
        };
        t.prototype.tigger = function (t) {
          return i(this, 0, 0, function () {
            return r(this, function (e) {
              switch (e.label) {
                case 0:
                  {
                    return [4, this._mtop(a.default.Apis.tigger, "1.0", t)];
                  }
                case 1:
                  {
                    return [2, e.sent()];
                  }
              }
            });
          });
        };
        t.prototype.getTask = function (t) {
          return i(this, 0, 0, function () {
            return r(this, function (e) {
              switch (e.label) {
                case 0:
                  {
                    return [4, this._mtop(a.default.Apis.receivetask, "1.0", t)];
                  }
                case 1:
                  {
                    return [2, e.sent()];
                  }
              }
            });
          });
        };
        t.prototype.getAward = function (t) {
          return i(this, 0, 0, function () {
            return r(this, function (e) {
              switch (e.label) {
                case 0:
                  {
                    return [4, this._mtop(a.default.Apis.receiveprize, "1.0", t)];
                  }
                case 1:
                  {
                    return [2, e.sent()];
                  }
              }
            });
          });
        };
        t.prototype.queryCoin = function () {
          return i(this, 0, 0, function () {
            var t;
            return r(this, function (e) {
              switch (e.label) {
                case 0:
                  {
                    return [4, this._mtop(a.default.Apis.query, "1.0", {
                      bizScene: s.default.BIZ_SCENE,
                      actId: s.default.ACTID,
                      collectionIds: JSON.stringify(s.default.COLLECTIONID)
                    }, !1)];
                  }
                case 1:
                  {
                    return [2, null == (t = e.sent()) ? 0 : t.data.data];
                  }
              }
            });
          });
        };
        t.prototype.dispatch = function (t, e, o) {
          return i(this, 0, 0, function () {
            return r(this, function (n) {
              switch (n.label) {
                case 0:
                  {
                    return [4, this._mtop(a.default.Apis.dispatch, "1.0", {
                      bizScene: t,
                      bizMethod: e,
                      bizParam: JSON.stringify(o)
                    }, !1)];
                  }
                case 1:
                  {
                    return [2, n.sent()];
                  }
              }
            });
          });
        };
        t.prototype.convertUrl = function (t) {
          return i(this, 0, 0, function () {
            var e;
            return r(this, function (o) {
              switch (o.label) {
                case 0:
                  {
                    return [4, this._mtop(a.default.Apis.convertUrl, "1.0", {
                      bizScene: s.default.BIZ_SCENE,
                      replaceUrl: t
                    }, !1)];
                  }
                case 1:
                  {
                    return [2, null == (e = o.sent()) ? 0 : e.data.replaceUrl];
                  }
              }
            });
          });
        };
        t.prototype.genShortLink = function (t) {
          return i(this, 0, 0, function () {
            var e, o;
            return r(this, function (n) {
              switch (n.label) {
                case 0:
                  {
                    e = "ppe-r";
                    "ONLINE" == s.default.ENV && (e = "r");
                    return [4, this._mtop(a.default.Apis.genShortLink, "1.0", {
                      domainType: e,
                      bizScene: s.default.BIZ_SCENE,
                      path: t
                    }, !1)];
                  }
                case 1:
                  {
                    return [2, null == (o = n.sent()) ? 0 : o.data.result];
                  }
              }
            });
          });
        };
        t.prototype.checkByCro = function (t, e) {
          return i(this, 0, 0, function () {
            var o;
            return r(this, function (n) {
              switch (n.label) {
                case 0:
                  {
                    return [4, this._mtop(a.default.Apis.checkByCro, "1.0", {
                      userRealName: t,
                      certNo: e,
                      siteNum: 25,
                      cardType: "01",
                      authSceneCode: s.default.ADULT_SCENE
                    }, !1)];
                  }
                case 1:
                  {
                    return [2, null == (o = n.sent()) ? 0 : o.data];
                  }
              }
            });
          });
        };
        t.prototype.authentication = function () {
          return i(this, 0, 0, function () {
            var t;
            return r(this, function (e) {
              switch (e.label) {
                case 0:
                  {
                    return [4, this._mtop(a.default.Apis.authentication, "1.0", {
                      bizScene: s.default.BIZ_SCENE
                    }, !1)];
                  }
                case 1:
                  {
                    return [2, null == (t = e.sent()) ? 0 : t.data];
                  }
              }
            });
          });
        };
        t.prototype.querypagerankandself = function (t) {
          return i(this, 0, 0, function () {
            var e, o;
            return r(this, function (n) {
              switch (n.label) {
                case 0:
                  {
                    e = {
                      bizScene: s.default.BIZ_SCENE,
                      copyId: s.default.RANK_COPY_ID,
                      actId: s.default.RANK_ACT_ID,
                      pageSize: 100,
                      pageNum: 1,
                      bizNo: t
                    };
                    return [4, this._mtop(a.default.Apis.querypagerankandself, "1.0", e, !1)];
                  }
                case 1:
                  {
                    return [2, null == (o = n.sent()) ? 0 : o.data];
                  }
              }
            });
          });
        };
        t.prototype._mtop = function (t, e, o, s) {
          0 === s && (s = !0);
          return i(this, 0, Promise, function () {
            var e;
            return r(this, function (i) {
              switch (i.label) {
                case 0:
                  {
                    s ? e = {
                      locationInfos: JSON.stringify(this._locationInfos)
                    } : e = {};
                    return [4, c.default.inst.request(t, n(n({}, o), e))];
                  }
                case 1:
                  {
                    return [2, i.sent()];
                  }
              }
            });
          });
        };
        return t;
      }();
    o.default = u;
    cc._RF.pop();
  }, {
    "../Framework/Tools/BaseInfo": "BaseInfo",
    "./MtopApi": "MtopApi",
    "./Request": "Request",
    "./WindVaneMgr": "WindVaneMgr"
  }],
  NetApi: [function (t, e, o) {
    cc._RF.push(e, "5fb29piT/9A7JzYf/8jnj66", "NetApi");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.NetApi = 0;
    var n = function () {
      function t() {}
      t.Apis = {
        login: "player/login",
        startGame: "game/startGame",
        startGameV2: "game/startGameV2",
        settlement: "game/settlement",
        watchAbs: "game/watchAbs",
        useItem: "/game/useItem",
        getSubscribe: "/subscribe/getSubscribe",
        setSubscribe: "/subscribe/setSubscribe",
        finisheSubscribe: "/subscribe/finisheSubscribe",
        updateTask: "task/updateTask",
        getTasks: "/task/getTasks",
        finisheTask: "/task/finisheTask",
        queryPassTime: "/game/queryPassTime",
        reportLog: "player/reportLog"
      };
      return t;
    }();
    o.NetApi = n;
    cc._RF.pop();
  }, {}],
  NetBase: [function (t, e, o) {
    cc._RF.push(e, "c8720DvPjdCcbxWwFmMw+Ee", "NetBase");
    var n = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      i = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.NetBase = 0;
    var r = t("../Framework/Net/HttpRequest"),
      s = t("../Framework/Platform/Platform"),
      a = t("../Model/PlayerModel"),
      c = function () {
        function t() {}
        Object.defineProperty(t, "sBaseURL", {
          get: function () {
            var t = "";
            switch (s.Platform.getPlatType()) {
              case s.PlatformType.WeiXin:
                {
                  t = s.Platform.getServerAddr();
                  break;
                }
              default:
                {
                  t = (window.location.protocol || "http:") + "//" + s.Platform.getServerAddr();
                }
            }
            cc.sys.isNative && (t = "http://" + s.Platform.getServerAddr());
            return t;
          },
          enumerable: !1,
          configurable: !0
        });
        Object.defineProperty(t, "sAccountBaseURL", {
          get: function () {
            var t = "";
            switch (s.Platform.getPlatType()) {
              case s.PlatformType.WeiXin:
                {
                  t = "https://" + s.Platform.getAccountAddr();
                  break;
                }
              default:
                {
                  t = (window.location.protocol || "http:") + "//" + s.Platform.getAccountAddr();
                }
            }
            cc.sys.isNative && (t = "http://" + s.Platform.getAccountAddr());
            return t;
          },
          enumerable: !1,
          configurable: !0
        });
        t.get = function (t, e, o, n, i) {
          0 === n && (n = {
            "Content-Type": "application/json"
          });
          0 === i && (i = 5);
          return this.sendRequset("get", t, e, o, n, i);
        };
        t.post = function (t, e, o, n, i) {
          0 === n && (n = {
            "Content-Type": "application/json"
          });
          0 === i && (i = 5);
          var r = s.Platform.getGameId(),
            c = a.default.inst.getToken();
          o || (o = {});
          c && c.length > 0 && (o.gameId = r, o.token = c);
          return this.sendRequset("post", t, e, o, n, i);
        };
        t.accountPost = function (t, e, o, n, i) {
          0 === n && (n = {
            "Content-Type": "application/json"
          });
          0 === i && (i = 5);
          t = this.sAccountBaseURL + t;
          return this.sendRequset("post", t, e, o, n, i);
        };
        t.sendRequset = function (t, e, o, s, c, l) {
          var u;
          return n(this, 0, Promise, function () {
            var n, p, f;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  {
                    switch (t.toLocaleLowerCase()) {
                      case "get":
                        {
                          n = r.HttpRequest.get(e, o, c, l);
                          break;
                        }
                      case "post":
                        {
                          n = r.HttpRequest.post(e, o, s, c, l);
                          break;
                        }
                      default:
                        {
                          cc.error("unkonw  http request method!");
                        }
                    }
                    return [4, n];
                  }
                case 1:
                  {
                    if (p = i.sent(), r.HttpRequest.isWeb) {
                      if ((f = p.data && JSON.parse(p.data)).bizSuccess) {
                        a.default.inst.saveSeverTime(f.serverTime);
                        return [2, f];
                      }
                      throw this.onErrorCode(f.bizErrorCode, f.bizErrorMsg), f.bizErrorCode;
                    }
                    if (f = {}, p) {
                      f = (null === (u = p.data) || 0 === u ? 0 : u.data) && JSON.parse(p.data.data);
                      console.warn("JSON.parse(ret.data.data)", f);
                      if (f.bizSuccess) {
                        a.default.inst.saveSeverTime(f.serverTime);
                        return [2, f];
                      }
                      throw this.onErrorCode(f.bizErrorCode, f.bizErrorMsg), f.bizErrorCode;
                    }
                    throw "QiMenError";
                  }
              }
            });
          });
        };
        t.onErrorCode = function () {};
        return t;
      }();
    o.NetBase = c;
    cc._RF.pop();
  }, {
    "../Framework/Net/HttpRequest": "HttpRequest",
    "../Framework/Platform/Platform": "Platform",
    "../Model/PlayerModel": "PlayerModel"
  }],
  Net: [function (t, e, o) {
    cc._RF.push(e, "bf5fda7wmRPbYJTimAqgUif", "Net");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      });
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.ErrorCode = o.Net = 0;
    var r = t("./NetBase"),
      s = t("./NetApi"),
      a = function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        i(e, t);
        e.login = function (t) {
          return this.post(s.NetApi.Apis.login, {}, {
            inviterId: t
          });
        };
        e.startGame = function () {
          return this.post(s.NetApi.Apis.startGameV2, {}, {});
        };
        e.useItem = function (t, e) {
          return this.post(s.NetApi.Apis.useItem, {}, {
            gameCode: t,
            itemId: e
          });
        };
        e.watchAbs = function (t, e) {
          return this.post(s.NetApi.Apis.watchAbs, {}, {
            gameCode: t,
            itemId: e
          });
        };
        e.queryLevels = function () {
          return this.post(s.NetApi.Apis.queryLevels, {}, {});
        };
        e.settlement = function (t, e, o) {
          console.log("Pass Time ./..........", e);
          return this.post(s.NetApi.Apis.settlement, {}, {
            gameCode: t,
            passLevelTime: e,
            sign: o
          });
        };
        e.getSubscribe = function () {
          return this.post(s.NetApi.Apis.getSubscribe, {}, {});
        };
        e.setSubscribe = function (t) {
          return this.post(s.NetApi.Apis.setSubscribe, {}, {
            state: t
          });
        };
        e.finisheSubscribe = function () {
          return this.post(s.NetApi.Apis.finisheSubscribe, {}, {});
        };
        e.getTasks = function () {
          return this.post(s.NetApi.Apis.getTasks, {}, {});
        };
        e.finisheTask = function (t) {
          return this.post(s.NetApi.Apis.finisheTask, {}, {
            taskId: t
          });
        };
        e.updateTask = function (t) {
          return this.post(s.NetApi.Apis.updateTask, {}, {
            taskId: t
          });
        };
        e.queryPassTime = function () {
          return this.post(s.NetApi.Apis.queryPassTime, {}, {});
        };
        e.reportLog = function (t) {
          return this.post(s.NetApi.Apis.reportLog, {}, {
            eventInfos: t
          });
        };
        return e;
      }(r.NetBase);
    o.Net = a;
    (function (t) {
      t[t.ok = 0] = "ok";
      t[t.param_error = 1] = "param_error";
      t[t.appid_error = 2] = "appid_error";
      t[t.session_key_error = 3] = "session_key_error";
      t[t.db_not_ready = 10] = "db_not_ready";
      t[t.db_error = 11] = "db_error";
      t[t.account_no = 1001] = "account_no";
      t[t.account_passwd_error = 1002] = "account_passwd_error";
      t[t.account_exist = 1003] = "account_exist";
      t[t.account_load_error = 1010] = "account_load_error";
      t[t.api_error = 2001] = "api_error";
      t[t.api_query_error = 2002] = "api_query_error";
      t[t.api_result_error = 2003] = "api_result_error";
      t[t.rank_error = 5e3] = "rank_error";
      t[t.rank_active_not_open = 5010] = "rank_active_not_open";
      t[t.rank_active_not_exist = 5011] = "rank_active_not_exist";
      t[t.role_no = 10001] = "role_no";
      t[t.role_exist = 10004] = "role_exist";
      t[t.role_token_error = 10005] = "role_token_error";
      t[t.role_no_mail = 10006] = "role_no_mail";
      t[t.role_no_taskId = 10007] = "role_no_taskId";
      t[t.role_no_taskType = 10008] = "role_no_taskType";
      t[t.login_error = 10011] = "login_error";
      t[t.task_can_not_reward = 10031] = "task_can_not_reward";
      t[t.task_not_found = 10032] = "task_not_found";
    })(o.ErrorCode || (o.ErrorCode = {}));
    cc._RF.pop();
  }, {
    "./NetApi": "NetApi",
    "./NetBase": "NetBase"
  }],
  NodePool: [function (t, e, o) {
    cc._RF.push(e, "040c9gg3vJDmYzBE+Z6ypRm", "NodePool");
    var n = this && this.__values || function (t) {
      var e = "function" == typeof Symbol && Symbol.iterator,
        o = e && t[e],
        n = 0;
      if (o) {
        return o.call(t);
      }
      if (t && "number" == typeof t.length) {
        return {
          next: function () {
            t && n >= t.length && (t = 0);
            return {
              value: t && t[n++],
              done: !t
            };
          }
        };
      }
      throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.NodePool = 0;
    var i = t("./ResLoader"),
      r = function () {
        function t() {
          this._isReady = !1;
          this._createCount = 0;
          this._warterMark = 10;
          this._res = null;
          this._nodes = new Array();
        }
        t.prototype.isReady = function () {
          return this._isReady;
        };
        t.prototype.init = function () {
          var t = this;
          if (this._isReady) {
            cc.error("already inited!");
          } else {
            var e = arguments[0],
              o = null;
            2 == arguments.length && "function" == typeof arguments[1] && (o = arguments[1]);
            if (e instanceof cc.Prefab) {
              this._res = e;
              this._res.addRef();
              this._isReady = !0;
              return o && o(null, this);
            }
            "string" != typeof arguments[0] ? console.error("NodePool init error " + arguments[0]) : i.resLoader.loadRes(arguments[0], cc.Prefab, function (e, n) {
              e || (t._res = n, t._res.addRef(), t._isReady = !0);
              o && o(e, t);
            });
          }
        };
        t.prototype.prepareNode = function (t) {
          if (this.isReady) {
            for (var e = 0; e < t; ++e) {
              var o = cc.instantiate(this._res);
              this._createCount++;
              this._nodes.push(o);
            }
          } else {
            cc.error("node pool not ready!");
          }
        };
        t.prototype.getNode = function () {
          return this.isReady ? this._nodes.length > 0 ? this._nodes.pop() : (this._createCount++, cc.instantiate(this._res)) : null;
        };
        t.prototype.freeNode = function (t) {
          if (!t || !cc.isValid(t)) {
            cc.error("[ERROR] PrefabPool: freePrefab: isValid node");
            return this._createCount--;
          }
          this._nodes.length > this._warterMark ? (this._createCount--, t.destroy()) : (t.removeFromParent(!0), t.cleanup(), this._nodes.push(t));
        };
        t.prototype.setWaterMark = function (t) {
          this._warterMark = t;
        };
        t.prototype.isUnuse = function () {
          this._nodes.length > this._createCount && cc.error("PrefabPool: _nodes.length > _createCount");
          return this._nodes.length == this._createCount;
        };
        t.prototype.destory = function () {
          var t, e;
          try {
            for (var o = n(this._nodes), i = o.next(); !i.done; i = o.next()) i.value.destroy();
          } catch (r) {
            t = {
              error: r
            };
          } finally {
            try {
              if (i && !i.done && (e = o.return)) {
                e.call(o);
              }
            } finally {
              if (t) {
                throw t.error;
              }
            }
          }
          this._createCount -= this._nodes.length;
          this._nodes.length = 0;
          this._res.decRef();
        };
        return t;
      }();
    o.NodePool = r;
    cc._RF.pop();
  }, {
    "./ResLoader": "ResLoader"
  }],
  ObjectUtils: [function (t, e, o) {
    cc._RF.push(e, "51d91s9F2xI8Y2K/NEwP6RC", "ObjectUtils");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = function () {
      function t() {}
      t.isEmpty = function (t) {
        return null == t;
      };
      t.getProperty = function (t, e, o) {
        return t && null !== t[e] && 0 !== t[e] ? t[e] : o;
      };
      t.getPropertyByNames = function (t, e) {
        for (var o = [], n = 2; n < arguments.length; n++) o[n - 2] = arguments[n];
        for (var i = t, r = 0; r < o.length && i; r++) {
          var s = o[r];
          if (null === i[s] || 0 === i[s]) {
            break;
          }
          i = i[s];
          if (r === o.length - 1 && null != i) {
            return i;
          }
        }
        return e;
      };
      t.getPropertyStringByNames = function (t, e) {
        for (var o = [], n = 2; n < arguments.length; n++) o[n - 2] = arguments[n];
        for (var i = t, r = e, s = 0; s < o.length && i; s++) {
          var a = o[s];
          if (null === i[a] || 0 === i[a]) {
            break;
          }
          i = i[a];
          if (s === o.length - 1 && null != i) {
            var c = i;
            "string" == typeof c ? r = c : "number" == typeof c && (r = c.toString());
            break;
          }
        }
        return r;
      };
      t.getPropertyNumberByNames = function (t, e) {
        for (var o = [], n = 2; n < arguments.length; n++) o[n - 2] = arguments[n];
        for (var i = t, r = e, s = 0; s < o.length && i; s++) {
          var a = o[s];
          if (null === i[a] || 0 === i[a]) {
            break;
          }
          i = i[a];
          if (s === o.length - 1 && null != i) {
            var c = i;
            "number" == typeof c ? r = c : "string" == typeof c && (r = parseInt(c));
            break;
          }
        }
        return r;
      };
      t.is = function (t, e) {
        var o = !1;
        e === Function && "function" == typeof t ? o = !0 : e === Number && "number" == typeof t ? o = !0 : e === Boolean && "boolean" == typeof t ? o = !0 : e === String && "string" == typeof t ? o = !0 : "object" == typeof t && (o = t instanceof e);
        return o;
      };
      t.isString = function (t) {
        return "string" == typeof t;
      };
      t.isNumber = function (t) {
        return "number" == typeof t;
      };
      t.isFunction = function (t) {
        return "function" == typeof t;
      };
      t.getClassName = function (t) {
        return null != t && t.constructor && null !== t.constructor.name && 0 !== t.constructor.name ? t.constructor.name : "";
      };
      return t;
    }();
    o.default = n;
    cc._RF.pop();
  }, {}],
  PageViewOptimizer: [function (t, e, o) {
    cc._RF.push(e, "c708dNHzrNOs77i3qSrWppR", "PageViewOptimizer");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.LoopType = o.Indicator = 0;
    var s,
      a,
      c = t("../../Define/EventId"),
      l = t("../Event/EventMgr"),
      u = t("../Utils/Utils"),
      p = t("./ListViewOptimizer");
    (function (t) {
      t[t.UnShow = 0] = "UnShow";
      t[t.Show = 1] = "Show";
    })(s = o.Indicator || (o.Indicator = {}));
    (function (t) {
      t[t.NotLoop = 0] = "NotLoop";
      t[t.Loop = 1] = "Loop";
    })(a = o.LoopType || (o.LoopType = {}));
    var f = cc._decorator,
      h = f.ccclass,
      d = f.property,
      _ = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.indicator = s.Show;
          e.isLoop = a.NotLoop;
          e.pageIdxBg = null;
          e.pageIdxIcon = null;
          e.indicatorBGSize = 10;
          e.indicatorSelSize = 10;
          e.indicatorSpacing = 10;
          e.startTime = 0;
          e.startPos = null;
          e.pageIdx = null;
          e.itemWidth = 0;
          e.itemHeight = 0;
          e.speed = 0;
          e.indicatorNode = null;
          e.indicators = [];
          e.arrows = null;
          return e;
        }
        i(e, t);
        e.prototype.onLoad = function () {
          t.prototype.onLoad.call(this);
          this.listview.inertia = !1;
          this.listview.node.on(cc.Node.EventType.TOUCH_START, this._touchStart, this);
          this.listview.node.on(cc.Node.EventType.TOUCH_END, this._touchEnded, this);
          this.listview.node.on(cc.Node.EventType.TOUCH_CANCEL, this._touchEnded, this);
          this.content.on(cc.Node.EventType.POSITION_CHANGED, this._updateContentView.bind(this));
          this.nodeDesc = "pageview";
          var e = cc.instantiate(this.itemTemplate);
          this.itemWidth = e.width;
          this.itemHeight = e.height;
          this.speed = 1.3 * this.itemWidth;
          e.destroy();
          e = null;
        };
        e.prototype._setPageIndex = function () {
          for (var t = 0; t < this.indicators.length; t++) {
            var e = this.indicators[t],
              o = e.getComponent(cc.Sprite);
            Number(t) + 1 == this.pageIdx ? (o.spriteFrame = this.pageIdxIcon, e.width = this.indicatorSelSize, e.height = this.indicatorSelSize) : (o.spriteFrame = this.pageIdxBg, e.width = this.indicatorBGSize, e.height = this.indicatorBGSize);
          }
        };
        e.prototype._canMove = function (t) {
          var e = t.x - this.startPos.x,
            o = this.itemWidth;
          if (this.isVertical) {
            e = t.y - this.startPos.y;
            o = this.itemHeight;
          }
          var n = u.default.getServerTime(),
            i = Math.abs(e),
            r = (n - this.startTime) / 1e3;
          return i >= o / 2 || i > 25 && i / r >= this.speed;
        };
        e.prototype._touchEnded = function (t) {
          if ((!this.isVertical || this.scrollView.vertical) && (this.isVertical || this.scrollView.horizontal)) {
            var e = t.getLocation(),
              o = this.pageIdx;
            if (!this.isVertical && this.content.x >= -this.itemWidth / 2 || this.isVertical && this.content.y <= this.itemHeight / 2) {
              this.isLoop == a.Loop && this._canMove(e) ? (this.pageIdx = this.data.length, this.jumpToBottom()) : this.isLoop == a.NotLoop && (this.pageIdx = 1);
              return this.pageIdx != o && (this._setPageIndex(), l.EVENT.emit(c.EventId.ON_PAGEVIEW_INDEX_CHANGED, this.pageIdx));
            }
            if (!this.isVertical && this.content.x <= -this.rowNum * (this.spacing + this.itemWidth) + this.itemWidth / 2 || this.isVertical && this.content.y > this.rowNum * (this.spacing + this.itemHeight) - this.itemHeight / 2) {
              this.isLoop == a.Loop && this._canMove(e) ? (this.pageIdx = 1, this.jumpToTop()) : this.isLoop == a.NotLoop && (this.pageIdx = this.data.length);
              return this.pageIdx != o && (this._setPageIndex(), l.EVENT.emit(c.EventId.ON_PAGEVIEW_INDEX_CHANGED, this.pageIdx));
            }
            var n = this._canMove(e),
              i = e.x - this.startPos.x,
              r = this.itemWidth;
            if (n) {
              var s = 1;
              this.isVertical && (s = -1);
              i > 0 ? this.pageIdx = this.pageIdx - s : this.pageIdx = this.pageIdx + s;
            }
            this.pageIdx = Math.max(1, this.pageIdx);
            this.pageIdx = Math.min(this.data.length, this.pageIdx);
            var u = this.getItemPosition(this.pageIdx),
              p = u.x - r / 2,
              f = cc.v2(p, 0);
            this.isVertical && (p = u.y - r / 2, f = cc.v2(0, p));
            this.listview.scrollToOffset(f, .1);
            o != this.pageIdx && (this._setPageIndex(), l.EVENT.emit(c.EventId.ON_PAGEVIEW_INDEX_CHANGED, this.pageIdx));
          }
        };
        e.prototype._touchStart = function (t) {
          this.startTime = u.default.getServerTime();
          this.startPos = t.getLocation();
        };
        e.prototype.getItemPosition = function (t) {
          if (0 === t) {
            t = 1;
          }
          var e = new cc.Vec2(0, 0);
          t = Math.min(this.data.length, t);
          this.isVertical ? e.y = (this.spacing + this.itemHeight) * t - this.itemHeight / 2 : e.x = (this.spacing + this.itemWidth) * t - this.itemWidth / 2;
          return e;
        };
        e.prototype.setData = function (e, o, n) {
          0 === n && (n = !1);
          this.pageIdx = this.initIdx;
          t.prototype.setData.call(this, e, o, n);
          if (this.indicator == s.Show) {
            var i = this.listview.node.getChildByName("_indicator_");
            if (!i) {
              var r = (i = new cc.Node("_indicator_")).addComponent(cc.Layout);
              r.type = cc.Layout.Type.HORIZONTAL;
              r.horizontalDirection = cc.Layout.HorizontalDirection.LEFT_TO_RIGHT;
              i.height = this.indicatorBGSize;
              i.x = 0;
              i.y = -this.node.height / 2 + this.indicatorBGSize / 2 + 5;
              r.spacingX = this.indicatorSpacing;
              this.isVertical && (r.type = cc.Layout.Type.VERTICAL, r.verticalDirection = cc.Layout.VerticalDirection.TOP_TO_BOTTOM, i.width = this.indicatorBGSize, i.height = 0, i.y = 0, i.x = -this.node.width / 2 + this.indicatorBGSize / 2 + 5, r.spacingY = this.indicatorSpacing);
              this.indicatorNode = i;
              this.indicatorNode.parent = this.listview.node;
              this.indicatorNode.zIndex = -1;
            }
            for (var a = this.indicators.length; a < this.rowNum; a++) {
              (u = new cc.Node()).width = this.indicatorBGSize;
              u.height = this.indicatorBGSize;
              u.parent = this.indicatorNode;
              var c = new cc.Node();
              c.parent = u;
              var l = c.addComponent(cc.Sprite);
              this.indicators.push(c);
              l.spriteFrame = this.pageIdxBg;
              c.width = this.indicatorBGSize;
              c.height = this.indicatorBGSize;
              this.isVertical ? this.indicatorNode.height += this.indicatorSpacing + this.indicatorBGSize : this.indicatorNode.width += this.indicatorSpacing + this.indicatorBGSize;
            }
            for (a = this.indicators.length; a > this.rowNum; a--) {
              var u;
              (u = this.indicators[a - 1]).parent.destroy();
              this.indicators.splice(a - 1);
              this.isVertical ? this.indicatorNode.height -= this.indicatorSpacing + this.indicatorBGSize : this.indicatorNode.width -= this.indicatorSpacing + this.indicatorBGSize;
            }
            this._setPageIndex();
          }
          this._createArrows();
        };
        e.prototype._createArrows = function () {
          var t = this.listview.node.getChildByName("_arrow_");
          if (t) {
            t.destroy();
          }
          var e = this.listview.content.width,
            o = this.listview.node.width;
          this.isVertical && (e = this.listview.content.height, o = this.listview.node.height);
          this.arrows = this.listview.node.getChildByName("_arrows_");
          if (!(!this.arrow || e <= o || this.arrows)) {
            this.arrowNode = new cc.Node("_arrows_");
            this.arrowNode.parent = this.listview.node;
            var n = cc.instantiate(this.arrow);
            n.parent = this.arrowNode;
            var i = cc.v2(-this.listview.node.width / 2 + n.height / 2 + 20, 0),
              r = -90;
            this.isVertical && (i = cc.v2(0, this.listview.node.height / 2 - n.height / 2 - 20), r = 180);
            n.angle = r;
            n.setPosition(i);
            n.name = "_leftArrow_";
            1 == this.pageIdx ? n.opacity = 0 : n.opacity = 255;
            var s = cc.instantiate(this.arrow);
            s.parent = this.arrowNode;
            i = cc.v2(this.listview.node.width / 2 - s.height / 2 - 20, 0);
            r = 90;
            this.isVertical && (i = cc.v2(0, -this.listview.node.height / 2 + s.height / 2 + 20), r = 0);
            s.angle = r;
            s.setPosition(i);
            s.name = "_rightArrow_";
            this.pageIdx == this.data.length ? s.opacity = 0 : s.opacity = 255;
          }
        };
        e.prototype.setIndicatorPostion = function (t) {
          this.indicatorNode.setPosition(t);
        };
        e.prototype.getCurrentPageIndex = function () {
          return this.pageIdx - 1;
        };
        e.prototype.setCurrentPageIndex = function (e) {
          e < 0 || e > this.rowNum - 1 ? cc.log("index error! max index is " + (this.rowNum - 1) + ", param idx is " + e) : e + 1 != this.pageIdx && (this.pageIdx = e + 1, t.prototype.jumpTo.call(this, e), this._setPageIndex(), l.EVENT.emit(c.EventId.ON_PAGEVIEW_INDEX_CHANGED, this.pageIdx));
        };
        e.prototype.addPage = function (t) {
          this.data.push(t);
          this.setData(this.data, this.itemUpdateFunc);
        };
        e.prototype.insertPage = function (t, e) {
          e = Math.min(e, this.rowNum);
          e = Math.max(e, 0);
          this.data.push(t);
          var o = this.data[e];
          this.data[e] = t;
          for (var n = this.rowNum - 1; n > e; n--) n == e + 1 ? this.data[n] = o : this.data[n] = this.data[n - 1];
          this.setData(this.data, this.itemUpdateFunc);
        };
        e.prototype.removePageAtIndex = function (t) {
          t < 0 || t > this.rowNum - 1 ? cc.log("index error! max index is " + (this.rowNum - 1) + ", param idx is " + t) : (this.data.splice(t, 1), this.setData(this.data, this.itemUpdateFunc));
        };
        e.prototype.scrollToPage = function (e, o) {
          0 === o && (o = .1);
          e < 0 || e > this.rowNum - 1 ? cc.log("index error! max index is " + (this.rowNum - 1) + ", param idx is " + e) : e + 1 != this.pageIdx && (this.pageIdx = e + 1, t.prototype.scrollTo.call(this, e, o), this._setPageIndex(), l.EVENT.emit(c.EventId.ON_PAGEVIEW_INDEX_CHANGED, this.pageIdx));
        };
        e.prototype.getCurPage = function () {
          var t = this.getItemPosition(this.pageIdx);
          t = this.listview.content.convertToWorldSpaceAR(t);
          t = cc.director.getScene().convertToNodeSpaceAR(t);
          return this.getItem(t);
        };
        e.prototype._updateContentView = function () {
          t.prototype._updateContentView.call(this, this.isLoop === a.Loop);
          if (this.arrowNode) {
            this.showArrow();
            for (var e = this.arrowNode.children, o = 0; o < e.length; o++) e[o].opacity = 255;
            this.pageIdx == this.data.length && (this.arrowNode.getChildByName("_rightArrow_").opacity = 0);
            1 == this.pageIdx && (this.arrowNode.getChildByName("_leftArrow_").opacity = 0);
          }
        };
        r([d({
          type: cc.Enum(s)
        })], e.prototype, "indicator", 0);
        r([d({
          type: cc.Enum(a)
        })], e.prototype, "isLoop", 0);
        r([d(cc.SpriteFrame)], e.prototype, "pageIdxBg", 0);
        r([d(cc.SpriteFrame)], e.prototype, "pageIdxIcon", 0);
        r([d], e.prototype, "indicatorBGSize", 0);
        r([d], e.prototype, "indicatorSelSize", 0);
        r([d], e.prototype, "indicatorSpacing", 0);
        return r([h], e);
      }(p.default);
    o.default = _;
    cc._RF.pop();
  }, {
    "../../Define/EventId": "EventId",
    "../Event/EventMgr": "EventMgr",
    "../Utils/Utils": "Utils",
    "./ListViewOptimizer": "ListViewOptimizer"
  }],
  ParticleActvator: [function (t, e, o) {
    cc._RF.push(e, "b1162EEFPxHLZ+55lAl2hJu", "ParticleActvator");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = cc._decorator,
      a = s.ccclass,
      c = (s.property, function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        i(e, t);
        e.prototype.onLoad = function () {
          this._particle = this.node.getComponent(cc.ParticleSystem);
          this._particle || cc.error("ParticleActvator should be atttached to a cc.ParticleSystem node!");
        };
        e.prototype.onEnable = function () {
          if (this._particle) {
            this._particle.resetSystem();
          }
        };
        return r([a], e);
      }(cc.Component));
    o.default = c;
    cc._RF.pop();
  }, {}],
  PicSystem: [function (t, e, o) {
    cc._RF.push(e, "d4c1edJPNVOo7JX3QHR2d7v", "PicSystem");
    var n = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      i = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var r = t("../Common/Constant"),
      s = t("../Framework/UI/UIMgr"),
      a = function () {
        function t() {
          this.picSpriteFrames = new Object();
          this.skinPath = "Pic";
          this._obstacleFrames = null;
        }
        t.prototype.initialize = function () {
          return n(this, 0, 0, function () {
            var t = this;
            return i(this, function () {
              return [2, new Promise(function (e) {
                cc.resources.loadDir(t.skinPath, cc.SpriteFrame, null, function (o, n) {
                  o || 0 === n.length ? s.default.inst.showToast("skin load error .....") : (n.forEach(function (e) {
                    Number(e.name) == r.LINK_GAME_OBSTACLE_ID ? t._obstacleFrames = e : t.picSpriteFrames[Number(e.name)] = e;
                  }), e(n));
                });
              })];
            });
          });
        };
        t.prototype.getRandomPic = function (t) {
          var e = Object.keys(this.picSpriteFrames);
          Math.min(e.length, t);
          return e.sort(function () {
            return Math.random() < .5 ? 1 : -1;
          }).slice(0, t);
        };
        t.prototype.getPicSpriteFrame = function (t) {
          return this.picSpriteFrames[t] || this._obstacleFrames;
        };
        return t;
      }();
    o.default = new a();
    cc._RF.pop();
  }, {
    "../Common/Constant": "Constant",
    "../Framework/UI/UIMgr": "UIMgr"
  }],
  Picitem: [function (t, e, o) {
    cc._RF.push(e, "9281ed/rvVK8LYn2sGQx2qB", "Picitem");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.Picitem = 0;
    var s = cc._decorator,
      a = s.ccclass,
      c = s.property,
      l = t("../../../Common/AudioConfig"),
      u = t("../../../Common/Constant"),
      p = t("../../../Define/EventId"),
      f = t("../../../Framework/Event/EventMgr"),
      h = t("../../../System/AudioSystem"),
      d = t("../../../System/PicSystem"),
      _ = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.picAni = null;
          e.selectedNode1 = null;
          e.selectedNode2 = null;
          e.apperNode = null;
          e.particleNode = null;
          e.brokenNode = null;
          e.isSelected = !1;
          e._curAni = null;
          e._isVaild = !1;
          return e;
        }
        i(e, t);
        e.prototype.onLoad = function () {
          var t = this;
          this.picAni.on("finished", function () {
            t.playAniFinish();
          });
        };
        e.prototype.onEnable = function () {
          f.EVENT.on(p.EventId.ON_CLICK_LINK_GAME_OBSTACLE, this.onStopJumpAction, this);
          f.EVENT.on(p.EventId.ON_CLICK_LINK_GAME_PIC, this.onStopJumpAction, this);
        };
        e.prototype.onDisable = function () {
          f.EVENT.off(p.EventId.ON_CLICK_LINK_GAME_OBSTACLE, this.onStopJumpAction, this);
          f.EVENT.off(p.EventId.ON_CLICK_LINK_GAME_PIC, this.onStopJumpAction, this);
        };
        e.prototype.initItem = function (t, e) {
          this.backNormalState();
          this.picId = t;
          this.pos = e;
          this._isVaild = !0;
          this.iconSpr.spriteFrame = d.default.getPicSpriteFrame(t);
          this.node.zIndex = e.y;
        };
        e.prototype.playDelayShow = function (t) {
          var e = this;
          this.node.active = !1;
          setTimeout(function () {
            e.node.active = !0;
            e.playPicAnimation("Appear");
          }, t);
        };
        e.prototype.onClickPicItem = function () {
          if (this._isVaild) {
            h.default.play(l.AUDIOS_PATH.block_click);
            if (this.picId == u.LINK_GAME_OBSTACLE_ID) {
              console.error("\u969c\u788d\u7269\u4e0d\u53ef\u8fde\u7ebf");
              return f.EVENT.emit(p.EventId.ON_CLICK_LINK_GAME_OBSTACLE, this);
            }
            f.EVENT.emit(p.EventId.ON_CLICK_LINK_GAME_PIC, this);
          }
        };
        e.prototype.onStopJumpAction = function () {
          if ("Tishi_jump" == this._curAni) {
            this.backNormalState();
          }
        };
        e.prototype.selected = function () {
          this.playPicAnimation("Select");
          this.isSelected = !0;
        };
        e.prototype.unSelected = function () {
          this.backNormalState();
          this.isSelected = !1;
        };
        e.prototype.backNormalState = function () {
          this._curAni = null;
          this.node.active = !0;
          this.picAni.stop();
          this.selectedNode1.active = !1;
          this.selectedNode2.active = !1;
          this.apperNode.active = !1;
          this.particleNode.active = !1;
          this.brokenNode.active = !1;
          this.iconSpr.node.active = !0;
          this.iconSpr.node.opacity = 255;
          this.iconSpr.node.scale = 1;
          this.iconSpr.node.x = 0;
          this.iconSpr.node.y = 0;
          this.iconSpr.node.angle = 0;
        };
        e.prototype.isObstacle = function () {
          return this.picId == u.LINK_GAME_OBSTACLE_ID;
        };
        e.prototype.showObstacleHint = function () {
          this.playPicAnimation("ZhangAi");
        };
        e.prototype.hideObstacleHint = function () {
          this.backNormalState();
        };
        e.prototype.playDisappear = function (t) {
          this._isVaild = !1;
          this.isObstacle() ? this.playPicAnimation("Posui", t) : this.playPicAnimation("Disappear", t);
        };
        e.prototype.showJumpHint = function () {
          this.playPicAnimation("Tishi_jump");
        };
        e.prototype.playPicAnimation = function (t, e) {
          switch (this._aniCb && (this._aniCb(), console.error("cb isExist ............................")), this.backNormalState(), t) {
            case "Appear":
              {
                this.apperNode.active = !0;
                this.particleNode.active = !0;
                break;
              }
            case "Disappear":
              {
                this.particleNode.active = !0;
                break;
              }
            case "Tishi_jump":
              {
                break;
              }
            case "Select":
              {
                this.selectedNode1.active = !0;
                this.selectedNode2.active = !0;
                break;
              }
            case "Posui":
              {
                this.brokenNode.active = !0;
              }
          }
          this._curAni = t;
          this.picAni.play(t);
          this._aniCb = e;
        };
        e.prototype.playAniFinish = function () {
          console.log("Play Animation finish.....");
          this._aniCb ? (this._aniCb(), this._aniCb = null, this.backNormalState()) : this.backNormalState();
        };
        r([c(cc.Sprite)], e.prototype, "iconSpr", 0);
        r([c(cc.Animation)], e.prototype, "picAni", 0);
        r([c(cc.Node)], e.prototype, "selectedNode1", 0);
        r([c(cc.Node)], e.prototype, "selectedNode2", 0);
        r([c(cc.Node)], e.prototype, "apperNode", 0);
        r([c(cc.Node)], e.prototype, "particleNode", 0);
        r([c(cc.Node)], e.prototype, "brokenNode", 0);
        return r([a], e);
      }(cc.Component);
    o.Picitem = _;
    cc._RF.pop();
  }, {
    "../../../Common/AudioConfig": "AudioConfig",
    "../../../Common/Constant": "Constant",
    "../../../Define/EventId": "EventId",
    "../../../Framework/Event/EventMgr": "EventMgr",
    "../../../System/AudioSystem": "AudioSystem",
    "../../../System/PicSystem": "PicSystem"
  }],
  PlatMgr: [function (t, e, o) {
    cc._RF.push(e, "0a62crjmExIYKEJYyW06GMG", "PlatMgr");
    var n = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      i = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var r = t("../Define/EventId"),
      s = t("../Framework/Event/EventMgr"),
      a = t("../Framework/Net/HttpRequest"),
      c = t("../Framework/Platform/Platform"),
      l = t("../Framework/Tools/BaseInfo"),
      u = t("./AfunRiskSDKController"),
      p = t("./Crypto"),
      f = t("./DoubleAwardController"),
      h = t("./ExitController"),
      d = t("./ExLogCtr"),
      _ = t("./LTrackerMgr"),
      y = t("./MtopMgr"),
      v = t("./Request"),
      m = t("./ShareMgr"),
      g = t("./TurnTaskController"),
      b = t("./WindVaneMgr"),
      I = function () {
        function t() {
          this._startTime = 0;
          this._endTime = 0;
        }
        Object.defineProperty(t, "inst", {
          get: function () {
            this._inst || (this._inst = new t());
            return this._inst;
          },
          enumerable: !1,
          configurable: !0
        });
        t.prototype.init = function () {
          return n(this, 0, 0, function () {
            var t, e;
            return i(this, function (o) {
              switch (o.label) {
                case 0:
                  {
                    p.default.inst.init();
                    t = c.Platform.getUrlInfo("model");
                    a.HttpRequest.isWeb = "ONLINE" != l.default.ENV && "web" == t;
                    e = this;
                    u.default.inst.init();
                    d.default.inst.init();
                    m.default.inst.init();
                    f.default.inst.init();
                    v.default.inst.init();
                    _.default.inst.init();
                    b.default.inst.init();
                    return [4, y.default.inst.init()];
                  }
                case 1:
                  {
                    o.sent();
                    this._initBaseInfo();
                    window.document.addEventListener("WV.Event.APP.Active", function () {
                      e._endTime = new Date().getTime();
                      console.log("====> on show <=====", e._endTime);
                      s.EVENT.emit(r.EventId.ON_SHOW);
                      s.EVENT.emit(r.EventId.ON_REFRESH_COIN);
                    }, !1);
                    window.document.addEventListener("WV.Event.APP.Background", function () {
                      e._startTime = new Date().getTime();
                      console.log("====> on hide <=====", e._startTime);
                    }, !1);
                    g.default.inst.getTaskList();
                    window.openExitDialog = function () {
                      h.default.inst.openExit();
                    };
                    try {
                      window.WindVane.call("WebAppInterface", "enableHookNativeBack", {});
                      window._windvane_backControl = function () {
                        return "true";
                      };
                    } catch (n) {}
                    try {
                      window.WindVane.call("WebAppInterface", "forbidPanGesture", {}, function () {}, function () {});
                    } catch (n) {}
                    return [2];
                  }
              }
            });
          });
        };
        Object.defineProperty(t.prototype, "browserTime", {
          get: function () {
            console.log("\u5207\u5c4f\u65f6\u95f4", (this._endTime - this._startTime) / 1e3 | 0);
            return (this._endTime - this._startTime) / 1e3 | 0;
          },
          enumerable: !1,
          configurable: !0
        });
        t.prototype._initBaseInfo = function () {
          if (window.BaseInfoData) {
            l.default.ACTID = window.BaseInfoData.ACTID;
            l.default.COLLECTIONID = window.BaseInfoData.COLLECTIONID;
            l.default.ENV = window.BaseInfoData.ENV;
            l.default.TASK_GAME_PROP = window.BaseInfoData.TASK_GAME_PROP;
            window.BaseInfoData.RANK_COPY_ID ? l.default.RANK_COPY_ID = window.BaseInfoData.RANK_COPY_ID : l.default.RANK_COPY_ID = l.default.RANK_COPY_ID;
            window.BaseInfoData.RANK_ACT_ID ? l.default.RANK_ACT_ID = window.BaseInfoData.RANK_ACT_ID : l.default.RANK_ACT_ID = l.default.RANK_ACT_ID;
          }
        };
        return t;
      }();
    o.default = I;
    cc._RF.pop();
  }, {
    "../Define/EventId": "EventId",
    "../Framework/Event/EventMgr": "EventMgr",
    "../Framework/Net/HttpRequest": "HttpRequest",
    "../Framework/Platform/Platform": "Platform",
    "../Framework/Tools/BaseInfo": "BaseInfo",
    "./AfunRiskSDKController": "AfunRiskSDKController",
    "./Crypto": "Crypto",
    "./DoubleAwardController": "DoubleAwardController",
    "./ExLogCtr": "ExLogCtr",
    "./ExitController": "ExitController",
    "./LTrackerMgr": "LTrackerMgr",
    "./MtopMgr": "MtopMgr",
    "./Request": "Request",
    "./ShareMgr": "ShareMgr",
    "./TurnTaskController": "TurnTaskController",
    "./WindVaneMgr": "WindVaneMgr"
  }],
  PlatformDefault: [function (t, e, o) {
    cc._RF.push(e, "912f3M9gZFE3787ruyoaamY", "PlatformDefault");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = t("../Framework/UI/UIMgr"),
      i = function () {
        function t() {}
        t.prototype.initialize = function () {
          cc.log("\u521d\u59cb\u5316\u9ed8\u8ba4\u5e7f\u544a\u6846\u67b6");
        };
        t.prototype.showToast = function (t) {
          cc.log("\u663e\u793atoast  ", t);
        };
        t.prototype.shareAppMessage = function (t) {
          0 === t && (t = {});
          cc.log("\u5206\u4eab ", t);
        };
        t.prototype.vibrateShort = function (t) {
          0 === t && (t = {});
          cc.log("\u77ed\u9707\u52a8 ", t);
        };
        t.prototype.vibrateLong = function (t) {
          0 === t && (t = {});
          cc.log("\u957f\u9707\u52a8 ", t);
        };
        t.prototype.shareShowReward = function (t) {
          0 === t && (t = null);
          cc.log("\u76f4\u63a5\u6267\u884c\u5206\u4eab\u56de\u8c03");
          t && t();
        };
        t.prototype.showRewardVideo = function (t) {
          0 === t && (t = null);
          n.default.inst.showToast("\u64ad\u653e\u89c6\u9891\uff01\uff01\uff01");
          cc.log("\u76f4\u63a5\u6267\u884c\u89c6\u9891\u56de\u8c03");
          t && t();
        };
        t.prototype.showBannerAd = function () {
          cc.log("\u663e\u793abanner\u5e7f\u544a");
        };
        t.prototype.hideBannerAd = function (t) {
          0 === t && (t = !1);
          cc.log("\u9690\u85cfbanner\u5e7f\u544a\uff0c\u5237\u65b0\uff1a", t);
        };
        t.prototype.refreshBannerAd = function () {
          cc.log("\u5237\u65b0banner\u5e7f\u544a");
        };
        t.prototype.showInterstitialAd = function () {
          cc.log("\u663e\u793a\u63d2\u5c4f\u5e7f\u544a");
        };
        t.prototype.showCustomAd = function () {
          cc.log("\u663e\u793a\u81ea\u5b9a\u4e49\u5e7f\u544a");
        };
        t.prototype.hideCustomAd = function () {
          cc.log("\u9690\u85cf\u81ea\u5b9a\u4e49\u5e7f\u544a");
        };
        t.prototype.showGridAd = function () {
          cc.log("\u663e\u793a\u683c\u5b50\u5e7f\u544a");
        };
        t.prototype.hideGridAd = function () {
          cc.log("\u9690\u85cf\u683c\u5b50\u5e7f\u544a");
        };
        t.prototype.exitGame = function () {
          cc.log("\u9000\u51fa\u6e38\u620f");
        };
        t.prototype.__createVideoAd = function () {
          cc.log("\u521b\u5efa\u89c6\u9891\u5e7f\u544a");
        };
        t.prototype.__createBannerAd = function () {
          cc.log("\u521b\u5efabanner\u5e7f\u544a");
        };
        t.prototype.__createInterstitialAd = function () {
          cc.log("\u521b\u5efa\u63d2\u5c4f\u5e7f\u544a");
        };
        return t;
      }();
    o.default = new i();
    cc._RF.pop();
  }, {
    "../Framework/UI/UIMgr": "UIMgr"
  }],
  PlatformSystem: [function (t, e, o) {
    cc._RF.push(e, "a22d2MBCw9JeZ4CaZUuoOi/", "PlatformSystem");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = t("./PlatformDefault"),
      i = t("./PlatformWX"),
      r = function () {
        function t() {
          this._platformWX = i.default;
          this._platformDefault = n.default;
        }
        Object.defineProperty(t.prototype, "platform", {
          get: function () {
            switch (cc.sys.platform) {
              case cc.sys.WECHAT_GAME:
                {
                  return this._platformWX;
                }
              default:
                {
                  return this._platformDefault;
                }
            }
          },
          enumerable: !1,
          configurable: !0
        });
        t.prototype.initialize = function () {
          switch (cc.sys.platform) {
            case cc.sys.WECHAT_GAME:
              {
                this._platformWX.initialize();
                break;
              }
            default:
              {
                this._platformDefault.initialize();
              }
          }
        };
        return t;
      }();
    o.default = new r();
    cc._RF.pop();
  }, {
    "./PlatformDefault": "PlatformDefault",
    "./PlatformWX": "PlatformWX"
  }],
  PlatformWX: [function (t, e, o) {
    cc._RF.push(e, "5b030wJHVpEILrh6SvxUEpG", "PlatformWX");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = t("../Common/Helper"),
      i = t("../System/AudioSystem"),
      r = t("./wxConfig"),
      s = function () {
        function t() {
          this._onHideTime = 1 / 0;
          this._shareTimes = 0;
          this._shareSuccessHandler = null;
          this._videoSuccessHandler = null;
          this._showInterstitialAdTime = null;
          this._shareModalIsActive = !1;
        }
        t.prototype.initialize = function () {
          var t = this;
          cc.log("\u521d\u59cb\u5316\u5fae\u4fe1\u6846\u67b6");
          wx.showShareMenu({
            withShareTicket: !0,
            menus: ["shareAppMessage", "shareTimeline"],
            success: function () {},
            fail: function () {},
            complete: function () {}
          });
          wx.onShow(function () {
            if (null != t._shareSuccessHandler && !t._shareModalIsActive) {
              switch (t._shareTimes += 1, t._shareTimes) {
                case 1:
                  {
                    wx.showModal({
                      title: "\u5206\u4eab\u5931\u8d25",
                      content: "\u6210\u529f\u5206\u4eab\u5230\u7fa4\u5373\u53ef\u83b7\u5f97\u5956\u52b1",
                      success: function (e) {
                        e.confirm ? t.shareShowReward(t._shareSuccessHandler) : e.cancel && (t._shareSuccessHandler = null, t._shareTimes = 0);
                        t._shareModalIsActive = !1;
                      }
                    });
                    t._shareModalIsActive = !0;
                    break;
                  }
                case 2:
                  {
                    Date.now() - t._onHideTime >= 4e3 ? (t._shareSuccessHandler && t._shareSuccessHandler(), t._shareTimes = 0) : (wx.showModal({
                      title: "\u5206\u4eab\u5931\u8d25",
                      content: "\u6210\u529f\u5206\u4eab\u5230\u7fa4\u5373\u53ef\u83b7\u5f97\u5956\u52b1",
                      success: function (e) {
                        e.confirm ? t.shareShowReward(t._shareSuccessHandler) : e.cancel && (t._shareSuccessHandler = null, t._shareTimes = 0);
                        t._shareModalIsActive = !1;
                      }
                    }), t._shareModalIsActive = !0);
                    break;
                  }
                case 3:
                  {
                    t._shareSuccessHandler && t._shareSuccessHandler();
                    t._shareSuccessHandler = null;
                    t._shareTimes = 0;
                  }
              }
              t._onHideTime = 1 / 0;
            }
          });
          this.__createBannerAd();
          this.__createVideoAd();
          this.__createCustomAd();
          this.__createInterstitialAd();
          this.__createGridAd();
        };
        t.prototype.showToast = function (t) {
          var e = {
            title: "",
            icon: "none",
            duration: 2e3
          };
          Object.assign(e, t);
          wx.showToast(e);
        };
        t.prototype.shareAppMessage = function (t) {
          0 === t && (t = {});
          wx.shareAppMessage(t);
        };
        t.prototype.vibrateShort = function (t) {
          0 === t && (t = {});
          wx.vibrateShort(t);
        };
        t.prototype.vibrateLong = function (t) {
          0 === t && (t = {});
          wx.vibrateLong(t);
        };
        t.prototype.shareShowReward = function (t) {
          0 === t && (t = null);
          this._shareSuccessHandler = t;
          this._onHideTime = Date.now();
          this.shareAppMessage();
        };
        t.prototype.showRewardVideo = function (t) {
          var e = this;
          0 === t && (t = null);
          this._rewardVideo ? (this._videoSuccessHandler = t, this._rewardVideo.show().then(function () {
            cc.log("\u89c6\u9891\u64ad\u653e\u6210\u529f");
          }).catch(function () {
            e._rewardVideo.load().then(function () {
              e._rewardVideo.show().then(function () {
                cc.log("\u89c6\u9891\u91cd\u65b0\u52a0\u8f7d\uff0c\u64ad\u653e\u6210\u529f");
              });
            }).catch(function () {
              e.shareShowReward(t);
              e._videoSuccessHandler = null;
            });
          })) : this.__turnVideoToShare(t);
        };
        t.prototype.showBannerAd = function () {
          var t = this;
          if (this._bannerAd) {
            var e = wx.getSystemInfoSync(),
              o = e.screenWidth,
              n = e.screenHeight;
            this._bannerAd.show().then(function () {
              t._bannerAd.style.left = (o - t._bannerAd.style.realWidth) / 2;
              t._bannerAd.style.top = n - t._bannerAd.style.realHeight;
            }).catch(function (t) {
              cc.log("banner\u5e7f\u544a\u663e\u793a\u51fa\u9519", t);
            });
          }
        };
        t.prototype.hideBannerAd = function (t) {
          0 === t && (t = !1);
          this._bannerAd && (this._bannerAd.hide(), t && this.refreshBannerAd());
        };
        t.prototype.refreshBannerAd = function () {
          if (this._bannerAd) {
            this._bannerAd.destroy();
            this.__createBannerAd();
          }
        };
        t.prototype.showInterstitialAd = function () {
          if (this._interstitialAd) {
            var t = Date.now();
            null != this._showInterstitialAdTime ? t - this._showInterstitialAdTime > 12e4 && (this._interstitialAd.show(), this._showInterstitialAdTime = t) : this._showInterstitialAdTime = t;
          }
        };
        t.prototype.showCustomAd = function () {
          if (this._customAd) {
            this._customAd.show().catch(function (t) {
              cc.log("\u539f\u751f\u5e7f\u544a\u663e\u793a\u51fa\u9519", t);
            });
          }
        };
        t.prototype.hideCustomAd = function () {
          if (this._customAd) {
            this._customAd.hide().catch(function (t) {
              cc.log("\u539f\u751f\u5e7f\u544a\u9690\u85cf\u51fa\u9519", t);
            });
          }
        };
        t.prototype.showGridAd = function () {
          if (this._gridAd) {
            this._gridAd.show().catch(function (t) {
              cc.log("\u683c\u5b50\u5e7f\u544a\u663e\u793a\u51fa\u9519", t);
            });
          }
        };
        t.prototype.hideGridAd = function () {
          if (this._gridAd) {
            this._gridAd.hide().catch(function (t) {
              cc.log("\u683c\u5b50\u5e7f\u544a\u9690\u85cf\u51fa\u9519", t);
            });
          }
        };
        t.prototype.exitGame = function () {
          wx.exitMiniProgram({});
        };
        t.prototype.__createVideoAd = function () {
          var t = this;
          if (r.WX_CONFIG.AD_ID.video) {
            this._rewardVideo = wx.createRewardedVideoAd({
              adUnitId: r.WX_CONFIG.AD_ID.video
            });
            this._rewardVideo.onClose(function (e) {
              if (e && e.isEnded || 0 === e) {
                if (null == t._videoSuccessHandler) {
                  return;
                }
                if (t._videoSuccessHandler) {
                  t._videoSuccessHandler();
                }
              } else {
                t.showToast({
                  title: "\u5b8c\u6574\u89c2\u770b\u89c6\u9891\u624d\u6709\u5956\u52b1\u54e6"
                });
              }
              t._videoSuccessHandler = null;
              i.default.stopMusic();
              i.default.playMusic();
            });
            this._rewardVideo.onError(function () {
              t.showToast({
                title: "\u6682\u65f6\u6ca1\u6709\u53ef\u89c2\u770b\u7684\u89c6\u9891"
              });
              t.shareShowReward(t._videoSuccessHandler);
              t._videoSuccessHandler = null;
            });
          }
        };
        t.prototype.__createBannerAd = function () {
          if (r.WX_CONFIG.AD_ID.banner) {
            var t = wx.getSystemInfoSync();
            this._bannerAd = wx.createBannerAd({
              adUnitId: r.WX_CONFIG.AD_ID.banner,
              style: {
                left: 0,
                top: 0,
                width: n.default.isNormalScreen() ? 300 : t.screenWidth,
                height: 0
              }
            });
            this._bannerAd.onError(function (t) {
              t.errCode;
            });
            this._bannerAd.onResize(function () {});
          }
        };
        t.prototype.__createInterstitialAd = function () {
          if (r.WX_CONFIG.AD_ID.interstitial) {
            this._interstitialAd = wx.createInterstitialAd({
              adUnitId: r.WX_CONFIG.AD_ID.interstitial
            });
          }
        };
        t.prototype.__createCustomAd = function () {
          if (r.WX_CONFIG.AD_ID.custom) {
            var t = wx.getSystemInfoSync();
            this._customAd = wx.createCustomAd({
              adUnitId: r.WX_CONFIG.AD_ID.custom,
              adIntervals: 60,
              style: {
                left: t.screenWidth - 100,
                top: 20 + (t.screenHeight - t.screenWidth / 720 * 1280) / 2
              }
            });
            this._customAd.onError(function (t) {
              t.errCode;
            });
          }
        };
        t.prototype.__createGridAd = function () {
          if (r.WX_CONFIG.AD_ID.grid) {
            var t = wx.getSystemInfoSync();
            this._gridAd = wx.createGridAd({
              adUnitId: r.WX_CONFIG.AD_ID.grid,
              adTheme: "white",
              gridCount: 5,
              style: {
                left: (t.screenWidth - 330) / 2,
                top: t.screenHeight / 2 - 20,
                width: 330,
                opacity: .8
              }
            });
            this._gridAd.onError(function (t) {
              t.errCode;
            });
          }
        };
        t.prototype.__turnVideoToShare = function (t) {
          this.shareShowReward(t);
          this._videoSuccessHandler = null;
        };
        return t;
      }();
    o.default = new s();
    cc._RF.pop();
  }, {
    "../Common/Helper": "Helper",
    "../System/AudioSystem": "AudioSystem",
    "./wxConfig": "wxConfig"
  }],
  Platform: [function (t, e, o) {
    cc._RF.push(e, "df27ct6ewRCeLZGHOUt2eke", "Platform");
    var n = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      i = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.Platform = o.PlatformType = 0;
    var r,
      s = t("../../Define/EventId"),
      a = t("../Event/EventMgr"),
      c = t("./MoxiModel"),
      l = t("../../Network/Net"),
      u = t("../Utils/Utils");
    (function (t) {
      t[t.None = 0] = "None";
      t[t.TaoBao = 1] = "TaoBao";
      t[t.WeiXin = 2] = "WeiXin";
    })(r = o.PlatformType || (o.PlatformType = {}));
    var p = function () {
      function t() {}
      t.init = function (e, o) {
        return n(this, 0, 0, function () {
          return i(this, function (n) {
            switch (n.label) {
              case 0:
                {
                  this._gameId = e;
                  return [4, t.login(o)];
                }
              case 1:
                {
                  n.sent();
                  return [2];
                }
            }
          });
        });
      };
      t.getEnterParam = function (t) {
        switch (this._type) {
          case r.TaoBao:
            {
              if ("inviterId" == t) {
                return c.default.inst.getInviterId();
              }
              break;
            }
          case r.WeiXin:
            {
              return "inviterId" == t ? c.default.inst.getInviterId() : "";
            }
          default:
            {
              var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
                o = window.location.search && window.location.search.substr(1).match(e);
              if (null != o) {
                return decodeURIComponent(o[2]);
              }
            }
        }
      };
      t.getPlatType = function () {
        return this._type;
      };
      t.getUrlInfo = function (t) {
        var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
          o = window.location.search.substring(1).match(e);
        if (null != o) {
          console.log("window.location.search", o[2]);
          return decodeURIComponent(o[2]);
        }
      };
      t.login = function (t) {
        return n(this, 0, 0, function () {
          return i(this, function (e) {
            switch (e.label) {
              case 0:
                {
                  return [4, l.Net.login(t).then(function (t) {
                    console.warn(t, "\u767b\u5f55");
                    u.default.initServerTime(t.serverTime);
                    var e = t.data;
                    a.EVENT.emit(s.EventId.ON_LOGIN_RET, e);
                  })];
                }
              case 1:
                {
                  e.sent();
                  return [2];
                }
            }
          });
        });
      };
      t.getServerAddr = function () {
        return this._serverUrl;
      };
      t.getAccountAddr = function () {
        return this._accountUrl;
      };
      t.getGameId = function () {
        return this._gameId;
      };
      t._type = r.None;
      t._serverUrl = "elm.moxigame.cn/istio/elelink-pre/";
      t._accountUrl = "";
      t._gameId = "";
      return t;
    }();
    o.Platform = p;
    cc._RF.pop();
  }, {
    "../../Define/EventId": "EventId",
    "../../Network/Net": "Net",
    "../Event/EventMgr": "EventMgr",
    "../Utils/Utils": "Utils",
    "./MoxiModel": "MoxiModel"
  }],
  PlayerModel: [function (t, e, o) {
    cc._RF.push(e, "b6cdb//Qa9FdoSi7tAMoRVu", "PlayerModel");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = t("../Common/Constant"),
      i = t("../Define/EventId"),
      r = t("../Framework/Event/EventMgr"),
      s = t("../Framework/Utils/Utils"),
      a = t("../System/GamingSystem"),
      c = t("../View/UI/Power/LifeSystem"),
      l = t("./TaskModel"),
      u = function () {
        function t() {
          this._token = "token";
          this._openId = "";
          this._gameOrder = null;
          this.levelId = null;
          this._serverTime = null;
          this._isNew = !1;
          this._items = null;
        }
        Object.defineProperty(t, "inst", {
          get: function () {
            this._inst || (this._inst = new t());
            return this._inst;
          },
          enumerable: !1,
          configurable: !0
        });
        t.prototype.initData = function (t) {
          c.default.initialize(t.energy, t.infiniteEnergyAdNum);
          this._openId = t.openId;
          this._token = t.token;
          this.levelId = t.lastLevelId.toString();
          this._isNew = t.isNew;
          l.default.inst.setNetSubStauts(t.subscribe.state);
          l.default.inst.setNetSubAwardStauts(t.subscribe.isFinishe);
          l.default.inst.setGameTaskPro(t.task);
        };
        t.prototype.getToken = function () {
          return this._token;
        };
        Object.defineProperty(t.prototype, "isNew", {
          get: function () {
            return this._isNew;
          },
          enumerable: !1,
          configurable: !0
        });
        t.prototype.saveSeverTime = function (t) {
          this._serverTime = t;
        };
        t.prototype.getServerTime = function () {
          return this._serverTime;
        };
        t.prototype.getOpenId = function () {
          return this._openId;
        };
        t.prototype.getGameCode = function () {
          return this._gameOrder && this._gameOrder.orderId;
        };
        t.prototype.getGameCreateTime = function () {
          return this._gameOrder && this._gameOrder.createTime;
        };
        t.prototype.startNewGame = function (t, e) {
          var o;
          this.levelId = e;
          this._gameOrder = {
            orderId: t,
            levelId: e,
            gameItemMap: (o = {}, o[n.PROP_ID.Hint] = n.GAME_ITEM_STATE.UnGet, o[n.PROP_ID.RemoveObstacle] = n.GAME_ITEM_STATE.UnGet, o),
            createTime: s.default.getServerTime()
          };
          a.default.startGame(e);
        };
        t.prototype.isWatchOver = function (t) {
          var e = this._gameOrder.gameItemMap;
          return e && e[t] != n.GAME_ITEM_STATE.UnGet;
        };
        t.prototype.setGameItemState = function (t, e) {
          var o = this._gameOrder.gameItemMap;
          o && (o[t] = e);
          r.EVENT.emit(i.EventId.ON_UPDATE_PROP_STATE);
        };
        t.prototype.getGameItemState = function (t) {
          var e = this._gameOrder.gameItemMap;
          return e && e[t];
        };
        t.prototype.updateItems = function (t) {
          for (var e in console.log("\u66f4\u65b0\u7f13\u5b58\u9053\u5177.....", t), t[0]) this._items[e] = t[e];
          r.EVENT.emit(i.EventId.ON_ITEM_CHANGE);
        };
        t.prototype.addItem = function (t, e) {
          if (!this._items[t]) {
            this._items[t] = {
              id: t,
              num: e
            };
            return r.EVENT.emit(i.EventId.ON_ITEM_CHANGE);
          }
          this._items[t].num += e;
          r.EVENT.emit(i.EventId.ON_ITEM_CHANGE);
        };
        t._inst = null;
        return t;
      }();
    o.default = u;
    cc._RF.pop();
  }, {
    "../Common/Constant": "Constant",
    "../Define/EventId": "EventId",
    "../Framework/Event/EventMgr": "EventMgr",
    "../Framework/Utils/Utils": "Utils",
    "../System/GamingSystem": "GamingSystem",
    "../View/UI/Power/LifeSystem": "LifeSystem",
    "./TaskModel": "TaskModel"
  }],
  PlayerSystem: [function (t, e, o) {
    cc._RF.push(e, "0d714XZVJVJFq43y7SqkIIP", "PlayerSystem");
    var n = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      i = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var r = t("../Common/Constant"),
      s = t("../Controller/AfunRiskSDKController"),
      a = t("../Controller/Crypto"),
      c = t("../Controller/LTrackerMgr"),
      l = t("../Controller/TableMgr"),
      u = t("../Controller/TurnTaskController"),
      p = t("../Define/Define"),
      f = t("../Define/EventId"),
      h = t("../Define/UIDefs"),
      d = t("../Framework/Event/EventMgr"),
      _ = t("../Framework/Scene/SceneMgr"),
      y = t("../Framework/UI/UIMgr"),
      v = t("../Model/PlayerModel"),
      m = t("../Network/Net"),
      g = t("../View/Scene/Game"),
      b = t("../View/UI/Power/LifeSystem"),
      I = t("./GamingSystem"),
      w = function () {
        function t() {
          this._sendMsgFlag = !1;
        }
        t.prototype.startGame = function () {
          return n(this, 0, 0, function () {
            var t = this;
            return i(this, function () {
              return this._sendMsgFlag ? [2] : (this._sendMsgFlag = !0, m.Net.startGame().then(function (e) {
                t._sendMsgFlag = !1;
                var o = e.data;
                o.energy && b.default.initialize(o.energy, o.infiniteEnergyAdNum);
                console.log("startGame .......", o);
                if (o) {
                  I.default.tutorialFlag = o.tutorialFlag;
                  var n = o.levelId;
                  if (!l.TABLE.getLevel(n)) {
                    y.default.inst.showToast("\u656c\u8bf7\u671f\u5f85\u540e\u7eed\u5173\u5361~");
                    return t.__backToMainScene();
                  }
                  s.default.inst.report("" + s.AfunRiskSDKType.enterLevel + n);
                  v.default.inst.startNewGame(o.gameCode, n);
                  d.EVENT.emit(f.EventId.ON_CLOSE_SETTLEMENT);
                }
              }).catch(function (e) {
                console.log("start Game error ......................", e);
                t._sendMsgFlag = !1;
                "LOCK_OF_PROPS" == e && y.default.inst.open(h.UIType.GetPower);
              }), [2]);
            });
          });
        };
        t.prototype.__backToMainScene = function () {
          if (_.SCENE.getCurrentScene() == p.SceneType.Game) {
            _.SCENE.loadScene(p.SceneType.Main);
          }
        };
        t.prototype.addItemByWatchAd = function (t) {
          console.log("\u64ad\u653e\u89c6\u9891\u83b7\u5f97\u9053\u5177...................", t);
          v.default.inst.getGameCode();
          v.default.inst.isWatchOver(t) ? y.default.inst.showToast("\u5df2\u7ecf\u8865\u5145\u8fc7\u8fd9\u4e2a\u9053\u5177\u4e86\u54e6~") : u.default.inst.getProp(t, function () {
            I.default.backGame();
            y.default.inst.showToast("\u83b7\u5f97\u9053\u5177\uff0c\u5feb\u53bb\u95ef\u5173\u5427~");
            v.default.inst.setGameItemState(t, r.GAME_ITEM_STATE.UnUse);
            d.EVENT.emit(f.EventId.ON_NEW_PROP_DROP_ACTION, t);
            var e = l.TABLE.getItem(t);
            c.default.inst.click("cx157899", {
              sitemname: e.sName,
              icount: 1
            });
            c.default.inst.logEvent(c.EventName.btn_click, {
              sname: "AdsClick",
              success: 1,
              source: t
            });
          }, function () {
            I.default.backGame();
            y.default.inst.showToast("\u83b7\u5f97\u9053\u5177\u5931\u8d25~");
            c.default.inst.logEvent(c.EventName.btn_click, {
              sname: "AdsClick",
              success: 0,
              source: t
            });
          });
        };
        t.prototype.uploadGame = function (t) {
          var e = this;
          console.log("Log - Test _uploadGame.......3");
          var o = v.default.inst.getGameCode(),
            n = t ? g.Game.inst.getPlayTime() : 0,
            i = I.default.level;
          if (t) {
            s.default.inst.report("" + s.AfunRiskSDKType.completeLevel + i);
            Number(i) > 1 && (s.default.inst.report(s.AfunRiskSDKType.completeAll), s.default.inst.report(s.AfunRiskSDKType.getCoin));
          }
          var r = a.default.inst.getSign(o, n);
          m.Net.settlement(o, n, r).then(function (o) {
            var n,
              i,
              r = o.data;
            console.log("settlement..........ret", r);
            var s = r.lastLevelId;
            v.default.inst.levelId = s;
            var a = e._isPassLevelId(s);
            if (t && !a) {
              I.default.difficultySpike = !0;
              e.startGame();
            } else {
              var c = l.TABLE.getGlobalById("G002").sGlobalData;
              y.default.inst.open(h.UIType.GameSettlement, {
                isSucc: t,
                CoinNum: "D001" == (null === (n = o.data.rewardItems[0]) || 0 === n ? 0 : n.id) ? null === (i = o.data.rewardItems[0]) || 0 === i ? 0 : i.num : c
              });
            }
            console.log("Log - Test _uploadGame.......4");
          }).catch(function (e) {
            console.log("Log - Test _uploadGame.......5");
            console.log("uploadGame Game error ......................", e);
            t && (v.default.inst.levelId = (Number(v.default.inst.levelId) + 1).toString());
            var o = l.TABLE.getGlobalById("G002").sGlobalData;
            y.default.inst.open(h.UIType.GameSettlement, {
              isSucc: t,
              CoinNum: o
            });
          });
        };
        t.prototype._isPassLevelId = function (t) {
          return null == l.TABLE.getLevel(t);
        };
        return t;
      }();
    o.default = new w();
    cc._RF.pop();
  }, {
    "../Common/Constant": "Constant",
    "../Controller/AfunRiskSDKController": "AfunRiskSDKController",
    "../Controller/Crypto": "Crypto",
    "../Controller/LTrackerMgr": "LTrackerMgr",
    "../Controller/TableMgr": "TableMgr",
    "../Controller/TurnTaskController": "TurnTaskController",
    "../Define/Define": "Define",
    "../Define/EventId": "EventId",
    "../Define/UIDefs": "UIDefs",
    "../Framework/Event/EventMgr": "EventMgr",
    "../Framework/Scene/SceneMgr": "SceneMgr",
    "../Framework/UI/UIMgr": "UIMgr",
    "../Model/PlayerModel": "PlayerModel",
    "../Network/Net": "Net",
    "../View/Scene/Game": "Game",
    "../View/UI/Power/LifeSystem": "LifeSystem",
    "./GamingSystem": "GamingSystem"
  }],
  ProgressController: [function (t, e, o) {
    cc._RF.push(e, "43534BC1axIeqM2LYIYu4M/", "ProgressController");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../../../Define/EventId"),
      a = t("../../../Framework/Event/EventMgr"),
      c = t("../../../Framework/UI/UIMgr"),
      l = t("../../../System/GamingSystem"),
      u = cc._decorator,
      p = u.ccclass,
      f = u.property,
      h = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.progressBar = null;
          return e;
        }
        var o;
        i(e, t);
        o = e;
        Object.defineProperty(e.prototype, "timer", {
          get: function () {
            return this._timer;
          },
          set: function (t) {
            this._timer = t;
            t < 0 && (this._timer = 0);
            t > this._fullTime && (this._timer = this._fullTime);
            var e = this.timer / this._fullTime;
            this.progressBar.progress = e;
          },
          enumerable: !1,
          configurable: !0
        });
        e.prototype.onLoad = function () {
          o.I = this;
          this.init();
        };
        e.prototype.init = function () {
          this._fullTime = 500;
          this.timer = this._fullTime;
        };
        e.prototype.update = function (t) {
          this.timer <= 0 || l.default.inPlaying() && (this.timer -= t, this.timer <= 0 && a.EVENT.emit(s.EventId.ON_GAME_TIME_OVER));
        };
        e.prototype.onEnable = function () {
          a.EVENT.on(s.EventId.ON_GAME_REVIVE_SUCC, this.onGameReviveSucc, this);
        };
        e.prototype.onDisable = function () {
          a.EVENT.off(s.EventId.ON_GAME_REVIVE_SUCC, this.onGameReviveSucc, this);
        };
        e.prototype.onGameReviveSucc = function () {
          l.default.gameComplete = !1;
          c.default.inst.showToast("\u7ee7\u7eed\u6e38\u620f");
          this.timer = Math.min(this._fullTime, this.timer + 30);
        };
        r([f(cc.ProgressBar)], e.prototype, "progressBar", 0);
        return o = r([p], e);
      }(cc.Component);
    o.default = h;
    cc._RF.pop();
  }, {
    "../../../Define/EventId": "EventId",
    "../../../Framework/Event/EventMgr": "EventMgr",
    "../../../Framework/UI/UIMgr": "UIMgr",
    "../../../System/GamingSystem": "GamingSystem"
  }],
  PropItemController: [function (t, e, o) {
    cc._RF.push(e, "10005CJ5jlDELw26sYKvitl", "PropItemController");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../../../Common/Constant"),
      a = t("../../../Define/EventId"),
      c = t("../../../Framework/Event/EventMgr"),
      l = t("../../../Model/PlayerModel"),
      u = cc._decorator,
      p = u.ccclass,
      f = u.property,
      h = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.lblNum = null;
          e.lockNode = null;
          e.normalNode = null;
          e.addNode = null;
          e._propId = null;
          return e;
        }
        i(e, t);
        e.prototype.onLoad = function () {};
        e.prototype.onEnable = function () {
          c.EVENT.on(a.EventId.ON_UPDATE_PROP_STATE, this.updateUI, this);
          c.EVENT.on(a.EventId.ON_NEW_PROP_DROP_ACTION, this.playGetPropAct, this);
        };
        e.prototype.onDisable = function () {
          c.EVENT.off(a.EventId.ON_UPDATE_PROP_STATE, this.updateUI, this);
          c.EVENT.off(a.EventId.ON_NEW_PROP_DROP_ACTION, this.playGetPropAct, this);
        };
        e.prototype.bind = function (t) {
          this._propId = t;
          this.updateUI();
        };
        e.prototype.updateUI = function () {
          var t = l.default.inst.getGameItemState(this._propId),
            e = t == s.GAME_ITEM_STATE.Used;
          this.lockNode.active = e;
          this.normalNode.active = !e;
          var o = t == s.GAME_ITEM_STATE.UnUse && !e;
          this.lblNum.node.active = o;
          this.addNode.active = t == s.GAME_ITEM_STATE.UnGet;
          this._itemState = t;
        };
        e.prototype.onClickSelf = function () {
          c.EVENT.emit(a.EventId.ON_USE_ITEM, this._propId);
        };
        e.prototype.playGetPropAct = function (t) {
          var e = this;
          if (t == this._propId) {
            this.scheduleOnce(function () {
              cc.tween(e.normalNode).to(.2, {
                scale: 1.2
              }).to(.2, {
                scale: 1
              }).start();
            }, .75);
          }
        };
        r([f(cc.Label)], e.prototype, "lblNum", 0);
        r([f(cc.Node)], e.prototype, "lockNode", 0);
        r([f(cc.Node)], e.prototype, "normalNode", 0);
        r([f(cc.Node)], e.prototype, "addNode", 0);
        return r([p], e);
      }(cc.Component);
    o.default = h;
    cc._RF.pop();
  }, {
    "../../../Common/Constant": "Constant",
    "../../../Define/EventId": "EventId",
    "../../../Framework/Event/EventMgr": "EventMgr",
    "../../../Model/PlayerModel": "PlayerModel"
  }],
  RTCounter: [function (t, e, o) {
    cc._RF.push(e, "92d4eLSMkBMjrZrSEAKI/oa", "RTCounter");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.RTCounter = 0;
    var n = function () {
      function t(t, e, o) {
        this._id = t;
        this._opts = e || {};
        this._value = 0;
        this._total = 0;
        this._averageValue = 0;
        this._accumValue = 0;
        this._accumSamples = 0;
        this._accumStart = o;
      }
      Object.defineProperty(t.prototype, "value", {
        get: function () {
          return this._value;
        },
        set: function (t) {
          this._value = t;
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype._average = function (t, e) {
        if (this._opts.average) {
          this._accumValue += t;
          ++this._accumSamples;
          var o = e;
          if (o - this._accumStart >= this._opts.average) {
            this._averageValue = this._accumValue / this._accumSamples;
            this._accumValue = 0;
            this._accumStart = o;
            this._accumSamples = 0;
          }
        }
      };
      t.prototype.sample = function (t) {
        this._average(this._value, t);
      };
      t.prototype.human = function () {
        var t = this._opts.average ? this._averageValue : this._value;
        return Math.round(100 * t) / 100;
      };
      t.prototype.alarm = function () {
        return this._opts.below && this._value < this._opts.below || this._opts.over && this._value > this._opts.over;
      };
      return t;
    }();
    o.RTCounter = n;
    cc._RF.pop();
  }, {}],
  RTParticle: [function (t, e, o) {
    cc._RF.push(e, "4c021JNUotHBLc+U4/PSjJt", "RTParticle");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.default = function () {
      this.pos = cc.v2(0, 0);
      this.startPos = cc.v2(0, 0);
      this.color = cc.color(0, 0, 0, 255);
      this.deltaColor = {
        r: 0,
        g: 0,
        b: 0,
        a: 255
      };
      this.size = 0;
      this.deltaSize = 0;
      this.rotation = 0;
      this.deltaRotation = 0;
      this.timeToLive = 0;
      this.totalLiveTime = 0;
      this.drawPos = cc.v2(0, 0);
      this.aspectRatio = 1;
      this.dir = cc.v2(0, 0);
      this.radialAccel = 0;
      this.tangentialAccel = 0;
      this.angle = 0;
      this.degreesPerSecond = 0;
      this.radius = 0;
      this.deltaRadius = 0;
      this.frameIndex = 0;
      this.randomSeed = 0;
      this.pos = cc.v2(0, 0);
      this.startPos = cc.v2(0, 0);
      this.color = cc.color(0, 0, 0, 255);
      this.deltaColor = {
        r: 0,
        g: 0,
        b: 0,
        a: 255
      };
      this.size = 0;
      this.deltaSize = 0;
      this.rotation = 0;
      this.deltaRotation = 0;
      this.timeToLive = 0;
      this.drawPos = cc.v2(0, 0);
      this.aspectRatio = 1;
      this.dir = cc.v2(0, 0);
      this.radialAccel = 0;
      this.tangentialAccel = 0;
      this.angle = 0;
      this.degreesPerSecond = 0;
      this.radius = 0;
      this.deltaRadius = 0;
      this.totalLiveTime = 0;
      this.frameIndex = 0;
      this.randomSeed = 0;
    };
    cc._RF.pop();
  }, {}],
  RTPerfCounter: [function (t, e, o) {
    cc._RF.push(e, "34d75/+qhdPnYqMI1BKBP3/", "RTPerfCounter");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      });
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.RTPerfCounter = 0;
    var r = function (t) {
      function e(e, o, n) {
        var i = t.call(this, e, o, n) || this;
        i._time = n;
        return i;
      }
      i(e, t);
      e.prototype.start = function (t) {
        this._time = t;
      };
      e.prototype.end = function (t) {
        this._value = t - this._time;
        this._average(this._value);
      };
      e.prototype.tick = function () {
        this.end();
        this.start();
      };
      e.prototype.frame = function (t) {
        var e = t,
          o = e - this._time;
        this._total++;
        o > (this._opts.average || 1e3) && (this._value = 1e3 * this._total / o, this._total = 0, this._time = e, this._average(this._value));
      };
      return e;
    }(t("./RTCounter").RTCounter);
    o.RTPerfCounter = r;
    cc._RF.pop();
  }, {
    "./RTCounter": "RTCounter"
  }],
  RTProfiler: [function (t, e, o) {
    cc._RF.push(e, "c98f3/df/RN3okBhK5qcYrx", "RTProfiler");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.RTProfiler = 0;
    var n = t("./RTPerfCounter"),
      i = !1,
      r = 25,
      s = null,
      a = null,
      c = null;
    function l() {
      if (!s) {
        s = {
          frame: {
            desc: "Frame time (ms)",
            min: 0,
            max: 50,
            average: 500
          },
          fps: {
            desc: "Framerate (FPS)",
            below: 30,
            average: 500
          },
          draws: {
            desc: "Draw call"
          },
          logic: {
            desc: "Game Logic (ms)",
            min: 0,
            max: 50,
            average: 500
          },
          render: {
            desc: "Renderer (ms)",
            min: 0,
            max: 50,
            average: 500
          },
          mode: {
            desc: cc.game.renderType === cc.game.RENDER_TYPE_WEBGL ? "WebGL" : "Canvas",
            min: 1
          }
        };
        var t = performance.now();
        for (var e in s) s[e]._counter = new n.RTPerfCounter(e, s[e], t);
      }
    }
    function u() {
      if (!a || !a.isValid) {
        (a = new cc.Node("PROFILER-NODE")).x = a.y = 10;
        a.groupIndex = cc.Node.BuiltinGroupIndex.DEBUG;
        cc.Camera._setupDebugCamera();
        a.zIndex = Math.pow(2, 15) - 1;
        cc.game.addPersistRootNode(a);
        var t = new cc.Node("LEFT-PANEL");
        t.anchorX = t.anchorY = 0;
        var e = t.addComponent(cc.Label);
        e.fontSize = r;
        e.lineHeight = r;
        e.enableBold = !0;
        t.color = cc.Color.RED;
        t.parent = a;
        var o = new cc.Node("RIGHT-PANEL");
        o.anchorX = 1;
        o.anchorY = 0;
        o.x = 300;
        var n = o.addComponent(cc.Label);
        n.horizontalAlign = cc.Label.HorizontalAlign.RIGHT;
        n.fontSize = r;
        n.lineHeight = r;
        n.enableBold = !0;
        o.color = cc.Color.RED;
        o.parent = a;
        cc.sys.platform !== cc.sys.BAIDU_GAME_SUB && cc.sys.platform !== cc.sys.WECHAT_GAME_SUB && (e.cacheMode = cc.Label.CacheMode.CHAR, n.cacheMode = cc.Label.CacheMode.CHAR);
        c = {
          left: e,
          right: n
        };
      }
    }
    function p() {
      u();
      var t = cc.director._lastUpdate;
      s.frame._counter.start(t);
      s.logic._counter.start(t);
    }
    function f() {
      var t = performance.now();
      cc.director.isPaused() ? s.frame._counter.start(t) : s.logic._counter.end(t);
      s.render._counter.start(t);
    }
    function h() {
      var t = performance.now();
      s.render._counter.end(t);
      s.draws._counter.value = cc.renderer.drawCalls;
      s.frame._counter.end(t);
      s.fps._counter.frame(t);
      var e = "",
        o = "";
      for (var n in s) {
        var i = s[n];
        i._counter.sample(t);
        e += i.desc + "\n";
        o += i._counter.human() + "\n";
      }
      if (c) {
        c.left.string = e;
        c.right.string = o;
      }
    }
    var d = function () {
      function t() {}
      t.isShowingStats = function () {
        return i;
      };
      t.hideStats = function () {
        if (i) {
          a && (a.active = !1);
          cc.director.off(cc.Director.EVENT_BEFORE_UPDATE, p);
          cc.director.off(cc.Director.EVENT_AFTER_UPDATE, f);
          cc.director.off(cc.Director.EVENT_AFTER_DRAW, h);
          i = !1;
        }
      };
      t.showStats = function () {
        i || (l(), a && (a.active = !0), cc.director.on(cc.Director.EVENT_BEFORE_UPDATE, p), cc.director.on(cc.Director.EVENT_AFTER_UPDATE, f), cc.director.on(cc.Director.EVENT_AFTER_DRAW, h), i = !0);
      };
      t.isDisplayStats = function () {
        return this.isShowingStats();
      };
      t.setDisplayStats = function (t) {
        cc.game.renderType !== cc.game.RENDER_TYPE_CANVAS && (t ? this.showStats() : this.hideStats());
        cc.debug.setDisplayStats(!1);
      };
      return t;
    }();
    o.RTProfiler = d;
    cc._RF.pop();
  }, {
    "./RTPerfCounter": "RTPerfCounter"
  }],
  RTSimulator: [function (t, e, o) {
    cc._RF.push(e, "d1472p/t/JMy6YR5zO6jiOW", "RTSimulator");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = t("./RTParticle"),
      i = cc.v2(0, 0),
      r = cc.v2(),
      s = cc.v2(),
      a = cc.v2(),
      c = cc.v2(),
      l = new cc.js.Pool(function (t) {
        t.pos.set(i);
        t.startPos.set(i);
        t.color._val = 4278190080;
        t.deltaColor.r = t.deltaColor.g = t.deltaColor.b = 0;
        t.deltaColor.a = 255;
        t.size = 0;
        t.deltaSize = 0;
        t.rotation = 0;
        t.deltaRotation = 0;
        t.timeToLive = 0;
        t.drawPos.set(i);
        t.aspectRatio = 1;
        t.dir.set(i);
        t.radialAccel = 0;
        t.tangentialAccel = 0;
        t.angle = 0;
        t.degreesPerSecond = 0;
        t.radius = 0;
        t.deltaRadius = 0;
      }, 1024);
    l.get = function () {
      return this._get() || new n.default();
    };
    var u = function () {
      function t(t) {
        this.sys = t;
        this.particles = [];
        this.active = !1;
        this.readyToPlay = !0;
        this.finished = !1;
        this.elapsed = 0;
        this.emitCounter = 0;
        this._uvFilled = 0;
        this._worldRotation = 0;
      }
      t.prototype.stop = function () {
        this.active = !1;
        this.readyToPlay = !1;
        this.elapsed = this.sys.duration;
        this.emitCounter = 0;
      };
      t.prototype.reset = function () {
        this.active = !0;
        this.readyToPlay = !0;
        this.elapsed = 0;
        this.emitCounter = 0;
        this.finished = !1;
        for (var t = this.particles, e = 0; e < t.length; ++e) l.put(t[e]);
        t.length = 0;
      };
      t.prototype.emitParticle = function (t) {
        var e = this.sys,
          o = cc.misc.clampf,
          n = l.get();
        this.particles.push(n);
        e.textureAnimationModule.init(n);
        n.randomSeed = this.randomRangeInt(0, 233280);
        n.timeToLive = e.life + e.lifeVar * (Math.random() - .5) * 2;
        var i,
          r,
          s,
          a,
          c = n.totalLiveTime = n.timeToLive = Math.max(0, n.timeToLive);
        n.pos.x = e.sourcePos.x + e.posVar.x * (Math.random() - .5) * 2;
        n.pos.y = e.sourcePos.y + e.posVar.y * (Math.random() - .5) * 2;
        var u = e._startColor,
          p = e._startColorVar,
          f = e._endColor,
          h = e._endColorVar;
        n.color.r = i = o(u.r + p.r * (Math.random() - .5) * 2, 0, 255);
        n.color.g = r = o(u.g + p.g * (Math.random() - .5) * 2, 0, 255);
        n.color.b = s = o(u.b + p.b * (Math.random() - .5) * 2, 0, 255);
        n.color.a = a = o(u.a + p.a * (Math.random() - .5) * 2, 0, 255);
        n.deltaColor.r = (o(f.r + h.r * (Math.random() - .5) * 2, 0, 255) - i) / c;
        n.deltaColor.g = (o(f.g + h.g * (Math.random() - .5) * 2, 0, 255) - r) / c;
        n.deltaColor.b = (o(f.b + h.b * (Math.random() - .5) * 2, 0, 255) - s) / c;
        n.deltaColor.a = (o(f.a + h.a * (Math.random() - .5) * 2, 0, 255) - a) / c;
        var d = e.startSize + e.startSizeVar * (Math.random() - .5) * 2;
        d = Math.max(0, d);
        n.size = d;
        if (e.endSize === cc.ParticleSystem.START_SIZE_EQUAL_TO_END_SIZE) {
          n.deltaSize = 0;
        } else {
          var _ = e.endSize + e.endSizeVar * (Math.random() - .5) * 2;
          _ = Math.max(0, _);
          n.deltaSize = (_ - d) / c;
        }
        var y = e.startSpin + e.startSpinVar * (Math.random() - .5) * 2,
          v = e.endSpin + e.endSpinVar * (Math.random() - .5) * 2;
        n.rotation = y;
        n.deltaRotation = (v - y) / c;
        n.startPos.x = t.x;
        n.startPos.y = t.y;
        n.aspectRatio = e._aspectRatio || 1;
        var m = cc.misc.degreesToRadians(e.angle + this._worldRotation + e.angleVar * (Math.random() - .5) * 2);
        if (e.emitterMode === cc.ParticleSystem.EmitterMode.GRAVITY) {
          var g = e.speed + e.speedVar * (Math.random() - .5) * 2;
          n.dir.x = Math.cos(m);
          n.dir.y = Math.sin(m);
          n.dir.mulSelf(g);
          n.radialAccel = e.radialAccel + e.radialAccelVar * (Math.random() - .5) * 2;
          n.tangentialAccel = e.tangentialAccel + e.tangentialAccelVar * (Math.random() - .5) * 2;
          e.rotationIsDir && (n.rotation = -cc.misc.radiansToDegrees(Math.atan2(n.dir.y, n.dir.x)));
        } else {
          var b = e.startRadius + e.startRadiusVar * (Math.random() - .5) * 2,
            I = e.endRadius + e.endRadiusVar * (Math.random() - .5) * 2;
          n.radius = b;
          e.endRadius === cc.ParticleSystem.START_RADIUS_EQUAL_TO_END_RADIUS ? n.deltaRadius = 0 : n.deltaRadius = (I - b) / c;
          n.angle = m;
          n.degreesPerSecond = cc.misc.degreesToRadians(e.rotatePerS + e.rotatePerSVar * (Math.random() - .5) * 2);
        }
      };
      t.prototype.getWorldRotation = function (t) {
        for (var e = 0, o = t; o;) {
          e += o.angle;
          o = o.parent;
        }
        return e;
      };
      t.prototype.updateUVs = function (t) {
        var e = this.sys._assembler;
        if (e) {
          var o = e.getBuffer();
          if (o && this.sys._renderSpriteFrame) {
            for (var n = 4 * e._vfmt._bytes / 4, i = o._vData, r = this.sys._renderSpriteFrame.uv, s = r[4], a = r[5], c = r[2] - r[4], l = r[3] - r[5], u = this.sys.textureAnimationModule.numTilesX, p = c / u, f = l / this.sys.textureAnimationModule.numTilesY, h = t ? 0 : this._uvFilled, d = this.particles.length, _ = h; _ < d; _++) {
              var y = this.particles[_],
                v = _ * n;
              this._updateBuffUV(i, v, y, s, a, p, f, u);
            }
            this._uvFilled = d;
          }
        }
      };
      t.prototype.updatePUVs = function (t) {
        var e = this.sys._assembler;
        if (e) {
          var o = e.getBuffer();
          if (o && this.sys._renderSpriteFrame) {
            var n = 4 * e._vfmt._bytes / 4,
              i = o._vData,
              r = this.sys._renderSpriteFrame.uv,
              s = r[4],
              a = r[5],
              c = r[2] - r[4],
              l = r[3] - r[5],
              u = this.sys.textureAnimationModule.numTilesX,
              p = c / u,
              f = l / this.sys.textureAnimationModule.numTilesY,
              h = this.particles[t],
              d = t * n;
            this._updateBuffUV(i, d, h, s, a, p, f, u);
          }
        }
      };
      t.prototype._updateBuffUV = function (t, e, o, n, i, r, s, a) {
        t[e + 2] = n + o.frameIndex % a * r;
        t[e + 3] = i + Math.floor(o.frameIndex / a) * s + s;
        t[e + 7] = n + o.frameIndex % a * r + r;
        t[e + 8] = i + Math.floor(o.frameIndex / a) * s + s;
        t[e + 12] = n + o.frameIndex % a * r;
        t[e + 13] = i + Math.floor(o.frameIndex / a) * s;
        t[e + 17] = n + o.frameIndex % a * r + r;
        t[e + 18] = i + Math.floor(o.frameIndex / a) * s;
      };
      t.prototype.updateParticleBuffer = function (t, e, o, n) {
        var i = o._vData,
          r = o._uintVData,
          s = e.x,
          a = e.y,
          c = t.size,
          l = c,
          u = t.aspectRatio;
        u > 1 ? l = c / u : c = l * u;
        var p = c / 2,
          f = l / 2;
        if (t.rotation) {
          var h = -p,
            d = -f,
            _ = p,
            y = f,
            v = -cc.misc.degreesToRadians(t.rotation),
            m = Math.cos(v),
            g = Math.sin(v);
          i[n] = h * m - d * g + s;
          i[n + 1] = h * g + d * m + a;
          i[n + 5] = _ * m - d * g + s;
          i[n + 6] = _ * g + d * m + a;
          i[n + 10] = h * m - y * g + s;
          i[n + 11] = h * g + y * m + a;
          i[n + 15] = _ * m - y * g + s;
          i[n + 16] = _ * g + y * m + a;
        } else {
          i[n] = s - p;
          i[n + 1] = a - f;
          i[n + 5] = s + p;
          i[n + 6] = a - f;
          i[n + 10] = s - p;
          i[n + 11] = a + f;
          i[n + 15] = s + p;
          i[n + 16] = a + f;
        }
        r[n + 4] = t.color._val;
        r[n + 9] = t.color._val;
        r[n + 14] = t.color._val;
        r[n + 19] = t.color._val;
      };
      t.prototype.step = function (t) {
        t > cc.director._maxParticleDeltaTime ? t = cc.director._maxParticleDeltaTime : t = t;
        var e = this.sys,
          o = e.node,
          n = this.particles,
          i = 4 * this.sys._assembler._vfmt._bytes / 4,
          u = cc.ParticleSystem.PositionType;
        o._updateWorldMatrix();
        if (e.positionType === u.FREE) {
          this._worldRotation = this.getWorldRotation(o);
          var p = o._worldMatrix.m;
          r.x = p[12];
          r.y = p[13];
        } else {
          e.positionType === u.RELATIVE ? (this._worldRotation = o.angle, r.x = o.x, r.y = o.y) : this._worldRotation = 0;
        }
        if (this.active && e.emissionRate) {
          var f = 1 / e.emissionRate;
          for (n.length < e.totalParticles && (this.emitCounter += t); n.length < e.totalParticles && this.emitCounter > f;) {
            this.emitParticle(r);
            this.emitCounter -= f;
          }
          this.elapsed += t;
          -1 !== e.duration && e.duration < this.elapsed && e.stopSystem();
        }
        var h = e._assembler.getBuffer(),
          d = n.length;
        h.reset();
        h.request(4 * d, 6 * d);
        d > this._uvFilled && this.updateUVs();
        for (var _ = 0; _ < n.length;) {
          s.x = s.y = a.x = a.y = c.x = c.y = 0;
          var y = n[_];
          y.timeToLive -= t;
          if (y.timeToLive > 0) {
            if (e.emitterMode === cc.ParticleSystem.EmitterMode.GRAVITY) {
              var v = c,
                m = s,
                g = a;
              (y.pos.x || y.pos.y) && (m.set(y.pos), m.normalizeSelf());
              g.set(m);
              m.mulSelf(y.radialAccel);
              var b = g.x;
              g.x = -g.y;
              g.y = b;
              g.mulSelf(y.tangentialAccel);
              v.set(m);
              v.addSelf(g);
              v.addSelf(e.gravity);
              v.mulSelf(t);
              y.dir.addSelf(v);
              v.set(y.dir);
              v.mulSelf(t);
              y.pos.addSelf(v);
            } else {
              y.angle += y.degreesPerSecond * t;
              y.radius += y.deltaRadius * t;
              y.pos.x = -Math.cos(y.angle) * y.radius;
              y.pos.y = -Math.sin(y.angle) * y.radius;
            }
            y.color.r += y.deltaColor.r * t;
            y.color.g += y.deltaColor.g * t;
            y.color.b += y.deltaColor.b * t;
            y.color.a += y.deltaColor.a * t;
            y.size += y.deltaSize * t;
            y.size < 0 && (y.size = 0);
            y.rotation += y.deltaRotation * t;
            var I = s;
            I.set(y.pos);
            e.positionType !== u.GROUPED && I.addSelf(y.startPos);
            var w = i * _;
            this.updateParticleBuffer(y, I, h, w);
            var T = y.frameIndex;
            e.textureAnimationModule.animate(y);
            T != y.frameIndex && this.updatePUVs(_);
            ++_;
          } else {
            var E = n[_];
            _ !== n.length - 1 && (n[_] = n[n.length - 1]);
            l.put(E);
            n.length--;
          }
        }
        e._assembler._ia._count = 6 * n.length;
        n.length > 0 ? h.uploadData() : this.active || this.readyToPlay || (this.finished = !0, e._finishedSimulation());
      };
      t.prototype.randomRange = function (t, e) {
        return Math.random() * (e - t) + t;
      };
      t.prototype.randomRangeInt = function (t, e) {
        return Math.floor(this.randomRange(t, e));
      };
      return t;
    }();
    o.default = u;
    cc._RF.pop();
  }, {
    "./RTParticle": "RTParticle"
  }],
  RTTextureAnimation: [function (t, e, o) {
    cc._RF.push(e, "89fefYOwApN3YDfRFyWd9HB", "RTTextureAnimation");
    var n = this && this.__decorate || function (t, e, o, n) {
      var i,
        r = arguments.length,
        s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
        s = Reflect.decorate(t, e, o, n);
      } else {
        for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
          s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
        }
      }
      r > 3 && s && Object.defineProperty(e, o, s);
      return s;
    };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var i = cc._decorator,
      r = i.ccclass,
      s = i.property,
      a = (i.disallowMultiple, cc.Enum({
        Grid: 0
      }), cc.Enum({
        WholeSheet: 0,
        SingleRow: 1
      }), function () {
        function t() {
          this.numTilesX = 0;
          this.numTilesY = 0;
        }
        t.prototype.onInit = function () {};
        t.prototype.init = function () {};
        t.prototype.animate = function (t) {
          t.frameIndex = Math.floor(t.timeToLive / t.totalLiveTime * (this.numTilesX * this.numTilesY - 1));
        };
        t.prototype.pseudoRandom = function (t) {
          return (t = (9301 * t + 49297) % 233280) / 233280;
        };
        n([s()], t.prototype, "numTilesX", 0);
        n([s()], t.prototype, "numTilesY", 0);
        return n([r("RTTextureAnimation")], t);
      }());
    o.default = a;
    cc._RF.pop();
  }, {}],
  RTTextureParticleSystem: [function (t, e, o) {
    cc._RF.push(e, "013128OjPZMyIZ1icYTSvf0", "RTTextureParticleSystem");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("./RTSimulator"),
      a = t("./RTTextureAnimation"),
      c = cc._decorator,
      l = c.ccclass,
      u = c.property,
      p = c.executeInEditMode,
      f = c.disallowMultiple,
      h = c.executionOrder,
      d = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e._textureAnimationModule = new a.default();
          return e;
        }
        i(e, t);
        Object.defineProperty(e.prototype, "textureAnimationModule", {
          get: function () {
            return this._textureAnimationModule;
          },
          set: function (t) {
            this._textureAnimationModule = t;
            this._textureAnimationModule.onInit();
          },
          enumerable: !1,
          configurable: !0
        });
        e.prototype.initProperties = function () {
          t.prototype.initProperties.call(this);
          this._custom = !0;
          this._simulator = new s.default(this);
        };
        r([u], e.prototype, "_textureAnimationModule", 0);
        r([u({
          type: a.default,
          animatable: !1
        })], e.prototype, "textureAnimationModule", null);
        return r([l, p, f, h(99)], e);
      }(cc.ParticleSystem);
    o.default = d;
    cc._RF.pop();
  }, {
    "./RTSimulator": "RTSimulator",
    "./RTTextureAnimation": "RTTextureAnimation"
  }],
  RankController: [function (t, e, o) {
    cc._RF.push(e, "957e5N+tLJJl5wtcjigNtvw", "RankController");
    var n = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      i = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var r = t("../Model/PlayerModel"),
      s = t("../Model/RankModel"),
      a = t("../Network/Net"),
      c = t("./MtopMgr"),
      l = function () {
        function t() {}
        Object.defineProperty(t, "inst", {
          get: function () {
            this._inst || (this._inst = new t());
            return this._inst;
          },
          enumerable: !1,
          configurable: !0
        });
        t.prototype.getRankInfo = function () {
          var t, e;
          return n(this, 0, 0, function () {
            var o, n, r;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  {
                    return [4, c.default.inst.querypagerankandself(this.getDateStringByNow())];
                  }
                case 1:
                  {
                    o = i.sent();
                    console.log(o, "rankInfo");
                    s.default.inst.setList((null === (null == o ? t = 0 : t = o.data) || 0 === t ? 0 : t.rankList) || []);
                    return (null === (null == o ? e = 0 : e = o.data) || 0 === e ? 0 : e.selfRankInfo.score) ? [3, 3] : [4, a.Net.queryPassTime()];
                  }
                case 2:
                  {
                    n = i.sent();
                    r = n.data;
                    o.data.selfRankInfo.score = r.passTime;
                    i.label = 3;
                  }
                case 3:
                  {
                    s.default.inst.setMyInfo(o.data.selfRankInfo);
                    return [2];
                  }
              }
            });
          });
        };
        t.prototype.getDateStringByNow = function () {
          var t = new Date(r.default.inst.getServerTime()),
            e = t.getFullYear(),
            o = t.getMonth() + 1,
            n = t.getDate();
          return "" + e + (o < 10 ? "0" + o : o) + (n < 10 ? "0" + n : n);
        };
        t.changeStr = function (t, e) {
          if (0 === e) {
            e = 12;
          }
          for (var o = 0, n = "", i = 0; i < t.length; i++) {
            t.charCodeAt(t[i]) > 127 || 94 == t.charCodeAt(t[i]) ? o += 2 : o++;
            if (o > e) {
              n += "...";
              break;
            }
            n += t[i];
          }
          return n;
        };
        t._inst = null;
        return t;
      }();
    o.default = l;
    cc._RF.pop();
  }, {
    "../Model/PlayerModel": "PlayerModel",
    "../Model/RankModel": "RankModel",
    "../Network/Net": "Net",
    "./MtopMgr": "MtopMgr"
  }],
  RankItem: [function (t, e, o) {
    cc._RF.push(e, "73067vw3HBKEYdnODS/3qkO", "RankItem");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../../../Controller/RankController"),
      a = t("../../../Framework/Utils/Utils"),
      c = cc._decorator,
      l = c.ccclass,
      u = c.property,
      p = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.sprIcon = null;
          e.labName = null;
          e.labTime = null;
          e.labNo = null;
          e._data = null;
          return e;
        }
        i(e, t);
        e.prototype.onLoad = function () {};
        e.prototype.setData = function (t) {
          this._data = t;
          this._freshItem();
        };
        e.prototype._freshItem = function () {
          var t,
            e,
            o,
            n = this;
          (null === (null === (t = this._data) || 0 === t ? e = 0 : e = t.userInfo) || 0 === e ? 0 : e.photo) ? a.default.loadNetWork(this._data.userInfo.photo, function (t) {
            if (n.sprIcon) {
              n.sprIcon.spriteFrame = t;
            }
          }) : a.default.loadSpriteFrame("Icon/photo", this.sprIcon);
          (null === (o = this._data.userInfo) || 0 === o ? 0 : o.nickName) ? this.labName.string = s.default.changeStr(this._data.userInfo.nickName) : this.labName.string = "\u997f\u5c0f\u5b9d";
          this.labTime.string = a.default.getFormatingTimeStr(Number(this._data.score));
          this.labNo.string = this._data.no;
        };
        r([u(cc.Sprite)], e.prototype, "sprIcon", 0);
        r([u(cc.Label)], e.prototype, "labName", 0);
        r([u(cc.Label)], e.prototype, "labTime", 0);
        r([u(cc.Label)], e.prototype, "labNo", 0);
        return r([l], e);
      }(cc.Component);
    o.default = p;
    cc._RF.pop();
  }, {
    "../../../Controller/RankController": "RankController",
    "../../../Framework/Utils/Utils": "Utils"
  }],
  RankModel: [function (t, e, o) {
    cc._RF.push(e, "770d66epRBBXbzNWupwCoSm", "RankModel");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = function () {
      function t() {
        this._list = [];
        this._myInfo = null;
      }
      Object.defineProperty(t, "inst", {
        get: function () {
          this._inst || (this._inst = new t());
          return this._inst;
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.setList = function (t) {
        this._list = t;
      };
      t.prototype.setMyInfo = function (t) {
        this._myInfo = t;
      };
      Object.defineProperty(t.prototype, "list", {
        get: function () {
          return this._list;
        },
        enumerable: !1,
        configurable: !0
      });
      Object.defineProperty(t.prototype, "myInfo", {
        get: function () {
          return this._myInfo;
        },
        enumerable: !1,
        configurable: !0
      });
      t._inst = null;
      return t;
    }();
    o.default = n;
    cc._RF.pop();
  }, {}],
  Rank: [function (t, e, o) {
    cc._RF.push(e, "4f6a6VKtcZBsof77qleZwd+", "Rank");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../../../Controller/LTrackerMgr"),
      a = t("../../../Controller/RankController"),
      c = t("../../../Framework/UI/ScrollViewOptimizer"),
      l = t("../../../Framework/UIBase"),
      u = t("../../../Framework/Utils/Utils"),
      p = t("../../../Model/RankModel"),
      f = t("./RankItem"),
      h = cc._decorator,
      d = h.ccclass,
      _ = h.property,
      y = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.scroll = null;
          e.sprMyIcon = null;
          e.labMyName = null;
          e.labMyTime = null;
          e.labMyNo = null;
          e.nodeNothing = null;
          e._myInfo = null;
          return e;
        }
        i(e, t);
        e.prototype.onLoad = function () {
          s.default.inst.expo("cx155947", {});
          this.scroll.onLoad();
          this._refreshSrcoll();
          s.default.inst.logEvent(s.EventName.page_view, {
            sname: "RankExp"
          });
        };
        e.prototype._refreshSrcoll = function () {
          this._myInfo = p.default.inst.myInfo;
          var t = p.default.inst.list;
          this.nodeNothing.active = !1;
          t.length < 1 && (this.nodeNothing.active = !0);
          this.scroll.setData(t, this.onItemUpdate.bind(this));
          this._freshMyInfo();
        };
        e.prototype.onItemUpdate = function (t, e, o) {
          e.getComponent(f.default).setData(o, t);
        };
        e.prototype._freshMyInfo = function () {
          var t,
            e,
            o,
            n,
            i,
            r = this;
          if (null === (t = this._myInfo) || 0 === t ? 0 : t.userInfo) {
            (null === (null === (e = this._myInfo) || 0 === e ? o = 0 : o = e.userInfo) || 0 === o ? 0 : o.photo) ? u.default.loadNetWork(this._myInfo.userInfo.photo, function (t) {
              if (r.sprMyIcon) {
                r.sprMyIcon.spriteFrame = t;
              }
            }) : u.default.loadSpriteFrame("Icon/photo", this.sprMyIcon);
            (null === (n = this._myInfo.userInfo) || 0 === n ? 0 : n.nickName) ? this.labMyName.string = a.default.changeStr(this._myInfo.userInfo.nickName) : this.labMyName.string = "\u997f\u5c0f\u5b9d";
            this._myInfo.score ? (this.labMyTime.string = u.default.getFormatingTimeStr(Number(this._myInfo.score)), (null === (i = this._myInfo) || 0 === i ? 0 : i.no) ? (this.labMyNo.string = this._myInfo.no + "", this.labMyNo.fontSize = 54) : (this.labMyNo.string = "100+", this.labMyNo.fontSize = 46)) : (this.labMyTime.string = "\u672a\u901a\u5173", this.labMyNo.string = "");
          }
        };
        r([_(c.default)], e.prototype, "scroll", 0);
        r([_(cc.Sprite)], e.prototype, "sprMyIcon", 0);
        r([_(cc.Label)], e.prototype, "labMyName", 0);
        r([_(cc.Label)], e.prototype, "labMyTime", 0);
        r([_(cc.Label)], e.prototype, "labMyNo", 0);
        r([_(cc.Node)], e.prototype, "nodeNothing", 0);
        return r([d], e);
      }(l.default);
    o.default = y;
    cc._RF.pop();
  }, {
    "../../../Controller/LTrackerMgr": "LTrackerMgr",
    "../../../Controller/RankController": "RankController",
    "../../../Framework/UI/ScrollViewOptimizer": "ScrollViewOptimizer",
    "../../../Framework/UIBase": "UIBase",
    "../../../Framework/Utils/Utils": "Utils",
    "../../../Model/RankModel": "RankModel",
    "./RankItem": "RankItem"
  }],
  Request: [function (t, e, o) {
    cc._RF.push(e, "a8253exvlRJpIuKDj5Xc1lM", "Request");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = t("../Framework/Net/HttpRequest"),
      i = t("../Framework/Tools/BaseInfo"),
      r = t("./ExLogCtr"),
      s = function () {
        function t() {
          this._sdk = null;
        }
        Object.defineProperty(t, "inst", {
          get: function () {
            this._inst || (this._inst = new t());
            return this._inst;
          },
          enumerable: !1,
          configurable: !0
        });
        t.prototype.init = function () {
          if (!n.HttpRequest.isWeb) {
            var t = window.$alscRequest;
            this._sdk = new t({
              timeout: 5e3,
              WindVaneRequest: !0,
              H5Request: !1,
              native: !0,
              instanceid: "INNER",
              dangerouslySetWindvaneParams: {
                instanceid: "INNER"
              }
            });
            console.log("requestMgr", this._sdk);
          }
        };
        t.prototype.request = function (t, e) {
          var o = this;
          if (!n.HttpRequest.isWeb) {
            var s = "ONLINE" == i.default.ENV ? "production" : "ppe";
            return new Promise(function (n, i) {
              o._sdk.request({
                env: s,
                api: t,
                param: e,
                method: "post"
              }).then(function (o) {
                console.log(t, e, s, "_mtop", o);
                n(o);
              }).catch(function (o) {
                console.error(o, "_mtop", t, e, s);
                r.default.inst.logApiError(o.data, t);
                i(o);
              });
            });
          }
        };
        return t;
      }();
    o.default = s;
    cc._RF.pop();
  }, {
    "../Framework/Net/HttpRequest": "HttpRequest",
    "../Framework/Tools/BaseInfo": "BaseInfo",
    "./ExLogCtr": "ExLogCtr"
  }],
  ResKeeper: [function (t, e, o) {
    cc._RF.push(e, "eb6467RtCVGxrVRKYRJLXOh", "ResKeeper");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("./ResLoader"),
      a = t("./ResUtil"),
      c = cc._decorator,
      l = c.ccclass,
      u = (c.property, function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.autoRes = [];
          return e;
        }
        i(e, t);
        e.prototype.loadRes = function () {
          var t = this,
            e = a.ResUtil.parseLoadResArgs.apply(this, arguments),
            o = e.onCompleted;
          e.onCompleted = function (e, n) {
            !e && t.isValid && (n.addRef(), t.autoRes.push(n));
            o && o(e, n);
          };
          s.resLoader.loadRes(e.urls, e.type, e.onProgess, e.onCompleted);
        };
        e.prototype.onDestroy = function () {
          this.releaseAutoRes();
        };
        e.prototype.releaseAutoRes = function () {
          for (var t = 0; t < this.autoRes.length; t++) this.autoRes[t].decRef();
          this.autoRes.length = 0;
        };
        e.prototype.autoReleaseRes = function (t) {
          t.addRef();
          this.autoRes.push(t);
        };
        return r([l], e);
      }(cc.Component));
    o.default = u;
    cc._RF.pop();
  }, {
    "./ResLoader": "ResLoader",
    "./ResUtil": "ResUtil"
  }],
  ResLeakChecker: [function (t, e, o) {
    cc._RF.push(e, "f600dz4gMZHYqt76bMY/XSX", "ResLeakChecker");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.ResLeakChecker = 0;
    var n = function () {
      function t() {
        this.resFilter = null;
        this._checking = !1;
        this._log = new Map();
      }
      t.findCharPos = function (t, e, o) {
        for (var n = t.indexOf(e), i = n, r = 0; r < o; r++) {
          if (-1 == (n = t.indexOf(e, n + 1))) {
            return i;
          }
          i = n;
        }
        return i;
      };
      t.getCallStack = function (e) {
        var o = new Error().stack,
          n = t.findCharPos(o, "\n", e);
        n > 0 && (o = o.slice(n));
        return o;
      };
      t.prototype.checkFilter = function (t) {
        return !!this._checking && (!this.resFilter || this.resFilter(t));
      };
      t.prototype.logLoad = function (e, o, n) {
        if (this.checkFilter(e)) {
          this._log.has(e) || this._log.set(e, new Map());
          var i = this._log.get(e);
          i.has(o) && console.warn("ResLeakChecker doubel same use " + e + " : " + o + ", stack " + i[o]);
          i.set(o, n || t.getCallStack(2));
        }
      };
      t.prototype.logRelease = function (t, e) {
        if (this.checkFilter(t)) {
          if (this._log.has(t)) {
            var o = this._log.get(t);
            o.has(e) ? o.delete(e) : console.warn("ResLeakChecker use nofound " + t + " : " + e);
          } else {
            console.warn("ResLeakChecker url nofound " + t + " : " + e);
          }
        }
      };
      t.prototype.startCheck = function () {
        this._checking = !0;
      };
      t.prototype.stopCheck = function () {
        this._checking = !1;
      };
      t.prototype.getLog = function () {
        return this._log;
      };
      t.prototype.resetLog = function () {
        this._log = new Map();
      };
      t.prototype.dump = function () {
        this._log.forEach(function (t, e) {
          console.log(e);
          t.forEach(function (t, e) {
            console.log(e + " : " + t);
          });
        });
      };
      return t;
    }();
    o.ResLeakChecker = n;
    cc._RF.pop();
  }, {}],
  ResLoader: [function (t, e, o) {
    cc._RF.push(e, "8bc2akEtSVPcaMzwEx7+Wnb", "ResLoader");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.resLoader = 0;
    var n = function () {
      function t() {
        this.resLeakChecker = null;
      }
      t.prototype.loadRes = function () {
        cc.resources.load.apply(cc.resources, arguments);
      };
      t.prototype.loadResDir = function () {
        cc.resources.loadDir.apply(cc.resources, arguments);
      };
      t.prototype.loadRemoteRes = function () {
        cc.assetManager.loadRemote.apply(cc.assetManager, arguments);
      };
      t.prototype.releaseArray = function (t) {
        for (var e = 0; e < t.length; ++e) this.releaseAsset(t[e]);
      };
      t.prototype.releaseAsset = function (t) {
        t.decRef();
      };
      t.prototype.getResItem = function (t, e) {
        return cc.resources.get(t, e);
      };
      return t;
    }();
    o.default = n;
    o.resLoader = new n();
    cc._RF.pop();
  }, {}],
  ResUtil: [function (t, e, o) {
    cc._RF.push(e, "48663IiBgdKzrRc7NasFFU8", "ResUtil");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.ResUtil = o.LoadResArgs = 0;
    var n = t("./ResKeeper");
    o.LoadResArgs = function () {};
    var i = function () {
      function t() {}
      t.parseLoadResArgs = function (t, e, o, n) {
        0 === n && ("function" == typeof e ? ("function" == typeof o ? (n = o, o = e) : n = e, e = null) : "function" == typeof o && (n = o, o = null));
        return {
          urls: t,
          type: e,
          onProgess: o,
          onCompleted: n
        };
      };
      t.getResKeeper = function (e, o) {
        return e ? e.getComponent(n.default) || (o ? e.addComponent(n.default) : t.getResKeeper(e.parent, o)) : null;
      };
      t.assignWith = function (e, o, n) {
        var i = t.getResKeeper(o, n);
        return i && e ? (i.autoReleaseRes(e), e) : (console.error("AssignWith " + e + " to " + o + " faile"), null);
      };
      t.instantiate = function (e) {
        var o = cc.instantiate(e),
          n = t.getResKeeper(o, !0);
        return n ? (n.autoReleaseRes(e), o) : (console.warn("instantiate " + e + ", autoRelease faile"), o);
      };
      return t;
    }();
    o.ResUtil = i;
    cc._RF.pop();
  }, {
    "./ResKeeper": "ResKeeper"
  }],
  ReviveUI: [function (t, e, o) {
    cc._RF.push(e, "c3becS/7/tDU4iQQVJxMlIt", "ReviveUI");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../../Common/Constant"),
      a = t("../../Controller/LTrackerMgr"),
      c = t("../../Controller/ShareMgr"),
      l = t("../../Controller/TurnTaskController"),
      u = t("../../Define/EventId"),
      p = t("../../Framework/Event/EventMgr"),
      f = t("../../Framework/UI/UIFacade"),
      h = t("../../Framework/UIBase"),
      d = t("../../System/GamingSystem"),
      _ = cc._decorator,
      y = _.ccclass,
      v = _.property,
      m = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.lblDes = null;
          e._debounce = !1;
          return e;
        }
        i(e, t);
        e.prototype.start = function () {
          var t = d.default.failType,
            e = t == s.FailType.Impasse;
          e ? this.lblDes.string = "\u554a\u54e6~\u4f60\u7684\u8def\u7ebf\u89c4\u5212\u4e0d\u5408\u7406\n\u5f53\u524d\u5df2\u65e0\u53ef\u8fde\u5143\u7d20" : this.lblDes.string = "\u65f6\u95f4\u8017\u5c3d";
          e ? this.lblDes.fontSize = 36 : this.lblDes.fontSize = 50;
          a.default.inst.expo("cx155995", {
            failurereason: t,
            droptimes: d.default.dropIdx
          });
          a.default.inst.logEvent(a.EventName.page_view, {
            sname: "ReviveExp",
            failurereason: t,
            droptimes: d.default.dropIdx
          });
        };
        e.prototype.onClickRevive = function () {
          var t = this;
          this._debounce || (this._debounce = !0, this.scheduleOnce(function () {
            t._debounce = !1;
          }, 1), a.default.inst.click("cx155995.dx204587", {}), l.default.inst.getProp("D002", function () {
            d.default.isRevive = !0;
            p.EVENT.emit(u.EventId.ON_GAME_REVIVE_SUCC);
            a.default.inst.expo("cx156003");
            a.default.inst.expo("cx155995.dx333076", {
              isuccess: 1
            });
            t.close();
            a.default.inst.logEvent(a.EventName.btn_click, {
              sname: "ReviveClick",
              isuccess: 1
            });
            a.default.inst.logEvent(a.EventName.btn_click, {
              sname: "AdsClick",
              success: 1,
              source: "Revive"
            });
          }, function () {
            a.default.inst.expo("cx156011");
            a.default.inst.expo("cx155995.dx333076", {
              isuccess: 0
            });
            f.UIFacade.showToast("\u6d4f\u89c8\u65f6\u95f4\u4e0d\u8db3\uff0c\u8bf7\u518d\u8bd5\u8bd5\u54e6~");
            a.default.inst.logEvent(a.EventName.btn_click, {
              sname: "ReviveClick",
              isuccess: 0
            });
            a.default.inst.logEvent(a.EventName.btn_click, {
              sname: "AdsClick",
              success: 0,
              source: "Revive"
            });
          }));
        };
        e.prototype.endRevive = function () {
          c.default.inst.clear();
          p.EVENT.emit(u.EventId.ON_CANCEL_GAME_REVIVE);
          a.default.inst.click("cx155995.dx204595", {});
          this.close();
        };
        r([v(cc.Label)], e.prototype, "lblDes", 0);
        return r([y], e);
      }(h.default);
    o.default = m;
    cc._RF.pop();
  }, {
    "../../Common/Constant": "Constant",
    "../../Controller/LTrackerMgr": "LTrackerMgr",
    "../../Controller/ShareMgr": "ShareMgr",
    "../../Controller/TurnTaskController": "TurnTaskController",
    "../../Define/EventId": "EventId",
    "../../Framework/Event/EventMgr": "EventMgr",
    "../../Framework/UI/UIFacade": "UIFacade",
    "../../Framework/UIBase": "UIBase",
    "../../System/GamingSystem": "GamingSystem"
  }],
  RobotSystem: [function (t, e, o) {
    var n;
    cc._RF.push(e, "9eb99s8wplDFoofjpZ/Yt72", "RobotSystem");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var i = t("../Common/Constant"),
      r = t("./AlgorithmSystem"),
      s = t("./DropSystem"),
      a = t("./GamingSystem"),
      c = function () {
        function t() {
          this._gridWidth = 84;
          this._rows = 0;
          this._colmns = 0;
          this._dropPicDatas = [];
          this._curRemoveCnt = 0;
          this._nextDropRemoveValue = 0;
          this._nextDropPicValue = 0;
          this._isImpasse = !1;
          this._hintRoutes = null;
          this._reviveFlag = !1;
          this._reviveRemoveCnt = 0;
        }
        t.prototype.runAutoLevel = function () {
          this._curRemoveCnt = 0;
          this._nextDropRemoveValue = 0;
          this._nextDropPicValue = 0;
          this._reviveRemoveCnt = 0;
          this._reviveFlag = !1;
          a.default.level = "2";
          this.updateNextDropPicData();
          this.initDropPicDatas();
          this.initMapArray();
          this.initPicInMap();
          this.startAutoRemove();
        };
        t.prototype.initDropPicDatas = function () {
          this._dropPicDatas = s.default.getLevelDropPools();
        };
        t.prototype.initMapArray = function () {
          this._rows = i.LINK_GAME_ROW + 2;
          this._colmns = i.LINK_GAME_COLMN + 2;
          this._mapArray = [];
          for (var t = 0; t < this._rows; ++t) {
            this._mapArray[t] = Array(this._colmns);
            for (var e = 0; e < this._colmns; ++e) this._mapArray[t][e] = 0;
          }
          for (var o = a.default.getCurMapConfig().sMapSet, n = 0; n < o.length; n++) {
            var r = n % i.LINK_GAME_ROW + 1,
              s = Math.floor(n / i.LINK_GAME_ROW) + 1;
            if ("0" == o[n]) {
              this._mapArray[r][s] = i.LINK_GAME_EMPTY_ID;
            }
          }
        };
        t.prototype.initPicInMap = function () {
          for (var t = 1; t < this._rows - 1; ++t) for (var e = 1; e < this._colmns - 1; ++e) if (this._mapArray[t][e] != i.LINK_GAME_EMPTY_ID) {
            this._mapArray[t][e] = this._dropPicDatas.shift();
          }
        };
        t.prototype.startAutoRemove = function () {
          for (a.default.init();;) {
            if (this.checkPassGame()) {
              var e = this._reviveFlag ? 0 : 1;
              t.succMap[e]++;
              break;
            }
            if (this.onCheckImpasse()) {
              if (this._reviveFlag) {
                t.sceondFailCntMap[this._curRemoveCnt] || (t.sceondFailCntMap[this._curRemoveCnt] = 0);
                t.sceondFailCntMap[this._curRemoveCnt]++;
                var o = this._curRemoveCnt - this._reviveRemoveCnt;
                t.disReviveCntMap[o] || (t.disReviveCntMap[o] = 0);
                t.disReviveCntMap[o]++;
                break;
              }
              t.firstFailCntMap[this._curRemoveCnt] || (t.firstFailCntMap[this._curRemoveCnt] = 0);
              t.firstFailCntMap[this._curRemoveCnt]++;
              this._reviveRemoveCnt = this._curRemoveCnt;
              this._reviveFlag = !0;
              this.refreshPicCmpt();
            } else {
              this.removeHintPic();
              this.updateDropData();
            }
          }
        };
        t.prototype.removeHintPic = function () {
          var t = r.AlgorithmSystem.routes,
            e = t[0],
            o = t[t.length - 1];
          e && o ? (this._mapArray[e.x][e.y] = 0, this._mapArray[o.x][o.y] = 0) : console.error("removeHintPic..................Error ...");
        };
        t.prototype.updateDropData = function () {
          this._curRemoveCnt += 2;
          return !!this.checkDropPic() && (a.default.addDropBatch(), this.dropNewPic(), this.onCheckImpasse && this.refreshPicCmpt(), this.updateNextDropPicData(), !0);
        };
        t.prototype.checkDropPic = function () {
          return !!this._nextDropPicValue && this._curRemoveCnt >= this._nextDropRemoveValue;
        };
        t.prototype.refreshPicCmpt = function () {
          for (var t = this, e = new Array(), o = new Array(), n = 1; n < this._rows - 1; ++n) for (var r = 1; r < this._colmns - 1; ++r) {
            var s = this._mapArray[n][r];
            if (s && s != i.LINK_GAME_EMPTY_ID) {
              e.push({
                x: n,
                y: r
              });
              o.push(s);
            }
          }
          e.sort(function () {
            return Math.random() > .5 ? -1 : 1;
          });
          o.sort(function () {
            return Math.random() > .5 ? -1 : 1;
          });
          e.forEach(function (e, n) {
            t._mapArray[e.x][e.y] = o[n];
          });
          this.onCheckImpasse();
        };
        t.prototype.dropNewPic = function () {
          for (var t = 0, e = 1; e < this._rows - 1; ++e) for (var o = 1; o < this._colmns - 1; ++o) if (t < this._nextDropPicValue && 0 == this._mapArray[e][o]) {
            this._mapArray[e][o] = this._dropPicDatas.shift();
            t++;
          }
          this.onCheckImpasse();
        };
        t.prototype.onCheckImpasse = function () {
          return r.AlgorithmSystem.isImpasse(this._mapArray);
        };
        t.prototype.updateNextDropPicData = function () {
          this._nextDropPicValue = s.default.getNextDropPlan(this._curRemoveCnt);
          this._nextDropRemoveValue += this._nextDropPicValue;
        };
        t.prototype.checkPassGame = function () {
          if (this._dropPicDatas.length > 0) {
            return !1;
          }
          for (var t = 1; t < this._rows - 1; ++t) for (var e = 1; e < this._colmns - 1; ++e) {
            var o = this._mapArray[t][e];
            if (o != i.LINK_GAME_OBSTACLE_ID && o != i.LINK_GAME_EMPTY_ID && 0 != o) {
              return !1;
            }
          }
          this.levelSuccess();
          return !0;
        };
        t.prototype.levelSuccess = function () {};
        t.prototype.levelFail = function () {
          this._reviveFlag;
        };
        t.prototype.logRecord = function () {
          console.log("\u672c\u8f6e\u6d4b\u8bd5\u603b\u901a\u5173\u6b21\u6570\u4e3a= ", t.succMap[0] + t.succMap[1], "\u4e0d\u4f7f\u7528\u590d\u6d3b\u901a\u5173\u6570\u4e3a= ", t.succMap[1]);
          console.log("\u672c\u8f6e\u6d4b\u8bd5\u590d\u6d3b\u524d\u6d88\u9664\u6570\u91cf\u6837\u672c= ", JSON.stringify(t.firstFailCntMap));
          console.log("\u672c\u8f6e\u6d4b\u8bd5\u590d\u6d3b\u540e\u6d88\u9664\u6570\u91cf\u6837\u672c= ", JSON.stringify(t.disReviveCntMap));
        };
        t.succMap = ((n = {})[0] = 0, n[1] = 0, n);
        t.firstFailCntMap = {};
        t.sceondFailCntMap = {};
        t.disReviveCntMap = {};
        return t;
      }();
    o.default = new c();
    cc._RF.pop();
  }, {
    "../Common/Constant": "Constant",
    "./AlgorithmSystem": "AlgorithmSystem",
    "./DropSystem": "DropSystem",
    "./GamingSystem": "GamingSystem"
  }],
  RoundRectMask: [function (t, e, o) {
    cc._RF.push(e, "3a425GugcFOVZ21NfIjFoek", "RoundRectMask");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = cc._decorator,
      a = s.ccclass,
      c = s.property,
      l = s.executeInEditMode,
      u = s.disallowMultiple,
      p = s.requireComponent,
      f = s.menu;
    cc.macro.ENABLE_WEBGL_ANTIALIAS = !0;
    var h = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e._radius = 11;
        e.mask = null;
        return e;
      }
      i(e, t);
      Object.defineProperty(e.prototype, "radius", {
        get: function () {
          return this._radius;
        },
        set: function (t) {
          this._radius = t;
          this.updateMask(t);
        },
        enumerable: !1,
        configurable: !0
      });
      e.prototype.onEnable = function () {
        this.mask = this.getComponent(cc.Mask);
        this.updateMask(this.radius);
      };
      e.prototype.updateMask = function (t) {
        var e = t >= 0 ? t : 0;
        e < 1 && (e = Math.min(this.node.width, this.node.height) * e);
        this.mask.radius = e;
        this.mask.onDraw = this.onDraw.bind(this.mask);
        this.mask._updateGraphics = this._updateGraphics.bind(this.mask);
        this.mask.type = cc.Mask.Type.RECT;
      };
      e.prototype._updateGraphics = function () {
        var t = this._graphics;
        if (t) {
          this.onDraw(t);
        }
      };
      e.prototype.onDraw = function (t) {
        t.clear(!1);
        var e = this.node,
          o = e.width,
          n = e.height,
          i = -o * e.anchorX,
          r = -n * e.anchorY;
        t.roundRect(i, r, o, n, this.radius || 0);
        cc.game.renderType === cc.game.RENDER_TYPE_CANVAS ? t.stroke() : t.fill();
      };
      r([c], e.prototype, "_radius", 0);
      r([c({
        tooltip: "\u5706\u89d2\u534a\u5f84:\n0-1\u4e4b\u95f4\u4e3a\u6700\u5c0f\u8fb9\u957f\u6bd4\u4f8b\u503c, \n>1\u4e3a\u5177\u4f53\u50cf\u7d20\u503c"
      })], e.prototype, "radius", null);
      return r([a(), l(!0), u(!0), p(cc.Mask), f("Renderer Component/Mask(RoundRect)")], e);
    }(cc.Component);
    o.default = h;
    cc._RF.pop();
  }, {}],
  SceneBase: [function (t, e, o) {
    cc._RF.push(e, "3e1efcHGRBDxbwOEieW6yTB", "SceneBase");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../Res/ResKeeper"),
      a = t("../../Define/Define"),
      c = cc._decorator,
      l = c.ccclass,
      u = c.property,
      p = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.sceneType = a.SceneType.$Start;
          return e;
        }
        i(e, t);
        r([u({
          type: cc.Enum(a.SceneType),
          displayName: "\u573a\u666f\u7c7b\u578b"
        })], e.prototype, "sceneType", 0);
        return r([l], e);
      }(s.default);
    o.default = p;
    cc._RF.pop();
  }, {
    "../../Define/Define": "Define",
    "../Res/ResKeeper": "ResKeeper"
  }],
  SceneDef: [function (t, e, o) {
    cc._RF.push(e, "7e24c8vfn5L1oSlp04O4jsu", "SceneDef");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.SceneDataInfo = 0;
    var n = t("./Define"),
      i = function () {
        function t(t, e, o) {
          0 === o && (o = []);
          this.extraloadRes = [];
          this.sceneType = t;
          this.sceneName = e;
          this.extraloadRes = o;
        }
        t.getSceneData = function (t) {
          for (var e = 0; e < this._sceneDataList.length; ++e) if (this._sceneDataList[e].sceneType == t) {
            return this._sceneDataList[e];
          }
          return null;
        };
        t._sceneDataList = [new t(n.SceneType.Bootstrap, "BootStrap"), new t(n.SceneType.Main, "Main"), new t(n.SceneType.Game, "Game")];
        return t;
      }();
    o.SceneDataInfo = i;
    cc._RF.pop();
  }, {
    "./Define": "Define"
  }],
  SceneMgr: [function (t, e, o) {
    cc._RF.push(e, "0df942ksWpO84lCpHxevraf", "SceneMgr");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      s = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      },
      a = this && this.__read || function (t, e) {
        var o = "function" == typeof Symbol && t[Symbol.iterator];
        if (!o) {
          return t;
        }
        var n,
          i,
          r = o.call(t),
          s = [];
        try {
          for (; (0 === e || e-- > 0) && !(n = r.next()).done;) s.push(n.value);
        } catch (a) {
          i = {
            error: a
          };
        } finally {
          try {
            if (n && !n.done && (o = r.return)) {
              o.call(r);
            }
          } finally {
            if (i) {
              throw i.error;
            }
          }
        }
        return s;
      },
      c = this && this.__spread || function () {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(a(arguments[e]));
        return t;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.SCENE = 0;
    var l = t("../UI/UIFacade"),
      u = t("../UI/UIMgr"),
      p = t("../../Define/UIDefs"),
      f = t("../../Define/EventId"),
      h = t("../../Define/Define"),
      d = t("../../Define/SceneDef"),
      _ = t("../Event/EventMgr"),
      y = t("../Utils/Singleton"),
      v = cc._decorator,
      m = (v.ccclass, v.property, function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e._lastSceneType = h.SceneType.NONE;
          e._currentSceneType = h.SceneType.NONE;
          e._loadingSceneType = h.SceneType.NONE;
          return e;
        }
        i(e, t);
        e.prototype.getLastScene = function () {
          return this._lastSceneType;
        };
        e.prototype.getCurrentScene = function () {
          return this._currentSceneType;
        };
        Object.defineProperty(e.prototype, "sceneParams", {
          get: function () {
            return this._sceneParams;
          },
          enumerable: !1,
          configurable: !0
        });
        e.prototype.loadScene = function (t, e) {
          0 === e && (e = {});
          this._sceneParams = e;
          this._loadScene(t);
        };
        e.prototype._loadScene = function (t, e) {
          0 === e && (e = 3);
          this._loadingSceneType = t;
          var o = d.SceneDataInfo.getSceneData(t);
          o ? this._doLoadScene(o) : cc.error("Scene not registerd, load scene faild!");
        };
        e.prototype._doLoadScene = function (t, e) {
          var n = this;
          0 === e && (e = 3);
          o.SCENE.getCurrentScene() != t.sceneType && u.default.inst.open(p.UIType.Loading);
          var i = this;
          cc.director.preloadScene(t.sceneName, function (t, e) {
            _.EVENT.emit(f.EventId.ON_UPDATE_LOADING_PROGRESS, t, e);
          }, function (o) {
            o ? (cc.error("\u573a\u666f\u52a0\u8f7d\u5931\u8d25", o), e >= 0 ? (_.EVENT.emit(f.EventId.ON_UPDATE_LOADING_TTP, "\u7f51\u7edc\u4f3c\u4e4e\u4e0d\u592a\u597d"), setTimeout(function () {
              n._loadScene(t.sceneType, e - 1);
            }, 1e3)) : (e = 3, setTimeout(function () {
              return r(n, 0, 0, function () {
                return s(this, function (o) {
                  switch (o.label) {
                    case 0:
                      {
                        u.default.inst.close(p.UIType.Loading);
                        return [4, l.UIFacade.showConfirm("\u8bf7\u68c0\u67e5\u7f51\u7edc\u540e\u91cd\u8bd5", "\u91cd\u8bd5", "\u8fd4\u56de")];
                      }
                    case 1:
                      {
                        o.sent() ? this._loadScene(t.sceneType, e - 1) : cc.error("\u7528\u6237\u9009\u62e9\u9000\u51fa\u6e38\u620f");
                        return [2];
                      }
                  }
                });
              });
            }, 1e3))) : cc.director.loadScene(t.sceneName, function (t) {
              t ? cc.error("\u573a\u666f\u5207\u6362\u5931\u8d25", t) : (u.default.inst.close(p.UIType.Loading), i._loadSceneEnd());
            });
          });
        };
        e.prototype._loadSceneEnd = function () {
          this._lastSceneType = this._currentSceneType;
          this._currentSceneType = this._loadingSceneType;
          this._loadingSceneType = h.SceneType.NONE;
          this.reviveWnd();
        };
        e.prototype.pushReviveWnd = function (t) {
          for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
          this._reciveInfo || (this._reciveInfo = {
            sceneType: this._currentSceneType,
            uis: []
          });
          this._reciveInfo.uis.push({
            type: t,
            args: e
          });
        };
        e.prototype.reviveWnd = function () {
          var t;
          if (this.needReviveWnds()) {
            for (var e = this._reciveInfo.uis, o = e.length - 1; o >= 0; --o) {
              var n = e[o];
              n.args[0] = n.args[0] || {};
              n.args[0].isReciver = !0;
              (t = u.default.inst).open.apply(t, c([n.type], n.args));
            }
            this._reciveInfo = 0;
          }
        };
        e.prototype.clearReviveWnds = function () {
          this._reciveInfo = 0;
        };
        e.prototype.needReviveWnds = function () {
          return this._reciveInfo && this._reciveInfo.sceneType == this._currentSceneType;
        };
        return e;
      }(y.Singleton()));
    o.SCENE = m.inst;
    cc._RF.pop();
  }, {
    "../../Define/Define": "Define",
    "../../Define/EventId": "EventId",
    "../../Define/SceneDef": "SceneDef",
    "../../Define/UIDefs": "UIDefs",
    "../Event/EventMgr": "EventMgr",
    "../UI/UIFacade": "UIFacade",
    "../UI/UIMgr": "UIMgr",
    "../Utils/Singleton": "Singleton"
  }],
  ScheduleObject: [function (t, e, o) {
    cc._RF.push(e, "ff422WSJtBChJvl3J2plL1s", "ScheduleObject");
    var n = this && this.__read || function (t, e) {
        var o = "function" == typeof Symbol && t[Symbol.iterator];
        if (!o) {
          return t;
        }
        var n,
          i,
          r = o.call(t),
          s = [];
        try {
          for (; (0 === e || e-- > 0) && !(n = r.next()).done;) s.push(n.value);
        } catch (a) {
          i = {
            error: a
          };
        } finally {
          try {
            if (n && !n.done && (o = r.return)) {
              o.call(r);
            }
          } finally {
            if (i) {
              throw i.error;
            }
          }
        }
        return s;
      },
      i = this && this.__spread || function () {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(n(arguments[e]));
        return t;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.ScheduleObject = 0;
    var r = function () {},
      s = function () {
        function t() {
          this._scheduleList = new Map();
        }
        t.prototype.schedule = function (t, e, o, n, s) {
          0 === o && (o = 0);
          0 === n && (n = cc.macro.REPEAT_FOREVER);
          0 === s && (s = 0);
          for (var a = [], c = 5; c < arguments.length; c++) a[c - 5] = arguments[c];
          o = o || 0;
          isNaN(n) ? n = cc.macro.REPEAT_FOREVER : n = n;
          s = s || 0;
          var l = cc.director.getScheduler(),
            u = l.isTargetPaused(this),
            p = new r();
          p.callback = t;
          p.traget = e;
          p.interval = o;
          p.repeat = n;
          p.delay = s;
          p.args = a;
          p.realCallback = function (t) {
            var e,
              o = p.args && p.args.filter(function (t) {
                return null != t;
              }) || [],
              n = [t].concat(o);
            try {
              if (p.callback) {
                (e = p.callback).call.apply(e, i([p.traget], n));
              }
            } catch (r) {
              cc.error("schedule call back fail");
            }
          };
          this._scheduleList.set(t, p);
          l.schedule(p.realCallback, this, p.interval, p.repeat, p.delay, u);
        };
        t.prototype.scheduleOnce = function (t, e) {
          0 === e && (e = 0);
          this.schedule(t, 0, 0, e);
        };
        t.prototype.unschedule = function (t) {
          if (t) {
            var e = this._scheduleList.get(t);
            if (e) {
              cc.director.getScheduler().unschedule(e.realCallback, this);
              this._scheduleList.delete(t);
            }
          }
        };
        t.prototype.unscheduleAllCallbacks = function () {
          this._scheduleList.clear();
          cc.director.getScheduler().unscheduleAllForTarget(this);
        };
        return t;
      }();
    o.ScheduleObject = s;
    cc._RF.pop();
  }, {}],
  ScrollViewOptimizer: [function (t, e, o) {
    cc._RF.push(e, "b3b25WFRMhB2p7+ez3BrpHe", "ScrollViewOptimizer");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = cc._decorator,
      a = s.ccclass,
      c = s.property,
      l = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.itemTemplate = null;
          e.spacing = 0;
          e.visibleRowCount = 5;
          e.extraCahe = 2;
          e.colCount = 1;
          e.cacheRow = 0;
          e.items = [];
          e.itemHeight = 0;
          e.itemWidth = 0;
          e.spawnCount = 0;
          e.bufferZone = 0;
          e.isInit = !1;
          e.canUpdateFrame = !0;
          e.data = [];
          return e;
        }
        i(e, t);
        e.prototype.onLoad = function () {
          this.cacheRow = this.visibleRowCount + this.extraCahe;
          this.visibleRowCount = Math.ceil(this.visibleRowCount);
          var t = cc.instantiate(this.itemTemplate);
          this.itemHeight = t.height;
          this.itemWidth = t.width;
          this.spawnCount = this.cacheRow * this.colCount;
          this.bufferZone = this.cacheRow * (this.itemHeight + this.spacing) / 2;
          this.scrollView = this.node.getComponent(cc.ScrollView);
          this.content = this.scrollView.content;
          this.content.on(cc.Node.EventType.POSITION_CHANGED, this._updateContentView.bind(this));
        };
        e.prototype.setData = function (t, e) {
          this.isInit = !1;
          this.canUpdateFrame = !0;
          this.isInit = this.initialize(t, e);
        };
        e.prototype.initialize = function (t, e) {
          if (!(e && t && 0 !== t.length && this.itemTemplate && this.scrollView)) {
            cc.log("\u521d\u59cb\u5316\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u6240\u6709\u5fc5\u8981\u53c2\u6570");
            t && 0 == t.length && this.content.removeAllChildren(!1);
            return !1;
          }
          this.data = t;
          this.itemUpdateFunc = e;
          this.totalRow = Math.ceil(t.length / this.colCount);
          this.lastContentPosY = 0;
          this.content.removeAllChildren(!1);
          this.content.getComponent(cc.Layout) && this.content.removeComponent(cc.Layout);
          this.content.height = this.totalRow * (this.itemHeight + this.spacing) + this.spacing;
          this.content.width = this.colCount * (this.itemWidth + this.spacing) + this.spacing;
          for (var o = 0, n = 0; n < this.spawnCount; n += this.colCount) {
            for (var i = -this.itemHeight * (.5 + o) - this.spacing * (o + 1), r = 0; r < this.colCount; r++) {
              var s = n + r,
                a = null;
              s >= this.items.length ? (a = cc.instantiate(this.itemTemplate), this.items.push(a)) : a = this.items[s];
              this.content.addChild(a);
              var c = (r + .5) * this.itemWidth + this.spacing * (r + 1) - this.content.width / 2;
              a.setPosition(c, i);
              a.itemId = s;
              s >= this.data.length ? a.active = !1 : (a.active = !0, this.itemUpdateFunc(s, a, this.data[s]));
            }
            o++;
          }
          return !0;
        };
        e.prototype.getPositionInView = function (t) {
          var e = t.parent.convertToWorldSpaceAR(t.position);
          return this.scrollView.node.convertToNodeSpaceAR(e);
        };
        e.prototype.getItem = function (t) {
          for (var e = this.content.childrenCount, o = 0; o < e; ++o) {
            var n = this.content.children[o],
              i = n.getPosition();
            i = n.parent.convertToWorldSpaceAR(i);
            i = cc.director.getScene().convertToNodeSpaceAR(i);
            if (cc.rect(i.x - n.width / 2, i.y - n.height / 2, n.width, n.height).contains(t) && n.itemId <= this.data.length - 1) {
              return n;
            }
          }
          return null;
        };
        e.prototype._updateContentView = function () {
          if (this.isInit && this.canUpdateFrame) {
            this.canUpdateFrame = !1;
            for (var t = this.items, e = this.scrollView.content.y < this.lastContentPosY, o = (this.itemHeight + this.spacing) * this.cacheRow, n = 0, i = 0; i < t.length; i += this.colCount) {
              var r = this.getPositionInView(t[i]);
              if (e) {
                n = t[i].y + o;
                if (r.y < -this.bufferZone && n < 0) {
                  for (var s = 0; s < this.colCount; s++) {
                    t[c = s + i].y = n;
                    var a = t[c].itemId - this.spawnCount;
                    t[c].itemId = a;
                    a >= 0 ? (t[c].active = !0, this.itemUpdateFunc(a, t[c], this.data[a])) : t[c].active = !1;
                  }
                }
              } else {
                n = t[i].y - o;
                if (r.y > this.bufferZone && n > -this.content.height) {
                  for (s = 0; s < this.colCount; s++) {
                    var c;
                    t[c = s + i].y = n;
                    a = t[c].itemId + this.spawnCount;
                    t[c].itemId = a;
                    a < this.data.length ? (t[c].active = !0, this.itemUpdateFunc(a, t[c], this.data[a])) : t[c].active = !1;
                  }
                }
              }
            }
            this.lastContentPosY = this.scrollView.content.y;
            this.canUpdateFrame = !0;
          }
        };
        e.prototype.scrollTo = function (t) {
          var e = this,
            o = Math.floor(t / this.colCount),
            n = o * this.itemHeight + (o - 1) * this.spacing + this.node.height / 2;
          this.scrollView.stopAutoScroll();
          this.lastContentPosY;
          this.content.height;
          this.items.forEach(function (t, n) {
            var i = Math.floor(n / e.colCount);
            t.y = 0 - (o + i + 1) * (e.itemHeight + e.spacing) + e.itemHeight / 2;
            t.itemId = o * e.colCount + n;
          });
          this.items.forEach(function (t) {
            e.data[t.itemId] ? e.itemUpdateFunc(t.itemId, t, e.data[t.itemId]) : t.active = !1;
          });
          this.content.y = n;
        };
        r([c(cc.Prefab)], e.prototype, "itemTemplate", 0);
        r([c], e.prototype, "spacing", 0);
        r([c], e.prototype, "visibleRowCount", 0);
        r([c], e.prototype, "extraCahe", 0);
        r([c], e.prototype, "colCount", 0);
        return r([a], e);
      }(cc.Component);
    o.default = l;
    cc._RF.pop();
  }, {}],
  Setting: [function (t, e, o) {
    cc._RF.push(e, "b6490YrqF5IBIUxHn55kUsH", "Setting");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      },
      s = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      a = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var c = t("../../../Controller/LTrackerMgr"),
      l = t("../../../Controller/TaskController"),
      u = t("../../../Controller/WindVaneMgr"),
      p = t("../../../Define/EventId"),
      f = t("../../../Define/UIDefs"),
      h = t("../../../Framework/Event/EventMgr"),
      d = t("../../../Framework/UI/UIMgr"),
      _ = t("../../../Framework/UIBase"),
      y = t("../../../Model/TaskModel"),
      v = t("../../../Network/Net"),
      m = t("../../../System/ArchiveSystem"),
      g = t("../../../System/AudioSystem"),
      b = cc._decorator,
      I = b.ccclass,
      w = b.property,
      T = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.musicList = [];
          e.soundList = [];
          e.subList = [];
          e._isSysSub = !1;
          e._isNetSub = !1;
          e._isLoad = !1;
          e._isDoing = !1;
          return e;
        }
        i(e, t);
        e.prototype.onLoad = function () {
          return s(this, 0, 0, function () {
            return a(this, function (t) {
              switch (t.label) {
                case 0:
                  {
                    h.EVENT.on(p.EventId.ON_SHOW, this._reShow, this);
                    this._setMusicSwitch();
                    this._setSoundSwitch();
                    return [4, this._setSubSwitch()];
                  }
                case 1:
                  {
                    t.sent();
                    this._isLoad = !0;
                    c.default.inst.expo("cx155931", {});
                    return [2];
                  }
              }
            });
          });
        };
        e.prototype.onDestroy = function () {
          h.EVENT.off(p.EventId.ON_SHOW, this._reShow, this);
        };
        e.prototype.onSwitchMusic = function () {
          m.default.switchMusic();
          this._setMusicSwitch();
        };
        e.prototype.onSwitchSound = function () {
          m.default.switchSound();
          this._setSoundSwitch();
        };
        e.prototype.onSwitchSub = function () {
          return s(this, 0, 0, function () {
            var t = this;
            return a(this, function (e) {
              switch (e.label) {
                case 0:
                  {
                    return this._isLoad ? this._isSysSub && this._isNetSub ? (d.default.inst.open(f.UIType.Unsubscribe, {
                      cb: function () {
                        t._setSubSwitch();
                      }
                    }), [3, 5]) : [3, 1] : [2];
                  }
                case 1:
                  {
                    return this._isSysSub ? (c.default.inst.click("cx155931.dx204451", {}), [4, v.Net.setSubscribe(!0)]) : [3, 3];
                  }
                case 2:
                  {
                    e.sent();
                    y.default.inst.setNetSubStauts(!0);
                    return [3, 4];
                  }
                case 3:
                  {
                    u.default.inst.openSettings();
                    this._isDoing = !0;
                    e.label = 4;
                  }
                case 4:
                  {
                    this._setSubSwitch();
                    e.label = 5;
                  }
                case 5:
                  {
                    return [2];
                  }
              }
            });
          });
        };
        e.prototype._setMusicSwitch = function () {
          var t = m.default.localData.music;
          this.musicList[0].active = t;
          this.musicList[1].active = !t;
          t ? g.default.playMusic() : g.default.stopMusic();
        };
        e.prototype._setSoundSwitch = function () {
          var t = m.default.localData.sound;
          this.soundList[0].active = t;
          this.soundList[1].active = !t;
        };
        e.prototype._setSubSwitch = function () {
          return s(this, 0, 0, function () {
            var t;
            return a(this, function (e) {
              switch (e.label) {
                case 0:
                  {
                    t = this;
                    return [4, l.default.inst.getSysSubStauts()];
                  }
                case 1:
                  {
                    t._isSysSub = e.sent();
                    this._isNetSub = y.default.inst.netSubStauts;
                    this.subList[0].active = this._isSysSub && this._isNetSub;
                    this.subList[1].active = !this._isSysSub || !this._isNetSub;
                    return [2];
                  }
              }
            });
          });
        };
        e.prototype._reShow = function () {
          return s(this, 0, 0, function () {
            var t;
            return a(this, function (e) {
              switch (e.label) {
                case 0:
                  {
                    return this._isDoing ? (this._isDoing = !1, t = this, [4, l.default.inst.getSysSubStauts()]) : [2];
                  }
                case 1:
                  {
                    t._isSysSub = e.sent();
                    return this._isSysSub ? [4, v.Net.setSubscribe(!0)] : [3, 3];
                  }
                case 2:
                  {
                    e.sent();
                    y.default.inst.setNetSubStauts(!0);
                    this._setSubSwitch();
                    e.label = 3;
                  }
                case 3:
                  {
                    return [2];
                  }
              }
            });
          });
        };
        e.prototype.onClose = function () {
          console.log("\u901a\u77e5\u4efb\u52a1\u5b8c\u6210");
          h.EVENT.emit(p.EventId.ON_SETTING_END);
        };
        r([w({
          type: cc.Node
        })], e.prototype, "musicList", 0);
        r([w({
          type: cc.Node
        })], e.prototype, "soundList", 0);
        r([w({
          type: cc.Node
        })], e.prototype, "subList", 0);
        return r([I], e);
      }(_.default);
    o.default = T;
    cc._RF.pop();
  }, {
    "../../../Controller/LTrackerMgr": "LTrackerMgr",
    "../../../Controller/TaskController": "TaskController",
    "../../../Controller/WindVaneMgr": "WindVaneMgr",
    "../../../Define/EventId": "EventId",
    "../../../Define/UIDefs": "UIDefs",
    "../../../Framework/Event/EventMgr": "EventMgr",
    "../../../Framework/UI/UIMgr": "UIMgr",
    "../../../Framework/UIBase": "UIBase",
    "../../../Model/TaskModel": "TaskModel",
    "../../../Network/Net": "Net",
    "../../../System/ArchiveSystem": "ArchiveSystem",
    "../../../System/AudioSystem": "AudioSystem"
  }],
  ShareMgr: [function (t, e, o) {
    cc._RF.push(e, "a814bxA3/NP4YpxWYBhaEKJ", "ShareMgr");
    var n = this && this.__assign || function () {
        return (n = Object.assign || function (t) {
          for (var e, o = 1, n = arguments.length; o < n; o++) for (var i in e = arguments[o]) if (Object.prototype.hasOwnProperty.call(e, i)) {
            t[i] = e[i];
          }
          return t;
        }).apply(this, arguments);
      },
      i = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      r = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.ShareTask = o.ShareContent = o.ShareType = 0;
    var s,
      a,
      c = t("../Define/EventId"),
      l = t("../Framework/Event/EventMgr"),
      u = t("../Framework/Net/HttpRequest"),
      p = t("../Framework/Tools/BaseInfo"),
      f = t("../Model/PlayerModel"),
      h = t("./ExLogCtr"),
      d = t("./MtopMgr"),
      _ = t("./PlatMgr"),
      y = t("./TableMgr"),
      v = t("./WindVaneMgr");
    (function (t) {
      t.sShareTitleIcon = "sShareTitleIcon";
      t.sShareTitle = "sShareTitle";
      t.sTitle = "sTitle";
      t.sText = "sText";
      t.sImage = "sImage";
      t.sUrl = "sUrl";
      t.sHbUrl = "sHbUrl";
      t.sHbBackgroundImage = "sHbBackgroundImage";
      t.sHbHeadImage = "sHbHeadImage";
      t.sHbTextTitle = "sHbTextTitle";
      t.sHbTextDesc = "sHbTextDesc";
      t.sHbTextColor = "sHbTextColor";
    })(s || (s = {}));
    (function (t) {
      t.HBWX = "weixinhaibao";
      t.HBPYQ = "pengyouquanhaibao";
      t.HB = "haibao";
      t.DD = "dingding";
    })(o.ShareType || (o.ShareType = {}));
    (function (t) {
      t.TONGYONG = "TY";
      t.WANLIU = "WL";
      t.FUHUO = "FH";
      t.FENXIANG = "FX";
      t.ZHULI = "ZL";
    })(a = o.ShareContent || (o.ShareContent = {}));
    (o.ShareTask || (o.ShareTask = {})).WANLIU = "T004";
    var m = function () {
      function t() {
        this._channels = "";
        this._shareTitleIcon = "";
        this._shareTitle = "";
        this._url = "";
        this._wxUrl = "";
        this._pyqUrl = "";
        this._hbUrl = "";
        this._titleArr = [];
        this._textArr = [];
        this._imageArr = [];
        this._hbBackgroundImageArr = [];
        this._poster = {};
        this._sucCallback = null;
        this._failCallback = null;
        this._isSharing = !1;
      }
      Object.defineProperty(t, "inst", {
        get: function () {
          this._inst || (this._inst = new t());
          return this._inst;
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.init = function () {
        l.EVENT.on(c.EventId.ON_SHOW, this.onShow, this);
      };
      t.prototype.share = function (t, e, o) {
        return i(this, 0, 0, function () {
          var i, s, a, c, l, p, f;
          return r(this, function (r) {
            switch (r.label) {
              case 0:
                {
                  if (u.HttpRequest.isWeb) {
                    e();
                    return [2];
                  }
                  this._sucCallback = e;
                  this._failCallback = o;
                  this._isSharing = !0;
                  r.label = 1;
                }
              case 1:
                {
                  r.trys.push([1, 4,, 5]);
                  return [4, this._getBaseInfo(t)];
                }
              case 2:
                {
                  r.sent();
                  return [4, d.default.inst.convertUrl(this._url)];
                }
              case 3:
                {
                  i = r.sent();
                  s = this._getRandomStr(this._titleArr);
                  a = this._getRandomStr(this._textArr);
                  c = this._getRandomStr(this._imageArr);
                  this._channels = encodeURIComponent(JSON.stringify([{
                    type: "weixin_session"
                  }, {
                    type: "weixin_timeline"
                  }, {
                    type: "dingding"
                  }, {
                    type: "poster_save"
                  }]));
                  l = n(n({}, this._poster), {
                    code: {
                      qrCode: i
                    }
                  });
                  console.log(l, "posterInfo");
                  p = "eleme://sns_share_v2?channels=" + this._channels + "&shareTitleIcon=" + this._shareTitleIcon + "&shareTitle=" + this._shareTitle + "&title=" + s + "&text=" + encodeURIComponent(a) + "&url=" + encodeURIComponent(i) + "&image=" + c + "&posterInfo=" + encodeURIComponent(JSON.stringify(l));
                  v.default.inst.openBrowser(p);
                  return [3, 5];
                }
              case 4:
                {
                  f = r.sent();
                  this._failCallback && this._failCallback();
                  h.default.inst.logJsError(f);
                  return [3, 5];
                }
              case 5:
                {
                  return [2];
                }
            }
          });
        });
      };
      t.prototype._getBaseInfo = function (t) {
        return i(this, 0, 0, function () {
          var e, o, n;
          return r(this, function (i) {
            switch (i.label) {
              case 0:
                {
                  this._shareTitleIcon = y.TABLE.getShareInfoByName(s.sShareTitleIcon + "_" + t);
                  this._shareTitle = y.TABLE.getShareInfoByName(s.sShareTitle + "_" + t);
                  t == a.ZHULI ? e = "inviterId=" + f.default.inst.getOpenId() : e = "";
                  "ONLINE" != p.default.ENV && (e += "&env=ppe");
                  o = "/" + p.default.GAME_NAME + "/index.html?" + e;
                  console.log(o, "url");
                  return [4, d.default.inst.genShortLink(o)];
                }
              case 1:
                {
                  n = i.sent();
                  console.log(n, "shortLink");
                  this._url = "https://tb.ele.me/wow/alsc/mod/c1474c7db25accb9ab49ddf3?targetUrl=" + encodeURIComponent(n + "?navType=3") + "&elemeJumpUrl=" + encodeURIComponent(n + "?navType=3") + "&isAutoCallapp=true&navType=3";
                  this._titleArr = y.TABLE.getShareInfoByName(s.sTitle + "_" + t).split(",");
                  this._textArr = y.TABLE.getShareInfoByName(s.sText + "_" + t).split(",");
                  this._imageArr = y.TABLE.getShareInfoByName(s.sImage + "_" + t).split(",");
                  this._hbBackgroundImageArr = y.TABLE.getShareInfoByName(s.sHbBackgroundImage + "_" + t).split(",");
                  this._poster = {
                    templateId: "activity",
                    enableSavePoster: !0,
                    texts: {
                      title: {
                        text: y.TABLE.getShareInfoByName(s.sHbTextTitle + "_" + t),
                        bold: !0
                      },
                      desc: {
                        text: y.TABLE.getShareInfoByName(s.sHbTextDesc + "_" + t),
                        color: y.TABLE.getShareInfoByName(s.sHbTextColor + "_" + t)
                      }
                    },
                    headImage: y.TABLE.getShareInfoByName(s.sHbHeadImage + "_" + t)
                  };
                  return [2];
                }
            }
          });
        });
      };
      t.prototype._getRandomStr = function (t) {
        return t[t.length * Math.random() | 0];
      };
      t.prototype.onShow = function () {
        return i(this, 0, 0, function () {
          var t;
          return r(this, function () {
            t = _.default.inst.browserTime;
            console.log("\u5206\u4eab\u7528\u65f6", t);
            this._sucCallback && this._sucCallback();
            this.clear();
            return [2];
          });
        });
      };
      t.prototype.clear = function () {
        this._sucCallback = null;
        this._failCallback = null;
        this._isSharing = !1;
      };
      return t;
    }();
    o.default = m;
    cc._RF.pop();
  }, {
    "../Define/EventId": "EventId",
    "../Framework/Event/EventMgr": "EventMgr",
    "../Framework/Net/HttpRequest": "HttpRequest",
    "../Framework/Tools/BaseInfo": "BaseInfo",
    "../Model/PlayerModel": "PlayerModel",
    "./ExLogCtr": "ExLogCtr",
    "./MtopMgr": "MtopMgr",
    "./PlatMgr": "PlatMgr",
    "./TableMgr": "TableMgr",
    "./WindVaneMgr": "WindVaneMgr"
  }],
  SingleTouch: [function (t, e, o) {
    cc._RF.push(e, "72bd3WwCOlD+5EU/c8g7SEa", "SingleTouch");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = cc._decorator.ccclass,
      a = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e._touchID = null;
          return e;
        }
        i(e, t);
        e.prototype._touchStart = function (t) {
          null !== this._touchID ? t.stopPropagation() : this._touchID = t.getID();
        };
        e.prototype._touchMove = function (t) {
          if (this._touchID !== t.getID()) {
            t.stopPropagation();
          }
        };
        e.prototype._touchEnd = function (t) {
          this._touchID !== t.getID() ? t.stopPropagation() : t.simulate || (this._touchID = null);
        };
        e.prototype.onEnable = function () {
          this.node.on(cc.Node.EventType.TOUCH_START, this._touchStart, this, !0);
          this.node.on(cc.Node.EventType.TOUCH_MOVE, this._touchMove, this, !0);
          this.node.on(cc.Node.EventType.TOUCH_END, this._touchEnd, this, !0);
          this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._touchEnd, this, !0);
        };
        e.prototype.onDisable = function () {
          this.node.off(cc.Node.EventType.TOUCH_START, this._touchStart, this, !0);
          this.node.off(cc.Node.EventType.TOUCH_MOVE, this._touchMove, this, !0);
          this.node.off(cc.Node.EventType.TOUCH_END, this._touchEnd, this, !0);
          this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._touchEnd, this, !0);
        };
        return r([s], e);
      }(cc.Component);
    o.default = a;
    cc._RF.pop();
  }, {}],
  Singleton: [function (t, e, o) {
    cc._RF.push(e, "5206eq0hLtHnra87eJbW17V", "Singleton");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.Singleton = 0;
    o.Singleton = function () {
      return function () {
        function t() {}
        Object.defineProperty(t, "inst", {
          get: function () {
            null == t._inst && (t._inst = new this());
            return t._inst;
          },
          enumerable: !1,
          configurable: !0
        });
        t._inst = null;
        return t;
      }();
    };
    cc._RF.pop();
  }, {}],
  StateMachine: [function (t, e) {
    var o;
    cc._RF.push(e, "c03a7UqzyBOuLDxWrOGeud4", "StateMachine");
    (function (t) {
      (function (t) {
        var e = function (t, e, o) {
          this.onStart = e;
          this.onStop = o;
          this.stateName = t;
        };
        t.State = e;
        var o = function () {
          function t() {
            this._stateDictionary = new Map();
          }
          Object.defineProperty(t.prototype, "currentState", {
            get: function () {
              return this._currentState.stateName;
            },
            set: function (t) {
              this.setState(t);
            },
            enumerable: !1,
            configurable: !0
          });
          t.prototype.addState = function (t, o, n) {
            this._stateDictionary.set(t, new e(t, o, n));
          };
          t.prototype.setState = function (t) {
            null != this._currentState && null != this._currentState.onStop && this._currentState.onStop();
            this._currentState = this._stateDictionary.get(t);
            null != this._currentState.onStart && this._currentState.onStart();
          };
          return t;
        }();
        t.StateMachine = o;
      })(t.Tools || (t.Tools = {}));
    })(o || (o = {}));
    cc._RF.pop();
  }, {}],
  SysHook: [function (t, e, o) {
    cc._RF.push(e, "4c82cq/9KtKJJAm0sDw5wDM", "SysHook");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.SysHook = 0;
    var n = function () {
      function t() {}
      t.setMultiTouchMax = function (t) {
        0 === t && (t = 1);
        cc.Node.maxTouchNum = t;
        cc.Node.touchNum = 0;
        var e = cc.Node.prototype.dispatchEvent;
        cc.Node.prototype.dispatchEvent = function (t) {
          switch (t.type) {
            case "touchstart":
              {
                if (cc.Node.touchNum < cc.Node.maxTouchNum) {
                  cc.Node.touchNum++;
                  cc.Node.touchNum > 1 ? cc.Node.touchNum = 1 : cc.Node.touchNum = cc.Node.touchNum;
                  this._canTouch = !0;
                  e.call(this, t);
                }
                break;
              }
            case "touchmove":
              {
                !this._canTouch && cc.Node.touchNum < cc.Node.maxTouchNum && (this._canTouch = !0, cc.Node.touchNum++, cc.Node.touchNum > 1 ? cc.Node.touchNum = 1 : cc.Node.touchNum = cc.Node.touchNum);
                this._canTouch && e.call(this, t);
                break;
              }
            case "touchend":
              {
                if (this._canTouch) {
                  this._canTouch = !1;
                  cc.Node.touchNum--;
                  cc.Node.touchNum < 0 ? cc.Node.touchNum = 0 : cc.Node.touchNum = cc.Node.touchNum;
                  e.call(this, t);
                }
                break;
              }
            case "touchcancel":
              {
                if (this._canTouch) {
                  this._canTouch = !0;
                  cc.Node.touchNum--;
                  cc.Node.touchNum < 0 ? cc.Node.touchNum = 0 : cc.Node.touchNum = cc.Node.touchNum;
                  e.call(this, t);
                }
                break;
              }
            default:
              {
                e.call(this, t);
              }
          }
        };
        var o = cc.Node.prototype._onPostActivated;
        cc.Node.prototype._onPostActivated = function (t) {
          !t && this._canTouch && (this._canTouch = !1, cc.Node.touchNum--, cc.Node.touchNum < 0 ? cc.Node.touchNum = 0 : cc.Node.touchNum = cc.Node.touchNum);
          o.call(this, t);
        };
        var n = cc.Node.prototype._onPreDestroy;
        cc.Node.prototype._onPreDestroy = function () {
          this._canTouch && (this._canTouch = !1, cc.Node.touchNum--, cc.Node.touchNum < 0 ? cc.Node.touchNum = 0 : cc.Node.touchNum = cc.Node.touchNum);
          n.call(this);
        };
      };
      return t;
    }();
    o.SysHook = n;
    cc._RF.pop();
  }, {}],
  TabControl: [function (t, e, o) {
    cc._RF.push(e, "23aecD0apJIarg2fU8DFKfh", "TabControl");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      },
      s = this && this.__values || function (t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
          o = e && t[e],
          n = 0;
        if (o) {
          return o.call(t);
        }
        if (t && "number" == typeof t.length) {
          return {
            next: function () {
              t && n >= t.length && (t = 0);
              return {
                value: t && t[n++],
                done: !t
              };
            }
          };
        }
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var a = cc._decorator,
      c = a.ccclass,
      l = a.property,
      u = function () {
        function t() {
          this.tab = null;
          this.select = null;
          this.unselect = null;
        }
        r([l(cc.Sprite)], t.prototype, "tab", 0);
        r([l(cc.SpriteFrame)], t.prototype, "select", 0);
        r([l(cc.SpriteFrame)], t.prototype, "unselect", 0);
        return r([c("TabProperty")], t);
      }(),
      p = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.tabs = [];
          e.clickHandler = null;
          e.selectIdx = 0;
          return e;
        }
        i(e, t);
        e.prototype.onLoad = function () {
          if (this.selectIdx >= 0 && this.selectIdx < this.tabs.length) {
            this.setSelect(this.selectIdx);
          }
        };
        e.prototype.onEnable = function () {
          var t, e;
          try {
            for (var o = s(this.tabs), n = o.next(); !n.done; n = o.next()) n.value.tab.node.on(cc.Node.EventType.TOUCH_END, this.onTabClick, this);
          } catch (i) {
            t = {
              error: i
            };
          } finally {
            try {
              if (n && !n.done && (e = o.return)) {
                e.call(o);
              }
            } finally {
              if (t) {
                throw t.error;
              }
            }
          }
        };
        e.prototype.onDisable = function () {
          var t, e;
          try {
            for (var o = s(this.tabs), n = o.next(); !n.done; n = o.next()) n.value.tab.node.off(cc.Node.EventType.TOUCH_END, this.onTabClick, this);
          } catch (i) {
            t = {
              error: i
            };
          } finally {
            try {
              if (n && !n.done && (e = o.return)) {
                e.call(o);
              }
            } finally {
              if (t) {
                throw t.error;
              }
            }
          }
        };
        e.prototype.start = function () {};
        e.prototype.setSelect = function (t) {
          for (var e, o, n = 0; n < this.tabs.length; ++n) if (n == t) {
            this.tabs[n].tab.spriteFrame = this.tabs[n].select;
            try {
              for (var i = (e = 0, s(this.tabs)), r = i.next(); !r.done; r = i.next()) {
                var a = r.value;
                if (a != this.tabs[n]) {
                  a.tab.spriteFrame = a.unselect;
                }
              }
            } catch (c) {
              e = {
                error: c
              };
            } finally {
              try {
                if (r && !r.done && (o = i.return)) {
                  o.call(i);
                }
              } finally {
                if (e) {
                  throw e.error;
                }
              }
            }
            break;
          }
        };
        e.prototype.getTargetIndex = function (t) {
          for (var e = 0; e < this.tabs.length; ++e) if (this.tabs[e].tab.node == t) {
            return e;
          }
          return -1;
        };
        e.prototype.onTabClick = function (t) {
          var e = this.getTargetIndex(t.target);
          if (-1 != e) {
            this.setSelect(e);
            this.clickHandler && this.clickHandler.emit([e]);
          }
        };
        r([l([u])], e.prototype, "tabs", 0);
        r([l(cc.Component.EventHandler)], e.prototype, "clickHandler", 0);
        r([l()], e.prototype, "selectIdx", 0);
        return r([c], e);
      }(cc.Component);
    o.default = p;
    cc._RF.pop();
  }, {}],
  TableMgr: [function (t, e, o) {
    cc._RF.push(e, "5b9f87+sIxAZogt3C6io4uX", "TableMgr");
    var n = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      i = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.TABLE = 0;
    var r = t("../Framework/Res/ResLoader"),
      s = t("../Framework/Sys/TeMap"),
      a = t("./ExLogCtr"),
      c = function () {
        function t() {
          this._channelName = "";
          this._all_table_list = [];
          this._isLoaded = !1;
          this._iTotalLoad = 0;
          this._iLoadNum = 0;
          this._level = new s.default();
          this._map = new s.default();
          this._global = new s.default();
          this._share = new s.default();
          this._mark = new s.default();
          this._task = new s.default();
          this._alltask = [];
          this._item = new s.default();
        }
        Object.defineProperty(t, "inst", {
          get: function () {
            this._inst || (this._inst = new t());
            return this._inst;
          },
          enumerable: !1,
          configurable: !0
        });
        t.prototype.setChannel = function (t) {
          this._channelName = t;
        };
        t.prototype.loadTableRes = function () {
          return n(this, 0, Promise, function () {
            var t = this;
            return i(this, function () {
              return this._isLoaded ? [2] : (this._isLoaded = !0, [2, new Promise(function (e) {
                r.resLoader.loadRes("Config/_filelist_", cc.JsonAsset, function (o, n) {
                  t._all_table_list = n.json._files_ || [];
                  t._loadTableRes(function () {
                    e();
                  });
                });
              })]);
            });
          });
        };
        t.prototype.select_channel_file = function (t) {
          var e = t.lastIndexOf("/"),
            o = t.slice(e + 1) + "_" + this._channelName;
          return this._all_table_list.indexOf(o + ".json") >= 0 ? t.slice(0, e + 1) + o : t;
        };
        t.prototype.loadTable = function (t, e) {
          t = this.select_channel_file(t);
          var o = this;
          cc.resources.load(t, cc.JsonAsset, function (n, i) {
            if (n) {
              cc.error("failed to load " + t + ": " + n);
            } else {
              if (e) {
                try {
                  e(null, i);
                } catch (r) {
                  cc.error("loadTable->", r + " res:" + t);
                  a.default.inst.logJsError(r);
                }
              }
            }
            o._onInitOver();
          });
        };
        t.prototype._onInitOver = function () {
          this._iLoadNum >= this._iTotalLoad ? console.error("\u8d44\u6e90\u52a0\u8f7d\u6570\u91cf\u5bf9\u4e0d\u4e0a\u4e86\uff0c\u6ce8\u610f\u4fee\u6539") : (this._iLoadNum++, this._iLoadNum >= this._iTotalLoad && this._completeCallback && this._completeCallback());
        };
        t.prototype._loadTableRes = function (t) {
          this._completeCallback = t;
          var e = [];
          e.push(this._initLevel);
          e.push(this._initMap);
          e.push(this._initGlobal);
          e.push(this._initTask);
          e.push(this._initMark);
          e.push(this._initShare);
          e.push(this._initItem);
          this._iTotalLoad = e.length;
          for (var o = 0; o < e.length; o++) e[o].bind(this)();
        };
        t.prototype._initLevel = function () {
          var t = this;
          this.loadTable("Config/Level", function (e, o) {
            for (var n = Object.keys(o.json), i = 0; i < n.length; ++i) {
              var r = o.json[n[i]];
              t._level.set(r.sID, r);
            }
          });
        };
        t.prototype.getLevel = function (t) {
          return this._level.get(t);
        };
        t.prototype._initMap = function () {
          var t = this;
          this.loadTable("Config/Map", function (e, o) {
            for (var n = Object.keys(o.json), i = 0; i < n.length; ++i) {
              var r = o.json[n[i]];
              t._map.set(r.sID, r);
            }
          });
        };
        t.prototype.getMap = function (t) {
          return this._map.get(t);
        };
        t.prototype._initGlobal = function () {
          var t = this;
          this.loadTable("Config/Global", function (e, o) {
            for (var n = Object.keys(o.json), i = 0; i < n.length; i++) {
              var r = o.json[n[i]];
              t._global.set(r.sID, r);
            }
          });
        };
        t.prototype.getGlobalById = function (t) {
          return this._global.get(t) || null;
        };
        t.prototype._initShare = function () {
          var t = this;
          this.loadTable("Config/Share", function (e, o) {
            for (var n = Object.keys(o.json), i = 0; i < n.length; i++) {
              var r = o.json[n[i]];
              t._share.set(r.sName, r.sData);
            }
          });
        };
        t.prototype.getShareInfoByName = function (t) {
          return this._share.get(t) || null;
        };
        t.prototype._initMark = function () {
          var t = this;
          this.loadTable("Config/Marketing", function (e, o) {
            for (var n = Object.keys(o.json), i = 0; i < n.length; ++i) {
              var r = o.json[n[i]];
              t._mark.set(r.sID, r);
            }
          });
        };
        t.prototype.getMark = function (t) {
          return this._mark.get(t);
        };
        t.prototype._initTask = function () {
          var t = this;
          this.loadTable("Config/Task", function (e, o) {
            for (var n = Object.keys(o.json), i = 0; i < n.length; ++i) {
              var r = o.json[n[i]];
              t._task.set(r.sID, r);
            }
            var s = o.json;
            t._alltask = s;
          });
        };
        t.prototype.getTask = function () {
          return this._alltask;
        };
        t.prototype.getTaskInfo = function (t) {
          return this._task.get(t);
        };
        t.prototype._initItem = function () {
          var t = this;
          this.loadTable("Config/Item", function (e, o) {
            for (var n = Object.keys(o.json), i = 0; i < n.length; ++i) {
              var r = o.json[n[i]];
              t._item.set(r.sID, r);
            }
          });
        };
        t.prototype.getItem = function (t) {
          return this._item.get(t);
        };
        return t;
      }();
    o.TABLE = c.inst;
    cc._RF.pop();
  }, {
    "../Framework/Res/ResLoader": "ResLoader",
    "../Framework/Sys/TeMap": "TeMap",
    "./ExLogCtr": "ExLogCtr"
  }],
  TaskController: [function (t, e, o) {
    cc._RF.push(e, "1460dtSjKRDVJUaAO7e82WI", "TaskController");
    var n = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      i = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var r = t("../Framework/Platform/Platform"),
      s = t("../Framework/Tools/BaseInfo"),
      a = t("../Model/TaskModel"),
      c = t("./MtopMgr"),
      l = t("./PlatMgr"),
      u = t("./TurnTaskController"),
      p = t("./WindVaneMgr"),
      f = function () {
        function t() {
          this._isClick = !1;
        }
        Object.defineProperty(t, "inst", {
          get: function () {
            this._inst || (this._inst = new t());
            return this._inst;
          },
          enumerable: !1,
          configurable: !0
        });
        t.prototype.onOpenTask = function () {
          return n(this, 0, 0, function () {
            return i(this, function () {
              return [2];
            });
          });
        };
        t.prototype.queryTask = function (t, e) {
          0 === e && (e = !0);
          return n(this, 0, 0, function () {
            var o;
            return i(this, function (n) {
              switch (n.label) {
                case 0:
                  {
                    return [4, c.default.inst.querytask({
                      missionCollectionId: t
                    })];
                  }
                case 1:
                  {
                    return (o = n.sent()) && o.data ? (this._classifyTask(o.data, e), [2]) : [2];
                  }
              }
            });
          });
        };
        t.prototype._classifyTask = function (t, e) {
          a.default.inst.clearList();
          for (var o = t.mlist ? t.mlist.length : 0, n = 0; n < o; n++) {
            var i = t.mlist[n];
            i.status = this.changeTaskStatus(i);
            if ((i.actionConfig.actionType != a.TaskItemType.OPEN_APP_PUSH || !a.default.inst.netSubAwardStauts) && i.receiveType != a.MissionReceiveType.RECEIVE) {
              switch (e || i.missionDefId != s.default.ENTRY_TASK_ID || i.status != a.MissionStatusType.RUNNING || r.Platform.getUrlInfo(s.default.ENTRY_TASK_KEY) == s.default.ENTRY_TASK_VALUE && this.pageTask(i), i.status) {
                case a.MissionStatusType.RUNNING:
                  {
                    a.default.inst.setAcceptptTaskList(i);
                    a.TaskItemType.OPEN_APP_PUSH == i.actionConfig.actionType && this.refreshTaskInfo(i);
                    break;
                  }
                case a.MissionStatusType.FINISH:
                  {
                    a.default.inst.setAwardingTaskList(i);
                    break;
                  }
                default:
                  {
                    a.default.inst.setCompleteTaskList(i);
                  }
              }
            }
          }
          a.default.taskInfo = t;
          u.default.inst.saveList(t.mlist);
        };
        t.prototype.queryTaskItem = function (t, e) {
          return n(this, 0, 0, function () {
            var o, n;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  {
                    o = {
                      missionCollectionId: t,
                      missionId: e
                    };
                    return [4, c.default.inst.querytask(o)];
                  }
                case 1:
                  {
                    return [2, null == (n = i.sent()) ? 0 : n.data.mlist[0]];
                  }
              }
            });
          });
        };
        t.prototype.tiggerTask = function (t) {
          0 === t && (t = null);
          return n(this, 0, 0, function () {
            var e;
            return i(this, function (o) {
              switch (o.label) {
                case 0:
                  {
                    e = {
                      collectionId: t.missionCollectionId,
                      missionId: t.missionDefId,
                      missionXId: t.missionXId,
                      pageFrom: t.actionConfig.actionValue ? t.actionConfig.actionValue.pageSpm : "",
                      actionCode: t.actionConfig.actionType || "PAGEVIEW",
                      count: t.stage.count,
                      viewTime: "15"
                    };
                    return [4, c.default.inst.tigger(e)];
                  }
                case 1:
                  {
                    o.sent();
                    return [2];
                  }
              }
            });
          });
        };
        t.prototype.pageTask = function (t, e) {
          0 === t && (t = null);
          0 === e && (e = "15");
          return n(this, 0, 0, function () {
            var o;
            return i(this, function (n) {
              switch (n.label) {
                case 0:
                  {
                    o = {
                      collectionId: t.missionCollectionId,
                      missionId: t.missionDefId,
                      missionXId: t.missionXId,
                      pageFrom: t.actionConfig.actionValue.pageSpm ? t.actionConfig.actionValue.pageSpm : "",
                      actionCode: t.actionConfig.actionType,
                      viewTime: e,
                      sync: t.receiveType == a.MissionReceiveType.RECEIVE
                    };
                    return [4, c.default.inst.pageview(o)];
                  }
                case 1:
                  {
                    n.sent();
                    return [2];
                  }
              }
            });
          });
        };
        t.prototype.getTask = function (t, e) {
          return n(this, 0, 0, function () {
            var o;
            return i(this, function (n) {
              switch (n.label) {
                case 0:
                  {
                    o = {
                      missionCollectionId: t,
                      missionId: e
                    };
                    return [4, c.default.inst.getTask(o)];
                  }
                case 1:
                  {
                    n.sent();
                    return [2];
                  }
              }
            });
          });
        };
        t.prototype.getAward = function (t, e) {
          var o;
          0 === e && (e = null);
          return n(this, 0, 0, function () {
            var n;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  {
                    n = {
                      missionCollectionId: t.missionCollectionId,
                      missionId: t.missionDefId,
                      count: null === (o = t.stage) || 0 === o ? 0 : o.count,
                      extInfo: e ? JSON.stringify(e) : "",
                      missionXId: t.missionXId,
                      instanceId: t.id,
                      umiToken: "1",
                      ua: "1"
                    };
                    return [4, c.default.inst.getAward(n)];
                  }
                case 1:
                  {
                    return [2, i.sent()];
                  }
              }
            });
          });
        };
        t.prototype.goToFinish = function () {
          return n(this, 0, 0, function () {
            return i(this, function () {
              return [2];
            });
          });
        };
        t.prototype.refreshTaskInfo = function (e, o) {
          var c, u;
          0 === o && (o = null);
          return n(this, 0, 0, function () {
            var n, p;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  {
                    switch (e.actionConfig.actionType) {
                      case a.TaskItemType.PAGEVIEW:
                        {
                          return [3, 1];
                        }
                      case a.TaskItemType.THIRD:
                        {
                          return [3, 7];
                        }
                      case a.TaskItemType.ORDER:
                        {
                          return [3, 8];
                        }
                      case a.TaskItemType.OPEN_APP_PUSH:
                        {
                          return [3, 9];
                        }
                    }
                    return [3, 13];
                  }
                case 1:
                  {
                    return e.missionDefId != s.default.ENTRY_TASK_ID ? [3, 4] : r.Platform.getUrlInfo(s.default.ENTRY_TASK_KEY) != s.default.ENTRY_TASK_VALUE ? [3, 3] : [4, this.pageTask(e)];
                  }
                case 2:
                  {
                    i.sent();
                    return [3, 3];
                  }
                case 3:
                  {
                    return [3, 13];
                  }
                case 4:
                  {
                    return (null === (null === (c = e.actionConfig) || 0 === c ? u = 0 : u = c.actionValue) || 0 === u ? 0 : u.executeOpportunity) ? [4, this.pageTask(e, l.default.inst.browserTime + "")] : [3, 6];
                  }
                case 5:
                  {
                    i.sent();
                    i.label = 6;
                  }
                case 6:
                  {}
                case 7:
                  {}
                case 8:
                  {
                    return [3, 13];
                  }
                case 9:
                  {
                    return [4, t.inst.getSysSubStauts()];
                  }
                case 10:
                  {
                    n = i.sent();
                    p = a.default.inst.netSubStauts;
                    return n && p ? [4, this.pageTask(e)] : [3, 12];
                  }
                case 11:
                  {
                    i.sent();
                    i.label = 12;
                  }
                case 12:
                  {
                    return [3, 13];
                  }
                case 13:
                  {
                    o && o();
                    return [2];
                  }
              }
            });
          });
        };
        t.prototype.getSysSubStauts = function () {
          return n(this, 0, 0, function () {
            var t, e;
            return i(this, function (o) {
              switch (o.label) {
                case 0:
                  {
                    return [4, p.default.inst.getNotificationSettings()];
                  }
                case 1:
                  {
                    t = o.sent();
                    e = !1;
                    t && t.status == a.SubStatus.authorized && (e = !0);
                    return [2, e];
                  }
              }
            });
          });
        };
        t.prototype.setSub = function () {
          return n(this, 0, 0, function () {
            return i(this, function (t) {
              switch (t.label) {
                case 0:
                  {
                    return [4, p.default.inst.openSettings()];
                  }
                case 1:
                  {
                    t.sent();
                    return [2];
                  }
              }
            });
          });
        };
        t.prototype.refreshTask = function () {};
        t.prototype.changeTaskStatus = function (t) {
          var e = t.status,
            o = this.getTaskStage(t.missionStageDTOS),
            n = t.missionStageDTOS[o];
          n && (n ? (console.log(n, "changeTaskStatus"), n.status == a.TaskStatus.RUNNING && (e = a.MissionStatusType.RUNNING, console.log("MissionStatusType.RUNNING")), n.rewardStatus != a.TaskRewardStatus.SUCCESS && n.status == a.TaskStatus.FINISH && (e = a.MissionStatusType.FINISH, console.log("MissionStatusType.FINISH")), n.rewardStatus == a.TaskRewardStatus.SUCCESS && t.status == a.TaskStatus.FINISH && (e = a.MissionStatusType.FINISHED, console.log("MissionStatusType.FINISHED"))) : n.rewardStatus == a.TaskRewardStatus.SUCCESS && t.status == a.TaskStatus.FINISH && (e = a.MissionStatusType.FINISHED, console.log("MissionStatusType.FINISHED")));
          return e;
        };
        t.prototype.getGameTaskList = function () {};
        t.prototype.getGameTaskItem = function () {};
        t.prototype.toDoGameTask = function (t, e) {
          0 === e && (e = null);
          return n(this, 0, 0, function () {
            return i(this, function () {
              return [2];
            });
          });
        };
        t.prototype.getTaskStage = function (t) {
          var e = 0;
          t.forEach(function (t) {
            if (t.rewardStatus == a.TaskRewardStatus.SUCCESS) {
              e++;
            }
          });
          return e == t.length ? e = e - 1 : e = e;
        };
        return t;
      }();
    o.default = f;
    cc._RF.pop();
  }, {
    "../Framework/Platform/Platform": "Platform",
    "../Framework/Tools/BaseInfo": "BaseInfo",
    "../Model/TaskModel": "TaskModel",
    "./MtopMgr": "MtopMgr",
    "./PlatMgr": "PlatMgr",
    "./TurnTaskController": "TurnTaskController",
    "./WindVaneMgr": "WindVaneMgr"
  }],
  TaskModel: [function (t, e, o) {
    cc._RF.push(e, "da43fyLgQJPiJp9BBlwSKwo", "TaskModel");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.InviteHelpResult = o.TaskListType = o.SubStatus = o.TaskRewardStatus = o.MissionCardButtonType = o.MissionStatusType = o.TaskStatus = o.MissionInstanceTriggerType = o.TaskItemType = o.RewardSendType = o.ReceiveStatus = o.MissionReceiveType = 0;
    var n,
      i = t("../Define/EventId"),
      r = t("../Framework/Event/EventMgr"),
      s = function () {
        function t() {
          this._acceptptTaskList = [];
          this._awardingTaskList = [];
          this._completeTaskList = [];
          this._gameTaskStatus = !1;
          this._netSubStauts = !1;
          this._netSubAwardStauts = !1;
          this._gameTaskPro = {};
        }
        Object.defineProperty(t, "inst", {
          get: function () {
            this._inst || (this._inst = new t());
            return this._inst;
          },
          enumerable: !1,
          configurable: !0
        });
        t.prototype.clearList = function () {
          this._acceptptTaskList = [];
          this._awardingTaskList = [];
          this._completeTaskList = [];
        };
        t.prototype.setAcceptptTaskList = function (t) {
          this._acceptptTaskList.push(t);
        };
        t.prototype.setAwardingTaskList = function (t) {
          this._awardingTaskList.push(t);
        };
        t.prototype.setCompleteTaskList = function (t) {
          this._completeTaskList.push(t);
        };
        t.prototype.setGameTaskPro = function (t) {
          this._gameTaskPro = t;
        };
        t.prototype.setFinisheStatus = function (t, e) {
          this._gameTaskPro[t] || (this._gameTaskPro[t] = {});
          this._gameTaskPro[t].isFinishe = e;
        };
        t.prototype.setNewTaskInfo = function (t, e) {
          this._gameTaskPro[t] || (this._gameTaskPro[t] = {});
          this._gameTaskPro[t] = e;
        };
        Object.defineProperty(t.prototype, "gameTaskPro", {
          get: function () {
            return this._gameTaskPro;
          },
          enumerable: !1,
          configurable: !0
        });
        Object.defineProperty(t.prototype, "acceptptTaskList", {
          get: function () {
            return this._acceptptTaskList;
          },
          enumerable: !1,
          configurable: !0
        });
        Object.defineProperty(t.prototype, "awardingTaskList", {
          get: function () {
            return this._awardingTaskList;
          },
          enumerable: !1,
          configurable: !0
        });
        Object.defineProperty(t.prototype, "completeTaskList", {
          get: function () {
            return this._completeTaskList;
          },
          enumerable: !1,
          configurable: !0
        });
        Object.defineProperty(t.prototype, "allTask", {
          get: function () {
            return this._awardingTaskList.concat(this._acceptptTaskList, this._completeTaskList);
          },
          enumerable: !1,
          configurable: !0
        });
        t.prototype.setGameTaskStatus = function (t) {
          this._gameTaskStatus = t;
        };
        t.prototype.mainRedDotStatus = function () {
          console.log(this.awardingTaskList, this._gameTaskStatus);
          return this.awardingTaskList.length > 0 || this._gameTaskStatus;
        };
        Object.defineProperty(t.prototype, "netSubStauts", {
          get: function () {
            return this._netSubStauts;
          },
          enumerable: !1,
          configurable: !0
        });
        t.prototype.setNetSubStauts = function (t) {
          this._netSubStauts = t;
        };
        Object.defineProperty(t.prototype, "netSubAwardStauts", {
          get: function () {
            return this._netSubAwardStauts;
          },
          enumerable: !1,
          configurable: !0
        });
        t.prototype.setNetSubAwardStauts = function (t) {
          this._netSubAwardStauts = t;
        };
        t.prototype.reduceTask = function (t, e) {
          for (var o = [], s = (e == n.accept ? o = this._acceptptTaskList : o = this._awardingTaskList).length, a = 999, c = 0; c < s; c++) if (o[c].missionDefId == t.missionDefId) {
            a = c;
            break;
          }
          999 != a && o.splice(a, 1);
          e == n.accept ? (this._acceptptTaskList = o, this.setAwardingTaskList(t)) : (this._awardingTaskList = o, this.setCompleteTaskList(t));
          r.EVENT.emit(i.EventId.ON_REFRESH_TASK);
        };
        t.taskInfo = {};
        return t;
      }();
    o.default = s;
    (function (t) {
      t.RECEIVE = "RECEIVE";
      t.NO_RECEIVE = "NORECEIVE";
    })(o.MissionReceiveType || (o.MissionReceiveType = {}));
    (function (t) {
      t.UNKONWN = "UNKONWN";
      t.TORECEIVE = "TORECEIVE";
      t.HAVERECEIVED = "HAVERECEIVED";
    })(o.ReceiveStatus || (o.ReceiveStatus = {}));
    (function (t) {
      t.AUTO = "REWARD_SEND_AUTO";
      t.MANUAL = "REWARD_SEND_MANUAL";
      t.LOCK = "NOTIFY_REACH_STAGE";
      t.EXCHANGE_MANUAL = "EXCHANGE_MANUAL";
    })(o.RewardSendType || (o.RewardSendType = {}));
    (function (t) {
      t.ORDER = "ORDER";
      t.PAGEVIEW = "PAGEVIEW";
      t.P2P = "P2P";
      t.SHARE = "SHARE";
      t.THIRD = "THIRD";
      t.TIMESIGNIN = "TIMESIGNIN";
      t.COLLECTION = "COLLECTION";
      t.SIMPLESIGNIN = "SIMPLESIGNIN";
      t.EXCHANGE = "EXCHANGE";
      t.FRIEND_GIVE = "FRIEND_GIVE";
      t.OPEN_APP_PUSH = "OPEN_APP_PUSH";
      t.COMB_TASK = "COMB_TASK";
      t.SET_NICKNAME = "SET_NICKNAME";
    })(o.TaskItemType || (o.TaskItemType = {}));
    (function (t) {
      t.UNKNONW = "UNKNONW";
      t.ELE_ORDER_TANWAI = "ELE_ORDER_TANWAI";
      t.ELE_ORDER = "ELE_ORDER";
      t.KB_ORDER = "KB_ORDER";
      t.P2P = "P2P";
      t.PAGEVIEW = "PAGEVIEW";
      t.THIRD = "THIRD";
      t.SHARE = "SHARE";
      t.TIMESIGNIN = "TIMESIGNIN";
      t.COLLECTION = "COLLECTION";
      t.SIMPLESIGNIN = "SIMPLESIGNIN";
      t.EXCHANGE = "EXCHANGE";
      t.FRIEND_GIVE = "FRIEND_GIVE";
      t.OPEN_APP_PUSH = "OPEN_APP_PUSH";
      t.COMB_TASK = "COMB_TASK";
      t.SET_NICKNAME = "SET_NICKNAME";
    })(o.MissionInstanceTriggerType || (o.MissionInstanceTriggerType = {}));
    (function (t) {
      t.NO_REACH = "NO_REACH";
      t.RUNNING = "RUNNING";
      t.FINISH = "FINISH";
    })(o.TaskStatus || (o.TaskStatus = {}));
    (function (t) {
      t.RUNNING = "RUNNING";
      t.FINISH = "FINISH";
      t.FINISHED = "FINISHED";
      t.FINISHPASS = "FINISHPASS";
      t.UNFINISHPASS = "UNFINISHPASS";
    })(o.MissionStatusType || (o.MissionStatusType = {}));
    (function (t) {
      t.TAKE = "take";
      t.TODO = "todo";
      t.REWARD = "reward";
      t.FINISH = "finish";
      t.EXCHANGE = "exchange";
    })(o.MissionCardButtonType || (o.MissionCardButtonType = {}));
    (function (t) {
      t.TODO = "TODO";
      t.SUCCESS = "SUCCESS";
      t.FAIL = "FAIL";
    })(o.TaskRewardStatus || (o.TaskRewardStatus = {}));
    (function (t) {
      t.authorized = "authorized";
      t.denied = "denied";
      t.notDetermined = "notDetermined";
      t.unknown = "unknown";
    })(o.SubStatus || (o.SubStatus = {}));
    (function (t) {
      t.accept = "accept";
      t.award = "award";
      t.complete = "complete";
    })(n = o.TaskListType || (o.TaskListType = {}));
    (function (t) {
      t[t.NONE = 0] = "NONE";
      t[t.SUCCESS = 1] = "SUCCESS";
      t[t.FORBID_SELF = 2] = "FORBID_SELF";
      t[t.REPEAT = 3] = "REPEAT";
      t[t.INVITEED_LIMIT = 4] = "INVITEED_LIMIT";
      t[t.INVITER_LIMIT = 5] = "INVITER_LIMIT";
    })(o.InviteHelpResult || (o.InviteHelpResult = {}));
    cc._RF.pop();
  }, {
    "../Define/EventId": "EventId",
    "../Framework/Event/EventMgr": "EventMgr"
  }],
  TeMap: [function (t, e, o) {
    cc._RF.push(e, "53a3dSI0wxHAoj5dHBzCwcS", "TeMap");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = function () {
      function t(t) {
        this._data = {};
        t && (this._data = t);
      }
      t.prototype.has = function (t) {
        return null != t && null != t && this._data.hasOwnProperty(t.toString());
      };
      t.prototype.get = function (t) {
        return null == t || null == t ? null : this._data[t.toString()];
      };
      t.prototype.set = function (t, e) {
        this._data[t.toString()] = e;
      };
      Object.defineProperty(t.prototype, "keys", {
        get: function () {
          return Object.keys(this._data);
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.get_keys = function () {
        return this.keys;
      };
      t.prototype.del = function (t) {
        delete this._data[t.toString()];
      };
      t.prototype.rand = function () {
        var t = this.keys,
          e = t[Math.floor(Math.random() * t.length)];
        return this.get(e);
      };
      t.prototype.clear = function () {
        this._data = {};
      };
      t.prototype.getLength = function () {
        return this.keys.length;
      };
      return t;
    }();
    o.default = n;
    cc._RF.pop();
  }, {}],
  TurnTaskController: [function (t, e, o) {
    cc._RF.push(e, "f9d52bw5ipMR4/LJ/ILQANI", "TurnTaskController");
    var n = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      i = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var r = t("../Framework/Net/HttpRequest"),
      s = t("../Framework/Tools/BaseInfo"),
      a = t("./DoubleAwardController"),
      c = t("./TaskController"),
      l = function () {
        function t() {
          this._taskIdx = 1;
          this._taskList = null;
        }
        Object.defineProperty(t, "inst", {
          get: function () {
            this._inst || (this._inst = new t());
            return this._inst;
          },
          enumerable: !1,
          configurable: !0
        });
        t.prototype.getTaskList = function () {
          return n(this, 0, 0, function () {
            return i(this, function (t) {
              switch (t.label) {
                case 0:
                  {
                    return [4, c.default.inst.queryTask(s.default.TASK_GAME_PROP, !1)];
                  }
                case 1:
                  {
                    t.sent();
                    return [2];
                  }
              }
            });
          });
        };
        t.prototype.saveList = function (t) {
          this._taskList = t;
          console.log("this._taskList", this._taskList);
        };
        t.prototype.getProp = function (t, e, o) {
          0 === e && (e = null);
          0 === o && (o = null);
          return n(this, 0, 0, function () {
            var n, s, c;
            return i(this, function (i) {
              switch (i.label) {
                case 0:
                  {
                    return r.HttpRequest.isWeb ? [2, e()] : this._taskList ? [3, 2] : (n = this, [4, this.getTaskList()]);
                  }
                case 1:
                  {
                    n._taskList = i.sent();
                    this.getProp(t);
                    return [2];
                  }
                case 2:
                  {
                    this._taskIdx >= this._taskList.length && (this._taskIdx = 0);
                    s = this._taskList[this._taskIdx];
                    console.log(this._taskList, this._taskIdx);
                    return s ? (c = {
                      sID: t,
                      sMissionCollectionID: s.missionCollectionId,
                      sMissionID: s.missionDefId
                    }, a.default.inst.getNewAction(c, e, o), [2]) : [2];
                  }
              }
            });
          });
        };
        t.prototype.changeIdx = function () {
          this._taskIdx += 1;
        };
        return t;
      }();
    o.default = l;
    cc._RF.pop();
  }, {
    "../Framework/Net/HttpRequest": "HttpRequest",
    "../Framework/Tools/BaseInfo": "BaseInfo",
    "./DoubleAwardController": "DoubleAwardController",
    "./TaskController": "TaskController"
  }],
  UIBase: [function (t, e, o) {
    cc._RF.push(e, "e0585CZW5BBgK519LYoyYnN", "UIBase");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.UIShowTypes = 0;
    var s,
      a = t("../Define/UIDefs"),
      c = t("./UI/UIMgr"),
      l = t("./Utils/Utils"),
      u = t("./Res/ResKeeper"),
      p = cc._decorator,
      f = p.ccclass,
      h = p.property;
    (function (t) {
      t[t.UIFullScreen = 0] = "UIFullScreen";
      t[t.UIAddition = 1] = "UIAddition";
      t[t.UISingle = 2] = "UISingle";
    })(s = o.UIShowTypes || (o.UIShowTypes = {}));
    var d = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.showType = s.UISingle;
        e.quickClose = !0;
        e.showLayer = a.LayerType.Pop;
        e.cache = !1;
        e.maskOpacity = 255;
        e._para = null;
        e.isPlayOpenAni = !1;
        e.UIid = 0;
        return e;
      }
      i(e, t);
      e.prototype.close = function () {
        c.default.inst.close(this.uiType);
      };
      e.prototype.init = function (t, e) {
        this._para = l.default.clone(t);
        this.uiType = e;
      };
      e.prototype.onOpen = function () {};
      e.prototype.onOpenAniOver = function () {};
      e.prototype.onClose = function () {};
      e.prototype.onTop = function (t) {
        for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];
      };
      r([h({
        type: cc.Enum(s),
        displayName: "\u663e\u793a\u7c7b\u578b"
      })], e.prototype, "showType", 0);
      r([h()], e.prototype, "quickClose", 0);
      r([h({
        type: cc.Enum(a.LayerType)
      })], e.prototype, "showLayer", 0);
      r([h()], e.prototype, "cache", 0);
      r([h()], e.prototype, "maskOpacity", 0);
      return r([f], e);
    }(u.default);
    o.default = d;
    cc._RF.pop();
  }, {
    "../Define/UIDefs": "UIDefs",
    "./Res/ResKeeper": "ResKeeper",
    "./UI/UIMgr": "UIMgr",
    "./Utils/Utils": "Utils"
  }],
  UICloseAnimation: [function (t, e, o) {
    cc._RF.push(e, "0a83aI6odRAhpOnBMcQ6/en", "UICloseAnimation");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = cc._decorator,
      a = s.ccclass,
      c = (s.property, function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        i(e, t);
        return r([a], e);
      }(cc.Animation));
    o.default = c;
    cc._RF.pop();
  }, {}],
  UIDefs: [function (t, e, o) {
    var n;
    cc._RF.push(e, "cfbd74GR/NOr782467+09nO", "UIDefs");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.UIDataInfo = o.UIType = o.LayerType = 0;
    (function (t) {
      t[t.GUI = 0] = "GUI";
      t[t.Pop = 1] = "Pop";
      t[t.Tip = 2] = "Tip";
      t[t.Top = 3] = "Top";
    })(o.LayerType || (o.LayerType = {}));
    (function (t) {
      t[t.$Start = 0] = "$Start";
      t[t.Loading = 1] = "Loading";
      t[t.ReviveUI = 2] = "ReviveUI";
      t[t.WatchAD = 3] = "WatchAD";
      t[t.GameGuide = 4] = "GameGuide";
      t[t.GameTips = 5] = "GameTips";
      t[t.GamePause = 6] = "GamePause";
      t[t.GameDrop = 7] = "GameDrop";
      t[t.GameSettlement = 8] = "GameSettlement";
      t[t.CommonDialog = 9] = "CommonDialog";
      t[t.AntiAddiction = 10] = "AntiAddiction";
      t[t.Unable = 11] = "Unable";
      t[t.ExitGame = 12] = "ExitGame";
      t[t.ExitShare = 13] = "ExitShare";
      t[t.Set = 14] = "Set";
      t[t.Unsubscribe = 15] = "Unsubscribe";
      t[t.Rank = 16] = "Rank";
      t[t.GetItemLayer = 17] = "GetItemLayer";
      t[t.MorePower = 18] = "MorePower";
      t[t.GetPower = 19] = "GetPower";
      t[t.$End = 20] = "$End";
    })(n = o.UIType || (o.UIType = {}));
    var i = function () {
      function t(t, e, o) {
        0 === o && (o = !1);
        this.preventTouch = !0;
        this.showWaitMask = !1;
        this.uiType = t;
        this.uiPath = e;
        this.showWaitMask = o;
      }
      Object.defineProperty(t.prototype, "fullPath", {
        get: function () {
          return "UIPrefab/" + this.uiPath;
        },
        enumerable: !1,
        configurable: !0
      });
      t.getUIData = function (t) {
        for (var e = 0; e < this._uiDataList.length; ++e) if (this._uiDataList[e].uiType == t) {
          return this._uiDataList[e];
        }
        return null;
      };
      t._uiDataList = [new t(n.Loading, "Loading", !0), new t(n.ReviveUI, "ReviveUI"), new t(n.WatchAD, "WatchAD"), new t(n.GameGuide, "GameGuide"), new t(n.GamePause, "GamePause"), new t(n.GameDrop, "GameDrop"), new t(n.GameSettlement, "GameSettlement"), new t(n.GameTips, "GameTips"), new t(n.GetItemLayer, "GetItemLayer"), new t(n.ExitGame, "ExitGame"), new t(n.ExitShare, "Detain"), new t(n.AntiAddiction, "PreventAddiction/AntiAddiction"), new t(n.Unsubscribe, "Common/CommonDialog"), new t(n.Set, "Set/Set"), new t(n.Unable, "PreventAddiction/Unable"), new t(n.Rank, "Rank/Rank"), new t(n.MorePower, "Power/Power"), new t(n.GetPower, "Power/PowerNo")];
      return t;
    }();
    o.UIDataInfo = i;
    cc._RF.pop();
  }, {}],
  UIEffectMgr: [function (t, e, o) {
    cc._RF.push(e, "649bcq5eVVD6LkHQOcLPWVa", "UIEffectMgr");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../Sys/TeMap"),
      a = t("./UIEffectType"),
      c = t("./UIEffect"),
      l = t("../Res/ResUtil"),
      u = t("../Res/NodePool"),
      p = t("../Sys/Handler"),
      f = cc._decorator,
      h = f.ccclass,
      d = f.property,
      _ = function () {
        function t() {
          this.group = null;
          this.effectTypes = [];
        }
        r([d({
          type: cc.Node,
          displayName: "\u7279\u6548\u663e\u793a\u5bb9\u5668(\u5c42\u7ea7)"
        })], t.prototype, "group", 0);
        r([d({
          type: [cc.Enum(a.UIEffectType)],
          displayName: "\u52a0\u5165\u6b64\u5bb9\u5668\u7279\u6548\u7c7b\u578b\u5217\u8868"
        })], t.prototype, "effectTypes", 0);
        return r([h("EffectGroupType")], t);
      }(),
      y = function () {
        function t() {
          this.effectType = a.UIEffectType.None;
          this.prefab = null;
        }
        r([d({
          type: cc.Enum(a.UIEffectType),
          displayName: "\u7279\u6548\u7c7b\u578b"
        })], t.prototype, "effectType", 0);
        r([d({
          type: cc.Prefab,
          displayName: "prefab"
        })], t.prototype, "prefab", 0);
        return r([h("EffectPrefab")], t);
      }(),
      v = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.effectPrefabs = [];
          e.effectConfigs = [];
          e._effectPrefabMap = new s.default();
          e._effectGroupMap = new s.default();
          e._effectPool = new s.default();
          return e;
        }
        var o;
        i(e, t);
        o = e;
        Object.defineProperty(e, "inst", {
          get: function () {
            this._inst || cc.error("Effect Manger not load yet!");
            return this._inst;
          },
          enumerable: !1,
          configurable: !0
        });
        e.prototype.onLoad = function () {
          o._inst = this;
          for (var t = 0; t < this.effectConfigs.length; ++t) for (var e = this.effectConfigs[t], n = e.effectTypes, i = 0; i < n.length; ++i) this._effectGroupMap.set(n[i], e.group);
          for (t = 0; t < this.effectPrefabs.length; ++t) {
            var r = this.effectPrefabs[t],
              s = r.prefab,
              a = new u.NodePool();
            a.init(s);
            this._effectPool.set(r.effectType, a);
            this._effectPrefabMap.set(r.effectType, s);
          }
        };
        e.prototype.addEffect = function (t, e, o, n) {
          0 === e && (e = !0);
          0 === n && (n = !0);
          var i = this.createEffect(t, e, n);
          if (!i) {
            cc.error("add effect fail!");
            return null;
          }
          var r = this._effectGroupMap.get(t);
          r && (r.addChild(i), o && i.setPosition(r.convertToNodeSpaceAR(o)));
          return i.getComponent(c.default);
        };
        e.prototype.createEffect = function (t, e, o) {
          0 === e && (e = !0);
          0 === o && (o = !0);
          var n = null,
            i = this._effectPool.get(t);
          i && (n = i.getNode());
          if (!n) {
            var r = this._effectPrefabMap.get(t);
            if (!r) {
              cc.error("effect prefab not found!");
              return null;
            }
            n = l.ResUtil.instantiate(r);
          }
          if (n) {
            var s = n.getComponent(c.default);
            s ? (s.effectType = t, o && s.setCompleteCallback(new p.Handler(this, this.recovery, null, !0)), e && s.playAni()) : cc.error("effect script not found!");
          }
          return n;
        };
        e.prototype.recovery = function (t, e) {
          if (e && e.parent) {
            e.removeFromParent();
          }
          var o = this._effectPool.get(t);
          o || (o = new u.NodePool(), this._effectPool.set(t, o));
          o.freeNode(e);
        };
        e.prototype.onDestroy = function () {
          for (var t = this._effectPool.keys, e = 0; e < t.length; ++e) {
            var n = this._effectPool.get(t[e]);
            if (n) {
              n.destory();
            }
          }
          this._effectPool.clear();
          o._inst = null;
        };
        e._inst = null;
        r([d({
          type: [y],
          displayName: "\u7279\u6548\u5217\u8868"
        })], e.prototype, "effectPrefabs", 0);
        r([d({
          type: [_],
          displayName: "\u7279\u6548\u663e\u793a\u5c42\u7ea7\u914d\u7f6e"
        })], e.prototype, "effectConfigs", 0);
        return o = r([h], e);
      }(cc.Component);
    o.default = v;
    cc._RF.pop();
  }, {
    "../Res/NodePool": "NodePool",
    "../Res/ResUtil": "ResUtil",
    "../Sys/Handler": "Handler",
    "../Sys/TeMap": "TeMap",
    "./UIEffect": "UIEffect",
    "./UIEffectType": "UIEffectType"
  }],
  UIEffectType: [function (t, e, o) {
    cc._RF.push(e, "1da57crPXROAKu2mBh3z0Uw", "UIEffectType");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.UIEffectType = 0;
    (function (t) {
      t[t.None = 0] = "None";
      t[t.ShootStart = 1] = "ShootStart";
      t[t.HitBoos = 2] = "HitBoos";
      t[t.CardBlingOut = 3] = "CardBlingOut";
      t[t.UnitStartSKill = 4] = "UnitStartSKill";
      t[t.ComboHitEffect = 5] = "ComboHitEffect";
      t[t.PowerFlip = 6] = "PowerFlip";
      t[t.PowerFlipScreen = 7] = "PowerFlipScreen";
    })(o.UIEffectType || (o.UIEffectType = {}));
    cc._RF.pop();
  }, {}],
  UIEffect: [function (t, e, o) {
    cc._RF.push(e, "49cc1syEbFNZIzE5LScS9YR", "UIEffect");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("./UIEffectType"),
      a = cc._decorator,
      c = a.ccclass,
      l = (a.property, function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e._ani = null;
          e._completeCallback = null;
          e._effectType = s.UIEffectType.None;
          return e;
        }
        var o;
        i(e, t);
        o = e;
        Object.defineProperty(e.prototype, "ani", {
          get: function () {
            return this._ani;
          },
          enumerable: !1,
          configurable: !0
        });
        Object.defineProperty(e.prototype, "effectType", {
          get: function () {
            return this._effectType;
          },
          set: function (t) {
            this._effectType = t;
          },
          enumerable: !1,
          configurable: !0
        });
        e.prototype.onLoad = function () {
          this._ani = this.node.getComponent(cc.Animation);
        };
        e.prototype.setCompleteCallback = function (t) {
          this._completeCallback = t;
        };
        e.prototype.onAniComplete = function () {
          this._completeCallback && this._completeCallback.runWith([this.effectType, this.node]);
          this.node.emit(o.EVENT_ANI_COMPLETE);
        };
        e.prototype.start = function () {
          this.playAni();
        };
        e.prototype.playAni = function () {
          if (this._ani && this._ani.play().wrapMode != cc.WrapMode.Loop) {
            this._ani.once("finished", this.onAniComplete, this);
          }
        };
        e.prototype.setPlayTime = function (t) {
          this._ani.defaultClip.speed = t / 1e3 / this._ani.defaultClip.duration;
        };
        e.prototype.onEnable = function () {};
        e.prototype.onDisable = function () {
          if (this._ani) {
            this._ani.off("finished", this.onAniComplete, this);
          }
        };
        e.EVENT_ANI_COMPLETE = "UIEffect.EVENT_ANI_COMPLETE";
        return o = r([c], e);
      }(cc.Component));
    o.default = l;
    cc._RF.pop();
  }, {
    "./UIEffectType": "UIEffectType"
  }],
  UIFacade: [function (t, e, o) {
    cc._RF.push(e, "16e3aBpWmhDeZYUzLRkyJpM", "UIFacade");
    var n = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      i = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.UIFacade = 0;
    var r = t("./UIMgr"),
      s = t("../../Define/UIDefs"),
      a = t("../../Define/EventId"),
      c = t("../Event/EventMgr"),
      l = t("./FlyTxtPool"),
      u = function () {
        function t() {}
        t.showToast = function (t) {
          r.default.inst.showToast(t);
        };
        t.showConfirm = function (t, e, o) {
          0 === e && (e = "\u786e\u8ba4");
          0 === o && (o = "\u53d6\u6d88");
          return n(this, 0, Promise, function () {
            return i(this, function () {
              return [2, new Promise(function (n) {
                r.default.inst.open(s.UIType.Confirm, {
                  content: t,
                  confirmBtnTxt: e,
                  cancelBtnTxt: o
                });
                c.EVENT.once(a.EventId.EVENT_CONFIRM, function (t) {
                  n(t);
                });
              })];
            });
          });
        };
        t.showLoading = function (t) {
          r.default.inst.showSceneLoadUI(t);
        };
        t.hideLoading = function () {
          r.default.inst.hideSceneLoadUI();
        };
        t.flyTxt = function (t, e, o) {
          0 === o && (o = cc.Color.WHITE);
          l.FlyTxtPool.flyTxt(t, e, o);
        };
        return t;
      }();
    o.UIFacade = u;
    cc._RF.pop();
  }, {
    "../../Define/EventId": "EventId",
    "../../Define/UIDefs": "UIDefs",
    "../Event/EventMgr": "EventMgr",
    "./FlyTxtPool": "FlyTxtPool",
    "./UIMgr": "UIMgr"
  }],
  UIMgr: [function (t, e, o) {
    cc._RF.push(e, "e5f7aIPaPFCQK9zX5+7Hh5H", "UIMgr");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.eOrientation = 0;
    var s = t("../../Define/UIDefs"),
      a = t("../UIBase"),
      c = t("./CommonToast"),
      l = t("../../Define/EventId"),
      u = t("../Res/ResLoader"),
      p = t("./UIOpenAnimation"),
      f = t("./UICloseAnimation"),
      h = t("../Res/ResUtil"),
      d = t("../Event/EventMgr"),
      _ = t("../Scene/SceneMgr"),
      y = cc._decorator,
      v = y.ccclass,
      m = y.property;
    (function (t) {
      t[t.Landscape = 0] = "Landscape";
      t[t.Portrait = 1] = "Portrait";
    })(o.eOrientation || (o.eOrientation = {}));
    var g = function (t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        e.guiLayer = null;
        e.popLayer = null;
        e.tipLayer = null;
        e.topLayer = null;
        e.uiWaitNode = null;
        e.waitMask = null;
        e.sceneWaitNode = null;
        e.sceneWaitLbl = null;
        e.tipsNode = null;
        e.uiBack = null;
        e._tipComponnet = null;
        e.BackGroundUI = 0;
        e.isClosing = !1;
        e.isOpening = !1;
        e.UICache = {};
        e.UIStack = [];
        e.UIOpenQueue = [];
        e.UICloseQueue = [];
        e.uiOpenBeforeDelegate = null;
        e.uiOpenDelegate = null;
        e.uiCloseDelegate = null;
        e.showWaitMask = !0;
        return e;
      }
      var o;
      i(e, t);
      o = e;
      Object.defineProperty(e, "inst", {
        get: function () {
          return o._inst ? o._inst : (cc.error("UIMgr not load yet!", "%s"), null);
        },
        enumerable: !1,
        configurable: !0
      });
      e.prototype.onLoad = function () {
        console.log("init UIMGR .......................");
        this.resetWinSize();
        o._inst = this;
      };
      e.prototype.open = function (t, e, o) {
        var n = this;
        if (0 === o) {
          o = null;
        }
        var i = {
          uiType: t,
          uiArgs: e,
          uiView: null
        };
        if (this.isOpening || this.isClosing) {
          cc.log("open <" + s.UIType[t] + "> ui action push into a queue!");
          return this.UIOpenQueue.push(i);
        }
        if (-1 == this.getUIIndex(t)) {
          i.zOrder = this.UIStack.length + 1;
          this.UIStack.push(i);
          var r = s.UIDataInfo.getUIData(t);
          r.preventTouch && this.showWaitMask && (i.preventNode = this.preventTouch(i.zOrder), i.preventNode.opacity = 0);
          this.isOpening = !0;
          r.showWaitMask && this.showUIWaitAnim();
          this.getOrCreateUI(t, o, function (o) {
            n.hideUIWaitAnim();
            if (i.isClose || null == o) {
              cc.log("getOrCreateUI " + t + " faile! close state : " + i.isClose + " , uiView : " + o, "%s");
              n.isOpening = !1;
              i.preventNode && (i.preventNode.destroy(), i.preventNode = null);
              return d.EVENT.emit(l.EventId.ON_UI_OPEN_FAIL, t);
            }
            n.onUIOpen(t, o, i, e);
            n.isOpening = !1;
            n.autoExecNextUI();
          }, e);
        } else {
          this.closeToUI(t, e);
        }
      };
      e.prototype.closeToUI = function (t, e, o) {
        if (0 === o) {
          o = !0;
        }
        var n = this.getUIIndex(t);
        if (-1 != n) {
          o ? n = n : n = n + 1;
          for (var i = this.UIStack.length - 1; i >= n; --i) {
            var r = this.UIStack.pop(),
              s = r.uiType,
              a = r.uiView;
            r.isClose = !0;
            r.preventNode && (r.preventNode.destroy(), r.preventNode = null);
            this.uiCloseDelegate && this.uiCloseDelegate(s);
            a && (a.onClose(), a.cache ? (this.UICache[s] = a, a.node.removeFromParent(!1)) : a.node.destroy());
          }
          this.updateUI();
          this.UIOpenQueue = [];
          this.UICloseQueue = [];
          o && this.open(t, e);
        }
      };
      e.prototype.resetWinSize = function () {
        this._winSize = cc.view.getVisibleSize();
      };
      e.prototype.getLayer = function (t) {
        var e = null;
        switch (t) {
          case s.LayerType.GUI:
            {
              e = this.guiLayer;
              break;
            }
          case s.LayerType.Pop:
            {
              e = this.popLayer;
              break;
            }
          case s.LayerType.Tip:
            {
              e = this.tipLayer;
              break;
            }
          case s.LayerType.Top:
            {
              e = this.topLayer;
              break;
            }
          default:
            {
              cc.error("Unkonw layer type!", "%s");
            }
        }
        return e;
      };
      e.prototype.add2Layer = function (t, e) {
        if (e) {
          var o = this.getLayer(t);
          o ? o.addChild(e) : cc.error("add to layer is not found!", "%s");
        } else {
          cc.error("node is not valid!", "%s");
        }
      };
      e.prototype.closeAll = function (t, e) {
        0 === t && (t = !1);
        0 === e && (e = s.UIType.Loading);
        for (var o = this.UIStack.length - 1; o >= 0; --o) {
          var n = this.UIStack[o];
          if (n.uiType != e) {
            t && _.SCENE.pushReviveWnd(n.uiType, n.uiArgs);
            this.close(n.uiType, !1);
          }
        }
        this.UIOpenQueue = [];
        this.UICloseQueue = [];
        this.isOpening = !1;
        this.isClosing = !1;
      };
      e.prototype.clearCache = function () {
        for (var t in this.UICache) {
          var e = this.UICache[t];
          if (cc.isValid(e.node)) {
            e.node.destroy();
          }
        }
        this.UICache = {};
      };
      e.prototype.isTopUI = function (t) {
        return 0 != this.UIStack.length && this.UIStack[this.UIStack.length - 1].uiType == t;
      };
      e.prototype.getUI = function (t) {
        for (var e = 0; e < this.UIStack.length; e++) {
          var o = this.UIStack[e];
          if (t == o.uiType) {
            return o.uiView;
          }
        }
        return null;
      };
      e.prototype.isUIOpen = function (t) {
        return null != this.getUI(t);
      };
      e.prototype.getTopUI = function () {
        return this.UIStack.length > 0 ? this.UIStack[this.UIStack.length - 1].uiView : null;
      };
      e.prototype.showUIWaitAnim = function (t, e) {
        0 === t && (t = !0);
        0 === e && (e = 15);
        this.showWaitMask && (this.uiWaitNode && (this.uiWaitNode.active = !0), this.waitMask && (this.waitMask.active = !0), t ? this.waitMask && (this.waitMask.opacity = 30) : this.waitMask && (this.waitMask.opacity = 0));
      };
      e.prototype.hideUIWaitAnim = function () {
        this.uiWaitNode && (this.uiWaitNode.active = !1);
        this.waitMask && (this.waitMask.active = !1);
      };
      e.prototype.showSceneLoadUI = function (t) {
        if (this.sceneWaitNode) {
          this.sceneWaitNode.active = !0;
          this.sceneWaitLbl.string = t;
        }
      };
      e.prototype.hideSceneLoadUI = function () {
        if (this.sceneWaitNode) {
          this.sceneWaitNode.active = !1;
        }
      };
      e.prototype.showToast = function (t) {
        if (null != t && null != t) {
          if (!this._tipComponnet) {
            var e = cc.instantiate(this.tipsNode).getComponent(c.default);
            e.node.parent = this.getLayer(s.LayerType.Tip);
            e.node.name = "_tip_";
            this._tipComponnet = e;
          }
          this._tipComponnet.showTips(t);
        }
      };
      Object.defineProperty(e.prototype, "winSize", {
        get: function () {
          return this._winSize;
        },
        enumerable: !1,
        configurable: !0
      });
      e.prototype.close = function (t, e) {
        var o = this;
        0 === e && (e = !0);
        cc.log("close ui <" + s.UIType[t] + ">");
        var n,
          i = this.UIStack.length;
        if (t > s.UIType.$Start && t < s.UIType.$End) {
          if (i < 1 || this.isClosing || this.isOpening || !this.isUIOpen(t)) {
            cc.log("<" + s.UIType[t] + "> can not be close in this period of time");
            return this.isUIOpen(t) && this.UICloseQueue.push(t);
          }
          for (var r = this.UIStack.length - 1; r >= 0; r--) {
            var a = this.UIStack[r];
            if (a.uiType === t) {
              n = a;
              this.UIStack.splice(r, 1);
              break;
            }
          }
          if (0 !== n) {
            this.isClosing = !0;
            var c = n.uiType,
              u = n.uiView;
            n.isClose = !0;
            n.preventNode && (n.preventNode.destroy(), n.preventNode = null);
            if (null != u) {
              var p = this.UIStack[i - 2];
              this.updateUI();
              var h = function () {
                  p && p.uiView && o.isTopUI(p.uiType) ? (p.uiView.node.active = !0, p.uiView.onTop(c, u.onClose())) : u.onClose();
                  o.uiCloseDelegate && o.uiCloseDelegate(c);
                  u.cache ? (o.UICache[c] = u, u.node.removeFromParent(!1), cc.log("uiView removeFromParent " + n.uiType)) : (u.node.destroy(), cc.log("uiView destroy <" + s.UIType[n.uiType] + ">"));
                  o.isClosing = !1;
                  o.autoExecNextUI();
                  d.EVENT.emit(l.EventId.ON_UI_CLOSE, t);
                },
                _ = u.node.getComponent(f.default);
              e && _ ? (u.isPlayOpenAni = !0, _.play().wrapMode == cc.WrapMode.Loop && cc.error("UI close animation should be a loop animation!", "%s"), _.on("finished", function () {
                h();
              }, this, !1).call(function () {})) : h();
            } else {
              this.isClosing = !1;
            }
          }
        } else {
          cc.error("unknown ui type to close!", "%s");
        }
      };
      e.prototype.getOpenUICount = function () {
        return this.UIStack.length;
      };
      e.prototype.replace = function (t, e) {
        this.close(this.UIStack[this.UIStack.length - 1].uiType);
        this.open(t, e);
      };
      e.prototype.getUIIndex = function (t) {
        for (var e = 0; e < this.UIStack.length; e++) if (t == this.UIStack[e].uiType) {
          return e;
        }
        return -1;
      };
      e.prototype.preventTouch = function (t) {
        var e = h.ResUtil.instantiate(this.uiBack);
        e.name = "preventTouch";
        e.on(cc.Node.EventType.TOUCH_START, function (t) {
          t.stopPropagation();
        }, e);
        this.getLayer(s.LayerType.Pop).addChild(e, t);
        return e;
      };
      e.prototype.autoExecNextUI = function () {
        if (this.UICloseQueue.length > 0) {
          var t = this.UICloseQueue[0];
          this.UICloseQueue.splice(0, 1);
          this.close(t);
        } else {
          if (this.UIOpenQueue.length > 0) {
            var e = this.UIOpenQueue[0];
            this.UIOpenQueue.splice(0, 1);
            this.open(e.uiType, e.uiArgs);
          }
        }
      };
      e.prototype.updateUI = function () {
        for (var t = 0, e = this.UIStack.length - 1; e >= 0; --e) {
          var o = this.UIStack[e].uiView.showType;
          this.UIStack[e].uiView.node.active = !0;
          if (a.UIShowTypes.UIFullScreen == o) {
            break;
          }
          if (a.UIShowTypes.UISingle == o) {
            for (var n = 0; n < this.BackGroundUI; ++n) if (this.UIStack[n]) {
              this.UIStack[n].uiView.node.active = !0;
            }
            t = this.BackGroundUI;
            break;
          }
        }
        for (var i = t; i < e; ++i) this.UIStack[i].uiView.node.active = !1;
      };
      e.prototype.getOrCreateUI = function (t, e, n, i) {
        var r = this.UICache[t];
        if (r) {
          n(r);
        } else {
          var c = s.UIDataInfo.getUIData(t);
          if (!c || !c.fullPath) {
            cc.log("getOrCreateUI " + t + " faile, prefab conf not found!");
            return n(null);
          }
          var l = c.fullPath;
          u.resLoader.loadRes(l, e, function (e, s) {
            if (e) {
              cc.log("getOrCreateUI loadRes " + t + " faile, path: " + l);
              n(null);
              try {
                cc.error(e);
              } catch (y) {}
            } else {
              var c = cc.instantiate(s);
              if (null == c) {
                cc.log("getOrCreateUI instantiate " + t + " faile, path: " + l);
                n(null);
                return u.resLoader.releaseAsset(s);
              }
              if (null == (r = c.getComponent(a.default))) {
                cc.log("getOrCreateUI getComponent " + t + " faile, path: " + l);
                c.destroy();
                n(null);
                return u.resLoader.releaseAsset(s);
              }
              var p = o.inst.getCanvasSize();
              r.node.width = p.width;
              r.node.height = p.height;
              r.__prefab__ = s;
              s.addRef();
              r.init(i, t);
              n(r);
            }
          });
        }
      };
      e.prototype.getCanvasSize = function () {
        return new cc.Size(this.node.width, this.node.height);
      };
      e.prototype.onUIOpen = function (t, e, o, n) {
        var i = this;
        if (null != e) {
          o.uiView = e;
          e.node.active = !0;
          e.node.zIndex = o.zOrder || this.UIStack.length;
          o.preventNode && (o.preventNode.opacity = e.maskOpacity);
          if (e.quickClose) {
            var r = e.node.getChildByName("background");
            r || ((r = new cc.Node()).name = "background", r.setContentSize(cc.winSize), r.x = (.5 - e.node.anchorX) * cc.winSize.width, r.y = (.5 - e.node.anchorY) * cc.winSize.height, e.node.addChild(r, -1));
            r.targetOff(cc.Node.EventType.TOUCH_START);
            r.on(cc.Node.EventType.TOUCH_END, function (e) {
              e.stopPropagation();
              cc.log("touch close <" + s.UIType[t] + ">");
              i.close(t);
            }, r);
          }
          this.add2Layer(e.showLayer, e.node);
          this.updateUI();
          var a = 0;
          this.UIStack.length > 1 && (a = this.UIStack[this.UIStack.length - 2].uiType);
          this.uiOpenBeforeDelegate && this.uiOpenBeforeDelegate(t, a);
          e.onOpen(a, n);
          var c = function () {
              e.isPlayOpenAni = !1;
              e.onOpenAniOver();
              i.uiOpenDelegate && i.uiOpenDelegate(t, a);
              d.EVENT.emit(l.EventId.ON_UI_OPEN, t);
            },
            u = e.node.getComponent(p.default);
          u ? (e.isPlayOpenAni = !0, u.play().wrapMode == cc.WrapMode.Loop && cc.error("UI open animation should not be a loop animation!"), u.once("finished", function () {
            c();
          }, this)) : c();
        }
      };
      e.prototype.getOpenQueueCount = function () {
        return this.UIOpenQueue.length;
      };
      r([m(cc.Node)], e.prototype, "guiLayer", 0);
      r([m(cc.Node)], e.prototype, "popLayer", 0);
      r([m(cc.Node)], e.prototype, "tipLayer", 0);
      r([m(cc.Node)], e.prototype, "topLayer", 0);
      r([m(cc.Node)], e.prototype, "uiWaitNode", 0);
      r([m(cc.Node)], e.prototype, "waitMask", 0);
      r([m(cc.Node)], e.prototype, "sceneWaitNode", 0);
      r([m(cc.Label)], e.prototype, "sceneWaitLbl", 0);
      r([m(cc.Prefab)], e.prototype, "tipsNode", 0);
      r([m(cc.Prefab)], e.prototype, "uiBack", 0);
      return o = r([v], e);
    }(cc.Component);
    o.default = g;
    cc._RF.pop();
  }, {
    "../../Define/EventId": "EventId",
    "../../Define/UIDefs": "UIDefs",
    "../Event/EventMgr": "EventMgr",
    "../Res/ResLoader": "ResLoader",
    "../Res/ResUtil": "ResUtil",
    "../Scene/SceneMgr": "SceneMgr",
    "../UIBase": "UIBase",
    "./CommonToast": "CommonToast",
    "./UICloseAnimation": "UICloseAnimation",
    "./UIOpenAnimation": "UIOpenAnimation"
  }],
  UIOpenAnimation: [function (t, e, o) {
    cc._RF.push(e, "2f4fe0wTRVJ/6kG1ktMX+6i", "UIOpenAnimation");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = cc._decorator,
      a = s.ccclass,
      c = (s.property, function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        i(e, t);
        return r([a], e);
      }(cc.Animation));
    o.default = c;
    cc._RF.pop();
  }, {}],
  UnAdult: [function (t, e, o) {
    cc._RF.push(e, "bd872dR+0NHzLc3e6gNXUfq", "UnAdult");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../../../Controller/LTrackerMgr"),
      a = t("../../../Controller/WindVaneMgr"),
      c = t("../../../Framework/UIBase"),
      l = cc._decorator,
      u = l.ccclass,
      p = (l.property, function (t) {
        function e() {
          return null !== t && t.apply(this, arguments) || this;
        }
        i(e, t);
        e.prototype.onLoad = function () {
          s.default.inst.expo("cx156059", {});
        };
        e.prototype.onCloseGame = function () {
          a.default.inst.closeWindow();
        };
        return r([u], e);
      }(c.default));
    o.default = p;
    cc._RF.pop();
  }, {
    "../../../Controller/LTrackerMgr": "LTrackerMgr",
    "../../../Controller/WindVaneMgr": "WindVaneMgr",
    "../../../Framework/UIBase": "UIBase"
  }],
  Unsubscribe: [function (t, e, o) {
    cc._RF.push(e, "3bda4tf9wxLNL23lQM2v9Eo", "Unsubscribe");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      },
      s = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      a = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var c = t("../../../Controller/LTrackerMgr"),
      l = t("../../../Framework/UIBase"),
      u = t("../../../Model/TaskModel"),
      p = t("../../../Network/Net"),
      f = cc._decorator,
      h = f.ccclass,
      d = (f.property, function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e._callback = null;
          return e;
        }
        i(e, t);
        e.prototype.onLoad = function () {
          this._callback = this._para.cb;
          c.default.inst.expo("cx155939", {});
        };
        e.prototype.ouSure = function () {
          return s(this, 0, 0, function () {
            return a(this, function (t) {
              switch (t.label) {
                case 0:
                  {
                    return [4, p.Net.setSubscribe(!1)];
                  }
                case 1:
                  {
                    t.sent();
                    u.default.inst.setNetSubStauts(!1);
                    this._callback && this._callback();
                    c.default.inst.click("cx155939.dx204459", {});
                    this.close();
                    return [2];
                  }
              }
            });
          });
        };
        e.prototype.onContinueGame = function () {
          c.default.inst.click("cx155939.dx204475", {});
          this.close();
        };
        return r([h], e);
      }(l.default));
    o.default = d;
    cc._RF.pop();
  }, {
    "../../../Controller/LTrackerMgr": "LTrackerMgr",
    "../../../Framework/UIBase": "UIBase",
    "../../../Model/TaskModel": "TaskModel",
    "../../../Network/Net": "Net"
  }],
  Utils: [function (t, e, o) {
    cc._RF.push(e, "6917a72WWFM9ZEwVneeYPE1", "Utils");
    var n = this && this.__values || function (t) {
      var e = "function" == typeof Symbol && Symbol.iterator,
        o = e && t[e],
        n = 0;
      if (o) {
        return o.call(t);
      }
      if (t && "number" == typeof t.length) {
        return {
          next: function () {
            t && n >= t.length && (t = 0);
            return {
              value: t && t[n++],
              done: !t
            };
          }
        };
      }
      throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var i = t("../../Define/UIDefs"),
      r = function () {
        function t() {}
        t.verifyNode = function (t) {
          return null != t && t.isValid;
        };
        t.verifyComponent = function (t) {
          return null != t && !!t.isValid && !!t.node && !!t.node.isValid;
        };
        t.isComponentLive = function (t) {
          return !!(t && t.node && t.node.isValid && t.isValid);
        };
        t.getUrlParams = function (t) {
          var e = new RegExp("(^|&)" + t + "=([^&]*)(&|$)"),
            o = window.location.search.substr(1).match(e);
          return null != o ? decodeURIComponent(o[2]) : null;
        };
        t.containsPointPolygon = function (t, e, o) {
          for (var n = t, i = t.length, r = i - 2, s = !1, a = 0; a < i; a += 2) {
            var c = n[a + 1],
              l = n[r + 1];
            if (c < o && l >= o || l < o && c >= o) {
              var u = n[a];
              if (u + (o - c) / (l - c) * (n[r] - u) < e) {
                s = !s;
              }
            }
            r = a;
          }
          return s;
        };
        t.getBoundingBoxAMPolygon = function (t, e, o) {
          var n,
            i = e.findSlot(o);
          if (i) {
            var r = i.getAttachment();
            if (r && r instanceof sp.spine.BoundingBoxAttachment) {
              var s = r;
              n = sp.spine.Utils.newFloatArray(s.worldVerticesLength);
              s.computeWorldVertices(i, 0, s.worldVerticesLength, n, 0, 2);
              for (var a = n.length, c = 0; c < a; c += 2) {
                var l = t.convertToWorldSpaceAR(new cc.Vec2(n[c], n[c + 1]));
                n[c] = l.x;
                n[c + 1] = l.y;
              }
            }
          }
          return n;
        };
        t.stopSpineAtFrame = function (t, e, o) {
          if (t && e && t.findAnimation(e)) {
            t.paused = !1;
            var n = t.setAnimation(0, e, !1);
            if (n) {
              t.timeScale = 0;
              n.trackTime = o;
            }
          }
        };
        t.deepCopy = function (t) {
          var e,
            o,
            i = {};
          try {
            for (var r = n(Object.keys(t)), s = r.next(); !s.done; s = r.next()) {
              var a = s.value;
              "object" == typeof t[a] ? i[a] = this.deepCopy(t[a]) : i[a] = t[a];
            }
          } catch (c) {
            e = {
              error: c
            };
          } finally {
            try {
              if (s && !s.done && (o = r.return)) {
                o.call(r);
              }
            } finally {
              if (e) {
                throw e.error;
              }
            }
          }
          return i;
        };
        t.formatDate = function (t, e) {
          var o = new Date(t),
            n = {
              "M+": o.getMonth() + 1,
              "d+": o.getDate(),
              "h+": o.getHours(),
              "m+": o.getMinutes(),
              "s+": o.getSeconds(),
              "q+": Math.floor((o.getMonth() + 3) / 3),
              S: o.getMilliseconds()
            };
          for (var i in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (o.getFullYear() + "").substr(4 - RegExp.$1.length))), n) if (new RegExp("(" + i + ")").test(e)) {
            e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? n[i] : ("00" + n[i]).substr(("" + n[i]).length));
          }
          return e;
        };
        t.getFormatTime = function (t) {
          if (t > 0) {
            return (t = (new Date().getTime() - t) / 1e3) < 0 ? "\u521a\u521a" : t >= 0 && t < 60 ? Math.floor(t) + "\u79d2\u524d" : t < 3600 ? Math.floor(t / 60) + "\u5206\u949f\u524d" : t < 86400 ? Math.floor(t / 60 / 60) + "\u5c0f\u65f6\u524d" : t < 31536e3 ? Math.floor(t / 60 / 60 / 24) + "\u5929\u524d" : Math.floor(t / 60 / 60 / 24 / 365) + "\u5e74\u524d";
          }
        };
        t.overAddArr = function (t) {
          if (!t || t.length <= 0) {
            return [];
          }
          for (var e = [], o = 0; o < t.length; o++) 0 == o ? e[o] = t[o] : e[o] = e[o - 1] + t[o];
          return e;
        };
        t.getRandomIndex = function (t, e) {
          var o = 0;
          if (t <= e[0]) {
            return 0;
          }
          if (t >= e[e.length - 1]) {
            return e.length - 1;
          }
          for (var n = 0; n < e.length; n++) if (t <= e[n]) {
            o = n;
          } else {
            if (t > e[n] && t <= e[n + 1]) {
              o = n + 1;
              break;
            }
            if (t > e[n] && t <= e[n + 1]) {
              o = n + 1;
              break;
            }
          }
          return o;
        };
        t.getRandWeightIndex = function (t) {
          var e = (t = this.overAddArr(t))[t.length - 1],
            o = Math.random() * e;
          return this.getRandomIndex(o, t);
        };
        t.formatCNY = function (t, e) {
          var o,
            n = [{
              value: 1,
              symbol: ""
            }, {
              value: 1e3,
              symbol: "K"
            }, {
              value: 1e6,
              symbol: "M"
            }, {
              value: 1e9,
              symbol: "G"
            }, {
              value: 1e12,
              symbol: "T"
            }, {
              value: 1e15,
              symbol: "P"
            }, {
              value: 1e18,
              symbol: "E"
            }, {
              value: 1e21,
              symbol: "Z"
            }, {
              value: 1e24,
              symbol: "Y"
            }];
          for (o = n.length - 1; o > 0 && !(t >= n[o].value); o--);
          return (t / n[o].value).toFixed(e).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") + n[o].symbol;
        };
        t.initServerTime = function (t) {
          this._initServerTime = t;
          this._initLocalTime = Date.now();
        };
        t.getServerTime = function () {
          return this._initServerTime + (Date.now() - this._initLocalTime);
        };
        t.clone = function (t) {
          var e;
          if ("object" == typeof t) {
            if (null === t) {
              e = null;
            } else {
              if (t instanceof Array) {
                e = [];
                for (var o = 0, n = t.length; o < n; o++) e.push(this.clone(t[o]));
              } else {
                for (var i in e = {}, t) e[i] = this.clone(t[i]);
              }
            }
          } else {
            e = t;
          }
          return e;
        };
        t.getViewType = function (t) {
          for (var e = i.UIType.$Start + 1; e < i.UIType.$End; ++e) if (i.UIType[e] == t) {
            return e;
          }
        };
        t.createMatrix = function (t, e, o) {
          if (0 === o) {
            o = 0;
          }
          for (var n = new Array(), i = 0; i < t; ++i) {
            n[i] = new Array();
            for (var r = 0; r < e; ++r) n[i][r] = o;
          }
          return n;
        };
        t.map2Obj = function (t) {
          var e = Object.create(null);
          t.forEach(function (t, o) {
            e[o] = t;
          });
          return e;
        };
        t.obj2map = function (t) {
          var e,
            o,
            i = new Map();
          try {
            for (var r = n(Object.keys(t)), s = r.next(); !s.done; s = r.next()) {
              var a = s.value;
              i.set(a, t[a]);
            }
          } catch (c) {
            e = {
              error: c
            };
          } finally {
            try {
              if (s && !s.done && (o = r.return)) {
                o.call(r);
              }
            } finally {
              if (e) {
                throw e.error;
              }
            }
          }
          return i;
        };
        t.arab2char = function (t) {
          var e = ["\u96f6", "\u4e00", "\u4e8c", "\u4e09", "\u56db", "\u4e94", "\u516d", "\u4e03", "\u516b", "\u4e5d"],
            o = ["", "\u5341", "\u767e", "\u5343", "\u4e07"],
            n = function (t) {
              for (var n = t.toString().split("").reverse(), i = "", r = 0; r < n.length; r++) i = (0 == r && 0 == n[r] ? "" : r > 0 && 0 == n[r] && 0 == n[r - 1] ? "" : e[n[r]] + (0 == n[r] ? o[0] : o[r])) + i;
              return i;
            },
            i = Math.floor(t / 1e4),
            r = t % 1e4,
            s = "";
          r.toString().length < 4 && (s = "0" + r);
          return i ? n(i) + "\u4e07" + n(s) : n(t);
        };
        t.updatePolygonCollider = function (t, e) {
          var o = t.points,
            n = t.world.points;
          n.length = o.length;
          for (var i = cc.v2(), r = 1e6, s = 1e6, a = -1e6, c = -1e6, l = 0, u = o.length; l < u; l++) {
            n[l] || (n[l] = cc.v2());
            i.x = o[l].x + e.x;
            i.y = o[l].y + e.y;
            var p = i.x,
              f = i.y;
            n[l].x = p;
            n[l].y = f;
            p > a && (a = p);
            p < r && (r = p);
            f > c && (c = f);
            f < s && (s = f);
          }
        };
        t.loadSpriteFrame = function (t, e, o) {
          var n = this;
          cc.resources.load(t, cc.SpriteFrame, function (t, i) {
            if (n.isComponentLive(e)) {
              e.spriteFrame = i;
              o && o();
            }
          });
        };
        t.loadNetWork = function (t, e) {
          if (t) {
            cc.assetManager.loadRemote(t, {
              ext: ".png"
            }, function (o, n) {
              if (o) {
                console.error("loadRemote error: ", t);
              } else {
                var i = new cc.SpriteFrame(n);
                if (e) {
                  e(i);
                }
              }
            });
          }
        };
        t.judDay = function (t) {
          var e = new Date(Number(t)),
            o = new Date(new Date().getTime());
          return e.setHours(0, 0, 0, 0) == o.setHours(0, 0, 0, 0);
        };
        t.getFormatingTimeStr = function (t) {
          var e = Math.floor(t / 1e3 / 60),
            o = t - 6e4 * e,
            n = Math.floor(o / 1e3);
          return this.getFormatingNum(e, 2) + "\u5206" + this.getFormatingNum(n, 2) + "\u79d2";
        };
        t.getFormatingNum = function (t, e) {
          var o = t.toString(),
            n = o.length;
          if (n < e) {
            for (var i = n; i < e; i++) o = "0" + o;
          }
          return o;
        };
        t.playFlying = function (t, e, o, n) {
          var i = {
            x: t.x,
            y: t.y
          };
          try {
            cc.tween(i).to(1, {
              y: e.y
            }, {
              progress: function (e, o, n, r) {
                n = e + (o - e) * r;
                t.y = i.y;
                return n;
              },
              easing: "quadInOut"
            }).call(function () {
              t.y = i.y;
              n && n();
            }).start();
            cc.tween(i).to(1, {
              x: e.x
            }, {
              progress: function (e, o, n, r) {
                n = e + (o - e) * r + 100 * Math.sin(r * Math.PI) * -1;
                t.x = i.x;
                return n;
              }
            }).call(function () {
              t.x = i.x;
              n && n();
            }).start();
            cc.tween(t).to(1, {
              scale: .1
            }).start();
          } catch (r) {
            if (n) {
              n();
            }
          }
        };
        t._initServerTime = 0;
        t._initLocalTime = 0;
        return t;
      }();
    o.default = r;
    cc._RF.pop();
  }, {
    "../../Define/UIDefs": "UIDefs"
  }],
  VXPlatform: [function (t, e, o) {
    cc._RF.push(e, "ee146sIO9xNR45WHQhStezV", "VXPlatform");
    var n = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      i = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.MessageType = o.VXPlatform = 0;
    var r,
      s = t("../../Define/EventId"),
      a = t("../Event/EventMgr"),
      c = t("./MoxiHelper"),
      l = t("./MoxiModel"),
      u = t("./Platform"),
      p = function () {
        function t() {}
        t.wxLogin = function () {
          return n(this, 0, Promise, function () {
            return i(this, function () {
              return u.Platform.getPlatType() != u.PlatformType.WeiXin ? [2] : [2, new Promise(function (e) {
                wx.login({
                  success: function (o) {
                    o.code ? e(o.code) : t.wxToast("\u83b7\u53d6\u7528\u6237\u4fe1\u606f\u5931\u8d25~");
                  }
                });
              })];
            });
          });
        };
        t.initShare = function () {
          var t = this;
          window.WX_SHARE_INIT || (window.WX_SHARE_INIT = "WX_SHARE_INIT", wx.onShareAppMessage(function () {
            return {
              title: t.shareInfo.title,
              imageUrl: t.shareInfo.imgUrl,
              query: "inviterId=" + l.default.inst.getUserId()
            };
          }));
        };
        t.setSahreStr = function () {
          var e = 99 * Math.random() | 0,
            o = 99 * Math.random() | 0;
          t.SHARE_STR = "SHARE_STR" + e + o;
          return t.SHARE_STR;
        };
        t.share = function () {
          wx.shareAppMessage({
            title: this.shareInfo.title,
            imageUrl: this.shareInfo.imgUrl,
            query: "inviterId=" + l.default.inst.getUserId()
          });
        };
        t.wxToast = function (t, e) {
          0 === e && (e = r.toast);
          if (u.Platform.getPlatType() == u.PlatformType.WeiXin) {
            switch (e) {
              case r.toast:
                {
                  wx.showToast({
                    title: t,
                    duration: 2e3,
                    icon: "none"
                  });
                }
            }
          }
        };
        t.openCustomerServiceConversation = function () {
          wx.openCustomerServiceConversation();
        };
        t.copy = function (t) {
          if (u.Platform.getPlatType() == u.PlatformType.WeiXin) {
            return new Promise(function (e) {
              wx.setClipboardData({
                data: t,
                success: function () {
                  wx.getClipboardData({
                    success: function () {
                      e(!0);
                    }
                  });
                }
              });
            });
          }
        };
        t.onShow = function () {
          if (u.Platform.getPlatType() == u.PlatformType.WeiXin) {
            window.WX_SHOW_INIT || (window.WX_SHOW_INIT = "WX_SHOW_INIT", wx.onShow(function (e) {
              console.log(e, "onShowonShowonShow");
              t.setSahreStr();
              console.log("\u8fd4\u56de\u524d\u53f0 needCheckBuyInfo", t.needCheckBuyInfo);
              if (t.needCheckBuyInfo) {
                console.log("\u8c03\u7528\u8ba2\u5355\u67e5\u8be2");
                c.MoxiHelper.checkBuyInfo();
                return t.needCheckBuyInfo = !1;
              }
            }));
          }
        };
        t.onHide = function () {
          if (u.Platform.getPlatType() == u.PlatformType.WeiXin) {
            wx.onHide(function () {
              a.EVENT.emit(s.EventId.ON_HIDE);
            });
          }
        };
        t.navigateToMiniProgram = function (t) {
          if (u.Platform.getPlatType() == u.PlatformType.WeiXin) {
            wx.navigateToMiniProgram({
              appId: t.appid ? t.appid : "wx8a6bf4f18d1b5d0b",
              path: t.path ? t.path : "page/index/index",
              envVersion: "trial",
              success: function () {
                if (t.cb) {
                  t.cb();
                }
              }
            });
          }
        };
        t.getUserInfo = function () {
          wx.getUserInfo({
            success: function (t) {
              console.error(t, "success");
            },
            fail: function (e) {
              console.error(e, "fail");
              t.getAuthorize(function () {
                t.getUserInfo();
              });
            }
          });
        };
        t.getAuthorize = function (t) {
          wx.authorize({
            scope: "scope.userInfo",
            success: function () {
              if (t) {
                t();
              }
            },
            fail: function (t) {
              console.error(t, "authorizefail");
            }
          });
        };
        t.getEnterOptionsSync = function () {
          return wx.getEnterOptionsSync();
        };
        t.ON_HIDE_PATH = "";
        t.SHARE_STR = "SHARE_STR";
        t.isTask = !1;
        t.isReload = !1;
        t.shareInfo = {
          imgUrl: "",
          title: ""
        };
        t.needCheckBuyInfo = !1;
        return t;
      }();
    o.VXPlatform = p;
    (function (t) {
      t[t.toast = 1] = "toast";
    })(r = o.MessageType || (o.MessageType = {}));
    cc._RF.pop();
  }, {
    "../../Define/EventId": "EventId",
    "../Event/EventMgr": "EventMgr",
    "./MoxiHelper": "MoxiHelper",
    "./MoxiModel": "MoxiModel",
    "./Platform": "Platform"
  }],
  WatchAD: [function (t, e, o) {
    cc._RF.push(e, "7a00bGB4cJNoJsPjIFlWv4f", "WatchAD");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var s = t("../../../Common/Constant"),
      a = t("../../../Controller/LTrackerMgr"),
      c = t("../../../Controller/TableMgr"),
      l = t("../../../Framework/UIBase"),
      u = t("../../../System/GamingSystem"),
      p = t("../../../System/PlayerSystem"),
      f = cc._decorator,
      h = f.ccclass,
      d = f.property,
      _ = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.propSpr = null;
          e.lblName = null;
          e.lblDes = null;
          e.spriteFrames = [];
          e._propId = null;
          e._debounce = !1;
          return e;
        }
        i(e, t);
        e.prototype.start = function () {
          u.default.setPause(!0);
          this._propId = this._para;
          var t = c.TABLE.getItem(this._propId);
          this._propId == s.PROP_ID.Hint ? this.propSpr.spriteFrame = this.spriteFrames[0] : this.propSpr.spriteFrame = this.spriteFrames[1];
          this.lblName.string = t.sName;
          this.lblDes.string = t.sExplain;
          a.default.inst.expo("cx155963", {
            sitemname: t.sName
          });
        };
        e.prototype.onClickWatchBtn = function () {
          var t = this;
          if (!this._debounce) {
            this._debounce = !0;
            this.scheduleOnce(function () {
              t._debounce = !1;
            }, 1);
            if (!this._propId) {
              u.default.backGame();
              return this.close();
            }
            this.close();
            p.default.addItemByWatchAd(this._propId);
            var e = c.TABLE.getItem(this._propId);
            a.default.inst.click("cx155963.dx204539", {
              sitemname: e.sName
            });
          }
        };
        e.prototype.onClickCloseBtn = function () {
          a.default.inst.click("cx155963.dx204547", {});
          u.default.backGame();
          this.close();
        };
        r([d(cc.Sprite)], e.prototype, "propSpr", 0);
        r([d(cc.Label)], e.prototype, "lblName", 0);
        r([d(cc.Label)], e.prototype, "lblDes", 0);
        r([d([cc.SpriteFrame])], e.prototype, "spriteFrames", 0);
        return r([h], e);
      }(l.default);
    o.default = _;
    cc._RF.pop();
  }, {
    "../../../Common/Constant": "Constant",
    "../../../Controller/LTrackerMgr": "LTrackerMgr",
    "../../../Controller/TableMgr": "TableMgr",
    "../../../Framework/UIBase": "UIBase",
    "../../../System/GamingSystem": "GamingSystem",
    "../../../System/PlayerSystem": "PlayerSystem"
  }],
  WindVaneMgr: [function (t, e, o) {
    cc._RF.push(e, "39fd0FUj55NIoekuQH03gqd", "WindVaneMgr");
    var n = this && this.__awaiter || function (t, e, o, n) {
        return new (o || (o = Promise))(function (i, r) {
          function s(t) {
            try {
              c(n.next(t));
            } catch (e) {
              r(e);
            }
          }
          function a(t) {
            try {
              c(n.throw(t));
            } catch (e) {
              r(e);
            }
          }
          function c(t) {
            var e;
            t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function (t) {
              t(e);
            })).then(s, a);
          }
          c((n = n.apply(t, e || [])).next());
        });
      },
      i = this && this.__generator || function (t, e) {
        var o,
          n,
          i,
          r,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) {
                throw i[1];
              }
              return i[1];
            },
            trys: [],
            ops: []
          };
        r = {
          next: a(0),
          throw: a(1),
          return: a(2)
        };
        "function" == typeof Symbol && (r[Symbol.iterator] = function () {
          return this;
        });
        return r;
        function a(t) {
          return function (e) {
            return c([t, e]);
          };
        }
        function c(r) {
          if (o) {
            throw new TypeError("Generator is already executing.");
          }
          for (; s;) try {
            o = 1;
            if (n && (2 & r[0] ? i = n.return : r[0] ? i = n.throw || ((i = n.return) && i.call(n), 0) : i = n.next) && !(i = i.call(n, r[1])).done) {
              return i;
            }
            switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
              case 0:
                {}
              case 1:
                {
                  i = r;
                  break;
                }
              case 4:
                {
                  s.label++;
                  return {
                    value: r[1],
                    done: !1
                  };
                }
              case 5:
                {
                  s.label++;
                  n = r[1];
                  r = [0];
                  continue;
                }
              case 7:
                {
                  r = s.ops.pop();
                  s.trys.pop();
                  continue;
                }
              default:
                {
                  if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                    s = 0;
                    continue;
                  }
                  if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                    s.label = r[1];
                    break;
                  }
                  if (6 === r[0] && s.label < i[1]) {
                    s.label = i[1];
                    i = r;
                    break;
                  }
                  if (i && s.label < i[2]) {
                    s.label = i[2];
                    s.ops.push(r);
                    break;
                  }
                  i[2] && s.ops.pop();
                  s.trys.pop();
                  continue;
                }
            }
            r = e.call(t, s);
          } catch (a) {
            r = [6, a];
            n = 0;
          } finally {
            o = i = 0;
          }
          if (5 & r[0]) {
            throw r[1];
          }
          return {
            value: r[0] ? r[1] : 0,
            done: !0
          };
        }
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var r = function () {
      function t() {
        this._sdkWind = null;
        this._sdkBrid = null;
      }
      Object.defineProperty(t, "inst", {
        get: function () {
          this._inst || (this._inst = new t());
          return this._inst;
        },
        enumerable: !1,
        configurable: !0
      });
      t.prototype.init = function () {
        return n(this, 0, 0, function () {
          return i(this, function () {
            this._sdkWind = window.WindVane;
            this._sdkBrid = window.ebridge;
            return [2];
          });
        });
      };
      t.prototype.getUserID = function () {
        var t = this;
        if (this._sdkWind) {
          return new Promise(function (e) {
            t._sdkWind.call("EleWVHybridAPI", "getUserID", {}, function (t) {
              console.log("getUserID success", t);
              e(t.responseData);
            }, function (t) {
              console.error("getUserID failure", t);
              e("");
            });
          });
        }
        console.error("NO WindVane");
      };
      t.prototype.getLocation = function () {
        var t = this;
        if (this._sdkWind) {
          return new Promise(function (e) {
            t._sdkWind.call("WVLocation", "getLocation", {
              enableHighAcuracy: !0,
              address: !0
            }, function (t) {
              e([JSON.stringify({
                lng: t.coords.longitude,
                lat: t.coords.latitude
              })]);
            }, function (t) {
              console.error("getLocation failure:", t);
              e([]);
            });
          });
        }
        console.error("NO WindVane");
      };
      t.prototype.getDeviceIds = function () {
        var t = this;
        if (this._sdkWind) {
          return new Promise(function (e) {
            t._sdkWind.call("ELMWVDeviceId", "getDeviceIds", "", function (t) {
              console.log("getDeviceIds  success:", t);
              e({
                deviceId: t.deviceUUID,
                ttid: t.ttid
              });
            }, function (t) {
              console.error("getDeviceIds  failure:", t);
              e({});
            });
          });
        }
        console.error("NO WindVane");
      };
      t.prototype.getDevice = function () {
        var t = this;
        if (this._sdkWind) {
          return new Promise(function (e) {
            t._sdkWind.call("EleWVHybridAPI", "getDevice", "", function (t) {
              console.log("getDevice  success:", t);
              t = t.responseData;
              e({
                platform: t.model,
                prodVersion: t.os,
                product: "eleme"
              });
            }, function (t) {
              console.error("getDevice  failure:", t);
              e({});
            });
          });
        }
        console.error("NO WindVane");
      };
      t.prototype.getNotificationSettings = function () {
        var t = this;
        if (this._sdkWind) {
          return new Promise(function (e) {
            t._sdkWind.call("WVApplication", "getNotificationSettings", {}, function (t) {
              console.log("success: ", t);
              e(t);
            }, function (t) {
              console.error("failure: ", t);
              e(null);
            });
          });
        }
        console.error("NO WindVane");
      };
      t.prototype.openSettings = function () {
        var t = this;
        if (this._sdkWind) {
          return new Promise(function (e) {
            t._sdkWind.call("WVApplication", "openSettings", {}, function (t) {
              console.log("success: ", t);
              e(t);
            }, function (t) {
              console.error("failure: ", t);
              e();
            });
          });
        }
        console.error("NO WindVane");
      };
      t.prototype.openTaskBrowser = function (t, e) {
        var o = "&";
        -1 == t.indexOf("?") && (o = "?");
        t += o;
        var n = [];
        n.push("missioncollectid=" + e.missionCollectionId);
        n.push("missionid=" + e.missionDefId);
        n.push("taskfrom=" + (e.actionConfig.actionValue ? e.actionConfig.actionValue.pageSpm : ""));
        n.push("bizscene=FOOD_ELIMINATE");
        n.length > 0 && (t += n.join("&"));
        this.openBrowser(t);
      };
      t.prototype.openBrowser = function (t) {
        if (this._sdkBrid) {
          if (t) {
            console.error(t);
            var e = {
              url: t
            };
            this._sdkBrid.openWindow(e);
          } else {
            console.error("no url");
          }
        } else {
          console.error("NO ebridge");
        }
      };
      t.prototype.closeWindow = function () {
        this._sdkBrid ? this._sdkBrid.closeWindow() : console.error("NO ebridge");
      };
      t.prototype.getFullLocation = function () {
        var t = this;
        if (this._sdkWind) {
          return new Promise(function (e) {
            t._sdkWind.call("EWVLocation", "getFullLocation", {}, function (t) {
              console.log("success: ", {
                lng: t.longitude,
                lat: t.latitude,
                city: t.cityAdcode
              });
              e([JSON.stringify({
                lng: t.longitude,
                lat: t.latitude,
                city: t.cityAdcode
              })]);
            }, function (t) {
              console.error("failure: ", t);
              e([]);
            });
          });
        }
        console.error("NO WindVane");
      };
      return t;
    }();
    o.default = r;
    cc._RF.pop();
  }, {}],
  Wrapper: [function (t, e, o) {
    cc._RF.push(e, "1ffa6kcKxBJeIlJCGwN2ab1", "Wrapper");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    var n = function () {
        this.repeatCur = 0;
      },
      i = function () {
        function t() {}
        t.callFunc = function (t, e, o) {
          return cc.callFunc(function (o) {
            try {
              e ? t && t.call(e, o) : t && t(o);
            } catch (n) {
              console.error(n);
            }
          }, null, o);
        };
        t.scheduleFunction = function (t, e, o, i, r) {
          var s = this;
          if (t && t.isLive() && e) {
            var a = new n();
            a.target = t;
            a.name = t.getName();
            a.cb = e;
            a.repeat = i;
            a.tempCb = function (e) {
              try {
                a.cb && a.target.isLive() && a.cb.call(a.target, e);
                a.repeat !== cc.macro.REPEAT_FOREVER && (++a.repeatCur, a.repeatCur >= a.repeat && s.unscheduleFunction(a.cb));
              } catch (c) {
                var n = t.getError(c, "scheduleFunction");
                n.customInfo = "interval?: " + o + ", repeat?: " + i + ", delay?: " + r;
                console.error(n);
              }
            };
            t.schedule(a.tempCb, o, i, r);
            this._scheduleList.push(a);
          } else {
            console.error();
          }
        };
        t.unscheduleFunction = function (t) {
          for (var e = 0; e < this._scheduleList.length; e++) {
            var o = this._scheduleList[e];
            if (o.cb == t) {
              o.target.isLive() && o.target.unschedule(o.tempCb);
              return this._scheduleList.splice(e, 1);
            }
          }
        };
        t._scheduleList = [];
        return t;
      }();
    o.default = i;
    cc._RF.pop();
  }, {}],
  i18nLabel: [function (t, e, o) {
    cc._RF.push(e, "036d842BjxEIa9PYFUJdeZ+", "i18nLabel");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.i18nLabel = 0;
    var s = t("./i18nMgr"),
      a = cc._decorator,
      c = a.ccclass,
      l = a.property,
      u = a.executeInEditMode,
      p = a.disallowMultiple,
      f = a.requireComponent,
      h = a.menu,
      d = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.i18n_string = "";
          e.i18n_params = [];
          return e;
        }
        i(e, t);
        e.prototype.start = function () {
          s.i18nMgr.addOrDelLabel(this, !0);
          this._resetValue();
        };
        Object.defineProperty(e.prototype, "lanID", {
          get: function () {
            return this.i18n_string;
          },
          set: function (t) {
            this.i18n_string = t;
            this.setEndValue();
          },
          enumerable: !1,
          configurable: !0
        });
        Object.defineProperty(e.prototype, "params", {
          get: function () {
            return this.i18n_params;
          },
          set: function (t) {
            this.i18n_params = t;
            this.setEndValue();
          },
          enumerable: !1,
          configurable: !0
        });
        e.prototype.init = function (t, e) {
          this.i18n_string = t;
          this.i18n_params = e;
          this.setEndValue();
        };
        e.prototype.setEndValue = function () {
          var t = this.getComponent(cc.Label);
          if (cc.isValid(t)) {
            t.string = s.i18nMgr.getLan(this.i18n_string, this.i18n_params);
          }
        };
        e.prototype._resetValue = function () {
          this.lanID = this.i18n_string;
        };
        e.prototype.onDestroy = function () {
          s.i18nMgr.addOrDelLabel(this, !1);
        };
        r([l({
          visible: !1
        })], e.prototype, "i18n_string", 0);
        r([l({
          visible: !1
        })], e.prototype, "i18n_params", 0);
        r([l({
          type: cc.String
        })], e.prototype, "lanID", null);
        r([l({
          type: [cc.String]
        })], e.prototype, "params", null);
        return r([c, u, f(cc.Label), p, h("\u591a\u8bed\u8a00/i18nLabel")], e);
      }(cc.Component);
    o.i18nLabel = d;
    cc._RF.pop();
  }, {
    "./i18nMgr": "i18nMgr"
  }],
  i18nMgr: [function (t, e, o) {
    cc._RF.push(e, "1195b1f9m9Oq7CT+UZ9DGic", "i18nMgr");
    var n = this && this.__values || function (t) {
      var e = "function" == typeof Symbol && Symbol.iterator,
        o = e && t[e],
        n = 0;
      if (o) {
        return o.call(t);
      }
      if (t && "number" == typeof t.length) {
        return {
          next: function () {
            t && n >= t.length && (t = 0);
            return {
              value: t && t[n++],
              done: !t
            };
          }
        };
      }
      throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.i18nMgr = 0;
    var i = function () {
      function t() {}
      t.checkInit = function () {
        this.language || this.setLanguage("ZH");
      };
      t.setLanguage = function (t) {
        if (this.language !== t) {
          this.language = t;
          this.reloadLabel();
          this.reloadSprite();
        }
      };
      t.addOrDelLabel = function (t, e) {
        if (e) {
          this.labelArr.push(t);
        } else {
          var o = this.labelArr.indexOf(t);
          if (-1 !== o) {
            this.labelArr.splice(o, 1);
          }
        }
      };
      t.getLan = function (t, e) {
        this.checkInit();
        if (!e || e.length <= 0) {
          var o = this.labelData[t];
          if (o) {
            return o.sText;
          }
          cc.warn(t + " lan not found!");
        }
        var n = this.labelData[t] || t;
        n.sText && (n = n.sText);
        if (e) {
          for (var i = 0; i < e.length; i++) {
            var r = new RegExp("#" + i, "g");
            n = n.replace(r, e[i]);
          }
        }
        return n;
      };
      t.addOrDelSprite = function (t, e) {
        if (e) {
          this.spriteArr.push(t);
        } else {
          var o = this.spriteArr.indexOf(t);
          if (-1 !== o) {
            this.spriteArr.splice(o, 1);
          }
        }
      };
      t.reloadLabel = function () {
        var t = this,
          e = "Config/" + this.language;
        cc.resources.load(e, function (e, o) {
          var i, r;
          e ? (console.error(e), t.labelData = {}) : t.labelData = o.json;
          try {
            for (var s = n(t.labelArr), a = s.next(); !a.done; a = s.next()) a.value._resetValue();
          } catch (c) {
            i = {
              error: c
            };
          } finally {
            try {
              if (a && !a.done && (r = s.return)) {
                r.call(s);
              }
            } finally {
              if (i) {
                throw i.error;
              }
            }
          }
        });
      };
      t.reloadSprite = function () {
        var t, e;
        try {
          for (var o = n(this.spriteArr), i = o.next(); !i.done; i = o.next()) i.value._resetValue();
        } catch (r) {
          t = {
            error: r
          };
        } finally {
          try {
            if (i && !i.done && (e = o.return)) {
              e.call(o);
            }
          } finally {
            if (t) {
              throw t.error;
            }
          }
        }
      };
      t.language = "";
      t.labelArr = [];
      t.labelData = {};
      t.spriteArr = [];
      return t;
    }();
    o.i18nMgr = i;
    cc._RF.pop();
  }, {}],
  i18nSprite: [function (t, e, o) {
    cc._RF.push(e, "c7c24R00kxAda0J0T28JffC", "i18nSprite");
    var n,
      i = this && this.__extends || (n = function (t, e) {
        return (n = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (t, e) {
          t.__proto__ = e;
        } || function (t, e) {
          for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o)) {
            t[o] = e[o];
          }
        })(t, e);
      }, function (t, e) {
        function o() {
          this.constructor = t;
        }
        n(t, e);
        null === e ? t.prototype = Object.create(e) : t.prototype = (o.prototype = e.prototype, new o());
      }),
      r = this && this.__decorate || function (t, e, o, n) {
        var i,
          r = arguments.length,
          s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) {
          s = Reflect.decorate(t, e, o, n);
        } else {
          for (var a = t.length - 1; a >= 0; a--) if (i = t[a]) {
            s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s;
          }
        }
        r > 3 && s && Object.defineProperty(e, o, s);
        return s;
      };
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.i18nSprite = 0;
    var s = t("../Res/ResKeeper"),
      a = t("./i18nMgr"),
      c = cc._decorator,
      l = c.ccclass,
      u = c.property,
      p = c.executeInEditMode,
      f = c.disallowMultiple,
      h = c.requireComponent,
      d = c.menu,
      _ = function (t) {
        function e() {
          var e = null !== t && t.apply(this, arguments) || this;
          e.i18n_string = "";
          return e;
        }
        i(e, t);
        e.prototype.start = function () {
          a.i18nMgr.addOrDelSprite(this, !0);
          this._resetValue();
        };
        Object.defineProperty(e.prototype, "lanPic", {
          get: function () {
            return this.i18n_string;
          },
          set: function (t) {
            this.i18n_string = t;
            var e = this.getComponent(cc.Sprite);
            if (cc.isValid(e) && (a.i18nMgr.checkInit(), t)) {
              var o = "i18n/sprite/" + a.i18nMgr.language + "/" + t;
              this.loadRes(o, cc.SpriteFrame, function (t, n) {
                t ? cc.error("i18n load :" + o + " fail!") : cc.isValid(e) && (e.spriteFrame = n);
              });
            }
          },
          enumerable: !1,
          configurable: !0
        });
        e.prototype._resetValue = function () {
          this.lanPic = this.i18n_string;
        };
        e.prototype.onDestroy = function () {
          t.prototype.onDestroy.call(this);
          a.i18nMgr.addOrDelSprite(this, !1);
        };
        r([u({
          visible: !1
        })], e.prototype, "i18n_string", 0);
        r([u({
          type: cc.String
        })], e.prototype, "lanPic", null);
        return r([l, p, h(cc.Sprite), f, d("\u591a\u8bed\u8a00/i18nSprite")], e);
      }(s.default);
    o.i18nSprite = _;
    cc._RF.pop();
  }, {
    "../Res/ResKeeper": "ResKeeper",
    "./i18nMgr": "i18nMgr"
  }],
  interface: [function (t, e, o) {
    cc._RF.push(e, "83f85DoJyxFOoxuWgEH9OPK", "interface");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.SeEnumTaskeIsDisplay = o.SeEnumTaskeTaskType = o.SeEnumItemeItemType = o.SeEnumItemeType = 0;
    (function (t) {
      t[t.YouXiNaDaoJu = 1] = "YouXiNaDaoJu";
      t[t.YouXiWaiDaoJu = 2] = "YouXiWaiDaoJu";
    })(o.SeEnumItemeType || (o.SeEnumItemeType = {}));
    (function (t) {
      t[t.YouXiDaoJu = 1] = "YouXiDaoJu";
      t[t.PingTaiDaoJu = 2] = "PingTaiDaoJu";
    })(o.SeEnumItemeItemType || (o.SeEnumItemeItemType = {}));
    (function (t) {
      t[t.WanLiuDanChuangFenXiang = 1] = "WanLiuDanChuangFenXiang";
    })(o.SeEnumTaskeTaskType || (o.SeEnumTaskeTaskType = {}));
    (function (t) {
      t[t.XianShi = 1] = "XianShi";
      t[t.BuXianShi = 2] = "BuXianShi";
    })(o.SeEnumTaskeIsDisplay || (o.SeEnumTaskeIsDisplay = {}));
    cc._RF.pop();
  }, {}],
  wxConfig: [function (t, e, o) {
    cc._RF.push(e, "19d01HsvttL7rrT1fCCuNNw", "wxConfig");
    Object.defineProperty(o, "__esModule", {
      value: !0
    });
    o.WX_CONFIG = 0;
    o.WX_CONFIG = {
      AD_ID: {
        banner: "adunit-a0fc9fa65a444676",
        video: "adunit-1c33fc3f67356508",
        interstitial: "adunit-901f8025c608f3e6",
        grid: "adunit-004d566406f94f06",
        custom: "adunit-b6f287054c384104"
      }
    };
    cc._RF.pop();
  }, {}]
}, {}, ["Archive", "AudioConfig", "Constant", "Helper", "AfunRiskSDKController", "AntiAddictionController", "Crypto", "DoubleAwardController", "ExLogCtr", "ExitController", "LTrackerMgr", "MtopApi", "MtopMgr", "PlatMgr", "RankController", "Request", "ShareMgr", "TableMgr", "TaskController", "TurnTaskController", "WindVaneMgr", "Define", "EventId", "LocalKey", "SceneDef", "UIDefs", "ParticleActvator", "RTParticle", "RTSimulator", "RTTextureAnimation", "RTTextureParticleSystem", "UIEffect", "UIEffectMgr", "UIEffectType", "EventMgr", "EventObject", "HttpRequest", "MoxiHelper", "MoxiModel", "Platform", "VXPlatform", "RTCounter", "RTPerfCounter", "RTProfiler", "NodePool", "ResKeeper", "ResLeakChecker", "ResLoader", "ResUtil", "SceneBase", "SceneMgr", "LocalStorageMgr", "ComponetBase", "Handler", "HashMap", "ICallbackOwner", "ScheduleObject", "SysHook", "TeMap", "BaseInfo", "StateMachine", "ButtonClickLimiter", "CommonToast", "ConfirmView", "FlyTxt", "FlyTxtPool", "GuideAbility", "GuideEvent", "ListViewOptimizer", "MeshPolygonSprite", "PageViewOptimizer", "RoundRectMask", "ScrollViewOptimizer", "SingleTouch", "TabControl", "UICloseAnimation", "UIFacade", "UIMgr", "UIOpenAnimation", "UIBase", "LogUtil", "MD5", "ObjectUtils", "Singleton", "Utils", "Wrapper", "i18nLabel", "i18nMgr", "i18nSprite", "PlayerModel", "RankModel", "TaskModel", "Net", "NetApi", "NetBase", "PlatformDefault", "PlatformSystem", "PlatformWX", "wxConfig", "AlgorithmSystem", "ArchiveSystem", "AudioSystem", "ButtonAudio", "DropSystem", "GamingSystem", "PicSystem", "PlayerSystem", "RobotSystem", "interface", "Bootstrap", "Game", "Main", "AntiAddiction", "UnAdult", "CommonDialog", "ExitGame", "EffectLayerController", "FlyResMgr", "GameDrop", "GameFail", "GameGuide", "GamePause", "GameSettlement", "GameTips", "MapController", "Picitem", "ProgressController", "PropItemController", "WatchAD", "GetItemLayer", "Loading", "GetPower", "LifeShowController", "LifeSystem", "MorePower", "Rank", "RankItem", "ReviveUI", "Setting", "Unsubscribe", "Detain"]);