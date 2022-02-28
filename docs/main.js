(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");




var routes = [
    { path: '', component: _board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"] },
    { path: '**', component: _board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\n  /*font-family: sans-serif;*/\n  float: left;\n  position: relative; /* Stay in place */\n  width: 100vw;\n  z-index: 1000;\n}\n\n.title {\n  font-family: \"Times New Roman\", serif;\n}\n\n.nav a {\n  display: block;\n}\n\n.footer{\n  width: 100vw;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n@media screen and (max-width: 600px) {\n  .nav{\n    width:100%;\n    /*position: relative;*/\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLGtCQUFrQixFQUFFLGtCQUFrQjtFQUN0QyxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLHNCQUFzQjtFQUN4QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2IHtcbiAgLypmb250LWZhbWlseTogc2Fucy1zZXJpZjsqL1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvKiBTdGF5IGluIHBsYWNlICovXG4gIHdpZHRoOiAxMDB2dztcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xufVxuXG4ubmF2IGEge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZvb3RlcntcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubmF2e1xuICAgIHdpZHRoOjEwMCU7XG4gICAgLypwb3NpdGlvbjogcmVsYXRpdmU7Ki9cbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav\">\n  <a [ngClass]=\"title\">{{title}}</a>\n  <a (click)=\"refreshBoard()\">Shuffle Board</a>\n</div>\n<router-outlet></router-outlet>\n<div class=\"footer\">\n  <p>Created by&nbsp;</p><a href=\"http://taylormkaye.com\"> Taylor Kaye</a>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CATAN Generator';
    }
    AppComponent.prototype.refreshBoard = function () {
        window.location.reload();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _board_board_component__WEBPACK_IMPORTED_MODULE_5__["BoardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/board/board.component.css":
/*!*******************************************!*\
  !*** ./src/app/board/board.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".board {\n  display: flex;\n  /*flex-direction: row;*/\n  align-items: center;\n  justify-content: center;\n  min-width: 640px;\n  /*flex-wrap: nowrap;*/\n  padding-top:10px;\n  /*position: relative;*/\n}\n\n.col {\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: column;\n  max-width: 119px;\n  position: relative;\n}\n\n.hex {\n  display: flex;\n  position: relative;\n  background-size: cover;\n  background-position: left;\n  width: 140px;\n  height: 154px;\n  margin-top: -11px;\n  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n    transform: rotate(90deg);\n}\n\n.wheat1 {\n  background-image: url('wheat_1.png');\n}\n\n.wheat2 {\n  background-image: url('wheat_1.png');\n}\n\n.wheat3 {\n  background-image: url('wheat_2.png');\n}\n\n.wheat4 {\n  background-image: url('wheat_2.png');\n}\n\n.brick1 {\n  background-image: url('brick_1.png');\n}\n\n.brick2 {\n  background-image: url('brick_1.png');\n}\n\n.brick3 {\n  background-image: url('brick_2.png');\n}\n\n.sheep1 {\n  background-image: url('sheep_1.png');\n}\n\n.sheep2 {\n  background-image: url('sheep_1.png');\n}\n\n.sheep3 {\n  background-image: url('sheep_2.png');\n}\n\n.sheep4 {\n  background-image: url('sheep_2.png');\n}\n\n.wood1 {\n  background-image: url('wood_1.png');\n}\n\n.wood2 {\n  background-image: url('wood_1.png');\n}\n\n.wood3 {\n  background-image: url('wood_2.png');\n}\n\n.wood4 {\n  background-image: url('wood_2.png');\n}\n\n.ore1 {\n  background-image: url('ore_1.png');\n}\n\n.ore2 {\n  background-image: url('ore_1.png');\n}\n\n.ore3 {\n  background-image: url('ore_2.png');\n}\n\n.desert1 {\n  background-image: url('desert_1.png');\n}\n\n.circle{\n  height: 45px;\n  width: 45px;\n  background-color: #eadcb8;\n  border-radius: 50%;\n  margin-left: 46px;\n  margin-top: 53px;\n  transform: rotate(270deg);\n}\n\n.blank{\n  display: none;\n}\n\n.probability2:before {\n  content: \"2\";\n  margin-left: 16px;\n  margin-top: 6px;\n  font-size: 28px;\n  display: inline-block;\n}\n\n.probability3:before {\n  content: \"3\";\n  margin-left: 16px;\n  margin-top: 6px;\n  font-size: 28px;\n  display: inline-block;\n}\n\n.probability4:before {\n  content: \"4\";\n  margin-left: 16px;\n  margin-top: 6px;\n  font-size: 28px;\n  display: inline-block;\n}\n\n.probability5:before {\n  content: \"5\";\n  margin-left: 16px;\n  margin-top: 6px;\n  font-size: 28px;\n  display: inline-block;\n}\n\n.probability6:before {\n  content: \"6\";\n  margin-left: 16px;\n  margin-top: 6px;\n  font-size: 28px;\n  color: #d24e3f;\n  display: inline-block;\n}\n\n.probability8:before {\n  content: \"8\";\n  margin-left: 16px;\n  margin-top: 6px;\n  font-size: 28px;\n  color: #d24e3f;\n  display: inline-block;\n}\n\n.probability9:before {\n  content: \"9\";\n  margin-left: 16px;\n  margin-top: 6px;\n  font-size: 28px;\n  display: inline-block;\n}\n\n.probability10:before {\n  content: \"10\";\n  margin-left: 8px;\n  margin-top: 6px;\n  font-size: 28px;\n  display: inline-block;\n\n}\n\n.probability11:before {\n   content: \"11\";\n   margin-left: 9px;\n   margin-top: 6px;\n   font-size: 28px;\n   display: inline-block;\n }\n\n.probability12:before {\n  content: \"12\";\n  margin-left: 8px;\n  margin-top: 6px;\n  font-size: 28px;\n  display: inline-block;\n}\n\n.port {\n  display: flex;\n  position: relative;\n  background-size: cover;\n  /*background-position: left;*/\n  width: 37px;\n  height: 44px;\n  margin-top: -11px;\n  -webkit-clip-path: polygon(49% 0, 100% 37%, 100% 100%, 0 100%, 0 16%);\n          clip-path: polygon(49% 0, 100% 37%, 100% 100%, 0 100%, 0 16%);\n  z-index: 5;\n}\n\n.port1{\n  transform: rotate(-61deg);\n  margin-bottom:205px;\n  margin-left: 91px;\n}\n\n.port2{\n  transform: rotate(-120deg);\n  margin-bottom: 175px;\n  margin-left: 92px;\n}\n\n.port3{\n  transform: rotate(180deg);\n  /*margin-bottom: 175;*/\n  margin-left:52px;\n  margin-top: -4px;\n}\n\n.port4{}\n\n.port5{}\n\n.port6{}\n\n.port7{}\n\n.port8{}\n\n.port9{}\n\n.port10{}\n\n.sheep {\n  background-image: url('sheep.png');\n}\n\n.brick {\n  background-image: url('brick.png');\n}\n\n.wood {\n  background-image: url('wood.png');\n}\n\n.misc {\n  background-image: url('3to1.png');\n}\n\n.ore {\n  background-image: url('ore.png');\n}\n\n.wheat {\n  background-image: url('wheat.png');\n}\n\n.probabilitydesert:before {\n  margin-left: 16px;\n  margin-top: 6px;\n  font-size: 28px;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9hcmQvYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGdGQUFnRjtFQUNoRix3RUFBd0U7SUFLdEUsd0JBQXdCO0FBQzVCOztBQUVBO0VBQ0Usb0NBQXVEO0FBQ3pEOztBQUVBO0VBQ0Usb0NBQXVEO0FBQ3pEOztBQUVBO0VBQ0Usb0NBQXVEO0FBQ3pEOztBQUVBO0VBQ0Usb0NBQXVEO0FBQ3pEOztBQUVBO0VBQ0Usb0NBQXVEO0FBQ3pEOztBQUVBO0VBQ0Usb0NBQXVEO0FBQ3pEOztBQUVBO0VBQ0Usb0NBQXVEO0FBQ3pEOztBQUVBO0VBQ0Usb0NBQXVEO0FBQ3pEOztBQUVBO0VBQ0Usb0NBQXVEO0FBQ3pEOztBQUVBO0VBQ0Usb0NBQXVEO0FBQ3pEOztBQUVBO0VBQ0Usb0NBQXVEO0FBQ3pEOztBQUVBO0VBQ0UsbUNBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsbUNBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsbUNBQXNEO0FBQ3hEOztBQUVBO0VBQ0UsbUNBQXNEO0FBQ3hEOztBQUVBO0VBQ0Usa0NBQXFEO0FBQ3ZEOztBQUVBO0VBQ0Usa0NBQXFEO0FBQ3ZEOztBQUVBO0VBQ0Usa0NBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UscUNBQXdEO0FBQzFEOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFNaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHFCQUFxQjs7QUFFdkI7O0FBRUE7R0FDRyxhQUFhO0dBQ2IsZ0JBQWdCO0dBQ2hCLGVBQWU7R0FDZixlQUFlO0dBQ2YscUJBQXFCO0NBQ3ZCOztBQUVEO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixxRUFBNkQ7VUFBN0QsNkRBQTZEO0VBQzdELFVBQVU7QUFDWjs7QUFFQTtFQUtFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUNBO0VBS0UsMEJBQTBCO0VBQzFCLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFLRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBQ0EsT0FBTzs7QUFDUCxPQUFPOztBQUNQLE9BQU87O0FBQ1AsT0FBTzs7QUFDUCxPQUFPOztBQUNQLE9BQU87O0FBQ1AsUUFBUTs7QUFFUjtFQUNFLGtDQUFxRDtBQUN2RDs7QUFFQTtFQUNFLGtDQUFxRDtBQUN2RDs7QUFFQTtFQUNFLGlDQUFvRDtBQUN0RDs7QUFFQTtFQUNFLGlDQUFvRDtBQUN0RDs7QUFFQTtFQUNFLGdDQUFtRDtBQUNyRDs7QUFFQTtFQUNFLGtDQUFxRDtBQUN2RDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsZUFBZTtFQUNmLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9hcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKmZsZXgtZGlyZWN0aW9uOiByb3c7Ki9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi13aWR0aDogNjQwcHg7XG4gIC8qZmxleC13cmFwOiBub3dyYXA7Ki9cbiAgcGFkZGluZy10b3A6MTBweDtcbiAgLypwb3NpdGlvbjogcmVsYXRpdmU7Ki9cbn1cblxuLmNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDExOXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5oZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAxNTRweDtcbiAgbWFyZ2luLXRvcDogLTExcHg7XG4gIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAyNSUsIDEwMCUgNzUlLCA1MCUgMTAwJSwgMCUgNzUlLCAwJSAyNSUpO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDI1JSwgMTAwJSA3NSUsIDUwJSAxMDAlLCAwJSA3NSUsIDAlIDI1JSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4ud2hlYXQxIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RpbGVzL3doZWF0XzEucG5nXCIpO1xufVxuXG4ud2hlYXQyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RpbGVzL3doZWF0XzEucG5nXCIpO1xufVxuXG4ud2hlYXQzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RpbGVzL3doZWF0XzIucG5nXCIpO1xufVxuXG4ud2hlYXQ0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RpbGVzL3doZWF0XzIucG5nXCIpO1xufVxuXG4uYnJpY2sxIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RpbGVzL2JyaWNrXzEucG5nXCIpO1xufVxuXG4uYnJpY2syIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RpbGVzL2JyaWNrXzEucG5nXCIpO1xufVxuXG4uYnJpY2szIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RpbGVzL2JyaWNrXzIucG5nXCIpO1xufVxuXG4uc2hlZXAxIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RpbGVzL3NoZWVwXzEucG5nXCIpO1xufVxuXG4uc2hlZXAyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RpbGVzL3NoZWVwXzEucG5nXCIpO1xufVxuXG4uc2hlZXAzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RpbGVzL3NoZWVwXzIucG5nXCIpO1xufVxuXG4uc2hlZXA0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RpbGVzL3NoZWVwXzIucG5nXCIpO1xufVxuXG4ud29vZDEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdGlsZXMvd29vZF8xLnBuZ1wiKTtcbn1cblxuLndvb2QyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RpbGVzL3dvb2RfMS5wbmdcIik7XG59XG5cbi53b29kMyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy90aWxlcy93b29kXzIucG5nXCIpO1xufVxuXG4ud29vZDQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdGlsZXMvd29vZF8yLnBuZ1wiKTtcbn1cblxuLm9yZTEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdGlsZXMvb3JlXzEucG5nXCIpO1xufVxuXG4ub3JlMiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy90aWxlcy9vcmVfMS5wbmdcIik7XG59XG5cbi5vcmUzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3RpbGVzL29yZV8yLnBuZ1wiKTtcbn1cblxuLmRlc2VydDEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdGlsZXMvZGVzZXJ0XzEucG5nXCIpO1xufVxuXG4uY2lyY2xle1xuICBoZWlnaHQ6IDQ1cHg7XG4gIHdpZHRoOiA0NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFkY2I4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiA0NnB4O1xuICBtYXJnaW4tdG9wOiA1M3B4O1xuXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbn1cblxuLmJsYW5re1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucHJvYmFiaWxpdHkyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiMlwiO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBmb250LXNpemU6IDI4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnByb2JhYmlsaXR5MzpiZWZvcmUge1xuICBjb250ZW50OiBcIjNcIjtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wcm9iYWJpbGl0eTQ6YmVmb3JlIHtcbiAgY29udGVudDogXCI0XCI7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucHJvYmFiaWxpdHk1OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiNVwiO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBmb250LXNpemU6IDI4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnByb2JhYmlsaXR5NjpiZWZvcmUge1xuICBjb250ZW50OiBcIjZcIjtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBjb2xvcjogI2QyNGUzZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucHJvYmFiaWxpdHk4OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiOFwiO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBmb250LXNpemU6IDI4cHg7XG4gIGNvbG9yOiAjZDI0ZTNmO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wcm9iYWJpbGl0eTk6YmVmb3JlIHtcbiAgY29udGVudDogXCI5XCI7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucHJvYmFiaWxpdHkxMDpiZWZvcmUge1xuICBjb250ZW50OiBcIjEwXCI7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbn1cblxuLnByb2JhYmlsaXR5MTE6YmVmb3JlIHtcbiAgIGNvbnRlbnQ6IFwiMTFcIjtcbiAgIG1hcmdpbi1sZWZ0OiA5cHg7XG4gICBtYXJnaW4tdG9wOiA2cHg7XG4gICBmb250LXNpemU6IDI4cHg7XG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gfVxuXG4ucHJvYmFiaWxpdHkxMjpiZWZvcmUge1xuICBjb250ZW50OiBcIjEyXCI7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5wb3J0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAvKmJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7Ki9cbiAgd2lkdGg6IDM3cHg7XG4gIGhlaWdodDogNDRweDtcbiAgbWFyZ2luLXRvcDogLTExcHg7XG4gIGNsaXAtcGF0aDogcG9seWdvbig0OSUgMCwgMTAwJSAzNyUsIDEwMCUgMTAwJSwgMCAxMDAlLCAwIDE2JSk7XG4gIHotaW5kZXg6IDU7XG59XG5cbi5wb3J0MXtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNjFkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC02MWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNjFkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNjFkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNjFkZWcpO1xuICBtYXJnaW4tYm90dG9tOjIwNXB4O1xuICBtYXJnaW4tbGVmdDogOTFweDtcbn1cbi5wb3J0MntcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNjFkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC02MWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNjFkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgtNjFkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTIwZGVnKTtcbiAgbWFyZ2luLWJvdHRvbTogMTc1cHg7XG4gIG1hcmdpbi1sZWZ0OiA5MnB4O1xufVxuLnBvcnQze1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC8qbWFyZ2luLWJvdHRvbTogMTc1OyovXG4gIG1hcmdpbi1sZWZ0OjUycHg7XG4gIG1hcmdpbi10b3A6IC00cHg7XG59XG4ucG9ydDR7fVxuLnBvcnQ1e31cbi5wb3J0Nnt9XG4ucG9ydDd7fVxuLnBvcnQ4e31cbi5wb3J0OXt9XG4ucG9ydDEwe31cblxuLnNoZWVwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3BvcnRzL3NoZWVwLnBuZ1wiKTtcbn1cblxuLmJyaWNrIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3BvcnRzL2JyaWNrLnBuZ1wiKTtcbn1cblxuLndvb2Qge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvcG9ydHMvd29vZC5wbmdcIik7XG59XG5cbi5taXNjIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3BvcnRzLzN0bzEucG5nXCIpO1xufVxuXG4ub3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL3BvcnRzL29yZS5wbmdcIik7XG59XG5cbi53aGVhdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9wb3J0cy93aGVhdC5wbmdcIik7XG59XG5cbi5wcm9iYWJpbGl0eWRlc2VydDpiZWZvcmUge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xuICBmb250LXNpemU6IDI4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/board/board.component.html":
/*!********************************************!*\
  !*** ./src/app/board/board.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = board>\n  <div class=col>\n<!--    <div [ngClass]=\"['port', 'port1', portList[4]]\"></div>-->\n<!--    <div [ngClass]=\"['port', 'port2', portList[5]]\"></div>-->\n  </div>\n  <div class=col>\n    <div [ngClass]=\"['hex', hexType]\" *ngFor=\"let hexType of hexList.slice(0,3)\">\n      <span [ngClass]=\"[probabilityRequired(), getProbability()]\"></span>\n    </div>\n<!--    <div [ngClass]=\"['port', 'port3', portList[6]]\"></div>-->\n  </div>\n  <div class=col>\n<!--    <div [ngClass]=\"['port', 'port4', portList[3]]\"></div>-->\n    <div [ngClass]=\"['hex', hexType]\" *ngFor=\"let hexType of hexList.slice(3,7)\">\n      <span [ngClass]=\"[probabilityRequired(), getProbability()]\"></span>\n    </div>\n  </div>\n  <div class=col>\n    <div [ngClass]=\"['hex', hexType]\" *ngFor=\"let hexType of hexList.slice(7,12)\">\n      <span [ngClass]=\"[probabilityRequired(), getProbability()]\"></span>\n    </div>\n<!--    <div [ngClass]=\"['port', 'port5', portList[7]]\"></div>-->\n  </div>\n  <div class=col>\n<!--    <div [ngClass]=\"['port', 'port6', portList[2]]\"></div>-->\n    <div [ngClass]=\"['hex', hexType]\" *ngFor=\"let hexType of hexList.slice(12,16)\">\n      <span [ngClass]=\"[probabilityRequired(), getProbability()]\"></span>\n    </div>\n  </div>\n  <div class=col>\n    <div [ngClass]=\"['hex', hexType]\" *ngFor=\"let hexType of hexList.slice(16,19)\">\n      <span [ngClass]=\"[probabilityRequired(), getProbability()]\"></span>\n    </div>\n<!--    <div [ngClass]=\"['port', 'port8', portList[8]]\"></div>-->\n  </div>\n  <div class=col>\n<!--    <div [ngClass]=\"['port', 'port9', portList[1]]\"></div>-->\n<!--    <div [ngClass]=\"['port', 'port10', portList[0]]\"></div>-->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/board/board.component.ts":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BoardComponent = /** @class */ (function () {
    function BoardComponent() {
        this.hexList = this.shuffleHexes();
        this.numberList = this.shuffleNumbers();
        this.portList = this.shufflePorts();
    }
    BoardComponent.prototype.shuffleHexes = function () {
        var hexes = { wood: 4, sheep: 4, brick: 3, ore: 3, wheat: 4, desert: 1 };
        var randomHexes = [];
        var resourceTypes = ['wood', 'sheep', 'brick', 'ore', 'wheat', 'desert'];
        var hexNum = 19;
        while (hexNum !== 0) {
            var hexIndex = Math.round(Math.random() * (resourceTypes.length - 1));
            var currentHex = resourceTypes[hexIndex];
            randomHexes.push(currentHex + hexes[currentHex]);
            hexes[currentHex] -= 1;
            if (hexes[currentHex] === 0) {
                resourceTypes.splice(hexIndex, 1);
            }
            hexNum -= 1;
        }
        return randomHexes;
    };
    BoardComponent.prototype.shufflePorts = function (standardizePorts) {
        if (standardizePorts === void 0) { standardizePorts = true; }
        if (standardizePorts) {
            return ['brick', 'misc', 'misc', 'sheep', 'misc', 'ore', 'wheat', 'misc', 'wood'];
        }
        var ports = { misc: 4, wood: 1, brick: 1, wheat: 1, ore: 1, sheep: 1 };
        var randomPorts = [];
        var portTypes = ['wood', 'sheep', 'brick', 'ore', 'wheat', 'misc'];
        while (Object.values(ports).reduce(function (accumulator, val) { return accumulator + val; }, 0) !== 0) {
            var currentPort = portTypes[Math.random() * (portTypes.length - 1)];
            randomPorts.push(ports[currentPort]);
            ports[currentPort] -= 1;
            if (ports[currentPort] === 0) {
                delete portTypes[currentPort];
            }
        }
        return randomPorts;
    };
    BoardComponent.prototype.shuffleNumbers = function () {
        // List of number in standard Catan game
        var numberList = ['2', '3', '3', '4', '4', '5', '5', '6', '6', '8', '8', '9', '9', '10', '10', '11', '11', '12'];
        // Shuffle algorithm
        for (var i = numberList.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = numberList[i];
            numberList[i] = numberList[j];
            numberList[j] = temp;
        }
        numberList.splice(this.hexList.indexOf('desert1'), 0, 'desert');
        return numberList;
    };
    BoardComponent.prototype.getProbability = function () {
        var probability = 'probability';
        probability += this.numberList.slice(0, 1).toString();
        this.numberList.splice(0, 1);
        return probability;
    };
    BoardComponent.prototype.probabilityRequired = function () {
        if (this.numberList[0].toString() === 'desert') {
            return 'blank';
        }
        else {
            return 'circle';
        }
    };
    BoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'board',
            template: __webpack_require__(/*! ./board.component.html */ "./src/app/board/board.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./board.component.css */ "./src/app/board/board.component.css")]
        })
    ], BoardComponent);
    return BoardComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/taylor/WebstormProjects/CatanGenerator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map