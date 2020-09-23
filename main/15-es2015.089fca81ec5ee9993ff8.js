(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "5Lhg":
/*!****************************************************!*\
  !*** ./src/app/content/list/section-vod.module.ts ***!
  \****************************************************/
/*! exports provided: SectionVodListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionVodListModule", function() { return SectionVodListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material.module */ "vvyD");
/* harmony import */ var _section_vod_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./section-vod.component */ "nA5v");







const routes = [{
        path: '',
        component: _section_vod_component__WEBPACK_IMPORTED_MODULE_6__["SectionVodListComponent"],
        children: [{
                path: 'lol-games',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! src/app/content/list/section-vod/lol-game.module */ "+5EN")).then(mod => mod.LolGameSectionVodListModule)
            }, {
                path: 'pubg-games',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, /*! src/app/content/list/section-vod/pubg-game.module */ "63MP")).then(mod => mod.PubgGameSectionVodListModule)
            }, {
                path: '',
                redirectTo: 'lol-games'
            }]
    }];
let SectionVodListModule = class SectionVodListModule {
};
SectionVodListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _section_vod_component__WEBPACK_IMPORTED_MODULE_6__["SectionVodListComponent"]
        ],
        exports: [
            _section_vod_component__WEBPACK_IMPORTED_MODULE_6__["SectionVodListComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ]
    })
], SectionVodListModule);



/***/ }),

/***/ "RFf9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/list/section-vod.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n  <h2>주제별 부분영상</h2>\r\n  <nav mat-tab-nav-bar>\r\n    <a mat-tab-link #rla1=\"routerLinkActive\" [routerLink]=\"['/section/lol-games']\" [active]=\"rla1.isActive\" routerLinkActive>\r\n      리그 오브 레전드\r\n    </a>\r\n    <a mat-tab-link #rla2=\"routerLinkActive\" [routerLink]=\"['/section/pubg-games']\" [active]=\"rla2.isActive\" routerLinkActive>\r\n      배틀그라운드\r\n    </a>\r\n  </nav>\r\n</div>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "mKm5":
/*!*********************************************************!*\
  !*** ./src/app/content/list/section-vod.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "nA5v":
/*!*******************************************************!*\
  !*** ./src/app/content/list/section-vod.component.ts ***!
  \*******************************************************/
/*! exports provided: SectionVodListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionVodListComponent", function() { return SectionVodListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_section_vod_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./section-vod.component.html */ "RFf9");
/* harmony import */ var _section_vod_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./section-vod.component.scss */ "mKm5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SectionVodListComponent = class SectionVodListComponent {
};
SectionVodListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_section_vod_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_section_vod_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SectionVodListComponent);



/***/ })

}]);