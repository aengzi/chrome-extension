(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23], {
    /***/
    "5mDy":
    /*!*********************************************************!*\
      !*** ./src/app/content/vod-player/aftv-bcast.module.ts ***!
      \*********************************************************/

    /*! exports provided: AftvBcastVodPlayerModule */

    /***/
    function mDy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AftvBcastVodPlayerModule", function () {
        return AftvBcastVodPlayerModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/material.module */
      "vvyD");
      /* harmony import */


      var _aftv_bcast_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./aftv-bcast.component */
      "W6lD");
      /* harmony import */


      var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/service/http.service */
      "9NvV");
      /* harmony import */


      var src_app_element_vod_container_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/element/vod-container.module */
      "vMEg");
      /* harmony import */


      var src_app_element_vod_player_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/element/vod/player.module */
      "M0AG");
      /* harmony import */


      var src_app_element_button_like_or_dislike_group_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/element/button/like-or-dislike-group.module */
      "fIQ1");
      /* harmony import */


      var src_app_element_comment_thread_container_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/element/comment/thread-container.module */
      "Bvh2");

      var routes = [{
        path: '',
        component: _aftv_bcast_component__WEBPACK_IMPORTED_MODULE_6__["AftvBcastVodPlayerComponent"],
        resolve: {
          bcast: 'bcast$$'
        }
      }];

      var AftvBcastVodPlayerModule = function AftvBcastVodPlayerModule() {
        _classCallCheck(this, AftvBcastVodPlayerModule);
      };

      AftvBcastVodPlayerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_aftv_bcast_component__WEBPACK_IMPORTED_MODULE_6__["AftvBcastVodPlayerComponent"]],
        exports: [_aftv_bcast_component__WEBPACK_IMPORTED_MODULE_6__["AftvBcastVodPlayerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], src_app_element_vod_container_module__WEBPACK_IMPORTED_MODULE_8__["VodContainerModule"], src_app_element_vod_player_module__WEBPACK_IMPORTED_MODULE_9__["VodPlayerModule"], src_app_element_button_like_or_dislike_group_module__WEBPACK_IMPORTED_MODULE_10__["LikeOrDislikeButtonGroupModule"], src_app_element_comment_thread_container_module__WEBPACK_IMPORTED_MODULE_11__["CommentThreadContainerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        providers: [{
          provide: 'bcast$$',
          useValue: function useValue(snapshot) {
            return src_app_service_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"].api().get('aftv-bcasts/' + snapshot.params.id, {
              params: {
                expands: 'vod, vod.like, bj'
              }
            });
          }
        }]
      })], AftvBcastVodPlayerModule);
      /***/
    },

    /***/
    "JM8f":
    /*!**************************************************************!*\
      !*** ./src/app/content/vod-player/aftv-bcast.component.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function JM8f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    "W6lD":
    /*!************************************************************!*\
      !*** ./src/app/content/vod-player/aftv-bcast.component.ts ***!
      \************************************************************/

    /*! exports provided: AftvBcastVodPlayerComponent */

    /***/
    function W6lD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AftvBcastVodPlayerComponent", function () {
        return AftvBcastVodPlayerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_aftv_bcast_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./aftv-bcast.component.html */
      "tEEL");
      /* harmony import */


      var _aftv_bcast_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./aftv-bcast.component.scss */
      "JM8f");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_element_vod_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/element/vod-container.component */
      "J3+/");

      var AftvBcastVodPlayerComponent = /*#__PURE__*/function () {
        function AftvBcastVodPlayerComponent(route, router) {
          var _this = this;

          _classCallCheck(this, AftvBcastVodPlayerComponent);

          this.routerSub = router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"];
          })).subscribe(function (event) {
            _this.bcast = route.snapshot.data.bcast;
          });
        }

        _createClass(AftvBcastVodPlayerComponent, [{
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.routerSub.unsubscribe();
          }
        }]);

        return AftvBcastVodPlayerComponent;
      }();

      AftvBcastVodPlayerComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      AftvBcastVodPlayerComponent.propDecorators = {
        vodContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [src_app_element_vod_container_component__WEBPACK_IMPORTED_MODULE_6__["VodContainerComponent"]]
        }]
      };
      AftvBcastVodPlayerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_aftv_bcast_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_aftv_bcast_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AftvBcastVodPlayerComponent);
      /***/
    },

    /***/
    "tEEL":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/vod-player/aftv-bcast.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tEEL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<vod-container [vod]=\"bcast.getRelations().vod\">\r\n  <ng-template #vodPlayerEl>\r\n    <vod-player [vod]=\"bcast.getRelations().vod\">\r\n    </vod-player>\r\n  </ng-template>\r\n</vod-container>\r\n";
      /***/
    }
  }]);
})();