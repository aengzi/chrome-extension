(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26], {
    /***/
    "PT+X":
    /*!*************************************************************!*\
      !*** ./src/app/content/vod-player/pubg-game.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function PTX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    "cxZH":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/vod-player/pubg-game.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cxZH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<vod-container [vod]=\"game.getRelations().vod\">\r\n  <ng-template #vodPlayerEl>\r\n    <vod-player [vod]=\"game.getRelations().vod\">\r\n    </vod-player>\r\n  </ng-template>\r\n  <ng-template #vodInfoTabEl>\r\n    <vod-game-info>\r\n      <ng-template #gameTimelineTabEl>\r\n        <mat-list-item *ngFor=\"let timeline of game.getRelations().timelines\" (click)=\"seek(timeline.getAttrs().elapsed_sec-7)\">\r\n          {{getElapsedTimeBySec(timeline.getAttrs().elapsed_sec)}} - {{timeline.getAttrs().type}}\r\n        </mat-list-item>\r\n      </ng-template>\r\n      <ng-template #gameResultTabEl>\r\n        <h3>?????? ??????</h3>\r\n        <div>\r\n          <p>??? ?????????: {{gameInfo.queue_size}}</p>\r\n        </div>\r\n        <h3>??????</h3>\r\n        <div>\r\n          <p>??????: {{gameInfo.participant.stats.rank}} ???</p>\r\n          <p>?????????: {{gameInfo.participant.stats.combat.damage.damage_dealt}}</p>\r\n          <p>?????? ??????: {{gameInfo.participant.stats.combat.dbno.knock_downs}} ???</p>\r\n          <p>??? ???: {{gameInfo.participant.stats.combat.kda.kills}} ???</p>\r\n          <p>???????????? ???: {{gameInfo.participant.stats.combat.kda.assists}} ???</p>\r\n          <p>????????? ???: {{gameInfo.participant.stats.combat.kda.headshot_kills}} ???</p>\r\n        </div>\r\n      </ng-template>\r\n    </vod-game-info>\r\n  </ng-template>\r\n</vod-container>\r\n";
      /***/
    },

    /***/
    "f46b":
    /*!***********************************************************!*\
      !*** ./src/app/content/vod-player/pubg-game.component.ts ***!
      \***********************************************************/

    /*! exports provided: PubgGameVodPlayerComponent */

    /***/
    function f46b(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PubgGameVodPlayerComponent", function () {
        return PubgGameVodPlayerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_pubg_game_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./pubg-game.component.html */
      "cxZH");
      /* harmony import */


      var _pubg_game_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pubg-game.component.scss */
      "PT+X");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_element_vod_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/element/vod-container.component */
      "J3+/");
      /* harmony import */


      var src_app_element_vod_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/element/vod/player.component */
      "urd5");

      var PubgGameVodPlayerComponent = /*#__PURE__*/function () {
        function PubgGameVodPlayerComponent(route) {
          _classCallCheck(this, PubgGameVodPlayerComponent);

          this.game = route.snapshot.data.game;
          this.gameInfo = route.snapshot.data.gameInfo;
        }

        _createClass(PubgGameVodPlayerComponent, [{
          key: "getElapsedTimeBySec",
          value: function getElapsedTimeBySec(sec) {
            return parseInt(String(sec / 60)) + ':' + parseInt(String(sec % 60));
          }
        }, {
          key: "seek",
          value: function seek(second) {
            this.vodPlayer.seek(second);
          }
        }]);

        return PubgGameVodPlayerComponent;
      }();

      PubgGameVodPlayerComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      PubgGameVodPlayerComponent.propDecorators = {
        vodContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [src_app_element_vod_container_component__WEBPACK_IMPORTED_MODULE_5__["VodContainerComponent"]]
        }],
        vodPlayer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: [src_app_element_vod_player_component__WEBPACK_IMPORTED_MODULE_6__["VodPlayerComponent"]]
        }]
      };
      PubgGameVodPlayerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_pubg_game_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pubg_game_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PubgGameVodPlayerComponent);
      /***/
    },

    /***/
    "tsAi":
    /*!********************************************************!*\
      !*** ./src/app/content/vod-player/pubg-game.module.ts ***!
      \********************************************************/

    /*! exports provided: PubgGameVodPlayerModule */

    /***/
    function tsAi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PubgGameVodPlayerModule", function () {
        return PubgGameVodPlayerModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
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


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/material.module */
      "vvyD");
      /* harmony import */


      var _pubg_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pubg-game.component */
      "f46b");
      /* harmony import */


      var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/service/http.service */
      "9NvV");
      /* harmony import */


      var src_app_element_vod_container_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/element/vod-container.module */
      "vMEg");
      /* harmony import */


      var src_app_element_vod_game_info_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/element/vod/game-info.module */
      "62yl");
      /* harmony import */


      var src_app_element_vod_player_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/element/vod/player.module */
      "M0AG");

      var routes = [{
        path: '',
        component: _pubg_game_component__WEBPACK_IMPORTED_MODULE_7__["PubgGameVodPlayerComponent"],
        resolve: {
          game: 'game$$',
          gameInfo: 'gameInfo$$'
        }
      }];

      var PubgGameVodPlayerModule = function PubgGameVodPlayerModule() {
        _classCallCheck(this, PubgGameVodPlayerModule);
      };

      PubgGameVodPlayerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_pubg_game_component__WEBPACK_IMPORTED_MODULE_7__["PubgGameVodPlayerComponent"]],
        exports: [_pubg_game_component__WEBPACK_IMPORTED_MODULE_7__["PubgGameVodPlayerComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], src_app_element_vod_container_module__WEBPACK_IMPORTED_MODULE_9__["VodContainerModule"], src_app_element_vod_game_info_module__WEBPACK_IMPORTED_MODULE_10__["VodGameInfoModule"], src_app_element_vod_player_module__WEBPACK_IMPORTED_MODULE_11__["VodPlayerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        providers: [{
          provide: 'game$$',
          useValue: function useValue(snapshot) {
            return src_app_service_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"].api().get('pubg-games/' + snapshot.params.id, {
              params: {
                expands: 'vod.like, vod.bcast.bj, timelines',
                fields: 'id, summary'
              }
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (game) {
              var timelines = lodash__WEBPACK_IMPORTED_MODULE_1__["chain"](game.getRelations().timelines).orderBy([function (timeline) {
                return timeline.getAttrs().elapsed_sec;
              }], ['asc']).value();
              game.setRelation('timelines', timelines);
              return game;
            }));
          }
        }, {
          provide: 'gameInfo$$',
          deps: ['game$$'],
          useFactory: function useFactory(game$$) {
            return function (snapshot) {
              return game$$(snapshot).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (game) {
                return JSON.parse(game.getAttrs().summary);
              }));
            };
          }
        }]
      })], PubgGameVodPlayerModule);
      /***/
    }
  }]);
})();