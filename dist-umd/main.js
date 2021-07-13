(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("formsy-react"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["formsy-react", "react"], factory);
	else if(typeof exports === 'object')
		exports["formsy-react-components"] = factory(require("formsy-react"), require("react"));
	else
		root["formsy-react-components"] = factory(root["formsy-react"], root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _error_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





var defaultProps = __assign(__assign({}, _component_common__WEBPACK_IMPORTED_MODULE_1__.componentDefaultProps), { value: false, valueLabel: '', elementRef: react__WEBPACK_IMPORTED_MODULE_0__.createRef() });
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    // Need to supply a constructor to be recognised as ComponentClass?
    function Checkbox(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (event) {
            var value = event.currentTarget.checked;
            var _a = _this.props, onSetValue = _a.onSetValue, changeCallback = _a.changeCallback, name = _a.name;
            onSetValue(value);
            changeCallback(name, value);
        };
        _this.renderElement = function () {
            var _a = _this.props, elementRef = _a.elementRef, id = _a.id, label = _a.label, value = _a.value, valueLabel = _a.valueLabel, inputProps = __rest(_a, ["elementRef", "id", "label", "value", "valueLabel"]);
            Object.keys(_component_common__WEBPACK_IMPORTED_MODULE_1__.componentDefaultProps).forEach(function (key) {
                delete inputProps[key];
            });
            return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "custom-control custom-checkbox" },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", __assign({}, inputProps, { checked: value === true, className: "custom-control-input", id: id, onChange: _this.handleChange, ref: elementRef, type: "checkbox" })),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "custom-control-label", htmlFor: id }, valueLabel)));
        };
        return _this;
    }
    Checkbox.prototype.render = function () {
        var element = this.renderElement();
        var _a = this.props, errorMessages = _a.errorMessages, help = _a.help, id = _a.id, labelClassName = _a.labelClassName, layout = _a.layout, showErrors = _a.showErrors;
        if (layout === 'elementOnly') {
            return element;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_row__WEBPACK_IMPORTED_MODULE_4__.default, __assign({}, this.props, { fakeLabel: true, htmlFor: id, labelClassName: ['pt-0', labelClassName] }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                element,
                help ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_help__WEBPACK_IMPORTED_MODULE_3__.default, { help: help }) : null,
                showErrors ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_error_messages__WEBPACK_IMPORTED_MODULE_2__.default, { messages: errorMessages }) : null)));
    };
    Checkbox.defaultProps = defaultProps;
    return Checkbox;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Checkbox);


/***/ }),
/* 3 */
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "componentDefaultProps": () => (/* binding */ componentDefaultProps)
/* harmony export */ });
var componentDefaultProps = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    changeCallback: function (name, value) { },
    elementWrapperClassName: '',
    errorMessages: [],
    help: '',
    id: '',
    isPristine: true,
    label: null,
    labelClassName: '',
    layout: 'horizontal',
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    onSetValue: function (value) { },
    rowClassName: '',
    showErrors: true,
};


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ErrorMessages = function (_a) {
    var messages = _a.messages;
    var messageNodes = messages.map(function (message, key) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { key: key }, message)); });
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "invalid-feedback" }, messageNodes);
};
ErrorMessages.defaultProps = {
    messages: [],
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorMessages);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var Help = function (_a) {
    var help = _a.help;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", { className: "form-text text-muted" }, help));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Help);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);



var HorizontalElementWrapper = function (_a) {
    var children = _a.children, elementWrapperClassName = _a.elementWrapperClassName, renderLabel = _a.renderLabel;
    var wrapperClassNames = [];
    if (!renderLabel) {
        wrapperClassNames.push('offset-sm-3');
    }
    wrapperClassNames.push('col-sm-9');
    wrapperClassNames.push(elementWrapperClassName);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(wrapperClassNames) }, children);
};
var Row = function (_a) {
    var children = _a.children, _b = _a.elementWrapperClassName, elementWrapperClassName = _b === void 0 ? '' : _b, _c = _a.errorMessages, errorMessages = _c === void 0 ? [] : _c, _d = _a.fakeLabel, fakeLabel = _d === void 0 ? false : _d, _e = _a.htmlFor, htmlFor = _e === void 0 ? '' : _e, _f = _a.label, label = _f === void 0 ? null : _f, _g = _a.labelClassName, labelClassName = _g === void 0 ? '' : _g, _h = _a.layout, layout = _h === void 0 ? 'horizontal' : _h, _j = _a.required, required = _j === void 0 ? false : _j, _k = _a.rowClassName, rowClassName = _k === void 0 ? '' : _k, _l = _a.showErrors, showErrors = _l === void 0 ? false : _l;
    if (layout === 'elementOnly') {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, children);
    }
    var rowClassNames = ['form-group'];
    if (showErrors && (errorMessages.length > 0 || required)) {
        rowClassNames.push('text-danger');
    }
    if (layout === 'horizontal') {
        rowClassNames.push('form-row');
    }
    rowClassNames.push(rowClassName);
    // We should render the label if there is label text defined, or if the
    // component is required (so a required symbol is displayed in the label tag)
    var renderLabel = label !== null || required;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(rowClassNames) },
        renderLabel ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_label__WEBPACK_IMPORTED_MODULE_2__.default, { fakeLabel: fakeLabel, htmlFor: htmlFor, label: label, labelClassName: labelClassName, layout: layout, required: required })) : null,
        layout === 'horizontal' ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(HorizontalElementWrapper, { elementWrapperClassName: elementWrapperClassName, renderLabel: renderLabel }, children)) : (children)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);


/***/ }),
/* 8 */
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var classNames = (function () {
		// don't inherit from Object so we can skip hasOwnProperty check later
		// http://stackoverflow.com/questions/15518328/creating-js-object-with-object-createnull#answer-21079232
		function StorageObject() {}
		StorageObject.prototype = Object.create(null);

		function _parseArray (resultSet, array) {
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				_parse(resultSet, array[i]);
			}
		}

		var hasOwn = {}.hasOwnProperty;

		function _parseNumber (resultSet, num) {
			resultSet[num] = true;
		}

		function _parseObject (resultSet, object) {
			if (object.toString === Object.prototype.toString) {
				for (var k in object) {
					if (hasOwn.call(object, k)) {
						// set value to false instead of deleting it to avoid changing object structure
						// https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/#de-referencing-misconceptions
						resultSet[k] = !!object[k];
					}
				}
			} else {
				resultSet[object.toString()] = true;
			}
		}

		var SPACE = /\s+/;
		function _parseString (resultSet, str) {
			var array = str.split(SPACE);
			var length = array.length;

			for (var i = 0; i < length; ++i) {
				resultSet[array[i]] = true;
			}
		}

		function _parse (resultSet, arg) {
			if (!arg) return;
			var argType = typeof arg;

			// 'foo bar'
			if (argType === 'string') {
				_parseString(resultSet, arg);

			// ['foo', 'bar', ...]
			} else if (Array.isArray(arg)) {
				_parseArray(resultSet, arg);

			// { 'foo': true, ... }
			} else if (argType === 'object') {
				_parseObject(resultSet, arg);

			// '130'
			} else if (argType === 'number') {
				_parseNumber(resultSet, arg);
			}
		}

		function _classNames () {
			// don't leak arguments
			// https://github.com/petkaantonov/bluebird/wiki/Optimization-killers#32-leaking-arguments
			var len = arguments.length;
			var args = Array(len);
			for (var i = 0; i < len; i++) {
				args[i] = arguments[i];
			}

			var classSet = new StorageObject();
			_parseArray(classSet, args);

			var list = [];

			for (var k in classSet) {
				if (classSet[k]) {
					list.push(k)
				}
			}

			return list.join(' ');
		}

		return _classNames;
	})();

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _required_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);

 // eslint-disable-line import/default

var Label = function (_a) {
    var _b = _a.fakeLabel, fakeLabel = _b === void 0 ? false : _b, _c = _a.htmlFor, htmlFor = _c === void 0 ? '' : _c, _d = _a.label, label = _d === void 0 ? null : _d, _e = _a.labelClassName, labelClassName = _e === void 0 ? '' : _e, _f = _a.layout, layout = _f === void 0 ? 'horizontal' : _f, _g = _a.required, required = _g === void 0 ? false : _g;
    if (layout === 'elementOnly') {
        return null;
    }
    var labelClassNames = classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()([
        'col-form-label',
        layout === 'horizontal' ? 'col-sm-3' : '',
        labelClassName,
    ]);
    if (fakeLabel) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: labelClassNames, "data-required": required },
            label,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(_required_symbol__WEBPACK_IMPORTED_MODULE_2__.default, { required: required })));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: labelClassNames, "data-required": required, htmlFor: htmlFor },
        label,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(_required_symbol__WEBPACK_IMPORTED_MODULE_2__.default, { required: required })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0__.memo(Label));


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var RequiredSymbol = function (_a) {
    var required = _a.required, symbol = _a.symbol;
    if (required === false) {
        return null;
    }
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "required-symbol" }, symbol);
};
RequiredSymbol.defaultProps = {
    symbol: ' *',
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0__.memo(RequiredSymbol));


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _form_check_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _error_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};




var defaultProps = __assign(__assign({}, _component_common__WEBPACK_IMPORTED_MODULE_1__.componentDefaultProps), { options: [], value: [], type: 'stacked', required: false });
var CheckboxGroup = /** @class */ (function (_super) {
    __extends(CheckboxGroup, _super);
    // Constructor must be present to determine type of component?
    function CheckboxGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.elements = {};
        // Returns an array of the values of all checked items.
        _this.handleChange = function () {
            var _a = _this.props, options = _a.options, name = _a.name, onSetValue = _a.onSetValue, changeCallback = _a.changeCallback;
            var checkedOptions = options.filter(function (option) { return _this.elements[option.value].checked; });
            var value = checkedOptions.map(function (option) { return option.value; });
            onSetValue(value);
            changeCallback(name, value);
        };
        _this.renderElement = function () {
            var _a = _this.props, disabled = _a.disabled, errorMessages = _a.errorMessages, id = _a.id, options = _a.options, required = _a.required, showErrors = _a.showErrors, type = _a.type, name = _a.name, value = _a.value;
            var markAsInvalid = showErrors && (errorMessages.length > 0 || required);
            var className = "custom-control custom-checkbox" + (type === 'inline' ? ' custom-control-inline' : '');
            var inputClassName = "custom-control-input" + (markAsInvalid ? ' is-invalid' : '');
            var controls = [];
            var _loop_1 = function (i) {
                var checkbox = options[i];
                var checked = value.indexOf(checkbox.value) !== -1;
                var isDisabled = checkbox.disabled || disabled;
                var inputId = id + "--" + checkbox.value;
                var isLast = i == options.length - 1;
                var control = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: className, key: checkbox.value },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { ref: function (input) {
                            _this.elements[checkbox.value] = input;
                        }, className: inputClassName, checked: checked, type: "checkbox", value: checkbox.value, onChange: _this.handleChange, disabled: isDisabled, name: name, id: inputId, required: required }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "custom-control-label", htmlFor: inputId }, checkbox.label),
                    isLast && showErrors ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_error_messages__WEBPACK_IMPORTED_MODULE_3__.default, { messages: errorMessages })) : null));
                controls.push(control);
            };
            for (var i = 0; i < options.length; i++) {
                _loop_1(i);
            }
            return controls;
        };
        return _this;
    }
    CheckboxGroup.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_form_check_group__WEBPACK_IMPORTED_MODULE_2__.default, __assign({}, this.props),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.renderElement())));
    };
    CheckboxGroup.defaultProps = defaultProps;
    return CheckboxGroup;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckboxGroup);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _error_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _component_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





var FormCheckGroup = function (props) {
    var layout = props.layout, help = props.help, showErrors = props.showErrors, errorMessages = props.errorMessages, labelClassName = props.labelClassName, children = props.children;
    if (layout === 'elementOnly') {
        return children;
    }
    var passProps = __rest(props, []);
    //delete passProps.children;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_row__WEBPACK_IMPORTED_MODULE_3__.default, __assign({}, passProps, { labelClassName: ['pt-0', labelClassName], fakeLabel: true }),
        children,
        help ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_help__WEBPACK_IMPORTED_MODULE_2__.default, { help: help }) : null,
        showErrors ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_error_messages__WEBPACK_IMPORTED_MODULE_1__.default, { messages: errorMessages }) : null));
};
FormCheckGroup.defaultProps = _component_common__WEBPACK_IMPORTED_MODULE_4__.componentDefaultProps;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormCheckGroup);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _component_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _error_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _controls_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var _input_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};








var defaultProps = __assign(__assign({}, _component_common__WEBPACK_IMPORTED_MODULE_2__.componentDefaultProps), { 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    blurCallback: function (name, value) { }, blurDebounceInterval: 0, changeDebounceInterval: 500, className: '', elementRef: react__WEBPACK_IMPORTED_MODULE_0__.createRef(), 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    keyDownCallback: function (event) { }, required: false, type: 'text', updateOnBlur: true, updateOnChange: true, value: '' });
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input(props) {
        var _this = _super.call(this, props) || this;
        _this.setValue = function (value) {
            if (_this.state.incomingPropValue !== value) {
                _this.blurDebounced.cancel();
                _this.changeDebounced.cancel();
                _this.props.onSetValue(value);
            }
        };
        _this.handleBlur = function (event) {
            var value = event.currentTarget.value;
            var _a = _this.props, updateOnBlur = _a.updateOnBlur, isPristine = _a.isPristine, propValue = _a.value, blurCallback = _a.blurCallback, name = _a.name;
            _this.setState({ currentValue: value });
            if (updateOnBlur) {
                _this.changeDebounced.cancel();
                if (isPristine) {
                    // should update as we have just left a pristine input
                    _this.blurDebounced(value);
                }
                else if (propValue !== value) {
                    // should update because the value has changed
                    _this.blurDebounced(value);
                }
            }
            blurCallback(name, value);
        };
        _this.handleChange = function (event) {
            var value = event.currentTarget.value;
            var _a = _this.props, updateOnChange = _a.updateOnChange, changeCallback = _a.changeCallback, name = _a.name;
            _this.setState({ currentValue: value });
            if (updateOnChange) {
                _this.changeDebounced(value);
            }
            changeCallback(name, value);
        };
        _this.handleKeyDown = function (event) {
            var keyDownCallback = _this.props.keyDownCallback;
            if (event.key === 'Enter') {
                _this.changeDebounced.flush();
            }
            keyDownCallback(event);
        };
        var value = props.value, changeDebounceInterval = props.changeDebounceInterval, blurDebounceInterval = props.blurDebounceInterval;
        _this.state = {
            currentValue: value,
            incomingPropValue: value,
            valueIsChanging: false,
        };
        _this.changeDebounced = (0,_debounce__WEBPACK_IMPORTED_MODULE_1__.default)(_this.setValue, changeDebounceInterval);
        _this.blurDebounced = (0,_debounce__WEBPACK_IMPORTED_MODULE_1__.default)(_this.setValue, blurDebounceInterval);
        return _this;
    }
    Input.getDerivedStateFromProps = function (props, state) {
        var incomingPropValue = props.value;
        if (incomingPropValue !== state.incomingPropValue) {
            return {
                valueIsChanging: true,
                incomingPropValue: incomingPropValue,
            };
        }
        return null;
    };
    Input.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var _this = this;
        var valueIsChanging = nextState.valueIsChanging, incomingPropValue = nextState.incomingPropValue;
        if (valueIsChanging === true) {
            this.setState({
                valueIsChanging: false,
                currentValue: incomingPropValue,
            }, function () {
                _this.setValue(incomingPropValue);
            });
            return false;
        }
        return true;
    };
    Input.prototype.render = function () {
        var _a = this.props, 
        /* eslint-disable @typescript-eslint/no-unused-vars */
        blurCallback = _a.blurCallback, blurDebounceInterval = _a.blurDebounceInterval, changeCallback = _a.changeCallback, changeDebounceInterval = _a.changeDebounceInterval, isPristine = _a.isPristine, keyDownCallback = _a.keyDownCallback, name = _a.name, onSetValue = _a.onSetValue, updateOnBlur = _a.updateOnBlur, updateOnChange = _a.updateOnChange, value = _a.value, 
        /* eslint-enable @typescript-eslint/no-unused-vars */
        addonAfter = _a.addonAfter, addonBefore = _a.addonBefore, buttonAfter = _a.buttonAfter, buttonBefore = _a.buttonBefore, className = _a.className, elementRef = _a.elementRef, elementWrapperClassName = _a.elementWrapperClassName, errorMessages = _a.errorMessages, help = _a.help, id = _a.id, label = _a.label, labelClassName = _a.labelClassName, layout = _a.layout, required = _a.required, rowClassName = _a.rowClassName, showErrors = _a.showErrors, type = _a.type, passthoughProps = __rest(_a, ["blurCallback", "blurDebounceInterval", "changeCallback", "changeDebounceInterval", "isPristine", "keyDownCallback", "name", "onSetValue", "updateOnBlur", "updateOnChange", "value", "addonAfter", "addonBefore", "buttonAfter", "buttonBefore", "className", "elementRef", "elementWrapperClassName", "errorMessages", "help", "id", "label", "labelClassName", "layout", "required", "rowClassName", "showErrors", "type"]);
        var markAsInvalid = showErrors && (errorMessages.length > 0 || required);
        var control = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_controls_input__WEBPACK_IMPORTED_MODULE_5__.default, __assign({}, passthoughProps, { className: markAsInvalid ? "is-invalid " + className : className, id: id, onBlur: this.handleBlur, onChange: this.handleChange, onKeyDown: this.handleKeyDown, elementRef: elementRef, type: type, value: this.state.currentValue })));
        if (type === 'hidden') {
            return control;
        }
        var inputGroupProps = {
            addonAfter: addonAfter,
            addonBefore: addonBefore,
            buttonAfter: buttonAfter,
            buttonBefore: buttonBefore,
        };
        var rowProps = {
            elementWrapperClassName: elementWrapperClassName,
            labelClassName: labelClassName,
            rowClassName: rowClassName,
            label: label,
            errorMessages: errorMessages,
            htmlFor: id,
            layout: layout,
            required: required,
            showErrors: showErrors,
        };
        if (addonBefore || addonAfter || buttonBefore || buttonAfter) {
            control = react__WEBPACK_IMPORTED_MODULE_0__.createElement(_input_group__WEBPACK_IMPORTED_MODULE_6__.default, __assign({}, inputGroupProps), control);
        }
        if (layout === 'elementOnly') {
            return control;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_row__WEBPACK_IMPORTED_MODULE_7__.default, __assign({}, rowProps),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                control,
                help ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_help__WEBPACK_IMPORTED_MODULE_4__.default, { help: help }) : null,
                showErrors ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_error_messages__WEBPACK_IMPORTED_MODULE_3__.default, { messages: errorMessages }) : null)));
    };
    Input.defaultProps = defaultProps;
    return Input;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input); // as React.ComponentClass<InputProps>;


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (fn, time) {
    var pending;
    var lastArgs;
    var lastThis;
    var cancel = function () {
        clearTimeout(pending);
        pending = undefined;
    };
    var run = function () {
        if (lastArgs) {
            var currentThis = lastThis;
            var currentArgs = lastArgs;
            lastThis = undefined;
            lastArgs = undefined;
            fn.apply(currentThis, currentArgs);
        }
    };
    var flush = function () {
        cancel();
        run();
    };
    function debounced() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        lastThis = this;
        lastArgs = args;
        if (pending) {
            clearTimeout(pending);
        }
        pending = setTimeout(run, time);
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
});


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


var defaultProps = {
    className: '',
    type: 'text',
    elementRef: react__WEBPACK_IMPORTED_MODULE_0__.createRef(),
};
var InputControl = /** @class */ (function (_super) {
    __extends(InputControl, _super);
    function InputControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputControl.prototype.render = function () {
        var _a = this.props, className = _a.className, type = _a.type, elementRef = _a.elementRef, passthroughProps = __rest(_a, ["className", "type", "elementRef"]);
        var inputClassNames = ['form-control', className];
        if (['hidden', 'range'].indexOf(type) !== -1) {
            inputClassNames.push({ 'form-control': false });
        }
        if (type === 'range') {
            inputClassNames.push('custom-range');
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", __assign({}, passthroughProps, { className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(inputClassNames), ref: elementRef, type: type })));
    };
    InputControl.defaultProps = defaultProps;
    return InputControl;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputControl);


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Wraps an input to implement a Bootstrap [Input Group](http://getbootstrap.com/components/#input-groups)
 */
var InputGroup = function (_a) {
    var children = _a.children, _b = _a.addonBefore, addonBefore = _b === void 0 ? null : _b, _c = _a.addonAfter, addonAfter = _c === void 0 ? null : _c, _d = _a.buttonBefore, buttonBefore = _d === void 0 ? null : _d, _e = _a.buttonAfter, buttonAfter = _e === void 0 ? null : _e;
    var renderAddon = function (addon, position) {
        if (addon === null) {
            return null;
        }
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "input-group-" + position }, addon);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "input-group" },
        renderAddon(addonBefore, 'prepend'),
        renderAddon(buttonBefore, 'prepend'),
        children,
        renderAddon(addonAfter, 'append'),
        renderAddon(buttonAfter, 'append')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputGroup);


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _error_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var _controls_input_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(18);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};






var defaultProps = __assign(__assign({}, _component_common__WEBPACK_IMPORTED_MODULE_1__.componentDefaultProps), { elementRef: react__WEBPACK_IMPORTED_MODULE_0__.createRef() });
var File = /** @class */ (function (_super) {
    __extends(File, _super);
    // Need to supply a constructor to be recognised as ComponentClass?
    function File(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (event) {
            var target = event.currentTarget;
            var _a = _this.props, onSetValue = _a.onSetValue, changeCallback = _a.changeCallback, name = _a.name;
            onSetValue(target.files);
            // Note: we sure the result of `target.files` instead of `target.value`.
            // `target.value` is actually pretty useless. A web search for "C:\fakepath\"
            // gives more details.
            changeCallback(name, target.files);
        };
        return _this;
    }
    File.prototype.render = function () {
        var _a = this.props, errorMessages = _a.errorMessages, help = _a.help, id = _a.id, layout = _a.layout, showErrors = _a.showErrors, inputProps = __rest(_a, ["errorMessages", "help", "id", "layout", "showErrors"]);
        Object.keys(_component_common__WEBPACK_IMPORTED_MODULE_1__.componentDefaultProps).forEach(function (key) {
            delete inputProps[key];
        });
        var control = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_controls_input_file__WEBPACK_IMPORTED_MODULE_5__.default, __assign({}, inputProps, { className: "form-control-file", id: id, onChange: this.handleChange })));
        if (layout === 'elementOnly') {
            return control;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_row__WEBPACK_IMPORTED_MODULE_4__.default, __assign({}, this.props, { htmlFor: id }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                control,
                help ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_help__WEBPACK_IMPORTED_MODULE_3__.default, { help: help }) : null,
                showErrors ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_error_messages__WEBPACK_IMPORTED_MODULE_2__.default, { messages: errorMessages }) : null)));
    };
    File.defaultProps = defaultProps;
    return File;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (File);


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

// A file control can only be set to an empty string.
// I think we need to keep this as an uncontrolled component, so we override the
// value.prop.
var FileControl = /** @class */ (function (_super) {
    __extends(FileControl, _super);
    function FileControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileControl.prototype.render = function () {
        var _a = this.props, elementRef = _a.elementRef, props = __rest(_a, ["elementRef"]);
        delete props.value;
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", __assign({}, props, { type: "file", ref: elementRef }));
    };
    FileControl.defaultProps = {
        elementRef: react__WEBPACK_IMPORTED_MODULE_0__.createRef(),
    };
    return FileControl;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileControl);


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _form_check_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};



var defaultProps = __assign(__assign({}, _component_common__WEBPACK_IMPORTED_MODULE_1__.componentDefaultProps), { options: [], required: false, type: 'stacked', value: '' });
var RadioGroup = /** @class */ (function (_super) {
    __extends(RadioGroup, _super);
    function RadioGroup(props) {
        var _this = _super.call(this, props) || this;
        _this.elements = {};
        _this.handleChange = function (event) {
            var value = event.currentTarget.value;
            var _a = _this.props, onSetValue = _a.onSetValue, changeCallback = _a.changeCallback, name = _a.name;
            onSetValue(value);
            changeCallback(name, value);
        };
        _this.renderElement = function () {
            var _a = _this.props, disabled = _a.disabled, errorMessages = _a.errorMessages, id = _a.id, name = _a.name, options = _a.options, required = _a.required, showErrors = _a.showErrors, type = _a.type, value = _a.value;
            var markAsInvalid = showErrors && (errorMessages.length > 0 || required);
            var className = "custom-control custom-radio" + (type === 'inline' ? ' custom-control-inline' : '');
            var inputClassName = "custom-control-input" + (markAsInvalid ? ' is-invalid' : '');
            var controls = options.map(function (radio) {
                var checked = value === radio.value;
                var isDisabled = radio.disabled || disabled;
                var inputId = id + "--" + radio.value;
                var ref = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
                _this.elements[radio.value] = ref;
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: className, key: radio.value },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", { ref: ref, checked: checked, type: "radio", value: radio.value, onChange: _this.handleChange, disabled: isDisabled, className: inputClassName, name: name, id: inputId, required: required }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", { className: "custom-control-label", htmlFor: inputId }, radio.label)));
            });
            return controls;
        };
        return _this;
    }
    RadioGroup.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_form_check_group__WEBPACK_IMPORTED_MODULE_2__.default, __assign({}, this.props),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, this.renderElement())));
    };
    RadioGroup.defaultProps = defaultProps;
    return RadioGroup;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioGroup);


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _error_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _controls_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(21);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

 // eslint-disable-line import/default





var defaultProps = __assign(__assign({}, _component_common__WEBPACK_IMPORTED_MODULE_2__.componentDefaultProps), { options: [], multiple: false, elementRef: react__WEBPACK_IMPORTED_MODULE_0__.createRef() });
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    // Need to supply a constructor to be recognised as ComponentClass?
    function Select(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (event) {
            var target = event.currentTarget;
            var _a = _this.props, multiple = _a.multiple, onSetValue = _a.onSetValue, changeCallback = _a.changeCallback, name = _a.name;
            var value;
            if (multiple) {
                value = Array.from(target.options)
                    .filter(function (option) { return option.selected; })
                    .map(function (option) { return option.value; });
            }
            else {
                (value = target.value);
            }
            onSetValue(value);
            changeCallback(name, value);
        };
        return _this;
    }
    Select.prototype.render = function () {
        var _a = this.props, className = _a.className, errorMessages = _a.errorMessages, help = _a.help, id = _a.id, layout = _a.layout, name = _a.name, required = _a.required, showErrors = _a.showErrors, inputProps = __rest(_a, ["className", "errorMessages", "help", "id", "layout", "name", "required", "showErrors"]);
        Object.keys(_component_common__WEBPACK_IMPORTED_MODULE_2__.componentDefaultProps).forEach(function (key) {
            delete inputProps[key];
        });
        var markAsInvalid = showErrors && (errorMessages.length > 0 || required);
        var control = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_controls_select__WEBPACK_IMPORTED_MODULE_6__.default, __assign({}, inputProps, { className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(markAsInvalid ? ['is-invalid', className] : className), elementRef: this.props.elementRef, id: id, name: name, onChange: this.handleChange })));
        if (layout === 'elementOnly') {
            return control;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_row__WEBPACK_IMPORTED_MODULE_5__.default, __assign({}, this.props, { htmlFor: id }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                control,
                help ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_help__WEBPACK_IMPORTED_MODULE_4__.default, { help: help }) : null,
                showErrors ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_error_messages__WEBPACK_IMPORTED_MODULE_3__.default, { messages: errorMessages }) : null)));
    };
    Select.defaultProps = defaultProps;
    return Select;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

 // eslint-disable-line import/default
var SelectControl = /** @class */ (function (_super) {
    __extends(SelectControl, _super);
    function SelectControl(props) {
        var _this = _super.call(this, props) || this;
        _this.renderOption = function (item, key) {
            var label = item.label, value = item.value, rest = __rest(item, ["label", "value"]);
            var option = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", __assign({ key: key, value: value }, rest), label));
            return option;
        };
        return _this;
    }
    SelectControl.prototype.render = function () {
        var _this = this;
        var options = this.props.options;
        var groups = options
            .filter(function (item) { return (item.group ? item.group : ''); })
            .map(function (item) { return (item.group ? item.group : ''); });
        // Get the unique items in group.
        var onlyUnique = function (value, index, self) {
            return self.indexOf(value) === index;
        };
        groups = groups.filter(onlyUnique);
        var optionNodes;
        if (groups.length === 0) {
            optionNodes = options.map(function (item, index) {
                return _this.renderOption(item, "" + index);
            });
        }
        else {
            // For items without groups.
            var itemsWithoutGroup = options.filter(function (item) { return !item.group; });
            optionNodes = itemsWithoutGroup.map(function (item, index) {
                return _this.renderOption(item, "no-group-" + index);
            });
            groups.forEach(function (group, groupIndex) {
                var groupItems = options.filter(function (item) { return item.group === group; });
                var groupOptionNodes = groupItems.map(function (item, index) {
                    return _this.renderOption(item, groupIndex + "-" + index);
                });
                optionNodes.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("optgroup", { label: group, key: groupIndex }, groupOptionNodes));
            });
        }
        var _a = this.props, className = _a.className, elementRef = _a.elementRef, selectProps = __rest(_a, ["className", "elementRef"]);
        //delete selectProps.options;
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", __assign({}, selectProps, { className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(['custom-select', className]), ref: elementRef }), optionNodes));
    };
    SelectControl.defaultProps = {
        multiple: false,
        elementRef: react__WEBPACK_IMPORTED_MODULE_0__.createRef(),
    };
    return SelectControl;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectControl);


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _component_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _error_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _controls_textarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};







var defaultProps = __assign(__assign({}, _component_common__WEBPACK_IMPORTED_MODULE_2__.componentDefaultProps), { value: '', updateOnBlur: true, updateOnChange: true, blurDebounceInterval: 0, changeDebounceInterval: 500, cols: 0, rows: 3, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    blurCallback: function (name, value) { } });
var Textarea = /** @class */ (function (_super) {
    __extends(Textarea, _super);
    function Textarea(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (event) {
            var _a = _this.props, updateOnChange = _a.updateOnChange, changeCallback = _a.changeCallback, name = _a.name;
            var value = event.currentTarget.value;
            _this.setState({ currentValue: value });
            if (updateOnChange) {
                _this.changeDebounced(value);
            }
            changeCallback(name, value);
        };
        _this.handleBlur = function (event) {
            var _a = _this.props, updateOnBlur = _a.updateOnBlur, blurCallback = _a.blurCallback, name = _a.name;
            var value = event.currentTarget.value;
            _this.setState({ currentValue: value });
            if (updateOnBlur) {
                _this.changeDebounced.cancel();
                _this.blurDebounced(value);
            }
            if (blurCallback) {
                blurCallback(name, value);
            }
        };
        var value = props.value, onSetValue = props.onSetValue, changeDebounceInterval = props.changeDebounceInterval, blurDebounceInterval = props.blurDebounceInterval;
        _this.state = {
            currentValue: value,
            incomingPropValue: value,
            valueIsChanging: false,
        };
        _this.changeDebounced = (0,_debounce__WEBPACK_IMPORTED_MODULE_1__.default)(onSetValue, changeDebounceInterval);
        _this.blurDebounced = (0,_debounce__WEBPACK_IMPORTED_MODULE_1__.default)(onSetValue, blurDebounceInterval);
        return _this;
    }
    Textarea.getDerivedStateFromProps = function (props, state) {
        var incomingPropValue = props.value;
        if (incomingPropValue !== state.incomingPropValue) {
            return {
                valueIsChanging: true,
                incomingPropValue: incomingPropValue,
            };
        }
        return null;
    };
    Textarea.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var valueIsChanging = nextState.valueIsChanging, incomingPropValue = nextState.incomingPropValue;
        if (valueIsChanging === true) {
            this.setState({
                valueIsChanging: false,
                currentValue: incomingPropValue,
            });
            this.props.onSetValue(incomingPropValue);
            return false;
        }
        return true;
    };
    Textarea.prototype.render = function () {
        var inputProps = __rest(this.props, []);
        Object.keys(_component_common__WEBPACK_IMPORTED_MODULE_2__.componentDefaultProps).forEach(function (key) {
            delete inputProps[key];
        });
        /* eslint-disable @typescript-eslint/no-unused-vars */
        var blurDebounceInterval = inputProps.blurDebounceInterval, changeDebounceInterval = inputProps.changeDebounceInterval, updateOnBlur = inputProps.updateOnBlur, updateOnChange = inputProps.updateOnChange, blurCallback = inputProps.blurCallback, filteredInputProps = __rest(inputProps, ["blurDebounceInterval", "changeDebounceInterval", "updateOnBlur", "updateOnChange", "blurCallback"]);
        /* eslint-enable @typescript-eslint/no-unused-vars */
        var currentValue = this.state.currentValue;
        var _a = this.props, className = _a.className, elementRef = _a.elementRef, errorMessages = _a.errorMessages, help = _a.help, id = _a.id, layout = _a.layout, name = _a.name, required = _a.required, showErrors = _a.showErrors;
        var markAsInvalid = showErrors && (errorMessages.length > 0 || required);
        var element = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_controls_textarea__WEBPACK_IMPORTED_MODULE_6__.default, __assign({}, filteredInputProps, { className: markAsInvalid ? "is-invalid " + className : className, id: id, value: currentValue, name: name, onChange: this.handleChange, onBlur: this.handleBlur, elementRef: elementRef })));
        if (layout === 'elementOnly') {
            return element;
        }
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_row__WEBPACK_IMPORTED_MODULE_5__.default, __assign({}, this.props, { htmlFor: id }),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                element,
                help ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_help__WEBPACK_IMPORTED_MODULE_4__.default, { help: help }) : null,
                showErrors ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(_error_messages__WEBPACK_IMPORTED_MODULE_3__.default, { messages: errorMessages }) : null)));
    };
    Textarea.defaultProps = defaultProps;
    return Textarea;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Textarea);


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

 // eslint-disable-line import/default
var defaultProps = {
    cols: 0,
    rows: 3,
    value: '',
    elementRef: react__WEBPACK_IMPORTED_MODULE_0__.createRef(),
};
var TextareaControl = /** @class */ (function (_super) {
    __extends(TextareaControl, _super);
    function TextareaControl(props) {
        return _super.call(this, props) || this;
    }
    TextareaControl.prototype.render = function () {
        var _a = this.props, className = _a.className, elementRef = _a.elementRef, inputProps = __rest(_a, ["className", "elementRef"]);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", __assign({}, inputProps, { className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(['form-control', className]), ref: elementRef })));
    };
    TextareaControl.defaultProps = defaultProps;
    return TextareaControl;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextareaControl);


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_dedupe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formsy_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var formsy_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formsy_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_frc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




var formDefaultProps = {
    layout: 'horizontal',
    className: '',
    elementWrapperClassName: '',
    labelClassName: '',
    rowClassName: '',
    validateBeforeSubmit: true,
    validatePristine: false,
    disabled: false,
};
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(props) {
        var _this = _super.call(this, props) || this;
        _this.formsyForm = react__WEBPACK_IMPORTED_MODULE_0__.createRef();
        return _this;
    }
    Form.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className, elementWrapperClassName = _a.elementWrapperClassName, labelClassName = _a.labelClassName, layout = _a.layout, rowClassName = _a.rowClassName, validateBeforeSubmit = _a.validateBeforeSubmit, validatePristine = _a.validatePristine, formsyPassthroughProps = __rest(_a, ["children", "className", "elementWrapperClassName", "labelClassName", "layout", "rowClassName", "validateBeforeSubmit", "validatePristine"]);
        var contextProps = {
            elementWrapperClassName: elementWrapperClassName,
            labelClassName: labelClassName,
            layout: layout,
            rowClassName: rowClassName,
            validateBeforeSubmit: validateBeforeSubmit,
            validatePristine: validatePristine,
        };
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(_context_frc__WEBPACK_IMPORTED_MODULE_3__.default.Provider, { value: contextProps },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement((formsy_react__WEBPACK_IMPORTED_MODULE_2___default()), __assign({}, formsyPassthroughProps, { className: classnames_dedupe__WEBPACK_IMPORTED_MODULE_1___default()(["form-" + layout, className]), ref: this.formsyForm }), children)));
    };
    Form.defaultProps = formDefaultProps;
    return Form;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var defaultContextValue = {
    elementWrapperClassName: '',
    labelClassName: '',
    layout: 'horizontal',
    rowClassName: '',
    validateBeforeSubmit: true,
    validatePristine: false,
};
var FrcContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultContextValue);
FrcContext.displayName = 'FrcContext';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FrcContext);


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_frc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



/**
 * withFRC HOC
 *
 * This HOC provides shared code for our form components.
 *
 * We use this to merge props set using our FrcContext, so that
 * we can set commonly used props on an enclosing component.
 *
 * This allows us to set these properties 'as a whole' for each component in the
 * the form, while retaining the ability to override the prop on a per-component
 * basis.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
var withFRC = function (Component) {
    var _a;
    var result = (_a = /** @class */ (function (_super) {
            __extends(FrcWrapper, _super);
            function FrcWrapper(props) {
                return _super.call(this, props) || this;
            }
            FrcWrapper.prototype.render = function () {
                var _a = this.context, contextLayout = _a.layout, contextValidateBeforeSubmit = _a.validateBeforeSubmit, contextValidatePristine = _a.validatePristine;
                var _b = this.props, 
                /* eslint-disable @typescript-eslint/no-unused-vars */
                attachToForm = _b.attachToForm, detachFromForm = _b.detachFromForm, errorMessage = _b.errorMessage, hasValue = _b.hasValue, innerRef = _b.innerRef, isRequired = _b.isRequired, isValidValue = _b.isValidValue, resetValue = _b.resetValue, runValidation = _b.runValidation, setValidations = _b.setValidations, showError = _b.showError, showRequired = _b.showRequired, validate = _b.validate, validationError = _b.validationError, validationErrors = _b.validationErrors, validations = _b.validations, 
                /* eslint-enable @typescript-eslint/no-unused-vars */
                isFormDisabled = _b.isFormDisabled, isFormSubmitted = _b.isFormSubmitted, isPristine = _b.isPristine, isValid = _b.isValid, setValue = _b.setValue, propValidateBeforeSubmit = _b.validateBeforeSubmit, propValidatePristine = _b.validatePristine, propLayout = _b.layout, propDisabled = _b.disabled, propId = _b.id, propLabel = _b.label, propName = _b.name, componentRef = _b.componentRef, props = __rest(_b, ["attachToForm", "detachFromForm", "errorMessage", "hasValue", "innerRef", "isRequired", "isValidValue", "resetValue", "runValidation", "setValidations", "showError", "showRequired", "validate", "validationError", "validationErrors", "validations", "isFormDisabled", "isFormSubmitted", "isPristine", "isValid", "setValue", "validateBeforeSubmit", "validatePristine", "layout", "disabled", "id", "label", "name", "componentRef"]);
                var validatePristine = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getFallbackBoolean)(propValidatePristine, contextValidatePristine, false);
                var validateBeforeSubmit = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getFallbackBoolean)(propValidateBeforeSubmit, contextValidateBeforeSubmit, true);
                var showErrors = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.shouldShowErrors)(isPristine, isFormSubmitted, isValid, validatePristine, validateBeforeSubmit);
                var layout = propLayout || contextLayout;
                var newProps = {
                    id: (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getId)(propId || '', propLabel || '', propName),
                    label: propLabel,
                    name: propName,
                    ref: componentRef,
                    disabled: isFormDisabled || propDisabled || false,
                    layout: layout,
                    showErrors: showErrors,
                    onSetValue: setValue,
                };
                return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({}, props, newProps));
            };
            return FrcWrapper;
        }(react__WEBPACK_IMPORTED_MODULE_0__.Component)),
        _a.displayName = "withFRC(" + (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getDisplayName)(Component) + ")",
        _a.contextType = _context_frc__WEBPACK_IMPORTED_MODULE_1__.default,
        _a);
    return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withFRC);


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDisplayName": () => (/* binding */ getDisplayName),
/* harmony export */   "shouldShowErrors": () => (/* binding */ shouldShowErrors),
/* harmony export */   "getFallbackBoolean": () => (/* binding */ getFallbackBoolean),
/* harmony export */   "hashString": () => (/* binding */ hashString),
/* harmony export */   "getId": () => (/* binding */ getId)
/* harmony export */ });
var getDisplayName = function (component) {
    return component.displayName ||
        component.name ||
        (typeof component === 'string' ? component : 'Component');
};
/**
 * Determine whether to show errors, or not.
 */
var shouldShowErrors = function (isPristine, isFormSubmitted, isValid, validatePristine, validateBeforeSubmit) {
    if (isPristine === true) {
        if (validatePristine === false) {
            return false;
        }
    }
    if (validateBeforeSubmit === false) {
        if (isFormSubmitted === false) {
            return false;
        }
    }
    return isValid === false;
};
var getFallbackBoolean = function (a, b, c) {
    if (typeof a === 'boolean') {
        return a;
    }
    if (typeof b === 'boolean') {
        return b;
    }
    return c;
};
var hashString = function (inString) {
    var hash = 0;
    for (var i = 0; i < inString.length; i += 1) {
        // eslint-disable-next-line no-bitwise
        hash = ((hash << 5) - hash + inString.charCodeAt(i)) & 0xffffffff;
    }
    return hash;
};
/**
 * The ID is used as an attribute on the form control, and is used to allow
 * associating the label element with the form control.
 *
 * If we don't explicitly pass an `id` prop, we generate one based on the
 * `name` and `label` properties.
 */
var getId = function (id, label, name) {
    if (id !== '') {
        return id;
    }
    return [
        'frc',
        name.split('[').join('_').replace(']', '').replace('.', '_'),
        hashString(JSON.stringify(label)),
    ].join('-');
};


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Form": () => (/* reexport safe */ _form__WEBPACK_IMPORTED_MODULE_8__.default),
/* harmony export */   "FrcContext": () => (/* reexport safe */ _context_frc__WEBPACK_IMPORTED_MODULE_9__.default),
/* harmony export */   "Row": () => (/* reexport safe */ _components_row__WEBPACK_IMPORTED_MODULE_10__.default),
/* harmony export */   "Checkbox": () => (/* binding */ Checkbox),
/* harmony export */   "CheckboxGroup": () => (/* binding */ CheckboxGroup),
/* harmony export */   "File": () => (/* binding */ File),
/* harmony export */   "Input": () => (/* binding */ Input),
/* harmony export */   "RadioGroup": () => (/* binding */ RadioGroup),
/* harmony export */   "Select": () => (/* binding */ Select),
/* harmony export */   "Textarea": () => (/* binding */ Textarea)
/* harmony export */ });
/* harmony import */ var formsy_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var formsy_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formsy_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _components_checkbox_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _components_input_file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);
/* harmony import */ var _components_radio_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19);
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20);
/* harmony import */ var _components_textarea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24);
/* harmony import */ var _context_frc__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25);
/* harmony import */ var _components_row__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7);
/* harmony import */ var _hoc_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(26);












var Checkbox = (0,formsy_react__WEBPACK_IMPORTED_MODULE_0__.withFormsy)((0,_hoc_component__WEBPACK_IMPORTED_MODULE_11__.default)(_components_checkbox__WEBPACK_IMPORTED_MODULE_1__.default));
var CheckboxGroup = (0,formsy_react__WEBPACK_IMPORTED_MODULE_0__.withFormsy)((0,_hoc_component__WEBPACK_IMPORTED_MODULE_11__.default)(_components_checkbox_group__WEBPACK_IMPORTED_MODULE_2__.default));
var Input = (0,formsy_react__WEBPACK_IMPORTED_MODULE_0__.withFormsy)((0,_hoc_component__WEBPACK_IMPORTED_MODULE_11__.default)(_components_input__WEBPACK_IMPORTED_MODULE_3__.default));
var File = (0,formsy_react__WEBPACK_IMPORTED_MODULE_0__.withFormsy)((0,_hoc_component__WEBPACK_IMPORTED_MODULE_11__.default)(_components_input_file__WEBPACK_IMPORTED_MODULE_4__.default));
var RadioGroup = (0,formsy_react__WEBPACK_IMPORTED_MODULE_0__.withFormsy)((0,_hoc_component__WEBPACK_IMPORTED_MODULE_11__.default)(_components_radio_group__WEBPACK_IMPORTED_MODULE_5__.default));
var Select = (0,formsy_react__WEBPACK_IMPORTED_MODULE_0__.withFormsy)((0,_hoc_component__WEBPACK_IMPORTED_MODULE_11__.default)(_components_select__WEBPACK_IMPORTED_MODULE_6__.default));
var Textarea = (0,formsy_react__WEBPACK_IMPORTED_MODULE_0__.withFormsy)((0,_hoc_component__WEBPACK_IMPORTED_MODULE_11__.default)(_components_textarea__WEBPACK_IMPORTED_MODULE_7__.default));


})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=main.js.map