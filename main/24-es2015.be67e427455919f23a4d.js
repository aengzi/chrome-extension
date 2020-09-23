(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "2+Mk":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/vod-player/clip.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<vod-container [vod]=\"clip.getRelations().vod\">\r\n  <ng-template #vodPlayerEl>\r\n    <vod-player [vod]=\"clip.getRelations().vod\">\r\n    </vod-player>\r\n  </ng-template>\r\n</vod-container>\r\n");

/***/ }),

/***/ "N18w":
/*!******************************************************!*\
  !*** ./src/app/content/vod-player/clip.component.ts ***!
  \******************************************************/
/*! exports provided: ClipVodPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipVodPlayerComponent", function() { return ClipVodPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_clip_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./clip.component.html */ "2+Mk");
/* harmony import */ var _clip_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clip.component.scss */ "YSWB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_element_vod_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/element/vod-container.component */ "J3+/");
/* harmony import */ var src_app_element_vod_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/element/vod/player.component */ "urd5");







let ClipVodPlayerComponent = class ClipVodPlayerComponent {
    constructor(route) {
        this.clip = route.snapshot.data.clip;
    }
    getElapsedTimeBySec(sec) {
        return parseInt(String(sec / 60)) + ':' + parseInt(String(sec % 60));
    }
    seek(second) {
        this.vodPlayer.seek(second);
    }
};
ClipVodPlayerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ClipVodPlayerComponent.propDecorators = {
    vodContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [src_app_element_vod_container_component__WEBPACK_IMPORTED_MODULE_5__["VodContainerComponent"],] }],
    vodPlayer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [src_app_element_vod_player_component__WEBPACK_IMPORTED_MODULE_6__["VodPlayerComponent"],] }]
};
ClipVodPlayerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_clip_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_clip_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ClipVodPlayerComponent);



/***/ }),

/***/ "YSWB":
/*!********************************************************!*\
  !*** ./src/app/content/vod-player/clip.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "ZQgn":
/*!***************************************************!*\
  !*** ./src/app/content/vod-player/clip.module.ts ***!
  \***************************************************/
/*! exports provided: ClipVodPlayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipVodPlayerModule", function() { return ClipVodPlayerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/material.module */ "vvyD");
/* harmony import */ var _clip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clip.component */ "N18w");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");
/* harmony import */ var src_app_element_vod_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/element/vod-container.module */ "vMEg");
/* harmony import */ var src_app_element_vod_player_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/element/vod/player.module */ "M0AG");









const routes = [{
        path: '',
        component: _clip_component__WEBPACK_IMPORTED_MODULE_5__["ClipVodPlayerComponent"],
        resolve: {
            clip: 'clip$$'
        }
    }];
let ClipVodPlayerModule = class ClipVodPlayerModule {
};
ClipVodPlayerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _clip_component__WEBPACK_IMPORTED_MODULE_5__["ClipVodPlayerComponent"]
        ],
        exports: [
            _clip_component__WEBPACK_IMPORTED_MODULE_5__["ClipVodPlayerComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            src_app_element_vod_container_module__WEBPACK_IMPORTED_MODULE_7__["VodContainerModule"],
            src_app_element_vod_player_module__WEBPACK_IMPORTED_MODULE_8__["VodPlayerModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        providers: [{
                provide: 'clip$$',
                useValue: (snapshot) => {
                    return src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"].api().get('clips/' + snapshot.params.id, {
                        params: {
                            expands: 'vod.like, vod.bcast.bj, vod.like, user'
                        }
                    });
                }
            }]
    })
], ClipVodPlayerModule);



/***/ })

}]);