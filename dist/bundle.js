(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BackgroundPane = void 0;

var _simpleComponent = require("../libs/simple-component.js");

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/*A simple semi-transparent back-pane*/


var BackgroundPane = /*#__PURE__*/function (_SimpleComponent) {
  _inherits(BackgroundPane, _SimpleComponent);

  var _super = _createSuper(BackgroundPane);

  function BackgroundPane() {
    var _this;

    _classCallCheck(this, BackgroundPane);

    _this = _super.call(this, "background-pane");

    _this.element.setAttribute("style", "position: absolute; top: 0; height: 100%; width: 100%" + "background-color: black; opacity: .5; z-index: 10");

    return _this;
  }

  return BackgroundPane;
}(_simpleComponent.SimpleComponent);

exports.BackgroundPane = BackgroundPane;

},{"../libs/simple-component.js":13}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CurrentTurn = void 0;

var _writableComponent = require("../libs/writable-component.js");

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = _superPropBase(target, property);

      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        _defineProperty(receiver, property, value);
      }

      return true;
    };
  }

  return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/*This class holds the current turn number. Its overwriting its 
base class because we want to add more text than
the simple "value" that WritableComponent allows */


var CurrentTurn = /*#__PURE__*/function (_WritableComponent) {
  _inherits(CurrentTurn, _WritableComponent);

  var _super = _createSuper(CurrentTurn);

  function CurrentTurn() {
    var _this;

    _classCallCheck(this, CurrentTurn);

    _this = _super.call(this, "current-turn");

    _this.element.setAttribute("style", "float: left");

    return _this;
  }

  _createClass(CurrentTurn, [{
    key: "textContent",
    set: function set(v) {
      _set(_getPrototypeOf(CurrentTurn.prototype), "textContent", "turn No: ".concat(v), this, true);
    }
  }]);

  return CurrentTurn;
}(_writableComponent.WritableComponent);

exports.CurrentTurn = CurrentTurn;

},{"../libs/writable-component.js":15}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameField = void 0;

var _listComponent = require("../libs/list-component.js");

var _gameRow = require("./game-row.js");

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/*GameField is responsible for creating the actual elements of the game.
We do this by iterating over the provided field from GameEngine and 
creating a row and its columns with GameRow and GameSlot*/


var GameField = /*#__PURE__*/function (_ListComponent) {
  _inherits(GameField, _ListComponent);

  var _super = _createSuper(GameField);

  function GameField(field) {
    var _this;

    _classCallCheck(this, GameField);

    _this = _super.call(this, "game-field");
    var gameRow;
    _this.items = [];

    _this.element.setAttribute("style", "font-family: Monospace; text-align: center");

    field.forEach(function (row) {
      gameRow = new _gameRow.GameRow(row);

      _this.element.appendChild(gameRow.element);

      _this.items.push(gameRow);
    });
    return _this;
  }

  return GameField;
}(_listComponent.ListComponent);

exports.GameField = GameField;

},{"../libs/list-component.js":11,"./game-row.js":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameRow = void 0;

var _listComponent = require("../libs/list-component.js");

var _gameSlot = require("./game-slot.js");

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/*GameRow is responsible for iterating the rows and creating the
respective GameSlot, much like GameField */


var GameRow = /*#__PURE__*/function (_ListComponent) {
  _inherits(GameRow, _ListComponent);

  var _super = _createSuper(GameRow);
  /*Again, we will speak about these arguments further on, 
  for now: row is an Array of slots which can be iterated */


  function GameRow(row) {
    var _this;

    _classCallCheck(this, GameRow);

    _this = _super.call(this, "game-row");
    var gameSlot;
    _this.items = [];

    _this.element.setAttribute("style", "display: block;");

    row.forEach(function (slot) {
      gameSlot = new _gameSlot.GameSlot(slot);

      _this.element.appendChild(gameSlot.element);

      _this.items.push(gameSlot);
    });
    return _this;
  }

  return GameRow;
}(_listComponent.ListComponent);

exports.GameRow = GameRow;

},{"../libs/list-component.js":11,"./game-slot.js":5}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameSlot = void 0;

var _writableComponent = require("../libs/writable-component.js");

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = _superPropBase(target, property);

      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        _defineProperty(receiver, property, value);
      }

      return true;
    };
  }

  return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/* GameSlot is the class that's responsible for maintaining visual correlation between 
the GameEngine and the GameHud. Because this holds but the structure of the Component, 
we should refrain from making eventListeners here - unless we want some special 
functionality that's not related to the HUD to happen (and even then, only if you can't write
that method into a Model or Service) */


var GameSlot = /*#__PURE__*/function (_WritableComponent) {
  _inherits(GameSlot, _WritableComponent);

  var _super = _createSuper(GameSlot);
  /*This class takes slot as an argument; this will be made further on, on the 
  GameEngine library, for now, we need only worry that this Object will have, 
  in the future, to be populated with {row: number, column: number} and that 
  even further down, it will have a symbol property */


  function GameSlot(slot) {
    var _this;

    _classCallCheck(this, GameSlot);

    _this = _super.call(this, "game-slot");
    /*We set the style of the element after calling its super class and since 
    we know this.element is a DOM Node we can call all the browser functionalities 
    on it - namely setAttibute() */

    _this.element.setAttribute("style", "height: 60px; width: 60px; background-color: grey; display: inline-block; " + "border: 1px solid black; margin: 5px; font-size: large; color: black; line-height: 60px;" + "text-align: center; cursor: pointer");

    _this.element.setAttribute("slot-row", slot.row);

    _this.element.setAttribute("slot-column", slot.column);

    _this.element.textContent = "-";
    return _this;
  }
  /*Again, overwriting the base class method because we want it to do 
  more than just setting the value  */


  _createClass(GameSlot, [{
    key: "textContent",
    set: function set(slot) {
      _set(_getPrototypeOf(GameSlot.prototype), "textContent", slot.symbol, this, true);

      this.element.style.backgroundColor = "white";
    }
  }]);

  return GameSlot;
}(_writableComponent.WritableComponent);

exports.GameSlot = GameSlot;

},{"../libs/writable-component.js":15}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notice = void 0;

var _backgroundPane = require("./background-pane.js");

var _simpleComponent = require("../libs/simple-component.js");

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/*Notice is the component we use when we want to show any 
special message to the user. We first create the backgroundPane 
and attach it so we have nice, clean, separated information.
The constructor takes a sentence (the text to show) and an 
interval that defaults to 1s so the notice auto-destroys
itself after X seconds.*/


var Notice = /*#__PURE__*/function (_SimpleComponent) {
  _inherits(Notice, _SimpleComponent);

  var _super = _createSuper(Notice);

  function Notice(text) {
    var _this;

    var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

    _classCallCheck(this, Notice);

    _this = _super.call(this, "notice");
    /*Before initializing a notice, check for the existance 
    of a previous one and delete that so we dont 
    overposition text that the user wont be able to read*/

    var element = document.querySelector(_this.selector);
    if (element) _this.removeElements();

    _this.element.setAttribute("style", "position: absolute; top: 20%; background-color: white; z-index: 11;" + "text-align: center; font-family: Monospace; font-size: 25px; width: 100%;");

    _this.element.textContent = text;
    _this.backgroundPane = new _backgroundPane.BackgroundPane();
    document.body.appendChild(_this.backgroundPane.element);
    document.body.appendChild(_this.element);
    setTimeout(function () {
      return _this.removeElements();
    }, interval);
    return _this;
  }

  _createClass(Notice, [{
    key: "removeElements",
    value: function removeElements() {
      this.backgroundPane.destroy();
      this.destroy();
    }
  }]);

  return Notice;
}(_simpleComponent.SimpleComponent);

exports.Notice = Notice;

},{"../libs/simple-component.js":13,"./background-pane.js":1}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaySymbol = void 0;

var _writableComponent = require("../libs/writable-component.js");

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = _superPropBase(target, property);

      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        _defineProperty(receiver, property, value);
      }

      return true;
    };
  }

  return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/*Much like CurrentTurn, it shows the symbol that is playing now*/


var PlaySymbol = /*#__PURE__*/function (_WritableComponent) {
  _inherits(PlaySymbol, _WritableComponent);

  var _super = _createSuper(PlaySymbol);

  function PlaySymbol() {
    var _this;

    _classCallCheck(this, PlaySymbol);

    _this = _super.call(this, "symbol");

    _this.element.setAttribute("style", "float: right");

    return _this;
  }

  _createClass(PlaySymbol, [{
    key: "textContent",
    set: function set(v) {
      _set(_getPrototypeOf(PlaySymbol.prototype), "textContent", "playing: ".concat(v), this, true);
    }
  }]);

  return PlaySymbol;
}(_writableComponent.WritableComponent);

exports.PlaySymbol = PlaySymbol;

},{"../libs/writable-component.js":15}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TurnInformation = void 0;

var _simpleComponent = require("../libs/simple-component.js");

var _playSymbol = require("./play-symbol.js");

var _currentTurn = require("./current-turn.js");

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/*TurnInformation is the class that wraps CurrentTurn and Symbol 
into a whole component. It's not a extension of ListComponent
because we don't need to grab props by index and we can safely 
name them to access them normally*/


var TurnInformation = /*#__PURE__*/function (_SimpleComponent) {
  _inherits(TurnInformation, _SimpleComponent);

  var _super = _createSuper(TurnInformation);

  function TurnInformation() {
    var _this;

    _classCallCheck(this, TurnInformation);

    _this = _super.call(this, "turn-information");
    _this.currentTurn = new _currentTurn.CurrentTurn();
    _this.symbol = new _playSymbol.PlaySymbol();

    _this.element.setAttribute("style", "text-transform: uppercase; font-size: 30px; height: 40px;" + "display: block; font-family: Monospace");

    _this.element.appendChild(_this.currentTurn.element);

    _this.element.appendChild(_this.symbol.element);

    return _this;
  }
  /*An alias that updates both components*/


  _createClass(TurnInformation, [{
    key: "update",
    value: function update(turn, symbol) {
      this.currentTurn.textContent = turn || 0;
      this.symbol.textContent = symbol || "";
    }
  }]);

  return TurnInformation;
}(_simpleComponent.SimpleComponent);

exports.TurnInformation = TurnInformation;

},{"../libs/simple-component.js":13,"./current-turn.js":2,"./play-symbol.js":7}],9:[function(require,module,exports){
"use strict";

var _gameHud = require("./modules/game-hud.js");

document.addEventListener("DOMContentLoaded", function () {
  return new _gameHud.GameHud();
});

},{"./modules/game-hud.js":16}],10:[function(require,module,exports){
/*
Created by Mosh Mage on 1/22/2017.
*/
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameEngine = void 0;

var _winConditions = require("./win-conditions.js");

var _map = require("./map.js");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
/*With the map and Win Conditions out of the way, what's left for 
us to do is the Game Engine itself. This class should take care 
of which turn is it, field occupation and if provided symbol won 
and what line was made */


var GameEngine = /*#__PURE__*/function () {
  function GameEngine(symbols, lastWinner) {
    _classCallCheck(this, GameEngine);

    if (!symbols || symbols.length !== 2) throw Error("A game must be made of two symbols");
    this.turnOf = lastWinner ? lastWinner : Math.round(Math.random()) === 0 ? symbols[0] : symbols[1];
    this.symbols = symbols;
    this.field = (0, _map.createSquare)(3);
    console.log("this.field: ", this.field);
    this.winCondition = new _winConditions.WinCondition(this.field);
  }
  /*We created a square of 3 by 3, so we know anything beyond that is out of bounds; 
  As well as anything bellow zero so lets just go ahead and create a return statement 
  that translate into that. But first, lets check for the validity of the arguments 
  - lets throw an error further down because if we allowed any illegal input.*/


  _createClass(GameEngine, [{
    key: "isOutOfBounds",
    value: function isOutOfBounds(coords) {
      if (!coords || typeof coords.row !== "number" || typeof coords.column !== "number") return true;
      return coords.row > 3 || coords.row < 0 || coords.column > 3 || coords.column < 0;
    }
  }, {
    key: "isTurnOf",
    value: function isTurnOf(symbol) {
      return this.turnOf === symbol;
    }
  }, {
    key: "toggleTurn",
    value: function toggleTurn() {
      return this.turnOf = this.turnOf === this.symbols[0] ? this.symbols[1] : this.symbols[0];
    }
    /*Update the slot state to that of an occupied one with the symbol matching 
    the turn order. 
    @param coords {Object} {row: number, column: number}
    @returns {Object || Boolean} {occupied: boolean, symbol: string, row: number, column: number}
    */

  }, {
    key: "occupyField",
    value: function occupyField(coords) {
      if (this.isOutOfBounds(coords)) return false;
      var slot = this.field[coords.row][coords.column];
      if (slot.occupied) return false;
      slot.occupied = true;
      slot.symbol = this.turnOf;
      return slot;
    }
    /*A simple alias to call winCondition.hasLine with the provided symbol*/

  }, {
    key: "isWinner",
    get: function get() {
      return this.winCondition.hasLine(this.turnOf);
    }
  }, {
    key: "isTie",
    get: function get() {
      return this.winCondition.tieExists;
    }
  }]);

  return GameEngine;
}();

exports.GameEngine = GameEngine;

},{"./map.js":12,"./win-conditions.js":14}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListComponent = void 0;

var _simpleComponent = require("./simple-component.js");

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/** A list component is a Component that its main functionality is to hold other components which need to be grabbed
 in any form or situation. We do this by assigning each new component into an `items` property so that the
 `getItem` statement can then retrieve it*/


var ListComponent = /*#__PURE__*/function (_SimpleComponent) {
  _inherits(ListComponent, _SimpleComponent);

  var _super = _createSuper(ListComponent);

  function ListComponent(selector) {
    var _this;

    _classCallCheck(this, ListComponent);

    _this = _super.call(this, selector);
    _this.items = [];
    return _this;
  }

  _createClass(ListComponent, [{
    key: "getItem",
    value: function getItem(index) {
      if (typeof index != "number") throw Error("getIndex must have a number as an argument");
      if (index < 0 || index > this.items.length) throw Error("Out of bounds of items[]");
      return this.items[index];
    }
  }]);

  return ListComponent;
}(_simpleComponent.SimpleComponent);

exports.ListComponent = ListComponent;

},{"./simple-component.js":13}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSquare = createSquare;
/*Create a representation of a square grid using Arrays that will match to our "game map"*/

function createSquare(height) {
  var rows = height || 3; //use the provided argument or default to size 3x3

  var columns = height || 3;
  var field = [];

  for (var x = 0; x < rows; x++) {
    var row = [];

    for (var y = 0; y < columns; y++) {
      /* we set the row/column information inside the slot so we can 
      return an array of slots on win conditions that way we won't make 
      any special changes to the slot object in the future. */
      var slot = {
        occupied: false,
        symbol: "",
        row: x,
        column: y
      };
      row.push(slot);
    }

    field.push(row);
  }

  return field;
}

},{}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleComponent = void 0;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var SimpleComponent = /*#__PURE__*/function () {
  /**
  * This class generates an element property containing a NodeElement to be appended into the DOM. This class should be
  * the base of every other component we will created and therefore should also contain its removal from dom.
  * @param selector {String} the selector of the element to be created
  */
  function SimpleComponent(selector) {
    _classCallCheck(this, SimpleComponent);

    if (!selector) throw Error("a simple component must be composed of a selector");
    this.selector = selector.toString();
    this.element = document.createElement(this.selector);
  }
  /** call this when you want to remove the element from the DOM */


  _createClass(SimpleComponent, [{
    key: "destroy",
    value: function destroy() {
      document.body.removeChild(this.element);
    }
  }]);

  return SimpleComponent;
}();

exports.SimpleComponent = SimpleComponent;

},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WinCondition = void 0;

var _map = require("./map.js");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
/*Now that we have our field and our "customized slots", we can 
define "win conditions" pretty easily */


var WinCondition = /*#__PURE__*/function () {
  function WinCondition() {
    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _map.createSquare)(3);

    _classCallCheck(this, WinCondition);

    this.field = field;
  }
  /*First, lets define the easiest ones: horizontals. We should 
  iterate over each row and check if all of the columns are 
  occupied with the same symbol. If every column on one row 
  is of the provided symbol, it will return true and we then 
  return the inspectingRow with all the information necessary 
  to the HUD*/


  _createClass(WinCondition, [{
    key: "horizontalLine",
    value: function horizontalLine(symbol) {
      /*returns a boolean if any horizontal 
      line has win condition for provided symbol*/
      var inspectingRow = [];
      return this.field.some(function (row) {
        inspectingRow = row;
        return row.every(function (slot) {
          return slot.occupied && slot.symbol == symbol;
        });
      }) && inspectingRow;
    }
    /*The vertical ones, while a bit more tricky are easy enough as 
    well: This is made by checking that for any given row in the 
    field it has the length of one of the columns occupied and of 
    symbol. We achieve this by creating a temporary array that 
    aggregates every Nth column of each row and then checking if 
    every element inside passes a condition.*/

  }, {
    key: "verticalLine",
    value: function verticalLine(symbol) {
      var _this = this;

      return this.field.some(function (row, index) {
        var inspectingColumn = [];

        for (var x = _this.field.length - 1; x > -1; x--) {
          inspectingColumn.push(_this.field[x][index]);
        }

        return inspectingColumn.every(function (slot) {
          return slot.occupied && slot.symbol == symbol;
        }) && inspectingColumn;
      });
    }
    /*Now I guess you can imagine how we will clear the diagonals, just apply the 
    same technique that we used on verticalLines and increment index on each 
    iteration as well and we should have it! nope :D
    
    This would make you check for combinations that wouldn't satisfy a "win" 
    term as there would be groups of two and groups of three slots. we are only 
    interested in the latter. Furthermore, we need to check for diagonals that come
    from right to left.
    
    So: we know a couple of things from diagonals: they can't take up more space than 
    that that's available on an area (or, the sum of the two verticals equals the 
    hypotenuse (my comment: it equals the square of the hypotenuse) - guess those math 
    classes were for something after all. (my comment: you weren't paying attention)
    All Hail Pythagoras!)
    
    This is translated to: if the sum (or subtraction) of the row you are at and the 
    length of the field is not equal to the length of the field (or 0, in case of 
    subtracting) that diagonal is not a win conditional.
    
    Now, we can simplify this even further because *we know* that diagonals can only 
    become win conditions IF they are from each corner (as those are the only places 
    where a "full diagonal" condition exist) and we know that the middle of the field 
    "has" to be crossed by either line, so we can safely assume that if that slot 
    isn't of the symbol, then the symbol has no win condition on diagonals.*/

  }, {
    key: "diagonalLine",
    value: function diagonalLine(symbol) {
      var length = this.field.length - 1;
      var middle = length / 2;
      /*We first check if the middle, and one of the corners, are unoccupied if 
      that's true then we can assume no win condition is available at the time 
      and return false*/

      if (!this.field[middle][middle].occupied && (!this.field[length][0].occupied || !this.field[0][0].occupied)) return false;
      /*we now check which column is occupied and which symbol it contains so we 
      can traverse its diagonal. This is a number value.*/

      var column = this.field[0][0].occupied && this.field[0][0].symbol === symbol ? 0 : this.field[0][length].occupied && this.field[0][length].symbol === symbol ? length : false;
      /*since we assigned a number to our column, if we have any other value (Not a Number) 
      then we can assume neither of the corners is occupied, returning false again for 
      an early escape*/

      if (typeof column !== "number") return false;
      /*Otherwise, lets traverse its diagonal, first checking which diagonal it is 
      (last or fist) so we can increment or decrement the for condition which is 
      responsible for pushing the slots to the temporary array*/

      var inspectingDiagonal = [];
      var row = 0;

      if (column === 0) {
        for (column; column <= length; column++) {
          inspectingDiagonal.push(this.field[row][column]);
          row++;
        }
      } else {
        for (column; column >= 0; column--) {
          inspectingDiagonal.push(this.field[row][column]);
        }
      }
      /*finally, if every item inside the temporary array pass the test, we have 
      ourselves a diagonal win :) */


      return inspectingDiagonal.every(function (slot) {
        return slot.occupied && slot.symbol == symbol;
      }) && inspectingDiagonal;
    }
    /*The only case missing is that of a tie. When does a tie exist? Whenever all 
    slots are occupied but no winner is declared. We can then assume that: if there's 
    one that's not occupied - it's not a tie. since we do not care to know which 
    elements are occupied with what, we can flatten the field array and traverse
    it with the `every` array statement. */

  }, {
    key: "hasLine",

    /* create an alias for easy usage */
    value: function hasLine(symbol) {
      return this.horizontalLine(symbol) || this.verticalLine(symbol) || this.diagonalLine(symbol);
    }
  }, {
    key: "tieExists",
    get: function get() {
      var flatten = function flatten(arr) {
        return arr.reduce(function (a, b) {
          return a.concat(Array.isArray(b) ? flatten(b) : b);
        }, []);
      };

      var flattenedField = flatten(this.field);
      return flattenedField.every(function (slot) {
        return slot.occupied === true;
      });
    }
  }]);

  return WinCondition;
}();

exports.WinCondition = WinCondition;

},{"./map.js":12}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WritableComponent = void 0;

var _simpleComponent = require("./simple-component.js");

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
/* A writable class holds an alias property to change the element's textContent and extends SimpleComponent */


var WritableComponent = /*#__PURE__*/function (_SimpleComponent) {
  _inherits(WritableComponent, _SimpleComponent);

  var _super = _createSuper(WritableComponent);

  function WritableComponent(selector) {
    _classCallCheck(this, WritableComponent);

    return _super.call(this, selector);
  }
  /*get property sets the function as a getter, you can use as writableComponent.textContent */


  _createClass(WritableComponent, [{
    key: "textContent",
    get: function get() {
      return this.element.textContent;
    }
    /*The setter makes it so that you can set it to a value, writableComponent.textContent = "some value" */
    ,
    set: function set(value) {
      return this.element.textContent = value;
    }
  }]);

  return WritableComponent;
}(_simpleComponent.SimpleComponent);

exports.WritableComponent = WritableComponent;

},{"./simple-component.js":13}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameHud = void 0;

var _gameEngine = require("../libs/game-engine.js");

var _gameField = require("../components/game-field.js");

var _notice = require("../components/notice.js");

var _turnInformation = require("../components/turn-information.js");

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
/*The GameHud class is what wraps all Components into the DOM as well 
as being responsible for the interaction between the user interface 
and the Game Engine*/


var GameHud = /*#__PURE__*/function () {
  function GameHud() {
    _classCallCheck(this, GameHud);

    this.turns = null;
    this.gameEngine = null;
    this.gameField = null;
    this.turnInfo = new _turnInformation.TurnInformation();
    document.body.appendChild(this.turnInfo.element);
    this.createGameField(false);
  }

  _createClass(GameHud, [{
    key: "createGameField",
    value: function createGameField() {
      var _this = this;

      var lastWinner = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "x";
      this.turns = 0;
      this.gameEngine = new _gameEngine.GameEngine(["x", "o"], lastWinner);
      /*If the GameField component exists in the page, remove that child 
      from the body so we can insert a new, clean, one.*/

      var oldGameField = document.querySelector("game-field");
      if (oldGameField) document.body.removeChild(oldGameField);
      /*Create a new GameField component*/

      this.gameField = new _gameField.GameField(this.gameEngine.field);
      /*We attach the click event to our GameSlots so we can click and 
      have them actually work*/

      this.gameField.items.forEach(function (row) {
        row.items.forEach(function (slot) {
          slot.element.addEventListener("click", function (element) {
            _this.occupyField(element);
          });
        });
      });
      /*Append the GameField element to the body of the page*/

      document.body.appendChild(this.gameField.element);
      /*Show a notice to the use and update the turn information via our 
      TurnInfo alias*/

      new _notice.Notice("Game Start! First to play: ".concat(this.gameEngine.turnOf), 3000);
      this.turnInfo.update(this.turns, this.gameEngine.turnOf);
    }
  }, {
    key: "processGameEnd",

    /*The HUD Processing of game end is responsible for showing the game end 
    notices and restart the game after Xseconds*/
    value: function processGameEnd() {
      var _this2 = this;

      var winner = false;

      if (this.gameEngine.isWinner) {
        new _notice.Notice("Game Ended! Winner is ".concat(this.gameEngine.turnOf, "! Game took ").concat(this.turns, " turns"), 1500);
        winner = this.gameEngine.turnOf;
      } else if (this.gameEngine.isTie) {
        new _notice.Notice("Game Ended! It's a tie! Game took ".concat(this.turns, " turns"), 1500);
      }

      setTimeout(function () {
        _this2.createGameField(winner);
      }, 1500);
    }
    /*Occupying a field in the HUD is made by calling the same function on the 
    GameEngine end of things and working with the output to update the interface. 
    We grab the slot row/column from the clicked element and then send it to 
    GameEngine.
    
    We know that if occupying a field returns false then the occupation is 
    impossible, we show that to the user. Otherwise, we increment the turn, check 
    if it's game end and if true process it, otherwise call the turn toggle
    function from gameEngine and update the TurnInformation element.*/

  }, {
    key: "occupyField",
    value: function occupyField(element) {
      var coords = {
        row: parseInt(element.target.getAttribute("slot-row"), 10),
        column: parseInt(element.target.getAttribute("slot-column"), 10)
      };
      var turnAction = this.gameEngine.occupyField(coords);

      if (!turnAction) {
        new _notice.Notice("This field is already occupied");
        return;
      }

      this.turns++;

      if (this.isGameEnd) {
        this.processGameEnd();
      } else {
        this.gameEngine.toggleTurn();
        this.turnInfo.update(this.turns, this.gameEngine.turnOf);
      }

      this.gameField.getItem(turnAction.row).getItem(turnAction.column).textContent = turnAction;
    }
  }, {
    key: "isGameEnd",
    get: function get() {
      return this.gameEngine.isWinner || this.gameEngine.isTie;
    }
  }]);

  return GameHud;
}();

exports.GameHud = GameHud;

},{"../components/game-field.js":3,"../components/notice.js":6,"../components/turn-information.js":8,"../libs/game-engine.js":10}]},{},[9]);
