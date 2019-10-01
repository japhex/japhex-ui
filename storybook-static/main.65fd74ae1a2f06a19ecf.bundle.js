(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{309:function(module,exports,__webpack_require__){__webpack_require__(310),__webpack_require__(419),module.exports=__webpack_require__(420)},331:function(module,exports){},420:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(421).configure)(__webpack_require__(669),module)}).call(this,__webpack_require__(58)(module))},669:function(module,exports,__webpack_require__){var map={"./0-Welcome.stories.js":670,"./1-Button.stories.js":678};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=669},670:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.toStorybook=void 0;var _react2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(0)),_addonLinks=__webpack_require__(671),_demo=__webpack_require__(673);exports.default={title:"Welcome"};var toStorybook=exports.toStorybook=function toStorybook(){return _react2.default.createElement(_demo.Welcome,{showApp:(0,_addonLinks.linkTo)("Button")})};toStorybook.story={name:"to Storybook"},toStorybook.__docgenInfo={description:"",methods:[],displayName:"toStorybook"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/0-Welcome.stories.js"]={name:"toStorybook",docgenInfo:toStorybook.__docgenInfo,path:"stories/0-Welcome.stories.js"})},678:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Icon=exports.Base=void 0;var _react2=_interopRequireDefault(__webpack_require__(0)),_button=__webpack_require__(679),_iconAdd2=_interopRequireDefault(__webpack_require__(682));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}exports.default={title:"Button"};var testFN=function testFN(){console.log("test")},Base=exports.Base=function Base(){return _react2.default.createElement(_button.Button,{onClick:testFN},"Hello Button")},Icon=exports.Icon=function Icon(){return _react2.default.createElement(_button.Button,{onClick:testFN,icon:_react2.default.createElement(_iconAdd2.default,null)},"Add")};Icon.story={name:"With icon"},Base.__docgenInfo={description:"",methods:[],displayName:"Base"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/1-Button.stories.js"]={name:"Base",docgenInfo:Base.__docgenInfo,path:"stories/1-Button.stories.js"}),Icon.__docgenInfo={description:"",methods:[],displayName:"Icon"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/1-Button.stories.js"]={name:"Icon",docgenInfo:Icon.__docgenInfo,path:"stories/1-Button.stories.js"})},679:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Button=void 0;var _react2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(0)),_styling=__webpack_require__(680);var Button=exports.Button=function Button(_ref){var icon=_ref.icon,onClick=_ref.onClick,children=_ref.children;return _react2.default.createElement(_styling.ButtonStyled,{onClick:onClick},icon,_react2.default.createElement("span",null,children))};Button.__docgenInfo={description:"",methods:[],displayName:"Button"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/index.js"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src/components/button/index.js"})},680:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ButtonStyled=void 0;var _templateObject=function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n\tdisplay: flex;\n    align-items: center;\n    justify-content: center;\n\tborder:0;\n\tline-height:10px;\n\tfont-size:14px;\n\tcolor:hsl(0,100%,100%);\n\tborder-radius:4px;\n\tbackground:hsl(360, 67%, 44%);\n\tcursor:pointer;\n\tpadding:0 0 0 16px;\n\t\n\t&:hover {\n\t\tbackground:hsl(360, 67%, 50%);\n\t}\n\t\n\tspan {\n\t\tpadding:13px 16px 13px 0;\n\t}\n\t\n\tsvg {\n\t\theight:20px;\n\t\tmargin-right:5px;\n\t\tfill:hsl(0,100%,100%);\n\t}\n"],["\n\tdisplay: flex;\n    align-items: center;\n    justify-content: center;\n\tborder:0;\n\tline-height:10px;\n\tfont-size:14px;\n\tcolor:hsl(0,100%,100%);\n\tborder-radius:4px;\n\tbackground:hsl(360, 67%, 44%);\n\tcursor:pointer;\n\tpadding:0 0 0 16px;\n\t\n\t&:hover {\n\t\tbackground:hsl(360, 67%, 50%);\n\t}\n\t\n\tspan {\n\t\tpadding:13px 16px 13px 0;\n\t}\n\t\n\tsvg {\n\t\theight:20px;\n\t\tmargin-right:5px;\n\t\tfill:hsl(0,100%,100%);\n\t}\n"]),_styledComponents2=function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}(__webpack_require__(681));exports.ButtonStyled=_styledComponents2.default.button(_templateObject)},682:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var _ref=react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{className:"icon-add_svg__secondary",fillRule:"evenodd",d:"M17 11a1 1 0 010 2h-4v4a1 1 0 01-2 0v-4H7a1 1 0 010-2h4V7a1 1 0 012 0v4h4z"});__webpack_exports__.default=function SvgIconAdd(props){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",_extends({viewBox:"0 0 24 24",className:"icon-add_svg__icon-add"},props),_ref)}}},[[309,1,2]]]);
//# sourceMappingURL=main.65fd74ae1a2f06a19ecf.bundle.js.map