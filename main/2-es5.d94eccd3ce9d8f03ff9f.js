(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2], {
    /***/
    "+YoC":
    /*!***************************************************!*\
      !*** ./src/app/content/user/profile.component.ts ***!
      \***************************************************/

    /*! exports provided: UserProfileComponent */

    /***/
    function YoC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function () {
        return UserProfileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.component.html */
      "tVZl");
      /* harmony import */


      var _profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.component.scss */
      "t/jb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/service/auth.service */
      "6uu6");
      /* harmony import */


      var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/service/http.service */
      "9NvV");
      /* harmony import */


      var src_app_service_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/service/storage.service */
      "xOb2");
      /* harmony import */


      var src_app_element_dialog_crop_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/element/dialog/crop-image.component */
      "lUJ2");

      var UserProfileComponent = /*#__PURE__*/function () {
        function UserProfileComponent(route, router, dialog) {
          var _this = this;

          _classCallCheck(this, UserProfileComponent);

          this.isEdit = false;
          this.router = router;
          this.user = route.snapshot.data.user;
          this.dialog = dialog;
          this.isOwner = src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"].getUser() && src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"].getUser().getAttrs().id == this.user.getAttrs().id;
          this.nickCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.user.getAttrs().nick, {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(12), function (control) {
              return control.value.indexOf(' ') !== -1 ? {
                nospace: true
              } : null;
            }, function (control) {
              return control.value == _this.user.getAttrs().nick ? {
                same: true
              } : null;
            }],
            asyncValidators: [function (control) {
              return src_app_service_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"].api().get('users', {
                params: {
                  nick: control.value
                }
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (users) {
                return users.length != 0 ? {
                  exist: true
                } : null;
              }));
            }]
          });
        }

        _createClass(UserProfileComponent, [{
          key: "cropImageDialogOpen",
          value: function cropImageDialogOpen() {
            this.dialog.open(src_app_element_dialog_crop_image_component__WEBPACK_IMPORTED_MODULE_11__["CropImageDialogComponent"], {
              width: '320px'
            });
          }
        }, {
          key: "navigate",
          value: function navigate(item) {
            src_app_service_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"].api().get('vods/' + item.getAttrs().id, {
              params: {
                expands: 'related'
              }
            }).subscribe(function (vod) {
              vod.getRelations().related.navigate();
            });
          }
        }, {
          key: "changeNick",
          value: function changeNick() {
            var _this2 = this;

            src_app_service_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"].api().patch('users/' + this.user.getAttrs().id, {
              nick: this.nickCtrl.value
            }).subscribe(function (user) {
              _this2.user.getAttrs().nick = user.getAttrs().nick;

              _this2.nickCtrl.markAsUntouched();

              src_app_service_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"].get('snack-bar').open('닉네임이 변경되었습니다.', 'close', {
                duration: 5000,
                verticalPosition: 'bottom'
              });
            });
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(item) {
            src_app_service_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"].api()["delete"](item.constructor.apiBaseUrl + '/' + item.getAttrs().id).subscribe(function () {
              item.isExist = false;
            });
          }
        }]);

        return UserProfileComponent;
      }();

      UserProfileComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      };

      UserProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], UserProfileComponent);
      /***/
    },

    /***/
    "DH9T":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/element/dialog/crop-image.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DH9T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<input class=\"d-none\" type=\"file\" id=\"dialog-crop-image-file\" (change)=\"onSelect()\">\r\n<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n  <h5>프로필사진 변경</h5>\r\n  <button mat-raised-button>\r\n    <label for=\"dialog-crop-image-file\">\r\n      사진 선택\r\n    </label>\r\n  </button>\r\n</div>\r\n<div class=\"mw-100 mt-3 mb-3\">\r\n  <img class=\"w-100\" [ngClass]=\"isLoaded ? 'd-block': 'd-none'\" />\r\n  <p class=\"small mt-3\" *ngIf=\"!isLoaded\">\r\n    프로필 사진을 선택하세요\r\n  </p>\r\n  <p class=\"small mt-3\" *ngIf=\"isLoaded\">\r\n    원하시는 부분을 지정 후 저장을 누르세요.\r\n  </p>\r\n</div>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n  <button class=\"ml-3\" mat-button (click)=\"viewRef.close()\">취소</button>\r\n  <button class=\"ml-3\" *ngIf=\"isLoaded\" mat-raised-button color=\"primary\" (click)=\"onCrop()\">저장</button>\r\n</div>\r\n";
      /***/
    },

    /***/
    "W/ZX":
    /*!**********************************************************!*\
      !*** ./src/app/element/dialog/crop-image.component.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function WZX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    "YDDk":
    /*!************************************************!*\
      !*** ./src/app/content/user/profile.module.ts ***!
      \************************************************/

    /*! exports provided: UserProfileModule */

    /***/
    function YDDk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserProfileModule", function () {
        return UserProfileModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/material.module */
      "vvyD");
      /* harmony import */


      var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/service/http.service */
      "9NvV");
      /* harmony import */


      var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/service/auth.service */
      "6uu6");
      /* harmony import */


      var src_app_content_user_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/content/user/profile.component */
      "+YoC");
      /* harmony import */


      var src_app_element_page_list_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/element/page-list.module */
      "1Q7E");
      /* harmony import */


      var src_app_element_comment_thread_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! src/app/element/comment/thread.module */
      "g6d8");
      /* harmony import */


      var src_app_element_dialog_crop_image_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! src/app/element/dialog/crop-image.component */
      "lUJ2");
      /* harmony import */


      var src_app_element_dialog_crop_image_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! src/app/element/dialog/crop-image.module */
      "o9Xh");

      var routes = [{
        path: '',
        component: src_app_content_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"],
        resolve: {
          user: 'user$$'
        }
      }];

      var UserProfileModule = function UserProfileModule() {
        _classCallCheck(this, UserProfileModule);
      };

      UserProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [src_app_element_dialog_crop_image_component__WEBPACK_IMPORTED_MODULE_13__["CropImageDialogComponent"]],
        declarations: [src_app_content_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"]],
        exports: [src_app_content_user_profile_component__WEBPACK_IMPORTED_MODULE_10__["UserProfileComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], src_app_element_page_list_module__WEBPACK_IMPORTED_MODULE_11__["PageListModule"], src_app_element_comment_thread_module__WEBPACK_IMPORTED_MODULE_12__["CommentThreadModule"], src_app_element_dialog_crop_image_module__WEBPACK_IMPORTED_MODULE_14__["CropImageDialogModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        providers: [{
          provide: 'user$$',
          useValue: function useValue(snapshot) {
            var user = src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"].getUser();

            if (user && (snapshot.params.id == user.getAttrs().id || snapshot.params.id == undefined)) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(user);
            } else if (snapshot.params.id != undefined) {
              return src_app_service_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"].api().get('users/' + snapshot.params.id, {
                params: {
                  fields: 'id,nick'
                }
              });
            }
          }
        }]
      })], UserProfileModule);
      /***/
    },

    /***/
    "lUJ2":
    /*!********************************************************!*\
      !*** ./src/app/element/dialog/crop-image.component.ts ***!
      \********************************************************/

    /*! exports provided: CropImageDialogComponent */

    /***/
    function lUJ2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CropImageDialogComponent", function () {
        return CropImageDialogComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_crop_image_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./crop-image.component.html */
      "DH9T");
      /* harmony import */


      var _crop_image_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./crop-image.component.scss */
      "W/ZX");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/auth.service */
      "6uu6");
      /* harmony import */


      var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/service/http.service */
      "9NvV");

      var CropImageDialogComponent = /*#__PURE__*/function () {
        function CropImageDialogComponent(elRef, viewRef) {
          _classCallCheck(this, CropImageDialogComponent);

          this.isLoaded = false;
          this.elRef = elRef;
          this.viewRef = viewRef;
        }

        _createClass(CropImageDialogComponent, [{
          key: "onSelect",
          value: function onSelect() {
            var _this3 = this;

            var imageEl = this.elRef.nativeElement.querySelector('img');
            var inputEl = this.elRef.nativeElement.querySelector('input');
            var reader = new FileReader();
            reader.readAsDataURL(inputEl.files[0]);

            reader.onload = function (e) {
              _this3.isLoaded = true;
              imageEl.src = e.target.result;
              _this3.cropper = new Cropper(imageEl, {
                aspectRatio: 1,
                viewMode: 3
              });
            };
          }
        }, {
          key: "onCrop",
          value: function onCrop() {
            var _this4 = this;

            var canvas = this.cropper.getCroppedCanvas({
              maxWidth: 1024,
              maxHeight: 768
            });
            var base64 = canvas.toDataURL('image/jpeg').split(',')[1];
            src_app_service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"].api().patch('users/' + src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"].getUser().getAttrs().id, {
              thumbnail: base64
            }).subscribe(function (user) {
              src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"].getUser().getAttrs().thumbnail = user.getAttrs().thumbnail + '?' + Math.random().toString(36).substring(3);

              _this4.viewRef.close();
            });
          }
        }]);

        return CropImageDialogComponent;
      }();

      CropImageDialogComponent.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
        }];
      };

      CropImageDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'crop-image-dialog',
        template: _raw_loader_crop_image_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_crop_image_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], CropImageDialogComponent);
      /***/
    },

    /***/
    "o9Xh":
    /*!*****************************************************!*\
      !*** ./src/app/element/dialog/crop-image.module.ts ***!
      \*****************************************************/

    /*! exports provided: CropImageDialogModule */

    /***/
    function o9Xh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CropImageDialogModule", function () {
        return CropImageDialogModule;
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


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/material.module */
      "vvyD");
      /* harmony import */


      var src_app_element_dialog_crop_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/element/dialog/crop-image.component */
      "lUJ2");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var CropImageDialogModule = function CropImageDialogModule() {
        _classCallCheck(this, CropImageDialogModule);
      };

      CropImageDialogModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [src_app_element_dialog_crop_image_component__WEBPACK_IMPORTED_MODULE_5__["CropImageDialogComponent"]],
        exports: [src_app_element_dialog_crop_image_component__WEBPACK_IMPORTED_MODULE_5__["CropImageDialogComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
      })], CropImageDialogModule);
      /***/
    },

    /***/
    "t/jb":
    /*!*****************************************************!*\
      !*** ./src/app/content/user/profile.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function tJb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".stretch {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}";
      /***/
    },

    /***/
    "tVZl":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/user/profile.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function tVZl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n  <div *ngIf=\"isOwner\" class=\"mt-1\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n    <button *ngIf=\"!isEdit\" mat-button mat-raised-button color=\"white\" (click)=\"isEdit = true\">수정</button>\r\n    <button *ngIf=\"isEdit\" mat-button mat-raised-button color=\"white\" (click)=\"isEdit = false\">완료</button>\r\n  </div>\r\n</div>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"space-around center\" fxLayoutGap=\"25px\" class=\"mt-3 mb-3\">\r\n  <div class=\"position-relative\">\r\n    <img width=\"250px\" class=\"rounded-circle\" [src]=\"user.getAttrs().thumbnail ? user.getAttrs().thumbnail : 'http://gifpng.com/128x128/333333/ffffff?border-width=0&text=프로필 이미지 없음'\" />\r\n    <div *ngIf=\"isEdit\" class=\"stretch\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <button mat-fab color=\"primary\" (click)=\"cropImageDialogOpen()\">\r\n        <mat-icon>edit</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"!isEdit\">\r\n    <h1>@{{user.getAttrs().nick}}</h1>\r\n  </div>\r\n  <div *ngIf=\"isEdit\" fxLayoutGap=\"20px\">\r\n    <mat-form-field>\r\n      <mat-label>닉네임</mat-label>\r\n      <input matInput type=\"text\" placeholder=\"Nickname\" [formControl]=\"nickCtrl\" />\r\n      <mat-hint *ngIf=\"nickCtrl.touched && nickCtrl.invalid && nickCtrl.errors.__proto__.constructor.keys(nickCtrl.errors)[0] == 'required'\">\r\n        닉네임를 입력하세요.\r\n      </mat-hint>\r\n      <mat-hint *ngIf=\"nickCtrl.touched && nickCtrl.invalid && nickCtrl.errors.__proto__.constructor.keys(nickCtrl.errors)[0] == 'minlength'\">\r\n        최소 2글자를 입력하세요.\r\n      </mat-hint>\r\n      <mat-hint *ngIf=\"nickCtrl.touched && nickCtrl.invalid && nickCtrl.errors.__proto__.constructor.keys(nickCtrl.errors)[0] == 'maxlength'\">\r\n        최대 12글자를 입력하세요.\r\n      </mat-hint>\r\n      <mat-hint *ngIf=\"nickCtrl.touched && nickCtrl.invalid && nickCtrl.errors.__proto__.constructor.keys(nickCtrl.errors)[0] == 'nospace'\">\r\n        공백(whitespace)없이 입력하세요.\r\n      </mat-hint>\r\n      <mat-hint *ngIf=\"nickCtrl.touched && nickCtrl.invalid && nickCtrl.errors.__proto__.constructor.keys(nickCtrl.errors)[0] == 'exist'\">\r\n        이미 존재하는 닉네임 입니다.\r\n      </mat-hint>\r\n      <mat-hint *ngIf=\"nickCtrl.touched && nickCtrl.invalid && nickCtrl.errors.__proto__.constructor.keys(nickCtrl.errors)[0] == 'same'\">\r\n        현재 사용중인 닉네임 입니다.\r\n      </mat-hint>\r\n    </mat-form-field>\r\n    <button mat-raised-button color=\"primary\" [disabled]=\"nickCtrl.invalid\" (click)=\"changeNick()\">변경</button>\r\n  </div>\r\n</div>\r\n  <mat-tab-group>\r\n    <mat-tab label=\"클립 영상\">\r\n      <page-list class=\"mt-3 d-block\" #clipPageList [apiUrl]=\"'clips'\" [apiParams]=\"{\r\n        user_id: user.getAttrs().id,\r\n        expands: 'vod',\r\n        limit: '20'\r\n      }\">\r\n        <ng-template #itemListEl>\r\n          <ng-container *ngFor=\"let item of clipPageList.items\">\r\n            <div *ngIf=\"item.isExist\" class=\"ytb-vod-item\" fxFlex=\"0 0 calc(25% - 20px)\">\r\n              <mat-menu #moreMenu xPosition=\"before\">\r\n                <button mat-menu-item (click)=\"deleteItem(item)\">\r\n                  삭제\r\n                </button>\r\n              </mat-menu>\r\n              <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\">\r\n                <mat-icon>\r\n                  more_horiz\r\n                </mat-icon>\r\n              </button>\r\n              <mat-card routerLink=\"/clips/{{item.getAttrs().id}}\">\r\n                <img mat-card-image src=\"{{item.getRelations().vod.getAttrs().thumbnail}}\" />\r\n                <mat-card-content>\r\n                  <p class=\"text-ellipsis\">\r\n                    {{item.getRelations().vod.getAttrs().title}}\r\n                  </p>\r\n                  <p class=\"text-center\">\r\n                    {{item.getAttrs().created_at.substr(0, 16)}}\r\n                  </p>\r\n                </mat-card-content>\r\n              </mat-card>\r\n            </div>\r\n          </ng-container>\r\n        </ng-template>\r\n      </page-list>\r\n    </mat-tab>\r\n    <mat-tab label=\"좋아요 영상\">\r\n      <page-list class=\"mt-3 d-block\" #likePageList [apiUrl]=\"'likes'\" [apiParams]=\"{\r\n        user_id: user.getAttrs().id,\r\n        related_types: 'vod,ytb_video',\r\n        expands: 'related',\r\n        limit: '20'\r\n      }\">\r\n        <ng-template #itemListEl>\r\n          <ng-container *ngFor=\"let item of likePageList.items\">\r\n            <div *ngIf=\"item.isExist\" class=\"ytb-vod-item\" fxFlex=\"0 0 calc(25% - 20px)\">\r\n              <mat-menu #moreMenu xPosition=\"before\">\r\n                <button mat-menu-item (click)=\"deleteItem(item)\">\r\n                  삭제\r\n                </button>\r\n              </mat-menu>\r\n              <button mat-icon-button [matMenuTriggerFor]=\"moreMenu\">\r\n                <mat-icon>\r\n                  more_horiz\r\n                </mat-icon>\r\n              </button>\r\n              <mat-card *ngIf=\"item.getRelations().related.constructor.name == 'Vod'\" (click)=\"navigate(item.getRelations().related)\">\r\n                <img mat-card-image src=\"{{item.getRelations().related.getAttrs().thumbnail}}\" />\r\n                <mat-card-content>\r\n                  <p class=\"text-ellipsis\">\r\n                    {{item.getRelations().related.getAttrs().title}}\r\n                  </p>\r\n                  <p class=\"text-center\">\r\n                    {{item.getRelations().related.getAttrs().started_at.substr(0, 16)}}\r\n                  </p>\r\n                </mat-card-content>\r\n              </mat-card>\r\n              <mat-card *ngIf=\"item.getRelations().related.constructor.name == 'YtbVideo'\" [routerLink]=\"['/youtube/videos', item.getRelations().related.getAttrs().id]\">\r\n                <img mat-card-image src=\"{{item.getRelations().related.getAttrs().thumbnail}}\" />\r\n                <mat-card-content>\r\n                  <p class=\"text-ellipsis\">\r\n                    {{item.getRelations().related.getAttrs().title}}\r\n                  </p>\r\n                  <p class=\"text-center\">\r\n                    {{item.getRelations().related.getAttrs().created_at.substr(0, 16)}}\r\n                  </p>\r\n                </mat-card-content>\r\n              </mat-card>\r\n            </div>\r\n          </ng-container>\r\n        </ng-template>\r\n      </page-list>\r\n    </mat-tab>\r\n    <mat-tab label=\"댓글 보기\">\r\n      <page-list class=\"mt-3 d-block\" #commentThreadPageList [apiUrl]=\"'comment-threads'\" [apiParams]=\"{\r\n        user_id: user.getAttrs().id,\r\n        expands: 'dislike, like, user',\r\n        limit: '20'\r\n      }\">\r\n        <ng-template #itemListEl>\r\n          <ng-container *ngFor=\"let item of commentThreadPageList.items\">\r\n            <comment-thread *ngIf=\"item.isExist\" fxFlex=\"100\" fxLayout=\"row\" fxLayoutAlign=\"start start\" class=\"mt-2 mb-2\" [thread]=\"item\">\r\n            </comment-thread>\r\n          </ng-container>\r\n        </ng-template>\r\n      </page-list>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n";
      /***/
    }
  }]);
})();