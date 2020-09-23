(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14], {
    /***/
    "NB2b":
    /*!*******************************************************!*\
      !*** ./src/app/content/list/post/vote.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function NB2b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    "WURj":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/list/post/vote.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function WURj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "vote board\r\n";
      /***/
    },

    /***/
    "ZOl6":
    /*!*****************************************************!*\
      !*** ./src/app/content/list/post/vote.component.ts ***!
      \*****************************************************/

    /*! exports provided: VotePostListComponent */

    /***/
    function ZOl6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VotePostListComponent", function () {
        return VotePostListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_vote_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./vote.component.html */
      "WURj");
      /* harmony import */


      var _vote_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vote.component.scss */
      "NB2b");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var VotePostListComponent = function VotePostListComponent() {
        _classCallCheck(this, VotePostListComponent);
      };

      VotePostListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_vote_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_vote_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VotePostListComponent);
      /***/
    },

    /***/
    "fbFQ":
    /*!**************************************************!*\
      !*** ./src/app/content/list/post/vote.module.ts ***!
      \**************************************************/

    /*! exports provided: VotePostListModule */

    /***/
    function fbFQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VotePostListModule", function () {
        return VotePostListModule;
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


      var _vote_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./vote.component */
      "ZOl6");

      var routes = [{
        path: '',
        component: _vote_component__WEBPACK_IMPORTED_MODULE_6__["VotePostListComponent"]
      }];

      var VotePostListModule = function VotePostListModule() {
        _classCallCheck(this, VotePostListModule);
      };

      VotePostListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_vote_component__WEBPACK_IMPORTED_MODULE_6__["VotePostListComponent"]],
        exports: [_vote_component__WEBPACK_IMPORTED_MODULE_6__["VotePostListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)]
      })], VotePostListModule);
      /***/
    }
  }]);
})();