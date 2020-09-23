(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "LZB0":
/*!*****************************************************!*\
  !*** ./src/app/content/user/sign-up.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-horizontal-stepper {\n  background-color: inherit;\n}");

/***/ }),

/***/ "OTqg":
/*!***************************************************!*\
  !*** ./src/app/content/user/sign-up.component.ts ***!
  \***************************************************/
/*! exports provided: UserSignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSignUpComponent", function() { return UserSignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sign_up_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sign-up.component.html */ "UFM1");
/* harmony import */ var _sign_up_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up.component.scss */ "LZB0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");
/* harmony import */ var src_app_service_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/storage.service */ "xOb2");









let UserSignUpComponent = class UserSignUpComponent {
    constructor(route) {
        this.emailCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', {
            validators: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email
            ],
            asyncValidators: [
                (control) => {
                    return src_app_service_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"].api().get('users', {
                        params: {
                            email: control.value
                        }
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((users) => {
                        return users.length != 0 ? { exist: true } : null;
                    }));
                }
            ]
        });
        this.passwordCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', {
            validators: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(32)
            ]
        });
        this.nickCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', {
            validators: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(12),
                (control) => {
                    return control.value.indexOf(' ') !== -1 ? { nospace: true } : null;
                },
            ],
            asyncValidators: [
                (control) => {
                    return src_app_service_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"].api().get('users', {
                        params: {
                            nick: control.value
                        }
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((users) => {
                        return users.length != 0 ? { exist: true } : null;
                    }));
                }
            ]
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: this.emailCtrl,
            password: this.passwordCtrl,
            nick: this.nickCtrl
        });
    }
    sendSignUpEmail() {
        src_app_service_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"].api().post('sign-up/emails', {
            email: this.emailCtrl.value,
            nick: this.nickCtrl.value,
            password: this.passwordCtrl.value,
        }).subscribe((token) => {
            this.token = token;
            this.stepper.next();
        });
    }
    signUp(token) {
        src_app_service_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"].api().post('sign-up', {
            token: token,
        }).subscribe(() => {
            src_app_service_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"].get('snack-bar').open('회원가입을 환영합니다. 로그인해주세요.', 'close', {
                duration: 5000,
                verticalPosition: 'bottom'
            });
            src_app_service_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"].get('router').navigate(['sign-in']);
        });
    }
};
UserSignUpComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
UserSignUpComponent.propDecorators = {
    stepper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['stepper',] }]
};
UserSignUpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_sign_up_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sign_up_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserSignUpComponent);



/***/ }),

/***/ "UFM1":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/user/sign-up.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n  <h2>회원가입</h2>\r\n</div>\r\n<mat-horizontal-stepper [linear]=\"true\" [disableRipple]=\"true\" #stepper>\r\n  <mat-step [stepControl]=\"form\" [editable]=\"false\">\r\n    <ng-template matStepLabel>회원가입</ng-template>\r\n    <div>\r\n      <mat-form-field appearance=\"outline\">\r\n        <mat-label>닉네임</mat-label>\r\n        <input matInput type=\"text\" placeholder=\"Nickname\" [formControl]=\"nickCtrl\" />\r\n        <mat-hint *ngIf=\"nickCtrl.touched && nickCtrl.invalid && nickCtrl.errors.__proto__.constructor.keys(nickCtrl.errors)[0] == 'required'\">\r\n          닉네임를 입력하세요.\r\n        </mat-hint>\r\n        <mat-hint *ngIf=\"nickCtrl.touched && nickCtrl.invalid && nickCtrl.errors.__proto__.constructor.keys(nickCtrl.errors)[0] == 'minlength'\">\r\n          최소 2글자를 입력하세요.\r\n        </mat-hint>\r\n        <mat-hint *ngIf=\"nickCtrl.touched && nickCtrl.invalid && nickCtrl.errors.__proto__.constructor.keys(nickCtrl.errors)[0] == 'maxlength'\">\r\n          최대 12글자를 입력하세요.\r\n        </mat-hint>\r\n        <mat-hint *ngIf=\"nickCtrl.touched && nickCtrl.invalid && nickCtrl.errors.__proto__.constructor.keys(nickCtrl.errors)[0] == 'nospace'\">\r\n          공백(whitespace)없이 입력하세요.\r\n        </mat-hint>\r\n        <mat-hint *ngIf=\"nickCtrl.touched && nickCtrl.invalid && nickCtrl.errors.__proto__.constructor.keys(nickCtrl.errors)[0] == 'exist'\">\r\n          이미 존재하는 닉네임 입니다.\r\n        </mat-hint>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field appearance=\"outline\">\r\n        <mat-label>이메일</mat-label>\r\n        <input matInput type=\"email\" placeholder=\"Email\" [formControl]=\"emailCtrl\" />\r\n        <mat-hint *ngIf=\"emailCtrl.touched && emailCtrl.invalid && emailCtrl.errors.__proto__.constructor.keys(emailCtrl.errors)[0] == 'required'\">\r\n          이메일을 입력하세요.\r\n        </mat-hint>\r\n        <mat-hint *ngIf=\"emailCtrl.touched && emailCtrl.invalid && emailCtrl.errors.__proto__.constructor.keys(emailCtrl.errors)[0] == 'email'\">\r\n          이메일 형식이 아닙니다.\r\n        </mat-hint>\r\n        <mat-hint *ngIf=\"emailCtrl.touched && emailCtrl.invalid && emailCtrl.errors.__proto__.constructor.keys(emailCtrl.errors)[0] == 'exist'\">\r\n          이미 존재하는 이메일 입니다.\r\n        </mat-hint>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <mat-form-field appearance=\"outline\">\r\n        <mat-label>비밀번호</mat-label>\r\n        <input matInput type=\"password\" placeholder=\"Password\" [formControl]=\"passwordCtrl\" />\r\n        <mat-hint *ngIf=\"passwordCtrl.touched && passwordCtrl.invalid && passwordCtrl.errors.__proto__.constructor.keys(passwordCtrl.errors)[0] == 'required'\">\r\n          비밀번호를 입력하세요.\r\n        </mat-hint>\r\n        <mat-hint *ngIf=\"passwordCtrl.touched && passwordCtrl.invalid && passwordCtrl.errors.__proto__.constructor.keys(passwordCtrl.errors)[0] == 'minlength'\">\r\n          최소 8글자를 입력하세요.\r\n        </mat-hint>\r\n        <mat-hint *ngIf=\"passwordCtrl.touched && passwordCtrl.invalid && passwordCtrl.errors.__proto__.constructor.keys(passwordCtrl.errors)[0] == 'maxlength'\">\r\n          최대 32글자를 입력하세요.\r\n        </mat-hint>\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <button mat-button mat-raised-button color=\"primary\" [disabled]=\"form.invalid\" (click)=\"sendSignUpEmail()\">다음</button>\r\n    </div>\r\n  </mat-step>\r\n  <mat-step [editable]=\"false\">\r\n    <ng-template matStepLabel>이메일 확인</ng-template>\r\n    <email-verifier (success)=\"signUp($event)\" [token]=\"token\"></email-verifier>\r\n  </mat-step>\r\n</mat-horizontal-stepper>\r\n\r\n");

/***/ }),

/***/ "Y9ap":
/*!************************************************!*\
  !*** ./src/app/content/user/sign-up.module.ts ***!
  \************************************************/
/*! exports provided: UserSignUpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSignUpModule", function() { return UserSignUpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/material.module */ "vvyD");
/* harmony import */ var _sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-up.component */ "OTqg");
/* harmony import */ var src_app_element_email_verifier_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/element/email-verifier.module */ "yK5u");









const routes = [{
        path: '',
        component: _sign_up_component__WEBPACK_IMPORTED_MODULE_7__["UserSignUpComponent"]
    }];
let UserSignUpModule = class UserSignUpModule {
};
UserSignUpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _sign_up_component__WEBPACK_IMPORTED_MODULE_7__["UserSignUpComponent"]
        ],
        exports: [
            _sign_up_component__WEBPACK_IMPORTED_MODULE_7__["UserSignUpComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            src_app_element_email_verifier_module__WEBPACK_IMPORTED_MODULE_8__["EmailVerifierModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ]
    })
], UserSignUpModule);



/***/ })

}]);