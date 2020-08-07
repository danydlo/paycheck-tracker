"use strict";

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-9b39668e"], {
  "047a": function a(t, e, _a) {},
  "12a1": function a1(t, e, a) {},
  "177c": function c(t, e, a) {
    "use strict";

    var s = function s() {
      var t = this,
          e = t.$createElement,
          a = t._self._c || e;
      return a("div", {
        staticClass: "current-paycheck"
      }, [t._t("default"), a("div", {
        staticClass: "container-top"
      }, [a("div", {
        staticClass: "paycheck"
      }, [a("h1", {
        staticClass: "money"
      }, [t._v("$" + t._s(t._f("money")(t.paycheck.credit + t.paycheck.cash)))]), a("h3", {
        staticClass: "orange"
      }, [t._v("NET PAY")])]), a("div", {
        staticClass: "hours"
      }, [a("h1", [t._v(" " + t._s(t._f("decimal")(t.paycheck.hours + t.paycheck.overtime)) + " ")]), a("h3", {
        staticClass: "orange"
      }, [t._v("HOURS WORKED")])])]), a("div", {
        staticClass: "mt"
      }, [a("div", {
        staticClass: "container-bottom row"
      }, [a("p", [t._v("Days:")]), a("p", {
        staticClass: "right"
      }, [t._v(t._s(t.paycheck.days))])]), a("div", {
        staticClass: "container-bottom row"
      }, [a("p", [t._v(" Hourly (" + t._s(t._f("decimal")(t.paycheck.hours)) + " @ " + t._s(t._f("money")(+t.userInfo.wage)) + ") ")]), a("p", {
        staticClass: "right"
      }, [t._v("$" + t._s(t._f("money")(t.hourly)))])]), a("div", {
        staticClass: "container-bottom row"
      }, [a("p", [t._v(" Overtime (" + t._s(t._f("decimal")(t.paycheck.overtime)) + " @ " + t._s(t._f("money")(1.5 * +t.userInfo.wage)) + ") ")]), a("p", {
        staticClass: "right"
      }, [t._v("$" + t._s(t._f("money")(t.overtime)))])]), a("div", {
        staticClass: "container-bottom row"
      }, [a("p", [t._v("Credit tips")]), a("p", {
        staticClass: "right"
      }, [t._v("$" + t._s(t._f("money")(t.credit)))])]), a("div", {
        staticClass: "container-bottom row"
      }, [a("p", [t._v("Cash tips")]), a("p", {
        staticClass: "right"
      }, [t._v("$" + t._s(t._f("money")(t.paycheck.cash)))])])]), a("p", {
        staticClass: "mt"
      }, [t._v(" Pay Period: " + t._s(t._f("formatDate")(t.paycheck.start)) + " - " + t._s(t._f("formatDate")(t.paycheck.end)) + ", " + t._s(t._f("year")(t.paycheck.end)) + " ")])], 2);
    },
        c = [],
        i = (a("fb6a"), a("a9e3"), a("35b3"), a("b680"), a("5530")),
        n = a("2f62"),
        r = a("c1df"),
        o = a.n(r),
        l = {
      name: "HomePaycheckInfo",
      props: ["paycheck"],
      filters: {
        decimal: function decimal(t) {
          if (void 0 !== t) return Math.round(100 * (t + Number.EPSILON)) / 100;
        },
        money: function money(t) {
          if (void 0 !== t) {
            for (var e = t.toFixed(2), a = 0, s = e.length - 4; s > 0; s--) {
              2 === a && (e = e.slice(0, s) + "," + e.slice(s), a = 0), a++;
            }

            return e;
          }
        },
        formatDate: function formatDate(t) {
          return o()(t).format("MMM D");
        },
        year: function year(t) {
          return o()(t).format("YYYY");
        }
      },
      computed: Object(i["a"])(Object(i["a"])({}, Object(n["c"])(["userInfo"])), {}, {
        hourly: function hourly() {
          return this.paycheck.hours * +this.userInfo.wage;
        },
        overtime: function overtime() {
          return this.paycheck.overtime * (1.5 * +this.userInfo.wage);
        },
        credit: function credit() {
          var t = this.paycheck.hours * +this.userInfo.wage,
              e = this.paycheck.overtime * (1.5 * +this.userInfo.wage);
          return this.paycheck.credit - t - e;
        }
      })
    },
        u = l,
        f = (a("5a35"), a("2877")),
        d = Object(f["a"])(u, s, c, !1, null, "c458610c", null);

    e["a"] = d.exports;
  },
  "35b1": function b1(t, e, a) {
    "use strict";

    var s = a("da90"),
        c = a.n(s);
    c.a;
  },
  "5a35": function a35(t, e, a) {
    "use strict";

    var s = a("047a"),
        c = a.n(s);
    c.a;
  },
  a00c: function a00c(t, e, a) {
    "use strict";

    var s = function s() {
      var t = this,
          e = t.$createElement,
          a = t._self._c || e;
      return a("div", t._l(t.workdays, function (e) {
        return a("div", {
          key: e._id,
          staticClass: "box"
        }, [a("div", {
          staticClass: "row"
        }, [a("div", {
          staticClass: "col"
        }, [a("span", {
          staticClass: "text left"
        }, [t._v("Credit")]), a("span", {
          staticClass: "text left"
        }, [t._v("$" + t._s(t._f("money")(e.credit)))])]), a("div", {
          staticClass: "col"
        }, [a("span", {
          staticClass: "text right"
        }, [t._v("Period")]), a("span", {
          staticClass: "text right"
        }, [t._v(" " + t._s(t._f("day")(e.start)) + ", " + t._s(t._f("hour")(e.start)) + " - " + t._s(t._f("hour")(e.end)) + " ")])])]), a("div", {
          staticClass: "row"
        }, [a("div", {
          staticClass: "col"
        }, [a("span", {
          staticClass: "text left"
        }, [t._v("Cash")]), a("span", {
          staticClass: "text left"
        }, [t._v("$" + t._s(t._f("money")(e.cash)))])]), a("button", {
          staticClass: "small-btn",
          on: {
            click: function click(a) {
              return t.deleteBtn(e._id, e.paycheck);
            }
          }
        }, [t._v(" delete ")])])]);
      }), 0);
    },
        c = [],
        i = (a("fb6a"), a("b680"), a("96cf"), a("1da1")),
        n = a("5530"),
        r = a("2f62"),
        o = a("c1df"),
        l = a.n(o),
        u = {
      name: "BaseWorkdaysInfo",
      props: ["workdays"],
      methods: Object(n["a"])(Object(n["a"])({}, Object(r["b"])(["deleteWorkday", "getWorkdays", "updatePaycheck", "getPaychecks"])), {}, {
        deleteBtn: function deleteBtn(t, e) {
          var a = this;
          return Object(i["a"])(regeneratorRuntime.mark(function s() {
            var c;
            return regeneratorRuntime.wrap(function (s) {
              while (1) {
                switch (s.prev = s.next) {
                  case 0:
                    if (c = confirm("Are you sure?"), !c) {
                      s.next = 9;
                      break;
                    }

                    return s.next = 4, a.deleteWorkday(t);

                  case 4:
                    return s.next = 6, a.updatePaycheck({
                      userId: a.userInfo.id,
                      paycheckId: e
                    });

                  case 6:
                    return s.next = 8, a.getPaychecks(a.userInfo.id);

                  case 8:
                    a.$emit("deleteDay");

                  case 9:
                  case "end":
                    return s.stop();
                }
              }
            }, s);
          }))();
        }
      }),
      computed: Object(r["c"])(["userInfo"]),
      filters: {
        day: function day(t) {
          return l()(t).format("MMM Do");
        },
        hour: function hour(t) {
          return l()(t).format("h:mm");
        },
        money: function money(t) {
          for (var e = t.toFixed(2), a = 0, s = e.length - 4; s > 0; s--) {
            2 === a && (e = e.slice(0, s) + "," + e.slice(s), a = 0), a++;
          }

          return e;
        }
      }
    },
        f = u,
        d = (a("35b1"), a("2877")),
        h = Object(d["a"])(f, s, c, !1, null, "21372e65", null);

    e["a"] = h.exports;
  },
  bb51: function bb51(t, e, a) {
    "use strict";

    a.r(e);

    var s = function s() {
      var t = this,
          e = t.$createElement,
          a = t._self._c || e;
      return a("div", {
        staticClass: "container"
      }, [a("h1", {
        staticClass: "title"
      }, [t._v(t._s(t._f("possession")(t.userInfo.name)) + " Home")]), void 0 === t.paycheckActive ? a("span", {
        staticClass: "text m10"
      }, [t._v(" No active paycheck available yet ")]) : a("div", [a("span", {
        staticClass: "text"
      }, [t._v(" Hey welcome back! Let's take a look at your latest paycheck information ")]), a("BasePaycheckInfo", {
        attrs: {
          paycheck: t.paycheckActive
        }
      }, [a("h2", {
        staticClass: "title orange"
      }, [t._v("Your latest paycheck")])])], 1), a("h2", {
        staticClass: "orange mb"
      }, [t._v("Days worked")]), t.workdayActive.length ? a("BaseWorkdaysInfo", {
        attrs: {
          workdays: t.workdayActive
        },
        on: {
          deleteDay: t.deleteDay
        }
      }) : a("span", {
        staticClass: "text m10"
      }, [t._v(" No workdays available yet ")])], 1);
    },
        c = [],
        i = (a("fb6a"), a("5530")),
        n = a("2f62"),
        r = a("177c"),
        o = a("a00c"),
        l = {
      name: "Home",
      components: {
        BasePaycheckInfo: r["a"],
        BaseWorkdaysInfo: o["a"]
      },
      filters: {
        possession: function possession(t) {
          if (void 0 !== t) return "s" === t.slice(-1) ? "".concat(t, "'") : "".concat(t, "'s");
        }
      },
      methods: Object(i["a"])(Object(i["a"])({}, Object(n["b"])(["getWorkdays", "getPaychecks"])), {}, {
        deleteDay: function deleteDay() {
          this.getWorkdays(this.paycheckActive._id);
        }
      }),
      computed: Object(n["c"])(["userInfo", "paycheckActive", "workdayActive"]),
      created: function created() {
        void 0 !== this.paycheckActive && this.getWorkdays(this.paycheckActive._id);
      }
    },
        u = l,
        f = (a("f3b3"), a("2877")),
        d = Object(f["a"])(u, s, c, !1, null, "6e716b76", null);

    e["default"] = d.exports;
  },
  da90: function da90(t, e, a) {},
  f3b3: function f3b3(t, e, a) {
    "use strict";

    var s = a("12a1"),
        c = a.n(s);
    c.a;
  }
}]);