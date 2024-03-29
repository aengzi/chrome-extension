(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "/D0C":
/*!*******************************************************!*\
  !*** ./src/app/element/email-verifier.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "0y/e":
/*!*****************************************************!*\
  !*** ./src/app/element/email-verifier.component.ts ***!
  \*****************************************************/
/*! exports provided: EmailVerifierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVerifierComponent", function() { return EmailVerifierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_email_verifier_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./email-verifier.component.html */ "adwP");
/* harmony import */ var _email_verifier_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-verifier.component.scss */ "/D0C");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








let EmailVerifierComponent = class EmailVerifierComponent {
    constructor() {
        this.isSubmitting = false;
        this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.codeCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', {
            validators: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                (control) => {
                    if (control.value.length != 6) {
                        return { length: true };
                    }
                }
            ],
            asyncValidators: [
                (control) => {
                    if (control.errors) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({});
                    }
                    return src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"].api().patch('email-tokens', {
                        token: this.token,
                        code: control.value
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((token) => {
                        if (token) {
                            this.verifiedToken = token;
                            this.success.emit(token);
                            if (this.success.observers.length > 0) {
                                this.isSubmitting = true;
                            }
                            return {};
                        }
                        else {
                            return { invalid: true };
                        }
                    }));
                }
            ]
        });
    }
};
EmailVerifierComponent.ctorParameters = () => [];
EmailVerifierComponent.propDecorators = {
    token: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['token',] }],
    success: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['success',] }]
};
EmailVerifierComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'email-verifier',
        template: _raw_loader_email_verifier_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_email_verifier_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EmailVerifierComponent);



/***/ }),

/***/ "17jb":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/element/button/like-or-dislike-group.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-content></ng-content>\r\n");

/***/ }),

/***/ "2iHH":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/element/vod/game-info.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group (selectedIndexChange)=\"tabIndex = $event\">\r\n  <mat-tab label=\"타임라인\">\r\n  </mat-tab>\r\n  <mat-tab label=\"게임정보\">\r\n  </mat-tab>\r\n</mat-tab-group>\r\n<mat-nav-list *ngIf=\"tabIndex == 0\">\r\n  <ng-container *ngTemplateOutlet=\"gameTimelineTabEl\"></ng-container>\r\n</mat-nav-list>\r\n<mat-list *ngIf=\"tabIndex == 1\">\r\n  <ng-container *ngTemplateOutlet=\"gameResultTabEl\"></ng-container>\r\n</mat-list>\r\n");

/***/ }),

/***/ "62yl":
/*!*************************************************!*\
  !*** ./src/app/element/vod/game-info.module.ts ***!
  \*************************************************/
/*! exports provided: VodGameInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VodGameInfoModule", function() { return VodGameInfoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/material.module */ "vvyD");
/* harmony import */ var src_app_element_vod_game_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/element/vod/game-info.component */ "f4an");






let VodGameInfoModule = class VodGameInfoModule {
};
VodGameInfoModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            src_app_element_vod_game_info_component__WEBPACK_IMPORTED_MODULE_5__["VodGameInfoComponent"]
        ],
        exports: [
            src_app_element_vod_game_info_component__WEBPACK_IMPORTED_MODULE_5__["VodGameInfoComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"]
        ]
    })
], VodGameInfoModule);



/***/ }),

/***/ "8XX7":
/*!********************************************************!*\
  !*** ./src/app/element/route-page-list.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pagination-wrap {\n  margin-top: 10px;\n}\n\n.pagination {\n  margin: 0px auto;\n}\n\n.pagination li {\n  list-style: none;\n}\n\n.pagination li a {\n  padding: 0px;\n  min-width: 36px;\n}");

/***/ }),

/***/ "TNll":
/*!***************************************************!*\
  !*** ./src/app/element/route-page-list.module.ts ***!
  \***************************************************/
/*! exports provided: RoutePageListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutePageListModule", function() { return RoutePageListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material.module */ "vvyD");
/* harmony import */ var _route_page_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./route-page-list.component */ "gWUa");







let RoutePageListModule = class RoutePageListModule {
};
RoutePageListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _route_page_list_component__WEBPACK_IMPORTED_MODULE_6__["RoutePageListComponent"]
        ],
        exports: [
            _route_page_list_component__WEBPACK_IMPORTED_MODULE_6__["RoutePageListComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        ]
    })
], RoutePageListModule);



/***/ }),

/***/ "adwP":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/element/email-verifier.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  <p class=\"intro_msg\">\r\n    해당 이메일에서 받은 코드를 입력해주세요.\r\n  </p>\r\n</div>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  <mat-form-field appearance=\"outline\">\r\n    <mat-label>코드입력</mat-label>\r\n    <input matInput type=\"text\" placeholder=\"Code\" [formControl]=\"codeCtrl\" />\r\n    <mat-hint *ngIf=\"codeCtrl.touched && codeCtrl.invalid && codeCtrl.errors.__proto__.constructor.keys(codeCtrl.errors)[0] == 'required'\">\r\n      닉네임를 입력하세요.\r\n    </mat-hint>\r\n    <mat-hint *ngIf=\"codeCtrl.touched && codeCtrl.invalid && codeCtrl.errors.__proto__.constructor.keys(codeCtrl.errors)[0] == 'length'\">\r\n      코드 길이가 다릅니다.\r\n    </mat-hint>\r\n    <mat-hint *ngIf=\"codeCtrl.touched && codeCtrl.invalid && codeCtrl.errors.__proto__.constructor.keys(codeCtrl.errors)[0] == 'invalid'\">\r\n      코드 문자가 다릅니다.\r\n    </mat-hint>\r\n  </mat-form-field>\r\n</div>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  <mat-spinner *ngIf=\"isSubmitting\" [diameter]=\"50\"></mat-spinner>\r\n</div>\r\n");

/***/ }),

/***/ "b9AW":
/*!*****************************************************!*\
  !*** ./src/app/element/user-data/edit.component.ts ***!
  \*****************************************************/
/*! exports provided: UserDataEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataEditComponent", function() { return UserDataEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");


class UserDataEditComponent {
    constructor() {
        this.isViewInit = false;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        const intervalFunc = setInterval(() => {
            if (this.hasOwnProperty('stepper') == true) {
                this.isViewInit = true;
                clearInterval(intervalFunc);
            }
        });
    }
}
UserDataEditComponent.propDecorators = {
    stepper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['stepper',] }]
};


/***/ }),

/***/ "cVqZ":
/*!*******************************************************************!*\
  !*** ./src/app/element/button/like-or-dislike-group.component.ts ***!
  \*******************************************************************/
/*! exports provided: LikeOrDislikeButtonGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeOrDislikeButtonGroupComponent", function() { return LikeOrDislikeButtonGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_like_or_dislike_group_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./like-or-dislike-group.component.html */ "17jb");
/* harmony import */ var _like_or_dislike_group_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./like-or-dislike-group.component.scss */ "gFhY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/auth.service */ "6uu6");






let LikeOrDislikeButtonGroupComponent = class LikeOrDislikeButtonGroupComponent {
    constructor(vc) {
        this.vc = vc;
        this.authService = src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"];
    }
    setLikeBtnClass() {
        if (this.related.getRelations().like) {
            this.likeBtnEl.classList.add('mat-accent');
        }
        else {
            this.likeBtnEl.classList.remove('mat-accent');
        }
    }
    setDislikeBtnClass() {
        if (this.related.getRelations().dislike) {
            this.dislikeBtnEl.classList.add('mat-accent');
        }
        else {
            this.dislikeBtnEl.classList.remove('mat-accent');
        }
    }
    setLikeBtnDisabled() {
        if (this.related.getRelations().dislike) {
            this.likeBtnEl.setAttribute('disabled', '');
        }
        else {
            this.likeBtnEl.removeAttribute('disabled');
        }
    }
    setDislikeBtnDisabled() {
        if (this.related.getRelations().like) {
            this.dislikeBtnEl.setAttribute('disabled', '');
        }
        else {
            this.dislikeBtnEl.removeAttribute('disabled');
        }
    }
    ngAfterViewInit() {
        const el = this.vc.element.nativeElement;
        this.likeBtnEl = el.querySelector('[like-button]') ? el.querySelector('[like-button]') : document.createElement('button');
        this.dislikeBtnEl = el.querySelector('[dislike-button]') ? el.querySelector('[dislike-button]') : document.createElement('button');
        this.likeBtnEl.addEventListener('click', () => {
            if (this.related.getRelations().like) {
                this.authService.requireSignIn() || this.removeLike();
            }
            else {
                this.authService.requireSignIn() || this.addLike();
            }
        });
        this.dislikeBtnEl.addEventListener('click', () => {
            if (this.related.getRelations().dislike) {
                this.authService.requireSignIn() || this.removeDislike();
            }
            else {
                this.authService.requireSignIn() || this.addDislike();
            }
        });
        this.resetAttributes();
    }
    resetAttributes() {
        this.setDislikeBtnClass();
        this.setDislikeBtnDisabled();
        this.setLikeBtnClass();
        this.setLikeBtnDisabled();
    }
    addDislike() {
        this.likeBtnEl.setAttribute('disabled', '');
        this.dislikeBtnEl.setAttribute('disabled', '');
        src_app_service_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"].api().post('dislikes', {
            related_id: this.related.getAttrs().id,
            related_type: this.related.getModelType()
        }).subscribe((dislike) => {
            this.related.getRelations().dislike = dislike;
            this.related.getAttrs().dislike_count += 1;
            this.resetAttributes();
        });
    }
    addLike() {
        this.likeBtnEl.setAttribute('disabled', '');
        this.dislikeBtnEl.setAttribute('disabled', '');
        src_app_service_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"].api().post('likes', {
            related_id: this.related.getAttrs().id,
            related_type: this.related.getModelType()
        }).subscribe((like) => {
            this.related.getRelations().like = like;
            this.related.getAttrs().like_count += 1;
            this.resetAttributes();
        });
    }
    removeDislike() {
        this.dislikeBtnEl.setAttribute('disabled', '');
        src_app_service_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"].api().delete('dislikes/' + this.related.getRelations().dislike.getAttrs().id, {}).subscribe(() => {
            delete this.related.getRelations().dislike;
            this.related.getAttrs().dislike_count -= 1;
            this.resetAttributes();
        });
    }
    removeLike() {
        this.likeBtnEl.setAttribute('disabled', '');
        src_app_service_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"].api().delete('likes/' + this.related.getRelations().like.getAttrs().id, {}).subscribe(() => {
            delete this.related.getRelations().like;
            this.related.getAttrs().like_count -= 1;
            this.resetAttributes();
        });
    }
};
LikeOrDislikeButtonGroupComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }
];
LikeOrDislikeButtonGroupComponent.propDecorators = {
    related: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['related',] }]
};
LikeOrDislikeButtonGroupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'like-or-dislike-button-group',
        template: _raw_loader_like_or_dislike_group_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_like_or_dislike_group_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LikeOrDislikeButtonGroupComponent);



/***/ }),

/***/ "dJuh":
/*!*****************************************************!*\
  !*** ./src/app/element/user-data/show.component.ts ***!
  \*****************************************************/
/*! exports provided: UserDataShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDataShowComponent", function() { return UserDataShowComponent; });
class UserDataShowComponent {
}


/***/ }),

/***/ "f4an":
/*!****************************************************!*\
  !*** ./src/app/element/vod/game-info.component.ts ***!
  \****************************************************/
/*! exports provided: VodGameInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VodGameInfoComponent", function() { return VodGameInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_game_info_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./game-info.component.html */ "2iHH");
/* harmony import */ var _game_info_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-info.component.scss */ "hmVB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let VodGameInfoComponent = class VodGameInfoComponent {
    constructor() {
        this.tabIndex = 0;
    }
    ngAfterContentInit() {
    }
};
VodGameInfoComponent.propDecorators = {
    gameTimelineTabEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: ['gameTimelineTabEl',] }],
    gameResultTabEl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: ['gameResultTabEl',] }]
};
VodGameInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'vod-game-info',
        template: _raw_loader_game_info_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_game_info_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VodGameInfoComponent);



/***/ }),

/***/ "fIQ1":
/*!****************************************************************!*\
  !*** ./src/app/element/button/like-or-dislike-group.module.ts ***!
  \****************************************************************/
/*! exports provided: LikeOrDislikeButtonGroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeOrDislikeButtonGroupModule", function() { return LikeOrDislikeButtonGroupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/material.module */ "vvyD");
/* harmony import */ var _like_or_dislike_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./like-or-dislike-group.component */ "cVqZ");





let LikeOrDislikeButtonGroupModule = class LikeOrDislikeButtonGroupModule {
};
LikeOrDislikeButtonGroupModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _like_or_dislike_group_component__WEBPACK_IMPORTED_MODULE_4__["LikeOrDislikeButtonGroupComponent"]
        ],
        exports: [
            _like_or_dislike_group_component__WEBPACK_IMPORTED_MODULE_4__["LikeOrDislikeButtonGroupComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
        ]
    })
], LikeOrDislikeButtonGroupModule);



/***/ }),

/***/ "gFhY":
/*!*********************************************************************!*\
  !*** ./src/app/element/button/like-or-dislike-group.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "gWUa":
/*!******************************************************!*\
  !*** ./src/app/element/route-page-list.component.ts ***!
  \******************************************************/
/*! exports provided: RoutePageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutePageListComponent", function() { return RoutePageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_route_page_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./route-page-list.component.html */ "wTEQ");
/* harmony import */ var _route_page_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route-page-list.component.scss */ "8XX7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_element_page_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/element/page-list.component */ "IoOo");







let RoutePageListComponent = class RoutePageListComponent extends src_app_element_page_list_component__WEBPACK_IMPORTED_MODULE_6__["PageListComponent"] {
    constructor(route, router) {
        super();
        this.pageUrl = router.url.replace(/\?.*/, '');
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.getListWith(this.route.snapshot.queryParams);
        this.subscription = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"])).subscribe(event => {
            this.getListWith(this.route.snapshot.queryParams);
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
RoutePageListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RoutePageListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'route-page-list',
        template: _raw_loader_route_page_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_route_page_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RoutePageListComponent);



/***/ }),

/***/ "hmVB":
/*!******************************************************!*\
  !*** ./src/app/element/vod/game-info.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "wTEQ":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/element/route-page-list.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n  <ng-container *ngIf=\"!isLoading\">\r\n    <ng-container *ngTemplateOutlet=\"itemListEl\"></ng-container>\r\n  </ng-container>\r\n</div>\r\n<ng-content></ng-content>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"pagination-wrap\">\r\n  <ul class=\"pagination\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <li fxFlex *ngIf=\"prevPages.length != 0 && prevPages.indexOf(1) == -1\">\r\n      <a mat-button routerLink=\"{{pageUrl}}\" queryParamsHandling=\"merge\" [queryParams]=\"{page: 1}\">\r\n        <mat-icon>first_page</mat-icon>\r\n      </a>\r\n    </li>\r\n    <li fxFlex *ngIf=\"prevPages.length != 0 && prevPages[0] > 1\">\r\n      <a mat-button routerLink=\"{{pageUrl}}\" queryParamsHandling=\"merge\" [queryParams]=\"{page: prevPages[0]-1}\">\r\n        <mat-icon>chevron_left</mat-icon>\r\n      </a>\r\n    </li>\r\n    <li fxFlex *ngFor=\"let prevPage of prevPages\">\r\n      <a mat-button routerLink=\"{{pageUrl}}\" queryParamsHandling=\"merge\" [queryParams]=\"{page: prevPage}\">{{prevPage}}</a>\r\n    </li>\r\n    <li fxFlex>\r\n      <a mat-button mat-raised-button color=\"primary\" routerLink=\"{{pageUrl}}\" queryParamsHandling=\"merge\" [queryParams]=\"{page: currentPage}\">{{currentPage}}</a>\r\n    </li>\r\n    <li fxFlex *ngFor=\"let nextPage of nextPages\">\r\n      <a mat-button routerLink=\"{{pageUrl}}\" queryParamsHandling=\"merge\" [queryParams]=\"{page: nextPage}\">{{nextPage}}</a>\r\n    </li>\r\n    <li fxFlex *ngIf=\"nextPages.length != 0 && nextPages[nextPages.length-1] < lastPage\">\r\n      <a mat-button routerLink=\"{{pageUrl}}\" queryParamsHandling=\"merge\" [queryParams]=\"{page: nextPages[nextPages.length-1]+1}\">\r\n        <mat-icon>chevron_right</mat-icon>\r\n      </a>\r\n    </li>\r\n    <li fxFlex *ngIf=\"nextPages.length != 0 && nextPages.indexOf(lastPage) == -1\">\r\n      <a mat-button routerLink=\"{{pageUrl}}\" queryParamsHandling=\"merge\" [queryParams]=\"{page: lastPage}\">\r\n        <mat-icon>last_page</mat-icon>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n");

/***/ }),

/***/ "yK5u":
/*!**************************************************!*\
  !*** ./src/app/element/email-verifier.module.ts ***!
  \**************************************************/
/*! exports provided: EmailVerifierModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailVerifierModule", function() { return EmailVerifierModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material.module */ "vvyD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _email_verifier_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./email-verifier.component */ "0y/e");








let EmailVerifierModule = class EmailVerifierModule {
};
EmailVerifierModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _email_verifier_component__WEBPACK_IMPORTED_MODULE_7__["EmailVerifierComponent"]
        ],
        exports: [
            _email_verifier_component__WEBPACK_IMPORTED_MODULE_7__["EmailVerifierComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
        ]
    })
], EmailVerifierModule);



/***/ })

}]);