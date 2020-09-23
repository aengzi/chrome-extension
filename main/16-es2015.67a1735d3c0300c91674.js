(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "336+":
/*!***********************************************************!*\
  !*** ./src/app/content/list/youtube/comment.component.ts ***!
  \***********************************************************/
/*! exports provided: YoutubeCommentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeCommentListComponent", function() { return YoutubeCommentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_comment_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./comment.component.html */ "ygzR");
/* harmony import */ var _comment_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment.component.scss */ "3LAR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let YoutubeCommentListComponent = class YoutubeCommentListComponent {
};
YoutubeCommentListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_comment_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_comment_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], YoutubeCommentListComponent);



/***/ }),

/***/ "3LAR":
/*!*************************************************************!*\
  !*** ./src/app/content/list/youtube/comment.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "vpVz":
/*!********************************************************!*\
  !*** ./src/app/content/list/youtube/comment.module.ts ***!
  \********************************************************/
/*! exports provided: YoutubeCommentListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeCommentListModule", function() { return YoutubeCommentListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material.module */ "vvyD");
/* harmony import */ var src_app_element_route_page_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/element/route-page-list.module */ "TNll");
/* harmony import */ var _comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comment.component */ "336+");








const routes = [{
        path: '',
        component: _comment_component__WEBPACK_IMPORTED_MODULE_7__["YoutubeCommentListComponent"]
    }];
let YoutubeCommentListModule = class YoutubeCommentListModule {
};
YoutubeCommentListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _comment_component__WEBPACK_IMPORTED_MODULE_7__["YoutubeCommentListComponent"]
        ],
        exports: [
            _comment_component__WEBPACK_IMPORTED_MODULE_7__["YoutubeCommentListComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            src_app_element_route_page_list_module__WEBPACK_IMPORTED_MODULE_6__["RoutePageListModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ]
    })
], YoutubeCommentListModule);



/***/ }),

/***/ "ygzR":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/list/youtube/comment.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<route-page-list #pageList [apiUrl]=\"'youtube-comment-threads'\" [apiParams]=\"{\r\n  limit: 30\r\n}\">\r\n  <ng-template #itemListEl>\r\n    <div fxFlex=\"100\" class=\"mt-3\" fxLayout=\"row\" fxLayoutAlign=\"start start\" *ngFor=\"let item of pageList.items\">\r\n        <img width=\"50px\" class=\"mr-3 rounded-circle border\" [src]=\"item.getAttrs().author_img_url\" />\r\n        <div fxFlex>\r\n          <div class=\"small\">\r\n            <a class=\"d-inline-block font-weight-bold pb-1\" href=\"{{'https://www.youtube.com/channel/'+item.getAttrs().author_channel_id}}\" target=\"_blank\">\r\n              {{item.getAttrs().author_name}}\r\n            </a>\r\n            <span>\r\n              {{item.getAttrs().created_at}}\r\n            </span>\r\n          </div>\r\n          <div class=\"pt-2 pb-2\">\r\n            {{item.getAttrs().text}}\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </ng-template>\r\n</route-page-list>\r\n");

/***/ })

}]);