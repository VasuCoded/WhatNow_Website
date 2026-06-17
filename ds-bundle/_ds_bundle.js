/* @ds-bundle: {"namespace":"WhatNow","components":[{"name":"AdminNoticeBoard","sourcePath":"components/general/AdminNoticeBoard/AdminNoticeBoard.jsx"},{"name":"Button","sourcePath":"components/general/Button/Button.jsx"},{"name":"ComingSoon","sourcePath":"components/general/ComingSoon/ComingSoon.jsx"},{"name":"ContextMenu","sourcePath":"components/general/ContextMenu/ContextMenu.jsx"},{"name":"FeaturedGuides","sourcePath":"components/home/FeaturedGuides/FeaturedGuides.jsx"},{"name":"Footer","sourcePath":"components/general/Footer/Footer.jsx"},{"name":"Hero","sourcePath":"components/home/Hero/Hero.jsx"},{"name":"Marquee","sourcePath":"components/home/Marquee/Marquee.jsx"},{"name":"Navbar","sourcePath":"components/general/Navbar/Navbar.jsx"},{"name":"NoticeBoard","sourcePath":"components/general/NoticeBoard/NoticeBoard.jsx"},{"name":"ScrollVelocity","sourcePath":"components/general/ScrollVelocity/ScrollVelocity.jsx"},{"name":"SearchModal","sourcePath":"components/general/SearchModal/SearchModal.jsx"},{"name":"Testimonials","sourcePath":"components/home/Testimonials/Testimonials.jsx"},{"name":"VisualAnalytics","sourcePath":"components/general/VisualAnalytics/VisualAnalytics.jsx"},{"name":"WhyWhatnow","sourcePath":"components/home/WhyWhatnow/WhyWhatnow.jsx"}],"sourceHashes":{"components/general/AdminNoticeBoard/AdminNoticeBoard.jsx":"20f5cd89d7c6","components/general/AdminNoticeBoard/AdminNoticeBoard.d.ts":"5cbdf3a7db7a","components/general/AdminNoticeBoard/AdminNoticeBoard.prompt.md":"27b3dd1c0728","components/general/Button/Button.jsx":"ec79998ec8ba","components/general/Button/Button.d.ts":"91d233af0243","components/general/Button/Button.prompt.md":"f702aac84048","components/general/ComingSoon/ComingSoon.jsx":"4fb5e87fcfce","components/general/ComingSoon/ComingSoon.d.ts":"4d3f4f83ac95","components/general/ComingSoon/ComingSoon.prompt.md":"533bf66fbeec","components/general/ContextMenu/ContextMenu.jsx":"d70532ce4e85","components/general/ContextMenu/ContextMenu.d.ts":"50f182afb1e6","components/general/ContextMenu/ContextMenu.prompt.md":"1608446cafd7","components/home/FeaturedGuides/FeaturedGuides.jsx":"aab270104182","components/home/FeaturedGuides/FeaturedGuides.d.ts":"ad156f1d0241","components/home/FeaturedGuides/FeaturedGuides.prompt.md":"f83c5e1c49f1","components/general/Footer/Footer.jsx":"c368527dc6d6","components/general/Footer/Footer.d.ts":"3e35a3322f47","components/general/Footer/Footer.prompt.md":"698dc9a2fc26","components/home/Hero/Hero.jsx":"03cf6adc2957","components/home/Hero/Hero.d.ts":"065a7db4db98","components/home/Hero/Hero.prompt.md":"c779f77105df","components/home/Marquee/Marquee.jsx":"3f7765798fac","components/home/Marquee/Marquee.d.ts":"36f6d5c30d4f","components/home/Marquee/Marquee.prompt.md":"620c9aa2b303","components/general/Navbar/Navbar.jsx":"c6a12f5d5877","components/general/Navbar/Navbar.d.ts":"1129dff101ba","components/general/Navbar/Navbar.prompt.md":"c5f7e4f9a71d","components/general/NoticeBoard/NoticeBoard.jsx":"0d0c03842bab","components/general/NoticeBoard/NoticeBoard.d.ts":"3681af192139","components/general/NoticeBoard/NoticeBoard.prompt.md":"1a12baef4aee","components/general/ScrollVelocity/ScrollVelocity.jsx":"b72dda3fdcef","components/general/ScrollVelocity/ScrollVelocity.d.ts":"f68326d2b757","components/general/ScrollVelocity/ScrollVelocity.prompt.md":"d54541980354","components/general/SearchModal/SearchModal.jsx":"4b0e1ad9c5fc","components/general/SearchModal/SearchModal.d.ts":"b112480cc13a","components/general/SearchModal/SearchModal.prompt.md":"aa0bbb144bd3","components/home/Testimonials/Testimonials.jsx":"1b8346dc6d31","components/home/Testimonials/Testimonials.d.ts":"b79a2ba08931","components/home/Testimonials/Testimonials.prompt.md":"0bdf5a1715a5","components/general/VisualAnalytics/VisualAnalytics.jsx":"d9e73a3925d3","components/general/VisualAnalytics/VisualAnalytics.d.ts":"7129e4f77f99","components/general/VisualAnalytics/VisualAnalytics.prompt.md":"9505b3a50ce4","components/home/WhyWhatnow/WhyWhatnow.jsx":"fc5af4bb3893","components/home/WhyWhatnow/WhyWhatnow.d.ts":"ac9ec22bd71e","components/home/WhyWhatnow/WhyWhatnow.prompt.md":"5bd83a02497f"},"inlinedExternals":["@iconify/react","framer-motion","motion-dom","motion-utils"],"builtBy":"cc-design-sync"} */
"use strict";
var WhatNow = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
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
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // shim:react-shim
  var require_react_shim = __commonJS({
    "shim:react-shim"(exports, module) {
      var R = window.React;
      function jsx6(t, p, k) {
        return R.createElement(t, k === void 0 ? p : Object.assign({ key: k }, p));
      }
      module.exports = R;
      module.exports.jsx = jsx6;
      module.exports.jsxs = jsx6;
      module.exports.jsxDEV = jsx6;
      module.exports.Fragment = R.Fragment;
    }
  });

  // .design-sync/ds-src/entry.tsx
  var entry_exports = {};
  __export(entry_exports, {
    AdminNoticeBoard: () => AdminNoticeBoard,
    Button: () => Button,
    ComingSoon: () => ComingSoon,
    ContextMenu: () => ContextMenu,
    FeaturedGuides: () => FeaturedGuides,
    Footer: () => Footer,
    Hero: () => Hero,
    LanguageProvider: () => LanguageProvider,
    Marquee: () => Marquee,
    MotionGlobalConfig: () => MotionGlobalConfig,
    Navbar: () => Navbar,
    NoticeBoard: () => NoticeBoard,
    ScrollVelocity: () => ScrollVelocity,
    SearchModal: () => SearchModal,
    Testimonials: () => Testimonials,
    VisualAnalytics: () => VisualAnalytics,
    WhyWhatnow: () => WhyWhatnow
  });

  // .design-sync/ds-src/process-polyfill.ts
  var g = globalThis;
  if (typeof g.process === "undefined") {
    g.process = {
      env: { NODE_ENV: "development" },
      platform: "browser",
      nextTick: (fn) => {
        Promise.resolve().then(() => fn());
      }
    };
  } else if (!g.process.env) {
    g.process.env = { NODE_ENV: "development" };
  }

  // src/components/AdminNoticeBoard.tsx
  var import_react30 = __toESM(require_react_shim());

  // node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
  var import_jsx_runtime3 = __toESM(require_react_shim(), 1);
  var import_react10 = __toESM(require_react_shim(), 1);

  // node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
  var import_react = __toESM(require_react_shim(), 1);
  var LayoutGroupContext = (0, import_react.createContext)({});

  // node_modules/framer-motion/dist/es/utils/use-constant.mjs
  var import_react2 = __toESM(require_react_shim(), 1);
  function useConstant(init) {
    const ref = (0, import_react2.useRef)(null);
    if (ref.current === null) {
      ref.current = init();
    }
    return ref.current;
  }

  // node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
  var import_react3 = __toESM(require_react_shim(), 1);

  // node_modules/framer-motion/dist/es/utils/is-browser.mjs
  var isBrowser = typeof window !== "undefined";

  // node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
  var useIsomorphicLayoutEffect = isBrowser ? import_react3.useLayoutEffect : import_react3.useEffect;

  // node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
  var import_jsx_runtime2 = __toESM(require_react_shim(), 1);
  var React4 = __toESM(require_react_shim(), 1);
  var import_react7 = __toESM(require_react_shim(), 1);

  // node_modules/framer-motion/dist/es/context/PresenceContext.mjs
  var import_react4 = __toESM(require_react_shim(), 1);
  var PresenceContext = /* @__PURE__ */ (0, import_react4.createContext)(null);

  // node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
  var import_jsx_runtime = __toESM(require_react_shim(), 1);

  // node_modules/motion-utils/dist/es/array.mjs
  function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1)
      arr.push(item);
  }
  function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1)
      arr.splice(index, 1);
  }

  // node_modules/motion-utils/dist/es/clamp.mjs
  var clamp = (min, max, v) => {
    if (v > max)
      return max;
    if (v < min)
      return min;
    return v;
  };

  // node_modules/motion-utils/dist/es/format-error-message.mjs
  function formatErrorMessage(message, errorCode) {
    return errorCode ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}` : message;
  }

  // node_modules/motion-utils/dist/es/errors.mjs
  var warning = () => {
  };
  var invariant = () => {
  };
  if (typeof process !== "undefined" && true) {
    warning = (check, message, errorCode) => {
      if (!check && typeof console !== "undefined") {
        console.warn(formatErrorMessage(message, errorCode));
      }
    };
    invariant = (check, message, errorCode) => {
      if (!check) {
        throw new Error(formatErrorMessage(message, errorCode));
      }
    };
  }

  // node_modules/motion-utils/dist/es/global-config.mjs
  var MotionGlobalConfig = {};

  // node_modules/motion-utils/dist/es/is-numerical-string.mjs
  var isNumericalString = (v) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);

  // node_modules/motion-utils/dist/es/is-object.mjs
  function isObject(value) {
    return typeof value === "object" && value !== null;
  }

  // node_modules/motion-utils/dist/es/is-zero-value-string.mjs
  var isZeroValueString = (v) => /^0[^.\s]+$/u.test(v);

  // node_modules/motion-utils/dist/es/memo.mjs
  // @__NO_SIDE_EFFECTS__
  function memo(callback) {
    let result;
    return () => {
      if (result === void 0)
        result = callback();
      return result;
    };
  }

  // node_modules/motion-utils/dist/es/noop.mjs
  var noop = /* @__NO_SIDE_EFFECTS__ */ (any) => any;

  // node_modules/motion-utils/dist/es/pipe.mjs
  var combineFunctions = (a, b) => (v) => b(a(v));
  var pipe = (...transformers) => transformers.reduce(combineFunctions);

  // node_modules/motion-utils/dist/es/progress.mjs
  var progress = /* @__NO_SIDE_EFFECTS__ */ (from, to, value) => {
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
  };

  // node_modules/motion-utils/dist/es/subscription-manager.mjs
  var SubscriptionManager = class {
    constructor() {
      this.subscriptions = [];
    }
    add(handler) {
      addUniqueItem(this.subscriptions, handler);
      return () => removeItem(this.subscriptions, handler);
    }
    notify(a, b, c) {
      const numSubscriptions = this.subscriptions.length;
      if (!numSubscriptions)
        return;
      if (numSubscriptions === 1) {
        this.subscriptions[0](a, b, c);
      } else {
        for (let i = 0; i < numSubscriptions; i++) {
          const handler = this.subscriptions[i];
          handler && handler(a, b, c);
        }
      }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  };

  // node_modules/motion-utils/dist/es/time-conversion.mjs
  var secondsToMilliseconds = /* @__NO_SIDE_EFFECTS__ */ (seconds) => seconds * 1e3;
  var millisecondsToSeconds = /* @__NO_SIDE_EFFECTS__ */ (milliseconds) => milliseconds / 1e3;

  // node_modules/motion-utils/dist/es/velocity-per-second.mjs
  function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1e3 / frameDuration) : 0;
  }

  // node_modules/motion-utils/dist/es/warn-once.mjs
  var warned = /* @__PURE__ */ new Set();
  function warnOnce(condition, message, errorCode) {
    if (condition || warned.has(message))
      return;
    console.warn(formatErrorMessage(message, errorCode));
    warned.add(message);
  }

  // node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs
  var calcBezier = (t, a1, a2) => (((1 - 3 * a2 + 3 * a1) * t + (3 * a2 - 6 * a1)) * t + 3 * a1) * t;
  var subdivisionPrecision = 1e-7;
  var subdivisionMaxIterations = 12;
  function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
      currentT = lowerBound + (upperBound - lowerBound) / 2;
      currentX = calcBezier(currentT, mX1, mX2) - x;
      if (currentX > 0) {
        upperBound = currentT;
      } else {
        lowerBound = currentT;
      }
    } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
    return currentT;
  }
  function cubicBezier(mX1, mY1, mX2, mY2) {
    if (mX1 === mY1 && mX2 === mY2)
      return noop;
    const getTForX = (aX) => binarySubdivide(aX, 0, 1, mX1, mX2);
    return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
  }

  // node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs
  var mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

  // node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs
  var reverseEasing = (easing) => (p) => 1 - easing(1 - p);

  // node_modules/motion-utils/dist/es/easing/back.mjs
  var backOut = /* @__PURE__ */ cubicBezier(0.33, 1.53, 0.69, 0.99);
  var backIn = /* @__PURE__ */ reverseEasing(backOut);
  var backInOut = /* @__PURE__ */ mirrorEasing(backIn);

  // node_modules/motion-utils/dist/es/easing/anticipate.mjs
  var anticipate = (p) => p >= 1 ? 1 : (p *= 2) < 1 ? 0.5 * backIn(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));

  // node_modules/motion-utils/dist/es/easing/circ.mjs
  var circIn = (p) => 1 - Math.sin(Math.acos(p));
  var circOut = reverseEasing(circIn);
  var circInOut = mirrorEasing(circIn);

  // node_modules/motion-utils/dist/es/easing/ease.mjs
  var easeIn = /* @__PURE__ */ cubicBezier(0.42, 0, 1, 1);
  var easeOut = /* @__PURE__ */ cubicBezier(0, 0, 0.58, 1);
  var easeInOut = /* @__PURE__ */ cubicBezier(0.42, 0, 0.58, 1);

  // node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs
  var isEasingArray = (ease2) => {
    return Array.isArray(ease2) && typeof ease2[0] !== "number";
  };

  // node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs
  var isBezierDefinition = (easing) => Array.isArray(easing) && typeof easing[0] === "number";

  // node_modules/motion-utils/dist/es/easing/utils/map.mjs
  var easingLookup = {
    linear: noop,
    easeIn,
    easeInOut,
    easeOut,
    circIn,
    circInOut,
    circOut,
    backIn,
    backInOut,
    backOut,
    anticipate
  };
  var isValidEasing = (easing) => {
    return typeof easing === "string";
  };
  var easingDefinitionToFunction = (definition) => {
    if (isBezierDefinition(definition)) {
      invariant(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`, "cubic-bezier-length");
      const [x1, y1, x2, y2] = definition;
      return cubicBezier(x1, y1, x2, y2);
    } else if (isValidEasing(definition)) {
      invariant(easingLookup[definition] !== void 0, `Invalid easing type '${definition}'`, "invalid-easing-type");
      return easingLookup[definition];
    }
    return definition;
  };

  // node_modules/motion-dom/dist/es/frameloop/order.mjs
  var stepsOrder = [
    "setup",
    // Compute
    "read",
    // Read
    "resolveKeyframes",
    // Write/Read/Write/Read
    "preUpdate",
    // Compute
    "update",
    // Compute
    "preRender",
    // Compute
    "render",
    // Write
    "postRender"
    // Compute
  ];

  // node_modules/motion-dom/dist/es/stats/buffer.mjs
  var statsBuffer = {
    value: null,
    addProjectionMetrics: null
  };

  // node_modules/motion-dom/dist/es/frameloop/render-step.mjs
  function createRenderStep(runNextFrame, stepName) {
    let thisFrame = /* @__PURE__ */ new Set();
    let nextFrame = /* @__PURE__ */ new Set();
    let isProcessing = false;
    let flushNextFrame = false;
    const toKeepAlive = /* @__PURE__ */ new WeakSet();
    let latestFrameData = {
      delta: 0,
      timestamp: 0,
      isProcessing: false
    };
    let numCalls = 0;
    function triggerCallback(callback) {
      if (toKeepAlive.has(callback)) {
        step.schedule(callback);
        runNextFrame();
      }
      numCalls++;
      callback(latestFrameData);
    }
    const step = {
      /**
       * Schedule a process to run on the next frame.
       */
      schedule: (callback, keepAlive = false, immediate = false) => {
        const addToCurrentFrame = immediate && isProcessing;
        const queue = addToCurrentFrame ? thisFrame : nextFrame;
        if (keepAlive)
          toKeepAlive.add(callback);
        queue.add(callback);
        return callback;
      },
      /**
       * Cancel the provided callback from running on the next frame.
       */
      cancel: (callback) => {
        nextFrame.delete(callback);
        toKeepAlive.delete(callback);
      },
      /**
       * Execute all schedule callbacks.
       */
      process: (frameData2) => {
        latestFrameData = frameData2;
        if (isProcessing) {
          flushNextFrame = true;
          return;
        }
        isProcessing = true;
        const prevFrame = thisFrame;
        thisFrame = nextFrame;
        nextFrame = prevFrame;
        thisFrame.forEach(triggerCallback);
        if (stepName && statsBuffer.value) {
          statsBuffer.value.frameloop[stepName].push(numCalls);
        }
        numCalls = 0;
        thisFrame.clear();
        isProcessing = false;
        if (flushNextFrame) {
          flushNextFrame = false;
          step.process(frameData2);
        }
      }
    };
    return step;
  }

  // node_modules/motion-dom/dist/es/frameloop/batcher.mjs
  var maxElapsed = 40;
  function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
    let runNextFrame = false;
    let useDefaultElapsed = true;
    const state = {
      delta: 0,
      timestamp: 0,
      isProcessing: false
    };
    const flagRunNextFrame = () => runNextFrame = true;
    const steps = stepsOrder.reduce((acc, key) => {
      acc[key] = createRenderStep(flagRunNextFrame, allowKeepAlive ? key : void 0);
      return acc;
    }, {});
    const { setup, read, resolveKeyframes, preUpdate, update, preRender, render: render2, postRender } = steps;
    const processBatch = () => {
      const useManualTiming = MotionGlobalConfig.useManualTiming;
      const timestamp = useManualTiming ? state.timestamp : performance.now();
      runNextFrame = false;
      if (!useManualTiming) {
        state.delta = useDefaultElapsed ? 1e3 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
      }
      state.timestamp = timestamp;
      state.isProcessing = true;
      setup.process(state);
      read.process(state);
      resolveKeyframes.process(state);
      preUpdate.process(state);
      update.process(state);
      preRender.process(state);
      render2.process(state);
      postRender.process(state);
      state.isProcessing = false;
      if (runNextFrame && allowKeepAlive) {
        useDefaultElapsed = false;
        scheduleNextBatch(processBatch);
      }
    };
    const wake = () => {
      runNextFrame = true;
      useDefaultElapsed = true;
      if (!state.isProcessing) {
        scheduleNextBatch(processBatch);
      }
    };
    const schedule = stepsOrder.reduce((acc, key) => {
      const step = steps[key];
      acc[key] = (process2, keepAlive = false, immediate = false) => {
        if (!runNextFrame)
          wake();
        return step.schedule(process2, keepAlive, immediate);
      };
      return acc;
    }, {});
    const cancel = (process2) => {
      for (let i = 0; i < stepsOrder.length; i++) {
        steps[stepsOrder[i]].cancel(process2);
      }
    };
    return { schedule, cancel, state, steps };
  }

  // node_modules/motion-dom/dist/es/frameloop/frame.mjs
  var { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps } = /* @__PURE__ */ createRenderBatcher(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : noop, true);

  // node_modules/motion-dom/dist/es/frameloop/sync-time.mjs
  var now;
  function clearTime() {
    now = void 0;
  }
  var time = {
    now: () => {
      if (now === void 0) {
        time.set(frameData.isProcessing || MotionGlobalConfig.useManualTiming ? frameData.timestamp : performance.now());
      }
      return now;
    },
    set: (newTime) => {
      now = newTime;
      queueMicrotask(clearTime);
    }
  };

  // node_modules/motion-dom/dist/es/stats/animation-count.mjs
  var activeAnimations = {
    layout: 0,
    mainThread: 0,
    waapi: 0
  };

  // node_modules/motion-dom/dist/es/animation/utils/is-css-variable.mjs
  var checkStringStartsWith = (token) => (key) => typeof key === "string" && key.startsWith(token);
  var isCSSVariableName = /* @__PURE__ */ checkStringStartsWith("--");
  var startsAsVariableToken = /* @__PURE__ */ checkStringStartsWith("var(--");
  var isCSSVariableToken = (value) => {
    const startsWithToken = startsAsVariableToken(value);
    if (!startsWithToken)
      return false;
    return singleCssVariableRegex.test(value.split("/*")[0].trim());
  };
  var singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
  function containsCSSVariable(value) {
    if (typeof value !== "string")
      return false;
    return value.split("/*")[0].includes("var(--");
  }

  // node_modules/motion-dom/dist/es/value/types/numbers/index.mjs
  var number = {
    test: (v) => typeof v === "number",
    parse: parseFloat,
    transform: (v) => v
  };
  var alpha = {
    ...number,
    transform: (v) => clamp(0, 1, v)
  };
  var scale = {
    ...number,
    default: 1
  };

  // node_modules/motion-dom/dist/es/value/types/utils/sanitize.mjs
  var sanitize = (v) => Math.round(v * 1e5) / 1e5;

  // node_modules/motion-dom/dist/es/value/types/utils/float-regex.mjs
  var floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

  // node_modules/motion-dom/dist/es/value/types/utils/is-nullish.mjs
  function isNullish(v) {
    return v == null;
  }

  // node_modules/motion-dom/dist/es/value/types/utils/single-color-regex.mjs
  var singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

  // node_modules/motion-dom/dist/es/value/types/color/utils.mjs
  var isColorString = (type, testProp) => (v) => {
    return Boolean(typeof v === "string" && singleColorRegex.test(v) && v.startsWith(type) || testProp && !isNullish(v) && Object.prototype.hasOwnProperty.call(v, testProp));
  };
  var splitColor = (aName, bName, cName) => (v) => {
    if (typeof v !== "string")
      return v;
    const [a, b, c, alpha2] = v.match(floatRegex);
    return {
      [aName]: parseFloat(a),
      [bName]: parseFloat(b),
      [cName]: parseFloat(c),
      alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
    };
  };

  // node_modules/motion-dom/dist/es/value/types/color/rgba.mjs
  var clampRgbUnit = (v) => clamp(0, 255, v);
  var rgbUnit = {
    ...number,
    transform: (v) => Math.round(clampRgbUnit(v))
  };
  var rgba = {
    test: /* @__PURE__ */ isColorString("rgb", "red"),
    parse: /* @__PURE__ */ splitColor("red", "green", "blue"),
    transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
  };

  // node_modules/motion-dom/dist/es/value/types/color/hex.mjs
  function parseHex(v) {
    let r = "";
    let g2 = "";
    let b = "";
    let a = "";
    if (v.length > 5) {
      r = v.substring(1, 3);
      g2 = v.substring(3, 5);
      b = v.substring(5, 7);
      a = v.substring(7, 9);
    } else {
      r = v.substring(1, 2);
      g2 = v.substring(2, 3);
      b = v.substring(3, 4);
      a = v.substring(4, 5);
      r += r;
      g2 += g2;
      b += b;
      a += a;
    }
    return {
      red: parseInt(r, 16),
      green: parseInt(g2, 16),
      blue: parseInt(b, 16),
      alpha: a ? parseInt(a, 16) / 255 : 1
    };
  }
  var hex = {
    test: /* @__PURE__ */ isColorString("#"),
    parse: parseHex,
    transform: rgba.transform
  };

  // node_modules/motion-dom/dist/es/value/types/numbers/units.mjs
  var createUnitType = /* @__NO_SIDE_EFFECTS__ */ (unit) => ({
    test: (v) => typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
    parse: parseFloat,
    transform: (v) => `${v}${unit}`
  });
  var degrees = /* @__PURE__ */ createUnitType("deg");
  var percent = /* @__PURE__ */ createUnitType("%");
  var px = /* @__PURE__ */ createUnitType("px");
  var vh = /* @__PURE__ */ createUnitType("vh");
  var vw = /* @__PURE__ */ createUnitType("vw");
  var progressPercentage = /* @__PURE__ */ (() => ({
    ...percent,
    parse: (v) => percent.parse(v) / 100,
    transform: (v) => percent.transform(v * 100)
  }))();

  // node_modules/motion-dom/dist/es/value/types/color/hsla.mjs
  var hsla = {
    test: /* @__PURE__ */ isColorString("hsl", "hue"),
    parse: /* @__PURE__ */ splitColor("hue", "saturation", "lightness"),
    transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
      return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
    }
  };

  // node_modules/motion-dom/dist/es/value/types/color/index.mjs
  var color = {
    test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
    parse: (v) => {
      if (rgba.test(v)) {
        return rgba.parse(v);
      } else if (hsla.test(v)) {
        return hsla.parse(v);
      } else {
        return hex.parse(v);
      }
    },
    transform: (v) => {
      return typeof v === "string" ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
    },
    getAnimatableNone: (v) => {
      const parsed = color.parse(v);
      parsed.alpha = 0;
      return color.transform(parsed);
    }
  };

  // node_modules/motion-dom/dist/es/value/types/utils/color-regex.mjs
  var colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

  // node_modules/motion-dom/dist/es/value/types/complex/index.mjs
  function test(v) {
    return isNaN(v) && typeof v === "string" && (v.match(floatRegex)?.length || 0) + (v.match(colorRegex)?.length || 0) > 0;
  }
  var NUMBER_TOKEN = "number";
  var COLOR_TOKEN = "color";
  var VAR_TOKEN = "var";
  var VAR_FUNCTION_TOKEN = "var(";
  var SPLIT_TOKEN = "${}";
  var complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function analyseComplexValue(value) {
    const originalValue = value.toString();
    const values = [];
    const indexes = {
      color: [],
      number: [],
      var: []
    };
    const types = [];
    let i = 0;
    const tokenised = originalValue.replace(complexRegex, (parsedValue) => {
      if (color.test(parsedValue)) {
        indexes.color.push(i);
        types.push(COLOR_TOKEN);
        values.push(color.parse(parsedValue));
      } else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
        indexes.var.push(i);
        types.push(VAR_TOKEN);
        values.push(parsedValue);
      } else {
        indexes.number.push(i);
        types.push(NUMBER_TOKEN);
        values.push(parseFloat(parsedValue));
      }
      ++i;
      return SPLIT_TOKEN;
    });
    const split = tokenised.split(SPLIT_TOKEN);
    return { values, split, indexes, types };
  }
  function parseComplexValue(v) {
    return analyseComplexValue(v).values;
  }
  function buildTransformer({ split, types }) {
    const numSections = split.length;
    return (v) => {
      let output = "";
      for (let i = 0; i < numSections; i++) {
        output += split[i];
        if (v[i] !== void 0) {
          const type = types[i];
          if (type === NUMBER_TOKEN) {
            output += sanitize(v[i]);
          } else if (type === COLOR_TOKEN) {
            output += color.transform(v[i]);
          } else {
            output += v[i];
          }
        }
      }
      return output;
    };
  }
  function createTransformer(source) {
    return buildTransformer(analyseComplexValue(source));
  }
  var convertNumbersToZero = (v) => typeof v === "number" ? 0 : color.test(v) ? color.getAnimatableNone(v) : v;
  var convertToZero = (value, splitBefore) => {
    if (typeof value === "number") {
      return splitBefore?.trim().endsWith("/") ? value : 0;
    }
    return convertNumbersToZero(value);
  };
  function getAnimatableNone(v) {
    const info = analyseComplexValue(v);
    const transformer = buildTransformer(info);
    return transformer(info.values.map((value, i) => convertToZero(value, info.split[i])));
  }
  var complex = {
    test,
    parse: parseComplexValue,
    createTransformer,
    getAnimatableNone
  };

  // node_modules/motion-dom/dist/es/value/types/color/hsla-to-rgba.mjs
  function hueToRgb(p, q, t) {
    if (t < 0)
      t += 1;
    if (t > 1)
      t -= 1;
    if (t < 1 / 6)
      return p + (q - p) * 6 * t;
    if (t < 1 / 2)
      return q;
    if (t < 2 / 3)
      return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }
  function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    let red = 0;
    let green = 0;
    let blue = 0;
    if (!saturation) {
      red = green = blue = lightness;
    } else {
      const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
      const p = 2 * lightness - q;
      red = hueToRgb(p, q, hue + 1 / 3);
      green = hueToRgb(p, q, hue);
      blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
      red: Math.round(red * 255),
      green: Math.round(green * 255),
      blue: Math.round(blue * 255),
      alpha: alpha2
    };
  }

  // node_modules/motion-dom/dist/es/utils/mix/immediate.mjs
  function mixImmediate(a, b) {
    return (p) => p > 0 ? b : a;
  }

  // node_modules/motion-dom/dist/es/utils/mix/number.mjs
  var mixNumber = (from, to, progress2) => {
    return from + (to - from) * progress2;
  };

  // node_modules/motion-dom/dist/es/utils/mix/color.mjs
  var mixLinearColor = (from, to, v) => {
    const fromExpo = from * from;
    const expo = v * (to * to - fromExpo) + fromExpo;
    return expo < 0 ? 0 : Math.sqrt(expo);
  };
  var colorTypes = [hex, rgba, hsla];
  var getColorType = (v) => colorTypes.find((type) => type.test(v));
  function asRGBA(color2) {
    const type = getColorType(color2);
    warning(Boolean(type), `'${color2}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable");
    if (!Boolean(type))
      return false;
    let model = type.parse(color2);
    if (type === hsla) {
      model = hslaToRgba(model);
    }
    return model;
  }
  var mixColor = (from, to) => {
    const fromRGBA = asRGBA(from);
    const toRGBA = asRGBA(to);
    if (!fromRGBA || !toRGBA) {
      return mixImmediate(from, to);
    }
    const blended = { ...fromRGBA };
    return (v) => {
      blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
      blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
      blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
      blended.alpha = mixNumber(fromRGBA.alpha, toRGBA.alpha, v);
      return rgba.transform(blended);
    };
  };

  // node_modules/motion-dom/dist/es/utils/mix/visibility.mjs
  var invisibleValues = /* @__PURE__ */ new Set(["none", "hidden"]);
  function mixVisibility(origin, target) {
    if (invisibleValues.has(origin)) {
      return (p) => p <= 0 ? origin : target;
    } else {
      return (p) => p >= 1 ? target : origin;
    }
  }

  // node_modules/motion-dom/dist/es/utils/mix/complex.mjs
  function mixNumber2(a, b) {
    return (p) => mixNumber(a, b, p);
  }
  function getMixer(a) {
    if (typeof a === "number") {
      return mixNumber2;
    } else if (typeof a === "string") {
      return isCSSVariableToken(a) ? mixImmediate : color.test(a) ? mixColor : mixComplex;
    } else if (Array.isArray(a)) {
      return mixArray;
    } else if (typeof a === "object") {
      return color.test(a) ? mixColor : mixObject;
    }
    return mixImmediate;
  }
  function mixArray(a, b) {
    const output = [...a];
    const numValues = output.length;
    const blendValue = a.map((v, i) => getMixer(v)(v, b[i]));
    return (p) => {
      for (let i = 0; i < numValues; i++) {
        output[i] = blendValue[i](p);
      }
      return output;
    };
  }
  function mixObject(a, b) {
    const output = { ...a, ...b };
    const blendValue = {};
    for (const key in output) {
      if (a[key] !== void 0 && b[key] !== void 0) {
        blendValue[key] = getMixer(a[key])(a[key], b[key]);
      }
    }
    return (v) => {
      for (const key in blendValue) {
        output[key] = blendValue[key](v);
      }
      return output;
    };
  }
  function matchOrder(origin, target) {
    const orderedOrigin = [];
    const pointers = { color: 0, var: 0, number: 0 };
    for (let i = 0; i < target.values.length; i++) {
      const type = target.types[i];
      const originIndex = origin.indexes[type][pointers[type]];
      const originValue = origin.values[originIndex] ?? 0;
      orderedOrigin[i] = originValue;
      pointers[type]++;
    }
    return orderedOrigin;
  }
  var mixComplex = (origin, target) => {
    const template = complex.createTransformer(target);
    const originStats = analyseComplexValue(origin);
    const targetStats = analyseComplexValue(target);
    const canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length;
    if (canInterpolate) {
      if (invisibleValues.has(origin) && !targetStats.values.length || invisibleValues.has(target) && !originStats.values.length) {
        return mixVisibility(origin, target);
      }
      return pipe(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
    } else {
      warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different");
      return mixImmediate(origin, target);
    }
  };

  // node_modules/motion-dom/dist/es/utils/mix/index.mjs
  function mix(from, to, p) {
    if (typeof from === "number" && typeof to === "number" && typeof p === "number") {
      return mixNumber(from, to, p);
    }
    const mixer = getMixer(from);
    return mixer(from, to);
  }

  // node_modules/motion-dom/dist/es/animation/drivers/frame.mjs
  var frameloopDriver = (update) => {
    const passTimestamp = ({ timestamp }) => update(timestamp);
    return {
      start: (keepAlive = true) => frame.update(passTimestamp, keepAlive),
      stop: () => cancelFrame(passTimestamp),
      /**
       * If we're processing this frame we can use the
       * framelocked timestamp to keep things in sync.
       */
      now: () => frameData.isProcessing ? frameData.timestamp : time.now()
    };
  };

  // node_modules/motion-dom/dist/es/animation/waapi/utils/linear.mjs
  var generateLinearEasing = (easing, duration, resolution = 10) => {
    let points = "";
    const numPoints = Math.max(Math.round(duration / resolution), 2);
    for (let i = 0; i < numPoints; i++) {
      points += Math.round(easing(i / (numPoints - 1)) * 1e4) / 1e4 + ", ";
    }
    return `linear(${points.substring(0, points.length - 2)})`;
  };

  // node_modules/motion-dom/dist/es/animation/generators/utils/calc-duration.mjs
  var maxGeneratorDuration = 2e4;
  function calcGeneratorDuration(generator) {
    let duration = 0;
    const timeStep = 50;
    let state = generator.next(duration);
    while (!state.done && duration < maxGeneratorDuration) {
      duration += timeStep;
      state = generator.next(duration);
    }
    return duration >= maxGeneratorDuration ? Infinity : duration;
  }

  // node_modules/motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs
  function createGeneratorEasing(options, scale2 = 100, createGenerator) {
    const generator = createGenerator({ ...options, keyframes: [0, scale2] });
    const duration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
    return {
      type: "keyframes",
      ease: (progress2) => {
        return generator.next(duration * progress2).value / scale2;
      },
      duration: millisecondsToSeconds(duration)
    };
  }

  // node_modules/motion-dom/dist/es/animation/generators/spring.mjs
  var springDefaults = {
    // Default spring physics
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    // Default duration/bounce-based options
    duration: 800,
    // in ms
    bounce: 0.3,
    visualDuration: 0.3,
    // in seconds
    // Rest thresholds
    restSpeed: {
      granular: 0.01,
      default: 2
    },
    restDelta: {
      granular: 5e-3,
      default: 0.5
    },
    // Limits
    minDuration: 0.01,
    // in seconds
    maxDuration: 10,
    // in seconds
    minDamping: 0.05,
    maxDamping: 1
  };
  function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
  }
  var rootIterations = 12;
  function approximateRoot(envelope, derivative, initialGuess) {
    let result = initialGuess;
    for (let i = 1; i < rootIterations; i++) {
      result = result - envelope(result) / derivative(result);
    }
    return result;
  }
  var safeMin = 1e-3;
  function findSpring({ duration = springDefaults.duration, bounce = springDefaults.bounce, velocity = springDefaults.velocity, mass = springDefaults.mass }) {
    let envelope;
    let derivative;
    warning(duration <= secondsToMilliseconds(springDefaults.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
    let dampingRatio = 1 - bounce;
    dampingRatio = clamp(springDefaults.minDamping, springDefaults.maxDamping, dampingRatio);
    duration = clamp(springDefaults.minDuration, springDefaults.maxDuration, millisecondsToSeconds(duration));
    if (dampingRatio < 1) {
      envelope = (undampedFreq2) => {
        const exponentialDecay = undampedFreq2 * dampingRatio;
        const delta = exponentialDecay * duration;
        const a = exponentialDecay - velocity;
        const b = calcAngularFreq(undampedFreq2, dampingRatio);
        const c = Math.exp(-delta);
        return safeMin - a / b * c;
      };
      derivative = (undampedFreq2) => {
        const exponentialDecay = undampedFreq2 * dampingRatio;
        const delta = exponentialDecay * duration;
        const d = delta * velocity + velocity;
        const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
        const f = Math.exp(-delta);
        const g2 = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
        const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
        return factor * ((d - e) * f) / g2;
      };
    } else {
      envelope = (undampedFreq2) => {
        const a = Math.exp(-undampedFreq2 * duration);
        const b = (undampedFreq2 - velocity) * duration + 1;
        return -safeMin + a * b;
      };
      derivative = (undampedFreq2) => {
        const a = Math.exp(-undampedFreq2 * duration);
        const b = (velocity - undampedFreq2) * (duration * duration);
        return a * b;
      };
    }
    const initialGuess = 5 / duration;
    const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = secondsToMilliseconds(duration);
    if (isNaN(undampedFreq)) {
      return {
        stiffness: springDefaults.stiffness,
        damping: springDefaults.damping,
        duration
      };
    } else {
      const stiffness = Math.pow(undampedFreq, 2) * mass;
      return {
        stiffness,
        damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
        duration
      };
    }
  }
  var durationKeys = ["duration", "bounce"];
  var physicsKeys = ["stiffness", "damping", "mass"];
  function isSpringType(options, keys2) {
    return keys2.some((key) => options[key] !== void 0);
  }
  function getSpringOptions(options) {
    let springOptions = {
      velocity: springDefaults.velocity,
      stiffness: springDefaults.stiffness,
      damping: springDefaults.damping,
      mass: springDefaults.mass,
      isResolvedFromDuration: false,
      ...options
    };
    if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
      springOptions.velocity = 0;
      if (options.visualDuration) {
        const visualDuration = options.visualDuration;
        const root = 2 * Math.PI / (visualDuration * 1.2);
        const stiffness = root * root;
        const damping = 2 * clamp(0.05, 1, 1 - (options.bounce || 0)) * Math.sqrt(stiffness);
        springOptions = {
          ...springOptions,
          mass: springDefaults.mass,
          stiffness,
          damping
        };
      } else {
        const derived = findSpring({ ...options, velocity: 0 });
        springOptions = {
          ...springOptions,
          ...derived,
          mass: springDefaults.mass
        };
        springOptions.isResolvedFromDuration = true;
      }
    }
    return springOptions;
  }
  function spring(optionsOrVisualDuration = springDefaults.visualDuration, bounce = springDefaults.bounce) {
    const options = typeof optionsOrVisualDuration !== "object" ? {
      visualDuration: optionsOrVisualDuration,
      keyframes: [0, 1],
      bounce
    } : optionsOrVisualDuration;
    let { restSpeed, restDelta } = options;
    const origin = options.keyframes[0];
    const target = options.keyframes[options.keyframes.length - 1];
    const state = { done: false, value: origin };
    const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration } = getSpringOptions({
      ...options,
      velocity: -millisecondsToSeconds(options.velocity || 0)
    });
    const initialVelocity = velocity || 0;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const initialDelta = target - origin;
    const undampedAngularFreq = millisecondsToSeconds(Math.sqrt(stiffness / mass));
    const isGranularScale = Math.abs(initialDelta) < 5;
    restSpeed || (restSpeed = isGranularScale ? springDefaults.restSpeed.granular : springDefaults.restSpeed.default);
    restDelta || (restDelta = isGranularScale ? springDefaults.restDelta.granular : springDefaults.restDelta.default);
    let resolveSpring;
    let resolveVelocity;
    let angularFreq;
    let A;
    let sinCoeff;
    let cosCoeff;
    if (dampingRatio < 1) {
      angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
      A = (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq;
      resolveSpring = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return target - envelope * (A * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
      };
      sinCoeff = dampingRatio * undampedAngularFreq * A + initialDelta * angularFreq;
      cosCoeff = dampingRatio * undampedAngularFreq * initialDelta - A * angularFreq;
      resolveVelocity = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return envelope * (sinCoeff * Math.sin(angularFreq * t) + cosCoeff * Math.cos(angularFreq * t));
      };
    } else if (dampingRatio === 1) {
      resolveSpring = (t) => target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
      const C = initialVelocity + undampedAngularFreq * initialDelta;
      resolveVelocity = (t) => Math.exp(-undampedAngularFreq * t) * (undampedAngularFreq * C * t - initialVelocity);
    } else {
      const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
      resolveSpring = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        const freqForT = Math.min(dampedAngularFreq * t, 300);
        return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
      };
      const P = (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / dampedAngularFreq;
      const sinhCoeff = dampingRatio * undampedAngularFreq * P - initialDelta * dampedAngularFreq;
      const coshCoeff = dampingRatio * undampedAngularFreq * initialDelta - P * dampedAngularFreq;
      resolveVelocity = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        const freqForT = Math.min(dampedAngularFreq * t, 300);
        return envelope * (sinhCoeff * Math.sinh(freqForT) + coshCoeff * Math.cosh(freqForT));
      };
    }
    const generator = {
      calculatedDuration: isResolvedFromDuration ? duration || null : null,
      velocity: (t) => secondsToMilliseconds(resolveVelocity(t)),
      next: (t) => {
        if (!isResolvedFromDuration && dampingRatio < 1) {
          const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
          const sin = Math.sin(angularFreq * t);
          const cos = Math.cos(angularFreq * t);
          const current2 = target - envelope * (A * sin + initialDelta * cos);
          const currentVelocity = secondsToMilliseconds(envelope * (sinCoeff * sin + cosCoeff * cos));
          state.done = Math.abs(currentVelocity) <= restSpeed && Math.abs(target - current2) <= restDelta;
          state.value = state.done ? target : current2;
          return state;
        }
        const current = resolveSpring(t);
        if (!isResolvedFromDuration) {
          const currentVelocity = secondsToMilliseconds(resolveVelocity(t));
          state.done = Math.abs(currentVelocity) <= restSpeed && Math.abs(target - current) <= restDelta;
        } else {
          state.done = t >= duration;
        }
        state.value = state.done ? target : current;
        return state;
      },
      toString: () => {
        const calculatedDuration = Math.min(calcGeneratorDuration(generator), maxGeneratorDuration);
        const easing = generateLinearEasing((progress2) => generator.next(calculatedDuration * progress2).value, calculatedDuration, 30);
        return calculatedDuration + "ms " + easing;
      },
      toTransition: () => {
      }
    };
    return generator;
  }
  spring.applyToOptions = (options) => {
    const generatorOptions = createGeneratorEasing(options, 100, spring);
    options.ease = generatorOptions.ease;
    options.duration = secondsToMilliseconds(generatorOptions.duration);
    options.type = "keyframes";
    return options;
  };

  // node_modules/motion-dom/dist/es/animation/generators/utils/velocity.mjs
  var velocitySampleDuration = 5;
  function getGeneratorVelocity(resolveValue, t, current) {
    const prevT = Math.max(t - velocitySampleDuration, 0);
    return velocityPerSecond(current - resolveValue(prevT), t - prevT);
  }

  // node_modules/motion-dom/dist/es/animation/generators/inertia.mjs
  function inertia({ keyframes: keyframes2, velocity = 0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed }) {
    const origin = keyframes2[0];
    const state = {
      done: false,
      value: origin
    };
    const isOutOfBounds = (v) => min !== void 0 && v < min || max !== void 0 && v > max;
    const nearestBoundary = (v) => {
      if (min === void 0)
        return max;
      if (max === void 0)
        return min;
      return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    };
    let amplitude = power * velocity;
    const ideal = origin + amplitude;
    const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
    if (target !== ideal)
      amplitude = target - origin;
    const calcDelta = (t) => -amplitude * Math.exp(-t / timeConstant);
    const calcLatest = (t) => target + calcDelta(t);
    const applyFriction = (t) => {
      const delta = calcDelta(t);
      const latest = calcLatest(t);
      state.done = Math.abs(delta) <= restDelta;
      state.value = state.done ? target : latest;
    };
    let timeReachedBoundary;
    let spring$1;
    const checkCatchBoundary = (t) => {
      if (!isOutOfBounds(state.value))
        return;
      timeReachedBoundary = t;
      spring$1 = spring({
        keyframes: [state.value, nearestBoundary(state.value)],
        velocity: getGeneratorVelocity(calcLatest, t, state.value),
        // TODO: This should be passing * 1000
        damping: bounceDamping,
        stiffness: bounceStiffness,
        restDelta,
        restSpeed
      });
    };
    checkCatchBoundary(0);
    return {
      calculatedDuration: null,
      next: (t) => {
        let hasUpdatedFrame = false;
        if (!spring$1 && timeReachedBoundary === void 0) {
          hasUpdatedFrame = true;
          applyFriction(t);
          checkCatchBoundary(t);
        }
        if (timeReachedBoundary !== void 0 && t >= timeReachedBoundary) {
          return spring$1.next(t - timeReachedBoundary);
        } else {
          !hasUpdatedFrame && applyFriction(t);
          return state;
        }
      }
    };
  }

  // node_modules/motion-dom/dist/es/utils/interpolate.mjs
  function createMixers(output, ease2, customMixer) {
    const mixers = [];
    const mixerFactory = customMixer || MotionGlobalConfig.mix || mix;
    const numMixers = output.length - 1;
    for (let i = 0; i < numMixers; i++) {
      let mixer = mixerFactory(output[i], output[i + 1]);
      if (ease2) {
        const easingFunction = Array.isArray(ease2) ? ease2[i] || noop : ease2;
        mixer = pipe(easingFunction, mixer);
      }
      mixers.push(mixer);
    }
    return mixers;
  }
  function interpolate(input, output, { clamp: isClamp = true, ease: ease2, mixer } = {}) {
    const inputLength = input.length;
    invariant(inputLength === output.length, "Both input and output ranges must be the same length", "range-length");
    if (inputLength === 1)
      return () => output[0];
    if (inputLength === 2 && output[0] === output[1])
      return () => output[1];
    const isZeroDeltaRange = input[0] === input[1];
    if (input[0] > input[inputLength - 1]) {
      input = [...input].reverse();
      output = [...output].reverse();
    }
    const mixers = createMixers(output, ease2, mixer);
    const numMixers = mixers.length;
    const interpolator = (v) => {
      if (isZeroDeltaRange && v < input[0])
        return output[0];
      let i = 0;
      if (numMixers > 1) {
        for (; i < input.length - 2; i++) {
          if (v < input[i + 1])
            break;
        }
      }
      const progressInRange = progress(input[i], input[i + 1], v);
      return mixers[i](progressInRange);
    };
    return isClamp ? (v) => interpolator(clamp(input[0], input[inputLength - 1], v)) : interpolator;
  }

  // node_modules/motion-dom/dist/es/animation/keyframes/offsets/fill.mjs
  function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for (let i = 1; i <= remaining; i++) {
      const offsetProgress = progress(0, remaining, i);
      offset.push(mixNumber(min, 1, offsetProgress));
    }
  }

  // node_modules/motion-dom/dist/es/animation/keyframes/offsets/default.mjs
  function defaultOffset(arr) {
    const offset = [0];
    fillOffset(offset, arr.length - 1);
    return offset;
  }

  // node_modules/motion-dom/dist/es/animation/keyframes/offsets/time.mjs
  function convertOffsetToTimes(offset, duration) {
    return offset.map((o) => o * duration);
  }

  // node_modules/motion-dom/dist/es/animation/generators/keyframes.mjs
  function defaultEasing(values, easing) {
    return values.map(() => easing || easeInOut).splice(0, values.length - 1);
  }
  function keyframes({ duration = 300, keyframes: keyframeValues, times, ease: ease2 = "easeInOut" }) {
    const easingFunctions = isEasingArray(ease2) ? ease2.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease2);
    const state = {
      done: false,
      value: keyframeValues[0]
    };
    const absoluteTimes = convertOffsetToTimes(
      // Only use the provided offsets if they're the correct length
      // TODO Maybe we should warn here if there's a length mismatch
      times && times.length === keyframeValues.length ? times : defaultOffset(keyframeValues),
      duration
    );
    const mapTimeToKeyframe = interpolate(absoluteTimes, keyframeValues, {
      ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
    });
    return {
      calculatedDuration: duration,
      next: (t) => {
        state.value = mapTimeToKeyframe(t);
        state.done = t >= duration;
        return state;
      }
    };
  }

  // node_modules/motion-dom/dist/es/animation/keyframes/get-final.mjs
  var isNotNull = (value) => value !== null;
  function getFinalKeyframe(keyframes2, { repeat, repeatType = "loop" }, finalKeyframe, speed = 1) {
    const resolvedKeyframes = keyframes2.filter(isNotNull);
    const useFirstKeyframe = speed < 0 || repeat && repeatType !== "loop" && repeat % 2 === 1;
    const index = useFirstKeyframe ? 0 : resolvedKeyframes.length - 1;
    return !index || finalKeyframe === void 0 ? resolvedKeyframes[index] : finalKeyframe;
  }

  // node_modules/motion-dom/dist/es/animation/utils/replace-transition-type.mjs
  var transitionTypeMap = {
    decay: inertia,
    inertia,
    tween: keyframes,
    keyframes,
    spring
  };
  function replaceTransitionType(transition) {
    if (typeof transition.type === "string") {
      transition.type = transitionTypeMap[transition.type];
    }
  }

  // node_modules/motion-dom/dist/es/animation/utils/WithPromise.mjs
  var WithPromise = class {
    constructor() {
      this.updateFinished();
    }
    get finished() {
      return this._finished;
    }
    updateFinished() {
      this._finished = new Promise((resolve) => {
        this.resolve = resolve;
      });
    }
    notifyFinished() {
      this.resolve();
    }
    /**
     * Allows the animation to be awaited.
     *
     * @deprecated Use `finished` instead.
     */
    then(onResolve, onReject) {
      return this.finished.then(onResolve, onReject);
    }
  };

  // node_modules/motion-dom/dist/es/animation/JSAnimation.mjs
  var percentToProgress = (percent2) => percent2 / 100;
  var JSAnimation = class extends WithPromise {
    constructor(options) {
      super();
      this.state = "idle";
      this.startTime = null;
      this.isStopped = false;
      this.currentTime = 0;
      this.holdTime = null;
      this.playbackSpeed = 1;
      this.delayState = {
        done: false,
        value: void 0
      };
      this.stop = () => {
        const { motionValue: motionValue2 } = this.options;
        if (motionValue2 && motionValue2.updatedAt !== time.now()) {
          this.tick(time.now());
        }
        this.isStopped = true;
        if (this.state === "idle")
          return;
        this.teardown();
        this.options.onStop?.();
      };
      activeAnimations.mainThread++;
      this.options = options;
      this.initAnimation();
      this.play();
      if (options.autoplay === false)
        this.pause();
    }
    initAnimation() {
      const { options } = this;
      replaceTransitionType(options);
      const { type = keyframes, repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = options;
      let { keyframes: keyframes$1 } = options;
      const generatorFactory = type || keyframes;
      if (generatorFactory !== keyframes) {
        invariant(keyframes$1.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${keyframes$1}`, "spring-two-frames");
      }
      if (generatorFactory !== keyframes && typeof keyframes$1[0] !== "number") {
        this.mixKeyframes = pipe(percentToProgress, mix(keyframes$1[0], keyframes$1[1]));
        keyframes$1 = [0, 100];
      }
      const generator = generatorFactory({ ...options, keyframes: keyframes$1 });
      if (repeatType === "mirror") {
        this.mirroredGenerator = generatorFactory({
          ...options,
          keyframes: [...keyframes$1].reverse(),
          velocity: -velocity
        });
      }
      if (generator.calculatedDuration === null) {
        generator.calculatedDuration = calcGeneratorDuration(generator);
      }
      const { calculatedDuration } = generator;
      this.calculatedDuration = calculatedDuration;
      this.resolvedDuration = calculatedDuration + repeatDelay;
      this.totalDuration = this.resolvedDuration * (repeat + 1) - repeatDelay;
      this.generator = generator;
    }
    updateTime(timestamp) {
      const animationTime = Math.round(timestamp - this.startTime) * this.playbackSpeed;
      if (this.holdTime !== null) {
        this.currentTime = this.holdTime;
      } else {
        this.currentTime = animationTime;
      }
    }
    tick(timestamp, sample = false) {
      const { generator, totalDuration, mixKeyframes, mirroredGenerator, resolvedDuration, calculatedDuration } = this;
      if (this.startTime === null)
        return generator.next(0);
      const { delay: delay2 = 0, keyframes: keyframes2, repeat, repeatType, repeatDelay, type, onUpdate, finalKeyframe } = this.options;
      if (this.speed > 0) {
        this.startTime = Math.min(this.startTime, timestamp);
      } else if (this.speed < 0) {
        this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
      }
      if (sample) {
        this.currentTime = timestamp;
      } else {
        this.updateTime(timestamp);
      }
      const timeWithoutDelay = this.currentTime - delay2 * (this.playbackSpeed >= 0 ? 1 : -1);
      const isInDelayPhase = this.playbackSpeed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
      this.currentTime = Math.max(timeWithoutDelay, 0);
      if (this.state === "finished" && this.holdTime === null) {
        this.currentTime = totalDuration;
      }
      let elapsed = this.currentTime;
      let frameGenerator = generator;
      if (repeat) {
        const progress2 = Math.min(this.currentTime, totalDuration) / resolvedDuration;
        let currentIteration = Math.floor(progress2);
        let iterationProgress = progress2 % 1;
        if (!iterationProgress && progress2 >= 1) {
          iterationProgress = 1;
        }
        iterationProgress === 1 && currentIteration--;
        currentIteration = Math.min(currentIteration, repeat + 1);
        const isOddIteration = Boolean(currentIteration % 2);
        if (isOddIteration) {
          if (repeatType === "reverse") {
            iterationProgress = 1 - iterationProgress;
            if (repeatDelay) {
              iterationProgress -= repeatDelay / resolvedDuration;
            }
          } else if (repeatType === "mirror") {
            frameGenerator = mirroredGenerator;
          }
        }
        elapsed = clamp(0, 1, iterationProgress) * resolvedDuration;
      }
      let state;
      if (isInDelayPhase) {
        this.delayState.value = keyframes2[0];
        state = this.delayState;
      } else {
        state = frameGenerator.next(elapsed);
      }
      if (mixKeyframes && !isInDelayPhase) {
        state.value = mixKeyframes(state.value);
      }
      let { done } = state;
      if (!isInDelayPhase && calculatedDuration !== null) {
        done = this.playbackSpeed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
      }
      const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
      if (isAnimationFinished && type !== inertia) {
        state.value = getFinalKeyframe(keyframes2, this.options, finalKeyframe, this.speed);
      }
      if (onUpdate) {
        onUpdate(state.value);
      }
      if (isAnimationFinished) {
        this.finish();
      }
      return state;
    }
    /**
     * Allows the returned animation to be awaited or promise-chained. Currently
     * resolves when the animation finishes at all but in a future update could/should
     * reject if its cancels.
     */
    then(resolve, reject) {
      return this.finished.then(resolve, reject);
    }
    get duration() {
      return millisecondsToSeconds(this.calculatedDuration);
    }
    get iterationDuration() {
      const { delay: delay2 = 0 } = this.options || {};
      return this.duration + millisecondsToSeconds(delay2);
    }
    get time() {
      return millisecondsToSeconds(this.currentTime);
    }
    set time(newTime) {
      newTime = secondsToMilliseconds(newTime);
      this.currentTime = newTime;
      if (this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0) {
        this.holdTime = newTime;
      } else if (this.driver) {
        this.startTime = this.driver.now() - newTime / this.playbackSpeed;
      }
      if (this.driver) {
        this.driver.start(false);
      } else {
        this.startTime = 0;
        this.state = "paused";
        this.holdTime = newTime;
        this.tick(newTime);
      }
    }
    /**
     * Returns the generator's velocity at the current time in units/second.
     * Uses the analytical derivative when available (springs), avoiding
     * the MotionValue's frame-dependent velocity estimation.
     */
    getGeneratorVelocity() {
      const t = this.currentTime;
      if (t <= 0)
        return this.options.velocity || 0;
      if (this.generator.velocity) {
        return this.generator.velocity(t);
      }
      const current = this.generator.next(t).value;
      return getGeneratorVelocity((s) => this.generator.next(s).value, t, current);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(newSpeed) {
      const hasChanged = this.playbackSpeed !== newSpeed;
      if (hasChanged && this.driver) {
        this.updateTime(time.now());
      }
      this.playbackSpeed = newSpeed;
      if (hasChanged && this.driver) {
        this.time = millisecondsToSeconds(this.currentTime);
      }
    }
    play() {
      if (this.isStopped)
        return;
      const { driver = frameloopDriver, startTime } = this.options;
      if (!this.driver) {
        this.driver = driver((timestamp) => this.tick(timestamp));
      }
      this.options.onPlay?.();
      const now2 = this.driver.now();
      if (this.state === "finished") {
        this.updateFinished();
        this.startTime = now2;
      } else if (this.holdTime !== null) {
        this.startTime = now2 - this.holdTime;
      } else if (!this.startTime) {
        this.startTime = startTime ?? now2;
      }
      if (this.state === "finished" && this.speed < 0) {
        this.startTime += this.calculatedDuration;
      }
      this.holdTime = null;
      this.state = "running";
      this.driver.start();
    }
    pause() {
      this.state = "paused";
      this.updateTime(time.now());
      this.holdTime = this.currentTime;
    }
    complete() {
      if (this.state !== "running") {
        this.play();
      }
      this.state = "finished";
      this.holdTime = null;
    }
    finish() {
      this.notifyFinished();
      this.teardown();
      this.state = "finished";
      this.options.onComplete?.();
    }
    cancel() {
      this.holdTime = null;
      this.startTime = 0;
      this.tick(0);
      this.teardown();
      this.options.onCancel?.();
    }
    teardown() {
      this.state = "idle";
      this.stopDriver();
      this.startTime = this.holdTime = null;
      activeAnimations.mainThread--;
    }
    stopDriver() {
      if (!this.driver)
        return;
      this.driver.stop();
      this.driver = void 0;
    }
    sample(sampleTime) {
      this.startTime = 0;
      return this.tick(sampleTime, true);
    }
    attachTimeline(timeline) {
      if (this.options.allowFlatten) {
        this.options.type = "keyframes";
        this.options.ease = "linear";
        this.initAnimation();
      }
      this.driver?.stop();
      return timeline.observe(this);
    }
  };

  // node_modules/motion-dom/dist/es/animation/keyframes/utils/fill-wildcards.mjs
  function fillWildcards(keyframes2) {
    for (let i = 1; i < keyframes2.length; i++) {
      keyframes2[i] ?? (keyframes2[i] = keyframes2[i - 1]);
    }
  }

  // node_modules/motion-dom/dist/es/render/dom/parse-transform.mjs
  var radToDeg = (rad) => rad * 180 / Math.PI;
  var rotate = (v) => {
    const angle = radToDeg(Math.atan2(v[1], v[0]));
    return rebaseAngle(angle);
  };
  var matrix2dParsers = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (v) => (Math.abs(v[0]) + Math.abs(v[3])) / 2,
    rotate,
    rotateZ: rotate,
    skewX: (v) => radToDeg(Math.atan(v[1])),
    skewY: (v) => radToDeg(Math.atan(v[2])),
    skew: (v) => (Math.abs(v[1]) + Math.abs(v[2])) / 2
  };
  var rebaseAngle = (angle) => {
    angle = angle % 360;
    if (angle < 0)
      angle += 360;
    return angle;
  };
  var rotateZ = rotate;
  var scaleX = (v) => Math.sqrt(v[0] * v[0] + v[1] * v[1]);
  var scaleY = (v) => Math.sqrt(v[4] * v[4] + v[5] * v[5]);
  var matrix3dParsers = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX,
    scaleY,
    scale: (v) => (scaleX(v) + scaleY(v)) / 2,
    rotateX: (v) => rebaseAngle(radToDeg(Math.atan2(v[6], v[5]))),
    rotateY: (v) => rebaseAngle(radToDeg(Math.atan2(-v[2], v[0]))),
    rotateZ,
    rotate: rotateZ,
    skewX: (v) => radToDeg(Math.atan(v[4])),
    skewY: (v) => radToDeg(Math.atan(v[1])),
    skew: (v) => (Math.abs(v[1]) + Math.abs(v[4])) / 2
  };
  function defaultTransformValue(name) {
    return name.includes("scale") ? 1 : 0;
  }
  function parseValueFromTransform(transform2, name) {
    if (!transform2 || transform2 === "none") {
      return defaultTransformValue(name);
    }
    const matrix3dMatch = transform2.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    let parsers;
    let match;
    if (matrix3dMatch) {
      parsers = matrix3dParsers;
      match = matrix3dMatch;
    } else {
      const matrix2dMatch = transform2.match(/^matrix\(([-\d.e\s,]+)\)$/u);
      parsers = matrix2dParsers;
      match = matrix2dMatch;
    }
    if (!match) {
      return defaultTransformValue(name);
    }
    const valueParser = parsers[name];
    const values = match[1].split(",").map(convertTransformToNumber);
    return typeof valueParser === "function" ? valueParser(values) : values[valueParser];
  }
  var readTransformValue = (instance, name) => {
    const { transform: transform2 = "none" } = getComputedStyle(instance);
    return parseValueFromTransform(transform2, name);
  };
  function convertTransformToNumber(value) {
    return parseFloat(value.trim());
  }

  // node_modules/motion-dom/dist/es/render/utils/keys-transform.mjs
  var transformPropOrder = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY"
  ];
  var transformProps = /* @__PURE__ */ (() => new Set(transformPropOrder))();

  // node_modules/motion-dom/dist/es/animation/keyframes/utils/unit-conversion.mjs
  var isNumOrPxType = (v) => v === number || v === px;
  var transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
  var nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
  function removeNonTranslationalTransform(visualElement) {
    const removedTransforms = [];
    nonTranslationalTransformKeys.forEach((key) => {
      const value = visualElement.getValue(key);
      if (value !== void 0) {
        removedTransforms.push([key, value.get()]);
        value.set(key.startsWith("scale") ? 1 : 0);
      }
    });
    return removedTransforms;
  }
  var positionalValues = {
    // Dimensions
    width: ({ x }, { paddingLeft = "0", paddingRight = "0", boxSizing }) => {
      const width = x.max - x.min;
      return boxSizing === "border-box" ? width : width - parseFloat(paddingLeft) - parseFloat(paddingRight);
    },
    height: ({ y }, { paddingTop = "0", paddingBottom = "0", boxSizing }) => {
      const height = y.max - y.min;
      return boxSizing === "border-box" ? height : height - parseFloat(paddingTop) - parseFloat(paddingBottom);
    },
    top: (_bbox, { top }) => parseFloat(top),
    left: (_bbox, { left }) => parseFloat(left),
    bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
    right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
    // Transform
    x: (_bbox, { transform: transform2 }) => parseValueFromTransform(transform2, "x"),
    y: (_bbox, { transform: transform2 }) => parseValueFromTransform(transform2, "y")
  };
  positionalValues.translateX = positionalValues.x;
  positionalValues.translateY = positionalValues.y;

  // node_modules/motion-dom/dist/es/animation/keyframes/KeyframesResolver.mjs
  var toResolve = /* @__PURE__ */ new Set();
  var isScheduled = false;
  var anyNeedsMeasurement = false;
  var isForced = false;
  function measureAllKeyframes() {
    if (anyNeedsMeasurement) {
      const resolversToMeasure = Array.from(toResolve).filter((resolver) => resolver.needsMeasurement);
      const elementsToMeasure = new Set(resolversToMeasure.map((resolver) => resolver.element));
      const transformsToRestore = /* @__PURE__ */ new Map();
      elementsToMeasure.forEach((element) => {
        const removedTransforms = removeNonTranslationalTransform(element);
        if (!removedTransforms.length)
          return;
        transformsToRestore.set(element, removedTransforms);
        element.render();
      });
      resolversToMeasure.forEach((resolver) => resolver.measureInitialState());
      elementsToMeasure.forEach((element) => {
        element.render();
        const restore = transformsToRestore.get(element);
        if (restore) {
          restore.forEach(([key, value]) => {
            element.getValue(key)?.set(value);
          });
        }
      });
      resolversToMeasure.forEach((resolver) => resolver.measureEndState());
      resolversToMeasure.forEach((resolver) => {
        if (resolver.suspendedScrollY !== void 0) {
          window.scrollTo(0, resolver.suspendedScrollY);
        }
      });
    }
    anyNeedsMeasurement = false;
    isScheduled = false;
    toResolve.forEach((resolver) => resolver.complete(isForced));
    toResolve.clear();
  }
  function readAllKeyframes() {
    toResolve.forEach((resolver) => {
      resolver.readKeyframes();
      if (resolver.needsMeasurement) {
        anyNeedsMeasurement = true;
      }
    });
  }
  function flushKeyframeResolvers() {
    isForced = true;
    readAllKeyframes();
    measureAllKeyframes();
    isForced = false;
  }
  var KeyframeResolver = class {
    constructor(unresolvedKeyframes, onComplete, name, motionValue2, element, isAsync = false) {
      this.state = "pending";
      this.isAsync = false;
      this.needsMeasurement = false;
      this.unresolvedKeyframes = [...unresolvedKeyframes];
      this.onComplete = onComplete;
      this.name = name;
      this.motionValue = motionValue2;
      this.element = element;
      this.isAsync = isAsync;
    }
    scheduleResolve() {
      this.state = "scheduled";
      if (this.isAsync) {
        toResolve.add(this);
        if (!isScheduled) {
          isScheduled = true;
          frame.read(readAllKeyframes);
          frame.resolveKeyframes(measureAllKeyframes);
        }
      } else {
        this.readKeyframes();
        this.complete();
      }
    }
    readKeyframes() {
      const { unresolvedKeyframes, name, element, motionValue: motionValue2 } = this;
      if (unresolvedKeyframes[0] === null) {
        const currentValue = motionValue2?.get();
        const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
        if (currentValue !== void 0) {
          unresolvedKeyframes[0] = currentValue;
        } else if (element && name) {
          const valueAsRead = element.readValue(name, finalKeyframe);
          if (valueAsRead !== void 0 && valueAsRead !== null) {
            unresolvedKeyframes[0] = valueAsRead;
          }
        }
        if (unresolvedKeyframes[0] === void 0) {
          unresolvedKeyframes[0] = finalKeyframe;
        }
        if (motionValue2 && currentValue === void 0) {
          motionValue2.set(unresolvedKeyframes[0]);
        }
      }
      fillWildcards(unresolvedKeyframes);
    }
    setFinalKeyframe() {
    }
    measureInitialState() {
    }
    renderEndStyles() {
    }
    measureEndState() {
    }
    complete(isForcedComplete = false) {
      this.state = "complete";
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, isForcedComplete);
      toResolve.delete(this);
    }
    cancel() {
      if (this.state === "scheduled") {
        toResolve.delete(this);
        this.state = "pending";
      }
    }
    resume() {
      if (this.state === "pending")
        this.scheduleResolve();
    }
  };

  // node_modules/motion-dom/dist/es/render/dom/is-css-var.mjs
  var isCSSVar = (name) => name.startsWith("--");

  // node_modules/motion-dom/dist/es/render/dom/style-set.mjs
  function setStyle(element, name, value) {
    isCSSVar(name) ? element.style.setProperty(name, value) : element.style[name] = value;
  }

  // node_modules/motion-dom/dist/es/utils/supports/flags.mjs
  var supportsFlags = {};

  // node_modules/motion-dom/dist/es/utils/supports/memo.mjs
  function memoSupports(callback, supportsFlag) {
    const memoized = memo(callback);
    return () => supportsFlags[supportsFlag] ?? memoized();
  }

  // node_modules/motion-dom/dist/es/utils/supports/scroll-timeline.mjs
  var supportsScrollTimeline = /* @__PURE__ */ memoSupports(() => window.ScrollTimeline !== void 0, "scrollTimeline");
  var supportsViewTimeline = /* @__PURE__ */ memoSupports(() => window.ViewTimeline !== void 0, "viewTimeline");

  // node_modules/motion-dom/dist/es/utils/supports/linear-easing.mjs
  var supportsLinearEasing = /* @__PURE__ */ memoSupports(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch (e) {
      return false;
    }
    return true;
  }, "linearEasing");

  // node_modules/motion-dom/dist/es/animation/waapi/easing/cubic-bezier.mjs
  var cubicBezierAsString = ([a, b, c, d]) => `cubic-bezier(${a}, ${b}, ${c}, ${d})`;

  // node_modules/motion-dom/dist/es/animation/waapi/easing/supported.mjs
  var supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: /* @__PURE__ */ cubicBezierAsString([0, 0.65, 0.55, 1]),
    circOut: /* @__PURE__ */ cubicBezierAsString([0.55, 0, 1, 0.45]),
    backIn: /* @__PURE__ */ cubicBezierAsString([0.31, 0.01, 0.66, -0.59]),
    backOut: /* @__PURE__ */ cubicBezierAsString([0.33, 1.53, 0.69, 0.99])
  };

  // node_modules/motion-dom/dist/es/animation/waapi/easing/map-easing.mjs
  function mapEasingToNativeEasing(easing, duration) {
    if (!easing) {
      return void 0;
    } else if (typeof easing === "function") {
      return supportsLinearEasing() ? generateLinearEasing(easing, duration) : "ease-out";
    } else if (isBezierDefinition(easing)) {
      return cubicBezierAsString(easing);
    } else if (Array.isArray(easing)) {
      return easing.map((segmentEasing) => mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
    } else {
      return supportedWaapiEasing[easing];
    }
  }

  // node_modules/motion-dom/dist/es/animation/waapi/start-waapi-animation.mjs
  function startWaapiAnimation(element, valueName, keyframes2, { delay: delay2 = 0, duration = 300, repeat = 0, repeatType = "loop", ease: ease2 = "easeOut", times } = {}, pseudoElement = void 0) {
    const keyframeOptions = {
      [valueName]: keyframes2
    };
    if (times)
      keyframeOptions.offset = times;
    const easing = mapEasingToNativeEasing(ease2, duration);
    if (Array.isArray(easing))
      keyframeOptions.easing = easing;
    if (statsBuffer.value) {
      activeAnimations.waapi++;
    }
    const options = {
      delay: delay2,
      duration,
      easing: !Array.isArray(easing) ? easing : "linear",
      fill: "both",
      iterations: repeat + 1,
      direction: repeatType === "reverse" ? "alternate" : "normal"
    };
    if (pseudoElement)
      options.pseudoElement = pseudoElement;
    const animation = element.animate(keyframeOptions, options);
    if (statsBuffer.value) {
      animation.finished.finally(() => {
        activeAnimations.waapi--;
      });
    }
    return animation;
  }

  // node_modules/motion-dom/dist/es/animation/generators/utils/is-generator.mjs
  function isGenerator(type) {
    return typeof type === "function" && "applyToOptions" in type;
  }

  // node_modules/motion-dom/dist/es/animation/waapi/utils/apply-generator.mjs
  function applyGeneratorOptions({ type, ...options }) {
    if (isGenerator(type) && supportsLinearEasing()) {
      return type.applyToOptions(options);
    } else {
      options.duration ?? (options.duration = 300);
      options.ease ?? (options.ease = "easeOut");
    }
    return options;
  }

  // node_modules/motion-dom/dist/es/animation/NativeAnimation.mjs
  var NativeAnimation = class extends WithPromise {
    constructor(options) {
      super();
      this.finishedTime = null;
      this.isStopped = false;
      this.manualStartTime = null;
      if (!options)
        return;
      const { element, name, keyframes: keyframes2, pseudoElement, allowFlatten = false, finalKeyframe, onComplete } = options;
      this.isPseudoElement = Boolean(pseudoElement);
      this.allowFlatten = allowFlatten;
      this.options = options;
      invariant(typeof options.type !== "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
      const transition = applyGeneratorOptions(options);
      this.animation = startWaapiAnimation(element, name, keyframes2, transition, pseudoElement);
      if (transition.autoplay === false) {
        this.animation.pause();
      }
      this.animation.onfinish = () => {
        this.finishedTime = this.time;
        if (!pseudoElement) {
          const keyframe = getFinalKeyframe(keyframes2, this.options, finalKeyframe, this.speed);
          if (this.updateMotionValue) {
            this.updateMotionValue(keyframe);
          }
          setStyle(element, name, keyframe);
          this.animation.cancel();
        }
        onComplete?.();
        this.notifyFinished();
      };
    }
    play() {
      if (this.isStopped)
        return;
      this.manualStartTime = null;
      this.animation.play();
      if (this.state === "finished") {
        this.updateFinished();
      }
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.finish?.();
    }
    cancel() {
      try {
        this.animation.cancel();
      } catch (e) {
      }
    }
    stop() {
      if (this.isStopped)
        return;
      this.isStopped = true;
      const { state } = this;
      if (state === "idle" || state === "finished") {
        return;
      }
      if (this.updateMotionValue) {
        this.updateMotionValue();
      } else {
        this.commitStyles();
      }
      if (!this.isPseudoElement)
        this.cancel();
    }
    /**
     * WAAPI doesn't natively have any interruption capabilities.
     *
     * In this method, we commit styles back to the DOM before cancelling
     * the animation.
     *
     * This is designed to be overridden by NativeAnimationExtended, which
     * will create a renderless JS animation and sample it twice to calculate
     * its current value, "previous" value, and therefore allow
     * Motion to also correctly calculate velocity for any subsequent animation
     * while deferring the commit until the next animation frame.
     */
    commitStyles() {
      const element = this.options?.element;
      if (!this.isPseudoElement && element?.isConnected) {
        this.animation.commitStyles?.();
      }
    }
    get duration() {
      const duration = this.animation.effect?.getComputedTiming?.().duration || 0;
      return millisecondsToSeconds(Number(duration));
    }
    get iterationDuration() {
      const { delay: delay2 = 0 } = this.options || {};
      return this.duration + millisecondsToSeconds(delay2);
    }
    get time() {
      return millisecondsToSeconds(Number(this.animation.currentTime) || 0);
    }
    set time(newTime) {
      const wasFinished = this.finishedTime !== null;
      this.manualStartTime = null;
      this.finishedTime = null;
      this.animation.currentTime = secondsToMilliseconds(newTime);
      if (wasFinished) {
        this.animation.pause();
      }
    }
    /**
     * The playback speed of the animation.
     * 1 = normal speed, 2 = double speed, 0.5 = half speed.
     */
    get speed() {
      return this.animation.playbackRate;
    }
    set speed(newSpeed) {
      if (newSpeed < 0)
        this.finishedTime = null;
      this.animation.playbackRate = newSpeed;
    }
    get state() {
      return this.finishedTime !== null ? "finished" : this.animation.playState;
    }
    get startTime() {
      return this.manualStartTime ?? Number(this.animation.startTime);
    }
    set startTime(newStartTime) {
      this.manualStartTime = this.animation.startTime = newStartTime;
    }
    /**
     * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
     */
    attachTimeline({ timeline, rangeStart, rangeEnd, observe }) {
      if (this.allowFlatten) {
        this.animation.effect?.updateTiming({ easing: "linear" });
      }
      this.animation.onfinish = null;
      if (timeline && supportsScrollTimeline()) {
        this.animation.timeline = timeline;
        if (rangeStart)
          this.animation.rangeStart = rangeStart;
        if (rangeEnd)
          this.animation.rangeEnd = rangeEnd;
        return noop;
      } else {
        return observe(this);
      }
    }
  };

  // node_modules/motion-dom/dist/es/animation/waapi/utils/unsupported-easing.mjs
  var unsupportedEasingFunctions = {
    anticipate,
    backInOut,
    circInOut
  };
  function isUnsupportedEase(key) {
    return key in unsupportedEasingFunctions;
  }
  function replaceStringEasing(transition) {
    if (typeof transition.ease === "string" && isUnsupportedEase(transition.ease)) {
      transition.ease = unsupportedEasingFunctions[transition.ease];
    }
  }

  // node_modules/motion-dom/dist/es/animation/NativeAnimationExtended.mjs
  var sampleDelta = 10;
  var NativeAnimationExtended = class extends NativeAnimation {
    constructor(options) {
      replaceStringEasing(options);
      replaceTransitionType(options);
      super(options);
      if (options.startTime !== void 0 && options.autoplay !== false) {
        this.startTime = options.startTime;
      }
      this.options = options;
    }
    /**
     * WAAPI doesn't natively have any interruption capabilities.
     *
     * Rather than read committed styles back out of the DOM, we can
     * create a renderless JS animation and sample it twice to calculate
     * its current value, "previous" value, and therefore allow
     * Motion to calculate velocity for any subsequent animation.
     */
    updateMotionValue(value) {
      const { motionValue: motionValue2, onUpdate, onComplete, element, ...options } = this.options;
      if (!motionValue2)
        return;
      if (value !== void 0) {
        motionValue2.set(value);
        return;
      }
      const sampleAnimation = new JSAnimation({
        ...options,
        autoplay: false
      });
      const sampleTime = Math.max(sampleDelta, time.now() - this.startTime);
      const delta = clamp(0, sampleDelta, sampleTime - sampleDelta);
      const current = sampleAnimation.sample(sampleTime).value;
      const { name } = this.options;
      if (element && name)
        setStyle(element, name, current);
      motionValue2.setWithVelocity(sampleAnimation.sample(Math.max(0, sampleTime - delta)).value, current, delta);
      sampleAnimation.stop();
    }
  };

  // node_modules/motion-dom/dist/es/animation/utils/is-animatable.mjs
  var isAnimatable = (value, name) => {
    if (name === "zIndex")
      return false;
    if (typeof value === "number" || Array.isArray(value))
      return true;
    if (typeof value === "string" && // It's animatable if we have a string
    (complex.test(value) || value === "0") && // And it contains numbers and/or colors
    !value.startsWith("url(")) {
      return true;
    }
    return false;
  };

  // node_modules/motion-dom/dist/es/animation/utils/can-animate.mjs
  function hasKeyframesChanged(keyframes2) {
    const current = keyframes2[0];
    if (keyframes2.length === 1)
      return true;
    for (let i = 0; i < keyframes2.length; i++) {
      if (keyframes2[i] !== current)
        return true;
    }
  }
  function canAnimate(keyframes2, name, type, velocity) {
    const originKeyframe = keyframes2[0];
    if (originKeyframe === null) {
      return false;
    }
    if (name === "display" || name === "visibility")
      return true;
    const targetKeyframe = keyframes2[keyframes2.length - 1];
    const isOriginAnimatable = isAnimatable(originKeyframe, name);
    const isTargetAnimatable = isAnimatable(targetKeyframe, name);
    warning(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${name} from "${originKeyframe}" to "${targetKeyframe}". "${isOriginAnimatable ? targetKeyframe : originKeyframe}" is not an animatable value.`, "value-not-animatable");
    if (!isOriginAnimatable || !isTargetAnimatable) {
      return false;
    }
    return hasKeyframesChanged(keyframes2) || (type === "spring" || isGenerator(type)) && velocity;
  }

  // node_modules/motion-dom/dist/es/animation/utils/make-animation-instant.mjs
  function makeAnimationInstant(options) {
    options.duration = 0;
    options.type = "keyframes";
  }

  // node_modules/motion-dom/dist/es/animation/waapi/utils/accelerated-values.mjs
  var acceleratedValues = /* @__PURE__ */ new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform"
    // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
    // or until we implement support for linear() easing.
    // "background-color"
  ]);

  // node_modules/motion-dom/dist/es/animation/waapi/utils/is-browser-color.mjs
  var browserColorFunctions = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
  function hasBrowserOnlyColors(keyframes2) {
    for (let i = 0; i < keyframes2.length; i++) {
      if (typeof keyframes2[i] === "string" && browserColorFunctions.test(keyframes2[i])) {
        return true;
      }
    }
    return false;
  }

  // node_modules/motion-dom/dist/es/animation/waapi/supports/waapi.mjs
  var colorProperties = /* @__PURE__ */ new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor"
  ]);
  var supportsWaapi = /* @__PURE__ */ memo(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
  function supportsBrowserAnimation(options) {
    const { motionValue: motionValue2, name, repeatDelay, repeatType, damping, type, keyframes: keyframes2 } = options;
    const subject = motionValue2?.owner?.current;
    if (!(subject instanceof HTMLElement)) {
      return false;
    }
    const { onUpdate, transformTemplate } = motionValue2.owner.getProps();
    return supportsWaapi() && name && /**
     * Force WAAPI for color properties with browser-only color formats
     * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
     */
    (acceleratedValues.has(name) || colorProperties.has(name) && hasBrowserOnlyColors(keyframes2)) && (name !== "transform" || !transformTemplate) && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !onUpdate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
  }

  // node_modules/motion-dom/dist/es/animation/AsyncMotionValueAnimation.mjs
  var MAX_RESOLVE_DELAY = 40;
  var AsyncMotionValueAnimation = class extends WithPromise {
    constructor({ autoplay = true, delay: delay2 = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", keyframes: keyframes2, name, motionValue: motionValue2, element, ...options }) {
      super();
      this.stop = () => {
        if (this._animation) {
          this._animation.stop();
          this.stopTimeline?.();
        }
        this.keyframeResolver?.cancel();
      };
      this.createdAt = time.now();
      const optionsWithDefaults = {
        autoplay,
        delay: delay2,
        type,
        repeat,
        repeatDelay,
        repeatType,
        name,
        motionValue: motionValue2,
        element,
        ...options
      };
      const KeyframeResolver$1 = element?.KeyframeResolver || KeyframeResolver;
      this.keyframeResolver = new KeyframeResolver$1(keyframes2, (resolvedKeyframes, finalKeyframe, forced) => this.onKeyframesResolved(resolvedKeyframes, finalKeyframe, optionsWithDefaults, !forced), name, motionValue2, element);
      this.keyframeResolver?.scheduleResolve();
    }
    onKeyframesResolved(keyframes2, finalKeyframe, options, sync) {
      this.keyframeResolver = void 0;
      const { name, type, velocity, delay: delay2, isHandoff, onUpdate } = options;
      this.resolvedAt = time.now();
      let canAnimateValue = true;
      if (!canAnimate(keyframes2, name, type, velocity)) {
        canAnimateValue = false;
        if (MotionGlobalConfig.instantAnimations || !delay2) {
          onUpdate?.(getFinalKeyframe(keyframes2, options, finalKeyframe));
        }
        keyframes2[0] = keyframes2[keyframes2.length - 1];
        makeAnimationInstant(options);
        options.repeat = 0;
      }
      const startTime = sync ? !this.resolvedAt ? this.createdAt : this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt : void 0;
      const resolvedOptions = {
        startTime,
        finalKeyframe,
        ...options,
        keyframes: keyframes2
      };
      const useWaapi = canAnimateValue && !isHandoff && supportsBrowserAnimation(resolvedOptions);
      const element = resolvedOptions.motionValue?.owner?.current;
      let animation;
      if (useWaapi) {
        try {
          animation = new NativeAnimationExtended({
            ...resolvedOptions,
            element
          });
        } catch {
          animation = new JSAnimation(resolvedOptions);
        }
      } else {
        animation = new JSAnimation(resolvedOptions);
      }
      animation.finished.then(() => {
        this.notifyFinished();
      }).catch(noop);
      if (this.pendingTimeline) {
        this.stopTimeline = animation.attachTimeline(this.pendingTimeline);
        this.pendingTimeline = void 0;
      }
      this._animation = animation;
    }
    get finished() {
      if (!this._animation) {
        return this._finished;
      } else {
        return this.animation.finished;
      }
    }
    then(onResolve, _onReject) {
      return this.finished.finally(onResolve).then(() => {
      });
    }
    get animation() {
      if (!this._animation) {
        this.keyframeResolver?.resume();
        flushKeyframeResolvers();
      }
      return this._animation;
    }
    get duration() {
      return this.animation.duration;
    }
    get iterationDuration() {
      return this.animation.iterationDuration;
    }
    get time() {
      return this.animation.time;
    }
    set time(newTime) {
      this.animation.time = newTime;
    }
    get speed() {
      return this.animation.speed;
    }
    get state() {
      return this.animation.state;
    }
    set speed(newSpeed) {
      this.animation.speed = newSpeed;
    }
    get startTime() {
      return this.animation.startTime;
    }
    attachTimeline(timeline) {
      if (this._animation) {
        this.stopTimeline = this.animation.attachTimeline(timeline);
      } else {
        this.pendingTimeline = timeline;
      }
      return () => this.stop();
    }
    play() {
      this.animation.play();
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.complete();
    }
    cancel() {
      if (this._animation) {
        this.animation.cancel();
      }
      this.keyframeResolver?.cancel();
    }
  };

  // node_modules/motion-dom/dist/es/animation/utils/calc-child-stagger.mjs
  function calcChildStagger(children, child, delayChildren, staggerChildren = 0, staggerDirection = 1) {
    const index = Array.from(children).sort((a, b) => a.sortNodePosition(b)).indexOf(child);
    const numChildren = children.size;
    const maxStaggerDuration = (numChildren - 1) * staggerChildren;
    const delayIsFunction = typeof delayChildren === "function";
    return delayIsFunction ? delayChildren(index, numChildren) : staggerDirection === 1 ? index * staggerChildren : maxStaggerDuration - index * staggerChildren;
  }

  // node_modules/motion-dom/dist/es/animation/utils/css-variables-conversion.mjs
  var splitCSSVariableRegex = (
    // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
    /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
  );
  function parseCSSVariable(current) {
    const match = splitCSSVariableRegex.exec(current);
    if (!match)
      return [,];
    const [, token1, token2, fallback] = match;
    return [`--${token1 ?? token2}`, fallback];
  }
  var maxDepth = 4;
  function getVariableValue(current, element, depth = 1) {
    invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
    const [token, fallback] = parseCSSVariable(current);
    if (!token)
      return;
    const resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
      const trimmed = resolved.trim();
      return isNumericalString(trimmed) ? parseFloat(trimmed) : trimmed;
    }
    return isCSSVariableToken(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
  }

  // node_modules/motion-dom/dist/es/animation/utils/default-transitions.mjs
  var underDampedSpring = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  };
  var criticallyDampedSpring = (target) => ({
    type: "spring",
    stiffness: 550,
    damping: target === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  });
  var keyframesTransition = {
    type: "keyframes",
    duration: 0.8
  };
  var ease = {
    type: "keyframes",
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3
  };
  var getDefaultTransition = (valueKey, { keyframes: keyframes2 }) => {
    if (keyframes2.length > 2) {
      return keyframesTransition;
    } else if (transformProps.has(valueKey)) {
      return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes2[1]) : underDampedSpring;
    }
    return ease;
  };

  // node_modules/motion-dom/dist/es/animation/utils/resolve-transition.mjs
  function resolveTransition(transition, parentTransition) {
    if (transition?.inherit && parentTransition) {
      const { inherit: _, ...rest } = transition;
      return { ...parentTransition, ...rest };
    }
    return transition;
  }

  // node_modules/motion-dom/dist/es/animation/utils/get-value-transition.mjs
  function getValueTransition(transition, key) {
    const valueTransition = transition?.[key] ?? transition?.["default"] ?? transition;
    if (valueTransition !== transition) {
      return resolveTransition(valueTransition, transition);
    }
    return valueTransition;
  }

  // node_modules/motion-dom/dist/es/animation/utils/is-transition-defined.mjs
  var orchestrationKeys = /* @__PURE__ */ new Set([
    "when",
    "delay",
    "delayChildren",
    "staggerChildren",
    "staggerDirection",
    "repeat",
    "repeatType",
    "repeatDelay",
    "from",
    "elapsed"
  ]);
  function isTransitionDefined(transition) {
    for (const key in transition) {
      if (!orchestrationKeys.has(key))
        return true;
    }
    return false;
  }

  // node_modules/motion-dom/dist/es/animation/interfaces/motion-value.mjs
  var animateMotionValue = (name, value, target, transition = {}, element, isHandoff) => (onComplete) => {
    const valueTransition = getValueTransition(transition, name) || {};
    const delay2 = valueTransition.delay || transition.delay || 0;
    let { elapsed = 0 } = transition;
    elapsed = elapsed - secondsToMilliseconds(delay2);
    const options = {
      keyframes: Array.isArray(target) ? target : [null, target],
      ease: "easeOut",
      velocity: value.getVelocity(),
      ...valueTransition,
      delay: -elapsed,
      onUpdate: (v) => {
        value.set(v);
        valueTransition.onUpdate && valueTransition.onUpdate(v);
      },
      onComplete: () => {
        onComplete();
        valueTransition.onComplete && valueTransition.onComplete();
      },
      name,
      motionValue: value,
      element: isHandoff ? void 0 : element
    };
    if (!isTransitionDefined(valueTransition)) {
      Object.assign(options, getDefaultTransition(name, options));
    }
    options.duration && (options.duration = secondsToMilliseconds(options.duration));
    options.repeatDelay && (options.repeatDelay = secondsToMilliseconds(options.repeatDelay));
    if (options.from !== void 0) {
      options.keyframes[0] = options.from;
    }
    let shouldSkip = false;
    if (options.type === false || options.duration === 0 && !options.repeatDelay) {
      makeAnimationInstant(options);
      if (options.delay === 0) {
        shouldSkip = true;
      }
    }
    if (MotionGlobalConfig.instantAnimations || MotionGlobalConfig.skipAnimations || element?.shouldSkipAnimations) {
      shouldSkip = true;
      makeAnimationInstant(options);
      options.delay = 0;
    }
    options.allowFlatten = !valueTransition.type && !valueTransition.ease;
    if (shouldSkip && !isHandoff && value.get() !== void 0) {
      const finalKeyframe = getFinalKeyframe(options.keyframes, valueTransition);
      if (finalKeyframe !== void 0) {
        frame.update(() => {
          options.onUpdate(finalKeyframe);
          options.onComplete();
        });
        return;
      }
    }
    return valueTransition.isSync ? new JSAnimation(options) : new AsyncMotionValueAnimation(options);
  };

  // node_modules/motion-dom/dist/es/render/utils/resolve-variants.mjs
  function getValueState(visualElement) {
    const state = [{}, {}];
    visualElement?.values.forEach((value, key) => {
      state[0][key] = value.get();
      state[1][key] = value.getVelocity();
    });
    return state;
  }
  function resolveVariantFromProps(props, definition, custom, visualElement) {
    if (typeof definition === "function") {
      const [current, velocity] = getValueState(visualElement);
      definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
    }
    if (typeof definition === "string") {
      definition = props.variants && props.variants[definition];
    }
    if (typeof definition === "function") {
      const [current, velocity] = getValueState(visualElement);
      definition = definition(custom !== void 0 ? custom : props.custom, current, velocity);
    }
    return definition;
  }

  // node_modules/motion-dom/dist/es/render/utils/resolve-dynamic-variants.mjs
  function resolveVariant(visualElement, definition, custom) {
    const props = visualElement.getProps();
    return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, visualElement);
  }

  // node_modules/motion-dom/dist/es/render/utils/keys-position.mjs
  var positionalKeys = /* @__PURE__ */ new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...transformPropOrder
  ]);

  // node_modules/motion-dom/dist/es/value/index.mjs
  var MAX_VELOCITY_DELTA = 30;
  var isFloat = (value) => {
    return !isNaN(parseFloat(value));
  };
  var collectMotionValues = {
    current: void 0
  };
  var MotionValue = class {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     */
    constructor(init, options = {}) {
      this.canTrackVelocity = null;
      this.events = {};
      this.updateAndNotify = (v) => {
        const currentTime = time.now();
        if (this.updatedAt !== currentTime) {
          this.setPrevFrameValue();
        }
        this.prev = this.current;
        this.setCurrent(v);
        if (this.current !== this.prev) {
          this.events.change?.notify(this.current);
          if (this.dependents) {
            for (const dependent of this.dependents) {
              dependent.dirty();
            }
          }
        }
      };
      this.hasAnimated = false;
      this.setCurrent(init);
      this.owner = options.owner;
    }
    setCurrent(current) {
      this.current = current;
      this.updatedAt = time.now();
      if (this.canTrackVelocity === null && current !== void 0) {
        this.canTrackVelocity = isFloat(this.current);
      }
    }
    setPrevFrameValue(prevFrameValue = this.current) {
      this.prevFrameValue = prevFrameValue;
      this.prevUpdatedAt = this.updatedAt;
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */
    onChange(subscription) {
      if (true) {
        warnOnce(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
      }
      return this.on("change", subscription);
    }
    on(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = new SubscriptionManager();
      }
      const unsubscribe = this.events[eventName].add(callback);
      if (eventName === "change") {
        return () => {
          unsubscribe();
          frame.read(() => {
            if (!this.events.change.getSize()) {
              this.stop();
            }
          });
        };
      }
      return unsubscribe;
    }
    clearListeners() {
      for (const eventManagers in this.events) {
        this.events[eventManagers].clear();
      }
    }
    /**
     * Attaches a passive effect to the `MotionValue`.
     */
    attach(passiveEffect, stopPassiveEffect) {
      this.passiveEffect = passiveEffect;
      this.stopPassiveEffect = stopPassiveEffect;
    }
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */
    set(v) {
      if (!this.passiveEffect) {
        this.updateAndNotify(v);
      } else {
        this.passiveEffect(v, this.updateAndNotify);
      }
    }
    setWithVelocity(prev, current, delta) {
      this.set(current);
      this.prev = void 0;
      this.prevFrameValue = prev;
      this.prevUpdatedAt = this.updatedAt - delta;
    }
    /**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */
    jump(v, endAnimation = true) {
      this.updateAndNotify(v);
      this.prev = v;
      this.prevUpdatedAt = this.prevFrameValue = void 0;
      endAnimation && this.stop();
      if (this.stopPassiveEffect)
        this.stopPassiveEffect();
    }
    dirty() {
      this.events.change?.notify(this.current);
    }
    addDependent(dependent) {
      if (!this.dependents) {
        this.dependents = /* @__PURE__ */ new Set();
      }
      this.dependents.add(dependent);
    }
    removeDependent(dependent) {
      if (this.dependents) {
        this.dependents.delete(dependent);
      }
    }
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */
    get() {
      if (collectMotionValues.current) {
        collectMotionValues.current.push(this);
      }
      return this.current;
    }
    /**
     * @public
     */
    getPrevious() {
      return this.prev;
    }
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */
    getVelocity() {
      const currentTime = time.now();
      if (!this.canTrackVelocity || this.prevFrameValue === void 0 || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) {
        return 0;
      }
      const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
      return velocityPerSecond(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
    }
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     */
    start(startAnimation) {
      this.stop();
      return new Promise((resolve) => {
        this.hasAnimated = true;
        this.animation = startAnimation(resolve);
        if (this.events.animationStart) {
          this.events.animationStart.notify();
        }
      }).then(() => {
        if (this.events.animationComplete) {
          this.events.animationComplete.notify();
        }
        this.clearAnimation();
      });
    }
    /**
     * Stop the currently active animation.
     *
     * @public
     */
    stop() {
      if (this.animation) {
        this.animation.stop();
        if (this.events.animationCancel) {
          this.events.animationCancel.notify();
        }
      }
      this.clearAnimation();
    }
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */
    destroy() {
      this.dependents?.clear();
      this.events.destroy?.notify();
      this.clearListeners();
      this.stop();
      if (this.stopPassiveEffect) {
        this.stopPassiveEffect();
      }
    }
  };
  function motionValue(init, options) {
    return new MotionValue(init, options);
  }

  // node_modules/motion-dom/dist/es/render/utils/is-keyframes-target.mjs
  var isKeyframesTarget = (v) => {
    return Array.isArray(v);
  };

  // node_modules/motion-dom/dist/es/render/utils/setters.mjs
  function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) {
      visualElement.getValue(key).set(value);
    } else {
      visualElement.addValue(key, motionValue(value));
    }
  }
  function resolveFinalValueInKeyframes(v) {
    return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
  }
  function setTarget(visualElement, definition) {
    const resolved = resolveVariant(visualElement, definition);
    let { transitionEnd = {}, transition = {}, ...target } = resolved || {};
    target = { ...target, ...transitionEnd };
    for (const key in target) {
      const value = resolveFinalValueInKeyframes(target[key]);
      setMotionValue(visualElement, key, value);
    }
  }

  // node_modules/motion-dom/dist/es/value/utils/is-motion-value.mjs
  var isMotionValue = (value) => Boolean(value && value.getVelocity);

  // node_modules/motion-dom/dist/es/value/will-change/is.mjs
  function isWillChangeMotionValue(value) {
    return Boolean(isMotionValue(value) && value.add);
  }

  // node_modules/motion-dom/dist/es/value/will-change/add-will-change.mjs
  function addValueToWillChange(visualElement, key) {
    const willChange = visualElement.getValue("willChange");
    if (isWillChangeMotionValue(willChange)) {
      return willChange.add(key);
    } else if (!willChange && MotionGlobalConfig.WillChange) {
      const newWillChange = new MotionGlobalConfig.WillChange("auto");
      visualElement.addValue("willChange", newWillChange);
      newWillChange.add(key);
    }
  }

  // node_modules/motion-dom/dist/es/render/dom/utils/camel-to-dash.mjs
  function camelToDash(str) {
    return str.replace(/([A-Z])/g, (match) => `-${match.toLowerCase()}`);
  }

  // node_modules/motion-dom/dist/es/animation/optimized-appear/data-id.mjs
  var optimizedAppearDataId = "framerAppearId";
  var optimizedAppearDataAttribute = "data-" + camelToDash(optimizedAppearDataId);

  // node_modules/motion-dom/dist/es/animation/optimized-appear/get-appear-id.mjs
  function getOptimisedAppearId(visualElement) {
    return visualElement.props[optimizedAppearDataAttribute];
  }

  // node_modules/motion-dom/dist/es/animation/interfaces/visual-element-target.mjs
  function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
    const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
  }
  function animateTarget(visualElement, targetAndTransition, { delay: delay2 = 0, transitionOverride, type } = {}) {
    let { transition, transitionEnd, ...target } = targetAndTransition;
    const defaultTransition = visualElement.getDefaultTransition();
    transition = transition ? resolveTransition(transition, defaultTransition) : defaultTransition;
    const reduceMotion = transition?.reduceMotion;
    if (transitionOverride)
      transition = transitionOverride;
    const animations2 = [];
    const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
    for (const key in target) {
      const value = visualElement.getValue(key, visualElement.latestValues[key] ?? null);
      const valueTarget = target[key];
      if (valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
        continue;
      }
      const valueTransition = {
        delay: delay2,
        ...getValueTransition(transition || {}, key)
      };
      const currentValue = value.get();
      if (currentValue !== void 0 && !value.isAnimating() && !Array.isArray(valueTarget) && valueTarget === currentValue && !valueTransition.velocity) {
        frame.update(() => value.set(valueTarget));
        continue;
      }
      let isHandoff = false;
      if (window.MotionHandoffAnimation) {
        const appearId = getOptimisedAppearId(visualElement);
        if (appearId) {
          const startTime = window.MotionHandoffAnimation(appearId, key, frame);
          if (startTime !== null) {
            valueTransition.startTime = startTime;
            isHandoff = true;
          }
        }
      }
      addValueToWillChange(visualElement, key);
      const shouldReduceMotion = reduceMotion ?? visualElement.shouldReduceMotion;
      value.start(animateMotionValue(key, value, valueTarget, shouldReduceMotion && positionalKeys.has(key) ? { type: false } : valueTransition, visualElement, isHandoff));
      const animation = value.animation;
      if (animation) {
        animations2.push(animation);
      }
    }
    if (transitionEnd) {
      const applyTransitionEnd = () => frame.update(() => {
        transitionEnd && setTarget(visualElement, transitionEnd);
      });
      if (animations2.length) {
        Promise.all(animations2).then(applyTransitionEnd);
      } else {
        applyTransitionEnd();
      }
    }
    return animations2;
  }

  // node_modules/motion-dom/dist/es/animation/interfaces/visual-element-variant.mjs
  function animateVariant(visualElement, variant, options = {}) {
    const resolved = resolveVariant(visualElement, variant, options.type === "exit" ? visualElement.presenceContext?.custom : void 0);
    let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
    if (options.transitionOverride) {
      transition = options.transitionOverride;
    }
    const getAnimation = resolved ? () => Promise.all(animateTarget(visualElement, resolved, options)) : () => Promise.resolve();
    const getChildAnimations = visualElement.variantChildren && visualElement.variantChildren.size ? (forwardDelay = 0) => {
      const { delayChildren = 0, staggerChildren, staggerDirection } = transition;
      return animateChildren(visualElement, variant, forwardDelay, delayChildren, staggerChildren, staggerDirection, options);
    } : () => Promise.resolve();
    const { when } = transition;
    if (when) {
      const [first, last] = when === "beforeChildren" ? [getAnimation, getChildAnimations] : [getChildAnimations, getAnimation];
      return first().then(() => last());
    } else {
      return Promise.all([getAnimation(), getChildAnimations(options.delay)]);
    }
  }
  function animateChildren(visualElement, variant, delay2 = 0, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
    const animations2 = [];
    for (const child of visualElement.variantChildren) {
      child.notify("AnimationStart", variant);
      animations2.push(animateVariant(child, variant, {
        ...options,
        delay: delay2 + (typeof delayChildren === "function" ? 0 : delayChildren) + calcChildStagger(visualElement.variantChildren, child, delayChildren, staggerChildren, staggerDirection)
      }).then(() => child.notify("AnimationComplete", variant)));
    }
    return Promise.all(animations2);
  }

  // node_modules/motion-dom/dist/es/animation/interfaces/visual-element.mjs
  function animateVisualElement(visualElement, definition, options = {}) {
    visualElement.notify("AnimationStart", definition);
    let animation;
    if (Array.isArray(definition)) {
      const animations2 = definition.map((variant) => animateVariant(visualElement, variant, options));
      animation = Promise.all(animations2);
    } else if (typeof definition === "string") {
      animation = animateVariant(visualElement, definition, options);
    } else {
      const resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition;
      animation = Promise.all(animateTarget(visualElement, resolvedDefinition, options));
    }
    return animation.then(() => {
      visualElement.notify("AnimationComplete", definition);
    });
  }

  // node_modules/motion-dom/dist/es/value/types/auto.mjs
  var auto = {
    test: (v) => v === "auto",
    parse: (v) => v
  };

  // node_modules/motion-dom/dist/es/value/types/test.mjs
  var testValueType = (v) => (type) => type.test(v);

  // node_modules/motion-dom/dist/es/value/types/dimensions.mjs
  var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
  var findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));

  // node_modules/motion-dom/dist/es/animation/keyframes/utils/is-none.mjs
  function isNone(value) {
    if (typeof value === "number") {
      return value === 0;
    } else if (value !== null) {
      return value === "none" || value === "0" || isZeroValueString(value);
    } else {
      return true;
    }
  }

  // node_modules/motion-dom/dist/es/value/types/complex/filter.mjs
  var maxDefaults = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
  function applyDefaultFilter(v) {
    const [name, value] = v.slice(0, -1).split("(");
    if (name === "drop-shadow")
      return v;
    const [number2] = value.match(floatRegex) || [];
    if (!number2)
      return v;
    const unit = value.replace(number2, "");
    let defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number2 !== value)
      defaultValue *= 100;
    return name + "(" + defaultValue + unit + ")";
  }
  var functionRegex = /\b([a-z-]*)\(.*?\)/gu;
  var filter = {
    ...complex,
    getAnimatableNone: (v) => {
      const functions = v.match(functionRegex);
      return functions ? functions.map(applyDefaultFilter).join(" ") : v;
    }
  };

  // node_modules/motion-dom/dist/es/value/types/complex/mask.mjs
  var mask = {
    ...complex,
    getAnimatableNone: (v) => {
      const parsed = complex.parse(v);
      const transformer = complex.createTransformer(v);
      return transformer(parsed.map((v2) => typeof v2 === "number" ? 0 : typeof v2 === "object" ? { ...v2, alpha: 1 } : v2));
    }
  };

  // node_modules/motion-dom/dist/es/value/types/int.mjs
  var int = {
    ...number,
    transform: Math.round
  };

  // node_modules/motion-dom/dist/es/value/types/maps/transform.mjs
  var transformValueTypes = {
    rotate: degrees,
    rotateX: degrees,
    rotateY: degrees,
    rotateZ: degrees,
    scale,
    scaleX: scale,
    scaleY: scale,
    scaleZ: scale,
    skew: degrees,
    skewX: degrees,
    skewY: degrees,
    distance: px,
    translateX: px,
    translateY: px,
    translateZ: px,
    x: px,
    y: px,
    z: px,
    perspective: px,
    transformPerspective: px,
    opacity: alpha,
    originX: progressPercentage,
    originY: progressPercentage,
    originZ: px
  };

  // node_modules/motion-dom/dist/es/value/types/maps/number.mjs
  var numberValueTypes = {
    // Border props
    borderWidth: px,
    borderTopWidth: px,
    borderRightWidth: px,
    borderBottomWidth: px,
    borderLeftWidth: px,
    borderRadius: px,
    borderTopLeftRadius: px,
    borderTopRightRadius: px,
    borderBottomRightRadius: px,
    borderBottomLeftRadius: px,
    // Positioning props
    width: px,
    maxWidth: px,
    height: px,
    maxHeight: px,
    top: px,
    right: px,
    bottom: px,
    left: px,
    inset: px,
    insetBlock: px,
    insetBlockStart: px,
    insetBlockEnd: px,
    insetInline: px,
    insetInlineStart: px,
    insetInlineEnd: px,
    // Spacing props
    padding: px,
    paddingTop: px,
    paddingRight: px,
    paddingBottom: px,
    paddingLeft: px,
    paddingBlock: px,
    paddingBlockStart: px,
    paddingBlockEnd: px,
    paddingInline: px,
    paddingInlineStart: px,
    paddingInlineEnd: px,
    margin: px,
    marginTop: px,
    marginRight: px,
    marginBottom: px,
    marginLeft: px,
    marginBlock: px,
    marginBlockStart: px,
    marginBlockEnd: px,
    marginInline: px,
    marginInlineStart: px,
    marginInlineEnd: px,
    // Typography
    fontSize: px,
    // Misc
    backgroundPositionX: px,
    backgroundPositionY: px,
    ...transformValueTypes,
    zIndex: int,
    // SVG
    fillOpacity: alpha,
    strokeOpacity: alpha,
    numOctaves: int
  };

  // node_modules/motion-dom/dist/es/value/types/maps/defaults.mjs
  var defaultValueTypes = {
    ...numberValueTypes,
    // Color props
    color,
    backgroundColor: color,
    outlineColor: color,
    fill: color,
    stroke: color,
    // Border props
    borderColor: color,
    borderTopColor: color,
    borderRightColor: color,
    borderBottomColor: color,
    borderLeftColor: color,
    filter,
    WebkitFilter: filter,
    mask,
    WebkitMask: mask
  };
  var getDefaultValueType = (key) => defaultValueTypes[key];

  // node_modules/motion-dom/dist/es/value/types/utils/animatable-none.mjs
  var customTypes = /* @__PURE__ */ new Set([filter, mask]);
  function getAnimatableNone2(key, value) {
    let defaultValueType = getDefaultValueType(key);
    if (!customTypes.has(defaultValueType))
      defaultValueType = complex;
    return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : void 0;
  }

  // node_modules/motion-dom/dist/es/animation/keyframes/utils/make-none-animatable.mjs
  var invalidTemplates = /* @__PURE__ */ new Set(["auto", "none", "0"]);
  function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
    let i = 0;
    let animatableTemplate = void 0;
    while (i < unresolvedKeyframes.length && !animatableTemplate) {
      const keyframe = unresolvedKeyframes[i];
      if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && analyseComplexValue(keyframe).values.length) {
        animatableTemplate = unresolvedKeyframes[i];
      }
      i++;
    }
    if (animatableTemplate && name) {
      for (const noneIndex of noneKeyframeIndexes) {
        unresolvedKeyframes[noneIndex] = getAnimatableNone2(name, animatableTemplate);
      }
    }
  }

  // node_modules/motion-dom/dist/es/animation/keyframes/DOMKeyframesResolver.mjs
  var DOMKeyframesResolver = class extends KeyframeResolver {
    constructor(unresolvedKeyframes, onComplete, name, motionValue2, element) {
      super(unresolvedKeyframes, onComplete, name, motionValue2, element, true);
    }
    readKeyframes() {
      const { unresolvedKeyframes, element, name } = this;
      if (!element || !element.current)
        return;
      super.readKeyframes();
      for (let i = 0; i < unresolvedKeyframes.length; i++) {
        let keyframe = unresolvedKeyframes[i];
        if (typeof keyframe === "string") {
          keyframe = keyframe.trim();
          if (isCSSVariableToken(keyframe)) {
            const resolved = getVariableValue(keyframe, element.current);
            if (resolved !== void 0) {
              unresolvedKeyframes[i] = resolved;
            }
            if (i === unresolvedKeyframes.length - 1) {
              this.finalKeyframe = keyframe;
            }
          }
        }
      }
      this.resolveNoneKeyframes();
      if (!positionalKeys.has(name) || unresolvedKeyframes.length !== 2) {
        return;
      }
      const [origin, target] = unresolvedKeyframes;
      const originType = findDimensionValueType(origin);
      const targetType = findDimensionValueType(target);
      const originHasVar = containsCSSVariable(origin);
      const targetHasVar = containsCSSVariable(target);
      if (originHasVar !== targetHasVar && positionalValues[name]) {
        this.needsMeasurement = true;
        return;
      }
      if (originType === targetType)
        return;
      if (isNumOrPxType(originType) && isNumOrPxType(targetType)) {
        for (let i = 0; i < unresolvedKeyframes.length; i++) {
          const value = unresolvedKeyframes[i];
          if (typeof value === "string") {
            unresolvedKeyframes[i] = parseFloat(value);
          }
        }
      } else if (positionalValues[name]) {
        this.needsMeasurement = true;
      }
    }
    resolveNoneKeyframes() {
      const { unresolvedKeyframes, name } = this;
      const noneKeyframeIndexes = [];
      for (let i = 0; i < unresolvedKeyframes.length; i++) {
        if (unresolvedKeyframes[i] === null || isNone(unresolvedKeyframes[i])) {
          noneKeyframeIndexes.push(i);
        }
      }
      if (noneKeyframeIndexes.length) {
        makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name);
      }
    }
    measureInitialState() {
      const { element, unresolvedKeyframes, name } = this;
      if (!element || !element.current)
        return;
      if (name === "height") {
        this.suspendedScrollY = window.pageYOffset;
      }
      this.measuredOrigin = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
      unresolvedKeyframes[0] = this.measuredOrigin;
      const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
      if (measureKeyframe !== void 0) {
        element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
      }
    }
    measureEndState() {
      const { element, name, unresolvedKeyframes } = this;
      if (!element || !element.current)
        return;
      const value = element.getValue(name);
      value && value.jump(this.measuredOrigin, false);
      const finalKeyframeIndex = unresolvedKeyframes.length - 1;
      const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
      unresolvedKeyframes[finalKeyframeIndex] = positionalValues[name](element.measureViewportBox(), window.getComputedStyle(element.current));
      if (finalKeyframe !== null && this.finalKeyframe === void 0) {
        this.finalKeyframe = finalKeyframe;
      }
      if (this.removedTransforms?.length) {
        this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue]) => {
          element.getValue(unsetTransformName).set(unsetTransformValue);
        });
      }
      this.resolveNoneKeyframes();
    }
  };

  // node_modules/motion-dom/dist/es/utils/resolve-elements.mjs
  function resolveElements(elementOrSelector, scope, selectorCache) {
    if (elementOrSelector == null) {
      return [];
    }
    if (elementOrSelector instanceof EventTarget) {
      return [elementOrSelector];
    } else if (typeof elementOrSelector === "string") {
      let root = document;
      if (scope) {
        root = scope.current;
      }
      const elements = selectorCache?.[elementOrSelector] ?? root.querySelectorAll(elementOrSelector);
      return elements ? Array.from(elements) : [];
    }
    return Array.from(elementOrSelector).filter((element) => element != null);
  }

  // node_modules/motion-dom/dist/es/value/types/utils/get-as-type.mjs
  var getValueAsType = (value, type) => {
    return type && typeof value === "number" ? type.transform(value) : value;
  };

  // node_modules/motion-dom/dist/es/utils/is-html-element.mjs
  function isHTMLElement(element) {
    return isObject(element) && "offsetHeight" in element && !("ownerSVGElement" in element);
  }

  // node_modules/motion-dom/dist/es/frameloop/microtask.mjs
  var { schedule: microtask, cancel: cancelMicrotask } = /* @__PURE__ */ createRenderBatcher(queueMicrotask, false);

  // node_modules/motion-dom/dist/es/gestures/drag/state/is-active.mjs
  var isDragging = {
    x: false,
    y: false
  };
  function isDragActive() {
    return isDragging.x || isDragging.y;
  }

  // node_modules/motion-dom/dist/es/gestures/drag/state/set-active.mjs
  function setDragLock(axis) {
    if (axis === "x" || axis === "y") {
      if (isDragging[axis]) {
        return null;
      } else {
        isDragging[axis] = true;
        return () => {
          isDragging[axis] = false;
        };
      }
    } else {
      if (isDragging.x || isDragging.y) {
        return null;
      } else {
        isDragging.x = isDragging.y = true;
        return () => {
          isDragging.x = isDragging.y = false;
        };
      }
    }
  }

  // node_modules/motion-dom/dist/es/gestures/utils/setup.mjs
  function setupGesture(elementOrSelector, options) {
    const elements = resolveElements(elementOrSelector);
    const gestureAbortController = new AbortController();
    const eventOptions = {
      passive: true,
      ...options,
      signal: gestureAbortController.signal
    };
    const cancel = () => gestureAbortController.abort();
    return [elements, eventOptions, cancel];
  }

  // node_modules/motion-dom/dist/es/gestures/hover.mjs
  function isValidHover(event) {
    return !(event.pointerType === "touch" || isDragActive());
  }
  function hover(elementOrSelector, onHoverStart, options = {}) {
    const [elements, eventOptions, cancel] = setupGesture(elementOrSelector, options);
    elements.forEach((element) => {
      let isPressed = false;
      let deferredHoverEnd = false;
      let hoverEndCallback;
      const removePointerLeave = () => {
        element.removeEventListener("pointerleave", onPointerLeave);
      };
      const endHover = (event) => {
        if (hoverEndCallback) {
          hoverEndCallback(event);
          hoverEndCallback = void 0;
        }
        removePointerLeave();
      };
      const onPointerUp = (event) => {
        isPressed = false;
        window.removeEventListener("pointerup", onPointerUp);
        window.removeEventListener("pointercancel", onPointerUp);
        if (deferredHoverEnd) {
          deferredHoverEnd = false;
          endHover(event);
        }
      };
      const onPointerDown = () => {
        isPressed = true;
        window.addEventListener("pointerup", onPointerUp, eventOptions);
        window.addEventListener("pointercancel", onPointerUp, eventOptions);
      };
      const onPointerLeave = (leaveEvent) => {
        if (leaveEvent.pointerType === "touch")
          return;
        if (isPressed) {
          deferredHoverEnd = true;
          return;
        }
        endHover(leaveEvent);
      };
      const onPointerEnter = (enterEvent) => {
        if (!isValidHover(enterEvent))
          return;
        deferredHoverEnd = false;
        const onHoverEnd = onHoverStart(element, enterEvent);
        if (typeof onHoverEnd !== "function")
          return;
        hoverEndCallback = onHoverEnd;
        element.addEventListener("pointerleave", onPointerLeave, eventOptions);
      };
      element.addEventListener("pointerenter", onPointerEnter, eventOptions);
      element.addEventListener("pointerdown", onPointerDown, eventOptions);
    });
    return cancel;
  }

  // node_modules/motion-dom/dist/es/gestures/utils/is-node-or-child.mjs
  var isNodeOrChild = (parent, child) => {
    if (!child) {
      return false;
    } else if (parent === child) {
      return true;
    } else {
      return isNodeOrChild(parent, child.parentElement);
    }
  };

  // node_modules/motion-dom/dist/es/gestures/utils/is-primary-pointer.mjs
  var isPrimaryPointer = (event) => {
    if (event.pointerType === "mouse") {
      return typeof event.button !== "number" || event.button <= 0;
    } else {
      return event.isPrimary !== false;
    }
  };

  // node_modules/motion-dom/dist/es/gestures/press/utils/is-keyboard-accessible.mjs
  var keyboardAccessibleElements = /* @__PURE__ */ new Set([
    "BUTTON",
    "INPUT",
    "SELECT",
    "TEXTAREA",
    "A"
  ]);
  function isElementKeyboardAccessible(element) {
    return keyboardAccessibleElements.has(element.tagName) || element.isContentEditable === true;
  }
  var textInputElements = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
  function isElementTextInput(element) {
    return textInputElements.has(element.tagName) || element.isContentEditable === true;
  }

  // node_modules/motion-dom/dist/es/gestures/press/utils/state.mjs
  var isPressing = /* @__PURE__ */ new WeakSet();

  // node_modules/motion-dom/dist/es/gestures/press/utils/keyboard.mjs
  function filterEvents(callback) {
    return (event) => {
      if (event.key !== "Enter")
        return;
      callback(event);
    };
  }
  function firePointerEvent(target, type) {
    target.dispatchEvent(new PointerEvent("pointer" + type, { isPrimary: true, bubbles: true }));
  }
  var enableKeyboardPress = (focusEvent, eventOptions) => {
    const element = focusEvent.currentTarget;
    if (!element)
      return;
    const handleKeydown = filterEvents(() => {
      if (isPressing.has(element))
        return;
      firePointerEvent(element, "down");
      const handleKeyup = filterEvents(() => {
        firePointerEvent(element, "up");
      });
      const handleBlur = () => firePointerEvent(element, "cancel");
      element.addEventListener("keyup", handleKeyup, eventOptions);
      element.addEventListener("blur", handleBlur, eventOptions);
    });
    element.addEventListener("keydown", handleKeydown, eventOptions);
    element.addEventListener("blur", () => element.removeEventListener("keydown", handleKeydown), eventOptions);
  };

  // node_modules/motion-dom/dist/es/gestures/press/index.mjs
  function isValidPressEvent(event) {
    return isPrimaryPointer(event) && !isDragActive();
  }
  var claimedPointerDownEvents = /* @__PURE__ */ new WeakSet();
  function press(targetOrSelector, onPressStart, options = {}) {
    const [targets, eventOptions, cancelEvents] = setupGesture(targetOrSelector, options);
    const startPress = (startEvent) => {
      const target = startEvent.currentTarget;
      if (!isValidPressEvent(startEvent))
        return;
      if (claimedPointerDownEvents.has(startEvent))
        return;
      isPressing.add(target);
      if (options.stopPropagation) {
        claimedPointerDownEvents.add(startEvent);
      }
      const onPressEnd = onPressStart(target, startEvent);
      const onPointerEnd = (endEvent, success) => {
        window.removeEventListener("pointerup", onPointerUp);
        window.removeEventListener("pointercancel", onPointerCancel);
        if (isPressing.has(target)) {
          isPressing.delete(target);
        }
        if (!isValidPressEvent(endEvent)) {
          return;
        }
        if (typeof onPressEnd === "function") {
          onPressEnd(endEvent, { success });
        }
      };
      const onPointerUp = (upEvent) => {
        onPointerEnd(upEvent, target === window || target === document || options.useGlobalTarget || isNodeOrChild(target, upEvent.target));
      };
      const onPointerCancel = (cancelEvent) => {
        onPointerEnd(cancelEvent, false);
      };
      window.addEventListener("pointerup", onPointerUp, eventOptions);
      window.addEventListener("pointercancel", onPointerCancel, eventOptions);
    };
    targets.forEach((target) => {
      const pointerDownTarget = options.useGlobalTarget ? window : target;
      pointerDownTarget.addEventListener("pointerdown", startPress, eventOptions);
      if (isHTMLElement(target)) {
        target.addEventListener("focus", (event) => enableKeyboardPress(event, eventOptions));
        if (!isElementKeyboardAccessible(target) && !target.hasAttribute("tabindex")) {
          target.tabIndex = 0;
        }
      }
    });
    return cancelEvents;
  }

  // node_modules/motion-dom/dist/es/utils/is-svg-element.mjs
  function isSVGElement(element) {
    return isObject(element) && "ownerSVGElement" in element;
  }

  // node_modules/motion-dom/dist/es/resize/handle-element.mjs
  var resizeHandlers = /* @__PURE__ */ new WeakMap();
  var observer;
  var getSize = (borderBoxAxis, svgAxis, htmlAxis) => (target, borderBoxSize) => {
    if (borderBoxSize && borderBoxSize[0]) {
      return borderBoxSize[0][borderBoxAxis + "Size"];
    } else if (isSVGElement(target) && "getBBox" in target) {
      return target.getBBox()[svgAxis];
    } else {
      return target[htmlAxis];
    }
  };
  var getWidth = /* @__PURE__ */ getSize("inline", "width", "offsetWidth");
  var getHeight = /* @__PURE__ */ getSize("block", "height", "offsetHeight");
  function notifyTarget({ target, borderBoxSize }) {
    resizeHandlers.get(target)?.forEach((handler) => {
      handler(target, {
        get width() {
          return getWidth(target, borderBoxSize);
        },
        get height() {
          return getHeight(target, borderBoxSize);
        }
      });
    });
  }
  function notifyAll(entries) {
    entries.forEach(notifyTarget);
  }
  function createResizeObserver() {
    if (typeof ResizeObserver === "undefined")
      return;
    observer = new ResizeObserver(notifyAll);
  }
  function resizeElement(target, handler) {
    if (!observer)
      createResizeObserver();
    const elements = resolveElements(target);
    elements.forEach((element) => {
      let elementHandlers = resizeHandlers.get(element);
      if (!elementHandlers) {
        elementHandlers = /* @__PURE__ */ new Set();
        resizeHandlers.set(element, elementHandlers);
      }
      elementHandlers.add(handler);
      observer?.observe(element);
    });
    return () => {
      elements.forEach((element) => {
        const elementHandlers = resizeHandlers.get(element);
        elementHandlers?.delete(handler);
        if (!elementHandlers?.size) {
          observer?.unobserve(element);
        }
      });
    };
  }

  // node_modules/motion-dom/dist/es/resize/handle-window.mjs
  var windowCallbacks = /* @__PURE__ */ new Set();
  var windowResizeHandler;
  function createWindowResizeHandler() {
    windowResizeHandler = () => {
      const info = {
        get width() {
          return window.innerWidth;
        },
        get height() {
          return window.innerHeight;
        }
      };
      windowCallbacks.forEach((callback) => callback(info));
    };
    window.addEventListener("resize", windowResizeHandler);
  }
  function resizeWindow(callback) {
    windowCallbacks.add(callback);
    if (!windowResizeHandler)
      createWindowResizeHandler();
    return () => {
      windowCallbacks.delete(callback);
      if (!windowCallbacks.size && typeof windowResizeHandler === "function") {
        window.removeEventListener("resize", windowResizeHandler);
        windowResizeHandler = void 0;
      }
    };
  }

  // node_modules/motion-dom/dist/es/resize/index.mjs
  function resize(a, b) {
    return typeof a === "function" ? resizeWindow(a) : resizeElement(a, b);
  }

  // node_modules/motion-dom/dist/es/scroll/observe.mjs
  function observeTimeline(update, timeline) {
    let prevProgress;
    const onFrame = () => {
      const { currentTime } = timeline;
      const percentage = currentTime === null ? 0 : currentTime.value;
      const progress2 = percentage / 100;
      if (prevProgress !== progress2) {
        update(progress2);
      }
      prevProgress = progress2;
    };
    frame.preUpdate(onFrame, true);
    return () => cancelFrame(onFrame);
  }

  // node_modules/motion-dom/dist/es/utils/is-svg-svg-element.mjs
  function isSVGSVGElement(element) {
    return isSVGElement(element) && element.tagName === "svg";
  }

  // node_modules/motion-dom/dist/es/utils/transform.mjs
  function transform(...args) {
    const useImmediate = !Array.isArray(args[0]);
    const argOffset = useImmediate ? 0 : -1;
    const inputValue = args[0 + argOffset];
    const inputRange = args[1 + argOffset];
    const outputRange = args[2 + argOffset];
    const options = args[3 + argOffset];
    const interpolator = interpolate(inputRange, outputRange, options);
    return useImmediate ? interpolator(inputValue) : interpolator;
  }

  // node_modules/motion-dom/dist/es/value/follow-value.mjs
  function attachFollow(value, source, options = {}) {
    const initialValue = value.get();
    let activeAnimation = null;
    let latestValue = initialValue;
    let latestSetter;
    const unit = typeof initialValue === "string" ? initialValue.replace(/[\d.-]/g, "") : void 0;
    const stopAnimation = () => {
      if (activeAnimation) {
        activeAnimation.stop();
        activeAnimation = null;
      }
      value.animation = void 0;
    };
    const startAnimation = () => {
      const currentValue = asNumber(value.get());
      const targetValue = asNumber(latestValue);
      if (currentValue === targetValue) {
        stopAnimation();
        return;
      }
      const velocity = activeAnimation ? activeAnimation.getGeneratorVelocity() : value.getVelocity();
      stopAnimation();
      activeAnimation = new JSAnimation({
        keyframes: [currentValue, targetValue],
        velocity,
        // Default to spring if no type specified (matches useSpring behavior)
        type: "spring",
        restDelta: 1e-3,
        restSpeed: 0.01,
        ...options,
        onUpdate: latestSetter
      });
    };
    const scheduleAnimation = () => {
      startAnimation();
      value.animation = activeAnimation ?? void 0;
      value["events"].animationStart?.notify();
      activeAnimation?.then(() => {
        value.animation = void 0;
        value["events"].animationComplete?.notify();
      });
    };
    value.attach((v, set) => {
      latestValue = v;
      latestSetter = (latest) => set(parseValue(latest, unit));
      frame.postRender(scheduleAnimation);
    }, stopAnimation);
    if (isMotionValue(source)) {
      let skipNextAnimation = options.skipInitialAnimation === true;
      const removeSourceOnChange = source.on("change", (v) => {
        if (skipNextAnimation) {
          skipNextAnimation = false;
          value.jump(parseValue(v, unit), false);
        } else {
          value.set(parseValue(v, unit));
        }
      });
      const removeValueOnDestroy = value.on("destroy", removeSourceOnChange);
      return () => {
        removeSourceOnChange();
        removeValueOnDestroy();
      };
    }
    return stopAnimation;
  }
  function parseValue(v, unit) {
    return unit ? v + unit : v;
  }
  function asNumber(v) {
    return typeof v === "number" ? v : parseFloat(v);
  }

  // node_modules/motion-dom/dist/es/value/types/utils/find.mjs
  var valueTypes = [...dimensionValueTypes, color, complex];
  var findValueType = (v) => valueTypes.find(testValueType(v));

  // node_modules/motion-dom/dist/es/projection/geometry/models.mjs
  var createAxisDelta = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  });
  var createDelta = () => ({
    x: createAxisDelta(),
    y: createAxisDelta()
  });
  var createAxis = () => ({ min: 0, max: 0 });
  var createBox = () => ({
    x: createAxis(),
    y: createAxis()
  });

  // node_modules/motion-dom/dist/es/render/store.mjs
  var visualElementStore = /* @__PURE__ */ new WeakMap();

  // node_modules/motion-dom/dist/es/render/utils/is-animation-controls.mjs
  function isAnimationControls(v) {
    return v !== null && typeof v === "object" && typeof v.start === "function";
  }

  // node_modules/motion-dom/dist/es/render/utils/is-variant-label.mjs
  function isVariantLabel(v) {
    return typeof v === "string" || Array.isArray(v);
  }

  // node_modules/motion-dom/dist/es/render/utils/variant-props.mjs
  var variantPriorityOrder = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit"
  ];
  var variantProps = ["initial", ...variantPriorityOrder];

  // node_modules/motion-dom/dist/es/render/utils/is-controlling-variants.mjs
  function isControllingVariants(props) {
    return isAnimationControls(props.animate) || variantProps.some((name) => isVariantLabel(props[name]));
  }
  function isVariantNode(props) {
    return Boolean(isControllingVariants(props) || props.variants);
  }

  // node_modules/motion-dom/dist/es/render/utils/motion-values.mjs
  function updateMotionValuesFromProps(element, next, prev) {
    for (const key in next) {
      const nextValue = next[key];
      const prevValue = prev[key];
      if (isMotionValue(nextValue)) {
        element.addValue(key, nextValue);
      } else if (isMotionValue(prevValue)) {
        element.addValue(key, motionValue(nextValue, { owner: element }));
      } else if (prevValue !== nextValue) {
        if (element.hasValue(key)) {
          const existingValue = element.getValue(key);
          if (existingValue.liveStyle === true) {
            existingValue.jump(nextValue);
          } else if (!existingValue.hasAnimated) {
            existingValue.set(nextValue);
          }
        } else {
          const latestValue = element.getStaticValue(key);
          element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue, { owner: element }));
        }
      }
    }
    for (const key in prev) {
      if (next[key] === void 0)
        element.removeValue(key);
    }
    return next;
  }

  // node_modules/motion-dom/dist/es/render/utils/reduced-motion/state.mjs
  var prefersReducedMotion = { current: null };
  var hasReducedMotionListener = { current: false };

  // node_modules/motion-dom/dist/es/render/utils/reduced-motion/index.mjs
  var isBrowser2 = typeof window !== "undefined";
  function initPrefersReducedMotion() {
    hasReducedMotionListener.current = true;
    if (!isBrowser2)
      return;
    if (window.matchMedia) {
      const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
      const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
      motionMediaQuery.addEventListener("change", setReducedMotionPreferences);
      setReducedMotionPreferences();
    } else {
      prefersReducedMotion.current = false;
    }
  }

  // node_modules/motion-dom/dist/es/render/VisualElement.mjs
  var propEventHandlers = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
  ];
  var featureDefinitions = {};
  function setFeatureDefinitions(definitions) {
    featureDefinitions = definitions;
  }
  function getFeatureDefinitions() {
    return featureDefinitions;
  }
  var VisualElement = class {
    /**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */
    scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
      return {};
    }
    constructor({ parent, props, presenceContext, reducedMotionConfig, skipAnimations, blockInitialAnimation, visualState }, options = {}) {
      this.current = null;
      this.children = /* @__PURE__ */ new Set();
      this.isVariantNode = false;
      this.isControllingVariants = false;
      this.shouldReduceMotion = null;
      this.shouldSkipAnimations = false;
      this.values = /* @__PURE__ */ new Map();
      this.KeyframeResolver = KeyframeResolver;
      this.features = {};
      this.valueSubscriptions = /* @__PURE__ */ new Map();
      this.prevMotionValues = {};
      this.hasBeenMounted = false;
      this.events = {};
      this.propEventSubscriptions = {};
      this.notifyUpdate = () => this.notify("Update", this.latestValues);
      this.render = () => {
        if (!this.current)
          return;
        this.triggerBuild();
        this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
      };
      this.renderScheduledAt = 0;
      this.scheduleRender = () => {
        const now2 = time.now();
        if (this.renderScheduledAt < now2) {
          this.renderScheduledAt = now2;
          frame.render(this.render, false, true);
        }
      };
      const { latestValues, renderState } = visualState;
      this.latestValues = latestValues;
      this.baseTarget = { ...latestValues };
      this.initialValues = props.initial ? { ...latestValues } : {};
      this.renderState = renderState;
      this.parent = parent;
      this.props = props;
      this.presenceContext = presenceContext;
      this.depth = parent ? parent.depth + 1 : 0;
      this.reducedMotionConfig = reducedMotionConfig;
      this.skipAnimationsConfig = skipAnimations;
      this.options = options;
      this.blockInitialAnimation = Boolean(blockInitialAnimation);
      this.isControllingVariants = isControllingVariants(props);
      this.isVariantNode = isVariantNode(props);
      if (this.isVariantNode) {
        this.variantChildren = /* @__PURE__ */ new Set();
      }
      this.manuallyAnimateOnMount = Boolean(parent && parent.current);
      const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
      for (const key in initialMotionValues) {
        const value = initialMotionValues[key];
        if (latestValues[key] !== void 0 && isMotionValue(value)) {
          value.set(latestValues[key]);
        }
      }
    }
    mount(instance) {
      if (this.hasBeenMounted) {
        for (const key in this.initialValues) {
          this.values.get(key)?.jump(this.initialValues[key]);
          this.latestValues[key] = this.initialValues[key];
        }
      }
      this.current = instance;
      visualElementStore.set(instance, this);
      if (this.projection && !this.projection.instance) {
        this.projection.mount(instance);
      }
      if (this.parent && this.isVariantNode && !this.isControllingVariants) {
        this.removeFromVariantTree = this.parent.addVariantChild(this);
      }
      this.values.forEach((value, key) => this.bindToMotionValue(key, value));
      if (this.reducedMotionConfig === "never") {
        this.shouldReduceMotion = false;
      } else if (this.reducedMotionConfig === "always") {
        this.shouldReduceMotion = true;
      } else {
        if (!hasReducedMotionListener.current) {
          initPrefersReducedMotion();
        }
        this.shouldReduceMotion = prefersReducedMotion.current;
      }
      if (true) {
        warnOnce(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled");
      }
      this.shouldSkipAnimations = this.skipAnimationsConfig ?? false;
      this.parent?.addChild(this);
      this.update(this.props, this.presenceContext);
      this.hasBeenMounted = true;
    }
    unmount() {
      this.projection && this.projection.unmount();
      cancelFrame(this.notifyUpdate);
      cancelFrame(this.render);
      this.valueSubscriptions.forEach((remove) => remove());
      this.valueSubscriptions.clear();
      this.removeFromVariantTree && this.removeFromVariantTree();
      this.parent?.removeChild(this);
      for (const key in this.events) {
        this.events[key].clear();
      }
      for (const key in this.features) {
        const feature = this.features[key];
        if (feature) {
          feature.unmount();
          feature.isMounted = false;
        }
      }
      this.current = null;
    }
    addChild(child) {
      this.children.add(child);
      this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set());
      this.enteringChildren.add(child);
    }
    removeChild(child) {
      this.children.delete(child);
      this.enteringChildren && this.enteringChildren.delete(child);
    }
    bindToMotionValue(key, value) {
      if (this.valueSubscriptions.has(key)) {
        this.valueSubscriptions.get(key)();
      }
      if (value.accelerate && acceleratedValues.has(key) && this.current instanceof HTMLElement) {
        const { factory, keyframes: keyframes2, times, ease: ease2, duration } = value.accelerate;
        const animation = new NativeAnimation({
          element: this.current,
          name: key,
          keyframes: keyframes2,
          times,
          ease: ease2,
          duration: secondsToMilliseconds(duration)
        });
        const cleanup = factory(animation);
        this.valueSubscriptions.set(key, () => {
          cleanup();
          animation.cancel();
        });
        return;
      }
      const valueIsTransform = transformProps.has(key);
      if (valueIsTransform && this.onBindTransform) {
        this.onBindTransform();
      }
      const removeOnChange = value.on("change", (latestValue) => {
        this.latestValues[key] = latestValue;
        this.props.onUpdate && frame.preRender(this.notifyUpdate);
        if (valueIsTransform && this.projection) {
          this.projection.isTransformDirty = true;
        }
        this.scheduleRender();
      });
      let removeSyncCheck;
      if (typeof window !== "undefined" && window.MotionCheckAppearSync) {
        removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
      }
      this.valueSubscriptions.set(key, () => {
        removeOnChange();
        if (removeSyncCheck)
          removeSyncCheck();
        if (value.owner)
          value.stop();
      });
    }
    sortNodePosition(other) {
      if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) {
        return 0;
      }
      return this.sortInstanceNodePosition(this.current, other.current);
    }
    updateFeatures() {
      let key = "animation";
      for (key in featureDefinitions) {
        const featureDefinition = featureDefinitions[key];
        if (!featureDefinition)
          continue;
        const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
        if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) {
          this.features[key] = new FeatureConstructor(this);
        }
        if (this.features[key]) {
          const feature = this.features[key];
          if (feature.isMounted) {
            feature.update();
          } else {
            feature.mount();
            feature.isMounted = true;
          }
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    /**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */
    measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
    }
    getStaticValue(key) {
      return this.latestValues[key];
    }
    setStaticValue(key, value) {
      this.latestValues[key] = value;
    }
    /**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */
    update(props, presenceContext) {
      if (props.transformTemplate || this.props.transformTemplate) {
        this.scheduleRender();
      }
      this.prevProps = this.props;
      this.props = props;
      this.prevPresenceContext = this.presenceContext;
      this.presenceContext = presenceContext;
      for (let i = 0; i < propEventHandlers.length; i++) {
        const key = propEventHandlers[i];
        if (this.propEventSubscriptions[key]) {
          this.propEventSubscriptions[key]();
          delete this.propEventSubscriptions[key];
        }
        const listenerName = "on" + key;
        const listener = props[listenerName];
        if (listener) {
          this.propEventSubscriptions[key] = this.on(key, listener);
        }
      }
      this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props, this.prevProps || {}, this), this.prevMotionValues);
      if (this.handleChildMotionValue) {
        this.handleChildMotionValue();
      }
    }
    getProps() {
      return this.props;
    }
    /**
     * Returns the variant definition with a given name.
     */
    getVariant(name) {
      return this.props.variants ? this.props.variants[name] : void 0;
    }
    /**
     * Returns the defined default transition on this component.
     */
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
    }
    /**
     * Add a child visual element to our set of children.
     */
    addVariantChild(child) {
      const closestVariantNode = this.getClosestVariantNode();
      if (closestVariantNode) {
        closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
        return () => closestVariantNode.variantChildren.delete(child);
      }
    }
    /**
     * Add a motion value and bind it to this visual element.
     */
    addValue(key, value) {
      const existingValue = this.values.get(key);
      if (value !== existingValue) {
        if (existingValue)
          this.removeValue(key);
        this.bindToMotionValue(key, value);
        this.values.set(key, value);
        this.latestValues[key] = value.get();
      }
    }
    /**
     * Remove a motion value and unbind any active subscriptions.
     */
    removeValue(key) {
      this.values.delete(key);
      const unsubscribe = this.valueSubscriptions.get(key);
      if (unsubscribe) {
        unsubscribe();
        this.valueSubscriptions.delete(key);
      }
      delete this.latestValues[key];
      this.removeValueFromRenderState(key, this.renderState);
    }
    /**
     * Check whether we have a motion value for this key
     */
    hasValue(key) {
      return this.values.has(key);
    }
    getValue(key, defaultValue) {
      if (this.props.values && this.props.values[key]) {
        return this.props.values[key];
      }
      let value = this.values.get(key);
      if (value === void 0 && defaultValue !== void 0) {
        value = motionValue(defaultValue === null ? void 0 : defaultValue, { owner: this });
        this.addValue(key, value);
      }
      return value;
    }
    /**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */
    readValue(key, target) {
      let value = this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : this.getBaseTargetFromProps(this.props, key) ?? this.readValueFromInstance(this.current, key, this.options);
      if (value !== void 0 && value !== null) {
        if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
          value = parseFloat(value);
        } else if (!findValueType(value) && complex.test(target)) {
          value = getAnimatableNone2(key, target);
        }
        this.setBaseTarget(key, isMotionValue(value) ? value.get() : value);
      }
      return isMotionValue(value) ? value.get() : value;
    }
    /**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */
    setBaseTarget(key, value) {
      this.baseTarget[key] = value;
    }
    /**
     * Find the base target for a value thats been removed from all animation
     * props.
     */
    getBaseTarget(key) {
      const { initial } = this.props;
      let valueFromInitial;
      if (typeof initial === "string" || typeof initial === "object") {
        const variant = resolveVariantFromProps(this.props, initial, this.presenceContext?.custom);
        if (variant) {
          valueFromInitial = variant[key];
        }
      }
      if (initial && valueFromInitial !== void 0) {
        return valueFromInitial;
      }
      const target = this.getBaseTargetFromProps(this.props, key);
      if (target !== void 0 && !isMotionValue(target))
        return target;
      return this.initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : this.baseTarget[key];
    }
    on(eventName, callback) {
      if (!this.events[eventName]) {
        this.events[eventName] = new SubscriptionManager();
      }
      return this.events[eventName].add(callback);
    }
    notify(eventName, ...args) {
      if (this.events[eventName]) {
        this.events[eventName].notify(...args);
      }
    }
    scheduleRenderMicrotask() {
      microtask.render(this.render);
    }
  };

  // node_modules/motion-dom/dist/es/render/dom/DOMVisualElement.mjs
  var DOMVisualElement = class extends VisualElement {
    constructor() {
      super(...arguments);
      this.KeyframeResolver = DOMKeyframesResolver;
    }
    sortInstanceNodePosition(a, b) {
      return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(props, key) {
      const style = props.style;
      return style ? style[key] : void 0;
    }
    removeValueFromRenderState(key, { vars, style }) {
      delete vars[key];
      delete style[key];
    }
    handleChildMotionValue() {
      if (this.childSubscription) {
        this.childSubscription();
        delete this.childSubscription;
      }
      const { children } = this.props;
      if (isMotionValue(children)) {
        this.childSubscription = children.on("change", (latest) => {
          if (this.current) {
            this.current.textContent = `${latest}`;
          }
        });
      }
    }
  };

  // node_modules/motion-dom/dist/es/render/Feature.mjs
  var Feature = class {
    constructor(node) {
      this.isMounted = false;
      this.node = node;
    }
    update() {
    }
  };

  // node_modules/motion-dom/dist/es/projection/geometry/conversion.mjs
  function convertBoundingBoxToBox({ top, left, right, bottom }) {
    return {
      x: { min: left, max: right },
      y: { min: top, max: bottom }
    };
  }
  function convertBoxToBoundingBox({ x, y }) {
    return { top: y.min, right: x.max, bottom: y.max, left: x.min };
  }
  function transformBoxPoints(point2, transformPoint2) {
    if (!transformPoint2)
      return point2;
    const topLeft = transformPoint2({ x: point2.left, y: point2.top });
    const bottomRight = transformPoint2({ x: point2.right, y: point2.bottom });
    return {
      top: topLeft.y,
      left: topLeft.x,
      bottom: bottomRight.y,
      right: bottomRight.x
    };
  }

  // node_modules/motion-dom/dist/es/projection/utils/has-transform.mjs
  function isIdentityScale(scale2) {
    return scale2 === void 0 || scale2 === 1;
  }
  function hasScale({ scale: scale2, scaleX: scaleX2, scaleY: scaleY2 }) {
    return !isIdentityScale(scale2) || !isIdentityScale(scaleX2) || !isIdentityScale(scaleY2);
  }
  function hasTransform(values) {
    return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY || values.skewX || values.skewY;
  }
  function has2DTranslate(values) {
    return is2DTranslate(values.x) || is2DTranslate(values.y);
  }
  function is2DTranslate(value) {
    return value && value !== "0%";
  }

  // node_modules/motion-dom/dist/es/projection/geometry/delta-apply.mjs
  function scalePoint(point2, scale2, originPoint) {
    const distanceFromOrigin = point2 - originPoint;
    const scaled = scale2 * distanceFromOrigin;
    return originPoint + scaled;
  }
  function applyPointDelta(point2, translate, scale2, originPoint, boxScale) {
    if (boxScale !== void 0) {
      point2 = scalePoint(point2, boxScale, originPoint);
    }
    return scalePoint(point2, scale2, originPoint) + translate;
  }
  function applyAxisDelta(axis, translate = 0, scale2 = 1, originPoint, boxScale) {
    axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
  }
  function applyBoxDelta(box, { x, y }) {
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
  }
  var TREE_SCALE_SNAP_MIN = 0.999999999999;
  var TREE_SCALE_SNAP_MAX = 1.0000000000001;
  function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
    const treeLength = treePath.length;
    if (!treeLength)
      return;
    treeScale.x = treeScale.y = 1;
    let node;
    let delta;
    for (let i = 0; i < treeLength; i++) {
      node = treePath[i];
      delta = node.projectionDelta;
      const { visualElement } = node.options;
      if (visualElement && visualElement.props.style && visualElement.props.style.display === "contents") {
        continue;
      }
      if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
        translateAxis(box.x, -node.scroll.offset.x);
        translateAxis(box.y, -node.scroll.offset.y);
      }
      if (delta) {
        treeScale.x *= delta.x.scale;
        treeScale.y *= delta.y.scale;
        applyBoxDelta(box, delta);
      }
      if (isSharedTransition && hasTransform(node.latestValues)) {
        transformBox(box, node.latestValues, node.layout?.layoutBox);
      }
    }
    if (treeScale.x < TREE_SCALE_SNAP_MAX && treeScale.x > TREE_SCALE_SNAP_MIN) {
      treeScale.x = 1;
    }
    if (treeScale.y < TREE_SCALE_SNAP_MAX && treeScale.y > TREE_SCALE_SNAP_MIN) {
      treeScale.y = 1;
    }
  }
  function translateAxis(axis, distance2) {
    axis.min += distance2;
    axis.max += distance2;
  }
  function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = 0.5) {
    const originPoint = mixNumber(axis.min, axis.max, axisOrigin);
    applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
  }
  function resolveAxisTranslate(value, axis) {
    if (typeof value === "string") {
      return parseFloat(value) / 100 * (axis.max - axis.min);
    }
    return value;
  }
  function transformBox(box, transform2, sourceBox) {
    const resolveBox = sourceBox ?? box;
    transformAxis(box.x, resolveAxisTranslate(transform2.x, resolveBox.x), transform2.scaleX, transform2.scale, transform2.originX);
    transformAxis(box.y, resolveAxisTranslate(transform2.y, resolveBox.y), transform2.scaleY, transform2.scale, transform2.originY);
  }

  // node_modules/motion-dom/dist/es/projection/utils/measure.mjs
  function measureViewportBox(instance, transformPoint2) {
    return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
  }
  function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
    const viewportBox = measureViewportBox(element, transformPagePoint);
    const { scroll: scroll2 } = rootProjectionNode2;
    if (scroll2) {
      translateAxis(viewportBox.x, scroll2.offset.x);
      translateAxis(viewportBox.y, scroll2.offset.y);
    }
    return viewportBox;
  }

  // node_modules/motion-dom/dist/es/render/html/utils/build-transform.mjs
  var translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
  };
  var numTransforms = transformPropOrder.length;
  function buildTransform(latestValues, transform2, transformTemplate) {
    let transformString = "";
    let transformIsDefault = true;
    for (let i = 0; i < numTransforms; i++) {
      const key = transformPropOrder[i];
      const value = latestValues[key];
      if (value === void 0)
        continue;
      let valueIsDefault = true;
      if (typeof value === "number") {
        valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
      } else {
        const parsed = parseFloat(value);
        valueIsDefault = key.startsWith("scale") ? parsed === 1 : parsed === 0;
      }
      if (!valueIsDefault || transformTemplate) {
        const valueAsType = getValueAsType(value, numberValueTypes[key]);
        if (!valueIsDefault) {
          transformIsDefault = false;
          const transformName = translateAlias[key] || key;
          transformString += `${transformName}(${valueAsType}) `;
        }
        if (transformTemplate) {
          transform2[key] = valueAsType;
        }
      }
    }
    transformString = transformString.trim();
    if (transformTemplate) {
      transformString = transformTemplate(transform2, transformIsDefault ? "" : transformString);
    } else if (transformIsDefault) {
      transformString = "none";
    }
    return transformString;
  }

  // node_modules/motion-dom/dist/es/render/html/utils/build-styles.mjs
  function buildHTMLStyles(state, latestValues, transformTemplate) {
    const { style, vars, transformOrigin } = state;
    let hasTransform2 = false;
    let hasTransformOrigin = false;
    for (const key in latestValues) {
      const value = latestValues[key];
      if (transformProps.has(key)) {
        hasTransform2 = true;
        continue;
      } else if (isCSSVariableName(key)) {
        vars[key] = value;
        continue;
      } else {
        const valueAsType = getValueAsType(value, numberValueTypes[key]);
        if (key.startsWith("origin")) {
          hasTransformOrigin = true;
          transformOrigin[key] = valueAsType;
        } else {
          style[key] = valueAsType;
        }
      }
    }
    if (!latestValues.transform) {
      if (hasTransform2 || transformTemplate) {
        style.transform = buildTransform(latestValues, state.transform, transformTemplate);
      } else if (style.transform) {
        style.transform = "none";
      }
    }
    if (hasTransformOrigin) {
      const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
      style.transformOrigin = `${originX} ${originY} ${originZ}`;
    }
  }

  // node_modules/motion-dom/dist/es/render/html/utils/render.mjs
  function renderHTML(element, { style, vars }, styleProp, projection) {
    const elementStyle = element.style;
    let key;
    for (key in style) {
      elementStyle[key] = style[key];
    }
    projection?.applyProjectionStyles(elementStyle, styleProp);
    for (key in vars) {
      elementStyle.setProperty(key, vars[key]);
    }
  }

  // node_modules/motion-dom/dist/es/projection/styles/scale-border-radius.mjs
  function pixelsToPercent(pixels, axis) {
    if (axis.max === axis.min)
      return 0;
    return pixels / (axis.max - axis.min) * 100;
  }
  var correctBorderRadius = {
    correct: (latest, node) => {
      if (!node.target)
        return latest;
      if (typeof latest === "string") {
        if (px.test(latest)) {
          latest = parseFloat(latest);
        } else {
          return latest;
        }
      }
      const x = pixelsToPercent(latest, node.target.x);
      const y = pixelsToPercent(latest, node.target.y);
      return `${x}% ${y}%`;
    }
  };

  // node_modules/motion-dom/dist/es/projection/styles/scale-box-shadow.mjs
  var correctBoxShadow = {
    correct: (latest, { treeScale, projectionDelta }) => {
      const original = latest;
      const shadow = complex.parse(latest);
      if (shadow.length > 5)
        return original;
      const template = complex.createTransformer(latest);
      const offset = typeof shadow[0] !== "number" ? 1 : 0;
      const xScale = projectionDelta.x.scale * treeScale.x;
      const yScale = projectionDelta.y.scale * treeScale.y;
      shadow[0 + offset] /= xScale;
      shadow[1 + offset] /= yScale;
      const averageScale = mixNumber(xScale, yScale, 0.5);
      if (typeof shadow[2 + offset] === "number")
        shadow[2 + offset] /= averageScale;
      if (typeof shadow[3 + offset] === "number")
        shadow[3 + offset] /= averageScale;
      return template(shadow);
    }
  };

  // node_modules/motion-dom/dist/es/projection/styles/scale-correction.mjs
  var scaleCorrectors = {
    borderRadius: {
      ...correctBorderRadius,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius"
      ]
    },
    borderTopLeftRadius: correctBorderRadius,
    borderTopRightRadius: correctBorderRadius,
    borderBottomLeftRadius: correctBorderRadius,
    borderBottomRightRadius: correctBorderRadius,
    boxShadow: correctBoxShadow
  };

  // node_modules/motion-dom/dist/es/render/utils/is-forced-motion-value.mjs
  function isForcedMotionValue(key, { layout: layout2, layoutId }) {
    return transformProps.has(key) || key.startsWith("origin") || (layout2 || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
  }

  // node_modules/motion-dom/dist/es/render/html/utils/scrape-motion-values.mjs
  function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    const style = props.style;
    const prevStyle = prevProps?.style;
    const newValues = {};
    if (!style)
      return newValues;
    for (const key in style) {
      if (isMotionValue(style[key]) || prevStyle && isMotionValue(prevStyle[key]) || isForcedMotionValue(key, props) || visualElement?.getValue(key)?.liveStyle !== void 0) {
        newValues[key] = style[key];
      }
    }
    return newValues;
  }

  // node_modules/motion-dom/dist/es/render/html/HTMLVisualElement.mjs
  function getComputedStyle2(element) {
    return window.getComputedStyle(element);
  }
  var HTMLVisualElement = class extends DOMVisualElement {
    constructor() {
      super(...arguments);
      this.type = "html";
      this.renderInstance = renderHTML;
    }
    readValueFromInstance(instance, key) {
      if (transformProps.has(key)) {
        return this.projection?.isProjecting ? defaultTransformValue(key) : readTransformValue(instance, key);
      } else {
        const computedStyle = getComputedStyle2(instance);
        const value = (isCSSVariableName(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
        return typeof value === "string" ? value.trim() : value;
      }
    }
    measureInstanceViewportBox(instance, { transformPagePoint }) {
      return measureViewportBox(instance, transformPagePoint);
    }
    build(renderState, latestValues, props) {
      buildHTMLStyles(renderState, latestValues, props.transformTemplate);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
      return scrapeMotionValuesFromProps(props, prevProps, visualElement);
    }
  };

  // node_modules/motion-dom/dist/es/render/svg/utils/path.mjs
  var dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
  };
  var camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
  function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
    attrs.pathLength = 1;
    const keys2 = useDashCase ? dashKeys : camelKeys;
    attrs[keys2.offset] = `${-offset}`;
    attrs[keys2.array] = `${length} ${spacing}`;
  }

  // node_modules/motion-dom/dist/es/render/svg/utils/build-attrs.mjs
  var cssMotionPathProperties = [
    "offsetDistance",
    "offsetPath",
    "offsetRotate",
    "offsetAnchor"
  ];
  function buildSVGAttrs(state, {
    attrX,
    attrY,
    attrScale,
    pathLength,
    pathSpacing = 1,
    pathOffset = 0,
    // This is object creation, which we try to avoid per-frame.
    ...latest
  }, isSVGTag2, transformTemplate, styleProp) {
    buildHTMLStyles(state, latest, transformTemplate);
    if (isSVGTag2) {
      if (state.style.viewBox) {
        state.attrs.viewBox = state.style.viewBox;
      }
      return;
    }
    state.attrs = state.style;
    state.style = {};
    const { attrs, style } = state;
    if (attrs.transform) {
      style.transform = attrs.transform;
      delete attrs.transform;
    }
    if (style.transform || attrs.transformOrigin) {
      style.transformOrigin = attrs.transformOrigin ?? "50% 50%";
      delete attrs.transformOrigin;
    }
    if (style.transform) {
      style.transformBox = styleProp?.transformBox ?? "fill-box";
      delete attrs.transformBox;
    }
    for (const key of cssMotionPathProperties) {
      if (attrs[key] !== void 0) {
        style[key] = attrs[key];
        delete attrs[key];
      }
    }
    if (attrX !== void 0)
      attrs.x = attrX;
    if (attrY !== void 0)
      attrs.y = attrY;
    if (attrScale !== void 0)
      attrs.scale = attrScale;
    if (pathLength !== void 0) {
      buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
    }
  }

  // node_modules/motion-dom/dist/es/render/svg/utils/camel-case-attrs.mjs
  var camelCaseAttributes = /* @__PURE__ */ new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust"
  ]);

  // node_modules/motion-dom/dist/es/render/svg/utils/is-svg-tag.mjs
  var isSVGTag = (tag) => typeof tag === "string" && tag.toLowerCase() === "svg";

  // node_modules/motion-dom/dist/es/render/svg/utils/render.mjs
  function renderSVG(element, renderState, _styleProp, projection) {
    renderHTML(element, renderState, void 0, projection);
    for (const key in renderState.attrs) {
      element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
    }
  }

  // node_modules/motion-dom/dist/es/render/svg/utils/scrape-motion-values.mjs
  function scrapeMotionValuesFromProps2(props, prevProps, visualElement) {
    const newValues = scrapeMotionValuesFromProps(props, prevProps, visualElement);
    for (const key in props) {
      if (isMotionValue(props[key]) || isMotionValue(prevProps[key])) {
        const targetKey = transformPropOrder.indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
        newValues[targetKey] = props[key];
      }
    }
    return newValues;
  }

  // node_modules/motion-dom/dist/es/render/svg/SVGVisualElement.mjs
  var SVGVisualElement = class extends DOMVisualElement {
    constructor() {
      super(...arguments);
      this.type = "svg";
      this.isSVGTag = false;
      this.measureInstanceViewportBox = createBox;
    }
    getBaseTargetFromProps(props, key) {
      return props[key];
    }
    readValueFromInstance(instance, key) {
      if (transformProps.has(key)) {
        const defaultType = getDefaultValueType(key);
        return defaultType ? defaultType.default || 0 : 0;
      }
      key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
      return instance.getAttribute(key);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
      return scrapeMotionValuesFromProps2(props, prevProps, visualElement);
    }
    build(renderState, latestValues, props) {
      buildSVGAttrs(renderState, latestValues, this.isSVGTag, props.transformTemplate, props.style);
    }
    renderInstance(instance, renderState, styleProp, projection) {
      renderSVG(instance, renderState, styleProp, projection);
    }
    mount(instance) {
      this.isSVGTag = isSVGTag(instance.tagName);
      super.mount(instance);
    }
  };

  // node_modules/motion-dom/dist/es/render/utils/get-variant-context.mjs
  var numVariantProps = variantProps.length;
  function getVariantContext(visualElement) {
    if (!visualElement)
      return void 0;
    if (!visualElement.isControllingVariants) {
      const context2 = visualElement.parent ? getVariantContext(visualElement.parent) || {} : {};
      if (visualElement.props.initial !== void 0) {
        context2.initial = visualElement.props.initial;
      }
      return context2;
    }
    const context = {};
    for (let i = 0; i < numVariantProps; i++) {
      const name = variantProps[i];
      const prop = visualElement.props[name];
      if (isVariantLabel(prop) || prop === false) {
        context[name] = prop;
      }
    }
    return context;
  }

  // node_modules/motion-dom/dist/es/render/utils/shallow-compare.mjs
  function shallowCompare(next, prev) {
    if (!Array.isArray(prev))
      return false;
    const prevLength = prev.length;
    if (prevLength !== next.length)
      return false;
    for (let i = 0; i < prevLength; i++) {
      if (prev[i] !== next[i])
        return false;
    }
    return true;
  }

  // node_modules/motion-dom/dist/es/render/utils/animation-state.mjs
  var reversePriorityOrder = [...variantPriorityOrder].reverse();
  var numAnimationTypes = variantPriorityOrder.length;
  function createAnimateFunction(visualElement) {
    return (animations2) => {
      return Promise.all(animations2.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
    };
  }
  function createAnimationState(visualElement) {
    let animate = createAnimateFunction(visualElement);
    let state = createState();
    let isInitialRender = true;
    let wasReset = false;
    const buildResolvedTypeValues = (type) => (acc, definition) => {
      const resolved = resolveVariant(visualElement, definition, type === "exit" ? visualElement.presenceContext?.custom : void 0);
      if (resolved) {
        const { transition, transitionEnd, ...target } = resolved;
        acc = { ...acc, ...target, ...transitionEnd };
      }
      return acc;
    };
    function setAnimateFunction(makeAnimator) {
      animate = makeAnimator(visualElement);
    }
    function animateChanges(changedActiveType) {
      const { props } = visualElement;
      const context = getVariantContext(visualElement.parent) || {};
      const animations2 = [];
      const removedKeys = /* @__PURE__ */ new Set();
      let encounteredKeys = {};
      let removedVariantIndex = Infinity;
      for (let i = 0; i < numAnimationTypes; i++) {
        const type = reversePriorityOrder[i];
        const typeState = state[type];
        const prop = props[type] !== void 0 ? props[type] : context[type];
        const propIsVariant = isVariantLabel(prop);
        const activeDelta = type === changedActiveType ? typeState.isActive : null;
        if (activeDelta === false)
          removedVariantIndex = i;
        let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
        if (isInherited && (isInitialRender || wasReset) && visualElement.manuallyAnimateOnMount) {
          isInherited = false;
        }
        typeState.protectedKeys = { ...encounteredKeys };
        if (
          // If it isn't active and hasn't *just* been set as inactive
          !typeState.isActive && activeDelta === null || // If we didn't and don't have any defined prop for this animation type
          !prop && !typeState.prevProp || // Or if the prop doesn't define an animation
          isAnimationControls(prop) || typeof prop === "boolean"
        ) {
          continue;
        }
        if (type === "exit" && typeState.isActive && activeDelta !== true) {
          if (typeState.prevResolvedValues) {
            encounteredKeys = {
              ...encounteredKeys,
              ...typeState.prevResolvedValues
            };
          }
          continue;
        }
        const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
        let shouldAnimateType = variantDidChange || // If we're making this variant active, we want to always make it active
        type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || // If we removed a higher-priority variant (i is in reverse order)
        i > removedVariantIndex && propIsVariant;
        let handledRemovedValues = false;
        const definitionList = Array.isArray(prop) ? prop : [prop];
        let resolvedValues = definitionList.reduce(buildResolvedTypeValues(type), {});
        if (activeDelta === false)
          resolvedValues = {};
        const { prevResolvedValues = {} } = typeState;
        const allKeys = {
          ...prevResolvedValues,
          ...resolvedValues
        };
        const markToAnimate = (key) => {
          shouldAnimateType = true;
          if (removedKeys.has(key)) {
            handledRemovedValues = true;
            removedKeys.delete(key);
          }
          typeState.needsAnimating[key] = true;
          const motionValue2 = visualElement.getValue(key);
          if (motionValue2)
            motionValue2.liveStyle = false;
        };
        for (const key in allKeys) {
          const next = resolvedValues[key];
          const prev = prevResolvedValues[key];
          if (encounteredKeys.hasOwnProperty(key))
            continue;
          let valueHasChanged = false;
          if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
            valueHasChanged = !shallowCompare(next, prev);
          } else {
            valueHasChanged = next !== prev;
          }
          if (valueHasChanged) {
            if (next !== void 0 && next !== null) {
              markToAnimate(key);
            } else {
              removedKeys.add(key);
            }
          } else if (next !== void 0 && removedKeys.has(key)) {
            markToAnimate(key);
          } else {
            typeState.protectedKeys[key] = true;
          }
        }
        typeState.prevProp = prop;
        typeState.prevResolvedValues = resolvedValues;
        if (typeState.isActive) {
          encounteredKeys = { ...encounteredKeys, ...resolvedValues };
        }
        if ((isInitialRender || wasReset) && visualElement.blockInitialAnimation) {
          shouldAnimateType = false;
        }
        const willAnimateViaParent = isInherited && variantDidChange;
        const needsAnimating = !willAnimateViaParent || handledRemovedValues;
        if (shouldAnimateType && needsAnimating) {
          animations2.push(...definitionList.map((animation) => {
            const options = { type };
            if (typeof animation === "string" && (isInitialRender || wasReset) && !willAnimateViaParent && visualElement.manuallyAnimateOnMount && visualElement.parent) {
              const { parent } = visualElement;
              const parentVariant = resolveVariant(parent, animation);
              if (parent.enteringChildren && parentVariant) {
                const { delayChildren } = parentVariant.transition || {};
                options.delay = calcChildStagger(parent.enteringChildren, visualElement, delayChildren);
              }
            }
            return {
              animation,
              options
            };
          }));
        }
      }
      if (removedKeys.size) {
        const fallbackAnimation = {};
        if (typeof props.initial !== "boolean") {
          const initialTransition = resolveVariant(visualElement, Array.isArray(props.initial) ? props.initial[0] : props.initial);
          if (initialTransition && initialTransition.transition) {
            fallbackAnimation.transition = initialTransition.transition;
          }
        }
        removedKeys.forEach((key) => {
          const fallbackTarget = visualElement.getBaseTarget(key);
          const motionValue2 = visualElement.getValue(key);
          if (motionValue2)
            motionValue2.liveStyle = true;
          fallbackAnimation[key] = fallbackTarget ?? null;
        });
        animations2.push({ animation: fallbackAnimation });
      }
      let shouldAnimate = Boolean(animations2.length);
      if (isInitialRender && (props.initial === false || props.initial === props.animate) && !visualElement.manuallyAnimateOnMount) {
        shouldAnimate = false;
      }
      isInitialRender = false;
      wasReset = false;
      return shouldAnimate ? animate(animations2) : Promise.resolve();
    }
    function setActive(type, isActive) {
      if (state[type].isActive === isActive)
        return Promise.resolve();
      visualElement.variantChildren?.forEach((child) => child.animationState?.setActive(type, isActive));
      state[type].isActive = isActive;
      const animations2 = animateChanges(type);
      for (const key in state) {
        state[key].protectedKeys = {};
      }
      return animations2;
    }
    return {
      animateChanges,
      setActive,
      setAnimateFunction,
      getState: () => state,
      reset: () => {
        state = createState();
        wasReset = true;
      }
    };
  }
  function checkVariantsDidChange(prev, next) {
    if (typeof next === "string") {
      return next !== prev;
    } else if (Array.isArray(next)) {
      return !shallowCompare(next, prev);
    }
    return false;
  }
  function createTypeState(isActive = false) {
    return {
      isActive,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  }
  function createState() {
    return {
      animate: createTypeState(true),
      whileInView: createTypeState(),
      whileHover: createTypeState(),
      whileTap: createTypeState(),
      whileDrag: createTypeState(),
      whileFocus: createTypeState(),
      exit: createTypeState()
    };
  }

  // node_modules/motion-dom/dist/es/projection/geometry/copy.mjs
  function copyAxisInto(axis, originAxis) {
    axis.min = originAxis.min;
    axis.max = originAxis.max;
  }
  function copyBoxInto(box, originBox) {
    copyAxisInto(box.x, originBox.x);
    copyAxisInto(box.y, originBox.y);
  }
  function copyAxisDeltaInto(delta, originDelta) {
    delta.translate = originDelta.translate;
    delta.scale = originDelta.scale;
    delta.originPoint = originDelta.originPoint;
    delta.origin = originDelta.origin;
  }

  // node_modules/motion-dom/dist/es/projection/geometry/delta-calc.mjs
  var SCALE_PRECISION = 1e-4;
  var SCALE_MIN = 1 - SCALE_PRECISION;
  var SCALE_MAX = 1 + SCALE_PRECISION;
  var TRANSLATE_PRECISION = 0.01;
  var TRANSLATE_MIN = 0 - TRANSLATE_PRECISION;
  var TRANSLATE_MAX = 0 + TRANSLATE_PRECISION;
  function calcLength(axis) {
    return axis.max - axis.min;
  }
  function isNear(value, target, maxDistance) {
    return Math.abs(value - target) <= maxDistance;
  }
  function calcAxisDelta(delta, source, target, origin = 0.5) {
    delta.origin = origin;
    delta.originPoint = mixNumber(source.min, source.max, delta.origin);
    delta.scale = calcLength(target) / calcLength(source);
    delta.translate = mixNumber(target.min, target.max, delta.origin) - delta.originPoint;
    if (delta.scale >= SCALE_MIN && delta.scale <= SCALE_MAX || isNaN(delta.scale)) {
      delta.scale = 1;
    }
    if (delta.translate >= TRANSLATE_MIN && delta.translate <= TRANSLATE_MAX || isNaN(delta.translate)) {
      delta.translate = 0;
    }
  }
  function calcBoxDelta(delta, source, target, origin) {
    calcAxisDelta(delta.x, source.x, target.x, origin ? origin.originX : void 0);
    calcAxisDelta(delta.y, source.y, target.y, origin ? origin.originY : void 0);
  }
  function calcRelativeAxis(target, relative, parent, anchor = 0) {
    const anchorPoint = anchor ? mixNumber(parent.min, parent.max, anchor) : parent.min;
    target.min = anchorPoint + relative.min;
    target.max = target.min + calcLength(relative);
  }
  function calcRelativeBox(target, relative, parent, anchor) {
    calcRelativeAxis(target.x, relative.x, parent.x, anchor?.x);
    calcRelativeAxis(target.y, relative.y, parent.y, anchor?.y);
  }
  function calcRelativeAxisPosition(target, layout2, parent, anchor = 0) {
    const anchorPoint = anchor ? mixNumber(parent.min, parent.max, anchor) : parent.min;
    target.min = layout2.min - anchorPoint;
    target.max = target.min + calcLength(layout2);
  }
  function calcRelativePosition(target, layout2, parent, anchor) {
    calcRelativeAxisPosition(target.x, layout2.x, parent.x, anchor?.x);
    calcRelativeAxisPosition(target.y, layout2.y, parent.y, anchor?.y);
  }

  // node_modules/motion-dom/dist/es/projection/geometry/delta-remove.mjs
  function removePointDelta(point2, translate, scale2, originPoint, boxScale) {
    point2 -= translate;
    point2 = scalePoint(point2, 1 / scale2, originPoint);
    if (boxScale !== void 0) {
      point2 = scalePoint(point2, 1 / boxScale, originPoint);
    }
    return point2;
  }
  function removeAxisDelta(axis, translate = 0, scale2 = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
    if (percent.test(translate)) {
      translate = parseFloat(translate);
      const relativeProgress = mixNumber(sourceAxis.min, sourceAxis.max, translate / 100);
      translate = relativeProgress - sourceAxis.min;
    }
    if (typeof translate !== "number")
      return;
    let originPoint = mixNumber(originAxis.min, originAxis.max, origin);
    if (axis === originAxis)
      originPoint -= translate;
    axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
    axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
  }
  function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
    removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
  }
  var xKeys = ["x", "scaleX", "originX"];
  var yKeys = ["y", "scaleY", "originY"];
  function removeBoxTransforms(box, transforms, originBox, sourceBox) {
    removeAxisTransforms(box.x, transforms, xKeys, originBox ? originBox.x : void 0, sourceBox ? sourceBox.x : void 0);
    removeAxisTransforms(box.y, transforms, yKeys, originBox ? originBox.y : void 0, sourceBox ? sourceBox.y : void 0);
  }

  // node_modules/motion-dom/dist/es/projection/geometry/utils.mjs
  function isAxisDeltaZero(delta) {
    return delta.translate === 0 && delta.scale === 1;
  }
  function isDeltaZero(delta) {
    return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
  }
  function axisEquals(a, b) {
    return a.min === b.min && a.max === b.max;
  }
  function boxEquals(a, b) {
    return axisEquals(a.x, b.x) && axisEquals(a.y, b.y);
  }
  function axisEqualsRounded(a, b) {
    return Math.round(a.min) === Math.round(b.min) && Math.round(a.max) === Math.round(b.max);
  }
  function boxEqualsRounded(a, b) {
    return axisEqualsRounded(a.x, b.x) && axisEqualsRounded(a.y, b.y);
  }
  function aspectRatio(box) {
    return calcLength(box.x) / calcLength(box.y);
  }
  function axisDeltaEquals(a, b) {
    return a.translate === b.translate && a.scale === b.scale && a.originPoint === b.originPoint;
  }

  // node_modules/motion-dom/dist/es/projection/utils/each-axis.mjs
  function eachAxis(callback) {
    return [callback("x"), callback("y")];
  }

  // node_modules/motion-dom/dist/es/projection/styles/transform.mjs
  function buildProjectionTransform(delta, treeScale, latestTransform) {
    let transform2 = "";
    const xTranslate = delta.x.translate / treeScale.x;
    const yTranslate = delta.y.translate / treeScale.y;
    const zTranslate = latestTransform?.z || 0;
    if (xTranslate || yTranslate || zTranslate) {
      transform2 = `translate3d(${xTranslate}px, ${yTranslate}px, ${zTranslate}px) `;
    }
    if (treeScale.x !== 1 || treeScale.y !== 1) {
      transform2 += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
    }
    if (latestTransform) {
      const { transformPerspective, rotate: rotate2, rotateX, rotateY, skewX, skewY } = latestTransform;
      if (transformPerspective)
        transform2 = `perspective(${transformPerspective}px) ${transform2}`;
      if (rotate2)
        transform2 += `rotate(${rotate2}deg) `;
      if (rotateX)
        transform2 += `rotateX(${rotateX}deg) `;
      if (rotateY)
        transform2 += `rotateY(${rotateY}deg) `;
      if (skewX)
        transform2 += `skewX(${skewX}deg) `;
      if (skewY)
        transform2 += `skewY(${skewY}deg) `;
    }
    const elementScaleX = delta.x.scale * treeScale.x;
    const elementScaleY = delta.y.scale * treeScale.y;
    if (elementScaleX !== 1 || elementScaleY !== 1) {
      transform2 += `scale(${elementScaleX}, ${elementScaleY})`;
    }
    return transform2 || "none";
  }

  // node_modules/motion-dom/dist/es/projection/animation/mix-values.mjs
  var borderLabels = [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ];
  var numBorders = borderLabels.length;
  var asNumber2 = (value) => typeof value === "string" ? parseFloat(value) : value;
  var isPx = (value) => typeof value === "number" || px.test(value);
  function mixValues(target, follow, lead, progress2, shouldCrossfadeOpacity, isOnlyMember) {
    if (shouldCrossfadeOpacity) {
      target.opacity = mixNumber(0, lead.opacity ?? 1, easeCrossfadeIn(progress2));
      target.opacityExit = mixNumber(follow.opacity ?? 1, 0, easeCrossfadeOut(progress2));
    } else if (isOnlyMember) {
      target.opacity = mixNumber(follow.opacity ?? 1, lead.opacity ?? 1, progress2);
    }
    for (let i = 0; i < numBorders; i++) {
      const borderLabel = borderLabels[i];
      let followRadius = getRadius(follow, borderLabel);
      let leadRadius = getRadius(lead, borderLabel);
      if (followRadius === void 0 && leadRadius === void 0)
        continue;
      followRadius || (followRadius = 0);
      leadRadius || (leadRadius = 0);
      const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
      if (canMix) {
        target[borderLabel] = Math.max(mixNumber(asNumber2(followRadius), asNumber2(leadRadius), progress2), 0);
        if (percent.test(leadRadius) || percent.test(followRadius)) {
          target[borderLabel] += "%";
        }
      } else {
        target[borderLabel] = leadRadius;
      }
    }
    if (follow.rotate || lead.rotate) {
      target.rotate = mixNumber(follow.rotate || 0, lead.rotate || 0, progress2);
    }
  }
  function getRadius(values, radiusName) {
    return values[radiusName] !== void 0 ? values[radiusName] : values.borderRadius;
  }
  var easeCrossfadeIn = /* @__PURE__ */ compress(0, 0.5, circOut);
  var easeCrossfadeOut = /* @__PURE__ */ compress(0.5, 0.95, noop);
  function compress(min, max, easing) {
    return (p) => {
      if (p < min)
        return 0;
      if (p > max)
        return 1;
      return easing(progress(min, max, p));
    };
  }

  // node_modules/motion-dom/dist/es/animation/animate/single-value.mjs
  function animateSingleValue(value, keyframes2, options) {
    const motionValue$1 = isMotionValue(value) ? value : motionValue(value);
    motionValue$1.start(animateMotionValue("", motionValue$1, keyframes2, options));
    return motionValue$1.animation;
  }

  // node_modules/motion-dom/dist/es/events/add-dom-event.mjs
  function addDomEvent(target, eventName, handler, options = { passive: true }) {
    target.addEventListener(eventName, handler, options);
    return () => target.removeEventListener(eventName, handler);
  }

  // node_modules/motion-dom/dist/es/projection/utils/compare-by-depth.mjs
  var compareByDepth = (a, b) => a.depth - b.depth;

  // node_modules/motion-dom/dist/es/projection/utils/flat-tree.mjs
  var FlatTree = class {
    constructor() {
      this.children = [];
      this.isDirty = false;
    }
    add(child) {
      addUniqueItem(this.children, child);
      this.isDirty = true;
    }
    remove(child) {
      removeItem(this.children, child);
      this.isDirty = true;
    }
    forEach(callback) {
      this.isDirty && this.children.sort(compareByDepth);
      this.isDirty = false;
      this.children.forEach(callback);
    }
  };

  // node_modules/motion-dom/dist/es/utils/delay.mjs
  function delay(callback, timeout) {
    const start = time.now();
    const checkElapsed = ({ timestamp }) => {
      const elapsed = timestamp - start;
      if (elapsed >= timeout) {
        cancelFrame(checkElapsed);
        callback(elapsed - timeout);
      }
    };
    frame.setup(checkElapsed, true);
    return () => cancelFrame(checkElapsed);
  }

  // node_modules/motion-dom/dist/es/value/utils/resolve-motion-value.mjs
  function resolveMotionValue(value) {
    return isMotionValue(value) ? value.get() : value;
  }

  // node_modules/motion-dom/dist/es/projection/shared/stack.mjs
  var NodeStack = class {
    constructor() {
      this.members = [];
    }
    add(node) {
      addUniqueItem(this.members, node);
      for (let i = this.members.length - 1; i >= 0; i--) {
        const member = this.members[i];
        if (member === node || member === this.lead || member === this.prevLead)
          continue;
        const inst = member.instance;
        if ((!inst || inst.isConnected === false) && !member.snapshot) {
          removeItem(this.members, member);
          member.unmount();
        }
      }
      node.scheduleRender();
    }
    remove(node) {
      removeItem(this.members, node);
      if (node === this.prevLead)
        this.prevLead = void 0;
      if (node === this.lead) {
        const prevLead = this.members[this.members.length - 1];
        if (prevLead)
          this.promote(prevLead);
      }
    }
    relegate(node) {
      for (let i = this.members.indexOf(node) - 1; i >= 0; i--) {
        const member = this.members[i];
        if (member.isPresent !== false && member.instance?.isConnected !== false) {
          this.promote(member);
          return true;
        }
      }
      return false;
    }
    promote(node, preserveFollowOpacity) {
      const prevLead = this.lead;
      if (node === prevLead)
        return;
      this.prevLead = prevLead;
      this.lead = node;
      node.show();
      if (prevLead) {
        prevLead.updateSnapshot();
        node.scheduleRender();
        const { layoutDependency: prevDep } = prevLead.options;
        const { layoutDependency: nextDep } = node.options;
        if (prevDep === void 0 || prevDep !== nextDep) {
          node.resumeFrom = prevLead;
          if (preserveFollowOpacity)
            prevLead.preserveOpacity = true;
          if (prevLead.snapshot) {
            node.snapshot = prevLead.snapshot;
            node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
          }
          if (node.root?.isUpdating)
            node.isLayoutDirty = true;
        }
        if (node.options.crossfade === false)
          prevLead.hide();
      }
    }
    exitAnimationComplete() {
      this.members.forEach((member) => {
        member.options.onExitComplete?.();
        member.resumingFrom?.options.onExitComplete?.();
      });
    }
    scheduleRender() {
      this.members.forEach((member) => member.instance && member.scheduleRender(false));
    }
    removeLeadSnapshot() {
      if (this.lead?.snapshot)
        this.lead.snapshot = void 0;
    }
  };

  // node_modules/motion-dom/dist/es/projection/node/state.mjs
  var globalProjectionState = {
    /**
     * Global flag as to whether the tree has animated since the last time
     * we resized the window
     */
    hasAnimatedSinceResize: true,
    /**
     * We set this to true once, on the first update. Any nodes added to the tree beyond that
     * update will be given a `data-projection-id` attribute.
     */
    hasEverUpdated: false
  };

  // node_modules/motion-dom/dist/es/projection/node/create-projection-node.mjs
  var metrics = {
    nodes: 0,
    calculatedTargetDeltas: 0,
    calculatedProjections: 0
  };
  var transformAxes = ["", "X", "Y", "Z"];
  var animationTarget = 1e3;
  var id = 0;
  function resetDistortingTransform(key, visualElement, values, sharedAnimationValues) {
    const { latestValues } = visualElement;
    if (latestValues[key]) {
      values[key] = latestValues[key];
      visualElement.setStaticValue(key, 0);
      if (sharedAnimationValues) {
        sharedAnimationValues[key] = 0;
      }
    }
  }
  function cancelTreeOptimisedTransformAnimations(projectionNode) {
    projectionNode.hasCheckedOptimisedAppear = true;
    if (projectionNode.root === projectionNode)
      return;
    const { visualElement } = projectionNode.options;
    if (!visualElement)
      return;
    const appearId = getOptimisedAppearId(visualElement);
    if (window.MotionHasOptimisedAnimation(appearId, "transform")) {
      const { layout: layout2, layoutId } = projectionNode.options;
      window.MotionCancelOptimisedAnimation(appearId, "transform", frame, !(layout2 || layoutId));
    }
    const { parent } = projectionNode;
    if (parent && !parent.hasCheckedOptimisedAppear) {
      cancelTreeOptimisedTransformAnimations(parent);
    }
  }
  function createProjectionNode({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform }) {
    return class ProjectionNode {
      constructor(latestValues = {}, parent = defaultParent?.()) {
        this.id = id++;
        this.animationId = 0;
        this.animationCommitId = 0;
        this.children = /* @__PURE__ */ new Set();
        this.options = {};
        this.isTreeAnimating = false;
        this.isAnimationBlocked = false;
        this.isLayoutDirty = false;
        this.isProjectionDirty = false;
        this.isSharedProjectionDirty = false;
        this.isTransformDirty = false;
        this.updateManuallyBlocked = false;
        this.updateBlockedByResize = false;
        this.isUpdating = false;
        this.isSVG = false;
        this.needsReset = false;
        this.shouldResetTransform = false;
        this.hasCheckedOptimisedAppear = false;
        this.treeScale = { x: 1, y: 1 };
        this.eventHandlers = /* @__PURE__ */ new Map();
        this.hasTreeAnimated = false;
        this.layoutVersion = 0;
        this.updateScheduled = false;
        this.scheduleUpdate = () => this.update();
        this.projectionUpdateScheduled = false;
        this.checkUpdateFailed = () => {
          if (this.isUpdating) {
            this.isUpdating = false;
            this.clearAllSnapshots();
          }
        };
        this.updateProjection = () => {
          this.projectionUpdateScheduled = false;
          if (statsBuffer.value) {
            metrics.nodes = metrics.calculatedTargetDeltas = metrics.calculatedProjections = 0;
          }
          this.nodes.forEach(propagateDirtyNodes);
          this.nodes.forEach(resolveTargetDelta);
          this.nodes.forEach(calcProjection);
          this.nodes.forEach(cleanDirtyNodes);
          if (statsBuffer.addProjectionMetrics) {
            statsBuffer.addProjectionMetrics(metrics);
          }
        };
        this.resolvedRelativeTargetAt = 0;
        this.linkedParentVersion = 0;
        this.hasProjected = false;
        this.isVisible = true;
        this.animationProgress = 0;
        this.sharedNodes = /* @__PURE__ */ new Map();
        this.latestValues = latestValues;
        this.root = parent ? parent.root || parent : this;
        this.path = parent ? [...parent.path, parent] : [];
        this.parent = parent;
        this.depth = parent ? parent.depth + 1 : 0;
        for (let i = 0; i < this.path.length; i++) {
          this.path[i].shouldResetTransform = true;
        }
        if (this.root === this)
          this.nodes = new FlatTree();
      }
      addEventListener(name, handler) {
        if (!this.eventHandlers.has(name)) {
          this.eventHandlers.set(name, new SubscriptionManager());
        }
        return this.eventHandlers.get(name).add(handler);
      }
      notifyListeners(name, ...args) {
        const subscriptionManager = this.eventHandlers.get(name);
        subscriptionManager && subscriptionManager.notify(...args);
      }
      hasListeners(name) {
        return this.eventHandlers.has(name);
      }
      /**
       * Lifecycles
       */
      mount(instance) {
        if (this.instance)
          return;
        this.isSVG = isSVGElement(instance) && !isSVGSVGElement(instance);
        this.instance = instance;
        const { layoutId, layout: layout2, visualElement } = this.options;
        if (visualElement && !visualElement.current) {
          visualElement.mount(instance);
        }
        this.root.nodes.add(this);
        this.parent && this.parent.children.add(this);
        if (this.root.hasTreeAnimated && (layout2 || layoutId)) {
          this.isLayoutDirty = true;
        }
        if (attachResizeListener) {
          let cancelDelay;
          let innerWidth = 0;
          const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
          frame.read(() => {
            innerWidth = window.innerWidth;
          });
          attachResizeListener(instance, () => {
            const newInnerWidth = window.innerWidth;
            if (newInnerWidth === innerWidth)
              return;
            innerWidth = newInnerWidth;
            this.root.updateBlockedByResize = true;
            cancelDelay && cancelDelay();
            cancelDelay = delay(resizeUnblockUpdate, 250);
            if (globalProjectionState.hasAnimatedSinceResize) {
              globalProjectionState.hasAnimatedSinceResize = false;
              this.nodes.forEach(finishAnimation);
            }
          });
        }
        if (layoutId) {
          this.root.registerSharedNode(layoutId, this);
        }
        if (this.options.animate !== false && visualElement && (layoutId || layout2)) {
          this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeLayoutChanged, layout: newLayout }) => {
            if (this.isTreeAnimationBlocked()) {
              this.target = void 0;
              this.relativeTarget = void 0;
              return;
            }
            const layoutTransition = this.options.transition || visualElement.getDefaultTransition() || defaultLayoutTransition;
            const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
            const hasTargetChanged = !this.targetLayout || !boxEqualsRounded(this.targetLayout, newLayout);
            const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeLayoutChanged;
            if (this.options.layoutRoot || this.resumeFrom || hasOnlyRelativeTargetChanged || hasLayoutChanged && (hasTargetChanged || !this.currentAnimation)) {
              if (this.resumeFrom) {
                this.resumingFrom = this.resumeFrom;
                this.resumingFrom.resumingFrom = void 0;
              }
              const animationOptions = {
                ...getValueTransition(layoutTransition, "layout"),
                onPlay: onLayoutAnimationStart,
                onComplete: onLayoutAnimationComplete
              };
              if (visualElement.shouldReduceMotion || this.options.layoutRoot) {
                animationOptions.delay = 0;
                animationOptions.type = false;
              }
              this.startAnimation(animationOptions);
              this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
            } else {
              if (!hasLayoutChanged) {
                finishAnimation(this);
              }
              if (this.isLead() && this.options.onExitComplete) {
                this.options.onExitComplete();
              }
            }
            this.targetLayout = newLayout;
          });
        }
      }
      unmount() {
        this.options.layoutId && this.willUpdate();
        this.root.nodes.remove(this);
        const stack = this.getStack();
        stack && stack.remove(this);
        this.parent && this.parent.children.delete(this);
        this.instance = void 0;
        this.eventHandlers.clear();
        cancelFrame(this.updateProjection);
      }
      // only on the root
      blockUpdate() {
        this.updateManuallyBlocked = true;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = false;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
      }
      // Note: currently only running on root node
      startUpdate() {
        if (this.isUpdateBlocked())
          return;
        this.isUpdating = true;
        this.nodes && this.nodes.forEach(resetSkewAndRotation);
        this.animationId++;
      }
      getTransformTemplate() {
        const { visualElement } = this.options;
        return visualElement && visualElement.getProps().transformTemplate;
      }
      willUpdate(shouldNotifyListeners = true) {
        this.root.hasTreeAnimated = true;
        if (this.root.isUpdateBlocked()) {
          this.options.onExitComplete && this.options.onExitComplete();
          return;
        }
        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) {
          cancelTreeOptimisedTransformAnimations(this);
        }
        !this.root.isUpdating && this.root.startUpdate();
        if (this.isLayoutDirty)
          return;
        this.isLayoutDirty = true;
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          node.shouldResetTransform = true;
          if (typeof node.latestValues.x === "string" || typeof node.latestValues.y === "string") {
            node.isLayoutDirty = true;
          }
          node.updateScroll("snapshot");
          if (node.options.layoutRoot) {
            node.willUpdate(false);
          }
        }
        const { layoutId, layout: layout2 } = this.options;
        if (layoutId === void 0 && !layout2)
          return;
        const transformTemplate = this.getTransformTemplate();
        this.prevTransformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
        this.updateSnapshot();
        shouldNotifyListeners && this.notifyListeners("willUpdate");
      }
      update() {
        this.updateScheduled = false;
        const updateWasBlocked = this.isUpdateBlocked();
        if (updateWasBlocked) {
          const wasBlockedByResize = this.updateBlockedByResize;
          this.unblockUpdate();
          this.updateBlockedByResize = false;
          this.clearAllSnapshots();
          if (wasBlockedByResize) {
            this.nodes.forEach(forceLayoutMeasure);
          }
          this.nodes.forEach(clearMeasurements);
          return;
        }
        if (this.animationId <= this.animationCommitId) {
          this.nodes.forEach(clearIsLayoutDirty);
          return;
        }
        this.animationCommitId = this.animationId;
        if (!this.isUpdating) {
          this.nodes.forEach(clearIsLayoutDirty);
        } else {
          this.isUpdating = false;
          this.nodes.forEach(ensureDraggedNodesSnapshotted);
          this.nodes.forEach(resetTransformStyle);
          this.nodes.forEach(updateLayout);
          this.nodes.forEach(notifyLayoutUpdate);
        }
        this.clearAllSnapshots();
        const now2 = time.now();
        frameData.delta = clamp(0, 1e3 / 60, now2 - frameData.timestamp);
        frameData.timestamp = now2;
        frameData.isProcessing = true;
        frameSteps.update.process(frameData);
        frameSteps.preRender.process(frameData);
        frameSteps.render.process(frameData);
        frameData.isProcessing = false;
      }
      didUpdate() {
        if (!this.updateScheduled) {
          this.updateScheduled = true;
          microtask.read(this.scheduleUpdate);
        }
      }
      clearAllSnapshots() {
        this.nodes.forEach(clearSnapshot);
        this.sharedNodes.forEach(removeLeadSnapshots);
      }
      scheduleUpdateProjection() {
        if (!this.projectionUpdateScheduled) {
          this.projectionUpdateScheduled = true;
          frame.preRender(this.updateProjection, false, true);
        }
      }
      scheduleCheckAfterUnmount() {
        frame.postRender(() => {
          if (this.isLayoutDirty) {
            this.root.didUpdate();
          } else {
            this.root.checkUpdateFailed();
          }
        });
      }
      /**
       * Update measurements
       */
      updateSnapshot() {
        if (this.snapshot || !this.instance)
          return;
        this.snapshot = this.measure();
        if (this.snapshot && !calcLength(this.snapshot.measuredBox.x) && !calcLength(this.snapshot.measuredBox.y)) {
          this.snapshot = void 0;
        }
      }
      updateLayout() {
        if (!this.instance)
          return;
        this.updateScroll();
        if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
          return;
        }
        if (this.resumeFrom && !this.resumeFrom.instance) {
          for (let i = 0; i < this.path.length; i++) {
            const node = this.path[i];
            node.updateScroll();
          }
        }
        const prevLayout = this.layout;
        this.layout = this.measure(false);
        this.layoutVersion++;
        if (!this.layoutCorrected)
          this.layoutCorrected = createBox();
        this.isLayoutDirty = false;
        this.projectionDelta = void 0;
        this.notifyListeners("measure", this.layout.layoutBox);
        const { visualElement } = this.options;
        visualElement && visualElement.notify("LayoutMeasure", this.layout.layoutBox, prevLayout ? prevLayout.layoutBox : void 0);
      }
      updateScroll(phase = "measure") {
        let needsMeasurement = Boolean(this.options.layoutScroll && this.instance);
        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === phase) {
          needsMeasurement = false;
        }
        if (needsMeasurement && this.instance) {
          const isRoot = checkIsScrollRoot(this.instance);
          this.scroll = {
            animationId: this.root.animationId,
            phase,
            isRoot,
            offset: measureScroll(this.instance),
            wasRoot: this.scroll ? this.scroll.isRoot : isRoot
          };
        }
      }
      resetTransform() {
        if (!resetTransform)
          return;
        const isResetRequested = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
        const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
        const transformTemplate = this.getTransformTemplate();
        const transformTemplateValue = transformTemplate ? transformTemplate(this.latestValues, "") : void 0;
        const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
        if (isResetRequested && this.instance && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
          resetTransform(this.instance, transformTemplateValue);
          this.shouldResetTransform = false;
          this.scheduleRender();
        }
      }
      measure(removeTransform = true) {
        const pageBox = this.measurePageBox();
        let layoutBox = this.removeElementScroll(pageBox);
        if (removeTransform) {
          layoutBox = this.removeTransform(layoutBox);
        }
        roundBox(layoutBox);
        return {
          animationId: this.root.animationId,
          measuredBox: pageBox,
          layoutBox,
          latestValues: {},
          source: this.id
        };
      }
      measurePageBox() {
        const { visualElement } = this.options;
        if (!visualElement)
          return createBox();
        const box = visualElement.measureViewportBox();
        const wasInScrollRoot = this.scroll?.wasRoot || this.path.some(checkNodeWasScrollRoot);
        if (!wasInScrollRoot) {
          const { scroll: scroll2 } = this.root;
          if (scroll2) {
            translateAxis(box.x, scroll2.offset.x);
            translateAxis(box.y, scroll2.offset.y);
          }
        }
        return box;
      }
      removeElementScroll(box) {
        const boxWithoutScroll = createBox();
        copyBoxInto(boxWithoutScroll, box);
        if (this.scroll?.wasRoot) {
          return boxWithoutScroll;
        }
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          const { scroll: scroll2, options } = node;
          if (node !== this.root && scroll2 && options.layoutScroll) {
            if (scroll2.wasRoot) {
              copyBoxInto(boxWithoutScroll, box);
            }
            translateAxis(boxWithoutScroll.x, scroll2.offset.x);
            translateAxis(boxWithoutScroll.y, scroll2.offset.y);
          }
        }
        return boxWithoutScroll;
      }
      applyTransform(box, transformOnly = false, output) {
        const withTransforms = output || createBox();
        copyBoxInto(withTransforms, box);
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
            translateAxis(withTransforms.x, -node.scroll.offset.x);
            translateAxis(withTransforms.y, -node.scroll.offset.y);
          }
          if (!hasTransform(node.latestValues))
            continue;
          transformBox(withTransforms, node.latestValues, node.layout?.layoutBox);
        }
        if (hasTransform(this.latestValues)) {
          transformBox(withTransforms, this.latestValues, this.layout?.layoutBox);
        }
        return withTransforms;
      }
      removeTransform(box) {
        const boxWithoutTransform = createBox();
        copyBoxInto(boxWithoutTransform, box);
        for (let i = 0; i < this.path.length; i++) {
          const node = this.path[i];
          if (!hasTransform(node.latestValues))
            continue;
          let sourceBox;
          if (node.instance) {
            hasScale(node.latestValues) && node.updateSnapshot();
            sourceBox = createBox();
            copyBoxInto(sourceBox, node.measurePageBox());
          }
          removeBoxTransforms(boxWithoutTransform, node.latestValues, node.snapshot?.layoutBox, sourceBox);
        }
        if (hasTransform(this.latestValues)) {
          removeBoxTransforms(boxWithoutTransform, this.latestValues);
        }
        return boxWithoutTransform;
      }
      setTargetDelta(delta) {
        this.targetDelta = delta;
        this.root.scheduleUpdateProjection();
        this.isProjectionDirty = true;
      }
      setOptions(options) {
        this.options = {
          ...this.options,
          ...options,
          crossfade: options.crossfade !== void 0 ? options.crossfade : true
        };
      }
      clearMeasurements() {
        this.scroll = void 0;
        this.layout = void 0;
        this.snapshot = void 0;
        this.prevTransformTemplateValue = void 0;
        this.targetDelta = void 0;
        this.target = void 0;
        this.isLayoutDirty = false;
      }
      forceRelativeParentToResolveTarget() {
        if (!this.relativeParent)
          return;
        if (this.relativeParent.resolvedRelativeTargetAt !== frameData.timestamp) {
          this.relativeParent.resolveTargetDelta(true);
        }
      }
      resolveTargetDelta(forceRecalculation = false) {
        const lead = this.getLead();
        this.isProjectionDirty || (this.isProjectionDirty = lead.isProjectionDirty);
        this.isTransformDirty || (this.isTransformDirty = lead.isTransformDirty);
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = lead.isSharedProjectionDirty);
        const isShared = Boolean(this.resumingFrom) || this !== lead;
        const canSkip = !(forceRecalculation || isShared && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize);
        if (canSkip)
          return;
        const { layout: layout2, layoutId } = this.options;
        if (!this.layout || !(layout2 || layoutId))
          return;
        this.resolvedRelativeTargetAt = frameData.timestamp;
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && this.linkedParentVersion !== relativeParent.layoutVersion && !relativeParent.options.layoutRoot) {
          this.removeRelativeTarget();
        }
        if (!this.targetDelta && !this.relativeTarget) {
          if (this.options.layoutAnchor !== false && relativeParent && relativeParent.layout) {
            this.createRelativeTarget(relativeParent, this.layout.layoutBox, relativeParent.layout.layoutBox);
          } else {
            this.removeRelativeTarget();
          }
        }
        if (!this.relativeTarget && !this.targetDelta)
          return;
        if (!this.target) {
          this.target = createBox();
          this.targetWithTransforms = createBox();
        }
        if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
          this.forceRelativeParentToResolveTarget();
          calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0);
        } else if (this.targetDelta) {
          if (Boolean(this.resumingFrom)) {
            this.applyTransform(this.layout.layoutBox, false, this.target);
          } else {
            copyBoxInto(this.target, this.layout.layoutBox);
          }
          applyBoxDelta(this.target, this.targetDelta);
        } else {
          copyBoxInto(this.target, this.layout.layoutBox);
        }
        if (this.attemptToResolveRelativeTarget) {
          this.attemptToResolveRelativeTarget = false;
          if (this.options.layoutAnchor !== false && relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target && this.animationProgress !== 1) {
            this.createRelativeTarget(relativeParent, this.target, relativeParent.target);
          } else {
            this.relativeParent = this.relativeTarget = void 0;
          }
        }
        if (statsBuffer.value) {
          metrics.calculatedTargetDeltas++;
        }
      }
      getClosestProjectingParent() {
        if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues)) {
          return void 0;
        }
        if (this.parent.isProjecting()) {
          return this.parent;
        } else {
          return this.parent.getClosestProjectingParent();
        }
      }
      isProjecting() {
        return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
      }
      createRelativeTarget(relativeParent, layout2, parentLayout) {
        this.relativeParent = relativeParent;
        this.linkedParentVersion = relativeParent.layoutVersion;
        this.forceRelativeParentToResolveTarget();
        this.relativeTarget = createBox();
        this.relativeTargetOrigin = createBox();
        calcRelativePosition(this.relativeTargetOrigin, layout2, parentLayout, this.options.layoutAnchor || void 0);
        copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
      }
      removeRelativeTarget() {
        this.relativeParent = this.relativeTarget = void 0;
      }
      calcProjection() {
        const lead = this.getLead();
        const isShared = Boolean(this.resumingFrom) || this !== lead;
        let canSkip = true;
        if (this.isProjectionDirty || this.parent?.isProjectionDirty) {
          canSkip = false;
        }
        if (isShared && (this.isSharedProjectionDirty || this.isTransformDirty)) {
          canSkip = false;
        }
        if (this.resolvedRelativeTargetAt === frameData.timestamp) {
          canSkip = false;
        }
        if (canSkip)
          return;
        const { layout: layout2, layoutId } = this.options;
        this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation);
        if (!this.isTreeAnimating) {
          this.targetDelta = this.relativeTarget = void 0;
        }
        if (!this.layout || !(layout2 || layoutId))
          return;
        copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
        const prevTreeScaleX = this.treeScale.x;
        const prevTreeScaleY = this.treeScale.y;
        applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, isShared);
        if (lead.layout && !lead.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
          lead.target = lead.layout.layoutBox;
          lead.targetWithTransforms = createBox();
        }
        const { target } = lead;
        if (!target) {
          if (this.prevProjectionDelta) {
            this.createProjectionDeltas();
            this.scheduleRender();
          }
          return;
        }
        if (!this.projectionDelta || !this.prevProjectionDelta) {
          this.createProjectionDeltas();
        } else {
          copyAxisDeltaInto(this.prevProjectionDelta.x, this.projectionDelta.x);
          copyAxisDeltaInto(this.prevProjectionDelta.y, this.projectionDelta.y);
        }
        calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
        if (this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY || !axisDeltaEquals(this.projectionDelta.x, this.prevProjectionDelta.x) || !axisDeltaEquals(this.projectionDelta.y, this.prevProjectionDelta.y)) {
          this.hasProjected = true;
          this.scheduleRender();
          this.notifyListeners("projectionUpdate", target);
        }
        if (statsBuffer.value) {
          metrics.calculatedProjections++;
        }
      }
      hide() {
        this.isVisible = false;
      }
      show() {
        this.isVisible = true;
      }
      scheduleRender(notifyAll2 = true) {
        this.options.visualElement?.scheduleRender();
        if (notifyAll2) {
          const stack = this.getStack();
          stack && stack.scheduleRender();
        }
        if (this.resumingFrom && !this.resumingFrom.instance) {
          this.resumingFrom = void 0;
        }
      }
      createProjectionDeltas() {
        this.prevProjectionDelta = createDelta();
        this.projectionDelta = createDelta();
        this.projectionDeltaWithTransform = createDelta();
      }
      setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
        const snapshot = this.snapshot;
        const snapshotLatestValues = snapshot ? snapshot.latestValues : {};
        const mixedValues = { ...this.latestValues };
        const targetDelta = createDelta();
        if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
          this.relativeTarget = this.relativeTargetOrigin = void 0;
        }
        this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
        const relativeLayout = createBox();
        const snapshotSource = snapshot ? snapshot.source : void 0;
        const layoutSource = this.layout ? this.layout.source : void 0;
        const isSharedLayoutAnimation = snapshotSource !== layoutSource;
        const stack = this.getStack();
        const isOnlyMember = !stack || stack.members.length <= 1;
        const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
        this.animationProgress = 0;
        let prevRelativeTarget;
        this.mixTargetDelta = (latest) => {
          const progress2 = latest / 1e3;
          mixAxisDelta(targetDelta.x, delta.x, progress2);
          mixAxisDelta(targetDelta.y, delta.y, progress2);
          this.setTargetDelta(targetDelta);
          if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
            calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0);
            mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress2);
            if (prevRelativeTarget && boxEquals(this.relativeTarget, prevRelativeTarget)) {
              this.isProjectionDirty = false;
            }
            if (!prevRelativeTarget)
              prevRelativeTarget = createBox();
            copyBoxInto(prevRelativeTarget, this.relativeTarget);
          }
          if (isSharedLayoutAnimation) {
            this.animationValues = mixedValues;
            mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress2, shouldCrossfadeOpacity, isOnlyMember);
          }
          this.root.scheduleUpdateProjection();
          this.scheduleRender();
          this.animationProgress = progress2;
        };
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
      }
      startAnimation(options) {
        this.notifyListeners("animationStart");
        this.currentAnimation?.stop();
        this.resumingFrom?.currentAnimation?.stop();
        if (this.pendingAnimation) {
          cancelFrame(this.pendingAnimation);
          this.pendingAnimation = void 0;
        }
        this.pendingAnimation = frame.update(() => {
          globalProjectionState.hasAnimatedSinceResize = true;
          activeAnimations.layout++;
          this.motionValue || (this.motionValue = motionValue(0));
          this.motionValue.jump(0, false);
          this.currentAnimation = animateSingleValue(this.motionValue, [0, 1e3], {
            ...options,
            velocity: 0,
            isSync: true,
            onUpdate: (latest) => {
              this.mixTargetDelta(latest);
              options.onUpdate && options.onUpdate(latest);
            },
            onStop: () => {
              activeAnimations.layout--;
            },
            onComplete: () => {
              activeAnimations.layout--;
              options.onComplete && options.onComplete();
              this.completeAnimation();
            }
          });
          if (this.resumingFrom) {
            this.resumingFrom.currentAnimation = this.currentAnimation;
          }
          this.pendingAnimation = void 0;
        });
      }
      completeAnimation() {
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = void 0;
          this.resumingFrom.preserveOpacity = void 0;
        }
        const stack = this.getStack();
        stack && stack.exitAnimationComplete();
        this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
        this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        if (this.currentAnimation) {
          this.mixTargetDelta && this.mixTargetDelta(animationTarget);
          this.currentAnimation.stop();
        }
        this.completeAnimation();
      }
      applyTransformsToTarget() {
        const lead = this.getLead();
        let { targetWithTransforms, target, layout: layout2, latestValues } = lead;
        if (!targetWithTransforms || !target || !layout2)
          return;
        if (this !== lead && this.layout && layout2 && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout2.layoutBox)) {
          target = this.target || createBox();
          const xLength = calcLength(this.layout.layoutBox.x);
          target.x.min = lead.target.x.min;
          target.x.max = target.x.min + xLength;
          const yLength = calcLength(this.layout.layoutBox.y);
          target.y.min = lead.target.y.min;
          target.y.max = target.y.min + yLength;
        }
        copyBoxInto(targetWithTransforms, target);
        transformBox(targetWithTransforms, latestValues);
        calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
      }
      registerSharedNode(layoutId, node) {
        if (!this.sharedNodes.has(layoutId)) {
          this.sharedNodes.set(layoutId, new NodeStack());
        }
        const stack = this.sharedNodes.get(layoutId);
        stack.add(node);
        const config = node.options.initialPromotionConfig;
        node.promote({
          transition: config ? config.transition : void 0,
          preserveFollowOpacity: config && config.shouldPreserveFollowOpacity ? config.shouldPreserveFollowOpacity(node) : void 0
        });
      }
      isLead() {
        const stack = this.getStack();
        return stack ? stack.lead === this : true;
      }
      getLead() {
        const { layoutId } = this.options;
        return layoutId ? this.getStack()?.lead || this : this;
      }
      getPrevLead() {
        const { layoutId } = this.options;
        return layoutId ? this.getStack()?.prevLead : void 0;
      }
      getStack() {
        const { layoutId } = this.options;
        if (layoutId)
          return this.root.sharedNodes.get(layoutId);
      }
      promote({ needsReset, transition, preserveFollowOpacity } = {}) {
        const stack = this.getStack();
        if (stack)
          stack.promote(this, preserveFollowOpacity);
        if (needsReset) {
          this.projectionDelta = void 0;
          this.needsReset = true;
        }
        if (transition)
          this.setOptions({ transition });
      }
      relegate() {
        const stack = this.getStack();
        if (stack) {
          return stack.relegate(this);
        } else {
          return false;
        }
      }
      resetSkewAndRotation() {
        const { visualElement } = this.options;
        if (!visualElement)
          return;
        let hasDistortingTransform = false;
        const { latestValues } = visualElement;
        if (latestValues.z || latestValues.rotate || latestValues.rotateX || latestValues.rotateY || latestValues.rotateZ || latestValues.skewX || latestValues.skewY) {
          hasDistortingTransform = true;
        }
        if (!hasDistortingTransform)
          return;
        const resetValues = {};
        if (latestValues.z) {
          resetDistortingTransform("z", visualElement, resetValues, this.animationValues);
        }
        for (let i = 0; i < transformAxes.length; i++) {
          resetDistortingTransform(`rotate${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
          resetDistortingTransform(`skew${transformAxes[i]}`, visualElement, resetValues, this.animationValues);
        }
        visualElement.render();
        for (const key in resetValues) {
          visualElement.setStaticValue(key, resetValues[key]);
          if (this.animationValues) {
            this.animationValues[key] = resetValues[key];
          }
        }
        visualElement.scheduleRender();
      }
      applyProjectionStyles(targetStyle, styleProp) {
        if (!this.instance || this.isSVG)
          return;
        if (!this.isVisible) {
          targetStyle.visibility = "hidden";
          return;
        }
        const transformTemplate = this.getTransformTemplate();
        if (this.needsReset) {
          this.needsReset = false;
          targetStyle.visibility = "";
          targetStyle.opacity = "";
          targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
          targetStyle.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
          return;
        }
        const lead = this.getLead();
        if (!this.projectionDelta || !this.layout || !lead.target) {
          if (this.options.layoutId) {
            targetStyle.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
            targetStyle.pointerEvents = resolveMotionValue(styleProp?.pointerEvents) || "";
          }
          if (this.hasProjected && !hasTransform(this.latestValues)) {
            targetStyle.transform = transformTemplate ? transformTemplate({}, "") : "none";
            this.hasProjected = false;
          }
          return;
        }
        targetStyle.visibility = "";
        const valuesToRender = lead.animationValues || lead.latestValues;
        this.applyTransformsToTarget();
        let transform2 = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
        if (transformTemplate) {
          transform2 = transformTemplate(valuesToRender, transform2);
        }
        targetStyle.transform = transform2;
        const { x, y } = this.projectionDelta;
        targetStyle.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
        if (lead.animationValues) {
          targetStyle.opacity = lead === this ? valuesToRender.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
        } else {
          targetStyle.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
        }
        for (const key in scaleCorrectors) {
          if (valuesToRender[key] === void 0)
            continue;
          const { correct, applyTo, isCSSVariable } = scaleCorrectors[key];
          const corrected = transform2 === "none" ? valuesToRender[key] : correct(valuesToRender[key], lead);
          if (applyTo) {
            const num = applyTo.length;
            for (let i = 0; i < num; i++) {
              targetStyle[applyTo[i]] = corrected;
            }
          } else {
            if (isCSSVariable) {
              this.options.visualElement.renderState.vars[key] = corrected;
            } else {
              targetStyle[key] = corrected;
            }
          }
        }
        if (this.options.layoutId) {
          targetStyle.pointerEvents = lead === this ? resolveMotionValue(styleProp?.pointerEvents) || "" : "none";
        }
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      // Only run on root
      resetTree() {
        this.root.nodes.forEach((node) => node.currentAnimation?.stop());
        this.root.nodes.forEach(clearMeasurements);
        this.root.sharedNodes.clear();
      }
    };
  }
  function updateLayout(node) {
    node.updateLayout();
  }
  function notifyLayoutUpdate(node) {
    const snapshot = node.resumeFrom?.snapshot || node.snapshot;
    if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
      const { layoutBox: layout2, measuredBox: measuredLayout } = node.layout;
      const { animationType } = node.options;
      const isShared = snapshot.source !== node.layout.source;
      if (animationType === "size") {
        eachAxis((axis) => {
          const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
          const length = calcLength(axisSnapshot);
          axisSnapshot.min = layout2[axis].min;
          axisSnapshot.max = axisSnapshot.min + length;
        });
      } else if (animationType === "x" || animationType === "y") {
        const snapAxis = animationType === "x" ? "y" : "x";
        copyAxisInto(isShared ? snapshot.measuredBox[snapAxis] : snapshot.layoutBox[snapAxis], layout2[snapAxis]);
      } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout2)) {
        eachAxis((axis) => {
          const axisSnapshot = isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
          const length = calcLength(layout2[axis]);
          axisSnapshot.max = axisSnapshot.min + length;
          if (node.relativeTarget && !node.currentAnimation) {
            node.isProjectionDirty = true;
            node.relativeTarget[axis].max = node.relativeTarget[axis].min + length;
          }
        });
      }
      const layoutDelta = createDelta();
      calcBoxDelta(layoutDelta, layout2, snapshot.layoutBox);
      const visualDelta = createDelta();
      if (isShared) {
        calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
      } else {
        calcBoxDelta(visualDelta, layout2, snapshot.layoutBox);
      }
      const hasLayoutChanged = !isDeltaZero(layoutDelta);
      let hasRelativeLayoutChanged = false;
      if (!node.resumeFrom) {
        const relativeParent = node.getClosestProjectingParent();
        if (relativeParent && !relativeParent.resumeFrom) {
          const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
          if (parentSnapshot && parentLayout) {
            const anchor = node.options.layoutAnchor || void 0;
            const relativeSnapshot = createBox();
            calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox, anchor);
            const relativeLayout = createBox();
            calcRelativePosition(relativeLayout, layout2, parentLayout.layoutBox, anchor);
            if (!boxEqualsRounded(relativeSnapshot, relativeLayout)) {
              hasRelativeLayoutChanged = true;
            }
            if (relativeParent.options.layoutRoot) {
              node.relativeTarget = relativeLayout;
              node.relativeTargetOrigin = relativeSnapshot;
              node.relativeParent = relativeParent;
            }
          }
        }
      }
      node.notifyListeners("didUpdate", {
        layout: layout2,
        snapshot,
        delta: visualDelta,
        layoutDelta,
        hasLayoutChanged,
        hasRelativeLayoutChanged
      });
    } else if (node.isLead()) {
      const { onExitComplete } = node.options;
      onExitComplete && onExitComplete();
    }
    node.options.transition = void 0;
  }
  function propagateDirtyNodes(node) {
    if (statsBuffer.value) {
      metrics.nodes++;
    }
    if (!node.parent)
      return;
    if (!node.isProjecting()) {
      node.isProjectionDirty = node.parent.isProjectionDirty;
    }
    node.isSharedProjectionDirty || (node.isSharedProjectionDirty = Boolean(node.isProjectionDirty || node.parent.isProjectionDirty || node.parent.isSharedProjectionDirty));
    node.isTransformDirty || (node.isTransformDirty = node.parent.isTransformDirty);
  }
  function cleanDirtyNodes(node) {
    node.isProjectionDirty = node.isSharedProjectionDirty = node.isTransformDirty = false;
  }
  function clearSnapshot(node) {
    node.clearSnapshot();
  }
  function clearMeasurements(node) {
    node.clearMeasurements();
  }
  function forceLayoutMeasure(node) {
    node.isLayoutDirty = true;
    node.updateLayout();
  }
  function clearIsLayoutDirty(node) {
    node.isLayoutDirty = false;
  }
  function ensureDraggedNodesSnapshotted(node) {
    if (node.isAnimationBlocked && node.layout && !node.isLayoutDirty) {
      node.snapshot = node.layout;
      node.isLayoutDirty = true;
    }
  }
  function resetTransformStyle(node) {
    const { visualElement } = node.options;
    if (visualElement && visualElement.getProps().onBeforeLayoutMeasure) {
      visualElement.notify("BeforeLayoutMeasure");
    }
    node.resetTransform();
  }
  function finishAnimation(node) {
    node.finishAnimation();
    node.targetDelta = node.relativeTarget = node.target = void 0;
    node.isProjectionDirty = true;
  }
  function resolveTargetDelta(node) {
    node.resolveTargetDelta();
  }
  function calcProjection(node) {
    node.calcProjection();
  }
  function resetSkewAndRotation(node) {
    node.resetSkewAndRotation();
  }
  function removeLeadSnapshots(stack) {
    stack.removeLeadSnapshot();
  }
  function mixAxisDelta(output, delta, p) {
    output.translate = mixNumber(delta.translate, 0, p);
    output.scale = mixNumber(delta.scale, 1, p);
    output.origin = delta.origin;
    output.originPoint = delta.originPoint;
  }
  function mixAxis(output, from, to, p) {
    output.min = mixNumber(from.min, to.min, p);
    output.max = mixNumber(from.max, to.max, p);
  }
  function mixBox(output, from, to, p) {
    mixAxis(output.x, from.x, to.x, p);
    mixAxis(output.y, from.y, to.y, p);
  }
  function hasOpacityCrossfade(node) {
    return node.animationValues && node.animationValues.opacityExit !== void 0;
  }
  var defaultLayoutTransition = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1]
  };
  var userAgentContains = (string) => typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(string);
  var roundPoint = userAgentContains("applewebkit/") && !userAgentContains("chrome/") ? Math.round : noop;
  function roundAxis(axis) {
    axis.min = roundPoint(axis.min);
    axis.max = roundPoint(axis.max);
  }
  function roundBox(box) {
    roundAxis(box.x);
    roundAxis(box.y);
  }
  function shouldAnimatePositionOnly(animationType, snapshot, layout2) {
    return animationType === "position" || animationType === "preserve-aspect" && !isNear(aspectRatio(snapshot), aspectRatio(layout2), 0.2);
  }
  function checkNodeWasScrollRoot(node) {
    return node !== node.root && node.scroll?.wasRoot;
  }

  // node_modules/motion-dom/dist/es/projection/node/DocumentProjectionNode.mjs
  var DocumentProjectionNode = createProjectionNode({
    attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0
    }),
    checkIsScrollRoot: () => true
  });

  // node_modules/motion-dom/dist/es/projection/node/HTMLProjectionNode.mjs
  var rootProjectionNode = {
    current: void 0
  };
  var HTMLProjectionNode = createProjectionNode({
    measureScroll: (instance) => ({
      x: instance.scrollLeft,
      y: instance.scrollTop
    }),
    defaultParent: () => {
      if (!rootProjectionNode.current) {
        const documentNode = new DocumentProjectionNode({});
        documentNode.mount(window);
        documentNode.setOptions({ layoutScroll: true });
        rootProjectionNode.current = documentNode;
      }
      return rootProjectionNode.current;
    },
    resetTransform: (instance, value) => {
      instance.style.transform = value !== void 0 ? value : "none";
    },
    checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed")
  });

  // node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
  var React3 = __toESM(require_react_shim(), 1);
  var import_react6 = __toESM(require_react_shim(), 1);

  // node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
  var import_react5 = __toESM(require_react_shim(), 1);
  var MotionConfigContext = (0, import_react5.createContext)({
    transformPagePoint: (p) => p,
    isStatic: false,
    reducedMotion: "never"
  });

  // node_modules/framer-motion/dist/es/utils/use-composed-ref.mjs
  var React2 = __toESM(require_react_shim(), 1);
  function setRef(ref, value) {
    if (typeof ref === "function") {
      return ref(value);
    } else if (ref !== null && ref !== void 0) {
      ref.current = value;
    }
  }
  function composeRefs(...refs) {
    return (node) => {
      let hasCleanup = false;
      const cleanups = refs.map((ref) => {
        const cleanup = setRef(ref, node);
        if (!hasCleanup && typeof cleanup === "function") {
          hasCleanup = true;
        }
        return cleanup;
      });
      if (hasCleanup) {
        return () => {
          for (let i = 0; i < cleanups.length; i++) {
            const cleanup = cleanups[i];
            if (typeof cleanup === "function") {
              cleanup();
            } else {
              setRef(refs[i], null);
            }
          }
        };
      }
    };
  }
  function useComposedRefs(...refs) {
    return React2.useCallback(composeRefs(...refs), refs);
  }

  // node_modules/framer-motion/dist/es/components/AnimatePresence/PopChild.mjs
  var PopChildMeasure = class extends React3.Component {
    getSnapshotBeforeUpdate(prevProps) {
      const element = this.props.childRef.current;
      if (isHTMLElement(element) && prevProps.isPresent && !this.props.isPresent && this.props.pop !== false) {
        const parent = element.offsetParent;
        const parentWidth = isHTMLElement(parent) ? parent.offsetWidth || 0 : 0;
        const parentHeight = isHTMLElement(parent) ? parent.offsetHeight || 0 : 0;
        const computedStyle = getComputedStyle(element);
        const size = this.props.sizeRef.current;
        size.height = parseFloat(computedStyle.height);
        size.width = parseFloat(computedStyle.width);
        size.top = element.offsetTop;
        size.left = element.offsetLeft;
        size.right = parentWidth - size.width - size.left;
        size.bottom = parentHeight - size.height - size.top;
      }
      return null;
    }
    /**
     * Required with getSnapshotBeforeUpdate to stop React complaining.
     */
    componentDidUpdate() {
    }
    render() {
      return this.props.children;
    }
  };
  function PopChild({ children, isPresent, anchorX, anchorY, root, pop }) {
    const id3 = (0, import_react6.useId)();
    const ref = (0, import_react6.useRef)(null);
    const size = (0, import_react6.useRef)({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    });
    const { nonce } = (0, import_react6.useContext)(MotionConfigContext);
    const childRef = children.props?.ref ?? children?.ref;
    const composedRef = useComposedRefs(ref, childRef);
    (0, import_react6.useInsertionEffect)(() => {
      const { width, height, top, left, right, bottom } = size.current;
      if (isPresent || pop === false || !ref.current || !width || !height)
        return;
      const x = anchorX === "left" ? `left: ${left}` : `right: ${right}`;
      const y = anchorY === "bottom" ? `bottom: ${bottom}` : `top: ${top}`;
      ref.current.dataset.motionPopId = id3;
      const style = document.createElement("style");
      if (nonce)
        style.nonce = nonce;
      const parent = root ?? document.head;
      parent.appendChild(style);
      if (style.sheet) {
        style.sheet.insertRule(`
          [data-motion-pop-id="${id3}"] {
            position: absolute !important;
            width: ${width}px !important;
            height: ${height}px !important;
            ${x}px !important;
            ${y}px !important;
          }
        `);
      }
      return () => {
        ref.current?.removeAttribute("data-motion-pop-id");
        if (parent.contains(style)) {
          parent.removeChild(style);
        }
      };
    }, [isPresent]);
    return (0, import_jsx_runtime.jsx)(PopChildMeasure, { isPresent, childRef: ref, sizeRef: size, pop, children: pop === false ? children : React3.cloneElement(children, { ref: composedRef }) });
  }

  // node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.mjs
  var PresenceChild = ({ children, initial, isPresent, onExitComplete, custom, presenceAffectsLayout, mode, anchorX, anchorY, root }) => {
    const presenceChildren = useConstant(newChildrenMap);
    const id3 = (0, import_react7.useId)();
    let isReusedContext = true;
    let context = (0, import_react7.useMemo)(() => {
      isReusedContext = false;
      return {
        id: id3,
        initial,
        isPresent,
        custom,
        onExitComplete: (childId) => {
          presenceChildren.set(childId, true);
          for (const isComplete of presenceChildren.values()) {
            if (!isComplete)
              return;
          }
          onExitComplete && onExitComplete();
        },
        register: (childId) => {
          presenceChildren.set(childId, false);
          return () => presenceChildren.delete(childId);
        }
      };
    }, [isPresent, presenceChildren, onExitComplete]);
    if (presenceAffectsLayout && isReusedContext) {
      context = { ...context };
    }
    (0, import_react7.useMemo)(() => {
      presenceChildren.forEach((_, key) => presenceChildren.set(key, false));
    }, [isPresent]);
    React4.useEffect(() => {
      !isPresent && !presenceChildren.size && onExitComplete && onExitComplete();
    }, [isPresent]);
    children = (0, import_jsx_runtime2.jsx)(PopChild, { pop: mode === "popLayout", isPresent, anchorX, anchorY, root, children });
    return (0, import_jsx_runtime2.jsx)(PresenceContext.Provider, { value: context, children });
  };
  function newChildrenMap() {
    return /* @__PURE__ */ new Map();
  }

  // node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
  var import_react8 = __toESM(require_react_shim(), 1);
  function usePresence(subscribe = true) {
    const context = (0, import_react8.useContext)(PresenceContext);
    if (context === null)
      return [true, null];
    const { isPresent, onExitComplete, register } = context;
    const id3 = (0, import_react8.useId)();
    (0, import_react8.useEffect)(() => {
      if (subscribe) {
        return register(id3);
      }
    }, [subscribe]);
    const safeToRemove = (0, import_react8.useCallback)(() => subscribe && onExitComplete && onExitComplete(id3), [id3, onExitComplete, subscribe]);
    return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
  }

  // node_modules/framer-motion/dist/es/components/AnimatePresence/utils.mjs
  var import_react9 = __toESM(require_react_shim(), 1);
  var getChildKey = (child) => child.key || "";
  function onlyElements(children) {
    const filtered = [];
    import_react9.Children.forEach(children, (child) => {
      if ((0, import_react9.isValidElement)(child))
        filtered.push(child);
    });
    return filtered;
  }

  // node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
  var AnimatePresence = ({ children, custom, initial = true, onExitComplete, presenceAffectsLayout = true, mode = "sync", propagate = false, anchorX = "left", anchorY = "top", root }) => {
    const [isParentPresent, safeToRemove] = usePresence(propagate);
    const presentChildren = (0, import_react10.useMemo)(() => onlyElements(children), [children]);
    const presentKeys = propagate && !isParentPresent ? [] : presentChildren.map(getChildKey);
    const isInitialRender = (0, import_react10.useRef)(true);
    const pendingPresentChildren = (0, import_react10.useRef)(presentChildren);
    const exitComplete = useConstant(() => /* @__PURE__ */ new Map());
    const exitingComponents = (0, import_react10.useRef)(/* @__PURE__ */ new Set());
    const [diffedChildren, setDiffedChildren] = (0, import_react10.useState)(presentChildren);
    const [renderedChildren, setRenderedChildren] = (0, import_react10.useState)(presentChildren);
    useIsomorphicLayoutEffect(() => {
      isInitialRender.current = false;
      pendingPresentChildren.current = presentChildren;
      for (let i = 0; i < renderedChildren.length; i++) {
        const key = getChildKey(renderedChildren[i]);
        if (!presentKeys.includes(key)) {
          if (exitComplete.get(key) !== true) {
            exitComplete.set(key, false);
          }
        } else {
          exitComplete.delete(key);
          exitingComponents.current.delete(key);
        }
      }
    }, [renderedChildren, presentKeys.length, presentKeys.join("-")]);
    const exitingChildren = [];
    if (presentChildren !== diffedChildren) {
      let nextChildren = [...presentChildren];
      for (let i = 0; i < renderedChildren.length; i++) {
        const child = renderedChildren[i];
        const key = getChildKey(child);
        if (!presentKeys.includes(key)) {
          nextChildren.splice(i, 0, child);
          exitingChildren.push(child);
        }
      }
      if (mode === "wait" && exitingChildren.length) {
        nextChildren = exitingChildren;
      }
      setRenderedChildren(onlyElements(nextChildren));
      setDiffedChildren(presentChildren);
      return null;
    }
    if (mode === "wait" && renderedChildren.length > 1) {
      console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
    }
    const { forceRender } = (0, import_react10.useContext)(LayoutGroupContext);
    return (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children: renderedChildren.map((child) => {
      const key = getChildKey(child);
      const isPresent = propagate && !isParentPresent ? false : presentChildren === renderedChildren || presentKeys.includes(key);
      const onExit = () => {
        if (exitingComponents.current.has(key)) {
          return;
        }
        if (exitComplete.has(key)) {
          exitingComponents.current.add(key);
          exitComplete.set(key, true);
        } else {
          return;
        }
        let isEveryExitComplete = true;
        exitComplete.forEach((isExitComplete) => {
          if (!isExitComplete)
            isEveryExitComplete = false;
        });
        if (isEveryExitComplete) {
          forceRender?.();
          setRenderedChildren(pendingPresentChildren.current);
          propagate && safeToRemove?.();
          onExitComplete && onExitComplete();
        }
      };
      return (0, import_jsx_runtime3.jsx)(PresenceChild, { isPresent, initial: !isInitialRender.current || initial ? void 0 : false, custom, presenceAffectsLayout, mode, root, onExitComplete: isPresent ? void 0 : onExit, anchorX, anchorY, children: child }, key);
    }) });
  };

  // node_modules/framer-motion/dist/es/context/LazyContext.mjs
  var import_react11 = __toESM(require_react_shim(), 1);
  var LazyContext = (0, import_react11.createContext)({ strict: false });

  // node_modules/framer-motion/dist/es/motion/features/definitions.mjs
  var featureProps = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag"
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
  };
  var isInitialized = false;
  function initFeatureDefinitions() {
    if (isInitialized)
      return;
    const initialFeatureDefinitions = {};
    for (const key in featureProps) {
      initialFeatureDefinitions[key] = {
        isEnabled: (props) => featureProps[key].some((name) => !!props[name])
      };
    }
    setFeatureDefinitions(initialFeatureDefinitions);
    isInitialized = true;
  }
  function getInitializedFeatureDefinitions() {
    initFeatureDefinitions();
    return getFeatureDefinitions();
  }

  // node_modules/framer-motion/dist/es/motion/features/load-features.mjs
  function loadFeatures(features) {
    const featureDefinitions2 = getInitializedFeatureDefinitions();
    for (const key in features) {
      featureDefinitions2[key] = {
        ...featureDefinitions2[key],
        ...features[key]
      };
    }
    setFeatureDefinitions(featureDefinitions2);
  }

  // node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
  var validMotionProps = /* @__PURE__ */ new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "propagate",
    "ignoreStrict",
    "viewport"
  ]);
  function isValidMotionProp(key) {
    return key.startsWith("while") || key.startsWith("drag") && key !== "draggable" || key.startsWith("layout") || key.startsWith("onTap") || key.startsWith("onPan") || key.startsWith("onLayout") || validMotionProps.has(key);
  }

  // node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
  var shouldForward = (key) => !isValidMotionProp(key);
  function loadExternalIsValidProp(isValidProp) {
    if (typeof isValidProp !== "function")
      return;
    shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
  }
  try {
    const emotionPkg = "@emotion/is-prop-valid";
    loadExternalIsValidProp(__require(emotionPkg).default);
  } catch {
  }
  function filterProps(props, isDom, forwardMotionProps) {
    const filteredProps = {};
    for (const key in props) {
      if (key === "values" && typeof props.values === "object")
        continue;
      if (isMotionValue(props[key]))
        continue;
      if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || // If trying to use native HTML drag events, forward drag listeners
      props["draggable"] && key.startsWith("onDrag")) {
        filteredProps[key] = props[key];
      }
    }
    return filteredProps;
  }

  // node_modules/framer-motion/dist/es/motion/index.mjs
  var import_jsx_runtime4 = __toESM(require_react_shim(), 1);
  var import_react21 = __toESM(require_react_shim(), 1);

  // node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
  var import_react12 = __toESM(require_react_shim(), 1);
  var MotionContext = /* @__PURE__ */ (0, import_react12.createContext)({});

  // node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
  var import_react13 = __toESM(require_react_shim(), 1);

  // node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
  function getCurrentTreeVariants(props, context) {
    if (isControllingVariants(props)) {
      const { initial, animate } = props;
      return {
        initial: initial === false || isVariantLabel(initial) ? initial : void 0,
        animate: isVariantLabel(animate) ? animate : void 0
      };
    }
    return props.inherit !== false ? context : {};
  }

  // node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
  function useCreateMotionContext(props) {
    const { initial, animate } = getCurrentTreeVariants(props, (0, import_react13.useContext)(MotionContext));
    return (0, import_react13.useMemo)(() => ({ initial, animate }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate)]);
  }
  function variantLabelsAsDependency(prop) {
    return Array.isArray(prop) ? prop.join(" ") : prop;
  }

  // node_modules/framer-motion/dist/es/render/dom/use-render.mjs
  var import_react16 = __toESM(require_react_shim(), 1);

  // node_modules/framer-motion/dist/es/render/html/use-props.mjs
  var import_react14 = __toESM(require_react_shim(), 1);

  // node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
  var createHtmlRenderState = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
  });

  // node_modules/framer-motion/dist/es/render/html/use-props.mjs
  function copyRawValuesOnly(target, source, props) {
    for (const key in source) {
      if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
        target[key] = source[key];
      }
    }
  }
  function useInitialMotionValues({ transformTemplate }, visualState) {
    return (0, import_react14.useMemo)(() => {
      const state = createHtmlRenderState();
      buildHTMLStyles(state, visualState, transformTemplate);
      return Object.assign({}, state.vars, state.style);
    }, [visualState]);
  }
  function useStyle(props, visualState) {
    const styleProp = props.style || {};
    const style = {};
    copyRawValuesOnly(style, styleProp, props);
    Object.assign(style, useInitialMotionValues(props, visualState));
    return style;
  }
  function useHTMLProps(props, visualState) {
    const htmlProps = {};
    const style = useStyle(props, visualState);
    if (props.drag && props.dragListener !== false) {
      htmlProps.draggable = false;
      style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
      style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
    }
    if (props.tabIndex === void 0 && (props.onTap || props.onTapStart || props.whileTap)) {
      htmlProps.tabIndex = 0;
    }
    htmlProps.style = style;
    return htmlProps;
  }

  // node_modules/framer-motion/dist/es/render/svg/use-props.mjs
  var import_react15 = __toESM(require_react_shim(), 1);

  // node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
  var createSvgRenderState = () => ({
    ...createHtmlRenderState(),
    attrs: {}
  });

  // node_modules/framer-motion/dist/es/render/svg/use-props.mjs
  function useSVGProps(props, visualState, _isStatic, Component3) {
    const visualProps = (0, import_react15.useMemo)(() => {
      const state = createSvgRenderState();
      buildSVGAttrs(state, visualState, isSVGTag(Component3), props.transformTemplate, props.style);
      return {
        ...state.attrs,
        style: { ...state.style }
      };
    }, [visualState]);
    if (props.style) {
      const rawStyles = {};
      copyRawValuesOnly(rawStyles, props.style, props);
      visualProps.style = { ...rawStyles, ...visualProps.style };
    }
    return visualProps;
  }

  // node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
  var lowercaseSVGElements = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view"
  ];

  // node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
  function isSVGComponent(Component3) {
    if (
      /**
       * If it's not a string, it's a custom React component. Currently we only support
       * HTML custom React components.
       */
      typeof Component3 !== "string" || /**
       * If it contains a dash, the element is a custom HTML webcomponent.
       */
      Component3.includes("-")
    ) {
      return false;
    } else if (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      lowercaseSVGElements.indexOf(Component3) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(Component3)
    ) {
      return true;
    }
    return false;
  }

  // node_modules/framer-motion/dist/es/render/dom/use-render.mjs
  function useRender(Component3, props, ref, { latestValues }, isStatic, forwardMotionProps = false, isSVG) {
    const useVisualProps = isSVG ?? isSVGComponent(Component3) ? useSVGProps : useHTMLProps;
    const visualProps = useVisualProps(props, latestValues, isStatic, Component3);
    const filteredProps = filterProps(props, typeof Component3 === "string", forwardMotionProps);
    const elementProps = Component3 !== import_react16.Fragment ? { ...filteredProps, ...visualProps, ref } : {};
    const { children } = props;
    const renderedChildren = (0, import_react16.useMemo)(() => isMotionValue(children) ? children.get() : children, [children]);
    return (0, import_react16.createElement)(Component3, {
      ...elementProps,
      children: renderedChildren
    });
  }

  // node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
  var import_react17 = __toESM(require_react_shim(), 1);
  function makeState({ scrapeMotionValuesFromProps: scrapeMotionValuesFromProps3, createRenderState }, props, context, presenceContext) {
    const state = {
      latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps3),
      renderState: createRenderState()
    };
    return state;
  }
  function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
    const values = {};
    const motionValues = scrapeMotionValues(props, {});
    for (const key in motionValues) {
      values[key] = resolveMotionValue(motionValues[key]);
    }
    let { initial, animate } = props;
    const isControllingVariants$1 = isControllingVariants(props);
    const isVariantNode$1 = isVariantNode(props);
    if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
      if (initial === void 0)
        initial = context.initial;
      if (animate === void 0)
        animate = context.animate;
    }
    let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
    isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
    const variantToSet = isInitialAnimationBlocked ? animate : initial;
    if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
      const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
      for (let i = 0; i < list.length; i++) {
        const resolved = resolveVariantFromProps(props, list[i]);
        if (resolved) {
          const { transitionEnd, transition, ...target } = resolved;
          for (const key in target) {
            let valueTarget = target[key];
            if (Array.isArray(valueTarget)) {
              const index = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
              valueTarget = valueTarget[index];
            }
            if (valueTarget !== null) {
              values[key] = valueTarget;
            }
          }
          for (const key in transitionEnd) {
            values[key] = transitionEnd[key];
          }
        }
      }
    }
    return values;
  }
  var makeUseVisualState = (config) => (props, isStatic) => {
    const context = (0, import_react17.useContext)(MotionContext);
    const presenceContext = (0, import_react17.useContext)(PresenceContext);
    const make = () => makeState(config, props, context, presenceContext);
    return isStatic ? make() : useConstant(make);
  };

  // node_modules/framer-motion/dist/es/render/html/use-html-visual-state.mjs
  var useHTMLVisualState = /* @__PURE__ */ makeUseVisualState({
    scrapeMotionValuesFromProps,
    createRenderState: createHtmlRenderState
  });

  // node_modules/framer-motion/dist/es/render/svg/use-svg-visual-state.mjs
  var useSVGVisualState = /* @__PURE__ */ makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
    createRenderState: createSvgRenderState
  });

  // node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
  var motionComponentSymbol = /* @__PURE__ */ Symbol.for("motionComponentSymbol");

  // node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
  var import_react18 = __toESM(require_react_shim(), 1);
  function useMotionRef(visualState, visualElement, externalRef) {
    const externalRefContainer = (0, import_react18.useRef)(externalRef);
    (0, import_react18.useInsertionEffect)(() => {
      externalRefContainer.current = externalRef;
    });
    const refCleanup = (0, import_react18.useRef)(null);
    return (0, import_react18.useCallback)((instance) => {
      if (instance) {
        visualState.onMount?.(instance);
      }
      const ref = externalRefContainer.current;
      if (typeof ref === "function") {
        if (instance) {
          const cleanup = ref(instance);
          if (typeof cleanup === "function") {
            refCleanup.current = cleanup;
          }
        } else if (refCleanup.current) {
          refCleanup.current();
          refCleanup.current = null;
        } else {
          ref(instance);
        }
      } else if (ref) {
        ref.current = instance;
      }
      if (visualElement) {
        instance ? visualElement.mount(instance) : visualElement.unmount();
      }
    }, [visualElement]);
  }

  // node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
  var import_react20 = __toESM(require_react_shim(), 1);

  // node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
  var import_react19 = __toESM(require_react_shim(), 1);
  var SwitchLayoutGroupContext = (0, import_react19.createContext)({});

  // node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
  function isRefObject(ref) {
    return ref && typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
  }

  // node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
  function useVisualElement(Component3, visualState, props, createVisualElement, ProjectionNodeConstructor, isSVG) {
    const { visualElement: parent } = (0, import_react20.useContext)(MotionContext);
    const lazyContext = (0, import_react20.useContext)(LazyContext);
    const presenceContext = (0, import_react20.useContext)(PresenceContext);
    const motionConfig = (0, import_react20.useContext)(MotionConfigContext);
    const reducedMotionConfig = motionConfig.reducedMotion;
    const skipAnimations = motionConfig.skipAnimations;
    const visualElementRef = (0, import_react20.useRef)(null);
    const hasMountedOnce = (0, import_react20.useRef)(false);
    createVisualElement = createVisualElement || lazyContext.renderer;
    if (!visualElementRef.current && createVisualElement) {
      visualElementRef.current = createVisualElement(Component3, {
        visualState,
        parent,
        props,
        presenceContext,
        blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
        reducedMotionConfig,
        skipAnimations,
        isSVG
      });
      if (hasMountedOnce.current && visualElementRef.current) {
        visualElementRef.current.manuallyAnimateOnMount = true;
      }
    }
    const visualElement = visualElementRef.current;
    const initialLayoutGroupConfig = (0, import_react20.useContext)(SwitchLayoutGroupContext);
    if (visualElement && !visualElement.projection && ProjectionNodeConstructor && (visualElement.type === "html" || visualElement.type === "svg")) {
      createProjectionNode2(visualElementRef.current, props, ProjectionNodeConstructor, initialLayoutGroupConfig);
    }
    const isMounted = (0, import_react20.useRef)(false);
    (0, import_react20.useInsertionEffect)(() => {
      if (visualElement && isMounted.current) {
        visualElement.update(props, presenceContext);
      }
    });
    const optimisedAppearId = props[optimizedAppearDataAttribute];
    const wantsHandoff = (0, import_react20.useRef)(Boolean(optimisedAppearId) && typeof window !== "undefined" && !window.MotionHandoffIsComplete?.(optimisedAppearId) && window.MotionHasOptimisedAnimation?.(optimisedAppearId));
    useIsomorphicLayoutEffect(() => {
      hasMountedOnce.current = true;
      if (!visualElement)
        return;
      isMounted.current = true;
      window.MotionIsMounted = true;
      visualElement.updateFeatures();
      visualElement.scheduleRenderMicrotask();
      if (wantsHandoff.current && visualElement.animationState) {
        visualElement.animationState.animateChanges();
      }
    });
    (0, import_react20.useEffect)(() => {
      if (!visualElement)
        return;
      if (!wantsHandoff.current && visualElement.animationState) {
        visualElement.animationState.animateChanges();
      }
      if (wantsHandoff.current) {
        queueMicrotask(() => {
          window.MotionHandoffMarkAsComplete?.(optimisedAppearId);
        });
        wantsHandoff.current = false;
      }
      visualElement.enteringChildren = void 0;
    });
    return visualElement;
  }
  function createProjectionNode2(visualElement, props, ProjectionNodeConstructor, initialPromotionConfig) {
    const { layoutId, layout: layout2, drag: drag2, dragConstraints, layoutScroll, layoutRoot, layoutAnchor, layoutCrossfade } = props;
    visualElement.projection = new ProjectionNodeConstructor(visualElement.latestValues, props["data-framer-portal-id"] ? void 0 : getClosestProjectingNode(visualElement.parent));
    visualElement.projection.setOptions({
      layoutId,
      layout: layout2,
      alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
      visualElement,
      /**
       * TODO: Update options in an effect. This could be tricky as it'll be too late
       * to update by the time layout animations run.
       * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
       * ensuring it gets called if there's no potential layout animations.
       *
       */
      animationType: typeof layout2 === "string" ? layout2 : "both",
      initialPromotionConfig,
      crossfade: layoutCrossfade,
      layoutScroll,
      layoutRoot,
      layoutAnchor
    });
  }
  function getClosestProjectingNode(visualElement) {
    if (!visualElement)
      return void 0;
    return visualElement.options.allowProjection !== false ? visualElement.projection : getClosestProjectingNode(visualElement.parent);
  }

  // node_modules/framer-motion/dist/es/motion/index.mjs
  function createMotionComponent(Component3, { forwardMotionProps = false, type } = {}, preloadedFeatures, createVisualElement) {
    preloadedFeatures && loadFeatures(preloadedFeatures);
    const isSVG = type ? type === "svg" : isSVGComponent(Component3);
    const useVisualState = isSVG ? useSVGVisualState : useHTMLVisualState;
    function MotionDOMComponent(props, externalRef) {
      let MeasureLayout2;
      const configAndProps = {
        ...(0, import_react21.useContext)(MotionConfigContext),
        ...props,
        layoutId: useLayoutId(props)
      };
      const { isStatic } = configAndProps;
      const context = useCreateMotionContext(props);
      const visualState = useVisualState(props, isStatic);
      if (!isStatic && typeof window !== "undefined") {
        useStrictMode(configAndProps, preloadedFeatures);
        const layoutProjection = getProjectionFunctionality(configAndProps);
        MeasureLayout2 = layoutProjection.MeasureLayout;
        context.visualElement = useVisualElement(Component3, visualState, configAndProps, createVisualElement, layoutProjection.ProjectionNode, isSVG);
      }
      return (0, import_jsx_runtime4.jsxs)(MotionContext.Provider, { value: context, children: [MeasureLayout2 && context.visualElement ? (0, import_jsx_runtime4.jsx)(MeasureLayout2, { visualElement: context.visualElement, ...configAndProps }) : null, useRender(Component3, props, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, forwardMotionProps, isSVG)] });
    }
    MotionDOMComponent.displayName = `motion.${typeof Component3 === "string" ? Component3 : `create(${Component3.displayName ?? Component3.name ?? ""})`}`;
    const ForwardRefMotionComponent = (0, import_react21.forwardRef)(MotionDOMComponent);
    ForwardRefMotionComponent[motionComponentSymbol] = Component3;
    return ForwardRefMotionComponent;
  }
  function useLayoutId({ layoutId }) {
    const layoutGroupId = (0, import_react21.useContext)(LayoutGroupContext).id;
    return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
  }
  function useStrictMode(configAndProps, preloadedFeatures) {
    const isStrict = (0, import_react21.useContext)(LazyContext).strict;
    if (preloadedFeatures && isStrict) {
      const strictMessage = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
      configAndProps.ignoreStrict ? warning(false, strictMessage, "lazy-strict-mode") : invariant(false, strictMessage, "lazy-strict-mode");
    }
  }
  function getProjectionFunctionality(props) {
    const featureDefinitions2 = getInitializedFeatureDefinitions();
    const { drag: drag2, layout: layout2 } = featureDefinitions2;
    if (!drag2 && !layout2)
      return {};
    const combined = { ...drag2, ...layout2 };
    return {
      MeasureLayout: drag2?.isEnabled(props) || layout2?.isEnabled(props) ? combined.MeasureLayout : void 0,
      ProjectionNode: combined.ProjectionNode
    };
  }

  // node_modules/framer-motion/dist/es/render/components/create-proxy.mjs
  function createMotionProxy(preloadedFeatures, createVisualElement) {
    if (typeof Proxy === "undefined") {
      return createMotionComponent;
    }
    const componentCache = /* @__PURE__ */ new Map();
    const factory = (Component3, options) => {
      return createMotionComponent(Component3, options, preloadedFeatures, createVisualElement);
    };
    const deprecatedFactoryFunction = (Component3, options) => {
      if (true) {
        warnOnce(false, "motion() is deprecated. Use motion.create() instead.");
      }
      return factory(Component3, options);
    };
    return new Proxy(deprecatedFactoryFunction, {
      /**
       * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
       * The prop name is passed through as `key` and we can use that to generate a `motion`
       * DOM component with that name.
       */
      get: (_target, key) => {
        if (key === "create")
          return factory;
        if (!componentCache.has(key)) {
          componentCache.set(key, createMotionComponent(key, void 0, preloadedFeatures, createVisualElement));
        }
        return componentCache.get(key);
      }
    });
  }

  // node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
  var import_react22 = __toESM(require_react_shim(), 1);
  var createDomVisualElement = (Component3, options) => {
    const isSVG = options.isSVG ?? isSVGComponent(Component3);
    return isSVG ? new SVGVisualElement(options) : new HTMLVisualElement(options, {
      allowProjection: Component3 !== import_react22.Fragment
    });
  };

  // node_modules/framer-motion/dist/es/motion/features/animation/index.mjs
  var AnimationFeature = class extends Feature {
    /**
     * We dynamically generate the AnimationState manager as it contains a reference
     * to the underlying animation library. We only want to load that if we load this,
     * so people can optionally code split it out using the `m` component.
     */
    constructor(node) {
      super(node);
      node.animationState || (node.animationState = createAnimationState(node));
    }
    updateAnimationControlsSubscription() {
      const { animate } = this.node.getProps();
      if (isAnimationControls(animate)) {
        this.unmountControls = animate.subscribe(this.node);
      }
    }
    /**
     * Subscribe any provided AnimationControls to the component's VisualElement
     */
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      const { animate } = this.node.getProps();
      const { animate: prevAnimate } = this.node.prevProps || {};
      if (animate !== prevAnimate) {
        this.updateAnimationControlsSubscription();
      }
    }
    unmount() {
      this.node.animationState.reset();
      this.unmountControls?.();
    }
  };

  // node_modules/framer-motion/dist/es/motion/features/animation/exit.mjs
  var id2 = 0;
  var ExitAnimationFeature = class extends Feature {
    constructor() {
      super(...arguments);
      this.id = id2++;
      this.isExitComplete = false;
    }
    update() {
      if (!this.node.presenceContext)
        return;
      const { isPresent, onExitComplete } = this.node.presenceContext;
      const { isPresent: prevIsPresent } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || isPresent === prevIsPresent) {
        return;
      }
      if (isPresent && prevIsPresent === false) {
        if (this.isExitComplete) {
          const { initial, custom } = this.node.getProps();
          if (typeof initial === "string") {
            const resolved = resolveVariant(this.node, initial, custom);
            if (resolved) {
              const { transition, transitionEnd, ...target } = resolved;
              for (const key in target) {
                this.node.getValue(key)?.jump(target[key]);
              }
            }
          }
          this.node.animationState.reset();
          this.node.animationState.animateChanges();
        } else {
          this.node.animationState.setActive("exit", false);
        }
        this.isExitComplete = false;
        return;
      }
      const exitAnimation = this.node.animationState.setActive("exit", !isPresent);
      if (onExitComplete && !isPresent) {
        exitAnimation.then(() => {
          this.isExitComplete = true;
          onExitComplete(this.id);
        });
      }
    }
    mount() {
      const { register, onExitComplete } = this.node.presenceContext || {};
      if (onExitComplete) {
        onExitComplete(this.id);
      }
      if (register) {
        this.unmount = register(this.id);
      }
    }
    unmount() {
    }
  };

  // node_modules/framer-motion/dist/es/motion/features/animations.mjs
  var animations = {
    animation: {
      Feature: AnimationFeature
    },
    exit: {
      Feature: ExitAnimationFeature
    }
  };

  // node_modules/framer-motion/dist/es/events/event-info.mjs
  function extractEventInfo(event) {
    return {
      point: {
        x: event.pageX,
        y: event.pageY
      }
    };
  }
  var addPointerInfo = (handler) => (event) => isPrimaryPointer(event) && handler(event, extractEventInfo(event));

  // node_modules/framer-motion/dist/es/events/add-pointer-event.mjs
  function addPointerEvent(target, eventName, handler, options) {
    return addDomEvent(target, eventName, addPointerInfo(handler), options);
  }

  // node_modules/framer-motion/dist/es/utils/get-context-window.mjs
  var getContextWindow = ({ current }) => {
    return current ? current.ownerDocument.defaultView : null;
  };

  // node_modules/framer-motion/dist/es/utils/distance.mjs
  var distance = (a, b) => Math.abs(a - b);
  function distance2D(a, b) {
    const xDelta = distance(a.x, b.x);
    const yDelta = distance(a.y, b.y);
    return Math.sqrt(xDelta ** 2 + yDelta ** 2);
  }

  // node_modules/framer-motion/dist/es/gestures/pan/PanSession.mjs
  var overflowStyles = /* @__PURE__ */ new Set(["auto", "scroll"]);
  var PanSession = class {
    constructor(event, handlers, { transformPagePoint, contextWindow = window, dragSnapToOrigin = false, distanceThreshold = 3, element } = {}) {
      this.startEvent = null;
      this.lastMoveEvent = null;
      this.lastMoveEventInfo = null;
      this.lastRawMoveEventInfo = null;
      this.handlers = {};
      this.contextWindow = window;
      this.scrollPositions = /* @__PURE__ */ new Map();
      this.removeScrollListeners = null;
      this.onElementScroll = (event2) => {
        this.handleScroll(event2.target);
      };
      this.onWindowScroll = () => {
        this.handleScroll(window);
      };
      this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        if (this.lastRawMoveEventInfo) {
          this.lastMoveEventInfo = transformPoint(this.lastRawMoveEventInfo, this.transformPagePoint);
        }
        const info2 = getPanInfo(this.lastMoveEventInfo, this.history);
        const isPanStarted = this.startEvent !== null;
        const isDistancePastThreshold = distance2D(info2.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!isPanStarted && !isDistancePastThreshold)
          return;
        const { point: point3 } = info2;
        const { timestamp: timestamp2 } = frameData;
        this.history.push({ ...point3, timestamp: timestamp2 });
        const { onStart, onMove } = this.handlers;
        if (!isPanStarted) {
          onStart && onStart(this.lastMoveEvent, info2);
          this.startEvent = this.lastMoveEvent;
        }
        onMove && onMove(this.lastMoveEvent, info2);
      };
      this.handlePointerMove = (event2, info2) => {
        this.lastMoveEvent = event2;
        this.lastRawMoveEventInfo = info2;
        this.lastMoveEventInfo = transformPoint(info2, this.transformPagePoint);
        frame.update(this.updatePoint, true);
      };
      this.handlePointerUp = (event2, info2) => {
        this.end();
        const { onEnd, onSessionEnd, resumeAnimation } = this.handlers;
        if (this.dragSnapToOrigin || !this.startEvent) {
          resumeAnimation && resumeAnimation();
        }
        if (!(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const panInfo = getPanInfo(event2.type === "pointercancel" ? this.lastMoveEventInfo : transformPoint(info2, this.transformPagePoint), this.history);
        if (this.startEvent && onEnd) {
          onEnd(event2, panInfo);
        }
        onSessionEnd && onSessionEnd(event2, panInfo);
      };
      if (!isPrimaryPointer(event))
        return;
      this.dragSnapToOrigin = dragSnapToOrigin;
      this.handlers = handlers;
      this.transformPagePoint = transformPagePoint;
      this.distanceThreshold = distanceThreshold;
      this.contextWindow = contextWindow || window;
      const info = extractEventInfo(event);
      const initialInfo = transformPoint(info, this.transformPagePoint);
      const { point: point2 } = initialInfo;
      const { timestamp } = frameData;
      this.history = [{ ...point2, timestamp }];
      const { onSessionStart } = handlers;
      onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
      this.removeListeners = pipe(addPointerEvent(this.contextWindow, "pointermove", this.handlePointerMove), addPointerEvent(this.contextWindow, "pointerup", this.handlePointerUp), addPointerEvent(this.contextWindow, "pointercancel", this.handlePointerUp));
      if (element) {
        this.startScrollTracking(element);
      }
    }
    /**
     * Start tracking scroll on ancestors and window.
     */
    startScrollTracking(element) {
      let current = element.parentElement;
      while (current) {
        const style = getComputedStyle(current);
        if (overflowStyles.has(style.overflowX) || overflowStyles.has(style.overflowY)) {
          this.scrollPositions.set(current, {
            x: current.scrollLeft,
            y: current.scrollTop
          });
        }
        current = current.parentElement;
      }
      this.scrollPositions.set(window, {
        x: window.scrollX,
        y: window.scrollY
      });
      window.addEventListener("scroll", this.onElementScroll, {
        capture: true
      });
      window.addEventListener("scroll", this.onWindowScroll);
      this.removeScrollListeners = () => {
        window.removeEventListener("scroll", this.onElementScroll, {
          capture: true
        });
        window.removeEventListener("scroll", this.onWindowScroll);
      };
    }
    /**
     * Handle scroll compensation during drag.
     *
     * For element scroll: adjusts history origin since pageX/pageY doesn't change.
     * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
     */
    handleScroll(target) {
      const initial = this.scrollPositions.get(target);
      if (!initial)
        return;
      const isWindow = target === window;
      const current = isWindow ? { x: window.scrollX, y: window.scrollY } : {
        x: target.scrollLeft,
        y: target.scrollTop
      };
      const delta = { x: current.x - initial.x, y: current.y - initial.y };
      if (delta.x === 0 && delta.y === 0)
        return;
      if (isWindow) {
        if (this.lastMoveEventInfo) {
          this.lastMoveEventInfo.point.x += delta.x;
          this.lastMoveEventInfo.point.y += delta.y;
        }
      } else {
        if (this.history.length > 0) {
          this.history[0].x -= delta.x;
          this.history[0].y -= delta.y;
        }
      }
      this.scrollPositions.set(target, current);
      frame.update(this.updatePoint, true);
    }
    updateHandlers(handlers) {
      this.handlers = handlers;
    }
    end() {
      this.removeListeners && this.removeListeners();
      this.removeScrollListeners && this.removeScrollListeners();
      this.scrollPositions.clear();
      cancelFrame(this.updatePoint);
    }
  };
  function transformPoint(info, transformPagePoint) {
    return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
  }
  function subtractPoint(a, b) {
    return { x: a.x - b.x, y: a.y - b.y };
  }
  function getPanInfo({ point: point2 }, history) {
    return {
      point: point2,
      delta: subtractPoint(point2, lastDevicePoint(history)),
      offset: subtractPoint(point2, startDevicePoint(history)),
      velocity: getVelocity(history, 0.1)
    };
  }
  function startDevicePoint(history) {
    return history[0];
  }
  function lastDevicePoint(history) {
    return history[history.length - 1];
  }
  function getVelocity(history, timeDelta) {
    if (history.length < 2) {
      return { x: 0, y: 0 };
    }
    let i = history.length - 1;
    let timestampedPoint = null;
    const lastPoint = lastDevicePoint(history);
    while (i >= 0) {
      timestampedPoint = history[i];
      if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
        break;
      }
      i--;
    }
    if (!timestampedPoint) {
      return { x: 0, y: 0 };
    }
    if (timestampedPoint === history[0] && history.length > 2 && lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta) * 2) {
      timestampedPoint = history[1];
    }
    const time2 = millisecondsToSeconds(lastPoint.timestamp - timestampedPoint.timestamp);
    if (time2 === 0) {
      return { x: 0, y: 0 };
    }
    const currentVelocity = {
      x: (lastPoint.x - timestampedPoint.x) / time2,
      y: (lastPoint.y - timestampedPoint.y) / time2
    };
    if (currentVelocity.x === Infinity) {
      currentVelocity.x = 0;
    }
    if (currentVelocity.y === Infinity) {
      currentVelocity.y = 0;
    }
    return currentVelocity;
  }

  // node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
  function applyConstraints(point2, { min, max }, elastic) {
    if (min !== void 0 && point2 < min) {
      point2 = elastic ? mixNumber(min, point2, elastic.min) : Math.max(point2, min);
    } else if (max !== void 0 && point2 > max) {
      point2 = elastic ? mixNumber(max, point2, elastic.max) : Math.min(point2, max);
    }
    return point2;
  }
  function calcRelativeAxisConstraints(axis, min, max) {
    return {
      min: min !== void 0 ? axis.min + min : void 0,
      max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
    };
  }
  function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
    return {
      x: calcRelativeAxisConstraints(layoutBox.x, left, right),
      y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
    };
  }
  function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
    let min = constraintsAxis.min - layoutAxis.min;
    let max = constraintsAxis.max - layoutAxis.max;
    if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
      [min, max] = [max, min];
    }
    return { min, max };
  }
  function calcViewportConstraints(layoutBox, constraintsBox) {
    return {
      x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
      y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
    };
  }
  function calcOrigin(source, target) {
    let origin = 0.5;
    const sourceLength = calcLength(source);
    const targetLength = calcLength(target);
    if (targetLength > sourceLength) {
      origin = progress(target.min, target.max - sourceLength, source.min);
    } else if (sourceLength > targetLength) {
      origin = progress(source.min, source.max - targetLength, target.min);
    }
    return clamp(0, 1, origin);
  }
  function rebaseAxisConstraints(layout2, constraints) {
    const relativeConstraints = {};
    if (constraints.min !== void 0) {
      relativeConstraints.min = constraints.min - layout2.min;
    }
    if (constraints.max !== void 0) {
      relativeConstraints.max = constraints.max - layout2.min;
    }
    return relativeConstraints;
  }
  var defaultElastic = 0.35;
  function resolveDragElastic(dragElastic = defaultElastic) {
    if (dragElastic === false) {
      dragElastic = 0;
    } else if (dragElastic === true) {
      dragElastic = defaultElastic;
    }
    return {
      x: resolveAxisElastic(dragElastic, "left", "right"),
      y: resolveAxisElastic(dragElastic, "top", "bottom")
    };
  }
  function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
    return {
      min: resolvePointElastic(dragElastic, minLabel),
      max: resolvePointElastic(dragElastic, maxLabel)
    };
  }
  function resolvePointElastic(dragElastic, label) {
    return typeof dragElastic === "number" ? dragElastic : dragElastic[label] || 0;
  }

  // node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
  var elementDragControls = /* @__PURE__ */ new WeakMap();
  var VisualElementDragControls = class {
    constructor(visualElement) {
      this.openDragLock = null;
      this.isDragging = false;
      this.currentDirection = null;
      this.originPoint = { x: 0, y: 0 };
      this.constraints = false;
      this.hasMutatedConstraints = false;
      this.elastic = createBox();
      this.latestPointerEvent = null;
      this.latestPanInfo = null;
      this.visualElement = visualElement;
    }
    start(originEvent, { snapToCursor = false, distanceThreshold } = {}) {
      const { presenceContext } = this.visualElement;
      if (presenceContext && presenceContext.isPresent === false)
        return;
      const onSessionStart = (event) => {
        if (snapToCursor) {
          this.snapToCursor(extractEventInfo(event).point);
        }
        this.stopAnimation();
      };
      const onStart = (event, info) => {
        const { drag: drag2, dragPropagation, onDragStart } = this.getProps();
        if (drag2 && !dragPropagation) {
          if (this.openDragLock)
            this.openDragLock();
          this.openDragLock = setDragLock(drag2);
          if (!this.openDragLock)
            return;
        }
        this.latestPointerEvent = event;
        this.latestPanInfo = info;
        this.isDragging = true;
        this.currentDirection = null;
        this.resolveConstraints();
        if (this.visualElement.projection) {
          this.visualElement.projection.isAnimationBlocked = true;
          this.visualElement.projection.target = void 0;
        }
        eachAxis((axis) => {
          let current = this.getAxisMotionValue(axis).get() || 0;
          if (percent.test(current)) {
            const { projection } = this.visualElement;
            if (projection && projection.layout) {
              const measuredAxis = projection.layout.layoutBox[axis];
              if (measuredAxis) {
                const length = calcLength(measuredAxis);
                current = length * (parseFloat(current) / 100);
              }
            }
          }
          this.originPoint[axis] = current;
        });
        if (onDragStart) {
          frame.update(() => onDragStart(event, info), false, true);
        }
        addValueToWillChange(this.visualElement, "transform");
        const { animationState } = this.visualElement;
        animationState && animationState.setActive("whileDrag", true);
      };
      const onMove = (event, info) => {
        this.latestPointerEvent = event;
        this.latestPanInfo = info;
        const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
        if (!dragPropagation && !this.openDragLock)
          return;
        const { offset } = info;
        if (dragDirectionLock && this.currentDirection === null) {
          this.currentDirection = getCurrentDirection(offset);
          if (this.currentDirection !== null) {
            onDirectionLock && onDirectionLock(this.currentDirection);
          }
          return;
        }
        this.updateAxis("x", info.point, offset);
        this.updateAxis("y", info.point, offset);
        this.visualElement.render();
        if (onDrag) {
          frame.update(() => onDrag(event, info), false, true);
        }
      };
      const onSessionEnd = (event, info) => {
        this.latestPointerEvent = event;
        this.latestPanInfo = info;
        this.stop(event, info);
        this.latestPointerEvent = null;
        this.latestPanInfo = null;
      };
      const resumeAnimation = () => {
        const { dragSnapToOrigin: snap } = this.getProps();
        if (snap || this.constraints) {
          this.startAnimation({ x: 0, y: 0 });
        }
      };
      const { dragSnapToOrigin } = this.getProps();
      this.panSession = new PanSession(originEvent, {
        onSessionStart,
        onStart,
        onMove,
        onSessionEnd,
        resumeAnimation
      }, {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin,
        distanceThreshold,
        contextWindow: getContextWindow(this.visualElement),
        element: this.visualElement.current
      });
    }
    /**
     * @internal
     */
    stop(event, panInfo) {
      const finalEvent = event || this.latestPointerEvent;
      const finalPanInfo = panInfo || this.latestPanInfo;
      const isDragging2 = this.isDragging;
      this.cancel();
      if (!isDragging2 || !finalPanInfo || !finalEvent)
        return;
      const { velocity } = finalPanInfo;
      this.startAnimation(velocity);
      const { onDragEnd } = this.getProps();
      if (onDragEnd) {
        frame.postRender(() => onDragEnd(finalEvent, finalPanInfo));
      }
    }
    /**
     * @internal
     */
    cancel() {
      this.isDragging = false;
      const { projection, animationState } = this.visualElement;
      if (projection) {
        projection.isAnimationBlocked = false;
      }
      this.endPanSession();
      const { dragPropagation } = this.getProps();
      if (!dragPropagation && this.openDragLock) {
        this.openDragLock();
        this.openDragLock = null;
      }
      animationState && animationState.setActive("whileDrag", false);
    }
    /**
     * Clean up the pan session without modifying other drag state.
     * This is used during unmount to ensure event listeners are removed
     * without affecting projection animations or drag locks.
     * @internal
     */
    endPanSession() {
      this.panSession && this.panSession.end();
      this.panSession = void 0;
    }
    updateAxis(axis, _point, offset) {
      const { drag: drag2 } = this.getProps();
      if (!offset || !shouldDrag(axis, drag2, this.currentDirection))
        return;
      const axisValue = this.getAxisMotionValue(axis);
      let next = this.originPoint[axis] + offset[axis];
      if (this.constraints && this.constraints[axis]) {
        next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
      }
      axisValue.set(next);
    }
    resolveConstraints() {
      const { dragConstraints, dragElastic } = this.getProps();
      const layout2 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : this.visualElement.projection?.layout;
      const prevConstraints = this.constraints;
      if (dragConstraints && isRefObject(dragConstraints)) {
        if (!this.constraints) {
          this.constraints = this.resolveRefConstraints();
        }
      } else {
        if (dragConstraints && layout2) {
          this.constraints = calcRelativeConstraints(layout2.layoutBox, dragConstraints);
        } else {
          this.constraints = false;
        }
      }
      this.elastic = resolveDragElastic(dragElastic);
      if (prevConstraints !== this.constraints && !isRefObject(dragConstraints) && layout2 && this.constraints && !this.hasMutatedConstraints) {
        eachAxis((axis) => {
          if (this.constraints !== false && this.getAxisMotionValue(axis)) {
            this.constraints[axis] = rebaseAxisConstraints(layout2.layoutBox[axis], this.constraints[axis]);
          }
        });
      }
    }
    resolveRefConstraints() {
      const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
      if (!constraints || !isRefObject(constraints))
        return false;
      const constraintsElement = constraints.current;
      invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
      const { projection } = this.visualElement;
      if (!projection || !projection.layout)
        return false;
      const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
      let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
      if (onMeasureDragConstraints) {
        const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
        this.hasMutatedConstraints = !!userConstraints;
        if (userConstraints) {
          measuredConstraints = convertBoundingBoxToBox(userConstraints);
        }
      }
      return measuredConstraints;
    }
    startAnimation(velocity) {
      const { drag: drag2, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
      const constraints = this.constraints || {};
      const momentumAnimations = eachAxis((axis) => {
        if (!shouldDrag(axis, drag2, this.currentDirection)) {
          return;
        }
        let transition = constraints && constraints[axis] || {};
        if (dragSnapToOrigin === true || dragSnapToOrigin === axis)
          transition = { min: 0, max: 0 };
        const bounceStiffness = dragElastic ? 200 : 1e6;
        const bounceDamping = dragElastic ? 40 : 1e7;
        const inertia2 = {
          type: "inertia",
          velocity: dragMomentum ? velocity[axis] : 0,
          bounceStiffness,
          bounceDamping,
          timeConstant: 750,
          restDelta: 1,
          restSpeed: 10,
          ...dragTransition,
          ...transition
        };
        return this.startAxisValueAnimation(axis, inertia2);
      });
      return Promise.all(momentumAnimations).then(onDragTransitionEnd);
    }
    startAxisValueAnimation(axis, transition) {
      const axisValue = this.getAxisMotionValue(axis);
      addValueToWillChange(this.visualElement, axis);
      return axisValue.start(animateMotionValue(axis, axisValue, 0, transition, this.visualElement, false));
    }
    stopAnimation() {
      eachAxis((axis) => this.getAxisMotionValue(axis).stop());
    }
    /**
     * Drag works differently depending on which props are provided.
     *
     * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
     * - Otherwise, we apply the delta to the x/y motion values.
     */
    getAxisMotionValue(axis) {
      const dragKey = `_drag${axis.toUpperCase()}`;
      const props = this.visualElement.getProps();
      const externalMotionValue = props[dragKey];
      return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (props.initial ? props.initial[axis] : void 0) || 0);
    }
    snapToCursor(point2) {
      eachAxis((axis) => {
        const { drag: drag2 } = this.getProps();
        if (!shouldDrag(axis, drag2, this.currentDirection))
          return;
        const { projection } = this.visualElement;
        const axisValue = this.getAxisMotionValue(axis);
        if (projection && projection.layout) {
          const { min, max } = projection.layout.layoutBox[axis];
          const current = axisValue.get() || 0;
          axisValue.set(point2[axis] - mixNumber(min, max, 0.5) + current);
        }
      });
    }
    /**
     * When the viewport resizes we want to check if the measured constraints
     * have changed and, if so, reposition the element within those new constraints
     * relative to where it was before the resize.
     */
    scalePositionWithinConstraints() {
      if (!this.visualElement.current)
        return;
      const { drag: drag2, dragConstraints } = this.getProps();
      const { projection } = this.visualElement;
      if (!isRefObject(dragConstraints) || !projection || !this.constraints)
        return;
      this.stopAnimation();
      const boxProgress = { x: 0, y: 0 };
      eachAxis((axis) => {
        const axisValue = this.getAxisMotionValue(axis);
        if (axisValue && this.constraints !== false) {
          const latest = axisValue.get();
          boxProgress[axis] = calcOrigin({ min: latest, max: latest }, this.constraints[axis]);
        }
      });
      const { transformTemplate } = this.visualElement.getProps();
      this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
      projection.root && projection.root.updateScroll();
      projection.updateLayout();
      this.constraints = false;
      this.resolveConstraints();
      eachAxis((axis) => {
        if (!shouldDrag(axis, drag2, null))
          return;
        const axisValue = this.getAxisMotionValue(axis);
        const { min, max } = this.constraints[axis];
        axisValue.set(mixNumber(min, max, boxProgress[axis]));
      });
      this.visualElement.render();
    }
    addListeners() {
      if (!this.visualElement.current)
        return;
      elementDragControls.set(this.visualElement, this);
      const element = this.visualElement.current;
      const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
        const { drag: drag2, dragListener = true } = this.getProps();
        const target = event.target;
        const isClickingTextInputChild = target !== element && isElementTextInput(target);
        if (drag2 && dragListener && !isClickingTextInputChild) {
          this.start(event);
        }
      });
      let stopResizeObservers;
      const measureDragConstraints = () => {
        const { dragConstraints } = this.getProps();
        if (isRefObject(dragConstraints) && dragConstraints.current) {
          this.constraints = this.resolveRefConstraints();
          if (!stopResizeObservers) {
            stopResizeObservers = startResizeObservers(element, dragConstraints.current, () => this.scalePositionWithinConstraints());
          }
        }
      };
      const { projection } = this.visualElement;
      const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
      if (projection && !projection.layout) {
        projection.root && projection.root.updateScroll();
        projection.updateLayout();
      }
      frame.read(measureDragConstraints);
      const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
      const stopLayoutUpdateListener = projection.addEventListener("didUpdate", (({ delta, hasLayoutChanged }) => {
        if (this.isDragging && hasLayoutChanged) {
          eachAxis((axis) => {
            const motionValue2 = this.getAxisMotionValue(axis);
            if (!motionValue2)
              return;
            this.originPoint[axis] += delta[axis].translate;
            motionValue2.set(motionValue2.get() + delta[axis].translate);
          });
          this.visualElement.render();
        }
      }));
      return () => {
        stopResizeListener();
        stopPointerListener();
        stopMeasureLayoutListener();
        stopLayoutUpdateListener && stopLayoutUpdateListener();
        stopResizeObservers && stopResizeObservers();
      };
    }
    getProps() {
      const props = this.visualElement.getProps();
      const { drag: drag2 = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true } = props;
      return {
        ...props,
        drag: drag2,
        dragDirectionLock,
        dragPropagation,
        dragConstraints,
        dragElastic,
        dragMomentum
      };
    }
  };
  function skipFirstCall(callback) {
    let isFirst = true;
    return () => {
      if (isFirst) {
        isFirst = false;
        return;
      }
      callback();
    };
  }
  function startResizeObservers(element, constraintsElement, onResize) {
    const stopElement = resize(element, skipFirstCall(onResize));
    const stopContainer = resize(constraintsElement, skipFirstCall(onResize));
    return () => {
      stopElement();
      stopContainer();
    };
  }
  function shouldDrag(direction, drag2, currentDirection) {
    return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
  }
  function getCurrentDirection(offset, lockThreshold = 10) {
    let direction = null;
    if (Math.abs(offset.y) > lockThreshold) {
      direction = "y";
    } else if (Math.abs(offset.x) > lockThreshold) {
      direction = "x";
    }
    return direction;
  }

  // node_modules/framer-motion/dist/es/gestures/drag/index.mjs
  var DragGesture = class extends Feature {
    constructor(node) {
      super(node);
      this.removeGroupControls = noop;
      this.removeListeners = noop;
      this.controls = new VisualElementDragControls(node);
    }
    mount() {
      const { dragControls } = this.node.getProps();
      if (dragControls) {
        this.removeGroupControls = dragControls.subscribe(this.controls);
      }
      this.removeListeners = this.controls.addListeners() || noop;
    }
    update() {
      const { dragControls } = this.node.getProps();
      const { dragControls: prevDragControls } = this.node.prevProps || {};
      if (dragControls !== prevDragControls) {
        this.removeGroupControls();
        if (dragControls) {
          this.removeGroupControls = dragControls.subscribe(this.controls);
        }
      }
    }
    unmount() {
      this.removeGroupControls();
      this.removeListeners();
      if (!this.controls.isDragging) {
        this.controls.endPanSession();
      }
    }
  };

  // node_modules/framer-motion/dist/es/gestures/pan/index.mjs
  var asyncHandler = (handler) => (event, info) => {
    if (handler) {
      frame.update(() => handler(event, info), false, true);
    }
  };
  var PanGesture = class extends Feature {
    constructor() {
      super(...arguments);
      this.removePointerDownListener = noop;
    }
    onPointerDown(pointerDownEvent) {
      this.session = new PanSession(pointerDownEvent, this.createPanHandlers(), {
        transformPagePoint: this.node.getTransformPagePoint(),
        contextWindow: getContextWindow(this.node)
      });
    }
    createPanHandlers() {
      const { onPanSessionStart, onPanStart, onPan, onPanEnd } = this.node.getProps();
      return {
        onSessionStart: asyncHandler(onPanSessionStart),
        onStart: asyncHandler(onPanStart),
        onMove: asyncHandler(onPan),
        onEnd: (event, info) => {
          delete this.session;
          if (onPanEnd) {
            frame.postRender(() => onPanEnd(event, info));
          }
        }
      };
    }
    mount() {
      this.removePointerDownListener = addPointerEvent(this.node.current, "pointerdown", (event) => this.onPointerDown(event));
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener();
      this.session && this.session.end();
    }
  };

  // node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
  var import_jsx_runtime5 = __toESM(require_react_shim(), 1);
  var import_react23 = __toESM(require_react_shim(), 1);
  var hasTakenAnySnapshot = false;
  var MeasureLayoutWithContext = class extends import_react23.Component {
    /**
     * This only mounts projection nodes for components that
     * need measuring, we might want to do it for all components
     * in order to incorporate transforms
     */
    componentDidMount() {
      const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
      const { projection } = visualElement;
      if (projection) {
        if (layoutGroup.group)
          layoutGroup.group.add(projection);
        if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
          switchLayoutGroup.register(projection);
        }
        if (hasTakenAnySnapshot) {
          projection.root.didUpdate();
        }
        projection.addEventListener("animationComplete", () => {
          this.safeToRemove();
        });
        projection.setOptions({
          ...projection.options,
          layoutDependency: this.props.layoutDependency,
          onExitComplete: () => this.safeToRemove()
        });
      }
      globalProjectionState.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(prevProps) {
      const { layoutDependency, visualElement, drag: drag2, isPresent } = this.props;
      const { projection } = visualElement;
      if (!projection)
        return null;
      projection.isPresent = isPresent;
      if (prevProps.layoutDependency !== layoutDependency) {
        projection.setOptions({
          ...projection.options,
          layoutDependency
        });
      }
      hasTakenAnySnapshot = true;
      if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0 || prevProps.isPresent !== isPresent) {
        projection.willUpdate();
      } else {
        this.safeToRemove();
      }
      if (prevProps.isPresent !== isPresent) {
        if (isPresent) {
          projection.promote();
        } else if (!projection.relegate()) {
          frame.postRender(() => {
            const stack = projection.getStack();
            if (!stack || !stack.members.length) {
              this.safeToRemove();
            }
          });
        }
      }
      return null;
    }
    componentDidUpdate() {
      const { visualElement, layoutAnchor } = this.props;
      const { projection } = visualElement;
      if (projection) {
        projection.options.layoutAnchor = layoutAnchor;
        projection.root.didUpdate();
        microtask.postRender(() => {
          if (!projection.currentAnimation && projection.isLead()) {
            this.safeToRemove();
          }
        });
      }
    }
    componentWillUnmount() {
      const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
      const { projection } = visualElement;
      hasTakenAnySnapshot = true;
      if (projection) {
        projection.scheduleCheckAfterUnmount();
        if (layoutGroup && layoutGroup.group)
          layoutGroup.group.remove(projection);
        if (promoteContext && promoteContext.deregister)
          promoteContext.deregister(projection);
      }
    }
    safeToRemove() {
      const { safeToRemove } = this.props;
      safeToRemove && safeToRemove();
    }
    render() {
      return null;
    }
  };
  function MeasureLayout(props) {
    const [isPresent, safeToRemove] = usePresence();
    const layoutGroup = (0, import_react23.useContext)(LayoutGroupContext);
    return (0, import_jsx_runtime5.jsx)(MeasureLayoutWithContext, { ...props, layoutGroup, switchLayoutGroup: (0, import_react23.useContext)(SwitchLayoutGroupContext), isPresent, safeToRemove });
  }

  // node_modules/framer-motion/dist/es/motion/features/drag.mjs
  var drag = {
    pan: {
      Feature: PanGesture
    },
    drag: {
      Feature: DragGesture,
      ProjectionNode: HTMLProjectionNode,
      MeasureLayout
    }
  };

  // node_modules/framer-motion/dist/es/gestures/hover.mjs
  function handleHoverEvent(node, event, lifecycle) {
    const { props } = node;
    if (node.animationState && props.whileHover) {
      node.animationState.setActive("whileHover", lifecycle === "Start");
    }
    const eventName = "onHover" + lifecycle;
    const callback = props[eventName];
    if (callback) {
      frame.postRender(() => callback(event, extractEventInfo(event)));
    }
  }
  var HoverGesture = class extends Feature {
    mount() {
      const { current } = this.node;
      if (!current)
        return;
      this.unmount = hover(current, (_element, startEvent) => {
        handleHoverEvent(this.node, startEvent, "Start");
        return (endEvent) => handleHoverEvent(this.node, endEvent, "End");
      });
    }
    unmount() {
    }
  };

  // node_modules/framer-motion/dist/es/gestures/focus.mjs
  var FocusGesture = class extends Feature {
    constructor() {
      super(...arguments);
      this.isActive = false;
    }
    onFocus() {
      let isFocusVisible = false;
      try {
        isFocusVisible = this.node.current.matches(":focus-visible");
      } catch (e) {
        isFocusVisible = true;
      }
      if (!isFocusVisible || !this.node.animationState)
        return;
      this.node.animationState.setActive("whileFocus", true);
      this.isActive = true;
    }
    onBlur() {
      if (!this.isActive || !this.node.animationState)
        return;
      this.node.animationState.setActive("whileFocus", false);
      this.isActive = false;
    }
    mount() {
      this.unmount = pipe(addDomEvent(this.node.current, "focus", () => this.onFocus()), addDomEvent(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() {
    }
  };

  // node_modules/framer-motion/dist/es/gestures/press.mjs
  function handlePressEvent(node, event, lifecycle) {
    const { props } = node;
    if (node.current instanceof HTMLButtonElement && node.current.disabled) {
      return;
    }
    if (node.animationState && props.whileTap) {
      node.animationState.setActive("whileTap", lifecycle === "Start");
    }
    const eventName = "onTap" + (lifecycle === "End" ? "" : lifecycle);
    const callback = props[eventName];
    if (callback) {
      frame.postRender(() => callback(event, extractEventInfo(event)));
    }
  }
  var PressGesture = class extends Feature {
    mount() {
      const { current } = this.node;
      if (!current)
        return;
      const { globalTapTarget, propagate } = this.node.props;
      this.unmount = press(current, (_element, startEvent) => {
        handlePressEvent(this.node, startEvent, "Start");
        return (endEvent, { success }) => handlePressEvent(this.node, endEvent, success ? "End" : "Cancel");
      }, {
        useGlobalTarget: globalTapTarget,
        stopPropagation: propagate?.tap === false
      });
    }
    unmount() {
    }
  };

  // node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
  var observerCallbacks = /* @__PURE__ */ new WeakMap();
  var observers = /* @__PURE__ */ new WeakMap();
  var fireObserverCallback = (entry) => {
    const callback = observerCallbacks.get(entry.target);
    callback && callback(entry);
  };
  var fireAllObserverCallbacks = (entries) => {
    entries.forEach(fireObserverCallback);
  };
  function initIntersectionObserver({ root, ...options }) {
    const lookupRoot = root || document;
    if (!observers.has(lookupRoot)) {
      observers.set(lookupRoot, {});
    }
    const rootObservers = observers.get(lookupRoot);
    const key = JSON.stringify(options);
    if (!rootObservers[key]) {
      rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, { root, ...options });
    }
    return rootObservers[key];
  }
  function observeIntersection(element, options, callback) {
    const rootInteresectionObserver = initIntersectionObserver(options);
    observerCallbacks.set(element, callback);
    rootInteresectionObserver.observe(element);
    return () => {
      observerCallbacks.delete(element);
      rootInteresectionObserver.unobserve(element);
    };
  }

  // node_modules/framer-motion/dist/es/motion/features/viewport/index.mjs
  var thresholdNames = {
    some: 0,
    all: 1
  };
  var InViewFeature = class extends Feature {
    constructor() {
      super(...arguments);
      this.hasEnteredView = false;
      this.isInView = false;
    }
    startObserver() {
      this.stopObserver?.();
      const { viewport = {} } = this.node.getProps();
      const { root, margin: rootMargin, amount = "some", once } = viewport;
      const options = {
        root: root ? root.current : void 0,
        rootMargin,
        threshold: typeof amount === "number" ? amount : thresholdNames[amount]
      };
      const onIntersectionUpdate = (entry) => {
        const { isIntersecting } = entry;
        if (this.isInView === isIntersecting)
          return;
        this.isInView = isIntersecting;
        if (once && !isIntersecting && this.hasEnteredView) {
          return;
        } else if (isIntersecting) {
          this.hasEnteredView = true;
        }
        if (this.node.animationState) {
          this.node.animationState.setActive("whileInView", isIntersecting);
        }
        const { onViewportEnter, onViewportLeave } = this.node.getProps();
        const callback = isIntersecting ? onViewportEnter : onViewportLeave;
        callback && callback(entry);
      };
      this.stopObserver = observeIntersection(this.node.current, options, onIntersectionUpdate);
    }
    mount() {
      this.startObserver();
    }
    update() {
      if (typeof IntersectionObserver === "undefined")
        return;
      const { props, prevProps } = this.node;
      const hasOptionsChanged = ["amount", "margin", "root"].some(hasViewportOptionChanged(props, prevProps));
      if (hasOptionsChanged) {
        this.startObserver();
      }
    }
    unmount() {
      this.stopObserver?.();
      this.hasEnteredView = false;
      this.isInView = false;
    }
  };
  function hasViewportOptionChanged({ viewport = {} }, { viewport: prevViewport = {} } = {}) {
    return (name) => viewport[name] !== prevViewport[name];
  }

  // node_modules/framer-motion/dist/es/motion/features/gestures.mjs
  var gestureAnimations = {
    inView: {
      Feature: InViewFeature
    },
    tap: {
      Feature: PressGesture
    },
    focus: {
      Feature: FocusGesture
    },
    hover: {
      Feature: HoverGesture
    }
  };

  // node_modules/framer-motion/dist/es/motion/features/layout.mjs
  var layout = {
    layout: {
      ProjectionNode: HTMLProjectionNode,
      MeasureLayout
    }
  };

  // node_modules/framer-motion/dist/es/render/components/motion/feature-bundle.mjs
  var featureBundle = {
    ...animations,
    ...gestureAnimations,
    ...drag,
    ...layout
  };

  // node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs
  var motion = /* @__PURE__ */ createMotionProxy(featureBundle, createDomVisualElement);

  // node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs
  var import_react24 = __toESM(require_react_shim(), 1);
  function useMotionValueEvent(value, event, callback) {
    (0, import_react24.useInsertionEffect)(() => value.on(event, callback), [value, event, callback]);
  }

  // node_modules/framer-motion/dist/es/value/use-scroll.mjs
  var import_react25 = __toESM(require_react_shim(), 1);

  // node_modules/framer-motion/dist/es/render/dom/scroll/utils/can-use-native-timeline.mjs
  function canUseNativeTimeline(target) {
    if (typeof window === "undefined")
      return false;
    return target ? supportsViewTimeline() : supportsScrollTimeline();
  }

  // node_modules/framer-motion/dist/es/render/dom/scroll/info.mjs
  var maxElapsed2 = 50;
  var createAxisInfo = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0
  });
  var createScrollInfo = () => ({
    time: 0,
    x: createAxisInfo(),
    y: createAxisInfo()
  });
  var keys = {
    x: {
      length: "Width",
      position: "Left"
    },
    y: {
      length: "Height",
      position: "Top"
    }
  };
  function updateAxisInfo(element, axisName, info, time2) {
    const axis = info[axisName];
    const { length, position } = keys[axisName];
    const prev = axis.current;
    const prevTime = info.time;
    axis.current = Math.abs(element[`scroll${position}`]);
    axis.scrollLength = element[`scroll${length}`] - element[`client${length}`];
    axis.offset.length = 0;
    axis.offset[0] = 0;
    axis.offset[1] = axis.scrollLength;
    axis.progress = progress(0, axis.scrollLength, axis.current);
    const elapsed = time2 - prevTime;
    axis.velocity = elapsed > maxElapsed2 ? 0 : velocityPerSecond(axis.current - prev, elapsed);
  }
  function updateScrollInfo(element, info, time2) {
    updateAxisInfo(element, "x", info, time2);
    updateAxisInfo(element, "y", info, time2);
    info.time = time2;
  }

  // node_modules/framer-motion/dist/es/render/dom/scroll/offsets/inset.mjs
  function calcInset(element, container) {
    const inset = { x: 0, y: 0 };
    let current = element;
    while (current && current !== container) {
      if (isHTMLElement(current)) {
        inset.x += current.offsetLeft;
        inset.y += current.offsetTop;
        current = current.offsetParent;
      } else if (current.tagName === "svg") {
        const svgBoundingBox = current.getBoundingClientRect();
        current = current.parentElement;
        const parentBoundingBox = current.getBoundingClientRect();
        inset.x += svgBoundingBox.left - parentBoundingBox.left;
        inset.y += svgBoundingBox.top - parentBoundingBox.top;
      } else if (current instanceof SVGGraphicsElement) {
        const { x, y } = current.getBBox();
        inset.x += x;
        inset.y += y;
        let svg = null;
        let parent = current.parentNode;
        while (!svg) {
          if (parent.tagName === "svg") {
            svg = parent;
          }
          parent = current.parentNode;
        }
        current = svg;
      } else {
        break;
      }
    }
    return inset;
  }

  // node_modules/framer-motion/dist/es/render/dom/scroll/offsets/edge.mjs
  var namedEdges = {
    start: 0,
    center: 0.5,
    end: 1
  };
  function resolveEdge(edge, length, inset = 0) {
    let delta = 0;
    if (edge in namedEdges) {
      edge = namedEdges[edge];
    }
    if (typeof edge === "string") {
      const asNumber3 = parseFloat(edge);
      if (edge.endsWith("px")) {
        delta = asNumber3;
      } else if (edge.endsWith("%")) {
        edge = asNumber3 / 100;
      } else if (edge.endsWith("vw")) {
        delta = asNumber3 / 100 * document.documentElement.clientWidth;
      } else if (edge.endsWith("vh")) {
        delta = asNumber3 / 100 * document.documentElement.clientHeight;
      } else {
        edge = asNumber3;
      }
    }
    if (typeof edge === "number") {
      delta = length * edge;
    }
    return inset + delta;
  }

  // node_modules/framer-motion/dist/es/render/dom/scroll/offsets/offset.mjs
  var defaultOffset2 = [0, 0];
  function resolveOffset(offset, containerLength, targetLength, targetInset) {
    let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset2;
    let targetPoint = 0;
    let containerPoint = 0;
    if (typeof offset === "number") {
      offsetDefinition = [offset, offset];
    } else if (typeof offset === "string") {
      offset = offset.trim();
      if (offset.includes(" ")) {
        offsetDefinition = offset.split(" ");
      } else {
        offsetDefinition = [offset, namedEdges[offset] ? offset : `0`];
      }
    }
    targetPoint = resolveEdge(offsetDefinition[0], targetLength, targetInset);
    containerPoint = resolveEdge(offsetDefinition[1], containerLength);
    return targetPoint - containerPoint;
  }

  // node_modules/framer-motion/dist/es/render/dom/scroll/offsets/presets.mjs
  var ScrollOffset = {
    Enter: [
      [0, 1],
      [1, 1]
    ],
    Exit: [
      [0, 0],
      [1, 0]
    ],
    Any: [
      [1, 0],
      [0, 1]
    ],
    All: [
      [0, 0],
      [1, 1]
    ]
  };

  // node_modules/framer-motion/dist/es/render/dom/scroll/offsets/index.mjs
  var point = { x: 0, y: 0 };
  function getTargetSize(target) {
    return "getBBox" in target && target.tagName !== "svg" ? target.getBBox() : { width: target.clientWidth, height: target.clientHeight };
  }
  function resolveOffsets(container, info, options) {
    const { offset: offsetDefinition = ScrollOffset.All } = options;
    const { target = container, axis = "y" } = options;
    const lengthLabel = axis === "y" ? "height" : "width";
    const inset = target !== container ? calcInset(target, container) : point;
    const targetSize = target === container ? { width: container.scrollWidth, height: container.scrollHeight } : getTargetSize(target);
    const containerSize = {
      width: container.clientWidth,
      height: container.clientHeight
    };
    info[axis].offset.length = 0;
    let hasChanged = !info[axis].interpolate;
    const numOffsets = offsetDefinition.length;
    for (let i = 0; i < numOffsets; i++) {
      const offset = resolveOffset(offsetDefinition[i], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
      if (!hasChanged && offset !== info[axis].interpolatorOffsets[i]) {
        hasChanged = true;
      }
      info[axis].offset[i] = offset;
    }
    if (hasChanged) {
      info[axis].interpolate = interpolate(info[axis].offset, defaultOffset(offsetDefinition), { clamp: false });
      info[axis].interpolatorOffsets = [...info[axis].offset];
    }
    info[axis].progress = clamp(0, 1, info[axis].interpolate(info[axis].current));
  }

  // node_modules/framer-motion/dist/es/render/dom/scroll/on-scroll-handler.mjs
  function measure(container, target = container, info) {
    info.x.targetOffset = 0;
    info.y.targetOffset = 0;
    if (target !== container) {
      let node = target;
      while (node && node !== container) {
        info.x.targetOffset += node.offsetLeft;
        info.y.targetOffset += node.offsetTop;
        node = node.offsetParent;
      }
    }
    info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
    info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
    info.x.containerLength = container.clientWidth;
    info.y.containerLength = container.clientHeight;
    if (true) {
      if (container && target && target !== container) {
        warnOnce(getComputedStyle(container).position !== "static", "Please ensure that the container has a non-static position, like 'relative', 'fixed', or 'absolute' to ensure scroll offset is calculated correctly.");
      }
    }
  }
  function createOnScrollHandler(element, onScroll, info, options = {}) {
    return {
      measure: (time2) => {
        measure(element, options.target, info);
        updateScrollInfo(element, info, time2);
        if (options.offset || options.target) {
          resolveOffsets(element, info, options);
        }
      },
      notify: () => onScroll(info)
    };
  }

  // node_modules/framer-motion/dist/es/render/dom/scroll/track.mjs
  var scrollListeners = /* @__PURE__ */ new WeakMap();
  var resizeListeners = /* @__PURE__ */ new WeakMap();
  var onScrollHandlers = /* @__PURE__ */ new WeakMap();
  var scrollSize = /* @__PURE__ */ new WeakMap();
  var dimensionCheckProcesses = /* @__PURE__ */ new WeakMap();
  var getEventTarget = (element) => element === document.scrollingElement ? window : element;
  function scrollInfo(onScroll, { container = document.scrollingElement, trackContentSize = false, ...options } = {}) {
    if (!container)
      return noop;
    let containerHandlers = onScrollHandlers.get(container);
    if (!containerHandlers) {
      containerHandlers = /* @__PURE__ */ new Set();
      onScrollHandlers.set(container, containerHandlers);
    }
    const info = createScrollInfo();
    const containerHandler = createOnScrollHandler(container, onScroll, info, options);
    containerHandlers.add(containerHandler);
    if (!scrollListeners.has(container)) {
      const measureAll = () => {
        for (const handler of containerHandlers) {
          handler.measure(frameData.timestamp);
        }
        frame.preUpdate(notifyAll2);
      };
      const notifyAll2 = () => {
        for (const handler of containerHandlers) {
          handler.notify();
        }
      };
      const listener2 = () => frame.read(measureAll);
      scrollListeners.set(container, listener2);
      const target = getEventTarget(container);
      window.addEventListener("resize", listener2);
      if (container !== document.documentElement) {
        resizeListeners.set(container, resize(container, listener2));
      }
      target.addEventListener("scroll", listener2);
      listener2();
    }
    if (trackContentSize && !dimensionCheckProcesses.has(container)) {
      const listener2 = scrollListeners.get(container);
      const size = {
        width: container.scrollWidth,
        height: container.scrollHeight
      };
      scrollSize.set(container, size);
      const checkScrollDimensions = () => {
        const newWidth = container.scrollWidth;
        const newHeight = container.scrollHeight;
        if (size.width !== newWidth || size.height !== newHeight) {
          listener2();
          size.width = newWidth;
          size.height = newHeight;
        }
      };
      const dimensionCheckProcess = frame.read(checkScrollDimensions, true);
      dimensionCheckProcesses.set(container, dimensionCheckProcess);
    }
    const listener = scrollListeners.get(container);
    frame.read(listener, false, true);
    return () => {
      cancelFrame(listener);
      const currentHandlers = onScrollHandlers.get(container);
      if (!currentHandlers)
        return;
      currentHandlers.delete(containerHandler);
      if (currentHandlers.size)
        return;
      const scrollListener = scrollListeners.get(container);
      scrollListeners.delete(container);
      if (scrollListener) {
        getEventTarget(container).removeEventListener("scroll", scrollListener);
        resizeListeners.get(container)?.();
        window.removeEventListener("resize", scrollListener);
      }
      const dimensionCheckProcess = dimensionCheckProcesses.get(container);
      if (dimensionCheckProcess) {
        cancelFrame(dimensionCheckProcess);
        dimensionCheckProcesses.delete(container);
      }
      scrollSize.delete(container);
    };
  }

  // node_modules/framer-motion/dist/es/render/dom/scroll/utils/offset-to-range.mjs
  var presets = [
    [ScrollOffset.Enter, "entry"],
    [ScrollOffset.Exit, "exit"],
    [ScrollOffset.Any, "cover"],
    [ScrollOffset.All, "contain"]
  ];
  var stringToProgress = {
    start: 0,
    end: 1
  };
  function parseStringOffset(s) {
    const parts = s.trim().split(/\s+/);
    if (parts.length !== 2)
      return void 0;
    const a = stringToProgress[parts[0]];
    const b = stringToProgress[parts[1]];
    if (a === void 0 || b === void 0)
      return void 0;
    return [a, b];
  }
  function normaliseOffset(offset) {
    if (offset.length !== 2)
      return void 0;
    const result = [];
    for (const item of offset) {
      if (Array.isArray(item)) {
        result.push(item);
      } else if (typeof item === "string") {
        const parsed = parseStringOffset(item);
        if (!parsed)
          return void 0;
        result.push(parsed);
      } else {
        return void 0;
      }
    }
    return result;
  }
  function matchesPreset(offset, preset) {
    const normalised = normaliseOffset(offset);
    if (!normalised)
      return false;
    for (let i = 0; i < 2; i++) {
      const o = normalised[i];
      const p = preset[i];
      if (o[0] !== p[0] || o[1] !== p[1])
        return false;
    }
    return true;
  }
  function offsetToViewTimelineRange(offset) {
    if (!offset) {
      return { rangeStart: "contain 0%", rangeEnd: "contain 100%" };
    }
    for (const [preset, name] of presets) {
      if (matchesPreset(offset, preset)) {
        return { rangeStart: `${name} 0%`, rangeEnd: `${name} 100%` };
      }
    }
    return void 0;
  }

  // node_modules/framer-motion/dist/es/render/dom/scroll/utils/get-timeline.mjs
  var timelineCache = /* @__PURE__ */ new Map();
  function scrollTimelineFallback(options) {
    const currentTime = { value: 0 };
    const cancel = scrollInfo((info) => {
      currentTime.value = info[options.axis].progress * 100;
    }, options);
    return { currentTime, cancel };
  }
  function getTimeline({ source, container, ...options }) {
    const { axis } = options;
    if (source)
      container = source;
    let containerCache = timelineCache.get(container);
    if (!containerCache) {
      containerCache = /* @__PURE__ */ new Map();
      timelineCache.set(container, containerCache);
    }
    const targetKey = options.target ?? "self";
    let targetCache = containerCache.get(targetKey);
    if (!targetCache) {
      targetCache = {};
      containerCache.set(targetKey, targetCache);
    }
    const axisKey = axis + (options.offset ?? []).join(",");
    if (!targetCache[axisKey]) {
      if (options.target && canUseNativeTimeline(options.target)) {
        const range = offsetToViewTimelineRange(options.offset);
        if (range) {
          targetCache[axisKey] = new ViewTimeline({
            subject: options.target,
            axis
          });
        } else {
          targetCache[axisKey] = scrollTimelineFallback({
            container,
            ...options
          });
        }
      } else if (canUseNativeTimeline()) {
        targetCache[axisKey] = new ScrollTimeline({
          source: container,
          axis
        });
      } else {
        targetCache[axisKey] = scrollTimelineFallback({
          container,
          ...options
        });
      }
    }
    return targetCache[axisKey];
  }

  // node_modules/framer-motion/dist/es/render/dom/scroll/attach-animation.mjs
  function attachToAnimation(animation, options) {
    const timeline = getTimeline(options);
    const range = options.target ? offsetToViewTimelineRange(options.offset) : void 0;
    const useNative = options.target ? canUseNativeTimeline(options.target) && !!range : canUseNativeTimeline();
    return animation.attachTimeline({
      timeline: useNative ? timeline : void 0,
      ...range && useNative && {
        rangeStart: range.rangeStart,
        rangeEnd: range.rangeEnd
      },
      observe: (valueAnimation) => {
        valueAnimation.pause();
        return observeTimeline((progress2) => {
          valueAnimation.time = valueAnimation.iterationDuration * progress2;
        }, timeline);
      }
    });
  }

  // node_modules/framer-motion/dist/es/render/dom/scroll/attach-function.mjs
  function isOnScrollWithInfo(onScroll) {
    return onScroll.length === 2;
  }
  function attachToFunction(onScroll, options) {
    if (isOnScrollWithInfo(onScroll)) {
      return scrollInfo((info) => {
        onScroll(info[options.axis].progress, info);
      }, options);
    } else {
      return observeTimeline(onScroll, getTimeline(options));
    }
  }

  // node_modules/framer-motion/dist/es/render/dom/scroll/index.mjs
  function scroll(onScroll, { axis = "y", container = document.scrollingElement, ...options } = {}) {
    if (!container)
      return noop;
    const optionsWithDefaults = { axis, container, ...options };
    return typeof onScroll === "function" ? attachToFunction(onScroll, optionsWithDefaults) : attachToAnimation(onScroll, optionsWithDefaults);
  }

  // node_modules/framer-motion/dist/es/value/use-scroll.mjs
  var createScrollMotionValues = () => ({
    scrollX: motionValue(0),
    scrollY: motionValue(0),
    scrollXProgress: motionValue(0),
    scrollYProgress: motionValue(0)
  });
  var isRefPending = (ref) => {
    if (!ref)
      return false;
    return !ref.current;
  };
  function makeAccelerateConfig(axis, options, container, target) {
    return {
      factory: (animation) => scroll(animation, {
        ...options,
        axis,
        container: container?.current || void 0,
        target: target?.current || void 0
      }),
      times: [0, 1],
      keyframes: [0, 1],
      ease: (v) => v,
      duration: 1
    };
  }
  function canAccelerateScroll(target, offset) {
    if (typeof window === "undefined")
      return false;
    return target ? supportsViewTimeline() && !!offsetToViewTimelineRange(offset) : supportsScrollTimeline();
  }
  function useScroll({ container, target, ...options } = {}) {
    const values = useConstant(createScrollMotionValues);
    if (canAccelerateScroll(target, options.offset)) {
      values.scrollXProgress.accelerate = makeAccelerateConfig("x", options, container, target);
      values.scrollYProgress.accelerate = makeAccelerateConfig("y", options, container, target);
    }
    const scrollAnimation = (0, import_react25.useRef)(null);
    const needsStart = (0, import_react25.useRef)(false);
    const start = (0, import_react25.useCallback)(() => {
      scrollAnimation.current = scroll((_progress, { x, y }) => {
        values.scrollX.set(x.current);
        values.scrollXProgress.set(x.progress);
        values.scrollY.set(y.current);
        values.scrollYProgress.set(y.progress);
      }, {
        ...options,
        container: container?.current || void 0,
        target: target?.current || void 0
      });
      return () => {
        scrollAnimation.current?.();
      };
    }, [container, target, JSON.stringify(options.offset)]);
    useIsomorphicLayoutEffect(() => {
      needsStart.current = false;
      if (isRefPending(container) || isRefPending(target)) {
        needsStart.current = true;
        return;
      } else {
        return start();
      }
    }, [start]);
    (0, import_react25.useEffect)(() => {
      if (needsStart.current) {
        invariant(!isRefPending(container), "Container ref is defined but not hydrated", "use-scroll-ref");
        invariant(!isRefPending(target), "Target ref is defined but not hydrated", "use-scroll-ref");
        return start();
      } else {
        return;
      }
    }, [start]);
    return values;
  }

  // node_modules/framer-motion/dist/es/value/use-motion-value.mjs
  var import_react26 = __toESM(require_react_shim(), 1);
  function useMotionValue(initial) {
    const value = useConstant(() => motionValue(initial));
    const { isStatic } = (0, import_react26.useContext)(MotionConfigContext);
    if (isStatic) {
      const [, setLatest] = (0, import_react26.useState)(initial);
      (0, import_react26.useEffect)(() => value.on("change", setLatest), []);
    }
    return value;
  }

  // node_modules/framer-motion/dist/es/value/use-combine-values.mjs
  function useCombineMotionValues(values, combineValues) {
    const value = useMotionValue(combineValues());
    const updateValue = () => value.set(combineValues());
    updateValue();
    useIsomorphicLayoutEffect(() => {
      const scheduleUpdate = () => frame.preRender(updateValue, false, true);
      const subscriptions = values.map((v) => v.on("change", scheduleUpdate));
      return () => {
        subscriptions.forEach((unsubscribe) => unsubscribe());
        cancelFrame(updateValue);
      };
    });
    return value;
  }

  // node_modules/framer-motion/dist/es/value/use-follow-value.mjs
  var import_react27 = __toESM(require_react_shim(), 1);

  // node_modules/framer-motion/dist/es/value/use-computed.mjs
  function useComputed(compute) {
    collectMotionValues.current = [];
    compute();
    const value = useCombineMotionValues(collectMotionValues.current, compute);
    collectMotionValues.current = void 0;
    return value;
  }

  // node_modules/framer-motion/dist/es/value/use-transform.mjs
  function useTransform(input, inputRangeOrTransformer, outputRangeOrMap, options) {
    if (typeof input === "function") {
      return useComputed(input);
    }
    const isOutputMap = outputRangeOrMap !== void 0 && !Array.isArray(outputRangeOrMap) && typeof inputRangeOrTransformer !== "function";
    if (isOutputMap) {
      return useMapTransform(input, inputRangeOrTransformer, outputRangeOrMap, options);
    }
    const outputRange = outputRangeOrMap;
    const transformer = typeof inputRangeOrTransformer === "function" ? inputRangeOrTransformer : transform(inputRangeOrTransformer, outputRange, options);
    const result = Array.isArray(input) ? useListTransform(input, transformer) : useListTransform([input], ([latest]) => transformer(latest));
    const inputAccelerate = !Array.isArray(input) ? input.accelerate : void 0;
    if (inputAccelerate && !inputAccelerate.isTransformed && typeof inputRangeOrTransformer !== "function" && Array.isArray(outputRangeOrMap) && options?.clamp !== false) {
      result.accelerate = {
        ...inputAccelerate,
        times: inputRangeOrTransformer,
        keyframes: outputRangeOrMap,
        isTransformed: true,
        ...options?.ease ? { ease: options.ease } : {}
      };
    }
    return result;
  }
  function useListTransform(values, transformer) {
    const latest = useConstant(() => []);
    return useCombineMotionValues(values, () => {
      latest.length = 0;
      const numValues = values.length;
      for (let i = 0; i < numValues; i++) {
        latest[i] = values[i].get();
      }
      return transformer(latest);
    });
  }
  function useMapTransform(inputValue, inputRange, outputMap, options) {
    const keys2 = useConstant(() => Object.keys(outputMap));
    const output = useConstant(() => ({}));
    for (const key of keys2) {
      output[key] = useTransform(inputValue, inputRange, outputMap[key], options);
    }
    return output;
  }

  // node_modules/framer-motion/dist/es/value/use-follow-value.mjs
  function useFollowValue(source, options = {}) {
    const { isStatic } = (0, import_react27.useContext)(MotionConfigContext);
    const getFromSource = () => isMotionValue(source) ? source.get() : source;
    if (isStatic) {
      return useTransform(getFromSource);
    }
    const value = useMotionValue(getFromSource());
    (0, import_react27.useInsertionEffect)(() => {
      return attachFollow(value, source, options);
    }, [value, JSON.stringify(options)]);
    return value;
  }

  // node_modules/framer-motion/dist/es/value/use-spring.mjs
  function useSpring(source, options = {}) {
    return useFollowValue(source, { type: "spring", ...options });
  }

  // node_modules/framer-motion/dist/es/utils/use-animation-frame.mjs
  var import_react28 = __toESM(require_react_shim(), 1);
  function useAnimationFrame(callback) {
    const initialTimestamp = (0, import_react28.useRef)(0);
    const { isStatic } = (0, import_react28.useContext)(MotionConfigContext);
    (0, import_react28.useEffect)(() => {
      if (isStatic)
        return;
      const provideTimeSinceStart = ({ timestamp, delta }) => {
        if (!initialTimestamp.current)
          initialTimestamp.current = timestamp;
        callback(timestamp - initialTimestamp.current, delta);
      };
      frame.update(provideTimeSinceStart, true);
      return () => cancelFrame(provideTimeSinceStart);
    }, [callback]);
  }

  // node_modules/framer-motion/dist/es/value/use-velocity.mjs
  function useVelocity(value) {
    const velocity = useMotionValue(value.getVelocity());
    const updateVelocity = () => {
      const latest = value.getVelocity();
      velocity.set(latest);
      if (latest)
        frame.update(updateVelocity);
    };
    useMotionValueEvent(value, "change", () => {
      frame.update(updateVelocity, false, true);
    });
    return velocity;
  }

  // node_modules/@iconify/react/dist/iconify.js
  var import_react29 = __toESM(require_react_shim(), 1);
  function getIconsTree(data, names) {
    const icons = data.icons;
    const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
    const resolved = /* @__PURE__ */ Object.create(null);
    function resolve(name) {
      if (icons[name]) return resolved[name] = [];
      if (!(name in resolved)) {
        resolved[name] = null;
        const parent = aliases[name] && aliases[name].parent;
        const value = parent && resolve(parent);
        if (value) resolved[name] = [parent].concat(value);
      }
      return resolved[name];
    }
    Object.keys(icons).concat(Object.keys(aliases)).forEach(resolve);
    return resolved;
  }
  var defaultIconDimensions = Object.freeze({
    left: 0,
    top: 0,
    width: 16,
    height: 16
  });
  var defaultIconTransformations = Object.freeze({
    rotate: 0,
    vFlip: false,
    hFlip: false
  });
  var defaultIconProps = Object.freeze({
    ...defaultIconDimensions,
    ...defaultIconTransformations
  });
  var defaultExtendedIconProps = Object.freeze({
    ...defaultIconProps,
    body: "",
    hidden: false
  });
  function mergeIconTransformations(obj1, obj2) {
    const result = {};
    if (!obj1.hFlip !== !obj2.hFlip) result.hFlip = true;
    if (!obj1.vFlip !== !obj2.vFlip) result.vFlip = true;
    const rotate2 = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
    if (rotate2) result.rotate = rotate2;
    return result;
  }
  function mergeIconData(parent, child) {
    const result = mergeIconTransformations(parent, child);
    for (const key in defaultExtendedIconProps) if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) result[key] = defaultIconTransformations[key];
    } else if (key in child) result[key] = child[key];
    else if (key in parent) result[key] = parent[key];
    return result;
  }
  function internalGetIconData(data, name, tree) {
    const icons = data.icons;
    const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
    let currentProps = {};
    function parse(name$1) {
      currentProps = mergeIconData(icons[name$1] || aliases[name$1], currentProps);
    }
    parse(name);
    tree.forEach(parse);
    return mergeIconData(data, currentProps);
  }
  function parseIconSet(data, callback) {
    const names = [];
    if (typeof data !== "object" || typeof data.icons !== "object") return names;
    if (data.not_found instanceof Array) data.not_found.forEach((name) => {
      callback(name, null);
      names.push(name);
    });
    const tree = getIconsTree(data);
    for (const name in tree) {
      const item = tree[name];
      if (item) {
        callback(name, internalGetIconData(data, name, item));
        names.push(name);
      }
    }
    return names;
  }
  var optionalPropertyDefaults = {
    provider: "",
    aliases: {},
    not_found: {},
    ...defaultIconDimensions
  };
  function checkOptionalProps(item, defaults) {
    for (const prop in defaults) if (prop in item && typeof item[prop] !== typeof defaults[prop]) return false;
    return true;
  }
  function quicklyValidateIconSet(obj) {
    if (typeof obj !== "object" || obj === null) return null;
    const data = obj;
    if (typeof data.prefix !== "string" || !obj.icons || typeof obj.icons !== "object") return null;
    if (!checkOptionalProps(obj, optionalPropertyDefaults)) return null;
    const icons = data.icons;
    for (const name in icons) {
      const icon = icons[name];
      if (!name || typeof icon.body !== "string" || !checkOptionalProps(icon, defaultExtendedIconProps)) return null;
    }
    const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
    for (const name in aliases) {
      const icon = aliases[name];
      const parent = icon.parent;
      if (!name || typeof parent !== "string" || !icons[parent] && !aliases[parent] || !checkOptionalProps(icon, defaultExtendedIconProps)) return null;
    }
    return data;
  }
  var dataStorage = /* @__PURE__ */ Object.create(null);
  function newStorage(provider, prefix) {
    return {
      provider,
      prefix,
      icons: /* @__PURE__ */ Object.create(null),
      missing: /* @__PURE__ */ new Set()
    };
  }
  function getStorage(provider, prefix) {
    const providerStorage = dataStorage[provider] || (dataStorage[provider] = /* @__PURE__ */ Object.create(null));
    return providerStorage[prefix] || (providerStorage[prefix] = newStorage(provider, prefix));
  }
  function addIconSet(storage2, data) {
    if (!quicklyValidateIconSet(data)) return [];
    return parseIconSet(data, (name, icon) => {
      if (icon) storage2.icons[name] = icon;
      else storage2.missing.add(name);
    });
  }
  function addIconToStorage(storage2, name, icon) {
    try {
      if (typeof icon.body === "string") {
        storage2.icons[name] = { ...icon };
        return true;
      }
    } catch (err) {
    }
    return false;
  }
  var matchIconName = /^[a-z0-9]+(-[a-z0-9]+)*$/;
  var stringToIcon = (value, validate, allowSimpleName, provider = "") => {
    const colonSeparated = value.split(":");
    if (value.slice(0, 1) === "@") {
      if (colonSeparated.length < 2 || colonSeparated.length > 3) return null;
      provider = colonSeparated.shift().slice(1);
    }
    if (colonSeparated.length > 3 || !colonSeparated.length) return null;
    if (colonSeparated.length > 1) {
      const name$1 = colonSeparated.pop();
      const prefix = colonSeparated.pop();
      const result = {
        provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
        prefix,
        name: name$1
      };
      return validate && !validateIconName(result) ? null : result;
    }
    const name = colonSeparated[0];
    const dashSeparated = name.split("-");
    if (dashSeparated.length > 1) {
      const result = {
        provider,
        prefix: dashSeparated.shift(),
        name: dashSeparated.join("-")
      };
      return validate && !validateIconName(result) ? null : result;
    }
    if (allowSimpleName && provider === "") {
      const result = {
        provider,
        prefix: "",
        name
      };
      return validate && !validateIconName(result, allowSimpleName) ? null : result;
    }
    return null;
  };
  var validateIconName = (icon, allowSimpleName) => {
    if (!icon) return false;
    return !!((allowSimpleName && icon.prefix === "" || !!icon.prefix) && !!icon.name);
  };
  var simpleNames = false;
  function allowSimpleNames(allow) {
    if (typeof allow === "boolean") simpleNames = allow;
    return simpleNames;
  }
  function getIconData(name) {
    const icon = typeof name === "string" ? stringToIcon(name, true, simpleNames) : name;
    if (icon) {
      const storage2 = getStorage(icon.provider, icon.prefix);
      const iconName = icon.name;
      return storage2.icons[iconName] || (storage2.missing.has(iconName) ? null : void 0);
    }
  }
  function addIcon(name, data) {
    const icon = stringToIcon(name, true, simpleNames);
    if (!icon) return false;
    const storage2 = getStorage(icon.provider, icon.prefix);
    if (data) return addIconToStorage(storage2, icon.name, data);
    else {
      storage2.missing.add(icon.name);
      return true;
    }
  }
  function addCollection(data, provider) {
    if (typeof data !== "object") return false;
    if (typeof provider !== "string") provider = data.provider || "";
    if (simpleNames && !provider && !data.prefix) {
      let added = false;
      if (quicklyValidateIconSet(data)) {
        data.prefix = "";
        parseIconSet(data, (name, icon) => {
          if (addIcon(name, icon)) added = true;
        });
      }
      return added;
    }
    const prefix = data.prefix;
    if (!validateIconName({
      prefix,
      name: "a"
    })) return false;
    const storage2 = getStorage(provider, prefix);
    return !!addIconSet(storage2, data);
  }
  var defaultIconSizeCustomisations = Object.freeze({
    width: null,
    height: null
  });
  var defaultIconCustomisations = Object.freeze({
    ...defaultIconSizeCustomisations,
    ...defaultIconTransformations
  });
  var unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
  var unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
  function calculateSize(size, ratio, precision) {
    if (ratio === 1) return size;
    precision = precision || 100;
    if (typeof size === "number") return Math.ceil(size * ratio * precision) / precision;
    if (typeof size !== "string") return size;
    const oldParts = size.split(unitsSplit);
    if (oldParts === null || !oldParts.length) return size;
    const newParts = [];
    let code = oldParts.shift();
    let isNumber = unitsTest.test(code);
    while (true) {
      if (isNumber) {
        const num = parseFloat(code);
        if (isNaN(num)) newParts.push(code);
        else newParts.push(Math.ceil(num * ratio * precision) / precision);
      } else newParts.push(code);
      code = oldParts.shift();
      if (code === void 0) return newParts.join("");
      isNumber = !isNumber;
    }
  }
  function splitSVGDefs(content, tag = "defs") {
    let defs = "";
    const index = content.indexOf("<" + tag);
    while (index >= 0) {
      const start = content.indexOf(">", index);
      const end = content.indexOf("</" + tag);
      if (start === -1 || end === -1) break;
      const endEnd = content.indexOf(">", end);
      if (endEnd === -1) break;
      defs += content.slice(start + 1, end).trim();
      content = content.slice(0, index).trim() + content.slice(endEnd + 1);
    }
    return {
      defs,
      content
    };
  }
  function mergeDefsAndContent(defs, content) {
    return defs ? "<defs>" + defs + "</defs>" + content : content;
  }
  function wrapSVGContent(body, start, end) {
    const split = splitSVGDefs(body);
    return mergeDefsAndContent(split.defs, start + split.content + end);
  }
  var isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
  function iconToSVG(icon, customisations) {
    const fullIcon = {
      ...defaultIconProps,
      ...icon
    };
    const fullCustomisations = {
      ...defaultIconCustomisations,
      ...customisations
    };
    const box = {
      left: fullIcon.left,
      top: fullIcon.top,
      width: fullIcon.width,
      height: fullIcon.height
    };
    let body = fullIcon.body;
    [fullIcon, fullCustomisations].forEach((props) => {
      const transformations = [];
      const hFlip = props.hFlip;
      const vFlip = props.vFlip;
      let rotation = props.rotate;
      if (hFlip) if (vFlip) rotation += 2;
      else {
        transformations.push("translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")");
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
      else if (vFlip) {
        transformations.push("translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")");
        transformations.push("scale(1 -1)");
        box.top = box.left = 0;
      }
      let tempValue;
      if (rotation < 0) rotation -= Math.floor(rotation / 4) * 4;
      rotation = rotation % 4;
      switch (rotation) {
        case 1:
          tempValue = box.height / 2 + box.top;
          transformations.unshift("rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")");
          break;
        case 2:
          transformations.unshift("rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")");
          break;
        case 3:
          tempValue = box.width / 2 + box.left;
          transformations.unshift("rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")");
          break;
      }
      if (rotation % 2 === 1) {
        if (box.left !== box.top) {
          tempValue = box.left;
          box.left = box.top;
          box.top = tempValue;
        }
        if (box.width !== box.height) {
          tempValue = box.width;
          box.width = box.height;
          box.height = tempValue;
        }
      }
      if (transformations.length) body = wrapSVGContent(body, '<g transform="' + transformations.join(" ") + '">', "</g>");
    });
    const customisationsWidth = fullCustomisations.width;
    const customisationsHeight = fullCustomisations.height;
    const boxWidth = box.width;
    const boxHeight = box.height;
    let width;
    let height;
    if (customisationsWidth === null) {
      height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
      width = calculateSize(height, boxWidth / boxHeight);
    } else {
      width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
      height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    }
    const attributes = {};
    const setAttr = (prop, value) => {
      if (!isUnsetKeyword(value)) attributes[prop] = value.toString();
    };
    setAttr("width", width);
    setAttr("height", height);
    const viewBox = [
      box.left,
      box.top,
      boxWidth,
      boxHeight
    ];
    attributes.viewBox = viewBox.join(" ");
    return {
      attributes,
      viewBox,
      body
    };
  }
  var regex = /\sid="(\S+)"/g;
  var randomPrefix = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
  var counter = 0;
  function replaceIDs(body, prefix = randomPrefix) {
    const ids = [];
    let match;
    while (match = regex.exec(body)) ids.push(match[1]);
    if (!ids.length) return body;
    const suffix = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
    ids.forEach((id3) => {
      const newID = typeof prefix === "function" ? prefix(id3) : prefix + (counter++).toString();
      const escapedID = id3.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      body = body.replace(new RegExp('([#;"])(' + escapedID + ')([")]|\\.[a-z])', "g"), "$1" + newID + suffix + "$3");
    });
    body = body.replace(new RegExp(suffix, "g"), "");
    return body;
  }
  var storage = /* @__PURE__ */ Object.create(null);
  function setAPIModule(provider, item) {
    storage[provider] = item;
  }
  function getAPIModule(provider) {
    return storage[provider] || storage[""];
  }
  function createAPIConfig(source) {
    let resources;
    if (typeof source.resources === "string") resources = [source.resources];
    else {
      resources = source.resources;
      if (!(resources instanceof Array) || !resources.length) return null;
    }
    const result = {
      resources,
      path: source.path || "/",
      maxURL: source.maxURL || 500,
      rotate: source.rotate || 750,
      timeout: source.timeout || 5e3,
      random: source.random === true,
      index: source.index || 0,
      dataAfterTimeout: source.dataAfterTimeout !== false
    };
    return result;
  }
  var configStorage = /* @__PURE__ */ Object.create(null);
  var fallBackAPISources = ["https://api.simplesvg.com", "https://api.unisvg.com"];
  var fallBackAPI = [];
  while (fallBackAPISources.length > 0) if (fallBackAPISources.length === 1) fallBackAPI.push(fallBackAPISources.shift());
  else if (Math.random() > 0.5) fallBackAPI.push(fallBackAPISources.shift());
  else fallBackAPI.push(fallBackAPISources.pop());
  configStorage[""] = createAPIConfig({ resources: ["https://api.iconify.design"].concat(fallBackAPI) });
  function addAPIProvider(provider, customConfig) {
    const config = createAPIConfig(customConfig);
    if (config === null) return false;
    configStorage[provider] = config;
    return true;
  }
  function getAPIConfig(provider) {
    return configStorage[provider];
  }
  var detectFetch = () => {
    let callback;
    try {
      callback = fetch;
      if (typeof callback === "function") return callback;
    } catch (err) {
    }
  };
  var fetchModule = detectFetch();
  function calculateMaxLength(provider, prefix) {
    const config = getAPIConfig(provider);
    if (!config) return 0;
    let result;
    if (!config.maxURL) result = 0;
    else {
      let maxHostLength = 0;
      config.resources.forEach((item) => {
        const host = item;
        maxHostLength = Math.max(maxHostLength, host.length);
      });
      const url = prefix + ".json?icons=";
      result = config.maxURL - maxHostLength - config.path.length - url.length;
    }
    return result;
  }
  function shouldAbort(status) {
    return status === 404;
  }
  var prepare = (provider, prefix, icons) => {
    const results = [];
    const maxLength = calculateMaxLength(provider, prefix);
    const type = "icons";
    let item = {
      type,
      provider,
      prefix,
      icons: []
    };
    let length = 0;
    icons.forEach((name, index) => {
      length += name.length + 1;
      if (length >= maxLength && index > 0) {
        results.push(item);
        item = {
          type,
          provider,
          prefix,
          icons: []
        };
        length = name.length;
      }
      item.icons.push(name);
    });
    results.push(item);
    return results;
  };
  function getPath(provider) {
    if (typeof provider === "string") {
      const config = getAPIConfig(provider);
      if (config) return config.path;
    }
    return "/";
  }
  var send = (host, params, callback) => {
    if (!fetchModule) {
      callback("abort", 424);
      return;
    }
    let path = getPath(params.provider);
    switch (params.type) {
      case "icons": {
        const prefix = params.prefix;
        const icons = params.icons;
        const iconsList = icons.join(",");
        const urlParams = new URLSearchParams({ icons: iconsList });
        path += prefix + ".json?" + urlParams.toString();
        break;
      }
      case "custom": {
        const uri = params.uri;
        path += uri.slice(0, 1) === "/" ? uri.slice(1) : uri;
        break;
      }
      default:
        callback("abort", 400);
        return;
    }
    let defaultError = 503;
    fetchModule(host + path).then((response) => {
      const status = response.status;
      if (status !== 200) {
        setTimeout(() => {
          callback(shouldAbort(status) ? "abort" : "next", status);
        });
        return;
      }
      defaultError = 501;
      return response.json();
    }).then((data) => {
      if (typeof data !== "object" || data === null) {
        setTimeout(() => {
          if (data === 404) callback("abort", data);
          else callback("next", defaultError);
        });
        return;
      }
      setTimeout(() => {
        callback("success", data);
      });
    }).catch(() => {
      callback("next", defaultError);
    });
  };
  var fetchAPIModule = {
    prepare,
    send
  };
  function removeCallback(storages, id3) {
    storages.forEach((storage2) => {
      const items = storage2.loaderCallbacks;
      if (items) storage2.loaderCallbacks = items.filter((row) => row.id !== id3);
    });
  }
  function updateCallbacks(storage2) {
    if (!storage2.pendingCallbacksFlag) {
      storage2.pendingCallbacksFlag = true;
      setTimeout(() => {
        storage2.pendingCallbacksFlag = false;
        const items = storage2.loaderCallbacks ? storage2.loaderCallbacks.slice(0) : [];
        if (!items.length) return;
        let hasPending = false;
        const provider = storage2.provider;
        const prefix = storage2.prefix;
        items.forEach((item) => {
          const icons = item.icons;
          const oldLength = icons.pending.length;
          icons.pending = icons.pending.filter((icon) => {
            if (icon.prefix !== prefix) return true;
            const name = icon.name;
            if (storage2.icons[name]) icons.loaded.push({
              provider,
              prefix,
              name
            });
            else if (storage2.missing.has(name)) icons.missing.push({
              provider,
              prefix,
              name
            });
            else {
              hasPending = true;
              return true;
            }
            return false;
          });
          if (icons.pending.length !== oldLength) {
            if (!hasPending) removeCallback([storage2], item.id);
            item.callback(icons.loaded.slice(0), icons.missing.slice(0), icons.pending.slice(0), item.abort);
          }
        });
      });
    }
  }
  var idCounter = 0;
  function storeCallback(callback, icons, pendingSources) {
    const id3 = idCounter++;
    const abort = removeCallback.bind(null, pendingSources, id3);
    if (!icons.pending.length) return abort;
    const item = {
      id: id3,
      icons,
      callback,
      abort
    };
    pendingSources.forEach((storage2) => {
      (storage2.loaderCallbacks || (storage2.loaderCallbacks = [])).push(item);
    });
    return abort;
  }
  function sortIcons(icons) {
    const result = {
      loaded: [],
      missing: [],
      pending: []
    };
    const storage2 = /* @__PURE__ */ Object.create(null);
    icons.sort((a, b) => {
      if (a.provider !== b.provider) return a.provider.localeCompare(b.provider);
      if (a.prefix !== b.prefix) return a.prefix.localeCompare(b.prefix);
      return a.name.localeCompare(b.name);
    });
    let lastIcon = {
      provider: "",
      prefix: "",
      name: ""
    };
    icons.forEach((icon) => {
      if (lastIcon.name === icon.name && lastIcon.prefix === icon.prefix && lastIcon.provider === icon.provider) return;
      lastIcon = icon;
      const provider = icon.provider;
      const prefix = icon.prefix;
      const name = icon.name;
      const providerStorage = storage2[provider] || (storage2[provider] = /* @__PURE__ */ Object.create(null));
      const localStorage2 = providerStorage[prefix] || (providerStorage[prefix] = getStorage(provider, prefix));
      let list;
      if (name in localStorage2.icons) list = result.loaded;
      else if (prefix === "" || localStorage2.missing.has(name)) list = result.missing;
      else list = result.pending;
      const item = {
        provider,
        prefix,
        name
      };
      list.push(item);
    });
    return result;
  }
  function listToIcons(list, validate = true, simpleNames2 = false) {
    const result = [];
    list.forEach((item) => {
      const icon = typeof item === "string" ? stringToIcon(item, validate, simpleNames2) : item;
      if (icon) result.push(icon);
    });
    return result;
  }
  var defaultConfig = {
    resources: [],
    index: 0,
    timeout: 2e3,
    rotate: 750,
    random: false,
    dataAfterTimeout: false
  };
  function sendQuery(config, payload, query, done) {
    const resourcesCount = config.resources.length;
    const startIndex = config.random ? Math.floor(Math.random() * resourcesCount) : config.index;
    let resources;
    if (config.random) {
      let list = config.resources.slice(0);
      resources = [];
      while (list.length > 1) {
        const nextIndex = Math.floor(Math.random() * list.length);
        resources.push(list[nextIndex]);
        list = list.slice(0, nextIndex).concat(list.slice(nextIndex + 1));
      }
      resources = resources.concat(list);
    } else resources = config.resources.slice(startIndex).concat(config.resources.slice(0, startIndex));
    const startTime = Date.now();
    let status = "pending";
    let queriesSent = 0;
    let lastError;
    let timer = null;
    let queue = [];
    let doneCallbacks = [];
    if (typeof done === "function") doneCallbacks.push(done);
    function resetTimer() {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    }
    function abort() {
      if (status === "pending") status = "aborted";
      resetTimer();
      queue.forEach((item) => {
        if (item.status === "pending") item.status = "aborted";
      });
      queue = [];
    }
    function subscribe(callback, overwrite) {
      if (overwrite) doneCallbacks = [];
      if (typeof callback === "function") doneCallbacks.push(callback);
    }
    function getQueryStatus() {
      return {
        startTime,
        payload,
        status,
        queriesSent,
        queriesPending: queue.length,
        subscribe,
        abort
      };
    }
    function failQuery() {
      status = "failed";
      doneCallbacks.forEach((callback) => {
        callback(void 0, lastError);
      });
    }
    function clearQueue() {
      queue.forEach((item) => {
        if (item.status === "pending") item.status = "aborted";
      });
      queue = [];
    }
    function moduleResponse(item, response, data) {
      const isError = response !== "success";
      queue = queue.filter((queued) => queued !== item);
      switch (status) {
        case "pending":
          break;
        case "failed":
          if (isError || !config.dataAfterTimeout) return;
          break;
        default:
          return;
      }
      if (response === "abort") {
        lastError = data;
        failQuery();
        return;
      }
      if (isError) {
        lastError = data;
        if (!queue.length) if (!resources.length) failQuery();
        else execNext();
        return;
      }
      resetTimer();
      clearQueue();
      if (!config.random) {
        const index = config.resources.indexOf(item.resource);
        if (index !== -1 && index !== config.index) config.index = index;
      }
      status = "completed";
      doneCallbacks.forEach((callback) => {
        callback(data);
      });
    }
    function execNext() {
      if (status !== "pending") return;
      resetTimer();
      const resource = resources.shift();
      if (resource === void 0) {
        if (queue.length) {
          timer = setTimeout(() => {
            resetTimer();
            if (status === "pending") {
              clearQueue();
              failQuery();
            }
          }, config.timeout);
          return;
        }
        failQuery();
        return;
      }
      const item = {
        status: "pending",
        resource,
        callback: (status$1, data) => {
          moduleResponse(item, status$1, data);
        }
      };
      queue.push(item);
      queriesSent++;
      timer = setTimeout(execNext, config.rotate);
      query(resource, payload, item.callback);
    }
    setTimeout(execNext);
    return getQueryStatus;
  }
  function initRedundancy(cfg) {
    const config = {
      ...defaultConfig,
      ...cfg
    };
    let queries = [];
    function cleanup() {
      queries = queries.filter((item) => item().status === "pending");
    }
    function query(payload, queryCallback, doneCallback) {
      const query$1 = sendQuery(config, payload, queryCallback, (data, error) => {
        cleanup();
        if (doneCallback) doneCallback(data, error);
      });
      queries.push(query$1);
      return query$1;
    }
    function find(callback) {
      return queries.find((value) => {
        return callback(value);
      }) || null;
    }
    const instance = {
      query,
      find,
      setIndex: (index) => {
        config.index = index;
      },
      getIndex: () => config.index,
      cleanup
    };
    return instance;
  }
  function emptyCallback$1() {
  }
  var redundancyCache = /* @__PURE__ */ Object.create(null);
  function getRedundancyCache(provider) {
    if (!redundancyCache[provider]) {
      const config = getAPIConfig(provider);
      if (!config) return;
      const redundancy = initRedundancy(config);
      const cachedReundancy = {
        config,
        redundancy
      };
      redundancyCache[provider] = cachedReundancy;
    }
    return redundancyCache[provider];
  }
  function sendAPIQuery(target, query, callback) {
    let redundancy;
    let send2;
    if (typeof target === "string") {
      const api = getAPIModule(target);
      if (!api) {
        callback(void 0, 424);
        return emptyCallback$1;
      }
      send2 = api.send;
      const cached = getRedundancyCache(target);
      if (cached) redundancy = cached.redundancy;
    } else {
      const config = createAPIConfig(target);
      if (config) {
        redundancy = initRedundancy(config);
        const moduleKey = target.resources ? target.resources[0] : "";
        const api = getAPIModule(moduleKey);
        if (api) send2 = api.send;
      }
    }
    if (!redundancy || !send2) {
      callback(void 0, 424);
      return emptyCallback$1;
    }
    return redundancy.query(query, send2, callback)().abort;
  }
  function emptyCallback() {
  }
  function loadedNewIcons(storage2) {
    if (!storage2.iconsLoaderFlag) {
      storage2.iconsLoaderFlag = true;
      setTimeout(() => {
        storage2.iconsLoaderFlag = false;
        updateCallbacks(storage2);
      });
    }
  }
  function checkIconNamesForAPI(icons) {
    const valid = [];
    const invalid = [];
    icons.forEach((name) => {
      (name.match(matchIconName) ? valid : invalid).push(name);
    });
    return {
      valid,
      invalid
    };
  }
  function parseLoaderResponse(storage2, icons, data) {
    function checkMissing() {
      const pending = storage2.pendingIcons;
      icons.forEach((name) => {
        if (pending) pending.delete(name);
        if (!storage2.icons[name]) storage2.missing.add(name);
      });
    }
    if (data && typeof data === "object") try {
      const parsed = addIconSet(storage2, data);
      if (!parsed.length) {
        checkMissing();
        return;
      }
    } catch (err) {
      console.error(err);
    }
    checkMissing();
    loadedNewIcons(storage2);
  }
  function parsePossiblyAsyncResponse(response, callback) {
    if (response instanceof Promise) response.then((data) => {
      callback(data);
    }).catch(() => {
      callback(null);
    });
    else callback(response);
  }
  function loadNewIcons(storage2, icons) {
    if (!storage2.iconsToLoad) storage2.iconsToLoad = icons;
    else storage2.iconsToLoad = storage2.iconsToLoad.concat(icons).sort();
    if (!storage2.iconsQueueFlag) {
      storage2.iconsQueueFlag = true;
      setTimeout(() => {
        storage2.iconsQueueFlag = false;
        const { provider, prefix } = storage2;
        const icons$1 = storage2.iconsToLoad;
        delete storage2.iconsToLoad;
        if (!icons$1 || !icons$1.length) return;
        const customIconLoader = storage2.loadIcon;
        if (storage2.loadIcons && (icons$1.length > 1 || !customIconLoader)) {
          parsePossiblyAsyncResponse(storage2.loadIcons(icons$1, prefix, provider), (data) => {
            parseLoaderResponse(storage2, icons$1, data);
          });
          return;
        }
        if (customIconLoader) {
          icons$1.forEach((name) => {
            const response = customIconLoader(name, prefix, provider);
            parsePossiblyAsyncResponse(response, (data) => {
              const iconSet = data ? {
                prefix,
                icons: { [name]: data }
              } : null;
              parseLoaderResponse(storage2, [name], iconSet);
            });
          });
          return;
        }
        const { valid, invalid } = checkIconNamesForAPI(icons$1);
        if (invalid.length) parseLoaderResponse(storage2, invalid, null);
        if (!valid.length) return;
        const api = prefix.match(matchIconName) ? getAPIModule(provider) : null;
        if (!api) {
          parseLoaderResponse(storage2, valid, null);
          return;
        }
        const params = api.prepare(provider, prefix, valid);
        params.forEach((item) => {
          sendAPIQuery(provider, item, (data) => {
            parseLoaderResponse(storage2, item.icons, data);
          });
        });
      });
    }
  }
  var loadIcons = (icons, callback) => {
    const cleanedIcons = listToIcons(icons, true, allowSimpleNames());
    const sortedIcons = sortIcons(cleanedIcons);
    if (!sortedIcons.pending.length) {
      let callCallback = true;
      if (callback) setTimeout(() => {
        if (callCallback) callback(sortedIcons.loaded, sortedIcons.missing, sortedIcons.pending, emptyCallback);
      });
      return () => {
        callCallback = false;
      };
    }
    const newIcons = /* @__PURE__ */ Object.create(null);
    const sources = [];
    let lastProvider, lastPrefix;
    sortedIcons.pending.forEach((icon) => {
      const { provider, prefix } = icon;
      if (prefix === lastPrefix && provider === lastProvider) return;
      lastProvider = provider;
      lastPrefix = prefix;
      sources.push(getStorage(provider, prefix));
      const providerNewIcons = newIcons[provider] || (newIcons[provider] = /* @__PURE__ */ Object.create(null));
      if (!providerNewIcons[prefix]) providerNewIcons[prefix] = [];
    });
    sortedIcons.pending.forEach((icon) => {
      const { provider, prefix, name } = icon;
      const storage2 = getStorage(provider, prefix);
      const pendingQueue = storage2.pendingIcons || (storage2.pendingIcons = /* @__PURE__ */ new Set());
      if (!pendingQueue.has(name)) {
        pendingQueue.add(name);
        newIcons[provider][prefix].push(name);
      }
    });
    sources.forEach((storage2) => {
      const list = newIcons[storage2.provider][storage2.prefix];
      if (list.length) loadNewIcons(storage2, list);
    });
    return callback ? storeCallback(callback, sortedIcons, sources) : emptyCallback;
  };
  function mergeCustomisations(defaults, item) {
    const result = { ...defaults };
    for (const key in item) {
      const value = item[key];
      const valueType = typeof value;
      if (key in defaultIconSizeCustomisations) {
        if (value === null || value && (valueType === "string" || valueType === "number")) result[key] = value;
      } else if (valueType === typeof result[key]) result[key] = key === "rotate" ? value % 4 : value;
    }
    return result;
  }
  var separator = /[\s,]+/;
  function flipFromString(custom, flip) {
    flip.split(separator).forEach((str) => {
      const value = str.trim();
      switch (value) {
        case "horizontal":
          custom.hFlip = true;
          break;
        case "vertical":
          custom.vFlip = true;
          break;
      }
    });
  }
  function rotateFromString(value, defaultValue = 0) {
    const units = value.replace(/^-?[0-9.]*/, "");
    function cleanup(value$1) {
      while (value$1 < 0) value$1 += 4;
      return value$1 % 4;
    }
    if (units === "") {
      const num = parseInt(value);
      return isNaN(num) ? 0 : cleanup(num);
    } else if (units !== value) {
      let split = 0;
      switch (units) {
        case "%":
          split = 25;
          break;
        case "deg":
          split = 90;
      }
      if (split) {
        let num = parseFloat(value.slice(0, value.length - units.length));
        if (isNaN(num)) return 0;
        num = num / split;
        return num % 1 === 0 ? cleanup(num) : 0;
      }
    }
    return defaultValue;
  }
  function iconToHTML(body, attributes) {
    let renderAttribsHTML = body.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
    for (const attr in attributes) renderAttribsHTML += " " + attr + '="' + attributes[attr] + '"';
    return '<svg xmlns="http://www.w3.org/2000/svg"' + renderAttribsHTML + ">" + body + "</svg>";
  }
  function encodeSVGforURL(svg) {
    return svg.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
  }
  function svgToData(svg) {
    return "data:image/svg+xml," + encodeSVGforURL(svg);
  }
  function svgToURL(svg) {
    return 'url("' + svgToData(svg) + '")';
  }
  var policy;
  function createPolicy() {
    try {
      policy = window.trustedTypes.createPolicy("iconify", { createHTML: (s) => s });
    } catch (err) {
      policy = null;
    }
  }
  function cleanUpInnerHTML(html) {
    if (policy === void 0) createPolicy();
    return policy ? policy.createHTML(html) : html;
  }
  var defaultExtendedIconCustomisations = {
    ...defaultIconCustomisations,
    inline: false
  };
  var svgDefaults = {
    "xmlns": "http://www.w3.org/2000/svg",
    "xmlnsXlink": "http://www.w3.org/1999/xlink",
    "aria-hidden": true,
    "role": "img"
  };
  var commonProps = {
    display: "inline-block"
  };
  var monotoneProps = {
    backgroundColor: "currentColor"
  };
  var coloredProps = {
    backgroundColor: "transparent"
  };
  var propsToAdd = {
    Image: "var(--svg)",
    Repeat: "no-repeat",
    Size: "100% 100%"
  };
  var propsToAddTo = {
    WebkitMask: monotoneProps,
    mask: monotoneProps,
    background: coloredProps
  };
  for (const prefix in propsToAddTo) {
    const list = propsToAddTo[prefix];
    for (const prop in propsToAdd) {
      list[prefix + prop] = propsToAdd[prop];
    }
  }
  var inlineDefaults = {
    ...defaultExtendedIconCustomisations,
    inline: true
  };
  function fixSize(value) {
    return value + (value.match(/^[-0-9.]+$/) ? "px" : "");
  }
  var render = (icon, props, name) => {
    const defaultProps = props.inline ? inlineDefaults : defaultExtendedIconCustomisations;
    const customisations = mergeCustomisations(defaultProps, props);
    const mode = props.mode || "svg";
    const style = {};
    const customStyle = props.style || {};
    const componentProps = {
      ...mode === "svg" ? svgDefaults : {}
    };
    if (name) {
      const iconName = stringToIcon(name, false, true);
      if (iconName) {
        const classNames = ["iconify"];
        const props2 = [
          "provider",
          "prefix"
        ];
        for (const prop of props2) {
          if (iconName[prop]) {
            classNames.push("iconify--" + iconName[prop]);
          }
        }
        componentProps.className = classNames.join(" ");
      }
    }
    for (let key in props) {
      const value = props[key];
      if (value === void 0) {
        continue;
      }
      switch (key) {
        // Properties to ignore
        case "icon":
        case "style":
        case "children":
        case "onLoad":
        case "mode":
        case "ssr":
        case "fallback":
          break;
        // Forward ref
        case "_ref":
          componentProps.ref = value;
          break;
        // Merge class names
        case "className":
          componentProps[key] = (componentProps[key] ? componentProps[key] + " " : "") + value;
          break;
        // Boolean attributes
        case "inline":
        case "hFlip":
        case "vFlip":
          customisations[key] = value === true || value === "true" || value === 1;
          break;
        // Flip as string: 'horizontal,vertical'
        case "flip":
          if (typeof value === "string") {
            flipFromString(customisations, value);
          }
          break;
        // Color: copy to style
        case "color":
          style.color = value;
          break;
        // Rotation as string
        case "rotate":
          if (typeof value === "string") {
            customisations[key] = rotateFromString(value);
          } else if (typeof value === "number") {
            customisations[key] = value;
          }
          break;
        // Remove aria-hidden
        case "ariaHidden":
        case "aria-hidden":
          if (value !== true && value !== "true") {
            delete componentProps["aria-hidden"];
          }
          break;
        // Copy missing property if it does not exist in customisations
        default:
          if (defaultProps[key] === void 0) {
            componentProps[key] = value;
          }
      }
    }
    const item = iconToSVG(icon, customisations);
    const renderAttribs = item.attributes;
    if (customisations.inline) {
      style.verticalAlign = "-0.125em";
    }
    if (mode === "svg") {
      componentProps.style = {
        ...style,
        ...customStyle
      };
      Object.assign(componentProps, renderAttribs);
      let localCounter = 0;
      let id3 = props.id;
      if (typeof id3 === "string") {
        id3 = id3.replace(/-/g, "_");
      }
      componentProps.dangerouslySetInnerHTML = {
        __html: cleanUpInnerHTML(replaceIDs(item.body, id3 ? () => id3 + "ID" + localCounter++ : "iconifyReact"))
      };
      return (0, import_react29.createElement)("svg", componentProps);
    }
    const { body, width, height } = icon;
    const useMask = mode === "mask" || (mode === "bg" ? false : body.indexOf("currentColor") !== -1);
    const html = iconToHTML(body, {
      ...renderAttribs,
      width: width + "",
      height: height + ""
    });
    componentProps.style = {
      ...style,
      "--svg": svgToURL(html),
      "width": fixSize(renderAttribs.width),
      "height": fixSize(renderAttribs.height),
      ...commonProps,
      ...useMask ? monotoneProps : coloredProps,
      ...customStyle
    };
    return (0, import_react29.createElement)("span", componentProps);
  };
  allowSimpleNames(true);
  setAPIModule("", fetchAPIModule);
  if (typeof document !== "undefined" && typeof window !== "undefined") {
    const _window = window;
    if (_window.IconifyPreload !== void 0) {
      const preload = _window.IconifyPreload;
      const err = "Invalid IconifyPreload syntax.";
      if (typeof preload === "object" && preload !== null) {
        (preload instanceof Array ? preload : [preload]).forEach((item) => {
          try {
            if (
              // Check if item is an object and not null/array
              typeof item !== "object" || item === null || item instanceof Array || // Check for 'icons' and 'prefix'
              typeof item.icons !== "object" || typeof item.prefix !== "string" || // Add icon set
              !addCollection(item)
            ) {
              console.error(err);
            }
          } catch (e) {
            console.error(err);
          }
        });
      }
    }
    if (_window.IconifyProviders !== void 0) {
      const providers = _window.IconifyProviders;
      if (typeof providers === "object" && providers !== null) {
        for (let key in providers) {
          const err = "IconifyProviders[" + key + "] is invalid.";
          try {
            const value = providers[key];
            if (typeof value !== "object" || !value || value.resources === void 0) {
              continue;
            }
            if (!addAPIProvider(key, value)) {
              console.error(err);
            }
          } catch (e) {
            console.error(err);
          }
        }
      }
    }
  }
  function IconComponent(props) {
    const [mounted, setMounted] = (0, import_react29.useState)(!!props.ssr);
    const [abort, setAbort] = (0, import_react29.useState)({});
    function getInitialState(mounted2) {
      if (mounted2) {
        const name2 = props.icon;
        if (typeof name2 === "object") {
          return {
            name: "",
            data: name2
          };
        }
        const data2 = getIconData(name2);
        if (data2) {
          return {
            name: name2,
            data: data2
          };
        }
      }
      return {
        name: ""
      };
    }
    const [state, setState] = (0, import_react29.useState)(getInitialState(!!props.ssr));
    function cleanup() {
      const callback = abort.callback;
      if (callback) {
        callback();
        setAbort({});
      }
    }
    function changeState(newState) {
      if (JSON.stringify(state) !== JSON.stringify(newState)) {
        cleanup();
        setState(newState);
        return true;
      }
    }
    function updateState() {
      var _a;
      const name2 = props.icon;
      if (typeof name2 === "object") {
        changeState({
          name: "",
          data: name2
        });
        return;
      }
      const data2 = getIconData(name2);
      if (changeState({
        name: name2,
        data: data2
      })) {
        if (data2 === void 0) {
          const callback = loadIcons([name2], updateState);
          setAbort({
            callback
          });
        } else if (data2) {
          (_a = props.onLoad) === null || _a === void 0 ? void 0 : _a.call(props, name2);
        }
      }
    }
    (0, import_react29.useEffect)(() => {
      setMounted(true);
      return cleanup;
    }, []);
    (0, import_react29.useEffect)(() => {
      if (mounted) {
        updateState();
      }
    }, [props.icon, mounted]);
    const { name, data } = state;
    if (!data) {
      return props.children ? props.children : props.fallback ? props.fallback : (0, import_react29.createElement)("span", {});
    }
    return render({
      ...defaultIconProps,
      ...data
    }, props, name);
  }
  var Icon = (0, import_react29.forwardRef)((props, ref) => IconComponent({
    ...props,
    _ref: ref
  }));
  var InlineIcon = (0, import_react29.forwardRef)((props, ref) => IconComponent({
    inline: true,
    ...props,
    _ref: ref
  }));

  // src/data/admin-notices.json
  var admin_notices_default = [
    {
      id: "010",
      type: "announcement",
      title: "\u{1F6A7} Site is Under Review \u2014 Not Publicly Launched",
      body: "WhatNow is currently in internal testing and review phase. Content, features, and design are being actively evaluated before public launch. If you're viewing this, you're part of the early access review.",
      date: "2026-06-01",
      isNew: true
    },
    {
      id: "009",
      type: "feature",
      title: "Admin Notice Board Added",
      body: "This panel is now live \u2014 the WhatNow team will use this to communicate site updates, new guides, feature rollouts, and important announcements directly to reviewers and early users.",
      date: "2026-06-01",
      isNew: true
    },
    {
      id: "008",
      type: "feature",
      title: "Live Exam Notice Board Added \u{1F514}",
      body: "A real-time exam alert panel now fetches the latest results, registration deadlines, and exam news from national education feeds. Click the bell icon in the navbar to open it.",
      date: "2026-06-01",
      isNew: true
    },
    {
      id: "007",
      type: "feature",
      title: "Vibe Theme Switcher \u2014 5 Colour Palettes",
      body: "Users can now pick their colour vibe \u2014 Default Indigo, Lavender Breeze, Fresh Mint, Sweet Peach, or Soft Rose. The palette icon sits in the top-right of the navbar. Preference is saved across sessions.",
      date: "2026-06-01",
      isNew: false
    },
    {
      id: "006",
      type: "new",
      title: "JEE Paper 3 (B.Planning) Full Guide Live",
      body: "Complete guide for JEE B.Planning (Paper 3) is published \u2014 all 5 sub-pages including What It Is, Is It For You, Scholarships, Convince Your Parents, and Free Resources.",
      date: "2026-06-01",
      link: "/exams/jee-paper3",
      isNew: false
    },
    {
      id: "005",
      type: "new",
      title: "IMU CET Full Guide Published",
      body: "The IMU CET guide is live \u2014 covering Merchant Navy as a career, DG Shipping registration, cadet life, realistic salary expectations, and how to address parental concerns.",
      date: "2026-06-01",
      link: "/exams/imu-cet",
      isNew: false
    },
    {
      id: "004",
      type: "new",
      title: "NIFT, CLAT & UCEED Guides Published",
      body: "Three exam blueprints are now live \u2014 NIFT Entrance, CLAT (law), and UCEED (IIT design). Each guide covers all 5 sections: What It Is, Is It For You, Scholarships, Convince Your Parents, and Resources.",
      date: "2026-06-01",
      link: "/exams",
      isNew: false
    },
    {
      id: "003",
      type: "new",
      title: "5 Career Guides Published",
      body: "Detailed career guides for Product & UX Design, Fashion Design, Corporate & Litigation Law, Merchant Navy Deck Officer, and Urban Planning are now available under the Careers section.",
      date: "2026-06-01",
      link: "/careers",
      isNew: false
    },
    {
      id: "002",
      type: "update",
      title: "Hindi Language Support Added",
      body: "Full Hindi translation is now available across the entire website \u2014 all guide content, navigation menus, hero text, and section labels. Switch from the language toggle in the bottom-right corner.",
      date: "2026-06-01",
      isNew: false
    },
    {
      id: "001",
      type: "announcement",
      title: "WhatNow Website Build Started",
      body: "Development of WhatNow.in has officially started. The goal: a free, unbiased career and exam guide platform for Indian students after Class 10 & 12 \u2014 no paywalls, no coaching agenda.",
      date: "2026-06-01",
      isNew: false
    }
  ];

  // src/components/AdminNoticeBoard.tsx
  var typeMeta = {
    feature: {
      label: "New Feature",
      icon: "solar:magic-stick-3-bold-duotone",
      classes: "bg-violet-50 text-violet-600 border-violet-100"
    },
    new: {
      label: "New Guide",
      icon: "solar:book-bold-duotone",
      classes: "bg-emerald-50 text-emerald-600 border-emerald-100"
    },
    update: {
      label: "Update",
      icon: "solar:refresh-bold-duotone",
      classes: "bg-blue-50 text-blue-600 border-blue-100"
    },
    announcement: {
      label: "Announcement",
      icon: "solar:megaphone-bold-duotone",
      classes: "bg-amber-50 text-amber-600 border-amber-100"
    },
    fix: {
      label: "Fix",
      icon: "solar:bug-bold-duotone",
      classes: "bg-rose-50 text-rose-600 border-rose-100"
    }
  };
  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  }
  var STORAGE_KEY = "whatnow-admin-notices-read";
  function AdminNoticeBoard() {
    const [isOpen, setIsOpen] = (0, import_react30.useState)(false);
    const [readIds, setReadIds] = (0, import_react30.useState)([]);
    const allNotices = admin_notices_default;
    (0, import_react30.useEffect)(() => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) setReadIds(JSON.parse(stored));
      } catch {
      }
    }, []);
    (0, import_react30.useEffect)(() => {
      const handleOpen2 = () => setIsOpen(true);
      window.addEventListener("open-admin-notices", handleOpen2);
      return () => window.removeEventListener("open-admin-notices", handleOpen2);
    }, []);
    const unreadCount = allNotices.filter((n) => !readIds.includes(n.id) && n.isNew).length;
    const markAllRead = () => {
      const newIds = allNotices.map((n) => n.id);
      setReadIds(newIds);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newIds));
      } catch {
      }
    };
    const handleOpen = () => {
      setIsOpen(true);
      markAllRead();
    };
    return /* @__PURE__ */ import_react30.default.createElement(import_react30.default.Fragment, null, /* @__PURE__ */ import_react30.default.createElement(AnimatePresence, null, !isOpen && /* @__PURE__ */ import_react30.default.createElement(
      motion.button,
      {
        initial: { opacity: 0, scale: 0.8, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.8, y: 20 },
        transition: { type: "spring", stiffness: 320, damping: 28 },
        onClick: handleOpen,
        className: "fixed bottom-6 left-6 z-40 flex items-center gap-2.5 bg-white border border-slate-200 shadow-xl shadow-slate-900/10 rounded-2xl px-4 py-2.5 cursor-pointer hover:shadow-2xl hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300 group",
        title: "WhatNow Updates & Changelog"
      },
      /* @__PURE__ */ import_react30.default.createElement("div", { className: "relative" }, /* @__PURE__ */ import_react30.default.createElement(
        Icon,
        {
          icon: "solar:notebook-bold-duotone",
          className: "w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300"
        }
      ), unreadCount > 0 && /* @__PURE__ */ import_react30.default.createElement("span", { className: "absolute -top-1.5 -right-1.5 min-w-[16px] h-4 px-1 text-[9px] font-black bg-red-500 text-white rounded-full flex items-center justify-center leading-none" }, unreadCount)),
      /* @__PURE__ */ import_react30.default.createElement("span", { className: "text-xs font-black text-slate-700 group-hover:text-primary transition-colors tracking-tight" }, "Site Updates"),
      /* @__PURE__ */ import_react30.default.createElement(
        Icon,
        {
          icon: "ph:arrow-up-right-bold",
          className: "w-3.5 h-3.5 text-slate-400 group-hover:text-primary transition-colors"
        }
      )
    )), /* @__PURE__ */ import_react30.default.createElement(AnimatePresence, null, isOpen && /* @__PURE__ */ import_react30.default.createElement(import_react30.default.Fragment, null, /* @__PURE__ */ import_react30.default.createElement(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setIsOpen(false),
        className: "fixed inset-0 bg-slate-900/30 backdrop-blur-xs z-50"
      }
    ), /* @__PURE__ */ import_react30.default.createElement(
      motion.div,
      {
        initial: { opacity: 0, y: 40, scale: 0.97 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 40, scale: 0.97 },
        transition: { type: "spring", damping: 28, stiffness: 260 },
        className: "fixed bottom-6 left-6 z-50 w-full max-w-[22rem] bg-white rounded-3xl shadow-2xl shadow-slate-900/15 border border-slate-100 flex flex-col overflow-hidden",
        style: { maxHeight: "calc(100vh - 120px)" }
      },
      /* @__PURE__ */ import_react30.default.createElement("div", { className: "px-5 pt-5 pb-4 border-b border-slate-100 flex items-center justify-between shrink-0" }, /* @__PURE__ */ import_react30.default.createElement("div", { className: "flex items-center gap-2.5" }, /* @__PURE__ */ import_react30.default.createElement("div", { className: "h-9 w-9 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0" }, /* @__PURE__ */ import_react30.default.createElement(Icon, { icon: "solar:notebook-bold-duotone", className: "w-5 h-5 text-primary" })), /* @__PURE__ */ import_react30.default.createElement("div", null, /* @__PURE__ */ import_react30.default.createElement("h2", { className: "font-heading font-black text-[15px] text-neutral-dark tracking-tight leading-tight" }, "WhatNow Updates"), /* @__PURE__ */ import_react30.default.createElement("p", { className: "text-[10px] text-slate-400 font-semibold" }, "From the team \xB7 ", allNotices.length, " entries"))), /* @__PURE__ */ import_react30.default.createElement(
        "button",
        {
          onClick: () => setIsOpen(false),
          className: "p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
        },
        /* @__PURE__ */ import_react30.default.createElement(Icon, { icon: "solar:close-circle-bold", className: "w-5 h-5" })
      )),
      /* @__PURE__ */ import_react30.default.createElement("div", { className: "flex-1 overflow-y-auto px-4 py-4 space-y-3" }, allNotices.map((notice, idx) => {
        const meta = typeMeta[notice.type] || typeMeta.announcement;
        const isUnread = !readIds.includes(notice.id) && notice.isNew;
        return /* @__PURE__ */ import_react30.default.createElement(
          motion.div,
          {
            key: notice.id,
            initial: { opacity: 0, x: -12 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: idx * 0.04 },
            className: `relative p-4 rounded-2xl border transition-all duration-200 ${isUnread ? "bg-primary/[0.03] border-primary/20" : "bg-white border-slate-100 hover:border-slate-200"}`
          },
          isUnread && /* @__PURE__ */ import_react30.default.createElement("span", { className: "absolute top-4 right-4 flex h-2 w-2" }, /* @__PURE__ */ import_react30.default.createElement("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" }), /* @__PURE__ */ import_react30.default.createElement("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-primary" })),
          /* @__PURE__ */ import_react30.default.createElement("div", { className: "flex items-center gap-2 mb-2.5" }, /* @__PURE__ */ import_react30.default.createElement(
            "span",
            {
              className: `inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border ${meta.classes}`
            },
            /* @__PURE__ */ import_react30.default.createElement(Icon, { icon: meta.icon, className: "w-3 h-3" }),
            meta.label
          ), /* @__PURE__ */ import_react30.default.createElement("span", { className: "text-[10px] text-slate-400 font-semibold ml-auto" }, formatDate(notice.date))),
          /* @__PURE__ */ import_react30.default.createElement("h3", { className: "font-extrabold text-[13px] text-neutral-dark leading-snug mb-1.5" }, notice.title),
          /* @__PURE__ */ import_react30.default.createElement("p", { className: "text-[11.5px] text-slate-500 leading-relaxed font-medium" }, notice.body),
          notice.link && /* @__PURE__ */ import_react30.default.createElement(
            "a",
            {
              href: notice.link,
              onClick: () => setIsOpen(false),
              className: "inline-flex items-center gap-1 mt-2.5 text-[11px] font-black text-primary hover:text-primary-hover transition-colors"
            },
            "View guide",
            /* @__PURE__ */ import_react30.default.createElement(Icon, { icon: "ph:arrow-right-bold", className: "w-3 h-3" })
          )
        );
      })),
      /* @__PURE__ */ import_react30.default.createElement("div", { className: "px-5 py-3.5 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between shrink-0" }, /* @__PURE__ */ import_react30.default.createElement("p", { className: "text-[10px] text-slate-400 font-bold flex items-center gap-1" }, /* @__PURE__ */ import_react30.default.createElement(Icon, { icon: "solar:shield-check-bold", className: "w-3.5 h-3.5 text-emerald-500" }), "Official WhatNow team updates"), /* @__PURE__ */ import_react30.default.createElement(
        "a",
        {
          href: "https://discord.gg/whatnow",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "text-[10px] font-black text-primary hover:text-primary-hover transition-colors flex items-center gap-0.5"
        },
        "Join Discord",
        /* @__PURE__ */ import_react30.default.createElement(Icon, { icon: "ph:arrow-square-out-bold", className: "w-3 h-3" })
      ))
    ))));
  }

  // src/components/ComingSoon.tsx
  var import_react34 = __toESM(require_react_shim());

  // .design-sync/ds-src/shims/next-link.tsx
  var import_react32 = __toESM(require_react_shim());
  var Link = import_react32.default.forwardRef(function Link2({ href, prefetch, replace, scroll: scroll2, shallow, locale, legacyBehavior, passHref, children, ...rest }, ref) {
    const h = typeof href === "string" ? href : href && typeof href === "object" && "pathname" in href ? String(href.pathname ?? "#") : "#";
    return /* @__PURE__ */ import_react32.default.createElement("a", { ref, href: h, ...rest }, children);
  });
  var next_link_default = Link;

  // src/context/LanguageContext.tsx
  var import_react33 = __toESM(require_react_shim());
  var LanguageContext = (0, import_react33.createContext)(void 0);
  function LanguageProvider({ children }) {
    const [language, setLanguage] = (0, import_react33.useState)("en");
    (0, import_react33.useEffect)(() => {
      const saved = localStorage.getItem("language");
      if (saved === "en" || saved === "hi") {
        setLanguage(saved);
      }
    }, []);
    const changeLanguage = (lang) => {
      setLanguage(lang);
      localStorage.setItem("language", lang);
    };
    (0, import_react33.useEffect)(() => {
      if (typeof window !== "undefined") {
        if (language === "hi") {
          document.documentElement.classList.add("lang-hi");
          document.documentElement.classList.remove("lang-en");
        } else {
          document.documentElement.classList.add("lang-en");
          document.documentElement.classList.remove("lang-hi");
        }
      }
    }, [language]);
    return /* @__PURE__ */ import_react33.default.createElement(LanguageContext.Provider, { value: { language, setLanguage: changeLanguage } }, children);
  }
  function useLanguage() {
    const context = (0, import_react33.useContext)(LanguageContext);
    if (!context) {
      throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
  }

  // src/components/ComingSoon.tsx
  var translations = {
    en: {
      subtitle: "BLUEPRINT INCUBATION",
      title: "Drafting the Roadmap for",
      desc: "Our seniors are actively interviewing professionals, auditing placement metrics, and compiling real-world cost calculations to build a completely honest, sponsor-free blueprint. We are working hard to bring this page to you.",
      prioritizeBtn: "Prioritize This Page",
      prioritizedSuccess: "Request Registered! Moving this page up the queue.",
      exploreExams: "Explore Active Exams",
      goHome: "Return Home",
      contributorsNeeded: "Want to contribute?",
      contributorsDesc: "If you work in this field or cracked related exams, help us write this guide.",
      contactUs: "Reach Out to Us"
    },
    hi: {
      subtitle: "\u092C\u094D\u0932\u0942\u092A\u094D\u0930\u093F\u0902\u091F \u0924\u0948\u092F\u093E\u0930\u0940",
      title: "\u0930\u094B\u0921\u092E\u0948\u092A \u0938\u0902\u0915\u0932\u093F\u0924 \u0915\u093F\u092F\u093E \u091C\u093E \u0930\u0939\u093E \u0939\u0948:",
      desc: "\u0939\u092E\u093E\u0930\u0947 \u0938\u0940\u0928\u093F\u092F\u0930\u094D\u0938 \u0907\u0938 \u0938\u092E\u092F \u092A\u0947\u0936\u0947\u0935\u0930\u094B\u0902 \u0915\u093E \u0938\u093E\u0915\u094D\u0937\u093E\u0924\u094D\u0915\u093E\u0930 \u0932\u0947 \u0930\u0939\u0947 \u0939\u0948\u0902, \u092A\u094D\u0932\u0947\u0938\u092E\u0947\u0902\u091F \u092E\u0947\u091F\u094D\u0930\u093F\u0915\u094D\u0938 \u0915\u093E \u0911\u0921\u093F\u091F \u0915\u0930 \u0930\u0939\u0947 \u0939\u0948\u0902, \u0914\u0930 \u0907\u0938 \u0916\u0902\u0921 \u0915\u0947 \u0932\u093F\u090F \u092A\u0942\u0930\u0940 \u0924\u0930\u0939 \u0938\u0947 \u0908\u092E\u093E\u0928\u0926\u093E\u0930, \u0935\u093F\u091C\u094D\u091E\u093E\u092A\u0928-\u092E\u0941\u0915\u094D\u0924 \u092C\u094D\u0932\u0942\u092A\u094D\u0930\u093F\u0902\u091F \u092C\u0928\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0935\u093E\u0938\u094D\u0924\u0935\u093F\u0915 \u0932\u093E\u0917\u0924 \u0917\u0923\u0928\u093E \u0938\u0902\u0915\u0932\u093F\u0924 \u0915\u0930 \u0930\u0939\u0947 \u0939\u0948\u0902\u0964 \u0939\u092E \u0907\u0938 \u092A\u0947\u091C \u0915\u094B \u0906\u092A\u0915\u0947 \u092A\u093E\u0938 \u0932\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0915\u0921\u093C\u0940 \u092E\u0947\u0939\u0928\u0924 \u0915\u0930 \u0930\u0939\u0947 \u0939\u0948\u0902\u0964",
      prioritizeBtn: "\u0907\u0938 \u092A\u0947\u091C \u0915\u094B \u092A\u094D\u0930\u093E\u0925\u092E\u093F\u0915\u0924\u093E \u0926\u0947\u0902",
      prioritizedSuccess: "\u0905\u0928\u0941\u0930\u094B\u0927 \u0926\u0930\u094D\u091C \u0915\u093F\u092F\u093E \u0917\u092F\u093E! \u0907\u0938\u0947 \u092A\u094D\u0930\u093E\u0925\u092E\u093F\u0915\u0924\u093E \u0938\u0942\u091A\u0940 \u092E\u0947\u0902 \u090A\u092A\u0930 \u0932\u0947 \u091C\u093E\u092F\u093E \u091C\u093E \u0930\u0939\u093E \u0939\u0948\u0964",
      exploreExams: "\u0938\u0915\u094D\u0930\u093F\u092F \u092A\u0930\u0940\u0915\u094D\u0937\u093E\u090F\u0902 \u0926\u0947\u0916\u0947\u0902",
      goHome: "\u092E\u0941\u0916\u094D\u092F \u092A\u0943\u0937\u094D\u0920 \u092A\u0930 \u091C\u093E\u090F\u0902",
      contributorsNeeded: "\u092F\u094B\u0917\u0926\u093E\u0928 \u0926\u0947\u0928\u093E \u091A\u093E\u0939\u0924\u0947 \u0939\u0948\u0902?",
      contributorsDesc: "\u092F\u0926\u093F \u0906\u092A \u0907\u0938 \u0915\u094D\u0937\u0947\u0924\u094D\u0930 \u092E\u0947\u0902 \u0915\u093E\u092E \u0915\u0930\u0924\u0947 \u0939\u0948\u0902 \u092F\u093E \u0938\u0902\u092C\u0902\u0927\u093F\u0924 \u092A\u0930\u0940\u0915\u094D\u0937\u093E\u090F\u0902 \u092A\u093E\u0938 \u0915\u0940 \u0939\u0948\u0902, \u0924\u094B \u0907\u0938 \u0917\u093E\u0907\u0921 \u0915\u094B \u0932\u093F\u0916\u0928\u0947 \u092E\u0947\u0902 \u0939\u092E\u093E\u0930\u0940 \u092E\u0926\u0926 \u0915\u0930\u0947\u0902\u0964",
      contactUs: "\u0939\u092E\u0938\u0947 \u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0947\u0902"
    }
  };
  function ComingSoon({ pageNameEn, pageNameHi }) {
    const { language } = useLanguage();
    const t = translations[language];
    const pageTitleName = language === "en" ? pageNameEn : pageNameHi;
    const [requested, setRequested] = (0, import_react34.useState)(false);
    const [loading, setLoading] = (0, import_react34.useState)(false);
    const handlePrioritize = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setRequested(true);
      }, 800);
    };
    return /* @__PURE__ */ import_react34.default.createElement("div", { className: "relative overflow-hidden bg-slate-50 min-h-[85vh] flex items-center justify-center py-20 px-6 sm:px-8" }, /* @__PURE__ */ import_react34.default.createElement("div", { className: "absolute inset-0 z-0 pointer-events-none overflow-hidden select-none" }, /* @__PURE__ */ import_react34.default.createElement("svg", { className: "absolute inset-0 w-full h-full opacity-[0.12] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]", xmlns: "http://www.w3.org/2500/svg" }, /* @__PURE__ */ import_react34.default.createElement("defs", null, /* @__PURE__ */ import_react34.default.createElement("pattern", { id: "coming-soon-grid", width: "40", height: "40", patternUnits: "userSpaceOnUse" }, /* @__PURE__ */ import_react34.default.createElement("path", { d: "M 40 0 L 0 0 0 40", fill: "none", stroke: "#5563ED", strokeWidth: "1" }), /* @__PURE__ */ import_react34.default.createElement("circle", { cx: "40", cy: "40", r: "1.5", fill: "#5563ED", opacity: "0.4" }))), /* @__PURE__ */ import_react34.default.createElement("rect", { width: "100%", height: "100%", fill: "url(#coming-soon-grid)" })), /* @__PURE__ */ import_react34.default.createElement("div", { className: "absolute -top-[20%] -left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" }), /* @__PURE__ */ import_react34.default.createElement("div", { className: "absolute -bottom-[20%] -right-[10%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[80px]" })), /* @__PURE__ */ import_react34.default.createElement("div", { className: "container max-w-2xl mx-auto text-center relative z-10" }, /* @__PURE__ */ import_react34.default.createElement("div", { className: "relative mx-auto w-24 h-24 mb-8" }, /* @__PURE__ */ import_react34.default.createElement(
      motion.div,
      {
        animate: { rotate: 360 },
        transition: { duration: 25, repeat: Infinity, ease: "linear" },
        className: "absolute inset-0"
      },
      /* @__PURE__ */ import_react34.default.createElement("svg", { viewBox: "0 0 100 100", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "w-full h-full text-primary/20" }, /* @__PURE__ */ import_react34.default.createElement("circle", { cx: "50", cy: "50", r: "45", stroke: "currentColor", strokeWidth: "1.5", strokeDasharray: "4 4" }), /* @__PURE__ */ import_react34.default.createElement("rect", { x: "25", y: "25", width: "50", height: "50", stroke: "currentColor", strokeWidth: "1.5", strokeDasharray: "3 3" }))
    ), /* @__PURE__ */ import_react34.default.createElement(
      motion.div,
      {
        animate: {
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8]
        },
        transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        className: "absolute inset-0 flex items-center justify-center"
      },
      /* @__PURE__ */ import_react34.default.createElement("div", { className: "h-16 w-16 rounded-3xl bg-primary/5 border border-primary/20 flex items-center justify-center text-primary shadow-[0_8px_30px_rgba(85,99,237,0.15)]" }, /* @__PURE__ */ import_react34.default.createElement(Icon, { icon: "solar:compass-bold-duotone", className: "w-8 h-8" }))
    ), /* @__PURE__ */ import_react34.default.createElement("span", { className: "absolute -top-1 -right-1 flex h-4 w-4" }, /* @__PURE__ */ import_react34.default.createElement("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" }), /* @__PURE__ */ import_react34.default.createElement("span", { className: "relative inline-flex rounded-full h-4 w-4 bg-secondary" }))), /* @__PURE__ */ import_react34.default.createElement("p", { className: "text-secondary text-xs sm:text-sm font-extrabold tracking-[0.25em] uppercase mb-4" }, t.subtitle), /* @__PURE__ */ import_react34.default.createElement("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-black text-neutral-dark tracking-tight leading-tight mb-6" }, t.title, " ", /* @__PURE__ */ import_react34.default.createElement("span", { className: "text-primary block sm:inline" }, pageTitleName)), /* @__PURE__ */ import_react34.default.createElement("p", { className: "text-sm sm:text-base text-slate-550 leading-relaxed font-semibold mb-8 max-w-xl mx-auto" }, t.desc), /* @__PURE__ */ import_react34.default.createElement("div", { className: "bg-white border border-slate-200/80 rounded-3xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.015)] max-w-lg mx-auto mb-10" }, /* @__PURE__ */ import_react34.default.createElement(AnimatePresence, { mode: "wait" }, !requested ? /* @__PURE__ */ import_react34.default.createElement(
      motion.button,
      {
        key: "request-btn",
        initial: { opacity: 0, y: 5 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -5 },
        onClick: handlePrioritize,
        disabled: loading,
        className: "w-full py-3.5 px-6 rounded-2xl bg-primary hover:bg-primary/95 text-white font-extrabold text-sm shadow-md shadow-primary/10 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-80"
      },
      loading ? /* @__PURE__ */ import_react34.default.createElement(Icon, { icon: "eos-icons:loading", className: "w-5 h-5 animate-spin" }) : /* @__PURE__ */ import_react34.default.createElement(import_react34.default.Fragment, null, /* @__PURE__ */ import_react34.default.createElement(Icon, { icon: "solar:ranking-bold-duotone", className: "w-5 h-5" }), /* @__PURE__ */ import_react34.default.createElement("span", null, t.prioritizeBtn))
    ) : /* @__PURE__ */ import_react34.default.createElement(
      motion.div,
      {
        key: "success-msg",
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        className: "flex items-center gap-3 px-4 py-3 rounded-2xl bg-emerald-50 border border-emerald-100/50 text-emerald-700 text-sm font-bold justify-center"
      },
      /* @__PURE__ */ import_react34.default.createElement(Icon, { icon: "solar:check-circle-bold-duotone", className: "w-5 h-5 text-emerald-600 shrink-0" }),
      /* @__PURE__ */ import_react34.default.createElement("span", null, t.prioritizedSuccess)
    ))), /* @__PURE__ */ import_react34.default.createElement("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center" }, /* @__PURE__ */ import_react34.default.createElement(
      next_link_default,
      {
        href: "/",
        className: "w-full sm:w-auto px-6 py-3 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-2"
      },
      /* @__PURE__ */ import_react34.default.createElement(Icon, { icon: "solar:arrow-left-linear", className: "w-4 h-4" }),
      t.goHome
    ), /* @__PURE__ */ import_react34.default.createElement(
      next_link_default,
      {
        href: "/exams",
        className: "w-full sm:w-auto px-6 py-3 rounded-xl bg-primary/5 hover:bg-primary/10 text-primary text-sm font-bold transition-all flex items-center justify-center gap-2"
      },
      t.exploreExams,
      /* @__PURE__ */ import_react34.default.createElement(Icon, { icon: "solar:arrow-right-linear", className: "w-4 h-4" })
    )), /* @__PURE__ */ import_react34.default.createElement("div", { className: "mt-16 pt-8 border-t border-slate-200/60 max-w-md mx-auto" }, /* @__PURE__ */ import_react34.default.createElement("h4", { className: "text-xs font-extrabold text-slate-700 uppercase tracking-wider mb-2" }, t.contributorsNeeded), /* @__PURE__ */ import_react34.default.createElement("p", { className: "text-xs text-slate-500 font-semibold leading-relaxed mb-4" }, t.contributorsDesc), /* @__PURE__ */ import_react34.default.createElement(
      next_link_default,
      {
        href: "/about",
        className: "text-xs font-extrabold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
      },
      /* @__PURE__ */ import_react34.default.createElement(Icon, { icon: "solar:letter-bold-duotone", className: "w-4 h-4" }),
      /* @__PURE__ */ import_react34.default.createElement("span", null, t.contactUs)
    ))));
  }

  // src/components/ContextMenu.tsx
  var import_react36 = __toESM(require_react_shim());

  // .design-sync/ds-src/shims/next-navigation.ts
  var noop2 = () => {
  };
  function useRouter() {
    return {
      push: noop2,
      replace: noop2,
      prefetch: noop2,
      back: noop2,
      forward: noop2,
      refresh: noop2
    };
  }
  function usePathname() {
    return "/";
  }

  // src/components/ContextMenu.tsx
  var translations2 = {
    en: {
      back: "Go Back",
      home: "Go to Home",
      search: "Search Index",
      switchLang: "\u0939\u093F\u0928\u094D\u0926\u0940 \u092E\u0947\u0902 \u092C\u0926\u0932\u0947\u0902",
      scrollToTop: "Scroll to Top",
      copyLink: "Copy Page URL",
      copied: "URL Copied!"
    },
    hi: {
      back: "\u0935\u093E\u092A\u0938 \u091C\u093E\u090F\u0902",
      home: "\u092E\u0941\u0916\u094D\u092F \u092A\u0943\u0937\u094D\u0920",
      search: "\u0916\u094B\u091C\u0947\u0902 (\u2318K)",
      switchLang: "Switch to English",
      scrollToTop: "\u0938\u092C\u0938\u0947 \u090A\u092A\u0930 \u091C\u093E\u090F\u0902",
      copyLink: "\u0932\u093F\u0902\u0915 \u0915\u0949\u092A\u0940 \u0915\u0930\u0947\u0902",
      copied: "\u0932\u093F\u0902\u0915 \u0915\u0949\u092A\u0940 \u0939\u094B \u0917\u092F\u093E!"
    }
  };
  function ContextMenu() {
    const { language, setLanguage } = useLanguage();
    const router = useRouter();
    const t = translations2[language];
    const [isOpen, setIsOpen] = (0, import_react36.useState)(false);
    const [coords, setCoords] = (0, import_react36.useState)({ x: 0, y: 0 });
    const [copied, setCopied] = (0, import_react36.useState)(false);
    const menuRef = (0, import_react36.useRef)(null);
    (0, import_react36.useEffect)(() => {
      const handleContextMenu = (e) => {
        const target = e.target;
        if (target.closest("input") || target.closest("textarea") || target.closest("[contenteditable='true']") || e.shiftKey) {
          return;
        }
        e.preventDefault();
        setCoords({ x: e.clientX, y: e.clientY });
        setIsOpen(true);
        setCopied(false);
      };
      const handleClick = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
          setIsOpen(false);
        }
      };
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          setIsOpen(false);
        }
      };
      window.addEventListener("contextmenu", handleContextMenu);
      window.addEventListener("click", handleClick);
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("scroll", () => setIsOpen(false));
      return () => {
        window.removeEventListener("contextmenu", handleContextMenu);
        window.removeEventListener("click", handleClick);
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("scroll", () => setIsOpen(false));
      };
    }, []);
    const getMenuPosition = () => {
      if (typeof window === "undefined") return { top: 0, left: 0 };
      const menuWidth = 210;
      const menuHeight = 280;
      let left2 = coords.x;
      let top2 = coords.y;
      if (coords.x + menuWidth > window.innerWidth) {
        left2 = window.innerWidth - menuWidth - 10;
      }
      if (coords.y + menuHeight > window.innerHeight) {
        top2 = window.innerHeight - menuHeight - 10;
      }
      return { top: top2, left: left2 };
    };
    const handleCopyLink = () => {
      if (typeof window !== "undefined") {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          setIsOpen(false);
        }, 1e3);
      }
    };
    const handleToggleLanguage = () => {
      setLanguage(language === "en" ? "hi" : "en");
      setIsOpen(false);
    };
    const handleScrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
    };
    const { top, left } = getMenuPosition();
    return /* @__PURE__ */ import_react36.default.createElement(AnimatePresence, null, isOpen && /* @__PURE__ */ import_react36.default.createElement(
      motion.div,
      {
        ref: menuRef,
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.95 },
        transition: { duration: 0.12, ease: "easeOut" },
        style: { top: `${top}px`, left: `${left}px` },
        className: "fixed z-[100] w-[210px] bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-[0_12px_45px_rgba(0,0,0,0.12)] rounded-2xl p-1.5 select-none"
      },
      /* @__PURE__ */ import_react36.default.createElement(
        "button",
        {
          onClick: () => {
            router.back();
            setIsOpen(false);
          },
          className: "w-full text-left hover:bg-primary/5 hover:text-primary transition-all duration-150 rounded-xl px-3 py-2 flex items-center gap-2.5 text-xs font-bold text-slate-700 cursor-pointer"
        },
        /* @__PURE__ */ import_react36.default.createElement(Icon, { icon: "solar:arrow-left-bold-duotone", className: "w-4 h-4 text-slate-400 group-hover:text-primary" }),
        /* @__PURE__ */ import_react36.default.createElement("span", null, t.back)
      ),
      /* @__PURE__ */ import_react36.default.createElement(
        "button",
        {
          onClick: () => {
            router.push("/");
            setIsOpen(false);
          },
          className: "w-full text-left hover:bg-primary/5 hover:text-primary transition-all duration-150 rounded-xl px-3 py-2 flex items-center gap-2.5 text-xs font-bold text-slate-700 cursor-pointer"
        },
        /* @__PURE__ */ import_react36.default.createElement(Icon, { icon: "solar:home-2-bold-duotone", className: "w-4 h-4 text-slate-400" }),
        /* @__PURE__ */ import_react36.default.createElement("span", null, t.home)
      ),
      /* @__PURE__ */ import_react36.default.createElement("div", { className: "h-[1px] bg-slate-100 my-1" }),
      /* @__PURE__ */ import_react36.default.createElement(
        "button",
        {
          onClick: () => {
            setIsOpen(false);
            window.dispatchEvent(new CustomEvent("open-search"));
          },
          className: "w-full text-left hover:bg-primary/5 hover:text-primary transition-all duration-150 rounded-xl px-3 py-2 flex items-center gap-2.5 text-xs font-bold text-slate-700 cursor-pointer"
        },
        /* @__PURE__ */ import_react36.default.createElement(Icon, { icon: "solar:magnifer-bold-duotone", className: "w-4 h-4 text-slate-400" }),
        /* @__PURE__ */ import_react36.default.createElement("span", null, t.search)
      ),
      /* @__PURE__ */ import_react36.default.createElement(
        "button",
        {
          onClick: handleToggleLanguage,
          className: "w-full text-left hover:bg-primary/5 hover:text-primary transition-all duration-150 rounded-xl px-3 py-2 flex items-center gap-2.5 text-xs font-bold text-slate-700 cursor-pointer"
        },
        /* @__PURE__ */ import_react36.default.createElement(Icon, { icon: "solar:global-bold-duotone", className: "w-4 h-4 text-slate-400" }),
        /* @__PURE__ */ import_react36.default.createElement("span", null, t.switchLang)
      ),
      /* @__PURE__ */ import_react36.default.createElement("div", { className: "h-[1px] bg-slate-100 my-1" }),
      /* @__PURE__ */ import_react36.default.createElement(
        "button",
        {
          onClick: handleScrollToTop,
          className: "w-full text-left hover:bg-primary/5 hover:text-primary transition-all duration-150 rounded-xl px-3 py-2 flex items-center gap-2.5 text-xs font-bold text-slate-700 cursor-pointer"
        },
        /* @__PURE__ */ import_react36.default.createElement(Icon, { icon: "solar:double-alt-arrow-up-bold-duotone", className: "w-4 h-4 text-slate-400" }),
        /* @__PURE__ */ import_react36.default.createElement("span", null, t.scrollToTop)
      ),
      /* @__PURE__ */ import_react36.default.createElement(
        "button",
        {
          onClick: handleCopyLink,
          disabled: copied,
          className: `w-full text-left transition-all duration-150 rounded-xl px-3 py-2 flex items-center gap-2.5 text-xs font-bold cursor-pointer ${copied ? "bg-emerald-50 text-emerald-600 border border-emerald-100/50" : "hover:bg-primary/5 hover:text-primary text-slate-700"}`
        },
        copied ? /* @__PURE__ */ import_react36.default.createElement(import_react36.default.Fragment, null, /* @__PURE__ */ import_react36.default.createElement(Icon, { icon: "solar:check-circle-bold-duotone", className: "w-4 h-4 text-emerald-500" }), /* @__PURE__ */ import_react36.default.createElement("span", null, t.copied)) : /* @__PURE__ */ import_react36.default.createElement(import_react36.default.Fragment, null, /* @__PURE__ */ import_react36.default.createElement(Icon, { icon: "solar:copy-bold-duotone", className: "w-4 h-4 text-slate-400" }), /* @__PURE__ */ import_react36.default.createElement("span", null, t.copyLink))
      )
    ));
  }

  // .design-sync/ds-src/shims/next-image.tsx
  var import_react38 = __toESM(require_react_shim());
  function NextImage({
    src,
    alt = "",
    width,
    height,
    fill,
    priority,
    quality,
    sizes,
    placeholder,
    blurDataURL,
    loader,
    unoptimized,
    style,
    ...rest
  }) {
    const s = typeof src === "string" ? src : src && typeof src === "object" && "src" in src ? String(src.src ?? "") : "";
    const fillStyle = fill ? { position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", ...style } : style ?? {};
    return (
      // eslint-disable-next-line @next/next/no-img-element
      /* @__PURE__ */ import_react38.default.createElement(
        "img",
        {
          src: s,
          alt,
          width: fill ? void 0 : width,
          height: fill ? void 0 : height,
          style: fillStyle,
          ...rest
        }
      )
    );
  }

  // src/components/Footer.tsx
  var import_react40 = __toESM(require_react_shim());
  var translations3 = {
    en: {
      languageLabel: "Language",
      socialLabel: "Social",
      explore: "Explore",
      careers: "Careers",
      exams: "Exams",
      editorialReads: "Editorial Reads",
      featuredGuides: "Featured Guides",
      company: "Company",
      aboutUs: "About Us",
      contact: "Contact",
      resources: "Resources",
      communityDiscord: "Community Discord",
      contentPolicy: "Content Policy",
      faq: "FAQ",
      legal: "Legal",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      cookiePolicy: "Cookie Policy",
      editorialGuidelines: "Editorial Guidelines"
    },
    hi: {
      languageLabel: "\u092D\u093E\u0937\u093E",
      socialLabel: "\u0938\u094B\u0936\u0932",
      explore: "\u0916\u094B\u091C\u0947\u0902",
      careers: "\u0915\u0930\u093F\u092F\u0930",
      exams: "\u092A\u0930\u0940\u0915\u094D\u0937\u093E\u090F\u0902",
      editorialReads: "\u0938\u0902\u092A\u093E\u0926\u0915\u0940\u092F \u0932\u0947\u0916",
      featuredGuides: "\u091A\u0941\u0928\u093F\u0902\u0926\u093E \u092E\u093E\u0930\u094D\u0917\u0926\u0930\u094D\u0936\u093F\u0915\u093E\u090F\u0901",
      company: "\u0915\u0902\u092A\u0928\u0940",
      aboutUs: "\u0939\u092E\u093E\u0930\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902",
      contact: "\u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0947\u0902",
      resources: "\u0938\u0902\u0938\u093E\u0927\u0928",
      communityDiscord: "\u0915\u092E\u094D\u092F\u0941\u0928\u093F\u091F\u0940 \u0921\u093F\u0938\u094D\u0915\u0949\u0930\u094D\u0921",
      contentPolicy: "\u0938\u093E\u092E\u0917\u094D\u0930\u0940 \u0928\u0940\u0924\u093F",
      faq: "\u0905\u0915\u094D\u0938\u0930 \u092A\u0942\u091B\u0947 \u091C\u093E\u0928\u0947 \u0935\u093E\u0932\u0947 \u092A\u094D\u0930\u0936\u094D\u0928",
      legal: "\u0915\u093E\u0928\u0942\u0928\u0940",
      privacyPolicy: "\u0917\u094B\u092A\u0928\u0940\u092F\u0924\u093E \u0928\u0940\u0924\u093F",
      termsOfService: "\u0938\u0947\u0935\u093E \u0915\u0940 \u0936\u0930\u094D\u0924\u0947\u0902",
      cookiePolicy: "\u0915\u0941\u0915\u0940 \u0928\u0940\u0924\u093F",
      editorialGuidelines: "\u0938\u0902\u092A\u093E\u0926\u0915\u0940\u092F \u0926\u093F\u0936\u093E\u0928\u093F\u0930\u094D\u0926\u0947\u0936"
    }
  };
  function Footer() {
    const { language } = useLanguage();
    const t = translations3[language];
    return /* @__PURE__ */ import_react40.default.createElement("footer", { className: "bg-gradient-to-b from-[#1B1A62] to-[#5563ED] text-white pt-20 lg:pt-40 overflow-hidden mt-auto" }, /* @__PURE__ */ import_react40.default.createElement("div", { className: "w-full mx-auto px-6 md:px-8 lg:px-12 max-w-7xl" }, /* @__PURE__ */ import_react40.default.createElement("div", { className: "flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-32 mb-20 lg:mb-32" }, /* @__PURE__ */ import_react40.default.createElement("div", { className: "flex flex-col gap-10 lg:gap-12 w-full lg:w-1/4" }, /* @__PURE__ */ import_react40.default.createElement("div", null, /* @__PURE__ */ import_react40.default.createElement(next_link_default, { href: "/", className: "hover:opacity-80 transition-opacity inline-block" }, /* @__PURE__ */ import_react40.default.createElement(NextImage, { src: "/logo.png", alt: "WhatNow Logo", width: 140, height: 40, className: "h-24 w-auto brightness-0 invert" }))), /* @__PURE__ */ import_react40.default.createElement("div", null, /* @__PURE__ */ import_react40.default.createElement("p", { className: "text-white/80 text-sm mb-4" }, t.socialLabel), /* @__PURE__ */ import_react40.default.createElement("div", { className: "flex items-center gap-5" }, /* @__PURE__ */ import_react40.default.createElement(next_link_default, { href: "/discord", className: "text-white hover:text-white/80 transition-colors", "aria-label": "Discord" }, /* @__PURE__ */ import_react40.default.createElement(Icon, { icon: "ri:discord-fill", className: "w-7 h-7" })), /* @__PURE__ */ import_react40.default.createElement(next_link_default, { href: "https://instagram.com/whatnow.in", className: "text-white hover:text-white/80 transition-colors", "aria-label": "Instagram" }, /* @__PURE__ */ import_react40.default.createElement(Icon, { icon: "ri:instagram-line", className: "w-7 h-7" })), /* @__PURE__ */ import_react40.default.createElement(next_link_default, { href: "https://www.youtube.com/@indiawhatnow", className: "text-white hover:text-white/80 transition-colors", "aria-label": "YouTube" }, /* @__PURE__ */ import_react40.default.createElement(Icon, { icon: "ri:youtube-fill", className: "w-7 h-7" }))))), /* @__PURE__ */ import_react40.default.createElement("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-x-8 lg:gap-x-12 gap-y-12 lg:gap-y-16 w-full lg:w-3/4" }, /* @__PURE__ */ import_react40.default.createElement("div", null, /* @__PURE__ */ import_react40.default.createElement("h3", { className: "text-base font-semibold text-white/70 mb-6" }, t.explore), /* @__PURE__ */ import_react40.default.createElement("ul", { className: "space-y-4" }, /* @__PURE__ */ import_react40.default.createElement("li", null, /* @__PURE__ */ import_react40.default.createElement(next_link_default, { href: "/careers", className: "text-white/90 hover:text-white hover:underline transition-all" }, t.careers)), /* @__PURE__ */ import_react40.default.createElement("li", null, /* @__PURE__ */ import_react40.default.createElement(next_link_default, { href: "/exams", className: "text-white/90 hover:text-white hover:underline transition-all" }, t.exams)), /* @__PURE__ */ import_react40.default.createElement("li", null, /* @__PURE__ */ import_react40.default.createElement(next_link_default, { href: "/reads", className: "text-white/90 hover:text-white hover:underline transition-all" }, t.editorialReads)), /* @__PURE__ */ import_react40.default.createElement("li", null, /* @__PURE__ */ import_react40.default.createElement(next_link_default, { href: "/reads", className: "text-white/90 hover:text-white hover:underline transition-all" }, t.featuredGuides)))), /* @__PURE__ */ import_react40.default.createElement("div", null, /* @__PURE__ */ import_react40.default.createElement("h3", { className: "text-base font-semibold text-white/70 mb-6" }, t.company), /* @__PURE__ */ import_react40.default.createElement("ul", { className: "space-y-4" }, /* @__PURE__ */ import_react40.default.createElement("li", null, /* @__PURE__ */ import_react40.default.createElement(next_link_default, { href: "/about", className: "text-white/90 hover:text-white hover:underline transition-all" }, t.aboutUs)), /* @__PURE__ */ import_react40.default.createElement("li", null, /* @__PURE__ */ import_react40.default.createElement(next_link_default, { href: "/coming-soon", className: "text-white/90 hover:text-white hover:underline transition-all" }, t.contact)))), /* @__PURE__ */ import_react40.default.createElement("div", null, /* @__PURE__ */ import_react40.default.createElement("h3", { className: "text-base font-semibold text-white/70 mb-6" }, t.resources), /* @__PURE__ */ import_react40.default.createElement("ul", { className: "space-y-4" }, /* @__PURE__ */ import_react40.default.createElement("li", null, /* @__PURE__ */ import_react40.default.createElement(next_link_default, { href: "/discord", className: "text-white/90 hover:text-white hover:underline transition-all" }, t.communityDiscord)), /* @__PURE__ */ import_react40.default.createElement("li", null, /* @__PURE__ */ import_react40.default.createElement(next_link_default, { href: "/coming-soon", className: "text-white/90 hover:text-white hover:underline transition-all" }, t.contentPolicy)), /* @__PURE__ */ import_react40.default.createElement("li", null, /* @__PURE__ */ import_react40.default.createElement(next_link_default, { href: "/coming-soon", className: "text-white/90 hover:text-white hover:underline transition-all" }, t.faq)))), /* @__PURE__ */ import_react40.default.createElement("div", null, /* @__PURE__ */ import_react40.default.createElement("h3", { className: "text-base font-semibold text-white/70 mb-6" }, t.legal), /* @__PURE__ */ import_react40.default.createElement("ul", { className: "space-y-4" }, /* @__PURE__ */ import_react40.default.createElement("li", null, /* @__PURE__ */ import_react40.default.createElement(next_link_default, { href: "/coming-soon", className: "text-white/90 hover:text-white hover:underline transition-all" }, t.privacyPolicy)), /* @__PURE__ */ import_react40.default.createElement("li", null, /* @__PURE__ */ import_react40.default.createElement(next_link_default, { href: "/coming-soon", className: "text-white/90 hover:text-white hover:underline transition-all" }, t.termsOfService)), /* @__PURE__ */ import_react40.default.createElement("li", null, /* @__PURE__ */ import_react40.default.createElement(next_link_default, { href: "/coming-soon", className: "text-white/90 hover:text-white hover:underline transition-all" }, t.cookiePolicy)), /* @__PURE__ */ import_react40.default.createElement("li", null, /* @__PURE__ */ import_react40.default.createElement(next_link_default, { href: "/coming-soon", className: "text-white/90 hover:text-white hover:underline transition-all" }, t.editorialGuidelines))))))), /* @__PURE__ */ import_react40.default.createElement("div", { className: "w-full flex justify-center items-end overflow-hidden select-none" }, /* @__PURE__ */ import_react40.default.createElement("h1", { className: "text-[23vw] font-black text-white/95 leading-[0.7] tracking-tighter whitespace-nowrap translate-y-2 lg:translate-y-4" }, "WhatNow")));
  }

  // src/components/Navbar.tsx
  var import_react41 = __toESM(require_react_shim());
  var translations4 = {
    en: {
      careers: "Careers",
      exams: "Exams",
      reads: "Reads",
      about: "About",
      allCareers: "All Careers",
      allExams: "All Exams",
      allReads: "All Reads",
      activeGuides: "Active Blueprints",
      comingSoonLabel: "Coming Soon",
      searchTitle: "Search (Ctrl+K)",
      searchMobile: "Search",
      themeLabel: "Vibe Theme",
      activeGuidesHeader: "Active Guides",
      incubatingHeader: "Under Incubation",
      jeePaper3: "JEE Paper 3 (B.Planning)",
      // Careers
      uxDesign: "Product & UX Design",
      fashionDesign: "Fashion Design",
      corpLaw: "Corporate & Litigation Law",
      merchantNavy: "Merchant Navy Deck Officer",
      urbanPlanning: "Urban Planning & Development",
      armedForces: "Armed Forces Officer",
      prodMgmt: "Product Management",
      // Exams
      uceed: "UCEED (IIT Design)",
      nid: "NID DAT",
      nift: "NIFT Entrance",
      clat: "CLAT",
      nda: "NDA Exam",
      imucet: "IMU CET",
      jee: "JEE Main & Advanced",
      neet: "NEET UG",
      // Reads
      iitDrop: "IIT brand vs drop year?",
      parentConvince: "Talk design with parents?",
      metroMove: "Relocating to metro cities?"
    },
    hi: {
      careers: "\u0915\u0930\u093F\u092F\u0930",
      exams: "\u092A\u0930\u0940\u0915\u094D\u0937\u093E\u090F\u0902",
      reads: "\u0932\u0947\u0916",
      about: "\u0939\u092E\u093E\u0930\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902",
      allCareers: "\u0938\u092D\u0940 \u0915\u0930\u093F\u092F\u0930",
      allExams: "\u0938\u092D\u0940 \u092A\u0930\u0940\u0915\u094D\u0937\u093E\u090F\u0902",
      allReads: "\u0938\u092D\u0940 \u0932\u0947\u0916",
      activeGuides: "\u0938\u0915\u094D\u0930\u093F\u092F \u092C\u094D\u0932\u0942\u092A\u094D\u0930\u093F\u0902\u091F",
      comingSoonLabel: "\u091C\u0932\u094D\u0926 \u0906 \u0930\u0939\u0947 \u0939\u0948\u0902",
      searchTitle: "\u0916\u094B\u091C\u0947\u0902 (Ctrl+K)",
      searchMobile: "\u0916\u094B\u091C\u0947\u0902",
      themeLabel: "\u0935\u093E\u0907\u092C \u0925\u0940\u092E",
      activeGuidesHeader: "\u0938\u0915\u094D\u0930\u093F\u092F \u092E\u093E\u0930\u094D\u0917\u0926\u0930\u094D\u0936\u093F\u0915\u093E\u090F\u0901",
      incubatingHeader: "\u0924\u0948\u092F\u093E\u0930\u0940 \u091C\u093E\u0930\u0940 \u0939\u0948",
      jeePaper3: "JEE \u092A\u0947\u092A\u0930 3 (B.Planning)",
      // Careers
      uxDesign: "\u092A\u094D\u0930\u094B\u0921\u0915\u094D\u091F \u0914\u0930 \u092F\u0942\u090F\u0915\u094D\u0938 \u0921\u093F\u091C\u093C\u093E\u0907\u0928",
      fashionDesign: "\u092B\u0948\u0936\u0928 \u0921\u093F\u091C\u093C\u093E\u0907\u0928",
      corpLaw: "\u0915\u0949\u0930\u094D\u092A\u094B\u0930\u0947\u091F \u0914\u0930 \u0932\u093F\u091F\u093F\u0917\u0947\u0936\u0928 \u0932\u0949",
      merchantNavy: "\u092E\u0930\u094D\u091A\u0947\u0902\u091F \u0928\u0947\u0935\u0940 \u0921\u0947\u0915 \u0911\u092B\u093F\u0938\u0930",
      urbanPlanning: "\u0936\u0939\u0930\u0940 \u0928\u093F\u092F\u094B\u091C\u0928 \u0914\u0930 \u0935\u093F\u0915\u093E\u0938",
      armedForces: "\u0938\u0936\u0938\u094D\u0924\u094D\u0930 \u092C\u0932 \u0905\u0927\u093F\u0915\u093E\u0930\u0940",
      prodMgmt: "\u0909\u0924\u094D\u092A\u093E\u0926 \u092A\u094D\u0930\u092C\u0902\u0927\u0928",
      // Exams
      uceed: "UCEED (IIT \u0921\u093F\u091C\u093C\u093E\u0907\u0928)",
      nid: "NID DAT",
      nift: "NIFT \u090F\u0902\u091F\u094D\u0930\u0947\u0902\u0938",
      clat: "CLAT",
      nda: "NDA \u092A\u0930\u0940\u0915\u094D\u0937\u093E",
      imucet: "IMU CET",
      jee: "JEE \u092E\u0947\u0928 \u0914\u0930 \u090F\u0921\u0935\u093E\u0902\u0938\u094D\u0921",
      neet: "NEET UG",
      // Reads
      iitDrop: "IIT \u092C\u094D\u0930\u093E\u0902\u0921 \u092C\u0928\u093E\u092E \u0921\u094D\u0930\u0949\u092A \u0908\u092F\u0930?",
      parentConvince: "\u092E\u093E\u0924\u093E-\u092A\u093F\u0924\u093E \u0938\u0947 \u0921\u093F\u091C\u093C\u093E\u0907\u0928 \u092A\u0930 \u092C\u093E\u0924?",
      metroMove: "\u092E\u0947\u091F\u094D\u0930\u094B \u0936\u0939\u0930\u094B\u0902 \u092E\u0947\u0902 \u091C\u093E\u0928\u093E?"
    }
  };
  var THEMES = [
    {
      id: "indigo",
      nameEn: "Default Indigo",
      nameHi: "\u0921\u093F\u092B\u093C\u0949\u0932\u094D\u091F \u0907\u0902\u0921\u093F\u0917\u094B",
      primary: "#4F46E5",
      hover: "#4338ca",
      secondary: "#0A8B74",
      secondaryHover: "#087A66",
      bgTint: "#F8F8F6",
      bgTint2: "#F1F5F9",
      color: "bg-[#4F46E5]"
    },
    {
      id: "lavender",
      nameEn: "Lavender Breeze",
      nameHi: "\u0932\u0948\u0935\u0947\u0902\u0921\u0930 \u092C\u094D\u0930\u0940\u091C\u093C",
      primary: "#8B5CF6",
      hover: "#7c3aed",
      secondary: "#7C3AED",
      secondaryHover: "#6d28d9",
      bgTint: "#F5F3FF",
      bgTint2: "#EDE9FE",
      color: "bg-[#8B5CF6]"
    },
    {
      id: "mint",
      nameEn: "Fresh Mint",
      nameHi: "\u092B\u094D\u0930\u0947\u0936 \u092E\u093F\u0902\u091F",
      primary: "#10B981",
      hover: "#059669",
      secondary: "#0D9488",
      secondaryHover: "#0F766E",
      bgTint: "#F0FDF9",
      bgTint2: "#ECFDF5",
      color: "bg-[#10B981]"
    },
    {
      id: "peach",
      nameEn: "Sweet Peach",
      nameHi: "\u0938\u094D\u0935\u0940\u091F \u092A\u0940\u091A",
      primary: "#F59E0B",
      hover: "#d97706",
      secondary: "#EA580C",
      secondaryHover: "#C2410C",
      bgTint: "#FFFBEB",
      bgTint2: "#FEF3C7",
      color: "bg-[#F59E0B]"
    },
    {
      id: "rose",
      nameEn: "Soft Rose",
      nameHi: "\u0938\u0949\u092B\u094D\u091F \u0930\u094B\u091C\u093C",
      primary: "#EC4899",
      hover: "#db2777",
      secondary: "#DB2777",
      secondaryHover: "#BE185D",
      bgTint: "#FFF1F2",
      bgTint2: "#FFE4E6",
      color: "bg-[#EC4899]"
    }
  ];
  function Navbar() {
    const { language, setLanguage } = useLanguage();
    const t = translations4[language];
    const [isOpen, setIsOpen] = (0, import_react41.useState)(false);
    const [activeDropdown, setActiveDropdown] = (0, import_react41.useState)(null);
    const [activeTheme, setActiveTheme] = (0, import_react41.useState)("indigo");
    const [isThemeOpen, setIsThemeOpen] = (0, import_react41.useState)(false);
    const themeDropdownRef = (0, import_react41.useRef)(null);
    const applyTheme = (themeId) => {
      const selectedTheme = THEMES.find((t2) => t2.id === themeId) || THEMES[0];
      document.documentElement.style.setProperty("--color-primary", selectedTheme.primary);
      document.documentElement.style.setProperty("--color-primary-hover", selectedTheme.hover);
      document.documentElement.style.setProperty("--color-secondary", selectedTheme.secondary);
      document.documentElement.style.setProperty("--color-secondary-hover", selectedTheme.secondaryHover);
      document.documentElement.style.setProperty("--color-bg-tint", selectedTheme.bgTint);
      document.documentElement.style.setProperty("--color-bg-tint2", selectedTheme.bgTint2);
      localStorage.setItem("whatnow-vibe-theme", themeId);
      setActiveTheme(themeId);
    };
    (0, import_react41.useEffect)(() => {
      function handleClickOutside(event) {
        if (themeDropdownRef.current && !themeDropdownRef.current.contains(event.target)) {
          setIsThemeOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
    (0, import_react41.useEffect)(() => {
      const savedTheme = localStorage.getItem("whatnow-vibe-theme");
      if (savedTheme) {
        applyTheme(savedTheme);
      }
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("whatnow-dark-mode");
    }, []);
    const [mobileAccordions, setMobileAccordions] = (0, import_react41.useState)({
      careers: false,
      exams: false,
      reads: false
    });
    const toggleMobileAccordion = (key) => {
      setMobileAccordions((prev) => ({
        ...prev,
        [key]: !prev[key]
      }));
    };
    (0, import_react41.useEffect)(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      return () => {
        document.body.style.overflow = "";
      };
    }, [isOpen]);
    const careersItems = [
      { href: "/careers/design", label: t.uxDesign, status: "ready" },
      { href: "/careers/fashion-design", label: t.fashionDesign, status: "ready" },
      { href: "/careers/law", label: t.corpLaw, status: "ready" },
      { href: "/careers/merchant-navy", label: t.merchantNavy, status: "ready" },
      { href: "/careers/urban-planning", label: t.urbanPlanning, status: "ready" },
      { label: t.armedForces, status: "coming-soon" },
      { label: t.prodMgmt, status: "coming-soon" }
    ];
    const examsItems = [
      { href: "/exams/uceed", label: t.uceed, status: "ready" },
      { label: t.nid, status: "coming-soon" },
      { href: "/exams/nift", label: t.nift, status: "ready" },
      { href: "/exams/clat", label: t.clat, status: "ready" },
      { label: t.nda, status: "coming-soon" },
      { href: "/exams/imu-cet", label: t.imucet, status: "ready" },
      { href: "/exams/jee-paper3", label: t.jeePaper3, status: "ready" },
      { label: t.jee, status: "coming-soon" },
      { label: t.neet, status: "coming-soon" }
    ];
    const readsItems = [
      { label: t.iitDrop, status: "coming-soon" },
      { label: t.parentConvince, status: "coming-soon" },
      { label: t.metroMove, status: "coming-soon" }
    ];
    return /* @__PURE__ */ import_react41.default.createElement(import_react41.default.Fragment, null, /* @__PURE__ */ import_react41.default.createElement("nav", { className: "w-full bg-white/90 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50" }, /* @__PURE__ */ import_react41.default.createElement("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react41.default.createElement("div", { className: "flex justify-between items-center h-20 gap-4" }, /* @__PURE__ */ import_react41.default.createElement(next_link_default, { href: "/", className: "flex gap-2 items-center shrink-0" }, /* @__PURE__ */ import_react41.default.createElement("div", { className: "relative h-10 w-10" }, /* @__PURE__ */ import_react41.default.createElement(
      NextImage,
      {
        src: "/logo.png",
        alt: "WhatNow Logo",
        fill: true,
        className: "object-contain object-left",
        priority: true
      }
    )), /* @__PURE__ */ import_react41.default.createElement("div", { className: "inline-block" }, /* @__PURE__ */ import_react41.default.createElement("span", { className: "font-heading font-black text-xl xl:text-2xl text-neutral-dark tracking-tight" }, "What"), /* @__PURE__ */ import_react41.default.createElement("span", { className: "font-heading font-black text-xl xl:text-2xl text-primary tracking-tight" }, "Now"))), /* @__PURE__ */ import_react41.default.createElement("div", { className: "hidden lg:flex items-center gap-8 text-sm font-bold text-slate-650 shrink-0" }, /* @__PURE__ */ import_react41.default.createElement(
      "div",
      {
        className: "relative py-6 cursor-pointer",
        onMouseEnter: () => setActiveDropdown("careers"),
        onMouseLeave: () => setActiveDropdown(null)
      },
      /* @__PURE__ */ import_react41.default.createElement("div", { className: "flex items-center gap-1 hover:text-primary transition-colors" }, /* @__PURE__ */ import_react41.default.createElement("span", null, t.careers), /* @__PURE__ */ import_react41.default.createElement(
        Icon,
        {
          icon: "solar:alt-arrow-down-linear",
          className: `w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === "careers" ? "rotate-180 text-primary" : ""}`
        }
      )),
      /* @__PURE__ */ import_react41.default.createElement(AnimatePresence, null, activeDropdown === "careers" && /* @__PURE__ */ import_react41.default.createElement(
        motion.div,
        {
          initial: { opacity: 0, y: 10, scale: 0.98 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: 10, scale: 0.98 },
          transition: { duration: 0.18, ease: "easeOut" },
          className: "absolute left-1/2 -translate-x-1/2 top-full w-[520px] bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-900/8 overflow-hidden z-50 flex"
        },
        /* @__PURE__ */ import_react41.default.createElement("div", { className: "w-7/12 p-5 flex flex-col justify-between" }, /* @__PURE__ */ import_react41.default.createElement("div", null, /* @__PURE__ */ import_react41.default.createElement("span", { className: "text-[10px] font-semibold uppercase text-slate-400 tracking-[0.12em] block mb-3" }, t.activeGuidesHeader), /* @__PURE__ */ import_react41.default.createElement("div", { className: "space-y-0.5" }, careersItems.filter((i) => i.status === "ready").map((item) => /* @__PURE__ */ import_react41.default.createElement(
          next_link_default,
          {
            key: item.href,
            href: item.href || "#",
            className: "flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-primary/[0.06] transition-all duration-150 group"
          },
          /* @__PURE__ */ import_react41.default.createElement("div", { className: "flex items-center gap-3 group-hover:translate-x-0.5 transition-transform duration-150" }, /* @__PURE__ */ import_react41.default.createElement("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" }), /* @__PURE__ */ import_react41.default.createElement("span", { className: "font-medium text-[13px] leading-tight" }, item.label)),
          /* @__PURE__ */ import_react41.default.createElement(Icon, { icon: "ph:arrow-right", className: "w-3 h-3 opacity-0 group-hover:opacity-100 text-primary -translate-x-1 group-hover:translate-x-0 transition-all duration-150 shrink-0" })
        )))), /* @__PURE__ */ import_react41.default.createElement("div", { className: "mt-5 pt-4 border-t border-slate-100" }, /* @__PURE__ */ import_react41.default.createElement(
          next_link_default,
          {
            href: "/careers",
            className: "inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary hover:text-primary-hover transition-colors tracking-wide"
          },
          /* @__PURE__ */ import_react41.default.createElement("span", null, t.allCareers),
          /* @__PURE__ */ import_react41.default.createElement(Icon, { icon: "ph:arrow-right", className: "w-3 h-3" })
        ))),
        /* @__PURE__ */ import_react41.default.createElement("div", { className: "w-5/12 bg-slate-50 border-l border-slate-100 p-5" }, /* @__PURE__ */ import_react41.default.createElement("span", { className: "text-[10px] font-semibold uppercase text-slate-400 tracking-[0.12em] block mb-3" }, t.comingSoonLabel), /* @__PURE__ */ import_react41.default.createElement("div", { className: "space-y-2" }, careersItems.filter((i) => i.status === "coming-soon").map((item, index) => /* @__PURE__ */ import_react41.default.createElement(
          "div",
          {
            key: index,
            className: "px-3 py-2 rounded-lg flex items-center justify-between gap-2 bg-white border border-slate-100"
          },
          /* @__PURE__ */ import_react41.default.createElement("span", { className: "text-[12px] font-medium text-slate-400 leading-tight" }, item.label),
          /* @__PURE__ */ import_react41.default.createElement("span", { className: "text-[9px] font-semibold uppercase text-slate-400 tracking-wide shrink-0" }, language === "hi" ? "\u091C\u0932\u094D\u0926" : "Soon")
        ))))
      ))
    ), /* @__PURE__ */ import_react41.default.createElement(
      "div",
      {
        className: "relative py-6 cursor-pointer",
        onMouseEnter: () => setActiveDropdown("exams"),
        onMouseLeave: () => setActiveDropdown(null)
      },
      /* @__PURE__ */ import_react41.default.createElement("div", { className: "flex items-center gap-1 hover:text-primary transition-colors" }, /* @__PURE__ */ import_react41.default.createElement("span", null, t.exams), /* @__PURE__ */ import_react41.default.createElement(
        Icon,
        {
          icon: "solar:alt-arrow-down-linear",
          className: `w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === "exams" ? "rotate-180 text-primary" : ""}`
        }
      )),
      /* @__PURE__ */ import_react41.default.createElement(AnimatePresence, null, activeDropdown === "exams" && /* @__PURE__ */ import_react41.default.createElement(
        motion.div,
        {
          initial: { opacity: 0, y: 10, scale: 0.98 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: 10, scale: 0.98 },
          transition: { duration: 0.18, ease: "easeOut" },
          className: "absolute left-1/2 -translate-x-1/2 top-full w-[520px] bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-900/8 overflow-hidden z-50 flex"
        },
        /* @__PURE__ */ import_react41.default.createElement("div", { className: "w-6/12 p-5 flex flex-col justify-between" }, /* @__PURE__ */ import_react41.default.createElement("div", null, /* @__PURE__ */ import_react41.default.createElement("span", { className: "text-[10px] font-semibold uppercase text-slate-400 tracking-[0.12em] block mb-3" }, t.activeGuidesHeader), /* @__PURE__ */ import_react41.default.createElement("div", { className: "space-y-0.5" }, examsItems.filter((i) => i.status === "ready").map((item) => /* @__PURE__ */ import_react41.default.createElement(
          next_link_default,
          {
            key: item.href,
            href: item.href || "#",
            className: "flex items-center justify-between gap-2 px-3 py-2.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-primary/[0.06] transition-all duration-150 group"
          },
          /* @__PURE__ */ import_react41.default.createElement("div", { className: "flex items-center gap-3 group-hover:translate-x-0.5 transition-transform duration-150" }, /* @__PURE__ */ import_react41.default.createElement("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" }), /* @__PURE__ */ import_react41.default.createElement("span", { className: "font-medium text-[13px] leading-tight" }, item.label)),
          /* @__PURE__ */ import_react41.default.createElement(Icon, { icon: "ph:arrow-right", className: "w-3 h-3 opacity-0 group-hover:opacity-100 text-primary -translate-x-1 group-hover:translate-x-0 transition-all duration-150 shrink-0" })
        )))), /* @__PURE__ */ import_react41.default.createElement("div", { className: "mt-5 pt-4 border-t border-slate-100" }, /* @__PURE__ */ import_react41.default.createElement(
          next_link_default,
          {
            href: "/exams",
            className: "inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary hover:text-primary-hover transition-colors tracking-wide"
          },
          /* @__PURE__ */ import_react41.default.createElement("span", null, t.allExams),
          /* @__PURE__ */ import_react41.default.createElement(Icon, { icon: "ph:arrow-right", className: "w-3 h-3" })
        ))),
        /* @__PURE__ */ import_react41.default.createElement("div", { className: "w-6/12 bg-slate-50 border-l border-slate-100 p-5 max-h-[320px] overflow-y-auto" }, /* @__PURE__ */ import_react41.default.createElement("span", { className: "text-[10px] font-semibold uppercase text-slate-400 tracking-[0.12em] block mb-3" }, t.comingSoonLabel), /* @__PURE__ */ import_react41.default.createElement("div", { className: "space-y-1.5" }, examsItems.filter((i) => i.status === "coming-soon").map((item, index) => /* @__PURE__ */ import_react41.default.createElement(
          "div",
          {
            key: index,
            className: "px-3 py-2 rounded-lg flex items-center justify-between gap-2 bg-white border border-slate-100"
          },
          /* @__PURE__ */ import_react41.default.createElement("span", { className: "text-[12px] font-medium text-slate-400 truncate" }, item.label),
          /* @__PURE__ */ import_react41.default.createElement("span", { className: "text-[9px] font-semibold uppercase text-slate-400 tracking-wide shrink-0" }, language === "hi" ? "\u091C\u0932\u094D\u0926" : "Soon")
        ))))
      ))
    ), /* @__PURE__ */ import_react41.default.createElement(
      "div",
      {
        className: "relative py-6 cursor-pointer",
        onMouseEnter: () => setActiveDropdown("reads"),
        onMouseLeave: () => setActiveDropdown(null)
      },
      /* @__PURE__ */ import_react41.default.createElement("div", { className: "flex items-center gap-1 hover:text-primary transition-colors" }, /* @__PURE__ */ import_react41.default.createElement("span", null, t.reads), /* @__PURE__ */ import_react41.default.createElement(
        Icon,
        {
          icon: "solar:alt-arrow-down-linear",
          className: `w-3.5 h-3.5 transition-transform duration-300 ${activeDropdown === "reads" ? "rotate-180 text-primary" : ""}`
        }
      )),
      /* @__PURE__ */ import_react41.default.createElement(AnimatePresence, null, activeDropdown === "reads" && /* @__PURE__ */ import_react41.default.createElement(
        motion.div,
        {
          initial: { opacity: 0, y: 10, scale: 0.98 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: 10, scale: 0.98 },
          transition: { duration: 0.18, ease: "easeOut" },
          className: "absolute left-1/2 -translate-x-1/2 top-full w-[340px] bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-900/8 p-5 z-50 flex flex-col"
        },
        /* @__PURE__ */ import_react41.default.createElement("span", { className: "text-[10px] font-semibold uppercase text-slate-400 tracking-[0.12em] block mb-3" }, t.comingSoonLabel),
        /* @__PURE__ */ import_react41.default.createElement("div", { className: "space-y-1.5 mb-5" }, readsItems.map((item, index) => /* @__PURE__ */ import_react41.default.createElement(
          "div",
          {
            key: index,
            className: "px-3 py-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between gap-2"
          },
          /* @__PURE__ */ import_react41.default.createElement("span", { className: "text-[12px] font-medium text-slate-500 leading-tight" }, item.label),
          /* @__PURE__ */ import_react41.default.createElement("span", { className: "text-[9px] font-semibold uppercase text-slate-400 tracking-wide shrink-0" }, language === "hi" ? "\u091C\u0932\u094D\u0926" : "Soon")
        ))),
        /* @__PURE__ */ import_react41.default.createElement("div", { className: "pt-4 border-t border-slate-100" }, /* @__PURE__ */ import_react41.default.createElement(
          next_link_default,
          {
            href: "/reads",
            className: "inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary hover:text-primary-hover transition-colors tracking-wide"
          },
          /* @__PURE__ */ import_react41.default.createElement("span", null, t.allReads),
          /* @__PURE__ */ import_react41.default.createElement(Icon, { icon: "ph:arrow-right", className: "w-3 h-3" })
        ))
      ))
    ), /* @__PURE__ */ import_react41.default.createElement(
      next_link_default,
      {
        href: "/about",
        className: "hover:text-primary transition-colors py-6"
      },
      t.about
    )), /* @__PURE__ */ import_react41.default.createElement("div", { className: "hidden lg:flex items-center shrink-0 gap-3" }, /* @__PURE__ */ import_react41.default.createElement(
      "button",
      {
        onClick: () => window.dispatchEvent(new CustomEvent("open-notice-board")),
        className: "relative text-gray-600 hover:text-gray-900 transition-colors p-2 cursor-pointer flex items-center justify-center rounded-xl hover:bg-slate-50",
        title: language === "hi" ? "\u0938\u0942\u091A\u0928\u093E \u092A\u091F\u094D\u091F (\u0932\u093E\u0907\u0935)" : "Notice Board (Live)"
      },
      /* @__PURE__ */ import_react41.default.createElement(Icon, { icon: "solar:bell-bing-bold-duotone", className: "w-5.5 h-5.5 text-slate-600 hover:text-primary transition-colors" }),
      /* @__PURE__ */ import_react41.default.createElement("span", { className: "absolute top-1.5 right-1.5 flex h-2 w-2" }, /* @__PURE__ */ import_react41.default.createElement("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" }), /* @__PURE__ */ import_react41.default.createElement("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-red-500" }))
    ), /* @__PURE__ */ import_react41.default.createElement(
      "button",
      {
        onClick: () => window.dispatchEvent(new CustomEvent("open-search")),
        className: "text-gray-600 hover:text-gray-900 transition-colors p-2 cursor-pointer flex items-center gap-1.5",
        title: t.searchTitle
      },
      /* @__PURE__ */ import_react41.default.createElement("span", { className: "sr-only" }, t.searchMobile),
      /* @__PURE__ */ import_react41.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ import_react41.default.createElement("path", { d: "M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })),
      /* @__PURE__ */ import_react41.default.createElement("kbd", { className: "hidden xl:inline-block text-[10px] font-bold text-slate-400 border border-slate-200 rounded px-1.5 py-0.5 bg-slate-50 font-sans" }, "\u2318K")
    ), /* @__PURE__ */ import_react41.default.createElement(
      "button",
      {
        onClick: () => setLanguage(language === "en" ? "hi" : "en"),
        className: "flex items-center gap-0.5 rounded-xl border border-slate-200 overflow-hidden text-[11px] font-black tracking-tight shadow-sm hover:border-primary/40 transition-all duration-200 cursor-pointer",
        title: language === "en" ? "Switch to Hindi" : "Switch to English"
      },
      /* @__PURE__ */ import_react41.default.createElement("span", { className: `px-2.5 py-1.5 transition-all duration-200 ${language === "en" ? "bg-primary text-white" : "text-slate-500 hover:bg-slate-50"}` }, "EN"),
      /* @__PURE__ */ import_react41.default.createElement("span", { className: `px-2.5 py-1.5 transition-all duration-200 ${language === "hi" ? "bg-primary text-white" : "text-slate-500 hover:bg-slate-50"}` }, "\u0939\u093F")
    ), /* @__PURE__ */ import_react41.default.createElement("div", { className: "relative", ref: themeDropdownRef }, /* @__PURE__ */ import_react41.default.createElement(
      "button",
      {
        onClick: () => setIsThemeOpen(!isThemeOpen),
        className: "text-gray-600 hover:text-gray-900 transition-colors p-2 cursor-pointer flex items-center justify-center rounded-xl hover:bg-slate-50",
        title: t.themeLabel
      },
      /* @__PURE__ */ import_react41.default.createElement(Icon, { icon: "solar:palette-bold-duotone", className: "w-5.5 h-5.5 text-slate-600 hover:text-primary transition-colors" })
    ), /* @__PURE__ */ import_react41.default.createElement(AnimatePresence, null, isThemeOpen && /* @__PURE__ */ import_react41.default.createElement(
      motion.div,
      {
        initial: { opacity: 0, y: 10, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 10, scale: 0.95 },
        transition: { duration: 0.15 },
        className: "absolute right-0 top-full mt-2 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl p-4 z-50 flex flex-col gap-2.5"
      },
      /* @__PURE__ */ import_react41.default.createElement("span", { className: "text-[10px] font-black uppercase text-slate-400 tracking-wider px-1" }, t.themeLabel),
      /* @__PURE__ */ import_react41.default.createElement("div", { className: "flex flex-col gap-1" }, THEMES.map((theme) => /* @__PURE__ */ import_react41.default.createElement(
        "button",
        {
          key: theme.id,
          onClick: () => {
            applyTheme(theme.id);
            setIsThemeOpen(false);
          },
          className: `flex items-center justify-between px-2.5 py-2 rounded-xl text-left text-xs font-bold transition-all cursor-pointer ${activeTheme === theme.id ? "bg-slate-50 text-slate-900" : "text-slate-650 hover:bg-slate-50"}`
        },
        /* @__PURE__ */ import_react41.default.createElement("div", { className: "flex items-center gap-2.5" }, /* @__PURE__ */ import_react41.default.createElement("span", { className: `w-3.5 h-3.5 rounded-full ${theme.color} shadow-sm border border-black/5` }), /* @__PURE__ */ import_react41.default.createElement("span", null, language === "hi" ? theme.nameHi : theme.nameEn)),
        activeTheme === theme.id && /* @__PURE__ */ import_react41.default.createElement(Icon, { icon: "ph:check-bold", className: "w-3.5 h-3.5 text-slate-850" })
      )))
    )))), /* @__PURE__ */ import_react41.default.createElement("div", { className: "flex lg:hidden items-center gap-1.5" }, /* @__PURE__ */ import_react41.default.createElement(
      "button",
      {
        onClick: () => window.dispatchEvent(new CustomEvent("open-notice-board")),
        className: "relative text-gray-600 hover:text-gray-900 p-2 cursor-pointer rounded-xl hover:bg-slate-50 transition-colors",
        title: "Notice Board"
      },
      /* @__PURE__ */ import_react41.default.createElement(Icon, { icon: "solar:bell-bing-bold-duotone", className: "w-5.5 h-5.5" }),
      /* @__PURE__ */ import_react41.default.createElement("span", { className: "absolute top-1.5 right-1.5 flex h-2 w-2" }, /* @__PURE__ */ import_react41.default.createElement("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" }), /* @__PURE__ */ import_react41.default.createElement("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-red-500" }))
    ), /* @__PURE__ */ import_react41.default.createElement(
      "button",
      {
        onClick: () => window.dispatchEvent(new CustomEvent("open-search")),
        className: "text-gray-600 hover:text-gray-900 p-2 cursor-pointer rounded-xl hover:bg-slate-50 transition-colors",
        title: t.searchMobile
      },
      /* @__PURE__ */ import_react41.default.createElement("span", { className: "sr-only" }, t.searchMobile),
      /* @__PURE__ */ import_react41.default.createElement("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ import_react41.default.createElement("path", { d: "M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }))
    ), /* @__PURE__ */ import_react41.default.createElement(
      "button",
      {
        onClick: () => setIsOpen(true),
        className: "text-gray-600 hover:text-gray-900 p-2 cursor-pointer rounded-xl hover:bg-slate-50 transition-colors"
      },
      /* @__PURE__ */ import_react41.default.createElement("span", { className: "sr-only" }, "Open main menu"),
      /* @__PURE__ */ import_react41.default.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ import_react41.default.createElement("path", { d: "M4 6H20M4 12H20M4 18H20", stroke: "currentColor", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }))
    ))))), /* @__PURE__ */ import_react41.default.createElement(AnimatePresence, null, isOpen && /* @__PURE__ */ import_react41.default.createElement(import_react41.default.Fragment, null, /* @__PURE__ */ import_react41.default.createElement(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setIsOpen(false),
        className: "fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm lg:hidden"
      }
    ), /* @__PURE__ */ import_react41.default.createElement(
      motion.div,
      {
        initial: { x: "100%" },
        animate: { x: 0 },
        exit: { x: "100%" },
        transition: { type: "spring", damping: 26, stiffness: 220 },
        className: "fixed top-0 right-0 bottom-0 z-50 w-full max-w-[20rem] bg-white shadow-2xl p-6 lg:hidden flex flex-col justify-between overflow-y-auto"
      },
      /* @__PURE__ */ import_react41.default.createElement("div", null, /* @__PURE__ */ import_react41.default.createElement("div", { className: "flex items-center justify-between mb-8" }, /* @__PURE__ */ import_react41.default.createElement(next_link_default, { href: "/", onClick: () => setIsOpen(false), className: "flex gap-2 items-center" }, /* @__PURE__ */ import_react41.default.createElement("div", { className: "relative h-9 w-9" }, /* @__PURE__ */ import_react41.default.createElement(
        NextImage,
        {
          src: "/logo.png",
          alt: "WhatNow Logo",
          fill: true,
          className: "object-contain",
          priority: true
        }
      )), /* @__PURE__ */ import_react41.default.createElement("div", null, /* @__PURE__ */ import_react41.default.createElement("span", { className: "font-heading font-black text-xl text-neutral-dark tracking-tight" }, "What"), /* @__PURE__ */ import_react41.default.createElement("span", { className: "font-heading font-black text-xl text-primary tracking-tight" }, "Now"))), /* @__PURE__ */ import_react41.default.createElement(
        "button",
        {
          onClick: () => setIsOpen(false),
          className: "p-2 text-slate-450 hover:text-neutral-dark hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
        },
        /* @__PURE__ */ import_react41.default.createElement(Icon, { icon: "solar:close-circle-bold", className: "w-6 h-6" })
      )), /* @__PURE__ */ import_react41.default.createElement(
        "button",
        {
          onClick: () => {
            setIsOpen(false);
            window.dispatchEvent(new CustomEvent("open-search"));
          },
          className: "w-full flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-slate-400 hover:bg-slate-100 hover:border-slate-350 transition-all text-sm font-semibold mb-6 text-left cursor-pointer"
        },
        /* @__PURE__ */ import_react41.default.createElement(Icon, { icon: "solar:magnifer-linear", className: "w-5 h-5 text-slate-400" }),
        /* @__PURE__ */ import_react41.default.createElement("span", null, t.searchMobile, "...")
      ), /* @__PURE__ */ import_react41.default.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ import_react41.default.createElement("div", { className: "border border-slate-100 rounded-2xl overflow-hidden" }, /* @__PURE__ */ import_react41.default.createElement(
        "button",
        {
          onClick: () => toggleMobileAccordion("careers"),
          className: "w-full flex items-center justify-between px-4 py-3.5 bg-slate-50/50 hover:bg-slate-50 text-slate-700 text-sm font-extrabold cursor-pointer"
        },
        /* @__PURE__ */ import_react41.default.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ import_react41.default.createElement(Icon, { icon: "solar:compass-bold-duotone", className: "w-4.5 h-4.5 text-slate-550" }), /* @__PURE__ */ import_react41.default.createElement("span", null, t.careers)),
        /* @__PURE__ */ import_react41.default.createElement(
          Icon,
          {
            icon: "solar:alt-arrow-down-linear",
            className: `w-4 h-4 transition-transform duration-300 ${mobileAccordions.careers ? "rotate-180" : ""}`
          }
        )
      ), /* @__PURE__ */ import_react41.default.createElement(AnimatePresence, { initial: false }, mobileAccordions.careers && /* @__PURE__ */ import_react41.default.createElement(
        motion.div,
        {
          initial: { height: 0 },
          animate: { height: "auto" },
          exit: { height: 0 },
          className: "overflow-hidden bg-white border-t border-slate-50"
        },
        /* @__PURE__ */ import_react41.default.createElement("div", { className: "p-3 space-y-1" }, /* @__PURE__ */ import_react41.default.createElement(
          next_link_default,
          {
            href: "/careers",
            onClick: () => setIsOpen(false),
            className: "block px-3 py-2 text-xs font-black text-primary hover:bg-slate-50 rounded-xl"
          },
          t.allCareers,
          " \u2192"
        ), careersItems.filter((i) => i.status === "ready").map((item) => /* @__PURE__ */ import_react41.default.createElement(
          next_link_default,
          {
            key: item.href,
            href: item.href || "#",
            onClick: () => setIsOpen(false),
            className: "block px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 rounded-xl"
          },
          item.label
        )), /* @__PURE__ */ import_react41.default.createElement("div", { className: "pt-2 border-t border-slate-100 mt-2" }, /* @__PURE__ */ import_react41.default.createElement("span", { className: "px-3 text-[9px] font-black uppercase text-slate-400 tracking-wider block mb-1" }, t.comingSoonLabel), careersItems.filter((i) => i.status === "coming-soon").map((item, idx) => /* @__PURE__ */ import_react41.default.createElement("div", { key: idx, className: "px-3 py-1.5 text-xs text-slate-400 font-semibold italic" }, item.label))))
      ))), /* @__PURE__ */ import_react41.default.createElement("div", { className: "border border-slate-100 rounded-2xl overflow-hidden" }, /* @__PURE__ */ import_react41.default.createElement(
        "button",
        {
          onClick: () => toggleMobileAccordion("exams"),
          className: "w-full flex items-center justify-between px-4 py-3.5 bg-slate-50/50 hover:bg-slate-50 text-slate-700 text-sm font-extrabold cursor-pointer"
        },
        /* @__PURE__ */ import_react41.default.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ import_react41.default.createElement(Icon, { icon: "solar:document-bold-duotone", className: "w-4.5 h-4.5 text-slate-550" }), /* @__PURE__ */ import_react41.default.createElement("span", null, t.exams)),
        /* @__PURE__ */ import_react41.default.createElement(
          Icon,
          {
            icon: "solar:alt-arrow-down-linear",
            className: `w-4 h-4 transition-transform duration-300 ${mobileAccordions.exams ? "rotate-180" : ""}`
          }
        )
      ), /* @__PURE__ */ import_react41.default.createElement(AnimatePresence, { initial: false }, mobileAccordions.exams && /* @__PURE__ */ import_react41.default.createElement(
        motion.div,
        {
          initial: { height: 0 },
          animate: { height: "auto" },
          exit: { height: 0 },
          className: "overflow-hidden bg-white border-t border-slate-50"
        },
        /* @__PURE__ */ import_react41.default.createElement("div", { className: "p-3 space-y-1" }, /* @__PURE__ */ import_react41.default.createElement(
          next_link_default,
          {
            href: "/exams",
            onClick: () => setIsOpen(false),
            className: "block px-3 py-2 text-xs font-black text-primary hover:bg-slate-50 rounded-xl"
          },
          t.allExams,
          " \u2192"
        ), examsItems.filter((i) => i.status === "ready").map((item) => /* @__PURE__ */ import_react41.default.createElement(
          next_link_default,
          {
            key: item.href,
            href: item.href || "#",
            onClick: () => setIsOpen(false),
            className: "block px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 rounded-xl"
          },
          item.label
        )), /* @__PURE__ */ import_react41.default.createElement("div", { className: "pt-2 border-t border-slate-100 mt-2" }, /* @__PURE__ */ import_react41.default.createElement("span", { className: "px-3 text-[9px] font-black uppercase text-slate-400 tracking-wider block mb-1" }, t.comingSoonLabel), /* @__PURE__ */ import_react41.default.createElement("div", { className: "max-h-[150px] overflow-y-auto" }, examsItems.filter((i) => i.status === "coming-soon").map((item, idx) => /* @__PURE__ */ import_react41.default.createElement("div", { key: idx, className: "px-3 py-1 text-xs text-slate-400 font-semibold italic" }, item.label)))))
      ))), /* @__PURE__ */ import_react41.default.createElement("div", { className: "border border-slate-100 rounded-2xl overflow-hidden" }, /* @__PURE__ */ import_react41.default.createElement(
        "button",
        {
          onClick: () => toggleMobileAccordion("reads"),
          className: "w-full flex items-center justify-between px-4 py-3.5 bg-slate-50/50 hover:bg-slate-50 text-slate-700 text-sm font-extrabold cursor-pointer"
        },
        /* @__PURE__ */ import_react41.default.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ import_react41.default.createElement(Icon, { icon: "solar:notes-bold-duotone", className: "w-4.5 h-4.5 text-slate-550" }), /* @__PURE__ */ import_react41.default.createElement("span", null, t.reads)),
        /* @__PURE__ */ import_react41.default.createElement(
          Icon,
          {
            icon: "solar:alt-arrow-down-linear",
            className: `w-4 h-4 transition-transform duration-300 ${mobileAccordions.reads ? "rotate-180" : ""}`
          }
        )
      ), /* @__PURE__ */ import_react41.default.createElement(AnimatePresence, { initial: false }, mobileAccordions.reads && /* @__PURE__ */ import_react41.default.createElement(
        motion.div,
        {
          initial: { height: 0 },
          animate: { height: "auto" },
          exit: { height: 0 },
          className: "overflow-hidden bg-white border-t border-slate-50"
        },
        /* @__PURE__ */ import_react41.default.createElement("div", { className: "p-3 space-y-1" }, /* @__PURE__ */ import_react41.default.createElement(
          next_link_default,
          {
            href: "/reads",
            onClick: () => setIsOpen(false),
            className: "block px-3 py-2 text-xs font-black text-primary hover:bg-slate-50 rounded-xl"
          },
          t.allReads,
          " \u2192"
        ), /* @__PURE__ */ import_react41.default.createElement("div", { className: "pt-2" }, /* @__PURE__ */ import_react41.default.createElement("span", { className: "px-3 text-[9px] font-black uppercase text-slate-400 tracking-wider block mb-1" }, t.comingSoonLabel), readsItems.map((item, idx) => /* @__PURE__ */ import_react41.default.createElement("div", { key: idx, className: "px-3 py-1.5 text-xs text-slate-400 font-semibold italic" }, item.label))))
      ))), /* @__PURE__ */ import_react41.default.createElement(
        next_link_default,
        {
          href: "/about",
          onClick: () => setIsOpen(false),
          className: "flex items-center gap-2 px-4 py-3.5 border border-slate-100 rounded-2xl hover:bg-slate-50 text-slate-700 text-sm font-extrabold"
        },
        /* @__PURE__ */ import_react41.default.createElement(Icon, { icon: "solar:info-circle-bold-duotone", className: "w-4.5 h-4.5 text-slate-550" }),
        /* @__PURE__ */ import_react41.default.createElement("span", null, t.about)
      ), /* @__PURE__ */ import_react41.default.createElement("div", { className: "border-t border-slate-100 pt-5 mt-4" }, /* @__PURE__ */ import_react41.default.createElement("span", { className: "px-2 text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-3" }, language === "en" ? "Language" : "\u092D\u093E\u0937\u093E"), /* @__PURE__ */ import_react41.default.createElement("div", { className: "flex gap-3 px-2" }, /* @__PURE__ */ import_react41.default.createElement(
        "button",
        {
          onClick: () => setLanguage("en"),
          className: `flex-1 py-2.5 rounded-xl text-sm font-black transition-all cursor-pointer border ${language === "en" ? "bg-primary text-white border-primary" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"}`
        },
        "English"
      ), /* @__PURE__ */ import_react41.default.createElement(
        "button",
        {
          onClick: () => setLanguage("hi"),
          className: `flex-1 py-2.5 rounded-xl text-sm font-black transition-all cursor-pointer border ${language === "hi" ? "bg-primary text-white border-primary" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"}`
        },
        "\u0939\u093F\u0902\u0926\u0940"
      ))), /* @__PURE__ */ import_react41.default.createElement("div", { className: "border-t border-slate-100 pt-5 mt-4" }, /* @__PURE__ */ import_react41.default.createElement("span", { className: "px-2 text-[10px] font-black uppercase text-slate-400 tracking-wider block mb-3" }, t.themeLabel), /* @__PURE__ */ import_react41.default.createElement("div", { className: "flex gap-3 px-2" }, THEMES.map((theme) => /* @__PURE__ */ import_react41.default.createElement(
        "button",
        {
          key: theme.id,
          onClick: () => applyTheme(theme.id),
          className: `w-10 h-10 rounded-full border-2 transition-all flex items-center justify-center cursor-pointer shadow-sm ${theme.color} ${activeTheme === theme.id ? "border-slate-800 scale-110 ring-2 ring-slate-800/10" : "border-transparent hover:scale-105"}`,
          title: language === "hi" ? theme.nameHi : theme.nameEn
        },
        activeTheme === theme.id && /* @__PURE__ */ import_react41.default.createElement(Icon, { icon: "ph:check-bold", className: "w-5 h-5 text-white" })
      ))))))
    ))));
  }

  // src/components/NoticeBoard.tsx
  var import_react43 = __toESM(require_react_shim());
  function NoticeBoard() {
    const [isOpen, setIsOpen] = (0, import_react43.useState)(false);
    const [loading, setLoading] = (0, import_react43.useState)(false);
    const [notices, setNotices] = (0, import_react43.useState)([]);
    const [error, setError] = (0, import_react43.useState)(null);
    const pathname = usePathname();
    const fetchNotices = async () => {
      setLoading(true);
      setError(null);
      try {
        const rssUrl = "https://www.hindustantimes.com/feeds/rss/education/competitive-exams/rssfeed.xml";
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`
        );
        if (!response.ok) throw new Error("Failed to fetch notices");
        const data = await response.json();
        if (data.status === "ok" && data.items) {
          setNotices(data.items);
        } else {
          throw new Error("Invalid response format");
        }
      } catch (err) {
        console.error("Notice Board Fetch Error:", err);
        setError(err.message || "Failed to load real-time alerts.");
        setNotices([
          {
            title: "NIFT 2026 Counseling Registrations Commencing Shorty",
            pubDate: (/* @__PURE__ */ new Date()).toISOString(),
            link: "/exams/nift",
            description: "Counseling allocation procedures for admission to undergraduate courses at National Institutes of Fashion Technology across India will begin this week."
          },
          {
            title: "UCEED 2026 Joint Seat Allocation Results Out",
            pubDate: new Date(Date.now() - 864e5).toISOString(),
            link: "/exams/uceed",
            description: "IIT Bombay has announced the round 1 of seat allocation results. Candidates can check their status by logging into the admissions portal."
          },
          {
            title: "CLAT 2026 Academic Calendar & Admissions Schedule Released",
            pubDate: new Date(Date.now() - 1728e5).toISOString(),
            link: "/exams/clat",
            description: "The Consortium of NLUs has released the revised merit allocation calendar. Online counseling verification starts next Monday."
          }
        ]);
      } finally {
        setLoading(false);
      }
    };
    (0, import_react43.useEffect)(() => {
      const handleOpen = () => {
        setIsOpen(true);
        fetchNotices();
      };
      window.addEventListener("open-notice-board", handleOpen);
      return () => {
        window.removeEventListener("open-notice-board", handleOpen);
      };
    }, []);
    (0, import_react43.useEffect)(() => {
      if (pathname === "/") {
        const hasAutoOpened = sessionStorage.getItem("whatnow-notice-auto-opened");
        if (!hasAutoOpened) {
          const timer = setTimeout(() => {
            setIsOpen(true);
            fetchNotices();
            sessionStorage.setItem("whatnow-notice-auto-opened", "true");
          }, 1800);
          return () => clearTimeout(timer);
        }
      }
    }, [pathname]);
    const timeAgo = (dateStr) => {
      try {
        const date = new Date(dateStr.replace(/-/g, "/"));
        const now2 = /* @__PURE__ */ new Date();
        const seconds = Math.floor((now2.getTime() - date.getTime()) / 1e3);
        if (seconds < 60) return "Just now";
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `${minutes}m ago`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `${hours}h ago`;
        const days = Math.floor(hours / 24);
        if (days === 1) return "Yesterday";
        return `${days} days ago`;
      } catch (e) {
        return "Recently";
      }
    };
    return /* @__PURE__ */ import_react43.default.createElement(AnimatePresence, null, isOpen && /* @__PURE__ */ import_react43.default.createElement(import_react43.default.Fragment, null, /* @__PURE__ */ import_react43.default.createElement(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setIsOpen(false),
        className: "fixed inset-0 bg-slate-900/30 backdrop-blur-xs z-50"
      }
    ), /* @__PURE__ */ import_react43.default.createElement(
      motion.div,
      {
        initial: { x: "100%" },
        animate: { x: 0 },
        exit: { x: "100%" },
        transition: { type: "spring", damping: 28, stiffness: 240 },
        className: "fixed top-0 right-0 bottom-0 w-full max-w-[24rem] bg-white shadow-2xl z-50 flex flex-col overflow-hidden border-l border-slate-100"
      },
      /* @__PURE__ */ import_react43.default.createElement("div", { className: "p-5 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between" }, /* @__PURE__ */ import_react43.default.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ import_react43.default.createElement("div", { className: "relative flex h-3 w-3" }, /* @__PURE__ */ import_react43.default.createElement("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" }), /* @__PURE__ */ import_react43.default.createElement("span", { className: "relative inline-flex rounded-full h-3 w-3 bg-red-500" })), /* @__PURE__ */ import_react43.default.createElement("h2", { className: "font-heading font-black text-lg text-neutral-dark tracking-tight" }, "Live Exam Notice Board")), /* @__PURE__ */ import_react43.default.createElement(
        "button",
        {
          onClick: () => setIsOpen(false),
          className: "p-1.5 text-slate-450 hover:text-neutral-dark hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
        },
        /* @__PURE__ */ import_react43.default.createElement(Icon, { icon: "solar:close-circle-bold", className: "w-5.5 h-5.5" })
      )),
      /* @__PURE__ */ import_react43.default.createElement("div", { className: "flex-1 overflow-y-auto p-5 space-y-4" }, loading ? (
        // Skeletons while loading
        Array.from({ length: 4 }).map((_, idx) => /* @__PURE__ */ import_react43.default.createElement("div", { key: idx, className: "p-4 border border-slate-100 rounded-xl space-y-2.5 animate-pulse" }, /* @__PURE__ */ import_react43.default.createElement("div", { className: "h-3.5 bg-slate-200 rounded w-1/3" }), /* @__PURE__ */ import_react43.default.createElement("div", { className: "h-5 bg-slate-200 rounded w-full" }), /* @__PURE__ */ import_react43.default.createElement("div", { className: "h-3 bg-slate-200 rounded w-5/6" })))
      ) : error ? (
        // Error feedback block
        /* @__PURE__ */ import_react43.default.createElement("div", { className: "p-4 border border-rose-100 bg-rose-50/30 rounded-xl text-center space-y-2" }, /* @__PURE__ */ import_react43.default.createElement(Icon, { icon: "solar:danger-bold", className: "w-7 h-7 text-rose-500 mx-auto" }), /* @__PURE__ */ import_react43.default.createElement("p", { className: "text-xs font-semibold text-rose-700" }, "Real-time fetch issue. Showing cached guide updates."))
      ) : null, !loading && notices.length > 0 && /* @__PURE__ */ import_react43.default.createElement("div", { className: "space-y-4" }, notices.map((notice, index) => /* @__PURE__ */ import_react43.default.createElement(
        motion.div,
        {
          key: index,
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: index * 0.05 },
          className: "p-4 bg-white border border-slate-150 rounded-xl hover:shadow-md hover:border-primary/30 transition-all duration-200 group flex flex-col gap-3 relative overflow-hidden"
        },
        /* @__PURE__ */ import_react43.default.createElement("div", { className: "flex items-center justify-between gap-2" }, /* @__PURE__ */ import_react43.default.createElement("span", { className: "text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-primary/[0.08] text-primary" }, "Live Exam Update"), /* @__PURE__ */ import_react43.default.createElement("span", { className: "text-[10px] font-bold text-slate-400" }, timeAgo(notice.pubDate))),
        /* @__PURE__ */ import_react43.default.createElement("h3", { className: "font-extrabold text-sm text-neutral-dark group-hover:text-primary transition-colors leading-snug" }, notice.title),
        notice.enclosure?.link && /* @__PURE__ */ import_react43.default.createElement("div", { className: "relative w-full h-32 rounded-lg overflow-hidden bg-slate-100 border border-slate-100" }, /* @__PURE__ */ import_react43.default.createElement(
          "img",
          {
            src: notice.enclosure.link,
            alt: notice.title,
            className: "object-cover w-full h-full group-hover:scale-103 transition-transform duration-300",
            loading: "lazy"
          }
        )),
        /* @__PURE__ */ import_react43.default.createElement("p", { className: "text-xs text-slate-500 leading-normal line-clamp-3 font-medium" }, notice.description),
        /* @__PURE__ */ import_react43.default.createElement(
          "a",
          {
            href: notice.link,
            target: notice.link.startsWith("http") ? "_blank" : "_self",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-1.5 text-xs font-black text-primary hover:text-primary-hover w-max pt-1"
          },
          /* @__PURE__ */ import_react43.default.createElement("span", null, "Read full announcement"),
          /* @__PURE__ */ import_react43.default.createElement(Icon, { icon: "ph:arrow-right-bold", className: "w-3 h-3 transition-transform group-hover:translate-x-0.5" })
        )
      )))),
      /* @__PURE__ */ import_react43.default.createElement("div", { className: "p-4 border-t border-slate-100 bg-slate-50/50 text-center" }, /* @__PURE__ */ import_react43.default.createElement("p", { className: "text-[10px] font-bold text-slate-400 flex items-center justify-center gap-1" }, /* @__PURE__ */ import_react43.default.createElement(Icon, { icon: "solar:shield-check-bold", className: "w-3.5 h-3.5 text-emerald-500" }), "Real-time aggregated feed from educational networks."))
    )));
  }

  // src/components/SearchModal.tsx
  var import_react45 = __toESM(require_react_shim());

  // src/data/searchIndex.ts
  var SEARCH_INDEX = [
    // --- GENERAL / CORE PAGES ---
    {
      title: "Home",
      category: "General",
      description: "Unbiased guides, real stories, and clear roadmaps for Indian students.",
      href: "/",
      keywords: ["home", "main", "landing", "whatnow", "website", "start"],
      status: "ready"
    },
    {
      title: "About WhatNow",
      category: "General",
      description: "Our mission to provide free, honest, non-sponsored career guidance without coaching agendas.",
      href: "/about",
      keywords: ["about us", "who are we", "our team", "free guidance", "mission", "values", "pillars", "agenda"],
      status: "ready"
    },
    {
      title: "How to Convince Your Parents",
      category: "General",
      description: "Arm yourself with placement stats, average salary data, and logical arguments for non-traditional careers.",
      href: "/convince-parents",
      keywords: ["parents", "convince", "family", "career choice", "job security", "prestige", "talking points"],
      status: "ready"
    },
    {
      title: "Scholarships Database",
      category: "General",
      description: "Institute-wise fee waivers, MCM schemes, and state scholarships for professional degrees.",
      href: "/scholarships",
      keywords: ["scholarships", "financial aid", "fees", "loans", "waiver", "funding"],
      status: "ready"
    },
    // --- EXAMS ---
    {
      title: "UCEED \u2014 Design at an IIT",
      category: "Exams",
      description: "Main hub for the UCEED entrance exam for Bachelor of Design (B.Des) programs at IIT Bombay, Delhi, Guwahati, and more.",
      href: "/exams/uceed",
      keywords: ["uceed", "iit", "design", "bdes", "entrance", "seats", "iit bombay", "iit delhi", "iit guwahati"],
      status: "ready"
    },
    {
      title: "UCEED \u2014 What It Is (Exam Breakdown)",
      category: "Exams",
      description: "Detailed guide to UCEED syllabus, Part A & Part B structure, marking scheme, eligibility, and marking rules.",
      href: "/exams/uceed/what-it-is",
      keywords: ["uceed", "syllabus", "paper pattern", "part a", "part b", "marking scheme", "msq", "mcq", "nat", "eligibility", "attempts"],
      status: "ready"
    },
    {
      title: "UCEED \u2014 Scholarships & Cost",
      category: "Exams",
      description: "Find tuition waivers, Merit-cum-Means (MCM) scholarships, SC/ST/PwD exemptions, and total cost breakdown for design at IITs.",
      href: "/exams/uceed/scholarships",
      keywords: ["uceed", "scholarships", "fees", "cost", "iit fees", "mcm waiver", "exemption", "sc st fees"],
      status: "ready"
    },
    {
      title: "UCEED \u2014 Is It For You?",
      category: "Exams",
      description: "Honest self-check to see if design at an IIT aligns with your interests, skills, and daily work preferences.",
      href: "/exams/uceed/is-it-for-you",
      keywords: ["uceed", "is design for me", "career check", "suitability", "work life", "design aptitude"],
      status: "ready"
    },
    {
      title: "UCEED \u2014 Resources & Prep Plan",
      category: "Exams",
      description: "Books worth your money, free mock tests, previous question papers, and self-prep roadmaps without expensive coaching.",
      href: "/exams/uceed/resources",
      keywords: ["uceed", "books", "preparation", "self study", "prep plan", "mock tests", "papers", "study material"],
      status: "ready"
    },
    {
      title: "UCEED \u2014 Convince Your Parents",
      category: "Exams",
      description: "Salary packages, placement figures, recruiters, and handling doubts regarding IIT B.Des vs B.Tech.",
      href: "/exams/uceed/convince-parents",
      keywords: ["uceed", "parents", "placements", "salary", "bdes salary", "recruitment", "career security"],
      status: "ready"
    },
    {
      title: "NID \u2014 National Institute of Design",
      category: "Exams",
      description: "Guide to the NID DAT (Design Aptitude Test) for B.Des and M.Des programs across NID campuses.",
      href: "/exams/nid",
      keywords: ["nid", "nid dat", "ahmedabad", "design school", "creative test", "studio test"],
      status: "coming-soon"
    },
    {
      title: "NIFT \u2014 National Institute of Fashion Technology",
      category: "Exams",
      description: "Fashion design, fashion communication, and apparel production entrance guide.",
      href: "/exams/nift",
      keywords: ["nift", "fashion", "apparel", "design", "clothing", "communication"],
      status: "ready"
    },
    {
      title: "NIFT \u2014 What It Is (Exam Breakdown)",
      category: "Exams",
      description: "Detailed guide to NIFT CAT & GAT paper patterns, marks weightage, eligibility, and the Situation Test.",
      href: "/exams/nift/what-it-is",
      keywords: ["nift", "syllabus", "creative ability test", "cat", "general ability test", "gat", "situation test", "eligibility", "weightage"],
      status: "ready"
    },
    {
      title: "NIFT \u2014 Fees & Scholarships",
      category: "Exams",
      description: "Course fee details for B.Des and B.FTech at NIFT, and the Sarthak Financial Assistance scheme waivers.",
      href: "/exams/nift/scholarships",
      keywords: ["nift", "fees", "scholarships", "cost", "sarthak scheme", "fee waiver", "financial aid"],
      status: "ready"
    },
    {
      title: "NIFT \u2014 Is It For You?",
      category: "Exams",
      description: "Honest self-check to see if studying fashion design, technology, or merchandising at NIFT is the right fit.",
      href: "/exams/nift/is-it-for-you",
      keywords: ["nift", "is fashion design for me", "suitability", "fashion career", "work life", "merchandising"],
      status: "ready"
    },
    {
      title: "NIFT \u2014 Resources & Prep Plan",
      category: "Exams",
      description: "Curated self-study guides, sample questions, and books to prep for CAT, GAT, and the Situation Test.",
      href: "/exams/nift/resources",
      keywords: ["nift", "books", "preparation", "self study", "mock tests", "situation test prep"],
      status: "ready"
    },
    {
      title: "NIFT \u2014 Convince Your Parents",
      category: "Exams",
      description: "Equipping students with retail industry placements statistics, career stability metrics, and talking points to align parents on fashion careers.",
      href: "/exams/nift/convince-parents",
      keywords: ["nift", "parents", "convince", "family", "career security", "placements", "salary"],
      status: "ready"
    },
    {
      title: "NDA \u2014 National Defence Academy",
      category: "Exams",
      description: "Entry exam for army, navy, and air force officers after Class 12. SSB interview and physical standards.",
      href: "/exams/nda",
      keywords: ["nda", "defence", "army", "air force", "navy", "officer", "ssb", "upsc"],
      status: "coming-soon"
    },
    {
      title: "CLAT \u2014 Common Law Admission Test",
      category: "Exams",
      description: "Entrance for five-year integrated law degrees (BA LLB, BBA LLB) at India's National Law Universities.",
      href: "/exams/clat",
      keywords: ["clat", "law", "nlu", "legal", "bar council", "llb", "advocate"],
      status: "ready"
    },
    {
      title: "CLAT \u2014 Exam Pattern & Sectional Weightage",
      category: "Exams",
      description: "Detailed guide to the Common Law Admission Test (CLAT) syllabus, questions distribution, marking scheme, and time management.",
      href: "/exams/clat/what-it-is",
      keywords: ["clat", "pattern", "syllabus", "marking", "weightage", "english", "logic", "legal", "reasoning"],
      status: "ready"
    },
    {
      title: "CLAT \u2014 NLU Seat Matrix, Fees & Scholarships",
      category: "Exams",
      description: "NLU-by-NLU seat allocation, reservation policies, domicile quotas, and historical opening/closing ranks.",
      href: "/exams/clat/scholarships",
      keywords: ["clat", "seats", "cutoff", "fees", "scholarships", "nlsiu", "nalsar", "nujs"],
      status: "ready"
    },
    {
      title: "CLAT \u2014 Self-Study Plan & Mock Strategy",
      category: "Exams",
      description: "Preparation strategy, best books, mock test resources, and planning strategy for self-study candidates.",
      href: "/exams/clat/resources",
      keywords: ["clat", "self study", "mock tests", "preparation", "books", "strategy"],
      status: "ready"
    },
    {
      title: "CLAT \u2014 Is It For You? & AILET Comparison",
      category: "Exams",
      description: "Honest self-check for suitability, NLU Delhi AILET comparison, and corporate desk vs litigation realities.",
      href: "/exams/clat/is-it-for-you",
      keywords: ["clat", "ailet", "suitability", "career path", "corporate law", "litigation"],
      status: "ready"
    },
    {
      title: "CLAT \u2014 Convince Your Parents",
      category: "Exams",
      description: "Equipping students with corporate law firm placements statistics, career stability metrics, and talking points to align parents on legal careers.",
      href: "/exams/clat/convince-parents",
      keywords: ["clat", "parents", "convince", "family", "career security", "placements", "salary"],
      status: "ready"
    },
    {
      title: "IMU CET \u2014 Indian Maritime University Common Entrance Test",
      category: "Exams",
      description: "Entrance exam for B.Sc Nautical Science, B.Tech Marine Engineering, and Diploma in Nautical Science programs at IMU.",
      href: "/exams/imu-cet",
      keywords: ["imu cet", "imu", "cet", "merchant navy", "marine engineering", "nautical science", "dns", "bsc", "btech", "maritime"],
      status: "ready"
    },
    {
      title: "IMU CET \u2014 Full Exam Breakdown",
      category: "Exams",
      description: "Syllabus breakdown, Physics, Chemistry, Maths, English, and Aptitude distribution, registration, and counselling.",
      href: "/exams/imu-cet/what-it-is",
      keywords: ["imu cet", "syllabus", "pattern", "subjects", "registration", "counselling"],
      status: "ready"
    },
    {
      title: "IMU CET \u2014 DNS vs B.Sc vs B.Tech paths",
      category: "Exams",
      description: "Duration, fees, sea-time, sponsorships, placements, and earning potential compared across all three maritime paths.",
      href: "/exams/imu-cet/scholarships",
      keywords: ["imu cet", "dns", "bsc", "btech", "nautical science", "marine engineering", "fees", "sponsorship"],
      status: "ready"
    },
    {
      title: "IMU CET \u2014 Preparation Strategy",
      category: "Exams",
      description: "Subject-wise preparation strategy, best books, mock test resources, previous year papers, and study roadmap.",
      href: "/exams/imu-cet/resources",
      keywords: ["imu cet", "preparation", "books", "mocks", "study plan", "roadmap"],
      status: "ready"
    },
    {
      title: "IMU CET \u2014 Medical Fitness & DG Shipping Norms",
      category: "Exams",
      description: "Complete guide to the mandatory medical fitness test: vision rules (6/6 eye sight), colour blindness, and BMI.",
      href: "/exams/imu-cet/is-it-for-you",
      keywords: ["imu cet", "medical fitness", "eyesight", "vision", "colour blindness", "bmi", "dg shipping"],
      status: "ready"
    },
    {
      title: "IMU CET \u2014 Convince Your Parents",
      category: "Exams",
      description: "Addressing merchant navy risk concerns, lonely life myths, high USD tax-free salaries, and cadet rotation structures.",
      href: "/exams/imu-cet/convince-parents",
      keywords: ["imu cet", "parents", "convince", "family", "career security", "salary", "risk"],
      status: "ready"
    },
    {
      title: "JEE Main Paper 3 \u2014 B.Planning Entrance",
      category: "Exams",
      description: "Exclusive national entrance for B.Plan courses at SPA Delhi, Bhopal, Vijayawada and top NITs.",
      href: "/exams/jee-paper3",
      keywords: ["jee paper 3", "bplanning", "bplan", "spa", "spa delhi", "spa bhopal", "spa vijayawada", "entrance"],
      status: "ready"
    },
    {
      title: "JEE Main Paper 3 \u2014 Exam Pattern & Syllabus",
      category: "Exams",
      description: "Detailed syllabus breakdown of JEE B.Planning: Mathematics, general aptitude, and planning-specific questions.",
      href: "/exams/jee-paper3/what-it-is",
      keywords: ["jee paper 3", "syllabus", "pattern", "planning questions", "part iii", "marking"],
      status: "ready"
    },
    {
      title: "JEE Main Paper 3 \u2014 SPA Fees, Seats & ROI",
      category: "Exams",
      description: "JoSAA seat matrix, reservation policies, tuition fees at School of Planning and Architecture campuses.",
      href: "/exams/jee-paper3/scholarships",
      keywords: ["jee paper 3", "fees", "seats", "spa fees", "josaa", "cutoff", "roi"],
      status: "ready"
    },
    {
      title: "JEE Main Paper 3 \u2014 Study Material & Prep Guides",
      category: "Exams",
      description: "Self-prep blueprints, Part III planning guides, free mock resources, and official syllabus guidelines.",
      href: "/exams/jee-paper3/resources",
      keywords: ["jee paper 3", "books", "study material", "preparation", "mocks", "self study"],
      status: "ready"
    },
    {
      title: "JEE Main Paper 3 \u2014 B.Plan Suitability",
      category: "Exams",
      description: "Honest check on whether urban planning is the right fit. B.Plan vs B.Arch vs Civil Engineering comparison.",
      href: "/exams/jee-paper3/is-it-for-you",
      keywords: ["jee paper 3", "bplan vs barch", "suitability", "urban planner", "career choice"],
      status: "ready"
    },
    {
      title: "JEE Main Paper 3 \u2014 Convince Your Parents",
      category: "Exams",
      description: "Equipping students with real-world urban planning placement statistics, career stability metrics, and talking points to align parents on B.Plan decisions.",
      href: "/exams/jee-paper3/convince-parents",
      keywords: ["jee paper 3", "parents", "convince", "family", "career security", "placements", "salary"],
      status: "ready"
    },
    // --- CAREERS ---
    {
      title: "Design \u2014 Creative Problem Solving",
      category: "Careers",
      description: "Design user interfaces, digital products, apps, websites, branding, typography, and illustration.",
      href: "/careers/design",
      keywords: ["design", "designer", "ux", "ui", "product design", "graphic design", "creative", "branding"],
      status: "ready"
    },
    {
      title: "Fashion Design \u2014 Beyond the Runway",
      category: "Careers",
      description: "Merchandising, textiles, retail management, and apparel technology starting packages and pathways in India.",
      href: "/careers/fashion-design",
      keywords: ["fashion design", "fashion", "nift", "clothing", "textiles", "apparel", "merchandising"],
      status: "ready"
    },
    {
      title: "Law \u2014 Advocacy, Corporate & Litigation",
      category: "Careers",
      description: "High-paying corporate desks vs litigation grinding, National Law School ROI, and integrated LLB routes.",
      href: "/careers/law",
      keywords: ["law", "lawyer", "corporate law", "litigation", "clat", "nlu", "advocate", "bar council", "judge"],
      status: "ready"
    },
    {
      title: "Merchant Navy Officer (Marine Career)",
      category: "Careers",
      description: "Salaries, sea time, cadet ships, tax-free income, and the true isolation on merchant vessels.",
      href: "/careers/merchant-navy",
      keywords: ["merchant navy", "marine", "ships", "deck cadet", "engine", "captain", "isolation", "sailor", "salary"],
      status: "ready"
    },
    {
      title: "Urban & Regional Planner",
      category: "Careers",
      description: "Design public spaces, smart city transport layouts, sustainable developments, and municipal policies.",
      href: "/careers/urban-planning",
      keywords: ["urban planner", "city planning", "smart cities", "municipal", "gis", "geography", "architecture"],
      status: "ready"
    },
    {
      title: "UX/UI Designer",
      category: "Careers",
      description: "Design user interfaces, digital products, apps, and websites. Highly in-demand and tech-adjacent.",
      href: "/careers/ux-ui-design",
      keywords: ["ux", "ui", "product designer", "interaction design", "figma", "apps", "websites", "design careers"],
      status: "coming-soon"
    },
    {
      title: "Game Designer",
      category: "Careers",
      description: "Define gameplay systems, rules, levels, mechanics, and interactive stories behind video games.",
      href: "/careers/game-design",
      keywords: ["game design", "games", "gaming", "level designer", "mechanics", "playstation", "unity", "unreal"],
      status: "coming-soon"
    },
    {
      title: "Graphic Designer / Brand Specialist",
      category: "Careers",
      description: "Communicate visually through branding, layout, advertising, typography, and illustration.",
      href: "/careers/graphic-design",
      keywords: ["graphic", "branding", "logo", "advertising", "marketing", "visual", "illustration", "typography"],
      status: "coming-soon"
    },
    {
      title: "Forensic Scientist",
      category: "Careers",
      description: "Analyze DNA, solve crimes, investigate evidence, and work in state and central forensic science labs.",
      href: "/careers/forensic-science",
      keywords: ["forensic", "crime", "lab", "dna", "fingerprints", "investigation", "chemistry", "ballistics"],
      status: "coming-soon"
    },
    // --- READS / GUIDES ---
    {
      title: "Is an IIT brand name worth a drop year?",
      category: "Reads",
      description: "An honest breakdown of the IIT tag value, return on investment of a gap year, and the mental tax no one warns you about before you drop.",
      href: "/reads/iit-drop-year",
      keywords: ["iit", "drop", "gap year", "jee", "advanced", "career cost", "roi", "mental health"],
      status: "ready"
    },
    {
      title: "How to talk creative fields with engineering parents?",
      category: "Reads",
      description: "A step-by-step communication playbook for students pitching design, film, or writing to parents who only understand engineering and medicine.",
      href: "/reads/talk-creative-fields",
      keywords: ["parents", "creative", "family", "convince", "pitch", "design", "fashion", "engineering"],
      status: "ready"
    },
    {
      title: "Transitioning cities for work: Guide for juniors",
      category: "Reads",
      description: "Real, raw advice on finding PG hostels, budgeting for food, managing commutes, and surviving your first six months in a new Indian metro.",
      href: "/reads/transitioning-cities",
      keywords: ["city", "move", "pg", "flat", "budget", "commute", "survival", "metro", "junior"],
      status: "ready"
    }
  ];

  // src/components/SearchModal.tsx
  var translations5 = {
    en: {
      placeholder: "Search roadmaps, careers, guides...",
      all: "All",
      careers: "Careers",
      exams: "Exams",
      reads: "Reads",
      noResults: "No results found",
      noResultsDesc: "We couldn't find anything matching",
      noResultsTip: 'Try searching for "uceed", "design", or "maritime".',
      navigate: "Navigate",
      select: "Select",
      close: "Close",
      open: "Open"
    },
    hi: {
      placeholder: "\u0930\u094B\u0921\u092E\u0948\u092A, \u0915\u0930\u093F\u092F\u0930, \u0917\u093E\u0907\u0921 \u0916\u094B\u091C\u0947\u0902...",
      all: "\u0938\u092D\u0940",
      careers: "\u0915\u0930\u093F\u092F\u0930",
      exams: "\u092A\u0930\u0940\u0915\u094D\u0937\u093E\u090F\u0902",
      reads: "\u0932\u0947\u0916",
      noResults: "\u0915\u094B\u0908 \u092A\u0930\u093F\u0923\u093E\u092E \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E",
      noResultsDesc: "\u0939\u092E\u0947\u0902 \u0907\u0938\u0938\u0947 \u092E\u0947\u0932 \u0916\u093E\u0924\u093E \u0915\u0941\u091B \u0928\u0939\u0940\u0902 \u092E\u093F\u0932\u093E",
      noResultsTip: '\u0905\u0925\u0935\u093E "uceed", "design", \u092F\u093E "maritime" \u0916\u094B\u091C\u0928\u0947 \u0915\u093E \u092A\u094D\u0930\u092F\u093E\u0938 \u0915\u0930\u0947\u0902\u0964',
      navigate: "\u0928\u0947\u0935\u093F\u0917\u0947\u091F",
      select: "\u091A\u0941\u0928\u0947\u0902",
      close: "\u092C\u0902\u0926 \u0915\u0930\u0947\u0902",
      open: "\u0916\u094B\u0932\u0947\u0902"
    }
  };
  var CATEGORIES_LABELS = {
    en: {
      All: "All",
      Careers: "Careers",
      Exams: "Exams",
      Reads: "Reads"
    },
    hi: {
      All: "\u0938\u092D\u0940",
      Careers: "\u0915\u0930\u093F\u092F\u0930",
      Exams: "\u092A\u0930\u0940\u0915\u094D\u0937\u093E\u090F\u0902",
      Reads: "\u0932\u0947\u0916"
    }
  };
  function SearchModal() {
    const { language } = useLanguage();
    const t = translations5[language];
    const catLabels = CATEGORIES_LABELS[language];
    const [isOpen, setIsOpen] = (0, import_react45.useState)(false);
    const [query, setQuery] = (0, import_react45.useState)("");
    const [activeTab, setActiveTab] = (0, import_react45.useState)("All");
    const [selectedIndex, setSelectedIndex] = (0, import_react45.useState)(0);
    const inputRef = (0, import_react45.useRef)(null);
    const resultsContainerRef = (0, import_react45.useRef)(null);
    const router = useRouter();
    const handleNavigate = (0, import_react45.useCallback)((href) => {
      router.push(href);
      setIsOpen(false);
    }, [router]);
    (0, import_react45.useEffect)(() => {
      const resetSearchState = () => {
        setQuery("");
        setActiveTab("All");
        setSelectedIndex(0);
      };
      const handleToggle = () => {
        setIsOpen((prev) => {
          if (!prev) resetSearchState();
          return !prev;
        });
      };
      const handleOpen = () => {
        resetSearchState();
        setIsOpen(true);
      };
      const handleClose = () => setIsOpen(false);
      window.addEventListener("toggle-search", handleToggle);
      window.addEventListener("open-search", handleOpen);
      window.addEventListener("close-search", handleClose);
      const handleKeyDown = (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
          e.preventDefault();
          setIsOpen((prev) => {
            if (!prev) resetSearchState();
            return !prev;
          });
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("toggle-search", handleToggle);
        window.removeEventListener("open-search", handleOpen);
        window.removeEventListener("close-search", handleClose);
        window.removeEventListener("keydown", handleKeyDown);
      };
    }, []);
    (0, import_react45.useEffect)(() => {
      if (isOpen) {
        setTimeout(() => inputRef.current?.focus(), 100);
      }
    }, [isOpen]);
    const results = (0, import_react45.useMemo)(() => {
      let filtered = SEARCH_INDEX;
      if (activeTab !== "All") {
        filtered = filtered.filter((item) => item.category === activeTab);
      }
      if (query.trim()) {
        const q = query.toLowerCase().trim();
        const scored = filtered.map((item) => {
          let score = 0;
          if (item.title.toLowerCase() === q) score += 100;
          else if (item.title.toLowerCase().startsWith(q)) score += 80;
          else if (item.title.toLowerCase().includes(q)) score += 50;
          const keywordMatches = item.keywords.filter((kw) => kw.toLowerCase().includes(q));
          score += keywordMatches.length * 15;
          if (item.description.toLowerCase().includes(q)) score += 10;
          return { item, score };
        }).filter((scoredItem) => scoredItem.score > 0).sort((a, b) => b.score - a.score);
        return scored.map((s) => s.item);
      } else {
        return filtered.filter((item) => item.status === "ready" || item.href === "/about");
      }
    }, [query, activeTab]);
    (0, import_react45.useEffect)(() => {
      const handleKeyDown = (e) => {
        if (!isOpen) return;
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) => results.length > 0 ? (prev + 1) % results.length : 0);
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) => results.length > 0 ? (prev - 1 + results.length) % results.length : 0);
        } else if (e.key === "Enter") {
          e.preventDefault();
          if (results[selectedIndex]) {
            handleNavigate(results[selectedIndex].href);
          }
        } else if (e.key === "Escape") {
          e.preventDefault();
          setIsOpen(false);
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, results, selectedIndex, handleNavigate]);
    (0, import_react45.useEffect)(() => {
      if (resultsContainerRef.current) {
        const activeEl = resultsContainerRef.current.querySelector('[data-active="true"]');
        if (activeEl) {
          activeEl.scrollIntoView({ block: "nearest" });
        }
      }
    }, [selectedIndex]);
    const highlightMatch = (text, search) => {
      if (!search.trim()) return text;
      const cleanSearch = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      const regex2 = new RegExp(`(${cleanSearch})`, "gi");
      const parts = text.split(regex2);
      return /* @__PURE__ */ import_react45.default.createElement(import_react45.default.Fragment, null, parts.map(
        (part, i) => part.toLowerCase() === search.toLowerCase().trim() ? /* @__PURE__ */ import_react45.default.createElement("span", { key: i, className: "text-primary font-black bg-indigo-50/60 px-1.5 py-0.5 rounded" }, part) : part
      ));
    };
    const getCategoryIcon = (category) => {
      switch (category) {
        case "Careers":
          return "solar:compass-bold-duotone";
        case "Exams":
          return "solar:document-text-bold-duotone";
        case "Reads":
          return "solar:book-bookmark-bold-duotone";
        default:
          return "solar:link-circle-bold-duotone";
      }
    };
    const getCategoryColor = (category) => {
      switch (category) {
        case "Careers":
          return "text-secondary bg-secondary/5 border-secondary/10";
        case "Exams":
          return "text-primary bg-primary/5 border-primary/10";
        case "Reads":
          return "text-accent bg-accent/5 border-accent/10";
        default:
          return "text-slate-500 bg-slate-50 border-slate-100";
      }
    };
    return /* @__PURE__ */ import_react45.default.createElement(AnimatePresence, null, isOpen && /* @__PURE__ */ import_react45.default.createElement("div", { className: "fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] md:pt-[15vh]" }, /* @__PURE__ */ import_react45.default.createElement(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: () => setIsOpen(false),
        className: "fixed inset-0 bg-slate-900/50 backdrop-blur-md cursor-pointer"
      }
    ), /* @__PURE__ */ import_react45.default.createElement(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.98, y: -8 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.98, y: -8 },
        transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
        className: "relative w-full max-w-2xl bg-white rounded-3xl border border-slate-200/80 shadow-2xl shadow-slate-950/10 overflow-hidden flex flex-col mx-4 max-h-[70vh] z-10"
      },
      /* @__PURE__ */ import_react45.default.createElement("div", { className: "h-[3px] w-full bg-gradient-to-r from-primary via-[#a855f7] to-secondary shrink-0" }),
      /* @__PURE__ */ import_react45.default.createElement("div", { className: "flex items-center gap-3 px-6 py-5 border-b border-slate-100" }, /* @__PURE__ */ import_react45.default.createElement(Icon, { icon: "solar:magnifer-linear", className: "w-5 h-5 text-slate-400 shrink-0" }), /* @__PURE__ */ import_react45.default.createElement(
        "input",
        {
          ref: inputRef,
          type: "text",
          placeholder: t.placeholder,
          value: query,
          onChange: (e) => {
            setQuery(e.target.value);
            setSelectedIndex(0);
          },
          className: "w-full text-base text-neutral-dark placeholder-slate-400 bg-transparent focus:outline-none font-semibold"
        }
      ), query && /* @__PURE__ */ import_react45.default.createElement(
        "button",
        {
          onClick: () => {
            setQuery("");
            setSelectedIndex(0);
          },
          className: "p-1 rounded-full text-slate-400 hover:text-neutral-dark hover:bg-slate-100 transition-colors cursor-pointer",
          title: "Clear input"
        },
        /* @__PURE__ */ import_react45.default.createElement(Icon, { icon: "solar:close-circle-bold", className: "w-4 h-4" })
      ), /* @__PURE__ */ import_react45.default.createElement("span", { className: "hidden sm:inline-block text-[9px] font-black text-slate-400 border border-slate-200/80 rounded-md px-2 py-0.5 bg-slate-50 uppercase tracking-widest shrink-0" }, "ESC")),
      /* @__PURE__ */ import_react45.default.createElement("div", { className: "flex items-center gap-6 px-6 bg-white border-b border-slate-100 overflow-x-auto [&::-webkit-scrollbar]:hidden" }, ["All", "Careers", "Exams", "Reads"].map((tab) => {
        const isActive = activeTab === tab;
        return /* @__PURE__ */ import_react45.default.createElement(
          "button",
          {
            key: tab,
            onClick: () => {
              setActiveTab(tab);
              setSelectedIndex(0);
            },
            className: `relative py-3.5 text-xs font-black uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap focus:outline-none ${isActive ? "text-primary" : "text-slate-400 hover:text-slate-800"}`
          },
          /* @__PURE__ */ import_react45.default.createElement("span", null, catLabels[tab]),
          isActive && /* @__PURE__ */ import_react45.default.createElement(
            motion.div,
            {
              layoutId: "activeSearchTab",
              className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary",
              transition: { type: "spring", stiffness: 380, damping: 30 }
            }
          )
        );
      })),
      /* @__PURE__ */ import_react45.default.createElement(
        "div",
        {
          ref: resultsContainerRef,
          className: "flex-1 overflow-y-auto px-4 py-4 space-y-1.5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full"
        },
        results.length > 0 ? results.map((item, idx) => {
          const isActive = idx === selectedIndex;
          const isComingSoon = item.status === "coming-soon";
          return /* @__PURE__ */ import_react45.default.createElement(
            "div",
            {
              key: item.href,
              "data-active": isActive ? "true" : "false",
              onClick: () => !isComingSoon && handleNavigate(item.href),
              onMouseEnter: () => setSelectedIndex(idx),
              className: `flex items-start gap-4 p-3.5 rounded-2xl border transition-all select-none cursor-pointer group ${isActive ? "bg-slate-50/80 border-slate-200 shadow-sm shadow-slate-100/50" : "bg-white border-transparent hover:bg-slate-50/40"} ${isComingSoon ? "opacity-75 cursor-not-allowed" : ""}`
            },
            /* @__PURE__ */ import_react45.default.createElement(
              "div",
              {
                className: `h-10 w-10 rounded-xl flex items-center justify-center shrink-0 border transition-colors ${getCategoryColor(
                  item.category
                )}`
              },
              /* @__PURE__ */ import_react45.default.createElement(Icon, { icon: getCategoryIcon(item.category), className: "w-5 h-5" })
            ),
            /* @__PURE__ */ import_react45.default.createElement("div", { className: "flex-grow min-w-0 pr-2" }, /* @__PURE__ */ import_react45.default.createElement("div", { className: "flex items-center flex-wrap gap-2 mb-1" }, /* @__PURE__ */ import_react45.default.createElement("h4", { className: "text-sm font-black text-neutral-dark group-hover:text-primary transition-colors truncate" }, highlightMatch(item.title, query)), isComingSoon && /* @__PURE__ */ import_react45.default.createElement("span", { className: "text-[9px] font-black uppercase bg-orange-50/50 text-orange-500 border border-orange-100 px-1.5 py-0.5 rounded-sm tracking-wider" }, "Coming Soon")), /* @__PURE__ */ import_react45.default.createElement("p", { className: "text-xs text-slate-500 line-clamp-2 leading-relaxed" }, highlightMatch(item.description, query))),
            !isComingSoon && /* @__PURE__ */ import_react45.default.createElement("div", { className: "self-center shrink-0" }, isActive ? /* @__PURE__ */ import_react45.default.createElement("div", { className: "hidden sm:flex items-center gap-1 text-[9px] font-black uppercase text-slate-400 bg-white border border-slate-200/80 px-2 py-1 rounded-lg shadow-sm" }, /* @__PURE__ */ import_react45.default.createElement("span", null, t.open), /* @__PURE__ */ import_react45.default.createElement("kbd", { className: "font-sans text-[8px] font-bold" }, "\u21B5")) : /* @__PURE__ */ import_react45.default.createElement("div", { className: "text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-slate-500 transition-all transform group-hover:translate-x-0.5" }, /* @__PURE__ */ import_react45.default.createElement(Icon, { icon: "solar:arrow-right-up-linear", className: "w-4 h-4" })))
          );
        }) : /* @__PURE__ */ import_react45.default.createElement("div", { className: "flex flex-col items-center justify-center py-16 text-center" }, /* @__PURE__ */ import_react45.default.createElement("div", { className: "h-14 w-14 bg-slate-50 text-slate-300 rounded-2xl flex items-center justify-center mb-4 border border-slate-100" }, /* @__PURE__ */ import_react45.default.createElement(Icon, { icon: "solar:shield-warning-linear", className: "w-7 h-7" })), /* @__PURE__ */ import_react45.default.createElement("h3", { className: "text-base font-black text-neutral-dark mb-1" }, t.noResults), /* @__PURE__ */ import_react45.default.createElement("p", { className: "text-xs text-slate-400 max-w-xs leading-relaxed" }, t.noResultsDesc, " \u201C", query, "\u201D. ", t.noResultsTip))
      ),
      /* @__PURE__ */ import_react45.default.createElement("div", { className: "hidden sm:flex items-center justify-between px-6 py-4 bg-slate-50 border-t border-slate-100 text-[10px] text-slate-400 font-bold uppercase tracking-wider select-none" }, /* @__PURE__ */ import_react45.default.createElement("div", { className: "flex items-center gap-4" }, /* @__PURE__ */ import_react45.default.createElement("span", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ import_react45.default.createElement("kbd", { className: "border border-slate-200/80 bg-white rounded px-1.5 py-0.5 shadow-sm font-sans font-black text-[9px]" }, "\u2191\u2193"), " ", t.navigate), /* @__PURE__ */ import_react45.default.createElement("span", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ import_react45.default.createElement("kbd", { className: "border border-slate-200/80 bg-white rounded px-1.5 py-0.5 shadow-sm font-sans font-black text-[9px]" }, "Enter"), " ", t.select)), /* @__PURE__ */ import_react45.default.createElement("span", { className: "flex items-center gap-1.5" }, /* @__PURE__ */ import_react45.default.createElement("kbd", { className: "border border-slate-200/80 bg-white rounded px-1.5 py-0.5 shadow-sm font-sans font-black text-[9px]" }, "Esc"), " ", t.close))
    )));
  }

  // src/components/home/FeaturedGuides.tsx
  var import_react48 = __toESM(require_react_shim());
  var localTranslations = {
    en: {
      readGuide: "Read Guide",
      startHere: /* @__PURE__ */ import_react48.default.createElement(import_react48.default.Fragment, null, "Start here. Three guides", /* @__PURE__ */ import_react48.default.createElement("br", { className: "hidden sm:block" }), " we wish we had."),
      viewAll: "View all guides",
      comingSoon: "Coming Soon",
      inDev: "Under curation..."
    },
    hi: {
      readGuide: "\u0917\u093E\u0907\u0921 \u092A\u0922\u093C\u0947\u0902",
      startHere: /* @__PURE__ */ import_react48.default.createElement(import_react48.default.Fragment, null, "\u092F\u0939\u093E\u0901 \u0938\u0947 \u0936\u0941\u0930\u0942 \u0915\u0930\u0947\u0902\u0964 \u0924\u0940\u0928 \u092E\u093E\u0930\u094D\u0917\u0926\u0930\u094D\u0936\u093F\u0915\u093E\u090F\u0901", /* @__PURE__ */ import_react48.default.createElement("br", { className: "hidden sm:block" }), " \u091C\u094B \u0939\u092E \u091A\u093E\u0939\u0924\u0947 \u0939\u0948\u0902 \u0915\u093F \u0939\u092E\u093E\u0930\u0947 \u092A\u093E\u0938 \u0939\u094B\u0924\u0940\u0902\u0964"),
      viewAll: "\u0938\u092D\u0940 \u092E\u093E\u0930\u094D\u0917\u0926\u0930\u094D\u0936\u093F\u0915\u093E\u090F\u0901 \u0926\u0947\u0916\u0947\u0902",
      comingSoon: "\u091C\u0932\u094D\u0926 \u0906 \u0930\u0939\u093E \u0939\u0948",
      inDev: "\u0924\u0948\u092F\u093E\u0930\u0940 \u091C\u093E\u0930\u0940 \u0939\u0948..."
    }
  };
  var CATEGORY_TRANSLATIONS = {
    en: {
      "design": "Design",
      "defence": "Defence",
      "maritime": "Maritime"
    },
    hi: {
      "design": "\u0921\u093F\u091C\u093C\u093E\u0907\u0928",
      "defence": "\u0930\u0915\u094D\u0937\u093E",
      "maritime": "\u092E\u0930\u094D\u091A\u0947\u0902\u091F \u0928\u0947\u0935\u0940"
    }
  };
  function GuideCard({ category, title, description, badgeClass, status, href }) {
    const { language } = useLanguage();
    const isReady = status === "ready";
    const getGlowColor = (cat) => {
      if (!isReady) return "bg-transparent";
      switch (cat.toLowerCase()) {
        case "design":
          return "bg-indigo-500/5 group-hover:bg-indigo-500/10";
        case "defence":
        case "defense":
          return "bg-emerald-500/5 group-hover:bg-emerald-500/10";
        case "maritime":
          return "bg-orange-500/5 group-hover:bg-orange-500/10";
        default:
          return "bg-slate-500/5 group-hover:bg-slate-500/10";
      }
    };
    const displayCategory = CATEGORY_TRANSLATIONS[language][category.toLowerCase()] || category;
    const t = localTranslations[language];
    if (isReady) {
      return /* @__PURE__ */ import_react48.default.createElement(
        next_link_default,
        {
          href: href || "#",
          className: "relative rounded-3xl p-8 sm:p-10 flex flex-col h-full border border-slate-200/80 hover:border-slate-300 bg-white/80 backdrop-blur-md cursor-pointer shadow-sm hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1.5 transition-all duration-500 text-left select-none group"
        },
        /* @__PURE__ */ import_react48.default.createElement("div", { className: `absolute -right-10 -bottom-10 w-44 h-44 rounded-full blur-3xl transition-all duration-500 pointer-events-none ${getGlowColor(category)}` }),
        /* @__PURE__ */ import_react48.default.createElement("div", { className: "mb-6 flex items-center justify-between relative z-10 w-full" }, /* @__PURE__ */ import_react48.default.createElement("span", { className: `font-black text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-full border shadow-sm ${badgeClass}` }, displayCategory)),
        /* @__PURE__ */ import_react48.default.createElement("h3", { className: "text-2xl lg:text-[1.65rem] font-black text-neutral-dark mb-5 leading-tight tracking-tight relative z-10 transition-colors duration-300 group-hover:text-primary" }, title),
        /* @__PURE__ */ import_react48.default.createElement("p", { className: "text-slate-550 leading-relaxed mb-10 flex-grow font-medium text-sm sm:text-base relative z-10" }, description),
        /* @__PURE__ */ import_react48.default.createElement("div", { className: "mt-auto flex items-center gap-2 justify-end relative z-10" }, /* @__PURE__ */ import_react48.default.createElement("span", { className: "text-xs font-black uppercase tracking-wider text-slate-500 group-hover:text-primary transition-colors duration-300" }, t.readGuide), /* @__PURE__ */ import_react48.default.createElement(Icon, { icon: "ph:arrow-right", className: "w-4 h-4 text-slate-400 group-hover:text-primary transition-all transform group-hover:translate-x-1 duration-300" }))
      );
    }
    return /* @__PURE__ */ import_react48.default.createElement(
      "div",
      {
        className: "relative rounded-3xl p-8 sm:p-10 flex flex-col h-full border border-slate-200/60 bg-slate-50 opacity-65 cursor-not-allowed shadow-none transition-all duration-500 text-left select-none"
      },
      /* @__PURE__ */ import_react48.default.createElement("div", { className: `absolute -right-10 -bottom-10 w-44 h-44 rounded-full blur-3xl transition-all duration-500 pointer-events-none ${getGlowColor(category)}` }),
      /* @__PURE__ */ import_react48.default.createElement("div", { className: "mb-6 flex items-center justify-between relative z-10 w-full" }, /* @__PURE__ */ import_react48.default.createElement("span", { className: `font-black text-[10px] uppercase tracking-wider px-3.5 py-1.5 rounded-full border shadow-sm ${badgeClass}` }, displayCategory), /* @__PURE__ */ import_react48.default.createElement("span", { className: "text-[10px] font-black uppercase tracking-widest text-orange-500 bg-orange-50/50 border border-orange-100 px-3 py-1 rounded-full shadow-xs" }, t.comingSoon)),
      /* @__PURE__ */ import_react48.default.createElement("h3", { className: "text-2xl lg:text-[1.65rem] font-black text-neutral-dark mb-5 leading-tight tracking-tight relative z-10 transition-colors duration-300" }, title),
      /* @__PURE__ */ import_react48.default.createElement("p", { className: "text-slate-550 leading-relaxed mb-10 flex-grow font-medium text-sm sm:text-base relative z-10" }, description),
      /* @__PURE__ */ import_react48.default.createElement("div", { className: "mt-auto flex items-center gap-2 justify-end relative z-10" }, /* @__PURE__ */ import_react48.default.createElement("span", { className: "text-xs font-bold text-slate-400 italic" }, t.inDev))
    );
  }
  var GUIDES_DATA = {
    en: [
      {
        category: "Design",
        title: /* @__PURE__ */ import_react48.default.createElement(import_react48.default.Fragment, null, "UCEED \u2014 Cracking it", /* @__PURE__ */ import_react48.default.createElement("br", { className: "hidden lg:block" }), " without coaching"),
        description: "What the entrance actually tests, how seniors prepped at home, and which prep books are honestly worth your money.",
        badgeClass: "bg-indigo-50/80 text-indigo-600 border-indigo-100/50",
        status: "ready",
        href: "/exams/uceed"
      },
      {
        category: "Defence",
        title: /* @__PURE__ */ import_react48.default.createElement(import_react48.default.Fragment, null, "NDA \u2014 Beyond the uniform myth"),
        description: "What life looks like after Class 12 if you pick this path. Pay, postings, exit options, and the parts recruiters skip.",
        badgeClass: "bg-emerald-50/80 text-emerald-600 border-emerald-100/50",
        status: "coming-soon"
      },
      {
        category: "Maritime",
        title: /* @__PURE__ */ import_react48.default.createElement(import_react48.default.Fragment, null, "Merchant Navy \u2014 Salary, sea time & reality"),
        description: "From DG Shipping to your first contract. What cadets earn, what they don't tell you, and how to actually break in.",
        badgeClass: "bg-orange-50/80 text-orange-600 border-orange-100/50",
        status: "ready",
        href: "/careers/merchant-navy"
      }
    ],
    hi: [
      {
        category: "Design",
        title: /* @__PURE__ */ import_react48.default.createElement(import_react48.default.Fragment, null, "UCEED \u2014 \u092C\u093F\u0928\u093E \u0915\u094B\u091A\u093F\u0902\u0917 \u0915\u0947", /* @__PURE__ */ import_react48.default.createElement("br", { className: "hidden lg:block" }), " \u0915\u094D\u0930\u0948\u0915 \u0915\u0930\u0928\u093E"),
        description: "\u092A\u094D\u0930\u0935\u0947\u0936 \u092A\u0930\u0940\u0915\u094D\u0937\u093E \u0935\u093E\u0938\u094D\u0924\u0935 \u092E\u0947\u0902 \u0915\u094D\u092F\u093E \u092A\u0930\u0940\u0915\u094D\u0937\u0923 \u0915\u0930\u0924\u0940 \u0939\u0948, \u0938\u0940\u0928\u093F\u092F\u0930 \u091B\u093E\u0924\u094D\u0930\u094B\u0902 \u0928\u0947 \u0918\u0930 \u092A\u0930 \u0915\u0948\u0938\u0947 \u0924\u0948\u092F\u093E\u0930\u0940 \u0915\u0940, \u0914\u0930 \u0915\u094C\u0928 \u0938\u0940 \u0924\u0948\u092F\u093E\u0930\u0940 \u0915\u0940 \u0915\u093F\u0924\u093E\u092C\u0947\u0902 \u0935\u093E\u0938\u094D\u0924\u0935 \u092E\u0947\u0902 \u0906\u092A\u0915\u0947 \u092A\u0948\u0938\u0947 \u0915\u0947 \u0932\u093E\u092F\u0915 \u0939\u0948\u0902\u0964",
        badgeClass: "bg-indigo-50/80 text-indigo-600 border-indigo-100/50",
        status: "ready",
        href: "/exams/uceed"
      },
      {
        category: "Defence",
        title: /* @__PURE__ */ import_react48.default.createElement(import_react48.default.Fragment, null, "NDA \u2014 \u0935\u0930\u094D\u0926\u0940 \u0915\u0947 \u092E\u093F\u0925\u0915 \u0938\u0947 \u092A\u0930\u0947"),
        description: "\u092F\u0926\u093F \u0906\u092A \u0907\u0938 \u092E\u093E\u0930\u094D\u0917 \u0915\u094B \u091A\u0941\u0928\u0924\u0947 \u0939\u0948\u0902 \u0924\u094B \u0915\u0915\u094D\u0937\u093E 12 \u0915\u0947 \u092C\u093E\u0926 \u091C\u0940\u0935\u0928 \u0915\u0948\u0938\u093E \u0926\u093F\u0916\u0924\u093E \u0939\u0948\u0964 \u0935\u0947\u0924\u0928, \u092A\u094B\u0938\u094D\u091F\u093F\u0902\u0917, \u092C\u093E\u0939\u0930 \u0928\u093F\u0915\u0932\u0928\u0947 \u0915\u0947 \u0935\u093F\u0915\u0932\u094D\u092A, \u0914\u0930 \u0935\u0947 \u0939\u093F\u0938\u094D\u0938\u0947 \u091C\u093F\u0928\u094D\u0939\u0947\u0902 \u092D\u0930\u094D\u0924\u0940 \u0915\u0930\u0928\u0947 \u0935\u093E\u0932\u0947 \u091B\u094B\u0921\u093C \u0926\u0947\u0924\u0947 \u0939\u0948\u0902\u0964",
        badgeClass: "bg-emerald-50/80 text-emerald-600 border-emerald-100/50",
        status: "coming-soon"
      },
      {
        category: "Maritime",
        title: /* @__PURE__ */ import_react48.default.createElement(import_react48.default.Fragment, null, "\u092E\u0930\u094D\u091A\u0947\u0902\u091F \u0928\u0947\u0935\u0940 \u2014 \u0935\u0947\u0924\u0928, \u0938\u092E\u0941\u0926\u094D\u0930\u0940 \u0938\u092E\u092F \u0914\u0930 \u0935\u093E\u0938\u094D\u0924\u0935\u093F\u0915\u0924\u093E"),
        description: "\u0921\u0940\u091C\u0940 \u0936\u093F\u092A\u093F\u0902\u0917 \u0938\u0947 \u0932\u0947\u0915\u0930 \u0906\u092A\u0915\u0947 \u092A\u0939\u0932\u0947 \u0905\u0928\u0941\u092C\u0902\u0927 \u0924\u0915\u0964 \u0915\u0948\u0921\u0947\u091F\u094D\u0938 \u0915\u094D\u092F\u093E \u0915\u092E\u093E\u0924\u0947 \u0939\u0948\u0902, \u0935\u0947 \u0906\u092A\u0915\u094B \u0915\u094D\u092F\u093E \u0928\u0939\u0940\u0902 \u092C\u0924\u093E\u0924\u0947 \u0939\u0948\u0902, \u0914\u0930 \u0935\u093E\u0938\u094D\u0924\u0935 \u092E\u0947\u0902 \u092A\u094D\u0930\u0935\u0947\u0936 \u0915\u0948\u0938\u0947 \u0915\u0930\u0947\u0902\u0964",
        badgeClass: "bg-orange-50/80 text-orange-600 border-orange-100/50",
        status: "ready",
        href: "/careers/merchant-navy"
      }
    ]
  };
  function FeaturedGuides() {
    const { language } = useLanguage();
    const scrollRef = (0, import_react48.useRef)(null);
    const firstCardRef = (0, import_react48.useRef)(null);
    const lastCardRef = (0, import_react48.useRef)(null);
    const [showLeft, setShowLeft] = (0, import_react48.useState)(false);
    const [showRight, setShowRight] = (0, import_react48.useState)(true);
    const handleScroll = () => {
      if (!scrollRef.current || !firstCardRef.current || !lastCardRef.current) return;
      const containerRect = scrollRef.current.getBoundingClientRect();
      const firstCardRect = firstCardRef.current.getBoundingClientRect();
      const lastCardRect = lastCardRef.current.getBoundingClientRect();
      setShowLeft(firstCardRect.left < containerRect.left - 10);
      setShowRight(lastCardRect.right > containerRect.right + 10);
    };
    (0, import_react48.useEffect)(() => {
      handleScroll();
      window.addEventListener("resize", handleScroll);
      return () => window.removeEventListener("resize", handleScroll);
    }, []);
    const scroll2 = (direction) => {
      if (scrollRef.current) {
        const { current } = scrollRef;
        const scrollAmount = direction === "left" ? -420 : 420;
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    };
    const t = localTranslations[language];
    const guides = GUIDES_DATA[language];
    return /* @__PURE__ */ import_react48.default.createElement("section", { className: "bg-[#F8F8F6] py-20 lg:py-28 overflow-hidden" }, /* @__PURE__ */ import_react48.default.createElement("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react48.default.createElement("div", { className: "flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-6" }, /* @__PURE__ */ import_react48.default.createElement("div", { className: "max-w-2xl" }, /* @__PURE__ */ import_react48.default.createElement("h2", { className: "text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-[3.5rem] font-extrabold text-[#111827] tracking-tight" }, t.startHere)), /* @__PURE__ */ import_react48.default.createElement(
      next_link_default,
      {
        href: "/reads",
        className: "group flex items-center gap-2 font-medium text-neutral-500 hover:text-neutral-800 transition-colors w-fit pb-2"
      },
      /* @__PURE__ */ import_react48.default.createElement("span", null, t.viewAll),
      /* @__PURE__ */ import_react48.default.createElement(Icon, { icon: "ph:arrow-right", className: "w-5 h-5 transform group-hover:translate-x-1 transition-transform" })
    )), /* @__PURE__ */ import_react48.default.createElement("div", { className: "relative w-full mt-10" }, /* @__PURE__ */ import_react48.default.createElement("div", { className: `hidden md:flex absolute left-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-r from-[#F8F8F6] via-[#F8F8F6]/90 to-transparent z-10 items-center justify-start pointer-events-none transition-opacity duration-300 ${showLeft ? "opacity-100" : "opacity-0"}` }, /* @__PURE__ */ import_react48.default.createElement(
      "button",
      {
        onClick: () => scroll2("left"),
        disabled: !showLeft,
        className: "pointer-events-auto p-2 ml-2 lg:ml-6 text-slate-350 hover:text-neutral-800 transition-colors cursor-pointer disabled:cursor-default",
        "aria-label": "Scroll left"
      },
      /* @__PURE__ */ import_react48.default.createElement(Icon, { icon: "weui:arrow-filled", className: "w-14 h-14 lg:w-[4.5rem] lg:h-[4.5rem] rotate-180" })
    )), /* @__PURE__ */ import_react48.default.createElement("div", { className: `hidden md:flex absolute right-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-l from-[#F8F8F6] via-[#F8F8F6]/90 to-transparent z-10 items-center justify-end pointer-events-none transition-opacity duration-300 ${showRight ? "opacity-100" : "opacity-0"}` }, /* @__PURE__ */ import_react48.default.createElement(
      "button",
      {
        onClick: () => scroll2("right"),
        disabled: !showRight,
        className: "pointer-events-auto p-2 mr-2 lg:mr-6 text-slate-350 hover:text-neutral-800 transition-colors cursor-pointer disabled:cursor-default",
        "aria-label": "Scroll right"
      },
      /* @__PURE__ */ import_react48.default.createElement(Icon, { icon: "weui:arrow-filled", className: "w-14 h-14 lg:w-[4.5rem] lg:h-[4.5rem]" })
    )), /* @__PURE__ */ import_react48.default.createElement(
      "div",
      {
        ref: scrollRef,
        onScroll: handleScroll,
        className: "flex overflow-x-auto snap-x snap-mandatory gap-6 lg:gap-8 pb-8 -mb-8 px-4 sm:px-6 lg:px-8 xl:px-[calc((100vw-1280px)/2)] 2xl:px-[calc((100vw-1536px)/2)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      },
      guides.map((guide, idx) => /* @__PURE__ */ import_react48.default.createElement(
        "div",
        {
          key: idx,
          ref: idx === 0 ? firstCardRef : idx === guides.length - 1 ? lastCardRef : null,
          className: "w-[85vw] sm:w-[380px] lg:w-[400px] flex-none snap-center lg:snap-start"
        },
        /* @__PURE__ */ import_react48.default.createElement(
          GuideCard,
          {
            category: guide.category,
            title: guide.title,
            description: guide.description,
            badgeClass: guide.badgeClass,
            status: guide.status,
            href: guide.href
          }
        )
      ))
    ))));
  }

  // src/components/home/Marquee.tsx
  var import_react50 = __toESM(require_react_shim());

  // src/components/ui/ScrollVelocity.tsx
  var import_react49 = __toESM(require_react_shim());
  function useElementWidth(ref) {
    const [width, setWidth] = (0, import_react49.useState)(0);
    (0, import_react49.useLayoutEffect)(() => {
      function updateWidth() {
        if (ref.current) {
          setWidth(ref.current.offsetWidth);
        }
      }
      updateWidth();
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }, [ref]);
    return width;
  }
  function VelocityText({
    children,
    baseVelocity = 100,
    scrollContainerRef,
    className = "",
    damping = 50,
    stiffness = 400,
    numCopies = 6,
    velocityMapping = { input: [0, 1e3], output: [0, 5] },
    parallaxClassName = "parallax",
    scrollerClassName = "scroller",
    parallaxStyle,
    scrollerStyle
  }) {
    const baseX = useMotionValue(0);
    const scrollOptions = scrollContainerRef ? { container: scrollContainerRef } : {};
    const { scrollY } = useScroll(scrollOptions);
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping,
      stiffness
    });
    const velocityFactor = useTransform(
      smoothVelocity,
      velocityMapping.input,
      velocityMapping.output,
      { clamp: false }
    );
    const copyRef = (0, import_react49.useRef)(null);
    const copyWidth = useElementWidth(copyRef);
    function wrap(min, max, v) {
      const range = max - min;
      const mod = ((v - min) % range + range) % range;
      return mod + min;
    }
    const x = useTransform(baseX, (v) => {
      if (copyWidth === 0) return "0px";
      return `${wrap(-copyWidth, 0, v)}px`;
    });
    const directionFactor = (0, import_react49.useRef)(1);
    useAnimationFrame((_t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1e3);
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });
    const spans = [];
    for (let i = 0; i < numCopies; i++) {
      spans.push(
        /* @__PURE__ */ React.createElement("div", { className, key: i, ref: i === 0 ? copyRef : null }, children)
      );
    }
    return /* @__PURE__ */ React.createElement("div", { className: parallaxClassName, style: parallaxStyle }, /* @__PURE__ */ React.createElement(motion.div, { className: scrollerClassName, style: { x, ...scrollerStyle } }, spans));
  }
  var ScrollVelocity = ({
    scrollContainerRef,
    texts = [],
    velocity = 100,
    className = "",
    damping = 50,
    stiffness = 400,
    numCopies = 6,
    velocityMapping = { input: [0, 1e3], output: [0, 5] },
    parallaxClassName = "parallax",
    scrollerClassName = "scroller",
    parallaxStyle,
    scrollerStyle
  }) => {
    return /* @__PURE__ */ React.createElement("section", null, texts.map((text, index) => /* @__PURE__ */ React.createElement(
      VelocityText,
      {
        key: index,
        className,
        baseVelocity: index % 2 !== 0 ? -velocity : velocity,
        scrollContainerRef,
        damping,
        stiffness,
        numCopies,
        velocityMapping,
        parallaxClassName,
        scrollerClassName,
        parallaxStyle,
        scrollerStyle
      },
      text
    )));
  };
  var ScrollVelocity_default = ScrollVelocity;

  // src/components/home/Marquee.tsx
  var ITEMS = [
    "JEE",
    "NEET",
    "UCEED",
    "CLAT",
    "NDA",
    "NIFT",
    "Merchant Navy",
    "Urban Planning",
    "Game Design",
    "Agriculture"
  ];
  function Marquee() {
    const marqueeContent = /* @__PURE__ */ import_react50.default.createElement("div", { className: "flex items-center" }, ITEMS.map((item, index) => /* @__PURE__ */ import_react50.default.createElement(import_react50.default.Fragment, { key: index }, /* @__PURE__ */ import_react50.default.createElement("span", { className: "text-gray-400 font-bold text-lg md:text-2xl tracking-widest uppercase" }, item), /* @__PURE__ */ import_react50.default.createElement("span", { className: "mx-10 md:mx-16 w-2 h-2 rounded-full bg-gray-300 shrink-0" }))));
    return /* @__PURE__ */ import_react50.default.createElement("div", { className: "relative w-full overflow-hidden bg-white py-6 lg:py-8 flex items-center" }, /* @__PURE__ */ import_react50.default.createElement("div", { className: "absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" }), /* @__PURE__ */ import_react50.default.createElement("div", { className: "absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" }), /* @__PURE__ */ import_react50.default.createElement(
      ScrollVelocity_default,
      {
        texts: [marqueeContent],
        velocity: 50,
        damping: 50,
        stiffness: 400,
        numCopies: 8,
        scrollerClassName: "scroller"
      }
    ));
  }

  // src/components/ui/Button.tsx
  var import_react51 = __toESM(require_react_shim());
  function Button({
    children,
    variant = "primary",
    icon,
    className = "",
    ...props
  }) {
    const baseStyles = "px-6 py-3.5 rounded-2xl font-medium flex items-center justify-center gap-2 transition-colors whitespace-nowrap cursor-pointer";
    const variants = {
      primary: "bg-secondary text-white hover:bg-secondary-hover shadow-sm",
      outline: "bg-white text-black/70 border border-gray-300 hover:bg-gray-50"
    };
    return /* @__PURE__ */ import_react51.default.createElement("button", { className: `${baseStyles} ${variants[variant]} ${className}`, ...props }, children, icon && icon);
  }
  var Button_default = Button;

  // src/components/home/Hero.tsx
  var translations6 = {
    en: {
      title1: "You have options.",
      title2: "We help you find",
      title3: "the ",
      title4: "right one.",
      subtitle: "Unbiased guides, real stories, and clear roadmaps for every stage of your journey.",
      explore: "Explore Careers",
      browse: "About WhatNow",
      alt: "Student making career choices"
    },
    hi: {
      title1: "\u0906\u092A\u0915\u0947 \u092A\u093E\u0938 \u0935\u093F\u0915\u0932\u094D\u092A \u0939\u0948\u0902\u0964",
      title2: "\u0939\u092E \u0938\u0939\u0940 \u0935\u093F\u0915\u0932\u094D\u092A \u0916\u094B\u091C\u0928\u0947",
      title3: "\u092E\u0947\u0902 \u0906\u092A\u0915\u0940 ",
      title4: "\u092E\u0926\u0926 \u0915\u0930\u0924\u0947 \u0939\u0948\u0902\u0964",
      subtitle: "\u0906\u092A\u0915\u0940 \u092F\u093E\u0924\u094D\u0930\u093E \u0915\u0947 \u0939\u0930 \u091A\u0930\u0923 \u0915\u0947 \u0932\u093F\u090F \u0928\u093F\u0937\u094D\u092A\u0915\u094D\u0937 \u092E\u093E\u0930\u094D\u0917\u0926\u0930\u094D\u0936\u093F\u0915\u093E\u090F\u0901, \u0938\u091A\u094D\u091A\u0940 \u0915\u0939\u093E\u0928\u093F\u092F\u093E\u0901 \u0914\u0930 \u0938\u094D\u092A\u0937\u094D\u091F \u0930\u094B\u0921\u092E\u0948\u092A\u0964",
      explore: "\u0915\u0930\u093F\u092F\u0930 \u0916\u094B\u091C\u0947\u0902",
      browse: "\u0935\u094D\u0939\u093E\u091F\u0928\u093E\u0935 \u0915\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902",
      alt: "\u0915\u0930\u093F\u092F\u0930 \u0915\u093E \u091A\u0941\u0928\u093E\u0935 \u0915\u0930\u0924\u093E \u091B\u093E\u0924\u094D\u0930"
    }
  };
  function Hero() {
    const { language } = useLanguage();
    const t = translations6[language];
    return /* @__PURE__ */ React.createElement("main", { className: "flex-1" }, /* @__PURE__ */ React.createElement("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-0 items-center pt-8 pb-12 lg:pt-12 lg:pb-0" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-start order-1 lg:order-1" }, /* @__PURE__ */ React.createElement("h1", { className: "text-[2.5rem] leading-[1.1] sm:text-5xl lg:text-[4rem] font-extrabold text-[#111827] mb-6 tracking-tight" }, t.title1, /* @__PURE__ */ React.createElement("br", null), t.title2, /* @__PURE__ */ React.createElement("br", null), t.title3, /* @__PURE__ */ React.createElement("span", { className: "relative inline-block whitespace-nowrap" }, /* @__PURE__ */ React.createElement("span", { className: "text-secondary" }, t.title4), /* @__PURE__ */ React.createElement("svg", { className: "absolute -bottom-2 left-0 w-full h-2.5 text-secondary pointer-events-none", viewBox: "0 0 100 10", preserveAspectRatio: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M 2 4 Q 50 8 98 4", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", fill: "none" }), /* @__PURE__ */ React.createElement("path", { d: "M 6 6 Q 50 9 94 6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", fill: "none", opacity: "0.7" })))), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 text-base lg:text-lg mb-8 max-w-lg leading-relaxed" }, t.subtitle), /* @__PURE__ */ React.createElement("div", { className: "flex flex-row flex-wrap items-center gap-4" }, /* @__PURE__ */ React.createElement(next_link_default, { href: "/careers" }, /* @__PURE__ */ React.createElement(
      Button_default,
      {
        variant: "primary",
        icon: /* @__PURE__ */ React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, /* @__PURE__ */ React.createElement("path", { d: "M3.33331 8H12.6666M12.6666 8L7.99998 3.33334M12.6666 8L7.99998 12.6667", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }))
      },
      t.explore
    )), /* @__PURE__ */ React.createElement(next_link_default, { href: "/about" }, /* @__PURE__ */ React.createElement(Button_default, { variant: "outline" }, t.browse)))), /* @__PURE__ */ React.createElement("div", { className: "order-2 lg:order-2 w-full flex justify-center relative" }, /* @__PURE__ */ React.createElement("div", { className: "relative w-full max-w-[550px] lg:max-w-[750px] aspect-[4/3] lg:aspect-auto lg:h-[600px]" }, /* @__PURE__ */ React.createElement(
      NextImage,
      {
        src: "/hero.png",
        alt: t.alt,
        fill: true,
        priority: true,
        className: "object-contain object-center lg:object-right"
      }
    ))))), /* @__PURE__ */ React.createElement("div", { className: "w-full mb-16 lg:mb-24" }, /* @__PURE__ */ React.createElement(Marquee, null)));
  }

  // src/components/home/Testimonials.tsx
  var import_react52 = __toESM(require_react_shim());
  var testimonials = [
    {
      text: "I was completely split between choosing engineering or pure science research. The roadmap on IISERs and JEE guidance gave me the absolute clarity I needed.",
      name: "Aditya",
      role: "Class 12 Student"
    },
    {
      text: "Preparing for NEET had me constantly stressed out. The breakdown of alternative options like Biotechnology and Veterinary Science really eased my anxiety.",
      name: "Atul",
      role: "JEE/NEET Aspirant"
    },
    {
      text: "The comparison guide between CBSE and IB board pathways is incredibly detailed. It helped my parents support my decision to switch boards.",
      name: "Aasif",
      role: "Class 10 Student"
    },
    {
      text: "The Law and CLAT preparation resources here are highly structured. I didn't even realize how many legal specializations existed outside of corporate law.",
      name: "Shaurya",
      role: "CLAT Aspirant"
    },
    {
      text: "I share these comprehensive career pathway articles with my high school students all the time. The layout is exceptionally clean and logical.",
      name: "Tanya",
      role: "School Counselor"
    },
    {
      text: "Decent career resource indexes, although I would love more detailed local college cutoff data. Still, the NID and Design design path was a massive eye-opener!",
      name: "Anjali",
      role: "Class 11 Humanities"
    },
    {
      text: "Honestly, the JEE main prep was overwhelming. The drop-year guide helped me think rationally instead of feeling like a failure. It gave me real perspective.",
      name: "Sanjana",
      role: "JEE Aspirant"
    },
    {
      text: "Finding unbiased, non-sponsored educational path advice for my daughter's architecture career was tough. This platform has been a breath of fresh air.",
      name: "Lakshanya",
      role: "Parent"
    },
    {
      text: "Very good breakdown of the NIFT fashion technology curriculum. It could use a preparation checklist, but the overall career roadmap is highly beneficial.",
      name: "Lucky",
      role: "NIFT Aspirant"
    }
  ];
  var firstColumn = testimonials.slice(0, 3);
  var secondColumn = testimonials.slice(3, 6);
  var thirdColumn = testimonials.slice(6, 9);
  var TestimonialsColumn = (props) => {
    return /* @__PURE__ */ import_react52.default.createElement("div", { className: props.className }, /* @__PURE__ */ import_react52.default.createElement(
      motion.ul,
      {
        animate: {
          translateY: "-50%"
        },
        transition: {
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop"
        },
        className: "flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      },
      [
        ...Array(2).fill(0).map((_, index) => /* @__PURE__ */ import_react52.default.createElement(import_react52.default.Fragment, { key: index }, props.testimonials.map(({ text, name, role }, i) => /* @__PURE__ */ import_react52.default.createElement(
          motion.li,
          {
            key: `${index}-${i}`,
            "aria-hidden": index === 1 ? "true" : "false",
            tabIndex: index === 1 ? -1 : 0,
            className: "p-10 rounded-[2rem] border border-slate-200/60 backdrop-blur-md bg-white/80 hover:bg-white shadow-[0_8px_30px_rgb(0,0,0,0.015)] hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-500 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-primary/30 max-w-xs w-full"
          },
          /* @__PURE__ */ import_react52.default.createElement("blockquote", { className: "m-0 p-0" }, /* @__PURE__ */ import_react52.default.createElement("p", { className: "text-slate-650 leading-relaxed font-medium m-0 transition-colors duration-300" }, text), /* @__PURE__ */ import_react52.default.createElement("footer", { className: "flex items-center gap-3 mt-6" }, /* @__PURE__ */ import_react52.default.createElement("div", { className: "h-10 w-10 rounded-full bg-slate-50 border border-slate-200/80 group-hover:bg-primary/5 group-hover:text-primary group-hover:border-primary/20 flex items-center justify-center text-slate-400 select-none transition-all duration-500" }, /* @__PURE__ */ import_react52.default.createElement(Icon, { icon: "solar:user-linear", className: "w-5 h-5 transition-colors duration-500 group-hover:text-primary" })), /* @__PURE__ */ import_react52.default.createElement("div", { className: "flex flex-col" }, /* @__PURE__ */ import_react52.default.createElement("cite", { className: "font-extrabold not-italic tracking-tight leading-5 text-neutral-dark transition-colors duration-300" }, name), /* @__PURE__ */ import_react52.default.createElement("span", { className: "text-xs font-bold leading-5 tracking-tight text-slate-400 mt-0.5 transition-colors duration-300" }, role))))
        ))))
      ]
    ));
  };
  function Testimonials() {
    return /* @__PURE__ */ import_react52.default.createElement(
      "section",
      {
        "aria-labelledby": "testimonials-heading",
        className: "bg-transparent py-24 relative overflow-hidden"
      },
      /* @__PURE__ */ import_react52.default.createElement(
        motion.div,
        {
          initial: { opacity: 0, y: 50, rotate: -2 },
          whileInView: { opacity: 1, y: 0, rotate: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: {
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
            opacity: { duration: 0.8 }
          },
          className: "container px-4 z-10 mx-auto"
        },
        /* @__PURE__ */ import_react52.default.createElement("div", { className: "flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16" }, /* @__PURE__ */ import_react52.default.createElement("h2", { id: "testimonials-heading", className: "text-4xl md:text-5xl font-extrabold tracking-tight mt-6 text-center text-neutral-900 transition-colors" }, "Our students' reaction"), /* @__PURE__ */ import_react52.default.createElement("p", { className: "text-center mt-5 text-neutral-500 text-lg leading-relaxed max-w-sm transition-colors" }, "Discover how students like you found their way with our guidance.")),
        /* @__PURE__ */ import_react52.default.createElement(
          "div",
          {
            className: "flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden",
            role: "region",
            "aria-label": "Scrolling Testimonials"
          },
          /* @__PURE__ */ import_react52.default.createElement(TestimonialsColumn, { testimonials: firstColumn, duration: 15 }),
          /* @__PURE__ */ import_react52.default.createElement(TestimonialsColumn, { testimonials: secondColumn, className: "hidden md:block", duration: 19 }),
          /* @__PURE__ */ import_react52.default.createElement(TestimonialsColumn, { testimonials: thirdColumn, className: "hidden lg:block", duration: 17 })
        )
      )
    );
  }

  // src/components/home/WhyWhatnow.tsx
  var translations7 = {
    en: {
      sectionTitle: "Why WhatNow",
      headlineMain: "Built like a senior,",
      headlineSub: "not like a brand.",
      description: "We made the thing we needed when we were 17 and confused. Three things make us different \u2014 and we're stubborn about all of them.",
      card1Title: "Actually free",
      card1Desc: "No paywall, no email gate, no upsell. Every guide stays free because the next student behind you deserves the same head start.",
      card2Title: "No coaching agenda",
      card2Desc: "We don't sell courses or get kickbacks. We're not pushing IIT or IIM. Just honest reads on what each path actually demands.",
      card3Title: "Careers nobody covers",
      card3Desc: "Urban planner, animator, agronomist, naval architect. The careers your career counselor forgot \u2014 written by people doing them."
    },
    hi: {
      sectionTitle: "\u0935\u094D\u0939\u093E\u091F\u0928\u093E\u0935 \u0915\u094D\u092F\u094B\u0902?",
      headlineMain: "\u090F\u0915 \u0938\u0940\u0928\u093F\u092F\u0930 \u0915\u0940 \u0924\u0930\u0939,",
      headlineSub: "\u0915\u093F\u0938\u0940 \u092C\u094D\u0930\u093E\u0902\u0921 \u0915\u0940 \u0924\u0930\u0939 \u0928\u0939\u0940\u0902\u0964",
      description: "\u0939\u092E\u0928\u0947 \u0935\u0939 \u091A\u0940\u091C\u093C \u092C\u0928\u093E\u0908 \u091C\u093F\u0938\u0915\u0940 \u091C\u093C\u0930\u0942\u0930\u0924 \u0939\u092E\u0947\u0902 17 \u0938\u093E\u0932 \u0915\u0940 \u0909\u092E\u094D\u0930 \u092E\u0947\u0902 \u0925\u0940 \u091C\u092C \u0939\u092E \u0905\u0938\u092E\u0902\u091C\u0938 \u092E\u0947\u0902 \u0925\u0947\u0964 \u0924\u0940\u0928 \u092C\u093E\u0924\u0947\u0902 \u0939\u092E\u0947\u0902 \u0905\u0932\u0917 \u092C\u0928\u093E\u0924\u0940 \u0939\u0948\u0902 - \u0914\u0930 \u0939\u092E \u0909\u0928 \u0938\u092D\u0940 \u0915\u094B \u0932\u0947\u0915\u0930 \u0905\u0921\u093F\u0917 \u0939\u0948\u0902\u0964",
      card1Title: "\u0935\u093E\u0938\u094D\u0924\u0935 \u092E\u0947\u0902 \u092E\u0941\u092B\u093C\u094D\u0924",
      card1Desc: "\u0915\u094B\u0908 \u092A\u0947\u0935\u0949\u0932 \u0928\u0939\u0940\u0902, \u0915\u094B\u0908 \u0908\u092E\u0947\u0932 \u0917\u0947\u091F \u0928\u0939\u0940\u0902, \u0915\u094B\u0908 \u0905\u092A\u0938\u0947\u0932 \u0928\u0939\u0940\u0902\u0964 \u0939\u0930 \u0917\u093E\u0907\u0921 \u092E\u0941\u092B\u093C\u094D\u0924 \u0930\u0939\u0924\u0940 \u0939\u0948 \u0915\u094D\u092F\u094B\u0902\u0915\u093F \u0906\u092A\u0915\u0947 \u092C\u093E\u0926 \u0906\u0928\u0947 \u0935\u093E\u0932\u0947 \u091B\u093E\u0924\u094D\u0930 \u092D\u0940 \u090F\u0915 \u0938\u092E\u093E\u0928 \u0936\u0941\u0930\u0941\u0906\u0924 \u0915\u0947 \u0939\u0915\u0926\u093E\u0930 \u0939\u0948\u0902\u0964",
      card2Title: "\u0915\u094B\u0908 \u0915\u094B\u091A\u093F\u0902\u0917 \u090F\u091C\u0947\u0902\u0921\u093E \u0928\u0939\u0940\u0902",
      card2Desc: "\u0939\u092E \u0915\u094B\u0908 \u0915\u094B\u0930\u094D\u0938 \u0928\u0939\u0940\u0902 \u092C\u0947\u091A\u0924\u0947 \u092F\u093E \u0915\u092E\u0940\u0936\u0928 \u0928\u0939\u0940\u0902 \u0932\u0947\u0924\u0947\u0964 \u0939\u092E IIT \u092F\u093E IIM \u092E\u0947\u0902 \u091C\u093E\u0928\u0947 \u0915\u093E \u0915\u094B\u0908 \u0926\u092C\u093E\u0935 \u0928\u0939\u0940\u0902 \u0921\u093E\u0932 \u0930\u0939\u0947\u0964 \u092C\u0938 \u092A\u094D\u0930\u0924\u094D\u092F\u0947\u0915 \u092E\u093E\u0930\u094D\u0917 \u0915\u0940 \u0935\u093E\u0938\u094D\u0924\u0935\u093F\u0915 \u0906\u0935\u0936\u094D\u092F\u0915\u0924\u093E\u0913\u0902 \u0915\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902 \u0908\u092E\u093E\u0928\u0926\u093E\u0930 \u0935\u093F\u0936\u094D\u0932\u0947\u0937\u0923 \u0926\u0947\u0924\u0947 \u0939\u0948\u0902\u0964",
      card3Title: "\u0910\u0938\u0947 \u0915\u0930\u093F\u092F\u0930 \u091C\u093F\u0928\u094D\u0939\u0947\u0902 \u0915\u094B\u0908 \u0928\u0939\u0940\u0902 \u092C\u0924\u093E\u0924\u093E",
      card3Desc: "\u0905\u0930\u094D\u092C\u0928 \u092A\u094D\u0932\u093E\u0928\u0930, \u090F\u0928\u093F\u092E\u0947\u091F\u0930, \u090F\u0917\u094D\u0930\u094B\u0928\u094B\u092E\u093F\u0938\u094D\u091F, \u0928\u0947\u0935\u0932 \u0906\u0930\u094D\u0915\u093F\u091F\u0947\u0915\u094D\u091F\u0964 \u0935\u0947 \u0915\u0930\u093F\u092F\u0930 \u091C\u093F\u0928\u094D\u0939\u0947\u0902 \u0906\u092A\u0915\u0947 \u0915\u0930\u093F\u092F\u0930 \u0915\u093E\u0909\u0902\u0938\u0932\u0930 \u092D\u0942\u0932 \u0917\u090F \u2014 \u0909\u0928\u094D\u0939\u0947\u0902 \u0909\u0928 \u0932\u094B\u0917\u094B\u0902 \u0926\u094D\u0935\u093E\u0930\u093E \u0932\u093F\u0916\u093E \u0917\u092F\u093E \u0939\u0948 \u091C\u094B \u0935\u093E\u0938\u094D\u0924\u0935 \u092E\u0947\u0902 \u092F\u0947 \u0915\u093E\u092E \u0915\u0930 \u0930\u0939\u0947 \u0939\u0948\u0902\u0964"
    }
  };
  function WhyWhatnow() {
    const { language } = useLanguage();
    const t = translations7[language];
    return /* @__PURE__ */ React.createElement("section", { className: "py-24 md:py-32 px-6 lg:px-12 bg-slate-50 overflow-hidden relative" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto relative z-10" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col lg:flex-row gap-12 lg:gap-20 items-start mb-20" }, /* @__PURE__ */ React.createElement("div", { className: "flex-1" }, /* @__PURE__ */ React.createElement("h3", { className: "text-secondary text-xs font-extrabold tracking-[0.2em] uppercase mb-5" }, t.sectionTitle), /* @__PURE__ */ React.createElement("h2", { className: "text-4xl md:text-6xl lg:text-[4rem] font-black text-neutral-dark tracking-tight leading-[1.1]" }, t.headlineMain, /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { className: "text-slate-400" }, t.headlineSub))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 lg:pt-10" }, /* @__PURE__ */ React.createElement("p", { className: "text-base md:text-xl text-slate-600 leading-relaxed font-medium" }, t.description))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8" }, /* @__PURE__ */ React.createElement("div", { className: "relative bg-white hover:bg-gradient-to-b hover:from-white hover:to-green-50/10 rounded-[2.5rem] p-10 lg:p-12 border border-slate-200/85 hover:border-green-500/30 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_25px_60px_rgba(34,197,94,0.07)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden group cursor-default" }, /* @__PURE__ */ React.createElement("div", { className: "absolute -top-10 -right-10 opacity-[0.03] rotate-12 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-[24deg] select-none pointer-events-none" }, /* @__PURE__ */ React.createElement(Icon, { icon: "solar:lock-unlocked-bold-duotone", className: "w-64 h-64 text-green-600" })), /* @__PURE__ */ React.createElement("div", { className: "h-16 w-16 bg-green-50 text-green-600 rounded-3xl flex items-center justify-center mb-10 shadow-inner group-hover:scale-110 transition-transform duration-500" }, /* @__PURE__ */ React.createElement(Icon, { icon: "solar:lock-unlocked-bold-duotone", className: "w-8 h-8" })), /* @__PURE__ */ React.createElement("div", { className: "flex items-end gap-4 mb-6 relative z-10" }, /* @__PURE__ */ React.createElement("span", { className: "text-green-600 font-black text-2xl tracking-tighter transition-all duration-300 group-hover:scale-105 origin-left" }, "01"), /* @__PURE__ */ React.createElement("h4", { className: "text-2xl font-black text-neutral-dark tracking-tight leading-none pb-0.5" }, t.card1Title)), /* @__PURE__ */ React.createElement("p", { className: "text-slate-600 leading-relaxed relative z-10 text-base sm:text-lg" }, t.card1Desc)), /* @__PURE__ */ React.createElement("div", { className: "relative bg-white hover:bg-gradient-to-b hover:from-white hover:to-orange-50/10 rounded-[2.5rem] p-10 lg:p-12 border border-slate-200/85 hover:border-orange-500/30 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_25px_60px_rgba(249,115,22,0.07)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden group cursor-default" }, /* @__PURE__ */ React.createElement("div", { className: "absolute -top-10 -right-10 opacity-[0.03] rotate-12 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-[24deg] select-none pointer-events-none" }, /* @__PURE__ */ React.createElement(Icon, { icon: "solar:shield-check-bold-duotone", className: "w-64 h-64 text-orange-500" })), /* @__PURE__ */ React.createElement("div", { className: "h-16 w-16 bg-orange-50 text-orange-500 rounded-3xl flex items-center justify-center mb-10 shadow-inner group-hover:scale-110 transition-transform duration-500" }, /* @__PURE__ */ React.createElement(Icon, { icon: "solar:shield-check-bold-duotone", className: "w-8 h-8" })), /* @__PURE__ */ React.createElement("div", { className: "flex items-end gap-4 mb-6 relative z-10" }, /* @__PURE__ */ React.createElement("span", { className: "text-orange-500 font-black text-2xl tracking-tighter transition-all duration-300 group-hover:scale-105 origin-left" }, "02"), /* @__PURE__ */ React.createElement("h4", { className: "text-2xl font-black text-neutral-dark tracking-tight leading-none pb-0.5" }, t.card2Title)), /* @__PURE__ */ React.createElement("p", { className: "text-slate-600 leading-relaxed relative z-10 text-base sm:text-lg" }, t.card2Desc)), /* @__PURE__ */ React.createElement("div", { className: "relative bg-white hover:bg-gradient-to-b hover:from-white hover:to-blue-50/10 rounded-[2.5rem] p-10 lg:p-12 border border-slate-200/85 hover:border-blue-500/30 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_25px_60px_rgba(59,130,246,0.07)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden group cursor-default" }, /* @__PURE__ */ React.createElement("div", { className: "absolute -top-10 -right-10 opacity-[0.03] rotate-12 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-[24deg] select-none pointer-events-none" }, /* @__PURE__ */ React.createElement(Icon, { icon: "solar:compass-bold-duotone", className: "w-64 h-64 text-blue-600" })), /* @__PURE__ */ React.createElement("div", { className: "h-16 w-16 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-10 shadow-inner group-hover:scale-110 transition-transform duration-500" }, /* @__PURE__ */ React.createElement(Icon, { icon: "solar:compass-bold-duotone", className: "w-8 h-8" })), /* @__PURE__ */ React.createElement("div", { className: "flex items-end gap-4 mb-6 relative z-10" }, /* @__PURE__ */ React.createElement("span", { className: "text-blue-600 font-black text-2xl tracking-tighter transition-all duration-300 group-hover:scale-105 origin-left" }, "03"), /* @__PURE__ */ React.createElement("h4", { className: "text-2xl font-black text-neutral-dark tracking-tight leading-none pb-0.5" }, t.card3Title)), /* @__PURE__ */ React.createElement("p", { className: "text-slate-600 leading-relaxed relative z-10 text-base sm:text-lg" }, t.card3Desc)))));
  }

  // src/components/ui/VisualAnalytics.tsx
  var import_react55 = __toESM(require_react_shim());
  var themeClasses = {
    indigo: {
      primary: "stroke-indigo-500 fill-indigo-500 bg-indigo-500",
      primaryLight: "bg-indigo-50 text-indigo-600 border-indigo-100",
      accent: "bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-700",
      text: "text-indigo-600",
      fillGradStart: "#818cf8",
      fillGradStop: "#e0e7ff"
    },
    pink: {
      primary: "stroke-pink-500 fill-pink-500 bg-pink-500",
      primaryLight: "bg-pink-50 text-pink-600 border-pink-100",
      accent: "bg-pink-500/10 hover:bg-pink-500/20 text-pink-700",
      text: "text-pink-600",
      fillGradStart: "#f472b6",
      fillGradStop: "#fce7f3"
    },
    orange: {
      primary: "stroke-orange-500 fill-orange-500 bg-orange-500",
      primaryLight: "bg-orange-50 text-orange-600 border-orange-100",
      accent: "bg-orange-500/10 hover:bg-orange-500/20 text-orange-700",
      text: "text-orange-600",
      fillGradStart: "#fb923c",
      fillGradStop: "#ffedd5"
    },
    emerald: {
      primary: "stroke-emerald-500 fill-emerald-500 bg-emerald-500",
      primaryLight: "bg-emerald-50 text-emerald-600 border-emerald-100",
      accent: "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700",
      text: "text-emerald-600",
      fillGradStart: "#34d399",
      fillGradStop: "#ecfdf5"
    },
    teal: {
      primary: "stroke-teal-500 fill-teal-500 bg-teal-500",
      primaryLight: "bg-teal-50 text-teal-600 border-teal-100",
      accent: "bg-teal-500/10 hover:bg-teal-500/20 text-teal-700",
      text: "text-teal-600",
      fillGradStart: "#2dd4bf",
      fillGradStop: "#f0fdfa"
    }
  };
  var translations8 = {
    en: {
      competitionTab: "Competition Trend",
      funnelTab: "Seat Funnel",
      jobTab: "Job Opportunities",
      salaryTab: "Salary Arc",
      applicants: "Applicants",
      seats: "Seats",
      successRate: "Success Rate",
      annualOpenings: "Annual Openings",
      experienceLevel: "Experience Level",
      salaryLabel: "Average Salary",
      yearLabel: "Year",
      levelLabel: "Level",
      acceptanceRate: "Acceptance Rate",
      hiringDemand: "Hiring Demand",
      perMonth: "(Per Month)"
    },
    hi: {
      competitionTab: "\u092A\u094D\u0930\u0924\u093F\u0938\u094D\u092A\u0930\u094D\u0927\u093E \u092A\u094D\u0930\u0935\u0943\u0924\u094D\u0924\u093F",
      funnelTab: "\u0938\u0940\u091F \u092B\u093C\u0928\u0932",
      jobTab: "\u0928\u094C\u0915\u0930\u0940 \u0915\u0947 \u0905\u0935\u0938\u0930",
      salaryTab: "\u0935\u0947\u0924\u0928 \u0906\u0930\u094D\u0915",
      applicants: "\u0906\u0935\u0947\u0926\u0915",
      seats: "\u0938\u0940\u091F\u0947\u0902",
      successRate: "\u0938\u092B\u0932\u0924\u093E \u0926\u0930",
      annualOpenings: "\u0935\u093E\u0930\u094D\u0937\u093F\u0915 \u0930\u093F\u0915\u094D\u0924\u093F\u092F\u093E\u0902",
      experienceLevel: "\u0905\u0928\u0941\u092D\u0935 \u0938\u094D\u0924\u0930",
      salaryLabel: "\u0914\u0938\u0924 \u0935\u0947\u0924\u0928",
      yearLabel: "\u0935\u0930\u094D\u0937",
      levelLabel: "\u0938\u094D\u0924\u0930",
      acceptanceRate: "\u0938\u094D\u0935\u0940\u0915\u0943\u0924\u093F \u0926\u0930",
      hiringDemand: "\u092D\u0930\u094D\u0924\u0940 \u092E\u093E\u0902\u0917",
      perMonth: "(\u092A\u094D\u0930\u0924\u093F \u092E\u093E\u0939)"
    }
  };
  function VisualAnalytics({ type, data, colorTheme = "indigo" }) {
    const { language } = useLanguage();
    const t = translations8[language];
    const theme = themeClasses[colorTheme];
    const [activeTab, setActiveTab] = (0, import_react55.useState)("tab1");
    const [hoveredIdx, setHoveredIdx] = (0, import_react55.useState)(null);
    const width = 500;
    const height = 240;
    const paddingLeft = 55;
    const paddingRight = 25;
    const paddingTop = 25;
    const paddingBottom = 40;
    const chartWidth = width - paddingLeft - paddingRight;
    const chartHeight = height - paddingTop - paddingBottom;
    if (type === "exam") {
      const examData = data;
      if (activeTab === "tab1") {
        const maxVal = Math.max(...examData.trends.map((d) => d.applicants));
        const getCoords = (val, idx, total) => {
          const x = paddingLeft + idx / (total - 1) * chartWidth;
          const y = paddingTop + chartHeight - val / maxVal * chartHeight;
          return { x, y };
        };
        const pointsApplicants = examData.trends.map((d, i) => getCoords(d.applicants, i, examData.trends.length));
        const pointsSeats = examData.trends.map((d, i) => getCoords(d.seats, i, examData.trends.length));
        const pathD = (points) => points.reduce((acc, p, i) => i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`, "");
        const areaD = (points) => {
          if (points.length === 0) return "";
          const startX = points[0].x;
          const endX = points[points.length - 1].x;
          const baseLineY = paddingTop + chartHeight;
          return `${pathD(points)} L ${endX} ${baseLineY} L ${startX} ${baseLineY} Z`;
        };
        return /* @__PURE__ */ import_react55.default.createElement("div", { className: "bg-white border border-slate-200 rounded-[2rem] p-6 md:p-8 shadow-sm flex flex-col h-full w-full" }, /* @__PURE__ */ import_react55.default.createElement("div", { className: "flex justify-between items-center mb-6" }, /* @__PURE__ */ import_react55.default.createElement("h4", { className: "text-sm font-black uppercase tracking-widest text-slate-400" }, t.competitionTab), /* @__PURE__ */ import_react55.default.createElement("div", { className: "flex gap-2 bg-slate-50 border border-slate-200/60 p-0.5 rounded-xl" }, /* @__PURE__ */ import_react55.default.createElement(
          "button",
          {
            onClick: () => {
              setActiveTab("tab1");
              setHoveredIdx(null);
            },
            className: `text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all cursor-pointer ${theme.primaryLight} bg-white shadow-xs`
          },
          t.competitionTab
        ), /* @__PURE__ */ import_react55.default.createElement(
          "button",
          {
            onClick: () => {
              setActiveTab("tab2");
              setHoveredIdx(null);
            },
            className: "text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all cursor-pointer text-slate-555"
          },
          t.funnelTab
        ))), /* @__PURE__ */ import_react55.default.createElement("div", { className: "relative flex-grow" }, /* @__PURE__ */ import_react55.default.createElement("svg", { viewBox: `0 0 ${width} ${height}`, className: "w-full h-auto overflow-visible select-none" }, /* @__PURE__ */ import_react55.default.createElement("defs", null, /* @__PURE__ */ import_react55.default.createElement("linearGradient", { id: `grad-applicants-${colorTheme}`, x1: "0", y1: "0", x2: "0", y2: "1" }, /* @__PURE__ */ import_react55.default.createElement("stop", { offset: "0%", stopColor: theme.fillGradStart, stopOpacity: "0.3" }), /* @__PURE__ */ import_react55.default.createElement("stop", { offset: "100%", stopColor: theme.fillGradStop, stopOpacity: "0" }))), [0, 0.25, 0.5, 0.75, 1].map((r, i) => {
          const y = paddingTop + r * chartHeight;
          return /* @__PURE__ */ import_react55.default.createElement(
            "line",
            {
              key: i,
              x1: paddingLeft,
              y1: y,
              x2: width - paddingRight,
              y2: y,
              stroke: "#e2e8f0",
              strokeWidth: "1",
              strokeDasharray: "4 4"
            }
          );
        }), [0, 0.25, 0.5, 0.75, 1].map((r, i) => {
          const val = Math.round((1 - r) * maxVal / 1e3);
          const y = paddingTop + r * chartHeight;
          return /* @__PURE__ */ import_react55.default.createElement(
            "text",
            {
              key: i,
              x: paddingLeft - 8,
              y: y + 4,
              textAnchor: "end",
              className: "text-[10px] font-extrabold fill-slate-400"
            },
            val,
            "K"
          );
        }), /* @__PURE__ */ import_react55.default.createElement("path", { d: areaD(pointsApplicants), fill: `url(#grad-applicants-${colorTheme})` }), /* @__PURE__ */ import_react55.default.createElement(
          motion.path,
          {
            d: pathD(pointsApplicants),
            fill: "none",
            className: theme.primary,
            strokeWidth: "3.5",
            strokeLinecap: "round",
            initial: { pathLength: 0 },
            animate: { pathLength: 1 },
            transition: { duration: 1 }
          }
        ), /* @__PURE__ */ import_react55.default.createElement(
          motion.path,
          {
            d: pathD(pointsSeats),
            fill: "none",
            stroke: "#64748b",
            strokeWidth: "2.5",
            strokeDasharray: "6 4",
            strokeLinecap: "round",
            initial: { pathLength: 0 },
            animate: { pathLength: 1 },
            transition: { duration: 1, delay: 0.2 }
          }
        ), examData.trends.map((d, i) => {
          const pApp = pointsApplicants[i];
          return /* @__PURE__ */ import_react55.default.createElement(
            "g",
            {
              key: i,
              onMouseEnter: () => setHoveredIdx(i),
              onMouseLeave: () => setHoveredIdx(null),
              className: "cursor-pointer"
            },
            /* @__PURE__ */ import_react55.default.createElement(
              "rect",
              {
                x: pApp.x - 25,
                y: paddingTop,
                width: "50",
                height: chartHeight,
                fill: "transparent"
              }
            ),
            hoveredIdx === i && /* @__PURE__ */ import_react55.default.createElement(
              "line",
              {
                x1: pApp.x,
                y1: paddingTop,
                x2: pApp.x,
                y2: paddingTop + chartHeight,
                stroke: "#cbd5e1",
                strokeWidth: "1.5"
              }
            ),
            /* @__PURE__ */ import_react55.default.createElement(
              "circle",
              {
                cx: pApp.x,
                cy: pApp.y,
                r: hoveredIdx === i ? "6" : "4",
                className: `transition-all duration-150 ${theme.primary}`,
                stroke: "#fff",
                strokeWidth: "1.5"
              }
            ),
            /* @__PURE__ */ import_react55.default.createElement(
              "circle",
              {
                cx: pointsSeats[i].x,
                cy: pointsSeats[i].y,
                r: hoveredIdx === i ? "5" : "3.5",
                fill: "#64748b",
                stroke: "#fff",
                strokeWidth: "1.5"
              }
            )
          );
        }), examData.trends.map((d, i) => {
          const x = paddingLeft + i / (examData.trends.length - 1) * chartWidth;
          return /* @__PURE__ */ import_react55.default.createElement(
            "text",
            {
              key: i,
              x,
              y: paddingTop + chartHeight + 18,
              textAnchor: "middle",
              className: "text-[10px] font-black fill-slate-500"
            },
            d.year
          );
        }))), /* @__PURE__ */ import_react55.default.createElement("div", { className: "mt-4 flex flex-wrap gap-x-6 gap-y-2 justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-200/50" }, /* @__PURE__ */ import_react55.default.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ import_react55.default.createElement("div", { className: "flex items-center gap-1.5 text-xs font-bold text-slate-650" }, /* @__PURE__ */ import_react55.default.createElement("span", { className: `w-3 h-3 rounded-full ${theme.primary}` }), /* @__PURE__ */ import_react55.default.createElement("span", null, t.applicants)), /* @__PURE__ */ import_react55.default.createElement("div", { className: "flex items-center gap-1.5 text-xs font-bold text-slate-650" }, /* @__PURE__ */ import_react55.default.createElement("span", { className: "w-3 h-3 rounded-full bg-slate-450 border border-dashed border-slate-600" }), /* @__PURE__ */ import_react55.default.createElement("span", null, t.seats))), /* @__PURE__ */ import_react55.default.createElement(AnimatePresence, { mode: "wait" }, hoveredIdx !== null ? /* @__PURE__ */ import_react55.default.createElement(
          motion.div,
          {
            key: hoveredIdx,
            initial: { opacity: 0, x: 5 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -5 },
            className: "text-xs font-black text-slate-800 flex gap-3"
          },
          /* @__PURE__ */ import_react55.default.createElement("span", null, t.applicants, ": ", /* @__PURE__ */ import_react55.default.createElement("span", { className: theme.text }, examData.trends[hoveredIdx].applicants.toLocaleString())),
          /* @__PURE__ */ import_react55.default.createElement("span", { className: "text-slate-350" }, "|"),
          /* @__PURE__ */ import_react55.default.createElement("span", null, t.seats, ": ", /* @__PURE__ */ import_react55.default.createElement("span", { className: "text-slate-600" }, examData.trends[hoveredIdx].seats.toLocaleString()))
        ) : /* @__PURE__ */ import_react55.default.createElement("span", { className: "text-xs font-bold text-slate-405 italic" }, "Hover points to inspect values"))));
      } else {
        const rate = (examData.seatFunnel.seats / examData.seatFunnel.applicants * 100).toFixed(1);
        return /* @__PURE__ */ import_react55.default.createElement("div", { className: "bg-white border border-slate-200 rounded-[2rem] p-6 md:p-8 shadow-sm flex flex-col h-full w-full" }, /* @__PURE__ */ import_react55.default.createElement("div", { className: "flex justify-between items-center mb-6" }, /* @__PURE__ */ import_react55.default.createElement("h4", { className: "text-sm font-black uppercase tracking-widest text-slate-400" }, t.funnelTab), /* @__PURE__ */ import_react55.default.createElement("div", { className: "flex gap-2 bg-slate-50 border border-slate-200/60 p-0.5 rounded-xl" }, /* @__PURE__ */ import_react55.default.createElement(
          "button",
          {
            onClick: () => {
              setActiveTab("tab1");
              setHoveredIdx(null);
            },
            className: "text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all cursor-pointer text-slate-555"
          },
          t.competitionTab
        ), /* @__PURE__ */ import_react55.default.createElement(
          "button",
          {
            onClick: () => {
              setActiveTab("tab2");
              setHoveredIdx(null);
            },
            className: `text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all cursor-pointer ${theme.primaryLight} bg-white shadow-xs`
          },
          t.funnelTab
        ))), /* @__PURE__ */ import_react55.default.createElement("div", { className: "flex-grow flex flex-col justify-center space-y-6" }, /* @__PURE__ */ import_react55.default.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ import_react55.default.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ import_react55.default.createElement("div", { className: "flex justify-between text-xs font-black text-slate-700" }, /* @__PURE__ */ import_react55.default.createElement("span", null, t.applicants), /* @__PURE__ */ import_react55.default.createElement("span", null, examData.seatFunnel.applicants.toLocaleString())), /* @__PURE__ */ import_react55.default.createElement("div", { className: "h-6 bg-slate-100 rounded-lg overflow-hidden border border-slate-200/50" }, /* @__PURE__ */ import_react55.default.createElement(
          motion.div,
          {
            initial: { width: 0 },
            animate: { width: "100%" },
            transition: { duration: 0.8 },
            className: "h-full bg-slate-400/30"
          }
        ))), /* @__PURE__ */ import_react55.default.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ import_react55.default.createElement("div", { className: "flex justify-between text-xs font-black text-slate-700" }, /* @__PURE__ */ import_react55.default.createElement("span", null, t.seats), /* @__PURE__ */ import_react55.default.createElement("span", { className: theme.text }, examData.seatFunnel.seats.toLocaleString())), /* @__PURE__ */ import_react55.default.createElement("div", { className: "h-6 bg-slate-100 rounded-lg overflow-hidden border border-slate-200/50" }, /* @__PURE__ */ import_react55.default.createElement(
          motion.div,
          {
            initial: { width: 0 },
            animate: { width: `${examData.seatFunnel.seats / examData.seatFunnel.applicants * 100}%` },
            transition: { duration: 0.8, delay: 0.2 },
            className: `h-full ${theme.primary}`
          }
        )))), /* @__PURE__ */ import_react55.default.createElement("div", { className: "bg-slate-50 border border-slate-200/50 rounded-2xl p-4 text-center" }, /* @__PURE__ */ import_react55.default.createElement("span", { className: "text-xs font-extrabold uppercase tracking-widest text-slate-400 block mb-1" }, t.acceptanceRate), /* @__PURE__ */ import_react55.default.createElement("span", { className: `text-4xl font-black ${theme.text}` }, rate, "%"), /* @__PURE__ */ import_react55.default.createElement("p", { className: "text-[11px] font-bold text-slate-500 mt-2 max-w-xs mx-auto" }, "Only ", examData.seatFunnel.seats.toLocaleString(), " seats are allocated for every ", examData.seatFunnel.applicants.toLocaleString(), " total applicants."))));
      }
    } else {
      const careerData = data;
      if (activeTab === "tab1") {
        const maxVal = Math.max(...careerData.jobs.map((d) => d.openings));
        return /* @__PURE__ */ import_react55.default.createElement("div", { className: "bg-white border border-slate-200 rounded-[2rem] p-6 md:p-8 shadow-sm flex flex-col h-full w-full" }, /* @__PURE__ */ import_react55.default.createElement("div", { className: "flex justify-between items-center mb-6" }, /* @__PURE__ */ import_react55.default.createElement("h4", { className: "text-sm font-black uppercase tracking-widest text-slate-400" }, t.jobTab), /* @__PURE__ */ import_react55.default.createElement("div", { className: "flex gap-2 bg-slate-50 border border-slate-200/60 p-0.5 rounded-xl" }, /* @__PURE__ */ import_react55.default.createElement(
          "button",
          {
            onClick: () => {
              setActiveTab("tab1");
              setHoveredIdx(null);
            },
            className: `text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all cursor-pointer ${theme.primaryLight} bg-white shadow-xs`
          },
          t.jobTab
        ), /* @__PURE__ */ import_react55.default.createElement(
          "button",
          {
            onClick: () => {
              setActiveTab("tab2");
              setHoveredIdx(null);
            },
            className: "text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all cursor-pointer text-slate-555"
          },
          t.salaryTab
        ))), /* @__PURE__ */ import_react55.default.createElement("div", { className: "relative flex-grow" }, /* @__PURE__ */ import_react55.default.createElement("svg", { viewBox: `0 0 ${width} ${height}`, className: "w-full h-auto overflow-visible select-none" }, [0, 0.25, 0.5, 0.75, 1].map((r, i) => {
          const y = paddingTop + r * chartHeight;
          return /* @__PURE__ */ import_react55.default.createElement(
            "line",
            {
              key: i,
              x1: paddingLeft,
              y1: y,
              x2: width - paddingRight,
              y2: y,
              stroke: "#e2e8f0",
              strokeWidth: "1",
              strokeDasharray: "4 4"
            }
          );
        }), [0, 0.25, 0.5, 0.75, 1].map((r, i) => {
          const val = Math.round((1 - r) * maxVal / 1e3);
          const y = paddingTop + r * chartHeight;
          return /* @__PURE__ */ import_react55.default.createElement(
            "text",
            {
              key: i,
              x: paddingLeft - 8,
              y: y + 4,
              textAnchor: "end",
              className: "text-[10px] font-extrabold fill-slate-400"
            },
            val,
            "K"
          );
        }), careerData.jobs.map((d, i) => {
          const barWidth = 35;
          const barSpacing = chartWidth / careerData.jobs.length;
          const x = paddingLeft + i * barSpacing + (barSpacing - barWidth) / 2;
          const barHeight = d.openings / maxVal * chartHeight;
          const y = paddingTop + chartHeight - barHeight;
          return /* @__PURE__ */ import_react55.default.createElement(
            "g",
            {
              key: i,
              onMouseEnter: () => setHoveredIdx(i),
              onMouseLeave: () => setHoveredIdx(null),
              className: "cursor-pointer"
            },
            /* @__PURE__ */ import_react55.default.createElement(
              motion.rect,
              {
                x,
                y,
                width: barWidth,
                height: barHeight,
                rx: "6",
                className: `${hoveredIdx === i ? "fill-slate-400/50" : `${theme.primary} fill-opacity-80`}`,
                initial: { scaleY: 0, originY: 1 },
                animate: { scaleY: 1 },
                transition: { duration: 0.6, delay: i * 0.1 }
              }
            ),
            /* @__PURE__ */ import_react55.default.createElement(
              "rect",
              {
                x: x - 10,
                y: paddingTop,
                width: barWidth + 20,
                height: chartHeight,
                fill: "transparent"
              }
            )
          );
        }), careerData.jobs.map((d, i) => {
          const barSpacing = chartWidth / careerData.jobs.length;
          const x = paddingLeft + i * barSpacing + barSpacing / 2;
          return /* @__PURE__ */ import_react55.default.createElement(
            "text",
            {
              key: i,
              x,
              y: paddingTop + chartHeight + 18,
              textAnchor: "middle",
              className: "text-[10px] font-black fill-slate-500"
            },
            d.year
          );
        }))), /* @__PURE__ */ import_react55.default.createElement("div", { className: "mt-4 flex flex-wrap gap-x-6 gap-y-2 justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-200/50" }, /* @__PURE__ */ import_react55.default.createElement("span", { className: "text-xs font-bold text-slate-650 flex items-center gap-1.5" }, /* @__PURE__ */ import_react55.default.createElement("span", { className: `w-3.5 h-3.5 rounded-md ${theme.primary}` }), /* @__PURE__ */ import_react55.default.createElement("span", null, t.annualOpenings)), /* @__PURE__ */ import_react55.default.createElement(AnimatePresence, { mode: "wait" }, hoveredIdx !== null ? /* @__PURE__ */ import_react55.default.createElement(
          motion.div,
          {
            key: hoveredIdx,
            initial: { opacity: 0, x: 5 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -5 },
            className: "text-xs font-black text-slate-800"
          },
          /* @__PURE__ */ import_react55.default.createElement("span", null, t.yearLabel, ": ", /* @__PURE__ */ import_react55.default.createElement("span", { className: "text-slate-600" }, careerData.jobs[hoveredIdx].year)),
          /* @__PURE__ */ import_react55.default.createElement("span", { className: "text-slate-300 mx-2" }, "|"),
          /* @__PURE__ */ import_react55.default.createElement("span", null, t.hiringDemand, ": ", /* @__PURE__ */ import_react55.default.createElement("span", { className: theme.text }, careerData.jobs[hoveredIdx].openings.toLocaleString()))
        ) : /* @__PURE__ */ import_react55.default.createElement("span", { className: "text-xs font-bold text-slate-405 italic" }, "Hover bars to inspect values"))));
      } else {
        const maxVal = Math.max(...careerData.salaries.map((d) => d.numericAmount));
        return /* @__PURE__ */ import_react55.default.createElement("div", { className: "bg-white border border-slate-200 rounded-[2rem] p-6 md:p-8 shadow-sm flex flex-col h-full w-full" }, /* @__PURE__ */ import_react55.default.createElement("div", { className: "flex justify-between items-center mb-6" }, /* @__PURE__ */ import_react55.default.createElement("h4", { className: "text-sm font-black uppercase tracking-widest text-slate-400" }, t.salaryTab, " ", /* @__PURE__ */ import_react55.default.createElement("span", { className: "text-[10px] lowercase font-normal" }, t.perMonth)), /* @__PURE__ */ import_react55.default.createElement("div", { className: "flex gap-2 bg-slate-50 border border-slate-200/60 p-0.5 rounded-xl" }, /* @__PURE__ */ import_react55.default.createElement(
          "button",
          {
            onClick: () => {
              setActiveTab("tab1");
              setHoveredIdx(null);
            },
            className: "text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all cursor-pointer text-slate-555"
          },
          t.jobTab
        ), /* @__PURE__ */ import_react55.default.createElement(
          "button",
          {
            onClick: () => {
              setActiveTab("tab2");
              setHoveredIdx(null);
            },
            className: `text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-lg transition-all cursor-pointer ${theme.primaryLight} bg-white shadow-xs`
          },
          t.salaryTab
        ))), /* @__PURE__ */ import_react55.default.createElement("div", { className: "relative flex-grow" }, /* @__PURE__ */ import_react55.default.createElement("svg", { viewBox: `0 0 ${width} ${height}`, className: "w-full h-auto overflow-visible select-none" }, [0, 0.25, 0.5, 0.75, 1].map((r, i) => {
          const y = paddingTop + r * chartHeight;
          return /* @__PURE__ */ import_react55.default.createElement(
            "line",
            {
              key: i,
              x1: paddingLeft,
              y1: y,
              x2: width - paddingRight,
              y2: y,
              stroke: "#e2e8f0",
              strokeWidth: "1",
              strokeDasharray: "4 4"
            }
          );
        }), [0, 0.25, 0.5, 0.75, 1].map((r, i) => {
          const val = Math.round((1 - r) * maxVal / 1e3);
          const y = paddingTop + r * chartHeight;
          return /* @__PURE__ */ import_react55.default.createElement(
            "text",
            {
              key: i,
              x: paddingLeft - 8,
              y: y + 4,
              textAnchor: "end",
              className: "text-[10px] font-extrabold fill-slate-400"
            },
            val >= 100 ? `${(val / 100).toFixed(1)}L` : `${val}K`
          );
        }), (() => {
          const barSpacing = chartWidth / careerData.salaries.length;
          const points = careerData.salaries.map((s, idx) => {
            const x = paddingLeft + idx * barSpacing + barSpacing / 2;
            const y = paddingTop + chartHeight - s.numericAmount / maxVal * chartHeight;
            return { x, y };
          });
          const lineD = points.reduce((acc, p, i) => i === 0 ? `M ${p.x} ${p.y}` : `${acc} L ${p.x} ${p.y}`, "");
          return /* @__PURE__ */ import_react55.default.createElement(import_react55.default.Fragment, null, /* @__PURE__ */ import_react55.default.createElement(
            motion.path,
            {
              d: lineD,
              fill: "none",
              className: theme.primary,
              strokeWidth: "3.5",
              strokeLinecap: "round",
              initial: { pathLength: 0 },
              animate: { pathLength: 1 },
              transition: { duration: 0.8 }
            }
          ), careerData.salaries.map((s, i) => {
            const p = points[i];
            const levelName = language === "hi" ? s.levelHi : s.level;
            return /* @__PURE__ */ import_react55.default.createElement(
              "g",
              {
                key: i,
                onMouseEnter: () => setHoveredIdx(i),
                onMouseLeave: () => setHoveredIdx(null),
                className: "cursor-pointer"
              },
              /* @__PURE__ */ import_react55.default.createElement(
                "circle",
                {
                  cx: p.x,
                  cy: p.y,
                  r: hoveredIdx === i ? "8" : "5.5",
                  className: `transition-all duration-150 ${theme.primary}`,
                  stroke: "#fff",
                  strokeWidth: "2"
                }
              ),
              /* @__PURE__ */ import_react55.default.createElement(
                "rect",
                {
                  x: p.x - 20,
                  y: paddingTop,
                  width: "40",
                  height: chartHeight,
                  fill: "transparent"
                }
              )
            );
          }));
        })(), careerData.salaries.map((s, i) => {
          const barSpacing = chartWidth / careerData.salaries.length;
          const x = paddingLeft + i * barSpacing + barSpacing / 2;
          const label = language === "hi" ? s.levelHi : s.level;
          return /* @__PURE__ */ import_react55.default.createElement(
            "text",
            {
              key: i,
              x,
              y: paddingTop + chartHeight + 18,
              textAnchor: "middle",
              className: "text-[10px] font-black fill-slate-500"
            },
            label
          );
        }))), /* @__PURE__ */ import_react55.default.createElement("div", { className: "mt-4 flex flex-wrap gap-x-6 gap-y-2 justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-200/50" }, /* @__PURE__ */ import_react55.default.createElement("span", { className: "text-xs font-bold text-slate-650 flex items-center gap-1.5" }, /* @__PURE__ */ import_react55.default.createElement("span", { className: `w-3.5 h-3.5 rounded-full ${theme.primary}` }), /* @__PURE__ */ import_react55.default.createElement("span", null, t.salaryLabel)), /* @__PURE__ */ import_react55.default.createElement(AnimatePresence, { mode: "wait" }, hoveredIdx !== null ? /* @__PURE__ */ import_react55.default.createElement(
          motion.div,
          {
            key: hoveredIdx,
            initial: { opacity: 0, x: 5 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -5 },
            className: "text-xs font-black text-slate-800"
          },
          /* @__PURE__ */ import_react55.default.createElement("span", null, t.levelLabel, ": ", /* @__PURE__ */ import_react55.default.createElement("span", { className: "text-slate-600" }, language === "hi" ? careerData.salaries[hoveredIdx].levelHi : careerData.salaries[hoveredIdx].level)),
          /* @__PURE__ */ import_react55.default.createElement("span", { className: "text-slate-300 mx-2" }, "|"),
          /* @__PURE__ */ import_react55.default.createElement("span", null, t.salaryLabel, ": ", /* @__PURE__ */ import_react55.default.createElement("span", { className: theme.text }, careerData.salaries[hoveredIdx].amount))
        ) : /* @__PURE__ */ import_react55.default.createElement("span", { className: "text-xs font-bold text-slate-405 italic" }, "Hover points to inspect values"))));
      }
    }
  }
  return __toCommonJS(entry_exports);
})();
window.WhatNow=WhatNow.__dsMainNs?Object.assign({},WhatNow,WhatNow.__dsMainNs,{__dsMainNs:undefined}):WhatNow;
