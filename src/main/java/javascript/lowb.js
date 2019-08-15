"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;if (!f && c) return c(i, !0);if (u) return u(i, !0);var a = new Error("Cannot find module '" + i + "'");throw a.code = "MODULE_NOT_FOUND", a;
        }var p = n[i] = { exports: {} };e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];return o(n || r);
        }, p, p.exports, r, e, n, t);
      }return n[i].exports;
    }for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
      o(t[i]);
    }return o;
  }return r;
})()({ 1: [function (require, module, exports) {
    var R = require('./ramda.min.js');

    var hello = function hello() {
      return print('Hello Nashorn!');
    };
    hello();

    var byAge = R.descend(R.prop('age'));
    var people = [{ name: 'Emma', age: 70 }, { name: 'Peter', age: 78 }, { name: 'Mikhail', age: 62 }];
    var peopleByOldestFirst = R.sort(byAge, people);
    //print(peopleByOldestFirst)
  }, { "./ramda.min.js": 2 }], 2: [function (require, module, exports) {
    !function (t, n) {
      "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? n(exports) : "function" == typeof define && define.amd ? define(["exports"], n) : n(t.R = {});
    }(this, function (t) {
      "use strict";
      function n(t) {
        return null != t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && !0 === t["@@functional/placeholder"];
      }function r(t) {
        return function r(e) {
          return 0 === arguments.length || n(e) ? r : t.apply(this, arguments);
        };
      }function e(t) {
        return function e(u, i) {
          switch (arguments.length) {case 0:
              return e;case 1:
              return n(u) ? e : r(function (n) {
                return t(u, n);
              });default:
              return n(u) && n(i) ? e : n(u) ? r(function (n) {
                return t(n, i);
              }) : n(i) ? r(function (n) {
                return t(u, n);
              }) : t(u, i);}
        };
      }var u = e(function (t, n) {
        return +t + +n;
      });function i(t, n) {
        var r,
            e = (t = t || []).length,
            u = (n = n || []).length,
            i = [];for (r = 0; e > r;) {
          i[i.length] = t[r], r += 1;
        }for (r = 0; u > r;) {
          i[i.length] = n[r], r += 1;
        }return i;
      }function o(t, n) {
        switch (t) {case 0:
            return function () {
              return n.apply(this, arguments);
            };case 1:
            return function (t) {
              return n.apply(this, arguments);
            };case 2:
            return function (t, r) {
              return n.apply(this, arguments);
            };case 3:
            return function (t, r, e) {
              return n.apply(this, arguments);
            };case 4:
            return function (t, r, e, u) {
              return n.apply(this, arguments);
            };case 5:
            return function (t, r, e, u, i) {
              return n.apply(this, arguments);
            };case 6:
            return function (t, r, e, u, i, o) {
              return n.apply(this, arguments);
            };case 7:
            return function (t, r, e, u, i, o, c) {
              return n.apply(this, arguments);
            };case 8:
            return function (t, r, e, u, i, o, c, a) {
              return n.apply(this, arguments);
            };case 9:
            return function (t, r, e, u, i, o, c, a, s) {
              return n.apply(this, arguments);
            };case 10:
            return function (t, r, e, u, i, o, c, a, s, f) {
              return n.apply(this, arguments);
            };default:
            throw Error("First argument to _arity must be a non-negative integer no greater than ten");}
      }function c(t, r, e) {
        return function () {
          for (var u = [], i = 0, a = t, s = 0; r.length > s || arguments.length > i;) {
            var f;s >= r.length || n(r[s]) && arguments.length > i ? (f = arguments[i], i += 1) : f = r[s], u[s] = f, n(f) || (a -= 1), s += 1;
          }return a > 0 ? o(a, c(t, u, e)) : e.apply(this, u);
        };
      }var a = e(function (t, n) {
        return 1 === t ? r(n) : o(t, c(t, [], n));
      }),
          s = r(function (t) {
        return a(t.length, function () {
          var n = 0,
              r = arguments[0],
              e = arguments[arguments.length - 1],
              u = Array.prototype.slice.call(arguments, 0);return u[0] = function () {
            var t = r.apply(this, i(arguments, [n, e]));return n += 1, t;
          }, t.apply(this, u);
        });
      });function f(t) {
        return function u(i, o, c) {
          switch (arguments.length) {case 0:
              return u;case 1:
              return n(i) ? u : e(function (n, r) {
                return t(i, n, r);
              });case 2:
              return n(i) && n(o) ? u : n(i) ? e(function (n, r) {
                return t(n, o, r);
              }) : n(o) ? e(function (n, r) {
                return t(i, n, r);
              }) : r(function (n) {
                return t(i, o, n);
              });default:
              return n(i) && n(o) && n(c) ? u : n(i) && n(o) ? e(function (n, r) {
                return t(n, r, c);
              }) : n(i) && n(c) ? e(function (n, r) {
                return t(n, o, r);
              }) : n(o) && n(c) ? e(function (n, r) {
                return t(i, n, r);
              }) : n(i) ? r(function (n) {
                return t(n, o, c);
              }) : n(o) ? r(function (n) {
                return t(i, n, c);
              }) : n(c) ? r(function (n) {
                return t(i, o, n);
              }) : t(i, o, c);}
        };
      }var l = f(function (t, n, r) {
        if (t >= r.length || -r.length > t) return r;var e = (0 > t ? r.length : 0) + t,
            u = i(r);return u[e] = n(r[e]), u;
      }),
          p = Array.isArray || function (t) {
        return null != t && t.length >= 0 && "[object Array]" === Object.prototype.toString.call(t);
      };function h(t) {
        return null != t && "function" == typeof t["@@transducer/step"];
      }function y(t, n, r) {
        return function () {
          if (0 === arguments.length) return r();var e = Array.prototype.slice.call(arguments, 0),
              u = e.pop();if (!p(u)) {
            for (var i = 0; t.length > i;) {
              if ("function" == typeof u[t[i]]) return u[t[i]].apply(u, e);i += 1;
            }if (h(u)) return n.apply(null, e)(u);
          }return r.apply(this, arguments);
        };
      }function d(t) {
        return t && t["@@transducer/reduced"] ? t : { "@@transducer/value": t, "@@transducer/reduced": !0 };
      }var g = { init: function init() {
          return this.xf["@@transducer/init"]();
        }, result: function result(t) {
          return this.xf["@@transducer/result"](t);
        } };function v(t, n) {
        this.xf = n, this.f = t, this.all = !0;
      }v.prototype["@@transducer/init"] = g.init, v.prototype["@@transducer/result"] = function (t) {
        return this.all && (t = this.xf["@@transducer/step"](t, !0)), this.xf["@@transducer/result"](t);
      }, v.prototype["@@transducer/step"] = function (t, n) {
        return this.f(n) || (this.all = !1, t = d(this.xf["@@transducer/step"](t, !1))), t;
      };var m = e(function (t, n) {
        return new v(t, n);
      }),
          b = e(y(["all"], m, function (t, n) {
        for (var r = 0; n.length > r;) {
          if (!t(n[r])) return !1;r += 1;
        }return !0;
      })),
          x = e(function (t, n) {
        return n > t ? n : t;
      });function w(t, n) {
        for (var r = 0, e = n.length, u = Array(e); e > r;) {
          u[r] = t(n[r]), r += 1;
        }return u;
      }function j(t) {
        return "[object String]" === Object.prototype.toString.call(t);
      }var A = r(function (t) {
        return !!p(t) || !!t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && !j(t) && (1 === t.nodeType ? !!t.length : 0 === t.length || t.length > 0 && t.hasOwnProperty(0) && t.hasOwnProperty(t.length - 1));
      });function O(t) {
        this.f = t;
      }function S(t) {
        return new O(t);
      }O.prototype["@@transducer/init"] = function () {
        throw Error("init not implemented on XWrap");
      }, O.prototype["@@transducer/result"] = function (t) {
        return t;
      }, O.prototype["@@transducer/step"] = function (t, n) {
        return this.f(t, n);
      };var E = e(function (t, n) {
        return o(t.length, function () {
          return t.apply(n, arguments);
        });
      });function _(t, n, r) {
        for (var e = r.next(); !e.done;) {
          if ((n = t["@@transducer/step"](n, e.value)) && n["@@transducer/reduced"]) {
            n = n["@@transducer/value"];break;
          }e = r.next();
        }return t["@@transducer/result"](n);
      }function q(t, n, r, e) {
        return t["@@transducer/result"](r[e](E(t["@@transducer/step"], t), n));
      }var k = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator";function N(t, n, r) {
        if ("function" == typeof t && (t = S(t)), A(r)) return function (t, n, r) {
          for (var e = 0, u = r.length; u > e;) {
            if ((n = t["@@transducer/step"](n, r[e])) && n["@@transducer/reduced"]) {
              n = n["@@transducer/value"];break;
            }e += 1;
          }return t["@@transducer/result"](n);
        }(t, n, r);if ("function" == typeof r["fantasy-land/reduce"]) return q(t, n, r, "fantasy-land/reduce");if (null != r[k]) return _(t, n, r[k]());if ("function" == typeof r.next) return _(t, n, r);if ("function" == typeof r.reduce) return q(t, n, r, "reduce");throw new TypeError("reduce: list must be array or iterable");
      }function W(t, n) {
        this.xf = n, this.f = t;
      }W.prototype["@@transducer/init"] = g.init, W.prototype["@@transducer/result"] = g.result, W.prototype["@@transducer/step"] = function (t, n) {
        return this.xf["@@transducer/step"](t, this.f(n));
      };var I = e(function (t, n) {
        return new W(t, n);
      });function P(t, n) {
        return Object.prototype.hasOwnProperty.call(n, t);
      }var T = Object.prototype.toString,
          C = function () {
        return "[object Arguments]" === T.call(arguments) ? function (t) {
          return "[object Arguments]" === T.call(t);
        } : function (t) {
          return P("callee", t);
        };
      }(),
          B = !{ toString: null }.propertyIsEnumerable("toString"),
          F = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
          R = function () {
        return arguments.propertyIsEnumerable("length");
      }(),
          U = function U(t, n) {
        for (var r = 0; t.length > r;) {
          if (t[r] === n) return !0;r += 1;
        }return !1;
      },
          D = r("function" != typeof Object.keys || R ? function (t) {
        if (Object(t) !== t) return [];var n,
            r,
            e = [],
            u = R && C(t);for (n in t) {
          !P(n, t) || u && "length" === n || (e[e.length] = n);
        }if (B) for (r = F.length - 1; r >= 0;) {
          P(n = F[r], t) && !U(e, n) && (e[e.length] = n), r -= 1;
        }return e;
      } : function (t) {
        return Object(t) !== t ? [] : Object.keys(t);
      }),
          z = e(y(["fantasy-land/map", "map"], I, function (t, n) {
        switch (Object.prototype.toString.call(n)) {case "[object Function]":
            return a(n.length, function () {
              return t.call(this, n.apply(this, arguments));
            });case "[object Object]":
            return N(function (r, e) {
              return r[e] = t(n[e]), r;
            }, {}, D(n));default:
            return w(t, n);}
      })),
          M = e(function (t, n) {
        for (var r = n, e = 0; t.length > e;) {
          if (null == r) return;r = r[t[e]], e += 1;
        }return r;
      }),
          L = e(function (t, n) {
        return M([t], n);
      }),
          K = e(function (t, n) {
        return z(L(t), n);
      }),
          V = f(N),
          $ = r(function (t) {
        return a(V(x, 0, K("length", t)), function () {
          for (var n = 0, r = t.length; r > n;) {
            if (!t[n].apply(this, arguments)) return !1;n += 1;
          }return !0;
        });
      }),
          H = r(function (t) {
        return function () {
          return t;
        };
      }),
          J = e(function (t, n) {
        return t && n;
      });function X(t, n) {
        this.xf = n, this.f = t, this.any = !1;
      }X.prototype["@@transducer/init"] = g.init, X.prototype["@@transducer/result"] = function (t) {
        return this.any || (t = this.xf["@@transducer/step"](t, !1)), this.xf["@@transducer/result"](t);
      }, X.prototype["@@transducer/step"] = function (t, n) {
        return this.f(n) && (this.any = !0, t = d(this.xf["@@transducer/step"](t, !0))), t;
      };var Y = e(function (t, n) {
        return new X(t, n);
      }),
          Z = e(y(["any"], Y, function (t, n) {
        for (var r = 0; n.length > r;) {
          if (t(n[r])) return !0;r += 1;
        }return !1;
      })),
          G = r(function (t) {
        return a(V(x, 0, K("length", t)), function () {
          for (var n = 0, r = t.length; r > n;) {
            if (t[n].apply(this, arguments)) return !0;n += 1;
          }return !1;
        });
      }),
          Q = e(function (t, n) {
        return "function" == typeof n["fantasy-land/ap"] ? n["fantasy-land/ap"](t) : "function" == typeof t.ap ? t.ap(n) : "function" == typeof t ? function (r) {
          return t(r)(n(r));
        } : N(function (t, r) {
          return i(t, z(r, n));
        }, [], t);
      });function tt(t, n) {
        this.xf = n, this.pos = 0, this.full = !1, this.acc = Array(t);
      }tt.prototype["@@transducer/init"] = g.init, tt.prototype["@@transducer/result"] = function (t) {
        return this.acc = null, this.xf["@@transducer/result"](t);
      }, tt.prototype["@@transducer/step"] = function (t, n) {
        return this.store(n), this.full ? this.xf["@@transducer/step"](t, this.getCopy()) : t;
      }, tt.prototype.store = function (t) {
        this.acc[this.pos] = t, this.pos += 1, this.pos === this.acc.length && (this.pos = 0, this.full = !0);
      }, tt.prototype.getCopy = function () {
        return i(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos));
      };var nt = e(function (t, n) {
        return new tt(t, n);
      }),
          rt = e(y([], nt, function (t, n) {
        for (var r = 0, e = n.length - (t - 1), u = Array(0 > e ? 0 : e); e > r;) {
          u[r] = Array.prototype.slice.call(n, r, r + t), r += 1;
        }return u;
      })),
          et = e(function (t, n) {
        return i(n, [t]);
      }),
          ut = e(function (t, n) {
        return t.apply(this, n);
      }),
          it = r(function (t) {
        for (var n = D(t), r = n.length, e = [], u = 0; r > u;) {
          e[u] = t[n[u]], u += 1;
        }return e;
      });function ot(t, n) {
        return D(n).reduce(function (r, e) {
          return r[e] = t(n[e]), r;
        }, {});
      }var ct = r(function t(n) {
        return n = ot(function (n) {
          return "function" == typeof n ? n : t(n);
        }, n), a(V(x, 0, K("length", it(n))), function () {
          var t = arguments;return ot(function (n) {
            return ut(n, t);
          }, n);
        });
      }),
          at = e(function (t, n) {
        return n(t);
      }),
          st = f(function (t, n, r) {
        var e = t(n),
            u = t(r);return u > e ? -1 : e > u ? 1 : 0;
      }),
          ft = f(function (t, n, r) {
        var e = {};for (var u in r) {
          e[u] = r[u];
        }return e[t] = n, e;
      }),
          lt = Number.isInteger || function (t) {
        return t << 0 === t;
      },
          pt = r(function (t) {
        return null == t;
      }),
          ht = f(function t(n, r, e) {
        if (0 === n.length) return r;var u = n[0];if (n.length > 1) {
          var i = !pt(e) && P(u, e) ? e[u] : lt(n[1]) ? [] : {};r = t(Array.prototype.slice.call(n, 1), r, i);
        }if (lt(u) && p(e)) {
          var o = [].concat(e);return o[u] = r, o;
        }return ft(u, r, e);
      }),
          yt = e(function (t, n) {
        switch (t) {case 0:
            return function () {
              return n.call(this);
            };case 1:
            return function (t) {
              return n.call(this, t);
            };case 2:
            return function (t, r) {
              return n.call(this, t, r);
            };case 3:
            return function (t, r, e) {
              return n.call(this, t, r, e);
            };case 4:
            return function (t, r, e, u) {
              return n.call(this, t, r, e, u);
            };case 5:
            return function (t, r, e, u, i) {
              return n.call(this, t, r, e, u, i);
            };case 6:
            return function (t, r, e, u, i, o) {
              return n.call(this, t, r, e, u, i, o);
            };case 7:
            return function (t, r, e, u, i, o, c) {
              return n.call(this, t, r, e, u, i, o, c);
            };case 8:
            return function (t, r, e, u, i, o, c, a) {
              return n.call(this, t, r, e, u, i, o, c, a);
            };case 9:
            return function (t, r, e, u, i, o, c, a, s) {
              return n.call(this, t, r, e, u, i, o, c, a, s);
            };case 10:
            return function (t, r, e, u, i, o, c, a, s, f) {
              return n.call(this, t, r, e, u, i, o, c, a, s, f);
            };default:
            throw Error("First argument to nAry must be a non-negative integer no greater than ten");}
      }),
          dt = r(function (t) {
        return yt(2, t);
      });function gt(t) {
        return "[object Function]" === Object.prototype.toString.call(t);
      }var vt = e(function (t, n) {
        var r = a(t, n);return a(t, function () {
          return N(Q, z(r, arguments[0]), Array.prototype.slice.call(arguments, 1));
        });
      }),
          mt = r(function (t) {
        return vt(t.length, t);
      }),
          bt = e(function (t, n) {
        return gt(t) ? function () {
          return t.apply(this, arguments) && n.apply(this, arguments);
        } : mt(J)(t, n);
      }),
          xt = r(function (t) {
        return a(t.length, t);
      }),
          wt = xt(function (t) {
        return t.apply(this, Array.prototype.slice.call(arguments, 1));
      });function jt(t) {
        return function n(r) {
          for (var e, u, i, o = [], c = 0, a = r.length; a > c;) {
            if (A(r[c])) for (i = 0, u = (e = t ? n(r[c]) : r[c]).length; u > i;) {
              o[o.length] = e[i], i += 1;
            } else o[o.length] = r[c];c += 1;
          }return o;
        };
      }var At = function At(t) {
        var n = function (t) {
          return { "@@transducer/init": g.init, "@@transducer/result": function transducerResult(n) {
              return t["@@transducer/result"](n);
            }, "@@transducer/step": function transducerStep(n, r) {
              var e = t["@@transducer/step"](n, r);return e["@@transducer/reduced"] ? { "@@transducer/value": e, "@@transducer/reduced": !0 } : e;
            } };
        }(t);return { "@@transducer/init": g.init, "@@transducer/result": function transducerResult(t) {
            return n["@@transducer/result"](t);
          }, "@@transducer/step": function transducerStep(t, r) {
            return A(r) ? N(n, t, r) : N(n, t, [r]);
          } };
      },
          Ot = e(function (t, n) {
        return z(t, At(n));
      }),
          St = e(y(["fantasy-land/chain", "chain"], Ot, function (t, n) {
        return "function" == typeof n ? function (r) {
          return t(n(r))(r);
        } : jt(!1)(z(t, n));
      })),
          Et = f(function (t, n, r) {
        if (t > n) throw Error("min must not be greater than max in clamp(min, max, value)");return t > r ? t : r > n ? n : r;
      });function _t(t) {
        return RegExp(t.source, (t.global ? "g" : "") + (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.sticky ? "y" : "") + (t.unicode ? "u" : ""));
      }var qt = r(function (t) {
        return null === t ? "Null" : void 0 === t ? "Undefined" : Object.prototype.toString.call(t).slice(8, -1);
      });function kt(t, n, r, e) {
        var u = function u(_u2) {
          for (var i = n.length, o = 0; i > o;) {
            if (t === n[o]) return r[o];o += 1;
          }for (var c in n[o + 1] = t, r[o + 1] = _u2, t) {
            _u2[c] = e ? kt(t[c], n, r, !0) : t[c];
          }return _u2;
        };switch (qt(t)) {case "Object":
            return u({});case "Array":
            return u([]);case "Date":
            return new Date(t.valueOf());case "RegExp":
            return _t(t);default:
            return t;}
      }var Nt = r(function (t) {
        return null != t && "function" == typeof t.clone ? t.clone() : kt(t, [], [], !0);
      }),
          Wt = r(function (t) {
        return function (n, r) {
          return t(n, r) ? -1 : t(r, n) ? 1 : 0;
        };
      }),
          It = r(function (t) {
        return !t;
      }),
          Pt = mt(It);function Tt(t, n) {
        return function () {
          return n.call(this, t.apply(this, arguments));
        };
      }function Ct(t, n) {
        return function () {
          var r = arguments.length;if (0 === r) return n();var e = arguments[r - 1];return p(e) || "function" != typeof e[t] ? n.apply(this, arguments) : e[t].apply(e, Array.prototype.slice.call(arguments, 0, r - 1));
        };
      }var Bt = f(Ct("slice", function (t, n, r) {
        return Array.prototype.slice.call(r, t, n);
      })),
          Ft = r(Ct("tail", Bt(1, 1 / 0)));function Rt() {
        if (0 === arguments.length) throw Error("pipe requires at least one argument");return o(arguments[0].length, V(Tt, arguments[0], Ft(arguments)));
      }var Ut = r(function (t) {
        return j(t) ? t.split("").reverse().join("") : Array.prototype.slice.call(t, 0).reverse();
      });function Dt() {
        if (0 === arguments.length) throw Error("compose requires at least one argument");return Rt.apply(this, Ut(arguments));
      }function zt() {
        if (0 === arguments.length) throw Error("composeK requires at least one argument");var t = Array.prototype.slice.call(arguments),
            n = t.pop();return Dt(Dt.apply(this, z(St, t)), n);
      }function Mt(t, n) {
        return function () {
          var r = this;return t.apply(r, arguments).then(function (t) {
            return n.call(r, t);
          });
        };
      }function Lt() {
        if (0 === arguments.length) throw Error("pipeP requires at least one argument");return o(arguments[0].length, V(Mt, arguments[0], Ft(arguments)));
      }var Kt = e(function (t, n) {
        var r = 0 > t ? n.length + t : t;return j(n) ? n.charAt(r) : n[r];
      }),
          Vt = Kt(0);function $t(t) {
        return t;
      }var Ht = r($t),
          Jt = e(function (t, n) {
        if (0 >= n.length) return Ht;var r = Vt(n),
            e = Ft(n);return o(r.length, function () {
          return N(function (n, r) {
            return t.call(this, r, n);
          }, r.apply(this, arguments), e);
        });
      }),
          Xt = e(function (t, n) {
        return Jt.call(this, t, Ut(n));
      });function Yt(t) {
        for (var n, r = []; !(n = t.next()).done;) {
          r.push(n.value);
        }return r;
      }function Zt(t, n, r) {
        for (var e = 0, u = r.length; u > e;) {
          if (t(n, r[e])) return !0;e += 1;
        }return !1;
      }var Gt = "function" == typeof Object.is ? Object.is : function (t, n) {
        return t === n ? 0 !== t || 1 / t == 1 / n : t != t && n != n;
      };function Qt(t, n, r, e) {
        var u = Yt(t);function i(t, n) {
          return tn(t, n, r.slice(), e.slice());
        }return !Zt(function (t, n) {
          return !Zt(i, n, t);
        }, Yt(n), u);
      }function tn(t, n, r, e) {
        if (Gt(t, n)) return !0;var u,
            i = qt(t);if (i !== qt(n)) return !1;if (null == t || null == n) return !1;if ("function" == typeof t["fantasy-land/equals"] || "function" == typeof n["fantasy-land/equals"]) return "function" == typeof t["fantasy-land/equals"] && t["fantasy-land/equals"](n) && "function" == typeof n["fantasy-land/equals"] && n["fantasy-land/equals"](t);if ("function" == typeof t.equals || "function" == typeof n.equals) return "function" == typeof t.equals && t.equals(n) && "function" == typeof n.equals && n.equals(t);switch (i) {case "Arguments":case "Array":case "Object":
            if ("function" == typeof t.constructor && "Promise" === (null == (u = (t.constructor + "").match(/^function (\w*)/)) ? "" : u[1])) return t === n;break;case "Boolean":case "Number":case "String":
            if ((typeof t === "undefined" ? "undefined" : _typeof(t)) != (typeof n === "undefined" ? "undefined" : _typeof(n)) || !Gt(t.valueOf(), n.valueOf())) return !1;break;case "Date":
            if (!Gt(t.valueOf(), n.valueOf())) return !1;break;case "Error":
            return t.name === n.name && t.message === n.message;case "RegExp":
            if (t.source !== n.source || t.global !== n.global || t.ignoreCase !== n.ignoreCase || t.multiline !== n.multiline || t.sticky !== n.sticky || t.unicode !== n.unicode) return !1;}for (var o = r.length - 1; o >= 0;) {
          if (r[o] === t) return e[o] === n;o -= 1;
        }switch (i) {case "Map":
            return t.size === n.size && Qt(t.entries(), n.entries(), r.concat([t]), e.concat([n]));case "Set":
            return t.size === n.size && Qt(t.values(), n.values(), r.concat([t]), e.concat([n]));case "Arguments":case "Array":case "Object":case "Boolean":case "Number":case "String":case "Date":case "Error":case "RegExp":case "Int8Array":case "Uint8Array":case "Uint8ClampedArray":case "Int16Array":case "Uint16Array":case "Int32Array":case "Uint32Array":case "Float32Array":case "Float64Array":case "ArrayBuffer":
            break;default:
            return !1;}var c = D(t);if (c.length !== D(n).length) return !1;var a = r.concat([t]),
            s = e.concat([n]);for (o = c.length - 1; o >= 0;) {
          var f = c[o];if (!P(f, n) || !tn(n[f], t[f], a, s)) return !1;o -= 1;
        }return !0;
      }var nn = e(function (t, n) {
        return tn(t, n, [], []);
      });function rn(t, n, r) {
        var e, u;if ("function" == typeof t.indexOf) switch (typeof n === "undefined" ? "undefined" : _typeof(n)) {case "number":
            if (0 === n) {
              for (e = 1 / n; t.length > r;) {
                if (0 === (u = t[r]) && 1 / u === e) return r;r += 1;
              }return -1;
            }if (n != n) {
              for (; t.length > r;) {
                if ("number" == typeof (u = t[r]) && u != u) return r;r += 1;
              }return -1;
            }return t.indexOf(n, r);case "string":case "boolean":case "function":case "undefined":
            return t.indexOf(n, r);case "object":
            if (null === n) return t.indexOf(n, r);}for (; t.length > r;) {
          if (nn(t[r], n)) return r;r += 1;
        }return -1;
      }function en(t, n) {
        return rn(n, t, 0) >= 0;
      }function un(t) {
        return '"' + t.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0").replace(/"/g, '\\"') + '"';
      }var on = function on(t) {
        return (10 > t ? "0" : "") + t;
      },
          cn = "function" == typeof Date.prototype.toISOString ? function (t) {
        return t.toISOString();
      } : function (t) {
        return t.getUTCFullYear() + "-" + on(t.getUTCMonth() + 1) + "-" + on(t.getUTCDate()) + "T" + on(t.getUTCHours()) + ":" + on(t.getUTCMinutes()) + ":" + on(t.getUTCSeconds()) + "." + (t.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
      };function an(t) {
        return function () {
          return !t.apply(this, arguments);
        };
      }function sn(t, n) {
        for (var r = 0, e = n.length, u = []; e > r;) {
          t(n[r]) && (u[u.length] = n[r]), r += 1;
        }return u;
      }function fn(t) {
        return "[object Object]" === Object.prototype.toString.call(t);
      }function ln(t, n) {
        this.xf = n, this.f = t;
      }ln.prototype["@@transducer/init"] = g.init, ln.prototype["@@transducer/result"] = g.result, ln.prototype["@@transducer/step"] = function (t, n) {
        return this.f(n) ? this.xf["@@transducer/step"](t, n) : t;
      };var pn = e(function (t, n) {
        return new ln(t, n);
      }),
          hn = e(y(["filter"], pn, function (t, n) {
        return fn(n) ? N(function (r, e) {
          return t(n[e]) && (r[e] = n[e]), r;
        }, {}, D(n)) : sn(t, n);
      })),
          yn = e(function (t, n) {
        return hn(an(t), n);
      });function dn(t, n) {
        var r = function r(_r2) {
          var e = n.concat([t]);return en(_r2, e) ? "<Circular>" : dn(_r2, e);
        },
            e = function e(t, n) {
          return w(function (n) {
            return un(n) + ": " + r(t[n]);
          }, n.slice().sort());
        };switch (Object.prototype.toString.call(t)) {case "[object Arguments]":
            return "(function() { return arguments; }(" + w(r, t).join(", ") + "))";case "[object Array]":
            return "[" + w(r, t).concat(e(t, yn(function (t) {
              return (/^\d+$/.test(t)
              );
            }, D(t)))).join(", ") + "]";case "[object Boolean]":
            return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? "new Boolean(" + r(t.valueOf()) + ")" : "" + t;case "[object Date]":
            return "new Date(" + (isNaN(t.valueOf()) ? r(NaN) : un(cn(t))) + ")";case "[object Null]":
            return "null";case "[object Number]":
            return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? "new Number(" + r(t.valueOf()) + ")" : 1 / t == -1 / 0 ? "-0" : t.toString(10);case "[object String]":
            return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? "new String(" + r(t.valueOf()) + ")" : un(t);case "[object Undefined]":
            return "undefined";default:
            if ("function" == typeof t.toString) {
              var u = "" + t;if ("[object Object]" !== u) return u;
            }return "{" + e(t, D(t)).join(", ") + "}";}
      }var gn = r(function (t) {
        return dn(t, []);
      }),
          vn = e(function (t, n) {
        if (p(t)) {
          if (p(n)) return t.concat(n);throw new TypeError(gn(n) + " is not an array");
        }if (j(t)) {
          if (j(n)) return t + n;throw new TypeError(gn(n) + " is not a string");
        }if (null != t && gt(t["fantasy-land/concat"])) return t["fantasy-land/concat"](n);if (null != t && gt(t.concat)) return t.concat(n);throw new TypeError(gn(t) + ' does not have a method named "concat" or "fantasy-land/concat"');
      }),
          mn = r(function (t) {
        return o(V(x, 0, z(function (t) {
          return t[0].length;
        }, t)), function () {
          for (var n = 0; t.length > n;) {
            if (t[n][0].apply(this, arguments)) return t[n][1].apply(this, arguments);n += 1;
          }
        });
      }),
          bn = e(function (t, n) {
        if (t > 10) throw Error("Constructor with greater than ten arguments");return 0 === t ? function () {
          return new n();
        } : xt(yt(t, function (t, r, e, u, i, o, c, a, s, f) {
          switch (arguments.length) {case 1:
              return new n(t);case 2:
              return new n(t, r);case 3:
              return new n(t, r, e);case 4:
              return new n(t, r, e, u);case 5:
              return new n(t, r, e, u, i);case 6:
              return new n(t, r, e, u, i, o);case 7:
              return new n(t, r, e, u, i, o, c);case 8:
              return new n(t, r, e, u, i, o, c, a);case 9:
              return new n(t, r, e, u, i, o, c, a, s);case 10:
              return new n(t, r, e, u, i, o, c, a, s, f);}
        }));
      }),
          xn = r(function (t) {
        return bn(t.length, t);
      }),
          wn = e(en),
          jn = e(function (t, n) {
        return a(V(x, 0, K("length", n)), function () {
          var r = arguments,
              e = this;return t.apply(e, w(function (t) {
            return t.apply(e, r);
          }, n));
        });
      });function An(t, n, r, e) {
        this.valueFn = t, this.valueAcc = n, this.keyFn = r, this.xf = e, this.inputs = {};
      }An.prototype["@@transducer/init"] = g.init, An.prototype["@@transducer/result"] = function (t) {
        var n;for (n in this.inputs) {
          if (P(n, this.inputs) && (t = this.xf["@@transducer/step"](t, this.inputs[n]))["@@transducer/reduced"]) {
            t = t["@@transducer/value"];break;
          }
        }return this.inputs = null, this.xf["@@transducer/result"](t);
      }, An.prototype["@@transducer/step"] = function (t, n) {
        var r = this.keyFn(n);return this.inputs[r] = this.inputs[r] || [r, this.valueAcc], this.inputs[r][1] = this.valueFn(this.inputs[r][1], n), t;
      };var On = c(4, [], function (t, n, r, e) {
        return new An(t, n, r, e);
      }),
          Sn = c(4, [], y([], On, function (t, n, r, e) {
        return N(function (e, u) {
          var i = r(u);return e[i] = t(P(i, e) ? e[i] : n, u), e;
        }, {}, e);
      })),
          En = Sn(function (t, n) {
        return t + 1;
      }, 0),
          _n = u(-1),
          qn = e(function (t, n) {
        return null == n || n != n ? t : n;
      }),
          kn = f(function (t, n, r) {
        var e = t(n),
            u = t(r);return e > u ? -1 : u > e ? 1 : 0;
      });function Nn() {
        this._nativeSet = "function" == typeof Set ? new Set() : null, this._items = {};
      }function Wn(t, n, r) {
        var e,
            u = typeof t === "undefined" ? "undefined" : _typeof(t);switch (u) {case "string":case "number":
            return 0 === t && 1 / t == -1 / 0 ? !!r._items["-0"] || (n && (r._items["-0"] = !0), !1) : null !== r._nativeSet ? n ? (e = r._nativeSet.size, r._nativeSet.add(t), r._nativeSet.size === e) : r._nativeSet.has(t) : u in r._items ? t in r._items[u] || (n && (r._items[u][t] = !0), !1) : (n && (r._items[u] = {}, r._items[u][t] = !0), !1);case "boolean":
            if (u in r._items) {
              var i = t ? 1 : 0;return !!r._items[u][i] || (n && (r._items[u][i] = !0), !1);
            }return n && (r._items[u] = t ? [!1, !0] : [!0, !1]), !1;case "function":
            return null !== r._nativeSet ? n ? (e = r._nativeSet.size, r._nativeSet.add(t), r._nativeSet.size === e) : r._nativeSet.has(t) : u in r._items ? !!en(t, r._items[u]) || (n && r._items[u].push(t), !1) : (n && (r._items[u] = [t]), !1);case "undefined":
            return !!r._items[u] || (n && (r._items[u] = !0), !1);case "object":
            if (null === t) return !!r._items.null || (n && (r._items.null = !0), !1);default:
            return (u = Object.prototype.toString.call(t)) in r._items ? !!en(t, r._items[u]) || (n && r._items[u].push(t), !1) : (n && (r._items[u] = [t]), !1);}
      }Nn.prototype.add = function (t) {
        return !Wn(t, !0, this);
      }, Nn.prototype.has = function (t) {
        return Wn(t, !1, this);
      };var In = e(function (t, n) {
        for (var r = [], e = 0, u = t.length, i = n.length, o = new Nn(), c = 0; i > c; c += 1) {
          o.add(n[c]);
        }for (; u > e;) {
          o.add(t[e]) && (r[r.length] = t[e]), e += 1;
        }return r;
      }),
          Pn = f(function (t, n, r) {
        for (var e = [], u = 0, i = n.length; i > u;) {
          Zt(t, n[u], r) || Zt(t, n[u], e) || e.push(n[u]), u += 1;
        }return e;
      }),
          Tn = e(function (t, n) {
        var r = {};for (var e in n) {
          r[e] = n[e];
        }return delete r[t], r;
      }),
          Cn = f(function (t, n, r) {
        var e = Array.prototype.slice.call(r, 0);return e.splice(t, n), e;
      }),
          Bn = f(function (t, n, r) {
        return l(t, H(n), r);
      }),
          Fn = e(function t(n, r) {
        switch (n.length) {case 0:
            return r;case 1:
            return lt(n[0]) && p(r) ? Cn(n[0], 1, r) : Tn(n[0], r);default:
            var e = n[0],
                u = Array.prototype.slice.call(n, 1);return null == r[e] ? r : lt(e) && p(r) ? Bn(e, t(u, r[e]), r) : ft(e, t(u, r[e]), r);}
      }),
          Rn = e(function (t, n) {
        return t / n;
      });function Un(t, n) {
        this.xf = n, this.n = t;
      }Un.prototype["@@transducer/init"] = g.init, Un.prototype["@@transducer/result"] = g.result, Un.prototype["@@transducer/step"] = function (t, n) {
        return this.n > 0 ? (this.n -= 1, t) : this.xf["@@transducer/step"](t, n);
      };var Dn = e(function (t, n) {
        return new Un(t, n);
      }),
          zn = e(y(["drop"], Dn, function (t, n) {
        return Bt(Math.max(0, t), 1 / 0, n);
      }));function Mn(t, n) {
        this.xf = n, this.n = t, this.i = 0;
      }Mn.prototype["@@transducer/init"] = g.init, Mn.prototype["@@transducer/result"] = g.result, Mn.prototype["@@transducer/step"] = function (t, n) {
        this.i += 1;var r = 0 === this.n ? t : this.xf["@@transducer/step"](t, n);return 0 > this.n || this.n > this.i ? r : d(r);
      };var Ln = e(function (t, n) {
        return new Mn(t, n);
      }),
          Kn = e(y(["take"], Ln, function (t, n) {
        return Bt(0, 0 > t ? 1 / 0 : t, n);
      }));function Vn(t, n) {
        this.xf = n, this.pos = 0, this.full = !1, this.acc = Array(t);
      }Vn.prototype["@@transducer/init"] = g.init, Vn.prototype["@@transducer/result"] = function (t) {
        return this.acc = null, this.xf["@@transducer/result"](t);
      }, Vn.prototype["@@transducer/step"] = function (t, n) {
        return this.full && (t = this.xf["@@transducer/step"](t, this.acc[this.pos])), this.store(n), t;
      }, Vn.prototype.store = function (t) {
        this.acc[this.pos] = t, this.pos += 1, this.pos === this.acc.length && (this.pos = 0, this.full = !0);
      };var $n = e(function (t, n) {
        return new Vn(t, n);
      }),
          Hn = e(y([], $n, function (t, n) {
        return Kn(n.length > t ? n.length - t : 0, n);
      }));function Jn(t, n) {
        this.f = t, this.retained = [], this.xf = n;
      }Jn.prototype["@@transducer/init"] = g.init, Jn.prototype["@@transducer/result"] = function (t) {
        return this.retained = null, this.xf["@@transducer/result"](t);
      }, Jn.prototype["@@transducer/step"] = function (t, n) {
        return this.f(n) ? this.retain(t, n) : this.flush(t, n);
      }, Jn.prototype.flush = function (t, n) {
        return t = N(this.xf["@@transducer/step"], t, this.retained), this.retained = [], this.xf["@@transducer/step"](t, n);
      }, Jn.prototype.retain = function (t, n) {
        return this.retained.push(n), t;
      };var Xn = e(function (t, n) {
        return new Jn(t, n);
      }),
          Yn = e(y([], Xn, function (t, n) {
        for (var r = n.length - 1; r >= 0 && t(n[r]);) {
          r -= 1;
        }return Bt(0, r + 1, n);
      }));function Zn(t, n) {
        this.xf = n, this.pred = t, this.lastValue = void 0, this.seenFirstValue = !1;
      }Zn.prototype["@@transducer/init"] = g.init, Zn.prototype["@@transducer/result"] = g.result, Zn.prototype["@@transducer/step"] = function (t, n) {
        var r = !1;return this.seenFirstValue ? this.pred(this.lastValue, n) && (r = !0) : this.seenFirstValue = !0, this.lastValue = n, r ? t : this.xf["@@transducer/step"](t, n);
      };var Gn = e(function (t, n) {
        return new Zn(t, n);
      }),
          Qn = Kt(-1),
          tr = e(y([], Gn, function (t, n) {
        var r = [],
            e = 1,
            u = n.length;if (0 !== u) for (r[0] = n[0]; u > e;) {
          t(Qn(r), n[e]) || (r[r.length] = n[e]), e += 1;
        }return r;
      })),
          nr = r(y([], Gn(nn), tr(nn)));function rr(t, n) {
        this.xf = n, this.f = t;
      }rr.prototype["@@transducer/init"] = g.init, rr.prototype["@@transducer/result"] = g.result, rr.prototype["@@transducer/step"] = function (t, n) {
        if (this.f) {
          if (this.f(n)) return t;this.f = null;
        }return this.xf["@@transducer/step"](t, n);
      };var er = e(function (t, n) {
        return new rr(t, n);
      }),
          ur = e(y(["dropWhile"], er, function (t, n) {
        for (var r = 0, e = n.length; e > r && t(n[r]);) {
          r += 1;
        }return Bt(r, 1 / 0, n);
      })),
          ir = e(function (t, n) {
        return t || n;
      }),
          or = e(function (t, n) {
        return gt(t) ? function () {
          return t.apply(this, arguments) || n.apply(this, arguments);
        } : mt(ir)(t, n);
      }),
          cr = r(function (t) {
        return null != t && "function" == typeof t["fantasy-land/empty"] ? t["fantasy-land/empty"]() : null != t && null != t.constructor && "function" == typeof t.constructor["fantasy-land/empty"] ? t.constructor["fantasy-land/empty"]() : null != t && "function" == typeof t.empty ? t.empty() : null != t && null != t.constructor && "function" == typeof t.constructor.empty ? t.constructor.empty() : p(t) ? [] : j(t) ? "" : fn(t) ? {} : C(t) ? function () {
          return arguments;
        }() : void 0;
      }),
          ar = e(function (t, n) {
        return zn(0 > t ? 0 : n.length - t, n);
      }),
          sr = e(function (t, n) {
        return nn(ar(t.length, n), t);
      }),
          fr = f(function (t, n, r) {
        return nn(t(n), t(r));
      }),
          lr = f(function (t, n, r) {
        return nn(n[t], r[t]);
      }),
          pr = e(function t(n, r) {
        var e,
            u,
            i,
            o = r instanceof Array ? [] : {};for (u in r) {
          o[u] = "function" === (i = _typeof(e = n[u])) ? e(r[u]) : e && "object" === i ? t(e, r[u]) : r[u];
        }return o;
      });function hr(t, n) {
        this.xf = n, this.f = t, this.found = !1;
      }hr.prototype["@@transducer/init"] = g.init, hr.prototype["@@transducer/result"] = function (t) {
        return this.found || (t = this.xf["@@transducer/step"](t, void 0)), this.xf["@@transducer/result"](t);
      }, hr.prototype["@@transducer/step"] = function (t, n) {
        return this.f(n) && (this.found = !0, t = d(this.xf["@@transducer/step"](t, n))), t;
      };var yr = e(function (t, n) {
        return new hr(t, n);
      }),
          dr = e(y(["find"], yr, function (t, n) {
        for (var r = 0, e = n.length; e > r;) {
          if (t(n[r])) return n[r];r += 1;
        }
      }));function gr(t, n) {
        this.xf = n, this.f = t, this.idx = -1, this.found = !1;
      }gr.prototype["@@transducer/init"] = g.init, gr.prototype["@@transducer/result"] = function (t) {
        return this.found || (t = this.xf["@@transducer/step"](t, -1)), this.xf["@@transducer/result"](t);
      }, gr.prototype["@@transducer/step"] = function (t, n) {
        return this.idx += 1, this.f(n) && (this.found = !0, t = d(this.xf["@@transducer/step"](t, this.idx))), t;
      };var vr = e(function (t, n) {
        return new gr(t, n);
      }),
          mr = e(y([], vr, function (t, n) {
        for (var r = 0, e = n.length; e > r;) {
          if (t(n[r])) return r;r += 1;
        }return -1;
      }));function br(t, n) {
        this.xf = n, this.f = t;
      }br.prototype["@@transducer/init"] = g.init, br.prototype["@@transducer/result"] = function (t) {
        return this.xf["@@transducer/result"](this.xf["@@transducer/step"](t, this.last));
      }, br.prototype["@@transducer/step"] = function (t, n) {
        return this.f(n) && (this.last = n), t;
      };var xr = e(function (t, n) {
        return new br(t, n);
      }),
          wr = e(y([], xr, function (t, n) {
        for (var r = n.length - 1; r >= 0;) {
          if (t(n[r])) return n[r];r -= 1;
        }
      }));function jr(t, n) {
        this.xf = n, this.f = t, this.idx = -1, this.lastIdx = -1;
      }jr.prototype["@@transducer/init"] = g.init, jr.prototype["@@transducer/result"] = function (t) {
        return this.xf["@@transducer/result"](this.xf["@@transducer/step"](t, this.lastIdx));
      }, jr.prototype["@@transducer/step"] = function (t, n) {
        return this.idx += 1, this.f(n) && (this.lastIdx = this.idx), t;
      };var Ar = e(function (t, n) {
        return new jr(t, n);
      }),
          Or = e(y([], Ar, function (t, n) {
        for (var r = n.length - 1; r >= 0;) {
          if (t(n[r])) return r;r -= 1;
        }return -1;
      })),
          Sr = r(jt(!0)),
          Er = r(function (t) {
        return a(t.length, function (n, r) {
          var e = Array.prototype.slice.call(arguments, 0);return e[0] = r, e[1] = n, t.apply(this, e);
        });
      }),
          _r = e(Ct("forEach", function (t, n) {
        for (var r = n.length, e = 0; r > e;) {
          t(n[e]), e += 1;
        }return n;
      })),
          qr = e(function (t, n) {
        for (var r = D(n), e = 0; r.length > e;) {
          var u = r[e];t(n[u], u, n), e += 1;
        }return n;
      }),
          kr = r(function (t) {
        for (var n = {}, r = 0; t.length > r;) {
          n[t[r][0]] = t[r][1], r += 1;
        }return n;
      }),
          Nr = e(Ct("groupBy", Sn(function (t, n) {
        return null == t && (t = []), t.push(n), t;
      }, null))),
          Wr = e(function (t, n) {
        for (var r = [], e = 0, u = n.length; u > e;) {
          for (var i = e + 1; u > i && t(n[i - 1], n[i]);) {
            i += 1;
          }r.push(n.slice(e, i)), e = i;
        }return r;
      }),
          Ir = e(function (t, n) {
        return t > n;
      }),
          Pr = e(function (t, n) {
        return t >= n;
      }),
          Tr = e(function (t, n) {
        if (0 === t.length) return !1;for (var r = n, e = 0; t.length > e;) {
          if (!P(t[e], r)) return !1;r = r[t[e]], e += 1;
        }return !0;
      }),
          Cr = e(function (t, n) {
        return Tr([t], n);
      }),
          Br = e(function (t, n) {
        return t in n;
      }),
          Fr = e(Gt),
          Rr = f(function (t, n, r) {
        return a(Math.max(t.length, n.length, r.length), function () {
          return t.apply(this, arguments) ? n.apply(this, arguments) : r.apply(this, arguments);
        });
      }),
          Ur = u(1),
          Dr = e(en),
          zr = Sn(function (t, n) {
        return n;
      }, null),
          Mr = e(function (t, n) {
        return "function" != typeof n.indexOf || p(n) ? rn(n, t, 0) : n.indexOf(t);
      }),
          Lr = Bt(0, -1),
          Kr = f(function (t, n, r) {
        return sn(function (n) {
          return Zt(t, n, r);
        }, n);
      }),
          Vr = f(function (t, n, r) {
        t = r.length > t && t >= 0 ? t : r.length;var e = Array.prototype.slice.call(r, 0);return e.splice(t, 0, n), e;
      }),
          $r = f(function (t, n, r) {
        return [].concat(Array.prototype.slice.call(r, 0, t = r.length > t && t >= 0 ? t : r.length), n, Array.prototype.slice.call(r, t));
      }),
          Hr = e(function (t, n) {
        for (var r, e, u = new Nn(), i = [], o = 0; n.length > o;) {
          r = t(e = n[o]), u.add(r) && i.push(e), o += 1;
        }return i;
      }),
          Jr = Hr(Ht),
          Xr = e(function (t, n) {
        var r, e;return t.length > n.length ? (r = t, e = n) : (r = n, e = t), Jr(sn(Er(en)(r), e));
      }),
          Yr = e(Ct("intersperse", function (t, n) {
        for (var r = [], e = 0, u = n.length; u > e;) {
          e === u - 1 ? r.push(n[e]) : r.push(n[e], t), e += 1;
        }return r;
      }));var Zr = "function" == typeof Object.assign ? Object.assign : function (t) {
        if (null == t) throw new TypeError("Cannot convert undefined or null to object");for (var n = Object(t), r = 1, e = arguments.length; e > r;) {
          var u = arguments[r];if (null != u) for (var i in u) {
            P(i, u) && (n[i] = u[i]);
          }r += 1;
        }return n;
      },
          Gr = e(function (t, n) {
        var r = {};return r[t] = n, r;
      }),
          Qr = { "@@transducer/init": Array, "@@transducer/step": function transducerStep(t, n) {
          return t.push(n), t;
        }, "@@transducer/result": $t },
          te = { "@@transducer/init": String, "@@transducer/step": function transducerStep(t, n) {
          return t + n;
        }, "@@transducer/result": $t },
          ne = { "@@transducer/init": Object, "@@transducer/step": function transducerStep(t, n) {
          return Zr(t, A(n) ? Gr(n[0], n[1]) : n);
        }, "@@transducer/result": $t };var re = f(function (t, n, r) {
        return h(t) ? N(n(t), t["@@transducer/init"](), r) : N(n(function (t) {
          if (h(t)) return t;if (A(t)) return Qr;if ("string" == typeof t) return te;if ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t))) return ne;throw Error("Cannot create transformer for " + t);
        }(t)), kt(t, [], [], !1), r);
      }),
          ee = r(function (t) {
        for (var n = D(t), r = n.length, e = 0, u = {}; r > e;) {
          var i = n[e],
              o = t[i],
              c = P(o, u) ? u[o] : u[o] = [];c[c.length] = i, e += 1;
        }return u;
      }),
          ue = r(function (t) {
        for (var n = D(t), r = n.length, e = 0, u = {}; r > e;) {
          var i = n[e];u[t[i]] = i, e += 1;
        }return u;
      }),
          ie = e(function (t, n) {
        return a(t + 1, function () {
          var r = arguments[t];if (null != r && gt(r[n])) return r[n].apply(r, Array.prototype.slice.call(arguments, 0, t));throw new TypeError(gn(r) + ' does not have a method named "' + n + '"');
        });
      }),
          oe = e(function (t, n) {
        return null != n && n.constructor === t || n instanceof t;
      }),
          ce = r(function (t) {
        return null != t && nn(t, cr(t));
      }),
          ae = ie(1, "join"),
          se = r(function (t) {
        return jn(function () {
          return Array.prototype.slice.call(arguments, 0);
        }, t);
      }),
          fe = r(function (t) {
        var n,
            r = [];for (n in t) {
          r[r.length] = n;
        }return r;
      }),
          le = e(function (t, n) {
        if ("function" != typeof n.lastIndexOf || p(n)) {
          for (var r = n.length - 1; r >= 0;) {
            if (nn(n[r], t)) return r;r -= 1;
          }return -1;
        }return n.lastIndexOf(t);
      });function pe(t) {
        return "[object Number]" === Object.prototype.toString.call(t);
      }var he = r(function (t) {
        return null != t && pe(t.length) ? t.length : NaN;
      }),
          ye = e(function (t, n) {
        return function (r) {
          return function (e) {
            return z(function (t) {
              return n(t, e);
            }, r(t(e)));
          };
        };
      }),
          de = r(function (t) {
        return ye(Kt(t), Bn(t));
      }),
          ge = r(function (t) {
        return ye(M(t), ht(t));
      }),
          ve = r(function (t) {
        return ye(L(t), ft(t));
      }),
          me = e(function (t, n) {
        return n > t;
      }),
          be = e(function (t, n) {
        return n >= t;
      }),
          xe = f(function (t, n, r) {
        for (var e = 0, u = r.length, i = [], o = [n]; u > e;) {
          o = t(o[0], r[e]), i[e] = o[1], e += 1;
        }return [o[0], i];
      }),
          we = f(function (t, n, r) {
        for (var e = r.length - 1, u = [], i = [n]; e >= 0;) {
          i = t(i[0], r[e]), u[e] = i[1], e -= 1;
        }return [i[0], u];
      }),
          je = e(function (t, n) {
        return N(function (r, e) {
          return r[e] = t(n[e], e, n), r;
        }, {}, D(n));
      }),
          Ae = e(function (t, n) {
        return n.match(t) || [];
      }),
          Oe = e(function (t, n) {
        return lt(t) ? !lt(n) || 1 > n ? NaN : (t % n + n) % n : NaN;
      }),
          Se = f(function (t, n, r) {
        return t(r) > t(n) ? r : n;
      }),
          Ee = V(u, 0),
          _e = r(function (t) {
        return Ee(t) / t.length;
      }),
          qe = r(function (t) {
        var n = t.length;if (0 === n) return NaN;var r = 2 - n % 2,
            e = (n - r) / 2;return _e(Array.prototype.slice.call(t, 0).sort(function (t, n) {
          return n > t ? -1 : t > n ? 1 : 0;
        }).slice(e, e + r));
      }),
          ke = e(function (t, n) {
        var r = {};return o(n.length, function () {
          var e = t.apply(this, arguments);return P(e, r) || (r[e] = n.apply(this, arguments)), r[e];
        });
      }),
          Ne = e(function (t, n) {
        return Zr({}, t, n);
      }),
          We = r(function (t) {
        return Zr.apply(null, [{}].concat(t));
      }),
          Ie = f(function (t, n, r) {
        var e,
            u = {};for (e in n) {
          P(e, n) && (u[e] = P(e, r) ? t(e, n[e], r[e]) : n[e]);
        }for (e in r) {
          P(e, r) && !P(e, u) && (u[e] = r[e]);
        }return u;
      }),
          Pe = f(function t(n, r, e) {
        return Ie(function (r, e, u) {
          return fn(e) && fn(u) ? t(n, e, u) : n(r, e, u);
        }, r, e);
      }),
          Te = e(function (t, n) {
        return Pe(function (t, n, r) {
          return n;
        }, t, n);
      }),
          Ce = e(function (t, n) {
        return Pe(function (t, n, r) {
          return r;
        }, t, n);
      }),
          Be = f(function (t, n, r) {
        return Pe(function (n, r, e) {
          return t(r, e);
        }, n, r);
      }),
          Fe = e(function (t, n) {
        return Zr({}, n, t);
      }),
          Re = e(function (t, n) {
        return Zr({}, t, n);
      }),
          Ue = f(function (t, n, r) {
        return Ie(function (n, r, e) {
          return t(r, e);
        }, n, r);
      }),
          De = e(function (t, n) {
        return t > n ? n : t;
      }),
          ze = f(function (t, n, r) {
        return t(r) < t(n) ? r : n;
      }),
          Me = e(function (t, n) {
        return t % n;
      }),
          Le = e(function (t, n) {
        return t * n;
      }),
          Ke = r(function (t) {
        return -t;
      });var Ve = e(function (t, n) {
        return b(an(t), n);
      });var $e = r(function (t) {
        return a(0 > t ? 1 : t + 1, function () {
          return Kt(t, arguments);
        });
      }),
          He = f(function (t, n, r) {
        return t(n(r));
      });var Je = r(function (t) {
        return [t];
      }),
          Xe = e(function (t, n) {
        for (var r = {}, e = {}, u = 0, i = t.length; i > u;) {
          e[t[u]] = 1, u += 1;
        }for (var o in n) {
          e.hasOwnProperty(o) || (r[o] = n[o]);
        }return r;
      }),
          Ye = r(function (t) {
        var n,
            r = !1;return o(t.length, function () {
          return r ? n : (r = !0, n = t.apply(this, arguments));
        });
      });function Ze(t, n) {
        if (null == n || !gt(n.then)) throw new TypeError("`" + t + "` expected a Promise, received " + dn(n, []));
      }var Ge = e(function (t, n) {
        return Ze("otherwise", n), n.then(null, t);
      });var Qe = function Qe(t) {
        return { value: t, map: function map(n) {
            return Qe(n(t));
          } };
      },
          tu = f(function (t, n, r) {
        return t(function (t) {
          return Qe(n(t));
        })(r).value;
      }),
          nu = e(function (t, n) {
        return [t, n];
      });function ru(t) {
        return e(function (n, r) {
          return o(Math.max(0, n.length - r.length), function () {
            return n.apply(this, t(r, arguments));
          });
        });
      }var eu = ru(i),
          uu = ru(Er(i)),
          iu = se([hn, yn]),
          ou = f(function (t, n, r) {
        return nn(M(t, r), n);
      }),
          cu = f(function (t, n, r) {
        return qn(t, M(n, r));
      }),
          au = f(function (t, n, r) {
        return n.length > 0 && t(M(n, r));
      }),
          su = e(function (t, n) {
        for (var r = {}, e = 0; t.length > e;) {
          t[e] in n && (r[t[e]] = n[t[e]]), e += 1;
        }return r;
      }),
          fu = e(function (t, n) {
        for (var r = {}, e = 0, u = t.length; u > e;) {
          var i = t[e];r[i] = n[i], e += 1;
        }return r;
      }),
          lu = e(function (t, n) {
        var r = {};for (var e in n) {
          t(n[e], e, n) && (r[e] = n[e]);
        }return r;
      });var pu = e(function (t, n) {
        return i([t], n);
      }),
          hu = V(Le, 1),
          yu = e(function (t, n) {
        return a(n.length, function () {
          for (var r = [], e = 0; n.length > e;) {
            r.push(n[e].call(this, arguments[e])), e += 1;
          }return t.apply(this, r.concat(Array.prototype.slice.call(arguments, n.length)));
        });
      }),
          du = yu(w, [fu, Ht]),
          gu = f(function (t, n, r) {
        return nn(n, r[t]);
      }),
          vu = f(function (t, n, r) {
        return oe(t, r[n]);
      }),
          mu = f(function (t, n, r) {
        return cu(t, [n], r);
      }),
          bu = f(function (t, n, r) {
        return t(r[n]);
      }),
          xu = e(function (t, n) {
        for (var r = t.length, e = [], u = 0; r > u;) {
          e[u] = n[t[u]], u += 1;
        }return e;
      }),
          wu = e(function (t, n) {
        if (!pe(t) || !pe(n)) throw new TypeError("Both arguments to range must be numbers");for (var r = [], e = t; n > e;) {
          r.push(e), e += 1;
        }return r;
      }),
          ju = f(function (t, n, r) {
        for (var e = r.length - 1; e >= 0;) {
          n = t(r[e], n), e -= 1;
        }return n;
      }),
          Au = c(4, [], function (t, n, r, e) {
        return N(function (r, e) {
          return t(r, e) ? n(r, e) : d(r);
        }, r, e);
      }),
          Ou = r(d),
          Su = e(function (t, n) {
        var r,
            e = +n,
            u = 0;if (0 > e || isNaN(e)) throw new RangeError("n must be a non-negative number");for (r = Array(e); e > u;) {
          r[u] = t(u), u += 1;
        }return r;
      }),
          Eu = e(function (t, n) {
        return Su(H(t), n);
      }),
          _u = f(function (t, n, r) {
        return r.replace(t, n);
      }),
          qu = f(function (t, n, r) {
        for (var e = 0, u = r.length, i = [n]; u > e;) {
          n = t(n, r[e]), i[e + 1] = n, e += 1;
        }return i;
      }),
          ku = e(function (t, n) {
        return "function" == typeof n.sequence ? n.sequence(t) : ju(function (t, n) {
          return Q(z(pu, t), n);
        }, t([]), n);
      }),
          Nu = f(function (t, n, r) {
        return tu(t, H(n), r);
      }),
          Wu = e(function (t, n) {
        return Array.prototype.slice.call(n, 0).sort(t);
      }),
          Iu = e(function (t, n) {
        return Array.prototype.slice.call(n, 0).sort(function (n, r) {
          var e = t(n),
              u = t(r);return u > e ? -1 : e > u ? 1 : 0;
        });
      }),
          Pu = e(function (t, n) {
        return Array.prototype.slice.call(n, 0).sort(function (n, r) {
          for (var e = 0, u = 0; 0 === e && t.length > u;) {
            e = t[u](n, r), u += 1;
          }return e;
        });
      }),
          Tu = ie(1, "split"),
          Cu = e(function (t, n) {
        return [Bt(0, t, n), Bt(t, he(n), n)];
      }),
          Bu = e(function (t, n) {
        if (0 >= t) throw Error("First argument to splitEvery must be a positive integer");for (var r = [], e = 0; n.length > e;) {
          r.push(Bt(e, e += t, n));
        }return r;
      }),
          Fu = e(function (t, n) {
        for (var r = 0, e = n.length, u = []; e > r && !t(n[r]);) {
          u.push(n[r]), r += 1;
        }return [u, Array.prototype.slice.call(n, r)];
      }),
          Ru = e(function (t, n) {
        return nn(Kn(t.length, n), t);
      }),
          Uu = e(function (t, n) {
        return +t - +n;
      }),
          Du = e(function (t, n) {
        return vn(In(t, n), In(n, t));
      }),
          zu = f(function (t, n, r) {
        return vn(Pn(t, n, r), Pn(t, r, n));
      }),
          Mu = e(function (t, n) {
        for (var r = n.length - 1; r >= 0 && t(n[r]);) {
          r -= 1;
        }return Bt(r + 1, 1 / 0, n);
      });function Lu(t, n) {
        this.xf = n, this.f = t;
      }Lu.prototype["@@transducer/init"] = g.init, Lu.prototype["@@transducer/result"] = g.result, Lu.prototype["@@transducer/step"] = function (t, n) {
        return this.f(n) ? this.xf["@@transducer/step"](t, n) : d(t);
      };var Ku = e(function (t, n) {
        return new Lu(t, n);
      }),
          Vu = e(y(["takeWhile"], Ku, function (t, n) {
        for (var r = 0, e = n.length; e > r && t(n[r]);) {
          r += 1;
        }return Bt(0, r, n);
      }));function $u(t, n) {
        this.xf = n, this.f = t;
      }$u.prototype["@@transducer/init"] = g.init, $u.prototype["@@transducer/result"] = g.result, $u.prototype["@@transducer/step"] = function (t, n) {
        return this.f(n), this.xf["@@transducer/step"](t, n);
      };var Hu = e(function (t, n) {
        return new $u(t, n);
      }),
          Ju = e(y([], Hu, function (t, n) {
        return t(n), n;
      }));var Xu = e(function (t, n) {
        if ("[object RegExp]" !== Object.prototype.toString.call(t)) throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + gn(t));return _t(t).test(n);
      });var Yu = e(function (t, n) {
        return Ze("then", n), n.then(t);
      });var Zu = ie(0, "toLowerCase"),
          Gu = r(function (t) {
        var n = [];for (var r in t) {
          P(r, t) && (n[n.length] = [r, t[r]]);
        }return n;
      }),
          Qu = r(function (t) {
        var n = [];for (var r in t) {
          n[n.length] = [r, t[r]];
        }return n;
      }),
          ti = ie(0, "toUpperCase"),
          ni = a(4, function (t, n, r, e) {
        return N(t("function" == typeof n ? S(n) : n), r, e);
      }),
          ri = r(function (t) {
        for (var n = 0, r = []; t.length > n;) {
          for (var e = t[n], u = 0; e.length > u;) {
            void 0 === r[u] && (r[u] = []), r[u].push(e[u]), u += 1;
          }n += 1;
        }return r;
      }),
          ei = f(function (t, n, r) {
        return "function" == typeof r["fantasy-land/traverse"] ? r["fantasy-land/traverse"](n, t) : ku(t, z(n, r));
      }),
          ui = "\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF",
          ii = !("function" == typeof String.prototype.trim) || ui.trim() ? r(function (t) {
        var n = RegExp("^[" + ui + "][" + ui + "]*"),
            r = RegExp("[" + ui + "][" + ui + "]*$");return t.replace(n, "").replace(r, "");
      }) : r(function (t) {
        return t.trim();
      }),
          oi = e(function (t, n) {
        return o(t.length, function () {
          try {
            return t.apply(this, arguments);
          } catch (t) {
            return n.apply(this, i([t], arguments));
          }
        });
      }),
          ci = r(function (t) {
        return function () {
          return t(Array.prototype.slice.call(arguments, 0));
        };
      }),
          ai = r(function (t) {
        return yt(1, t);
      }),
          si = e(function (t, n) {
        return a(t, function () {
          for (var r, e = 1, u = n, i = 0; t >= e && "function" == typeof u;) {
            u = u.apply(this, Array.prototype.slice.call(arguments, i, r = e === t ? arguments.length : i + u.length)), e += 1, i = r;
          }return u;
        });
      }),
          fi = e(function (t, n) {
        for (var r = t(n), e = []; r && r.length;) {
          e[e.length] = r[0], r = t(r[1]);
        }return e;
      }),
          li = e(Dt(Jr, i)),
          pi = e(function (t, n) {
        for (var r, e = 0, u = n.length, i = []; u > e;) {
          Zt(t, r = n[e], i) || (i[i.length] = r), e += 1;
        }return i;
      }),
          hi = f(function (t, n, r) {
        return pi(t, i(n, r));
      }),
          yi = f(function (t, n, r) {
        return t(r) ? r : n(r);
      }),
          di = St($t),
          gi = f(function (t, n, r) {
        for (var e = r; !t(e);) {
          e = n(e);
        }return e;
      }),
          vi = r(function (t) {
        var n,
            r = [];for (n in t) {
          r[r.length] = t[n];
        }return r;
      }),
          mi = function mi(t) {
        return { value: t, "fantasy-land/map": function fantasyLandMap() {
            return this;
          } };
      },
          bi = e(function (t, n) {
        return t(mi)(n).value;
      }),
          xi = f(function (t, n, r) {
        return t(r) ? n(r) : r;
      }),
          wi = e(function (t, n) {
        for (var r in t) {
          if (P(r, t) && !t[r](n[r])) return !1;
        }return !0;
      }),
          ji = e(function (t, n) {
        return wi(z(nn, t), n);
      }),
          Ai = e(function (t, n) {
        return yn(Er(en)(t), n);
      }),
          Oi = e(function (t, n) {
        for (var r, e = 0, u = t.length, i = n.length, o = []; u > e;) {
          for (r = 0; i > r;) {
            o[o.length] = [t[e], n[r]], r += 1;
          }e += 1;
        }return o;
      }),
          Si = e(function (t, n) {
        for (var r = [], e = 0, u = Math.min(t.length, n.length); u > e;) {
          r[e] = [t[e], n[e]], e += 1;
        }return r;
      }),
          Ei = e(function (t, n) {
        for (var r = 0, e = Math.min(t.length, n.length), u = {}; e > r;) {
          u[t[r]] = n[r], r += 1;
        }return u;
      }),
          _i = f(function (t, n, r) {
        for (var e = [], u = 0, i = Math.min(n.length, r.length); i > u;) {
          e[u] = t(n[u], r[u]), u += 1;
        }return e;
      }),
          qi = r(function (t) {
        return a(t.length, function () {
          var n = arguments;return function () {
            return t.apply(this, n);
          };
        });
      });t.F = function () {
        return !1;
      }, t.T = function () {
        return !0;
      }, t.__ = { "@@functional/placeholder": !0 }, t.add = u, t.addIndex = s, t.adjust = l, t.all = b, t.allPass = $, t.always = H, t.and = J, t.any = Z, t.anyPass = G, t.ap = Q, t.aperture = rt, t.append = et, t.apply = ut, t.applySpec = ct, t.applyTo = at, t.ascend = st, t.assoc = ft, t.assocPath = ht, t.binary = dt, t.bind = E, t.both = bt, t.call = wt, t.chain = St, t.clamp = Et, t.clone = Nt, t.comparator = Wt, t.complement = Pt, t.compose = Dt, t.composeK = zt, t.composeP = function () {
        if (0 === arguments.length) throw Error("composeP requires at least one argument");return Lt.apply(this, Ut(arguments));
      }, t.composeWith = Xt, t.concat = vn, t.cond = mn, t.construct = xn, t.constructN = bn, t.contains = wn, t.converge = jn, t.countBy = En, t.curry = xt, t.curryN = a, t.dec = _n, t.defaultTo = qn, t.descend = kn, t.difference = In, t.differenceWith = Pn, t.dissoc = Tn, t.dissocPath = Fn, t.divide = Rn, t.drop = zn, t.dropLast = Hn, t.dropLastWhile = Yn, t.dropRepeats = nr, t.dropRepeatsWith = tr, t.dropWhile = ur, t.either = or, t.empty = cr, t.endsWith = sr, t.eqBy = fr, t.eqProps = lr, t.equals = nn, t.evolve = pr, t.filter = hn, t.find = dr, t.findIndex = mr, t.findLast = wr, t.findLastIndex = Or, t.flatten = Sr, t.flip = Er, t.forEach = _r, t.forEachObjIndexed = qr, t.fromPairs = kr, t.groupBy = Nr, t.groupWith = Wr, t.gt = Ir, t.gte = Pr, t.has = Cr, t.hasIn = Br, t.hasPath = Tr, t.head = Vt, t.identical = Fr, t.identity = Ht, t.ifElse = Rr, t.inc = Ur, t.includes = Dr, t.indexBy = zr, t.indexOf = Mr, t.init = Lr, t.innerJoin = Kr, t.insert = Vr, t.insertAll = $r, t.intersection = Xr, t.intersperse = Yr, t.into = re, t.invert = ee, t.invertObj = ue, t.invoker = ie, t.is = oe, t.isEmpty = ce, t.isNil = pt, t.join = ae, t.juxt = se, t.keys = D, t.keysIn = fe, t.last = Qn, t.lastIndexOf = le, t.length = he, t.lens = ye, t.lensIndex = de, t.lensPath = ge, t.lensProp = ve, t.lift = mt, t.liftN = vt, t.lt = me, t.lte = be, t.map = z, t.mapAccum = xe, t.mapAccumRight = we, t.mapObjIndexed = je, t.match = Ae, t.mathMod = Oe, t.max = x, t.maxBy = Se, t.mean = _e, t.median = qe, t.memoizeWith = ke, t.merge = Ne, t.mergeAll = We, t.mergeDeepLeft = Te, t.mergeDeepRight = Ce, t.mergeDeepWith = Be, t.mergeDeepWithKey = Pe, t.mergeLeft = Fe, t.mergeRight = Re, t.mergeWith = Ue, t.mergeWithKey = Ie, t.min = De, t.minBy = ze, t.modulo = Me, t.multiply = Le, t.nAry = yt, t.negate = Ke, t.none = Ve, t.not = It, t.nth = Kt, t.nthArg = $e, t.o = He, t.objOf = Gr, t.of = Je, t.omit = Xe, t.once = Ye, t.or = ir, t.otherwise = Ge, t.over = tu, t.pair = nu, t.partial = eu, t.partialRight = uu, t.partition = iu, t.path = M, t.pathEq = ou, t.pathOr = cu, t.pathSatisfies = au, t.pick = su, t.pickAll = fu, t.pickBy = lu, t.pipe = Rt, t.pipeK = function () {
        if (0 === arguments.length) throw Error("pipeK requires at least one argument");return zt.apply(this, Ut(arguments));
      }, t.pipeP = Lt, t.pipeWith = Jt, t.pluck = K, t.prepend = pu, t.product = hu, t.project = du, t.prop = L, t.propEq = gu, t.propIs = vu, t.propOr = mu, t.propSatisfies = bu, t.props = xu, t.range = wu, t.reduce = V, t.reduceBy = Sn, t.reduceRight = ju, t.reduceWhile = Au, t.reduced = Ou, t.reject = yn, t.remove = Cn, t.repeat = Eu, t.replace = _u, t.reverse = Ut, t.scan = qu, t.sequence = ku, t.set = Nu, t.slice = Bt, t.sort = Wu, t.sortBy = Iu, t.sortWith = Pu, t.split = Tu, t.splitAt = Cu, t.splitEvery = Bu, t.splitWhen = Fu, t.startsWith = Ru, t.subtract = Uu, t.sum = Ee, t.symmetricDifference = Du, t.symmetricDifferenceWith = zu, t.tail = Ft, t.take = Kn, t.takeLast = ar, t.takeLastWhile = Mu, t.takeWhile = Vu, t.tap = Ju, t.test = Xu, t.then = Yu, t.times = Su, t.toLower = Zu, t.toPairs = Gu, t.toPairsIn = Qu, t.toString = gn, t.toUpper = ti, t.transduce = ni, t.transpose = ri, t.traverse = ei, t.trim = ii, t.tryCatch = oi, t.type = qt, t.unapply = ci, t.unary = ai, t.uncurryN = si, t.unfold = fi, t.union = li, t.unionWith = hi, t.uniq = Jr, t.uniqBy = Hr, t.uniqWith = pi, t.unless = yi, t.unnest = di, t.until = gi, t.update = Bn, t.useWith = yu, t.values = it, t.valuesIn = vi, t.view = bi, t.when = xi, t.where = wi, t.whereEq = ji, t.without = Ai, t.xprod = Oi, t.zip = Si, t.zipObj = Ei, t.zipWith = _i, t.thunkify = qi, Object.defineProperty(t, "__esModule", { value: !0 });
    });
  }, {}] }, {}, [1]);
