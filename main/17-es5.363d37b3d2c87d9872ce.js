(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17], {
    /***/
    "FSrk":
    /*!*********************************************************!*\
      !*** ./src/app/content/list/youtube/video.component.ts ***!
      \*********************************************************/

    /*! exports provided: YoutubeVideoListComponent */

    /***/
    function FSrk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "YoutubeVideoListComponent", function () {
        return YoutubeVideoListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_video_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./video.component.html */
      "NyAi");
      /* harmony import */


      var _video_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./video.component.scss */
      "r5kD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var YoutubeVideoListComponent = function YoutubeVideoListComponent() {
        _classCallCheck(this, YoutubeVideoListComponent);

        this.apiParams = {
          limit: 20
        };
      };

      YoutubeVideoListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_video_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_video_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], YoutubeVideoListComponent);
      /***/
    },

    /***/
    "IsHB":
    /*!******************************************************!*\
      !*** ./src/app/content/list/youtube/video.module.ts ***!
      \******************************************************/

    /*! exports provided: YoutubeVideoListModule */

    /***/
    function IsHB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "YoutubeVideoListModule", function () {
        return YoutubeVideoListModule;
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


      var _video_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./video.component */
      "FSrk");

      var routes = [{
        path: '',
        component: _video_component__WEBPACK_IMPORTED_MODULE_7__["YoutubeVideoListComponent"]
      }];

      var YoutubeVideoListModule = function YoutubeVideoListModule() {
        _classCallCheck(this, YoutubeVideoListModule);
      };

      YoutubeVideoListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_video_component__WEBPACK_IMPORTED_MODULE_7__["YoutubeVideoListComponent"]],
        exports: [_video_component__WEBPACK_IMPORTED_MODULE_7__["YoutubeVideoListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], src_app_element_route_page_list_module__WEBPACK_IMPORTED_MODULE_6__["RoutePageListModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)]
      })], YoutubeVideoListModule);
      /***/
    },

    /***/
    "NyAi":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/list/youtube/video.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NyAi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<route-page-list #pageList [apiUrl]=\"'youtube-videos'\" [apiParams]=\"apiParams\">\r\n  <ng-template #itemListEl>\r\n    <div class=\"ytb-vod-item\" fxFlex=\"0 0 calc(25% - 20px)\" *ngFor=\"let item of pageList.items\">\r\n      <mat-card routerLink=\"/youtube/videos/{{item.getAttrs().id}}\">\r\n        <img mat-card-image src=\"{{item.getAttrs().thumbnail}}\" />\r\n        <mat-card-content>\r\n          <p class=\"text-ellipsis\">\r\n            {{item.getAttrs().title}}\r\n          </p>\r\n          <p>\r\n            {{item.getAttrs().created_at.substr(0, 16)}}\r\n          </p>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </ng-template>\r\n</route-page-list>\r\n";
      /***/
    },

    /***/
    "r5kD":
    /*!***********************************************************!*\
      !*** ./src/app/content/list/youtube/video.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function r5kD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    }
  }]);
})();