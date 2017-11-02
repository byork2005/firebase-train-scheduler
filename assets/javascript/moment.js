!(function(e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd ? define(t) : (e.moment = t());
})(this, function() {
  "use strict";
  function e() {
    return Yt.apply(null, arguments);
  }
  function t(e) {
    return (
      e instanceof Array ||
      "[object Array]" === Object.prototype.toString.call(e)
    );
  }
  function n(e) {
    return null != e && "[object Object]" === Object.prototype.toString.call(e);
  }
  function s(e) {
    if (Object.getOwnPropertyNames)
      return 0 === Object.getOwnPropertyNames(e).length;
    var t;
    for (t in e) if (e.hasOwnProperty(t)) return !1;
    return !0;
  }
  function i(e) {
    return void 0 === e;
  }
  function r(e) {
    return (
      "number" == typeof e ||
      "[object Number]" === Object.prototype.toString.call(e)
    );
  }
  function a(e) {
    return (
      e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
    );
  }
  function o(e, t) {
    var n,
      s = [];
    for (n = 0; n < e.length; ++n) s.push(t(e[n], n));
    return s;
  }
  function u(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function l(e, t) {
    for (var n in t) u(t, n) && (e[n] = t[n]);
    return (
      u(t, "toString") && (e.toString = t.toString),
      u(t, "valueOf") && (e.valueOf = t.valueOf),
      e
    );
  }
  function d(e, t, n, s) {
    return je(e, t, n, s, !0).utc();
  }
  function h() {
    return {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1,
      parsedDateParts: [],
      meridiem: null,
      rfc2822: !1,
      weekdayMismatch: !1
    };
  }
  function c(e) {
    return null == e._pf && (e._pf = h()), e._pf;
  }
  function f(e) {
    if (null == e._isValid) {
      var t = c(e),
        n = Ot.call(t.parsedDateParts, function(e) {
          return null != e;
        }),
        s =
          !isNaN(e._d.getTime()) &&
          t.overflow < 0 &&
          !t.empty &&
          !t.invalidMonth &&
          !t.invalidWeekday &&
          !t.weekdayMismatch &&
          !t.nullInput &&
          !t.invalidFormat &&
          !t.userInvalidated &&
          (!t.meridiem || (t.meridiem && n));
      if (
        (e._strict &&
          (s =
            s &&
            0 === t.charsLeftOver &&
            0 === t.unusedTokens.length &&
            void 0 === t.bigHour),
        null != Object.isFrozen && Object.isFrozen(e))
      )
        return s;
      e._isValid = s;
    }
    return e._isValid;
  }
  function m(e) {
    var t = d(NaN);
    return null != e ? l(c(t), e) : (c(t).userInvalidated = !0), t;
  }
  function _(e, t) {
    var n, s, r;
    if (
      (i(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
      i(t._i) || (e._i = t._i),
      i(t._f) || (e._f = t._f),
      i(t._l) || (e._l = t._l),
      i(t._strict) || (e._strict = t._strict),
      i(t._tzm) || (e._tzm = t._tzm),
      i(t._isUTC) || (e._isUTC = t._isUTC),
      i(t._offset) || (e._offset = t._offset),
      i(t._pf) || (e._pf = c(t)),
      i(t._locale) || (e._locale = t._locale),
      xt.length > 0)
    )
      for (n = 0; n < xt.length; n++) i((r = t[(s = xt[n])])) || (e[s] = r);
    return e;
  }
  function y(t) {
    _(this, t),
      (this._d = new Date(null != t._d ? t._d.getTime() : NaN)),
      this.isValid() || (this._d = new Date(NaN)),
      !1 === Tt && ((Tt = !0), e.updateOffset(this), (Tt = !1));
  }
  function g(e) {
    return e instanceof y || (null != e && null != e._isAMomentObject);
  }
  function p(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
  }
  function w(e) {
    var t = +e,
      n = 0;
    return 0 !== t && isFinite(t) && (n = p(t)), n;
  }
  function v(e, t, n) {
    var s,
      i = Math.min(e.length, t.length),
      r = Math.abs(e.length - t.length),
      a = 0;
    for (s = 0; s < i; s++)
      ((n && e[s] !== t[s]) || (!n && w(e[s]) !== w(t[s]))) && a++;
    return a + r;
  }
  function M(t) {
    !1 === e.suppressDeprecationWarnings &&
      "undefined" != typeof console &&
      console.warn &&
      console.warn("Deprecation warning: " + t);
  }
  function k(t, n) {
    var s = !0;
    return l(function() {
      if ((null != e.deprecationHandler && e.deprecationHandler(null, t), s)) {
        for (var i, r = [], a = 0; a < arguments.length; a++) {
          if (((i = ""), "object" == typeof arguments[a])) {
            i += "\n[" + a + "] ";
            for (var o in arguments[0]) i += o + ": " + arguments[0][o] + ", ";
            i = i.slice(0, -2);
          } else i = arguments[a];
          r.push(i);
        }
        M(
          t +
            "\nArguments: " +
            Array.prototype.slice.call(r).join("") +
            "\n" +
            new Error().stack
        ),
          (s = !1);
      }
      return n.apply(this, arguments);
    }, n);
  }
  function S(t, n) {
    null != e.deprecationHandler && e.deprecationHandler(t, n),
      bt[t] || (M(n), (bt[t] = !0));
  }
  function D(e) {
    return (
      e instanceof Function ||
      "[object Function]" === Object.prototype.toString.call(e)
    );
  }
  function Y(e, t) {
    var s,
      i = l({}, e);
    for (s in t)
      u(t, s) &&
        (n(e[s]) && n(t[s])
          ? ((i[s] = {}), l(i[s], e[s]), l(i[s], t[s]))
          : null != t[s] ? (i[s] = t[s]) : delete i[s]);
    for (s in e) u(e, s) && !u(t, s) && n(e[s]) && (i[s] = l({}, i[s]));
    return i;
  }
  function O(e) {
    null != e && this.set(e);
  }
  function x(e, t) {
    var n = e.toLowerCase();
    Ut[n] = Ut[n + "s"] = Ut[t] = e;
  }
  function T(e) {
    return "string" == typeof e ? Ut[e] || Ut[e.toLowerCase()] : void 0;
  }
  function b(e) {
    var t,
      n,
      s = {};
    for (n in e) u(e, n) && (t = T(n)) && (s[t] = e[n]);
    return s;
  }
  function P(e, t) {
    Nt[e] = t;
  }
  function W(e) {
    var t = [];
    for (var n in e) t.push({ unit: n, priority: Nt[n] });
    return (
      t.sort(function(e, t) {
        return e.priority - t.priority;
      }),
      t
    );
  }
  function R(e, t, n) {
    var s = "" + Math.abs(e),
      i = t - s.length;
    return (
      (e >= 0 ? (n ? "+" : "") : "-") +
      Math.pow(10, Math.max(0, i))
        .toString()
        .substr(1) +
      s
    );
  }
  function C(e, t, n, s) {
    var i = s;
    "string" == typeof s &&
      (i = function() {
        return this[s]();
      }),
      e && (Vt[e] = i),
      t &&
        (Vt[t[0]] = function() {
          return R(i.apply(this, arguments), t[1], t[2]);
        }),
      n &&
        (Vt[n] = function() {
          return this.localeData().ordinal(i.apply(this, arguments), e);
        });
  }
  function F(e) {
    return e.match(/\[[\s\S]/)
      ? e.replace(/^\[|\]$/g, "")
      : e.replace(/\\/g, "");
  }
  function U(e) {
    var t,
      n,
      s = e.match(Ht);
    for (t = 0, n = s.length; t < n; t++)
      Vt[s[t]] ? (s[t] = Vt[s[t]]) : (s[t] = F(s[t]));
    return function(t) {
      var i,
        r = "";
      for (i = 0; i < n; i++) r += D(s[i]) ? s[i].call(t, e) : s[i];
      return r;
    };
  }
  function N(e, t) {
    return e.isValid()
      ? ((t = H(t, e.localeData())), (Gt[t] = Gt[t] || U(t)), Gt[t](e))
      : e.localeData().invalidDate();
  }
  function H(e, t) {
    var n = 5;
    for (Lt.lastIndex = 0; n >= 0 && Lt.test(e); )
      (e = e.replace(Lt, function(e) {
        return t.longDateFormat(e) || e;
      })),
        (Lt.lastIndex = 0),
        (n -= 1);
    return e;
  }
  function L(e, t, n) {
    rn[e] = D(t)
      ? t
      : function(e, s) {
          return e && n ? n : t;
        };
  }
  function G(e, t) {
    return u(rn, e) ? rn[e](t._strict, t._locale) : new RegExp(V(e));
  }
  function V(e) {
    return j(
      e
        .replace("\\", "")
        .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(
          e,
          t,
          n,
          s,
          i
        ) {
          return t || n || s || i;
        })
    );
  }
  function j(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  function I(e, t) {
    var n,
      s = t;
    for (
      "string" == typeof e && (e = [e]),
        r(t) &&
          (s = function(e, n) {
            n[t] = w(e);
          }),
        n = 0;
      n < e.length;
      n++
    )
      an[e[n]] = s;
  }
  function E(e, t) {
    I(e, function(e, n, s, i) {
      (s._w = s._w || {}), t(e, s._w, s, i);
    });
  }
  function A(e, t, n) {
    null != t && u(an, e) && an[e](t, n._a, n, e);
  }
  function z(e) {
    return Z(e) ? 366 : 365;
  }
  function Z(e) {
    return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
  }
  function $(t, n) {
    return function(s) {
      return null != s
        ? (J(this, t, s), e.updateOffset(this, n), this)
        : q(this, t);
    };
  }
  function q(e, t) {
    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
  }
  function J(e, t, n) {
    e.isValid() &&
      !isNaN(n) &&
      ("FullYear" === t && Z(e.year())
        ? e._d["set" + (e._isUTC ? "UTC" : "") + t](
            n,
            e.month(),
            Q(n, e.month())
          )
        : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
  }
  function B(e, t) {
    return (e % t + t) % t;
  }
  function Q(e, t) {
    if (isNaN(e) || isNaN(t)) return NaN;
    var n = B(t, 12);
    return (e += (t - n) / 12), 1 === n ? (Z(e) ? 29 : 28) : 31 - (n % 7) % 2;
  }
  function X(e, t, n) {
    var s,
      i,
      r,
      a = e.toLocaleLowerCase();
    if (!this._monthsParse)
      for (
        this._monthsParse = [],
          this._longMonthsParse = [],
          this._shortMonthsParse = [],
          s = 0;
        s < 12;
        ++s
      )
        (r = d([2e3, s])),
          (this._shortMonthsParse[s] = this.monthsShort(
            r,
            ""
          ).toLocaleLowerCase()),
          (this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase());
    return n
      ? "MMM" === t
        ? -1 !== (i = yn.call(this._shortMonthsParse, a)) ? i : null
        : -1 !== (i = yn.call(this._longMonthsParse, a)) ? i : null
      : "MMM" === t
        ? -1 !== (i = yn.call(this._shortMonthsParse, a))
          ? i
          : -1 !== (i = yn.call(this._longMonthsParse, a)) ? i : null
        : -1 !== (i = yn.call(this._longMonthsParse, a))
          ? i
          : -1 !== (i = yn.call(this._shortMonthsParse, a)) ? i : null;
  }
  function K(e, t) {
    var n;
    if (!e.isValid()) return e;
    if ("string" == typeof t)
      if (/^\d+$/.test(t)) t = w(t);
      else if (((t = e.localeData().monthsParse(t)), !r(t))) return e;
    return (
      (n = Math.min(e.date(), Q(e.year(), t))),
      e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
      e
    );
  }
  function ee(t) {
    return null != t
      ? (K(this, t), e.updateOffset(this, !0), this)
      : q(this, "Month");
  }
  function te() {
    function e(e, t) {
      return t.length - e.length;
    }
    var t,
      n,
      s = [],
      i = [],
      r = [];
    for (t = 0; t < 12; t++)
      (n = d([2e3, t])),
        s.push(this.monthsShort(n, "")),
        i.push(this.months(n, "")),
        r.push(this.months(n, "")),
        r.push(this.monthsShort(n, ""));
    for (s.sort(e), i.sort(e), r.sort(e), t = 0; t < 12; t++)
      (s[t] = j(s[t])), (i[t] = j(i[t]));
    for (t = 0; t < 24; t++) r[t] = j(r[t]);
    (this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i")),
      (this._monthsShortRegex = this._monthsRegex),
      (this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")),
      (this._monthsShortStrictRegex = new RegExp(
        "^(" + s.join("|") + ")",
        "i"
      ));
  }
  function ne(e, t, n, s, i, r, a) {
    var o = new Date(e, t, n, s, i, r, a);
    return (
      e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e), o
    );
  }
  function se(e) {
    var t = new Date(Date.UTC.apply(null, arguments));
    return (
      e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e),
      t
    );
  }
  function ie(e, t, n) {
    var s = 7 + t - n;
    return -((7 + se(e, 0, s).getUTCDay() - t) % 7) + s - 1;
  }
  function re(e, t, n, s, i) {
    var r,
      a,
      o = 1 + 7 * (t - 1) + (7 + n - s) % 7 + ie(e, s, i);
    return (
      o <= 0
        ? (a = z((r = e - 1)) + o)
        : o > z(e) ? ((r = e + 1), (a = o - z(e))) : ((r = e), (a = o)),
      { year: r, dayOfYear: a }
    );
  }
  function ae(e, t, n) {
    var s,
      i,
      r = ie(e.year(), t, n),
      a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
    return (
      a < 1
        ? (s = a + oe((i = e.year() - 1), t, n))
        : a > oe(e.year(), t, n)
          ? ((s = a - oe(e.year(), t, n)), (i = e.year() + 1))
          : ((i = e.year()), (s = a)),
      { week: s, year: i }
    );
  }
  function oe(e, t, n) {
    var s = ie(e, t, n),
      i = ie(e + 1, t, n);
    return (z(e) - s + i) / 7;
  }
  function ue(e, t) {
    return "string" != typeof e
      ? e
      : isNaN(e)
        ? "number" == typeof (e = t.weekdaysParse(e)) ? e : null
        : parseInt(e, 10);
  }
  function le(e, t) {
    return "string" == typeof e
      ? t.weekdaysParse(e) % 7 || 7
      : isNaN(e) ? null : e;
  }
  function de(e, t, n) {
    var s,
      i,
      r,
      a = e.toLocaleLowerCase();
    if (!this._weekdaysParse)
      for (
        this._weekdaysParse = [],
          this._shortWeekdaysParse = [],
          this._minWeekdaysParse = [],
          s = 0;
        s < 7;
        ++s
      )
        (r = d([2e3, 1]).day(s)),
          (this._minWeekdaysParse[s] = this.weekdaysMin(
            r,
            ""
          ).toLocaleLowerCase()),
          (this._shortWeekdaysParse[s] = this.weekdaysShort(
            r,
            ""
          ).toLocaleLowerCase()),
          (this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase());
    return n
      ? "dddd" === t
        ? -1 !== (i = yn.call(this._weekdaysParse, a)) ? i : null
        : "ddd" === t
          ? -1 !== (i = yn.call(this._shortWeekdaysParse, a)) ? i : null
          : -1 !== (i = yn.call(this._minWeekdaysParse, a)) ? i : null
      : "dddd" === t
        ? -1 !== (i = yn.call(this._weekdaysParse, a))
          ? i
          : -1 !== (i = yn.call(this._shortWeekdaysParse, a))
            ? i
            : -1 !== (i = yn.call(this._minWeekdaysParse, a)) ? i : null
        : "ddd" === t
          ? -1 !== (i = yn.call(this._shortWeekdaysParse, a))
            ? i
            : -1 !== (i = yn.call(this._weekdaysParse, a))
              ? i
              : -1 !== (i = yn.call(this._minWeekdaysParse, a)) ? i : null
          : -1 !== (i = yn.call(this._minWeekdaysParse, a))
            ? i
            : -1 !== (i = yn.call(this._weekdaysParse, a))
              ? i
              : -1 !== (i = yn.call(this._shortWeekdaysParse, a)) ? i : null;
  }
  function he() {
    function e(e, t) {
      return t.length - e.length;
    }
    var t,
      n,
      s,
      i,
      r,
      a = [],
      o = [],
      u = [],
      l = [];
    for (t = 0; t < 7; t++)
      (n = d([2e3, 1]).day(t)),
        (s = this.weekdaysMin(n, "")),
        (i = this.weekdaysShort(n, "")),
        (r = this.weekdays(n, "")),
        a.push(s),
        o.push(i),
        u.push(r),
        l.push(s),
        l.push(i),
        l.push(r);
    for (a.sort(e), o.sort(e), u.sort(e), l.sort(e), t = 0; t < 7; t++)
      (o[t] = j(o[t])), (u[t] = j(u[t])), (l[t] = j(l[t]));
    (this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i")),
      (this._weekdaysShortRegex = this._weekdaysRegex),
      (this._weekdaysMinRegex = this._weekdaysRegex),
      (this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i")),
      (this._weekdaysShortStrictRegex = new RegExp(
        "^(" + o.join("|") + ")",
        "i"
      )),
      (this._weekdaysMinStrictRegex = new RegExp(
        "^(" + a.join("|") + ")",
        "i"
      ));
  }
  function ce() {
    return this.hours() % 12 || 12;
  }
  function fe(e, t) {
    C(e, 0, 0, function() {
      return this.localeData().meridiem(this.hours(), this.minutes(), t);
    });
  }
  function me(e, t) {
    return t._meridiemParse;
  }
  function _e(e) {
    return e ? e.toLowerCase().replace("_", "-") : e;
  }
  function ye(e) {
    for (var t, n, s, i, r = 0; r < e.length; ) {
      for (
        t = (i = _e(e[r]).split("-")).length,
          n = (n = _e(e[r + 1])) ? n.split("-") : null;
        t > 0;

      ) {
        if ((s = ge(i.slice(0, t).join("-")))) return s;
        if (n && n.length >= t && v(i, n, !0) >= t - 1) break;
        t--;
      }
      r++;
    }
    return null;
  }
  function ge(e) {
    var t = null;
    if (!Fn[e] && "undefined" != typeof module && module && module.exports)
      try {
        (t = Pn._abbr), require("./locale/" + e), pe(t);
      } catch (e) {}
    return Fn[e];
  }
  function pe(e, t) {
    var n;
    return e && (n = i(t) ? ve(e) : we(e, t)) && (Pn = n), Pn._abbr;
  }
  function we(e, t) {
    if (null !== t) {
      var n = Cn;
      if (((t.abbr = e), null != Fn[e]))
        S(
          "defineLocaleOverride",
          "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
        ),
          (n = Fn[e]._config);
      else if (null != t.parentLocale) {
        if (null == Fn[t.parentLocale])
          return (
            Un[t.parentLocale] || (Un[t.parentLocale] = []),
            Un[t.parentLocale].push({ name: e, config: t }),
            null
          );
        n = Fn[t.parentLocale]._config;
      }
      return (
        (Fn[e] = new O(Y(n, t))),
        Un[e] &&
          Un[e].forEach(function(e) {
            we(e.name, e.config);
          }),
        pe(e),
        Fn[e]
      );
    }
    return delete Fn[e], null;
  }
  function ve(e) {
    var n;
    if ((e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e))
      return Pn;
    if (!t(e)) {
      if ((n = ge(e))) return n;
      e = [e];
    }
    return ye(e);
  }
  function Me(e) {
    var t,
      n = e._a;
    return (
      n &&
        -2 === c(e).overflow &&
        ((t =
          n[un] < 0 || n[un] > 11
            ? un
            : n[ln] < 1 || n[ln] > Q(n[on], n[un])
              ? ln
              : n[dn] < 0 ||
                n[dn] > 24 ||
                (24 === n[dn] && (0 !== n[hn] || 0 !== n[cn] || 0 !== n[fn]))
                ? dn
                : n[hn] < 0 || n[hn] > 59
                  ? hn
                  : n[cn] < 0 || n[cn] > 59
                    ? cn
                    : n[fn] < 0 || n[fn] > 999 ? fn : -1),
        c(e)._overflowDayOfYear && (t < on || t > ln) && (t = ln),
        c(e)._overflowWeeks && -1 === t && (t = mn),
        c(e)._overflowWeekday && -1 === t && (t = _n),
        (c(e).overflow = t)),
      e
    );
  }
  function ke(e, t, n) {
    return null != e ? e : null != t ? t : n;
  }
  function Se(t) {
    var n = new Date(e.now());
    return t._useUTC
      ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()]
      : [n.getFullYear(), n.getMonth(), n.getDate()];
  }
  function De(e) {
    var t,
      n,
      s,
      i,
      r = [];
    if (!e._d) {
      for (
        s = Se(e),
          e._w && null == e._a[ln] && null == e._a[un] && Ye(e),
          null != e._dayOfYear &&
            ((i = ke(e._a[on], s[on])),
            (e._dayOfYear > z(i) || 0 === e._dayOfYear) &&
              (c(e)._overflowDayOfYear = !0),
            (n = se(i, 0, e._dayOfYear)),
            (e._a[un] = n.getUTCMonth()),
            (e._a[ln] = n.getUTCDate())),
          t = 0;
        t < 3 && null == e._a[t];
        ++t
      )
        e._a[t] = r[t] = s[t];
      for (; t < 7; t++)
        e._a[t] = r[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
      24 === e._a[dn] &&
        0 === e._a[hn] &&
        0 === e._a[cn] &&
        0 === e._a[fn] &&
        ((e._nextDay = !0), (e._a[dn] = 0)),
        (e._d = (e._useUTC ? se : ne).apply(null, r)),
        null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        e._nextDay && (e._a[dn] = 24),
        e._w &&
          void 0 !== e._w.d &&
          e._w.d !== e._d.getDay() &&
          (c(e).weekdayMismatch = !0);
    }
  }
  function Ye(e) {
    var t, n, s, i, r, a, o, u;
    if (null != (t = e._w).GG || null != t.W || null != t.E)
      (r = 1),
        (a = 4),
        (n = ke(t.GG, e._a[on], ae(Ie(), 1, 4).year)),
        (s = ke(t.W, 1)),
        ((i = ke(t.E, 1)) < 1 || i > 7) && (u = !0);
    else {
      (r = e._locale._week.dow), (a = e._locale._week.doy);
      var l = ae(Ie(), r, a);
      (n = ke(t.gg, e._a[on], l.year)),
        (s = ke(t.w, l.week)),
        null != t.d
          ? ((i = t.d) < 0 || i > 6) && (u = !0)
          : null != t.e
            ? ((i = t.e + r), (t.e < 0 || t.e > 6) && (u = !0))
            : (i = r);
    }
    s < 1 || s > oe(n, r, a)
      ? (c(e)._overflowWeeks = !0)
      : null != u
        ? (c(e)._overflowWeekday = !0)
        : ((o = re(n, s, i, r, a)),
          (e._a[on] = o.year),
          (e._dayOfYear = o.dayOfYear));
  }
  function Oe(e) {
    var t,
      n,
      s,
      i,
      r,
      a,
      o = e._i,
      u = Nn.exec(o) || Hn.exec(o);
    if (u) {
      for (c(e).iso = !0, t = 0, n = Gn.length; t < n; t++)
        if (Gn[t][1].exec(u[1])) {
          (i = Gn[t][0]), (s = !1 !== Gn[t][2]);
          break;
        }
      if (null == i) return void (e._isValid = !1);
      if (u[3]) {
        for (t = 0, n = Vn.length; t < n; t++)
          if (Vn[t][1].exec(u[3])) {
            r = (u[2] || " ") + Vn[t][0];
            break;
          }
        if (null == r) return void (e._isValid = !1);
      }
      if (!s && null != r) return void (e._isValid = !1);
      if (u[4]) {
        if (!Ln.exec(u[4])) return void (e._isValid = !1);
        a = "Z";
      }
      (e._f = i + (r || "") + (a || "")), Fe(e);
    } else e._isValid = !1;
  }
  function xe(e, t, n, s, i, r) {
    var a = [
      Te(e),
      vn.indexOf(t),
      parseInt(n, 10),
      parseInt(s, 10),
      parseInt(i, 10)
    ];
    return r && a.push(parseInt(r, 10)), a;
  }
  function Te(e) {
    var t = parseInt(e, 10);
    return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
  }
  function be(e) {
    return e
      .replace(/\([^)]*\)|[\n\t]/g, " ")
      .replace(/(\s\s+)/g, " ")
      .trim();
  }
  function Pe(e, t, n) {
    return (
      !e ||
      Yn.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() ||
      ((c(n).weekdayMismatch = !0), (n._isValid = !1), !1)
    );
  }
  function We(e, t, n) {
    if (e) return En[e];
    if (t) return 0;
    var s = parseInt(n, 10),
      i = s % 100;
    return 60 * ((s - i) / 100) + i;
  }
  function Re(e) {
    var t = In.exec(be(e._i));
    if (t) {
      var n = xe(t[4], t[3], t[2], t[5], t[6], t[7]);
      if (!Pe(t[1], n, e)) return;
      (e._a = n),
        (e._tzm = We(t[8], t[9], t[10])),
        (e._d = se.apply(null, e._a)),
        e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
        (c(e).rfc2822 = !0);
    } else e._isValid = !1;
  }
  function Ce(t) {
    var n = jn.exec(t._i);
    null === n
      ? (Oe(t),
        !1 === t._isValid &&
          (delete t._isValid,
          Re(t),
          !1 === t._isValid &&
            (delete t._isValid, e.createFromInputFallback(t))))
      : (t._d = new Date(+n[1]));
  }
  function Fe(t) {
    if (t._f !== e.ISO_8601)
      if (t._f !== e.RFC_2822) {
        (t._a = []), (c(t).empty = !0);
        var n,
          s,
          i,
          r,
          a,
          o = "" + t._i,
          u = o.length,
          l = 0;
        for (i = H(t._f, t._locale).match(Ht) || [], n = 0; n < i.length; n++)
          (r = i[n]),
            (s = (o.match(G(r, t)) || [])[0]) &&
              ((a = o.substr(0, o.indexOf(s))).length > 0 &&
                c(t).unusedInput.push(a),
              (o = o.slice(o.indexOf(s) + s.length)),
              (l += s.length)),
            Vt[r]
              ? (s ? (c(t).empty = !1) : c(t).unusedTokens.push(r), A(r, s, t))
              : t._strict && !s && c(t).unusedTokens.push(r);
        (c(t).charsLeftOver = u - l),
          o.length > 0 && c(t).unusedInput.push(o),
          t._a[dn] <= 12 &&
            !0 === c(t).bigHour &&
            t._a[dn] > 0 &&
            (c(t).bigHour = void 0),
          (c(t).parsedDateParts = t._a.slice(0)),
          (c(t).meridiem = t._meridiem),
          (t._a[dn] = Ue(t._locale, t._a[dn], t._meridiem)),
          De(t),
          Me(t);
      } else Re(t);
    else Oe(t);
  }
  function Ue(e, t, n) {
    var s;
    return null == n
      ? t
      : null != e.meridiemHour
        ? e.meridiemHour(t, n)
        : null != e.isPM
          ? ((s = e.isPM(n)) && t < 12 && (t += 12),
            s || 12 !== t || (t = 0),
            t)
          : t;
  }
  function Ne(e) {
    var t, n, s, i, r;
    if (0 === e._f.length)
      return (c(e).invalidFormat = !0), void (e._d = new Date(NaN));
    for (i = 0; i < e._f.length; i++)
      (r = 0),
        (t = _({}, e)),
        null != e._useUTC && (t._useUTC = e._useUTC),
        (t._f = e._f[i]),
        Fe(t),
        f(t) &&
          ((r += c(t).charsLeftOver),
          (r += 10 * c(t).unusedTokens.length),
          (c(t).score = r),
          (null == s || r < s) && ((s = r), (n = t)));
    l(e, n || t);
  }
  function He(e) {
    if (!e._d) {
      var t = b(e._i);
      (e._a = o(
        [
          t.year,
          t.month,
          t.day || t.date,
          t.hour,
          t.minute,
          t.second,
          t.millisecond
        ],
        function(e) {
          return e && parseInt(e, 10);
        }
      )),
        De(e);
    }
  }
  function Le(e) {
    var t = new y(Me(Ge(e)));
    return t._nextDay && (t.add(1, "d"), (t._nextDay = void 0)), t;
  }
  function Ge(e) {
    var n = e._i,
      s = e._f;
    return (
      (e._locale = e._locale || ve(e._l)),
      null === n || (void 0 === s && "" === n)
        ? m({ nullInput: !0 })
        : ("string" == typeof n && (e._i = n = e._locale.preparse(n)),
          g(n)
            ? new y(Me(n))
            : (a(n) ? (e._d = n) : t(s) ? Ne(e) : s ? Fe(e) : Ve(e),
              f(e) || (e._d = null),
              e))
    );
  }
  function Ve(s) {
    var u = s._i;
    i(u)
      ? (s._d = new Date(e.now()))
      : a(u)
        ? (s._d = new Date(u.valueOf()))
        : "string" == typeof u
          ? Ce(s)
          : t(u)
            ? ((s._a = o(u.slice(0), function(e) {
                return parseInt(e, 10);
              })),
              De(s))
            : n(u)
              ? He(s)
              : r(u) ? (s._d = new Date(u)) : e.createFromInputFallback(s);
  }
  function je(e, i, r, a, o) {
    var u = {};
    return (
      (!0 !== r && !1 !== r) || ((a = r), (r = void 0)),
      ((n(e) && s(e)) || (t(e) && 0 === e.length)) && (e = void 0),
      (u._isAMomentObject = !0),
      (u._useUTC = u._isUTC = o),
      (u._l = r),
      (u._i = e),
      (u._f = i),
      (u._strict = a),
      Le(u)
    );
  }
  function Ie(e, t, n, s) {
    return je(e, t, n, s, !1);
  }
  function Ee(e, n) {
    var s, i;
    if ((1 === n.length && t(n[0]) && (n = n[0]), !n.length)) return Ie();
    for (s = n[0], i = 1; i < n.length; ++i)
      (n[i].isValid() && !n[i][e](s)) || (s = n[i]);
    return s;
  }
  function Ae(e) {
    for (var t in e)
      if (-1 === yn.call(Zn, t) || (null != e[t] && isNaN(e[t]))) return !1;
    for (var n = !1, s = 0; s < Zn.length; ++s)
      if (e[Zn[s]]) {
        if (n) return !1;
        parseFloat(e[Zn[s]]) !== w(e[Zn[s]]) && (n = !0);
      }
    return !0;
  }
  function ze(e) {
    var t = b(e),
      n = t.year || 0,
      s = t.quarter || 0,
      i = t.month || 0,
      r = t.week || 0,
      a = t.day || 0,
      o = t.hour || 0,
      u = t.minute || 0,
      l = t.second || 0,
      d = t.millisecond || 0;
    (this._isValid = Ae(t)),
      (this._milliseconds = +d + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60),
      (this._days = +a + 7 * r),
      (this._months = +i + 3 * s + 12 * n),
      (this._data = {}),
      (this._locale = ve()),
      this._bubble();
  }
  function Ze(e) {
    return e instanceof ze;
  }
  function $e(e) {
    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
  }
  function qe(e, t) {
    C(e, 0, 0, function() {
      var e = this.utcOffset(),
        n = "+";
      return (
        e < 0 && ((e = -e), (n = "-")),
        n + R(~~(e / 60), 2) + t + R(~~e % 60, 2)
      );
    });
  }
  function Je(e, t) {
    var n = (t || "").match(e);
    if (null === n) return null;
    var s = ((n[n.length - 1] || []) + "").match($n) || ["-", 0, 0],
      i = 60 * s[1] + w(s[2]);
    return 0 === i ? 0 : "+" === s[0] ? i : -i;
  }
  function Be(t, n) {
    var s, i;
    return n._isUTC
      ? ((s = n.clone()),
        (i = (g(t) || a(t) ? t.valueOf() : Ie(t).valueOf()) - s.valueOf()),
        s._d.setTime(s._d.valueOf() + i),
        e.updateOffset(s, !1),
        s)
      : Ie(t).local();
  }
  function Qe(e) {
    return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
  }
  function Xe() {
    return !!this.isValid() && (this._isUTC && 0 === this._offset);
  }
  function Ke(e, t) {
    var n,
      s,
      i,
      a = e,
      o = null;
    return (
      Ze(e)
        ? (a = { ms: e._milliseconds, d: e._days, M: e._months })
        : r(e)
          ? ((a = {}), t ? (a[t] = e) : (a.milliseconds = e))
          : (o = qn.exec(e))
            ? ((n = "-" === o[1] ? -1 : 1),
              (a = {
                y: 0,
                d: w(o[ln]) * n,
                h: w(o[dn]) * n,
                m: w(o[hn]) * n,
                s: w(o[cn]) * n,
                ms: w($e(1e3 * o[fn])) * n
              }))
            : (o = Jn.exec(e))
              ? ((n = "-" === o[1] ? -1 : (o[1], 1)),
                (a = {
                  y: et(o[2], n),
                  M: et(o[3], n),
                  w: et(o[4], n),
                  d: et(o[5], n),
                  h: et(o[6], n),
                  m: et(o[7], n),
                  s: et(o[8], n)
                }))
              : null == a
                ? (a = {})
                : "object" == typeof a &&
                  ("from" in a || "to" in a) &&
                  ((i = nt(Ie(a.from), Ie(a.to))),
                  ((a = {}).ms = i.milliseconds),
                  (a.M = i.months)),
      (s = new ze(a)),
      Ze(e) && u(e, "_locale") && (s._locale = e._locale),
      s
    );
  }
  function et(e, t) {
    var n = e && parseFloat(e.replace(",", "."));
    return (isNaN(n) ? 0 : n) * t;
  }
  function tt(e, t) {
    var n = { milliseconds: 0, months: 0 };
    return (
      (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
      e
        .clone()
        .add(n.months, "M")
        .isAfter(t) && --n.months,
      (n.milliseconds = +t - +e.clone().add(n.months, "M")),
      n
    );
  }
  function nt(e, t) {
    var n;
    return e.isValid() && t.isValid()
      ? ((t = Be(t, e)),
        e.isBefore(t)
          ? (n = tt(e, t))
          : (((n = tt(t, e)).milliseconds = -n.milliseconds),
            (n.months = -n.months)),
        n)
      : { milliseconds: 0, months: 0 };
  }
  function st(e, t) {
    return function(n, s) {
      var i, r;
      return (
        null === s ||
          isNaN(+s) ||
          (S(
            t,
            "moment()." +
              t +
              "(period, number) is deprecated. Please use moment()." +
              t +
              "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
          ),
          (r = n),
          (n = s),
          (s = r)),
        (n = "string" == typeof n ? +n : n),
        (i = Ke(n, s)),
        it(this, i, e),
        this
      );
    };
  }
  function it(t, n, s, i) {
    var r = n._milliseconds,
      a = $e(n._days),
      o = $e(n._months);
    t.isValid() &&
      ((i = null == i || i),
      o && K(t, q(t, "Month") + o * s),
      a && J(t, "Date", q(t, "Date") + a * s),
      r && t._d.setTime(t._d.valueOf() + r * s),
      i && e.updateOffset(t, a || o));
  }
  function rt(e, t) {
    var n,
      s = 12 * (t.year() - e.year()) + (t.month() - e.month()),
      i = e.clone().add(s, "months");
    return (
      (n =
        t - i < 0
          ? (t - i) / (i - e.clone().add(s - 1, "months"))
          : (t - i) / (e.clone().add(s + 1, "months") - i)),
      -(s + n) || 0
    );
  }
  function at(e) {
    var t;
    return void 0 === e
      ? this._locale._abbr
      : (null != (t = ve(e)) && (this._locale = t), this);
  }
  function ot() {
    return this._locale;
  }
  function ut(e, t) {
    C(0, [e, e.length], 0, t);
  }
  function lt(e, t, n, s, i) {
    var r;
    return null == e
      ? ae(this, s, i).year
      : ((r = oe(e, s, i)), t > r && (t = r), dt.call(this, e, t, n, s, i));
  }
  function dt(e, t, n, s, i) {
    var r = re(e, t, n, s, i),
      a = se(r.year, 0, r.dayOfYear);
    return (
      this.year(a.getUTCFullYear()),
      this.month(a.getUTCMonth()),
      this.date(a.getUTCDate()),
      this
    );
  }
  function ht(e) {
    return e;
  }
  function ct(e, t, n, s) {
    var i = ve(),
      r = d().set(s, t);
    return i[n](r, e);
  }
  function ft(e, t, n) {
    if ((r(e) && ((t = e), (e = void 0)), (e = e || ""), null != t))
      return ct(e, t, n, "month");
    var s,
      i = [];
    for (s = 0; s < 12; s++) i[s] = ct(e, s, n, "month");
    return i;
  }
  function mt(e, t, n, s) {
    "boolean" == typeof e
      ? (r(t) && ((n = t), (t = void 0)), (t = t || ""))
      : ((n = t = e), (e = !1), r(t) && ((n = t), (t = void 0)), (t = t || ""));
    var i = ve(),
      a = e ? i._week.dow : 0;
    if (null != n) return ct(t, (n + a) % 7, s, "day");
    var o,
      u = [];
    for (o = 0; o < 7; o++) u[o] = ct(t, (o + a) % 7, s, "day");
    return u;
  }
  function _t(e, t, n, s) {
    var i = Ke(t, n);
    return (
      (e._milliseconds += s * i._milliseconds),
      (e._days += s * i._days),
      (e._months += s * i._months),
      e._bubble()
    );
  }
  function yt(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e);
  }
  function gt(e) {
    return 4800 * e / 146097;
  }
  function pt(e) {
    return 146097 * e / 4800;
  }
  function wt(e) {
    return function() {
      return this.as(e);
    };
  }
  function vt(e) {
    return function() {
      return this.isValid() ? this._data[e] : NaN;
    };
  }
  function Mt(e, t, n, s, i) {
    return i.relativeTime(t || 1, !!n, e, s);
  }
  function kt(e, t, n) {
    var s = Ke(e).abs(),
      i = ks(s.as("s")),
      r = ks(s.as("m")),
      a = ks(s.as("h")),
      o = ks(s.as("d")),
      u = ks(s.as("M")),
      l = ks(s.as("y")),
      d = (i <= Ss.ss && ["s", i]) ||
        (i < Ss.s && ["ss", i]) ||
        (r <= 1 && ["m"]) ||
        (r < Ss.m && ["mm", r]) ||
        (a <= 1 && ["h"]) ||
        (a < Ss.h && ["hh", a]) ||
        (o <= 1 && ["d"]) ||
        (o < Ss.d && ["dd", o]) ||
        (u <= 1 && ["M"]) ||
        (u < Ss.M && ["MM", u]) ||
        (l <= 1 && ["y"]) || ["yy", l];
    return (d[2] = t), (d[3] = +e > 0), (d[4] = n), Mt.apply(null, d);
  }
  function St(e) {
    return (e > 0) - (e < 0) || +e;
  }
  function Dt() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var e,
      t,
      n,
      s = Ds(this._milliseconds) / 1e3,
      i = Ds(this._days),
      r = Ds(this._months);
    (t = p((e = p(s / 60)) / 60)), (s %= 60), (e %= 60);
    var a = (n = p(r / 12)),
      o = (r %= 12),
      u = i,
      l = t,
      d = e,
      h = s ? s.toFixed(3).replace(/\.?0+$/, "") : "",
      c = this.asSeconds();
    if (!c) return "P0D";
    var f = c < 0 ? "-" : "",
      m = St(this._months) !== St(c) ? "-" : "",
      _ = St(this._days) !== St(c) ? "-" : "",
      y = St(this._milliseconds) !== St(c) ? "-" : "";
    return (
      f +
      "P" +
      (a ? m + a + "Y" : "") +
      (o ? m + o + "M" : "") +
      (u ? _ + u + "D" : "") +
      (l || d || h ? "T" : "") +
      (l ? y + l + "H" : "") +
      (d ? y + d + "M" : "") +
      (h ? y + h + "S" : "")
    );
  }
  var Yt, Ot;
  Ot = Array.prototype.some
    ? Array.prototype.some
    : function(e) {
        for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++)
          if (s in t && e.call(this, t[s], s, t)) return !0;
        return !1;
      };
  var xt = (e.momentProperties = []),
    Tt = !1,
    bt = {};
  (e.suppressDeprecationWarnings = !1), (e.deprecationHandler = null);
  var Pt;
  Pt = Object.keys
    ? Object.keys
    : function(e) {
        var t,
          n = [];
        for (t in e) u(e, t) && n.push(t);
        return n;
      };
  var Wt = {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    },
    Rt = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A"
    },
    Ct = /\d{1,2}/,
    Ft = {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    },
    Ut = {},
    Nt = {},
    Ht = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    Lt = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    Gt = {},
    Vt = {},
    jt = /\d/,
    It = /\d\d/,
    Et = /\d{3}/,
    At = /\d{4}/,
    zt = /[+-]?\d{6}/,
    Zt = /\d\d?/,
    $t = /\d\d\d\d?/,
    qt = /\d\d\d\d\d\d?/,
    Jt = /\d{1,3}/,
    Bt = /\d{1,4}/,
    Qt = /[+-]?\d{1,6}/,
    Xt = /\d+/,
    Kt = /[+-]?\d+/,
    en = /Z|[+-]\d\d:?\d\d/gi,
    tn = /Z|[+-]\d\d(?::?\d\d)?/gi,
    nn = /[+-]?\d+(\.\d{1,3})?/,
    sn = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
    rn = {},
    an = {},
    on = 0,
    un = 1,
    ln = 2,
    dn = 3,
    hn = 4,
    cn = 5,
    fn = 6,
    mn = 7,
    _n = 8;
  C("Y", 0, 0, function() {
    var e = this.year();
    return e <= 9999 ? "" + e : "+" + e;
  }),
    C(0, ["YY", 2], 0, function() {
      return this.year() % 100;
    }),
    C(0, ["YYYY", 4], 0, "year"),
    C(0, ["YYYYY", 5], 0, "year"),
    C(0, ["YYYYYY", 6, !0], 0, "year"),
    x("year", "y"),
    P("year", 1),
    L("Y", Kt),
    L("YY", Zt, It),
    L("YYYY", Bt, At),
    L("YYYYY", Qt, zt),
    L("YYYYYY", Qt, zt),
    I(["YYYYY", "YYYYYY"], on),
    I("YYYY", function(t, n) {
      n[on] = 2 === t.length ? e.parseTwoDigitYear(t) : w(t);
    }),
    I("YY", function(t, n) {
      n[on] = e.parseTwoDigitYear(t);
    }),
    I("Y", function(e, t) {
      t[on] = parseInt(e, 10);
    }),
    (e.parseTwoDigitYear = function(e) {
      return w(e) + (w(e) > 68 ? 1900 : 2e3);
    });
  var yn,
    gn = $("FullYear", !0);
  (yn = Array.prototype.indexOf
    ? Array.prototype.indexOf
    : function(e) {
        var t;
        for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
        return -1;
      }),
    C("M", ["MM", 2], "Mo", function() {
      return this.month() + 1;
    }),
    C("MMM", 0, 0, function(e) {
      return this.localeData().monthsShort(this, e);
    }),
    C("MMMM", 0, 0, function(e) {
      return this.localeData().months(this, e);
    }),
    x("month", "M"),
    P("month", 8),
    L("M", Zt),
    L("MM", Zt, It),
    L("MMM", function(e, t) {
      return t.monthsShortRegex(e);
    }),
    L("MMMM", function(e, t) {
      return t.monthsRegex(e);
    }),
    I(["M", "MM"], function(e, t) {
      t[un] = w(e) - 1;
    }),
    I(["MMM", "MMMM"], function(e, t, n, s) {
      var i = n._locale.monthsParse(e, s, n._strict);
      null != i ? (t[un] = i) : (c(n).invalidMonth = e);
    });
  var pn = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    wn = "January_February_March_April_May_June_July_August_September_October_November_December".split(
      "_"
    ),
    vn = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    Mn = sn,
    kn = sn;
  C("w", ["ww", 2], "wo", "week"),
    C("W", ["WW", 2], "Wo", "isoWeek"),
    x("week", "w"),
    x("isoWeek", "W"),
    P("week", 5),
    P("isoWeek", 5),
    L("w", Zt),
    L("ww", Zt, It),
    L("W", Zt),
    L("WW", Zt, It),
    E(["w", "ww", "W", "WW"], function(e, t, n, s) {
      t[s.substr(0, 1)] = w(e);
    });
  var Sn = { dow: 0, doy: 6 };
  C("d", 0, "do", "day"),
    C("dd", 0, 0, function(e) {
      return this.localeData().weekdaysMin(this, e);
    }),
    C("ddd", 0, 0, function(e) {
      return this.localeData().weekdaysShort(this, e);
    }),
    C("dddd", 0, 0, function(e) {
      return this.localeData().weekdays(this, e);
    }),
    C("e", 0, 0, "weekday"),
    C("E", 0, 0, "isoWeekday"),
    x("day", "d"),
    x("weekday", "e"),
    x("isoWeekday", "E"),
    P("day", 11),
    P("weekday", 11),
    P("isoWeekday", 11),
    L("d", Zt),
    L("e", Zt),
    L("E", Zt),
    L("dd", function(e, t) {
      return t.weekdaysMinRegex(e);
    }),
    L("ddd", function(e, t) {
      return t.weekdaysShortRegex(e);
    }),
    L("dddd", function(e, t) {
      return t.weekdaysRegex(e);
    }),
    E(["dd", "ddd", "dddd"], function(e, t, n, s) {
      var i = n._locale.weekdaysParse(e, s, n._strict);
      null != i ? (t.d = i) : (c(n).invalidWeekday = e);
    }),
    E(["d", "e", "E"], function(e, t, n, s) {
      t[s] = w(e);
    });
  var Dn = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
      "_"
    ),
    Yn = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    On = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    xn = sn,
    Tn = sn,
    bn = sn;
  C("H", ["HH", 2], 0, "hour"),
    C("h", ["hh", 2], 0, ce),
    C("k", ["kk", 2], 0, function() {
      return this.hours() || 24;
    }),
    C("hmm", 0, 0, function() {
      return "" + ce.apply(this) + R(this.minutes(), 2);
    }),
    C("hmmss", 0, 0, function() {
      return "" + ce.apply(this) + R(this.minutes(), 2) + R(this.seconds(), 2);
    }),
    C("Hmm", 0, 0, function() {
      return "" + this.hours() + R(this.minutes(), 2);
    }),
    C("Hmmss", 0, 0, function() {
      return "" + this.hours() + R(this.minutes(), 2) + R(this.seconds(), 2);
    }),
    fe("a", !0),
    fe("A", !1),
    x("hour", "h"),
    P("hour", 13),
    L("a", me),
    L("A", me),
    L("H", Zt),
    L("h", Zt),
    L("k", Zt),
    L("HH", Zt, It),
    L("hh", Zt, It),
    L("kk", Zt, It),
    L("hmm", $t),
    L("hmmss", qt),
    L("Hmm", $t),
    L("Hmmss", qt),
    I(["H", "HH"], dn),
    I(["k", "kk"], function(e, t, n) {
      var s = w(e);
      t[dn] = 24 === s ? 0 : s;
    }),
    I(["a", "A"], function(e, t, n) {
      (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
    }),
    I(["h", "hh"], function(e, t, n) {
      (t[dn] = w(e)), (c(n).bigHour = !0);
    }),
    I("hmm", function(e, t, n) {
      var s = e.length - 2;
      (t[dn] = w(e.substr(0, s))),
        (t[hn] = w(e.substr(s))),
        (c(n).bigHour = !0);
    }),
    I("hmmss", function(e, t, n) {
      var s = e.length - 4,
        i = e.length - 2;
      (t[dn] = w(e.substr(0, s))),
        (t[hn] = w(e.substr(s, 2))),
        (t[cn] = w(e.substr(i))),
        (c(n).bigHour = !0);
    }),
    I("Hmm", function(e, t, n) {
      var s = e.length - 2;
      (t[dn] = w(e.substr(0, s))), (t[hn] = w(e.substr(s)));
    }),
    I("Hmmss", function(e, t, n) {
      var s = e.length - 4,
        i = e.length - 2;
      (t[dn] = w(e.substr(0, s))),
        (t[hn] = w(e.substr(s, 2))),
        (t[cn] = w(e.substr(i)));
    });
  var Pn,
    Wn = /[ap]\.?m?\.?/i,
    Rn = $("Hours", !0),
    Cn = {
      calendar: Wt,
      longDateFormat: Rt,
      invalidDate: "Invalid date",
      ordinal: "%d",
      dayOfMonthOrdinalParse: Ct,
      relativeTime: Ft,
      months: wn,
      monthsShort: vn,
      week: Sn,
      weekdays: Dn,
      weekdaysMin: On,
      weekdaysShort: Yn,
      meridiemParse: Wn
    },
    Fn = {},
    Un = {},
    Nn = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    Hn = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    Ln = /Z|[+-]\d\d(?::?\d\d)?/,
    Gn = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
      ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
      ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
      ["YYYY-DDD", /\d{4}-\d{3}/],
      ["YYYY-MM", /\d{4}-\d\d/, !1],
      ["YYYYYYMMDD", /[+-]\d{10}/],
      ["YYYYMMDD", /\d{8}/],
      ["GGGG[W]WWE", /\d{4}W\d{3}/],
      ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
      ["YYYYDDD", /\d{7}/]
    ],
    Vn = [
      ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
      ["HH:mm:ss", /\d\d:\d\d:\d\d/],
      ["HH:mm", /\d\d:\d\d/],
      ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
      ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
      ["HHmmss", /\d\d\d\d\d\d/],
      ["HHmm", /\d\d\d\d/],
      ["HH", /\d\d/]
    ],
    jn = /^\/?Date\((\-?\d+)/i,
    In = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    En = {
      UT: 0,
      GMT: 0,
      EDT: -240,
      EST: -300,
      CDT: -300,
      CST: -360,
      MDT: -360,
      MST: -420,
      PDT: -420,
      PST: -480
    };
  (e.createFromInputFallback = k(
    "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    function(e) {
      e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
    }
  )),
    (e.ISO_8601 = function() {}),
    (e.RFC_2822 = function() {});
  var An = k(
      "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
      function() {
        var e = Ie.apply(null, arguments);
        return this.isValid() && e.isValid() ? (e < this ? this : e) : m();
      }
    ),
    zn = k(
      "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
      function() {
        var e = Ie.apply(null, arguments);
        return this.isValid() && e.isValid() ? (e > this ? this : e) : m();
      }
    ),
    Zn = [
      "year",
      "quarter",
      "month",
      "week",
      "day",
      "hour",
      "minute",
      "second",
      "millisecond"
    ];
  qe("Z", ":"),
    qe("ZZ", ""),
    L("Z", tn),
    L("ZZ", tn),
    I(["Z", "ZZ"], function(e, t, n) {
      (n._useUTC = !0), (n._tzm = Je(tn, e));
    });
  var $n = /([\+\-]|\d\d)/gi;
  e.updateOffset = function() {};
  var qn = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
    Jn = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  (Ke.fn = ze.prototype),
    (Ke.invalid = function() {
      return Ke(NaN);
    });
  var Bn = st(1, "add"),
    Qn = st(-1, "subtract");
  (e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
    (e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
  var Xn = k(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function(e) {
      return void 0 === e ? this.localeData() : this.locale(e);
    }
  );
  C(0, ["gg", 2], 0, function() {
    return this.weekYear() % 100;
  }),
    C(0, ["GG", 2], 0, function() {
      return this.isoWeekYear() % 100;
    }),
    ut("gggg", "weekYear"),
    ut("ggggg", "weekYear"),
    ut("GGGG", "isoWeekYear"),
    ut("GGGGG", "isoWeekYear"),
    x("weekYear", "gg"),
    x("isoWeekYear", "GG"),
    P("weekYear", 1),
    P("isoWeekYear", 1),
    L("G", Kt),
    L("g", Kt),
    L("GG", Zt, It),
    L("gg", Zt, It),
    L("GGGG", Bt, At),
    L("gggg", Bt, At),
    L("GGGGG", Qt, zt),
    L("ggggg", Qt, zt),
    E(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, s) {
      t[s.substr(0, 2)] = w(e);
    }),
    E(["gg", "GG"], function(t, n, s, i) {
      n[i] = e.parseTwoDigitYear(t);
    }),
    C("Q", 0, "Qo", "quarter"),
    x("quarter", "Q"),
    P("quarter", 7),
    L("Q", jt),
    I("Q", function(e, t) {
      t[un] = 3 * (w(e) - 1);
    }),
    C("D", ["DD", 2], "Do", "date"),
    x("date", "D"),
    P("date", 9),
    L("D", Zt),
    L("DD", Zt, It),
    L("Do", function(e, t) {
      return e
        ? t._dayOfMonthOrdinalParse || t._ordinalParse
        : t._dayOfMonthOrdinalParseLenient;
    }),
    I(["D", "DD"], ln),
    I("Do", function(e, t) {
      t[ln] = w(e.match(Zt)[0], 10);
    });
  var Kn = $("Date", !0);
  C("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    x("dayOfYear", "DDD"),
    P("dayOfYear", 4),
    L("DDD", Jt),
    L("DDDD", Et),
    I(["DDD", "DDDD"], function(e, t, n) {
      n._dayOfYear = w(e);
    }),
    C("m", ["mm", 2], 0, "minute"),
    x("minute", "m"),
    P("minute", 14),
    L("m", Zt),
    L("mm", Zt, It),
    I(["m", "mm"], hn);
  var es = $("Minutes", !1);
  C("s", ["ss", 2], 0, "second"),
    x("second", "s"),
    P("second", 15),
    L("s", Zt),
    L("ss", Zt, It),
    I(["s", "ss"], cn);
  var ts = $("Seconds", !1);
  C("S", 0, 0, function() {
    return ~~(this.millisecond() / 100);
  }),
    C(0, ["SS", 2], 0, function() {
      return ~~(this.millisecond() / 10);
    }),
    C(0, ["SSS", 3], 0, "millisecond"),
    C(0, ["SSSS", 4], 0, function() {
      return 10 * this.millisecond();
    }),
    C(0, ["SSSSS", 5], 0, function() {
      return 100 * this.millisecond();
    }),
    C(0, ["SSSSSS", 6], 0, function() {
      return 1e3 * this.millisecond();
    }),
    C(0, ["SSSSSSS", 7], 0, function() {
      return 1e4 * this.millisecond();
    }),
    C(0, ["SSSSSSSS", 8], 0, function() {
      return 1e5 * this.millisecond();
    }),
    C(0, ["SSSSSSSSS", 9], 0, function() {
      return 1e6 * this.millisecond();
    }),
    x("millisecond", "ms"),
    P("millisecond", 16),
    L("S", Jt, jt),
    L("SS", Jt, It),
    L("SSS", Jt, Et);
  var ns;
  for (ns = "SSSS"; ns.length <= 9; ns += "S") L(ns, Xt);
  for (ns = "S"; ns.length <= 9; ns += "S")
    I(ns, function(e, t) {
      t[fn] = w(1e3 * ("0." + e));
    });
  var ss = $("Milliseconds", !1);
  C("z", 0, 0, "zoneAbbr"), C("zz", 0, 0, "zoneName");
  var is = y.prototype;
  (is.add = Bn),
    (is.calendar = function(t, n) {
      var s = t || Ie(),
        i = Be(s, this).startOf("day"),
        r = e.calendarFormat(this, i) || "sameElse",
        a = n && (D(n[r]) ? n[r].call(this, s) : n[r]);
      return this.format(a || this.localeData().calendar(r, this, Ie(s)));
    }),
    (is.clone = function() {
      return new y(this);
    }),
    (is.diff = function(e, t, n) {
      var s, i, r;
      if (!this.isValid()) return NaN;
      if (!(s = Be(e, this)).isValid()) return NaN;
      switch (((i = 6e4 * (s.utcOffset() - this.utcOffset())), (t = T(t)))) {
        case "year":
          r = rt(this, s) / 12;
          break;
        case "month":
          r = rt(this, s);
          break;
        case "quarter":
          r = rt(this, s) / 3;
          break;
        case "second":
          r = (this - s) / 1e3;
          break;
        case "minute":
          r = (this - s) / 6e4;
          break;
        case "hour":
          r = (this - s) / 36e5;
          break;
        case "day":
          r = (this - s - i) / 864e5;
          break;
        case "week":
          r = (this - s - i) / 6048e5;
          break;
        default:
          r = this - s;
      }
      return n ? r : p(r);
    }),
    (is.endOf = function(e) {
      return void 0 === (e = T(e)) || "millisecond" === e
        ? this
        : ("date" === e && (e = "day"),
          this.startOf(e)
            .add(1, "isoWeek" === e ? "week" : e)
            .subtract(1, "ms"));
    }),
    (is.format = function(t) {
      t || (t = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat);
      var n = N(this, t);
      return this.localeData().postformat(n);
    }),
    (is.from = function(e, t) {
      return this.isValid() && ((g(e) && e.isValid()) || Ie(e).isValid())
        ? Ke({ to: this, from: e })
            .locale(this.locale())
            .humanize(!t)
        : this.localeData().invalidDate();
    }),
    (is.fromNow = function(e) {
      return this.from(Ie(), e);
    }),
    (is.to = function(e, t) {
      return this.isValid() && ((g(e) && e.isValid()) || Ie(e).isValid())
        ? Ke({ from: this, to: e })
            .locale(this.locale())
            .humanize(!t)
        : this.localeData().invalidDate();
    }),
    (is.toNow = function(e) {
      return this.to(Ie(), e);
    }),
    (is.get = function(e) {
      return (e = T(e)), D(this[e]) ? this[e]() : this;
    }),
    (is.invalidAt = function() {
      return c(this).overflow;
    }),
    (is.isAfter = function(e, t) {
      var n = g(e) ? e : Ie(e);
      return (
        !(!this.isValid() || !n.isValid()) &&
        ("millisecond" === (t = T(i(t) ? "millisecond" : t))
          ? this.valueOf() > n.valueOf()
          : n.valueOf() <
            this.clone()
              .startOf(t)
              .valueOf())
      );
    }),
    (is.isBefore = function(e, t) {
      var n = g(e) ? e : Ie(e);
      return (
        !(!this.isValid() || !n.isValid()) &&
        ("millisecond" === (t = T(i(t) ? "millisecond" : t))
          ? this.valueOf() < n.valueOf()
          : this.clone()
              .endOf(t)
              .valueOf() < n.valueOf())
      );
    }),
    (is.isBetween = function(e, t, n, s) {
      return (
        ("(" === (s = s || "()")[0]
          ? this.isAfter(e, n)
          : !this.isBefore(e, n)) &&
        (")" === s[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
      );
    }),
    (is.isSame = function(e, t) {
      var n,
        s = g(e) ? e : Ie(e);
      return (
        !(!this.isValid() || !s.isValid()) &&
        ("millisecond" === (t = T(t || "millisecond"))
          ? this.valueOf() === s.valueOf()
          : ((n = s.valueOf()),
            this.clone()
              .startOf(t)
              .valueOf() <= n &&
              n <=
                this.clone()
                  .endOf(t)
                  .valueOf()))
      );
    }),
    (is.isSameOrAfter = function(e, t) {
      return this.isSame(e, t) || this.isAfter(e, t);
    }),
    (is.isSameOrBefore = function(e, t) {
      return this.isSame(e, t) || this.isBefore(e, t);
    }),
    (is.isValid = function() {
      return f(this);
    }),
    (is.lang = Xn),
    (is.locale = at),
    (is.localeData = ot),
    (is.max = zn),
    (is.min = An),
    (is.parsingFlags = function() {
      return l({}, c(this));
    }),
    (is.set = function(e, t) {
      if ("object" == typeof e)
        for (var n = W((e = b(e))), s = 0; s < n.length; s++)
          this[n[s].unit](e[n[s].unit]);
      else if (((e = T(e)), D(this[e]))) return this[e](t);
      return this;
    }),
    (is.startOf = function(e) {
      switch ((e = T(e))) {
        case "year":
          this.month(0);
        case "quarter":
        case "month":
          this.date(1);
        case "week":
        case "isoWeek":
        case "day":
        case "date":
          this.hours(0);
        case "hour":
          this.minutes(0);
        case "minute":
          this.seconds(0);
        case "second":
          this.milliseconds(0);
      }
      return (
        "week" === e && this.weekday(0),
        "isoWeek" === e && this.isoWeekday(1),
        "quarter" === e && this.month(3 * Math.floor(this.month() / 3)),
        this
      );
    }),
    (is.subtract = Qn),
    (is.toArray = function() {
      var e = this;
      return [
        e.year(),
        e.month(),
        e.date(),
        e.hour(),
        e.minute(),
        e.second(),
        e.millisecond()
      ];
    }),
    (is.toObject = function() {
      var e = this;
      return {
        years: e.year(),
        months: e.month(),
        date: e.date(),
        hours: e.hours(),
        minutes: e.minutes(),
        seconds: e.seconds(),
        milliseconds: e.milliseconds()
      };
    }),
    (is.toDate = function() {
      return new Date(this.valueOf());
    }),
    (is.toISOString = function() {
      if (!this.isValid()) return null;
      var e = this.clone().utc();
      return e.year() < 0 || e.year() > 9999
        ? N(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        : D(Date.prototype.toISOString)
          ? this.toDate().toISOString()
          : N(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
    }),
    (is.inspect = function() {
      if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
      var e = "moment",
        t = "";
      this.isLocal() ||
        ((e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
        (t = "Z"));
      var n = "[" + e + '("]',
        s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        i = t + '[")]';
      return this.format(n + s + "-MM-DD[T]HH:mm:ss.SSS" + i);
    }),
    (is.toJSON = function() {
      return this.isValid() ? this.toISOString() : null;
    }),
    (is.toString = function() {
      return this.clone()
        .locale("en")
        .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }),
    (is.unix = function() {
      return Math.floor(this.valueOf() / 1e3);
    }),
    (is.valueOf = function() {
      return this._d.valueOf() - 6e4 * (this._offset || 0);
    }),
    (is.creationData = function() {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
      };
    }),
    (is.year = gn),
    (is.isLeapYear = function() {
      return Z(this.year());
    }),
    (is.weekYear = function(e) {
      return lt.call(
        this,
        e,
        this.week(),
        this.weekday(),
        this.localeData()._week.dow,
        this.localeData()._week.doy
      );
    }),
    (is.isoWeekYear = function(e) {
      return lt.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
    }),
    (is.quarter = is.quarters = function(e) {
      return null == e
        ? Math.ceil((this.month() + 1) / 3)
        : this.month(3 * (e - 1) + this.month() % 3);
    }),
    (is.month = ee),
    (is.daysInMonth = function() {
      return Q(this.year(), this.month());
    }),
    (is.week = is.weeks = function(e) {
      var t = this.localeData().week(this);
      return null == e ? t : this.add(7 * (e - t), "d");
    }),
    (is.isoWeek = is.isoWeeks = function(e) {
      var t = ae(this, 1, 4).week;
      return null == e ? t : this.add(7 * (e - t), "d");
    }),
    (is.weeksInYear = function() {
      var e = this.localeData()._week;
      return oe(this.year(), e.dow, e.doy);
    }),
    (is.isoWeeksInYear = function() {
      return oe(this.year(), 1, 4);
    }),
    (is.date = Kn),
    (is.day = is.days = function(e) {
      if (!this.isValid()) return null != e ? this : NaN;
      var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
      return null != e
        ? ((e = ue(e, this.localeData())), this.add(e - t, "d"))
        : t;
    }),
    (is.weekday = function(e) {
      if (!this.isValid()) return null != e ? this : NaN;
      var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return null == e ? t : this.add(e - t, "d");
    }),
    (is.isoWeekday = function(e) {
      if (!this.isValid()) return null != e ? this : NaN;
      if (null != e) {
        var t = le(e, this.localeData());
        return this.day(this.day() % 7 ? t : t - 7);
      }
      return this.day() || 7;
    }),
    (is.dayOfYear = function(e) {
      var t =
        Math.round(
          (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
        ) + 1;
      return null == e ? t : this.add(e - t, "d");
    }),
    (is.hour = is.hours = Rn),
    (is.minute = is.minutes = es),
    (is.second = is.seconds = ts),
    (is.millisecond = is.milliseconds = ss),
    (is.utcOffset = function(t, n, s) {
      var i,
        r = this._offset || 0;
      if (!this.isValid()) return null != t ? this : NaN;
      if (null != t) {
        if ("string" == typeof t) {
          if (null === (t = Je(tn, t))) return this;
        } else Math.abs(t) < 16 && !s && (t *= 60);
        return (
          !this._isUTC && n && (i = Qe(this)),
          (this._offset = t),
          (this._isUTC = !0),
          null != i && this.add(i, "m"),
          r !== t &&
            (!n || this._changeInProgress
              ? it(this, Ke(t - r, "m"), 1, !1)
              : this._changeInProgress ||
                ((this._changeInProgress = !0),
                e.updateOffset(this, !0),
                (this._changeInProgress = null))),
          this
        );
      }
      return this._isUTC ? r : Qe(this);
    }),
    (is.utc = function(e) {
      return this.utcOffset(0, e);
    }),
    (is.local = function(e) {
      return (
        this._isUTC &&
          (this.utcOffset(0, e),
          (this._isUTC = !1),
          e && this.subtract(Qe(this), "m")),
        this
      );
    }),
    (is.parseZone = function() {
      if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
      else if ("string" == typeof this._i) {
        var e = Je(en, this._i);
        null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
      }
      return this;
    }),
    (is.hasAlignedHourOffset = function(e) {
      return (
        !!this.isValid() &&
        ((e = e ? Ie(e).utcOffset() : 0), (this.utcOffset() - e) % 60 == 0)
      );
    }),
    (is.isDST = function() {
      return (
        this.utcOffset() >
          this.clone()
            .month(0)
            .utcOffset() ||
        this.utcOffset() >
          this.clone()
            .month(5)
            .utcOffset()
      );
    }),
    (is.isLocal = function() {
      return !!this.isValid() && !this._isUTC;
    }),
    (is.isUtcOffset = function() {
      return !!this.isValid() && this._isUTC;
    }),
    (is.isUtc = Xe),
    (is.isUTC = Xe),
    (is.zoneAbbr = function() {
      return this._isUTC ? "UTC" : "";
    }),
    (is.zoneName = function() {
      return this._isUTC ? "Coordinated Universal Time" : "";
    }),
    (is.dates = k("dates accessor is deprecated. Use date instead.", Kn)),
    (is.months = k("months accessor is deprecated. Use month instead", ee)),
    (is.years = k("years accessor is deprecated. Use year instead", gn)),
    (is.zone = k(
      "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
      function(e, t) {
        return null != e
          ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this)
          : -this.utcOffset();
      }
    )),
    (is.isDSTShifted = k(
      "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
      function() {
        if (!i(this._isDSTShifted)) return this._isDSTShifted;
        var e = {};
        if ((_(e, this), (e = Ge(e))._a)) {
          var t = e._isUTC ? d(e._a) : Ie(e._a);
          this._isDSTShifted = this.isValid() && v(e._a, t.toArray()) > 0;
        } else this._isDSTShifted = !1;
        return this._isDSTShifted;
      }
    ));
  var rs = O.prototype;
  (rs.calendar = function(e, t, n) {
    var s = this._calendar[e] || this._calendar.sameElse;
    return D(s) ? s.call(t, n) : s;
  }),
    (rs.longDateFormat = function(e) {
      var t = this._longDateFormat[e],
        n = this._longDateFormat[e.toUpperCase()];
      return t || !n
        ? t
        : ((this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(
            e
          ) {
            return e.slice(1);
          })),
          this._longDateFormat[e]);
    }),
    (rs.invalidDate = function() {
      return this._invalidDate;
    }),
    (rs.ordinal = function(e) {
      return this._ordinal.replace("%d", e);
    }),
    (rs.preparse = ht),
    (rs.postformat = ht),
    (rs.relativeTime = function(e, t, n, s) {
      var i = this._relativeTime[n];
      return D(i) ? i(e, t, n, s) : i.replace(/%d/i, e);
    }),
    (rs.pastFuture = function(e, t) {
      var n = this._relativeTime[e > 0 ? "future" : "past"];
      return D(n) ? n(t) : n.replace(/%s/i, t);
    }),
    (rs.set = function(e) {
      var t, n;
      for (n in e) D((t = e[n])) ? (this[n] = t) : (this["_" + n] = t);
      (this._config = e),
        (this._dayOfMonthOrdinalParseLenient = new RegExp(
          (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            "|" +
            /\d{1,2}/.source
        ));
    }),
    (rs.months = function(e, n) {
      return e
        ? t(this._months)
          ? this._months[e.month()]
          : this._months[
              (this._months.isFormat || pn).test(n) ? "format" : "standalone"
            ][e.month()]
        : t(this._months) ? this._months : this._months.standalone;
    }),
    (rs.monthsShort = function(e, n) {
      return e
        ? t(this._monthsShort)
          ? this._monthsShort[e.month()]
          : this._monthsShort[pn.test(n) ? "format" : "standalone"][e.month()]
        : t(this._monthsShort)
          ? this._monthsShort
          : this._monthsShort.standalone;
    }),
    (rs.monthsParse = function(e, t, n) {
      var s, i, r;
      if (this._monthsParseExact) return X.call(this, e, t, n);
      for (
        this._monthsParse ||
          ((this._monthsParse = []),
          (this._longMonthsParse = []),
          (this._shortMonthsParse = [])),
          s = 0;
        s < 12;
        s++
      ) {
        if (
          ((i = d([2e3, s])),
          n &&
            !this._longMonthsParse[s] &&
            ((this._longMonthsParse[s] = new RegExp(
              "^" + this.months(i, "").replace(".", "") + "$",
              "i"
            )),
            (this._shortMonthsParse[s] = new RegExp(
              "^" + this.monthsShort(i, "").replace(".", "") + "$",
              "i"
            ))),
          n ||
            this._monthsParse[s] ||
            ((r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, "")),
            (this._monthsParse[s] = new RegExp(r.replace(".", ""), "i"))),
          n && "MMMM" === t && this._longMonthsParse[s].test(e))
        )
          return s;
        if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;
        if (!n && this._monthsParse[s].test(e)) return s;
      }
    }),
    (rs.monthsRegex = function(e) {
      return this._monthsParseExact
        ? (u(this, "_monthsRegex") || te.call(this),
          e ? this._monthsStrictRegex : this._monthsRegex)
        : (u(this, "_monthsRegex") || (this._monthsRegex = kn),
          this._monthsStrictRegex && e
            ? this._monthsStrictRegex
            : this._monthsRegex);
    }),
    (rs.monthsShortRegex = function(e) {
      return this._monthsParseExact
        ? (u(this, "_monthsRegex") || te.call(this),
          e ? this._monthsShortStrictRegex : this._monthsShortRegex)
        : (u(this, "_monthsShortRegex") || (this._monthsShortRegex = Mn),
          this._monthsShortStrictRegex && e
            ? this._monthsShortStrictRegex
            : this._monthsShortRegex);
    }),
    (rs.week = function(e) {
      return ae(e, this._week.dow, this._week.doy).week;
    }),
    (rs.firstDayOfYear = function() {
      return this._week.doy;
    }),
    (rs.firstDayOfWeek = function() {
      return this._week.dow;
    }),
    (rs.weekdays = function(e, n) {
      return e
        ? t(this._weekdays)
          ? this._weekdays[e.day()]
          : this._weekdays[
              this._weekdays.isFormat.test(n) ? "format" : "standalone"
            ][e.day()]
        : t(this._weekdays) ? this._weekdays : this._weekdays.standalone;
    }),
    (rs.weekdaysMin = function(e) {
      return e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
    }),
    (rs.weekdaysShort = function(e) {
      return e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
    }),
    (rs.weekdaysParse = function(e, t, n) {
      var s, i, r;
      if (this._weekdaysParseExact) return de.call(this, e, t, n);
      for (
        this._weekdaysParse ||
          ((this._weekdaysParse = []),
          (this._minWeekdaysParse = []),
          (this._shortWeekdaysParse = []),
          (this._fullWeekdaysParse = [])),
          s = 0;
        s < 7;
        s++
      ) {
        if (
          ((i = d([2e3, 1]).day(s)),
          n &&
            !this._fullWeekdaysParse[s] &&
            ((this._fullWeekdaysParse[s] = new RegExp(
              "^" + this.weekdays(i, "").replace(".", ".?") + "$",
              "i"
            )),
            (this._shortWeekdaysParse[s] = new RegExp(
              "^" + this.weekdaysShort(i, "").replace(".", ".?") + "$",
              "i"
            )),
            (this._minWeekdaysParse[s] = new RegExp(
              "^" + this.weekdaysMin(i, "").replace(".", ".?") + "$",
              "i"
            ))),
          this._weekdaysParse[s] ||
            ((r =
              "^" +
              this.weekdays(i, "") +
              "|^" +
              this.weekdaysShort(i, "") +
              "|^" +
              this.weekdaysMin(i, "")),
            (this._weekdaysParse[s] = new RegExp(r.replace(".", ""), "i"))),
          n && "dddd" === t && this._fullWeekdaysParse[s].test(e))
        )
          return s;
        if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s;
        if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s;
        if (!n && this._weekdaysParse[s].test(e)) return s;
      }
    }),
    (rs.weekdaysRegex = function(e) {
      return this._weekdaysParseExact
        ? (u(this, "_weekdaysRegex") || he.call(this),
          e ? this._weekdaysStrictRegex : this._weekdaysRegex)
        : (u(this, "_weekdaysRegex") || (this._weekdaysRegex = xn),
          this._weekdaysStrictRegex && e
            ? this._weekdaysStrictRegex
            : this._weekdaysRegex);
    }),
    (rs.weekdaysShortRegex = function(e) {
      return this._weekdaysParseExact
        ? (u(this, "_weekdaysRegex") || he.call(this),
          e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        : (u(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Tn),
          this._weekdaysShortStrictRegex && e
            ? this._weekdaysShortStrictRegex
            : this._weekdaysShortRegex);
    }),
    (rs.weekdaysMinRegex = function(e) {
      return this._weekdaysParseExact
        ? (u(this, "_weekdaysRegex") || he.call(this),
          e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        : (u(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = bn),
          this._weekdaysMinStrictRegex && e
            ? this._weekdaysMinStrictRegex
            : this._weekdaysMinRegex);
    }),
    (rs.isPM = function(e) {
      return "p" === (e + "").toLowerCase().charAt(0);
    }),
    (rs.meridiem = function(e, t, n) {
      return e > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
    }),
    pe("en", {
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function(e) {
        var t = e % 10;
        return (
          e +
          (1 === w((e % 100) / 10)
            ? "th"
            : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
        );
      }
    }),
    (e.lang = k("moment.lang is deprecated. Use moment.locale instead.", pe)),
    (e.langData = k(
      "moment.langData is deprecated. Use moment.localeData instead.",
      ve
    ));
  var as = Math.abs,
    os = wt("ms"),
    us = wt("s"),
    ls = wt("m"),
    ds = wt("h"),
    hs = wt("d"),
    cs = wt("w"),
    fs = wt("M"),
    ms = wt("y"),
    _s = vt("milliseconds"),
    ys = vt("seconds"),
    gs = vt("minutes"),
    ps = vt("hours"),
    ws = vt("days"),
    vs = vt("months"),
    Ms = vt("years"),
    ks = Math.round,
    Ss = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
    Ds = Math.abs,
    Ys = ze.prototype;
  return (
    (Ys.isValid = function() {
      return this._isValid;
    }),
    (Ys.abs = function() {
      var e = this._data;
      return (
        (this._milliseconds = as(this._milliseconds)),
        (this._days = as(this._days)),
        (this._months = as(this._months)),
        (e.milliseconds = as(e.milliseconds)),
        (e.seconds = as(e.seconds)),
        (e.minutes = as(e.minutes)),
        (e.hours = as(e.hours)),
        (e.months = as(e.months)),
        (e.years = as(e.years)),
        this
      );
    }),
    (Ys.add = function(e, t) {
      return _t(this, e, t, 1);
    }),
    (Ys.subtract = function(e, t) {
      return _t(this, e, t, -1);
    }),
    (Ys.as = function(e) {
      if (!this.isValid()) return NaN;
      var t,
        n,
        s = this._milliseconds;
      if ("month" === (e = T(e)) || "year" === e)
        return (
          (t = this._days + s / 864e5),
          (n = this._months + gt(t)),
          "month" === e ? n : n / 12
        );
      switch (((t = this._days + Math.round(pt(this._months))), e)) {
        case "week":
          return t / 7 + s / 6048e5;
        case "day":
          return t + s / 864e5;
        case "hour":
          return 24 * t + s / 36e5;
        case "minute":
          return 1440 * t + s / 6e4;
        case "second":
          return 86400 * t + s / 1e3;
        case "millisecond":
          return Math.floor(864e5 * t) + s;
        default:
          throw new Error("Unknown unit " + e);
      }
    }),
    (Ys.asMilliseconds = os),
    (Ys.asSeconds = us),
    (Ys.asMinutes = ls),
    (Ys.asHours = ds),
    (Ys.asDays = hs),
    (Ys.asWeeks = cs),
    (Ys.asMonths = fs),
    (Ys.asYears = ms),
    (Ys.valueOf = function() {
      return this.isValid()
        ? this._milliseconds +
            864e5 * this._days +
            (this._months % 12) * 2592e6 +
            31536e6 * w(this._months / 12)
        : NaN;
    }),
    (Ys._bubble = function() {
      var e,
        t,
        n,
        s,
        i,
        r = this._milliseconds,
        a = this._days,
        o = this._months,
        u = this._data;
      return (
        (r >= 0 && a >= 0 && o >= 0) ||
          (r <= 0 && a <= 0 && o <= 0) ||
          ((r += 864e5 * yt(pt(o) + a)), (a = 0), (o = 0)),
        (u.milliseconds = r % 1e3),
        (e = p(r / 1e3)),
        (u.seconds = e % 60),
        (t = p(e / 60)),
        (u.minutes = t % 60),
        (n = p(t / 60)),
        (u.hours = n % 24),
        (a += p(n / 24)),
        (i = p(gt(a))),
        (o += i),
        (a -= yt(pt(i))),
        (s = p(o / 12)),
        (o %= 12),
        (u.days = a),
        (u.months = o),
        (u.years = s),
        this
      );
    }),
    (Ys.clone = function() {
      return Ke(this);
    }),
    (Ys.get = function(e) {
      return (e = T(e)), this.isValid() ? this[e + "s"]() : NaN;
    }),
    (Ys.milliseconds = _s),
    (Ys.seconds = ys),
    (Ys.minutes = gs),
    (Ys.hours = ps),
    (Ys.days = ws),
    (Ys.weeks = function() {
      return p(this.days() / 7);
    }),
    (Ys.months = vs),
    (Ys.years = Ms),
    (Ys.humanize = function(e) {
      if (!this.isValid()) return this.localeData().invalidDate();
      var t = this.localeData(),
        n = kt(this, !e, t);
      return e && (n = t.pastFuture(+this, n)), t.postformat(n);
    }),
    (Ys.toISOString = Dt),
    (Ys.toString = Dt),
    (Ys.toJSON = Dt),
    (Ys.locale = at),
    (Ys.localeData = ot),
    (Ys.toIsoString = k(
      "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
      Dt
    )),
    (Ys.lang = Xn),
    C("X", 0, 0, "unix"),
    C("x", 0, 0, "valueOf"),
    L("x", Kt),
    L("X", nn),
    I("X", function(e, t, n) {
      n._d = new Date(1e3 * parseFloat(e, 10));
    }),
    I("x", function(e, t, n) {
      n._d = new Date(w(e));
    }),
    (e.version = "2.19.1"),
    (function(e) {
      Yt = e;
    })(Ie),
    (e.fn = is),
    (e.min = function() {
      return Ee("isBefore", [].slice.call(arguments, 0));
    }),
    (e.max = function() {
      return Ee("isAfter", [].slice.call(arguments, 0));
    }),
    (e.now = function() {
      return Date.now ? Date.now() : +new Date();
    }),
    (e.utc = d),
    (e.unix = function(e) {
      return Ie(1e3 * e);
    }),
    (e.months = function(e, t) {
      return ft(e, t, "months");
    }),
    (e.isDate = a),
    (e.locale = pe),
    (e.invalid = m),
    (e.duration = Ke),
    (e.isMoment = g),
    (e.weekdays = function(e, t, n) {
      return mt(e, t, n, "weekdays");
    }),
    (e.parseZone = function() {
      return Ie.apply(null, arguments).parseZone();
    }),
    (e.localeData = ve),
    (e.isDuration = Ze),
    (e.monthsShort = function(e, t) {
      return ft(e, t, "monthsShort");
    }),
    (e.weekdaysMin = function(e, t, n) {
      return mt(e, t, n, "weekdaysMin");
    }),
    (e.defineLocale = we),
    (e.updateLocale = function(e, t) {
      if (null != t) {
        var n,
          s = Cn;
        null != Fn[e] && (s = Fn[e]._config),
          ((n = new O((t = Y(s, t)))).parentLocale = Fn[e]),
          (Fn[e] = n),
          pe(e);
      } else
        null != Fn[e] &&
          (null != Fn[e].parentLocale
            ? (Fn[e] = Fn[e].parentLocale)
            : null != Fn[e] && delete Fn[e]);
      return Fn[e];
    }),
    (e.locales = function() {
      return Pt(Fn);
    }),
    (e.weekdaysShort = function(e, t, n) {
      return mt(e, t, n, "weekdaysShort");
    }),
    (e.normalizeUnits = T),
    (e.relativeTimeRounding = function(e) {
      return void 0 === e ? ks : "function" == typeof e && ((ks = e), !0);
    }),
    (e.relativeTimeThreshold = function(e, t) {
      return (
        void 0 !== Ss[e] &&
        (void 0 === t ? Ss[e] : ((Ss[e] = t), "s" === e && (Ss.ss = t - 1), !0))
      );
    }),
    (e.calendarFormat = function(e, t) {
      var n = e.diff(t, "days", !0);
      return n < -6
        ? "sameElse"
        : n < -1
          ? "lastWeek"
          : n < 0
            ? "lastDay"
            : n < 1
              ? "sameDay"
              : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
    }),
    (e.prototype = is),
    e
  );
});