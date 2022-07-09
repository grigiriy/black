(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/air-datepicker/air-datepicker.js
  var require_air_datepicker = __commonJS({
    "node_modules/air-datepicker/air-datepicker.js"(exports, module) {
      !function(e2, t2) {
        typeof exports == "object" && typeof module == "object" ? module.exports = t2() : typeof define == "function" && define.amd ? define([], t2) : typeof exports == "object" ? exports.AirDatepicker = t2() : e2.AirDatepicker = t2();
      }(exports, function() {
        return function() {
          "use strict";
          var e2 = { d: function(t3, i3) {
            for (var s3 in i3)
              e2.o(i3, s3) && !e2.o(t3, s3) && Object.defineProperty(t3, s3, { enumerable: true, get: i3[s3] });
          }, o: function(e3, t3) {
            return Object.prototype.hasOwnProperty.call(e3, t3);
          } }, t2 = {};
          e2.d(t2, { default: function() {
            return K;
          } });
          var i2 = { days: "days", months: "months", years: "years", day: "day", month: "month", year: "year", eventChangeViewDate: "changeViewDate", eventChangeCurrentView: "changeCurrentView", eventChangeFocusDate: "changeFocusDate", eventChangeSelectedDate: "changeSelectedDate", eventChangeTime: "changeTime", eventChangeLastSelectedDate: "changeLastSelectedDate", actionSelectDate: "selectDate", actionUnselectDate: "unselectDate", cssClassWeekend: "-weekend-" }, s2 = { classes: "", inline: false, locale: { days: ["\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435", "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A", "\u0412\u0442\u043E\u0440\u043D\u0438\u043A", "\u0421\u0440\u0435\u0434\u0430", "\u0427\u0435\u0442\u0432\u0435\u0440\u0433", "\u041F\u044F\u0442\u043D\u0438\u0446\u0430", "\u0421\u0443\u0431\u0431\u043E\u0442\u0430"], daysShort: ["\u0412\u043E\u0441", "\u041F\u043E\u043D", "\u0412\u0442\u043E", "\u0421\u0440\u0435", "\u0427\u0435\u0442", "\u041F\u044F\u0442", "\u0421\u0443\u0431"], daysMin: ["\u0412\u0441", "\u041F\u043D", "\u0412\u0442", "\u0421\u0440", "\u0427\u0442", "\u041F\u0442", "\u0421\u0431"], months: ["\u042F\u043D\u0432\u0430\u0440\u044C", "\u0424\u0435\u0432\u0440\u0430\u043B\u044C", "\u041C\u0430\u0440\u0442", "\u0410\u043F\u0440\u0435\u043B\u044C", "\u041C\u0430\u0439", "\u0418\u044E\u043D\u044C", "\u0418\u044E\u043B\u044C", "\u0410\u0432\u0433\u0443\u0441\u0442", "\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C", "\u041E\u043A\u0442\u044F\u0431\u0440\u044C", "\u041D\u043E\u044F\u0431\u0440\u044C", "\u0414\u0435\u043A\u0430\u0431\u0440\u044C"], monthsShort: ["\u042F\u043D\u0432", "\u0424\u0435\u0432", "\u041C\u0430\u0440", "\u0410\u043F\u0440", "\u041C\u0430\u0439", "\u0418\u044E\u043D", "\u0418\u044E\u043B", "\u0410\u0432\u0433", "\u0421\u0435\u043D", "\u041E\u043A\u0442", "\u041D\u043E\u044F", "\u0414\u0435\u043A"], today: "\u0421\u0435\u0433\u043E\u0434\u043D\u044F", clear: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C", dateFormat: "dd.MM.yyyy", timeFormat: "HH:mm", firstDay: 1 }, startDate: new Date(), firstDay: "", weekends: [6, 0], dateFormat: "", altField: "", altFieldDateFormat: "T", toggleSelected: true, keyboardNav: true, selectedDates: false, container: "", isMobile: false, visible: false, position: "bottom left", offset: 12, view: i2.days, minView: i2.days, showOtherMonths: true, selectOtherMonths: true, moveToOtherMonthsOnSelect: true, showOtherYears: true, selectOtherYears: true, moveToOtherYearsOnSelect: true, minDate: "", maxDate: "", disableNavWhenOutOfRange: true, multipleDates: false, multipleDatesSeparator: ", ", range: false, dynamicRange: true, buttons: false, monthsField: "monthsShort", showEvent: "focus", autoClose: false, prevHtml: '<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>', nextHtml: '<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>', navTitles: { days: "MMMM, <i>yyyy</i>", months: "yyyy", years: "yyyy1 - yyyy2" }, timepicker: false, onlyTimepicker: false, dateTimeSeparator: " ", timeFormat: "", minHours: 0, maxHours: 24, minMinutes: 0, maxMinutes: 59, hoursStep: 1, minutesStep: 1, onSelect: false, onChangeViewDate: false, onChangeView: false, onRenderCell: false, onShow: false, onHide: false, onClickDayName: false };
          function a2(e3) {
            let t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document;
            return typeof e3 == "string" ? t3.querySelector(e3) : e3;
          }
          function n2() {
            let { tagName: e3 = "div", className: t3 = "", innerHtml: i3 = "", id: s3 = "", attrs: a3 = {} } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n3 = document.createElement(e3);
            if (t3 && n3.classList.add(...t3.split(" ")), s3 && (n3.id = s3), i3 && (n3.innerHTML = i3), a3)
              for (let e4 in a3)
                n3.setAttribute(e4, a3[e4]);
            return n3;
          }
          function r2(e3, t3) {
            for (let [i3, s3] of Object.entries(t3))
              e3.setAttribute(i3, s3);
            return e3;
          }
          function h2(e3) {
            return new Date(e3.getFullYear(), e3.getMonth() + 1, 0).getDate();
          }
          function o2(e3) {
            let t3 = e3.getHours(), i3 = t3 % 12 == 0 ? 12 : t3 % 12;
            return { year: e3.getFullYear(), month: e3.getMonth(), fullMonth: e3.getMonth() + 1 < 10 ? "0" + (e3.getMonth() + 1) : e3.getMonth() + 1, date: e3.getDate(), fullDate: e3.getDate() < 10 ? "0" + e3.getDate() : e3.getDate(), day: e3.getDay(), hours: t3, fullHours: l2(t3), hours12: i3, fullHours12: l2(i3), minutes: e3.getMinutes(), fullMinutes: e3.getMinutes() < 10 ? "0" + e3.getMinutes() : e3.getMinutes() };
          }
          function l2(e3) {
            return e3 < 10 ? "0" + e3 : e3;
          }
          function d2(e3) {
            let t3 = 10 * Math.floor(e3.getFullYear() / 10);
            return [t3, t3 + 9];
          }
          function c2() {
            let e3 = [];
            for (var t3 = arguments.length, i3 = new Array(t3), s3 = 0; s3 < t3; s3++)
              i3[s3] = arguments[s3];
            return i3.forEach((t4) => {
              if (typeof t4 == "object")
                for (let i4 in t4)
                  t4[i4] && e3.push(i4);
              else
                t4 && e3.push(t4);
            }), e3.join(" ");
          }
          function u2(e3, t3) {
            let s3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : i2.days;
            if (!e3 || !t3)
              return false;
            let a3 = o2(e3), n3 = o2(t3), r3 = { [i2.days]: a3.date === n3.date && a3.month === n3.month && a3.year === n3.year, [i2.months]: a3.month === n3.month && a3.year === n3.year, [i2.years]: a3.year === n3.year };
            return r3[s3];
          }
          function p2(e3, t3, i3) {
            let s3 = g2(e3, false).getTime(), a3 = g2(t3, false).getTime();
            return i3 ? s3 >= a3 : s3 > a3;
          }
          function m2(e3, t3) {
            return !p2(e3, t3, true);
          }
          function g2(e3) {
            let t3 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i3 = new Date(e3.getTime());
            return typeof t3 != "boolean" || t3 || D(i3), i3;
          }
          function D(e3) {
            return e3.setHours(0, 0, 0, 0), e3;
          }
          function v2(e3, t3, i3) {
            e3.length ? e3.forEach((e4) => {
              e4.addEventListener(t3, i3);
            }) : e3.addEventListener(t3, i3);
          }
          function y2(e3, t3) {
            return !(!e3 || e3 === document || e3 instanceof DocumentFragment) && (e3.matches(t3) ? e3 : y2(e3.parentNode, t3));
          }
          function f2(e3, t3, i3) {
            return e3 > i3 ? i3 : e3 < t3 ? t3 : e3;
          }
          function w2(e3) {
            for (var t3 = arguments.length, i3 = new Array(t3 > 1 ? t3 - 1 : 0), s3 = 1; s3 < t3; s3++)
              i3[s3 - 1] = arguments[s3];
            return i3.filter((e4) => e4).forEach((t4) => {
              for (let [i4, s4] of Object.entries(t4))
                if (s4 !== void 0 && s4.toString() === "[object Object]") {
                  let t5 = e3[i4] !== void 0 ? e3[i4].toString() : void 0, a3 = s4.toString(), n3 = Array.isArray(s4) ? [] : {};
                  e3[i4] = e3[i4] ? t5 !== a3 ? n3 : e3[i4] : n3, w2(e3[i4], s4);
                } else
                  e3[i4] = s4;
            }), e3;
          }
          function b2(e3) {
            let t3 = e3;
            return e3 instanceof Date || (t3 = new Date(e3)), isNaN(t3.getTime()) && (console.log('Unable to convert value "'.concat(e3, '" to Date object')), t3 = false), t3;
          }
          function k2(e3) {
            let t3 = "\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";
            return new RegExp("(^|>|" + t3 + ")(" + e3 + ")($|<|" + t3 + ")", "g");
          }
          function C2(e3, t3, i3) {
            return t3 in e3 ? Object.defineProperty(e3, t3, { value: i3, enumerable: true, configurable: true, writable: true }) : e3[t3] = i3, e3;
          }
          class _2 {
            constructor() {
              let { type: e3, date: t3, dp: i3, opts: s3, body: a3 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              C2(this, "focus", () => {
                this.$cell.classList.add("-focus-"), this.focused = true;
              }), C2(this, "removeFocus", () => {
                this.$cell.classList.remove("-focus-"), this.focused = false;
              }), C2(this, "select", () => {
                this.$cell.classList.add("-selected-"), this.selected = true;
              }), C2(this, "removeSelect", () => {
                this.$cell.classList.remove("-selected-", "-range-from-", "-range-to-"), this.selected = false;
              }), C2(this, "onChangeSelectedDate", () => {
                this.isDisabled || (this._handleSelectedStatus(), this.opts.range && this._handleRangeStatus());
              }), C2(this, "onChangeFocusDate", (e4) => {
                if (!e4)
                  return void (this.focused && this.removeFocus());
                let t4 = u2(e4, this.date, this.type);
                t4 ? this.focus() : !t4 && this.focused && this.removeFocus(), this.opts.range && this._handleRangeStatus();
              }), C2(this, "render", () => (this.$cell.innerHTML = this._getHtml(), this.$cell.adpCell = this, this.$cell)), this.type = e3, this.singleType = this.type.slice(0, -1), this.date = t3, this.dp = i3, this.opts = s3, this.body = a3, this.customData = false, this.init();
            }
            init() {
              let { range: e3, onRenderCell: t3 } = this.opts;
              t3 && (this.customData = t3({ date: this.date, cellType: this.singleType, datepicker: this.dp })), this._createElement(), this._bindDatepickerEvents(), this._handleInitialFocusStatus(), this.dp.hasSelectedDates && (this._handleSelectedStatus(), e3 && this._handleRangeStatus());
            }
            _bindDatepickerEvents() {
              this.dp.on(i2.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i2.eventChangeFocusDate, this.onChangeFocusDate);
            }
            unbindDatepickerEvents() {
              this.dp.off(i2.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i2.eventChangeFocusDate, this.onChangeFocusDate);
            }
            _createElement() {
              let { year: e3, month: t3, date: i3 } = o2(this.date);
              this.$cell = n2({ className: this._getClassName(), attrs: { "data-year": e3, "data-month": t3, "data-date": i3 } });
            }
            _getClassName() {
              var e3, t3;
              let s3 = new Date(), { selectOtherMonths: a3, selectOtherYears: n3 } = this.opts, { minDate: r3, maxDate: h3 } = this.dp, { day: l3 } = o2(this.date), d3 = this._isOutOfMinMaxRange(), p3 = (e3 = this.customData) === null || e3 === void 0 ? void 0 : e3.disabled, m3 = c2("air-datepicker-cell", "-".concat(this.singleType, "-"), { "-current-": u2(s3, this.date, this.type), "-min-date-": r3 && u2(r3, this.date, this.type), "-max-date-": h3 && u2(h3, this.date, this.type) }), g3 = "";
              switch (this.type) {
                case i2.days:
                  g3 = c2({ "-weekend-": this.dp.isWeekend(l3), "-other-month-": this.isOtherMonth, "-disabled-": this.isOtherMonth && !a3 || d3 || p3 });
                  break;
                case i2.months:
                  g3 = c2({ "-disabled-": d3 || p3 });
                  break;
                case i2.years:
                  g3 = c2({ "-other-decade-": this.isOtherDecade, "-disabled-": d3 || this.isOtherDecade && !n3 || p3 });
              }
              return c2(m3, g3, (t3 = this.customData) === null || t3 === void 0 ? void 0 : t3.classes);
            }
            _getHtml() {
              var e3;
              let { year: t3, month: s3, date: a3 } = o2(this.date), { showOtherMonths: n3, showOtherYears: r3 } = this.opts;
              if ((e3 = this.customData) !== null && e3 !== void 0 && e3.html)
                return this.customData.html;
              switch (this.type) {
                case i2.days:
                  return !n3 && this.isOtherMonth ? "" : a3;
                case i2.months:
                  return this.dp.locale[this.opts.monthsField][s3];
                case i2.years:
                  return !r3 && this.isOtherDecade ? "" : t3;
              }
            }
            _isOutOfMinMaxRange() {
              let { minDate: e3, maxDate: t3 } = this.dp, { type: s3, date: a3 } = this, { month: n3, year: r3, date: h3 } = o2(a3), l3 = s3 === i2.days, d3 = s3 === i2.years, c3 = !!e3 && new Date(r3, d3 ? e3.getMonth() : n3, l3 ? h3 : e3.getDate()), u3 = !!t3 && new Date(r3, d3 ? t3.getMonth() : n3, l3 ? h3 : t3.getDate());
              return e3 && t3 ? m2(c3, e3) || p2(u3, t3) : e3 ? m2(c3, e3) : t3 ? p2(u3, t3) : void 0;
            }
            destroy() {
              this.unbindDatepickerEvents();
            }
            _handleRangeStatus() {
              let { rangeDateFrom: e3, rangeDateTo: t3 } = this.dp, i3 = c2({ "-in-range-": e3 && t3 && (s3 = this.date, a3 = e3, n3 = t3, p2(s3, a3) && m2(s3, n3)), "-range-from-": e3 && u2(this.date, e3, this.type), "-range-to-": t3 && u2(this.date, t3, this.type) });
              var s3, a3, n3;
              this.$cell.classList.remove("-range-from-", "-range-to-", "-in-range-"), i3 && this.$cell.classList.add(...i3.split(" "));
            }
            _handleSelectedStatus() {
              let e3 = this.dp._checkIfDateIsSelected(this.date, this.type);
              e3 ? this.select() : !e3 && this.selected && this.removeSelect();
            }
            _handleInitialFocusStatus() {
              u2(this.dp.focusDate, this.date, this.type) && this.focus();
            }
            get isDisabled() {
              return this.$cell.matches(".-disabled-");
            }
            get isOtherMonth() {
              return this.dp.isOtherMonth(this.date);
            }
            get isOtherDecade() {
              return this.dp.isOtherDecade(this.date);
            }
          }
          function M2(e3, t3, i3) {
            return t3 in e3 ? Object.defineProperty(e3, t3, { value: i3, enumerable: true, configurable: true, writable: true }) : e3[t3] = i3, e3;
          }
          let $2 = { [i2.days]: '<div class="air-datepicker-body--day-names"></div>' + '<div class="air-datepicker-body--cells -'.concat(i2.days, '-"></div>'), [i2.months]: '<div class="air-datepicker-body--cells -'.concat(i2.months, '-"></div>'), [i2.years]: '<div class="air-datepicker-body--cells -'.concat(i2.years, '-"></div>') };
          class S2 {
            constructor(e3) {
              let { dp: t3, type: s3, opts: a3 } = e3;
              M2(this, "handleClick", (e4) => {
                let t4 = e4.target.adpCell;
                if (t4.isDisabled)
                  return;
                if (!this.dp.isMinViewReached)
                  return void this.dp.down();
                let i3 = this.dp._checkIfDateIsSelected(t4.date, t4.type);
                i3 ? this.dp._handleAlreadySelectedDates(i3, t4.date) : this.dp.selectDate(t4.date);
              }), M2(this, "handleDayNameClick", (e4) => {
                let t4 = e4.target.getAttribute("data-day-index");
                this.opts.onClickDayName({ dayIndex: Number(t4), datepicker: this.dp });
              }), M2(this, "onChangeCurrentView", (e4) => {
                e4 !== this.type ? this.hide() : (this.show(), this.render());
              }), M2(this, "onMouseOverCell", (e4) => {
                let t4 = y2(e4.target, ".air-datepicker-cell");
                this.dp.setFocusDate(!!t4 && t4.adpCell.date);
              }), M2(this, "onMouseOutCell", () => {
                this.dp.setFocusDate(false);
              }), M2(this, "onClickBody", (e4) => {
                let { onClickDayName: t4 } = this.opts, i3 = e4.target;
                i3.closest(".air-datepicker-cell") && this.handleClick(e4), t4 && i3.closest(".air-datepicker-body--day-name") && this.handleDayNameClick(e4);
              }), M2(this, "onMouseDown", (e4) => {
                this.pressed = true;
                let t4 = y2(e4.target, ".air-datepicker-cell"), i3 = t4 && t4.adpCell;
                u2(i3.date, this.dp.rangeDateFrom) && (this.rangeFromFocused = true), u2(i3.date, this.dp.rangeDateTo) && (this.rangeToFocused = true);
              }), M2(this, "onMouseMove", (e4) => {
                if (!this.pressed || !this.dp.isMinViewReached)
                  return;
                e4.preventDefault();
                let t4 = y2(e4.target, ".air-datepicker-cell"), i3 = t4 && t4.adpCell, { selectedDates: s4, rangeDateTo: a4, rangeDateFrom: n3 } = this.dp;
                if (!i3 || i3.isDisabled)
                  return;
                let { date: r3 } = i3;
                if (s4.length === 2) {
                  if (this.rangeFromFocused && !p2(r3, a4)) {
                    let { hours: e5, minutes: t5 } = o2(n3);
                    r3.setHours(e5), r3.setMinutes(t5), this.dp.rangeDateFrom = r3, this.dp.replaceDate(n3, r3);
                  }
                  if (this.rangeToFocused && !m2(r3, n3)) {
                    let { hours: e5, minutes: t5 } = o2(a4);
                    r3.setHours(e5), r3.setMinutes(t5), this.dp.rangeDateTo = r3, this.dp.replaceDate(a4, r3);
                  }
                }
              }), M2(this, "onMouseUp", () => {
                this.pressed = false, this.rangeFromFocused = false, this.rangeToFocused = false;
              }), M2(this, "onChangeViewDate", (e4, t4) => {
                if (!this.isVisible)
                  return;
                let s4 = d2(e4), a4 = d2(t4);
                switch (this.dp.currentView) {
                  case i2.days:
                    if (u2(e4, t4, i2.months))
                      return;
                    break;
                  case i2.months:
                    if (u2(e4, t4, i2.years))
                      return;
                    break;
                  case i2.years:
                    if (s4[0] === a4[0] && s4[1] === a4[1])
                      return;
                }
                this.render();
              }), M2(this, "render", () => {
                this.destroyCells(), this._generateCells(), this.cells.forEach((e4) => {
                  this.$cells.appendChild(e4.render());
                });
              }), this.dp = t3, this.type = s3, this.opts = a3, this.cells = [], this.$el = "", this.pressed = false, this.isVisible = true, this.init();
            }
            init() {
              this._buildBaseHtml(), this.type === i2.days && this.renderDayNames(), this.render(), this._bindEvents(), this._bindDatepickerEvents();
            }
            _bindEvents() {
              let { range: e3, dynamicRange: t3 } = this.opts;
              v2(this.$el, "mouseover", this.onMouseOverCell), v2(this.$el, "mouseout", this.onMouseOutCell), v2(this.$el, "click", this.onClickBody), e3 && t3 && (v2(this.$el, "mousedown", this.onMouseDown), v2(this.$el, "mousemove", this.onMouseMove), v2(window.document, "mouseup", this.onMouseUp));
            }
            _bindDatepickerEvents() {
              this.dp.on(i2.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i2.eventChangeCurrentView, this.onChangeCurrentView);
            }
            _buildBaseHtml() {
              this.$el = n2({ className: "air-datepicker-body -".concat(this.type, "-"), innerHtml: $2[this.type] }), this.$names = a2(".air-datepicker-body--day-names", this.$el), this.$cells = a2(".air-datepicker-body--cells", this.$el);
            }
            _getDayNamesHtml() {
              let e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.dp.locale.firstDay, t3 = "", s3 = this.dp.isWeekend, { onClickDayName: a3 } = this.opts, n3 = e3, r3 = 0;
              for (; r3 < 7; ) {
                let e4 = n3 % 7, h3 = c2("air-datepicker-body--day-name", { [i2.cssClassWeekend]: s3(e4), "-clickable-": !!a3 }), o3 = this.dp.locale.daysMin[e4];
                t3 += '<div class="'.concat(h3, `" data-day-index='`).concat(e4, "'>").concat(o3, "</div>"), r3++, n3++;
              }
              return t3;
            }
            _getDaysCells() {
              let { viewDate: e3, locale: { firstDay: t3 } } = this.dp, i3 = h2(e3), { year: s3, month: a3 } = o2(e3), n3 = new Date(s3, a3, 1), r3 = new Date(s3, a3, i3), l3 = n3.getDay() - t3, d3 = 6 - r3.getDay() + t3;
              l3 = l3 < 0 ? l3 + 7 : l3, d3 = d3 > 6 ? d3 - 7 : d3;
              let c3 = function(e4, t4) {
                let { year: i4, month: s4, date: a4 } = o2(e4);
                return new Date(i4, s4, a4 - t4);
              }(n3, l3), u3 = i3 + l3 + d3, p3 = c3.getDate(), { year: m3, month: g3 } = o2(c3), D2 = 0;
              for (; D2 < u3; ) {
                let e4 = new Date(m3, g3, p3 + D2);
                this._generateCell(e4), D2++;
              }
            }
            _generateCell(e3) {
              let { type: t3, dp: i3, opts: s3 } = this, a3 = new _2({ type: t3, dp: i3, opts: s3, date: e3, body: this });
              return this.cells.push(a3), a3;
            }
            _generateDayCells() {
              this._getDaysCells();
            }
            _generateMonthCells() {
              let { year: e3 } = this.dp.parsedViewDate, t3 = 0;
              for (; t3 < 12; )
                this.cells.push(this._generateCell(new Date(e3, t3))), t3++;
            }
            _generateYearCells() {
              let e3 = d2(this.dp.viewDate), t3 = e3[0] - 1, i3 = e3[1] + 1, s3 = t3;
              for (; s3 <= i3; )
                this.cells.push(this._generateCell(new Date(s3, 0))), s3++;
            }
            renderDayNames() {
              this.$names.innerHTML = this._getDayNamesHtml();
            }
            _generateCells() {
              switch (this.type) {
                case i2.days:
                  this._generateDayCells();
                  break;
                case i2.months:
                  this._generateMonthCells();
                  break;
                case i2.years:
                  this._generateYearCells();
              }
            }
            show() {
              this.isVisible = true, this.$el.classList.remove("-hidden-");
            }
            hide() {
              this.isVisible = false, this.$el.classList.add("-hidden-");
            }
            destroyCells() {
              this.cells.forEach((e3) => e3.destroy()), this.cells = [], this.$cells.innerHTML = "";
            }
            destroy() {
              this.destroyCells(), this.dp.off(i2.eventChangeViewDate, this.onChangeViewDate), this.dp.off(i2.eventChangeCurrentView, this.onChangeCurrentView);
            }
          }
          function T2(e3, t3, i3) {
            return t3 in e3 ? Object.defineProperty(e3, t3, { value: i3, enumerable: true, configurable: true, writable: true }) : e3[t3] = i3, e3;
          }
          class F2 {
            constructor(e3) {
              let { dp: t3, opts: i3 } = e3;
              T2(this, "onClickNav", (e4) => {
                let t4 = y2(e4.target, ".air-datepicker-nav--action");
                if (!t4)
                  return;
                let i4 = t4.dataset.action;
                this.dp[i4]();
              }), T2(this, "onChangeViewDate", () => {
                this.render(), this._resetNavStatus(), this.handleNavStatus();
              }), T2(this, "onChangeCurrentView", () => {
                this.render(), this._resetNavStatus(), this.handleNavStatus();
              }), T2(this, "onClickNavTitle", () => {
                this.dp.isFinalView || this.dp.up();
              }), T2(this, "update", () => {
                let { prevHtml: e4, nextHtml: t4 } = this.opts;
                this.$prev.innerHTML = e4, this.$next.innerHTML = t4, this._resetNavStatus(), this.render(), this.handleNavStatus();
              }), T2(this, "renderDelay", () => {
                setTimeout(this.render);
              }), T2(this, "render", () => {
                this.$title.innerHTML = this._getTitle(), function(e4, t4) {
                  for (let i4 in t4)
                    t4[i4] ? e4.classList.add(i4) : e4.classList.remove(i4);
                }(this.$title, { "-disabled-": this.dp.isFinalView });
              }), this.dp = t3, this.opts = i3, this.init();
            }
            init() {
              this._createElement(), this._buildBaseHtml(), this._defineDOM(), this.render(), this.handleNavStatus(), this._bindEvents(), this._bindDatepickerEvents();
            }
            _defineDOM() {
              this.$title = a2(".air-datepicker-nav--title", this.$el), this.$prev = a2('[data-action="prev"]', this.$el), this.$next = a2('[data-action="next"]', this.$el);
            }
            _bindEvents() {
              this.$el.addEventListener("click", this.onClickNav), this.$title.addEventListener("click", this.onClickNavTitle);
            }
            _bindDatepickerEvents() {
              this.dp.on(i2.eventChangeViewDate, this.onChangeViewDate), this.dp.on(i2.eventChangeCurrentView, this.onChangeCurrentView), this.isNavIsFunction && (this.dp.on(i2.eventChangeSelectedDate, this.renderDelay), this.dp.opts.timepicker && this.dp.on(i2.eventChangeTime, this.render));
            }
            destroy() {
              this.dp.off(i2.eventChangeViewDate, this.onChangeViewDate), this.dp.off(i2.eventChangeCurrentView, this.onChangeCurrentView), this.isNavIsFunction && (this.dp.off(i2.eventChangeSelectedDate, this.renderDelay), this.dp.opts.timepicker && this.dp.off(i2.eventChangeTime, this.render));
            }
            _createElement() {
              this.$el = n2({ tagName: "nav", className: "air-datepicker-nav" });
            }
            _getTitle() {
              let { dp: e3, opts: t3 } = this, i3 = t3.navTitles[e3.currentView];
              return typeof i3 == "function" ? i3(e3) : e3.formatDate(e3.viewDate, i3);
            }
            handleNavStatus() {
              let { disableNavWhenOutOfRange: e3 } = this.opts, { minDate: t3, maxDate: s3 } = this.dp;
              if (!t3 && !s3 || !e3)
                return;
              let { year: a3, month: n3 } = this.dp.parsedViewDate, r3 = !!t3 && o2(t3), h3 = !!s3 && o2(s3);
              switch (this.dp.currentView) {
                case i2.days:
                  t3 && r3.month >= n3 && r3.year >= a3 && this._disableNav("prev"), s3 && h3.month <= n3 && h3.year <= a3 && this._disableNav("next");
                  break;
                case i2.months:
                  t3 && r3.year >= a3 && this._disableNav("prev"), s3 && h3.year <= a3 && this._disableNav("next");
                  break;
                case i2.years: {
                  let e4 = d2(this.dp.viewDate);
                  t3 && r3.year >= e4[0] && this._disableNav("prev"), s3 && h3.year <= e4[1] && this._disableNav("next");
                  break;
                }
              }
            }
            _disableNav(e3) {
              a2('[data-action="' + e3 + '"]', this.$el).classList.add("-disabled-");
            }
            _resetNavStatus() {
              !function(e3) {
                for (var t3 = arguments.length, i3 = new Array(t3 > 1 ? t3 - 1 : 0), s3 = 1; s3 < t3; s3++)
                  i3[s3 - 1] = arguments[s3];
                e3.length ? e3.forEach((e4) => {
                  e4.classList.remove(...i3);
                }) : e3.classList.remove(...i3);
              }(this.$el.querySelectorAll(".air-datepicker-nav--action"), "-disabled-");
            }
            _buildBaseHtml() {
              let { prevHtml: e3, nextHtml: t3 } = this.opts;
              this.$el.innerHTML = '<div class="air-datepicker-nav--action" data-action="prev">'.concat(e3, "</div>") + '<div class="air-datepicker-nav--title"></div>' + '<div class="air-datepicker-nav--action" data-action="next">'.concat(t3, "</div>");
            }
            get isNavIsFunction() {
              let { navTitles: e3 } = this.opts;
              return Object.keys(e3).find((t3) => typeof e3[t3] == "function");
            }
          }
          var V = { today: { content: (e3) => e3.locale.today, onClick: (e3) => e3.setViewDate(new Date()) }, clear: { content: (e3) => e3.locale.clear, onClick: (e3) => e3.clear() } };
          class x2 {
            constructor(e3) {
              let { dp: t3, opts: i3 } = e3;
              this.dp = t3, this.opts = i3, this.init();
            }
            init() {
              this.createElement(), this.render();
            }
            createElement() {
              this.$el = n2({ className: "air-datepicker-buttons" });
            }
            destroy() {
              this.$el.parentNode.removeChild(this.$el);
            }
            clearHtml() {
              return this.$el.innerHTML = "", this;
            }
            generateButtons() {
              let { buttons: e3 } = this.opts;
              Array.isArray(e3) || (e3 = [e3]), e3.forEach((e4) => {
                let t3 = e4;
                typeof e4 == "string" && V[e4] && (t3 = V[e4]);
                let i3 = this.createButton(t3);
                t3.onClick && this.attachEventToButton(i3, t3.onClick), this.$el.appendChild(i3);
              });
            }
            attachEventToButton(e3, t3) {
              e3.addEventListener("click", () => {
                t3(this.dp);
              });
            }
            createButton(e3) {
              let { content: t3, className: i3, tagName: s3 = "button", attrs: a3 = {} } = e3, r3 = typeof t3 == "function" ? t3(this.dp) : t3;
              return n2({ tagName: s3, innerHtml: "<span tabindex='-1'>".concat(r3, "</span>"), className: c2("air-datepicker-button", i3), attrs: a3 });
            }
            render() {
              this.generateButtons();
            }
          }
          function H(e3, t3, i3) {
            return t3 in e3 ? Object.defineProperty(e3, t3, { value: i3, enumerable: true, configurable: true, writable: true }) : e3[t3] = i3, e3;
          }
          class L2 {
            constructor() {
              let { opts: e3, dp: t3 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              H(this, "toggleTimepickerIsActive", (e4) => {
                this.dp.timepickerIsActive = e4;
              }), H(this, "onChangeSelectedDate", (e4) => {
                let { date: t4, updateTime: i3 = false } = e4;
                t4 && (this.setMinMaxTime(t4), this.setCurrentTime(!!i3 && t4), this.addTimeToDate(t4));
              }), H(this, "onChangeLastSelectedDate", (e4) => {
                e4 && (this.setTime(e4), this.render());
              }), H(this, "onChangeInputRange", (e4) => {
                let t4 = e4.target;
                this[t4.getAttribute("name")] = t4.value, this.updateText(), this.dp.trigger(i2.eventChangeTime, { hours: this.hours, minutes: this.minutes });
              }), H(this, "onMouseEnterLeave", (e4) => {
                let t4 = e4.target.getAttribute("name"), i3 = this.$minutesText;
                t4 === "hours" && (i3 = this.$hoursText), i3.classList.toggle("-focus-");
              }), H(this, "onFocus", () => {
                this.toggleTimepickerIsActive(true);
              }), H(this, "onBlur", () => {
                this.toggleTimepickerIsActive(false);
              }), this.opts = e3, this.dp = t3;
              let { timeFormat: s3 } = this.dp.locale;
              s3 && (s3.match(k2("h")) || s3.match(k2("hh"))) && (this.ampm = true), this.init();
            }
            init() {
              this.setTime(this.dp.lastSelectedDate || this.dp.viewDate), this.createElement(), this.buildHtml(), this.defineDOM(), this.render(), this.bindDatepickerEvents(), this.bindDOMEvents();
            }
            bindDatepickerEvents() {
              this.dp.on(i2.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.on(i2.eventChangeLastSelectedDate, this.onChangeLastSelectedDate);
            }
            bindDOMEvents() {
              let e3 = "input";
              navigator.userAgent.match(/trident/gi) && (e3 = "change"), v2(this.$ranges, e3, this.onChangeInputRange), v2(this.$ranges, "mouseenter", this.onMouseEnterLeave), v2(this.$ranges, "mouseleave", this.onMouseEnterLeave), v2(this.$ranges, "focus", this.onFocus), v2(this.$ranges, "mousedown", this.onFocus), v2(this.$ranges, "blur", this.onBlur);
            }
            createElement() {
              this.$el = n2({ className: c2("air-datepicker-time", { "-am-pm-": this.dp.ampm }) });
            }
            destroy() {
              this.dp.off(i2.eventChangeSelectedDate, this.onChangeSelectedDate), this.dp.off(i2.eventChangeLastSelectedDate, this.onChangeLastSelectedDate), this.$el.parentNode.removeChild(this.$el);
            }
            buildHtml() {
              let { ampm: e3, hours: t3, displayHours: i3, minutes: s3, minHours: a3, minMinutes: n3, maxHours: r3, maxMinutes: h3, dayPeriod: o3, opts: { hoursStep: d3, minutesStep: c3 } } = this;
              this.$el.innerHTML = '<div class="air-datepicker-time--current">' + '   <span class="air-datepicker-time--current-hours">'.concat(l2(i3), "</span>") + '   <span class="air-datepicker-time--current-colon">:</span>' + '   <span class="air-datepicker-time--current-minutes">'.concat(l2(s3), "</span>") + "   ".concat(e3 ? "<span class='air-datepicker-time--current-ampm'>".concat(o3, "</span>") : "") + '</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">' + '      <input type="range" name="hours" value="'.concat(t3, '" min="').concat(a3, '" max="').concat(r3, '" step="').concat(d3, '"/>') + '   </div>   <div class="air-datepicker-time--row">' + '      <input type="range" name="minutes" value="'.concat(s3, '" min="').concat(n3, '" max="').concat(h3, '" step="').concat(c3, '"/>') + "   </div></div>";
            }
            defineDOM() {
              let e3 = (e4) => a2(e4, this.$el);
              this.$ranges = this.$el.querySelectorAll('[type="range"]'), this.$hours = e3('[name="hours"]'), this.$minutes = e3('[name="minutes"]'), this.$hoursText = e3(".air-datepicker-time--current-hours"), this.$minutesText = e3(".air-datepicker-time--current-minutes"), this.$ampm = e3(".air-datepicker-time--current-ampm");
            }
            setTime(e3) {
              this.setMinMaxTime(e3), this.setCurrentTime(e3);
            }
            addTimeToDate(e3) {
              e3 && (e3.setHours(this.hours), e3.setMinutes(this.minutes));
            }
            setMinMaxTime(e3) {
              if (this.setMinMaxTimeFromOptions(), e3) {
                let { minDate: t3, maxDate: i3 } = this.dp;
                t3 && u2(e3, t3) && this.setMinTimeFromMinDate(t3), i3 && u2(e3, i3) && this.setMaxTimeFromMaxDate(i3);
              }
            }
            setCurrentTime(e3) {
              let { hours: t3, minutes: i3 } = e3 ? o2(e3) : this;
              this.hours = f2(t3, this.minHours, this.maxHours), this.minutes = f2(i3, this.minMinutes, this.maxMinutes);
            }
            setMinMaxTimeFromOptions() {
              let { minHours: e3, minMinutes: t3, maxHours: i3, maxMinutes: s3 } = this.opts;
              this.minHours = f2(e3, 0, 23), this.minMinutes = f2(t3, 0, 59), this.maxHours = f2(i3, 0, 23), this.maxMinutes = f2(s3, 0, 59);
            }
            setMinTimeFromMinDate(e3) {
              let { lastSelectedDate: t3 } = this.dp;
              this.minHours = e3.getHours(), t3 && t3.getHours() > e3.getHours() ? this.minMinutes = this.opts.minMinutes : this.minMinutes = e3.getMinutes();
            }
            setMaxTimeFromMaxDate(e3) {
              let { lastSelectedDate: t3 } = this.dp;
              this.maxHours = e3.getHours(), t3 && t3.getHours() < e3.getHours() ? this.maxMinutes = this.opts.maxMinutes : this.maxMinutes = e3.getMinutes();
            }
            getDayPeriod(e3, t3) {
              let i3 = e3, s3 = Number(e3);
              e3 instanceof Date && (i3 = o2(e3), s3 = Number(i3.hours));
              let a3 = "am";
              if (t3 || this.ampm) {
                switch (true) {
                  case s3 === 12:
                  case s3 > 11:
                    a3 = "pm";
                }
                s3 = s3 % 12 == 0 ? 12 : s3 % 12;
              }
              return { hours: s3, dayPeriod: a3 };
            }
            updateSliders() {
              r2(this.$hours, { min: this.minHours, max: this.maxHours }).value = this.hours, r2(this.$minutes, { min: this.minMinutes, max: this.maxMinutes }).value = this.minutes;
            }
            updateText() {
              this.$hoursText.innerHTML = l2(this.displayHours), this.$minutesText.innerHTML = l2(this.minutes), this.ampm && (this.$ampm.innerHTML = this.dayPeriod);
            }
            set hours(e3) {
              this._hours = e3;
              let { hours: t3, dayPeriod: i3 } = this.getDayPeriod(e3);
              this.displayHours = t3, this.dayPeriod = i3;
            }
            get hours() {
              return this._hours;
            }
            render() {
              this.updateSliders(), this.updateText();
            }
          }
          function O2(e3, t3, i3) {
            return t3 in e3 ? Object.defineProperty(e3, t3, { value: i3, enumerable: true, configurable: true, writable: true }) : e3[t3] = i3, e3;
          }
          class A2 {
            constructor(e3) {
              let { dp: t3, opts: i3 } = e3;
              O2(this, "pressedKeys", new Set()), O2(this, "hotKeys", new Map([[[["Control", "ArrowRight"], ["Control", "ArrowUp"]], (e4) => e4.month++], [[["Control", "ArrowLeft"], ["Control", "ArrowDown"]], (e4) => e4.month--], [[["Shift", "ArrowRight"], ["Shift", "ArrowUp"]], (e4) => e4.year++], [[["Shift", "ArrowLeft"], ["Shift", "ArrowDown"]], (e4) => e4.year--], [[["Alt", "ArrowRight"], ["Alt", "ArrowUp"]], (e4) => e4.year += 10], [[["Alt", "ArrowLeft"], ["Alt", "ArrowDown"]], (e4) => e4.year -= 10], [["Control", "Shift", "ArrowUp"], (e4, t4) => t4.up()]])), O2(this, "handleHotKey", (e4) => {
                let t4 = this.hotKeys.get(e4), i4 = o2(this.getInitialFocusDate());
                t4(i4, this.dp);
                let { year: s3, month: a3, date: n3 } = i4, r3 = h2(new Date(s3, a3));
                r3 < n3 && (n3 = r3);
                let l3 = this.dp.getClampedDate(new Date(s3, a3, n3));
                this.dp.setFocusDate(l3, { viewDateTransition: true });
              }), O2(this, "isHotKeyPressed", () => {
                let e4 = false, t4 = this.pressedKeys.size, i4 = (e5) => this.pressedKeys.has(e5);
                for (let [s3] of this.hotKeys) {
                  if (e4)
                    break;
                  if (Array.isArray(s3[0]))
                    s3.forEach((a3) => {
                      e4 || t4 !== a3.length || (e4 = a3.every(i4) && s3);
                    });
                  else {
                    if (t4 !== s3.length)
                      continue;
                    e4 = s3.every(i4) && s3;
                  }
                }
                return e4;
              }), O2(this, "isArrow", (e4) => e4 >= 37 && e4 <= 40), O2(this, "onKeyDown", (e4) => {
                let { key: t4, which: i4 } = e4, { dp: s3, dp: { focusDate: a3 }, opts: n3 } = this;
                this.registerKey(t4);
                let r3 = this.isHotKeyPressed();
                if (r3)
                  return e4.preventDefault(), void this.handleHotKey(r3);
                if (this.isArrow(i4))
                  return e4.preventDefault(), void this.focusNextCell(t4);
                if (t4 === "Enter") {
                  if (s3.currentView !== n3.minView)
                    return void s3.down();
                  if (a3) {
                    let e5 = s3._checkIfDateIsSelected(a3);
                    return void (e5 ? s3._handleAlreadySelectedDates(e5, a3) : s3.selectDate(a3));
                  }
                }
                t4 === "Escape" && this.dp.hide();
              }), O2(this, "onKeyUp", (e4) => {
                this.removeKey(e4.key);
              }), this.dp = t3, this.opts = i3, this.init();
            }
            init() {
              this.bindKeyboardEvents();
            }
            bindKeyboardEvents() {
              let { $el: e3 } = this.dp;
              e3.addEventListener("keydown", this.onKeyDown), e3.addEventListener("keyup", this.onKeyUp);
            }
            destroy() {
              let { $el: e3 } = this.dp;
              e3.removeEventListener("keydown", this.onKeyDown), e3.removeEventListener("keyup", this.onKeyUp), this.hotKeys = null, this.pressedKeys = null;
            }
            getInitialFocusDate() {
              let { focusDate: e3, currentView: t3, selectedDates: s3, parsedViewDate: { year: a3, month: n3 } } = this.dp, r3 = e3 || s3[s3.length - 1];
              if (!r3)
                switch (t3) {
                  case i2.days:
                    r3 = new Date(a3, n3, new Date().getDate());
                    break;
                  case i2.months:
                    r3 = new Date(a3, n3, 1);
                    break;
                  case i2.years:
                    r3 = new Date(a3, 0, 1);
                }
              return r3;
            }
            focusNextCell(e3) {
              let t3 = this.getInitialFocusDate(), { currentView: s3 } = this.dp, { days: a3, months: n3, years: r3 } = i2, h3 = o2(t3), l3 = h3.year, d3 = h3.month, c3 = h3.date;
              switch (e3) {
                case "ArrowLeft":
                  s3 === a3 && (c3 -= 1), s3 === n3 && (d3 -= 1), s3 === r3 && (l3 -= 1);
                  break;
                case "ArrowUp":
                  s3 === a3 && (c3 -= 7), s3 === n3 && (d3 -= 3), s3 === r3 && (l3 -= 4);
                  break;
                case "ArrowRight":
                  s3 === a3 && (c3 += 1), s3 === n3 && (d3 += 1), s3 === r3 && (l3 += 1);
                  break;
                case "ArrowDown":
                  s3 === a3 && (c3 += 7), s3 === n3 && (d3 += 3), s3 === r3 && (l3 += 4);
              }
              let u3 = this.dp.getClampedDate(new Date(l3, d3, c3));
              this.dp.setFocusDate(u3, { viewDateTransition: true });
            }
            registerKey(e3) {
              this.pressedKeys.add(e3);
            }
            removeKey(e3) {
              this.pressedKeys.delete(e3);
            }
          }
          let E2 = { on(e3, t3) {
            this.__events || (this.__events = {}), this.__events[e3] ? this.__events[e3].push(t3) : this.__events[e3] = [t3];
          }, off(e3, t3) {
            this.__events && this.__events[e3] && (this.__events[e3] = this.__events[e3].filter((e4) => e4 !== t3));
          }, removeAllEvents() {
            this.__events = {};
          }, trigger(e3) {
            for (var t3 = arguments.length, i3 = new Array(t3 > 1 ? t3 - 1 : 0), s3 = 1; s3 < t3; s3++)
              i3[s3 - 1] = arguments[s3];
            this.__events && this.__events[e3] && this.__events[e3].forEach((e4) => {
              e4(...i3);
            });
          } };
          function N(e3, t3, i3) {
            return t3 in e3 ? Object.defineProperty(e3, t3, { value: i3, enumerable: true, configurable: true, writable: true }) : e3[t3] = i3, e3;
          }
          let I2 = "", R = "", P2 = "", B = false;
          class K {
            constructor(e3, t3) {
              var r3 = this;
              if (N(this, "viewIndexes", [i2.days, i2.months, i2.years]), N(this, "next", () => {
                let { year: e4, month: t4 } = this.parsedViewDate;
                switch (this.currentView) {
                  case i2.days:
                    this.setViewDate(new Date(e4, t4 + 1, 1));
                    break;
                  case i2.months:
                    this.setViewDate(new Date(e4 + 1, t4, 1));
                    break;
                  case i2.years:
                    this.setViewDate(new Date(e4 + 10, 0, 1));
                }
              }), N(this, "prev", () => {
                let { year: e4, month: t4 } = this.parsedViewDate;
                switch (this.currentView) {
                  case i2.days:
                    this.setViewDate(new Date(e4, t4 - 1, 1));
                    break;
                  case i2.months:
                    this.setViewDate(new Date(e4 - 1, t4, 1));
                    break;
                  case i2.years:
                    this.setViewDate(new Date(e4 - 10, 0, 1));
                }
              }), N(this, "_finishHide", () => {
                this.hideAnimation = false, this._destroyComponents(), this.$container.removeChild(this.$datepicker);
              }), N(this, "setPosition", function(e4) {
                let t4 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
                if (typeof (e4 = e4 || r3.opts.position) == "function")
                  return void (r3.customHide = e4({ $datepicker: r3.$datepicker, $target: r3.$el, $pointer: r3.$pointer, isViewChange: t4, done: r3._finishHide }));
                let i3, s3, { isMobile: a3 } = r3.opts, n3 = r3.$el.getBoundingClientRect(), h4 = r3.$el.getBoundingClientRect(), o3 = r3.$datepicker.offsetParent, l4 = r3.$el.offsetParent, d3 = r3.$datepicker.getBoundingClientRect(), c3 = e4.split(" "), u3 = window.scrollY, p3 = window.scrollX, m3 = r3.opts.offset, g3 = c3[0], D2 = c3[1];
                if (a3)
                  r3.$datepicker.style.cssText = "left: 50%; top: 50%";
                else {
                  if (o3 === l4 && o3 !== document.body && (h4 = { top: r3.$el.offsetTop, left: r3.$el.offsetLeft, width: n3.width, height: r3.$el.offsetHeight }, u3 = 0, p3 = 0), o3 !== l4 && o3 !== document.body) {
                    let e5 = o3.getBoundingClientRect();
                    h4 = { top: n3.top - e5.top, left: n3.left - e5.left, width: n3.width, height: n3.height }, u3 = 0, p3 = 0;
                  }
                  switch (g3) {
                    case "top":
                      i3 = h4.top - d3.height - m3;
                      break;
                    case "right":
                      s3 = h4.left + h4.width + m3;
                      break;
                    case "bottom":
                      i3 = h4.top + h4.height + m3;
                      break;
                    case "left":
                      s3 = h4.left - d3.width - m3;
                  }
                  switch (D2) {
                    case "top":
                      i3 = h4.top;
                      break;
                    case "right":
                      s3 = h4.left + h4.width - d3.width;
                      break;
                    case "bottom":
                      i3 = h4.top + h4.height - d3.height;
                      break;
                    case "left":
                      s3 = h4.left;
                      break;
                    case "center":
                      /left|right/.test(g3) ? i3 = h4.top + h4.height / 2 - d3.height / 2 : s3 = h4.left + h4.width / 2 - d3.width / 2;
                  }
                  r3.$datepicker.style.cssText = "left: ".concat(s3 + p3, "px; top: ").concat(i3 + u3, "px");
                }
              }), N(this, "_setInputValue", () => {
                let { opts: e4, $altField: t4, locale: { dateFormat: i3 } } = this, { altFieldDateFormat: s3, altField: a3 } = e4;
                a3 && t4 && (t4.value = this._getInputValue(s3)), this.$el.value = this._getInputValue(i3);
              }), N(this, "_getInputValue", (e4) => {
                let { selectedDates: t4, opts: i3 } = this, { multipleDates: s3, multipleDatesSeparator: a3 } = i3;
                if (!t4.length)
                  return "";
                let n3 = typeof e4 == "function", r4 = n3 ? e4(s3 ? t4 : t4[0]) : t4.map((t5) => this.formatDate(t5, e4));
                return r4 = n3 ? r4 : r4.join(a3), r4;
              }), N(this, "_checkIfDateIsSelected", function(e4) {
                let t4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i2.days, s3 = false;
                return r3.selectedDates.some((i3) => {
                  let a3 = u2(e4, i3, t4);
                  return s3 = a3 && i3, a3;
                }), s3;
              }), N(this, "_scheduleCallAfterTransition", (e4) => {
                this._cancelScheduledCall(), e4 && e4(false), this._onTransitionEnd = () => {
                  e4 && e4(true);
                }, this.$datepicker.addEventListener("transitionend", this._onTransitionEnd, { once: true });
              }), N(this, "_cancelScheduledCall", () => {
                this.$datepicker.removeEventListener("transitionend", this._onTransitionEnd);
              }), N(this, "setViewDate", (e4) => {
                if (!((e4 = b2(e4)) instanceof Date))
                  return;
                if (u2(e4, this.viewDate))
                  return;
                let t4 = this.viewDate;
                this.viewDate = e4;
                let { onChangeViewDate: s3 } = this.opts;
                if (s3) {
                  let { month: e5, year: t5 } = this.parsedViewDate;
                  s3({ month: e5, year: t5, decade: this.curDecade });
                }
                this.trigger(i2.eventChangeViewDate, e4, t4);
              }), N(this, "setFocusDate", function(e4) {
                let t4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                (!e4 || (e4 = b2(e4)) instanceof Date) && (r3.focusDate = e4, r3.opts.range && e4 && r3._handleRangeOnFocus(), r3.trigger(i2.eventChangeFocusDate, e4, t4));
              }), N(this, "setCurrentView", (e4) => {
                if (this.viewIndexes.includes(e4)) {
                  if (this.currentView = e4, this.elIsInput && this.visible && this.setPosition(void 0, true), this.trigger(i2.eventChangeCurrentView, e4), !this.views[e4]) {
                    let t4 = this.views[e4] = new S2({ dp: this, opts: this.opts, type: e4 });
                    this.shouldUpdateDOM && this.$content.appendChild(t4.$el);
                  }
                  this.opts.onChangeView && this.opts.onChangeView(e4);
                }
              }), N(this, "_updateLastSelectedDate", (e4) => {
                this.lastSelectedDate = e4, this.trigger(i2.eventChangeLastSelectedDate, e4);
              }), N(this, "destroy", () => {
                let { showEvent: e4, isMobile: t4 } = this.opts, i3 = this.$datepicker.parentNode;
                i3 && i3.removeChild(this.$datepicker), this.$el.removeEventListener(e4, this._onFocus), this.$el.removeEventListener("blur", this._onBlur), window.removeEventListener("resize", this._onResize), t4 && this._removeMobileAttributes(), this.keyboardNav && this.keyboardNav.destroy(), this.views = null, this.nav = null, this.$datepicker = null, this.opts = null, this.$customContainer = null, this.viewDate = null, this.focusDate = null, this.selectedDates = null, this.rangeDateFrom = null, this.rangeDateTo = null;
              }), N(this, "update", (e4) => {
                let t4 = w2({}, this.opts);
                w2(this.opts, e4);
                let { timepicker: s3, buttons: a3, range: n3, selectedDates: r4, isMobile: h4 } = this.opts, o3 = this.visible || this.treatAsInline;
                this._createMinMaxDates(), this._limitViewDateByMaxMinDates(), this._handleLocale(), !t4.selectedDates && r4 && this.selectDate(r4), e4.view && this.setCurrentView(e4.view), this._setInputValue(), t4.range && !n3 ? (this.rangeDateTo = false, this.rangeDateFrom = false) : !t4.range && n3 && this.selectedDates.length && (this.rangeDateFrom = this.selectedDates[0], this.rangeDateTo = this.selectedDates[1]), t4.timepicker && !s3 ? (o3 && this.timepicker.destroy(), this.timepicker = false, this.$timepicker.parentNode.removeChild(this.$timepicker)) : !t4.timepicker && s3 && this._addTimepicker(), !t4.buttons && a3 ? this._addButtons() : t4.buttons && !a3 ? (this.buttons.destroy(), this.$buttons.parentNode.removeChild(this.$buttons)) : o3 && t4.buttons && a3 && this.buttons.clearHtml().render(), !t4.isMobile && h4 ? (this.treatAsInline || P2 || this._createMobileOverlay(), this._addMobileAttributes(), this.visible && this._showMobileOverlay()) : t4.isMobile && !h4 && (this._removeMobileAttributes(), this.visible && (P2.classList.remove("-active-"), typeof this.opts.position != "function" && this.setPosition())), o3 && (this.nav.update(), this.views[this.currentView].render(), this.currentView === i2.days && this.views[this.currentView].renderDayNames());
              }), N(this, "isOtherMonth", (e4) => {
                let { month: t4 } = o2(e4);
                return t4 !== this.parsedViewDate.month;
              }), N(this, "isOtherYear", (e4) => {
                let { year: t4 } = o2(e4);
                return t4 !== this.parsedViewDate.year;
              }), N(this, "isOtherDecade", (e4) => {
                let { year: t4 } = o2(e4), [i3, s3] = d2(this.viewDate);
                return t4 < i3 || t4 > s3;
              }), N(this, "_onChangeSelectedDate", (e4) => {
                let { silent: t4 } = e4;
                setTimeout(() => {
                  this._setInputValue(), this.opts.onSelect && !t4 && this._triggerOnSelect();
                });
              }), N(this, "_onChangeFocusedDate", function(e4) {
                let { viewDateTransition: t4 } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                if (!e4)
                  return;
                let i3 = false;
                t4 && (i3 = r3.isOtherMonth(e4) || r3.isOtherYear(e4) || r3.isOtherDecade(e4)), i3 && r3.setViewDate(e4);
              }), N(this, "_onChangeTime", (e4) => {
                let { hours: t4, minutes: i3 } = e4, s3 = new Date(), { lastSelectedDate: a3, opts: { onSelect: n3 } } = this, r4 = a3;
                a3 || (r4 = s3);
                let h4 = this.getCell(r4, this.currentViewSingular), o3 = h4 && h4.adpCell;
                o3 && o3.isDisabled || (r4.setHours(t4), r4.setMinutes(i3), a3 ? (this._setInputValue(), n3 && this._triggerOnSelect()) : this.selectDate(r4));
              }), N(this, "_onFocus", (e4) => {
                this.visible || this.show();
              }), N(this, "_onBlur", (e4) => {
                this.inFocus || !this.visible || this.opts.isMobile || this.hide();
              }), N(this, "_onMouseDown", (e4) => {
                this.inFocus = true;
              }), N(this, "_onMouseUp", (e4) => {
                this.inFocus = false, this.$el.focus();
              }), N(this, "_onResize", () => {
                this.visible && typeof this.opts.position != "function" && this.setPosition();
              }), N(this, "_onClickOverlay", () => {
                this.visible && this.hide();
              }), N(this, "isWeekend", (e4) => this.opts.weekends.includes(e4)), N(this, "getClampedDate", (e4) => {
                let { minDate: t4, maxDate: i3 } = this, s3 = e4;
                return i3 && p2(e4, i3) ? s3 = i3 : t4 && m2(e4, t4) && (s3 = t4), s3;
              }), this.$el = a2(e3), !this.$el)
                return;
              this.$datepicker = n2({ className: "air-datepicker" }), this.opts = w2({}, s2, t3), this.$customContainer = !!this.opts.container && a2(this.opts.container), this.$altField = a2(this.opts.altField || false), I2 || (I2 = a2("body"));
              let { view: h3, startDate: l3 } = this.opts;
              l3 || (this.opts.startDate = new Date()), this.$el.nodeName === "INPUT" && (this.elIsInput = true), this.inited = false, this.visible = false, this.viewDate = b2(this.opts.startDate), this.focusDate = false, this.initialReadonly = this.$el.getAttribute("readonly"), this.customHide = false, this.currentView = h3, this.selectedDates = [], this.views = {}, this.keys = [], this.rangeDateFrom = "", this.rangeDateTo = "", this.timepickerIsActive = false, this.treatAsInline = this.opts.inline || !this.elIsInput, this.init();
            }
            init() {
              let { opts: e3, treatAsInline: t3, opts: { inline: i3, isMobile: s3, selectedDates: a3, keyboardNav: r3, onlyTimepicker: h3 } } = this;
              var o3;
              B || i3 || !this.elIsInput || (B = true, R = n2({ className: o3 = K.defaultContainerId, id: o3 }), I2.appendChild(R)), !s3 || P2 || t3 || this._createMobileOverlay(), this._handleLocale(), this._bindSubEvents(), this._createMinMaxDates(), this._limitViewDateByMaxMinDates(), this.elIsInput && (i3 || this._bindEvents(), r3 && !h3 && (this.keyboardNav = new A2({ dp: this, opts: e3 }))), a3 && this.selectDate(a3, { silent: true }), this.opts.visible && !t3 && this.show(), s3 && !t3 && this.$el.setAttribute("readonly", true), t3 && this._createComponents();
            }
            _createMobileOverlay() {
              P2 = n2({ className: "air-datepicker-overlay" }), R.appendChild(P2);
            }
            _createComponents() {
              let { opts: e3, treatAsInline: t3, opts: { inline: i3, buttons: s3, timepicker: a3, position: n3, classes: r3, onlyTimepicker: h3, isMobile: o3 } } = this;
              this._buildBaseHtml(), this.elIsInput && (i3 || this._setPositionClasses(n3)), !i3 && this.elIsInput || this.$datepicker.classList.add("-inline-"), r3 && this.$datepicker.classList.add(...r3.split(" ")), h3 && this.$datepicker.classList.add("-only-timepicker-"), o3 && !t3 && this._addMobileAttributes(), this.views[this.currentView] = new S2({ dp: this, type: this.currentView, opts: e3 }), this.nav = new F2({ dp: this, opts: e3 }), a3 && this._addTimepicker(), s3 && this._addButtons(), this.$content.appendChild(this.views[this.currentView].$el), this.$nav.appendChild(this.nav.$el);
            }
            _destroyComponents() {
              for (let e3 in this.views)
                this.views[e3].destroy();
              this.views = {}, this.nav.destroy(), this.timepicker && this.timepicker.destroy();
            }
            _addMobileAttributes() {
              P2.addEventListener("click", this._onClickOverlay), this.$datepicker.classList.add("-is-mobile-"), this.$el.setAttribute("readonly", true);
            }
            _removeMobileAttributes() {
              P2.removeEventListener("click", this._onClickOverlay), this.$datepicker.classList.remove("-is-mobile-"), this.initialReadonly || this.initialReadonly === "" || this.$el.removeAttribute("readonly");
            }
            _createMinMaxDates() {
              let { minDate: e3, maxDate: t3 } = this.opts;
              this.minDate = !!e3 && b2(e3), this.maxDate = !!t3 && b2(t3);
            }
            _addTimepicker() {
              this.$timepicker = n2({ className: "air-datepicker--time" }), this.$datepicker.appendChild(this.$timepicker), this.timepicker = new L2({ dp: this, opts: this.opts }), this.$timepicker.appendChild(this.timepicker.$el);
            }
            _addButtons() {
              this.$buttons = n2({ className: "air-datepicker--buttons" }), this.$datepicker.appendChild(this.$buttons), this.buttons = new x2({ dp: this, opts: this.opts }), this.$buttons.appendChild(this.buttons.$el);
            }
            _bindSubEvents() {
              this.on(i2.eventChangeSelectedDate, this._onChangeSelectedDate), this.on(i2.eventChangeFocusDate, this._onChangeFocusedDate), this.on(i2.eventChangeTime, this._onChangeTime);
            }
            _buildBaseHtml() {
              let { inline: e3 } = this.opts;
              var t3, i3;
              this.elIsInput ? e3 ? (t3 = this.$datepicker, (i3 = this.$el).parentNode.insertBefore(t3, i3.nextSibling)) : this.$container.appendChild(this.$datepicker) : this.$el.appendChild(this.$datepicker), this.$datepicker.innerHTML = '<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>', this.$content = a2(".air-datepicker--content", this.$datepicker), this.$pointer = a2(".air-datepicker--pointer", this.$datepicker), this.$nav = a2(".air-datepicker--navigation", this.$datepicker);
            }
            _handleLocale() {
              let { locale: e3, dateFormat: t3, firstDay: i3, timepicker: s3, onlyTimepicker: a3, timeFormat: n3, dateTimeSeparator: r3 } = this.opts;
              var h3;
              this.locale = (h3 = e3, JSON.parse(JSON.stringify(h3))), t3 && (this.locale.dateFormat = t3), n3 !== void 0 && n3 !== "" && (this.locale.timeFormat = n3);
              let { timeFormat: o3 } = this.locale;
              if (i3 !== "" && (this.locale.firstDay = i3), s3 && typeof t3 != "function") {
                let e4 = o3 ? r3 : "";
                this.locale.dateFormat = [this.locale.dateFormat, o3 || ""].join(e4);
              }
              a3 && (this.locale.dateFormat = this.locale.timeFormat);
            }
            _setPositionClasses(e3) {
              if (typeof e3 == "function")
                return void this.$datepicker.classList.add("-custom-position-");
              let t3 = (e3 = e3.split(" "))[0], i3 = e3[1], s3 = "air-datepicker -".concat(t3, "-").concat(i3, "- -from-").concat(t3, "-");
              this.$datepicker.classList.add(...s3.split(" "));
            }
            _bindEvents() {
              this.$el.addEventListener(this.opts.showEvent, this._onFocus), this.$el.addEventListener("blur", this._onBlur), this.$datepicker.addEventListener("mousedown", this._onMouseDown), this.$datepicker.addEventListener("mouseup", this._onMouseUp), window.addEventListener("resize", this._onResize);
            }
            _limitViewDateByMaxMinDates() {
              let { viewDate: e3, minDate: t3, maxDate: i3 } = this;
              i3 && p2(e3, i3) && this.setViewDate(i3), t3 && m2(e3, t3) && this.setViewDate(t3);
            }
            formatDate() {
              let e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.viewDate, t3 = arguments.length > 1 ? arguments[1] : void 0;
              if (e3 = b2(e3), !(e3 instanceof Date))
                return;
              let i3 = t3, s3 = this.locale, a3 = o2(e3), n3 = d2(e3), r3 = K.replacer, h3 = "am";
              this.opts.timepicker && this.timepicker && (h3 = this.timepicker.getDayPeriod(e3).dayPeriod);
              let l3 = { T: e3.getTime(), m: a3.minutes, mm: a3.fullMinutes, h: a3.hours12, hh: a3.fullHours12, H: a3.hours, HH: a3.fullHours, aa: h3, AA: h3.toUpperCase(), E: s3.daysShort[a3.day], EEEE: s3.days[a3.day], d: a3.date, dd: a3.fullDate, M: a3.month + 1, MM: a3.fullMonth, MMM: s3.monthsShort[a3.month], MMMM: s3.months[a3.month], yy: a3.year.toString().slice(-2), yyyy: a3.year, yyyy1: n3[0], yyyy2: n3[1] };
              for (let [e4, t4] of Object.entries(l3))
                i3 = r3(i3, k2(e4), t4);
              return i3;
            }
            down(e3) {
              this._handleUpDownActions(e3, "down");
            }
            up(e3) {
              this._handleUpDownActions(e3, "up");
            }
            selectDate(e3) {
              let t3, s3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, { currentView: a3, parsedViewDate: n3, selectedDates: r3 } = this, { updateTime: h3 } = s3, { moveToOtherMonthsOnSelect: o3, moveToOtherYearsOnSelect: l3, multipleDates: d3, range: c3, autoClose: u3 } = this.opts, m3 = r3.length;
              if (Array.isArray(e3))
                return e3.forEach((e4) => {
                  this.selectDate(e4, s3);
                }), new Promise((e4) => {
                  setTimeout(e4);
                });
              if ((e3 = b2(e3)) instanceof Date) {
                if (a3 === i2.days && e3.getMonth() !== n3.month && o3 && (t3 = new Date(e3.getFullYear(), e3.getMonth(), 1)), a3 === i2.years && e3.getFullYear() !== n3.year && l3 && (t3 = new Date(e3.getFullYear(), 0, 1)), t3 && this.setViewDate(t3), d3 && !c3) {
                  if (m3 === d3)
                    return;
                  this._checkIfDateIsSelected(e3) || r3.push(e3);
                } else if (c3)
                  switch (m3) {
                    case 1:
                      r3.push(e3), this.rangeDateTo || (this.rangeDateTo = e3), p2(this.rangeDateFrom, this.rangeDateTo) && (this.rangeDateTo = this.rangeDateFrom, this.rangeDateFrom = e3), this.selectedDates = [this.rangeDateFrom, this.rangeDateTo];
                      break;
                    case 2:
                      this.selectedDates = [e3], this.rangeDateFrom = e3, this.rangeDateTo = "";
                      break;
                    default:
                      this.selectedDates = [e3], this.rangeDateFrom = e3;
                  }
                else
                  this.selectedDates = [e3];
                return this.trigger(i2.eventChangeSelectedDate, { action: i2.actionSelectDate, silent: s3 == null ? void 0 : s3.silent, date: e3, updateTime: h3 }), this._updateLastSelectedDate(e3), u3 && !this.timepickerIsActive && this.visible && (d3 || c3 ? c3 && m3 === 1 && this.hide() : this.hide()), new Promise((e4) => {
                  setTimeout(e4);
                });
              }
            }
            unselectDate(e3) {
              let t3 = this.selectedDates, s3 = this;
              if ((e3 = b2(e3)) instanceof Date)
                return t3.some((a3, n3) => {
                  if (u2(a3, e3))
                    return t3.splice(n3, 1), s3.selectedDates.length ? s3._updateLastSelectedDate(s3.selectedDates[s3.selectedDates.length - 1]) : (s3.rangeDateFrom = "", s3.rangeDateTo = "", s3._updateLastSelectedDate(false)), this.trigger(i2.eventChangeSelectedDate, { action: i2.actionUnselectDate, date: e3 }), true;
                });
            }
            replaceDate(e3, t3) {
              let s3 = this.selectedDates.find((t4) => u2(t4, e3, this.currentView)), a3 = this.selectedDates.indexOf(s3);
              a3 < 0 || u2(this.selectedDates[a3], t3, this.currentView) || (this.selectedDates[a3] = t3, this.trigger(i2.eventChangeSelectedDate, { action: i2.actionSelectDate, date: t3, updateTime: true }), this._updateLastSelectedDate(t3));
            }
            clear() {
              let e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              return this.selectedDates = [], this.rangeDateFrom = false, this.rangeDateTo = false, this.trigger(i2.eventChangeSelectedDate, { action: i2.actionUnselectDate, silent: e3.silent }), new Promise((e4) => {
                setTimeout(e4);
              });
            }
            show() {
              let { onShow: e3, isMobile: t3 } = this.opts;
              this._cancelScheduledCall(), this.visible || this.hideAnimation || this._createComponents(), this.setPosition(this.opts.position), this.$datepicker.classList.add("-active-"), this.visible = true, e3 && this._scheduleCallAfterTransition(e3), t3 && this._showMobileOverlay();
            }
            hide() {
              let { onHide: e3, isMobile: t3 } = this.opts, i3 = this._hasTransition();
              this.visible = false, this.hideAnimation = true, this.$datepicker.classList.remove("-active-"), this.customHide && this.customHide(), this.elIsInput && this.$el.blur(), this._scheduleCallAfterTransition((t4) => {
                !this.customHide && (t4 && i3 || !t4 && !i3) && this._finishHide(), e3 && e3(t4);
              }), t3 && P2.classList.remove("-active-");
            }
            _triggerOnSelect() {
              let e3 = [], t3 = [], { selectedDates: i3, locale: s3, opts: { onSelect: a3, multipleDates: n3, range: r3 } } = this, h3 = n3 || r3, o3 = typeof s3.dateFormat == "function";
              i3.length && (e3 = i3.map(g2), t3 = o3 ? n3 ? s3.dateFormat(e3) : e3.map((e4) => s3.dateFormat(e4)) : e3.map((e4) => this.formatDate(e4, s3.dateFormat))), a3({ date: h3 ? e3 : e3[0], formattedDate: h3 ? t3 : t3[0], datepicker: this });
            }
            _handleAlreadySelectedDates(e3, t3) {
              let { range: i3, toggleSelected: s3 } = this.opts;
              i3 ? s3 ? this.unselectDate(t3) : this.selectedDates.length !== 2 && this.selectDate(t3) : s3 && this.unselectDate(t3), s3 || this._updateLastSelectedDate(e3);
            }
            _handleUpDownActions(e3, t3) {
              if (!((e3 = b2(e3 || this.focusDate || this.viewDate)) instanceof Date))
                return;
              let i3 = t3 === "up" ? this.viewIndex + 1 : this.viewIndex - 1;
              i3 > 2 && (i3 = 2), i3 < 0 && (i3 = 0), this.setViewDate(new Date(e3.getFullYear(), e3.getMonth(), 1)), this.setCurrentView(this.viewIndexes[i3]);
            }
            _handleRangeOnFocus() {
              this.selectedDates.length === 1 && (p2(this.selectedDates[0], this.focusDate) ? (this.rangeDateTo = this.selectedDates[0], this.rangeDateFrom = this.focusDate) : (this.rangeDateTo = this.focusDate, this.rangeDateFrom = this.selectedDates[0]));
            }
            getCell(e3) {
              let t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : i2.day;
              if (!((e3 = b2(e3)) instanceof Date))
                return;
              let { year: s3, month: a3, date: n3 } = o2(e3), r3 = '[data-year="'.concat(s3, '"]'), h3 = '[data-month="'.concat(a3, '"]'), l3 = '[data-date="'.concat(n3, '"]'), d3 = { [i2.day]: "".concat(r3).concat(h3).concat(l3), [i2.month]: "".concat(r3).concat(h3), [i2.year]: "".concat(r3) };
              return this.views[this.currentView].$el.querySelector(d3[t3]);
            }
            _showMobileOverlay() {
              P2.classList.add("-active-");
            }
            _hasTransition() {
              return window.getComputedStyle(this.$datepicker).getPropertyValue("transition-duration").split(", ").reduce((e3, t3) => parseFloat(t3) + e3, 0) > 0;
            }
            get shouldUpdateDOM() {
              return this.visible || this.treatAsInline;
            }
            get parsedViewDate() {
              return o2(this.viewDate);
            }
            get currentViewSingular() {
              return this.currentView.slice(0, -1);
            }
            get curDecade() {
              return d2(this.viewDate);
            }
            get viewIndex() {
              return this.viewIndexes.indexOf(this.currentView);
            }
            get isFinalView() {
              return this.currentView === i2.years;
            }
            get hasSelectedDates() {
              return this.selectedDates.length > 0;
            }
            get isMinViewReached() {
              return this.currentView === this.opts.minView || this.currentView === i2.days;
            }
            get $container() {
              return this.$customContainer || R;
            }
            static replacer(e3, t3, i3) {
              return e3.replace(t3, function(e4, t4, s3, a3) {
                return t4 + i3 + a3;
              });
            }
          }
          var j;
          return N(K, "defaults", s2), N(K, "version", "3.2.0"), N(K, "defaultContainerId", "air-datepicker-global-container"), j = K.prototype, Object.assign(j, E2), t2.default;
        }();
      });
    }
  });

  // resources/js/app.js
  var import_air_datepicker = __toModule(require_air_datepicker());

  // node_modules/@fancyapps/ui/dist/fancybox.esm.js
  var t = (t2) => typeof t2 == "object" && t2 !== null && t2.constructor === Object && Object.prototype.toString.call(t2) === "[object Object]";
  var e = (...i2) => {
    let s2 = false;
    typeof i2[0] == "boolean" && (s2 = i2.shift());
    let o2 = i2[0];
    if (!o2 || typeof o2 != "object")
      throw new Error("extendee must be an object");
    const n2 = i2.slice(1), a2 = n2.length;
    for (let i3 = 0; i3 < a2; i3++) {
      const a3 = n2[i3];
      for (let i4 in a3)
        if (a3.hasOwnProperty(i4)) {
          const n3 = a3[i4];
          if (s2 && (Array.isArray(n3) || t(n3))) {
            const t2 = Array.isArray(n3) ? [] : {};
            o2[i4] = e(true, o2.hasOwnProperty(i4) ? o2[i4] : t2, n3);
          } else
            o2[i4] = n3;
        }
    }
    return o2;
  };
  var i = (t2, e2 = 1e4) => (t2 = parseFloat(t2) || 0, Math.round((t2 + Number.EPSILON) * e2) / e2);
  var s = function(t2) {
    return !!(t2 && typeof t2 == "object" && t2 instanceof Element && t2 !== document.body) && (!t2.__Panzoom && (function(t3) {
      const e2 = getComputedStyle(t3)["overflow-y"], i2 = getComputedStyle(t3)["overflow-x"], s2 = (e2 === "scroll" || e2 === "auto") && Math.abs(t3.scrollHeight - t3.clientHeight) > 1, o2 = (i2 === "scroll" || i2 === "auto") && Math.abs(t3.scrollWidth - t3.clientWidth) > 1;
      return s2 || o2;
    }(t2) ? t2 : s(t2.parentNode)));
  };
  var o = typeof window != "undefined" && window.ResizeObserver || class {
    constructor(t2) {
      this.observables = [], this.boundCheck = this.check.bind(this), this.boundCheck(), this.callback = t2;
    }
    observe(t2) {
      if (this.observables.some((e3) => e3.el === t2))
        return;
      const e2 = { el: t2, size: { height: t2.clientHeight, width: t2.clientWidth } };
      this.observables.push(e2);
    }
    unobserve(t2) {
      this.observables = this.observables.filter((e2) => e2.el !== t2);
    }
    disconnect() {
      this.observables = [];
    }
    check() {
      const t2 = this.observables.filter((t3) => {
        const e2 = t3.el.clientHeight, i2 = t3.el.clientWidth;
        if (t3.size.height !== e2 || t3.size.width !== i2)
          return t3.size.height = e2, t3.size.width = i2, true;
      }).map((t3) => t3.el);
      t2.length > 0 && this.callback(t2), window.requestAnimationFrame(this.boundCheck);
    }
  };
  var n = class {
    constructor(t2) {
      this.id = self.Touch && t2 instanceof Touch ? t2.identifier : -1, this.pageX = t2.pageX, this.pageY = t2.pageY, this.clientX = t2.clientX, this.clientY = t2.clientY;
    }
  };
  var a = (t2, e2) => e2 ? Math.sqrt((e2.clientX - t2.clientX) ** 2 + (e2.clientY - t2.clientY) ** 2) : 0;
  var r = (t2, e2) => e2 ? { clientX: (t2.clientX + e2.clientX) / 2, clientY: (t2.clientY + e2.clientY) / 2 } : t2;
  var h = class {
    constructor(t2, { start: e2 = () => true, move: i2 = () => {
    }, end: s2 = () => {
    } } = {}) {
      this._element = t2, this.startPointers = [], this.currentPointers = [], this._pointerStart = (t3) => {
        if (t3.buttons > 0 && t3.button !== 0)
          return;
        const e3 = new n(t3);
        this.currentPointers.some((t4) => t4.id === e3.id) || this._triggerPointerStart(e3, t3) && (window.addEventListener("mousemove", this._move), window.addEventListener("mouseup", this._pointerEnd));
      }, this._touchStart = (t3) => {
        for (const e3 of Array.from(t3.changedTouches || []))
          this._triggerPointerStart(new n(e3), t3);
      }, this._move = (t3) => {
        const e3 = this.currentPointers.slice(), i3 = ((t4) => "changedTouches" in t4)(t3) ? Array.from(t3.changedTouches).map((t4) => new n(t4)) : [new n(t3)];
        for (const t4 of i3) {
          const e4 = this.currentPointers.findIndex((e5) => e5.id === t4.id);
          e4 < 0 || (this.currentPointers[e4] = t4);
        }
        this._moveCallback(e3, this.currentPointers.slice(), t3);
      }, this._triggerPointerEnd = (t3, e3) => {
        const i3 = this.currentPointers.findIndex((e4) => e4.id === t3.id);
        return !(i3 < 0) && (this.currentPointers.splice(i3, 1), this.startPointers.splice(i3, 1), this._endCallback(t3, e3), true);
      }, this._pointerEnd = (t3) => {
        t3.buttons > 0 && t3.button !== 0 || this._triggerPointerEnd(new n(t3), t3) && (window.removeEventListener("mousemove", this._move, { passive: false }), window.removeEventListener("mouseup", this._pointerEnd, { passive: false }));
      }, this._touchEnd = (t3) => {
        for (const e3 of Array.from(t3.changedTouches || []))
          this._triggerPointerEnd(new n(e3), t3);
      }, this._startCallback = e2, this._moveCallback = i2, this._endCallback = s2, this._element.addEventListener("mousedown", this._pointerStart, { passive: false }), this._element.addEventListener("touchstart", this._touchStart, { passive: false }), this._element.addEventListener("touchmove", this._move, { passive: false }), this._element.addEventListener("touchend", this._touchEnd), this._element.addEventListener("touchcancel", this._touchEnd);
    }
    stop() {
      this._element.removeEventListener("mousedown", this._pointerStart, { passive: false }), this._element.removeEventListener("touchstart", this._touchStart, { passive: false }), this._element.removeEventListener("touchmove", this._move, { passive: false }), this._element.removeEventListener("touchend", this._touchEnd), this._element.removeEventListener("touchcancel", this._touchEnd), window.removeEventListener("mousemove", this._move), window.removeEventListener("mouseup", this._pointerEnd);
    }
    _triggerPointerStart(t2, e2) {
      return !!this._startCallback(t2, e2) && (this.currentPointers.push(t2), this.startPointers.push(t2), true);
    }
  };
  var l = class {
    constructor(t2 = {}) {
      this.options = e(true, {}, t2), this.plugins = [], this.events = {};
      for (const t3 of ["on", "once"])
        for (const e2 of Object.entries(this.options[t3] || {}))
          this[t3](...e2);
    }
    option(t2, e2, ...i2) {
      t2 = String(t2);
      let s2 = (o2 = t2, n2 = this.options, o2.split(".").reduce(function(t3, e3) {
        return t3 && t3[e3];
      }, n2));
      var o2, n2;
      return typeof s2 == "function" && (s2 = s2.call(this, this, ...i2)), s2 === void 0 ? e2 : s2;
    }
    localize(t2, e2 = []) {
      return t2 = (t2 = String(t2).replace(/\{\{(\w+).?(\w+)?\}\}/g, (t3, i2, s2) => {
        let o2 = "";
        s2 ? o2 = this.option(`${i2[0] + i2.toLowerCase().substring(1)}.l10n.${s2}`) : i2 && (o2 = this.option(`l10n.${i2}`)), o2 || (o2 = t3);
        for (let t4 = 0; t4 < e2.length; t4++)
          o2 = o2.split(e2[t4][0]).join(e2[t4][1]);
        return o2;
      })).replace(/\{\{(.*)\}\}/, (t3, e3) => e3);
    }
    on(e2, i2) {
      if (t(e2)) {
        for (const t2 of Object.entries(e2))
          this.on(...t2);
        return this;
      }
      return String(e2).split(" ").forEach((t2) => {
        const e3 = this.events[t2] = this.events[t2] || [];
        e3.indexOf(i2) == -1 && e3.push(i2);
      }), this;
    }
    once(e2, i2) {
      if (t(e2)) {
        for (const t2 of Object.entries(e2))
          this.once(...t2);
        return this;
      }
      return String(e2).split(" ").forEach((t2) => {
        const e3 = (...s2) => {
          this.off(t2, e3), i2.call(this, this, ...s2);
        };
        e3._ = i2, this.on(t2, e3);
      }), this;
    }
    off(e2, i2) {
      if (!t(e2))
        return e2.split(" ").forEach((t2) => {
          const e3 = this.events[t2];
          if (!e3 || !e3.length)
            return this;
          let s2 = -1;
          for (let t3 = 0, o2 = e3.length; t3 < o2; t3++) {
            const o3 = e3[t3];
            if (o3 && (o3 === i2 || o3._ === i2)) {
              s2 = t3;
              break;
            }
          }
          s2 != -1 && e3.splice(s2, 1);
        }), this;
      for (const t2 of Object.entries(e2))
        this.off(...t2);
    }
    trigger(t2, ...e2) {
      for (const i2 of [...this.events[t2] || []].slice())
        if (i2 && i2.call(this, this, ...e2) === false)
          return false;
      for (const i2 of [...this.events["*"] || []].slice())
        if (i2 && i2.call(this, t2, this, ...e2) === false)
          return false;
      return true;
    }
    attachPlugins(t2) {
      const i2 = {};
      for (const [s2, o2] of Object.entries(t2 || {}))
        this.options[s2] === false || this.plugins[s2] || (this.options[s2] = e({}, o2.defaults || {}, this.options[s2]), i2[s2] = new o2(this));
      for (const [t3, e2] of Object.entries(i2))
        e2.attach(this);
      return this.plugins = Object.assign({}, this.plugins, i2), this;
    }
    detachPlugins() {
      for (const t2 in this.plugins) {
        let e2;
        (e2 = this.plugins[t2]) && typeof e2.detach == "function" && e2.detach(this);
      }
      return this.plugins = {}, this;
    }
  };
  var c = { touch: true, zoom: true, pinchToZoom: true, panOnlyZoomed: false, lockAxis: false, friction: 0.64, decelFriction: 0.88, zoomFriction: 0.74, bounceForce: 0.2, baseScale: 1, minScale: 1, maxScale: 2, step: 0.5, textSelection: false, click: "toggleZoom", wheel: "zoom", wheelFactor: 42, wheelLimit: 5, draggableClass: "is-draggable", draggingClass: "is-dragging", ratio: 1 };
  var d = class extends l {
    constructor(t2, i2 = {}) {
      super(e(true, {}, c, i2)), this.state = "init", this.$container = t2;
      for (const t3 of ["onLoad", "onWheel", "onClick"])
        this[t3] = this[t3].bind(this);
      this.initLayout(), this.resetValues(), this.attachPlugins(d.Plugins), this.trigger("init"), this.updateMetrics(), this.attachEvents(), this.trigger("ready"), this.option("centerOnStart") === false ? this.state = "ready" : this.panTo({ friction: 0 }), t2.__Panzoom = this;
    }
    initLayout() {
      const t2 = this.$container;
      if (!(t2 instanceof HTMLElement))
        throw new Error("Panzoom: Container not found");
      const e2 = this.option("content") || t2.querySelector(".panzoom__content");
      if (!e2)
        throw new Error("Panzoom: Content not found");
      this.$content = e2;
      let i2 = this.option("viewport") || t2.querySelector(".panzoom__viewport");
      i2 || this.option("wrapInner") === false || (i2 = document.createElement("div"), i2.classList.add("panzoom__viewport"), i2.append(...t2.childNodes), t2.appendChild(i2)), this.$viewport = i2 || e2.parentNode;
    }
    resetValues() {
      this.updateRate = this.option("updateRate", /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 250 : 24), this.container = { width: 0, height: 0 }, this.viewport = { width: 0, height: 0 }, this.content = { origWidth: 0, origHeight: 0, width: 0, height: 0, x: this.option("x", 0), y: this.option("y", 0), scale: this.option("baseScale") }, this.transform = { x: 0, y: 0, scale: 1 }, this.resetDragPosition();
    }
    onLoad(t2) {
      this.updateMetrics(), this.panTo({ scale: this.option("baseScale"), friction: 0 }), this.trigger("load", t2);
    }
    onClick(t2) {
      if (t2.defaultPrevented)
        return;
      if (this.option("textSelection") && window.getSelection().toString().length)
        return void t2.stopPropagation();
      const e2 = this.$content.getClientRects()[0];
      if (this.state !== "ready" && (this.dragPosition.midPoint || Math.abs(e2.top - this.dragStart.rect.top) > 1 || Math.abs(e2.left - this.dragStart.rect.left) > 1))
        return t2.preventDefault(), void t2.stopPropagation();
      this.trigger("click", t2) !== false && this.option("zoom") && this.option("click") === "toggleZoom" && (t2.preventDefault(), t2.stopPropagation(), this.zoomWithClick(t2));
    }
    onWheel(t2) {
      this.trigger("wheel", t2) !== false && this.option("zoom") && this.option("wheel") && this.zoomWithWheel(t2);
    }
    zoomWithWheel(t2) {
      this.changedDelta === void 0 && (this.changedDelta = 0);
      const e2 = Math.max(-1, Math.min(1, -t2.deltaY || -t2.deltaX || t2.wheelDelta || -t2.detail)), i2 = this.content.scale;
      let s2 = i2 * (100 + e2 * this.option("wheelFactor")) / 100;
      if (e2 < 0 && Math.abs(i2 - this.option("minScale")) < 0.01 || e2 > 0 && Math.abs(i2 - this.option("maxScale")) < 0.01 ? (this.changedDelta += Math.abs(e2), s2 = i2) : (this.changedDelta = 0, s2 = Math.max(Math.min(s2, this.option("maxScale")), this.option("minScale"))), this.changedDelta > this.option("wheelLimit"))
        return;
      if (t2.preventDefault(), s2 === i2)
        return;
      const o2 = this.$content.getBoundingClientRect(), n2 = t2.clientX - o2.left, a2 = t2.clientY - o2.top;
      this.zoomTo(s2, { x: n2, y: a2 });
    }
    zoomWithClick(t2) {
      const e2 = this.$content.getClientRects()[0], i2 = t2.clientX - e2.left, s2 = t2.clientY - e2.top;
      this.toggleZoom({ x: i2, y: s2 });
    }
    attachEvents() {
      this.$content.addEventListener("load", this.onLoad), this.$container.addEventListener("wheel", this.onWheel, { passive: false }), this.$container.addEventListener("click", this.onClick, { passive: false }), this.initObserver();
      const t2 = new h(this.$container, { start: (e2, i2) => {
        if (!this.option("touch"))
          return false;
        if (this.velocity.scale < 0)
          return false;
        const o2 = i2.composedPath()[0];
        if (!t2.currentPointers.length) {
          if (["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(o2.nodeName) !== -1)
            return false;
          if (this.option("textSelection") && ((t3, e3, i3) => {
            const s2 = t3.childNodes, o3 = document.createRange();
            for (let t4 = 0; t4 < s2.length; t4++) {
              const n2 = s2[t4];
              if (n2.nodeType !== Node.TEXT_NODE)
                continue;
              o3.selectNodeContents(n2);
              const a2 = o3.getBoundingClientRect();
              if (e3 >= a2.left && i3 >= a2.top && e3 <= a2.right && i3 <= a2.bottom)
                return n2;
            }
            return false;
          })(o2, e2.clientX, e2.clientY))
            return false;
        }
        return !s(o2) && (this.trigger("touchStart", i2) !== false && (i2.type === "mousedown" && i2.preventDefault(), this.state = "pointerdown", this.resetDragPosition(), this.dragPosition.midPoint = null, this.dragPosition.time = Date.now(), true));
      }, move: (e2, i2, s2) => {
        if (this.state !== "pointerdown")
          return;
        if (this.trigger("touchMove", s2) === false)
          return void s2.preventDefault();
        if (i2.length < 2 && this.option("panOnlyZoomed") === true && this.content.width <= this.viewport.width && this.content.height <= this.viewport.height && this.transform.scale <= this.option("baseScale"))
          return;
        if (i2.length > 1 && (!this.option("zoom") || this.option("pinchToZoom") === false))
          return;
        const o2 = r(e2[0], e2[1]), n2 = r(i2[0], i2[1]), h2 = n2.clientX - o2.clientX, l2 = n2.clientY - o2.clientY, c2 = a(e2[0], e2[1]), d2 = a(i2[0], i2[1]), u2 = c2 && d2 ? d2 / c2 : 1;
        this.dragOffset.x += h2, this.dragOffset.y += l2, this.dragOffset.scale *= u2, this.dragOffset.time = Date.now() - this.dragPosition.time;
        const f2 = this.dragStart.scale === 1 && this.option("lockAxis");
        if (f2 && !this.lockAxis) {
          if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6)
            return void s2.preventDefault();
          const t3 = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
          this.lockAxis = t3 > 45 && t3 < 135 ? "y" : "x";
        }
        if (f2 === "xy" || this.lockAxis !== "y") {
          if (s2.preventDefault(), s2.stopPropagation(), s2.stopImmediatePropagation(), this.lockAxis && (this.dragOffset[this.lockAxis === "x" ? "y" : "x"] = 0), this.$container.classList.add(this.option("draggingClass")), this.transform.scale === this.option("baseScale") && this.lockAxis === "y" || (this.dragPosition.x = this.dragStart.x + this.dragOffset.x), this.transform.scale === this.option("baseScale") && this.lockAxis === "x" || (this.dragPosition.y = this.dragStart.y + this.dragOffset.y), this.dragPosition.scale = this.dragStart.scale * this.dragOffset.scale, i2.length > 1) {
            const e3 = r(t2.startPointers[0], t2.startPointers[1]), i3 = e3.clientX - this.dragStart.rect.x, s3 = e3.clientY - this.dragStart.rect.y, { deltaX: o3, deltaY: a2 } = this.getZoomDelta(this.content.scale * this.dragOffset.scale, i3, s3);
            this.dragPosition.x -= o3, this.dragPosition.y -= a2, this.dragPosition.midPoint = n2;
          } else
            this.setDragResistance();
          this.transform = { x: this.dragPosition.x, y: this.dragPosition.y, scale: this.dragPosition.scale }, this.startAnimation();
        }
      }, end: (e2, i2) => {
        if (this.state !== "pointerdown")
          return;
        if (this._dragOffset = { ...this.dragOffset }, t2.currentPointers.length)
          return void this.resetDragPosition();
        if (this.state = "decel", this.friction = this.option("decelFriction"), this.recalculateTransform(), this.$container.classList.remove(this.option("draggingClass")), this.trigger("touchEnd", i2) === false)
          return;
        if (this.state !== "decel")
          return;
        const s2 = this.option("minScale");
        if (this.transform.scale < s2)
          return void this.zoomTo(s2, { friction: 0.64 });
        const o2 = this.option("maxScale");
        if (this.transform.scale - o2 > 0.01) {
          const t3 = this.dragPosition.midPoint || e2, i3 = this.$content.getClientRects()[0];
          this.zoomTo(o2, { friction: 0.64, x: t3.clientX - i3.left, y: t3.clientY - i3.top });
        } else
          ;
      } });
      this.pointerTracker = t2;
    }
    initObserver() {
      this.resizeObserver || (this.resizeObserver = new o(() => {
        this.updateTimer || (this.updateTimer = setTimeout(() => {
          const t2 = this.$container.getBoundingClientRect();
          t2.width && t2.height ? ((Math.abs(t2.width - this.container.width) > 1 || Math.abs(t2.height - this.container.height) > 1) && (this.isAnimating() && this.endAnimation(true), this.updateMetrics(), this.panTo({ x: this.content.x, y: this.content.y, scale: this.option("baseScale"), friction: 0 })), this.updateTimer = null) : this.updateTimer = null;
        }, this.updateRate));
      }), this.resizeObserver.observe(this.$container));
    }
    resetDragPosition() {
      this.lockAxis = null, this.friction = this.option("friction"), this.velocity = { x: 0, y: 0, scale: 0 };
      const { x: t2, y: e2, scale: i2 } = this.content;
      this.dragStart = { rect: this.$content.getBoundingClientRect(), x: t2, y: e2, scale: i2 }, this.dragPosition = { ...this.dragPosition, x: t2, y: e2, scale: i2 }, this.dragOffset = { x: 0, y: 0, scale: 1, time: 0 };
    }
    updateMetrics(t2) {
      t2 !== true && this.trigger("beforeUpdate");
      const e2 = this.$container, s2 = this.$content, o2 = this.$viewport, n2 = s2 instanceof HTMLImageElement, a2 = this.option("zoom"), r2 = this.option("resizeParent", a2);
      let h2 = this.option("width"), l2 = this.option("height"), c2 = h2 || (d2 = s2, Math.max(parseFloat(d2.naturalWidth || 0), parseFloat(d2.width && d2.width.baseVal && d2.width.baseVal.value || 0), parseFloat(d2.offsetWidth || 0), parseFloat(d2.scrollWidth || 0)));
      var d2;
      let u2 = l2 || ((t3) => Math.max(parseFloat(t3.naturalHeight || 0), parseFloat(t3.height && t3.height.baseVal && t3.height.baseVal.value || 0), parseFloat(t3.offsetHeight || 0), parseFloat(t3.scrollHeight || 0)))(s2);
      Object.assign(s2.style, { width: h2 ? `${h2}px` : "", height: l2 ? `${l2}px` : "", maxWidth: "", maxHeight: "" }), r2 && Object.assign(o2.style, { width: "", height: "" });
      const f2 = this.option("ratio");
      c2 = i(c2 * f2), u2 = i(u2 * f2), h2 = c2, l2 = u2;
      const g2 = s2.getBoundingClientRect(), p2 = o2.getBoundingClientRect(), m2 = o2 == e2 ? p2 : e2.getBoundingClientRect();
      let y2 = Math.max(o2.offsetWidth, i(p2.width)), v2 = Math.max(o2.offsetHeight, i(p2.height)), b2 = window.getComputedStyle(o2);
      if (y2 -= parseFloat(b2.paddingLeft) + parseFloat(b2.paddingRight), v2 -= parseFloat(b2.paddingTop) + parseFloat(b2.paddingBottom), this.viewport.width = y2, this.viewport.height = v2, a2) {
        if (Math.abs(c2 - g2.width) > 0.1 || Math.abs(u2 - g2.height) > 0.1) {
          const t3 = ((t4, e3, i2, s3) => {
            const o3 = Math.min(i2 / t4 || 0, s3 / e3);
            return { width: t4 * o3 || 0, height: e3 * o3 || 0 };
          })(c2, u2, Math.min(c2, g2.width), Math.min(u2, g2.height));
          h2 = i(t3.width), l2 = i(t3.height);
        }
        Object.assign(s2.style, { width: `${h2}px`, height: `${l2}px`, transform: "" });
      }
      if (r2 && (Object.assign(o2.style, { width: `${h2}px`, height: `${l2}px` }), this.viewport = { ...this.viewport, width: h2, height: l2 }), n2 && a2 && typeof this.options.maxScale != "function") {
        const t3 = this.option("maxScale");
        this.options.maxScale = function() {
          return this.content.origWidth > 0 && this.content.fitWidth > 0 ? this.content.origWidth / this.content.fitWidth : t3;
        };
      }
      this.content = { ...this.content, origWidth: c2, origHeight: u2, fitWidth: h2, fitHeight: l2, width: h2, height: l2, scale: 1, isZoomable: a2 }, this.container = { width: m2.width, height: m2.height }, t2 !== true && this.trigger("afterUpdate");
    }
    zoomIn(t2) {
      this.zoomTo(this.content.scale + (t2 || this.option("step")));
    }
    zoomOut(t2) {
      this.zoomTo(this.content.scale - (t2 || this.option("step")));
    }
    toggleZoom(t2 = {}) {
      const e2 = this.option("maxScale"), i2 = this.option("baseScale"), s2 = this.content.scale > i2 + 0.5 * (e2 - i2) ? i2 : e2;
      this.zoomTo(s2, t2);
    }
    zoomTo(t2 = this.option("baseScale"), { x: e2 = null, y: s2 = null } = {}) {
      t2 = Math.max(Math.min(t2, this.option("maxScale")), this.option("minScale"));
      const o2 = i(this.content.scale / (this.content.width / this.content.fitWidth), 1e7);
      e2 === null && (e2 = this.content.width * o2 * 0.5), s2 === null && (s2 = this.content.height * o2 * 0.5);
      const { deltaX: n2, deltaY: a2 } = this.getZoomDelta(t2, e2, s2);
      e2 = this.content.x - n2, s2 = this.content.y - a2, this.panTo({ x: e2, y: s2, scale: t2, friction: this.option("zoomFriction") });
    }
    getZoomDelta(t2, e2 = 0, i2 = 0) {
      const s2 = this.content.fitWidth * this.content.scale, o2 = this.content.fitHeight * this.content.scale, n2 = e2 > 0 && s2 ? e2 / s2 : 0, a2 = i2 > 0 && o2 ? i2 / o2 : 0;
      return { deltaX: (this.content.fitWidth * t2 - s2) * n2, deltaY: (this.content.fitHeight * t2 - o2) * a2 };
    }
    panTo({ x: t2 = this.content.x, y: e2 = this.content.y, scale: i2, friction: s2 = this.option("friction"), ignoreBounds: o2 = false } = {}) {
      if (i2 = i2 || this.content.scale || 1, !o2) {
        const { boundX: s3, boundY: o3 } = this.getBounds(i2);
        s3 && (t2 = Math.max(Math.min(t2, s3.to), s3.from)), o3 && (e2 = Math.max(Math.min(e2, o3.to), o3.from));
      }
      this.friction = s2, this.transform = { ...this.transform, x: t2, y: e2, scale: i2 }, s2 ? (this.state = "panning", this.velocity = { x: (1 / this.friction - 1) * (t2 - this.content.x), y: (1 / this.friction - 1) * (e2 - this.content.y), scale: (1 / this.friction - 1) * (i2 - this.content.scale) }, this.startAnimation()) : this.endAnimation();
    }
    startAnimation() {
      this.rAF ? cancelAnimationFrame(this.rAF) : this.trigger("startAnimation"), this.rAF = requestAnimationFrame(() => this.animate());
    }
    animate() {
      if (this.setEdgeForce(), this.setDragForce(), this.velocity.x *= this.friction, this.velocity.y *= this.friction, this.velocity.scale *= this.friction, this.content.x += this.velocity.x, this.content.y += this.velocity.y, this.content.scale += this.velocity.scale, this.isAnimating())
        this.setTransform();
      else if (this.state !== "pointerdown")
        return void this.endAnimation();
      this.rAF = requestAnimationFrame(() => this.animate());
    }
    getBounds(t2) {
      let e2 = this.boundX, s2 = this.boundY;
      if (e2 !== void 0 && s2 !== void 0)
        return { boundX: e2, boundY: s2 };
      e2 = { from: 0, to: 0 }, s2 = { from: 0, to: 0 }, t2 = t2 || this.transform.scale;
      const o2 = this.content.fitWidth * t2, n2 = this.content.fitHeight * t2, a2 = this.viewport.width, r2 = this.viewport.height;
      if (o2 < a2) {
        const t3 = i(0.5 * (a2 - o2));
        e2.from = t3, e2.to = t3;
      } else
        e2.from = i(a2 - o2);
      if (n2 < r2) {
        const t3 = 0.5 * (r2 - n2);
        s2.from = t3, s2.to = t3;
      } else
        s2.from = i(r2 - n2);
      return { boundX: e2, boundY: s2 };
    }
    setEdgeForce() {
      if (this.state !== "decel")
        return;
      const t2 = this.option("bounceForce"), { boundX: e2, boundY: i2 } = this.getBounds(Math.max(this.transform.scale, this.content.scale));
      let s2, o2, n2, a2;
      if (e2 && (s2 = this.content.x < e2.from, o2 = this.content.x > e2.to), i2 && (n2 = this.content.y < i2.from, a2 = this.content.y > i2.to), s2 || o2) {
        let i3 = ((s2 ? e2.from : e2.to) - this.content.x) * t2;
        const o3 = this.content.x + (this.velocity.x + i3) / this.friction;
        o3 >= e2.from && o3 <= e2.to && (i3 += this.velocity.x), this.velocity.x = i3, this.recalculateTransform();
      }
      if (n2 || a2) {
        let e3 = ((n2 ? i2.from : i2.to) - this.content.y) * t2;
        const s3 = this.content.y + (e3 + this.velocity.y) / this.friction;
        s3 >= i2.from && s3 <= i2.to && (e3 += this.velocity.y), this.velocity.y = e3, this.recalculateTransform();
      }
    }
    setDragResistance() {
      if (this.state !== "pointerdown")
        return;
      const { boundX: t2, boundY: e2 } = this.getBounds(this.dragPosition.scale);
      let i2, s2, o2, n2;
      if (t2 && (i2 = this.dragPosition.x < t2.from, s2 = this.dragPosition.x > t2.to), e2 && (o2 = this.dragPosition.y < e2.from, n2 = this.dragPosition.y > e2.to), (i2 || s2) && (!i2 || !s2)) {
        const e3 = i2 ? t2.from : t2.to, s3 = e3 - this.dragPosition.x;
        this.dragPosition.x = e3 - 0.3 * s3;
      }
      if ((o2 || n2) && (!o2 || !n2)) {
        const t3 = o2 ? e2.from : e2.to, i3 = t3 - this.dragPosition.y;
        this.dragPosition.y = t3 - 0.3 * i3;
      }
    }
    setDragForce() {
      this.state === "pointerdown" && (this.velocity.x = this.dragPosition.x - this.content.x, this.velocity.y = this.dragPosition.y - this.content.y, this.velocity.scale = this.dragPosition.scale - this.content.scale);
    }
    recalculateTransform() {
      this.transform.x = this.content.x + this.velocity.x / (1 / this.friction - 1), this.transform.y = this.content.y + this.velocity.y / (1 / this.friction - 1), this.transform.scale = this.content.scale + this.velocity.scale / (1 / this.friction - 1);
    }
    isAnimating() {
      return !(!this.friction || !(Math.abs(this.velocity.x) > 0.05 || Math.abs(this.velocity.y) > 0.05 || Math.abs(this.velocity.scale) > 0.05));
    }
    setTransform(t2) {
      let e2, s2, o2;
      if (t2 ? (e2 = i(this.transform.x), s2 = i(this.transform.y), o2 = this.transform.scale, this.content = { ...this.content, x: e2, y: s2, scale: o2 }) : (e2 = i(this.content.x), s2 = i(this.content.y), o2 = this.content.scale / (this.content.width / this.content.fitWidth), this.content = { ...this.content, x: e2, y: s2 }), this.trigger("beforeTransform"), e2 = i(this.content.x), s2 = i(this.content.y), t2 && this.option("zoom")) {
        let t3, n2;
        t3 = i(this.content.fitWidth * o2), n2 = i(this.content.fitHeight * o2), this.content.width = t3, this.content.height = n2, this.transform = { ...this.transform, width: t3, height: n2, scale: o2 }, Object.assign(this.$content.style, { width: `${t3}px`, height: `${n2}px`, maxWidth: "none", maxHeight: "none", transform: `translate3d(${e2}px, ${s2}px, 0) scale(1)` });
      } else
        this.$content.style.transform = `translate3d(${e2}px, ${s2}px, 0) scale(${o2})`;
      this.trigger("afterTransform");
    }
    endAnimation(t2) {
      cancelAnimationFrame(this.rAF), this.rAF = null, this.velocity = { x: 0, y: 0, scale: 0 }, this.setTransform(true), this.state = "ready", this.handleCursor(), t2 !== true && this.trigger("endAnimation");
    }
    handleCursor() {
      const t2 = this.option("draggableClass");
      t2 && this.option("touch") && (this.option("panOnlyZoomed") == 1 && this.content.width <= this.viewport.width && this.content.height <= this.viewport.height && this.transform.scale <= this.option("baseScale") ? this.$container.classList.remove(t2) : this.$container.classList.add(t2));
    }
    detachEvents() {
      this.$content.removeEventListener("load", this.onLoad), this.$container.removeEventListener("wheel", this.onWheel, { passive: false }), this.$container.removeEventListener("click", this.onClick, { passive: false }), this.pointerTracker && (this.pointerTracker.stop(), this.pointerTracker = null), this.resizeObserver && (this.resizeObserver.disconnect(), this.resizeObserver = null);
    }
    destroy() {
      this.state !== "destroy" && (this.state = "destroy", clearTimeout(this.updateTimer), this.updateTimer = null, cancelAnimationFrame(this.rAF), this.rAF = null, this.detachEvents(), this.detachPlugins(), this.resetDragPosition());
    }
  };
  d.version = "4.0.27", d.Plugins = {};
  var u = (t2, e2) => {
    let i2 = 0;
    return function(...s2) {
      const o2 = new Date().getTime();
      if (!(o2 - i2 < e2))
        return i2 = o2, t2(...s2);
    };
  };
  var f = class {
    constructor(t2) {
      this.$container = null, this.$prev = null, this.$next = null, this.carousel = t2, this.onRefresh = this.onRefresh.bind(this);
    }
    option(t2) {
      return this.carousel.option(`Navigation.${t2}`);
    }
    createButton(t2) {
      const e2 = document.createElement("button");
      e2.setAttribute("title", this.carousel.localize(`{{${t2.toUpperCase()}}}`));
      const i2 = this.option("classNames.button") + " " + this.option(`classNames.${t2}`);
      return e2.classList.add(...i2.split(" ")), e2.setAttribute("tabindex", "0"), e2.innerHTML = this.carousel.localize(this.option(`${t2}Tpl`)), e2.addEventListener("click", (e3) => {
        e3.preventDefault(), e3.stopPropagation(), this.carousel["slide" + (t2 === "next" ? "Next" : "Prev")]();
      }), e2;
    }
    build() {
      this.$container || (this.$container = document.createElement("div"), this.$container.classList.add(...this.option("classNames.main").split(" ")), this.carousel.$container.appendChild(this.$container)), this.$next || (this.$next = this.createButton("next"), this.$container.appendChild(this.$next)), this.$prev || (this.$prev = this.createButton("prev"), this.$container.appendChild(this.$prev));
    }
    onRefresh() {
      const t2 = this.carousel.pages.length;
      t2 <= 1 || t2 > 1 && this.carousel.elemDimWidth < this.carousel.wrapDimWidth && !Number.isInteger(this.carousel.option("slidesPerPage")) ? this.cleanup() : (this.build(), this.$prev.removeAttribute("disabled"), this.$next.removeAttribute("disabled"), this.carousel.option("infiniteX", this.carousel.option("infinite")) || (this.carousel.page <= 0 && this.$prev.setAttribute("disabled", ""), this.carousel.page >= t2 - 1 && this.$next.setAttribute("disabled", "")));
    }
    cleanup() {
      this.$prev && this.$prev.remove(), this.$prev = null, this.$next && this.$next.remove(), this.$next = null, this.$container && this.$container.remove(), this.$container = null;
    }
    attach() {
      this.carousel.on("refresh change", this.onRefresh);
    }
    detach() {
      this.carousel.off("refresh change", this.onRefresh), this.cleanup();
    }
  };
  f.defaults = { prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>', nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>', classNames: { main: "carousel__nav", button: "carousel__button", next: "is-next", prev: "is-prev" } };
  var g = class {
    constructor(t2) {
      this.carousel = t2, this.selectedIndex = null, this.friction = 0, this.onNavReady = this.onNavReady.bind(this), this.onNavClick = this.onNavClick.bind(this), this.onNavCreateSlide = this.onNavCreateSlide.bind(this), this.onTargetChange = this.onTargetChange.bind(this);
    }
    addAsTargetFor(t2) {
      this.target = this.carousel, this.nav = t2, this.attachEvents();
    }
    addAsNavFor(t2) {
      this.target = t2, this.nav = this.carousel, this.attachEvents();
    }
    attachEvents() {
      this.nav.options.initialSlide = this.target.options.initialPage, this.nav.on("ready", this.onNavReady), this.nav.on("createSlide", this.onNavCreateSlide), this.nav.on("Panzoom.click", this.onNavClick), this.target.on("change", this.onTargetChange), this.target.on("Panzoom.afterUpdate", this.onTargetChange);
    }
    onNavReady() {
      this.onTargetChange(true);
    }
    onNavClick(t2, e2, i2) {
      const s2 = i2.target.closest(".carousel__slide");
      if (!s2)
        return;
      i2.stopPropagation();
      const o2 = parseInt(s2.dataset.index, 10), n2 = this.target.findPageForSlide(o2);
      this.target.page !== n2 && this.target.slideTo(n2, { friction: this.friction }), this.markSelectedSlide(o2);
    }
    onNavCreateSlide(t2, e2) {
      e2.index === this.selectedIndex && this.markSelectedSlide(e2.index);
    }
    onTargetChange() {
      const t2 = this.target.pages[this.target.page].indexes[0], e2 = this.nav.findPageForSlide(t2);
      this.nav.slideTo(e2), this.markSelectedSlide(t2);
    }
    markSelectedSlide(t2) {
      this.selectedIndex = t2, [...this.nav.slides].filter((t3) => t3.$el && t3.$el.classList.remove("is-nav-selected"));
      const e2 = this.nav.slides[t2];
      e2 && e2.$el && e2.$el.classList.add("is-nav-selected");
    }
    attach(t2) {
      const e2 = t2.options.Sync;
      (e2.target || e2.nav) && (e2.target ? this.addAsNavFor(e2.target) : e2.nav && this.addAsTargetFor(e2.nav), this.friction = e2.friction);
    }
    detach() {
      this.nav && (this.nav.off("ready", this.onNavReady), this.nav.off("Panzoom.click", this.onNavClick), this.nav.off("createSlide", this.onNavCreateSlide)), this.target && (this.target.off("Panzoom.afterUpdate", this.onTargetChange), this.target.off("change", this.onTargetChange));
    }
  };
  g.defaults = { friction: 0.92 };
  var p = { Navigation: f, Dots: class {
    constructor(t2) {
      this.carousel = t2, this.$list = null, this.events = { change: this.onChange.bind(this), refresh: this.onRefresh.bind(this) };
    }
    buildList() {
      if (this.carousel.pages.length < this.carousel.option("Dots.minSlideCount"))
        return;
      const t2 = document.createElement("ol");
      return t2.classList.add("carousel__dots"), t2.addEventListener("click", (t3) => {
        if (!("page" in t3.target.dataset))
          return;
        t3.preventDefault(), t3.stopPropagation();
        const e2 = parseInt(t3.target.dataset.page, 10), i2 = this.carousel;
        e2 !== i2.page && (i2.pages.length < 3 && i2.option("infinite") ? i2[e2 == 0 ? "slidePrev" : "slideNext"]() : i2.slideTo(e2));
      }), this.$list = t2, this.carousel.$container.appendChild(t2), this.carousel.$container.classList.add("has-dots"), t2;
    }
    removeList() {
      this.$list && (this.$list.parentNode.removeChild(this.$list), this.$list = null), this.carousel.$container.classList.remove("has-dots");
    }
    rebuildDots() {
      let t2 = this.$list;
      const e2 = !!t2, i2 = this.carousel.pages.length;
      if (i2 < 2)
        return void (e2 && this.removeList());
      e2 || (t2 = this.buildList());
      const s2 = this.$list.children.length;
      if (s2 > i2)
        for (let t3 = i2; t3 < s2; t3++)
          this.$list.removeChild(this.$list.lastChild);
      else {
        for (let t3 = s2; t3 < i2; t3++) {
          const e3 = document.createElement("li");
          e3.classList.add("carousel__dot"), e3.dataset.page = t3, e3.setAttribute("role", "button"), e3.setAttribute("tabindex", "0"), e3.setAttribute("title", this.carousel.localize("{{GOTO}}", [["%d", t3 + 1]])), e3.addEventListener("keydown", (t4) => {
            const i3 = t4.code;
            let s3;
            i3 === "Enter" || i3 === "NumpadEnter" ? s3 = e3 : i3 === "ArrowRight" ? s3 = e3.nextSibling : i3 === "ArrowLeft" && (s3 = e3.previousSibling), s3 && s3.click();
          }), this.$list.appendChild(e3);
        }
        this.setActiveDot();
      }
    }
    setActiveDot() {
      if (!this.$list)
        return;
      this.$list.childNodes.forEach((t3) => {
        t3.classList.remove("is-selected");
      });
      const t2 = this.$list.childNodes[this.carousel.page];
      t2 && t2.classList.add("is-selected");
    }
    onChange() {
      this.setActiveDot();
    }
    onRefresh() {
      this.rebuildDots();
    }
    attach() {
      this.carousel.on(this.events);
    }
    detach() {
      this.removeList(), this.carousel.off(this.events), this.carousel = null;
    }
  }, Sync: g };
  var m = { slides: [], preload: 0, slidesPerPage: "auto", initialPage: null, initialSlide: null, friction: 0.92, center: true, infinite: true, fill: true, dragFree: false, prefix: "", classNames: { viewport: "carousel__viewport", track: "carousel__track", slide: "carousel__slide", slideSelected: "is-selected" }, l10n: { NEXT: "Next slide", PREV: "Previous slide", GOTO: "Go to slide #%d" } };
  var y = class extends l {
    constructor(t2, i2 = {}) {
      if (super(i2 = e(true, {}, m, i2)), this.state = "init", this.$container = t2, !(this.$container instanceof HTMLElement))
        throw new Error("No root element provided");
      this.slideNext = u(this.slideNext.bind(this), 250), this.slidePrev = u(this.slidePrev.bind(this), 250), this.init(), t2.__Carousel = this;
    }
    init() {
      this.pages = [], this.page = this.pageIndex = null, this.prevPage = this.prevPageIndex = null, this.attachPlugins(y.Plugins), this.trigger("init"), this.initLayout(), this.initSlides(), this.updateMetrics(), this.$track && this.pages.length && (this.$track.style.transform = `translate3d(${-1 * this.pages[this.page].left}px, 0px, 0) scale(1)`), this.manageSlideVisiblity(), this.initPanzoom(), this.state = "ready", this.trigger("ready");
    }
    initLayout() {
      const t2 = this.option("prefix"), e2 = this.option("classNames");
      this.$viewport = this.option("viewport") || this.$container.querySelector(`.${t2}${e2.viewport}`), this.$viewport || (this.$viewport = document.createElement("div"), this.$viewport.classList.add(...(t2 + e2.viewport).split(" ")), this.$viewport.append(...this.$container.childNodes), this.$container.appendChild(this.$viewport)), this.$track = this.option("track") || this.$container.querySelector(`.${t2}${e2.track}`), this.$track || (this.$track = document.createElement("div"), this.$track.classList.add(...(t2 + e2.track).split(" ")), this.$track.append(...this.$viewport.childNodes), this.$viewport.appendChild(this.$track));
    }
    initSlides() {
      this.slides = [];
      this.$viewport.querySelectorAll(`.${this.option("prefix")}${this.option("classNames.slide")}`).forEach((t2) => {
        const e2 = { $el: t2, isDom: true };
        this.slides.push(e2), this.trigger("createSlide", e2, this.slides.length);
      }), Array.isArray(this.options.slides) && (this.slides = e(true, [...this.slides], this.options.slides));
    }
    updateMetrics() {
      let t2, e2 = 0, s2 = [];
      this.slides.forEach((i2, o3) => {
        const n3 = i2.$el, a3 = i2.isDom || !t2 ? this.getSlideMetrics(n3) : t2;
        i2.index = o3, i2.width = a3, i2.left = e2, t2 = a3, e2 += a3, s2.push(o3);
      });
      let o2 = Math.max(this.$track.offsetWidth, i(this.$track.getBoundingClientRect().width)), n2 = getComputedStyle(this.$track);
      o2 -= parseFloat(n2.paddingLeft) + parseFloat(n2.paddingRight), this.contentWidth = e2, this.viewportWidth = o2;
      const a2 = [], r2 = this.option("slidesPerPage");
      if (Number.isInteger(r2) && e2 > o2)
        for (let t3 = 0; t3 < this.slides.length; t3 += r2)
          a2.push({ indexes: s2.slice(t3, t3 + r2), slides: this.slides.slice(t3, t3 + r2) });
      else {
        let t3 = 0, e3 = 0;
        for (let i2 = 0; i2 < this.slides.length; i2 += 1) {
          let s3 = this.slides[i2];
          (!a2.length || e3 + s3.width > o2) && (a2.push({ indexes: [], slides: [] }), t3 = a2.length - 1, e3 = 0), e3 += s3.width, a2[t3].indexes.push(i2), a2[t3].slides.push(s3);
        }
      }
      const h2 = this.option("center"), l2 = this.option("fill");
      a2.forEach((t3, i2) => {
        t3.index = i2, t3.width = t3.slides.reduce((t4, e3) => t4 + e3.width, 0), t3.left = t3.slides[0].left, h2 && (t3.left += 0.5 * (o2 - t3.width) * -1), l2 && !this.option("infiniteX", this.option("infinite")) && e2 > o2 && (t3.left = Math.max(t3.left, 0), t3.left = Math.min(t3.left, e2 - o2));
      });
      const c2 = [];
      let d2;
      a2.forEach((t3) => {
        const e3 = { ...t3 };
        d2 && e3.left === d2.left ? (d2.width += e3.width, d2.slides = [...d2.slides, ...e3.slides], d2.indexes = [...d2.indexes, ...e3.indexes]) : (e3.index = c2.length, d2 = e3, c2.push(e3));
      }), this.pages = c2;
      let u2 = this.page;
      if (u2 === null) {
        const t3 = this.option("initialSlide");
        u2 = t3 !== null ? this.findPageForSlide(t3) : parseInt(this.option("initialPage", 0), 10) || 0, c2[u2] || (u2 = c2.length && u2 > c2.length ? c2[c2.length - 1].index : 0), this.page = u2, this.pageIndex = u2;
      }
      this.updatePanzoom(), this.trigger("refresh");
    }
    getSlideMetrics(t2) {
      if (!t2) {
        const e3 = this.slides[0];
        (t2 = document.createElement("div")).dataset.isTestEl = 1, t2.style.visibility = "hidden", t2.classList.add(...(this.option("prefix") + this.option("classNames.slide")).split(" ")), e3.customClass && t2.classList.add(...e3.customClass.split(" ")), this.$track.prepend(t2);
      }
      let e2 = Math.max(t2.offsetWidth, i(t2.getBoundingClientRect().width));
      const s2 = t2.currentStyle || window.getComputedStyle(t2);
      return e2 = e2 + (parseFloat(s2.marginLeft) || 0) + (parseFloat(s2.marginRight) || 0), t2.dataset.isTestEl && t2.remove(), e2;
    }
    findPageForSlide(t2) {
      t2 = parseInt(t2, 10) || 0;
      const e2 = this.pages.find((e3) => e3.indexes.indexOf(t2) > -1);
      return e2 ? e2.index : null;
    }
    slideNext() {
      this.slideTo(this.pageIndex + 1);
    }
    slidePrev() {
      this.slideTo(this.pageIndex - 1);
    }
    slideTo(t2, e2 = {}) {
      const { x: i2 = -1 * this.setPage(t2, true), y: s2 = 0, friction: o2 = this.option("friction") } = e2;
      this.Panzoom.content.x === i2 && !this.Panzoom.velocity.x && o2 || (this.Panzoom.panTo({ x: i2, y: s2, friction: o2, ignoreBounds: true }), this.state === "ready" && this.Panzoom.state === "ready" && this.trigger("settle"));
    }
    initPanzoom() {
      this.Panzoom && this.Panzoom.destroy();
      const t2 = e(true, {}, { content: this.$track, wrapInner: false, resizeParent: false, zoom: false, click: false, lockAxis: "x", x: this.pages.length ? -1 * this.pages[this.page].left : 0, centerOnStart: false, textSelection: () => this.option("textSelection", false), panOnlyZoomed: function() {
        return this.content.width <= this.viewport.width;
      } }, this.option("Panzoom"));
      this.Panzoom = new d(this.$container, t2), this.Panzoom.on({ "*": (t3, ...e2) => this.trigger(`Panzoom.${t3}`, ...e2), afterUpdate: () => {
        this.updatePage();
      }, beforeTransform: this.onBeforeTransform.bind(this), touchEnd: this.onTouchEnd.bind(this), endAnimation: () => {
        this.trigger("settle");
      } }), this.updateMetrics(), this.manageSlideVisiblity();
    }
    updatePanzoom() {
      this.Panzoom && (this.Panzoom.content = { ...this.Panzoom.content, fitWidth: this.contentWidth, origWidth: this.contentWidth, width: this.contentWidth }, this.pages.length > 1 && this.option("infiniteX", this.option("infinite")) ? this.Panzoom.boundX = null : this.pages.length && (this.Panzoom.boundX = { from: -1 * this.pages[this.pages.length - 1].left, to: -1 * this.pages[0].left }), this.option("infiniteY", this.option("infinite")) ? this.Panzoom.boundY = null : this.Panzoom.boundY = { from: 0, to: 0 }, this.Panzoom.handleCursor());
    }
    manageSlideVisiblity() {
      const t2 = this.contentWidth, e2 = this.viewportWidth;
      let i2 = this.Panzoom ? -1 * this.Panzoom.content.x : this.pages.length ? this.pages[this.page].left : 0;
      const s2 = this.option("preload"), o2 = this.option("infiniteX", this.option("infinite")), n2 = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-left")), a2 = parseFloat(getComputedStyle(this.$viewport, null).getPropertyValue("padding-right"));
      this.slides.forEach((r3) => {
        let h3, l2, c2 = 0;
        h3 = i2 - n2, l2 = i2 + e2 + a2, h3 -= s2 * (e2 + n2 + a2), l2 += s2 * (e2 + n2 + a2);
        const d2 = r3.left + r3.width > h3 && r3.left < l2;
        h3 = i2 + t2 - n2, l2 = i2 + t2 + e2 + a2, h3 -= s2 * (e2 + n2 + a2);
        const u2 = o2 && r3.left + r3.width > h3 && r3.left < l2;
        h3 = i2 - t2 - n2, l2 = i2 - t2 + e2 + a2, h3 -= s2 * (e2 + n2 + a2);
        const f2 = o2 && r3.left + r3.width > h3 && r3.left < l2;
        u2 || d2 || f2 ? (this.createSlideEl(r3), d2 && (c2 = 0), u2 && (c2 = -1), f2 && (c2 = 1), r3.left + r3.width > i2 && r3.left <= i2 + e2 + a2 && (c2 = 0)) : this.removeSlideEl(r3), r3.hasDiff = c2;
      });
      let r2 = 0, h2 = 0;
      this.slides.forEach((e3, i3) => {
        let s3 = 0;
        e3.$el ? (i3 !== r2 || e3.hasDiff ? s3 = h2 + e3.hasDiff * t2 : h2 = 0, e3.$el.style.left = Math.abs(s3) > 0.1 ? `${h2 + e3.hasDiff * t2}px` : "", r2++) : h2 += e3.width;
      }), this.markSelectedSlides();
    }
    createSlideEl(t2) {
      if (!t2)
        return;
      if (t2.$el) {
        let e3 = t2.$el.dataset.index;
        if (!e3 || parseInt(e3, 10) !== t2.index) {
          let e4;
          t2.$el.dataset.index = t2.index, t2.$el.querySelectorAll("[data-lazy-srcset]").forEach((t3) => {
            t3.srcset = t3.dataset.lazySrcset;
          }), t2.$el.querySelectorAll("[data-lazy-src]").forEach((t3) => {
            let e5 = t3.dataset.lazySrc;
            t3 instanceof HTMLImageElement ? t3.src = e5 : t3.style.backgroundImage = `url('${e5}')`;
          }), (e4 = t2.$el.dataset.lazySrc) && (t2.$el.style.backgroundImage = `url('${e4}')`), t2.state = "ready";
        }
        return;
      }
      const e2 = document.createElement("div");
      e2.dataset.index = t2.index, e2.classList.add(...(this.option("prefix") + this.option("classNames.slide")).split(" ")), t2.customClass && e2.classList.add(...t2.customClass.split(" ")), t2.html && (e2.innerHTML = t2.html);
      const i2 = [];
      this.slides.forEach((t3, e3) => {
        t3.$el && i2.push(e3);
      });
      const s2 = t2.index;
      let o2 = null;
      if (i2.length) {
        let t3 = i2.reduce((t4, e3) => Math.abs(e3 - s2) < Math.abs(t4 - s2) ? e3 : t4);
        o2 = this.slides[t3];
      }
      return this.$track.insertBefore(e2, o2 && o2.$el ? o2.index < t2.index ? o2.$el.nextSibling : o2.$el : null), t2.$el = e2, this.trigger("createSlide", t2, s2), t2;
    }
    removeSlideEl(t2) {
      t2.$el && !t2.isDom && (this.trigger("removeSlide", t2), t2.$el.remove(), t2.$el = null);
    }
    markSelectedSlides() {
      const t2 = this.option("classNames.slideSelected"), e2 = "aria-hidden";
      this.slides.forEach((i2, s2) => {
        const o2 = i2.$el;
        if (!o2)
          return;
        const n2 = this.pages[this.page];
        n2 && n2.indexes && n2.indexes.indexOf(s2) > -1 ? (t2 && !o2.classList.contains(t2) && (o2.classList.add(t2), this.trigger("selectSlide", i2)), o2.removeAttribute(e2)) : (t2 && o2.classList.contains(t2) && (o2.classList.remove(t2), this.trigger("unselectSlide", i2)), o2.setAttribute(e2, true));
      });
    }
    updatePage() {
      this.updateMetrics(), this.slideTo(this.page, { friction: 0 });
    }
    onBeforeTransform() {
      this.option("infiniteX", this.option("infinite")) && this.manageInfiniteTrack(), this.manageSlideVisiblity();
    }
    manageInfiniteTrack() {
      const t2 = this.contentWidth, e2 = this.viewportWidth;
      if (!this.option("infiniteX", this.option("infinite")) || this.pages.length < 2 || t2 < e2)
        return;
      const i2 = this.Panzoom;
      let s2 = false;
      return i2.content.x < -1 * (t2 - e2) && (i2.content.x += t2, this.pageIndex = this.pageIndex - this.pages.length, s2 = true), i2.content.x > e2 && (i2.content.x -= t2, this.pageIndex = this.pageIndex + this.pages.length, s2 = true), s2 && i2.state === "pointerdown" && i2.resetDragPosition(), s2;
    }
    onTouchEnd(t2, e2) {
      const i2 = this.option("dragFree");
      if (!i2 && this.pages.length > 1 && t2.dragOffset.time < 350 && Math.abs(t2.dragOffset.y) < 1 && Math.abs(t2.dragOffset.x) > 5)
        this[t2.dragOffset.x < 0 ? "slideNext" : "slidePrev"]();
      else if (i2) {
        const [, e3] = this.getPageFromPosition(-1 * t2.transform.x);
        this.setPage(e3);
      } else
        this.slideToClosest();
    }
    slideToClosest(t2 = {}) {
      let [, e2] = this.getPageFromPosition(-1 * this.Panzoom.content.x);
      this.slideTo(e2, t2);
    }
    getPageFromPosition(t2) {
      const e2 = this.pages.length;
      this.option("center") && (t2 += 0.5 * this.viewportWidth);
      const i2 = Math.floor(t2 / this.contentWidth);
      t2 -= i2 * this.contentWidth;
      let s2 = this.slides.find((e3) => e3.left <= t2 && e3.left + e3.width > t2);
      if (s2) {
        let t3 = this.findPageForSlide(s2.index);
        return [t3, t3 + i2 * e2];
      }
      return [0, 0];
    }
    setPage(t2, e2) {
      let i2 = 0, s2 = parseInt(t2, 10) || 0;
      const o2 = this.page, n2 = this.pageIndex, a2 = this.pages.length, r2 = this.contentWidth, h2 = this.viewportWidth;
      if (t2 = (s2 % a2 + a2) % a2, this.option("infiniteX", this.option("infinite")) && r2 > h2) {
        const o3 = Math.floor(s2 / a2) || 0, n3 = r2;
        if (i2 = this.pages[t2].left + o3 * n3, e2 === true && a2 > 2) {
          let t3 = -1 * this.Panzoom.content.x;
          const e3 = i2 - n3, o4 = i2 + n3, r3 = Math.abs(t3 - i2), h3 = Math.abs(t3 - e3), l2 = Math.abs(t3 - o4);
          l2 < r3 && l2 <= h3 ? (i2 = o4, s2 += a2) : h3 < r3 && h3 < l2 && (i2 = e3, s2 -= a2);
        }
      } else
        t2 = s2 = Math.max(0, Math.min(s2, a2 - 1)), i2 = this.pages.length ? this.pages[t2].left : 0;
      return this.page = t2, this.pageIndex = s2, o2 !== null && t2 !== o2 && (this.prevPage = o2, this.prevPageIndex = n2, this.trigger("change", t2, o2)), i2;
    }
    destroy() {
      this.state = "destroy", this.slides.forEach((t2) => {
        this.removeSlideEl(t2);
      }), this.slides = [], this.Panzoom.destroy(), this.detachPlugins();
    }
  };
  y.version = "4.0.27", y.Plugins = p;
  var v = !(typeof window == "undefined" || !window.document || !window.document.createElement);
  var b = null;
  var x = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'];
  var w = (t2) => {
    if (t2 && v) {
      b === null && document.createElement("div").focus({ get preventScroll() {
        return b = true, false;
      } });
      try {
        if (t2.setActive)
          t2.setActive();
        else if (b)
          t2.focus({ preventScroll: true });
        else {
          const e2 = window.pageXOffset || document.body.scrollTop, i2 = window.pageYOffset || document.body.scrollLeft;
          t2.focus(), document.body.scrollTo({ top: e2, left: i2, behavior: "auto" });
        }
      } catch (t3) {
      }
    }
  };
  var $ = class {
    constructor(t2) {
      this.fancybox = t2, this.$container = null, this.state = "init";
      for (const t3 of ["onPrepare", "onClosing", "onKeydown"])
        this[t3] = this[t3].bind(this);
      this.events = { prepare: this.onPrepare, closing: this.onClosing, keydown: this.onKeydown };
    }
    onPrepare() {
      this.getSlides().length < this.fancybox.option("Thumbs.minSlideCount") ? this.state = "disabled" : this.fancybox.option("Thumbs.autoStart") === true && this.fancybox.Carousel.Panzoom.content.height >= this.fancybox.option("Thumbs.minScreenHeight") && this.build();
    }
    onClosing() {
      this.Carousel && this.Carousel.Panzoom.detachEvents();
    }
    onKeydown(t2, e2) {
      e2 === t2.option("Thumbs.key") && this.toggle();
    }
    build() {
      if (this.$container)
        return;
      const t2 = document.createElement("div");
      t2.classList.add("fancybox__thumbs"), this.fancybox.$carousel.parentNode.insertBefore(t2, this.fancybox.$carousel.nextSibling), this.Carousel = new y(t2, e(true, { Dots: false, Navigation: false, Sync: { friction: 0 }, infinite: false, center: true, fill: true, dragFree: true, slidesPerPage: 1, preload: 1 }, this.fancybox.option("Thumbs.Carousel"), { Sync: { target: this.fancybox.Carousel }, slides: this.getSlides() })), this.Carousel.Panzoom.on("wheel", (t3, e2) => {
        e2.preventDefault(), this.fancybox[e2.deltaY < 0 ? "prev" : "next"]();
      }), this.$container = t2, this.state = "visible";
    }
    getSlides() {
      const t2 = [];
      for (const e2 of this.fancybox.items) {
        const i2 = e2.thumb;
        i2 && t2.push({ html: `<div class="fancybox__thumb" style="background-image:url('${i2}')"></div>`, customClass: `has-thumb has-${e2.type || "image"}` });
      }
      return t2;
    }
    toggle() {
      this.state === "visible" ? this.hide() : this.state === "hidden" ? this.show() : this.build();
    }
    show() {
      this.state === "hidden" && (this.$container.style.display = "", this.Carousel.Panzoom.attachEvents(), this.state = "visible");
    }
    hide() {
      this.state === "visible" && (this.Carousel.Panzoom.detachEvents(), this.$container.style.display = "none", this.state = "hidden");
    }
    cleanup() {
      this.Carousel && (this.Carousel.destroy(), this.Carousel = null), this.$container && (this.$container.remove(), this.$container = null), this.state = "init";
    }
    attach() {
      this.fancybox.on(this.events);
    }
    detach() {
      this.fancybox.off(this.events), this.cleanup();
    }
  };
  $.defaults = { minSlideCount: 2, minScreenHeight: 500, autoStart: true, key: "t", Carousel: {} };
  var C = (t2, e2) => {
    const i2 = new URL(t2), s2 = new URLSearchParams(i2.search);
    let o2 = new URLSearchParams();
    for (const [t3, i3] of [...s2, ...Object.entries(e2)])
      t3 === "t" ? o2.set("start", parseInt(i3)) : o2.set(t3, i3);
    o2 = o2.toString();
    let n2 = t2.match(/#t=((.*)?\d+s)/);
    return n2 && (o2 += `#t=${n2[1]}`), o2;
  };
  var S = { video: { autoplay: true, ratio: 16 / 9 }, youtube: { autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1 }, vimeo: { hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1 }, html5video: { tpl: `<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">
  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn't support embedded videos.</video>`, format: "" } };
  var E = class {
    constructor(t2) {
      this.fancybox = t2;
      for (const t3 of ["onInit", "onReady", "onCreateSlide", "onRemoveSlide", "onSelectSlide", "onUnselectSlide", "onRefresh", "onMessage"])
        this[t3] = this[t3].bind(this);
      this.events = { init: this.onInit, ready: this.onReady, "Carousel.createSlide": this.onCreateSlide, "Carousel.removeSlide": this.onRemoveSlide, "Carousel.selectSlide": this.onSelectSlide, "Carousel.unselectSlide": this.onUnselectSlide, "Carousel.refresh": this.onRefresh };
    }
    onInit() {
      for (const t2 of this.fancybox.items)
        this.processType(t2);
    }
    processType(t2) {
      if (t2.html)
        return t2.src = t2.html, t2.type = "html", void delete t2.html;
      const i2 = t2.src || "";
      let s2 = t2.type || this.fancybox.options.type, o2 = null;
      if (!i2 || typeof i2 == "string") {
        if (o2 = i2.match(/(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
          const e2 = C(i2, this.fancybox.option("Html.youtube")), n2 = encodeURIComponent(o2[1]);
          t2.videoId = n2, t2.src = `https://www.youtube-nocookie.com/embed/${n2}?${e2}`, t2.thumb = t2.thumb || `https://i.ytimg.com/vi/${n2}/mqdefault.jpg`, t2.vendor = "youtube", s2 = "video";
        } else if (o2 = i2.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/)) {
          const e2 = C(i2, this.fancybox.option("Html.vimeo")), n2 = encodeURIComponent(o2[1]);
          t2.videoId = n2, t2.src = `https://player.vimeo.com/video/${n2}?${e2}`, t2.vendor = "vimeo", s2 = "video";
        } else
          (o2 = i2.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t2.src = `//maps.google.${o2[1]}/?ll=${(o2[2] ? o2[2] + "&z=" + Math.floor(o2[3]) + (o2[4] ? o2[4].replace(/^\//, "&") : "") : o2[4] + "").replace(/\?/, "&")}&output=${o2[4] && o2[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, s2 = "map") : (o2 = i2.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t2.src = `//maps.google.${o2[1]}/maps?q=${o2[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, s2 = "map");
        s2 || (i2.charAt(0) === "#" ? s2 = "inline" : (o2 = i2.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (s2 = "html5video", t2.format = t2.format || "video/" + (o2[1] === "ogv" ? "ogg" : o2[1])) : i2.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? s2 = "image" : i2.match(/\.(pdf)((\?|#).*)?$/i) && (s2 = "pdf")), t2.type = s2 || this.fancybox.option("defaultType", "image"), s2 !== "html5video" && s2 !== "video" || (t2.video = e({}, this.fancybox.option("Html.video"), t2.video), t2._width && t2._height ? t2.ratio = parseFloat(t2._width) / parseFloat(t2._height) : t2.ratio = t2.ratio || t2.video.ratio || S.video.ratio);
      }
    }
    onReady() {
      this.fancybox.Carousel.slides.forEach((t2) => {
        t2.$el && (this.setContent(t2), t2.index === this.fancybox.getSlide().index && this.playVideo(t2));
      });
    }
    onCreateSlide(t2, e2, i2) {
      this.fancybox.state === "ready" && this.setContent(i2);
    }
    loadInlineContent(t2) {
      let e2;
      if (t2.src instanceof HTMLElement)
        e2 = t2.src;
      else if (typeof t2.src == "string") {
        const i2 = t2.src.split("#", 2), s2 = i2.length === 2 && i2[0] === "" ? i2[1] : i2[0];
        e2 = document.getElementById(s2);
      }
      if (e2) {
        if (t2.type === "clone" || e2.$placeHolder) {
          e2 = e2.cloneNode(true);
          let i2 = e2.getAttribute("id");
          i2 = i2 ? `${i2}--clone` : `clone-${this.fancybox.id}-${t2.index}`, e2.setAttribute("id", i2);
        } else {
          const t3 = document.createElement("div");
          t3.classList.add("fancybox-placeholder"), e2.parentNode.insertBefore(t3, e2), e2.$placeHolder = t3;
        }
        this.fancybox.setContent(t2, e2);
      } else
        this.fancybox.setError(t2, "{{ELEMENT_NOT_FOUND}}");
    }
    loadAjaxContent(t2) {
      const e2 = this.fancybox, i2 = new XMLHttpRequest();
      e2.showLoading(t2), i2.onreadystatechange = function() {
        i2.readyState === XMLHttpRequest.DONE && e2.state === "ready" && (e2.hideLoading(t2), i2.status === 200 ? e2.setContent(t2, i2.responseText) : e2.setError(t2, i2.status === 404 ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"));
      };
      const s2 = t2.ajax || null;
      i2.open(s2 ? "POST" : "GET", t2.src), i2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i2.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i2.send(s2), t2.xhr = i2;
    }
    loadIframeContent(t2) {
      const e2 = this.fancybox, i2 = document.createElement("iframe");
      if (i2.className = "fancybox__iframe", i2.setAttribute("id", `fancybox__iframe_${e2.id}_${t2.index}`), i2.setAttribute("allow", "autoplay; fullscreen"), i2.setAttribute("scrolling", "auto"), t2.$iframe = i2, t2.type !== "iframe" || t2.preload === false)
        return i2.setAttribute("src", t2.src), this.fancybox.setContent(t2, i2), void this.resizeIframe(t2);
      e2.showLoading(t2);
      const s2 = document.createElement("div");
      s2.style.visibility = "hidden", this.fancybox.setContent(t2, s2), s2.appendChild(i2), i2.onerror = () => {
        e2.setError(t2, "{{IFRAME_ERROR}}");
      }, i2.onload = () => {
        e2.hideLoading(t2);
        let s3 = false;
        i2.isReady || (i2.isReady = true, s3 = true), i2.src.length && (i2.parentNode.style.visibility = "", this.resizeIframe(t2), s3 && e2.revealContent(t2));
      }, i2.setAttribute("src", t2.src);
    }
    setAspectRatio(t2) {
      const e2 = t2.$content, i2 = t2.ratio;
      if (!e2)
        return;
      let s2 = t2._width, o2 = t2._height;
      if (i2 || s2 && o2) {
        Object.assign(e2.style, { width: s2 && o2 ? "100%" : "", height: s2 && o2 ? "100%" : "", maxWidth: "", maxHeight: "" });
        let t3 = e2.offsetWidth, n2 = e2.offsetHeight;
        if (s2 = s2 || t3, o2 = o2 || n2, s2 > t3 || o2 > n2) {
          let e3 = Math.min(t3 / s2, n2 / o2);
          s2 *= e3, o2 *= e3;
        }
        Math.abs(s2 / o2 - i2) > 0.01 && (i2 < s2 / o2 ? s2 = o2 * i2 : o2 = s2 / i2), Object.assign(e2.style, { width: `${s2}px`, height: `${o2}px` });
      }
    }
    resizeIframe(t2) {
      const e2 = t2.$iframe;
      if (!e2)
        return;
      let i2 = t2._width || 0, s2 = t2._height || 0;
      i2 && s2 && (t2.autoSize = false);
      const o2 = e2.parentNode, n2 = o2 && o2.style;
      if (t2.preload !== false && t2.autoSize !== false && n2)
        try {
          const t3 = window.getComputedStyle(o2), a2 = parseFloat(t3.paddingLeft) + parseFloat(t3.paddingRight), r2 = parseFloat(t3.paddingTop) + parseFloat(t3.paddingBottom), h2 = e2.contentWindow.document, l2 = h2.getElementsByTagName("html")[0], c2 = h2.body;
          n2.width = "", c2.style.overflow = "hidden", i2 = i2 || l2.scrollWidth + a2, n2.width = `${i2}px`, c2.style.overflow = "", n2.flex = "0 0 auto", n2.height = `${c2.scrollHeight}px`, s2 = l2.scrollHeight + r2;
        } catch (t3) {
        }
      if (i2 || s2) {
        const t3 = { flex: "0 1 auto" };
        i2 && (t3.width = `${i2}px`), s2 && (t3.height = `${s2}px`), Object.assign(n2, t3);
      }
    }
    onRefresh(t2, e2) {
      e2.slides.forEach((t3) => {
        t3.$el && (t3.$iframe && this.resizeIframe(t3), t3.ratio && this.setAspectRatio(t3));
      });
    }
    setContent(t2) {
      if (t2 && !t2.isDom) {
        switch (t2.type) {
          case "html":
            this.fancybox.setContent(t2, t2.src);
            break;
          case "html5video":
            this.fancybox.setContent(t2, this.fancybox.option("Html.html5video.tpl").replace(/\{\{src\}\}/gi, t2.src).replace("{{format}}", t2.format || t2.html5video && t2.html5video.format || "").replace("{{poster}}", t2.poster || t2.thumb || ""));
            break;
          case "inline":
          case "clone":
            this.loadInlineContent(t2);
            break;
          case "ajax":
            this.loadAjaxContent(t2);
            break;
          case "pdf":
          case "video":
          case "map":
            t2.preload = false;
          case "iframe":
            this.loadIframeContent(t2);
        }
        t2.ratio && this.setAspectRatio(t2);
      }
    }
    onSelectSlide(t2, e2, i2) {
      t2.state === "ready" && this.playVideo(i2);
    }
    playVideo(t2) {
      if (t2.type === "html5video" && t2.video.autoplay)
        try {
          const e3 = t2.$el.querySelector("video");
          if (e3) {
            const t3 = e3.play();
            t3 !== void 0 && t3.then(() => {
            }).catch((t4) => {
              e3.muted = true, e3.play();
            });
          }
        } catch (t3) {
        }
      if (t2.type !== "video" || !t2.$iframe || !t2.$iframe.contentWindow)
        return;
      const e2 = () => {
        if (t2.state === "done" && t2.$iframe && t2.$iframe.contentWindow) {
          let e3;
          if (t2.$iframe.isReady)
            return t2.video && t2.video.autoplay && (e3 = t2.vendor == "youtube" ? { event: "command", func: "playVideo" } : { method: "play", value: "true" }), void (e3 && t2.$iframe.contentWindow.postMessage(JSON.stringify(e3), "*"));
          t2.vendor === "youtube" && (e3 = { event: "listening", id: t2.$iframe.getAttribute("id") }, t2.$iframe.contentWindow.postMessage(JSON.stringify(e3), "*"));
        }
        t2.poller = setTimeout(e2, 250);
      };
      e2();
    }
    onUnselectSlide(t2, e2, i2) {
      if (i2.type === "html5video") {
        try {
          i2.$el.querySelector("video").pause();
        } catch (t3) {
        }
        return;
      }
      let s2 = false;
      i2.vendor == "vimeo" ? s2 = { method: "pause", value: "true" } : i2.vendor === "youtube" && (s2 = { event: "command", func: "pauseVideo" }), s2 && i2.$iframe && i2.$iframe.contentWindow && i2.$iframe.contentWindow.postMessage(JSON.stringify(s2), "*"), clearTimeout(i2.poller);
    }
    onRemoveSlide(t2, e2, i2) {
      i2.xhr && (i2.xhr.abort(), i2.xhr = null), i2.$iframe && (i2.$iframe.onload = i2.$iframe.onerror = null, i2.$iframe.src = "//about:blank", i2.$iframe = null);
      const s2 = i2.$content;
      i2.type === "inline" && s2 && (s2.classList.remove("fancybox__content"), s2.style.display !== "none" && (s2.style.display = "none")), i2.$closeButton && (i2.$closeButton.remove(), i2.$closeButton = null);
      const o2 = s2 && s2.$placeHolder;
      o2 && (o2.parentNode.insertBefore(s2, o2), o2.remove(), s2.$placeHolder = null);
    }
    onMessage(t2) {
      try {
        let e2 = JSON.parse(t2.data);
        if (t2.origin === "https://player.vimeo.com") {
          if (e2.event === "ready")
            for (let e3 of document.getElementsByClassName("fancybox__iframe"))
              e3.contentWindow === t2.source && (e3.isReady = 1);
        } else
          t2.origin === "https://www.youtube-nocookie.com" && e2.event === "onReady" && (document.getElementById(e2.id).isReady = 1);
      } catch (t3) {
      }
    }
    attach() {
      this.fancybox.on(this.events), window.addEventListener("message", this.onMessage, false);
    }
    detach() {
      this.fancybox.off(this.events), window.removeEventListener("message", this.onMessage, false);
    }
  };
  E.defaults = S;
  var P = class {
    constructor(t2) {
      this.fancybox = t2;
      for (const t3 of ["onReady", "onClosing", "onDone", "onPageChange", "onCreateSlide", "onRemoveSlide", "onImageStatusChange"])
        this[t3] = this[t3].bind(this);
      this.events = { ready: this.onReady, closing: this.onClosing, done: this.onDone, "Carousel.change": this.onPageChange, "Carousel.createSlide": this.onCreateSlide, "Carousel.removeSlide": this.onRemoveSlide };
    }
    onReady() {
      this.fancybox.Carousel.slides.forEach((t2) => {
        t2.$el && this.setContent(t2);
      });
    }
    onDone(t2, e2) {
      this.handleCursor(e2);
    }
    onClosing(t2) {
      clearTimeout(this.clickTimer), this.clickTimer = null, t2.Carousel.slides.forEach((t3) => {
        t3.$image && (t3.state = "destroy"), t3.Panzoom && t3.Panzoom.detachEvents();
      }), this.fancybox.state === "closing" && this.canZoom(t2.getSlide()) && this.zoomOut();
    }
    onCreateSlide(t2, e2, i2) {
      this.fancybox.state === "ready" && this.setContent(i2);
    }
    onRemoveSlide(t2, e2, i2) {
      i2.$image && (i2.$el.classList.remove(t2.option("Image.canZoomInClass")), i2.$image.remove(), i2.$image = null), i2.Panzoom && (i2.Panzoom.destroy(), i2.Panzoom = null), i2.$el && i2.$el.dataset && delete i2.$el.dataset.imageFit;
    }
    setContent(t2) {
      if (t2.isDom || t2.html || t2.type && t2.type !== "image")
        return;
      if (t2.$image)
        return;
      t2.type = "image", t2.state = "loading";
      const e2 = document.createElement("div");
      e2.style.visibility = "hidden";
      const i2 = document.createElement("img");
      i2.addEventListener("load", (e3) => {
        e3.stopImmediatePropagation(), this.onImageStatusChange(t2);
      }), i2.addEventListener("error", () => {
        this.onImageStatusChange(t2);
      }), i2.src = t2.src, i2.alt = "", i2.draggable = false, i2.classList.add("fancybox__image"), t2.srcset && i2.setAttribute("srcset", t2.srcset), t2.sizes && i2.setAttribute("sizes", t2.sizes), t2.$image = i2;
      const s2 = this.fancybox.option("Image.wrap");
      if (s2) {
        const o2 = document.createElement("div");
        o2.classList.add(typeof s2 == "string" ? s2 : "fancybox__image-wrap"), o2.appendChild(i2), e2.appendChild(o2), t2.$wrap = o2;
      } else
        e2.appendChild(i2);
      t2.$el.dataset.imageFit = this.fancybox.option("Image.fit"), this.fancybox.setContent(t2, e2), i2.complete || i2.error ? this.onImageStatusChange(t2) : this.fancybox.showLoading(t2);
    }
    onImageStatusChange(t2) {
      const e2 = t2.$image;
      e2 && t2.state === "loading" && (e2.complete && e2.naturalWidth && e2.naturalHeight ? (this.fancybox.hideLoading(t2), this.fancybox.option("Image.fit") === "contain" && this.initSlidePanzoom(t2), t2.$el.addEventListener("wheel", (e3) => this.onWheel(t2, e3), { passive: false }), t2.$content.addEventListener("click", (e3) => this.onClick(t2, e3), { passive: false }), this.revealContent(t2)) : this.fancybox.setError(t2, "{{IMAGE_ERROR}}"));
    }
    initSlidePanzoom(t2) {
      t2.Panzoom || (t2.Panzoom = new d(t2.$el, e(true, this.fancybox.option("Image.Panzoom", {}), { viewport: t2.$wrap, content: t2.$image, width: t2._width, height: t2._height, wrapInner: false, textSelection: true, touch: this.fancybox.option("Image.touch"), panOnlyZoomed: true, click: false, wheel: false })), t2.Panzoom.on("startAnimation", () => {
        this.fancybox.trigger("Image.startAnimation", t2);
      }), t2.Panzoom.on("endAnimation", () => {
        t2.state === "zoomIn" && this.fancybox.done(t2), this.handleCursor(t2), this.fancybox.trigger("Image.endAnimation", t2);
      }), t2.Panzoom.on("afterUpdate", () => {
        this.handleCursor(t2), this.fancybox.trigger("Image.afterUpdate", t2);
      }));
    }
    revealContent(t2) {
      this.fancybox.Carousel.prevPage === null && t2.index === this.fancybox.options.startIndex && this.canZoom(t2) ? this.zoomIn() : this.fancybox.revealContent(t2);
    }
    getZoomInfo(t2) {
      const e2 = t2.$thumb.getBoundingClientRect(), i2 = e2.width, s2 = e2.height, o2 = t2.$content.getBoundingClientRect(), n2 = o2.width, a2 = o2.height, r2 = o2.top - e2.top, h2 = o2.left - e2.left;
      let l2 = this.fancybox.option("Image.zoomOpacity");
      return l2 === "auto" && (l2 = Math.abs(i2 / s2 - n2 / a2) > 0.1), { top: r2, left: h2, scale: n2 && i2 ? i2 / n2 : 1, opacity: l2 };
    }
    canZoom(t2) {
      const e2 = this.fancybox, i2 = e2.$container;
      if (window.visualViewport && window.visualViewport.scale !== 1)
        return false;
      if (t2.Panzoom && !t2.Panzoom.content.width)
        return false;
      if (!e2.option("Image.zoom") || e2.option("Image.fit") !== "contain")
        return false;
      const s2 = t2.$thumb;
      if (!s2 || t2.state === "loading")
        return false;
      i2.classList.add("fancybox__no-click");
      const o2 = s2.getBoundingClientRect();
      let n2;
      if (this.fancybox.option("Image.ignoreCoveredThumbnail")) {
        const t3 = document.elementFromPoint(o2.left + 1, o2.top + 1) === s2, e3 = document.elementFromPoint(o2.right - 1, o2.bottom - 1) === s2;
        n2 = t3 && e3;
      } else
        n2 = document.elementFromPoint(o2.left + 0.5 * o2.width, o2.top + 0.5 * o2.height) === s2;
      return i2.classList.remove("fancybox__no-click"), n2;
    }
    zoomIn() {
      const t2 = this.fancybox, e2 = t2.getSlide(), i2 = e2.Panzoom, { top: s2, left: o2, scale: n2, opacity: a2 } = this.getZoomInfo(e2);
      t2.trigger("reveal", e2), i2.panTo({ x: -1 * o2, y: -1 * s2, scale: n2, friction: 0, ignoreBounds: true }), e2.$content.style.visibility = "", e2.state = "zoomIn", a2 === true && i2.on("afterTransform", (t3) => {
        e2.state !== "zoomIn" && e2.state !== "zoomOut" || (t3.$content.style.opacity = Math.min(1, 1 - (1 - t3.content.scale) / (1 - n2)));
      }), i2.panTo({ x: 0, y: 0, scale: 1, friction: this.fancybox.option("Image.zoomFriction") });
    }
    zoomOut() {
      const t2 = this.fancybox, e2 = t2.getSlide(), i2 = e2.Panzoom;
      if (!i2)
        return;
      e2.state = "zoomOut", t2.state = "customClosing", e2.$caption && (e2.$caption.style.visibility = "hidden");
      let s2 = this.fancybox.option("Image.zoomFriction");
      const o2 = (t3) => {
        const { top: o3, left: n2, scale: a2, opacity: r2 } = this.getZoomInfo(e2);
        t3 || r2 || (s2 *= 0.82), i2.panTo({ x: -1 * n2, y: -1 * o3, scale: a2, friction: s2, ignoreBounds: true }), s2 *= 0.98;
      };
      window.addEventListener("scroll", o2), i2.once("endAnimation", () => {
        window.removeEventListener("scroll", o2), t2.destroy();
      }), o2();
    }
    handleCursor(t2) {
      if (t2.type !== "image" || !t2.$el)
        return;
      const e2 = t2.Panzoom, i2 = this.fancybox.option("Image.click", false, t2), s2 = this.fancybox.option("Image.touch"), o2 = t2.$el.classList, n2 = this.fancybox.option("Image.canZoomInClass"), a2 = this.fancybox.option("Image.canZoomOutClass");
      if (o2.remove(a2), o2.remove(n2), e2 && i2 === "toggleZoom") {
        e2 && e2.content.scale === 1 && e2.option("maxScale") - e2.content.scale > 0.01 ? o2.add(n2) : e2.content.scale > 1 && !s2 && o2.add(a2);
      } else
        i2 === "close" && o2.add(a2);
    }
    onWheel(t2, e2) {
      if (this.fancybox.state === "ready" && this.fancybox.trigger("Image.wheel", e2) !== false)
        switch (this.fancybox.option("Image.wheel")) {
          case "zoom":
            t2.state === "done" && t2.Panzoom && t2.Panzoom.zoomWithWheel(e2);
            break;
          case "close":
            this.fancybox.close();
            break;
          case "slide":
            this.fancybox[e2.deltaY < 0 ? "prev" : "next"]();
        }
    }
    onClick(t2, e2) {
      if (this.fancybox.state !== "ready")
        return;
      const i2 = t2.Panzoom;
      if (i2 && (i2.dragPosition.midPoint || i2.dragOffset.x !== 0 || i2.dragOffset.y !== 0 || i2.dragOffset.scale !== 1))
        return;
      if (this.fancybox.Carousel.Panzoom.lockAxis)
        return false;
      const s2 = (i3) => {
        switch (i3) {
          case "toggleZoom":
            e2.stopPropagation(), t2.Panzoom && t2.Panzoom.zoomWithClick(e2);
            break;
          case "close":
            this.fancybox.close();
            break;
          case "next":
            e2.stopPropagation(), this.fancybox.next();
        }
      }, o2 = this.fancybox.option("Image.click"), n2 = this.fancybox.option("Image.doubleClick");
      n2 ? this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null, s2(n2)) : this.clickTimer = setTimeout(() => {
        this.clickTimer = null, s2(o2);
      }, 300) : s2(o2);
    }
    onPageChange(t2, e2) {
      const i2 = t2.getSlide();
      e2.slides.forEach((t3) => {
        t3.Panzoom && t3.state === "done" && t3.index !== i2.index && t3.Panzoom.panTo({ x: 0, y: 0, scale: 1, friction: 0.8 });
      });
    }
    attach() {
      this.fancybox.on(this.events);
    }
    detach() {
      this.fancybox.off(this.events);
    }
  };
  P.defaults = { canZoomInClass: "can-zoom_in", canZoomOutClass: "can-zoom_out", zoom: true, zoomOpacity: "auto", zoomFriction: 0.82, ignoreCoveredThumbnail: false, touch: true, click: "toggleZoom", doubleClick: null, wheel: "zoom", fit: "contain", wrap: false, Panzoom: { ratio: 1 } };
  var L = class {
    constructor(t2) {
      this.fancybox = t2;
      for (const t3 of ["onChange", "onClosing"])
        this[t3] = this[t3].bind(this);
      this.events = { initCarousel: this.onChange, "Carousel.change": this.onChange, closing: this.onClosing }, this.hasCreatedHistory = false, this.origHash = "", this.timer = null;
    }
    onChange(t2) {
      const e2 = t2.Carousel;
      this.timer && clearTimeout(this.timer);
      const i2 = e2.prevPage === null, s2 = t2.getSlide(), o2 = new URL(document.URL).hash;
      let n2 = false;
      if (s2.slug)
        n2 = "#" + s2.slug;
      else {
        const i3 = s2.$trigger && s2.$trigger.dataset, o3 = t2.option("slug") || i3 && i3.fancybox;
        o3 && o3.length && o3 !== "true" && (n2 = "#" + o3 + (e2.slides.length > 1 ? "-" + (s2.index + 1) : ""));
      }
      i2 && (this.origHash = o2 !== n2 ? o2 : ""), n2 && o2 !== n2 && (this.timer = setTimeout(() => {
        try {
          window.history[i2 ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + n2), i2 && (this.hasCreatedHistory = true);
        } catch (t3) {
        }
      }, 300));
    }
    onClosing() {
      if (this.timer && clearTimeout(this.timer), this.hasSilentClose !== true)
        try {
          return void window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash || ""));
        } catch (t2) {
        }
    }
    attach(t2) {
      t2.on(this.events);
    }
    detach(t2) {
      t2.off(this.events);
    }
    static startFromUrl() {
      const t2 = L.Fancybox;
      if (!t2 || t2.getInstance() || t2.defaults.Hash === false)
        return;
      const { hash: e2, slug: i2, index: s2 } = L.getParsedURL();
      if (!i2)
        return;
      let o2 = document.querySelector(`[data-slug="${e2}"]`);
      if (o2 && o2.dispatchEvent(new CustomEvent("click", { bubbles: true, cancelable: true })), t2.getInstance())
        return;
      const n2 = document.querySelectorAll(`[data-fancybox="${i2}"]`);
      n2.length && (s2 === null && n2.length === 1 ? o2 = n2[0] : s2 && (o2 = n2[s2 - 1]), o2 && o2.dispatchEvent(new CustomEvent("click", { bubbles: true, cancelable: true })));
    }
    static onHashChange() {
      const { slug: t2, index: e2 } = L.getParsedURL(), i2 = L.Fancybox, s2 = i2 && i2.getInstance();
      if (s2 && s2.plugins.Hash) {
        if (t2) {
          const i3 = s2.Carousel;
          if (t2 === s2.option("slug"))
            return i3.slideTo(e2 - 1);
          for (let e3 of i3.slides)
            if (e3.slug && e3.slug === t2)
              return i3.slideTo(e3.index);
          const o2 = s2.getSlide(), n2 = o2.$trigger && o2.$trigger.dataset;
          if (n2 && n2.fancybox === t2)
            return i3.slideTo(e2 - 1);
        }
        s2.plugins.Hash.hasSilentClose = true, s2.close();
      }
      L.startFromUrl();
    }
    static create(t2) {
      function e2() {
        window.addEventListener("hashchange", L.onHashChange, false), L.startFromUrl();
      }
      L.Fancybox = t2, v && window.requestAnimationFrame(() => {
        /complete|interactive|loaded/.test(document.readyState) ? e2() : document.addEventListener("DOMContentLoaded", e2);
      });
    }
    static destroy() {
      window.removeEventListener("hashchange", L.onHashChange, false);
    }
    static getParsedURL() {
      const t2 = window.location.hash.substr(1), e2 = t2.split("-"), i2 = e2.length > 1 && /^\+?\d+$/.test(e2[e2.length - 1]) && parseInt(e2.pop(-1), 10) || null;
      return { hash: t2, slug: e2.join("-"), index: i2 };
    }
  };
  var T = { pageXOffset: 0, pageYOffset: 0, element: () => document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement, activate(t2) {
    T.pageXOffset = window.pageXOffset, T.pageYOffset = window.pageYOffset, t2.requestFullscreen ? t2.requestFullscreen() : t2.mozRequestFullScreen ? t2.mozRequestFullScreen() : t2.webkitRequestFullscreen ? t2.webkitRequestFullscreen() : t2.msRequestFullscreen && t2.msRequestFullscreen();
  }, deactivate() {
    document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
  } };
  var _ = class {
    constructor(t2) {
      this.fancybox = t2, this.active = false, this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }
    isActive() {
      return this.active;
    }
    setTimer() {
      if (!this.active || this.timer)
        return;
      const t2 = this.fancybox.option("slideshow.delay", 3e3);
      this.timer = setTimeout(() => {
        this.timer = null, this.fancybox.option("infinite") || this.fancybox.getSlide().index !== this.fancybox.Carousel.slides.length - 1 ? this.fancybox.next() : this.fancybox.jumpTo(0, { friction: 0 });
      }, t2);
      let e2 = this.$progress;
      e2 || (e2 = document.createElement("div"), e2.classList.add("fancybox__progress"), this.fancybox.$carousel.parentNode.insertBefore(e2, this.fancybox.$carousel), this.$progress = e2, e2.offsetHeight), e2.style.transitionDuration = `${t2}ms`, e2.style.transform = "scaleX(1)";
    }
    clearTimer() {
      clearTimeout(this.timer), this.timer = null, this.$progress && (this.$progress.style.transitionDuration = "", this.$progress.style.transform = "", this.$progress.offsetHeight);
    }
    activate() {
      this.active || (this.active = true, this.fancybox.$container.classList.add("has-slideshow"), this.fancybox.getSlide().state === "done" && this.setTimer(), document.addEventListener("visibilitychange", this.handleVisibilityChange, false));
    }
    handleVisibilityChange() {
      this.deactivate();
    }
    deactivate() {
      this.active = false, this.clearTimer(), this.fancybox.$container.classList.remove("has-slideshow"), document.removeEventListener("visibilitychange", this.handleVisibilityChange, false);
    }
    toggle() {
      this.active ? this.deactivate() : this.fancybox.Carousel.slides.length > 1 && this.activate();
    }
  };
  var A = { display: ["counter", "zoom", "slideshow", "fullscreen", "thumbs", "close"], autoEnable: true, items: { counter: { position: "left", type: "div", class: "fancybox__counter", html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>', attr: { tabindex: -1 } }, prev: { type: "button", class: "fancybox__button--prev", label: "PREV", html: '<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>', attr: { "data-fancybox-prev": "" } }, next: { type: "button", class: "fancybox__button--next", label: "NEXT", html: '<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>', attr: { "data-fancybox-next": "" } }, fullscreen: { type: "button", class: "fancybox__button--fullscreen", label: "TOGGLE_FULLSCREEN", html: '<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>', click: function(t2) {
    t2.preventDefault(), T.element() ? T.deactivate() : T.activate(this.fancybox.$container);
  } }, slideshow: { type: "button", class: "fancybox__button--slideshow", label: "TOGGLE_SLIDESHOW", html: '<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>', click: function(t2) {
    t2.preventDefault(), this.Slideshow.toggle();
  } }, zoom: { type: "button", class: "fancybox__button--zoom", label: "TOGGLE_ZOOM", html: '<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>', click: function(t2) {
    t2.preventDefault();
    const e2 = this.fancybox.getSlide().Panzoom;
    e2 && e2.toggleZoom();
  } }, download: { type: "link", label: "DOWNLOAD", class: "fancybox__button--download", html: '<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>', click: function(t2) {
    t2.stopPropagation();
  } }, thumbs: { type: "button", label: "TOGGLE_THUMBS", class: "fancybox__button--thumbs", html: '<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>', click: function(t2) {
    t2.stopPropagation();
    const e2 = this.fancybox.plugins.Thumbs;
    e2 && e2.toggle();
  } }, close: { type: "button", label: "CLOSE", class: "fancybox__button--close", html: '<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>', attr: { "data-fancybox-close": "", tabindex: 0 } } } };
  var z = class {
    constructor(t2) {
      this.fancybox = t2, this.$container = null, this.state = "init";
      for (const t3 of ["onInit", "onPrepare", "onDone", "onKeydown", "onClosing", "onChange", "onSettle", "onRefresh"])
        this[t3] = this[t3].bind(this);
      this.events = { init: this.onInit, prepare: this.onPrepare, done: this.onDone, keydown: this.onKeydown, closing: this.onClosing, "Carousel.change": this.onChange, "Carousel.settle": this.onSettle, "Carousel.Panzoom.touchStart": () => this.onRefresh(), "Image.startAnimation": (t3, e2) => this.onRefresh(e2), "Image.afterUpdate": (t3, e2) => this.onRefresh(e2) };
    }
    onInit() {
      if (this.fancybox.option("Toolbar.autoEnable")) {
        let t2 = false;
        for (const e2 of this.fancybox.items)
          if (e2.type === "image") {
            t2 = true;
            break;
          }
        if (!t2)
          return void (this.state = "disabled");
      }
      for (const e2 of this.fancybox.option("Toolbar.display")) {
        if ((t(e2) ? e2.id : e2) === "close") {
          this.fancybox.options.closeButton = false;
          break;
        }
      }
    }
    onPrepare() {
      const t2 = this.fancybox;
      if (this.state === "init" && (this.build(), this.update(), this.Slideshow = new _(t2), !t2.Carousel.prevPage && (t2.option("slideshow.autoStart") && this.Slideshow.activate(), t2.option("fullscreen.autoStart") && !T.element())))
        try {
          T.activate(t2.$container);
        } catch (t3) {
        }
    }
    onFsChange() {
      window.scrollTo(T.pageXOffset, T.pageYOffset);
    }
    onSettle() {
      const t2 = this.fancybox, e2 = this.Slideshow;
      e2 && e2.isActive() && (t2.getSlide().index !== t2.Carousel.slides.length - 1 || t2.option("infinite") ? t2.getSlide().state === "done" && e2.setTimer() : e2.deactivate());
    }
    onChange() {
      this.update(), this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer();
    }
    onDone(t2, e2) {
      const i2 = this.Slideshow;
      e2.index === t2.getSlide().index && (this.update(), i2 && i2.isActive() && (t2.option("infinite") || e2.index !== t2.Carousel.slides.length - 1 ? i2.setTimer() : i2.deactivate()));
    }
    onRefresh(t2) {
      t2 && t2.index !== this.fancybox.getSlide().index || (this.update(), !this.Slideshow || !this.Slideshow.isActive() || t2 && t2.state !== "done" || this.Slideshow.deactivate());
    }
    onKeydown(t2, e2, i2) {
      e2 === " " && this.Slideshow && (this.Slideshow.toggle(), i2.preventDefault());
    }
    onClosing() {
      this.Slideshow && this.Slideshow.deactivate(), document.removeEventListener("fullscreenchange", this.onFsChange);
    }
    createElement(t2) {
      let e2;
      t2.type === "div" ? e2 = document.createElement("div") : (e2 = document.createElement(t2.type === "link" ? "a" : "button"), e2.classList.add("carousel__button")), e2.innerHTML = t2.html, e2.setAttribute("tabindex", t2.tabindex || 0), t2.class && e2.classList.add(...t2.class.split(" "));
      for (const i3 in t2.attr)
        e2.setAttribute(i3, t2.attr[i3]);
      t2.label && e2.setAttribute("title", this.fancybox.localize(`{{${t2.label}}}`)), t2.click && e2.addEventListener("click", t2.click.bind(this)), t2.id === "prev" && e2.setAttribute("data-fancybox-prev", ""), t2.id === "next" && e2.setAttribute("data-fancybox-next", "");
      const i2 = e2.querySelector("svg");
      return i2 && (i2.setAttribute("role", "img"), i2.setAttribute("tabindex", "-1"), i2.setAttribute("xmlns", "http://www.w3.org/2000/svg")), e2;
    }
    build() {
      this.cleanup();
      const i2 = this.fancybox.option("Toolbar.items"), s2 = [{ position: "left", items: [] }, { position: "center", items: [] }, { position: "right", items: [] }], o2 = this.fancybox.plugins.Thumbs;
      for (const n3 of this.fancybox.option("Toolbar.display")) {
        let a2, r2;
        if (t(n3) ? (a2 = n3.id, r2 = e({}, i2[a2], n3)) : (a2 = n3, r2 = i2[a2]), ["counter", "next", "prev", "slideshow"].includes(a2) && this.fancybox.items.length < 2)
          continue;
        if (a2 === "fullscreen") {
          if (!document.fullscreenEnabled || window.fullScreen)
            continue;
          document.addEventListener("fullscreenchange", this.onFsChange);
        }
        if (a2 === "thumbs" && (!o2 || o2.state === "disabled"))
          continue;
        if (!r2)
          continue;
        let h2 = r2.position || "right", l2 = s2.find((t2) => t2.position === h2);
        l2 && l2.items.push(r2);
      }
      const n2 = document.createElement("div");
      n2.classList.add("fancybox__toolbar");
      for (const t2 of s2)
        if (t2.items.length) {
          const e2 = document.createElement("div");
          e2.classList.add("fancybox__toolbar__items"), e2.classList.add(`fancybox__toolbar__items--${t2.position}`);
          for (const i3 of t2.items)
            e2.appendChild(this.createElement(i3));
          n2.appendChild(e2);
        }
      this.fancybox.$carousel.parentNode.insertBefore(n2, this.fancybox.$carousel), this.$container = n2;
    }
    update() {
      const t2 = this.fancybox.getSlide(), e2 = t2.index, i2 = this.fancybox.items.length, s2 = t2.downloadSrc || (t2.type !== "image" || t2.error ? null : t2.src);
      for (const t3 of this.fancybox.$container.querySelectorAll("a.fancybox__button--download"))
        s2 ? (t3.removeAttribute("disabled"), t3.removeAttribute("tabindex"), t3.setAttribute("href", s2), t3.setAttribute("download", s2), t3.setAttribute("target", "_blank")) : (t3.setAttribute("disabled", ""), t3.setAttribute("tabindex", -1), t3.removeAttribute("href"), t3.removeAttribute("download"));
      const o2 = t2.Panzoom, n2 = o2 && o2.option("maxScale") > o2.option("baseScale");
      for (const t3 of this.fancybox.$container.querySelectorAll(".fancybox__button--zoom"))
        n2 ? t3.removeAttribute("disabled") : t3.setAttribute("disabled", "");
      for (const e3 of this.fancybox.$container.querySelectorAll("[data-fancybox-index]"))
        e3.innerHTML = t2.index + 1;
      for (const t3 of this.fancybox.$container.querySelectorAll("[data-fancybox-count]"))
        t3.innerHTML = i2;
      if (!this.fancybox.option("infinite")) {
        for (const t3 of this.fancybox.$container.querySelectorAll("[data-fancybox-prev]"))
          e2 === 0 ? t3.setAttribute("disabled", "") : t3.removeAttribute("disabled");
        for (const t3 of this.fancybox.$container.querySelectorAll("[data-fancybox-next]"))
          e2 === i2 - 1 ? t3.setAttribute("disabled", "") : t3.removeAttribute("disabled");
      }
    }
    cleanup() {
      this.Slideshow && this.Slideshow.isActive() && this.Slideshow.clearTimer(), this.$container && this.$container.remove(), this.$container = null;
    }
    attach() {
      this.fancybox.on(this.events);
    }
    detach() {
      this.fancybox.off(this.events), this.cleanup();
    }
  };
  z.defaults = A;
  var k = { ScrollLock: class {
    constructor(t2) {
      this.fancybox = t2, this.viewport = null, this.pendingUpdate = null;
      for (const t3 of ["onReady", "onResize", "onTouchstart", "onTouchmove"])
        this[t3] = this[t3].bind(this);
    }
    onReady() {
      const t2 = window.visualViewport;
      t2 && (this.viewport = t2, this.startY = 0, t2.addEventListener("resize", this.onResize), this.updateViewport()), window.addEventListener("touchstart", this.onTouchstart, { passive: false }), window.addEventListener("touchmove", this.onTouchmove, { passive: false }), window.addEventListener("wheel", this.onWheel, { passive: false });
    }
    onResize() {
      this.updateViewport();
    }
    updateViewport() {
      const t2 = this.fancybox, e2 = this.viewport, i2 = e2.scale || 1, s2 = t2.$container;
      if (!s2)
        return;
      let o2 = "", n2 = "", a2 = "";
      i2 - 1 > 0.1 && (o2 = e2.width * i2 + "px", n2 = e2.height * i2 + "px", a2 = `translate3d(${e2.offsetLeft}px, ${e2.offsetTop}px, 0) scale(${1 / i2})`), s2.style.width = o2, s2.style.height = n2, s2.style.transform = a2;
    }
    onTouchstart(t2) {
      this.startY = t2.touches ? t2.touches[0].screenY : t2.screenY;
    }
    onTouchmove(t2) {
      const e2 = this.startY, i2 = window.innerWidth / window.document.documentElement.clientWidth;
      if (!t2.cancelable)
        return;
      if (t2.touches.length > 1 || i2 !== 1)
        return;
      const o2 = s(t2.composedPath()[0]);
      if (!o2)
        return void t2.preventDefault();
      const n2 = window.getComputedStyle(o2), a2 = parseInt(n2.getPropertyValue("height"), 10), r2 = t2.touches ? t2.touches[0].screenY : t2.screenY, h2 = e2 <= r2 && o2.scrollTop === 0, l2 = e2 >= r2 && o2.scrollHeight - o2.scrollTop === a2;
      (h2 || l2) && t2.preventDefault();
    }
    onWheel(t2) {
      s(t2.composedPath()[0]) || t2.preventDefault();
    }
    cleanup() {
      this.pendingUpdate && (cancelAnimationFrame(this.pendingUpdate), this.pendingUpdate = null);
      const t2 = this.viewport;
      t2 && (t2.removeEventListener("resize", this.onResize), this.viewport = null), window.removeEventListener("touchstart", this.onTouchstart, false), window.removeEventListener("touchmove", this.onTouchmove, false), window.removeEventListener("wheel", this.onWheel, { passive: false });
    }
    attach() {
      this.fancybox.on("initLayout", this.onReady);
    }
    detach() {
      this.fancybox.off("initLayout", this.onReady), this.cleanup();
    }
  }, Thumbs: $, Html: E, Toolbar: z, Image: P, Hash: L };
  var O = { startIndex: 0, preload: 1, infinite: true, showClass: "fancybox-zoomInUp", hideClass: "fancybox-fadeOut", animated: true, hideScrollbar: true, parentEl: null, mainClass: null, autoFocus: true, trapFocus: true, placeFocusBack: true, click: "close", closeButton: "inside", dragToClose: true, keyboard: { Escape: "close", Delete: "close", Backspace: "close", PageUp: "next", PageDown: "prev", ArrowUp: "next", ArrowDown: "prev", ArrowRight: "next", ArrowLeft: "prev" }, template: { closeButton: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>', spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>', main: null }, l10n: { CLOSE: "Close", NEXT: "Next", PREV: "Previous", MODAL: "You can close this modal content with the ESC key", ERROR: "Something Went Wrong, Please Try Again Later", IMAGE_ERROR: "Image Not Found", ELEMENT_NOT_FOUND: "HTML Element Not Found", AJAX_NOT_FOUND: "Error Loading AJAX : Not Found", AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden", IFRAME_ERROR: "Error Loading Page", TOGGLE_ZOOM: "Toggle zoom level", TOGGLE_THUMBS: "Toggle thumbnails", TOGGLE_SLIDESHOW: "Toggle slideshow", TOGGLE_FULLSCREEN: "Toggle full-screen mode", DOWNLOAD: "Download" } };
  var M = new Map();
  var I = 0;
  var F = class extends l {
    constructor(t2, i2 = {}) {
      t2 = t2.map((t3) => (t3.width && (t3._width = t3.width), t3.height && (t3._height = t3.height), t3)), super(e(true, {}, O, i2)), this.bindHandlers(), this.state = "init", this.setItems(t2), this.attachPlugins(F.Plugins), this.trigger("init"), this.option("hideScrollbar") === true && this.hideScrollbar(), this.initLayout(), this.initCarousel(), this.attachEvents(), M.set(this.id, this), this.trigger("prepare"), this.state = "ready", this.trigger("ready"), this.$container.setAttribute("aria-hidden", "false"), this.option("trapFocus") && this.focus();
    }
    option(t2, ...e2) {
      const i2 = this.getSlide();
      let s2 = i2 ? i2[t2] : void 0;
      return s2 !== void 0 ? (typeof s2 == "function" && (s2 = s2.call(this, this, ...e2)), s2) : super.option(t2, ...e2);
    }
    bindHandlers() {
      for (const t2 of ["onMousedown", "onKeydown", "onClick", "onFocus", "onCreateSlide", "onSettle", "onTouchMove", "onTouchEnd", "onTransform"])
        this[t2] = this[t2].bind(this);
    }
    attachEvents() {
      document.addEventListener("mousedown", this.onMousedown), document.addEventListener("keydown", this.onKeydown, true), this.option("trapFocus") && document.addEventListener("focus", this.onFocus, true), this.$container.addEventListener("click", this.onClick);
    }
    detachEvents() {
      document.removeEventListener("mousedown", this.onMousedown), document.removeEventListener("keydown", this.onKeydown, true), document.removeEventListener("focus", this.onFocus, true), this.$container.removeEventListener("click", this.onClick);
    }
    initLayout() {
      this.$root = this.option("parentEl") || document.body;
      let t2 = this.option("template.main");
      t2 && (this.$root.insertAdjacentHTML("beforeend", this.localize(t2)), this.$container = this.$root.querySelector(".fancybox__container")), this.$container || (this.$container = document.createElement("div"), this.$root.appendChild(this.$container)), this.$container.onscroll = () => (this.$container.scrollLeft = 0, false), Object.entries({ class: "fancybox__container", role: "dialog", tabIndex: "-1", "aria-modal": "true", "aria-hidden": "true", "aria-label": this.localize("{{MODAL}}") }).forEach((t3) => this.$container.setAttribute(...t3)), this.option("animated") && this.$container.classList.add("is-animated"), this.$backdrop = this.$container.querySelector(".fancybox__backdrop"), this.$backdrop || (this.$backdrop = document.createElement("div"), this.$backdrop.classList.add("fancybox__backdrop"), this.$container.appendChild(this.$backdrop)), this.$carousel = this.$container.querySelector(".fancybox__carousel"), this.$carousel || (this.$carousel = document.createElement("div"), this.$carousel.classList.add("fancybox__carousel"), this.$container.appendChild(this.$carousel)), this.$container.Fancybox = this, this.id = this.$container.getAttribute("id"), this.id || (this.id = this.options.id || ++I, this.$container.setAttribute("id", "fancybox-" + this.id));
      const e2 = this.option("mainClass");
      return e2 && this.$container.classList.add(...e2.split(" ")), document.documentElement.classList.add("with-fancybox"), this.trigger("initLayout"), this;
    }
    setItems(t2) {
      const e2 = [];
      for (const i2 of t2) {
        const t3 = i2.$trigger;
        if (t3) {
          const e3 = t3.dataset || {};
          i2.src = e3.src || t3.getAttribute("href") || i2.src, i2.type = e3.type || i2.type, !i2.src && t3 instanceof HTMLImageElement && (i2.src = t3.currentSrc || i2.$trigger.src);
        }
        let s2 = i2.$thumb;
        if (!s2) {
          let t4 = i2.$trigger && i2.$trigger.origTarget;
          t4 && (s2 = t4 instanceof HTMLImageElement ? t4 : t4.querySelector("img:not([aria-hidden])")), !s2 && i2.$trigger && (s2 = i2.$trigger instanceof HTMLImageElement ? i2.$trigger : i2.$trigger.querySelector("img:not([aria-hidden])"));
        }
        i2.$thumb = s2 || null;
        let o2 = i2.thumb;
        !o2 && s2 && (o2 = s2.currentSrc || s2.src, !o2 && s2.dataset && (o2 = s2.dataset.lazySrc || s2.dataset.src)), o2 || i2.type !== "image" || (o2 = i2.src), i2.thumb = o2 || null, i2.caption = i2.caption || "", e2.push(i2);
      }
      this.items = e2;
    }
    initCarousel() {
      return this.Carousel = new y(this.$carousel, e(true, {}, { prefix: "", classNames: { viewport: "fancybox__viewport", track: "fancybox__track", slide: "fancybox__slide" }, textSelection: true, preload: this.option("preload"), friction: 0.88, slides: this.items, initialPage: this.options.startIndex, slidesPerPage: 1, infiniteX: this.option("infinite"), infiniteY: true, l10n: this.option("l10n"), Dots: false, Navigation: { classNames: { main: "fancybox__nav", button: "carousel__button", next: "is-next", prev: "is-prev" } }, Panzoom: { textSelection: true, panOnlyZoomed: () => this.Carousel && this.Carousel.pages && this.Carousel.pages.length < 2 && !this.option("dragToClose"), lockAxis: () => {
        if (this.Carousel) {
          let t2 = "x";
          return this.option("dragToClose") && (t2 += "y"), t2;
        }
      } }, on: { "*": (t2, ...e2) => this.trigger(`Carousel.${t2}`, ...e2), init: (t2) => this.Carousel = t2, createSlide: this.onCreateSlide, settle: this.onSettle } }, this.option("Carousel"))), this.option("dragToClose") && this.Carousel.Panzoom.on({ touchMove: this.onTouchMove, afterTransform: this.onTransform, touchEnd: this.onTouchEnd }), this.trigger("initCarousel"), this;
    }
    onCreateSlide(t2, e2) {
      let i2 = e2.caption || "";
      if (typeof this.options.caption == "function" && (i2 = this.options.caption.call(this, this, this.Carousel, e2)), typeof i2 == "string" && i2.length) {
        const t3 = document.createElement("div"), s2 = `fancybox__caption_${this.id}_${e2.index}`;
        t3.className = "fancybox__caption", t3.innerHTML = i2, t3.setAttribute("id", s2), e2.$caption = e2.$el.appendChild(t3), e2.$el.classList.add("has-caption"), e2.$el.setAttribute("aria-labelledby", s2);
      }
    }
    onSettle() {
      this.option("autoFocus") && this.focus();
    }
    onFocus(t2) {
      this.focus(t2);
    }
    onClick(t2) {
      if (t2.defaultPrevented)
        return;
      let e2 = t2.composedPath()[0];
      if (e2.matches("[data-fancybox-close]"))
        return t2.preventDefault(), void F.close(false, t2);
      if (e2.matches("[data-fancybox-next]"))
        return t2.preventDefault(), void F.next();
      if (e2.matches("[data-fancybox-prev]"))
        return t2.preventDefault(), void F.prev();
      if (e2.matches(x) || document.activeElement.blur(), e2.closest(".fancybox__content"))
        return;
      if (getSelection().toString().length)
        return;
      if (this.trigger("click", t2) === false)
        return;
      switch (this.option("click")) {
        case "close":
          this.close();
          break;
        case "next":
          this.next();
      }
    }
    onTouchMove() {
      const t2 = this.getSlide().Panzoom;
      return !t2 || t2.content.scale === 1;
    }
    onTouchEnd(t2) {
      const e2 = t2.dragOffset.y;
      Math.abs(e2) >= 150 || Math.abs(e2) >= 35 && t2.dragOffset.time < 350 ? (this.option("hideClass") && (this.getSlide().hideClass = "fancybox-throwOut" + (t2.content.y < 0 ? "Up" : "Down")), this.close()) : t2.lockAxis === "y" && t2.panTo({ y: 0 });
    }
    onTransform(t2) {
      if (this.$backdrop) {
        const e2 = Math.abs(t2.content.y), i2 = e2 < 1 ? "" : Math.max(0.33, Math.min(1, 1 - e2 / t2.content.fitHeight * 1.5));
        this.$container.style.setProperty("--fancybox-ts", i2 ? "0s" : ""), this.$container.style.setProperty("--fancybox-opacity", i2);
      }
    }
    onMousedown() {
      this.state === "ready" && document.body.classList.add("is-using-mouse");
    }
    onKeydown(t2) {
      if (F.getInstance().id !== this.id)
        return;
      document.body.classList.remove("is-using-mouse");
      const e2 = t2.key, i2 = this.option("keyboard");
      if (!i2 || t2.ctrlKey || t2.altKey || t2.shiftKey)
        return;
      const s2 = t2.composedPath()[0], o2 = document.activeElement && document.activeElement.classList, n2 = o2 && o2.contains("carousel__button");
      if (e2 !== "Escape" && !n2) {
        if (t2.target.isContentEditable || ["BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(s2.nodeName) !== -1)
          return;
      }
      if (this.trigger("keydown", e2, t2) === false)
        return;
      const a2 = i2[e2];
      typeof this[a2] == "function" && this[a2]();
    }
    getSlide() {
      const t2 = this.Carousel;
      if (!t2)
        return null;
      const e2 = t2.page === null ? t2.option("initialPage") : t2.page, i2 = t2.pages || [];
      return i2.length && i2[e2] ? i2[e2].slides[0] : null;
    }
    focus(t2) {
      if (F.ignoreFocusChange)
        return;
      if (["init", "closing", "customClosing", "destroy"].indexOf(this.state) > -1)
        return;
      const e2 = this.$container, i2 = this.getSlide(), s2 = i2.state === "done" ? i2.$el : null;
      if (s2 && s2.contains(document.activeElement))
        return;
      t2 && t2.preventDefault(), F.ignoreFocusChange = true;
      const o2 = Array.from(e2.querySelectorAll(x));
      let n2, a2 = [];
      for (let t3 of o2) {
        const e3 = t3.offsetParent, i3 = s2 && s2.contains(t3), o3 = !this.Carousel.$viewport.contains(t3);
        e3 && (i3 || o3) ? (a2.push(t3), t3.dataset.origTabindex !== void 0 && (t3.tabIndex = t3.dataset.origTabindex, t3.removeAttribute("data-orig-tabindex")), (t3.hasAttribute("autoFocus") || !n2 && i3 && !t3.classList.contains("carousel__button")) && (n2 = t3)) : (t3.dataset.origTabindex = t3.dataset.origTabindex === void 0 ? t3.getAttribute("tabindex") : t3.dataset.origTabindex, t3.tabIndex = -1);
      }
      t2 ? a2.indexOf(t2.target) > -1 ? this.lastFocus = t2.target : this.lastFocus === e2 ? w(a2[a2.length - 1]) : w(e2) : this.option("autoFocus") && n2 ? w(n2) : a2.indexOf(document.activeElement) < 0 && w(e2), this.lastFocus = document.activeElement, F.ignoreFocusChange = false;
    }
    hideScrollbar() {
      if (!v)
        return;
      const t2 = window.innerWidth - document.documentElement.getBoundingClientRect().width, e2 = "fancybox-style-noscroll";
      let i2 = document.getElementById(e2);
      i2 || t2 > 0 && (i2 = document.createElement("style"), i2.id = e2, i2.type = "text/css", i2.innerHTML = `.compensate-for-scrollbar {padding-right: ${t2}px;}`, document.getElementsByTagName("head")[0].appendChild(i2), document.body.classList.add("compensate-for-scrollbar"));
    }
    revealScrollbar() {
      document.body.classList.remove("compensate-for-scrollbar");
      const t2 = document.getElementById("fancybox-style-noscroll");
      t2 && t2.remove();
    }
    clearContent(t2) {
      this.Carousel.trigger("removeSlide", t2), t2.$content && (t2.$content.remove(), t2.$content = null), t2.$closeButton && (t2.$closeButton.remove(), t2.$closeButton = null), t2._className && t2.$el.classList.remove(t2._className);
    }
    setContent(t2, e2, i2 = {}) {
      let s2;
      const o2 = t2.$el;
      if (e2 instanceof HTMLElement)
        ["img", "iframe", "video", "audio"].indexOf(e2.nodeName.toLowerCase()) > -1 ? (s2 = document.createElement("div"), s2.appendChild(e2)) : s2 = e2;
      else {
        const t3 = document.createRange().createContextualFragment(e2);
        s2 = document.createElement("div"), s2.appendChild(t3);
      }
      if (t2.filter && !t2.error && (s2 = s2.querySelector(t2.filter)), s2 instanceof Element)
        return t2._className = `has-${i2.suffix || t2.type || "unknown"}`, o2.classList.add(t2._className), s2.classList.add("fancybox__content"), s2.style.display !== "none" && getComputedStyle(s2).getPropertyValue("display") !== "none" || (s2.style.display = t2.display || this.option("defaultDisplay") || "flex"), t2.id && s2.setAttribute("id", t2.id), t2.$content = s2, o2.prepend(s2), this.manageCloseButton(t2), t2.state !== "loading" && this.revealContent(t2), s2;
      this.setError(t2, "{{ELEMENT_NOT_FOUND}}");
    }
    manageCloseButton(t2) {
      const e2 = t2.closeButton === void 0 ? this.option("closeButton") : t2.closeButton;
      if (!e2 || e2 === "top" && this.$closeButton)
        return;
      const i2 = document.createElement("button");
      i2.classList.add("carousel__button", "is-close"), i2.setAttribute("title", this.options.l10n.CLOSE), i2.innerHTML = this.option("template.closeButton"), i2.addEventListener("click", (t3) => this.close(t3)), e2 === "inside" ? (t2.$closeButton && t2.$closeButton.remove(), t2.$closeButton = t2.$content.appendChild(i2)) : this.$closeButton = this.$container.insertBefore(i2, this.$container.firstChild);
    }
    revealContent(t2) {
      this.trigger("reveal", t2), t2.$content.style.visibility = "";
      let e2 = false;
      t2.error || t2.state === "loading" || this.Carousel.prevPage !== null || t2.index !== this.options.startIndex || (e2 = t2.showClass === void 0 ? this.option("showClass") : t2.showClass), e2 ? (t2.state = "animating", this.animateCSS(t2.$content, e2, () => {
        this.done(t2);
      })) : this.done(t2);
    }
    animateCSS(t2, e2, i2) {
      if (t2 && t2.dispatchEvent(new CustomEvent("animationend", { bubbles: true, cancelable: true })), !t2 || !e2)
        return void (typeof i2 == "function" && i2());
      const s2 = function(o2) {
        o2.currentTarget === this && (t2.removeEventListener("animationend", s2), i2 && i2(), t2.classList.remove(e2));
      };
      t2.addEventListener("animationend", s2), t2.classList.add(e2);
    }
    done(t2) {
      t2.state = "done", this.trigger("done", t2);
      const e2 = this.getSlide();
      e2 && t2.index === e2.index && this.option("autoFocus") && this.focus();
    }
    setError(t2, e2) {
      t2.error = e2, this.hideLoading(t2), this.clearContent(t2);
      const i2 = document.createElement("div");
      i2.classList.add("fancybox-error"), i2.innerHTML = this.localize(e2 || "<p>{{ERROR}}</p>"), this.setContent(t2, i2, { suffix: "error" });
    }
    showLoading(t2) {
      t2.state = "loading", t2.$el.classList.add("is-loading");
      let e2 = t2.$el.querySelector(".fancybox__spinner");
      e2 || (e2 = document.createElement("div"), e2.classList.add("fancybox__spinner"), e2.innerHTML = this.option("template.spinner"), e2.addEventListener("click", () => {
        this.Carousel.Panzoom.velocity || this.close();
      }), t2.$el.prepend(e2));
    }
    hideLoading(t2) {
      const e2 = t2.$el && t2.$el.querySelector(".fancybox__spinner");
      e2 && (e2.remove(), t2.$el.classList.remove("is-loading")), t2.state === "loading" && (this.trigger("load", t2), t2.state = "ready");
    }
    next() {
      const t2 = this.Carousel;
      t2 && t2.pages.length > 1 && t2.slideNext();
    }
    prev() {
      const t2 = this.Carousel;
      t2 && t2.pages.length > 1 && t2.slidePrev();
    }
    jumpTo(...t2) {
      this.Carousel && this.Carousel.slideTo(...t2);
    }
    close(t2) {
      if (t2 && t2.preventDefault(), ["closing", "customClosing", "destroy"].includes(this.state))
        return;
      if (this.trigger("shouldClose", t2) === false)
        return;
      if (this.state = "closing", this.Carousel.Panzoom.destroy(), this.detachEvents(), this.trigger("closing", t2), this.state === "destroy")
        return;
      this.$container.setAttribute("aria-hidden", "true"), this.$container.classList.add("is-closing");
      const e2 = this.getSlide();
      if (this.Carousel.slides.forEach((t3) => {
        t3.$content && t3.index !== e2.index && this.Carousel.trigger("removeSlide", t3);
      }), this.state === "closing") {
        const t3 = e2.hideClass === void 0 ? this.option("hideClass") : e2.hideClass;
        this.animateCSS(e2.$content, t3, () => {
          this.destroy();
        }, true);
      }
    }
    destroy() {
      if (this.state === "destroy")
        return;
      this.state = "destroy", this.trigger("destroy");
      const t2 = this.option("placeFocusBack") ? this.getSlide().$trigger : null;
      this.Carousel.destroy(), this.detachPlugins(), this.Carousel = null, this.options = {}, this.events = {}, this.$container.remove(), this.$container = this.$backdrop = this.$carousel = null, t2 && w(t2), M.delete(this.id);
      const e2 = F.getInstance();
      e2 ? e2.focus() : (document.documentElement.classList.remove("with-fancybox"), document.body.classList.remove("is-using-mouse"), this.revealScrollbar());
    }
    static show(t2, e2 = {}) {
      return new F(t2, e2);
    }
    static fromEvent(t2, e2 = {}) {
      if (t2.defaultPrevented)
        return;
      if (t2.button && t2.button !== 0)
        return;
      if (t2.ctrlKey || t2.metaKey || t2.shiftKey)
        return;
      const i2 = t2.composedPath()[0];
      let s2, o2, n2, a2 = i2;
      if ((a2.matches("[data-fancybox-trigger]") || (a2 = a2.closest("[data-fancybox-trigger]"))) && (s2 = a2 && a2.dataset && a2.dataset.fancyboxTrigger), s2) {
        const t3 = document.querySelectorAll(`[data-fancybox="${s2}"]`), e3 = parseInt(a2.dataset.fancyboxIndex, 10) || 0;
        a2 = t3.length ? t3[e3] : a2;
      }
      a2 || (a2 = i2), Array.from(F.openers.keys()).reverse().some((e3) => {
        n2 = a2;
        let i3 = false;
        try {
          n2 instanceof Element && (typeof e3 == "string" || e3 instanceof String) && (i3 = n2.matches(e3) || (n2 = n2.closest(e3)));
        } catch (t3) {
        }
        return !!i3 && (t2.preventDefault(), o2 = e3, true);
      });
      let r2 = false;
      if (o2) {
        e2.event = t2, e2.target = n2, n2.origTarget = i2, r2 = F.fromOpener(o2, e2);
        const s3 = F.getInstance();
        s3 && s3.state === "ready" && t2.detail && document.body.classList.add("is-using-mouse");
      }
      return r2;
    }
    static fromOpener(t2, i2 = {}) {
      let s2 = [], o2 = i2.startIndex || 0, n2 = i2.target || null;
      const a2 = (i2 = e({}, i2, F.openers.get(t2))).groupAll !== void 0 && i2.groupAll, r2 = i2.groupAttr === void 0 ? "data-fancybox" : i2.groupAttr, h2 = r2 && n2 ? n2.getAttribute(`${r2}`) : "";
      if (!n2 || h2 || a2) {
        const e2 = i2.root || (n2 ? n2.getRootNode() : document.body);
        s2 = [].slice.call(e2.querySelectorAll(t2));
      }
      if (n2 && !a2 && (s2 = h2 ? s2.filter((t3) => t3.getAttribute(`${r2}`) === h2) : [n2]), !s2.length)
        return false;
      const l2 = F.getInstance();
      return !(l2 && s2.indexOf(l2.options.$trigger) > -1) && (o2 = n2 ? s2.indexOf(n2) : o2, s2 = s2.map(function(t3) {
        const e2 = ["false", "0", "no", "null", "undefined"], i3 = ["true", "1", "yes"], s3 = Object.assign({}, t3.dataset), o3 = {};
        for (let [t4, n3] of Object.entries(s3))
          if (t4 !== "fancybox")
            if (t4 === "width" || t4 === "height")
              o3[`_${t4}`] = n3;
            else if (typeof n3 == "string" || n3 instanceof String)
              if (e2.indexOf(n3) > -1)
                o3[t4] = false;
              else if (i3.indexOf(o3[t4]) > -1)
                o3[t4] = true;
              else
                try {
                  o3[t4] = JSON.parse(n3);
                } catch (e3) {
                  o3[t4] = n3;
                }
            else
              o3[t4] = n3;
        return t3 instanceof Element && (o3.$trigger = t3), o3;
      }), new F(s2, e({}, i2, { startIndex: o2, $trigger: n2 })));
    }
    static bind(t2, e2 = {}) {
      function i2() {
        document.body.addEventListener("click", F.fromEvent, false);
      }
      v && (F.openers.size || (/complete|interactive|loaded/.test(document.readyState) ? i2() : document.addEventListener("DOMContentLoaded", i2)), F.openers.set(t2, e2));
    }
    static unbind(t2) {
      F.openers.delete(t2), F.openers.size || F.destroy();
    }
    static destroy() {
      let t2;
      for (; t2 = F.getInstance(); )
        t2.destroy();
      F.openers = new Map(), document.body.removeEventListener("click", F.fromEvent, false);
    }
    static getInstance(t2) {
      if (t2)
        return M.get(t2);
      return Array.from(M.values()).reverse().find((t3) => !["closing", "customClosing", "destroy"].includes(t3.state) && t3) || null;
    }
    static close(t2 = true, e2) {
      if (t2)
        for (const t3 of M.values())
          t3.close(e2);
      else {
        const t3 = F.getInstance();
        t3 && t3.close(e2);
      }
    }
    static next() {
      const t2 = F.getInstance();
      t2 && t2.next();
    }
    static prev() {
      const t2 = F.getInstance();
      t2 && t2.prev();
    }
  };
  F.version = "4.0.27", F.defaults = O, F.openers = new Map(), F.Plugins = k, F.bind("[data-fancybox]");
  for (const [t2, e2] of Object.entries(F.Plugins || {}))
    typeof e2.create == "function" && e2.create(F);

  // resources/js/app.js
  new import_air_datepicker.default("#rangeDateFrom");
  new import_air_datepicker.default("#rangeDateTo");
  var mainCarousel = new y(document.querySelector("#slider"), {
    Dots: false
  });
  var thumbCarousel = new y(document.querySelector("#thumbs"), {
    Sync: {
      target: mainCarousel,
      friction: 0
    },
    Dots: false,
    Navigation: false,
    center: true,
    infinite: false
  });
  (function($2) {
    $2(".burger").click(function() {
      $2("#burger").toggleClass("active");
    });
    $2(".accordeon_headline").on("click", function() {
      $2(this).parent().toggleClass("open");
    });
  })(jQuery);
})();
