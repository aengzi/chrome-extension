(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "+5EN":
/*!*************************************************************!*\
  !*** ./src/app/content/list/section-vod/lol-game.module.ts ***!
  \*************************************************************/
/*! exports provided: LolGameSectionVodListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LolGameSectionVodListModule", function() { return LolGameSectionVodListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material.module */ "vvyD");
/* harmony import */ var src_app_element_route_page_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/element/route-page-list.module */ "TNll");
/* harmony import */ var _lol_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lol-game.component */ "HJ+l");








const routes = [{
        path: '',
        component: _lol_game_component__WEBPACK_IMPORTED_MODULE_7__["LolGameSectionVodListComponent"]
    }];
let LolGameSectionVodListModule = class LolGameSectionVodListModule {
};
LolGameSectionVodListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _lol_game_component__WEBPACK_IMPORTED_MODULE_7__["LolGameSectionVodListComponent"]
        ],
        exports: [
            _lol_game_component__WEBPACK_IMPORTED_MODULE_7__["LolGameSectionVodListComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            src_app_element_route_page_list_module__WEBPACK_IMPORTED_MODULE_6__["RoutePageListModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ]
    })
], LolGameSectionVodListModule);



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

/***/ "HJ+l":
/*!****************************************************************!*\
  !*** ./src/app/content/list/section-vod/lol-game.component.ts ***!
  \****************************************************************/
/*! exports provided: LolGameSectionVodListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LolGameSectionVodListComponent", function() { return LolGameSectionVodListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lol_game_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lol-game.component.html */ "KGKy");
/* harmony import */ var _lol_game_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lol-game.component.scss */ "oBea");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");








let LolGameSectionVodListComponent = class LolGameSectionVodListComponent {
    constructor(route, router) {
        this.is_search_open = false;
        this.route = route;
        this.selfUrl = router.url.replace(/\?.*/, '');
        this.setSearchSub = router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"])).subscribe(event => {
            this.setSearchObj(lodash__WEBPACK_IMPORTED_MODULE_3__["merge"]({}, route.snapshot.queryParams));
        });
        src_app_service_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"].api().get('watchable-lol-champions').subscribe((champions) => {
            this.champions = champions;
        });
    }
    hasChampion(champion) {
        const index = lodash__WEBPACK_IMPORTED_MODULE_3__["indexOf"](this.search.champion_ids, String(champion.getAttrs().id));
        if (index == -1) {
            return false;
        }
        else {
            return true;
        }
    }
    ngOnDestroy() {
        this.setSearchSub.unsubscribe();
    }
    toggleChampion(champion) {
        const id = String(champion.getAttrs().id);
        const index = lodash__WEBPACK_IMPORTED_MODULE_3__["indexOf"](this.search.champion_ids, id);
        if (index == -1) {
            this.search.champion_ids.push(id);
        }
        else {
            this.search.champion_ids.splice(index, 1);
        }
    }
    hasStatusMultiKills(type) {
        const index = lodash__WEBPACK_IMPORTED_MODULE_3__["indexOf"](this.search.multi_kill_types, type);
        if (index == -1) {
            return false;
        }
        else {
            return true;
        }
    }
    toggleStatusMultiKills(type) {
        const index = lodash__WEBPACK_IMPORTED_MODULE_3__["indexOf"](this.search.multi_kill_types, type);
        if (index == -1) {
            this.search.multi_kill_types.push(type);
        }
        else {
            this.search.multi_kill_types.splice(index, 1);
        }
    }
    setSearchObj(search) {
        if (search.order_by == undefined || search.order_by == '') {
            search.order_by = [];
        }
        else if (typeof search.order_by == 'string') {
            search.order_by = search.order_by.split(',');
        }
        if (search.champion_ids == undefined || search.champion_ids == '') {
            search.champion_ids = [];
        }
        else if (typeof search.champion_ids == 'string') {
            search.champion_ids = search.champion_ids.split(',');
        }
        if (search.multi_kill_types == undefined || search.multi_kill_types == '') {
            search.multi_kill_types = [];
        }
        else if (typeof search.multi_kill_types == 'string') {
            search.multi_kill_types = search.multi_kill_types.split(',');
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
        if (params.champion_ids.length != 0) {
            params.champion_ids = params.champion_ids.join(',');
        }
        else {
            delete params.champion_ids;
        }
        if (params.multi_kill_types.length != 0) {
            params.multi_kill_types = params.multi_kill_types.join(',');
        }
        else {
            delete params.multi_kill_types;
        }
        return params;
    }
};
LolGameSectionVodListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
LolGameSectionVodListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        template: _raw_loader_lol_game_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lol_game_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LolGameSectionVodListComponent);



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

/***/ "KGKy":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/list/section-vod/lol-game.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tab-wrap\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n    <p>\r\n      정렬:\r\n    </p>\r\n    <nav mat-tab-nav-bar>\r\n      <a mat-tab-link [active]=\"search.order_by == undefined || search.order_by.length == 0\" queryParamsHandling=\"merge\" [queryParams]=\"{order_by: undefined}\" [routerLink]=\"['./']\">\r\n        최신날짜 순\r\n      </a>\r\n      <a mat-tab-link [active]=\"search.order_by != undefined && search.order_by.length != 0 && search.order_by[0] == 'status_kills desc'\" queryParamsHandling=\"merge\" [queryParams]=\"{order_by: 'status_kills desc'}\" [routerLink]=\"['./']\">\r\n        킬수 많은 순\r\n      </a>\r\n      <a mat-tab-link [active]=\"search.order_by != undefined && search.order_by.length != 0 && search.order_by[0] == 'status_assists desc'\" queryParamsHandling=\"merge\" [queryParams]=\"{order_by: 'status_assists desc'}\" [routerLink]=\"['./']\">\r\n        어시스트 많은 순\r\n      </a>\r\n      <a mat-tab-link [active]=\"search.order_by != undefined && search.order_by.length != 0 && search.order_by[0] == 'status_gold_earned desc'\" queryParamsHandling=\"merge\" [queryParams]=\"{order_by: 'status_gold_earned desc'}\" [routerLink]=\"['./']\">\r\n        골드취득 많이한 순\r\n      </a>\r\n      <a mat-tab-link [active]=\"search.order_by != undefined && search.order_by.length != 0 && search.order_by[0] == 'game_duration desc'\" queryParamsHandling=\"merge\" [queryParams]=\"{order_by: 'game_duration desc'}\" [routerLink]=\"['./']\">\r\n        러닝타임 긴 순\r\n      </a>\r\n    </nav>\r\n  </div>\r\n  <div>\r\n    <button *ngIf=\"!is_search_open\" color=\"primary\" mat-raised-button (click)=\"is_search_open = true\">\r\n      검색 조건\r\n    </button>\r\n    <button *ngIf=\"is_search_open\" color=\"primary\" mat-raised-button (click)=\"is_search_open = false\">\r\n      닫기\r\n    </button>\r\n  </div>\r\n</div>\r\n<div class=\"search-wrap small\" *ngIf=\"is_search_open\">\r\n  <div fxLayout=\"row\">\r\n    <div fxFlex=\"15%\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <span>플레이한 챔피언</span>\r\n    </div>\r\n    <mat-button-toggle-group fxFlex=\"85%\" fxLayout=\"row wrap\" fxLayoutAlign=\"start stretch\" multiple appearance=\"standard\">\r\n      <mat-button-toggle (click)=\"$event.target.click() || search.champion_ids = []\" fxFlex=\"none\">\r\n        전체\r\n      </mat-button-toggle>\r\n      <mat-button-toggle *ngFor=\"let champion of champions\" [checked]=\"hasChampion(champion)\" (change)=\"toggleChampion(champion)\" fxFlex=\"none\">\r\n        <span>{{champion.getAttrs().name}}</span>\r\n      </mat-button-toggle>\r\n    </mat-button-toggle-group>\r\n  </div>\r\n  <div fxLayout=\"row\">\r\n    <div fxFlex=\"15%\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <span>게임 승패</span>\r\n    </div>\r\n    <div fxFlex=\"85%\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <mat-radio-group (change)=\"search.is_win = $event.value\">\r\n        <mat-radio-button [checked]=\"search.is_win == undefined\" [value]=\"undefined\">\r\n          전체\r\n        </mat-radio-button>\r\n        <mat-radio-button [checked]=\"search.is_win == 1\" [value]=\"1\">\r\n          승\r\n        </mat-radio-button>\r\n        <mat-radio-button [checked]=\"search.is_win == 0\" [value]=\"0\">\r\n          패\r\n        </mat-radio-button>\r\n      </mat-radio-group>\r\n    </div>\r\n  </div>\r\n  <div fxLayout=\"row\">\r\n    <div fxFlex=\"15%\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <span>멀티킬 종류</span>\r\n    </div>\r\n    <div fxFlex=\"85%\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n      <mat-checkbox [checked]=\"search.multi_kill_types.indexOf('double') != -1\" (change)=\"toggleStatusMultiKills('double')\">더블 킬</mat-checkbox>\r\n      <mat-checkbox [checked]=\"search.multi_kill_types.indexOf('triple') != -1\" (change)=\"toggleStatusMultiKills('triple')\">트리필 킬</mat-checkbox>\r\n      <mat-checkbox [checked]=\"search.multi_kill_types.indexOf('quadra') != -1\" (change)=\"toggleStatusMultiKills('quadra')\">쿼드라 킬</mat-checkbox>\r\n      <mat-checkbox [checked]=\"search.multi_kill_types.indexOf('penta') != -1\" (change)=\"toggleStatusMultiKills('penta')\">펜타 킬</mat-checkbox>\r\n    </div>\r\n  </div>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <button class=\"reset-btn\" (click)=\"setSearchObj({order_by: search.order_by})\" mat-raised-button>\r\n      조건 초기화\r\n    </button>\r\n    <button class=\"search-btn\" color=\"primary\" mat-raised-button [routerLink]=\"[selfUrl]\" [queryParams]=\"getQueryParams()\" (click)=\"is_search_open = false\">\r\n      검색하기\r\n    </button>\r\n  </div>\r\n</div>\r\n<route-page-list #pageList [apiUrl]=\"'lol-games'\" [apiParams]=\"{\r\n  expands: 'vod',\r\n  limit: 20\r\n}\">\r\n  <ng-template #itemListEl>\r\n    <div class=\"ytb-vod-item\" fxFlex=\"0 0 calc(25% - 20px)\" *ngFor=\"let item of pageList.items\">\r\n      <mat-card routerLink=\"/section/lol-games/{{item.getAttrs().id}}\">\r\n        <img mat-card-image src=\"{{item.getRelations().vod.getAttrs().thumbnail}}\" />\r\n        <mat-card-content>\r\n          <p class=\"text-ellipsis\">\r\n            {{item.getRelations().vod.getAttrs().title}}\r\n          </p>\r\n          <p>\r\n            {{item.getAttrs().started_at.substr(0, 16)}}\r\n          </p>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </ng-template>\r\n</route-page-list>\r\n");

/***/ }),

/***/ "oBea":
/*!******************************************************************!*\
  !*** ./src/app/content/list/section-vod/lol-game.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Colors for the ripple elements.*/\n/* stylelint-disable-next-line material/theme-mixin-api */\n/* stylelint-disable-next-line material/theme-mixin-api */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n.tab-wrap {\n  margin-bottom: 1em;\n}\n.tab-wrap > div > p {\n  font-size: 14px;\n}\n.mat-tab-link {\n  min-width: auto;\n}\nmat-button-toggle-group {\n  border-radius: 0px;\n  border: solid 0px;\n}\nmat-button-toggle {\n  border: solid 0px !important;\n}\nmat-button-toggle:not(.mat-button-toggle-checked) {\n  background-color: #fafafa;\n}\nmat-radio-button, mat-checkbox {\n  margin: 1em;\n}\n.search-btn, .reset-btn {\n  min-width: 10em;\n  margin: 1em;\n}\ndiv[fxFlex=\"15%\"] {\n  background-color: white;\n  border-right: solid 1px #ccc;\n}");

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