(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "/0+j":
/*!***********************************************!*\
  !*** ./src/app/content/post/create.module.ts ***!
  \***********************************************/
/*! exports provided: PostCreateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateModule", function() { return PostCreateModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/material.module */ "vvyD");
/* harmony import */ var _create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create.component */ "P76z");








const routes = [{
        path: '',
        component: _create_component__WEBPACK_IMPORTED_MODULE_7__["PostCreateComponent"]
    }];
let PostCreateModule = class PostCreateModule {
};
PostCreateModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _create_component__WEBPACK_IMPORTED_MODULE_7__["PostCreateComponent"]
        ],
        exports: [
            _create_component__WEBPACK_IMPORTED_MODULE_7__["PostCreateComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ]
    })
], PostCreateModule);



/***/ }),

/***/ "7MoR":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/post/create.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n  <h2>게시판 글쓰기</h2>\r\n  <mat-form-field [floatLabel]=\"'never'\">\r\n    <mat-label>게시판 종류</mat-label>\r\n    <mat-select [formControl]=\"typeCtrl\">\r\n      <mat-option>---선택하세요---</mat-option>\r\n      <mat-option value=\"free\" [routerLink]=\"['./']\" [queryParams]=\"{type: 'free'}\">자유게시판</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n</div>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n  <mat-form-field fxFlex=\"100\" [floatLabel]=\"'never'\">\r\n    <mat-label>제목</mat-label>\r\n    <input matInput type=\"text\" placeholder=\"Subject\" [formControl]=\"titleCtrl\" />\r\n    <mat-hint *ngIf=\"titleCtrl.touched && titleCtrl.invalid && titleCtrl.errors.__proto__.constructor.keys(titleCtrl.errors)[0] == 'required'\">\r\n      제목을 입력하세요.\r\n    </mat-hint>\r\n  </mat-form-field>\r\n</div>\r\n<div class=\"mt-3\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n  <div id=\"editor\" class=\"w-100\">\r\n  </div>\r\n</div>\r\n<div class=\"mt-3\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n  <button mat-raised-button color=\"primary\" (click)=\"confirm()\" [disabled]=\"form.invalid\">\r\n    작성 완료\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "P76z":
/*!**************************************************!*\
  !*** ./src/app/content/post/create.component.ts ***!
  \**************************************************/
/*! exports provided: PostCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function() { return PostCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_create_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./create.component.html */ "7MoR");
/* harmony import */ var _create_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create.component.scss */ "jGDD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");
/* harmony import */ var src_app_service_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/storage.service */ "xOb2");








let PostCreateComponent = class PostCreateComponent {
    constructor(route, router, viewRef) {
        this.router = router;
        this.viewRef = viewRef;
        this.contentCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', {
            validators: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ]
        });
        this.titleCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', {
            validators: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ]
        });
        this.typeCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](route.snapshot.queryParams.type, {
            validators: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                (control) => {
                    return ['free'].indexOf(control.value) == -1 ? { pattern: true } : null;
                }
            ]
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            type: this.typeCtrl,
            title: this.titleCtrl,
            content: this.contentCtrl
        });
    }
    ngAfterViewInit() {
        src_app_service_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"].get('classic-editor').create(this.viewRef.element.nativeElement.querySelector('#editor')).then((editor) => {
            this.viewRef.element.nativeElement.querySelector('.ck-editor').classList.add('w-100');
            editor.model.document.on('change:data', (...args) => {
                this.contentCtrl.setValue(editor.getData());
            });
        });
    }
    confirm() {
        src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"].api().post('posts', {
            type: this.typeCtrl.value,
            title: this.titleCtrl.value,
            content: this.contentCtrl.value
        }).subscribe((post) => {
            this.router.navigate(['/' + this.typeCtrl.value + '-posts']);
        });
    }
};
PostCreateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] }
];
PostCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_create_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_create_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PostCreateComponent);



/***/ }),

/***/ "jGDD":
/*!****************************************************!*\
  !*** ./src/app/content/post/create.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ })

}]);