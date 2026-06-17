"use strict";
var __dsPreview = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // ds-raw:__ds_raw__
  var require_ds_raw = __commonJS({
    "ds-raw:__ds_raw__"(exports, module) {
      module.exports = window.WhatNow;
    }
  });

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      var R = window.React;
      function jsx2(t, p, k) {
        return R.createElement(t, k === void 0 ? p : Object.assign({ key: k }, p));
      }
      module.exports = R;
      module.exports.jsx = jsx2;
      module.exports.jsxs = jsx2;
      module.exports.jsxDEV = jsx2;
      module.exports.Fragment = R.Fragment;
    }
  });

  // .design-sync/previews/VisualAnalytics.tsx
  var VisualAnalytics_exports = {};
  __export(VisualAnalytics_exports, {
    CareerSalary: () => CareerSalary,
    ExamTrends: () => ExamTrends
  });

  // ds-shim:ds
  var ds_exports = {};
  __export(ds_exports, {
    default: () => ds_default
  });
  __reExport(ds_exports, __toESM(require_ds_raw()));
  var g = window.WhatNow;
  var ds_default = "default" in g ? g.default : g;

  // .design-sync/previews/VisualAnalytics.tsx
  var import_jsx_runtime = __toESM(require_react_shim());
  var examData = {
    trends: [
      { year: 2021, applicants: 58e3, seats: 1100 },
      { year: 2022, applicants: 64e3, seats: 1180 },
      { year: 2023, applicants: 71e3, seats: 1240 },
      { year: 2024, applicants: 79e3, seats: 1300 },
      { year: 2025, applicants: 86e3, seats: 1360 }
    ],
    seatFunnel: { applicants: 86e3, seats: 1360 }
  };
  var careerData = {
    jobs: [
      { year: 2021, openings: 4200 },
      { year: 2022, openings: 5100 },
      { year: 2023, openings: 6400 },
      { year: 2024, openings: 7800 },
      { year: 2025, openings: 9300 }
    ],
    salaries: [
      { level: "Entry", levelHi: "प्रवेश", amount: "₹6–9 LPA", numericAmount: 7.5 },
      { level: "Mid", levelHi: "मध्य", amount: "₹14–22 LPA", numericAmount: 18 },
      { level: "Senior", levelHi: "वरिष्ठ", amount: "₹30–45 LPA", numericAmount: 37 },
      { level: "Lead", levelHi: "लीड", amount: "₹55–80 LPA", numericAmount: 67 }
    ]
  };
  var ExamTrends = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.LanguageProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.VisualAnalytics, { type: "exam", data: examData, colorTheme: "indigo" }) });
  var CareerSalary = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.LanguageProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ds_exports.VisualAnalytics, { type: "career", data: careerData, colorTheme: "teal" }) });
  return __toCommonJS(VisualAnalytics_exports);
})();
