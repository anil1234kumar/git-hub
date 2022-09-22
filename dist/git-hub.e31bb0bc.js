// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"index.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var result = document.getElementById("result");
var filter = document.getElementById("filter");
var listItems = [];
getData();
filter.addEventListener("input", function (e) {
  return filterData(e.target.value);
});

function getData() {
  return _getData.apply(this, arguments);
}

function _getData() {
  _getData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var res, _yield$res$json, results;

    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return fetch("https://randomuser.me/api?results=50");

          case 2:
            res = _context3.sent;
            _context3.next = 5;
            return res.json();

          case 5:
            _yield$res$json = _context3.sent;
            results = _yield$res$json.results;
            // Clear result
            result.innerHTML = "";
            results.forEach(function (user) {
              var li = document.createElement("li");
              listItems.push(li);
              li.innerHTML = "\n            <img src=\"".concat(user.picture.large, "\" alt=\"").concat(user.name.first, "\">\n            <div class=\"user-info\">\n                <h4>").concat(user.name.first, " ").concat(user.name.last, "</h4>\n                <p>").concat(user.location.city, ", ").concat(user.location.country, "</p>\n            </div>\n        ");
              result.appendChild(li);
            });

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getData.apply(this, arguments);
}

function filterData(searchTerm) {
  listItems.forEach(function (item) {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
} // ............................................./


var labels = document.querySelectorAll(".form-control label");
labels.forEach(function (label) {
  label.innerHTML = label.innerText.split("").map(function (letter, idx) {
    return "<span style=\"transition-delay:".concat(idx * 50, "ms\">").concat(letter, "</span>");
  }).join("");
}); // ......................................./

var poke_container = document.getElementById("poke-container");
var pokemon_count = 150;
var colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5"
};
var main_types = Object.keys(colors);

var fetchPokemons = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var i;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            i = 1;

          case 1:
            if (!(i <= pokemon_count)) {
              _context.next = 7;
              break;
            }

            _context.next = 4;
            return getPokemon(i);

          case 4:
            i++;
            _context.next = 1;
            break;

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchPokemons() {
    return _ref.apply(this, arguments);
  };
}();

var getPokemon = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id) {
    var url, res, data;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = "https://pokeapi.co/api/v2/pokemon/".concat(id);
            _context2.next = 3;
            return fetch(url);

          case 3:
            res = _context2.sent;
            _context2.next = 6;
            return res.json();

          case 6:
            data = _context2.sent;
            createPokemonCard(data);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getPokemon(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var createPokemonCard = function createPokemonCard(pokemon) {
  var pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  var name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  var id = pokemon.id.toString().padStart(3, "0");
  var poke_types = pokemon.types.map(function (type) {
    return type.type.name;
  });
  var type = main_types.find(function (type) {
    return poke_types.indexOf(type) > -1;
  });
  var color = colors[type];
  pokemonEl.style.backgroundColor = color;
  var pokemonInnerHTML = "\n    <div class=\"img-container\">\n        <img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(pokemon.id, ".png\"\" alt=\"").concat(name, "\">\n    </div>\n    <div class=\"info\">\n        <span class=\"number\">#").concat(id, "</span>\n        <h3 class=\"name\">").concat(name, "</h3>\n        <small class=\"type\">Type: <span>").concat(type, "</span> </small>\n    </div>\n    ");
  pokemonEl.innerHTML = pokemonInnerHTML;
  poke_container.appendChild(pokemonEl);
};

fetchPokemons(); // ................................................

var form = document.getElementById("form");
var input = document.getElementById("input");
var todosUL = document.getElementById("todos");
var todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach(function (todo) {
    return addTodo(todo);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  var todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    var todoEl = document.createElement("li");

    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todoEl.innerText = todoText;
    todoEl.addEventListener("click", function () {
      todoEl.classList.toggle("completed");
      updateLS();
    });
    todoEl.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      todoEl.remove();
      updateLS();
    });
    todosUL.appendChild(todoEl);
    input.value = "";
    updateLS();
  }
}

function updateLS() {
  todosEl = document.querySelectorAll("li");
  var todos = [];
  todosEl.forEach(function (todoEl) {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains("completed")
    });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
} // ......................................................


var button = document.getElementById("button");
var toasts = document.getElementById("toasts");
var messages = ["Message One", "Message Two", "Message Three", "Message Four"];
var types = ["info", "success", "error"];
button.addEventListener("click", function () {
  return createNotification();
});

function createNotification() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : getRandomType());
  notif.innerText = message ? message : getRandomMessage();
  toasts.appendChild(notif);
  setTimeout(function () {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
} // ......................................./


var codes = document.querySelectorAll(".code");
codes[0].focus();
codes.forEach(function (code, idx) {
  code.addEventListener("keydown", function (e) {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = "";
      setTimeout(function () {
        return codes[idx + 1].focus();
      }, 10);
    } else if (e.key === "Backspace") {
      setTimeout(function () {
        return codes[idx - 1].focus();
      }, 10);
    }
  });
}); // ........................................................../

var hourEl = document.querySelector(".hour");
var minuteEl = document.querySelector(".minute");
var secondEl = document.querySelector(".second");
var timeEl = document.querySelector(".time");
var dateEl = document.querySelector(".date");
var toggle = document.querySelector(".toggle");
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
toggle.addEventListener("click", function (e) {
  var html = document.querySelector("html");

  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light mode";
  }
});

function setTime() {
  var time = new Date();
  var month = time.getMonth();
  var day = time.getDay();
  var date = time.getDate();
  var hours = time.getHours();
  var hoursForClock = hours >= 13 ? hours % 12 : hours;
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  var ampm = hours >= 12 ? "PM" : "AM";
  hourEl.style.transform = "translate(-50%, -100%) rotate(".concat(scale(hoursForClock, 0, 12, 0, 360), "deg)");
  minuteEl.style.transform = "translate(-50%, -100%) rotate(".concat(scale(minutes, 0, 60, 0, 360), "deg)");
  secondEl.style.transform = "translate(-50%, -100%) rotate(".concat(scale(seconds, 0, 60, 0, 360), "deg)");
  timeEl.innerHTML = "".concat(hoursForClock, ":").concat(minutes < 10 ? "0".concat(minutes) : minutes, " ").concat(ampm);
  dateEl.innerHTML = "".concat(days[day], ", ").concat(months[month], " <span class=\"circle\">").concat(date, "</span>");
} // StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers


var scale = function scale(num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

setTime();
setInterval(setTime, 1000); // ................................................../

var testimonialsContainer = document.querySelector(".testimonials-container");
var testimonial = document.querySelector(".testimonial");
var userImage = document.querySelector(".user-image");
var username = document.querySelector(".username");
var role = document.querySelector(".role");
var testimonials = [{
  name: "Miyah Myles",
  position: "Marketing",
  photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
  text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time."
}, {
  name: "June Cha",
  position: "Software Engineer",
  photo: "https://randomuser.me/api/portraits/women/44.jpg",
  text: "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!"
}, {
  name: "Iida Niskanen",
  position: "Data Entry",
  photo: "https://randomuser.me/api/portraits/women/68.jpg",
  text: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him."
}, {
  name: "Renee Sims",
  position: "Receptionist",
  photo: "https://randomuser.me/api/portraits/women/65.jpg",
  text: "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future."
}, {
  name: "Jonathan Nunfiez",
  position: "Graphic Designer",
  photo: "https://randomuser.me/api/portraits/men/43.jpg",
  text: "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!"
}, {
  name: "Sasha Ho",
  position: "Accountant",
  photo: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
  text: "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!"
}, {
  name: "Veeti Seppanen",
  position: "Director",
  photo: "https://randomuser.me/api/portraits/men/97.jpg",
  text: "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results."
}];
var idx = 1;

function updateTestimonial() {
  var _testimonials$idx = testimonials[idx],
      name = _testimonials$idx.name,
      position = _testimonials$idx.position,
      photo = _testimonials$idx.photo,
      text = _testimonials$idx.text;
  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;
  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000); // ...................................................

var nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
} // ........................................................


var sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
sounds.forEach(function (sound) {
  var btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", function () {
    stopSongs();
    document.getElementById(sound).play();
  });
  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach(function (sound) {
    var song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
} // .........................................


var boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", checkBoxes);
checkBoxes();

function checkBoxes() {
  var triggerBottom = window.innerHeight / 5 * 4;
  boxes.forEach(function (box) {
    var boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
} // ....................................


var container = document.querySelector(".container");
var unsplashURL = "https://source.unsplash.com/random/";
var rows = 5;

for (var i = 0; i < rows * 3; i++) {
  var img = document.createElement("img");
  img.src = "".concat(unsplashURL).concat(getRandomSize());
  container.appendChild(img);
}

function getRandomSize() {
  return "".concat(getRandomNr(), "x").concat(getRandomNr());
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
} // ...................................................


var tagsEl = document.getElementById("tags");
var textarea = document.getElementById("textarea");
textarea.focus();
textarea.addEventListener("keyup", function (e) {
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(function () {
      e.target.value = "";
    }, 10);
    randomSelect();
  }
});

function createTags(input) {
  var tags = input.split(",").filter(function (tag) {
    return tag.trim() !== "";
  }).map(function (tag) {
    return tag.trim();
  });
  tagsEl.innerHTML = "";
  tags.forEach(function (tag) {
    var tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  var times = 30;
  var interval = setInterval(function () {
    var randomTag = pickRandomTag();

    if (randomTag !== undefined) {
      highlightTag(randomTag);
      setTimeout(function () {
        unHighlightTag(randomTag);
      }, 100);
    }
  }, 100);
  setTimeout(function () {
    clearInterval(interval);
    setTimeout(function () {
      var randomTag = pickRandomTag();
      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  var tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
} // ........................................


var quizData = [{
  question: "Which language runs in a web browser?",
  a: "Java",
  b: "C",
  c: "Python",
  d: "JavaScript",
  correct: "d"
}, {
  question: "What does CSS stand for?",
  a: "Central Style Sheets",
  b: "Cascading Style Sheets",
  c: "Cascading Simple Sheets",
  d: "Cars SUVs Sailboats",
  correct: "b"
}, {
  question: "What does HTML stand for?",
  a: "Hypertext Markup Language",
  b: "Hypertext Markdown Language",
  c: "Hyperloop Machine Language",
  d: "Helicopters Terminals Motorboats Lamborginis",
  correct: "a"
}, {
  question: "What year was JavaScript launched?",
  a: "1996",
  b: "1995",
  c: "1994",
  d: "none of the above",
  correct: "b"
}];
var quiz = document.getElementById("quiz");
var answerEls = document.querySelectorAll(".answer");
var questionEl = document.getElementById("question");
var a_text = document.getElementById("a_text");
var b_text = document.getElementById("b_text");
var c_text = document.getElementById("c_text");
var d_text = document.getElementById("d_text");
var submitBtn = document.getElementById("submit");
var currentQuiz = 0;
var score = 0;
loadQuiz();

function loadQuiz() {
  deselectAnswers();
  var currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(function (answerEl) {
    return answerEl.checked = false;
  });
}

function getSelected() {
  var answer;
  answerEls.forEach(function (answerEl) {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", function () {
  var answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = "\n              <h2>You answered ".concat(score, "/").concat(quizData.length, " questions correctly</h2>\n\n              <button onclick=\"location.reload()\">Reload</button>\n          ");
    }
  }
}); // ....................................................

var progress = document.getElementById("progress");
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var circles = document.querySelectorAll(".circle");
var currentActive = 1;
next.addEventListener("click", function () {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});
prev.addEventListener("click", function () {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach(function (circle, idx) {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  var actives = document.querySelectorAll(".active");
  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%";

  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
} // ....................................


var password = document.getElementById("password");
var background = document.getElementById("background");
password.addEventListener("input", function (e) {
  var input = e.target.value;
  var length = input.length;
  var blurValue = 20 - length * 2;
  background.style.filter = "blur(".concat(blurValue, "px)");
}); // .....................................................

var resultEl = document.getElementById("result");
var lengthEl = document.getElementById("length");
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numbersEl = document.getElementById("numbers");
var symbolsEl = document.getElementById("symbols");
var generateEl = document.getElementById("generate");
var clipboardEl = document.getElementById("clipboard");
var randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};
clipboardEl.addEventListener("click", function () {
  var password = resultEl.innerText;

  if (!password) {
    return;
  }

  navigator.clipboard.writeText(password);
  alert("Password copied to clipboard!");
});
generateEl.addEventListener("click", function () {
  var length = +lengthEl.value;
  var hasLower = lowercaseEl.checked;
  var hasUpper = uppercaseEl.checked;
  var hasNumber = numbersEl.checked;
  var hasSymbol = symbolsEl.checked;
  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
  var generatedPassword = "";
  var typesCount = lower + upper + number + symbol;
  var typesArr = [{
    lower: lower
  }, {
    upper: upper
  }, {
    number: number
  }, {
    symbol: symbol
  }].filter(function (item) {
    return Object.values(item)[0];
  });

  if (typesCount === 0) {
    return "";
  }

  for (var _i = 0; _i < length; _i += typesCount) {
    typesArr.forEach(function (type) {
      var funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  var finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  var symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
} // ............................................


var addBtn = document.getElementById("add");
var notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach(function (note) {
    return addNewNote(note);
  });
}

addBtn.addEventListener("click", function () {
  return addNewNote();
});

function addNewNote() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = "\n    <div class=\"tools\">\n        <button class=\"edit\"><i class=\"fas fa-edit\"></i></button>\n        <button class=\"delete\"><i class=\"fas fa-trash-alt\"></i></button>\n    </div>\n\n    <div class=\"main ".concat(text ? "" : "hidden", "\"></div>\n    <textarea class=\"").concat(text ? "hidden" : "", "\"></textarea>\n    ");
  var editBtn = note.querySelector(".edit");
  var deleteBtn = note.querySelector(".delete");
  var main = note.querySelector(".main");
  var textArea = note.querySelector("textarea");
  textArea.value = text;
  main.innerHTML = marked(text);
  deleteBtn.addEventListener("click", function () {
    note.remove();
    updateLS();
  });
  editBtn.addEventListener("click", function () {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });
  textArea.addEventListener("input", function (e) {
    var value = e.target.value;
    main.innerHTML = marked(value);
    updateLS();
  });
  document.body.appendChild(note);
}

function updateLS() {
  var notesText = document.querySelectorAll("textarea");
  var notes = [];
  notesText.forEach(function (note) {
    return notes.push(note.value);
  });
  localStorage.setItem("notes", JSON.stringify(notes));
} // .........................................


var screens = document.querySelectorAll(".screen");
var choose_insect_btns = document.querySelectorAll(".choose-insect-btn");
var start_btn = document.getElementById("start-btn");
var game_container = document.getElementById("game-container");
var timeEls = document.getElementById("time");
var scoreEl = document.getElementById("score");
var message = document.getElementById("message");
var seconds = 0;
var scores = 0;
var selected_insect = {};
start_btn.addEventListener("click", function () {
  return screens[0].classList.add("up");
});
choose_insect_btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var img = btn.querySelector("img");
    var src = img.getAttribute("src");
    var alt = img.getAttribute("alt");
    selected_insect = {
      src: src,
      alt: alt
    };
    screens[1].classList.add("up");
    setTimeout(createInsect, 1000);
    startGame();
  });
});

function startGame() {
  setInterval(increaseTime, 1000);
}

function increaseTime() {
  var m = Math.floor(seconds / 60);
  var s = seconds % 60;
  m = m < 10 ? "0".concat(m) : m;
  s = s < 10 ? "0".concat(s) : s;
  timeEl.innerHTML = "Time: ".concat(m, ":").concat(s);
  seconds++;
}

function createInsect() {
  var insect = document.createElement("div");
  insect.classList.add("insect");

  var _getRandomLocation = getRandomLocation(),
      x = _getRandomLocation.x,
      y = _getRandomLocation.y;

  insect.style.top = "".concat(y, "px");
  insect.style.left = "".concat(x, "px");
  insect.innerHTML = "<img src=\"".concat(selected_insect.src, "\" alt=\"").concat(selected_insect.alt, "\" style=\"transform: rotate(").concat(Math.random() * 360, "deg)\" />");
  insect.addEventListener("click", catchInsect);
  game_container.appendChild(insect);
}

function getRandomLocation() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var x = Math.random() * (width - 200) + 100;
  var y = Math.random() * (height - 200) + 100;
  return {
    x: x,
    y: y
  };
}

function catchInsect() {
  var _this = this;

  increaseScore();
  this.classList.add("caught");
  setTimeout(function () {
    return _this.remove();
  }, 2000);
  addInsects();
}

function addInsects() {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
}

function increaseScore() {
  score++;

  if (score > 19) {
    message.classList.add("visible");
  }

  scoreEl.innerHTML = "Score: ".concat(score);
} // ..................................................


var counters = document.querySelectorAll(".counter");
counters.forEach(function (counter) {
  counter.innerText = "0";

  var updateCounter = function updateCounter() {
    var target = +counter.getAttribute("data-target");
    var c = +counter.innerText;
    var increment = target / 200;

    if (c < target) {
      counter.innerText = "".concat(Math.ceil(c + increment));
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
}); // ..............................

var toggles = document.querySelectorAll(".toggle");
var good = document.querySelector("#good");
var cheap = document.querySelector("#cheap");
var fast = document.querySelector("#fast");
toggles.forEach(function (toggle) {
  return toggle.addEventListener("change", function (e) {
    return doTheTrick(e.target);
  });
});

function doTheTrick(theClickedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickedOne) {
      fast.checked = false;
    }

    if (cheap === theClickedOne) {
      good.checked = false;
    }

    if (fast === theClickedOne) {
      cheap.checked = false;
    }
  }
} // ........................................


var toggles2 = document.querySelectorAll(".faq-toggle");
toggles.forEach(function (toggle) {
  toggle.addEventListener("click", function () {
    toggle.parentNode.classList.toggle("active");
  });
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "40007" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/git-hub.e31bb0bc.js.map