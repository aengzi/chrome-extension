(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "5V9Z":
/*!***********************************************************!*\
  !*** ./src/app/element/user-data/show/email.component.ts ***!
  \***********************************************************/
/*! exports provided: EmailShowUserDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailShowUserDataComponent", function() { return EmailShowUserDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_email_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./email.component.html */ "Qktg");
/* harmony import */ var _email_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email.component.scss */ "UINE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_element_user_data_show_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/element/user-data/show.component */ "dJuh");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/auth.service */ "6uu6");






let EmailShowUserDataComponent = class EmailShowUserDataComponent extends src_app_element_user_data_show_component__WEBPACK_IMPORTED_MODULE_4__["UserDataShowComponent"] {
    constructor() {
        super();
        this.authService = src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"];
    }
};
EmailShowUserDataComponent.ctorParameters = () => [];
EmailShowUserDataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_email_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_email_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmailShowUserDataComponent);



/***/ }),

/***/ "HDsC":
/*!********************************************************!*\
  !*** ./src/app/element/user-data/show/email.module.ts ***!
  \********************************************************/
/*! exports provided: EmailShowUserDataModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailShowUserDataModule", function() { return EmailShowUserDataModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/material.module */ "vvyD");
/* harmony import */ var _email_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./email.component */ "5V9Z");








const routes = [{
        path: '',
        component: _email_component__WEBPACK_IMPORTED_MODULE_7__["EmailShowUserDataComponent"]
    }];
let EmailShowUserDataModule = class EmailShowUserDataModule {
};
EmailShowUserDataModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _email_component__WEBPACK_IMPORTED_MODULE_7__["EmailShowUserDataComponent"]
        ],
        exports: [
            _email_component__WEBPACK_IMPORTED_MODULE_7__["EmailShowUserDataComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ]
    })
], EmailShowUserDataModule);



/***/ }),

/***/ "Qktg":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/element/user-data/show/email.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  {{authService.getUser().getAttrs().email}}\r\n</p>\r\n");

/***/ }),

/***/ "UINE":
/*!*************************************************************!*\
  !*** ./src/app/element/user-data/show/email.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);