(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "PT+X":
/*!*************************************************************!*\
  !*** ./src/app/content/vod-player/pubg-game.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "cxZH":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/vod-player/pubg-game.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vod-container [vod]=\"game.getRelations().vod\">\r\n  <ng-template #vodPlayerEl>\r\n    <vod-player [vod]=\"game.getRelations().vod\">\r\n    </vod-player>\r\n  </ng-template>\r\n  <ng-template #vodInfoTabEl>\r\n    <vod-game-info>\r\n      <ng-template #gameTimelineTabEl>\r\n        <mat-list-item *ngFor=\"let timeline of game.getRelations().timelines\" (click)=\"seek(timeline.getAttrs().elapsed_sec-7)\">\r\n          {{getElapsedTimeBySec(timeline.getAttrs().elapsed_sec)}} - {{timeline.getAttrs().type}}\r\n        </mat-list-item>\r\n      </ng-template>\r\n      <ng-template #gameResultTabEl>\r\n        <h3>게임 정보</h3>\r\n        <div>\r\n          <p>큐 사이즈: {{gameInfo.queue_size}}</p>\r\n        </div>\r\n        <h3>성과</h3>\r\n        <div>\r\n          <p>랭킹: {{gameInfo.participant.stats.rank}} 등</p>\r\n          <p>공격량: {{gameInfo.participant.stats.combat.damage.damage_dealt}}</p>\r\n          <p>기절 횟수: {{gameInfo.participant.stats.combat.dbno.knock_downs}} 회</p>\r\n          <p>킬 수: {{gameInfo.participant.stats.combat.kda.kills}} 회</p>\r\n          <p>어시스트 수: {{gameInfo.participant.stats.combat.kda.assists}} 회</p>\r\n          <p>헤드샷 수: {{gameInfo.participant.stats.combat.kda.headshot_kills}} 회</p>\r\n        </div>\r\n      </ng-template>\r\n    </vod-game-info>\r\n  </ng-template>\r\n</vod-container>\r\n");

/***/ }),

/***/ "f46b":
/*!***********************************************************!*\
  !*** ./src/app/content/vod-player/pubg-game.component.ts ***!
  \***********************************************************/
/*! exports provided: PubgGameVodPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PubgGameVodPlayerComponent", function() { return PubgGameVodPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pubg_game_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pubg-game.component.html */ "cxZH");
/* harmony import */ var _pubg_game_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubg-game.component.scss */ "PT+X");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_element_vod_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/element/vod-container.component */ "J3+/");
/* harmony import */ var src_app_element_vod_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/element/vod/player.component */ "urd5");







let PubgGameVodPlayerComponent = class PubgGameVodPlayerComponent {
    constructor(route) {
        this.game = route.snapshot.data.game;
        this.gameInfo = route.snapshot.data.gameInfo;
    }
    getElapsedTimeBySec(sec) {
        return parseInt(String(sec / 60)) + ':' + parseInt(String(sec % 60));
    }
    seek(second) {
        this.vodPlayer.seek(second);
    }
};
PubgGameVodPlayerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
PubgGameVodPlayerComponent.propDecorators = {
    vodContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [src_app_element_vod_container_component__WEBPACK_IMPORTED_MODULE_5__["VodContainerComponent"],] }],
    vodPlayer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [src_app_element_vod_player_component__WEBPACK_IMPORTED_MODULE_6__["VodPlayerComponent"],] }]
};
PubgGameVodPlayerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_pubg_game_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pubg_game_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PubgGameVodPlayerComponent);



/***/ }),

/***/ "tsAi":
/*!********************************************************!*\
  !*** ./src/app/content/vod-player/pubg-game.module.ts ***!
  \********************************************************/
/*! exports provided: PubgGameVodPlayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PubgGameVodPlayerModule", function() { return PubgGameVodPlayerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/material.module */ "vvyD");
/* harmony import */ var _pubg_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pubg-game.component */ "f46b");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");
/* harmony import */ var src_app_element_vod_container_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/element/vod-container.module */ "vMEg");
/* harmony import */ var src_app_element_vod_game_info_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/element/vod/game-info.module */ "62yl");
/* harmony import */ var src_app_element_vod_player_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/element/vod/player.module */ "M0AG");












const routes = [{
        path: '',
        component: _pubg_game_component__WEBPACK_IMPORTED_MODULE_7__["PubgGameVodPlayerComponent"],
        resolve: {
            game: 'game$$',
            gameInfo: 'gameInfo$$'
        }
    }];
let PubgGameVodPlayerModule = class PubgGameVodPlayerModule {
};
PubgGameVodPlayerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _pubg_game_component__WEBPACK_IMPORTED_MODULE_7__["PubgGameVodPlayerComponent"]
        ],
        exports: [
            _pubg_game_component__WEBPACK_IMPORTED_MODULE_7__["PubgGameVodPlayerComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            src_app_element_vod_container_module__WEBPACK_IMPORTED_MODULE_9__["VodContainerModule"],
            src_app_element_vod_game_info_module__WEBPACK_IMPORTED_MODULE_10__["VodGameInfoModule"],
            src_app_element_vod_player_module__WEBPACK_IMPORTED_MODULE_11__["VodPlayerModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        providers: [{
                provide: 'game$$',
                useValue: (snapshot) => {
                    return src_app_service_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"].api().get('pubg-games/' + snapshot.params.id, {
                        params: {
                            expands: 'vod.like, vod.bcast.bj, timelines',
                            fields: 'id, summary'
                        }
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((game) => {
                        const timelines = lodash__WEBPACK_IMPORTED_MODULE_1__["chain"](game.getRelations().timelines).orderBy([(timeline) => timeline.getAttrs().elapsed_sec], ['asc']).value();
                        game.setRelation('timelines', timelines);
                        return game;
                    }));
                }
            }, {
                provide: 'gameInfo$$',
                deps: ['game$$'],
                useFactory: (game$$) => {
                    return (snapshot) => {
                        return game$$(snapshot).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((game) => {
                            return JSON.parse(game.getAttrs().summary);
                        }));
                    };
                }
            }]
    })
], PubgGameVodPlayerModule);



/***/ })

}]);