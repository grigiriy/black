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

  // node_modules/imask/esm/_rollupPluginBabelHelpers-b054ecd2.js
  function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    Object.defineProperty(subClass, "prototype", {
      writable: false
    });
    if (superClass)
      _setPrototypeOf(subClass, superClass);
  }
  function _getPrototypeOf(o2) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o3) {
      return o3.__proto__ || Object.getPrototypeOf(o3);
    };
    return _getPrototypeOf(o2);
  }
  function _setPrototypeOf(o2, p2) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
      o3.__proto__ = p3;
      return o3;
    };
    return _setPrototypeOf(o2, p2);
  }
  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct)
      return false;
    if (Reflect.construct.sham)
      return false;
    if (typeof Proxy === "function")
      return true;
    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
      return true;
    } catch (e2) {
      return false;
    }
  }
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i2;
    for (i2 = 0; i2 < sourceKeys.length; i2++) {
      key = sourceKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null)
      return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i2;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
        key = sourceSymbolKeys[i2];
        if (excluded.indexOf(key) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key))
          continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _possibleConstructorReturn(self2, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized(self2);
  }
  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn(this, result);
    };
  }
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null)
        break;
    }
    return object;
  }
  function _get() {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get2(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base)
          return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) {
          return desc.get.call(arguments.length < 3 ? target : receiver);
        }
        return desc.value;
      };
    }
    return _get.apply(this, arguments);
  }
  function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
      set = Reflect.set;
    } else {
      set = function set2(target2, property2, value2, receiver2) {
        var base = _superPropBase(target2, property2);
        var desc;
        if (base) {
          desc = Object.getOwnPropertyDescriptor(base, property2);
          if (desc.set) {
            desc.set.call(receiver2, value2);
            return true;
          } else if (!desc.writable) {
            return false;
          }
        }
        desc = Object.getOwnPropertyDescriptor(receiver2, property2);
        if (desc) {
          if (!desc.writable) {
            return false;
          }
          desc.value = value2;
          Object.defineProperty(receiver2, property2, desc);
        } else {
          _defineProperty(receiver2, property2, value2);
        }
        return true;
      };
    }
    return set(target, property, value, receiver);
  }
  function _set(target, property, value, receiver, isStrict) {
    var s2 = set(target, property, value, receiver || target);
    if (!s2 && isStrict) {
      throw new Error("failed to set property");
    }
    return value;
  }
  function _slicedToArray(arr, i2) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _iterableToArrayLimit(arr, i2) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null)
      return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i2 && _arr.length === i2)
          break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null)
          _i["return"]();
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
  function _unsupportedIterableToArray(o2, minLen) {
    if (!o2)
      return;
    if (typeof o2 === "string")
      return _arrayLikeToArray(o2, minLen);
    var n2 = Object.prototype.toString.call(o2).slice(8, -1);
    if (n2 === "Object" && o2.constructor)
      n2 = o2.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o2);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray(o2, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
      arr2[i2] = arr[i2];
    return arr2;
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  // node_modules/imask/esm/core/change-details.js
  var ChangeDetails = /* @__PURE__ */ function() {
    function ChangeDetails2(details) {
      _classCallCheck(this, ChangeDetails2);
      Object.assign(this, {
        inserted: "",
        rawInserted: "",
        skip: false,
        tailShift: 0
      }, details);
    }
    _createClass(ChangeDetails2, [{
      key: "aggregate",
      value: function aggregate(details) {
        this.rawInserted += details.rawInserted;
        this.skip = this.skip || details.skip;
        this.inserted += details.inserted;
        this.tailShift += details.tailShift;
        return this;
      }
    }, {
      key: "offset",
      get: function get() {
        return this.tailShift + this.inserted.length;
      }
    }]);
    return ChangeDetails2;
  }();

  // node_modules/imask/esm/core/utils.js
  function isString(str) {
    return typeof str === "string" || str instanceof String;
  }
  var DIRECTION = {
    NONE: "NONE",
    LEFT: "LEFT",
    FORCE_LEFT: "FORCE_LEFT",
    RIGHT: "RIGHT",
    FORCE_RIGHT: "FORCE_RIGHT"
  };
  function forceDirection(direction) {
    switch (direction) {
      case DIRECTION.LEFT:
        return DIRECTION.FORCE_LEFT;
      case DIRECTION.RIGHT:
        return DIRECTION.FORCE_RIGHT;
      default:
        return direction;
    }
  }
  function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
  }
  function normalizePrepare(prep) {
    return Array.isArray(prep) ? prep : [prep, new ChangeDetails()];
  }
  function objectIncludes(b2, a2) {
    if (a2 === b2)
      return true;
    var arrA = Array.isArray(a2), arrB = Array.isArray(b2), i2;
    if (arrA && arrB) {
      if (a2.length != b2.length)
        return false;
      for (i2 = 0; i2 < a2.length; i2++) {
        if (!objectIncludes(a2[i2], b2[i2]))
          return false;
      }
      return true;
    }
    if (arrA != arrB)
      return false;
    if (a2 && b2 && _typeof(a2) === "object" && _typeof(b2) === "object") {
      var dateA = a2 instanceof Date, dateB = b2 instanceof Date;
      if (dateA && dateB)
        return a2.getTime() == b2.getTime();
      if (dateA != dateB)
        return false;
      var regexpA = a2 instanceof RegExp, regexpB = b2 instanceof RegExp;
      if (regexpA && regexpB)
        return a2.toString() == b2.toString();
      if (regexpA != regexpB)
        return false;
      var keys = Object.keys(a2);
      for (i2 = 0; i2 < keys.length; i2++) {
        if (!Object.prototype.hasOwnProperty.call(b2, keys[i2]))
          return false;
      }
      for (i2 = 0; i2 < keys.length; i2++) {
        if (!objectIncludes(b2[keys[i2]], a2[keys[i2]]))
          return false;
      }
      return true;
    } else if (a2 && b2 && typeof a2 === "function" && typeof b2 === "function") {
      return a2.toString() === b2.toString();
    }
    return false;
  }

  // node_modules/imask/esm/core/action-details.js
  var ActionDetails = /* @__PURE__ */ function() {
    function ActionDetails2(value, cursorPos, oldValue, oldSelection) {
      _classCallCheck(this, ActionDetails2);
      this.value = value;
      this.cursorPos = cursorPos;
      this.oldValue = oldValue;
      this.oldSelection = oldSelection;
      while (this.value.slice(0, this.startChangePos) !== this.oldValue.slice(0, this.startChangePos)) {
        --this.oldSelection.start;
      }
    }
    _createClass(ActionDetails2, [{
      key: "startChangePos",
      get: function get() {
        return Math.min(this.cursorPos, this.oldSelection.start);
      }
    }, {
      key: "insertedCount",
      get: function get() {
        return this.cursorPos - this.startChangePos;
      }
    }, {
      key: "inserted",
      get: function get() {
        return this.value.substr(this.startChangePos, this.insertedCount);
      }
    }, {
      key: "removedCount",
      get: function get() {
        return Math.max(this.oldSelection.end - this.startChangePos || this.oldValue.length - this.value.length, 0);
      }
    }, {
      key: "removed",
      get: function get() {
        return this.oldValue.substr(this.startChangePos, this.removedCount);
      }
    }, {
      key: "head",
      get: function get() {
        return this.value.substring(0, this.startChangePos);
      }
    }, {
      key: "tail",
      get: function get() {
        return this.value.substring(this.startChangePos + this.insertedCount);
      }
    }, {
      key: "removeDirection",
      get: function get() {
        if (!this.removedCount || this.insertedCount)
          return DIRECTION.NONE;
        return (this.oldSelection.end === this.cursorPos || this.oldSelection.start === this.cursorPos) && this.oldSelection.end === this.oldSelection.start ? DIRECTION.RIGHT : DIRECTION.LEFT;
      }
    }]);
    return ActionDetails2;
  }();

  // node_modules/imask/esm/core/continuous-tail-details.js
  var ContinuousTailDetails = /* @__PURE__ */ function() {
    function ContinuousTailDetails2() {
      var value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      var from = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      var stop = arguments.length > 2 ? arguments[2] : void 0;
      _classCallCheck(this, ContinuousTailDetails2);
      this.value = value;
      this.from = from;
      this.stop = stop;
    }
    _createClass(ContinuousTailDetails2, [{
      key: "toString",
      value: function toString() {
        return this.value;
      }
    }, {
      key: "extend",
      value: function extend(tail) {
        this.value += String(tail);
      }
    }, {
      key: "appendTo",
      value: function appendTo(masked) {
        return masked.append(this.toString(), {
          tail: true
        }).aggregate(masked._appendPlaceholder());
      }
    }, {
      key: "state",
      get: function get() {
        return {
          value: this.value,
          from: this.from,
          stop: this.stop
        };
      },
      set: function set2(state) {
        Object.assign(this, state);
      }
    }, {
      key: "unshift",
      value: function unshift(beforePos) {
        if (!this.value.length || beforePos != null && this.from >= beforePos)
          return "";
        var shiftChar = this.value[0];
        this.value = this.value.slice(1);
        return shiftChar;
      }
    }, {
      key: "shift",
      value: function shift() {
        if (!this.value.length)
          return "";
        var shiftChar = this.value[this.value.length - 1];
        this.value = this.value.slice(0, -1);
        return shiftChar;
      }
    }]);
    return ContinuousTailDetails2;
  }();

  // node_modules/imask/esm/core/holder.js
  function IMask(el) {
    var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return new IMask.InputMask(el, opts);
  }

  // node_modules/imask/esm/masked/base.js
  var Masked = /* @__PURE__ */ function() {
    function Masked2(opts) {
      _classCallCheck(this, Masked2);
      this._value = "";
      this._update(Object.assign({}, Masked2.DEFAULTS, opts));
      this.isInitialized = true;
    }
    _createClass(Masked2, [{
      key: "updateOptions",
      value: function updateOptions(opts) {
        if (!Object.keys(opts).length)
          return;
        this.withValueRefresh(this._update.bind(this, opts));
      }
    }, {
      key: "_update",
      value: function _update(opts) {
        Object.assign(this, opts);
      }
    }, {
      key: "state",
      get: function get() {
        return {
          _value: this.value
        };
      },
      set: function set2(state) {
        this._value = state._value;
      }
    }, {
      key: "reset",
      value: function reset() {
        this._value = "";
      }
    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set2(value) {
        this.resolve(value);
      }
    }, {
      key: "resolve",
      value: function resolve(value) {
        this.reset();
        this.append(value, {
          input: true
        }, "");
        this.doCommit();
        return this.value;
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.value;
      },
      set: function set2(value) {
        this.reset();
        this.append(value, {}, "");
        this.doCommit();
      }
    }, {
      key: "typedValue",
      get: function get() {
        return this.doParse(this.value);
      },
      set: function set2(value) {
        this.value = this.doFormat(value);
      }
    }, {
      key: "rawInputValue",
      get: function get() {
        return this.extractInput(0, this.value.length, {
          raw: true
        });
      },
      set: function set2(value) {
        this.reset();
        this.append(value, {
          raw: true
        }, "");
        this.doCommit();
      }
    }, {
      key: "isComplete",
      get: function get() {
        return true;
      }
    }, {
      key: "isFilled",
      get: function get() {
        return this.isComplete;
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos, direction) {
        return cursorPos;
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
        return this.value.slice(fromPos, toPos);
      }
    }, {
      key: "extractTail",
      value: function extractTail() {
        var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
        return new ContinuousTailDetails(this.extractInput(fromPos, toPos), fromPos);
      }
    }, {
      key: "appendTail",
      value: function appendTail(tail) {
        if (isString(tail))
          tail = new ContinuousTailDetails(String(tail));
        return tail.appendTo(this);
      }
    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        if (!ch)
          return new ChangeDetails();
        this._value += ch;
        return new ChangeDetails({
          inserted: ch,
          rawInserted: ch
        });
      }
    }, {
      key: "_appendChar",
      value: function _appendChar(ch) {
        var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var checkTail = arguments.length > 2 ? arguments[2] : void 0;
        var consistentState = this.state;
        var details;
        var _normalizePrepare = normalizePrepare(this.doPrepare(ch, flags));
        var _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2);
        ch = _normalizePrepare2[0];
        details = _normalizePrepare2[1];
        details = details.aggregate(this._appendCharRaw(ch, flags));
        if (details.inserted) {
          var consistentTail;
          var appended = this.doValidate(flags) !== false;
          if (appended && checkTail != null) {
            var beforeTailState = this.state;
            if (this.overwrite === true) {
              consistentTail = checkTail.state;
              checkTail.unshift(this.value.length);
            }
            var tailDetails = this.appendTail(checkTail);
            appended = tailDetails.rawInserted === checkTail.toString();
            if (!(appended && tailDetails.inserted) && this.overwrite === "shift") {
              this.state = beforeTailState;
              consistentTail = checkTail.state;
              checkTail.shift();
              tailDetails = this.appendTail(checkTail);
              appended = tailDetails.rawInserted === checkTail.toString();
            }
            if (appended && tailDetails.inserted)
              this.state = beforeTailState;
          }
          if (!appended) {
            details = new ChangeDetails();
            this.state = consistentState;
            if (checkTail && consistentTail)
              checkTail.state = consistentTail;
          }
        }
        return details;
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        return new ChangeDetails();
      }
    }, {
      key: "_appendEager",
      value: function _appendEager() {
        return new ChangeDetails();
      }
    }, {
      key: "append",
      value: function append(str, flags, tail) {
        if (!isString(str))
          throw new Error("value should be string");
        var details = new ChangeDetails();
        var checkTail = isString(tail) ? new ContinuousTailDetails(String(tail)) : tail;
        if (flags && flags.tail)
          flags._beforeTailState = this.state;
        for (var ci = 0; ci < str.length; ++ci) {
          details.aggregate(this._appendChar(str[ci], flags, checkTail));
        }
        if (checkTail != null) {
          details.tailShift += this.appendTail(checkTail).tailShift;
        }
        if (this.eager && flags !== null && flags !== void 0 && flags.input && str) {
          details.aggregate(this._appendEager());
        }
        return details;
      }
    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
        this._value = this.value.slice(0, fromPos) + this.value.slice(toPos);
        return new ChangeDetails();
      }
    }, {
      key: "withValueRefresh",
      value: function withValueRefresh(fn) {
        if (this._refreshing || !this.isInitialized)
          return fn();
        this._refreshing = true;
        var rawInput = this.rawInputValue;
        var value = this.value;
        var ret = fn();
        this.rawInputValue = rawInput;
        if (this.value && this.value !== value && value.indexOf(this.value) === 0) {
          this.append(value.slice(this.value.length), {}, "");
        }
        delete this._refreshing;
        return ret;
      }
    }, {
      key: "runIsolated",
      value: function runIsolated(fn) {
        if (this._isolated || !this.isInitialized)
          return fn(this);
        this._isolated = true;
        var state = this.state;
        var ret = fn(this);
        this.state = state;
        delete this._isolated;
        return ret;
      }
    }, {
      key: "doPrepare",
      value: function doPrepare(str) {
        var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return this.prepare ? this.prepare(str, this, flags) : str;
      }
    }, {
      key: "doValidate",
      value: function doValidate(flags) {
        return (!this.validate || this.validate(this.value, this, flags)) && (!this.parent || this.parent.doValidate(flags));
      }
    }, {
      key: "doCommit",
      value: function doCommit() {
        if (this.commit)
          this.commit(this.value, this);
      }
    }, {
      key: "doFormat",
      value: function doFormat(value) {
        return this.format ? this.format(value, this) : value;
      }
    }, {
      key: "doParse",
      value: function doParse(str) {
        return this.parse ? this.parse(str, this) : str;
      }
    }, {
      key: "splice",
      value: function splice(start, deleteCount, inserted, removeDirection) {
        var tailPos = start + deleteCount;
        var tail = this.extractTail(tailPos);
        var oldRawValue;
        if (this.eager) {
          removeDirection = forceDirection(removeDirection);
          oldRawValue = this.extractInput(0, tailPos, {
            raw: true
          });
        }
        var startChangePos = this.nearestInputPos(start, deleteCount > 1 && start !== 0 && !this.eager ? DIRECTION.NONE : removeDirection);
        var details = new ChangeDetails({
          tailShift: startChangePos - start
        }).aggregate(this.remove(startChangePos));
        if (this.eager && removeDirection !== DIRECTION.NONE && oldRawValue === this.rawInputValue) {
          if (removeDirection === DIRECTION.FORCE_LEFT) {
            var valLength;
            while (oldRawValue === this.rawInputValue && (valLength = this.value.length)) {
              details.aggregate(new ChangeDetails({
                tailShift: -1
              })).aggregate(this.remove(valLength - 1));
            }
          } else if (removeDirection === DIRECTION.FORCE_RIGHT) {
            tail.unshift();
          }
        }
        return details.aggregate(this.append(inserted, {
          input: true
        }, tail));
      }
    }, {
      key: "maskEquals",
      value: function maskEquals(mask) {
        return this.mask === mask;
      }
    }]);
    return Masked2;
  }();
  Masked.DEFAULTS = {
    format: function format(v2) {
      return v2;
    },
    parse: function parse(v2) {
      return v2;
    }
  };
  IMask.Masked = Masked;

  // node_modules/imask/esm/masked/factory.js
  function maskedClass(mask) {
    if (mask == null) {
      throw new Error("mask property should be defined");
    }
    if (mask instanceof RegExp)
      return IMask.MaskedRegExp;
    if (isString(mask))
      return IMask.MaskedPattern;
    if (mask instanceof Date || mask === Date)
      return IMask.MaskedDate;
    if (mask instanceof Number || typeof mask === "number" || mask === Number)
      return IMask.MaskedNumber;
    if (Array.isArray(mask) || mask === Array)
      return IMask.MaskedDynamic;
    if (IMask.Masked && mask.prototype instanceof IMask.Masked)
      return mask;
    if (mask instanceof IMask.Masked)
      return mask.constructor;
    if (mask instanceof Function)
      return IMask.MaskedFunction;
    console.warn("Mask not found for mask", mask);
    return IMask.Masked;
  }
  function createMask(opts) {
    if (IMask.Masked && opts instanceof IMask.Masked)
      return opts;
    opts = Object.assign({}, opts);
    var mask = opts.mask;
    if (IMask.Masked && mask instanceof IMask.Masked)
      return mask;
    var MaskedClass = maskedClass(mask);
    if (!MaskedClass)
      throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");
    return new MaskedClass(opts);
  }
  IMask.createMask = createMask;

  // node_modules/imask/esm/masked/pattern/input-definition.js
  var _excluded = ["mask"];
  var DEFAULT_INPUT_DEFINITIONS = {
    "0": /\d/,
    "a": /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    "*": /./
  };
  var PatternInputDefinition = /* @__PURE__ */ function() {
    function PatternInputDefinition2(opts) {
      _classCallCheck(this, PatternInputDefinition2);
      var mask = opts.mask, blockOpts = _objectWithoutProperties(opts, _excluded);
      this.masked = createMask({
        mask
      });
      Object.assign(this, blockOpts);
    }
    _createClass(PatternInputDefinition2, [{
      key: "reset",
      value: function reset() {
        this.isFilled = false;
        this.masked.reset();
      }
    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
        if (fromPos === 0 && toPos >= 1) {
          this.isFilled = false;
          return this.masked.remove(fromPos, toPos);
        }
        return new ChangeDetails();
      }
    }, {
      key: "value",
      get: function get() {
        return this.masked.value || (this.isFilled && !this.isOptional ? this.placeholderChar : "");
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.masked.unmaskedValue;
      }
    }, {
      key: "isComplete",
      get: function get() {
        return Boolean(this.masked.value) || this.isOptional;
      }
    }, {
      key: "_appendChar",
      value: function _appendChar(ch) {
        var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (this.isFilled)
          return new ChangeDetails();
        var state = this.masked.state;
        var details = this.masked._appendChar(ch, flags);
        if (details.inserted && this.doValidate(flags) === false) {
          details.inserted = details.rawInserted = "";
          this.masked.state = state;
        }
        if (!details.inserted && !this.isOptional && !this.lazy && !flags.input) {
          details.inserted = this.placeholderChar;
        }
        details.skip = !details.inserted && !this.isOptional;
        this.isFilled = Boolean(details.inserted);
        return details;
      }
    }, {
      key: "append",
      value: function append() {
        var _this$masked;
        return (_this$masked = this.masked).append.apply(_this$masked, arguments);
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        var details = new ChangeDetails();
        if (this.isFilled || this.isOptional)
          return details;
        this.isFilled = true;
        details.inserted = this.placeholderChar;
        return details;
      }
    }, {
      key: "_appendEager",
      value: function _appendEager() {
        return new ChangeDetails();
      }
    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this$masked2;
        return (_this$masked2 = this.masked).extractTail.apply(_this$masked2, arguments);
      }
    }, {
      key: "appendTail",
      value: function appendTail() {
        var _this$masked3;
        return (_this$masked3 = this.masked).appendTail.apply(_this$masked3, arguments);
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
        var flags = arguments.length > 2 ? arguments[2] : void 0;
        return this.masked.extractInput(fromPos, toPos, flags);
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos) {
        var direction = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DIRECTION.NONE;
        var minPos = 0;
        var maxPos = this.value.length;
        var boundPos = Math.min(Math.max(cursorPos, minPos), maxPos);
        switch (direction) {
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            return this.isComplete ? boundPos : minPos;
          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
            return this.isComplete ? boundPos : maxPos;
          case DIRECTION.NONE:
          default:
            return boundPos;
        }
      }
    }, {
      key: "doValidate",
      value: function doValidate() {
        var _this$masked4, _this$parent;
        return (_this$masked4 = this.masked).doValidate.apply(_this$masked4, arguments) && (!this.parent || (_this$parent = this.parent).doValidate.apply(_this$parent, arguments));
      }
    }, {
      key: "doCommit",
      value: function doCommit() {
        this.masked.doCommit();
      }
    }, {
      key: "state",
      get: function get() {
        return {
          masked: this.masked.state,
          isFilled: this.isFilled
        };
      },
      set: function set2(state) {
        this.masked.state = state.masked;
        this.isFilled = state.isFilled;
      }
    }]);
    return PatternInputDefinition2;
  }();

  // node_modules/imask/esm/masked/pattern/fixed-definition.js
  var PatternFixedDefinition = /* @__PURE__ */ function() {
    function PatternFixedDefinition2(opts) {
      _classCallCheck(this, PatternFixedDefinition2);
      Object.assign(this, opts);
      this._value = "";
      this.isFixed = true;
    }
    _createClass(PatternFixedDefinition2, [{
      key: "value",
      get: function get() {
        return this._value;
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.isUnmasking ? this.value : "";
      }
    }, {
      key: "reset",
      value: function reset() {
        this._isRawInput = false;
        this._value = "";
      }
    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._value.length;
        this._value = this._value.slice(0, fromPos) + this._value.slice(toPos);
        if (!this._value)
          this._isRawInput = false;
        return new ChangeDetails();
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos) {
        var direction = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DIRECTION.NONE;
        var minPos = 0;
        var maxPos = this._value.length;
        switch (direction) {
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT:
            return minPos;
          case DIRECTION.NONE:
          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT:
          default:
            return maxPos;
        }
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._value.length;
        var flags = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        return flags.raw && this._isRawInput && this._value.slice(fromPos, toPos) || "";
      }
    }, {
      key: "isComplete",
      get: function get() {
        return true;
      }
    }, {
      key: "isFilled",
      get: function get() {
        return Boolean(this._value);
      }
    }, {
      key: "_appendChar",
      value: function _appendChar(ch) {
        var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var details = new ChangeDetails();
        if (this._value)
          return details;
        var appended = this.char === ch;
        var isResolved = appended && (this.isUnmasking || flags.input || flags.raw) && !this.eager && !flags.tail;
        if (isResolved)
          details.rawInserted = this.char;
        this._value = details.inserted = this.char;
        this._isRawInput = isResolved && (flags.raw || flags.input);
        return details;
      }
    }, {
      key: "_appendEager",
      value: function _appendEager() {
        return this._appendChar(this.char);
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        var details = new ChangeDetails();
        if (this._value)
          return details;
        this._value = details.inserted = this.char;
        return details;
      }
    }, {
      key: "extractTail",
      value: function extractTail() {
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
        return new ContinuousTailDetails("");
      }
    }, {
      key: "appendTail",
      value: function appendTail(tail) {
        if (isString(tail))
          tail = new ContinuousTailDetails(String(tail));
        return tail.appendTo(this);
      }
    }, {
      key: "append",
      value: function append(str, flags, tail) {
        var details = this._appendChar(str[0], flags);
        if (tail != null) {
          details.tailShift += this.appendTail(tail).tailShift;
        }
        return details;
      }
    }, {
      key: "doCommit",
      value: function doCommit() {
      }
    }, {
      key: "state",
      get: function get() {
        return {
          _value: this._value,
          _isRawInput: this._isRawInput
        };
      },
      set: function set2(state) {
        Object.assign(this, state);
      }
    }]);
    return PatternFixedDefinition2;
  }();

  // node_modules/imask/esm/masked/pattern/chunk-tail-details.js
  var _excluded2 = ["chunks"];
  var ChunksTailDetails = /* @__PURE__ */ function() {
    function ChunksTailDetails2() {
      var chunks = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      var from = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      _classCallCheck(this, ChunksTailDetails2);
      this.chunks = chunks;
      this.from = from;
    }
    _createClass(ChunksTailDetails2, [{
      key: "toString",
      value: function toString() {
        return this.chunks.map(String).join("");
      }
    }, {
      key: "extend",
      value: function extend(tailChunk) {
        if (!String(tailChunk))
          return;
        if (isString(tailChunk))
          tailChunk = new ContinuousTailDetails(String(tailChunk));
        var lastChunk = this.chunks[this.chunks.length - 1];
        var extendLast = lastChunk && (lastChunk.stop === tailChunk.stop || tailChunk.stop == null) && tailChunk.from === lastChunk.from + lastChunk.toString().length;
        if (tailChunk instanceof ContinuousTailDetails) {
          if (extendLast) {
            lastChunk.extend(tailChunk.toString());
          } else {
            this.chunks.push(tailChunk);
          }
        } else if (tailChunk instanceof ChunksTailDetails2) {
          if (tailChunk.stop == null) {
            var firstTailChunk;
            while (tailChunk.chunks.length && tailChunk.chunks[0].stop == null) {
              firstTailChunk = tailChunk.chunks.shift();
              firstTailChunk.from += tailChunk.from;
              this.extend(firstTailChunk);
            }
          }
          if (tailChunk.toString()) {
            tailChunk.stop = tailChunk.blockIndex;
            this.chunks.push(tailChunk);
          }
        }
      }
    }, {
      key: "appendTo",
      value: function appendTo(masked) {
        if (!(masked instanceof IMask.MaskedPattern)) {
          var tail = new ContinuousTailDetails(this.toString());
          return tail.appendTo(masked);
        }
        var details = new ChangeDetails();
        for (var ci = 0; ci < this.chunks.length && !details.skip; ++ci) {
          var chunk = this.chunks[ci];
          var lastBlockIter = masked._mapPosToBlock(masked.value.length);
          var stop = chunk.stop;
          var chunkBlock = void 0;
          if (stop != null && (!lastBlockIter || lastBlockIter.index <= stop)) {
            if (chunk instanceof ChunksTailDetails2 || masked._stops.indexOf(stop) >= 0) {
              details.aggregate(masked._appendPlaceholder(stop));
            }
            chunkBlock = chunk instanceof ChunksTailDetails2 && masked._blocks[stop];
          }
          if (chunkBlock) {
            var tailDetails = chunkBlock.appendTail(chunk);
            tailDetails.skip = false;
            details.aggregate(tailDetails);
            masked._value += tailDetails.inserted;
            var remainChars = chunk.toString().slice(tailDetails.rawInserted.length);
            if (remainChars)
              details.aggregate(masked.append(remainChars, {
                tail: true
              }));
          } else {
            details.aggregate(masked.append(chunk.toString(), {
              tail: true
            }));
          }
        }
        return details;
      }
    }, {
      key: "state",
      get: function get() {
        return {
          chunks: this.chunks.map(function(c2) {
            return c2.state;
          }),
          from: this.from,
          stop: this.stop,
          blockIndex: this.blockIndex
        };
      },
      set: function set2(state) {
        var chunks = state.chunks, props = _objectWithoutProperties(state, _excluded2);
        Object.assign(this, props);
        this.chunks = chunks.map(function(cstate) {
          var chunk = "chunks" in cstate ? new ChunksTailDetails2() : new ContinuousTailDetails();
          chunk.state = cstate;
          return chunk;
        });
      }
    }, {
      key: "unshift",
      value: function unshift(beforePos) {
        if (!this.chunks.length || beforePos != null && this.from >= beforePos)
          return "";
        var chunkShiftPos = beforePos != null ? beforePos - this.from : beforePos;
        var ci = 0;
        while (ci < this.chunks.length) {
          var chunk = this.chunks[ci];
          var shiftChar = chunk.unshift(chunkShiftPos);
          if (chunk.toString()) {
            if (!shiftChar)
              break;
            ++ci;
          } else {
            this.chunks.splice(ci, 1);
          }
          if (shiftChar)
            return shiftChar;
        }
        return "";
      }
    }, {
      key: "shift",
      value: function shift() {
        if (!this.chunks.length)
          return "";
        var ci = this.chunks.length - 1;
        while (0 <= ci) {
          var chunk = this.chunks[ci];
          var shiftChar = chunk.shift();
          if (chunk.toString()) {
            if (!shiftChar)
              break;
            --ci;
          } else {
            this.chunks.splice(ci, 1);
          }
          if (shiftChar)
            return shiftChar;
        }
        return "";
      }
    }]);
    return ChunksTailDetails2;
  }();

  // node_modules/imask/esm/masked/pattern/cursor.js
  var PatternCursor = /* @__PURE__ */ function() {
    function PatternCursor2(masked, pos) {
      _classCallCheck(this, PatternCursor2);
      this.masked = masked;
      this._log = [];
      var _ref = masked._mapPosToBlock(pos) || (pos < 0 ? {
        index: 0,
        offset: 0
      } : {
        index: this.masked._blocks.length,
        offset: 0
      }), offset = _ref.offset, index = _ref.index;
      this.offset = offset;
      this.index = index;
      this.ok = false;
    }
    _createClass(PatternCursor2, [{
      key: "block",
      get: function get() {
        return this.masked._blocks[this.index];
      }
    }, {
      key: "pos",
      get: function get() {
        return this.masked._blockStartPos(this.index) + this.offset;
      }
    }, {
      key: "state",
      get: function get() {
        return {
          index: this.index,
          offset: this.offset,
          ok: this.ok
        };
      },
      set: function set2(s2) {
        Object.assign(this, s2);
      }
    }, {
      key: "pushState",
      value: function pushState() {
        this._log.push(this.state);
      }
    }, {
      key: "popState",
      value: function popState() {
        var s2 = this._log.pop();
        this.state = s2;
        return s2;
      }
    }, {
      key: "bindBlock",
      value: function bindBlock() {
        if (this.block)
          return;
        if (this.index < 0) {
          this.index = 0;
          this.offset = 0;
        }
        if (this.index >= this.masked._blocks.length) {
          this.index = this.masked._blocks.length - 1;
          this.offset = this.block.value.length;
        }
      }
    }, {
      key: "_pushLeft",
      value: function _pushLeft(fn) {
        this.pushState();
        for (this.bindBlock(); 0 <= this.index; --this.index, this.offset = ((_this$block = this.block) === null || _this$block === void 0 ? void 0 : _this$block.value.length) || 0) {
          var _this$block;
          if (fn())
            return this.ok = true;
        }
        return this.ok = false;
      }
    }, {
      key: "_pushRight",
      value: function _pushRight(fn) {
        this.pushState();
        for (this.bindBlock(); this.index < this.masked._blocks.length; ++this.index, this.offset = 0) {
          if (fn())
            return this.ok = true;
        }
        return this.ok = false;
      }
    }, {
      key: "pushLeftBeforeFilled",
      value: function pushLeftBeforeFilled() {
        var _this = this;
        return this._pushLeft(function() {
          if (_this.block.isFixed || !_this.block.value)
            return;
          _this.offset = _this.block.nearestInputPos(_this.offset, DIRECTION.FORCE_LEFT);
          if (_this.offset !== 0)
            return true;
        });
      }
    }, {
      key: "pushLeftBeforeInput",
      value: function pushLeftBeforeInput() {
        var _this2 = this;
        return this._pushLeft(function() {
          if (_this2.block.isFixed)
            return;
          _this2.offset = _this2.block.nearestInputPos(_this2.offset, DIRECTION.LEFT);
          return true;
        });
      }
    }, {
      key: "pushLeftBeforeRequired",
      value: function pushLeftBeforeRequired() {
        var _this3 = this;
        return this._pushLeft(function() {
          if (_this3.block.isFixed || _this3.block.isOptional && !_this3.block.value)
            return;
          _this3.offset = _this3.block.nearestInputPos(_this3.offset, DIRECTION.LEFT);
          return true;
        });
      }
    }, {
      key: "pushRightBeforeFilled",
      value: function pushRightBeforeFilled() {
        var _this4 = this;
        return this._pushRight(function() {
          if (_this4.block.isFixed || !_this4.block.value)
            return;
          _this4.offset = _this4.block.nearestInputPos(_this4.offset, DIRECTION.FORCE_RIGHT);
          if (_this4.offset !== _this4.block.value.length)
            return true;
        });
      }
    }, {
      key: "pushRightBeforeInput",
      value: function pushRightBeforeInput() {
        var _this5 = this;
        return this._pushRight(function() {
          if (_this5.block.isFixed)
            return;
          _this5.offset = _this5.block.nearestInputPos(_this5.offset, DIRECTION.NONE);
          return true;
        });
      }
    }, {
      key: "pushRightBeforeRequired",
      value: function pushRightBeforeRequired() {
        var _this6 = this;
        return this._pushRight(function() {
          if (_this6.block.isFixed || _this6.block.isOptional && !_this6.block.value)
            return;
          _this6.offset = _this6.block.nearestInputPos(_this6.offset, DIRECTION.NONE);
          return true;
        });
      }
    }]);
    return PatternCursor2;
  }();

  // node_modules/imask/esm/masked/regexp.js
  var MaskedRegExp = /* @__PURE__ */ function(_Masked) {
    _inherits(MaskedRegExp2, _Masked);
    var _super = _createSuper(MaskedRegExp2);
    function MaskedRegExp2() {
      _classCallCheck(this, MaskedRegExp2);
      return _super.apply(this, arguments);
    }
    _createClass(MaskedRegExp2, [{
      key: "_update",
      value: function _update(opts) {
        if (opts.mask)
          opts.validate = function(value) {
            return value.search(opts.mask) >= 0;
          };
        _get(_getPrototypeOf(MaskedRegExp2.prototype), "_update", this).call(this, opts);
      }
    }]);
    return MaskedRegExp2;
  }(Masked);
  IMask.MaskedRegExp = MaskedRegExp;

  // node_modules/imask/esm/masked/pattern.js
  var _excluded3 = ["_blocks"];
  var MaskedPattern = /* @__PURE__ */ function(_Masked) {
    _inherits(MaskedPattern2, _Masked);
    var _super = _createSuper(MaskedPattern2);
    function MaskedPattern2() {
      var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      _classCallCheck(this, MaskedPattern2);
      opts.definitions = Object.assign({}, DEFAULT_INPUT_DEFINITIONS, opts.definitions);
      return _super.call(this, Object.assign({}, MaskedPattern2.DEFAULTS, opts));
    }
    _createClass(MaskedPattern2, [{
      key: "_update",
      value: function _update() {
        var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        opts.definitions = Object.assign({}, this.definitions, opts.definitions);
        _get(_getPrototypeOf(MaskedPattern2.prototype), "_update", this).call(this, opts);
        this._rebuildMask();
      }
    }, {
      key: "_rebuildMask",
      value: function _rebuildMask() {
        var _this = this;
        var defs = this.definitions;
        this._blocks = [];
        this._stops = [];
        this._maskedBlocks = {};
        var pattern = this.mask;
        if (!pattern || !defs)
          return;
        var unmaskingBlock = false;
        var optionalBlock = false;
        for (var i2 = 0; i2 < pattern.length; ++i2) {
          if (this.blocks) {
            var _ret = function() {
              var p2 = pattern.slice(i2);
              var bNames = Object.keys(_this.blocks).filter(function(bName2) {
                return p2.indexOf(bName2) === 0;
              });
              bNames.sort(function(a2, b2) {
                return b2.length - a2.length;
              });
              var bName = bNames[0];
              if (bName) {
                var maskedBlock = createMask(Object.assign({
                  parent: _this,
                  lazy: _this.lazy,
                  eager: _this.eager,
                  placeholderChar: _this.placeholderChar,
                  overwrite: _this.overwrite
                }, _this.blocks[bName]));
                if (maskedBlock) {
                  _this._blocks.push(maskedBlock);
                  if (!_this._maskedBlocks[bName])
                    _this._maskedBlocks[bName] = [];
                  _this._maskedBlocks[bName].push(_this._blocks.length - 1);
                }
                i2 += bName.length - 1;
                return "continue";
              }
            }();
            if (_ret === "continue")
              continue;
          }
          var char = pattern[i2];
          var isInput = char in defs;
          if (char === MaskedPattern2.STOP_CHAR) {
            this._stops.push(this._blocks.length);
            continue;
          }
          if (char === "{" || char === "}") {
            unmaskingBlock = !unmaskingBlock;
            continue;
          }
          if (char === "[" || char === "]") {
            optionalBlock = !optionalBlock;
            continue;
          }
          if (char === MaskedPattern2.ESCAPE_CHAR) {
            ++i2;
            char = pattern[i2];
            if (!char)
              break;
            isInput = false;
          }
          var def = isInput ? new PatternInputDefinition({
            parent: this,
            lazy: this.lazy,
            eager: this.eager,
            placeholderChar: this.placeholderChar,
            mask: defs[char],
            isOptional: optionalBlock
          }) : new PatternFixedDefinition({
            char,
            eager: this.eager,
            isUnmasking: unmaskingBlock
          });
          this._blocks.push(def);
        }
      }
    }, {
      key: "state",
      get: function get() {
        return Object.assign({}, _get(_getPrototypeOf(MaskedPattern2.prototype), "state", this), {
          _blocks: this._blocks.map(function(b2) {
            return b2.state;
          })
        });
      },
      set: function set2(state) {
        var _blocks = state._blocks, maskedState = _objectWithoutProperties(state, _excluded3);
        this._blocks.forEach(function(b2, bi) {
          return b2.state = _blocks[bi];
        });
        _set(_getPrototypeOf(MaskedPattern2.prototype), "state", maskedState, this, true);
      }
    }, {
      key: "reset",
      value: function reset() {
        _get(_getPrototypeOf(MaskedPattern2.prototype), "reset", this).call(this);
        this._blocks.forEach(function(b2) {
          return b2.reset();
        });
      }
    }, {
      key: "isComplete",
      get: function get() {
        return this._blocks.every(function(b2) {
          return b2.isComplete;
        });
      }
    }, {
      key: "isFilled",
      get: function get() {
        return this._blocks.every(function(b2) {
          return b2.isFilled;
        });
      }
    }, {
      key: "isFixed",
      get: function get() {
        return this._blocks.every(function(b2) {
          return b2.isFixed;
        });
      }
    }, {
      key: "isOptional",
      get: function get() {
        return this._blocks.every(function(b2) {
          return b2.isOptional;
        });
      }
    }, {
      key: "doCommit",
      value: function doCommit() {
        this._blocks.forEach(function(b2) {
          return b2.doCommit();
        });
        _get(_getPrototypeOf(MaskedPattern2.prototype), "doCommit", this).call(this);
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._blocks.reduce(function(str, b2) {
          return str += b2.unmaskedValue;
        }, "");
      },
      set: function set2(unmaskedValue) {
        _set(_getPrototypeOf(MaskedPattern2.prototype), "unmaskedValue", unmaskedValue, this, true);
      }
    }, {
      key: "value",
      get: function get() {
        return this._blocks.reduce(function(str, b2) {
          return str += b2.value;
        }, "");
      },
      set: function set2(value) {
        _set(_getPrototypeOf(MaskedPattern2.prototype), "value", value, this, true);
      }
    }, {
      key: "appendTail",
      value: function appendTail(tail) {
        return _get(_getPrototypeOf(MaskedPattern2.prototype), "appendTail", this).call(this, tail).aggregate(this._appendPlaceholder());
      }
    }, {
      key: "_appendEager",
      value: function _appendEager() {
        var _this$_mapPosToBlock;
        var details = new ChangeDetails();
        var startBlockIndex = (_this$_mapPosToBlock = this._mapPosToBlock(this.value.length)) === null || _this$_mapPosToBlock === void 0 ? void 0 : _this$_mapPosToBlock.index;
        if (startBlockIndex == null)
          return details;
        if (this._blocks[startBlockIndex].isFilled)
          ++startBlockIndex;
        for (var bi = startBlockIndex; bi < this._blocks.length; ++bi) {
          var d2 = this._blocks[bi]._appendEager();
          if (!d2.inserted)
            break;
          details.aggregate(d2);
        }
        return details;
      }
    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var blockIter = this._mapPosToBlock(this.value.length);
        var details = new ChangeDetails();
        if (!blockIter)
          return details;
        for (var bi = blockIter.index; ; ++bi) {
          var _flags$_beforeTailSta;
          var _block = this._blocks[bi];
          if (!_block)
            break;
          var blockDetails = _block._appendChar(ch, Object.assign({}, flags, {
            _beforeTailState: (_flags$_beforeTailSta = flags._beforeTailState) === null || _flags$_beforeTailSta === void 0 ? void 0 : _flags$_beforeTailSta._blocks[bi]
          }));
          var skip = blockDetails.skip;
          details.aggregate(blockDetails);
          if (skip || blockDetails.rawInserted)
            break;
        }
        return details;
      }
    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this2 = this;
        var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
        var chunkTail = new ChunksTailDetails();
        if (fromPos === toPos)
          return chunkTail;
        this._forEachBlocksInRange(fromPos, toPos, function(b2, bi, bFromPos, bToPos) {
          var blockChunk = b2.extractTail(bFromPos, bToPos);
          blockChunk.stop = _this2._findStopBefore(bi);
          blockChunk.from = _this2._blockStartPos(bi);
          if (blockChunk instanceof ChunksTailDetails)
            blockChunk.blockIndex = bi;
          chunkTail.extend(blockChunk);
        });
        return chunkTail;
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
        var flags = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        if (fromPos === toPos)
          return "";
        var input = "";
        this._forEachBlocksInRange(fromPos, toPos, function(b2, _2, fromPos2, toPos2) {
          input += b2.extractInput(fromPos2, toPos2, flags);
        });
        return input;
      }
    }, {
      key: "_findStopBefore",
      value: function _findStopBefore(blockIndex) {
        var stopBefore;
        for (var si = 0; si < this._stops.length; ++si) {
          var stop = this._stops[si];
          if (stop <= blockIndex)
            stopBefore = stop;
          else
            break;
        }
        return stopBefore;
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder(toBlockIndex) {
        var _this3 = this;
        var details = new ChangeDetails();
        if (this.lazy && toBlockIndex == null)
          return details;
        var startBlockIter = this._mapPosToBlock(this.value.length);
        if (!startBlockIter)
          return details;
        var startBlockIndex = startBlockIter.index;
        var endBlockIndex = toBlockIndex != null ? toBlockIndex : this._blocks.length;
        this._blocks.slice(startBlockIndex, endBlockIndex).forEach(function(b2) {
          if (!b2.lazy || toBlockIndex != null) {
            var args = b2._blocks != null ? [b2._blocks.length] : [];
            var bDetails = b2._appendPlaceholder.apply(b2, args);
            _this3._value += bDetails.inserted;
            details.aggregate(bDetails);
          }
        });
        return details;
      }
    }, {
      key: "_mapPosToBlock",
      value: function _mapPosToBlock(pos) {
        var accVal = "";
        for (var bi = 0; bi < this._blocks.length; ++bi) {
          var _block2 = this._blocks[bi];
          var blockStartPos = accVal.length;
          accVal += _block2.value;
          if (pos <= accVal.length) {
            return {
              index: bi,
              offset: pos - blockStartPos
            };
          }
        }
      }
    }, {
      key: "_blockStartPos",
      value: function _blockStartPos(blockIndex) {
        return this._blocks.slice(0, blockIndex).reduce(function(pos, b2) {
          return pos += b2.value.length;
        }, 0);
      }
    }, {
      key: "_forEachBlocksInRange",
      value: function _forEachBlocksInRange(fromPos) {
        var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
        var fn = arguments.length > 2 ? arguments[2] : void 0;
        var fromBlockIter = this._mapPosToBlock(fromPos);
        if (fromBlockIter) {
          var toBlockIter = this._mapPosToBlock(toPos);
          var isSameBlock = toBlockIter && fromBlockIter.index === toBlockIter.index;
          var fromBlockStartPos = fromBlockIter.offset;
          var fromBlockEndPos = toBlockIter && isSameBlock ? toBlockIter.offset : this._blocks[fromBlockIter.index].value.length;
          fn(this._blocks[fromBlockIter.index], fromBlockIter.index, fromBlockStartPos, fromBlockEndPos);
          if (toBlockIter && !isSameBlock) {
            for (var bi = fromBlockIter.index + 1; bi < toBlockIter.index; ++bi) {
              fn(this._blocks[bi], bi, 0, this._blocks[bi].value.length);
            }
            fn(this._blocks[toBlockIter.index], toBlockIter.index, 0, toBlockIter.offset);
          }
        }
      }
    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
        var removeDetails = _get(_getPrototypeOf(MaskedPattern2.prototype), "remove", this).call(this, fromPos, toPos);
        this._forEachBlocksInRange(fromPos, toPos, function(b2, _2, bFromPos, bToPos) {
          removeDetails.aggregate(b2.remove(bFromPos, bToPos));
        });
        return removeDetails;
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos) {
        var direction = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DIRECTION.NONE;
        if (!this._blocks.length)
          return 0;
        var cursor = new PatternCursor(this, cursorPos);
        if (direction === DIRECTION.NONE) {
          if (cursor.pushRightBeforeInput())
            return cursor.pos;
          cursor.popState();
          if (cursor.pushLeftBeforeInput())
            return cursor.pos;
          return this.value.length;
        }
        if (direction === DIRECTION.LEFT || direction === DIRECTION.FORCE_LEFT) {
          if (direction === DIRECTION.LEFT) {
            cursor.pushRightBeforeFilled();
            if (cursor.ok && cursor.pos === cursorPos)
              return cursorPos;
            cursor.popState();
          }
          cursor.pushLeftBeforeInput();
          cursor.pushLeftBeforeRequired();
          cursor.pushLeftBeforeFilled();
          if (direction === DIRECTION.LEFT) {
            cursor.pushRightBeforeInput();
            cursor.pushRightBeforeRequired();
            if (cursor.ok && cursor.pos <= cursorPos)
              return cursor.pos;
            cursor.popState();
            if (cursor.ok && cursor.pos <= cursorPos)
              return cursor.pos;
            cursor.popState();
          }
          if (cursor.ok)
            return cursor.pos;
          if (direction === DIRECTION.FORCE_LEFT)
            return 0;
          cursor.popState();
          if (cursor.ok)
            return cursor.pos;
          cursor.popState();
          if (cursor.ok)
            return cursor.pos;
          return 0;
        }
        if (direction === DIRECTION.RIGHT || direction === DIRECTION.FORCE_RIGHT) {
          cursor.pushRightBeforeInput();
          cursor.pushRightBeforeRequired();
          if (cursor.pushRightBeforeFilled())
            return cursor.pos;
          if (direction === DIRECTION.FORCE_RIGHT)
            return this.value.length;
          cursor.popState();
          if (cursor.ok)
            return cursor.pos;
          cursor.popState();
          if (cursor.ok)
            return cursor.pos;
          return this.nearestInputPos(cursorPos, DIRECTION.LEFT);
        }
        return cursorPos;
      }
    }, {
      key: "maskedBlock",
      value: function maskedBlock(name) {
        return this.maskedBlocks(name)[0];
      }
    }, {
      key: "maskedBlocks",
      value: function maskedBlocks(name) {
        var _this4 = this;
        var indices = this._maskedBlocks[name];
        if (!indices)
          return [];
        return indices.map(function(gi) {
          return _this4._blocks[gi];
        });
      }
    }]);
    return MaskedPattern2;
  }(Masked);
  MaskedPattern.DEFAULTS = {
    lazy: true,
    placeholderChar: "_"
  };
  MaskedPattern.STOP_CHAR = "`";
  MaskedPattern.ESCAPE_CHAR = "\\";
  MaskedPattern.InputDefinition = PatternInputDefinition;
  MaskedPattern.FixedDefinition = PatternFixedDefinition;
  IMask.MaskedPattern = MaskedPattern;

  // node_modules/imask/esm/masked/range.js
  var MaskedRange = /* @__PURE__ */ function(_MaskedPattern) {
    _inherits(MaskedRange2, _MaskedPattern);
    var _super = _createSuper(MaskedRange2);
    function MaskedRange2() {
      _classCallCheck(this, MaskedRange2);
      return _super.apply(this, arguments);
    }
    _createClass(MaskedRange2, [{
      key: "_matchFrom",
      get: function get() {
        return this.maxLength - String(this.from).length;
      }
    }, {
      key: "_update",
      value: function _update(opts) {
        opts = Object.assign({
          to: this.to || 0,
          from: this.from || 0,
          maxLength: this.maxLength || 0
        }, opts);
        var maxLength = String(opts.to).length;
        if (opts.maxLength != null)
          maxLength = Math.max(maxLength, opts.maxLength);
        opts.maxLength = maxLength;
        var fromStr = String(opts.from).padStart(maxLength, "0");
        var toStr = String(opts.to).padStart(maxLength, "0");
        var sameCharsCount = 0;
        while (sameCharsCount < toStr.length && toStr[sameCharsCount] === fromStr[sameCharsCount]) {
          ++sameCharsCount;
        }
        opts.mask = toStr.slice(0, sameCharsCount).replace(/0/g, "\\0") + "0".repeat(maxLength - sameCharsCount);
        _get(_getPrototypeOf(MaskedRange2.prototype), "_update", this).call(this, opts);
      }
    }, {
      key: "isComplete",
      get: function get() {
        return _get(_getPrototypeOf(MaskedRange2.prototype), "isComplete", this) && Boolean(this.value);
      }
    }, {
      key: "boundaries",
      value: function boundaries(str) {
        var minstr = "";
        var maxstr = "";
        var _ref = str.match(/^(\D*)(\d*)(\D*)/) || [], _ref2 = _slicedToArray(_ref, 3), placeholder = _ref2[1], num = _ref2[2];
        if (num) {
          minstr = "0".repeat(placeholder.length) + num;
          maxstr = "9".repeat(placeholder.length) + num;
        }
        minstr = minstr.padEnd(this.maxLength, "0");
        maxstr = maxstr.padEnd(this.maxLength, "9");
        return [minstr, maxstr];
      }
    }, {
      key: "doPrepare",
      value: function doPrepare(ch) {
        var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var details;
        var _normalizePrepare = normalizePrepare(_get(_getPrototypeOf(MaskedRange2.prototype), "doPrepare", this).call(this, ch.replace(/\D/g, ""), flags));
        var _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2);
        ch = _normalizePrepare2[0];
        details = _normalizePrepare2[1];
        if (!this.autofix || !ch)
          return ch;
        var fromStr = String(this.from).padStart(this.maxLength, "0");
        var toStr = String(this.to).padStart(this.maxLength, "0");
        var nextVal = this.value + ch;
        if (nextVal.length > this.maxLength)
          return "";
        var _this$boundaries = this.boundaries(nextVal), _this$boundaries2 = _slicedToArray(_this$boundaries, 2), minstr = _this$boundaries2[0], maxstr = _this$boundaries2[1];
        if (Number(maxstr) < this.from)
          return fromStr[nextVal.length - 1];
        if (Number(minstr) > this.to) {
          if (this.autofix === "pad" && nextVal.length < this.maxLength) {
            return ["", details.aggregate(this.append(fromStr[nextVal.length - 1] + ch, flags))];
          }
          return toStr[nextVal.length - 1];
        }
        return ch;
      }
    }, {
      key: "doValidate",
      value: function doValidate() {
        var _get2;
        var str = this.value;
        var firstNonZero = str.search(/[^0]/);
        if (firstNonZero === -1 && str.length <= this._matchFrom)
          return true;
        var _this$boundaries3 = this.boundaries(str), _this$boundaries4 = _slicedToArray(_this$boundaries3, 2), minstr = _this$boundaries4[0], maxstr = _this$boundaries4[1];
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return this.from <= Number(maxstr) && Number(minstr) <= this.to && (_get2 = _get(_getPrototypeOf(MaskedRange2.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
      }
    }]);
    return MaskedRange2;
  }(MaskedPattern);
  IMask.MaskedRange = MaskedRange;

  // node_modules/imask/esm/masked/date.js
  var MaskedDate = /* @__PURE__ */ function(_MaskedPattern) {
    _inherits(MaskedDate2, _MaskedPattern);
    var _super = _createSuper(MaskedDate2);
    function MaskedDate2(opts) {
      _classCallCheck(this, MaskedDate2);
      return _super.call(this, Object.assign({}, MaskedDate2.DEFAULTS, opts));
    }
    _createClass(MaskedDate2, [{
      key: "_update",
      value: function _update(opts) {
        if (opts.mask === Date)
          delete opts.mask;
        if (opts.pattern)
          opts.mask = opts.pattern;
        var blocks = opts.blocks;
        opts.blocks = Object.assign({}, MaskedDate2.GET_DEFAULT_BLOCKS());
        if (opts.min)
          opts.blocks.Y.from = opts.min.getFullYear();
        if (opts.max)
          opts.blocks.Y.to = opts.max.getFullYear();
        if (opts.min && opts.max && opts.blocks.Y.from === opts.blocks.Y.to) {
          opts.blocks.m.from = opts.min.getMonth() + 1;
          opts.blocks.m.to = opts.max.getMonth() + 1;
          if (opts.blocks.m.from === opts.blocks.m.to) {
            opts.blocks.d.from = opts.min.getDate();
            opts.blocks.d.to = opts.max.getDate();
          }
        }
        Object.assign(opts.blocks, this.blocks, blocks);
        Object.keys(opts.blocks).forEach(function(bk) {
          var b2 = opts.blocks[bk];
          if (!("autofix" in b2) && "autofix" in opts)
            b2.autofix = opts.autofix;
        });
        _get(_getPrototypeOf(MaskedDate2.prototype), "_update", this).call(this, opts);
      }
    }, {
      key: "doValidate",
      value: function doValidate() {
        var _get2;
        var date = this.date;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return (_get2 = _get(_getPrototypeOf(MaskedDate2.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.isComplete || this.isDateExist(this.value) && date != null && (this.min == null || this.min <= date) && (this.max == null || date <= this.max));
      }
    }, {
      key: "isDateExist",
      value: function isDateExist(str) {
        return this.format(this.parse(str, this), this).indexOf(str) >= 0;
      }
    }, {
      key: "date",
      get: function get() {
        return this.typedValue;
      },
      set: function set2(date) {
        this.typedValue = date;
      }
    }, {
      key: "typedValue",
      get: function get() {
        return this.isComplete ? _get(_getPrototypeOf(MaskedDate2.prototype), "typedValue", this) : null;
      },
      set: function set2(value) {
        _set(_getPrototypeOf(MaskedDate2.prototype), "typedValue", value, this, true);
      }
    }, {
      key: "maskEquals",
      value: function maskEquals(mask) {
        return mask === Date || _get(_getPrototypeOf(MaskedDate2.prototype), "maskEquals", this).call(this, mask);
      }
    }]);
    return MaskedDate2;
  }(MaskedPattern);
  MaskedDate.DEFAULTS = {
    pattern: "d{.}`m{.}`Y",
    format: function format2(date) {
      if (!date)
        return "";
      var day = String(date.getDate()).padStart(2, "0");
      var month = String(date.getMonth() + 1).padStart(2, "0");
      var year = date.getFullYear();
      return [day, month, year].join(".");
    },
    parse: function parse2(str) {
      var _str$split = str.split("."), _str$split2 = _slicedToArray(_str$split, 3), day = _str$split2[0], month = _str$split2[1], year = _str$split2[2];
      return new Date(year, month - 1, day);
    }
  };
  MaskedDate.GET_DEFAULT_BLOCKS = function() {
    return {
      d: {
        mask: MaskedRange,
        from: 1,
        to: 31,
        maxLength: 2
      },
      m: {
        mask: MaskedRange,
        from: 1,
        to: 12,
        maxLength: 2
      },
      Y: {
        mask: MaskedRange,
        from: 1900,
        to: 9999
      }
    };
  };
  IMask.MaskedDate = MaskedDate;

  // node_modules/imask/esm/controls/mask-element.js
  var MaskElement = /* @__PURE__ */ function() {
    function MaskElement2() {
      _classCallCheck(this, MaskElement2);
    }
    _createClass(MaskElement2, [{
      key: "selectionStart",
      get: function get() {
        var start;
        try {
          start = this._unsafeSelectionStart;
        } catch (e2) {
        }
        return start != null ? start : this.value.length;
      }
    }, {
      key: "selectionEnd",
      get: function get() {
        var end;
        try {
          end = this._unsafeSelectionEnd;
        } catch (e2) {
        }
        return end != null ? end : this.value.length;
      }
    }, {
      key: "select",
      value: function select(start, end) {
        if (start == null || end == null || start === this.selectionStart && end === this.selectionEnd)
          return;
        try {
          this._unsafeSelect(start, end);
        } catch (e2) {
        }
      }
    }, {
      key: "_unsafeSelect",
      value: function _unsafeSelect(start, end) {
      }
    }, {
      key: "isActive",
      get: function get() {
        return false;
      }
    }, {
      key: "bindEvents",
      value: function bindEvents(handlers) {
      }
    }, {
      key: "unbindEvents",
      value: function unbindEvents() {
      }
    }]);
    return MaskElement2;
  }();
  IMask.MaskElement = MaskElement;

  // node_modules/imask/esm/controls/html-mask-element.js
  var HTMLMaskElement = /* @__PURE__ */ function(_MaskElement) {
    _inherits(HTMLMaskElement2, _MaskElement);
    var _super = _createSuper(HTMLMaskElement2);
    function HTMLMaskElement2(input) {
      var _this;
      _classCallCheck(this, HTMLMaskElement2);
      _this = _super.call(this);
      _this.input = input;
      _this._handlers = {};
      return _this;
    }
    _createClass(HTMLMaskElement2, [{
      key: "rootElement",
      get: function get() {
        var _this$input$getRootNo, _this$input$getRootNo2, _this$input;
        return (_this$input$getRootNo = (_this$input$getRootNo2 = (_this$input = this.input).getRootNode) === null || _this$input$getRootNo2 === void 0 ? void 0 : _this$input$getRootNo2.call(_this$input)) !== null && _this$input$getRootNo !== void 0 ? _this$input$getRootNo : document;
      }
    }, {
      key: "isActive",
      get: function get() {
        return this.input === this.rootElement.activeElement;
      }
    }, {
      key: "_unsafeSelectionStart",
      get: function get() {
        return this.input.selectionStart;
      }
    }, {
      key: "_unsafeSelectionEnd",
      get: function get() {
        return this.input.selectionEnd;
      }
    }, {
      key: "_unsafeSelect",
      value: function _unsafeSelect(start, end) {
        this.input.setSelectionRange(start, end);
      }
    }, {
      key: "value",
      get: function get() {
        return this.input.value;
      },
      set: function set2(value) {
        this.input.value = value;
      }
    }, {
      key: "bindEvents",
      value: function bindEvents(handlers) {
        var _this2 = this;
        Object.keys(handlers).forEach(function(event) {
          return _this2._toggleEventHandler(HTMLMaskElement2.EVENTS_MAP[event], handlers[event]);
        });
      }
    }, {
      key: "unbindEvents",
      value: function unbindEvents() {
        var _this3 = this;
        Object.keys(this._handlers).forEach(function(event) {
          return _this3._toggleEventHandler(event);
        });
      }
    }, {
      key: "_toggleEventHandler",
      value: function _toggleEventHandler(event, handler) {
        if (this._handlers[event]) {
          this.input.removeEventListener(event, this._handlers[event]);
          delete this._handlers[event];
        }
        if (handler) {
          this.input.addEventListener(event, handler);
          this._handlers[event] = handler;
        }
      }
    }]);
    return HTMLMaskElement2;
  }(MaskElement);
  HTMLMaskElement.EVENTS_MAP = {
    selectionChange: "keydown",
    input: "input",
    drop: "drop",
    click: "click",
    focus: "focus",
    commit: "blur"
  };
  IMask.HTMLMaskElement = HTMLMaskElement;

  // node_modules/imask/esm/controls/html-contenteditable-mask-element.js
  var HTMLContenteditableMaskElement = /* @__PURE__ */ function(_HTMLMaskElement) {
    _inherits(HTMLContenteditableMaskElement2, _HTMLMaskElement);
    var _super = _createSuper(HTMLContenteditableMaskElement2);
    function HTMLContenteditableMaskElement2() {
      _classCallCheck(this, HTMLContenteditableMaskElement2);
      return _super.apply(this, arguments);
    }
    _createClass(HTMLContenteditableMaskElement2, [{
      key: "_unsafeSelectionStart",
      get: function get() {
        var root = this.rootElement;
        var selection = root.getSelection && root.getSelection();
        var anchorOffset = selection && selection.anchorOffset;
        var focusOffset = selection && selection.focusOffset;
        if (focusOffset == null || anchorOffset == null || anchorOffset < focusOffset) {
          return anchorOffset;
        }
        return focusOffset;
      }
    }, {
      key: "_unsafeSelectionEnd",
      get: function get() {
        var root = this.rootElement;
        var selection = root.getSelection && root.getSelection();
        var anchorOffset = selection && selection.anchorOffset;
        var focusOffset = selection && selection.focusOffset;
        if (focusOffset == null || anchorOffset == null || anchorOffset > focusOffset) {
          return anchorOffset;
        }
        return focusOffset;
      }
    }, {
      key: "_unsafeSelect",
      value: function _unsafeSelect(start, end) {
        if (!this.rootElement.createRange)
          return;
        var range = this.rootElement.createRange();
        range.setStart(this.input.firstChild || this.input, start);
        range.setEnd(this.input.lastChild || this.input, end);
        var root = this.rootElement;
        var selection = root.getSelection && root.getSelection();
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }
    }, {
      key: "value",
      get: function get() {
        return this.input.textContent;
      },
      set: function set2(value) {
        this.input.textContent = value;
      }
    }]);
    return HTMLContenteditableMaskElement2;
  }(HTMLMaskElement);
  IMask.HTMLContenteditableMaskElement = HTMLContenteditableMaskElement;

  // node_modules/imask/esm/controls/input.js
  var _excluded4 = ["mask"];
  var InputMask = /* @__PURE__ */ function() {
    function InputMask2(el, opts) {
      _classCallCheck(this, InputMask2);
      this.el = el instanceof MaskElement ? el : el.isContentEditable && el.tagName !== "INPUT" && el.tagName !== "TEXTAREA" ? new HTMLContenteditableMaskElement(el) : new HTMLMaskElement(el);
      this.masked = createMask(opts);
      this._listeners = {};
      this._value = "";
      this._unmaskedValue = "";
      this._saveSelection = this._saveSelection.bind(this);
      this._onInput = this._onInput.bind(this);
      this._onChange = this._onChange.bind(this);
      this._onDrop = this._onDrop.bind(this);
      this._onFocus = this._onFocus.bind(this);
      this._onClick = this._onClick.bind(this);
      this.alignCursor = this.alignCursor.bind(this);
      this.alignCursorFriendly = this.alignCursorFriendly.bind(this);
      this._bindEvents();
      this.updateValue();
      this._onChange();
    }
    _createClass(InputMask2, [{
      key: "mask",
      get: function get() {
        return this.masked.mask;
      },
      set: function set2(mask) {
        if (this.maskEquals(mask))
          return;
        if (!(mask instanceof IMask.Masked) && this.masked.constructor === maskedClass(mask)) {
          this.masked.updateOptions({
            mask
          });
          return;
        }
        var masked = createMask({
          mask
        });
        masked.unmaskedValue = this.masked.unmaskedValue;
        this.masked = masked;
      }
    }, {
      key: "maskEquals",
      value: function maskEquals(mask) {
        var _this$masked;
        return mask == null || ((_this$masked = this.masked) === null || _this$masked === void 0 ? void 0 : _this$masked.maskEquals(mask));
      }
    }, {
      key: "value",
      get: function get() {
        return this._value;
      },
      set: function set2(str) {
        this.masked.value = str;
        this.updateControl();
        this.alignCursor();
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._unmaskedValue;
      },
      set: function set2(str) {
        this.masked.unmaskedValue = str;
        this.updateControl();
        this.alignCursor();
      }
    }, {
      key: "typedValue",
      get: function get() {
        return this.masked.typedValue;
      },
      set: function set2(val) {
        this.masked.typedValue = val;
        this.updateControl();
        this.alignCursor();
      }
    }, {
      key: "_bindEvents",
      value: function _bindEvents() {
        this.el.bindEvents({
          selectionChange: this._saveSelection,
          input: this._onInput,
          drop: this._onDrop,
          click: this._onClick,
          focus: this._onFocus,
          commit: this._onChange
        });
      }
    }, {
      key: "_unbindEvents",
      value: function _unbindEvents() {
        if (this.el)
          this.el.unbindEvents();
      }
    }, {
      key: "_fireEvent",
      value: function _fireEvent(ev) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        var listeners = this._listeners[ev];
        if (!listeners)
          return;
        listeners.forEach(function(l2) {
          return l2.apply(void 0, args);
        });
      }
    }, {
      key: "selectionStart",
      get: function get() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionStart;
      }
    }, {
      key: "cursorPos",
      get: function get() {
        return this._cursorChanging ? this._changingCursorPos : this.el.selectionEnd;
      },
      set: function set2(pos) {
        if (!this.el || !this.el.isActive)
          return;
        this.el.select(pos, pos);
        this._saveSelection();
      }
    }, {
      key: "_saveSelection",
      value: function _saveSelection() {
        if (this.value !== this.el.value) {
          console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly.");
        }
        this._selection = {
          start: this.selectionStart,
          end: this.cursorPos
        };
      }
    }, {
      key: "updateValue",
      value: function updateValue() {
        this.masked.value = this.el.value;
        this._value = this.masked.value;
      }
    }, {
      key: "updateControl",
      value: function updateControl() {
        var newUnmaskedValue = this.masked.unmaskedValue;
        var newValue = this.masked.value;
        var isChanged = this.unmaskedValue !== newUnmaskedValue || this.value !== newValue;
        this._unmaskedValue = newUnmaskedValue;
        this._value = newValue;
        if (this.el.value !== newValue)
          this.el.value = newValue;
        if (isChanged)
          this._fireChangeEvents();
      }
    }, {
      key: "updateOptions",
      value: function updateOptions(opts) {
        var mask = opts.mask, restOpts = _objectWithoutProperties(opts, _excluded4);
        var updateMask = !this.maskEquals(mask);
        var updateOpts = !objectIncludes(this.masked, restOpts);
        if (updateMask)
          this.mask = mask;
        if (updateOpts)
          this.masked.updateOptions(restOpts);
        if (updateMask || updateOpts)
          this.updateControl();
      }
    }, {
      key: "updateCursor",
      value: function updateCursor(cursorPos) {
        if (cursorPos == null)
          return;
        this.cursorPos = cursorPos;
        this._delayUpdateCursor(cursorPos);
      }
    }, {
      key: "_delayUpdateCursor",
      value: function _delayUpdateCursor(cursorPos) {
        var _this = this;
        this._abortUpdateCursor();
        this._changingCursorPos = cursorPos;
        this._cursorChanging = setTimeout(function() {
          if (!_this.el)
            return;
          _this.cursorPos = _this._changingCursorPos;
          _this._abortUpdateCursor();
        }, 10);
      }
    }, {
      key: "_fireChangeEvents",
      value: function _fireChangeEvents() {
        this._fireEvent("accept", this._inputEvent);
        if (this.masked.isComplete)
          this._fireEvent("complete", this._inputEvent);
      }
    }, {
      key: "_abortUpdateCursor",
      value: function _abortUpdateCursor() {
        if (this._cursorChanging) {
          clearTimeout(this._cursorChanging);
          delete this._cursorChanging;
        }
      }
    }, {
      key: "alignCursor",
      value: function alignCursor() {
        this.cursorPos = this.masked.nearestInputPos(this.masked.nearestInputPos(this.cursorPos, DIRECTION.LEFT));
      }
    }, {
      key: "alignCursorFriendly",
      value: function alignCursorFriendly() {
        if (this.selectionStart !== this.cursorPos)
          return;
        this.alignCursor();
      }
    }, {
      key: "on",
      value: function on(ev, handler) {
        if (!this._listeners[ev])
          this._listeners[ev] = [];
        this._listeners[ev].push(handler);
        return this;
      }
    }, {
      key: "off",
      value: function off(ev, handler) {
        if (!this._listeners[ev])
          return this;
        if (!handler) {
          delete this._listeners[ev];
          return this;
        }
        var hIndex = this._listeners[ev].indexOf(handler);
        if (hIndex >= 0)
          this._listeners[ev].splice(hIndex, 1);
        return this;
      }
    }, {
      key: "_onInput",
      value: function _onInput(e2) {
        this._inputEvent = e2;
        this._abortUpdateCursor();
        if (!this._selection)
          return this.updateValue();
        var details = new ActionDetails(this.el.value, this.cursorPos, this.value, this._selection);
        var oldRawValue = this.masked.rawInputValue;
        var offset = this.masked.splice(details.startChangePos, details.removed.length, details.inserted, details.removeDirection).offset;
        var removeDirection = oldRawValue === this.masked.rawInputValue ? details.removeDirection : DIRECTION.NONE;
        var cursorPos = this.masked.nearestInputPos(details.startChangePos + offset, removeDirection);
        if (removeDirection !== DIRECTION.NONE)
          cursorPos = this.masked.nearestInputPos(cursorPos, DIRECTION.NONE);
        this.updateControl();
        this.updateCursor(cursorPos);
        delete this._inputEvent;
      }
    }, {
      key: "_onChange",
      value: function _onChange() {
        if (this.value !== this.el.value) {
          this.updateValue();
        }
        this.masked.doCommit();
        this.updateControl();
        this._saveSelection();
      }
    }, {
      key: "_onDrop",
      value: function _onDrop(ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }
    }, {
      key: "_onFocus",
      value: function _onFocus(ev) {
        this.alignCursorFriendly();
      }
    }, {
      key: "_onClick",
      value: function _onClick(ev) {
        this.alignCursorFriendly();
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this._unbindEvents();
        this._listeners.length = 0;
        delete this.el;
      }
    }]);
    return InputMask2;
  }();
  IMask.InputMask = InputMask;

  // node_modules/imask/esm/masked/enum.js
  var MaskedEnum = /* @__PURE__ */ function(_MaskedPattern) {
    _inherits(MaskedEnum2, _MaskedPattern);
    var _super = _createSuper(MaskedEnum2);
    function MaskedEnum2() {
      _classCallCheck(this, MaskedEnum2);
      return _super.apply(this, arguments);
    }
    _createClass(MaskedEnum2, [{
      key: "_update",
      value: function _update(opts) {
        if (opts.enum)
          opts.mask = "*".repeat(opts.enum[0].length);
        _get(_getPrototypeOf(MaskedEnum2.prototype), "_update", this).call(this, opts);
      }
    }, {
      key: "doValidate",
      value: function doValidate() {
        var _this = this, _get2;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return this.enum.some(function(e2) {
          return e2.indexOf(_this.unmaskedValue) >= 0;
        }) && (_get2 = _get(_getPrototypeOf(MaskedEnum2.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args));
      }
    }]);
    return MaskedEnum2;
  }(MaskedPattern);
  IMask.MaskedEnum = MaskedEnum;

  // node_modules/imask/esm/masked/number.js
  var MaskedNumber = /* @__PURE__ */ function(_Masked) {
    _inherits(MaskedNumber2, _Masked);
    var _super = _createSuper(MaskedNumber2);
    function MaskedNumber2(opts) {
      _classCallCheck(this, MaskedNumber2);
      return _super.call(this, Object.assign({}, MaskedNumber2.DEFAULTS, opts));
    }
    _createClass(MaskedNumber2, [{
      key: "_update",
      value: function _update(opts) {
        _get(_getPrototypeOf(MaskedNumber2.prototype), "_update", this).call(this, opts);
        this._updateRegExps();
      }
    }, {
      key: "_updateRegExps",
      value: function _updateRegExps() {
        var start = "^" + (this.allowNegative ? "[+|\\-]?" : "");
        var midInput = "(0|([1-9]+\\d*))?";
        var mid = "\\d*";
        var end = (this.scale ? "(" + escapeRegExp(this.radix) + "\\d{0," + this.scale + "})?" : "") + "$";
        this._numberRegExpInput = new RegExp(start + midInput + end);
        this._numberRegExp = new RegExp(start + mid + end);
        this._mapToRadixRegExp = new RegExp("[" + this.mapToRadix.map(escapeRegExp).join("") + "]", "g");
        this._thousandsSeparatorRegExp = new RegExp(escapeRegExp(this.thousandsSeparator), "g");
      }
    }, {
      key: "_removeThousandsSeparators",
      value: function _removeThousandsSeparators(value) {
        return value.replace(this._thousandsSeparatorRegExp, "");
      }
    }, {
      key: "_insertThousandsSeparators",
      value: function _insertThousandsSeparators(value) {
        var parts = value.split(this.radix);
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, this.thousandsSeparator);
        return parts.join(this.radix);
      }
    }, {
      key: "doPrepare",
      value: function doPrepare(ch) {
        var _get2;
        ch = ch.replace(this._mapToRadixRegExp, this.radix);
        var noSepCh = this._removeThousandsSeparators(ch);
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        var _normalizePrepare = normalizePrepare((_get2 = _get(_getPrototypeOf(MaskedNumber2.prototype), "doPrepare", this)).call.apply(_get2, [this, noSepCh].concat(args))), _normalizePrepare2 = _slicedToArray(_normalizePrepare, 2), prepCh = _normalizePrepare2[0], details = _normalizePrepare2[1];
        if (ch && !noSepCh)
          details.skip = true;
        return [prepCh, details];
      }
    }, {
      key: "_separatorsCount",
      value: function _separatorsCount(to) {
        var extendOnSeparators = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var count = 0;
        for (var pos = 0; pos < to; ++pos) {
          if (this._value.indexOf(this.thousandsSeparator, pos) === pos) {
            ++count;
            if (extendOnSeparators)
              to += this.thousandsSeparator.length;
          }
        }
        return count;
      }
    }, {
      key: "_separatorsCountFromSlice",
      value: function _separatorsCountFromSlice() {
        var slice = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this._value;
        return this._separatorsCount(this._removeThousandsSeparators(slice).length, true);
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
        var flags = arguments.length > 2 ? arguments[2] : void 0;
        var _this$_adjustRangeWit = this._adjustRangeWithSeparators(fromPos, toPos);
        var _this$_adjustRangeWit2 = _slicedToArray(_this$_adjustRangeWit, 2);
        fromPos = _this$_adjustRangeWit2[0];
        toPos = _this$_adjustRangeWit2[1];
        return this._removeThousandsSeparators(_get(_getPrototypeOf(MaskedNumber2.prototype), "extractInput", this).call(this, fromPos, toPos, flags));
      }
    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!this.thousandsSeparator)
          return _get(_getPrototypeOf(MaskedNumber2.prototype), "_appendCharRaw", this).call(this, ch, flags);
        var prevBeforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
        var prevBeforeTailSeparatorsCount = this._separatorsCountFromSlice(prevBeforeTailValue);
        this._value = this._removeThousandsSeparators(this.value);
        var appendDetails = _get(_getPrototypeOf(MaskedNumber2.prototype), "_appendCharRaw", this).call(this, ch, flags);
        this._value = this._insertThousandsSeparators(this._value);
        var beforeTailValue = flags.tail && flags._beforeTailState ? flags._beforeTailState._value : this._value;
        var beforeTailSeparatorsCount = this._separatorsCountFromSlice(beforeTailValue);
        appendDetails.tailShift += (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length;
        appendDetails.skip = !appendDetails.rawInserted && ch === this.thousandsSeparator;
        return appendDetails;
      }
    }, {
      key: "_findSeparatorAround",
      value: function _findSeparatorAround(pos) {
        if (this.thousandsSeparator) {
          var searchFrom = pos - this.thousandsSeparator.length + 1;
          var separatorPos = this.value.indexOf(this.thousandsSeparator, searchFrom);
          if (separatorPos <= pos)
            return separatorPos;
        }
        return -1;
      }
    }, {
      key: "_adjustRangeWithSeparators",
      value: function _adjustRangeWithSeparators(from, to) {
        var separatorAroundFromPos = this._findSeparatorAround(from);
        if (separatorAroundFromPos >= 0)
          from = separatorAroundFromPos;
        var separatorAroundToPos = this._findSeparatorAround(to);
        if (separatorAroundToPos >= 0)
          to = separatorAroundToPos + this.thousandsSeparator.length;
        return [from, to];
      }
    }, {
      key: "remove",
      value: function remove() {
        var fromPos = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
        var toPos = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.value.length;
        var _this$_adjustRangeWit3 = this._adjustRangeWithSeparators(fromPos, toPos);
        var _this$_adjustRangeWit4 = _slicedToArray(_this$_adjustRangeWit3, 2);
        fromPos = _this$_adjustRangeWit4[0];
        toPos = _this$_adjustRangeWit4[1];
        var valueBeforePos = this.value.slice(0, fromPos);
        var valueAfterPos = this.value.slice(toPos);
        var prevBeforeTailSeparatorsCount = this._separatorsCount(valueBeforePos.length);
        this._value = this._insertThousandsSeparators(this._removeThousandsSeparators(valueBeforePos + valueAfterPos));
        var beforeTailSeparatorsCount = this._separatorsCountFromSlice(valueBeforePos);
        return new ChangeDetails({
          tailShift: (beforeTailSeparatorsCount - prevBeforeTailSeparatorsCount) * this.thousandsSeparator.length
        });
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos(cursorPos, direction) {
        if (!this.thousandsSeparator)
          return cursorPos;
        switch (direction) {
          case DIRECTION.NONE:
          case DIRECTION.LEFT:
          case DIRECTION.FORCE_LEFT: {
            var separatorAtLeftPos = this._findSeparatorAround(cursorPos - 1);
            if (separatorAtLeftPos >= 0) {
              var separatorAtLeftEndPos = separatorAtLeftPos + this.thousandsSeparator.length;
              if (cursorPos < separatorAtLeftEndPos || this.value.length <= separatorAtLeftEndPos || direction === DIRECTION.FORCE_LEFT) {
                return separatorAtLeftPos;
              }
            }
            break;
          }
          case DIRECTION.RIGHT:
          case DIRECTION.FORCE_RIGHT: {
            var separatorAtRightPos = this._findSeparatorAround(cursorPos);
            if (separatorAtRightPos >= 0) {
              return separatorAtRightPos + this.thousandsSeparator.length;
            }
          }
        }
        return cursorPos;
      }
    }, {
      key: "doValidate",
      value: function doValidate(flags) {
        var regexp = flags.input ? this._numberRegExpInput : this._numberRegExp;
        var valid = regexp.test(this._removeThousandsSeparators(this.value));
        if (valid) {
          var number = this.number;
          valid = valid && !isNaN(number) && (this.min == null || this.min >= 0 || this.min <= this.number) && (this.max == null || this.max <= 0 || this.number <= this.max);
        }
        return valid && _get(_getPrototypeOf(MaskedNumber2.prototype), "doValidate", this).call(this, flags);
      }
    }, {
      key: "doCommit",
      value: function doCommit() {
        if (this.value) {
          var number = this.number;
          var validnum = number;
          if (this.min != null)
            validnum = Math.max(validnum, this.min);
          if (this.max != null)
            validnum = Math.min(validnum, this.max);
          if (validnum !== number)
            this.unmaskedValue = String(validnum);
          var formatted = this.value;
          if (this.normalizeZeros)
            formatted = this._normalizeZeros(formatted);
          if (this.padFractionalZeros && this.scale > 0)
            formatted = this._padFractionalZeros(formatted);
          this._value = formatted;
        }
        _get(_getPrototypeOf(MaskedNumber2.prototype), "doCommit", this).call(this);
      }
    }, {
      key: "_normalizeZeros",
      value: function _normalizeZeros(value) {
        var parts = this._removeThousandsSeparators(value).split(this.radix);
        parts[0] = parts[0].replace(/^(\D*)(0*)(\d*)/, function(match, sign, zeros, num) {
          return sign + num;
        });
        if (value.length && !/\d$/.test(parts[0]))
          parts[0] = parts[0] + "0";
        if (parts.length > 1) {
          parts[1] = parts[1].replace(/0*$/, "");
          if (!parts[1].length)
            parts.length = 1;
        }
        return this._insertThousandsSeparators(parts.join(this.radix));
      }
    }, {
      key: "_padFractionalZeros",
      value: function _padFractionalZeros(value) {
        if (!value)
          return value;
        var parts = value.split(this.radix);
        if (parts.length < 2)
          parts.push("");
        parts[1] = parts[1].padEnd(this.scale, "0");
        return parts.join(this.radix);
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix, ".");
      },
      set: function set2(unmaskedValue) {
        _set(_getPrototypeOf(MaskedNumber2.prototype), "unmaskedValue", unmaskedValue.replace(".", this.radix), this, true);
      }
    }, {
      key: "typedValue",
      get: function get() {
        return Number(this.unmaskedValue);
      },
      set: function set2(n2) {
        _set(_getPrototypeOf(MaskedNumber2.prototype), "unmaskedValue", String(n2), this, true);
      }
    }, {
      key: "number",
      get: function get() {
        return this.typedValue;
      },
      set: function set2(number) {
        this.typedValue = number;
      }
    }, {
      key: "allowNegative",
      get: function get() {
        return this.signed || this.min != null && this.min < 0 || this.max != null && this.max < 0;
      }
    }]);
    return MaskedNumber2;
  }(Masked);
  MaskedNumber.DEFAULTS = {
    radix: ",",
    thousandsSeparator: "",
    mapToRadix: ["."],
    scale: 2,
    signed: false,
    normalizeZeros: true,
    padFractionalZeros: false
  };
  IMask.MaskedNumber = MaskedNumber;

  // node_modules/imask/esm/masked/function.js
  var MaskedFunction = /* @__PURE__ */ function(_Masked) {
    _inherits(MaskedFunction2, _Masked);
    var _super = _createSuper(MaskedFunction2);
    function MaskedFunction2() {
      _classCallCheck(this, MaskedFunction2);
      return _super.apply(this, arguments);
    }
    _createClass(MaskedFunction2, [{
      key: "_update",
      value: function _update(opts) {
        if (opts.mask)
          opts.validate = opts.mask;
        _get(_getPrototypeOf(MaskedFunction2.prototype), "_update", this).call(this, opts);
      }
    }]);
    return MaskedFunction2;
  }(Masked);
  IMask.MaskedFunction = MaskedFunction;

  // node_modules/imask/esm/masked/dynamic.js
  var _excluded5 = ["compiledMasks", "currentMaskRef", "currentMask"];
  var MaskedDynamic = /* @__PURE__ */ function(_Masked) {
    _inherits(MaskedDynamic2, _Masked);
    var _super = _createSuper(MaskedDynamic2);
    function MaskedDynamic2(opts) {
      var _this;
      _classCallCheck(this, MaskedDynamic2);
      _this = _super.call(this, Object.assign({}, MaskedDynamic2.DEFAULTS, opts));
      _this.currentMask = null;
      return _this;
    }
    _createClass(MaskedDynamic2, [{
      key: "_update",
      value: function _update(opts) {
        _get(_getPrototypeOf(MaskedDynamic2.prototype), "_update", this).call(this, opts);
        if ("mask" in opts) {
          this.compiledMasks = Array.isArray(opts.mask) ? opts.mask.map(function(m2) {
            return createMask(m2);
          }) : [];
        }
      }
    }, {
      key: "_appendCharRaw",
      value: function _appendCharRaw(ch) {
        var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var details = this._applyDispatch(ch, flags);
        if (this.currentMask) {
          details.aggregate(this.currentMask._appendChar(ch, flags));
        }
        return details;
      }
    }, {
      key: "_applyDispatch",
      value: function _applyDispatch() {
        var appended = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
        var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var prevValueBeforeTail = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._value : this.value;
        var inputValue = this.rawInputValue;
        var insertValue = flags.tail && flags._beforeTailState != null ? flags._beforeTailState._rawInputValue : inputValue;
        var tailValue = inputValue.slice(insertValue.length);
        var prevMask = this.currentMask;
        var details = new ChangeDetails();
        var prevMaskState = prevMask && prevMask.state;
        this.currentMask = this.doDispatch(appended, Object.assign({}, flags));
        if (this.currentMask) {
          if (this.currentMask !== prevMask) {
            this.currentMask.reset();
            if (insertValue) {
              var d2 = this.currentMask.append(insertValue, {
                raw: true
              });
              details.tailShift = d2.inserted.length - prevValueBeforeTail.length;
            }
            if (tailValue) {
              details.tailShift += this.currentMask.append(tailValue, {
                raw: true,
                tail: true
              }).tailShift;
            }
          } else {
            this.currentMask.state = prevMaskState;
          }
        }
        return details;
      }
    }, {
      key: "_appendPlaceholder",
      value: function _appendPlaceholder() {
        var details = this._applyDispatch.apply(this, arguments);
        if (this.currentMask) {
          details.aggregate(this.currentMask._appendPlaceholder());
        }
        return details;
      }
    }, {
      key: "_appendEager",
      value: function _appendEager() {
        var details = this._applyDispatch.apply(this, arguments);
        if (this.currentMask) {
          details.aggregate(this.currentMask._appendEager());
        }
        return details;
      }
    }, {
      key: "doDispatch",
      value: function doDispatch(appended) {
        var flags = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        return this.dispatch(appended, this, flags);
      }
    }, {
      key: "doValidate",
      value: function doValidate() {
        var _get2, _this$currentMask;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        return (_get2 = _get(_getPrototypeOf(MaskedDynamic2.prototype), "doValidate", this)).call.apply(_get2, [this].concat(args)) && (!this.currentMask || (_this$currentMask = this.currentMask).doValidate.apply(_this$currentMask, args));
      }
    }, {
      key: "reset",
      value: function reset() {
        var _this$currentMask2;
        (_this$currentMask2 = this.currentMask) === null || _this$currentMask2 === void 0 ? void 0 : _this$currentMask2.reset();
        this.compiledMasks.forEach(function(m2) {
          return m2.reset();
        });
      }
    }, {
      key: "value",
      get: function get() {
        return this.currentMask ? this.currentMask.value : "";
      },
      set: function set2(value) {
        _set(_getPrototypeOf(MaskedDynamic2.prototype), "value", value, this, true);
      }
    }, {
      key: "unmaskedValue",
      get: function get() {
        return this.currentMask ? this.currentMask.unmaskedValue : "";
      },
      set: function set2(unmaskedValue) {
        _set(_getPrototypeOf(MaskedDynamic2.prototype), "unmaskedValue", unmaskedValue, this, true);
      }
    }, {
      key: "typedValue",
      get: function get() {
        return this.currentMask ? this.currentMask.typedValue : "";
      },
      set: function set2(value) {
        var unmaskedValue = String(value);
        if (this.currentMask) {
          this.currentMask.typedValue = value;
          unmaskedValue = this.currentMask.unmaskedValue;
        }
        this.unmaskedValue = unmaskedValue;
      }
    }, {
      key: "isComplete",
      get: function get() {
        var _this$currentMask3;
        return Boolean((_this$currentMask3 = this.currentMask) === null || _this$currentMask3 === void 0 ? void 0 : _this$currentMask3.isComplete);
      }
    }, {
      key: "isFilled",
      get: function get() {
        var _this$currentMask4;
        return Boolean((_this$currentMask4 = this.currentMask) === null || _this$currentMask4 === void 0 ? void 0 : _this$currentMask4.isFilled);
      }
    }, {
      key: "remove",
      value: function remove() {
        var details = new ChangeDetails();
        if (this.currentMask) {
          var _this$currentMask5;
          details.aggregate((_this$currentMask5 = this.currentMask).remove.apply(_this$currentMask5, arguments)).aggregate(this._applyDispatch());
        }
        return details;
      }
    }, {
      key: "state",
      get: function get() {
        return Object.assign({}, _get(_getPrototypeOf(MaskedDynamic2.prototype), "state", this), {
          _rawInputValue: this.rawInputValue,
          compiledMasks: this.compiledMasks.map(function(m2) {
            return m2.state;
          }),
          currentMaskRef: this.currentMask,
          currentMask: this.currentMask && this.currentMask.state
        });
      },
      set: function set2(state) {
        var compiledMasks = state.compiledMasks, currentMaskRef = state.currentMaskRef, currentMask = state.currentMask, maskedState = _objectWithoutProperties(state, _excluded5);
        this.compiledMasks.forEach(function(m2, mi) {
          return m2.state = compiledMasks[mi];
        });
        if (currentMaskRef != null) {
          this.currentMask = currentMaskRef;
          this.currentMask.state = currentMask;
        }
        _set(_getPrototypeOf(MaskedDynamic2.prototype), "state", maskedState, this, true);
      }
    }, {
      key: "extractInput",
      value: function extractInput() {
        var _this$currentMask6;
        return this.currentMask ? (_this$currentMask6 = this.currentMask).extractInput.apply(_this$currentMask6, arguments) : "";
      }
    }, {
      key: "extractTail",
      value: function extractTail() {
        var _this$currentMask7, _get3;
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        return this.currentMask ? (_this$currentMask7 = this.currentMask).extractTail.apply(_this$currentMask7, args) : (_get3 = _get(_getPrototypeOf(MaskedDynamic2.prototype), "extractTail", this)).call.apply(_get3, [this].concat(args));
      }
    }, {
      key: "doCommit",
      value: function doCommit() {
        if (this.currentMask)
          this.currentMask.doCommit();
        _get(_getPrototypeOf(MaskedDynamic2.prototype), "doCommit", this).call(this);
      }
    }, {
      key: "nearestInputPos",
      value: function nearestInputPos() {
        var _this$currentMask8, _get4;
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
        return this.currentMask ? (_this$currentMask8 = this.currentMask).nearestInputPos.apply(_this$currentMask8, args) : (_get4 = _get(_getPrototypeOf(MaskedDynamic2.prototype), "nearestInputPos", this)).call.apply(_get4, [this].concat(args));
      }
    }, {
      key: "overwrite",
      get: function get() {
        return this.currentMask ? this.currentMask.overwrite : _get(_getPrototypeOf(MaskedDynamic2.prototype), "overwrite", this);
      },
      set: function set2(overwrite) {
        console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings');
      }
    }, {
      key: "eager",
      get: function get() {
        return this.currentMask ? this.currentMask.eager : _get(_getPrototypeOf(MaskedDynamic2.prototype), "eager", this);
      },
      set: function set2(eager) {
        console.warn('"eager" option is not available in dynamic mask, use this option in siblings');
      }
    }, {
      key: "maskEquals",
      value: function maskEquals(mask) {
        return Array.isArray(mask) && this.compiledMasks.every(function(m2, mi) {
          var _mask$mi;
          return m2.maskEquals((_mask$mi = mask[mi]) === null || _mask$mi === void 0 ? void 0 : _mask$mi.mask);
        });
      }
    }]);
    return MaskedDynamic2;
  }(Masked);
  MaskedDynamic.DEFAULTS = {
    dispatch: function dispatch(appended, masked, flags) {
      if (!masked.compiledMasks.length)
        return;
      var inputValue = masked.rawInputValue;
      var inputs = masked.compiledMasks.map(function(m2, index) {
        m2.reset();
        m2.append(inputValue, {
          raw: true
        });
        m2.append(appended, flags);
        var weight = m2.rawInputValue.length;
        return {
          weight,
          index
        };
      });
      inputs.sort(function(i1, i2) {
        return i2.weight - i1.weight;
      });
      return masked.compiledMasks[inputs[0].index];
    }
  };
  IMask.MaskedDynamic = MaskedDynamic;

  // node_modules/imask/esm/masked/pipe.js
  var PIPE_TYPE = {
    MASKED: "value",
    UNMASKED: "unmaskedValue",
    TYPED: "typedValue"
  };
  function createPipe(mask) {
    var from = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : PIPE_TYPE.MASKED;
    var to = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : PIPE_TYPE.MASKED;
    var masked = createMask(mask);
    return function(value) {
      return masked.runIsolated(function(m2) {
        m2[from] = value;
        return m2[to];
      });
    };
  }
  function pipe(value) {
    for (var _len = arguments.length, pipeArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      pipeArgs[_key - 1] = arguments[_key];
    }
    return createPipe.apply(void 0, pipeArgs)(value);
  }
  IMask.PIPE_TYPE = PIPE_TYPE;
  IMask.createPipe = createPipe;
  IMask.pipe = pipe;

  // node_modules/imask/esm/index.js
  try {
    globalThis.IMask = IMask;
  } catch (e2) {
  }

  // resources/js/app.js
  new import_air_datepicker.default("#rangeDateFrom");
  new import_air_datepicker.default("#rangeDateTo");
  (function($2) {
    $2(".burger").click(function() {
      $2("#burger").toggleClass("active");
    });
    $2(".accordeon_headline").on("click", function() {
      $2(this).parent().toggleClass("open");
    });
    $2("body").click(function(e2) {
      if ($2(e2.target).is(".js-close")) {
        $2("body").removeClass("modal-active");
      }
    });
    $2(".js-modal-init").click(function(e2) {
      let car_id2 = $2(e2.target).parents(".car").data("id");
      let modal_inner2 = $2(".modal");
      console.log(car_id2);
      $2.ajax({
        url: "/wp-admin/admin-ajax.php",
        type: "POST",
        dataType: "json",
        data: {
          action: "get_modal",
          car_id: car_id2
        },
        success: function(data) {
          modal_inner2.html(data.data);
          $2("body").addClass("modal-active");
          var phoneMask = IMask(document.getElementById("tel"), {
            mask: "+{0}(000)000-00-00"
          });
          const mainCarousel = new y(document.querySelector("#slider"), {
            Dots: false
          });
          const thumbCarousel = new y(document.querySelector("#thumbs"), {
            Sync: {
              target: mainCarousel,
              friction: 0
            },
            Dots: false,
            Navigation: false,
            center: true,
            infinite: false
          });
        },
        error: function(jqXHR, status, errorThrown) {
          console.log("\u041E\u0428\u0418\u0411\u041A\u0410: " + errorThrown);
        }
      });
    });
    $2("#submit_form").submit(function() {
      $2.ajax({
        url: "/wp-admin/admin-ajax.php",
        type: "POST",
        dataType: "json",
        data: {
          action: "submit_modal",
          car_id
        },
        success: function(data) {
          modal_inner.html(data.data);
          $2("body").addClass("modal-active");
        },
        error: function(jqXHR, status, errorThrown) {
          console.log("\u041E\u0428\u0418\u0411\u041A\u0410: " + errorThrown);
        }
      });
    });
  })(jQuery);
})();
