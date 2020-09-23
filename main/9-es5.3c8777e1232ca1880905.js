(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9], {
    /***/
    "0r1B":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/element/page-list.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function r1B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n  <ng-container *ngIf=\"!isLoading\">\r\n    <ng-container *ngTemplateOutlet=\"itemListEl\"></ng-container>\r\n  </ng-container>\r\n</div>\r\n<ng-content></ng-content>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"pagination-wrap\">\r\n  <ul class=\"pagination\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <li fxFlex *ngIf=\"prevPages.length != 0 && prevPages.indexOf(1) == -1\">\r\n      <a mat-button (click)=\"getListWith({page: 1})\">\r\n        <mat-icon>first_page</mat-icon>\r\n      </a>\r\n    </li>\r\n    <li fxFlex *ngIf=\"prevPages.length != 0 && prevPages[0] > 1\">\r\n      <a mat-button (click)=\"getListWith({page: prevPages[0]-1})\">\r\n        <mat-icon>chevron_left</mat-icon>\r\n      </a>\r\n    </li>\r\n    <li fxFlex *ngFor=\"let prevPage of prevPages\">\r\n      <a mat-button (click)=\"getListWith({page: prevPage})\">\r\n        {{prevPage}}\r\n      </a>\r\n    </li>\r\n    <li fxFlex>\r\n      <a mat-button mat-raised-button color=\"primary\" (click)=\"getListWith({page: currentPage})\">\r\n        {{currentPage}}\r\n      </a>\r\n    </li>\r\n    <li fxFlex *ngFor=\"let nextPage of nextPages\">\r\n      <a mat-button (click)=\"getListWith({page: nextPage})\">\r\n        {{nextPage}}\r\n      </a>\r\n    </li>\r\n    <li fxFlex *ngIf=\"nextPages.length != 0 && nextPages[nextPages.length-1] < lastPage\">\r\n      <a mat-button (click)=\"getListWith({page: nextPages[nextPages.length-1]+1})\">\r\n        <mat-icon>chevron_right</mat-icon>\r\n      </a>\r\n    </li>\r\n    <li fxFlex *ngIf=\"nextPages.length != 0 && nextPages.indexOf(lastPage) == -1\">\r\n      <a mat-button (click)=\"getListWith({page: lastPage})\">\r\n        <mat-icon>last_page</mat-icon>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n";
      /***/
    },

    /***/
    "IoOo":
    /*!************************************************!*\
      !*** ./src/app/element/page-list.component.ts ***!
      \************************************************/

    /*! exports provided: PageListComponent */

    /***/
    function IoOo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageListComponent", function () {
        return PageListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_page_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./page-list.component.html */
      "0r1B");
      /* harmony import */


      var _page_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./page-list.component.scss */
      "uKbV");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/http.service */
      "9NvV");

      var PageListComponent = /*#__PURE__*/function () {
        function PageListComponent() {
          _classCallCheck(this, PageListComponent);

          this.apiParams = {};
          this.pageSize = 7;
          this.prevPages = [];
          this.nextPages = [];
          this.isLoading = false;
        }

        _createClass(PageListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getListWith();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var changed = false;
            Object.keys(changes).forEach(function (key) {
              if (changes[key].previousValue && !lodash__WEBPACK_IMPORTED_MODULE_3__["isEqual"](changes[key].previousValue, changes[key].currentValue)) {
                changed = true;
              }
            });

            if (changed) {
              this.getListWith();
            }
          }
        }, {
          key: "getListWith",
          value: function getListWith() {
            var _this = this;

            var baseParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.isLoading = true;

            if (this.subscribed) {
              this.subscribed.unsubscribe();
            }

            this.subscribed = src_app_service_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"].api().get(this.apiUrl, {
              params: lodash__WEBPACK_IMPORTED_MODULE_3__["merge"]({}, baseParams, this.apiParams)
            }).subscribe(function (res) {
              _this.isLoading = false;
              _this.items = res.data;
              _this.currentPage = res.current_page;
              _this.lastPage = res.last_page;
              _this.totalCount = res.total;

              if (_this.pageSize % 2 == 0) {
                _this.pageSize = _this.pageSize + 1;
              }

              var limit = (_this.pageSize - 1) / 2;
              var i = 1;
              var j = 1;
              var k = 0;
              var l = 0;
              _this.prevPages = [];
              _this.nextPages = [];

              for (; _this.currentPage - i >= 1 && i <= limit; i++) {
                _this.prevPages.unshift(_this.currentPage - i);
              }

              for (; _this.currentPage + j <= _this.lastPage && j <= limit; j++) {
                _this.nextPages.push(_this.currentPage + j);
              }

              for (; _this.currentPage - i - k >= 1 && k < limit - _this.nextPages.length; k++) {
                _this.prevPages.unshift(_this.currentPage - i - k);
              }

              for (; _this.currentPage + j + l <= _this.lastPage && l < limit - _this.prevPages.length; l++) {
                _this.nextPages.push(_this.currentPage + j + l);
              }
            });
          }
        }]);

        return PageListComponent;
      }();

      PageListComponent.propDecorators = {
        itemListEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: ['itemListEl']
        }],
        apiParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['apiParams']
        }],
        apiUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['apiUrl']
        }]
      };
      PageListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'page-list',
        template: _raw_loader_page_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_page_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PageListComponent);
      /***/
    },

    /***/
    "MxQI":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/list/clip.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function MxQI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n  <h2>유저 클립 영상</h2>\r\n  <nav mat-tab-nav-bar>\r\n    <a mat-tab-link [active]=\"search.order_by == undefined\" [queryParams]=\"{order_by: undefined}\" [routerLink]=\"['./']\">\r\n      최근 순\r\n    </a>\r\n    <a mat-tab-link [active]=\"search.order_by == 'like_count desc'\" [queryParams]=\"{order_by: 'like_count desc'}\" [routerLink]=\"['./']\">\r\n      좋아요 많은 순\r\n    </a>\r\n  </nav>\r\n</div>\r\n<route-page-list #pageList [apiUrl]=\"'clips'\" [apiParams]=\"{\r\n  expands: 'vod, user',\r\n  limit: 20\r\n}\">\r\n  <ng-template #itemListEl>\r\n    <ng-container *ngFor=\"let item of pageList.items\">\r\n      <div *ngIf=\"item.isExist\" class=\"ytb-vod-item\" fxFlex=\"0 0 calc(25% - 20px)\">\r\n        <mat-menu #moreMenu xPosition=\"before\">\r\n          <button mat-menu-item (click)=\"item.delete$().subscribe()\">\r\n            삭제\r\n          </button>\r\n        </mat-menu>\r\n        <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\" *ngIf=\"authService.getUser() && authService.getUser().getAttrs().id == item.getRelations().user.getAttrs().id\">\r\n          <mat-icon>\r\n            more_horiz\r\n          </mat-icon>\r\n        </button>\r\n        <mat-menu #userMenu xPosition=\"after\">\r\n          <button mat-menu-item [routerLink]=\"['/users/', item.getRelations().user.getAttrs().id]\">\r\n            프로필 보기\r\n          </button>\r\n        </mat-menu>\r\n        <mat-card [routerLink]=\"['/clips/', item.getAttrs().id]\">\r\n          <img mat-card-image src=\"{{item.getRelations().vod.getAttrs().thumbnail}}\" />\r\n          <mat-card-content>\r\n            <a [matMenuTriggerFor]=\"userMenu\" class=\"text-left small font-weight-bold mb-1 d-block\" (click)=\"$event.stopPropagation()\">\r\n              {{item.getRelations().user.getAttrs().nick}}\r\n            </a>\r\n            <p class=\"text-ellipsis\">\r\n              {{item.getRelations().vod.getAttrs().title}}\r\n            </p>\r\n            <p>\r\n              {{item.getAttrs().created_at.substr(0, 16)}}\r\n            </p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n    </ng-container>\r\n  </ng-template>\r\n</route-page-list>\r\n";
      /***/
    },

    /***/
    "ZEjg":
    /*!*********************************************!*\
      !*** ./src/app/content/list/clip.module.ts ***!
      \*********************************************/

    /*! exports provided: ClipListModule */

    /***/
    function ZEjg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClipListModule", function () {
        return ClipListModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/material.module */
      "vvyD");
      /* harmony import */


      var src_app_element_route_page_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/element/route-page-list.module */
      "TNll");
      /* harmony import */


      var _clip_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./clip.component */
      "hUL5");

      var routes = [{
        path: '',
        component: _clip_component__WEBPACK_IMPORTED_MODULE_7__["ClipListComponent"]
      }];

      var ClipListModule = function ClipListModule() {
        _classCallCheck(this, ClipListModule);
      };

      ClipListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_clip_component__WEBPACK_IMPORTED_MODULE_7__["ClipListComponent"]],
        exports: [_clip_component__WEBPACK_IMPORTED_MODULE_7__["ClipListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], src_app_element_route_page_list_module__WEBPACK_IMPORTED_MODULE_6__["RoutePageListModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)]
      })], ClipListModule);
      /***/
    },

    /***/
    "hUL5":
    /*!************************************************!*\
      !*** ./src/app/content/list/clip.component.ts ***!
      \************************************************/

    /*! exports provided: ClipListComponent */

    /***/
    function hUL5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClipListComponent", function () {
        return ClipListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_clip_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./clip.component.html */
      "MxQI");
      /* harmony import */


      var _clip_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./clip.component.scss */
      "heaj");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/service/auth.service */
      "6uu6");

      var ClipListComponent = /*#__PURE__*/function () {
        function ClipListComponent(route, router) {
          var _this2 = this;

          _classCallCheck(this, ClipListComponent);

          this.route = route;
          this.setSearchSub = router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__["NavigationEnd"];
          })).subscribe(function (event) {
            _this2.search = lodash__WEBPACK_IMPORTED_MODULE_3__["merge"]({}, route.snapshot.queryParams);
          });
          this.authService = src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"];
        }

        _createClass(ClipListComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.setSearchSub.unsubscribe();
          }
        }]);

        return ClipListComponent;
      }();

      ClipListComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      ClipListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        template: _raw_loader_clip_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_clip_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ClipListComponent);
      /***/
    },

    /***/
    "heaj":
    /*!**************************************************!*\
      !*** ./src/app/content/list/clip.component.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function heaj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "mat-card-content {\n  margin-top: -10px;\n}";
      /***/
    },

    /***/
    "uKbV":
    /*!**************************************************!*\
      !*** ./src/app/element/page-list.component.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function uKbV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".pagination-wrap {\n  margin-top: 10px;\n}\n\n.pagination {\n  margin: 0px auto;\n}\n\n.pagination li {\n  list-style: none;\n}\n\n.pagination li a {\n  padding: 0px;\n  min-width: 36px;\n}";
      /***/
    }
  }]);
})();