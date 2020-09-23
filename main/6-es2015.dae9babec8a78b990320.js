(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "0r1B":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/element/page-list.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n  <ng-container *ngIf=\"!isLoading\">\r\n    <ng-container *ngTemplateOutlet=\"itemListEl\"></ng-container>\r\n  </ng-container>\r\n</div>\r\n<ng-content></ng-content>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"pagination-wrap\">\r\n  <ul class=\"pagination\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <li fxFlex *ngIf=\"prevPages.length != 0 && prevPages.indexOf(1) == -1\">\r\n      <a mat-button (click)=\"getListWith({page: 1})\">\r\n        <mat-icon>first_page</mat-icon>\r\n      </a>\r\n    </li>\r\n    <li fxFlex *ngIf=\"prevPages.length != 0 && prevPages[0] > 1\">\r\n      <a mat-button (click)=\"getListWith({page: prevPages[0]-1})\">\r\n        <mat-icon>chevron_left</mat-icon>\r\n      </a>\r\n    </li>\r\n    <li fxFlex *ngFor=\"let prevPage of prevPages\">\r\n      <a mat-button (click)=\"getListWith({page: prevPage})\">\r\n        {{prevPage}}\r\n      </a>\r\n    </li>\r\n    <li fxFlex>\r\n      <a mat-button mat-raised-button color=\"primary\" (click)=\"getListWith({page: currentPage})\">\r\n        {{currentPage}}\r\n      </a>\r\n    </li>\r\n    <li fxFlex *ngFor=\"let nextPage of nextPages\">\r\n      <a mat-button (click)=\"getListWith({page: nextPage})\">\r\n        {{nextPage}}\r\n      </a>\r\n    </li>\r\n    <li fxFlex *ngIf=\"nextPages.length != 0 && nextPages[nextPages.length-1] < lastPage\">\r\n      <a mat-button (click)=\"getListWith({page: nextPages[nextPages.length-1]+1})\">\r\n        <mat-icon>chevron_right</mat-icon>\r\n      </a>\r\n    </li>\r\n    <li fxFlex *ngIf=\"nextPages.length != 0 && nextPages.indexOf(lastPage) == -1\">\r\n      <a mat-button (click)=\"getListWith({page: lastPage})\">\r\n        <mat-icon>last_page</mat-icon>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "1Q7E":
/*!*********************************************!*\
  !*** ./src/app/element/page-list.module.ts ***!
  \*********************************************/
/*! exports provided: PageListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListModule", function() { return PageListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material.module */ "vvyD");
/* harmony import */ var _page_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-list.component */ "IoOo");







let PageListModule = class PageListModule {
};
PageListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _page_list_component__WEBPACK_IMPORTED_MODULE_6__["PageListComponent"]
        ],
        exports: [
            _page_list_component__WEBPACK_IMPORTED_MODULE_6__["PageListComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        ]
    })
], PageListModule);



/***/ }),

/***/ "1W8z":
/*!***************************************************!*\
  !*** ./src/app/content/list/youtube.component.ts ***!
  \***************************************************/
/*! exports provided: YoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeComponent", function() { return YoutubeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_youtube_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./youtube.component.html */ "jYq8");
/* harmony import */ var _youtube_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./youtube.component.scss */ "BaYc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let YoutubeComponent = class YoutubeComponent {
};
YoutubeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_youtube_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_youtube_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], YoutubeComponent);



/***/ }),

/***/ "AJpA":
/*!************************************************!*\
  !*** ./src/app/content/list/youtube.module.ts ***!
  \************************************************/
/*! exports provided: YoutubeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeModule", function() { return YoutubeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_element_page_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/element/page-list.module */ "1Q7E");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/material.module */ "vvyD");
/* harmony import */ var _youtube_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./youtube.component */ "1W8z");








const routes = [{
        path: '',
        component: _youtube_component__WEBPACK_IMPORTED_MODULE_7__["YoutubeComponent"],
        children: [{
                path: 'videos',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, /*! src/app/content/list/youtube/video.module */ "IsHB")).then(mod => mod.YoutubeVideoListModule)
            }, {
                path: 'comments',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, /*! src/app/content/list/youtube/comment.module */ "vpVz")).then(mod => mod.YoutubeCommentListModule)
            }, {
                path: '',
                redirectTo: 'videos'
            }]
    }];
let YoutubeModule = class YoutubeModule {
};
YoutubeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _youtube_component__WEBPACK_IMPORTED_MODULE_7__["YoutubeComponent"]
        ],
        exports: [
            _youtube_component__WEBPACK_IMPORTED_MODULE_7__["YoutubeComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            src_app_element_page_list_module__WEBPACK_IMPORTED_MODULE_5__["PageListModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ]
    })
], YoutubeModule);



/***/ }),

/***/ "BaYc":
/*!*****************************************************!*\
  !*** ./src/app/content/list/youtube.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "IoOo":
/*!************************************************!*\
  !*** ./src/app/element/page-list.component.ts ***!
  \************************************************/
/*! exports provided: PageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageListComponent", function() { return PageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_page_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./page-list.component.html */ "0r1B");
/* harmony import */ var _page_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-list.component.scss */ "uKbV");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");






let PageListComponent = class PageListComponent {
    constructor() {
        this.apiParams = {};
        this.pageSize = 7;
        this.prevPages = [];
        this.nextPages = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.getListWith();
    }
    ngOnChanges(changes) {
        let changed = false;
        Object.keys(changes).forEach((key) => {
            if (changes[key].previousValue && !lodash__WEBPACK_IMPORTED_MODULE_3__["isEqual"](changes[key].previousValue, changes[key].currentValue)) {
                changed = true;
            }
        });
        if (changed) {
            this.getListWith();
        }
    }
    getListWith(baseParams = {}) {
        this.isLoading = true;
        if (this.subscribed) {
            this.subscribed.unsubscribe();
        }
        this.subscribed = src_app_service_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"].api().get(this.apiUrl, {
            params: lodash__WEBPACK_IMPORTED_MODULE_3__["merge"]({}, baseParams, this.apiParams)
        }).subscribe((res) => {
            this.isLoading = false;
            this.items = res.data;
            this.currentPage = res.current_page;
            this.lastPage = res.last_page;
            this.totalCount = res.total;
            if (this.pageSize % 2 == 0) {
                this.pageSize = this.pageSize + 1;
            }
            let limit = (this.pageSize - 1) / 2;
            let i = 1;
            let j = 1;
            let k = 0;
            let l = 0;
            this.prevPages = [];
            this.nextPages = [];
            for (; this.currentPage - i >= 1 && i <= limit; i++) {
                this.prevPages.unshift(this.currentPage - i);
            }
            for (; this.currentPage + j <= this.lastPage && j <= limit; j++) {
                this.nextPages.push(this.currentPage + j);
            }
            for (; this.currentPage - i - k >= 1 && k < limit - this.nextPages.length; k++) {
                this.prevPages.unshift(this.currentPage - i - k);
            }
            for (; this.currentPage + j + l <= this.lastPage && l < limit - this.prevPages.length; l++) {
                this.nextPages.push(this.currentPage + j + l);
            }
        });
    }
};
PageListComponent.propDecorators = {
    itemListEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: ['itemListEl',] }],
    apiParams: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['apiParams',] }],
    apiUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['apiUrl',] }]
};
PageListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'page-list',
        template: _raw_loader_page_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_page_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PageListComponent);



/***/ }),

/***/ "jYq8":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/list/youtube.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n  <h2>유튜브</h2>\r\n  <nav mat-tab-nav-bar>\r\n    <a mat-tab-link #rla1=\"routerLinkActive\" [routerLink]=\"['/youtube/videos']\" [active]=\"rla1.isActive\" routerLinkActive>\r\n      편집 영상\r\n    </a>\r\n    <a mat-tab-link #rla2=\"routerLinkActive\" [routerLink]=\"['/youtube/comments']\" [active]=\"rla2.isActive\" routerLinkActive>\r\n      최근 댓글\r\n    </a>\r\n  </nav>\r\n</div>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "uKbV":
/*!**************************************************!*\
  !*** ./src/app/element/page-list.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pagination-wrap {\n  margin-top: 10px;\n}\n\n.pagination {\n  margin: 0px auto;\n}\n\n.pagination li {\n  list-style: none;\n}\n\n.pagination li a {\n  padding: 0px;\n  min-width: 36px;\n}");

/***/ })

}]);