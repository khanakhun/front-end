!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define("uikit", e)
    : (t.UIkit = e());
})(this, function () {
  "use strict";
  function p(i, n) {
    return function (t) {
      var e = arguments.length;
      return e ? (1 < e ? i.apply(n, arguments) : i.call(n, t)) : i.call(n);
    };
  }
  var i = Object.prototype.hasOwnProperty;
  function l(t, e) {
    return i.call(t, e);
  }
  var e = /([a-z\d])([A-Z])/g;
  function g(t) {
    return t.replace(e, "$1-$2").toLowerCase();
  }
  var n = /-(\w)/g;
  function m(t) {
    return t.replace(n, o);
  }
  function o(t, e) {
    return e ? e.toUpperCase() : "";
  }
  function r(t) {
    return t.length ? o(0, t.charAt(0)) + t.slice(1) : "";
  }
  var t = String.prototype,
    s =
      t.startsWith ||
      function (t) {
        return 0 === this.lastIndexOf(t, 0);
      };
  function v(t, e) {
    return s.call(t, e);
  }
  var a =
    t.endsWith ||
    function (t) {
      return this.substr(-t.length) === t;
    };
  function u(t, e) {
    return a.call(t, e);
  }
  var c = function (t) {
      return ~this.indexOf(t);
    },
    h = t.includes || c,
    d = Array.prototype.includes || c;
  function b(t, e) {
    return t && (E(t) ? h : d).call(t, e);
  }
  var w = Array.isArray;
  function y(t) {
    return "function" == typeof t;
  }
  function f(t) {
    return null !== t && "object" == typeof t;
  }
  function x(t) {
    return f(t) && Object.getPrototypeOf(t) === Object.prototype;
  }
  function k(t) {
    return f(t) && t === t.window;
  }
  function $(t) {
    return f(t) && 9 === t.nodeType;
  }
  function C(t) {
    return f(t) && !!t.jquery;
  }
  function I(t) {
    return t instanceof Node || (f(t) && 1 === t.nodeType);
  }
  function T(t) {
    return t instanceof NodeList || t instanceof HTMLCollection;
  }
  function S(t) {
    return "boolean" == typeof t;
  }
  function E(t) {
    return "string" == typeof t;
  }
  function A(t) {
    return "number" == typeof t;
  }
  function N(t) {
    return A(t) || (E(t) && !isNaN(t - parseFloat(t)));
  }
  function _(t) {
    return void 0 === t;
  }
  function B(t) {
    return S(t)
      ? t
      : "true" === t ||
          "1" === t ||
          "" === t ||
          ("false" !== t && "0" !== t && t);
  }
  function D(t) {
    var e = Number(t);
    return !isNaN(e) && e;
  }
  function O(t) {
    return parseFloat(t) || 0;
  }
  function M(t) {
    return I(t) || k(t) || $(t)
      ? t
      : T(t) || C(t)
      ? t[0]
      : w(t)
      ? M(t[0])
      : null;
  }
  var H = Array.prototype;
  function P(t) {
    return I(t)
      ? [t]
      : T(t)
      ? H.slice.call(t)
      : w(t)
      ? t.map(M).filter(Boolean)
      : C(t)
      ? t.toArray()
      : [];
  }
  function z(t) {
    return w(t)
      ? t
      : E(t)
      ? t.split(/,(?![^(]*\))/).map(function (t) {
          return N(t) ? D(t) : B(t.trim());
        })
      : [t];
  }
  function L(t) {
    return t ? (u(t, "ms") ? O(t) : 1e3 * O(t)) : 0;
  }
  function V(t, e, i) {
    return t.replace(new RegExp(e + "|" + i, "mg"), function (t) {
      return t === e ? i : e;
    });
  }
  var j =
    Object.assign ||
    function (t) {
      for (var e = [], i = arguments.length - 1; 0 < i--; )
        e[i] = arguments[i + 1];
      t = Object(t);
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        if (null !== o) for (var s in o) l(o, s) && (t[s] = o[s]);
      }
      return t;
    };
  function W(t, e) {
    for (var i in t) if (!1 === e.call(t[i], t[i], i)) break;
  }
  function F(t, e, i) {
    return (
      void 0 === e && (e = 0),
      void 0 === i && (i = 1),
      Math.min(Math.max(t, e), i)
    );
  }
  function R() {}
  function q(t, e) {
    return (
      t.left <= e.right &&
      e.left <= t.right &&
      t.top <= e.bottom &&
      e.top <= t.bottom
    );
  }
  function Y(t, e) {
    return q({ top: t.y, bottom: t.y, left: t.x, right: t.x }, e);
  }
  var U = {
    ratio: function (t, e, i) {
      var n,
        o = "width" === e ? "height" : "width";
      return ((n = {})[o] = Math.round((i * t[o]) / t[e])), (n[e] = i), n;
    },
    contain: function (i, n) {
      var o = this;
      return (
        W((i = j({}, i)), function (t, e) {
          return (i = i[e] > n[e] ? o.ratio(i, e, n[e]) : i);
        }),
        i
      );
    },
    cover: function (i, n) {
      var o = this;
      return (
        W((i = this.contain(i, n)), function (t, e) {
          return (i = i[e] < n[e] ? o.ratio(i, e, n[e]) : i);
        }),
        i
      );
    },
  };
  function Q(t, e, i) {
    if (f(e)) for (var n in e) Q(t, n, e[n]);
    else {
      if (_(i)) return (t = M(t)) && t.getAttribute(e);
      P(t).forEach(function (t) {
        y(i) && (i = i.call(t, Q(t, e))),
          null === i ? G(t, e) : t.setAttribute(e, i);
      });
    }
  }
  function X(t, e) {
    return P(t).some(function (t) {
      return t.hasAttribute(e);
    });
  }
  function G(t, e) {
    (t = P(t)),
      e.split(" ").forEach(function (e) {
        return t.forEach(function (t) {
          return t.removeAttribute(e);
        });
      });
  }
  function J(t, e, i, n) {
    Q(t, e, function (t) {
      return t ? t.replace(i, n) : t;
    });
  }
  function K(t, e) {
    for (var i = 0, n = [e, "data-" + e]; i < n.length; i++)
      if (X(t, n[i])) return Q(t, n[i]);
  }
  function Z(t, e) {
    return M(t) || et(t, rt(t) ? e : document);
  }
  function tt(t, e) {
    var i = P(t);
    return (i.length && i) || it(t, rt(t) ? e : document);
  }
  function et(t, e) {
    return M(nt(t, e, "querySelector"));
  }
  function it(t, e) {
    return P(nt(t, e, "querySelectorAll"));
  }
  function nt(t, o, e) {
    if ((void 0 === o && (o = document), !t || !E(t))) return null;
    var s;
    rt((t = t.replace(st, "$1 *"))) &&
      ((s = []),
      (t = t
        .split(",")
        .map(function (t, e) {
          var i = o;
          if ("!" === (t = t.trim())[0]) {
            var n = t.substr(1).trim().split(" ");
            (i = ht(o.parentNode, n[0])), (t = n.slice(1).join(" "));
          }
          return i
            ? (i.id ||
                ((i.id = "uk-" + Date.now() + e),
                s.push(function () {
                  return G(i, "id");
                })),
              "#" + pt(i.id) + " " + t)
            : null;
        })
        .filter(Boolean)
        .join(",")),
      (o = document));
    try {
      return o[e](t);
    } catch (t) {
      return null;
    } finally {
      s &&
        s.forEach(function (t) {
          return t();
        });
    }
  }
  var ot = /(^|,)\s*[!>+~]/,
    st = /([!>+~])(?=\s+[!>+~]|\s*$)/g;
  function rt(t) {
    return E(t) && t.match(ot);
  }
  var at = Element.prototype,
    lt = at.matches || at.webkitMatchesSelector || at.msMatchesSelector;
  function ut(t, e) {
    return P(t).some(function (t) {
      return lt.call(t, e);
    });
  }
  var ct =
    at.closest ||
    function (t) {
      var e = this;
      do {
        if (ut(e, t)) return e;
        e = e.parentNode;
      } while (e && 1 === e.nodeType);
    };
  function ht(t, e) {
    return (
      v(e, ">") && (e = e.slice(1)),
      I(t)
        ? t.parentNode && ct.call(t, e)
        : P(t)
            .map(function (t) {
              return t.parentNode && ct.call(t, e);
            })
            .filter(Boolean)
    );
  }
  function dt(t, e) {
    for (var i = [], n = M(t).parentNode; n && 1 === n.nodeType; )
      ut(n, e) && i.push(n), (n = n.parentNode);
    return i;
  }
  var ft =
    (window.CSS && CSS.escape) ||
    function (t) {
      return t.replace(/([^\x7f-\uFFFF\w-])/g, function (t) {
        return "\\" + t;
      });
    };
  function pt(t) {
    return E(t) ? ft.call(null, t) : "";
  }
  var gt = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    menuitem: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  };
  function mt(t) {
    return P(t).some(function (t) {
      return gt[t.tagName.toLowerCase()];
    });
  }
  function vt(t) {
    return P(t).some(function (t) {
      return t.offsetHeight || t.getBoundingClientRect().height;
    });
  }
  var wt = "input,select,textarea,button";
  function bt(t) {
    return P(t).some(function (t) {
      return ut(t, wt);
    });
  }
  function yt(t, e) {
    return P(t).filter(function (t) {
      return ut(t, e);
    });
  }
  function xt(t, e) {
    return E(e)
      ? ut(t, e) || ht(t, e)
      : t === e || ($(e) ? e.documentElement : M(e)).contains(M(t));
  }
  function kt() {
    for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
    var i,
      n = St(t),
      o = n[0],
      s = n[1],
      r = n[2],
      a = n[3],
      l = n[4];
    return (
      (o = At(o)),
      r &&
        (a = (function (n, o, s) {
          var r = this;
          return function (t) {
            var e = t.target,
              i =
                ">" === o[0]
                  ? it(o, n)
                      .reverse()
                      .filter(function (t) {
                        return xt(e, t);
                      })[0]
                  : ht(e, o);
            i && ((t.delegate = n), (t.current = i), s.call(r, t));
          };
        })(o, r, a)),
      1 < a.length &&
        ((i = a),
        (a = function (t) {
          return w(t.detail) ? i.apply(i, [t].concat(t.detail)) : i(t);
        })),
      s.split(" ").forEach(function (t) {
        return o && o.addEventListener(t, a, l);
      }),
      function () {
        return $t(o, s, a, l);
      }
    );
  }
  function $t(e, t, i, n) {
    void 0 === n && (n = !1),
      (e = At(e)) &&
        t.split(" ").forEach(function (t) {
          return e.removeEventListener(t, i, n);
        });
  }
  function Ct() {
    for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
    var i = St(t),
      n = i[0],
      o = i[1],
      s = i[2],
      r = i[3],
      a = i[4],
      l = i[5],
      u = kt(
        n,
        o,
        s,
        function (t) {
          var e = !l || l(t);
          e && (u(), r(t, e));
        },
        a
      );
    return u;
  }
  function It(t, i, n) {
    return Nt(t).reduce(function (t, e) {
      return t && e.dispatchEvent(Tt(i, !0, !0, n));
    }, !0);
  }
  function Tt(t, e, i, n) {
    if ((void 0 === e && (e = !0), void 0 === i && (i = !1), E(t))) {
      var o = document.createEvent("CustomEvent");
      o.initCustomEvent(t, e, i, n), (t = o);
    }
    return t;
  }
  function St(t) {
    return E(t[0]) && (t[0] = et(t[0])), y(t[2]) && t.splice(2, 0, !1), t;
  }
  function Et(t) {
    return "EventTarget" in window
      ? t instanceof EventTarget
      : t && "addEventListener" in t;
  }
  function At(t) {
    return Et(t) ? t : M(t);
  }
  function Nt(t) {
    return Et(t) ? [t] : w(t) ? t.map(At).filter(Boolean) : P(t);
  }
  var _t = "Promise" in window ? window.Promise : Ot,
    Bt = 2,
    Dt = "setImmediate" in window ? setImmediate : setTimeout;
  function Ot(t) {
    (this.state = Bt), (this.value = void 0), (this.deferred = []);
    var e = this;
    try {
      t(
        function (t) {
          e.resolve(t);
        },
        function (t) {
          e.reject(t);
        }
      );
    } catch (t) {
      e.reject(t);
    }
  }
  (Ot.reject = function (i) {
    return new Ot(function (t, e) {
      e(i);
    });
  }),
    (Ot.resolve = function (i) {
      return new Ot(function (t, e) {
        t(i);
      });
    }),
    (Ot.all = function (r) {
      return new Ot(function (i, t) {
        var n = [],
          o = 0;
        function e(e) {
          return function (t) {
            (n[e] = t), (o += 1) === r.length && i(n);
          };
        }
        0 === r.length && i(n);
        for (var s = 0; s < r.length; s += 1) Ot.resolve(r[s]).then(e(s), t);
      });
    }),
    (Ot.race = function (n) {
      return new Ot(function (t, e) {
        for (var i = 0; i < n.length; i += 1) Ot.resolve(n[i]).then(t, e);
      });
    });
  var Mt = Ot.prototype;
  function Ht(r, a) {
    return new _t(function (t, e) {
      var i = j(
        {
          data: null,
          method: "GET",
          headers: {},
          xhr: new XMLHttpRequest(),
          beforeSend: R,
          responseType: "",
        },
        a
      );
      i.beforeSend(i);
      var n = i.xhr;
      for (var o in i)
        if (o in n)
          try {
            n[o] = i[o];
          } catch (t) {}
      for (var s in (n.open(i.method.toUpperCase(), r), i.headers))
        n.setRequestHeader(s, i.headers[s]);
      kt(n, "load", function () {
        0 === n.status ||
        (200 <= n.status && n.status < 300) ||
        304 === n.status
          ? t(n)
          : e(j(Error(n.statusText), { xhr: n, status: n.status }));
      }),
        kt(n, "error", function () {
          return e(j(Error("Network Error"), { xhr: n }));
        }),
        kt(n, "timeout", function () {
          return e(j(Error("Network Timeout"), { xhr: n }));
        }),
        n.send(i.data);
    });
  }
  function Pt() {
    return (
      "complete" === document.readyState ||
      ("loading" !== document.readyState && !document.documentElement.doScroll)
    );
  }
  function zt(t) {
    if (Pt()) t();
    else
      var e = function () {
          i(), n(), t();
        },
        i = kt(document, "DOMContentLoaded", e),
        n = kt(window, "load", e);
  }
  function Lt(t, e) {
    return e
      ? P(t).indexOf(M(e))
      : P((t = M(t)) && t.parentNode.children).indexOf(t);
  }
  function Vt(t, e, i, n) {
    void 0 === i && (i = 0), void 0 === n && (n = !1);
    var o = (e = P(e)).length;
    return (
      (t = N(t)
        ? D(t)
        : "next" === t
        ? i + 1
        : "previous" === t
        ? i - 1
        : Lt(e, t)),
      n ? F(t, 0, o - 1) : (t %= o) < 0 ? t + o : t
    );
  }
  function jt(t) {
    return ((t = M(t)).innerHTML = ""), t;
  }
  function Wt(t, e) {
    return (
      (t = M(t)), _(e) ? t.innerHTML : Ft(t.hasChildNodes() ? jt(t) : t, e)
    );
  }
  function Ft(e, t) {
    return (
      (e = M(e)),
      Yt(t, function (t) {
        return e.appendChild(t);
      })
    );
  }
  function Rt(e, t) {
    return (
      (e = M(e)),
      Yt(t, function (t) {
        return e.parentNode.insertBefore(t, e);
      })
    );
  }
  function qt(e, t) {
    return (
      (e = M(e)),
      Yt(t, function (t) {
        return e.nextSibling ? Rt(e.nextSibling, t) : Ft(e.parentNode, t);
      })
    );
  }
  function Yt(t, e) {
    return (t = E(t) ? Zt(t) : t) ? ("length" in t ? P(t).map(e) : e(t)) : null;
  }
  function Ut(t) {
    P(t).map(function (t) {
      return t.parentNode && t.parentNode.removeChild(t);
    });
  }
  function Qt(t, e) {
    for (e = M(Rt(t, e)); e.firstChild; ) e = e.firstChild;
    return Ft(e, t), e;
  }
  function Xt(t, e) {
    return P(
      P(t).map(function (t) {
        return t.hasChildNodes ? Qt(P(t.childNodes), e) : Ft(t, e);
      })
    );
  }
  function Gt(t) {
    P(t)
      .map(function (t) {
        return t.parentNode;
      })
      .filter(function (t, e, i) {
        return i.indexOf(t) === e;
      })
      .forEach(function (t) {
        Rt(t, t.childNodes), Ut(t);
      });
  }
  (Mt.resolve = function (t) {
    var e = this;
    if (e.state === Bt) {
      if (t === e) throw new TypeError("Promise settled with itself.");
      var i = !1;
      try {
        var n = t && t.then;
        if (null !== t && f(t) && y(n))
          return void n.call(
            t,
            function (t) {
              i || e.resolve(t), (i = !0);
            },
            function (t) {
              i || e.reject(t), (i = !0);
            }
          );
      } catch (t) {
        return void (i || e.reject(t));
      }
      (e.state = 0), (e.value = t), e.notify();
    }
  }),
    (Mt.reject = function (t) {
      var e = this;
      if (e.state === Bt) {
        if (t === e) throw new TypeError("Promise settled with itself.");
        (e.state = 1), (e.value = t), e.notify();
      }
    }),
    (Mt.notify = function () {
      var s = this;
      Dt(function () {
        if (s.state !== Bt)
          for (; s.deferred.length; ) {
            var t = s.deferred.shift(),
              e = t[0],
              i = t[1],
              n = t[2],
              o = t[3];
            try {
              0 === s.state
                ? y(e)
                  ? n(e.call(void 0, s.value))
                  : n(s.value)
                : 1 === s.state &&
                  (y(i) ? n(i.call(void 0, s.value)) : o(s.value));
            } catch (t) {
              o(t);
            }
          }
      });
    }),
    (Mt.then = function (i, n) {
      var o = this;
      return new Ot(function (t, e) {
        o.deferred.push([i, n, t, e]), o.notify();
      });
    }),
    (Mt.catch = function (t) {
      return this.then(void 0, t);
    });
  var Jt = /^\s*<(\w+|!)[^>]*>/,
    Kt = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;
  function Zt(t) {
    var e = Kt.exec(t);
    if (e) return document.createElement(e[1]);
    var i = document.createElement("div");
    return (
      Jt.test(t)
        ? i.insertAdjacentHTML("beforeend", t.trim())
        : (i.textContent = t),
      1 < i.childNodes.length ? P(i.childNodes) : i.firstChild
    );
  }
  function te(t, e) {
    if (t && 1 === t.nodeType)
      for (e(t), t = t.firstElementChild; t; )
        te(t, e), (t = t.nextElementSibling);
  }
  function ee(t) {
    for (var e = [], i = arguments.length - 1; 0 < i--; )
      e[i] = arguments[i + 1];
    ae(t, e, "add");
  }
  function ie(t) {
    for (var e = [], i = arguments.length - 1; 0 < i--; )
      e[i] = arguments[i + 1];
    ae(t, e, "remove");
  }
  function ne(t, e) {
    J(t, "class", new RegExp("(^|\\s)" + e + "(?!\\S)", "g"), "");
  }
  function oe(t) {
    for (var e = [], i = arguments.length - 1; 0 < i--; )
      e[i] = arguments[i + 1];
    e[0] && ie(t, e[0]), e[1] && ee(t, e[1]);
  }
  function se(t, e) {
    return P(t).some(function (t) {
      return t.classList.contains(e);
    });
  }
  function re(t) {
    for (var n = [], e = arguments.length - 1; 0 < e--; )
      n[e] = arguments[e + 1];
    if (n.length) {
      var o = E((n = le(n))[n.length - 1]) ? [] : n.pop();
      (n = n.filter(Boolean)),
        P(t).forEach(function (t) {
          for (var e = t.classList, i = 0; i < n.length; i++)
            ce.Force
              ? e.toggle.apply(e, [n[i]].concat(o))
              : e[(_(o) ? !e.contains(n[i]) : o) ? "add" : "remove"](n[i]);
        });
    }
  }
  function ae(t, i, n) {
    (i = le(i).filter(Boolean)).length &&
      P(t).forEach(function (t) {
        var e = t.classList;
        ce.Multiple
          ? e[n].apply(e, i)
          : i.forEach(function (t) {
              return e[n](t);
            });
      });
  }
  function le(t) {
    return t.reduce(function (t, e) {
      return t.concat.call(t, E(e) && b(e, " ") ? e.trim().split(" ") : e);
    }, []);
  }
  var ue,
    ce = {};
  (ue = document.createElement("_").classList) &&
    (ue.add("a", "b"),
    ue.toggle("c", !1),
    (ce.Multiple = ue.contains("b")),
    (ce.Force = !ue.contains("c")));
  var he = {
    "animation-iteration-count": !(ue = null),
    "column-count": !0,
    "fill-opacity": !0,
    "flex-grow": !0,
    "flex-shrink": !0,
    "font-weight": !0,
    "line-height": !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    widows: !0,
    "z-index": !0,
    zoom: !0,
  };
  function de(t, e, o) {
    return P(t).map(function (i) {
      if (E(e)) {
        if (((e = we(e)), _(o))) return pe(i, e);
        o || 0 === o
          ? (i.style[e] = N(o) && !he[e] ? o + "px" : o)
          : i.style.removeProperty(e);
      } else {
        if (w(e)) {
          var n = fe(i);
          return e.reduce(function (t, e) {
            return (t[e] = n[we(e)]), t;
          }, {});
        }
        f(e) &&
          W(e, function (t, e) {
            return de(i, e, t);
          });
      }
      return i;
    })[0];
  }
  function fe(t, e) {
    return (t = M(t)).ownerDocument.defaultView.getComputedStyle(t, e);
  }
  function pe(t, e, i) {
    return fe(t, i)[e];
  }
  var ge = {};
  function me(t) {
    if (!(t in ge)) {
      var e = Ft(document.documentElement, document.createElement("div"));
      ee(e, "var-" + t);
      try {
        (ge[t] = pe(e, "content", ":before").replace(/^["'](.*)["']$/, "$1")),
          (ge[t] = JSON.parse(ge[t]));
      } catch (t) {}
      document.documentElement.removeChild(e);
    }
    return ge[t];
  }
  var ve = {};
  function we(t) {
    var e = ve[t];
    return (
      e ||
        (e = ve[t] =
          (function (t) {
            if ((t = g(t)) in ye) return t;
            var e,
              i = be.length;
            for (; i--; ) if ((e = "-" + be[i] + "-" + t) in ye) return e;
          })(t) || t),
      e
    );
  }
  var be = ["webkit", "moz", "ms"],
    ye = document.createElement("_").style;
  function xe(t, r, a, l) {
    return (
      void 0 === a && (a = 400),
      void 0 === l && (l = "linear"),
      _t.all(
        P(t).map(function (s) {
          return new _t(function (i, n) {
            for (var t in r) {
              var e = de(s, t);
              "" === e && de(s, t, e);
            }
            var o = setTimeout(function () {
              return It(s, "transitionend");
            }, a);
            Ct(
              s,
              "transitionend transitioncanceled",
              function (t) {
                var e = t.type;
                clearTimeout(o),
                  ie(s, "uk-transition"),
                  de(s, {
                    "transition-property": "",
                    "transition-duration": "",
                    "transition-timing-function": "",
                  }),
                  "transitioncanceled" === e ? n() : i();
              },
              !1,
              function (t) {
                var e = t.target;
                return s === e;
              }
            ),
              ee(s, "uk-transition"),
              de(
                s,
                j(
                  {
                    "transition-property": Object.keys(r).map(we).join(","),
                    "transition-duration": a + "ms",
                    "transition-timing-function": l,
                  },
                  r
                )
              );
          });
        })
      )
    );
  }
  var ke = {
      start: xe,
      stop: function (t) {
        return It(t, "transitionend"), _t.resolve();
      },
      cancel: function (t) {
        It(t, "transitioncanceled");
      },
      inProgress: function (t) {
        return se(t, "uk-transition");
      },
    },
    $e = "uk-animation-",
    Ce = "uk-cancel-animation";
  function Ie(t, e, i, a, l) {
    var u = arguments;
    return (
      void 0 === i && (i = 200),
      _t.all(
        P(t).map(function (r) {
          return new _t(function (n, o) {
            if (se(r, Ce))
              requestAnimationFrame(function () {
                return _t.resolve().then(function () {
                  return Ie.apply(void 0, u).then(n, o);
                });
              });
            else {
              var t = e + " " + $e + (l ? "leave" : "enter");
              v(e, $e) &&
                (a && (t += " uk-transform-origin-" + a),
                l && (t += " " + $e + "reverse")),
                s(),
                Ct(
                  r,
                  "animationend animationcancel",
                  function (t) {
                    var e = t.type,
                      i = !1;
                    "animationcancel" === e
                      ? (o(), s())
                      : (n(),
                        _t.resolve().then(function () {
                          (i = !0), s();
                        })),
                      requestAnimationFrame(function () {
                        i ||
                          (ee(r, Ce),
                          requestAnimationFrame(function () {
                            return ie(r, Ce);
                          }));
                      });
                  },
                  !1,
                  function (t) {
                    var e = t.target;
                    return r === e;
                  }
                ),
                de(r, "animationDuration", i + "ms"),
                ee(r, t);
            }
            function s() {
              de(r, "animationDuration", ""), ne(r, $e + "\\S*");
            }
          });
        })
      )
    );
  }
  var Te = new RegExp($e + "(enter|leave)"),
    Se = {
      in: function (t, e, i, n) {
        return Ie(t, e, i, n, !1);
      },
      out: function (t, e, i, n) {
        return Ie(t, e, i, n, !0);
      },
      inProgress: function (t) {
        return Te.test(Q(t, "class"));
      },
      cancel: function (t) {
        It(t, "animationcancel");
      },
    };
  function Ee(t, e) {
    return E(t) ? (Ne(t) ? M(Zt(t)) : et(t, e)) : M(t);
  }
  function Ae(t, e) {
    return E(t) ? (Ne(t) ? P(Zt(t)) : it(t, e)) : P(t);
  }
  function Ne(t) {
    return "<" === t[0] || t.match(/^\s*</);
  }
  var _e = { width: ["x", "left", "right"], height: ["y", "top", "bottom"] };
  function Be(t, e, c, h, d, i, f, p) {
    (c = je(c)), (h = je(h));
    var g = { element: c, target: h };
    if (!t || !e) return g;
    var m = Oe(t),
      v = Oe(e),
      w = v;
    return (
      Ve(w, c, m, -1),
      Ve(w, h, v, 1),
      (d = We(d, m.width, m.height)),
      (i = We(i, v.width, v.height)),
      (d.x += i.x),
      (d.y += i.y),
      (w.left += d.x),
      (w.top += d.y),
      (p = Oe(p || qe(t))),
      f &&
        W(_e, function (t, n) {
          var o = t[0],
            s = t[1],
            r = t[2];
          if (!0 === f || b(f, o)) {
            var e = c[o] === s ? -m[n] : c[o] === r ? m[n] : 0,
              i = h[o] === s ? v[n] : h[o] === r ? -v[n] : 0;
            if (w[s] < p[s] || w[s] + m[n] > p[r]) {
              var a = m[n] / 2,
                l = "center" === h[o] ? -v[n] / 2 : 0;
              ("center" === c[o] && (u(a, l) || u(-a, -l))) || u(e, i);
            }
          }
          function u(e, t) {
            var i = w[s] + e + t - 2 * d[o];
            if (i >= p[s] && i + m[n] <= p[r])
              return (
                (w[s] = i),
                ["element", "target"].forEach(function (t) {
                  g[t][o] = e
                    ? g[t][o] === _e[n][1]
                      ? _e[n][2]
                      : _e[n][1]
                    : g[t][o];
                }),
                !0
              );
          }
        }),
      De(t, w),
      g
    );
  }
  function De(i, n) {
    if (((i = M(i)), !n)) return Oe(i);
    var o = De(i),
      s = de(i, "position");
    ["left", "top"].forEach(function (t) {
      if (t in n) {
        var e = de(i, t);
        i.style[t] =
          n[t] -
          o[t] +
          O("absolute" === s && "auto" === e ? Me(i)[t] : e) +
          "px";
      }
    });
  }
  function Oe(t) {
    var e = qe((t = M(t))),
      i = e.pageYOffset,
      n = e.pageXOffset;
    if (k(t)) {
      var o = t.innerHeight,
        s = t.innerWidth;
      return {
        top: i,
        left: n,
        height: o,
        width: s,
        bottom: i + o,
        right: n + s,
      };
    }
    var r = !1;
    vt(t) || ((r = t.style.display), (t.style.display = "block"));
    var a = t.getBoundingClientRect();
    return (
      !1 !== r && (t.style.display = r),
      {
        height: a.height,
        width: a.width,
        top: a.top + i,
        left: a.left + n,
        bottom: a.bottom + i,
        right: a.right + n,
      }
    );
  }
  function Me(n) {
    var o = (function (t) {
        var e = M(t).offsetParent;
        for (; e && "static" === de(e, "position"); ) e = e.offsetParent;
        return e || Ue(t);
      })((n = M(n))),
      s = o === Ue(n) ? { top: 0, left: 0 } : De(o),
      t = ["top", "left"].reduce(function (t, e) {
        var i = r(e);
        return (
          (t[e] -=
            s[e] +
            (O(de(n, "margin" + i)) || 0) +
            (O(de(o, "border" + i + "Width")) || 0)),
          t
        );
      }, De(n));
    return { top: t.top, left: t.left };
  }
  var He = ze("height"),
    Pe = ze("width");
  function ze(n) {
    var o = r(n);
    return function (t, e) {
      if (((t = M(t)), _(e))) {
        if (k(t)) return t["inner" + o];
        if ($(t)) {
          var i = t.documentElement;
          return Math.max(i["offset" + o], i["scroll" + o]);
        }
        return (
          (e = "auto" === (e = de(t, n)) ? t["offset" + o] : O(e) || 0) -
          Le(n, t)
        );
      }
      de(t, n, e || 0 === e ? +e + Le(n, t) + "px" : "");
    };
  }
  function Le(t, i) {
    return "border-box" === de(i, "boxSizing")
      ? _e[t]
          .slice(1)
          .map(r)
          .reduce(function (t, e) {
            return (
              t + O(de(i, "padding" + e)) + O(de(i, "border" + e + "Width"))
            );
          }, 0)
      : 0;
  }
  function Ve(s, r, a, l) {
    W(_e, function (t, e) {
      var i = t[0],
        n = t[1],
        o = t[2];
      r[i] === o
        ? (s[n] += a[e] * l)
        : "center" === r[i] && (s[n] += (a[e] * l) / 2);
    });
  }
  function je(t) {
    var e = /left|center|right/,
      i = /top|center|bottom/;
    return (
      1 === (t = (t || "").split(" ")).length &&
        (t = e.test(t[0])
          ? t.concat(["center"])
          : i.test(t[0])
          ? ["center"].concat(t)
          : ["center", "center"]),
      { x: e.test(t[0]) ? t[0] : "center", y: i.test(t[1]) ? t[1] : "center" }
    );
  }
  function We(t, e, i) {
    var n = (t || "").split(" "),
      o = n[0],
      s = n[1];
    return {
      x: o ? O(o) * (u(o, "%") ? e / 100 : 1) : 0,
      y: s ? O(s) * (u(s, "%") ? i / 100 : 1) : 0,
    };
  }
  function Fe(t) {
    switch (t) {
      case "left":
        return "right";
      case "right":
        return "left";
      case "top":
        return "bottom";
      case "bottom":
        return "top";
      default:
        return t;
    }
  }
  function Re(t, e, i) {
    void 0 === e && (e = 0), void 0 === i && (i = 0);
    var n = qe((t = M(t)));
    return (
      vt(t) &&
      q(t.getBoundingClientRect(), {
        top: e,
        left: i,
        bottom: e + He(n),
        right: i + Pe(n),
      })
    );
  }
  function qe(t) {
    return k(t) ? t : Ye(t).defaultView;
  }
  function Ye(t) {
    return M(t).ownerDocument;
  }
  function Ue(t) {
    return Ye(t).documentElement;
  }
  var Qe = "rtl" === Q(document.documentElement, "dir"),
    Xe = "ontouchstart" in window,
    Ge = window.PointerEvent,
    Je =
      Xe ||
      (window.DocumentTouch && document instanceof DocumentTouch) ||
      navigator.maxTouchPoints,
    Ke = Je ? "mousedown " + (Xe ? "touchstart" : "pointerdown") : "mousedown",
    Ze = Je ? "mousemove " + (Xe ? "touchmove" : "pointermove") : "mousemove",
    ti = Je ? "mouseup " + (Xe ? "touchend" : "pointerup") : "mouseup",
    ei = Je && Ge ? "pointerenter" : "mouseenter",
    ii = Je && Ge ? "pointerleave" : "mouseleave",
    ni = {
      reads: [],
      writes: [],
      read: function (t) {
        return this.reads.push(t), oi(), t;
      },
      write: function (t) {
        return this.writes.push(t), oi(), t;
      },
      clear: function (t) {
        return ri(this.reads, t) || ri(this.writes, t);
      },
      flush: function () {
        si(this.reads),
          si(this.writes.splice(0, this.writes.length)),
          (this.scheduled = !1),
          (this.reads.length || this.writes.length) && oi();
      },
    };
  function oi() {
    ni.scheduled ||
      ((ni.scheduled = !0), requestAnimationFrame(ni.flush.bind(ni)));
  }
  function si(t) {
    for (var e; (e = t.shift()); ) e();
  }
  function ri(t, e) {
    var i = t.indexOf(e);
    return !!~i && !!t.splice(i, 1);
  }
  function ai() {}
  function li(t, e) {
    return (e.y - t.y) / (e.x - t.x);
  }
  ai.prototype = {
    positions: [],
    position: null,
    init: function () {
      var n = this;
      (this.positions = []), (this.position = null);
      var o = !1;
      this.unbind = kt(document, "mousemove", function (i) {
        o ||
          (setTimeout(function () {
            var t = Date.now(),
              e = n.positions.length;
            e && 100 < t - n.positions[e - 1].time && n.positions.splice(0, e),
              n.positions.push({ time: t, x: i.pageX, y: i.pageY }),
              5 < n.positions.length && n.positions.shift(),
              (o = !1);
          }, 5),
          (o = !0));
      });
    },
    cancel: function () {
      this.unbind && this.unbind();
    },
    movesTo: function (t) {
      if (this.positions.length < 2) return !1;
      var e = De(t),
        i = this.positions[this.positions.length - 1],
        n = this.positions[0];
      if (e.left <= i.x && i.x <= e.right && e.top <= i.y && i.y <= e.bottom)
        return !1;
      var o = [
        [
          { x: e.left, y: e.top },
          { x: e.right, y: e.bottom },
        ],
        [
          { x: e.right, y: e.top },
          { x: e.left, y: e.bottom },
        ],
      ];
      return (
        e.right <= i.x ||
          (e.left >= i.x
            ? (o[0].reverse(), o[1].reverse())
            : e.bottom <= i.y
            ? o[0].reverse()
            : e.top >= i.y && o[1].reverse()),
        !!o.reduce(function (t, e) {
          return t + (li(n, e[0]) < li(i, e[0]) && li(n, e[1]) > li(i, e[1]));
        }, 0)
      );
    },
  };
  var ui = {};
  (ui.args = ui.events = ui.init = ui.created = ui.beforeConnect = ui.connected = ui.ready = ui.beforeDisconnect = ui.disconnected = ui.destroy = function (
    t,
    e
  ) {
    return (
      (t = t && !w(t) ? [t] : t), e ? (t ? t.concat(e) : w(e) ? e : [e]) : t
    );
  }),
    (ui.update = function (t, e) {
      return ui.args(t, y(e) ? { read: e } : e);
    }),
    (ui.props = function (t, e) {
      return (
        w(e) &&
          (e = e.reduce(function (t, e) {
            return (t[e] = String), t;
          }, {})),
        ui.methods(t, e)
      );
    }),
    (ui.computed = ui.defaults = ui.methods = function (t, e) {
      return e ? (t ? j({}, t, e) : e) : t;
    });
  var ci = function (t, e) {
    return _(e) ? t : e;
  };
  function hi(e, i) {
    var n = {};
    if (i.mixins)
      for (var t = 0, o = i.mixins.length; t < o; t++) e = hi(e, i.mixins[t]);
    for (var s in e) a(s);
    for (var r in i) l(e, r) || a(r);
    function a(t) {
      n[t] = (ui[t] || ci)(e[t], i[t]);
    }
    return n;
  }
  var di = 0,
    fi = function (t) {
      (this.id = ++di), (this.el = M(t));
    };
  function pi(t, e) {
    try {
      t.contentWindow.postMessage(
        JSON.stringify(j({ event: "command" }, e)),
        "*"
      );
    } catch (t) {}
  }
  (fi.prototype.isVideo = function () {
    return this.isYoutube() || this.isVimeo() || this.isHTML5();
  }),
    (fi.prototype.isHTML5 = function () {
      return "VIDEO" === this.el.tagName;
    }),
    (fi.prototype.isIFrame = function () {
      return "IFRAME" === this.el.tagName;
    }),
    (fi.prototype.isYoutube = function () {
      return (
        this.isIFrame() &&
        !!this.el.src.match(
          /\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/
        )
      );
    }),
    (fi.prototype.isVimeo = function () {
      return this.isIFrame() && !!this.el.src.match(/vimeo\.com\/video\/.*/);
    }),
    (fi.prototype.enableApi = function () {
      var e = this;
      if (this.ready) return this.ready;
      var i,
        o = this.isYoutube(),
        s = this.isVimeo();
      return o || s
        ? (this.ready = new _t(function (t) {
            var n;
            Ct(e.el, "load", function () {
              if (o) {
                var t = function () {
                  return pi(e.el, { event: "listening", id: e.id });
                };
                (i = setInterval(t, 100)), t();
              }
            }),
              ((n = function (t) {
                return (
                  (o && t.id === e.id && "onReady" === t.event) ||
                  (s && Number(t.player_id) === e.id)
                );
              }),
              new _t(function (i) {
                Ct(
                  window,
                  "message",
                  function (t, e) {
                    return i(e);
                  },
                  !1,
                  function (t) {
                    var e = t.data;
                    if (e && E(e)) {
                      try {
                        e = JSON.parse(e);
                      } catch (t) {
                        return;
                      }
                      return e && n(e);
                    }
                  }
                );
              })).then(function () {
                t(), i && clearInterval(i);
              }),
              Q(
                e.el,
                "src",
                e.el.src +
                  (b(e.el.src, "?") ? "&" : "?") +
                  (o ? "enablejsapi=1" : "api=1&player_id=" + e.id)
              );
          }))
        : _t.resolve();
    }),
    (fi.prototype.play = function () {
      var t = this;
      if (this.isVideo())
        if (this.isIFrame())
          this.enableApi().then(function () {
            return pi(t.el, { func: "playVideo", method: "play" });
          });
        else if (this.isHTML5())
          try {
            var e = this.el.play();
            e && e.catch(R);
          } catch (t) {}
    }),
    (fi.prototype.pause = function () {
      var t = this;
      this.isVideo() &&
        (this.isIFrame()
          ? this.enableApi().then(function () {
              return pi(t.el, { func: "pauseVideo", method: "pause" });
            })
          : this.isHTML5() && this.el.pause());
    }),
    (fi.prototype.mute = function () {
      var t = this;
      this.isVideo() &&
        (this.isIFrame()
          ? this.enableApi().then(function () {
              return pi(t.el, { func: "mute", method: "setVolume", value: 0 });
            })
          : this.isHTML5() && ((this.el.muted = !0), Q(this.el, "muted", "")));
    });
  var gi,
    mi,
    vi,
    wi,
    bi = {};
  function yi() {
    gi && clearTimeout(gi),
      mi && clearTimeout(mi),
      vi && clearTimeout(vi),
      (gi = mi = vi = null),
      (bi = {});
  }
  zt(function () {
    kt(
      document,
      "click",
      function () {
        return (wi = !0);
      },
      !0
    ),
      kt(document, Ke, function (t) {
        var e = t.target,
          i = $i(t),
          n = i.x,
          o = i.y,
          s = Date.now(),
          r = Ci(t.type);
        (bi.type && bi.type !== r) ||
          ((bi.el = "tagName" in e ? e : e.parentNode),
          gi && clearTimeout(gi),
          (bi.x1 = n),
          (bi.y1 = o),
          bi.last && s - bi.last <= 250 && (bi = {}),
          (bi.type = r),
          (bi.last = s),
          (wi = 0 < t.button));
      }),
      kt(document, Ze, function (t) {
        if (!t.defaultPrevented) {
          var e = $i(t),
            i = e.x,
            n = e.y;
          (bi.x2 = i), (bi.y2 = n);
        }
      }),
      kt(document, ti, function (t) {
        var e = t.type,
          i = t.target;
        bi.type === Ci(e) &&
          ((bi.x2 && 30 < Math.abs(bi.x1 - bi.x2)) ||
          (bi.y2 && 30 < Math.abs(bi.y1 - bi.y2))
            ? (mi = setTimeout(function () {
                var t, e, i, n, o;
                bi.el &&
                  (It(bi.el, "swipe"),
                  It(
                    bi.el,
                    "swipe" +
                      ((e = (t = bi).x1),
                      (i = t.x2),
                      (n = t.y1),
                      (o = t.y2),
                      Math.abs(e - i) >= Math.abs(n - o)
                        ? 0 < e - i
                          ? "Left"
                          : "Right"
                        : 0 < n - o
                        ? "Up"
                        : "Down")
                  )),
                  (bi = {});
              }))
            : "last" in bi
            ? ((vi = setTimeout(function () {
                return It(bi.el, "tap");
              })),
              bi.el &&
                "mouseup" !== e &&
                xt(i, bi.el) &&
                (gi = setTimeout(function () {
                  (gi = null), bi.el && !wi && It(bi.el, "click"), (bi = {});
                }, 350)))
            : (bi = {}));
      }),
      kt(document, "touchcancel", yi),
      kt(window, "scroll", yi);
  });
  var xi = !1;
  function ki(t) {
    return xi || "touch" === t.pointerType;
  }
  function $i(t) {
    var e = t.touches,
      i = t.changedTouches,
      n = (e && e[0]) || (i && i[0]) || t;
    return { x: n.pageX, y: n.pageY };
  }
  function Ci(t) {
    return t.slice(0, 5);
  }
  kt(
    document,
    "touchstart",
    function () {
      return (xi = !0);
    },
    !0
  ),
    kt(document, "click", function () {
      xi = !1;
    }),
    kt(
      document,
      "touchcancel",
      function () {
        return (xi = !1);
      },
      !0
    );
  var Ii = Object.freeze({
    ajax: Ht,
    getImage: function (n) {
      return new _t(function (t, e) {
        var i = new Image();
        (i.onerror = e),
          (i.onload = function () {
            return t(i);
          }),
          (i.src = n);
      });
    },
    transition: xe,
    Transition: ke,
    animate: Ie,
    Animation: Se,
    attr: Q,
    hasAttr: X,
    removeAttr: G,
    filterAttr: J,
    data: K,
    addClass: ee,
    removeClass: ie,
    removeClasses: ne,
    replaceClass: oe,
    hasClass: se,
    toggleClass: re,
    $: Ee,
    $$: Ae,
    positionAt: Be,
    offset: De,
    position: Me,
    height: He,
    width: Pe,
    flipPosition: Fe,
    isInView: Re,
    scrolledOver: function (t) {
      if (!vt(t)) return 0;
      var e = qe((t = M(t))),
        i = Ye(t),
        n = t.offsetHeight,
        o = (function (t) {
          for (var e = 0; (e += t.offsetTop), (t = t.offsetParent); );
          return e;
        })(t),
        s = He(e),
        r = s + Math.min(0, o - s),
        a = Math.max(0, s - (He(i) - (o + n)));
      return F(
        (r + e.pageYOffset - o) / ((r + (n - (a < s ? a : 0))) / 100) / 100
      );
    },
    isReady: Pt,
    ready: zt,
    index: Lt,
    getIndex: Vt,
    empty: jt,
    html: Wt,
    prepend: function (e, t) {
      return (e = M(e)).hasChildNodes()
        ? Yt(t, function (t) {
            return e.insertBefore(t, e.firstChild);
          })
        : Ft(e, t);
    },
    append: Ft,
    before: Rt,
    after: qt,
    remove: Ut,
    wrapAll: Qt,
    wrapInner: Xt,
    unwrap: Gt,
    fragment: Zt,
    apply: te,
    isRtl: Qe,
    hasTouch: Je,
    pointerDown: Ke,
    pointerMove: Ze,
    pointerUp: ti,
    pointerEnter: ei,
    pointerLeave: ii,
    on: kt,
    off: $t,
    once: Ct,
    trigger: It,
    createEvent: Tt,
    toEventTargets: Nt,
    preventClick: function () {
      var e = setTimeout(
        Ct(
          document,
          "click",
          function (t) {
            t.preventDefault(), t.stopImmediatePropagation(), clearTimeout(e);
          },
          !0
        )
      );
      It(document, "touchcancel");
    },
    fastdom: ni,
    isVoidElement: mt,
    isVisible: vt,
    selInput: wt,
    isInput: bt,
    filter: yt,
    within: xt,
    bind: p,
    hasOwn: l,
    hyphenate: g,
    camelize: m,
    ucfirst: r,
    startsWith: v,
    endsWith: u,
    includes: b,
    isArray: w,
    isFunction: y,
    isObject: f,
    isPlainObject: x,
    isWindow: k,
    isDocument: $,
    isJQuery: C,
    isNode: I,
    isNodeCollection: T,
    isBoolean: S,
    isString: E,
    isNumber: A,
    isNumeric: N,
    isUndefined: _,
    toBoolean: B,
    toNumber: D,
    toFloat: O,
    toNode: M,
    toNodes: P,
    toList: z,
    toMs: L,
    swap: V,
    assign: j,
    each: W,
    sortBy: function (t, i) {
      return t.sort(function (t, e) {
        return t[i] - e[i];
      });
    },
    clamp: F,
    noop: R,
    intersectRect: q,
    pointInRect: Y,
    Dimensions: U,
    MouseTracker: ai,
    mergeOptions: hi,
    Player: fi,
    Promise: _t,
    Deferred: function () {
      var i = this;
      this.promise = new _t(function (t, e) {
        (i.reject = e), (i.resolve = t);
      });
    },
    query: Z,
    queryAll: tt,
    find: et,
    findAll: it,
    matches: ut,
    closest: ht,
    parents: dt,
    escape: pt,
    css: de,
    getStyles: fe,
    getStyle: pe,
    getCssVar: me,
    propName: we,
    isTouch: ki,
    getPos: $i,
  });
  function Ti(t) {
    return (
      !(!v(t, "uk-") && !v(t, "data-uk-")) &&
      m(t.replace("data-uk-", "").replace("uk-", ""))
    );
  }
  var Si,
    Ei,
    Ai,
    Ni,
    _i,
    Bi = function (t) {
      this._init(t);
    };
  (Bi.util = Ii),
    (Bi.data = "__uikit__"),
    (Bi.prefix = "uk-"),
    (Bi.options = {}),
    (function (i) {
      var e,
        n = i.data;
      function o(t, e) {
        if (t) for (var i in t) t[i]._isReady && t[i]._callUpdate(e);
      }
      (i.use = function (t) {
        if (!t.installed) return t.call(null, this), (t.installed = !0), this;
      }),
        (i.mixin = function (t, e) {
          (e = (E(e) ? i.components[e] : e) || this),
            ((t = hi({}, t)).mixins = e.options.mixins),
            delete e.options.mixins,
            (e.options = hi(t, e.options));
        }),
        (i.extend = function (t) {
          t = t || {};
          var e = function (t) {
            this._init(t);
          };
          return (
            (((e.prototype = Object.create(
              this.prototype
            )).constructor = e).options = hi(this.options, t)),
            (e.super = this),
            (e.extend = this.extend),
            e
          );
        }),
        (i.update = function (t, e) {
          for (
            e = Tt(e || "update"),
              te((t = t ? M(t) : document.body), function (t) {
                return o(t[n], e);
              });
            t && t.parentNode;

          )
            o(t.parentNode[n], e), (t = t.parentNode);
        }),
        Object.defineProperty(i, "container", {
          get: function () {
            return e || document.body;
          },
          set: function (t) {
            e = Ee(t);
          },
        });
    })(Bi),
    ((Si = Bi).prototype._callHook = function (t) {
      var e = this,
        i = this.$options[t];
      i &&
        i.forEach(function (t) {
          return t.call(e);
        });
    }),
    (Si.prototype._callConnected = function () {
      var t = this;
      this._connected ||
        ((this._data = {}),
        this._callHook("beforeConnect"),
        (this._connected = !0),
        this._initEvents(),
        this._initObserver(),
        this._callHook("connected"),
        this._isReady ||
          zt(function () {
            return t._callReady();
          }),
        this._callUpdate());
    }),
    (Si.prototype._callDisconnected = function () {
      this._connected &&
        (this._callHook("beforeDisconnect"),
        this._observer &&
          (this._observer.disconnect(), (this._observer = null)),
        this._unbindEvents(),
        this._callHook("disconnected"),
        (this._connected = !1));
    }),
    (Si.prototype._callReady = function () {
      this._isReady ||
        ((this._isReady = !0),
        this._callHook("ready"),
        this._resetComputeds(),
        this._callUpdate());
    }),
    (Si.prototype._callUpdate = function (s) {
      var r = this,
        a = (s = Tt(s || "update")).type;
      b(["update", "load", "resize"], a) && this._resetComputeds();
      var t = this.$options.update,
        e = this._frames,
        l = e.reads,
        u = e.writes;
      t &&
        t.forEach(function (t, e) {
          var i = t.read,
            n = t.write,
            o = t.events;
          ("update" === a || b(o, a)) &&
            (i &&
              !b(ni.reads, l[e]) &&
              (l[e] = ni.read(function () {
                var t = i.call(r, r._data, s);
                !1 === t && n
                  ? (ni.clear(u[e]), delete u[e])
                  : x(t) && j(r._data, t),
                  delete l[e];
              })),
            n &&
              !b(ni.writes, u[e]) &&
              (u[e] = ni.write(function () {
                n.call(r, r._data, s), delete u[e];
              })));
        });
    }),
    (function (e) {
      var i = 0;
      function s(t, e) {
        var i = {},
          n = t.args;
        void 0 === n && (n = []);
        var o = t.props;
        void 0 === o && (o = {});
        var s = t.el;
        if (!o) return i;
        for (var r in o) {
          var a = g(r);
          if (X(s, a)) {
            var l = f(o[r], Q(s, a), s);
            if ("target" === a && (!l || v(l, "_"))) continue;
            i[r] = l;
          }
        }
        var u = (function (t, e) {
          var i;
          void 0 === e && (e = []);
          try {
            return t
              ? v(t, "{")
                ? JSON.parse(t)
                : e.length && !b(t, ":")
                ? (((i = {})[e[0]] = t), i)
                : t.split(";").reduce(function (t, e) {
                    var i = e.split(/:(.+)/),
                      n = i[0],
                      o = i[1];
                    return n && o && (t[n.trim()] = o.trim()), t;
                  }, {})
              : {};
          } catch (t) {
            return {};
          }
        })(K(s, e), n);
        for (var c in u) {
          var h = m(c);
          void 0 !== o[h] && (i[h] = f(o[h], u[c], s));
        }
        return i;
      }
      function n(n, o, s) {
        Object.defineProperty(n, o, {
          enumerable: !0,
          get: function () {
            var t = n._computeds,
              e = n.$props,
              i = n.$el;
            return l(t, o) || (t[o] = s.call(n, e, i)), t[o];
          },
          set: function (t) {
            n._computeds[o] = t;
          },
        });
      }
      function d(e, i, n) {
        x(i) || (i = { name: n, handler: i });
        var o,
          s,
          t = i.name,
          r = i.el,
          a = i.handler,
          l = i.capture,
          u = i.delegate,
          c = i.filter,
          h = i.self;
        (r = y(r) ? r.call(e) : r || e.$el),
          w(r)
            ? r.forEach(function (t) {
                return d(e, j({}, i, { el: t }), n);
              })
            : !r ||
              (c && !c.call(e)) ||
              ((o = E(a) ? e[a] : p(a, e)),
              (a = function (t) {
                return w(t.detail)
                  ? o.apply(void 0, [t].concat(t.detail))
                  : o(t);
              }),
              h &&
                ((s = a),
                (a = function (t) {
                  if (t.target === t.currentTarget || t.target === t.current)
                    return s.call(null, t);
                })),
              e._events.push(
                kt(r, t, u ? (E(u) ? u : u.call(e)) : null, a, l)
              ));
      }
      function o(t, e) {
        return t.every(function (t) {
          return !t || !l(t, e);
        });
      }
      function f(t, e, i) {
        return t === Boolean
          ? B(e)
          : t === Number
          ? D(e)
          : "query" === t
          ? Z(e, i)
          : "list" === t
          ? z(e)
          : "media" === t
          ? (function (t) {
              if (E(t))
                if ("@" === t[0]) {
                  var e = "media-" + t.substr(1);
                  t = O(me(e));
                } else if (isNaN(t)) return t;
              return !(!t || isNaN(t)) && "(min-width: " + t + "px)";
            })(e)
          : t
          ? t(e)
          : e;
      }
      (e.prototype.props = {}),
        (e.prototype._init = function (t) {
          (t = t || {}),
            (t = this.$options = hi(this.constructor.options, t)),
            (this.$el = null),
            (this.$name = e.prefix + g(this.$options.name)),
            (this.$props = {}),
            (this._frames = { reads: {}, writes: {} }),
            (this._events = []),
            (this._uid = i++),
            this._initData(),
            this._initMethods(),
            this._initComputeds(),
            this._callHook("created"),
            t.el && this.$mount(t.el);
        }),
        (e.prototype._initData = function () {
          var t = this.$options,
            e = t.defaults,
            i = t.data;
          void 0 === i && (i = {});
          var n = t.args;
          void 0 === n && (n = []);
          var o = t.props;
          void 0 === o && (o = {});
          var s = t.el;
          for (var r in (n.length &&
            w(i) &&
            (i = i.slice(0, n.length).reduce(function (t, e, i) {
              return x(e) ? j(t, e) : (t[n[i]] = e), t;
            }, {})),
          j({}, e, o)))
            this.$props[r] = this[r] =
              l(i, r) && !_(i[r])
                ? f(o[r], i[r], s)
                : e
                ? e[r] && w(e[r])
                  ? e[r].concat()
                  : e[r]
                : null;
        }),
        (e.prototype._initMethods = function () {
          var t = this.$options.methods;
          if (t) for (var e in t) this[e] = p(t[e], this);
        }),
        (e.prototype._initComputeds = function () {
          var t = this.$options.computed;
          if ((this._resetComputeds(), t)) for (var e in t) n(this, e, t[e]);
        }),
        (e.prototype._resetComputeds = function () {
          this._computeds = {};
        }),
        (e.prototype._initProps = function (t) {
          var e;
          for (e in (this._resetComputeds(),
          (t = t || s(this.$options, this.$name))))
            _(t[e]) || (this.$props[e] = t[e]);
          var i = [this.$options.computed, this.$options.methods];
          for (e in this.$props)
            e in t && o(i, e) && (this[e] = this.$props[e]);
        }),
        (e.prototype._initEvents = function () {
          var i = this,
            t = this.$options.events;
          t &&
            t.forEach(function (t) {
              if (l(t, "handler")) d(i, t);
              else for (var e in t) d(i, t[e], e);
            });
        }),
        (e.prototype._unbindEvents = function () {
          this._events.forEach(function (t) {
            return t();
          }),
            (this._events = []);
        }),
        (e.prototype._initObserver = function () {
          var i = this,
            t = this.$options,
            n = t.attrs,
            e = t.props,
            o = t.el;
          !this._observer &&
            e &&
            n &&
            ((n = w(n)
              ? n
              : Object.keys(e).map(function (t) {
                  return g(t);
                })),
            (this._observer = new MutationObserver(function () {
              var e = s(i.$options, i.$name);
              n.some(function (t) {
                return !_(e[t]) && e[t] !== i.$props[t];
              }) && i.$reset(e);
            })),
            this._observer.observe(o, {
              attributes: !0,
              attributeFilter: n.concat([this.$name, "data-" + this.$name]),
            }));
        });
    })(Bi),
    (Ai = (Ei = Bi).data),
    (Ei.prototype.$mount = function (t) {
      var e = this.$options.name;
      t[Ai] || (t[Ai] = {}),
        t[Ai][e] ||
          (((t[Ai][e] = this).$el = this.$options.el = this.$options.el || t),
          this._initProps(),
          this._callHook("init"),
          xt(t, document) && this._callConnected());
    }),
    (Ei.prototype.$emit = function (t) {
      this._callUpdate(t);
    }),
    (Ei.prototype.$reset = function (t) {
      this._callDisconnected(), this._initProps(t), this._callConnected();
    }),
    (Ei.prototype.$destroy = function (t) {
      void 0 === t && (t = !1);
      var e = this.$options,
        i = e.el,
        n = e.name;
      i && this._callDisconnected(),
        this._callHook("destroy"),
        i &&
          i[Ai] &&
          (delete i[Ai][n],
          Object.keys(i[Ai]).length || delete i[Ai],
          t && Ut(this.$el));
    }),
    (_i = (Ni = Bi).data),
    (Ni.components = {}),
    (Ni.component = function (t, e) {
      var s = m(t);
      if (x(e)) (e.name = s), (e = Ni.extend(e));
      else {
        if (_(e)) return Ni.components[s];
        e.options.name = s;
      }
      return (
        (Ni.components[s] = e),
        (Ni[s] = function (t, i) {
          for (var e = arguments.length, n = Array(e); e--; )
            n[e] = arguments[e];
          return x(t)
            ? new Ni.components[s]({ data: t })
            : Ni.components[s].options.functional
            ? new Ni.components[s]({ data: [].concat(n) })
            : t && t.nodeType
            ? o(t)
            : Ae(t).map(o)[0];
          function o(t) {
            var e = Ni.getComponent(t, s);
            return (
              e && i && e.$reset(i),
              e || new Ni.components[s]({ el: t, data: i || {} })
            );
          }
        }),
        Ni._initialized &&
          !e.options.functional &&
          ni.read(function () {
            return Ni[s]("[uk-" + t + "],[data-uk-" + t + "]");
          }),
        Ni.components[s]
      );
    }),
    (Ni.getComponents = function (t) {
      return (t && t[_i]) || {};
    }),
    (Ni.getComponent = function (t, e) {
      return Ni.getComponents(t)[e];
    }),
    (Ni.connect = function (t) {
      if (t[_i]) for (var e in t[_i]) t[_i][e]._callConnected();
      for (var i = 0; i < t.attributes.length; i++) {
        var n = Ti(t.attributes[i].name);
        n && n in Ni.components && Ni[n](t);
      }
    }),
    (Ni.disconnect = function (t) {
      for (var e in t[_i]) t[_i][e]._callDisconnected();
    });
  var Di,
    Oi,
    Mi = {
      init: function () {
        ee(this.$el, this.$name);
      },
    },
    Hi = {
      props: { container: Boolean },
      defaults: { container: !0 },
      computed: {
        container: function (t) {
          var e = t.container;
          return (!0 === e && Bi.container) || (e && Ee(e));
        },
      },
    },
    Pi = {
      props: {
        cls: Boolean,
        animation: "list",
        duration: Number,
        origin: String,
        transition: String,
        queued: Boolean,
      },
      defaults: {
        cls: !1,
        animation: [!1],
        duration: 200,
        origin: !1,
        transition: "linear",
        queued: !1,
        initProps: {
          overflow: "",
          height: "",
          paddingTop: "",
          paddingBottom: "",
          marginTop: "",
          marginBottom: "",
        },
        hideProps: {
          overflow: "hidden",
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
          marginTop: 0,
          marginBottom: 0,
        },
      },
      computed: {
        hasAnimation: function (t) {
          return !!t.animation[0];
        },
        hasTransition: function (t) {
          var e = t.animation;
          return this.hasAnimation && !0 === e[0];
        },
      },
      methods: {
        toggleElement: function (u, c, h) {
          var d = this;
          return new _t(function (t) {
            u = P(u);
            var e,
              i = function (t) {
                return _t.all(
                  t.map(function (t) {
                    return d._toggleElement(t, c, h);
                  })
                );
              },
              n = u.filter(function (t) {
                return d.isToggled(t);
              }),
              o = u.filter(function (t) {
                return !b(n, t);
              });
            if (d.queued && _(h) && _(c) && d.hasAnimation && !(u.length < 2)) {
              var s = document.body,
                r = s.scrollTop,
                a = n[0],
                l =
                  (Se.inProgress(a) && se(a, "uk-animation-leave")) ||
                  (ke.inProgress(a) && "0px" === a.style.height);
              (e = i(n)),
                l ||
                  (e = e.then(function () {
                    var t = i(o);
                    return (s.scrollTop = r), t;
                  }));
            } else e = i(o.concat(n));
            e.then(t, R);
          });
        },
        toggleNow: function (e, i) {
          var n = this;
          return new _t(function (t) {
            return _t
              .all(
                P(e).map(function (t) {
                  return n._toggleElement(t, i, !1);
                })
              )
              .then(t, R);
          });
        },
        isToggled: function (t) {
          var e = P(t || this.$el);
          return this.cls ? se(e, this.cls.split(" ")[0]) : !X(e, "hidden");
        },
        updateAria: function (t) {
          !1 === this.cls && Q(t, "aria-hidden", !this.isToggled(t));
        },
        _toggleElement: function (t, e, i) {
          var n = this;
          if (
            ((e = S(e)
              ? e
              : Se.inProgress(t)
              ? se(t, "uk-animation-leave")
              : ke.inProgress(t)
              ? "0px" === t.style.height
              : !this.isToggled(t)),
            !It(t, "before" + (e ? "show" : "hide"), [this]))
          )
            return _t.reject();
          var o = (!1 !== i && this.hasAnimation
            ? this.hasTransition
              ? this._toggleHeight
              : this._toggleAnimation
            : this._toggleImmediate)(t, e);
          return (
            It(t, e ? "show" : "hide", [this]),
            o.then(function () {
              It(t, e ? "shown" : "hidden", [n]), It(t, "resize");
            })
          );
        },
        _toggle: function (t, e) {
          var i;
          t &&
            (this.cls
              ? (i = b(this.cls, " ") || Boolean(e) !== se(t, this.cls)) &&
                re(t, this.cls, b(this.cls, " ") ? void 0 : e)
              : (i = Boolean(e) === X(t, "hidden")) &&
                Q(t, "hidden", e ? null : ""),
            Ae("[autofocus]", t).some(function (t) {
              return vt(t) && (t.focus() || !0);
            }),
            this.updateAria(t),
            i && It(t, "resize"));
        },
        _toggleImmediate: function (t, e) {
          return this._toggle(t, e), _t.resolve();
        },
        _toggleHeight: function (t, e) {
          var i = this,
            n = ke.inProgress(t),
            o = t.hasChildNodes
              ? O(de(t.firstElementChild, "marginTop")) +
                O(de(t.lastElementChild, "marginBottom"))
              : 0,
            s = vt(t) ? He(t) + (n ? 0 : o) : 0;
          ke.cancel(t),
            this.isToggled(t) || this._toggle(t, !0),
            He(t, ""),
            ni.flush();
          var r = He(t) + (n ? 0 : o);
          return (
            He(t, s),
            (e
              ? ke.start(
                  t,
                  j({}, this.initProps, { overflow: "hidden", height: r }),
                  Math.round(this.duration * (1 - s / r)),
                  this.transition
                )
              : ke
                  .start(
                    t,
                    this.hideProps,
                    Math.round(this.duration * (s / r)),
                    this.transition
                  )
                  .then(function () {
                    return i._toggle(t, !1);
                  })
            ).then(function () {
              return de(t, i.initProps);
            })
          );
        },
        _toggleAnimation: function (t, e) {
          var i = this;
          return (
            Se.cancel(t),
            e
              ? (this._toggle(t, !0),
                Se.in(t, this.animation[0], this.duration, this.origin))
              : Se.out(
                  t,
                  this.animation[1] || this.animation[0],
                  this.duration,
                  this.origin
                ).then(function () {
                  return i._toggle(t, !1);
                })
          );
        },
      },
    },
    zi = {
      mixins: [Mi, Hi, Pi],
      props: {
        selPanel: String,
        selClose: String,
        escClose: Boolean,
        bgClose: Boolean,
        stack: Boolean,
      },
      defaults: {
        cls: "uk-open",
        escClose: !0,
        bgClose: !0,
        overlay: !0,
        stack: !1,
      },
      computed: {
        panel: function (t, e) {
          return Ee(t.selPanel, e);
        },
        transitionElement: function () {
          return this.panel;
        },
        transitionDuration: function () {
          return L(de(this.transitionElement, "transitionDuration"));
        },
      },
      events: [
        {
          name: "click",
          delegate: function () {
            return this.selClose;
          },
          handler: function (t) {
            t.preventDefault(), this.hide();
          },
        },
        {
          name: "toggle",
          self: !0,
          handler: function (t) {
            t.defaultPrevented || (t.preventDefault(), this.toggle());
          },
        },
        {
          name: "beforeshow",
          self: !0,
          handler: function (t) {
            var e = Di && Di !== this && Di;
            if (((Di = this), e)) {
              if (!this.stack)
                return e.hide().then(this.show), void t.preventDefault();
              this.prev = e;
            }
            !(function () {
              if (Oi) return;
              Oi = [
                kt(document, "click", function (t) {
                  var e = t.target,
                    i = t.defaultPrevented;
                  !Di ||
                    !Di.bgClose ||
                    i ||
                    (Di.overlay && !xt(e, Di.$el)) ||
                    (Di.panel && xt(e, Di.panel)) ||
                    Di.hide();
                }),
                kt(document, "keydown", function (t) {
                  27 === t.keyCode &&
                    Di &&
                    Di.escClose &&
                    (t.preventDefault(), Di.hide());
                }),
              ];
            })();
          },
        },
        {
          name: "beforehide",
          self: !0,
          handler: function () {
            (Di = (Di && Di !== this && Di) || this.prev) ||
              (Oi &&
                Oi.forEach(function (t) {
                  return t();
                }),
              (Oi = null));
          },
        },
        {
          name: "show",
          self: !0,
          handler: function () {
            se(document.documentElement, this.clsPage) ||
              ((this.scrollbarWidth = Pe(window) - Pe(document)),
              de(
                document.body,
                "overflowY",
                this.scrollbarWidth && this.overlay ? "scroll" : ""
              )),
              ee(document.documentElement, this.clsPage);
          },
        },
        {
          name: "hidden",
          self: !0,
          handler: function () {
            for (var t, e = this.prev; e; ) {
              if (e.clsPage === this.clsPage) {
                t = !0;
                break;
              }
              e = e.prev;
            }
            t || ie(document.documentElement, this.clsPage),
              !this.prev && de(document.body, "overflowY", "");
          },
        },
      ],
      methods: {
        toggle: function () {
          return this.isToggled() ? this.hide() : this.show();
        },
        show: function () {
          if (!this.isToggled())
            return (
              this.container &&
                this.$el.parentNode !== this.container &&
                (Ft(this.container, this.$el), this._callConnected()),
              this.toggleNow(this.$el, !0)
            );
        },
        hide: function () {
          if (this.isToggled()) return this.toggleNow(this.$el, !1);
        },
        getActive: function () {
          return Di;
        },
        _toggleImmediate: function (e, i) {
          var n = this;
          return new _t(function (t) {
            return requestAnimationFrame(function () {
              n._toggle(e, i),
                n.transitionDuration
                  ? Ct(n.transitionElement, "transitionend", t, !1, function (
                      t
                    ) {
                      return t.target === n.transitionElement;
                    })
                  : t();
            });
          });
        },
      },
    };
  var Li = {
    props: { pos: String, offset: null, flip: Boolean, clsPos: String },
    defaults: {
      pos: "bottom-" + (Qe ? "right" : "left"),
      flip: !0,
      offset: !1,
      clsPos: "",
    },
    computed: {
      pos: function (t) {
        var e = t.pos;
        return (e + (b(e, "-") ? "" : "-center")).split("-");
      },
      dir: function () {
        return this.pos[0];
      },
      align: function () {
        return this.pos[1];
      },
    },
    methods: {
      positionAt: function (t, e, i) {
        var n;
        ne(t, this.clsPos + "-(top|bottom|left|right)(-[a-z]+)?"),
          de(t, { top: "", left: "" });
        var o = this.offset;
        o = N(o)
          ? o
          : (n = Ee(o))
          ? De(n)["x" === s ? "left" : "top"] -
            De(e)["x" === s ? "right" : "bottom"]
          : 0;
        var s = this.getAxis(),
          r = Be(
            t,
            e,
            "x" === s
              ? Fe(this.dir) + " " + this.align
              : this.align + " " + Fe(this.dir),
            "x" === s
              ? this.dir + " " + this.align
              : this.align + " " + this.dir,
            "x" === s
              ? "" + ("left" === this.dir ? -o : o)
              : " " + ("top" === this.dir ? -o : o),
            null,
            this.flip,
            i
          ).target,
          a = r.x,
          l = r.y;
        (this.dir = "x" === s ? a : l),
          (this.align = "x" === s ? l : a),
          re(
            t,
            this.clsPos + "-" + this.dir + "-" + this.align,
            !1 === this.offset
          );
      },
      getAxis: function () {
        return "top" === this.dir || "bottom" === this.dir ? "y" : "x";
      },
    },
  };
  function Vi(t) {
    t.component("accordion", {
      mixins: [Mi, Pi],
      props: {
        targets: String,
        active: null,
        collapsible: Boolean,
        multiple: Boolean,
        toggle: String,
        content: String,
        transition: String,
      },
      defaults: {
        targets: "> *",
        active: !1,
        animation: [!0],
        collapsible: !0,
        multiple: !1,
        clsOpen: "uk-open",
        toggle: "> .uk-accordion-title",
        content: "> .uk-accordion-content",
        transition: "ease",
      },
      computed: {
        items: function (t, e) {
          return Ae(t.targets, e);
        },
      },
      events: [
        {
          name: "click",
          delegate: function () {
            return this.targets + " " + this.$props.toggle;
          },
          handler: function (t) {
            t.preventDefault(),
              this.toggle(
                Lt(
                  Ae(this.targets + " " + this.$props.toggle, this.$el),
                  t.current
                )
              );
          },
        },
      ],
      connected: function () {
        if (!1 !== this.active) {
          var t = this.items[Number(this.active)];
          t && !se(t, this.clsOpen) && this.toggle(t, !1);
        }
      },
      update: function () {
        var e = this;
        this.items.forEach(function (t) {
          return e._toggleImmediate(Ee(e.content, t), se(t, e.clsOpen));
        });
        var t =
          !this.collapsible && !se(this.items, this.clsOpen) && this.items[0];
        t && this.toggle(t, !1);
      },
      methods: {
        toggle: function (o, s) {
          var r = this,
            t = Vt(o, this.items),
            a = yt(this.items, "." + this.clsOpen);
          (o = this.items[t]) &&
            [o]
              .concat((!this.multiple && !b(a, o) && a) || [])
              .forEach(function (t) {
                var e = t === o,
                  i = e && !se(t, r.clsOpen);
                if (i || !e || r.collapsible || !(a.length < 2)) {
                  re(t, r.clsOpen, i);
                  var n = t._wrapper
                    ? t._wrapper.firstElementChild
                    : Ee(r.content, t);
                  t._wrapper ||
                    ((t._wrapper = Qt(n, "<div>")),
                    Q(t._wrapper, "hidden", i ? "" : null)),
                    r._toggleImmediate(n, !0),
                    r.toggleElement(t._wrapper, i, s).then(function () {
                      se(t, r.clsOpen) === i &&
                        (i || r._toggleImmediate(n, !1),
                        (t._wrapper = null),
                        Gt(n));
                    });
                }
              });
        },
      },
    });
  }
  function ji(t) {
    t.component("alert", {
      attrs: !0,
      mixins: [Mi, Pi],
      args: "animation",
      props: { close: String },
      defaults: {
        animation: [!0],
        selClose: ".uk-alert-close",
        duration: 150,
        hideProps: j({ opacity: 0 }, Pi.defaults.hideProps),
      },
      events: [
        {
          name: "click",
          delegate: function () {
            return this.selClose;
          },
          handler: function (t) {
            t.preventDefault(), this.close();
          },
        },
      ],
      methods: {
        close: function () {
          var t = this;
          this.toggleElement(this.$el).then(function () {
            return t.$destroy(!0);
          });
        },
      },
    });
  }
  function Wi(o) {
    zt(function () {
      var e = 0,
        i = 0;
      if (
        (kt(window, "load resize", function (t) {
          return o.update(null, t);
        }),
        kt(window, "scroll", function (t) {
          (t.dir = e <= window.pageYOffset ? "down" : "up"),
            (t.scrollY = e = window.pageYOffset),
            o.update(null, t);
        }),
        kt(
          document,
          "animationstart",
          function (t) {
            var e = t.target;
            (de(e, "animationName") || "").match(/^uk-.*(left|right)/) &&
              (i++,
              de(document.body, "overflowX", "hidden"),
              setTimeout(function () {
                --i || de(document.body, "overflowX", "");
              }, L(de(e, "animationDuration")) + 100));
          },
          !0
        ),
        Je)
      ) {
        var n = "uk-hover";
        kt(document, "tap", function (t) {
          var e = t.target;
          return Ae("." + n).forEach(function (t) {
            return !xt(e, t) && ie(t, n);
          });
        }),
          Object.defineProperty(o, "hoverSelector", {
            set: function (t) {
              kt(document, "tap", t, function (t) {
                return ee(t.current, n);
              });
            },
          }),
          (o.hoverSelector =
            ".uk-animation-toggle, .uk-transition-toggle, [uk-hover]");
      }
    });
  }
  function Fi(t) {
    t.component("cover", {
      mixins: [Mi, t.components.video.options],
      props: { width: Number, height: Number },
      defaults: { automute: !0 },
      update: {
        write: function () {
          var t = this.$el;
          if (vt(t)) {
            var e = t.parentNode,
              i = e.offsetHeight,
              n = e.offsetWidth;
            de(
              de(t, { width: "", height: "" }),
              U.cover(
                {
                  width: this.width || t.clientWidth,
                  height: this.height || t.clientHeight,
                },
                { width: n + (n % 2 ? 1 : 0), height: i + (i % 2 ? 1 : 0) }
              )
            );
          }
        },
        events: ["load", "resize"],
      },
      events: {
        loadedmetadata: function () {
          this.$emit();
        },
      },
    });
  }
  function Ri(e) {
    var s, t;
    e.component("drop", {
      mixins: [Li, Pi],
      args: "pos",
      props: {
        mode: "list",
        toggle: Boolean,
        boundary: "query",
        boundaryAlign: Boolean,
        delayShow: Number,
        delayHide: Number,
        clsDrop: String,
      },
      defaults: {
        mode: ["click", "hover"],
        toggle: !0,
        boundary: window,
        boundaryAlign: !1,
        delayShow: 0,
        delayHide: 800,
        clsDrop: !1,
        hoverIdle: 200,
        animation: ["uk-animation-fade"],
        cls: "uk-open",
      },
      computed: {
        clsDrop: function (t) {
          var e = t.clsDrop;
          return e || "uk-" + this.$options.name;
        },
        clsPos: function () {
          return this.clsDrop;
        },
      },
      init: function () {
        (this.tracker = new ai()), ee(this.$el, this.clsDrop);
      },
      connected: function () {
        var t = this.$props.toggle;
        (this.toggle =
          t &&
          e.toggle(E(t) ? Z(t, this.$el) : this.$el.previousElementSibling, {
            target: this.$el,
            mode: this.mode,
          })),
          this.updateAria(this.$el);
      },
      events: [
        {
          name: "click",
          delegate: function () {
            return "." + this.clsDrop + "-close";
          },
          handler: function (t) {
            t.preventDefault(), this.hide(!1);
          },
        },
        {
          name: "click",
          delegate: function () {
            return 'a[href^="#"]';
          },
          handler: function (t) {
            if (!t.defaultPrevented) {
              var e = t.target.hash;
              e || t.preventDefault(), (e && xt(e, this.$el)) || this.hide(!1);
            }
          },
        },
        {
          name: "beforescroll",
          handler: function () {
            this.hide(!1);
          },
        },
        {
          name: "toggle",
          self: !0,
          handler: function (t, e) {
            t.preventDefault(),
              this.isToggled() ? this.hide(!1) : this.show(e, !1);
          },
        },
        {
          name: ei,
          filter: function () {
            return b(this.mode, "hover");
          },
          handler: function (t) {
            ki(t) ||
              (s &&
                s !== this &&
                s.toggle &&
                b(s.toggle.mode, "hover") &&
                !xt(t.target, s.toggle.$el) &&
                !Y({ x: t.pageX, y: t.pageY }, De(s.$el)) &&
                s.hide(!1),
              t.preventDefault(),
              this.show(this.toggle));
          },
        },
        {
          name: "toggleshow",
          handler: function (t, e) {
            (e && !b(e.target, this.$el)) ||
              (t.preventDefault(), this.show(e || this.toggle));
          },
        },
        {
          name: "togglehide " + ii,
          handler: function (t, e) {
            ki(t) ||
              (e && !b(e.target, this.$el)) ||
              (t.preventDefault(),
              this.toggle && b(this.toggle.mode, "hover") && this.hide());
          },
        },
        {
          name: "beforeshow",
          self: !0,
          handler: function () {
            this.clearTimers(), Se.cancel(this.$el), this.position();
          },
        },
        {
          name: "show",
          self: !0,
          handler: function () {
            this.tracker.init(),
              this.toggle &&
                (ee(this.toggle.$el, this.cls),
                Q(this.toggle.$el, "aria-expanded", "true")),
              (function () {
                if (t) return;
                (t = !0),
                  kt(document, "click", function (t) {
                    var e,
                      i = t.target,
                      n = t.defaultPrevented;
                    if (!n)
                      for (
                        ;
                        s &&
                        s !== e &&
                        !xt(i, s.$el) &&
                        (!s.toggle || !xt(i, s.toggle.$el));

                      )
                        (e = s).hide(!1);
                  });
              })();
          },
        },
        {
          name: "beforehide",
          self: !0,
          handler: function () {
            this.clearTimers();
          },
        },
        {
          name: "hide",
          handler: function (t) {
            var e = t.target;
            this.$el === e
              ? ((s = this.isActive() ? null : s),
                this.toggle &&
                  (ie(this.toggle.$el, this.cls),
                  Q(this.toggle.$el, "aria-expanded", "false"),
                  this.toggle.$el.blur(),
                  Ae("a, button", this.toggle.$el).forEach(function (t) {
                    return t.blur();
                  })),
                this.tracker.cancel())
              : (s =
                  null === s && xt(e, this.$el) && this.isToggled() ? this : s);
          },
        },
      ],
      update: {
        write: function () {
          this.isToggled() && !Se.inProgress(this.$el) && this.position();
        },
        events: ["resize"],
      },
      methods: {
        show: function (e, i) {
          var n = this;
          void 0 === i && (i = !0);
          var o = function () {
              return !n.isToggled() && n.toggleElement(n.$el, !0);
            },
            t = function () {
              if (((n.toggle = e || n.toggle), n.clearTimers(), !n.isActive()))
                if (i && s && s !== n && s.isDelaying)
                  n.showTimer = setTimeout(n.show, 10);
                else {
                  if (n.isParentOf(s)) {
                    if (!s.hideTimer) return;
                    s.hide(!1);
                  } else if (s && !n.isChildOf(s) && !n.isParentOf(s))
                    for (var t; s && s !== t && !n.isChildOf(s); )
                      (t = s).hide(!1);
                  i && n.delayShow
                    ? (n.showTimer = setTimeout(o, n.delayShow))
                    : o(),
                    (s = n);
                }
            };
          e && this.toggle && e.$el !== this.toggle.$el
            ? (Ct(this.$el, "hide", t), this.hide(!1))
            : t();
        },
        hide: function (t) {
          var e = this;
          void 0 === t && (t = !0);
          var i = function () {
            return e.toggleNow(e.$el, !1);
          };
          this.clearTimers(),
            (this.isDelaying = this.tracker.movesTo(this.$el)),
            t && this.isDelaying
              ? (this.hideTimer = setTimeout(this.hide, this.hoverIdle))
              : t && this.delayHide
              ? (this.hideTimer = setTimeout(i, this.delayHide))
              : i();
        },
        clearTimers: function () {
          clearTimeout(this.showTimer),
            clearTimeout(this.hideTimer),
            (this.showTimer = null),
            (this.hideTimer = null),
            (this.isDelaying = !1);
        },
        isActive: function () {
          return s === this;
        },
        isChildOf: function (t) {
          return t && t !== this && xt(this.$el, t.$el);
        },
        isParentOf: function (t) {
          return t && t !== this && xt(t.$el, this.$el);
        },
        position: function () {
          ne(this.$el, this.clsDrop + "-(stack|boundary)"),
            de(this.$el, { top: "", left: "", display: "block" }),
            re(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);
          var t = De(this.boundary),
            e = this.boundaryAlign ? t : De(this.toggle.$el);
          if ("justify" === this.align) {
            var i = "y" === this.getAxis() ? "width" : "height";
            de(this.$el, i, e[i]);
          } else
            this.$el.offsetWidth >
              Math.max(t.right - e.left, e.right - t.left) &&
              ee(this.$el, this.clsDrop + "-stack");
          this.positionAt(
            this.$el,
            this.boundaryAlign ? this.boundary : this.toggle.$el,
            this.boundary
          ),
            de(this.$el, "display", "");
        },
      },
    }),
      (e.drop.getActive = function () {
        return s;
      });
  }
  function qi(t) {
    t.component("dropdown", t.components.drop.extend({ name: "dropdown" }));
  }
  function Yi(t) {
    t.component("form-custom", {
      mixins: [Mi],
      args: "target",
      props: { target: Boolean },
      defaults: { target: !1 },
      computed: {
        input: function (t, e) {
          return Ee(wt, e);
        },
        state: function () {
          return this.input.nextElementSibling;
        },
        target: function (t, e) {
          var i = t.target;
          return (
            i &&
            ((!0 === i &&
              this.input.parentNode === e &&
              this.input.nextElementSibling) ||
              Z(i, e))
          );
        },
      },
      update: function () {
        var t,
          e = this.target,
          i = this.input;
        e &&
          (e[bt(e) ? "value" : "textContent"] =
            i.files && i.files[0]
              ? i.files[0].name
              : ut(i, "select") &&
                (t = Ae("option", i).filter(function (t) {
                  return t.selected;
                })[0])
              ? t.textContent
              : i.value);
      },
      events: [
        {
          name: "focusin focusout mouseenter mouseleave",
          delegate: wt,
          handler: function (t) {
            var e = t.type;
            t.current === this.input &&
              re(
                this.state,
                "uk-" + (b(e, "focus") ? "focus" : "hover"),
                b(["focusin", "mouseenter"], e)
              );
          },
        },
        {
          name: "change",
          handler: function () {
            this.$emit();
          },
        },
      ],
    });
  }
  function Ui(t) {
    t.component("gif", {
      update: {
        read: function (t) {
          var e = Re(this.$el);
          if (!e || t.isInView === e) return !1;
          t.isInView = e;
        },
        write: function () {
          this.$el.src = this.$el.src;
        },
        events: ["scroll", "load", "resize"],
      },
    });
  }
  function Qi(t) {
    t.component(
      "grid",
      t.components.margin.extend({
        mixins: [Mi],
        name: "grid",
        defaults: { margin: "uk-grid-margin", clsStack: "uk-grid-stack" },
        update: {
          write: function (t) {
            var e = t.stacks;
            re(this.$el, this.clsStack, e);
          },
          events: ["load", "resize"],
        },
      })
    );
  }
  function Xi(t) {
    t.component("height-match", {
      args: "target",
      props: { target: String, row: Boolean },
      defaults: { target: "> *", row: !0 },
      computed: {
        elements: function (t, e) {
          return Ae(t.target, e);
        },
      },
      update: {
        read: function () {
          var e = this,
            i = !1;
          return (
            de(this.elements, "minHeight", ""),
            {
              rows: this.row
                ? this.elements
                    .reduce(function (t, e) {
                      return (
                        i !== e.offsetTop
                          ? t.push([e])
                          : t[t.length - 1].push(e),
                        (i = e.offsetTop),
                        t
                      );
                    }, [])
                    .map(function (t) {
                      return e.match(t);
                    })
                : [this.match(this.elements)],
            }
          );
        },
        write: function (t) {
          t.rows.forEach(function (t) {
            var e = t.height;
            return de(t.elements, "minHeight", e);
          });
        },
        events: ["load", "resize"],
      },
      methods: {
        match: function (t) {
          if (t.length < 2) return {};
          var n = [],
            o = 0;
          return (
            t.forEach(function (t) {
              var e, i;
              vt(t) ||
                ((e = Q(t, "style")),
                (i = Q(t, "hidden")),
                Q(t, {
                  style: (e || "") + ";display:block !important;",
                  hidden: null,
                })),
                (o = Math.max(o, t.offsetHeight)),
                n.push(t.offsetHeight),
                _(e) || Q(t, { style: e, hidden: i });
            }),
            (t = t.filter(function (t, e) {
              return n[e] < o;
            })),
            { height: o, elements: t }
          );
        },
      },
    });
  }
  function Gi(t) {
    function r(t) {
      return (t && t.offsetHeight) || 0;
    }
    t.component("height-viewport", {
      props: {
        expand: Boolean,
        offsetTop: Boolean,
        offsetBottom: Boolean,
        minHeight: Number,
      },
      defaults: { expand: !1, offsetTop: !1, offsetBottom: !1, minHeight: 0 },
      update: {
        write: function () {
          de(this.$el, "boxSizing", "border-box");
          var t,
            e = He(window),
            i = 0;
          if (this.expand) {
            de(this.$el, { height: "", minHeight: "" });
            var n = e - r(document.documentElement);
            0 < n && (t = r(this.$el) + n);
          } else {
            var o = De(this.$el).top;
            o < e / 2 && this.offsetTop && (i += o),
              !0 === this.offsetBottom
                ? (i += r(this.$el.nextElementSibling))
                : N(this.offsetBottom)
                ? (i += (e / 100) * this.offsetBottom)
                : this.offsetBottom && u(this.offsetBottom, "px")
                ? (i += O(this.offsetBottom))
                : E(this.offsetBottom) &&
                  (i += r(Z(this.offsetBottom, this.$el))),
              (t = i ? "calc(100vh - " + i + "px)" : "100vh");
          }
          if (t) {
            de(this.$el, { height: "", minHeight: t });
            var s = this.$el.offsetHeight;
            this.minHeight &&
              this.minHeight > s &&
              de(this.$el, "minHeight", this.minHeight),
              s <= e - i && de(this.$el, "height", t);
          }
        },
        events: ["load", "resize"],
      },
    });
  }
  var Ji,
    Ki =
      '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
    Zi =
      '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
    tn =
      '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
    en =
      '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',
    nn =
      '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
    on =
      '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
    sn =
      '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
    rn =
      '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
    an =
      '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
    ln =
      '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
    un =
      '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
    cn =
      '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
    hn =
      '<svg width="14px" height="24px" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
    dn =
      '<svg width="25px" height="40px" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>',
    fn =
      '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
    pn =
      '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>';
  function gn(i) {
    var n = {},
      o = {
        spinner: fn,
        totop: pn,
        marker: tn,
        "close-icon": Ki,
        "close-large": Zi,
        "navbar-toggle-icon": en,
        "overlay-icon": nn,
        "pagination-next": on,
        "pagination-previous": sn,
        "search-icon": rn,
        "search-large": an,
        "search-navbar": ln,
        "slidenav-next": un,
        "slidenav-next-large": cn,
        "slidenav-previous": hn,
        "slidenav-previous-large": dn,
      };
    function e(t, e) {
      i.component(
        t,
        i.components.icon.extend({
          name: t,
          mixins: e ? [e] : [],
          defaults: { icon: t },
        })
      );
    }
    i.component(
      "icon",
      i.components.svg.extend({
        attrs: ["icon", "ratio"],
        mixins: [Mi],
        name: "icon",
        args: "icon",
        props: ["icon"],
        defaults: { exclude: ["id", "style", "class", "src", "icon"] },
        init: function () {
          ee(this.$el, "uk-icon"),
            Qe &&
              (this.icon = V(
                V(this.icon, "left", "right"),
                "previous",
                "next"
              ));
        },
        methods: {
          getSvg: function () {
            var t = (function (t) {
              if (!o[t]) return null;
              n[t] || (n[t] = Ee(o[t].trim()));
              return n[t];
            })(this.icon);
            return t ? _t.resolve(t) : _t.reject("Icon not found.");
          },
        },
      })
    ),
      [
        "marker",
        "navbar-toggle-icon",
        "overlay-icon",
        "pagination-previous",
        "pagination-next",
        "totop",
      ].forEach(function (t) {
        return e(t);
      }),
      ["slidenav-previous", "slidenav-next"].forEach(function (t) {
        return e(t, {
          init: function () {
            ee(this.$el, "uk-slidenav"),
              se(this.$el, "uk-slidenav-large") && (this.icon += "-large");
          },
        });
      }),
      e("search-icon", {
        init: function () {
          se(this.$el, "uk-search-icon") &&
          dt(this.$el, ".uk-search-large").length
            ? (this.icon = "search-large")
            : dt(this.$el, ".uk-search-navbar").length &&
              (this.icon = "search-navbar");
        },
      }),
      e("close", {
        init: function () {
          this.icon =
            "close-" + (se(this.$el, "uk-close-large") ? "large" : "icon");
        },
      }),
      e("spinner", {
        connected: function () {
          var e = this;
          this.svg.then(function (t) {
            return (
              1 !== e.ratio && de(Ee("circle", t), "stroke-width", 1 / e.ratio)
            );
          }, R);
        },
      }),
      (i.icon.add = function (e) {
        Object.keys(e).forEach(function (t) {
          (o[t] = e[t]), delete n[t];
        }),
          i._initialized &&
            te(document.body, function (t) {
              var e = i.getComponent(t, "icon");
              e && e.$reset();
            });
      });
  }
  function mn(t) {
    t.component("leader", {
      mixins: [Mi],
      props: { fill: String, media: "media" },
      defaults: {
        fill: "",
        media: !1,
        clsWrapper: "uk-leader-fill",
        clsHide: "uk-leader-hide",
        attrFill: "data-fill",
      },
      computed: {
        fill: function (t) {
          var e = t.fill;
          return e || me("leader-fill");
        },
      },
      connected: function () {
        var t;
        (t = Xt(this.$el, '<span class="' + this.clsWrapper + '">')),
          (this.wrapper = t[0]);
      },
      disconnected: function () {
        Gt(this.wrapper.childNodes);
      },
      update: [
        {
          read: function (t) {
            var e = t.changed,
              i = t.width,
              n = i;
            return {
              width: (i = Math.floor(this.$el.offsetWidth / 2)),
              changed: e || n !== i,
              hide: this.media && !window.matchMedia(this.media).matches,
            };
          },
          write: function (t) {
            re(this.wrapper, this.clsHide, t.hide),
              t.changed &&
                ((t.changed = !1),
                Q(
                  this.wrapper,
                  this.attrFill,
                  new Array(t.width).join(this.fill)
                ));
          },
          events: ["load", "resize"],
        },
      ],
    });
  }
  function vn(t) {
    t.component("margin", {
      props: { margin: String, firstColumn: Boolean },
      defaults: {
        margin: "uk-margin-small-top",
        firstColumn: "uk-first-column",
      },
      update: {
        read: function (t) {
          var e = this.$el.children;
          if (!e.length || !vt(this.$el)) return (t.rows = !1);
          t.stacks = !0;
          for (var i = [[]], n = 0; n < e.length; n++) {
            var o = e[n],
              s = o.getBoundingClientRect();
            if (s.height)
              for (var r = i.length - 1; 0 <= r; r--) {
                var a = i[r];
                if (!a[0]) {
                  a.push(o);
                  break;
                }
                var l = a[0].getBoundingClientRect();
                if (s.top >= Math.floor(l.bottom)) {
                  i.push([o]);
                  break;
                }
                if (Math.floor(s.bottom) > l.top) {
                  if (((t.stacks = !1), s.left < l.left && !Qe)) {
                    a.unshift(o);
                    break;
                  }
                  a.push(o);
                  break;
                }
                if (0 === r) {
                  i.unshift([o]);
                  break;
                }
              }
          }
          t.rows = i;
        },
        write: function (t) {
          var n = this;
          t.rows.forEach(function (t, i) {
            return t.forEach(function (t, e) {
              re(t, n.margin, 0 !== i), re(t, n.firstColumn, 0 === e);
            });
          });
        },
        events: ["load", "resize"],
      },
    });
  }
  function wn(a) {
    a.component("modal", {
      mixins: [zi],
      defaults: {
        clsPage: "uk-modal-page",
        selPanel: ".uk-modal-dialog",
        selClose:
          ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full",
      },
      events: [
        {
          name: "show",
          self: !0,
          handler: function () {
            se(this.panel, "uk-margin-auto-vertical")
              ? ee(this.$el, "uk-flex")
              : de(this.$el, "display", "block"),
              He(this.$el);
          },
        },
        {
          name: "hidden",
          self: !0,
          handler: function () {
            de(this.$el, "display", ""), ie(this.$el, "uk-flex");
          },
        },
      ],
    }),
      a.component("overflow-auto", {
        mixins: [Mi],
        computed: {
          modal: function (t, e) {
            return ht(e, ".uk-modal");
          },
          panel: function (t, e) {
            return ht(e, ".uk-modal-dialog");
          },
        },
        connected: function () {
          de(this.$el, "minHeight", 150);
        },
        update: {
          write: function () {
            if (this.panel && this.modal) {
              var t = de(this.$el, "maxHeight");
              de(
                de(this.$el, "maxHeight", 150),
                "maxHeight",
                Math.max(150, 150 + He(this.modal) - this.panel.offsetHeight)
              ),
                t !== de(this.$el, "maxHeight") && It(this.$el, "resize");
            }
          },
          events: ["load", "resize"],
        },
      }),
      (a.modal.dialog = function (t, e) {
        var i = a.modal(
          ' <div class="uk-modal"> <div class="uk-modal-dialog">' +
            t +
            "</div> </div> ",
          e
        );
        return (
          i.show(),
          kt(i.$el, "hidden", function (t) {
            t.target === t.currentTarget && i.$destroy(!0);
          }),
          i
        );
      }),
      (a.modal.alert = function (e, i) {
        return (
          (i = j({ bgClose: !1, escClose: !1, labels: a.modal.labels }, i)),
          new _t(function (t) {
            return kt(
              a.modal.dialog(
                ' <div class="uk-modal-body">' +
                  (E(e) ? e : Wt(e)) +
                  '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' +
                  i.labels.ok +
                  "</button> </div> ",
                i
              ).$el,
              "hide",
              t
            );
          })
        );
      }),
      (a.modal.confirm = function (o, s) {
        return (
          (s = j({ bgClose: !1, escClose: !0, labels: a.modal.labels }, s)),
          new _t(function (e, t) {
            var i = a.modal.dialog(
                ' <form> <div class="uk-modal-body">' +
                  (E(o) ? o : Wt(o)) +
                  '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' +
                  s.labels.cancel +
                  '</button> <button class="uk-button uk-button-primary" autofocus>' +
                  s.labels.ok +
                  "</button> </div> </form> ",
                s
              ),
              n = !1;
            kt(i.$el, "submit", "form", function (t) {
              t.preventDefault(), e(), (n = !0), i.hide();
            }),
              kt(i.$el, "hide", function () {
                n || t();
              });
          })
        );
      }),
      (a.modal.prompt = function (t, s, r) {
        return (
          (r = j({ bgClose: !1, escClose: !0, labels: a.modal.labels }, r)),
          new _t(function (e) {
            var i = a.modal.dialog(
                ' <form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' +
                  (E(t) ? t : Wt(t)) +
                  '</label> <input class="uk-input" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' +
                  r.labels.cancel +
                  '</button> <button class="uk-button uk-button-primary">' +
                  r.labels.ok +
                  "</button> </div> </form> ",
                r
              ),
              n = Ee("input", i.$el);
            n.value = s;
            var o = !1;
            kt(i.$el, "submit", "form", function (t) {
              t.preventDefault(), e(n.value), (o = !0), i.hide();
            }),
              kt(i.$el, "hide", function () {
                o || e(null);
              });
          })
        );
      }),
      (a.modal.labels = { ok: "Ok", cancel: "Cancel" });
  }
  function bn(t) {
    t.component(
      "nav",
      t.components.accordion.extend({
        name: "nav",
        defaults: { targets: "> .uk-parent", toggle: "> a", content: "> ul" },
      })
    );
  }
  function yn(e) {
    e.component("navbar", {
      mixins: [Mi],
      props: {
        dropdown: String,
        mode: "list",
        align: String,
        offset: Number,
        boundary: Boolean,
        boundaryAlign: Boolean,
        clsDrop: String,
        delayShow: Number,
        delayHide: Number,
        dropbar: Boolean,
        dropbarMode: String,
        dropbarAnchor: "query",
        duration: Number,
      },
      defaults: {
        dropdown: ".uk-navbar-nav > li",
        align: Qe ? "right" : "left",
        clsDrop: "uk-navbar-dropdown",
        mode: void 0,
        offset: void 0,
        delayShow: void 0,
        delayHide: void 0,
        boundaryAlign: void 0,
        flip: "x",
        boundary: !0,
        dropbar: !1,
        dropbarMode: "slide",
        dropbarAnchor: !1,
        duration: 200,
      },
      computed: {
        boundary: function (t, e) {
          var i = t.boundary,
            n = t.boundaryAlign;
          return !0 === i || n ? e : i;
        },
        pos: function (t) {
          return "bottom-" + t.align;
        },
      },
      beforeConnect: function () {
        var t = this.$props.dropbar;
        (this.dropbar = t && ((E(t) && Z(t, this.$el)) || Ee("<div></div>"))),
          this.dropbar &&
            (ee(this.dropbar, "uk-navbar-dropbar"),
            "slide" === this.dropbarMode &&
              ee(this.dropbar, "uk-navbar-dropbar-slide"));
      },
      disconnected: function () {
        this.dropbar && Ut(this.dropbar);
      },
      update: function () {
        e.drop(
          Ae(this.dropdown + " ." + this.clsDrop, this.$el).filter(function (
            t
          ) {
            return !e.getComponent(t, "drop") && !e.getComponent(t, "dropdown");
          }),
          j({}, this.$props, {
            boundary: this.boundary,
            pos: this.pos,
            offset: this.dropbar || this.offset,
          })
        );
      },
      events: [
        {
          name: "mouseover",
          delegate: function () {
            return this.dropdown;
          },
          handler: function (t) {
            var e = t.current,
              i = this.getActive();
            i &&
              i.toggle &&
              !xt(i.toggle.$el, e) &&
              !i.tracker.movesTo(i.$el) &&
              i.hide(!1);
          },
        },
        {
          name: "mouseleave",
          el: function () {
            return this.dropbar;
          },
          handler: function () {
            var t = this.getActive();
            t && !ut(this.dropbar, ":hover") && t.hide();
          },
        },
        {
          name: "beforeshow",
          capture: !0,
          filter: function () {
            return this.dropbar;
          },
          handler: function () {
            this.dropbar.parentNode ||
              qt(this.dropbarAnchor || this.$el, this.dropbar);
          },
        },
        {
          name: "show",
          capture: !0,
          filter: function () {
            return this.dropbar;
          },
          handler: function (t, e) {
            var i = e.$el,
              n = e.dir;
            this.clsDrop && ee(i, this.clsDrop + "-dropbar"),
              "bottom" === n &&
                this.transitionTo(
                  i.offsetHeight +
                    O(de(i, "marginTop")) +
                    O(de(i, "marginBottom")),
                  i
                );
          },
        },
        {
          name: "beforehide",
          filter: function () {
            return this.dropbar;
          },
          handler: function (t, e) {
            var i = e.$el,
              n = this.getActive();
            ut(this.dropbar, ":hover") &&
              n &&
              n.$el === i &&
              t.preventDefault();
          },
        },
        {
          name: "hide",
          filter: function () {
            return this.dropbar;
          },
          handler: function (t, e) {
            var i = e.$el,
              n = this.getActive();
            (!n || (n && n.$el === i)) && this.transitionTo(0);
          },
        },
      ],
      methods: {
        getActive: function () {
          var t = e.drop.getActive();
          return t && b(t.mode, "hover") && xt(t.toggle.$el, this.$el) && t;
        },
        transitionTo: function (t, e) {
          var i = this.dropbar,
            n = vt(i) ? He(i) : 0;
          return (
            de((e = n < t && e), { height: n, overflow: "hidden" }),
            He(i, n),
            ke.cancel([e, i]),
            ke
              .start([e, i], { height: t }, this.duration)
              .catch(R)
              .then(function () {
                return de(e, { height: "", overflow: "" });
              })
          );
        },
      },
    });
  }
  function xn(t) {
    t.component("offcanvas", {
      mixins: [zi],
      args: "mode",
      props: { content: String, mode: String, flip: Boolean, overlay: Boolean },
      defaults: {
        content: ".uk-offcanvas-content",
        mode: "slide",
        flip: !1,
        overlay: !1,
        clsPage: "uk-offcanvas-page",
        clsContainer: "uk-offcanvas-container",
        selPanel: ".uk-offcanvas-bar",
        clsFlip: "uk-offcanvas-flip",
        clsContent: "uk-offcanvas-content",
        clsContentAnimation: "uk-offcanvas-content-animation",
        clsSidebarAnimation: "uk-offcanvas-bar-animation",
        clsMode: "uk-offcanvas",
        clsOverlay: "uk-offcanvas-overlay",
        selClose: ".uk-offcanvas-close",
      },
      computed: {
        content: function (t) {
          var e = t.content;
          return Ee(e) || document.body;
        },
        clsFlip: function (t) {
          var e = t.flip,
            i = t.clsFlip;
          return e ? i : "";
        },
        clsOverlay: function (t) {
          var e = t.overlay,
            i = t.clsOverlay;
          return e ? i : "";
        },
        clsMode: function (t) {
          var e = t.mode,
            i = t.clsMode;
          return i + "-" + e;
        },
        clsSidebarAnimation: function (t) {
          var e = t.mode,
            i = t.clsSidebarAnimation;
          return "none" === e || "reveal" === e ? "" : i;
        },
        clsContentAnimation: function (t) {
          var e = t.mode,
            i = t.clsContentAnimation;
          return "push" !== e && "reveal" !== e ? "" : i;
        },
        transitionElement: function (t) {
          return "reveal" === t.mode ? this.panel.parentNode : this.panel;
        },
      },
      update: {
        write: function () {
          this.getActive() === this &&
            ((this.overlay || this.clsContentAnimation) &&
              Pe(this.content, Pe(window) - this.scrollbarWidth),
            this.overlay &&
              (He(this.content, He(window)),
              Ji && (this.content.scrollTop = Ji.y)));
        },
        events: ["resize"],
      },
      events: [
        {
          name: "click",
          delegate: function () {
            return 'a[href^="#"]';
          },
          handler: function (t) {
            var e = t.current;
            e.hash && Ee(e.hash, this.content) && ((Ji = null), this.hide());
          },
        },
        {
          name: "beforescroll",
          filter: function () {
            return this.overlay;
          },
          handler: function (t, e, i) {
            e &&
              i &&
              this.isToggled() &&
              Ee(i, this.content) &&
              (Ct(this.$el, "hidden", function () {
                return e.scrollTo(i);
              }),
              t.preventDefault());
          },
        },
        {
          name: "show",
          self: !0,
          handler: function () {
            (Ji = Ji || { x: window.pageXOffset, y: window.pageYOffset }),
              "reveal" !== this.mode ||
                se(this.panel, this.clsMode) ||
                (Qt(this.panel, "<div>"),
                ee(this.panel.parentNode, this.clsMode)),
              de(
                document.documentElement,
                "overflowY",
                (!this.clsContentAnimation || this.flip) &&
                  this.scrollbarWidth &&
                  this.overlay
                  ? "scroll"
                  : ""
              ),
              ee(
                document.body,
                this.clsContainer,
                this.clsFlip,
                this.clsOverlay
              ),
              He(document.body),
              ee(this.content, this.clsContentAnimation),
              ee(
                this.panel,
                this.clsSidebarAnimation,
                "reveal" !== this.mode ? this.clsMode : ""
              ),
              ee(this.$el, this.clsOverlay),
              de(this.$el, "display", "block"),
              He(this.$el);
          },
        },
        {
          name: "hide",
          self: !0,
          handler: function () {
            ie(this.content, this.clsContentAnimation);
            var t = this.getActive();
            ("none" === this.mode || (t && t !== this && t !== this.prev)) &&
              It(this.panel, "transitionend");
          },
        },
        {
          name: "hidden",
          self: !0,
          handler: function () {
            if (("reveal" === this.mode && Gt(this.panel), this.overlay)) {
              if (!Ji) {
                var t = this.content,
                  e = t.scrollLeft,
                  i = t.scrollTop;
                Ji = { x: e, y: i };
              }
            } else Ji = { x: window.pageXOffset, y: window.pageYOffset };
            ie(this.panel, this.clsSidebarAnimation, this.clsMode),
              ie(this.$el, this.clsOverlay),
              de(this.$el, "display", ""),
              ie(
                document.body,
                this.clsContainer,
                this.clsFlip,
                this.clsOverlay
              ),
              (document.body.scrollTop = Ji.y),
              de(document.documentElement, "overflowY", ""),
              Pe(this.content, ""),
              He(this.content, ""),
              window.scrollTo(Ji.x, Ji.y),
              (Ji = null);
          },
        },
        {
          name: "swipeLeft swipeRight",
          handler: function (t) {
            this.isToggled() &&
              ki(t) &&
              (("swipeLeft" === t.type && !this.flip) ||
                ("swipeRight" === t.type && this.flip)) &&
              this.hide();
          },
        },
      ],
    });
  }
  function kn(t) {
    t.component("responsive", {
      props: ["width", "height"],
      init: function () {
        ee(this.$el, "uk-responsive-width");
      },
      update: {
        read: function () {
          return (
            !!(vt(this.$el) && this.width && this.height) && {
              width: Pe(this.$el.parentNode),
              height: this.height,
            }
          );
        },
        write: function (t) {
          He(
            this.$el,
            U.contain({ height: this.height, width: this.width }, t).height
          );
        },
        events: ["load", "resize"],
      },
    });
  }
  function $n(t) {
    t.component("scroll", {
      props: { duration: Number, offset: Number },
      defaults: { duration: 1e3, offset: 0 },
      methods: {
        scrollTo: function (i) {
          var n = this;
          i = (i && Ee(i)) || document.body;
          var t = He(document),
            e = He(window),
            o = De(i).top - this.offset;
          if (
            (t < o + e && (o = t - e), It(this.$el, "beforescroll", [this, i]))
          ) {
            var s = Date.now(),
              r = window.pageYOffset,
              a = function () {
                var t,
                  e =
                    r +
                    (o - r) *
                      ((t = F((Date.now() - s) / n.duration)),
                      0.5 * (1 - Math.cos(Math.PI * t)));
                window.scrollTo(window.pageXOffset, e),
                  e !== o
                    ? requestAnimationFrame(a)
                    : It(n.$el, "scrolled", [n, i]);
              };
            a();
          }
        },
      },
      events: {
        click: function (t) {
          t.defaultPrevented ||
            (t.preventDefault(), this.scrollTo(pt(this.$el.hash).substr(1)));
        },
      },
    });
  }
  function Cn(l) {
    l.component("scrollspy", {
      args: "cls",
      props: {
        cls: "list",
        target: String,
        hidden: Boolean,
        offsetTop: Number,
        offsetLeft: Number,
        repeat: Boolean,
        delay: Number,
      },
      defaults: {
        cls: [],
        target: !1,
        hidden: !0,
        offsetTop: 0,
        offsetLeft: 0,
        repeat: !1,
        delay: 0,
        inViewClass: "uk-scrollspy-inview",
      },
      computed: {
        elements: function (t, e) {
          var i = t.target;
          return i ? Ae(i, e) : [e];
        },
      },
      update: [
        {
          write: function () {
            this.hidden &&
              de(
                yt(this.elements, ":not(." + this.inViewClass + ")"),
                "visibility",
                "hidden"
              );
          },
        },
        {
          read: function (o) {
            var s = this;
            if (!l._initialized)
              return (
                "complete" === document.readyState &&
                  requestAnimationFrame(function () {
                    return s.$emit();
                  }),
                !1
              );
            this.elements.forEach(function (t, e) {
              var i = o[e];
              if (!i || i.el !== t) {
                var n = K(t, "uk-scrollspy-class");
                i = { el: t, toggles: (n && n.split(",")) || s.cls };
              }
              (i.show = Re(t, s.offsetTop, s.offsetLeft)), (o[e] = i);
            });
          },
          write: function (s) {
            var r = this,
              a = 1 === this.elements.length ? 1 : 0;
            this.elements.forEach(function (t, e) {
              var i = s[e],
                n = i.toggles[e] || i.toggles[0];
              if (!i.show || i.inview || i.timer)
                !i.show &&
                  i.inview &&
                  r.repeat &&
                  (i.timer && (clearTimeout(i.timer), delete i.timer),
                  de(t, "visibility", r.hidden ? "hidden" : ""),
                  ie(t, r.inViewClass),
                  re(t, n),
                  It(t, "outview"),
                  l.update(t),
                  (i.inview = !1));
              else {
                var o = function () {
                  de(t, "visibility", ""),
                    ee(t, r.inViewClass),
                    re(t, n),
                    It(t, "inview"),
                    l.update(t),
                    (i.inview = !0),
                    delete i.timer;
                };
                r.delay && a ? (i.timer = setTimeout(o, r.delay * a)) : o(),
                  a++;
              }
            });
          },
          events: ["scroll", "load", "resize"],
        },
      ],
    });
  }
  function In(t) {
    t.component("scrollspy-nav", {
      props: {
        cls: String,
        closest: String,
        scroll: Boolean,
        overflow: Boolean,
        offset: Number,
      },
      defaults: {
        cls: "uk-active",
        closest: !1,
        scroll: !1,
        overflow: !0,
        offset: 0,
      },
      computed: {
        links: function (t, e) {
          return Ae('a[href^="#"]', e).filter(function (t) {
            return t.hash;
          });
        },
        elements: function () {
          return this.closest ? ht(this.links, this.closest) : this.links;
        },
        targets: function () {
          return Ae(
            this.links
              .map(function (t) {
                return t.hash;
              })
              .join(",")
          );
        },
      },
      update: [
        {
          read: function () {
            this.scroll && t.scroll(this.links, { offset: this.offset || 0 });
          },
        },
        {
          read: function (s) {
            var r = this,
              a = window.pageYOffset + this.offset + 1,
              l = He(document) - He(window) + this.offset;
            (s.active = !1),
              this.targets.every(function (t, e) {
                var i = De(t).top,
                  n = e + 1 === r.targets.length;
                if (
                  !r.overflow &&
                  ((0 === e && a < i) || (n && i + t.offsetTop < a))
                )
                  return !1;
                if (!n && De(r.targets[e + 1]).top <= a) return !0;
                if (l <= a)
                  for (var o = r.targets.length - 1; e < o; o--)
                    if (Re(r.targets[o])) {
                      t = r.targets[o];
                      break;
                    }
                return !(s.active = Ee(yt(r.links, '[href="#' + t.id + '"]')));
              });
          },
          write: function (t) {
            var e = t.active;
            this.links.forEach(function (t) {
              return t.blur();
            }),
              ie(this.elements, this.cls),
              e &&
                It(this.$el, "active", [
                  e,
                  ee(this.closest ? ht(e, this.closest) : e, this.cls),
                ]);
          },
          events: ["scroll", "load", "resize"],
        },
      ],
    });
  }
  function Tn(t) {
    function n(t, e) {
      var i = e.$props,
        n = e.$el,
        o = e[t + "Offset"],
        s = i[t];
      if (s) {
        if (N(s)) return o + O(s);
        if (E(s) && s.match(/^-?\d+vh$/)) return (He(window) * O(s)) / 100;
        var r = !0 === s ? n.parentNode : Z(s, n);
        return r ? De(r).top + r.offsetHeight : void 0;
      }
    }
    t.component("sticky", {
      mixins: [Mi],
      attrs: !0,
      props: {
        top: null,
        bottom: Boolean,
        offset: Number,
        animation: String,
        clsActive: String,
        clsInactive: String,
        clsFixed: String,
        clsBelow: String,
        selTarget: String,
        widthElement: "query",
        showOnUp: Boolean,
        media: "media",
        target: Number,
      },
      defaults: {
        top: 0,
        bottom: !1,
        offset: 0,
        animation: "",
        clsActive: "uk-active",
        clsInactive: "",
        clsFixed: "uk-sticky-fixed",
        clsBelow: "uk-sticky-below",
        selTarget: "",
        widthElement: !1,
        showOnUp: !1,
        media: !1,
        target: !1,
      },
      computed: {
        selTarget: function (t, e) {
          var i = t.selTarget;
          return (i && Ee(i, e)) || e;
        },
      },
      connected: function () {
        (this.placeholder = Ee('<div class="uk-sticky-placeholder"></div>')),
          (this.widthElement = this.$props.widthElement || this.placeholder),
          this.isActive || this.hide();
      },
      disconnected: function () {
        this.isActive &&
          ((this.isActive = !1),
          this.hide(),
          ie(this.selTarget, this.clsInactive)),
          Ut(this.placeholder),
          (this.placeholder = null),
          (this.widthElement = null);
      },
      ready: function () {
        var n = this;
        if (this.target && location.hash && 0 < window.pageYOffset) {
          var o = Ee(location.hash);
          o &&
            ni.read(function () {
              var t = De(o).top,
                e = De(n.$el).top,
                i = n.$el.offsetHeight;
              t <= e + i &&
                e <= t + o.offsetHeight &&
                window.scrollTo(0, t - i - n.target - n.offset);
            });
        }
      },
      events: [
        {
          name: "active",
          self: !0,
          handler: function () {
            oe(this.selTarget, this.clsInactive, this.clsActive);
          },
        },
        {
          name: "inactive",
          self: !0,
          handler: function () {
            oe(this.selTarget, this.clsActive, this.clsInactive);
          },
        },
      ],
      update: [
        {
          write: function () {
            var t = this.placeholder,
              e = (this.isActive ? t : this.$el).offsetHeight;
            de(
              t,
              j(
                { height: "absolute" !== de(this.$el, "position") ? e : "" },
                de(this.$el, [
                  "marginTop",
                  "marginBottom",
                  "marginLeft",
                  "marginRight",
                ])
              )
            ),
              xt(t, document) || (qt(this.$el, t), Q(t, "hidden", "")),
              Q(this.widthElement, "hidden", null),
              (this.width = this.widthElement.offsetWidth),
              Q(this.widthElement, "hidden", this.isActive ? null : ""),
              (this.topOffset = De(this.isActive ? t : this.$el).top),
              (this.bottomOffset = this.topOffset + e);
            var i = n("bottom", this);
            (this.top =
              Math.max(O(n("top", this)), this.topOffset) - this.offset),
              (this.bottom = i && i - e),
              (this.inactive =
                this.media && !window.matchMedia(this.media).matches),
              this.isActive && this.update();
          },
          events: ["load", "resize"],
        },
        {
          read: function (t, e) {
            var i = e.scrollY;
            return (
              void 0 === i && (i = window.pageYOffset),
              { scroll: (this.scroll = i), visible: vt(this.$el) }
            );
          },
          write: function (t, e) {
            var i = this,
              n = t.visible,
              o = t.scroll;
            void 0 === e && (e = {});
            var s = e.dir;
            if (!(o < 0 || !n || this.disabled || (this.showOnUp && !s)))
              if (
                this.inactive ||
                o < this.top ||
                (this.showOnUp &&
                  (o <= this.top ||
                    "down" === s ||
                    ("up" === s && !this.isActive && o <= this.bottomOffset)))
              ) {
                if (!this.isActive) return;
                (this.isActive = !1),
                  this.animation && o > this.topOffset
                    ? (Se.cancel(this.$el),
                      Se.out(this.$el, this.animation).then(function () {
                        return i.hide();
                      }, R))
                    : this.hide();
              } else
                this.isActive
                  ? this.update()
                  : this.animation
                  ? (Se.cancel(this.$el),
                    this.show(),
                    Se.in(this.$el, this.animation).catch(R))
                  : this.show();
          },
          events: ["scroll"],
        },
      ],
      methods: {
        show: function () {
          (this.isActive = !0),
            this.update(),
            Q(this.placeholder, "hidden", null);
        },
        hide: function () {
          (this.isActive && !se(this.selTarget, this.clsActive)) ||
            It(this.$el, "inactive"),
            ie(this.$el, this.clsFixed, this.clsBelow),
            de(this.$el, { position: "", top: "", width: "" }),
            Q(this.placeholder, "hidden", "");
        },
        update: function () {
          var t = 0 !== this.top || this.scroll > this.top,
            e = Math.max(0, this.offset);
          this.bottom &&
            this.scroll > this.bottom - this.offset &&
            (e = this.bottom - this.scroll),
            de(this.$el, {
              position: "fixed",
              top: e + "px",
              width: this.width,
            }),
            se(this.selTarget, this.clsActive)
              ? t || It(this.$el, "inactive")
              : t && It(this.$el, "active"),
            re(this.$el, this.clsBelow, this.scroll > this.bottomOffset),
            ee(this.$el, this.clsFixed);
        },
      },
    });
  }
  var Sn,
    En,
    An = {};
  function Nn(t) {
    t.component("svg", {
      attrs: !0,
      props: {
        id: String,
        icon: String,
        src: String,
        style: String,
        width: Number,
        height: Number,
        ratio: Number,
        class: String,
      },
      defaults: { ratio: 1, id: !1, exclude: ["src"], class: "" },
      init: function () {
        this.class += " uk-svg";
      },
      connected: function () {
        var a = this;
        if (!this.icon && b(this.src, "#")) {
          var t,
            e = this.src.split("#");
          if (1 < e.length) (t = e), (this.src = t[0]), (this.icon = t[1]);
        }
        this.svg = this.getSvg().then(function (t) {
          var e;
          if (
            (E(t)
              ? (a.icon &&
                  b(t, "<symbol") &&
                  (t =
                    (function (t, e) {
                      if (!u[t]) {
                        var i;
                        for (u[t] = {}; (i = l.exec(t)); )
                          u[t][i[3]] =
                            '<svg xmlns="http://www.w3.org/2000/svg"' +
                            i[1] +
                            "svg>";
                      }
                      return u[t][e];
                    })(t, a.icon) || t),
                (e = Ee(t.substr(t.indexOf("<svg")))))
              : (e = t.cloneNode(!0)),
            !e)
          )
            return _t.reject("SVG not found.");
          var i = Q(e, "viewBox");
          for (var n in (i &&
            ((i = i.split(" ")),
            (a.width = a.$props.width || i[2]),
            (a.height = a.$props.height || i[3])),
          (a.width *= a.ratio),
          (a.height *= a.ratio),
          a.$options.props))
            a[n] && !b(a.exclude, n) && Q(e, n, a[n]);
          a.id || G(e, "id"),
            a.width && !a.height && G(e, "height"),
            a.height && !a.width && G(e, "width");
          var o = a.$el;
          if (mt(o) || "CANVAS" === o.tagName) {
            Q(o, { hidden: !0, id: null });
            var s = o.nextElementSibling;
            s && e.isEqualNode(s) ? (e = s) : qt(o, e);
          } else {
            var r = o.lastElementChild;
            r && e.isEqualNode(r) ? (e = r) : Ft(o, e);
          }
          return (a.svgEl = e);
        }, R);
      },
      disconnected: function () {
        var e = this;
        mt(this.$el) && Q(this.$el, { hidden: null, id: this.id || null }),
          this.svg &&
            this.svg.then(function (t) {
              return (!e._connected || t !== e.svgEl) && Ut(t);
            }, R),
          (this.svg = this.svgEl = null);
      },
      methods: {
        getSvg: function () {
          var i = this;
          return this.src
            ? (An[this.src] ||
                (An[this.src] = new _t(function (e, t) {
                  v(i.src, "data:")
                    ? e(decodeURIComponent(i.src.split(",")[1]))
                    : Ht(i.src).then(
                        function (t) {
                          return e(t.response);
                        },
                        function () {
                          return t("SVG not found.");
                        }
                      );
                })),
              An[this.src])
            : _t.reject();
        },
      },
    });
    var l = /<symbol(.*?id=(['"])(.*?)\2[^]*?<\/)symbol>/g,
      u = {};
  }
  function _n(t) {
    t.component("switcher", {
      mixins: [Pi],
      args: "connect",
      props: {
        connect: String,
        toggle: String,
        active: Number,
        swiping: Boolean,
      },
      defaults: {
        connect: "~.uk-switcher",
        toggle: "> *",
        active: 0,
        swiping: !0,
        cls: "uk-active",
        clsContainer: "uk-switcher",
        attrItem: "uk-switcher-item",
        queued: !0,
      },
      computed: {
        connects: function (t, e) {
          return tt(t.connect, e);
        },
        toggles: function (t, e) {
          return Ae(t.toggle, e);
        },
      },
      events: [
        {
          name: "click",
          delegate: function () {
            return this.toggle + ":not(.uk-disabled)";
          },
          handler: function (t) {
            t.preventDefault(), this.show(t.current);
          },
        },
        {
          name: "click",
          el: function () {
            return this.connects;
          },
          delegate: function () {
            return "[" + this.attrItem + "],[data-" + this.attrItem + "]";
          },
          handler: function (t) {
            t.preventDefault(), this.show(K(t.current, this.attrItem));
          },
        },
        {
          name: "swipeRight swipeLeft",
          filter: function () {
            return this.swiping;
          },
          el: function () {
            return this.connects;
          },
          handler: function (t) {
            ki(t) &&
              (t.preventDefault(),
              window.getSelection().toString() ||
                this.show("swipeLeft" === t.type ? "next" : "previous"));
          },
        },
      ],
      update: function () {
        var e = this;
        this.connects.forEach(function (t) {
          return e.updateAria(t.children);
        }),
          this.show(
            yt(this.toggles, "." + this.cls)[0] ||
              this.toggles[this.active] ||
              this.toggles[0]
          );
      },
      methods: {
        show: function (t) {
          for (
            var e,
              i = this,
              n = this.toggles.length,
              o =
                !!this.connects.length &&
                Lt(yt(this.connects[0].children, "." + this.cls)[0]),
              s = 0 <= o,
              r = "previous" === t ? -1 : 1,
              a = Vt(t, this.toggles, o),
              l = 0;
            l < n;
            l++, a = (a + r + n) % n
          )
            if (!ut(i.toggles[a], ".uk-disabled, [disabled]")) {
              e = i.toggles[a];
              break;
            }
          !e ||
            (0 <= o && se(e, this.cls)) ||
            o === a ||
            (ie(this.toggles, this.cls),
            Q(this.toggles, "aria-expanded", !1),
            ee(e, this.cls),
            Q(e, "aria-expanded", !0),
            this.connects.forEach(function (t) {
              s
                ? i.toggleElement([t.children[o], t.children[a]])
                : i.toggleNow(t.children[a]);
            }));
        },
      },
    });
  }
  function Bn(e) {
    e.component(
      "tab",
      e.components.switcher.extend({
        mixins: [Mi],
        name: "tab",
        props: { media: "media" },
        defaults: { media: 960, attrItem: "uk-tab-item" },
        init: function () {
          var t = se(this.$el, "uk-tab-left")
            ? "uk-tab-left"
            : !!se(this.$el, "uk-tab-right") && "uk-tab-right";
          t && e.toggle(this.$el, { cls: t, mode: "media", media: this.media });
        },
      })
    );
  }
  function Dn(t) {
    t.component("toggle", {
      mixins: [t.mixin.togglable],
      args: "target",
      props: { href: String, target: null, mode: "list", media: "media" },
      defaults: { href: !1, target: !1, mode: "click", queued: !0, media: !1 },
      computed: {
        target: function (t, e) {
          var i = t.href,
            n = t.target;
          return (n = tt(n || i, e)), (n.length && n) || [e];
        },
      },
      events: [
        {
          name: ei + " " + ii,
          filter: function () {
            return b(this.mode, "hover");
          },
          handler: function (t) {
            ki(t) || this.toggle("toggle" + (t.type === ei ? "show" : "hide"));
          },
        },
        {
          name: "click",
          filter: function () {
            return b(this.mode, "click") || Je;
          },
          handler: function (t) {
            var e;
            (ki(t) || b(this.mode, "click")) &&
              ((ht(t.target, 'a[href="#"], button') ||
                ((e = ht(t.target, "a[href]")) &&
                  (this.cls ||
                    !vt(this.target) ||
                    (e.hash && ut(this.target, e.hash))))) &&
                Ct(document, "click", function (t) {
                  return t.preventDefault();
                }),
              this.toggle());
          },
        },
      ],
      update: {
        write: function () {
          if (b(this.mode, "media") && this.media) {
            var t = this.isToggled(this.target);
            (window.matchMedia(this.media).matches ? !t : t) && this.toggle();
          }
        },
        events: ["load", "resize"],
      },
      methods: {
        toggle: function (t) {
          It(this.target, t || "toggle", [this]) &&
            this.toggleElement(this.target);
        },
      },
    });
  }
  function On(t) {
    t.component("video", {
      args: "autoplay",
      props: { automute: Boolean, autoplay: Boolean },
      defaults: { automute: !1, autoplay: !0 },
      computed: {
        inView: function (t) {
          return "inview" === t.autoplay;
        },
      },
      connected: function () {
        this.inView && !X(this.$el, "preload") && (this.$el.preload = "none");
      },
      ready: function () {
        (this.player = new fi(this.$el)), this.automute && this.player.mute();
      },
      update: [
        {
          read: function (t, e) {
            var i = e.type;
            return (
              !(
                !this.player ||
                !(("scroll" !== i && "resize" !== i) || this.inView)
              ) && {
                visible:
                  vt(this.$el) && "hidden" !== de(this.$el, "visibility"),
                inView: this.inView && Re(this.$el),
              }
            );
          },
          write: function (t) {
            var e = t.visible,
              i = t.inView;
            !e || (this.inView && !i)
              ? this.player.pause()
              : (!0 === this.autoplay || (this.inView && i)) &&
                this.player.play();
          },
          events: ["load", "resize", "scroll"],
        },
      ],
    });
  }
  function Mn(t, e) {
    return (
      void 0 === t && (t = 0),
      void 0 === e && (e = "%"),
      "translateX(" + t + (t ? e : "") + ")"
    );
  }
  function Hn(t) {
    return "scale3d(" + t + ", " + t + ", 1)";
  }
  function Pn(t) {
    if (!Pn.installed) {
      var e,
        i,
        n,
        o,
        s,
        r,
        a,
        l,
        u,
        c,
        h,
        f,
        d,
        p,
        g,
        m,
        v,
        w,
        b,
        y,
        x,
        k,
        $,
        C = t.util,
        I = C.$,
        T = C.assign,
        S = C.clamp,
        E = C.fastdom,
        A = C.getIndex,
        N = C.hasClass,
        _ = C.isNumber,
        B = C.isRtl,
        D = C.Promise,
        O = C.toNodes,
        M = C.trigger;
      t.mixin.slider = {
        attrs: !0,
        mixins: [
          ((k = t),
          ($ = k.util.pointerDown),
          {
            props: {
              autoplay: Boolean,
              autoplayInterval: Number,
              pauseOnHover: Boolean,
            },
            defaults: { autoplay: !1, autoplayInterval: 7e3, pauseOnHover: !0 },
            connected: function () {
              this.startAutoplay();
            },
            disconnected: function () {
              this.stopAutoplay();
            },
            events: [
              {
                name: "visibilitychange",
                el: document,
                handler: function () {
                  document.hidden ? this.stopAutoplay() : this.startAutoplay();
                },
              },
              { name: $, handler: "stopAutoplay" },
              {
                name: "mouseenter",
                filter: function () {
                  return this.autoplay;
                },
                handler: function () {
                  this.isHovering = !0;
                },
              },
              {
                name: "mouseleave",
                filter: function () {
                  return this.autoplay;
                },
                handler: function () {
                  this.isHovering = !1;
                },
              },
            ],
            methods: {
              startAutoplay: function () {
                var t = this;
                this.stopAutoplay(),
                  this.autoplay &&
                    (this.interval = setInterval(function () {
                      return (
                        !(t.isHovering && t.pauseOnHover) &&
                        !t.stack.length &&
                        t.show("next")
                      );
                    }, this.autoplayInterval));
              },
              stopAutoplay: function () {
                this.interval && clearInterval(this.interval);
              },
            },
          }),
          ((u = t),
          (c = u.util),
          (h = c.getPos),
          (f = c.includes),
          (d = c.isRtl),
          (p = c.isTouch),
          (g = c.off),
          (m = c.on),
          (v = c.pointerDown),
          (w = c.pointerMove),
          (b = c.pointerUp),
          (y = c.preventClick),
          (x = c.trigger),
          {
            defaults: { threshold: 10, preventCatch: !1 },
            init: function () {
              var n = this;
              ["start", "move", "end"].forEach(function (t) {
                var i = n[t];
                n[t] = function (t) {
                  var e = h(t).x * (d ? -1 : 1);
                  (n.prevPos = e !== n.pos ? n.pos : n.prevPos),
                    (n.pos = e),
                    i(t);
                };
              });
            },
            events: [
              {
                name: v,
                delegate: function () {
                  return this.slidesSelector;
                },
                handler: function (t) {
                  var e;
                  (!p(t) &&
                    !(e = t.target).children.length &&
                    e.childNodes.length) ||
                    0 < t.button ||
                    this.length < 2 ||
                    this.preventCatch ||
                    this.start(t);
                },
              },
              {
                name: "dragstart",
                handler: function (t) {
                  t.preventDefault();
                },
              },
            ],
            methods: {
              start: function () {
                (this.drag = this.pos),
                  this._transitioner
                    ? ((this.percent = this._transitioner.percent()),
                      (this.drag +=
                        this._transitioner.getDistance() *
                        this.percent *
                        this.dir),
                      this._transitioner.translate(this.percent),
                      this._transitioner.cancel(),
                      (this.dragging = !0),
                      (this.stack = []))
                    : (this.prevIndex = this.index),
                  (this.unbindMove = m(document, w, this.move, {
                    capture: !0,
                    passive: !1,
                  })),
                  m(window, "scroll", this.unbindMove),
                  m(document, b, this.end, !0);
              },
              move: function (t) {
                var e = this,
                  i = this.pos - this.drag;
                if (
                  !(
                    0 === i ||
                    this.prevPos === this.pos ||
                    (!this.dragging && Math.abs(i) < this.threshold)
                  )
                ) {
                  t.cancelable && t.preventDefault(),
                    (this.dragging = !0),
                    (this.dir = i < 0 ? 1 : -1);
                  for (
                    var n = this.slides,
                      o = this.prevIndex,
                      s = Math.abs(i),
                      r = this.getIndex(o + this.dir, o),
                      a = this._getDistance(o, r) || n[o].offsetWidth;
                    r !== o && a < s;

                  )
                    (e.drag -= a * e.dir),
                      (o = r),
                      (s -= a),
                      (r = e.getIndex(o + e.dir, o)),
                      (a = e._getDistance(o, r) || n[o].offsetWidth);
                  this.percent = s / a;
                  var l,
                    u = n[o],
                    c = n[r],
                    h = this.index !== r,
                    d = o === r;
                  [this.index, this.prevIndex]
                    .filter(function (t) {
                      return !f([r, o], t);
                    })
                    .forEach(function (t) {
                      x(n[t], "itemhidden", [e]),
                        d && ((l = !0), (e.prevIndex = o));
                    }),
                    ((this.index === o && this.prevIndex !== o) || l) &&
                      x(n[this.index], "itemshown", [this]),
                    h &&
                      ((this.prevIndex = o),
                      (this.index = r),
                      !d && x(u, "beforeitemhide", [this]),
                      x(c, "beforeitemshow", [this])),
                    (this._transitioner = this._translate(
                      Math.abs(this.percent),
                      u,
                      !d && c
                    )),
                    h &&
                      (!d && x(u, "itemhide", [this]),
                      x(c, "itemshow", [this]));
                }
              },
              end: function () {
                if (
                  (g(window, "scroll", this.unbindMove),
                  this.unbindMove(),
                  g(document, b, this.end, !0),
                  this.dragging)
                ) {
                  if (((this.dragging = null), this.index === this.prevIndex))
                    (this.percent = 1 - this.percent),
                      (this.dir *= -1),
                      this._show(!1, this.index, !0),
                      (this._transitioner = null);
                  else {
                    var t =
                      (d ? this.dir * (d ? 1 : -1) : this.dir) < 0 ==
                      this.prevPos > this.pos;
                    (this.index = t ? this.index : this.prevIndex),
                      t && (this.percent = 1 - this.percent),
                      this.show(
                        (0 < this.dir && !t) || (this.dir < 0 && t)
                          ? "next"
                          : "previous",
                        !0
                      );
                  }
                  y();
                }
                this.drag = this.percent = null;
              },
            },
          }),
          ((e = t),
          (i = e.util),
          (n = i.$),
          (o = i.$$),
          (s = i.data),
          (r = i.html),
          (a = i.toggleClass),
          (l = i.toNumber),
          {
            defaults: { selNav: !1 },
            computed: {
              nav: function (t, e) {
                var i = t.selNav;
                return n(i, e);
              },
              navItemSelector: function (t) {
                var e = t.attrItem;
                return "[" + e + "],[data-" + e + "]";
              },
              navItems: function (t, e) {
                return o(this.navItemSelector, e);
              },
            },
            update: [
              {
                write: function () {
                  var i = this;
                  this.nav &&
                    this.length !== this.nav.children.length &&
                    r(
                      this.nav,
                      this.slides
                        .map(function (t, e) {
                          return (
                            "<li " +
                            i.attrItem +
                            '="' +
                            e +
                            '"><a href="#"></a></li>'
                          );
                        })
                        .join("")
                    ),
                    a(
                      o(this.navItemSelector, this.$el).concat(this.nav),
                      "uk-hidden",
                      !this.maxIndex
                    ),
                    this.updateNav();
                },
                events: ["load", "resize"],
              },
            ],
            events: [
              {
                name: "click",
                delegate: function () {
                  return this.navItemSelector;
                },
                handler: function (t) {
                  t.preventDefault(),
                    t.current.blur(),
                    this.show(s(t.current, this.attrItem));
                },
              },
              { name: "itemshow", handler: "updateNav" },
            ],
            methods: {
              updateNav: function () {
                var i = this,
                  n = this.getValidIndex();
                this.navItems.forEach(function (t) {
                  var e = s(t, i.attrItem);
                  a(t, i.clsActive, l(e) === n),
                    a(
                      t,
                      "uk-invisible",
                      i.finite &&
                        (("previous" === e && 0 === n) ||
                          ("next" === e && n >= i.maxIndex))
                    );
                });
              },
            },
          }),
        ],
        props: {
          clsActivated: Boolean,
          easing: String,
          index: Number,
          finite: Boolean,
          velocity: Number,
        },
        defaults: {
          easing: "ease",
          finite: !1,
          velocity: 1,
          index: 0,
          stack: [],
          percent: 0,
          clsActive: "uk-active",
          clsActivated: !1,
          Transitioner: !1,
          transitionOptions: {},
        },
        computed: {
          duration: function (t, e) {
            var i = t.velocity;
            return zn(e.offsetWidth / i);
          },
          length: function () {
            return this.slides.length;
          },
          list: function (t, e) {
            var i = t.selList;
            return I(i, e);
          },
          maxIndex: function () {
            return this.length - 1;
          },
          slidesSelector: function (t) {
            return t.selList + " > *";
          },
          slides: function () {
            return O(this.list.children);
          },
        },
        methods: {
          show: function (t, e) {
            var i = this;
            if ((void 0 === e && (e = !1), !this.dragging && this.length)) {
              var n = this.stack,
                o = e ? 0 : n.length,
                s = function () {
                  n.splice(o, 1), n.length && i.show(n.shift(), !0);
                };
              if ((n[e ? "unshift" : "push"](t), !e && 1 < n.length))
                2 === n.length &&
                  this._transitioner.forward(Math.min(this.duration, 200));
              else {
                var r = this.index,
                  a = N(this.slides, this.clsActive) && this.slides[r],
                  l = this.getIndex(t, this.index),
                  u = this.slides[l];
                if (a !== u) {
                  var c, h;
                  if (
                    ((this.dir =
                      ((h = r),
                      "next" === (c = t)
                        ? 1
                        : "previous" === c
                        ? -1
                        : c < h
                        ? -1
                        : 1)),
                    (this.prevIndex = r),
                    (this.index = l),
                    a && M(a, "beforeitemhide", [this]),
                    !M(u, "beforeitemshow", [this, a]))
                  )
                    return (this.index = this.prevIndex), void s();
                  var d = this._show(a, u, e).then(function () {
                    return (
                      a && M(a, "itemhidden", [i]),
                      M(u, "itemshown", [i]),
                      new D(function (t) {
                        E.write(function () {
                          n.shift(),
                            n.length
                              ? i.show(n.shift(), !0)
                              : (i._transitioner = null),
                            t();
                        });
                      })
                    );
                  });
                  return (
                    a && M(a, "itemhide", [this]), M(u, "itemshow", [this]), d
                  );
                }
                s();
              }
            }
          },
          getIndex: function (t, e) {
            return (
              void 0 === t && (t = this.index),
              void 0 === e && (e = this.index),
              S(A(t, this.slides, e, this.finite), 0, this.maxIndex)
            );
          },
          getValidIndex: function (t, e) {
            return (
              void 0 === t && (t = this.index),
              void 0 === e && (e = this.prevIndex),
              this.getIndex(t, e)
            );
          },
          _show: function (t, e, i) {
            if (
              ((this._transitioner = this._getTransitioner(
                t,
                e,
                this.dir,
                T(
                  {
                    easing: i
                      ? e.offsetWidth < 600
                        ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                        : "cubic-bezier(0.165, 0.84, 0.44, 1)"
                      : this.easing,
                  },
                  this.transitionOptions
                )
              )),
              !i && !t)
            )
              return this._transitioner.translate(1), D.resolve();
            var n = this.stack.length;
            return this._transitioner[1 < n ? "forward" : "show"](
              1 < n
                ? Math.min(this.duration, 75 + 75 / (n - 1))
                : this.duration,
              this.percent
            );
          },
          _getDistance: function (t, e) {
            return new this._getTransitioner(t, t !== e && e).getDistance();
          },
          _translate: function (t, e, i) {
            void 0 === e && (e = this.prevIndex),
              void 0 === i && (i = this.index);
            var n = this._getTransitioner(e !== i && e, i);
            return n.translate(t), n;
          },
          _getTransitioner: function (t, e, i, n) {
            return (
              void 0 === t && (t = this.prevIndex),
              void 0 === e && (e = this.index),
              void 0 === i && (i = this.dir || 1),
              void 0 === n && (n = this.transitionOptions),
              new this.Transitioner(
                _(t) ? this.slides[t] : t,
                _(e) ? this.slides[e] : e,
                i * (B ? -1 : 1),
                n
              )
            );
          },
        },
      };
    }
  }
  function zn(t) {
    return 0.5 * t + 300;
  }
  function Ln(i) {
    if (!Ln.installed) {
      i.use(Pn);
      var e,
        n,
        t = i.mixin,
        o = i.util,
        s = o.addClass,
        r = o.assign,
        a = o.fastdom,
        l = o.isNumber,
        u = o.removeClass,
        c =
          ((e = i.util.css),
          (n = {
            slide: {
              show: function (t) {
                return [{ transform: Mn(-100 * t) }, { transform: Mn() }];
              },
              percent: function (t) {
                return n.translated(t);
              },
              translate: function (t, e) {
                return [
                  { transform: Mn(-100 * e * t) },
                  { transform: Mn(100 * e * (1 - t)) },
                ];
              },
            },
            translated: function (t) {
              return (
                Math.abs(e(t, "transform").split(",")[4] / t.offsetWidth) || 0
              );
            },
          })),
        h = (function (t) {
          var e = t.util,
            n = e.createEvent,
            h = e.clamp,
            d = e.css,
            f = e.Deferred,
            p = e.noop,
            g = e.Promise,
            m = e.Transition,
            o = e.trigger;
          function v(t, e, i) {
            o(t, n(e, !1, !1, i));
          }
          return function (s, r, a, t) {
            var e = t.animation,
              l = t.easing,
              i = e.percent,
              n = e.translate,
              o = e.show;
            void 0 === o && (o = p);
            var u = o(a),
              c = new f();
            return {
              dir: a,
              show: function (t, e, i) {
                var n = this;
                void 0 === e && (e = 0);
                var o = i ? "linear" : l;
                return (
                  (t -= Math.round(t * h(e, -1, 1))),
                  this.translate(e),
                  v(r, "itemin", {
                    percent: e,
                    duration: t,
                    timing: o,
                    dir: a,
                  }),
                  v(s, "itemout", {
                    percent: 1 - e,
                    duration: t,
                    timing: o,
                    dir: a,
                  }),
                  g
                    .all([m.start(r, u[1], t, o), m.start(s, u[0], t, o)])
                    .then(function () {
                      n.reset(), c.resolve();
                    }, p),
                  c.promise
                );
              },
              stop: function () {
                return m.stop([r, s]);
              },
              cancel: function () {
                m.cancel([r, s]);
              },
              reset: function () {
                for (var t in u[0]) d([r, s], t, "");
              },
              forward: function (t, e) {
                return (
                  void 0 === e && (e = this.percent()),
                  m.cancel([r, s]),
                  this.show(t, e, !0)
                );
              },
              translate: function (t) {
                this.reset();
                var e = n(t, a);
                d(r, e[1]),
                  d(s, e[0]),
                  v(r, "itemtranslatein", { percent: t, dir: a }),
                  v(s, "itemtranslateout", { percent: 1 - t, dir: a });
              },
              percent: function () {
                return i(s || r, r, a);
              },
              getDistance: function () {
                return s.offsetWidth;
              },
            };
          };
        })(i);
      i.mixin.slideshow = {
        mixins: [t.slider],
        props: { animation: String },
        defaults: {
          animation: "slide",
          clsActivated: "uk-transition-active",
          Animations: c,
          Transitioner: h,
        },
        computed: {
          animation: function (t) {
            var e = t.animation,
              i = t.Animations;
            return r(e in i ? i[e] : i.slide, { name: e });
          },
          transitionOptions: function () {
            return { animation: this.animation };
          },
        },
        events: {
          "itemshow itemhide itemshown itemhidden": function (t) {
            var e = t.target;
            i.update(e);
          },
          itemshow: function () {
            l(this.prevIndex) && a.flush();
          },
          beforeitemshow: function (t) {
            var e = t.target;
            s(e, this.clsActive);
          },
          itemshown: function (t) {
            var e = t.target;
            s(e, this.clsActivated);
          },
          itemhidden: function (t) {
            var e = t.target;
            u(e, this.clsActive, this.clsActivated);
          },
        },
      };
    }
  }
  function Vn(n) {
    if (!Vn.installed) {
      n.use(Ln);
      var t,
        e,
        i,
        o,
        s,
        r = n.mixin,
        a = n.util,
        c = a.$,
        l = a.addClass,
        h = a.ajax,
        u = a.append,
        d = a.assign,
        f = a.attr,
        p = a.css,
        g = a.getImage,
        m = a.html,
        v = a.index,
        w = a.on,
        b = a.pointerDown,
        y = a.pointerMove,
        x = a.removeClass,
        k = a.Transition,
        $ = a.trigger,
        C =
          ((e = (t = n).mixin),
          (i = t.util),
          (o = i.assign),
          (s = i.css),
          o({}, e.slideshow.defaults.Animations, {
            fade: {
              show: function () {
                return [{ opacity: 0 }, { opacity: 1 }];
              },
              percent: function (t) {
                return 1 - s(t, "opacity");
              },
              translate: function (t) {
                return [{ opacity: 1 - t }, { opacity: t }];
              },
            },
            scale: {
              show: function () {
                return [
                  { opacity: 0, transform: Hn(0.8) },
                  { opacity: 1, transform: Hn(1) },
                ];
              },
              percent: function (t) {
                return 1 - s(t, "opacity");
              },
              translate: function (t) {
                return [
                  { opacity: 1 - t, transform: Hn(1 - 0.2 * t) },
                  { opacity: t, transform: Hn(0.8 + 0.2 * t) },
                ];
              },
            },
          }));
      n.component("lightbox-panel", {
        mixins: [r.container, r.modal, r.togglable, r.slideshow],
        functional: !0,
        props: {
          delayControls: Number,
          preload: Number,
          videoAutoplay: Boolean,
          template: String,
        },
        defaults: {
          preload: 1,
          videoAutoplay: !1,
          delayControls: 3e3,
          items: [],
          cls: "uk-open",
          clsPage: "uk-lightbox-page",
          selList: ".uk-lightbox-items",
          attrItem: "uk-lightbox-item",
          selClose: ".uk-close-large",
          pauseOnHover: !1,
          velocity: 2,
          Animations: C,
          template:
            '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href="#" uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href="#" uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>',
        },
        created: function () {
          var t = this;
          this.$mount(u(this.container, this.template)),
            (this.caption = c(".uk-lightbox-caption", this.$el)),
            this.items.forEach(function () {
              return u(t.list, "<li></li>");
            });
        },
        events: [
          { name: y + " " + b + " keydown", handler: "showControls" },
          {
            name: "click",
            self: !0,
            delegate: function () {
              return this.slidesSelector;
            },
            handler: function (t) {
              t.preventDefault(), this.hide();
            },
          },
          { name: "shown", self: !0, handler: "showControls" },
          {
            name: "hide",
            self: !0,
            handler: function () {
              this.hideControls(),
                x(this.slides, this.clsActive),
                k.stop(this.slides);
            },
          },
          {
            name: "keyup",
            el: document,
            handler: function (t) {
              if (this.isToggled(this.$el))
                switch (t.keyCode) {
                  case 37:
                    this.show("previous");
                    break;
                  case 39:
                    this.show("next");
                }
            },
          },
          {
            name: "beforeitemshow",
            handler: function (t) {
              this.isToggled() ||
                ((this.preventCatch = !0),
                t.preventDefault(),
                this.toggleNow(this.$el, !0),
                (this.animation = C.scale),
                x(t.target, this.clsActive),
                this.stack.splice(1, 0, this.index));
            },
          },
          {
            name: "itemshow",
            handler: function (t) {
              var e = t.target,
                i = v(e),
                n = this.getItem(i).caption;
              p(this.caption, "display", n ? "" : "none"), m(this.caption, n);
              for (var o = 0; o <= this.preload; o++)
                this.loadItem(this.getIndex(i + o)),
                  this.loadItem(this.getIndex(i - o));
            },
          },
          {
            name: "itemshown",
            handler: function () {
              this.preventCatch = !1;
            },
          },
          {
            name: "itemload",
            handler: function (t, o) {
              var s,
                r = this,
                e = o.source,
                i = o.type,
                n = o.alt;
              if ((this.setItem(o, "<span uk-spinner></span>"), e))
                if ("image" === i || e.match(/\.(jp(e)?g|png|gif|svg)$/i))
                  g(e).then(
                    function (t) {
                      return r.setItem(
                        o,
                        '<img width="' +
                          t.width +
                          '" height="' +
                          t.height +
                          '" src="' +
                          e +
                          '" alt="' +
                          (n || "") +
                          '">'
                      );
                    },
                    function () {
                      return r.setError(o);
                    }
                  );
                else if ("video" === i || e.match(/\.(mp4|webm|ogv)$/i)) {
                  var a = c(
                    "<video controls playsinline" +
                      (o.poster ? ' poster="' + o.poster + '"' : "") +
                      ' uk-video="' +
                      this.videoAutoplay +
                      '"></video>'
                  );
                  f(a, "src", e),
                    w(a, "error", function () {
                      return r.setError(o);
                    }),
                    w(a, "loadedmetadata", function () {
                      f(a, { width: a.videoWidth, height: a.videoHeight }),
                        r.setItem(o, a);
                    });
                } else if ("iframe" === i)
                  this.setItem(
                    o,
                    '<iframe class="uk-lightbox-iframe" src="' +
                      e +
                      '" frameborder="0" allowfullscreen></iframe>'
                  );
                else if (
                  (s =
                    e.match(
                      /\/\/.*?youtube(-nocookie)?\.[a-z]+\/watch\?v=([^&\s]+)/
                    ) || e.match(/()youtu\.be\/(.*)/))
                ) {
                  var l = s[2],
                    u = function (t, e) {
                      return (
                        void 0 === t && (t = 640),
                        void 0 === e && (e = 450),
                        r.setItem(
                          o,
                          I(
                            "//www.youtube" + (s[1] || "") + ".com/embed/" + l,
                            t,
                            e,
                            r.videoAutoplay
                          )
                        )
                      );
                    };
                  g("//img.youtube.com/vi/" + l + "/maxresdefault.jpg").then(
                    function (t) {
                      var e = t.width,
                        i = t.height;
                      120 === e && 90 === i
                        ? g("//img.youtube.com/vi/" + l + "/0.jpg").then(
                            function (t) {
                              var e = t.width,
                                i = t.height;
                              return u(e, i);
                            },
                            u
                          )
                        : u(e, i);
                    },
                    u
                  );
                } else
                  (s = e.match(/(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/)) &&
                    h(
                      "//vimeo.com/api/oembed.json?maxwidth=1920&url=" +
                        encodeURI(e),
                      { responseType: "json" }
                    ).then(function (t) {
                      var e = t.response,
                        i = e.height,
                        n = e.width;
                      return r.setItem(
                        o,
                        I(
                          "//player.vimeo.com/video/" + s[2],
                          n,
                          i,
                          r.videoAutoplay
                        )
                      );
                    });
            },
          },
        ],
        methods: {
          loadItem: function (t) {
            void 0 === t && (t = this.index);
            var e = this.getItem(t);
            e.content || $(this.$el, "itemload", [e]);
          },
          getItem: function (t) {
            return void 0 === t && (t = this.index), this.items[t] || {};
          },
          setItem: function (t, e) {
            d(t, { content: e });
            var i = m(this.slides[this.items.indexOf(t)], e);
            $(this.$el, "itemloaded", [this, i]), n.update(i);
          },
          setError: function (t) {
            this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>');
          },
          showControls: function () {
            clearTimeout(this.controlsTimer),
              (this.controlsTimer = setTimeout(
                this.hideControls,
                this.delayControls
              )),
              l(this.$el, "uk-active", "uk-transition-active");
          },
          hideControls: function () {
            x(this.$el, "uk-active", "uk-transition-active");
          },
        },
      });
    }
    function I(t, e, i, n) {
      return (
        '<iframe src="' +
        t +
        '" width="' +
        e +
        '" height="' +
        i +
        '" style="max-width: 100%; box-sizing: border-box;" frameborder="0" allowfullscreen uk-video="autoplay: ' +
        n +
        '" uk-responsive></iframe>'
      );
    }
  }
  function jn(t) {
    if (!jn.installed) {
      var e = t.mixin,
        i = t.util,
        m = i.css,
        d = i.Dimensions,
        n = i.each,
        o = i.getImage,
        v = i.includes,
        r = i.isNumber,
        w = i.isUndefined,
        b = i.toFloat,
        s = [
          "x",
          "y",
          "bgx",
          "bgy",
          "rotate",
          "scale",
          "color",
          "backgroundColor",
          "borderColor",
          "opacity",
          "blur",
          "hue",
          "grayscale",
          "invert",
          "saturate",
          "sepia",
          "fopacity",
        ];
      e.parallax = {
        props: s.reduce(
          function (t, e) {
            return (t[e] = "list"), t;
          },
          { media: "media" }
        ),
        defaults: s.reduce(
          function (t, e) {
            return (t[e] = void 0), t;
          },
          { media: !1 }
        ),
        computed: {
          props: function (f, p) {
            var g = this;
            return s.reduce(function (t, e) {
              if (w(f[e])) return t;
              var i,
                n,
                o,
                s = e.match(/color/i),
                r = s || "opacity" === e,
                a = f[e].slice(0);
              r && m(p, e, ""),
                a.length < 2 &&
                  a.unshift(("scale" === e ? 1 : r ? m(p, e) : 0) || 0);
              var l = v(a.join(""), "%") ? "%" : "px";
              if (s) {
                var u = p.style.color;
                (a = a.map(function (t) {
                  return m(m(p, "color", t), "color")
                    .split(/[(),]/g)
                    .slice(1, -1)
                    .concat(1)
                    .slice(0, 4)
                    .map(function (t) {
                      return b(t);
                    });
                })),
                  (p.style.color = u);
              } else a = a.map(b);
              if (e.match(/^bg/))
                if (
                  (m(p, "background-position-" + e[2], ""),
                  (n = m(p, "backgroundPosition").split(" ")[
                    "x" === e[2] ? 0 : 1
                  ]),
                  g.covers)
                ) {
                  var c = Math.min.apply(Math, a),
                    h = Math.max.apply(Math, a),
                    d = a.indexOf(c) < a.indexOf(h);
                  (o = h - c),
                    (a = a.map(function (t) {
                      return t - (d ? c : h);
                    })),
                    (i = (d ? -o : 0) + "px");
                } else i = n;
              return (
                (t[e] = { steps: a, unit: l, pos: i, bgPos: n, diff: o }), t
              );
            }, {});
          },
          bgProps: function () {
            var e = this;
            return ["bgx", "bgy"].filter(function (t) {
              return t in e.props;
            });
          },
          covers: function (t, e) {
            return (
              (n = (i = e).style.backgroundSize),
              (o = "cover" === m(m(i, "backgroundSize", ""), "backgroundSize")),
              (i.style.backgroundSize = n),
              o
            );
            var i, n, o;
          },
        },
        disconnected: function () {
          delete this._image;
        },
        update: [
          {
            read: function (e) {
              var i = this;
              if (
                ((e.active =
                  !this.media || window.matchMedia(this.media).matches),
                e.image &&
                  (e.image.dimEl = {
                    width: this.$el.offsetWidth,
                    height: this.$el.offsetHeight,
                  }),
                !("image" in e) && this.covers && this.bgProps.length)
              ) {
                var t = m(this.$el, "backgroundImage").replace(
                  /^none|url\(["']?(.+?)["']?\)$/,
                  "$1"
                );
                t &&
                  ((e.image = !1),
                  o(t).then(function (t) {
                    (e.image = {
                      width: t.naturalWidth,
                      height: t.naturalHeight,
                    }),
                      i.$emit();
                  }));
              }
            },
            write: function (t) {
              var l = this,
                u = t.image,
                e = t.active;
              if (u)
                if (e) {
                  var c = u.dimEl,
                    h = d.cover(u, c);
                  this.bgProps.forEach(function (t) {
                    var e = l.props[t],
                      i = e.diff,
                      n = e.bgPos,
                      o = e.steps,
                      s = "bgy" === t ? "height" : "width",
                      r = h[s] - c[s];
                    if (n.match(/%$|0px/)) {
                      if (r < i) c[s] = h[s] + i - r;
                      else if (i < r) {
                        var a = parseFloat(n);
                        a &&
                          (l.props[t].steps = o.map(function (t) {
                            return t - (r - i) / (100 / a);
                          }));
                      }
                      h = d.cover(u, c);
                    }
                  }),
                    m(this.$el, {
                      backgroundSize: h.width + "px " + h.height + "px",
                      backgroundRepeat: "no-repeat",
                    });
                } else
                  m(this.$el, { backgroundSize: "", backgroundRepeat: "" });
            },
            events: ["load", "resize"],
          },
        ],
        methods: {
          reset: function () {
            var i = this;
            n(this.getCss(0), function (t, e) {
              return m(i.$el, e, "");
            });
          },
          getCss: function (p) {
            var g = this.props,
              m = !1;
            return Object.keys(g).reduce(
              function (t, e) {
                var i = g[e],
                  n = i.steps,
                  o = i.unit,
                  s = i.pos,
                  r = x(n, p);
                switch (e) {
                  case "x":
                  case "y":
                    if (m) break;
                    var a = ["x", "y"].map(function (t) {
                        return e === t
                          ? r + o
                          : g[t]
                          ? x(g[t].steps, p) + g[t].unit
                          : 0;
                      }),
                      l = a[0],
                      u = a[1];
                    m = t.transform += " translate3d(" + l + ", " + u + ", 0)";
                    break;
                  case "rotate":
                    t.transform += " rotate(" + r + "deg)";
                    break;
                  case "scale":
                    t.transform += " scale(" + r + ")";
                    break;
                  case "bgy":
                  case "bgx":
                    t["background-position-" + e[2]] =
                      "calc(" + s + " + " + (r + o) + ")";
                    break;
                  case "color":
                  case "backgroundColor":
                  case "borderColor":
                    var c = y(n, p),
                      h = c[0],
                      d = c[1],
                      f = c[2];
                    t[e] =
                      "rgba(" +
                      h
                        .map(function (t, e) {
                          return (
                            (t += f * (d[e] - t)),
                            3 === e ? b(t) : parseInt(t, 10)
                          );
                        })
                        .join(",") +
                      ")";
                    break;
                  case "blur":
                    t.filter += " blur(" + r + "px)";
                    break;
                  case "hue":
                    t.filter += " hue-rotate(" + r + "deg)";
                    break;
                  case "fopacity":
                    t.filter += " opacity(" + r + "%)";
                    break;
                  case "grayscale":
                  case "invert":
                  case "saturate":
                  case "sepia":
                    t.filter += " " + e + "(" + r + "%)";
                    break;
                  default:
                    t[e] = r;
                }
                return t;
              },
              { transform: "", filter: "" }
            );
          },
        },
      };
    }
    function y(t, e) {
      var i = t.length - 1,
        n = Math.min(Math.floor(i * e), i - 1),
        o = t.slice(n, n + 2);
      return o.push(1 === e ? 1 : (e % (1 / i)) * i), o;
    }
    function x(t, e) {
      var i = y(t, e),
        n = i[0],
        o = i[1],
        s = i[2];
      return (r(n) ? n + Math.abs(n - o) * s * (n < o ? 1 : -1) : +o).toFixed(
        2
      );
    }
  }
  function Wn(t) {
    var e = t.util.removeClass;
    return {
      update: [
        {
          write: function () {
            if (!this.stack.length && !this.dragging) {
              var t = this.getValidIndex();
              delete this.index,
                e(this.slides, this.clsActive, this.clsActivated),
                this.show(t);
            }
          },
          events: ["load", "resize"],
        },
      ],
    };
  }
  function Fn(e, i) {
    e.use(jn);
    var t = e.mixin,
      n = e.util,
      o = n.closest,
      a = n.css,
      s = n.endsWith,
      l = n.noop,
      u = n.Transition;
    return {
      mixins: [t.parallax],
      computed: {
        item: function () {
          var t = e.getComponent(o(this.$el, ".uk-" + i), i);
          return t && o(this.$el, t.slidesSelector);
        },
      },
      events: [
        {
          name: "itemshown",
          self: !0,
          el: function () {
            return this.item;
          },
          handler: function () {
            a(this.$el, this.getCss(0.5));
          },
        },
        {
          name: "itemin itemout",
          self: !0,
          el: function () {
            return this.item;
          },
          handler: function (t) {
            var e = t.type,
              i = t.detail,
              n = i.percent,
              o = i.duration,
              s = i.timing,
              r = i.dir;
            u.cancel(this.$el),
              a(this.$el, this.getCss(h(e, r, n))),
              u
                .start(this.$el, this.getCss(c(e) ? 0.5 : 0 < r ? 1 : 0), o, s)
                .catch(l);
          },
        },
        {
          name: "transitioncanceled transitionend",
          self: !0,
          el: function () {
            return this.item;
          },
          handler: function () {
            u.cancel(this.$el);
          },
        },
        {
          name: "itemtranslatein itemtranslateout",
          self: !0,
          el: function () {
            return this.item;
          },
          handler: function (t) {
            var e = t.type,
              i = t.detail,
              n = i.percent,
              o = i.dir;
            u.cancel(this.$el), a(this.$el, this.getCss(h(e, o, n)));
          },
        },
      ],
    };
    function c(t) {
      return s(t, "in");
    }
    function h(t, e, i) {
      return (i /= 2), c(t) ? (e < 0 ? 1 - i : i) : e < 0 ? i : 1 - i;
    }
  }
  return (
    (Bi.version = "3.0.0-beta.42"),
    ((Sn = Bi).mixin.class = Mi),
    (Sn.mixin.container = Hi),
    (Sn.mixin.modal = zi),
    (Sn.mixin.position = Li),
    (Sn.mixin.togglable = Pi),
    (En = Bi).use(Dn),
    En.use(Vi),
    En.use(ji),
    En.use(On),
    En.use(Fi),
    En.use(Ri),
    En.use(qi),
    En.use(Yi),
    En.use(Xi),
    En.use(Gi),
    En.use(vn),
    En.use(Ui),
    En.use(Qi),
    En.use(mn),
    En.use(wn),
    En.use(bn),
    En.use(yn),
    En.use(xn),
    En.use(kn),
    En.use($n),
    En.use(Cn),
    En.use(In),
    En.use(Tn),
    En.use(Nn),
    En.use(gn),
    En.use(_n),
    En.use(Bn),
    En.use(Wi),
    Bi.use(function t(e) {
      if (!t.installed) {
        var i = e.util,
          n = i.$,
          o = i.empty,
          s = i.html;
        e.component("countdown", {
          mixins: [e.mixin.class],
          attrs: !0,
          props: { date: String, clsWrapper: String },
          defaults: { date: "", clsWrapper: ".uk-countdown-%unit%" },
          computed: {
            date: function (t) {
              var e = t.date;
              return Date.parse(e);
            },
            days: function (t, e) {
              var i = t.clsWrapper;
              return n(i.replace("%unit%", "days"), e);
            },
            hours: function (t, e) {
              var i = t.clsWrapper;
              return n(i.replace("%unit%", "hours"), e);
            },
            minutes: function (t, e) {
              var i = t.clsWrapper;
              return n(i.replace("%unit%", "minutes"), e);
            },
            seconds: function (t, e) {
              var i = t.clsWrapper;
              return n(i.replace("%unit%", "seconds"), e);
            },
            units: function () {
              var e = this;
              return ["days", "hours", "minutes", "seconds"].filter(function (
                t
              ) {
                return e[t];
              });
            },
          },
          connected: function () {
            this.start();
          },
          disconnected: function () {
            var e = this;
            this.stop(),
              this.units.forEach(function (t) {
                return o(e[t]);
              });
          },
          events: [
            {
              name: "visibilitychange",
              el: document,
              handler: function () {
                document.hidden ? this.stop() : this.start();
              },
            },
          ],
          update: {
            write: function () {
              var t,
                e,
                n = this,
                o =
                  ((t = this.date),
                  {
                    total: (e = t - Date.now()),
                    seconds: (e / 1e3) % 60,
                    minutes: (e / 1e3 / 60) % 60,
                    hours: (e / 1e3 / 60 / 60) % 24,
                    days: e / 1e3 / 60 / 60 / 24,
                  });
              o.total <= 0 &&
                (this.stop(), (o.days = o.hours = o.minutes = o.seconds = 0)),
                this.units.forEach(function (t) {
                  var e = String(Math.floor(o[t]));
                  e = e.length < 2 ? "0" + e : e;
                  var i = n[t];
                  i.textContent !== e &&
                    ((e = e.split("")).length !== i.children.length &&
                      s(
                        i,
                        e
                          .map(function () {
                            return "<span></span>";
                          })
                          .join("")
                      ),
                    e.forEach(function (t, e) {
                      return (i.children[e].textContent = t);
                    }));
                });
            },
          },
          methods: {
            start: function () {
              var t = this;
              this.stop(),
                this.date &&
                  this.units.length &&
                  (this.$emit(),
                  (this.timer = setInterval(function () {
                    return t.$emit();
                  }, 1e3)));
            },
            stop: function () {
              this.timer && (clearInterval(this.timer), (this.timer = null));
            },
          },
        });
      }
    }),
    Bi.use(function t(e) {
      if (!t.installed) {
        var i = e.util,
          n = i.addClass,
          o = i.css,
          s = i.scrolledOver,
          r = i.sortBy,
          a = i.toFloat;
        e.component(
          "grid-parallax",
          e.components.grid.extend({
            props: { target: String, translate: Number },
            defaults: { target: !1, translate: 150 },
            computed: {
              translate: function (t) {
                var e = t.translate;
                return Math.abs(e);
              },
            },
            init: function () {
              n(this.$el, "uk-grid");
            },
            disconnected: function () {
              this.reset(), o(this.$el, "marginBottom", "");
            },
            update: [
              {
                read: function (t) {
                  var e = t.rows;
                  return {
                    columns: (e && e[0] && e[0].length) || 0,
                    rows:
                      e &&
                      e.map(function (t) {
                        return r(t, "offsetLeft");
                      }),
                  };
                },
                write: function (t) {
                  var e = t.columns;
                  o(
                    this.$el,
                    "marginBottom",
                    1 < e
                      ? this.translate +
                          a(o(o(this.$el, "marginBottom", ""), "marginBottom"))
                      : ""
                  );
                },
                events: ["load", "resize"],
              },
              {
                read: function () {
                  return { scrolled: s(this.$el) * this.translate };
                },
                write: function (t) {
                  var e = t.rows,
                    i = t.columns,
                    n = t.scrolled;
                  if (!e || 1 === i || !n) return this.reset();
                  e.forEach(function (t) {
                    return t.forEach(function (t, e) {
                      return o(
                        t,
                        "transform",
                        "translateY(" + (e % 2 ? n : n / 8) + "px)"
                      );
                    });
                  });
                },
                events: ["scroll", "load", "resize"],
              },
            ],
            methods: {
              reset: function () {
                o(this.$el.children, "transform", "");
              },
            },
          })
        ),
          e.components.gridParallax.options.update.unshift({
            read: function () {
              this.reset();
            },
            events: ["load", "resize"],
          });
      }
    }),
    Bi.use(function t(e) {
      if (!t.installed) {
        e.use(Vn);
        var i = e.util,
          n = i.$$,
          o = i.assign,
          s = i.data,
          r = i.index,
          a = e.components.lightboxPanel.options;
        e.component("lightbox", {
          attrs: !0,
          props: o({ toggle: String }, a.props),
          defaults: o(
            { toggle: "a" },
            Object.keys(a.props).reduce(function (t, e) {
              return (t[e] = a.defaults[e]), t;
            }, {})
          ),
          computed: {
            toggles: function (t, e) {
              var i = t.toggle;
              return n(i, e);
            },
          },
          disconnected: function () {
            this._destroy();
          },
          events: [
            {
              name: "click",
              delegate: function () {
                return this.toggle + ":not(.uk-disabled)";
              },
              handler: function (t) {
                t.preventDefault(),
                  t.current.blur(),
                  this.show(r(this.toggles, t.current));
              },
            },
          ],
          update: function (t) {
            var e, i;
            (t.toggles = t.toggles || this.toggles),
              this.panel &&
                this.animation &&
                ((this.panel.$props.animation = this.animation),
                this.panel.$emit()),
              this.panel &&
                ((e = t.toggles),
                (i = this.toggles),
                e.length !== i.length ||
                  !e.every(function (t, e) {
                    return t === i[e];
                  })) &&
                ((t.toggles = this.toggles), this._destroy(), this._init());
          },
          methods: {
            _init: function () {
              return (this.panel =
                this.panel ||
                e.lightboxPanel(
                  o({}, this.$props, {
                    items: this.toggles.reduce(function (t, i) {
                      return (
                        t.push(
                          ["href", "caption", "type", "poster", "alt"].reduce(
                            function (t, e) {
                              return (
                                (t["href" === e ? "source" : e] = s(i, e)), t
                              );
                            },
                            {}
                          )
                        ),
                        t
                      );
                    }, []),
                  })
                ));
            },
            _destroy: function () {
              this.panel && (this.panel.$destroy(!0), (this.panel = null));
            },
            show: function (t) {
              return this.panel || this._init(), this.panel.show(t);
            },
            hide: function () {
              return this.panel && this.panel.hide();
            },
          },
        });
      }
    }),
    Bi.use(function t(o) {
      var e;
      if (!t.installed) {
        var i = o.util,
          n = i.append,
          s = i.apply,
          r = i.closest,
          a = i.css,
          l = i.pointerEnter,
          u = i.pointerLeave,
          c = i.remove,
          h = i.toFloat,
          d = i.Transition,
          f = i.trigger,
          p = {};
        o.component("notification", {
          functional: !0,
          args: ["message", "status"],
          defaults: {
            message: "",
            status: "",
            timeout: 5e3,
            group: null,
            pos: "top-center",
            clsClose: "uk-notification-close",
            clsMsg: "uk-notification-message",
          },
          created: function () {
            p[this.pos] ||
              (p[this.pos] = n(
                o.container,
                '<div class="uk-notification uk-notification-' +
                  this.pos +
                  '"></div>'
              ));
            var t = a(p[this.pos], "display", "block");
            this.$mount(
              n(
                t,
                '<div class="' +
                  this.clsMsg +
                  (this.status ? " " + this.clsMsg + "-" + this.status : "") +
                  '"> <a href="#" class="' +
                  this.clsClose +
                  '" data-uk-close></a> <div>' +
                  this.message +
                  "</div> </div>"
              )
            );
          },
          ready: function () {
            var t = this,
              e = h(a(this.$el, "marginBottom"));
            d.start(
              a(this.$el, {
                opacity: 0,
                marginTop: -this.$el.offsetHeight,
                marginBottom: 0,
              }),
              { opacity: 1, marginTop: 0, marginBottom: e }
            ).then(function () {
              t.timeout && (t.timer = setTimeout(t.close, t.timeout));
            });
          },
          events:
            ((e = {
              click: function (t) {
                r(t.target, 'a[href="#"]') && t.preventDefault(), this.close();
              },
            }),
            (e[l] = function () {
              this.timer && clearTimeout(this.timer);
            }),
            (e[u] = function () {
              this.timeout &&
                (this.timer = setTimeout(this.close, this.timeout));
            }),
            e),
          methods: {
            close: function (t) {
              var e = this,
                i = function () {
                  f(e.$el, "close", [e]),
                    c(e.$el),
                    p[e.pos].children.length || a(p[e.pos], "display", "none");
                };
              this.timer && clearTimeout(this.timer),
                t
                  ? i()
                  : d
                      .start(this.$el, {
                        opacity: 0,
                        marginTop: -this.$el.offsetHeight,
                        marginBottom: 0,
                      })
                      .then(i);
            },
          },
        }),
          (o.notification.closeAll = function (i, n) {
            s(document.body, function (t) {
              var e = o.getComponent(t, "notification");
              !e || (i && i !== e.group) || e.close(n);
            });
          });
      }
    }),
    Bi.use(function t(e) {
      if (!t.installed) {
        e.use(jn);
        var i = e.mixin,
          n = e.util,
          o = n.clamp,
          s = n.css,
          r = n.scrolledOver,
          a = n.query;
        e.component("parallax", {
          mixins: [i.parallax],
          props: { target: String, viewport: Number, easing: Number },
          defaults: { target: !1, viewport: 1, easing: 1 },
          computed: {
            target: function (t, e) {
              var i = t.target;
              return (i && a(i, e)) || e;
            },
          },
          update: [
            {
              read: function (t) {
                var e, i;
                return {
                  prev: t.percent,
                  percent:
                    ((e = r(this.target) / (this.viewport || 1)),
                    (i = this.easing),
                    o(e * (1 - (i - i * e)))),
                };
              },
              write: function (t, e) {
                var i = t.prev,
                  n = t.percent,
                  o = t.active;
                "scroll" !== e.type && (i = !1),
                  o ? i !== n && s(this.$el, this.getCss(n)) : this.reset();
              },
              events: ["scroll", "load", "resize"],
            },
          ],
        });
      }
    }),
    Bi.use(function t(e) {
      if (!t.installed) {
        e.use(Pn);
        var i = e.mixin,
          n = e.util,
          o = n.$,
          s = n.$$,
          r = n.addClass,
          a = n.css,
          l = n.data,
          u = n.includes,
          c = n.isNumeric,
          h = n.isUndefined,
          d = n.offset,
          f = n.toggleClass,
          p = n.toFloat,
          g = (function (t) {
            var e = t.util,
              i = e.assign,
              c = e.clamp,
              n = e.createEvent,
              h = e.css,
              d = e.Deferred,
              f = e.includes,
              p = e.index,
              g = e.isRtl,
              m = e.noop,
              v = e.sortBy,
              o = e.toNodes,
              w = e.Transition,
              s = e.trigger,
              b = i(
                function (o, n, s, t) {
                  var e = t.center,
                    r = t.easing,
                    a = t.list,
                    l = new d(),
                    i = o
                      ? b.getLeft(o, a, e)
                      : b.getLeft(n, a, e) + n.offsetWidth * s,
                    u = n
                      ? b.getLeft(n, a, e)
                      : i + o.offsetWidth * s * (g ? -1 : 1);
                  return {
                    dir: s,
                    show: function (t, e, i) {
                      void 0 === e && (e = 0);
                      var n = i ? "linear" : r;
                      return (
                        (t -= Math.round(t * c(e, -1, 1))),
                        this.translate(e),
                        o && this.updateTranslates(),
                        (e = o ? e : c(e, 0, 1)),
                        y(this.getItemIn(), "itemin", {
                          percent: e,
                          duration: t,
                          timing: n,
                          dir: s,
                        }),
                        o &&
                          y(this.getItemIn(!0), "itemout", {
                            percent: 1 - e,
                            duration: t,
                            timing: n,
                            dir: s,
                          }),
                        w
                          .start(
                            a,
                            { transform: Mn(-u * (g ? -1 : 1), "px") },
                            t,
                            n
                          )
                          .then(l.resolve, m),
                        l.promise
                      );
                    },
                    stop: function () {
                      return w.stop(a);
                    },
                    cancel: function () {
                      w.cancel(a);
                    },
                    reset: function () {
                      h(a, "transform", "");
                    },
                    forward: function (t, e) {
                      return (
                        void 0 === e && (e = this.percent()),
                        w.cancel(a),
                        this.show(t, e, !0)
                      );
                    },
                    translate: function (t) {
                      var e = this.getDistance() * s * (g ? -1 : 1);
                      h(
                        a,
                        "transform",
                        Mn(
                          c(e - e * t - u, -b.getWidth(a), a.offsetWidth) *
                            (g ? -1 : 1),
                          "px"
                        )
                      ),
                        this.updateTranslates(),
                        o &&
                          ((t = c(t, -1, 1)),
                          y(this.getItemIn(), "itemtranslatein", {
                            percent: t,
                            dir: s,
                          }),
                          y(this.getItemIn(!0), "itemtranslateout", {
                            percent: 1 - t,
                            dir: s,
                          }));
                    },
                    percent: function () {
                      return Math.abs(
                        (h(a, "transform").split(",")[4] * (g ? -1 : 1) + i) /
                          (u - i)
                      );
                    },
                    getDistance: function () {
                      return Math.abs(u - i);
                    },
                    getItemIn: function (t) {
                      void 0 === t && (t = !1);
                      var e = this.getActives(),
                        i = v(x(a), "offsetLeft"),
                        n = p(i, e[0 < s * (t ? -1 : 1) ? e.length - 1 : 0]);
                      return ~n && i[n + (o && !t ? s : 0)];
                    },
                    getActives: function () {
                      var i = b.getLeft(o || n, a, e);
                      return v(
                        x(a).filter(function (t) {
                          var e = b.getElLeft(t, a);
                          return (
                            i <= e && e + t.offsetWidth <= a.offsetWidth + i
                          );
                        }),
                        "offsetLeft"
                      );
                    },
                    updateTranslates: function () {
                      var i = this.getActives();
                      x(a).forEach(function (t) {
                        var e = f(i, t);
                        y(t, "itemtranslate" + (e ? "in" : "out"), {
                          percent: e ? 1 : 0,
                          dir: t.offsetLeft <= n.offsetLeft ? 1 : -1,
                        });
                      });
                    },
                  };
                },
                {
                  getLeft: function (t, e, i) {
                    var n = this.getElLeft(t, e);
                    return i
                      ? n - this.center(t, e)
                      : Math.min(n, this.getMax(e));
                  },
                  getMax: function (t) {
                    return Math.max(0, this.getWidth(t) - t.offsetWidth);
                  },
                  getWidth: function (t) {
                    return x(t).reduce(function (t, e) {
                      return e.offsetWidth + t;
                    }, 0);
                  },
                  getMaxWidth: function (t) {
                    return x(t).reduce(function (t, e) {
                      return Math.max(t, e.offsetWidth);
                    }, 0);
                  },
                  center: function (t, e) {
                    return e.offsetWidth / 2 - t.offsetWidth / 2;
                  },
                  getElLeft: function (t, e) {
                    return (
                      (t.offsetLeft + (g ? t.offsetWidth - e.offsetWidth : 0)) *
                      (g ? -1 : 1)
                    );
                  },
                }
              );
            function y(t, e, i) {
              s(t, n(e, !1, !1, i));
            }
            function x(t) {
              return o(t.children);
            }
            return b;
          })(e);
        e.component("slider-parallax", Fn(e, "slider")),
          e.component("slider", {
            mixins: [i.class, i.slider, Wn(e)],
            props: { center: Boolean, sets: Boolean },
            defaults: {
              center: !1,
              sets: !1,
              attrItem: "uk-slider-item",
              selList: ".uk-slider-items",
              selNav: ".uk-slider-nav",
              clsContainer: "uk-slider-container",
              Transitioner: g,
            },
            computed: {
              avgWidth: function () {
                return g.getWidth(this.list) / this.length;
              },
              finite: function (t) {
                var e = t.finite;
                return (
                  e ||
                  g.getWidth(this.list) <
                    this.list.offsetWidth +
                      g.getMaxWidth(this.list) +
                      this.center
                );
              },
              maxIndex: function () {
                if (!this.finite || (this.center && !this.sets))
                  return this.length - 1;
                if (this.center) return this.sets[this.sets.length - 1];
                a(this.slides, "order", "");
                for (var t = g.getMax(this.list), e = this.length; e--; )
                  if (g.getElLeft(this.list.children[e], this.list) < t)
                    return Math.min(e + 1, this.length - 1);
                return 0;
              },
              sets: function (t) {
                var s = this,
                  e = t.sets,
                  r = this.list.offsetWidth / (this.center ? 2 : 1),
                  a = 0,
                  l = r;
                return (
                  (e =
                    e &&
                    this.slides.reduce(function (t, e, i) {
                      var n = d(e);
                      if (
                        n.right > a &&
                        (!s.center && i > s.maxIndex && (i = s.maxIndex),
                        !u(t, i))
                      ) {
                        var o = s.slides[i + 1];
                        s.center && o && n.width < l - d(o).width / 2
                          ? (l -= n.width)
                          : ((l = r),
                            t.push(i),
                            (a = n.left + r + (s.center ? n.width / 2 : 0)));
                      }
                      return t;
                    }, [])),
                  e && e.length && e
                );
              },
              transitionOptions: function () {
                return { center: this.center, list: this.list };
              },
            },
            connected: function () {
              f(
                this.$el,
                this.clsContainer,
                !o("." + this.clsContainer, this.$el)
              );
            },
            update: {
              write: function () {
                var i = this;
                s(
                  "[" + this.attrItem + "],[data-" + this.attrItem + "]",
                  this.$el
                ).forEach(function (t) {
                  var e = l(t, i.attrItem);
                  i.maxIndex &&
                    f(
                      t,
                      "uk-hidden",
                      c(e) && ((i.sets && !u(i.sets, p(e))) || e > i.maxIndex)
                    );
                });
              },
              events: ["load", "resize"],
            },
            events: {
              beforeitemshow: function (t) {
                !this.dragging &&
                  this.sets &&
                  this.stack.length < 2 &&
                  !u(this.sets, this.index) &&
                  (this.index = this.getValidIndex());
                var e = Math.abs(
                  this.index -
                    this.prevIndex +
                    ((0 < this.dir && this.index < this.prevIndex) ||
                    (this.dir < 0 && this.index > this.prevIndex)
                      ? (this.maxIndex + 1) * this.dir
                      : 0)
                );
                if (!this.dragging && 1 < e) {
                  for (var i = 0; i < e; i++)
                    this.stack.splice(1, 0, 0 < this.dir ? "next" : "previous");
                  t.preventDefault();
                } else
                  (this.duration =
                    zn(this.avgWidth / this.velocity) *
                    ((this.dir < 0 || !this.slides[this.prevIndex]
                      ? this.slides[this.index]
                      : this.slides[this.prevIndex]
                    ).offsetWidth /
                      this.avgWidth)),
                    this.reorder();
              },
              itemshow: function () {
                !h(this.prevIndex) &&
                  r(this._getTransitioner().getItemIn(), this.clsActive);
              },
              itemshown: function () {
                var e = this,
                  i = this._getTransitioner(this.index).getActives();
                this.slides.forEach(function (t) {
                  return f(t, e.clsActive, u(i, t));
                }),
                  (!this.sets || u(this.sets, p(this.index))) &&
                    this.slides.forEach(function (t) {
                      return f(t, e.clsActivated, u(i, t));
                    });
              },
            },
            methods: {
              reorder: function () {
                var i = this;
                if ((a(this.slides, "order", ""), !this.finite)) {
                  var n =
                    0 < this.dir && this.slides[this.prevIndex]
                      ? this.prevIndex
                      : this.index;
                  if (
                    (this.slides.forEach(function (t, e) {
                      return a(
                        t,
                        "order",
                        0 < i.dir && e < n
                          ? 1
                          : i.dir < 0 && e >= i.index
                          ? -1
                          : ""
                      );
                    }),
                    this.center)
                  )
                    for (
                      var t = this.slides[n],
                        e = this.list.offsetWidth / 2 - t.offsetWidth / 2,
                        o = 0;
                      0 < e;

                    ) {
                      var s = i.getIndex(--o + n, n),
                        r = i.slides[s];
                      a(r, "order", n < s ? -2 : -1), (e -= r.offsetWidth);
                    }
                }
              },
              getValidIndex: function (t, e) {
                var i;
                if (
                  (void 0 === t && (t = this.index),
                  void 0 === e && (e = this.prevIndex),
                  (t = this.getIndex(t, e)),
                  !this.sets)
                )
                  return t;
                do {
                  if (u(this.sets, t)) return t;
                  (i = t), (t = this.getIndex(t + this.dir, e));
                } while (t !== i);
                return t;
              },
            },
          });
      }
    }),
    Bi.use(function t(e) {
      if (!t.installed) {
        e.use(Ln);
        var i,
          n,
          o,
          s,
          r,
          a,
          l = e.mixin,
          u = e.util.height,
          c =
            ((n = (i = e).mixin),
            (o = i.util),
            (s = o.assign),
            (r = o.css),
            (a = s({}, n.slideshow.defaults.Animations, {
              fade: {
                show: function () {
                  return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
                },
                percent: function (t) {
                  return 1 - r(t, "opacity");
                },
                translate: function (t) {
                  return [{ opacity: 1 - t, zIndex: 0 }, { zIndex: -1 }];
                },
              },
              scale: {
                show: function () {
                  return [
                    { opacity: 0, transform: Hn(1.5), zIndex: 0 },
                    { zIndex: -1 },
                  ];
                },
                percent: function (t) {
                  return 1 - r(t, "opacity");
                },
                translate: function (t) {
                  return [
                    { opacity: 1 - t, transform: Hn(1 + 0.5 * t), zIndex: 0 },
                    { zIndex: -1 },
                  ];
                },
              },
              pull: {
                show: function (t) {
                  return t < 0
                    ? [
                        { transform: Mn(30), zIndex: -1 },
                        { transform: Mn(), zIndex: 0 },
                      ]
                    : [
                        { transform: Mn(-100), zIndex: 0 },
                        { transform: Mn(), zIndex: -1 },
                      ];
                },
                percent: function (t, e, i) {
                  return i < 0 ? 1 - a.translated(e) : a.translated(t);
                },
                translate: function (t, e) {
                  return e < 0
                    ? [
                        { transform: Mn(30 * t), zIndex: -1 },
                        { transform: Mn(-100 * (1 - t)), zIndex: 0 },
                      ]
                    : [
                        { transform: Mn(100 * -t), zIndex: 0 },
                        { transform: Mn(30 * (1 - t)), zIndex: -1 },
                      ];
                },
              },
              push: {
                show: function (t) {
                  return t < 0
                    ? [
                        { transform: Mn(100), zIndex: 0 },
                        { transform: Mn(), zIndex: -1 },
                      ]
                    : [
                        { transform: Mn(-30), zIndex: -1 },
                        { transform: Mn(), zIndex: 0 },
                      ];
                },
                percent: function (t, e, i) {
                  return 0 < i ? 1 - a.translated(e) : a.translated(t);
                },
                translate: function (t, e) {
                  return e < 0
                    ? [
                        { transform: Mn(100 * t), zIndex: 0 },
                        { transform: Mn(-30 * (1 - t)), zIndex: -1 },
                      ]
                    : [
                        { transform: Mn(-30 * t), zIndex: -1 },
                        { transform: Mn(100 * (1 - t)), zIndex: 0 },
                      ];
                },
              },
            })));
        e.component("slideshow-parallax", Fn(e, "slideshow")),
          e.component("slideshow", {
            mixins: [l.class, l.slideshow, Wn(e)],
            props: { ratio: String, minHeight: Boolean, maxHeight: Boolean },
            defaults: {
              ratio: "16:9",
              minHeight: !1,
              maxHeight: !1,
              selList: ".uk-slideshow-items",
              attrItem: "uk-slideshow-item",
              selNav: ".uk-slideshow-nav",
              Animations: c,
            },
            update: {
              read: function () {
                var t = this.ratio.split(":").map(Number),
                  e = t[0],
                  i = t[1];
                return (
                  (i = (i * this.$el.offsetWidth) / e),
                  this.minHeight && (i = Math.max(this.minHeight, i)),
                  this.maxHeight && (i = Math.min(this.maxHeight, i)),
                  { height: i }
                );
              },
              write: function (t) {
                var e = t.height;
                u(this.list, Math.floor(e));
              },
              events: ["load", "resize"],
            },
          });
      }
    }),
    Bi.use(function t(r) {
      var e;
      if (!t.installed) {
        var i = r.mixin,
          n = r.util,
          s = n.addClass,
          a = n.after,
          l = n.assign,
          u = n.append,
          o = n.attr,
          c = n.before,
          h = n.closest,
          d = n.css,
          f = n.height,
          p = n.fastdom,
          g = n.getPos,
          m = n.includes,
          v = n.index,
          w = n.isInput,
          b = n.noop,
          y = n.offset,
          x = n.off,
          k = n.on,
          $ = n.pointerDown,
          C = n.pointerMove,
          I = n.pointerUp,
          T = n.position,
          S = n.preventClick,
          E = n.Promise,
          A = n.remove,
          N = n.removeClass,
          _ = n.toggleClass,
          B = n.toNodes,
          D = n.Transition,
          O = n.trigger,
          M = n.within;
        r.component("sortable", {
          mixins: [i.class],
          props: {
            group: String,
            animation: Number,
            threshold: Number,
            clsItem: String,
            clsPlaceholder: String,
            clsDrag: String,
            clsDragState: String,
            clsBase: String,
            clsNoDrag: String,
            clsEmpty: String,
            clsCustom: String,
            handle: String,
          },
          defaults: {
            group: !1,
            animation: 150,
            threshold: 5,
            clsItem: "uk-sortable-item",
            clsPlaceholder: "uk-sortable-placeholder",
            clsDrag: "uk-sortable-drag",
            clsDragState: "uk-drag",
            clsBase: "uk-sortable",
            clsNoDrag: "uk-sortable-nodrag",
            clsEmpty: "uk-sortable-empty",
            clsCustom: "",
            handle: !1,
          },
          init: function () {
            var s = this;
            ["init", "start", "move", "end"].forEach(function (t) {
              var o = s[t];
              s[t] = function (t) {
                s.scrollY = window.pageYOffset;
                var e = g(t),
                  i = e.x,
                  n = e.y;
                (s.pos = { x: i, y: n }), o(t);
              };
            });
          },
          events: ((e = {}), (e[$] = "init"), e),
          update: {
            write: function () {
              if (
                (this.clsEmpty &&
                  _(this.$el, this.clsEmpty, !this.$el.children.length),
                this.drag)
              ) {
                y(this.drag, {
                  top: this.pos.y + this.origin.top,
                  left: this.pos.x + this.origin.left,
                });
                var t,
                  e = y(this.drag).top,
                  i = e + this.drag.offsetHeight;
                0 < e && e < this.scrollY
                  ? (t = this.scrollY - 5)
                  : i < f(document) &&
                    i > f(window) + this.scrollY &&
                    (t = this.scrollY + 5),
                  t &&
                    setTimeout(function () {
                      return window.scrollTo(window.scrollX, t);
                    }, 5);
              }
            },
          },
          methods: {
            init: function (t) {
              var e = t.target,
                i = t.button,
                n = t.defaultPrevented,
                o = B(this.$el.children).filter(function (t) {
                  return M(e, t);
                })[0];
              !o ||
                w(t.target) ||
                (this.handle && !M(e, this.handle)) ||
                0 < i ||
                M(e, "." + this.clsNoDrag) ||
                n ||
                (t.preventDefault(),
                (this.touched = [this]),
                (this.placeholder = o),
                (this.origin = l({ target: e, index: v(o) }, this.pos)),
                k(document, C, this.move),
                k(document, I, this.end),
                k(window, "scroll", this.scroll),
                this.threshold || this.start(t));
            },
            start: function (t) {
              (this.drag = u(
                r.container,
                this.placeholder.outerHTML
                  .replace(/^<li/i, "<div")
                  .replace(/li>$/i, "div>")
              )),
                d(
                  this.drag,
                  l(
                    {
                      boxSizing: "border-box",
                      width: this.placeholder.offsetWidth,
                      height: this.placeholder.offsetHeight,
                    },
                    d(this.placeholder, [
                      "paddingLeft",
                      "paddingRight",
                      "paddingTop",
                      "paddingBottom",
                    ])
                  )
                ),
                o(this.drag, "uk-no-boot", ""),
                s(this.drag, this.clsDrag, this.clsCustom),
                f(
                  this.drag.firstElementChild,
                  f(this.placeholder.firstElementChild)
                );
              var e = y(this.placeholder),
                i = e.left,
                n = e.top;
              l(this.origin, { left: i - this.pos.x, top: n - this.pos.y }),
                s(this.placeholder, this.clsPlaceholder),
                s(this.$el.children, this.clsItem),
                s(document.documentElement, this.clsDragState),
                O(this.$el, "start", [this, this.placeholder, this.drag]),
                this.move(t);
            },
            move: function (t) {
              if (this.drag) {
                this.$emit();
                var e =
                    "mousemove" === t.type
                      ? t.target
                      : document.elementFromPoint(
                          this.pos.x - document.body.scrollLeft,
                          this.pos.y - document.body.scrollTop
                        ),
                  i = H(e),
                  n = H(this.placeholder),
                  o = i !== n;
                if (
                  i &&
                  !M(e, this.placeholder) &&
                  (!o || (i.group && i.group === n.group))
                ) {
                  if (
                    ((e =
                      (i.$el === e.parentNode && e) ||
                      B(i.$el.children).filter(function (t) {
                        return M(e, t);
                      })[0]),
                    o)
                  )
                    n.remove(this.placeholder);
                  else if (!e) return;
                  i.insert(this.placeholder, e),
                    m(this.touched, i) || this.touched.push(i);
                }
              } else
                (Math.abs(this.pos.x - this.origin.x) > this.threshold ||
                  Math.abs(this.pos.y - this.origin.y) > this.threshold) &&
                  this.start(t);
            },
            scroll: function () {
              var t = window.pageYOffset;
              t !== this.scrollY &&
                ((this.pos.y += t - this.scrollY),
                (this.scrollY = t),
                this.$emit());
            },
            end: function (t) {
              if (
                (x(document, C, this.move),
                x(document, I, this.end),
                x(window, "scroll", this.scroll),
                this.drag)
              ) {
                S();
                var e = H(this.placeholder);
                this === e
                  ? this.origin.index !== v(this.placeholder) &&
                    O(this.$el, "moved", [this, this.placeholder])
                  : (O(e.$el, "added", [e, this.placeholder]),
                    O(this.$el, "removed", [this, this.placeholder])),
                  O(this.$el, "stop", [this]),
                  A(this.drag),
                  (this.drag = null);
                var i = this.touched
                  .map(function (t) {
                    return t.clsPlaceholder + " " + t.clsItem;
                  })
                  .join(" ");
                this.touched.forEach(function (t) {
                  return N(t.$el.children, i);
                }),
                  N(document.documentElement, this.clsDragState);
              } else
                "mouseup" !== t.type &&
                  M(t.target, "a[href]") &&
                  (location.href = h(t.target, "a[href]").href);
            },
            insert: function (i, n) {
              var o = this;
              s(this.$el.children, this.clsItem);
              var t = function () {
                var t, e;
                n
                  ? !M(i, o.$el) ||
                    ((e = n),
                    (t = i).parentNode === e.parentNode && v(t) > v(e))
                    ? c(n, i)
                    : a(n, i)
                  : u(o.$el, i);
              };
              this.animation ? this.animate(t) : t();
            },
            remove: function (t) {
              M(t, this.$el) &&
                (this.animation
                  ? this.animate(function () {
                      return A(t);
                    })
                  : A(t));
            },
            animate: function (t) {
              var i = this,
                n = [],
                e = B(this.$el.children),
                o = {
                  position: "",
                  width: "",
                  height: "",
                  pointerEvents: "",
                  top: "",
                  left: "",
                  bottom: "",
                  right: "",
                };
              e.forEach(function (t) {
                n.push(
                  l(
                    {
                      position: "absolute",
                      pointerEvents: "none",
                      width: t.offsetWidth,
                      height: t.offsetHeight,
                    },
                    T(t)
                  )
                );
              }),
                t(),
                e.forEach(D.cancel),
                d(this.$el.children, o),
                r.update(this.$el),
                p.flush(),
                d(this.$el, "minHeight", f(this.$el));
              var s = e.map(function (t) {
                return T(t);
              });
              E.all(
                e.map(function (t, e) {
                  return D.start(d(t, n[e]), s[e], i.animation);
                })
              ).then(function () {
                d(i.$el, "minHeight", ""), d(e, o), r.update(i.$el), p.flush();
              }, b);
            },
          },
        });
      }
      function H(t) {
        return t && (r.getComponent(t, "sortable") || H(t.parentNode));
      }
    }),
    Bi.use(function t(e) {
      var i;
      if (!t.installed) {
        var n = e.util,
          o = e.mixin,
          s = n.append,
          r = n.attr,
          a = n.flipPosition,
          l = n.hasAttr,
          u = n.includes,
          c = n.isTouch,
          h = n.isVisible,
          d = n.matches,
          f = n.on,
          p = n.pointerDown,
          g = n.pointerEnter,
          m = n.pointerLeave,
          v = n.remove,
          w = n.within,
          b = [];
        e.component("tooltip", {
          attrs: !0,
          args: "title",
          mixins: [o.container, o.togglable, o.position],
          props: { delay: Number, title: String },
          defaults: {
            pos: "top",
            title: "",
            delay: 0,
            animation: ["uk-animation-scale-up"],
            duration: 100,
            cls: "uk-active",
            clsPos: "uk-tooltip",
          },
          beforeConnect: function () {
            (this._hasTitle = l(this.$el, "title")),
              r(this.$el, { title: "", "aria-expanded": !1 });
          },
          disconnected: function () {
            this.hide(),
              r(this.$el, {
                title: this._hasTitle ? this.title : null,
                "aria-expanded": null,
              });
          },
          methods: {
            show: function () {
              var e = this;
              u(b, this) ||
                (b.forEach(function (t) {
                  return t.hide();
                }),
                b.push(this),
                (this._unbind = f(document, "click", function (t) {
                  return !w(t.target, e.$el) && e.hide();
                })),
                clearTimeout(this.showTimer),
                (this.tooltip = s(
                  this.container,
                  '<div class="' +
                    this.clsPos +
                    '" aria-hidden><div class="' +
                    this.clsPos +
                    '-inner">' +
                    this.title +
                    "</div></div>"
                )),
                r(this.$el, "aria-expanded", !0),
                this.positionAt(this.tooltip, this.$el),
                (this.origin =
                  "y" === this.getAxis()
                    ? a(this.dir) + "-" + this.align
                    : this.align + "-" + a(this.dir)),
                (this.showTimer = setTimeout(function () {
                  e.toggleElement(e.tooltip, !0),
                    (e.hideTimer = setInterval(function () {
                      h(e.$el) || e.hide();
                    }, 150));
                }, this.delay)));
            },
            hide: function () {
              var t = b.indexOf(this);
              !~t ||
                (d(this.$el, "input") && this.$el === document.activeElement) ||
                (b.splice(t, 1),
                clearTimeout(this.showTimer),
                clearInterval(this.hideTimer),
                r(this.$el, "aria-expanded", !1),
                this.toggleElement(this.tooltip, !1),
                this.tooltip && v(this.tooltip),
                (this.tooltip = !1),
                this._unbind());
            },
          },
          events:
            ((i = {}),
            (i["focus " + g + " " + p] = function (t) {
              (t.type === p && c(t)) || this.show();
            }),
            (i.blur = "hide"),
            (i[m] = function (t) {
              c(t) || this.hide();
            }),
            i),
        });
      }
    }),
    Bi.use(function t(e) {
      if (!t.installed) {
        var i = e.util,
          n = i.addClass,
          r = i.ajax,
          o = i.matches,
          s = i.noop,
          a = i.on,
          l = i.removeClass,
          u = i.trigger;
        e.component("upload", {
          props: {
            allow: String,
            clsDragover: String,
            concurrent: Number,
            maxSize: Number,
            method: String,
            mime: String,
            msgInvalidMime: String,
            msgInvalidName: String,
            msgInvalidSize: String,
            multiple: Boolean,
            name: String,
            params: Object,
            type: String,
            url: String,
          },
          defaults: {
            allow: !1,
            clsDragover: "uk-dragover",
            concurrent: 1,
            maxSize: 0,
            method: "POST",
            mime: !1,
            msgInvalidMime: "Invalid File Type: %s",
            msgInvalidName: "Invalid File Name: %s",
            msgInvalidSize: "Invalid File Size: %s Bytes Max",
            multiple: !1,
            name: "files[]",
            params: {},
            type: "",
            url: "",
            abort: s,
            beforeAll: s,
            beforeSend: s,
            complete: s,
            completeAll: s,
            error: s,
            fail: s,
            load: s,
            loadEnd: s,
            loadStart: s,
            progress: s,
          },
          events: {
            change: function (t) {
              o(t.target, 'input[type="file"]') &&
                (t.preventDefault(),
                t.target.files && this.upload(t.target.files),
                (t.target.value = ""));
            },
            drop: function (t) {
              h(t);
              var e = t.dataTransfer;
              e &&
                e.files &&
                (l(this.$el, this.clsDragover), this.upload(e.files));
            },
            dragenter: function (t) {
              h(t);
            },
            dragover: function (t) {
              h(t), n(this.$el, this.clsDragover);
            },
            dragleave: function (t) {
              h(t), l(this.$el, this.clsDragover);
            },
          },
          methods: {
            upload: function (t) {
              var n = this;
              if (t.length) {
                u(this.$el, "upload", [t]);
                for (var e = 0; e < t.length; e++) {
                  if (n.maxSize && 1e3 * n.maxSize < t[e].size)
                    return void n.fail(n.msgInvalidSize.replace("%s", n.allow));
                  if (n.allow && !c(n.allow, t[e].name))
                    return void n.fail(n.msgInvalidName.replace("%s", n.allow));
                  if (n.mime && !c(n.mime, t[e].type))
                    return void n.fail(n.msgInvalidMime.replace("%s", n.mime));
                }
                this.multiple || (t = [t[0]]), this.beforeAll(this, t);
                var o = (function (t, e) {
                    for (var i = [], n = 0; n < t.length; n += e) {
                      for (var o = [], s = 0; s < e; s++) o.push(t[n + s]);
                      i.push(o);
                    }
                    return i;
                  })(t, this.concurrent),
                  s = function (t) {
                    var e = new FormData();
                    for (var i in (t.forEach(function (t) {
                      return e.append(n.name, t);
                    }),
                    n.params))
                      e.append(i, n.params[i]);
                    r(n.url, {
                      data: e,
                      method: n.method,
                      responseType: n.type,
                      beforeSend: function (t) {
                        var e = t.xhr;
                        e.upload && a(e.upload, "progress", n.progress),
                          ["loadStart", "load", "loadEnd", "abort"].forEach(
                            function (t) {
                              return a(e, t.toLowerCase(), n[t]);
                            }
                          ),
                          n.beforeSend(t);
                      },
                    }).then(
                      function (t) {
                        n.complete(t),
                          o.length ? s(o.shift()) : n.completeAll(t);
                      },
                      function (t) {
                        return n.error(t.message);
                      }
                    );
                  };
                s(o.shift());
              }
            },
          },
        });
      }
      function c(t, e) {
        return e.match(
          new RegExp(
            "^" +
              t
                .replace(/\//g, "\\/")
                .replace(/\*\*/g, "(\\/[^\\/]+)*")
                .replace(/\*/g, "[^\\/]+")
                .replace(/((?!\\))\?/g, "$1.") +
              "$",
            "i"
          )
        );
      }
      function h(t) {
        t.preventDefault(), t.stopPropagation();
      }
    }),
    (function (s) {
      var r = s.connect,
        a = s.disconnect;
      function t() {
        l(document.body, r),
          ni.flush(),
          new MutationObserver(function (t) {
            return t.forEach(e);
          }).observe(document, {
            childList: !0,
            subtree: !0,
            characterData: !0,
            attributes: !0,
          }),
          (s._initialized = !0);
      }
      function e(t) {
        var e = t.target;
        ("attributes" !== t.type
          ? (function (t) {
              for (
                var e = t.addedNodes, i = t.removedNodes, n = 0;
                n < e.length;
                n++
              )
                l(e[n], r);
              for (var o = 0; o < i.length; o++) l(i[o], a);
              return !0;
            })(t)
          : (function (t) {
              var e = t.target,
                i = t.attributeName;
              if ("href" === i) return !0;
              var n = Ti(i);
              if (n && n in s.components) {
                if (X(e, i)) return s[n](e), !0;
                var o = s.getComponent(e, n);
                return o ? (o.$destroy(), !0) : void 0;
              }
            })(t)) && s.update(e);
      }
      function l(t, e) {
        if (1 === t.nodeType && !X(t, "uk-no-boot"))
          for (e(t), t = t.firstElementChild; t; ) {
            var i = t.nextElementSibling;
            l(t, e), (t = i);
          }
      }
      "MutationObserver" in window &&
        (document.body
          ? t()
          : new MutationObserver(function () {
              document.body && (this.disconnect(), t());
            }).observe(document, { childList: !0, subtree: !0 }));
    })(Bi),
    Bi
  );
}),
  (function (t) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : "object" == typeof exports && "function" == typeof require
      ? t(require("jquery"))
      : t(jQuery);
  })(function (p) {
    "use strict";
    var n = {
        escapeRegExChars: function (t) {
          return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
        },
        createNode: function (t) {
          var e = document.createElement("div");
          return (
            (e.className = t),
            (e.style.position = "absolute"),
            (e.style.display = "none"),
            e
          );
        },
      },
      i = 27,
      o = 9,
      s = 13,
      r = 38,
      a = 39,
      l = 40,
      t = p.noop;
    function u(t, e) {
      var i = this;
      (i.element = t),
        (i.el = p(t)),
        (i.suggestions = []),
        (i.badQueries = []),
        (i.selectedIndex = -1),
        (i.currentValue = i.element.value),
        (i.timeoutId = null),
        (i.cachedResponse = {}),
        (i.onChangeTimeout = null),
        (i.onChange = null),
        (i.isLocal = !1),
        (i.suggestionsContainer = null),
        (i.noSuggestionsContainer = null),
        (i.options = p.extend({}, u.defaults, e)),
        (i.classes = {
          selected: "autocomplete-selected",
          suggestion: "autocomplete-suggestion",
        }),
        (i.hint = null),
        (i.hintValue = ""),
        (i.selection = null),
        i.initialize(),
        i.setOptions(e);
    }
    (u.utils = n),
      ((p.Autocomplete = u).defaults = {
        ajaxSettings: {},
        autoSelectFirst: !1,
        appendTo: "body",
        serviceUrl: null,
        lookup: null,
        onSelect: null,
        width: "auto",
        minChars: 1,
        maxHeight: 300,
        deferRequestBy: 0,
        params: {},
        formatResult: function (t, e) {
          if (!e) return t.value;
          var i = "(" + n.escapeRegExChars(e) + ")";
          return t.value
            .replace(new RegExp(i, "gi"), "<strong>$1</strong>")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/&lt;(\/?strong)&gt;/g, "<$1>");
        },
        formatGroup: function (t, e) {
          return '<div class="autocomplete-group">' + e + "</div>";
        },
        delimiter: null,
        zIndex: 9999,
        type: "GET",
        noCache: !1,
        onSearchStart: t,
        onSearchComplete: t,
        onSearchError: t,
        preserveInput: !1,
        containerClass: "autocomplete-suggestions",
        tabDisabled: !1,
        dataType: "text",
        currentRequest: null,
        triggerSelectOnValidInput: !0,
        preventBadQueries: !0,
        lookupFilter: function (t, e, i) {
          return -1 !== t.value.toLowerCase().indexOf(i);
        },
        paramName: "query",
        transformResult: function (t) {
          return "string" == typeof t ? p.parseJSON(t) : t;
        },
        showNoSuggestionNotice: !1,
        noSuggestionNotice: "No results",
        orientation: "bottom",
        forceFixPosition: !1,
      }),
      (u.prototype = {
        initialize: function () {
          var t,
            e = this,
            i = "." + e.classes.suggestion,
            n = e.classes.selected,
            o = e.options;
          e.element.setAttribute("autocomplete", "off"),
            (e.noSuggestionsContainer = p(
              '<div class="autocomplete-no-suggestion"></div>'
            )
              .html(this.options.noSuggestionNotice)
              .get(0)),
            (e.suggestionsContainer = u.utils.createNode(o.containerClass)),
            (t = p(e.suggestionsContainer)).appendTo(o.appendTo || "body"),
            "auto" !== o.width && t.css("width", o.width),
            t.on("mouseover.autocomplete", i, function () {
              e.activate(p(this).data("index"));
            }),
            t.on("mouseout.autocomplete", function () {
              (e.selectedIndex = -1), t.children("." + n).removeClass(n);
            }),
            t.on("click.autocomplete", i, function () {
              e.select(p(this).data("index"));
            }),
            t.on("click.autocomplete", function () {
              clearTimeout(e.blurTimeoutId);
            }),
            (e.fixPositionCapture = function () {
              e.visible && e.fixPosition();
            }),
            p(window).on("resize.autocomplete", e.fixPositionCapture),
            e.el.on("keydown.autocomplete", function (t) {
              e.onKeyPress(t);
            }),
            e.el.on("keyup.autocomplete", function (t) {
              e.onKeyUp(t);
            }),
            e.el.on("blur.autocomplete", function () {
              e.onBlur();
            }),
            e.el.on("focus.autocomplete", function () {
              e.onFocus();
            }),
            e.el.on("change.autocomplete", function (t) {
              e.onKeyUp(t);
            }),
            e.el.on("input.autocomplete", function (t) {
              e.onKeyUp(t);
            });
        },
        onFocus: function () {
          this.fixPosition(),
            this.el.val().length >= this.options.minChars &&
              this.onValueChange();
        },
        onBlur: function () {
          var t = this;
          t.blurTimeoutId = setTimeout(function () {
            t.hide();
          }, 200);
        },
        abortAjax: function () {
          this.currentRequest &&
            (this.currentRequest.abort(), (this.currentRequest = null));
        },
        setOptions: function (t) {
          var e = this,
            i = p.extend({}, e.options, t);
          (e.isLocal = Array.isArray(i.lookup)),
            e.isLocal && (i.lookup = e.verifySuggestionsFormat(i.lookup)),
            (i.orientation = e.validateOrientation(i.orientation, "bottom")),
            p(e.suggestionsContainer).css({
              "max-height": i.maxHeight + "px",
              width: i.width + "px",
              "z-index": i.zIndex,
            }),
            (this.options = i);
        },
        clearCache: function () {
          (this.cachedResponse = {}), (this.badQueries = []);
        },
        clear: function () {
          this.clearCache(), (this.currentValue = ""), (this.suggestions = []);
        },
        disable: function () {
          (this.disabled = !0),
            clearTimeout(this.onChangeTimeout),
            this.abortAjax();
        },
        enable: function () {
          this.disabled = !1;
        },
        fixPosition: function () {
          var t = this,
            e = p(t.suggestionsContainer),
            i = e.parent().get(0);
          if (i === document.body || t.options.forceFixPosition) {
            var n = t.options.orientation,
              o = e.outerHeight(),
              s = t.el.outerHeight(),
              r = t.el.offset(),
              a = { top: r.top, left: r.left };
            if ("auto" === n) {
              var l = p(window).height(),
                u = p(window).scrollTop(),
                c = -u + r.top - o,
                h = u + l - (r.top + s + o);
              n = Math.max(c, h) === c ? "top" : "bottom";
            }
            if (((a.top += "top" === n ? -o : s), i !== document.body)) {
              var d,
                f = e.css("opacity");
              t.visible || e.css("opacity", 0).show(),
                (d = e.offsetParent().offset()),
                (a.top -= d.top),
                (a.top += i.scrollTop),
                (a.left -= d.left),
                t.visible || e.css("opacity", f).hide();
            }
            "auto" === t.options.width && (a.width = t.el.outerWidth() + "px"),
              e.css(a);
          }
        },
        isCursorAtEnd: function () {
          var t,
            e = this.el.val().length,
            i = this.element.selectionStart;
          return "number" == typeof i
            ? i === e
            : !document.selection ||
                ((t = document.selection.createRange()).moveStart(
                  "character",
                  -e
                ),
                e === t.text.length);
        },
        onKeyPress: function (t) {
          var e = this;
          if (e.disabled || e.visible || t.which !== l || !e.currentValue) {
            if (!e.disabled && e.visible) {
              switch (t.which) {
                case i:
                  e.el.val(e.currentValue), e.hide();
                  break;
                case a:
                  if (e.hint && e.options.onHint && e.isCursorAtEnd()) {
                    e.selectHint();
                    break;
                  }
                  return;
                case o:
                  if (e.hint && e.options.onHint) return void e.selectHint();
                  if (-1 === e.selectedIndex) return void e.hide();
                  if ((e.select(e.selectedIndex), !1 === e.options.tabDisabled))
                    return;
                  break;
                case s:
                  if (-1 === e.selectedIndex) return void e.hide();
                  e.select(e.selectedIndex);
                  break;
                case r:
                  e.moveUp();
                  break;
                case l:
                  e.moveDown();
                  break;
                default:
                  return;
              }
              t.stopImmediatePropagation(), t.preventDefault();
            }
          } else e.suggest();
        },
        onKeyUp: function (t) {
          var e = this;
          if (!e.disabled) {
            switch (t.which) {
              case r:
              case l:
                return;
            }
            clearTimeout(e.onChangeTimeout),
              e.currentValue !== e.el.val() &&
                (e.findBestHint(),
                0 < e.options.deferRequestBy
                  ? (e.onChangeTimeout = setTimeout(function () {
                      e.onValueChange();
                    }, e.options.deferRequestBy))
                  : e.onValueChange());
          }
        },
        onValueChange: function () {
          if (this.ignoreValueChange) this.ignoreValueChange = !1;
          else {
            var t = this,
              e = t.options,
              i = t.el.val(),
              n = t.getQuery(i);
            t.selection &&
              t.currentValue !== n &&
              ((t.selection = null),
              (e.onInvalidateSelection || p.noop).call(t.element)),
              clearTimeout(t.onChangeTimeout),
              (t.currentValue = i),
              (t.selectedIndex = -1),
              e.triggerSelectOnValidInput && t.isExactMatch(n)
                ? t.select(0)
                : n.length < e.minChars
                ? t.hide()
                : t.getSuggestions(n);
          }
        },
        isExactMatch: function (t) {
          var e = this.suggestions;
          return 1 === e.length && e[0].value.toLowerCase() === t.toLowerCase();
        },
        getQuery: function (t) {
          var e,
            i = this.options.delimiter;
          return i ? ((e = t.split(i)), p.trim(e[e.length - 1])) : t;
        },
        getSuggestionsLocal: function (e) {
          var t,
            i = this.options,
            n = e.toLowerCase(),
            o = i.lookupFilter,
            s = parseInt(i.lookupLimit, 10);
          return (
            (t = {
              suggestions: p.grep(i.lookup, function (t) {
                return o(t, e, n);
              }),
            }),
            s &&
              t.suggestions.length > s &&
              (t.suggestions = t.suggestions.slice(0, s)),
            t
          );
        },
        getSuggestions: function (n) {
          var t,
            e,
            i,
            o,
            s = this,
            r = s.options,
            a = r.serviceUrl;
          (r.params[r.paramName] = n),
            !1 !== r.onSearchStart.call(s.element, r.params) &&
              ((e = r.ignoreParams ? null : r.params),
              p.isFunction(r.lookup)
                ? r.lookup(n, function (t) {
                    (s.suggestions = t.suggestions),
                      s.suggest(),
                      r.onSearchComplete.call(s.element, n, t.suggestions);
                  })
                : (s.isLocal
                    ? (t = s.getSuggestionsLocal(n))
                    : (p.isFunction(a) && (a = a.call(s.element, n)),
                      (i = a + "?" + p.param(e || {})),
                      (t = s.cachedResponse[i])),
                  t && Array.isArray(t.suggestions)
                    ? ((s.suggestions = t.suggestions),
                      s.suggest(),
                      r.onSearchComplete.call(s.element, n, t.suggestions))
                    : s.isBadQuery(n)
                    ? r.onSearchComplete.call(s.element, n, [])
                    : (s.abortAjax(),
                      (o = {
                        url: a,
                        data: e,
                        type: r.type,
                        dataType: r.dataType,
                      }),
                      p.extend(o, r.ajaxSettings),
                      (s.currentRequest = p
                        .ajax(o)
                        .done(function (t) {
                          var e;
                          (s.currentRequest = null),
                            (e = r.transformResult(t, n)),
                            s.processResponse(e, n, i),
                            r.onSearchComplete.call(
                              s.element,
                              n,
                              e.suggestions
                            );
                        })
                        .fail(function (t, e, i) {
                          r.onSearchError.call(s.element, n, t, e, i);
                        })))));
        },
        isBadQuery: function (t) {
          if (!this.options.preventBadQueries) return !1;
          for (var e = this.badQueries, i = e.length; i--; )
            if (0 === t.indexOf(e[i])) return !0;
          return !1;
        },
        hide: function () {
          var t = this,
            e = p(t.suggestionsContainer);
          p.isFunction(t.options.onHide) &&
            t.visible &&
            t.options.onHide.call(t.element, e),
            (t.visible = !1),
            (t.selectedIndex = -1),
            clearTimeout(t.onChangeTimeout),
            p(t.suggestionsContainer).hide(),
            t.signalHint(null);
        },
        suggest: function () {
          if (this.suggestions.length) {
            var o,
              t = this,
              s = t.options,
              r = s.groupBy,
              a = s.formatResult,
              l = t.getQuery(t.currentValue),
              u = t.classes.suggestion,
              e = t.classes.selected,
              i = p(t.suggestionsContainer),
              n = p(t.noSuggestionsContainer),
              c = s.beforeRender,
              h = "";
            s.triggerSelectOnValidInput && t.isExactMatch(l)
              ? t.select(0)
              : (p.each(t.suggestions, function (t, e) {
                  var i, n;
                  r &&
                    (h +=
                      ((n = (i = e).data[r]),
                      o === n ? "" : ((o = n), s.formatGroup(i, o)))),
                    (h +=
                      '<div class="' +
                      u +
                      '" data-index="' +
                      t +
                      '">' +
                      a(e, l, t) +
                      "</div>");
                }),
                this.adjustContainerWidth(),
                n.detach(),
                i.html(h),
                p.isFunction(c) && c.call(t.element, i, t.suggestions),
                t.fixPosition(),
                i.show(),
                s.autoSelectFirst &&
                  ((t.selectedIndex = 0),
                  i.scrollTop(0),
                  i
                    .children("." + u)
                    .first()
                    .addClass(e)),
                (t.visible = !0),
                t.findBestHint());
          } else
            this.options.showNoSuggestionNotice
              ? this.noSuggestions()
              : this.hide();
        },
        noSuggestions: function () {
          var t = this,
            e = t.options.beforeRender,
            i = p(t.suggestionsContainer),
            n = p(t.noSuggestionsContainer);
          this.adjustContainerWidth(),
            n.detach(),
            i.empty(),
            i.append(n),
            p.isFunction(e) && e.call(t.element, i, t.suggestions),
            t.fixPosition(),
            i.show(),
            (t.visible = !0);
        },
        adjustContainerWidth: function () {
          var t,
            e = this.options,
            i = p(this.suggestionsContainer);
          "auto" === e.width
            ? ((t = this.el.outerWidth()), i.css("width", 0 < t ? t : 300))
            : "flex" === e.width && i.css("width", "");
        },
        findBestHint: function () {
          var n = this.el.val().toLowerCase(),
            o = null;
          n &&
            (p.each(this.suggestions, function (t, e) {
              var i = 0 === e.value.toLowerCase().indexOf(n);
              return i && (o = e), !i;
            }),
            this.signalHint(o));
        },
        signalHint: function (t) {
          var e = "",
            i = this;
          t && (e = i.currentValue + t.value.substr(i.currentValue.length)),
            i.hintValue !== e &&
              ((i.hintValue = e),
              (i.hint = t),
              (this.options.onHint || p.noop)(e));
        },
        verifySuggestionsFormat: function (t) {
          return t.length && "string" == typeof t[0]
            ? p.map(t, function (t) {
                return { value: t, data: null };
              })
            : t;
        },
        validateOrientation: function (t, e) {
          return (
            (t = p.trim(t || "").toLowerCase()),
            -1 === p.inArray(t, ["auto", "bottom", "top"]) && (t = e),
            t
          );
        },
        processResponse: function (t, e, i) {
          var n = this,
            o = n.options;
          (t.suggestions = n.verifySuggestionsFormat(t.suggestions)),
            o.noCache ||
              ((n.cachedResponse[i] = t),
              o.preventBadQueries &&
                !t.suggestions.length &&
                n.badQueries.push(e)),
            e === n.getQuery(n.currentValue) &&
              ((n.suggestions = t.suggestions), n.suggest());
        },
        activate: function (t) {
          var e,
            i = this,
            n = i.classes.selected,
            o = p(i.suggestionsContainer),
            s = o.find("." + i.classes.suggestion);
          return (
            o.find("." + n).removeClass(n),
            (i.selectedIndex = t),
            -1 !== i.selectedIndex && s.length > i.selectedIndex
              ? ((e = s.get(i.selectedIndex)), p(e).addClass(n), e)
              : null
          );
        },
        selectHint: function () {
          var t = p.inArray(this.hint, this.suggestions);
          this.select(t);
        },
        select: function (t) {
          this.hide(), this.onSelect(t);
        },
        moveUp: function () {
          var t = this;
          if (-1 !== t.selectedIndex)
            return 0 === t.selectedIndex
              ? (p(t.suggestionsContainer)
                  .children("." + t.classes.suggestion)
                  .first()
                  .removeClass(t.classes.selected),
                (t.selectedIndex = -1),
                (t.ignoreValueChange = !1),
                t.el.val(t.currentValue),
                void t.findBestHint())
              : void t.adjustScroll(t.selectedIndex - 1);
        },
        moveDown: function () {
          this.selectedIndex !== this.suggestions.length - 1 &&
            this.adjustScroll(this.selectedIndex + 1);
        },
        adjustScroll: function (t) {
          var e = this,
            i = e.activate(t);
          if (i) {
            var n,
              o,
              s,
              r = p(i).outerHeight();
            (n = i.offsetTop),
              (s =
                (o = p(e.suggestionsContainer).scrollTop()) +
                e.options.maxHeight -
                r),
              n < o
                ? p(e.suggestionsContainer).scrollTop(n)
                : s < n &&
                  p(e.suggestionsContainer).scrollTop(
                    n - e.options.maxHeight + r
                  ),
              e.options.preserveInput ||
                ((e.ignoreValueChange = !0),
                e.el.val(e.getValue(e.suggestions[t].value))),
              e.signalHint(null);
          }
        },
        onSelect: function (t) {
          var e = this,
            i = e.options.onSelect,
            n = e.suggestions[t];
          (e.currentValue = e.getValue(n.value)),
            e.currentValue === e.el.val() ||
              e.options.preserveInput ||
              e.el.val(e.currentValue),
            e.signalHint(null),
            (e.suggestions = []),
            (e.selection = n),
            p.isFunction(i) && i.call(e.element, n);
        },
        getValue: function (t) {
          var e,
            i,
            n = this.options.delimiter;
          return n
            ? 1 === (i = (e = this.currentValue).split(n)).length
              ? t
              : e.substr(0, e.length - i[i.length - 1].length) + t
            : t;
        },
        dispose: function () {
          this.el.off(".autocomplete").removeData("autocomplete"),
            p(window).off("resize.autocomplete", this.fixPositionCapture),
            p(this.suggestionsContainer).remove();
        },
      }),
      (p.fn.devbridgeAutocomplete = function (i, n) {
        var o = "autocomplete";
        return arguments.length
          ? this.each(function () {
              var t = p(this),
                e = t.data(o);
              "string" == typeof i
                ? e && "function" == typeof e[i] && e[i](n)
                : (e && e.dispose && e.dispose(),
                  (e = new u(this, i)),
                  t.data(o, e));
            })
          : this.first().data(o);
      }),
      p.fn.autocomplete || (p.fn.autocomplete = p.fn.devbridgeAutocomplete);
  }),
  $(function () {
    $.ajax({ url: "assets/content/countries.txt", dataType: "json" }).done(
      function (t) {
        var e = $.map(t, function (t, e) {
          return { value: t, data: e };
        });
        $.map(t, function (t) {
          return t;
        });
        $("#autocomplete").autocomplete({ lookup: e });
      }
    ),
      $(".vote-thanks").hide(),
      $(".vote").click(function (t) {
        t.preventDefault();
        var e = $(".vote").outerHeight();
        $(".vote").fadeOut(function () {
          $(".vote-thanks").css("height", e).fadeIn();
        });
      });
  });



  (function ($) {
    'use strict';

    /*[ File Input Config ]
        ===========================================================*/
    
    try {
    
        var file_input_container = $('.js-input-file');
    
        if (file_input_container[0]) {
    
            file_input_container.each(function () {
    
                var that = $(this);
    
                var fileInput = that.find(".input-file");
                var info = that.find(".input-file__info");
    
                fileInput.on("change", function () {
    
                    var fileName;
                    fileName = $(this).val();
    
                    if (fileName.substring(3,11) == 'fakepath') {
                        fileName = fileName.substring(12);
                    }
    
                    if(fileName == "") {
                        info.text("No file chosen");
                    } else {
                        info.text(fileName);
                    }
    
                })
    
            });
    
        }
    
    
    
    }
    catch (e) {
        console.log(e);
    }

})(jQuery);
