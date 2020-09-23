(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0], {
    /***/
    "0r1B":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/element/page-list.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function r1B(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\">\r\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n  <ng-container *ngIf=\"!isLoading\">\r\n    <ng-container *ngTemplateOutlet=\"itemListEl\"></ng-container>\r\n  </ng-container>\r\n</div>\r\n<ng-content></ng-content>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"pagination-wrap\">\r\n  <ul class=\"pagination\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n    <li fxFlex *ngIf=\"prevPages.length != 0 && prevPages.indexOf(1) == -1\">\r\n      <a mat-button (click)=\"getListWith({page: 1})\">\r\n        <mat-icon>first_page</mat-icon>\r\n      </a>\r\n    </li>\r\n    <li fxFlex *ngIf=\"prevPages.length != 0 && prevPages[0] > 1\">\r\n      <a mat-button (click)=\"getListWith({page: prevPages[0]-1})\">\r\n        <mat-icon>chevron_left</mat-icon>\r\n      </a>\r\n    </li>\r\n    <li fxFlex *ngFor=\"let prevPage of prevPages\">\r\n      <a mat-button (click)=\"getListWith({page: prevPage})\">\r\n        {{prevPage}}\r\n      </a>\r\n    </li>\r\n    <li fxFlex>\r\n      <a mat-button mat-raised-button color=\"primary\" (click)=\"getListWith({page: currentPage})\">\r\n        {{currentPage}}\r\n      </a>\r\n    </li>\r\n    <li fxFlex *ngFor=\"let nextPage of nextPages\">\r\n      <a mat-button (click)=\"getListWith({page: nextPage})\">\r\n        {{nextPage}}\r\n      </a>\r\n    </li>\r\n    <li fxFlex *ngIf=\"nextPages.length != 0 && nextPages[nextPages.length-1] < lastPage\">\r\n      <a mat-button (click)=\"getListWith({page: nextPages[nextPages.length-1]+1})\">\r\n        <mat-icon>chevron_right</mat-icon>\r\n      </a>\r\n    </li>\r\n    <li fxFlex *ngIf=\"nextPages.length != 0 && nextPages.indexOf(lastPage) == -1\">\r\n      <a mat-button (click)=\"getListWith({page: lastPage})\">\r\n        <mat-icon>last_page</mat-icon>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n";
      /***/
    },

    /***/
    "1Q7E":
    /*!*********************************************!*\
      !*** ./src/app/element/page-list.module.ts ***!
      \*********************************************/

    /*! exports provided: PageListModule */

    /***/
    function Q7E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageListModule", function () {
        return PageListModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/material.module */
      "vvyD");
      /* harmony import */


      var _page_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./page-list.component */
      "IoOo");

      var PageListModule = function PageListModule() {
        _classCallCheck(this, PageListModule);
      };

      PageListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_page_list_component__WEBPACK_IMPORTED_MODULE_6__["PageListComponent"]],
        exports: [_page_list_component__WEBPACK_IMPORTED_MODULE_6__["PageListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
      })], PageListModule);
      /***/
    },

    /***/
    "DGFz":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/element/button/user-menu.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function DGFz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button class=\"menu-button\" mat-button [matMenuTriggerFor]=\"moreMenu\">\r\n</button>\r\n<ng-content></ng-content>\r\n<mat-menu #moreMenu xPosition=\"before\">\r\n  <button mat-menu-item [routerLink]=\"['/users/', user.getAttrs().id]\">\r\n    프로필 보기\r\n  </button>\r\n</mat-menu>\r\n";
      /***/
    },

    /***/
    "Dm90":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/element/comment/reply.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Dm90(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<img fxFlex=\"50px\" class=\"mr-3 mt-1 rounded-circle border\" [src]=\"reply.getRelations().user.getAttrs().thumbnail ? reply.getRelations().user.getAttrs().thumbnail : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='\" />\r\n<div fxFlex fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" >\r\n  <ng-container *ngIf=\"!isEditing\">\r\n    <div fxFlex>\r\n      <p class=\"small\">\r\n        {{reply.getRelations().user.getAttrs().nick}} {{reply.getAttrs().created_at.substr(0, 19)}}\r\n      </p>\r\n      <p class=\"pt-2 pb-2\">\r\n        {{reply.getAttrs().message}}\r\n      </p>\r\n    </div>\r\n    <div fxFlex=\"40px\" *ngIf=\"authService.getUser() && authService.getUser().getAttrs().id == reply.getAttrs().user_id\">\r\n      <mat-menu #commentMenu>\r\n        <button mat-menu-item (click)=\"(isEditing = true) && editReplyCtrl.setValue(reply.getAttrs().message)\">\r\n          수정\r\n        </button>\r\n        <button mat-menu-item (click)=\"removeReply()\">\r\n          삭제\r\n        </button>\r\n      </mat-menu>\r\n      <button mat-icon-button [matMenuTriggerFor]=\"commentMenu\">\r\n        <mat-icon>more_horiz</mat-icon>\r\n      </button>\r\n    </div>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"isEditing\">\r\n    <mat-form-field fxFlex=\"100\" [floatLabel]=\"'never'\">\r\n      <input matInput placeholder=\"댓글 입력\" [formControl]=\"editReplyCtrl\">\r\n    </mat-form-field>\r\n    <div fxFlex=\"100\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"10px\">\r\n      <button mat-button (click)=\"isEditing = false\">\r\n        취소\r\n      </button>\r\n      <button mat-button mat-raised-button color=\"primary\" [disabled]=\"editReplyCtrl.invalid\" (click)=\"updateReply()\">\r\n        쓰기\r\n      </button>\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n\r\n";
      /***/
    },

    /***/
    "IoOo":
    /*!************************************************!*\
      !*** ./src/app/element/page-list.component.ts ***!
      \************************************************/

    /*! exports provided: PageListComponent */

    /***/
    function IoOo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageListComponent", function () {
        return PageListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_page_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./page-list.component.html */
      "0r1B");
      /* harmony import */


      var _page_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./page-list.component.scss */
      "uKbV");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/http.service */
      "9NvV");

      var PageListComponent = /*#__PURE__*/function () {
        function PageListComponent() {
          _classCallCheck(this, PageListComponent);

          this.apiParams = {};
          this.pageSize = 7;
          this.prevPages = [];
          this.nextPages = [];
          this.isLoading = false;
        }

        _createClass(PageListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getListWith();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var changed = false;
            Object.keys(changes).forEach(function (key) {
              if (changes[key].previousValue && !lodash__WEBPACK_IMPORTED_MODULE_3__["isEqual"](changes[key].previousValue, changes[key].currentValue)) {
                changed = true;
              }
            });

            if (changed) {
              this.getListWith();
            }
          }
        }, {
          key: "getListWith",
          value: function getListWith() {
            var _this = this;

            var baseParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.isLoading = true;

            if (this.subscribed) {
              this.subscribed.unsubscribe();
            }

            this.subscribed = src_app_service_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"].api().get(this.apiUrl, {
              params: lodash__WEBPACK_IMPORTED_MODULE_3__["merge"]({}, baseParams, this.apiParams)
            }).subscribe(function (res) {
              _this.isLoading = false;
              _this.items = res.data;
              _this.currentPage = res.current_page;
              _this.lastPage = res.last_page;
              _this.totalCount = res.total;

              if (_this.pageSize % 2 == 0) {
                _this.pageSize = _this.pageSize + 1;
              }

              var limit = (_this.pageSize - 1) / 2;
              var i = 1;
              var j = 1;
              var k = 0;
              var l = 0;
              _this.prevPages = [];
              _this.nextPages = [];

              for (; _this.currentPage - i >= 1 && i <= limit; i++) {
                _this.prevPages.unshift(_this.currentPage - i);
              }

              for (; _this.currentPage + j <= _this.lastPage && j <= limit; j++) {
                _this.nextPages.push(_this.currentPage + j);
              }

              for (; _this.currentPage - i - k >= 1 && k < limit - _this.nextPages.length; k++) {
                _this.prevPages.unshift(_this.currentPage - i - k);
              }

              for (; _this.currentPage + j + l <= _this.lastPage && l < limit - _this.prevPages.length; l++) {
                _this.nextPages.push(_this.currentPage + j + l);
              }
            });
          }
        }]);

        return PageListComponent;
      }();

      PageListComponent.propDecorators = {
        itemListEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
          args: ['itemListEl']
        }],
        apiParams: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['apiParams']
        }],
        apiUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['apiUrl']
        }]
      };
      PageListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'page-list',
        template: _raw_loader_page_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_page_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PageListComponent);
      /***/
    },

    /***/
    "N/x6":
    /*!*******************************************************!*\
      !*** ./src/app/element/comment/thread.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function NX6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    "QL0m":
    /*!****************************************************!*\
      !*** ./src/app/element/button/user-menu.module.ts ***!
      \****************************************************/

    /*! exports provided: UserMenuButtonModule */

    /***/
    function QL0m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserMenuButtonModule", function () {
        return UserMenuButtonModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/material.module */
      "vvyD");
      /* harmony import */


      var _user_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./user-menu.component */
      "dkGL");

      var UserMenuButtonModule = function UserMenuButtonModule() {
        _classCallCheck(this, UserMenuButtonModule);
      };

      UserMenuButtonModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_user_menu_component__WEBPACK_IMPORTED_MODULE_5__["UserMenuButtonComponent"]],
        exports: [_user_menu_component__WEBPACK_IMPORTED_MODULE_5__["UserMenuButtonComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
      })], UserMenuButtonModule);
      /***/
    },

    /***/
    "TEk2":
    /*!*************************************************!*\
      !*** ./src/app/element/comment/reply.module.ts ***!
      \*************************************************/

    /*! exports provided: CommentReplyModule */

    /***/
    function TEk2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentReplyModule", function () {
        return CommentReplyModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/material.module */
      "vvyD");
      /* harmony import */


      var _reply_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./reply.component */
      "kpAO");

      var CommentReplyModule = function CommentReplyModule() {
        _classCallCheck(this, CommentReplyModule);
      };

      CommentReplyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_reply_component__WEBPACK_IMPORTED_MODULE_6__["CommentReplyComponent"]],
        exports: [_reply_component__WEBPACK_IMPORTED_MODULE_6__["CommentReplyComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
      })], CommentReplyModule);
      /***/
    },

    /***/
    "TLWA":
    /*!*****************************************************!*\
      !*** ./src/app/element/comment/thread.component.ts ***!
      \*****************************************************/

    /*! exports provided: CommentThreadComponent */

    /***/
    function TLWA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentThreadComponent", function () {
        return CommentThreadComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_thread_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./thread.component.html */
      "nwCQ");
      /* harmony import */


      var _thread_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./thread.component.scss */
      "N/x6");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! lodash */
      "LvDl");
      /* harmony import */


      var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_model_dislike__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/model/dislike */
      "FkpS");
      /* harmony import */


      var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/service/auth.service */
      "6uu6");
      /* harmony import */


      var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/service/http.service */
      "9NvV");

      var CommentThreadComponent = /*#__PURE__*/function () {
        function CommentThreadComponent() {
          _classCallCheck(this, CommentThreadComponent);

          this.editThreadCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
          this.newReplyCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required);
          this.replyList = [];
          this.isEditing = false;
          this.isReplyAdding = false;
          this.isReplyShown = false;
          this.isReplyLoadAll = false;
          this.isThumbBtnLock = false;
          this.authService = src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"];
        }

        _createClass(CommentThreadComponent, [{
          key: "addDislike",
          value: function addDislike() {
            var _this2 = this;

            this.isThumbBtnLock = true;
            this.thread.setRelation('dislike', new src_app_model_dislike__WEBPACK_IMPORTED_MODULE_6__["Dislike"]());
            src_app_service_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"].api().post('dislikes', {
              related_id: this.thread.getAttrs().id,
              related_type: 'comment_thread'
            }).subscribe(function (dislike) {
              _this2.isThumbBtnLock = false;

              _this2.thread.setRelation('dislike', dislike);

              _this2.thread.getAttrs().dislike_count += 1;
            });
          }
        }, {
          key: "addLike",
          value: function addLike() {
            var _this3 = this;

            this.isThumbBtnLock = true;
            src_app_service_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"].api().post('likes', {
              related_id: this.thread.getAttrs().id,
              related_type: 'comment_thread'
            }).subscribe(function (like) {
              _this3.isThumbBtnLock = false;

              _this3.thread.setRelation('like', like);

              _this3.thread.getAttrs().like_count += 1;
            });
          }
        }, {
          key: "addReply",
          value: function addReply() {
            var _this4 = this;

            src_app_service_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"].api().post('comment-replies', {
              message: this.newReplyCtrl.value,
              thread_id: this.thread.getAttrs().id
            }).subscribe(function (commentReply) {
              commentReply.isNew = true;

              _this4.replyList.push(commentReply);

              _this4.thread.getAttrs().reply_count += 1;
              _this4.isReplyAdding = false;

              _this4.newReplyCtrl.setValue('');

              _this4.newReplyCtrl.markAsUntouched();
            });
          }
        }, {
          key: "showEditThreadCtrl",
          value: function showEditThreadCtrl() {
            this.isEditing = true;
            this.editThreadCtrl.setValue(this.thread.getAttrs().message);
          }
        }, {
          key: "showNewReplyCtrl",
          value: function showNewReplyCtrl() {
            this.isReplyAdding = true;
            this.newReplyCtrl.setValue('');
            this.newReplyCtrl.markAsUntouched();
          }
        }, {
          key: "removeDislike",
          value: function removeDislike() {
            var _this5 = this;

            this.isThumbBtnLock = true;
            src_app_service_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"].api()["delete"]('dislikes/' + this.thread.getRelations().dislike.getAttrs().id, {}).subscribe(function () {
              _this5.isThumbBtnLock = false;
              _this5.thread.getAttrs().dislike_count -= 1;
              delete _this5.thread.getRelations().dislike;
            });
          }
        }, {
          key: "removeLike",
          value: function removeLike() {
            var _this6 = this;

            this.isThumbBtnLock = true;
            src_app_service_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"].api()["delete"]('likes/' + this.thread.getRelations().like.getAttrs().id, {}).subscribe(function () {
              _this6.isThumbBtnLock = false;
              _this6.thread.getAttrs().like_count -= 1;
              delete _this6.thread.getRelations().like;
            });
          }
        }, {
          key: "removeThread",
          value: function removeThread() {
            var _this7 = this;

            src_app_service_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"].api()["delete"]('comment-threads/' + this.thread.getAttrs().id, {}).subscribe(function () {
              _this7.thread.isExist = false;
            });
          }
        }, {
          key: "updateThread",
          value: function updateThread() {
            var _this8 = this;

            src_app_service_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"].api().patch('comment-threads/' + this.thread.getAttrs().id, {
              message: this.editThreadCtrl.value
            }).subscribe(function (thread) {
              _this8.thread.setAttrs(thread.getAttrs());

              _this8.isEditing = false;
            });
          }
        }, {
          key: "loadMoreReply",
          value: function loadMoreReply() {
            var _this9 = this;

            var params = {
              thread_id: this.thread.getAttrs().id,
              order_by: 'created_at asc',
              expands: 'user',
              limit: '10'
            };
            var cursor = lodash__WEBPACK_IMPORTED_MODULE_3__["findLast"](this.replyList, function (reply) {
              return reply.isNew == false;
            });

            if (cursor) {
              params['cursor_id'] = cursor.getAttrs().id;
            }

            src_app_service_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"].api().get('comment-replies/', {
              params: params
            }).subscribe(function (loadList) {
              _this9.replyList = lodash__WEBPACK_IMPORTED_MODULE_3__["chain"](_this9.replyList).concat(loadList).keyBy(function (reply) {
                return reply.getAttrs().id;
              }).values().orderBy([function (reply) {
                return reply.getAttrs().created_at;
              }, function (reply) {
                return reply.getAttrs().id;
              }], ['asc', 'asc']).value();

              if (parseInt(params.limit) > loadList.length) {
                _this9.isReplyLoadAll = true;
              }
            });
          }
        }]);

        return CommentThreadComponent;
      }();

      CommentThreadComponent.ctorParameters = function () {
        return [];
      };

      CommentThreadComponent.propDecorators = {
        thread: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
          args: ['thread']
        }]
      };
      CommentThreadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'comment-thread',
        template: _raw_loader_thread_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_thread_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CommentThreadComponent);
      /***/
    },

    /***/
    "dkGL":
    /*!*******************************************************!*\
      !*** ./src/app/element/button/user-menu.component.ts ***!
      \*******************************************************/

    /*! exports provided: UserMenuButtonComponent */

    /***/
    function dkGL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserMenuButtonComponent", function () {
        return UserMenuButtonComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_user_menu_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./user-menu.component.html */
      "DGFz");
      /* harmony import */


      var _user_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-menu.component.scss */
      "iU5o");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var UserMenuButtonComponent = function UserMenuButtonComponent(el) {
        _classCallCheck(this, UserMenuButtonComponent);

        el.nativeElement.classList.add('position-relative');
      };

      UserMenuButtonComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }];
      };

      UserMenuButtonComponent.propDecorators = {
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['user']
        }]
      };
      UserMenuButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'user-menu-button',
        template: _raw_loader_user_menu_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_menu_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserMenuButtonComponent);
      /***/
    },

    /***/
    "g6d8":
    /*!**************************************************!*\
      !*** ./src/app/element/comment/thread.module.ts ***!
      \**************************************************/

    /*! exports provided: CommentThreadModule */

    /***/
    function g6d8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentThreadModule", function () {
        return CommentThreadModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/material.module */
      "vvyD");
      /* harmony import */


      var src_app_element_comment_reply_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/element/comment/reply.module */
      "TEk2");
      /* harmony import */


      var _thread_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./thread.component */
      "TLWA");
      /* harmony import */


      var src_app_element_button_user_menu_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/element/button/user-menu.module */
      "QL0m");

      var CommentThreadModule = function CommentThreadModule() {
        _classCallCheck(this, CommentThreadModule);
      };

      CommentThreadModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_thread_component__WEBPACK_IMPORTED_MODULE_7__["CommentThreadComponent"]],
        exports: [_thread_component__WEBPACK_IMPORTED_MODULE_7__["CommentThreadComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], src_app_element_comment_reply_module__WEBPACK_IMPORTED_MODULE_6__["CommentReplyModule"], src_app_element_button_user_menu_module__WEBPACK_IMPORTED_MODULE_8__["UserMenuButtonModule"]]
      })], CommentThreadModule);
      /***/
    },

    /***/
    "iU5o":
    /*!*********************************************************!*\
      !*** ./src/app/element/button/user-menu.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function iU5o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".menu-button {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n}";
      /***/
    },

    /***/
    "kpAO":
    /*!****************************************************!*\
      !*** ./src/app/element/comment/reply.component.ts ***!
      \****************************************************/

    /*! exports provided: CommentReplyComponent */

    /***/
    function kpAO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommentReplyComponent", function () {
        return CommentReplyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_reply_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./reply.component.html */
      "Dm90");
      /* harmony import */


      var _reply_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reply.component.scss */
      "qBOJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/auth.service */
      "6uu6");
      /* harmony import */


      var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/service/http.service */
      "9NvV");

      var CommentReplyComponent = /*#__PURE__*/function () {
        function CommentReplyComponent() {
          _classCallCheck(this, CommentReplyComponent);

          this.isEditing = false;
          this.editReplyCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
          this.authService = src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"];
        }

        _createClass(CommentReplyComponent, [{
          key: "removeReply",
          value: function removeReply() {
            var _this10 = this;

            src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"].api()["delete"]('comment-replies/' + this.reply.getAttrs().id, {}).subscribe(function () {
              _this10.reply.isExist = false;
            });
          }
        }, {
          key: "updateReply",
          value: function updateReply() {
            var _this11 = this;

            src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"].api().patch('comment-replies/' + this.reply.getAttrs().id, {
              message: this.editReplyCtrl.value
            }).subscribe(function (reply) {
              _this11.isEditing = false;

              _this11.reply.setAttrs(reply.getAttrs());
            });
          }
        }]);

        return CommentReplyComponent;
      }();

      CommentReplyComponent.ctorParameters = function () {
        return [];
      };

      CommentReplyComponent.propDecorators = {
        reply: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['reply']
        }]
      };
      CommentReplyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'comment-reply',
        template: _raw_loader_reply_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reply_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CommentReplyComponent);
      /***/
    },

    /***/
    "nwCQ":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/element/comment/thread.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function nwCQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<img fxFlex=\"50px\" class=\"mr-3 mt-1 rounded-circle border\" [src]=\"thread.getRelations().user.getAttrs().thumbnail ? thread.getRelations().user.getAttrs().thumbnail : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='\" />\r\n<div fxFlex fxLayout=\"row wrap\" fxLayoutAlign=\"start center\" >\r\n  <ng-container *ngIf=\"!isEditing\">\r\n    <div fxFlex>\r\n      <p class=\"small\">\r\n        <user-menu-button class=\"d-inline-block font-weight-bold\" [user]=\"thread.getRelations().user\">\r\n          {{thread.getRelations().user.getAttrs().nick}}\r\n        </user-menu-button>\r\n        <span>\r\n          {{thread.getAttrs().created_at.substr(0, 19)}}\r\n        </span>\r\n      </p>\r\n      <p class=\"pt-2 pb-2\">\r\n        {{thread.getAttrs().message}}\r\n      </p>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n        <span class=\"small color-grey\">{{thread.getAttrs().like_count}}</span>\r\n        <button class=\"thumb\" [ngClass]=\"{'mat-accent': thread.getRelations().like}\" [disabled]=\"isThumbBtnLock || thread.getRelations().dislike\" mat-button (click)=\"thread.getRelations().like ? authService.requireSignIn() || this.removeLike() : authService.requireSignIn() || this.addLike()\">\r\n          <mat-icon>thumb_up</mat-icon>\r\n        </button>\r\n        <button class=\"thumb\" [ngClass]=\"{'mat-accent': thread.getRelations().dislike}\" [disabled]=\"isThumbBtnLock || thread.getRelations().like\" mat-button (click)=\"thread.getRelations().dislike ? authService.requireSignIn() || this.removeDislike() : authService.requireSignIn() || this.addDislike()\">\r\n          <mat-icon>thumb_down</mat-icon>\r\n        </button>\r\n        <button mat-button (click)=\"showNewReplyCtrl()\">답글</button>\r\n      </div>\r\n    </div>\r\n    <div fxFlex=\"40px\" *ngIf=\"authService.getUser() && thread.getAttrs().user_id == authService.getUser().getAttrs().id\">\r\n      <mat-menu #moreMenu>\r\n        <button mat-menu-item (click)=\"showEditThreadCtrl()\">\r\n          수정\r\n        </button>\r\n        <button mat-menu-item (click)=\"removeThread()\">\r\n          삭제\r\n        </button>\r\n      </mat-menu>\r\n      <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\">\r\n        <mat-icon>more_horiz</mat-icon>\r\n      </button>\r\n    </div>\r\n    <ng-container *ngIf=\"isReplyAdding\">\r\n      <div fxFlex=\"100\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"20px\">\r\n        <img fxFlex=\"50px\" class=\"rounded-circle border\" [src]=\"authService.getUser() && authService.getUser().getAttrs().thumbnail ? authService.getUser().getAttrs().thumbnail : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='\" />\r\n        <mat-form-field fxFlex [floatLabel]=\"'never'\">\r\n          <input matInput placeholder=\"댓글 입력\" [formControl]=\"newReplyCtrl\" (click)=\"authService.requireSignIn()\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div fxFlex=\"100\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"10px\">\r\n        <button mat-button (click)=\"isReplyAdding = false\">\r\n          취소\r\n        </button>\r\n        <button mat-button mat-raised-button color=\"primary\" [disabled]=\"newReplyCtrl.invalid\" (click)=\"addReply()\">\r\n          쓰기\r\n        </button>\r\n      </div>\r\n    </ng-container>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"isEditing\">\r\n    <mat-form-field fxFlex=\"100\" [floatLabel]=\"'never'\">\r\n      <input matInput placeholder=\"댓글 입력\" [formControl]=\"editThreadCtrl\">\r\n    </mat-form-field>\r\n    <div fxFlex=\"100\" fxLayout=\"row\" fxLayoutAlign=\"end center\" fxLayoutGap=\"10px\">\r\n      <button mat-button (click)=\"isEditing = false\">\r\n        취소\r\n      </button>\r\n      <button mat-button mat-raised-button color=\"primary\" [disabled]=\"editThreadCtrl.invalid\" (click)=\"updateThread()\">\r\n        쓰기\r\n      </button>\r\n    </div>\r\n  </ng-container>\r\n  <div fxFlex=\"100\" class=\"small\" *ngIf=\"isReplyShown\">\r\n    <button mat-button (click)=\"isReplyShown = false\">답글 숨기기</button>\r\n  </div>\r\n  <div fxFlex=\"100\" class=\"small\" *ngIf=\"!isReplyShown && thread.getAttrs().reply_count > 0\">\r\n    <button mat-button (click)=\"(isReplyShown = true) && (replyList.length == 0 ? loadMoreReply() : false)\">답글 보기</button>\r\n  </div>\r\n  <ng-container *ngFor=\"let item of replyList\">\r\n    <comment-reply class=\"mt-2\" fxFlex=\"100\" fxLayout=\"row\" fxLayoutAlign=\"start start\" [reply]=\"item\" *ngIf=\"(isReplyShown || item.isNew) && item.isExist\">\r\n    </comment-reply>\r\n  </ng-container>\r\n  <div fxFlex=\"100\" class=\"small\" *ngIf=\"isReplyShown && !isReplyLoadAll\">\r\n    <button mat-button (click)=\"loadMoreReply()\">답글 더보기</button>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "qBOJ":
    /*!******************************************************!*\
      !*** ./src/app/element/comment/reply.component.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function qBOJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    "uKbV":
    /*!**************************************************!*\
      !*** ./src/app/element/page-list.component.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function uKbV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".pagination-wrap {\n  margin-top: 10px;\n}\n\n.pagination {\n  margin: 0px auto;\n}\n\n.pagination li {\n  list-style: none;\n}\n\n.pagination li a {\n  padding: 0px;\n  min-width: 36px;\n}";
      /***/
    }
  }]);
})();