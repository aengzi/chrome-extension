(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "+rB/":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/list/post/free.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n  <h2>자유 게시판</h2>\r\n  <nav mat-tab-nav-bar>\r\n    <a mat-tab-link [active]=\"search.order_by == undefined\" queryParamsHandling=\"merge\" [queryParams]=\"{order_by: undefined}\" [routerLink]=\"['./']\">\r\n      최신 순\r\n    </a>\r\n    <a mat-tab-link [active]=\"search.order_by == 'like_count desc'\" queryParamsHandling=\"merge\" [queryParams]=\"{order_by: 'like_count desc'}\" [routerLink]=\"['./']\">\r\n      호감 순\r\n    </a>\r\n  </nav>\r\n</div>\r\n<route-page-list #pageList [apiUrl]=\"'posts'\" [apiParams]=\"{\r\n  expands: 'user',\r\n  type: 'free'\r\n}\">\r\n  <ng-template #itemListEl>\r\n    <table mat-table [dataSource]=\"getItems()\" class=\"w-100 mt-2 mat-elevation-z8\">\r\n      <ng-container matColumnDef=\"id\">\r\n        <th width=\"10%\" mat-header-cell *matHeaderCellDef>\r\n          <div class=\"pl-3\">ID</div>\r\n        </th>\r\n        <td width=\"10%\" mat-cell *matCellDef=\"let element\">\r\n          <div class=\"pl-3\" [routerLink]=\"['/posts/', element.getAttrs().id]\">\r\n            <span>\r\n              {{element.getAttrs().id}}\r\n            </span>\r\n          </div>\r\n        </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"user\">\r\n        <th width=\"15%\" mat-header-cell *matHeaderCellDef>\r\n          <div class=\"pl-3\">닉네임</div>\r\n        </th>\r\n        <td width=\"15%\" mat-cell *matCellDef=\"let element\">\r\n          <div class=\"pl-3\" [routerLink]=\"['/posts/', element.getAttrs().id]\">\r\n            <span>\r\n              {{element.getRelations().user.getAttrs().nick}}\r\n            </span>\r\n          </div>\r\n        </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"title\">\r\n        <th width=\"55%\" mat-header-cell *matHeaderCellDef>\r\n          <div class=\"pl-3\">제목</div>\r\n        </th>\r\n        <td width=\"55%\" mat-cell *matCellDef=\"let element\">\r\n          <div class=\"pl-3\" [routerLink]=\"['/posts/', element.getAttrs().id]\">\r\n            <span>\r\n              {{ element.getAttrs().title }}\r\n            </span>\r\n          </div>\r\n        </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"created_at\">\r\n        <th width=\"20%\" mat-header-cell *matHeaderCellDef>\r\n          <div class=\"pl-3\">작성날짜</div>\r\n        </th>\r\n        <td width=\"20%\" mat-cell *matCellDef=\"let element\">\r\n          <div class=\"pl-3\" [routerLink]=\"['/posts/', element.getAttrs().id]\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n            <div>\r\n              <span>\r\n                {{ element.getAttrs().created_at.substr(0, 16) }}\r\n              </span>\r\n            </div>\r\n            <button *ngIf=\"authService.getUser() && authService.getUser().getAttrs().id == element.getAttrs().user_id\" mat-icon-button [matMenuTriggerFor]=\"moreMenu\" (click)=\"$event.stopPropagation()\">\r\n              <mat-icon>more_horiz</mat-icon>\r\n            </button>\r\n            <mat-menu #moreMenu>\r\n              <button mat-menu-item [routerLink]=\"['/posts', element.getAttrs().id, 'edit']\">\r\n                수정\r\n              </button>\r\n              <button mat-menu-item (click)=\"element.delete$().subscribe()\">\r\n                삭제\r\n              </button>\r\n            </mat-menu>\r\n          </div>\r\n        </td>\r\n      </ng-container>\r\n      <tr mat-header-row *matHeaderRowDef=\"['id', 'user', 'title', 'created_at']\">\r\n      </tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: ['id', 'user', 'title', 'created_at'];\" class=\"ripple\" >\r\n      </tr>\r\n    </table>\r\n  </ng-template>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n    <button mat-raised-button class=\"mt-3\" color=\"primary\" [queryParams]=\"{type: 'free'}\" [routerLink]=\"['/posts/create']\">\r\n      글쓰기\r\n    </button>\r\n  </div>\r\n</route-page-list>\r\n");

/***/ }),

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

/***/ "casM":
/*!**************************************************!*\
  !*** ./src/app/content/list/post/free.module.ts ***!
  \**************************************************/
/*! exports provided: FreePostListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreePostListModule", function() { return FreePostListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material.module */ "vvyD");
/* harmony import */ var src_app_element_route_page_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/element/route-page-list.module */ "TNll");
/* harmony import */ var _free_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./free.component */ "moLv");








const routes = [{
        path: '',
        component: _free_component__WEBPACK_IMPORTED_MODULE_7__["FreePostListComponent"]
    }];
let FreePostListModule = class FreePostListModule {
};
FreePostListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _free_component__WEBPACK_IMPORTED_MODULE_7__["FreePostListComponent"]
        ],
        exports: [
            _free_component__WEBPACK_IMPORTED_MODULE_7__["FreePostListComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            src_app_element_route_page_list_module__WEBPACK_IMPORTED_MODULE_6__["RoutePageListModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ]
    })
], FreePostListModule);



/***/ }),

/***/ "iEiw":
/*!*******************************************************!*\
  !*** ./src/app/content/list/post/free.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Colors for the ripple elements.*/\n/* stylelint-disable-next-line material/theme-mixin-api */\n/* stylelint-disable-next-line material/theme-mixin-api */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.ripple {\n  background-position: center;\n  transition: background 0.8s;\n}\n.ripple:hover {\n  background: #e0e0e0 radial-gradient(circle, transparent 1%, #e0e0e0 1%) center/15000%;\n}\n.ripple:active {\n  background-color: #eeeeee;\n  background-size: 100%;\n  transition: background 0s;\n}\n[tabindex] {\n  outline: none !important;\n}\ntr.mat-row {\n  cursor: pointer;\n}\ntr.mat-row td {\n  line-height: 48px;\n}");

/***/ }),

/***/ "moLv":
/*!*****************************************************!*\
  !*** ./src/app/content/list/post/free.component.ts ***!
  \*****************************************************/
/*! exports provided: FreePostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreePostListComponent", function() { return FreePostListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_free_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./free.component.html */ "+rB/");
/* harmony import */ var _free_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./free.component.scss */ "iEiw");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/auth.service */ "6uu6");








let FreePostListComponent = class FreePostListComponent {
    constructor(route, router) {
        this.authService = src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"];
        this.setSearchSub = router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"])).subscribe(event => {
            this.search = lodash__WEBPACK_IMPORTED_MODULE_3__["merge"]({}, route.snapshot.queryParams);
        });
    }
    ngOnDestroy() {
        this.setSearchSub.unsubscribe();
    }
    getItems() {
        return this.pageList.items.filter((item) => {
            return item.isExist;
        });
    }
};
FreePostListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
FreePostListComponent.propDecorators = {
    pageList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['pageList',] }]
};
FreePostListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        template: _raw_loader_free_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_free_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FreePostListComponent);



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