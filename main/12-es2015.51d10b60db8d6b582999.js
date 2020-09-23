(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

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

/***/ "63MP":
/*!**************************************************************!*\
  !*** ./src/app/content/list/section-vod/pubg-game.module.ts ***!
  \**************************************************************/
/*! exports provided: PubgGameSectionVodListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PubgGameSectionVodListModule", function() { return PubgGameSectionVodListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material.module */ "vvyD");
/* harmony import */ var src_app_element_route_page_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/element/route-page-list.module */ "TNll");
/* harmony import */ var _pubg_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pubg-game.component */ "OQ+R");








const routes = [{
        path: '',
        component: _pubg_game_component__WEBPACK_IMPORTED_MODULE_7__["PubgGameSectionVodListComponent"]
    }];
let PubgGameSectionVodListModule = class PubgGameSectionVodListModule {
};
PubgGameSectionVodListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _pubg_game_component__WEBPACK_IMPORTED_MODULE_7__["PubgGameSectionVodListComponent"]
        ],
        exports: [
            _pubg_game_component__WEBPACK_IMPORTED_MODULE_7__["PubgGameSectionVodListComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            src_app_element_route_page_list_module__WEBPACK_IMPORTED_MODULE_6__["RoutePageListModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ]
    })
], PubgGameSectionVodListModule);



/***/ }),

/***/ "FMYP":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/list/section-vod/pubg-game.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tab-wrap\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <p>\r\n      정렬:\r\n    </p>\r\n    <nav mat-tab-nav-bar>\r\n      <a mat-tab-link [active]=\"search.order_by == undefined || search.order_by.length == 0\" queryParamsHandling=\"merge\" [queryParams]=\"{order_by: undefined}\" [routerLink]=\"['./']\">\r\n        최신날짜 순\r\n      </a>\r\n      <a mat-tab-link [active]=\"search.order_by != undefined && search.order_by.length != 0 && search.order_by[0] == 'kills desc'\" queryParamsHandling=\"merge\" [queryParams]=\"{order_by: 'kills desc'}\" [routerLink]=\"['./']\">\r\n        킬수 많은 순\r\n      </a>\r\n      <a mat-tab-link [active]=\"search.order_by != undefined && search.order_by.length != 0 && search.order_by[0] == 'assists desc'\" queryParamsHandling=\"merge\" [queryParams]=\"{order_by: 'assists desc'}\" [routerLink]=\"['./']\">\r\n        어시스트 많은 순\r\n      </a>\r\n      <a mat-tab-link [active]=\"search.order_by != undefined && search.order_by.length != 0 && search.order_by[0] == 'rank asc'\" queryParamsHandling=\"merge\" [queryParams]=\"{order_by: 'rank asc'}\" [routerLink]=\"['./']\">\r\n        탑 랭크 순\r\n      </a>\r\n      <a mat-tab-link [active]=\"search.order_by != undefined && search.order_by.length != 0 && search.order_by[0] == 'time_survived desc'\" queryParamsHandling=\"merge\" [queryParams]=\"{order_by: 'time_survived desc'}\" [routerLink]=\"['./']\">\r\n        러닝타임 긴 순\r\n      </a>\r\n    </nav>\r\n  </div>\r\n  <div>\r\n    <button *ngIf=\"!is_search_open\" color=\"primary\" mat-raised-button (click)=\"is_search_open = true\">\r\n      검색 조건\r\n    </button>\r\n    <button *ngIf=\"is_search_open\" color=\"primary\" mat-raised-button (click)=\"is_search_open = false\">\r\n      닫기\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"search-wrap small\" *ngIf=\"is_search_open\">\r\n  <div fxLayout=\"row\">\r\n    <div fxFlex=\"15%\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <span>플레이 맵</span>\r\n    </div>\r\n    <div fxFlex=\"85%\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <mat-checkbox [checked]=\"search.map_names.indexOf('Desert_Main') != -1\" (change)=\"toggleMapNames('Desert_Main')\">Desert</mat-checkbox>\r\n      <mat-checkbox [checked]=\"search.map_names.indexOf('DihorOtok_Main') != -1\" (change)=\"toggleMapNames('DihorOtok_Main')\">DihorOtok</mat-checkbox>\r\n      <mat-checkbox [checked]=\"search.map_names.indexOf('Erangel_Main') != -1\" (change)=\"toggleMapNames('Erangel_Main')\">Erangel</mat-checkbox>\r\n      <mat-checkbox [checked]=\"search.map_names.indexOf('Savage_Main') != -1\" (change)=\"toggleMapNames('Savage_Main')\">Savage</mat-checkbox>\r\n    </div>\r\n  </div>\r\n  <div fxLayout=\"row\">\r\n    <div fxFlex=\"15%\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <span>큐 사이즈</span>\r\n    </div>\r\n    <div fxFlex=\"85%\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <mat-checkbox [checked]=\"search.queue_sizes.indexOf('1') != -1\" (change)=\"toggleQueueSizes('1')\">혼자</mat-checkbox>\r\n      <mat-checkbox [checked]=\"search.queue_sizes.indexOf('2') != -1\" (change)=\"toggleQueueSizes('2')\">두명</mat-checkbox>\r\n      <mat-checkbox [checked]=\"search.queue_sizes.indexOf('4') != -1\" (change)=\"toggleQueueSizes('4')\">네명</mat-checkbox>\r\n    </div>\r\n  </div>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <button class=\"reset-btn\" (click)=\"setSearchObj({order_by: search.order_by})\" mat-raised-button>\r\n      조건 초기화\r\n    </button>\r\n    <button class=\"search-btn\" color=\"primary\" mat-raised-button [routerLink]=\"[selfUrl]\" [queryParams]=\"getQueryParams()\" (click)=\"is_search_open = false\">\r\n      검색하기\r\n    </button>\r\n  </div>\r\n</div>\r\n<route-page-list #pageList [apiUrl]=\"'pubg-games'\" [apiParams]=\"{\r\n  expands: 'vod',\r\n  limit: 20\r\n}\">\r\n  <ng-template #itemListEl>\r\n    <div class=\"ytb-vod-item\" fxFlex=\"0 0 calc(25% - 20px)\" *ngFor=\"let item of pageList.items\">\r\n      <mat-card routerLink=\"/section/pubg-games/{{item.getAttrs().id}}\">\r\n        <img mat-card-image src=\"{{item.getRelations().vod.getAttrs().thumbnail}}\" />\r\n        <mat-card-content>\r\n          <p class=\"text-ellipsis\">\r\n            {{item.getRelations().vod.getAttrs().title}}\r\n          </p>\r\n          <p>\r\n            {{item.getAttrs().started_at.substr(0, 16)}}\r\n          </p>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </ng-template>\r\n</route-page-list>\r\n");

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

/***/ "OQ+R":
/*!*****************************************************************!*\
  !*** ./src/app/content/list/section-vod/pubg-game.component.ts ***!
  \*****************************************************************/
/*! exports provided: PubgGameSectionVodListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PubgGameSectionVodListComponent", function() { return PubgGameSectionVodListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pubg_game_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pubg-game.component.html */ "FMYP");
/* harmony import */ var _pubg_game_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubg-game.component.scss */ "gqgp");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







let PubgGameSectionVodListComponent = class PubgGameSectionVodListComponent {
    constructor(route, router) {
        this.is_search_open = false;
        this.route = route;
        this.selfUrl = router.url.replace(/\?.*/, '');
        this.setSearchSub = router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"])).subscribe(event => {
            this.setSearchObj(lodash__WEBPACK_IMPORTED_MODULE_3__["merge"]({}, route.snapshot.queryParams));
        });
    }
    ngOnDestroy() {
        this.setSearchSub.unsubscribe();
    }
    toggleMapNames(type) {
        const index = lodash__WEBPACK_IMPORTED_MODULE_3__["indexOf"](this.search.map_names, type);
        if (index == -1) {
            this.search.map_names.push(type);
        }
        else {
            this.search.map_names.splice(index, 1);
        }
    }
    toggleQueueSizes(type) {
        const index = lodash__WEBPACK_IMPORTED_MODULE_3__["indexOf"](this.search.queue_sizes, type);
        if (index == -1) {
            this.search.queue_sizes.push(type);
        }
        else {
            this.search.queue_sizes.splice(index, 1);
        }
    }
    setSearchObj(search) {
        if (search.order_by == undefined || search.order_by == '') {
            search.order_by = [];
        }
        else if (typeof search.order_by == 'string') {
            search.order_by = search.order_by.split(',');
        }
        if (search.map_names == undefined || search.map_names == '') {
            search.map_names = [];
        }
        else if (typeof search.map_names == 'string') {
            search.map_names = search.map_names.split(',');
        }
        if (search.queue_sizes == undefined || search.queue_sizes == '') {
            search.queue_sizes = [];
        }
        else if (typeof search.queue_sizes == 'string') {
            search.queue_sizes = search.queue_sizes.split(',');
        }
        this.search = search;
    }
    getQueryParams() {
        const params = lodash__WEBPACK_IMPORTED_MODULE_3__["merge"]({}, this.search);
        params.page = 1;
        if (params.order_by.length != 0) {
            params.order_by = params.order_by.join(',');
        }
        else {
            delete params.order_by;
        }
        if (params.map_names.length != 0) {
            params.map_names = params.map_names.join(',');
        }
        else {
            delete params.map_names;
        }
        if (params.queue_sizes.length != 0) {
            params.queue_sizes = params.queue_sizes.join(',');
        }
        else {
            delete params.queue_sizes;
        }
        return params;
    }
};
PubgGameSectionVodListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
PubgGameSectionVodListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        template: _raw_loader_pubg_game_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pubg_game_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PubgGameSectionVodListComponent);



/***/ }),

/***/ "gqgp":
/*!*******************************************************************!*\
  !*** ./src/app/content/list/section-vod/pubg-game.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-radio-button, mat-checkbox {\n  margin: 1em;\n}\n\n.search-btn, .reset-btn {\n  min-width: 10em;\n  margin: 1em;\n}\n\ndiv[fxFlex=\"15%\"] {\n  background-color: white;\n  border-right: solid 1px #ccc;\n}");

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