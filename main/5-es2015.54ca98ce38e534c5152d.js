(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "50P0":
/*!*********************************************************!*\
  !*** ./src/app/content/vod-player/youtube.component.ts ***!
  \*********************************************************/
/*! exports provided: YoutubeVodPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeVodPlayerComponent", function() { return YoutubeVodPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_youtube_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./youtube.component.html */ "QvfE");
/* harmony import */ var _youtube_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./youtube.component.scss */ "vejo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let YoutubeVodPlayerComponent = class YoutubeVodPlayerComponent {
    constructor(route, sanitizer) {
        this.video = route.snapshot.data.video;
        this.url = sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video.getAttrs().ytb_id + '?autoplay=1&rel=0&enablejsapi=1');
    }
};
YoutubeVodPlayerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
];
YoutubeVodPlayerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_youtube_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_youtube_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], YoutubeVodPlayerComponent);



/***/ }),

/***/ "Bvh2":
/*!************************************************************!*\
  !*** ./src/app/element/comment/thread-container.module.ts ***!
  \************************************************************/
/*! exports provided: CommentThreadContainerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentThreadContainerModule", function() { return CommentThreadContainerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_element_page_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/element/page-list.module */ "1Q7E");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material.module */ "vvyD");
/* harmony import */ var src_app_element_comment_thread_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/element/comment/thread.module */ "g6d8");
/* harmony import */ var _thread_container_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./thread-container.component */ "vLIj");










let CommentThreadContainerModule = class CommentThreadContainerModule {
};
CommentThreadContainerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _thread_container_component__WEBPACK_IMPORTED_MODULE_9__["CommentThreadContainerComponent"]
        ],
        exports: [
            _thread_container_component__WEBPACK_IMPORTED_MODULE_9__["CommentThreadContainerComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            src_app_element_comment_thread_module__WEBPACK_IMPORTED_MODULE_8__["CommentThreadModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            src_app_element_page_list_module__WEBPACK_IMPORTED_MODULE_6__["PageListModule"]
        ]
    })
], CommentThreadContainerModule);



/***/ }),

/***/ "MDmr":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/element/button/like.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button mat-raised-button [ngClass]=\"related.getRelations().like ? 'mat-accent' : ''\" (click)=\"authService.requireSignIn() || (related.getRelations().like ? removeLike() : addLike())\">\r\n  <mat-icon>favorite</mat-icon>좋아요\r\n</button>\r\n");

/***/ }),

/***/ "QvfE":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/vod-player/youtube.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mt-3 iframe-wrap\">\r\n  <iframe [src]=\"url\" allowfullscreen=\"true\"></iframe>\r\n</div>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n  <h4 fxFlex class=\"mt-3\">\r\n    {{video.getAttrs().title}}\r\n  </h4>\r\n  <like-button class=\"mt-3\" [related]=\"video\">\r\n  </like-button>\r\n</div>\r\n<comment-thread-container class=\"d-block mt-3\" [related]=\"video\">\r\n</comment-thread-container>\r\n");

/***/ }),

/***/ "hu0K":
/*!****************************************************!*\
  !*** ./src/app/element/button/like.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "kdmb":
/*!*****************************************************************!*\
  !*** ./src/app/element/comment/thread-container.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "mnoD":
/*!***********************************************!*\
  !*** ./src/app/element/button/like.module.ts ***!
  \***********************************************/
/*! exports provided: LikeButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeButtonModule", function() { return LikeButtonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/material.module */ "vvyD");
/* harmony import */ var _like_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./like.component */ "pWGc");





let LikeButtonModule = class LikeButtonModule {
};
LikeButtonModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _like_component__WEBPACK_IMPORTED_MODULE_4__["LikeButtonComponent"]
        ],
        exports: [
            _like_component__WEBPACK_IMPORTED_MODULE_4__["LikeButtonComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
        ]
    })
], LikeButtonModule);



/***/ }),

/***/ "pWGc":
/*!**************************************************!*\
  !*** ./src/app/element/button/like.component.ts ***!
  \**************************************************/
/*! exports provided: LikeButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeButtonComponent", function() { return LikeButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_like_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./like.component.html */ "MDmr");
/* harmony import */ var _like_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./like.component.scss */ "hu0K");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/auth.service */ "6uu6");






let LikeButtonComponent = class LikeButtonComponent {
    constructor() {
        this.authService = src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"];
    }
    addLike() {
        src_app_service_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"].api().post('likes', {
            related_id: this.related.getAttrs().id,
            related_type: this.related.getModelType()
        }).subscribe((like) => {
            this.related.getRelations().like = like;
        });
    }
    removeLike() {
        src_app_service_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"].api().delete('likes/' + this.related.getRelations().like.getAttrs().id, {}).subscribe(() => {
            delete this.related.getRelations().like;
        });
    }
};
LikeButtonComponent.ctorParameters = () => [];
LikeButtonComponent.propDecorators = {
    related: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['related',] }]
};
LikeButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'like-button',
        template: _raw_loader_like_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_like_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LikeButtonComponent);



/***/ }),

/***/ "rS6S":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/element/comment/thread-container.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n  <p>댓글 총: {{threadList.totalCount}}개</p>\r\n</div>\r\n<ng-container>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"20px\">\r\n    <img fxFlex=\"50px\" class=\"rounded-circle border\" [src]=\"authService.getUser() && authService.getUser().getAttrs().thumbnail ? authService.getUser().getAttrs().thumbnail : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='\" />\r\n    <mat-form-field fxFlex [floatLabel]=\"'never'\">\r\n      <input matInput placeholder=\"댓글 입력\" (focus)=\"isAdding = true\" [formControl]=\"newThreadCtrl\" (click)=\"authService.requireSignIn()\">\r\n    </mat-form-field>\r\n  </div>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"10px\" *ngIf=\"isAdding\">\r\n    <button mat-button (click)=\"hideNewThreadCtrl()\">\r\n      취소\r\n    </button>\r\n    <button mat-button mat-raised-button color=\"primary\" [disabled]=\"newThreadCtrl.invalid\" (click)=\"addThread()\">\r\n      쓰기\r\n    </button>\r\n  </div>\r\n</ng-container>\r\n<ng-container *ngFor=\"let item of newThreads\">\r\n  <comment-thread *ngIf=\"item.isExist\" [thread]=\"item\" fxLayout=\"row\" fxLayoutAlign=\"start start\">\r\n  </comment-thread>\r\n</ng-container>\r\n<page-list #threadList [apiUrl]=\"'comment-threads'\" [apiParams]=\"{\r\n  related_id: related.getAttrs().id,\r\n  related_type: related.getModelType(),\r\n  expands: 'dislike, like, user',\r\n  limit: '20'\r\n}\">\r\n  <ng-template #itemListEl>\r\n    <ng-container *ngFor=\"let item of threadList.items\">\r\n      <comment-thread *ngIf=\"item.isExist\" fxFlex=\"100\" fxLayout=\"row\" fxLayoutAlign=\"start start\" class=\"mt-2 mb-2\" [thread]=\"item\">\r\n      </comment-thread>\r\n    </ng-container>\r\n  </ng-template>\r\n</page-list>\r\n");

/***/ }),

/***/ "vLIj":
/*!***************************************************************!*\
  !*** ./src/app/element/comment/thread-container.component.ts ***!
  \***************************************************************/
/*! exports provided: CommentThreadContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentThreadContainerComponent", function() { return CommentThreadContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_thread_container_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./thread-container.component.html */ "rS6S");
/* harmony import */ var _thread_container_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thread-container.component.scss */ "kdmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/auth.service */ "6uu6");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");







let CommentThreadContainerComponent = class CommentThreadContainerComponent {
    constructor() {
        this.newThreads = [];
        this.isAdding = false;
        this.newThreadCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.authService = src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"];
    }
    hideNewThreadCtrl() {
        this.isAdding = false;
        this.newThreadCtrl.setValue('');
        this.newThreadCtrl.markAsUntouched();
    }
    addThread() {
        src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"].api().post('comment-threads', {
            message: this.newThreadCtrl.value,
            related_id: this.related.getAttrs().id,
            related_type: this.related.getModelType()
        }).subscribe((commentThread) => {
            this.newThreads.unshift(commentThread);
            this.isAdding = false;
            this.newThreadCtrl.setValue('');
            this.newThreadCtrl.markAsUntouched();
        });
    }
};
CommentThreadContainerComponent.ctorParameters = () => [];
CommentThreadContainerComponent.propDecorators = {
    threadList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['threadList',] }],
    related: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['related',] }]
};
CommentThreadContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comment-thread-container',
        template: _raw_loader_thread_container_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_thread_container_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CommentThreadContainerComponent);



/***/ }),

/***/ "vejo":
/*!***********************************************************!*\
  !*** ./src/app/content/vod-player/youtube.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "x2L+":
/*!******************************************************!*\
  !*** ./src/app/content/vod-player/youtube.module.ts ***!
  \******************************************************/
/*! exports provided: YoutubeVodPlayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeVodPlayerModule", function() { return YoutubeVodPlayerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _youtube_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./youtube.component */ "50P0");
/* harmony import */ var src_app_element_button_like_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/element/button/like.module */ "mnoD");
/* harmony import */ var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/http.service */ "9NvV");
/* harmony import */ var src_app_element_comment_thread_container_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/element/comment/thread-container.module */ "Bvh2");









const routes = [{
        path: '',
        component: _youtube_component__WEBPACK_IMPORTED_MODULE_5__["YoutubeVodPlayerComponent"],
        resolve: {
            video: 'video$$'
        }
    }];
let YoutubeVodPlayerModule = class YoutubeVodPlayerModule {
};
YoutubeVodPlayerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _youtube_component__WEBPACK_IMPORTED_MODULE_5__["YoutubeVodPlayerComponent"]
        ],
        exports: [
            _youtube_component__WEBPACK_IMPORTED_MODULE_5__["YoutubeVodPlayerComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            src_app_element_button_like_module__WEBPACK_IMPORTED_MODULE_6__["LikeButtonModule"],
            src_app_element_comment_thread_container_module__WEBPACK_IMPORTED_MODULE_8__["CommentThreadContainerModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        providers: [{
                provide: 'video$$',
                useValue: (snapshot) => {
                    return src_app_service_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"].api().get('youtube-videos/' + snapshot.params.id, {
                        params: {
                            expands: 'like'
                        }
                    });
                }
            }]
    })
], YoutubeVodPlayerModule);



/***/ })

}]);