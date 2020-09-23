(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27], {
    /***/
    "GZRZ":
    /*!*************************************************************!*\
      !*** ./src/app/element/user-data/edit/email.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function GZRZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    "pXrc":
    /*!********************************************************!*\
      !*** ./src/app/element/user-data/edit/email.module.ts ***!
      \********************************************************/

    /*! exports provided: EmailEditUserDataModule */

    /***/
    function pXrc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailEditUserDataModule", function () {
        return EmailEditUserDataModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
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


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/material.module */
      "vvyD");
      /* harmony import */


      var _email_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./email.component */
      "ybGF");
      /* harmony import */


      var src_app_element_email_verifier_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/element/email-verifier.module */
      "yK5u");

      var routes = [{
        path: '',
        component: _email_component__WEBPACK_IMPORTED_MODULE_7__["EmailEditUserDataComponent"]
      }];

      var EmailEditUserDataModule = function EmailEditUserDataModule() {
        _classCallCheck(this, EmailEditUserDataModule);
      };

      EmailEditUserDataModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_email_component__WEBPACK_IMPORTED_MODULE_7__["EmailEditUserDataComponent"]],
        exports: [_email_component__WEBPACK_IMPORTED_MODULE_7__["EmailEditUserDataComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], src_app_element_email_verifier_module__WEBPACK_IMPORTED_MODULE_8__["EmailVerifierModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)]
      })], EmailEditUserDataModule);
      /***/
    },

    /***/
    "vOWf":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/element/user-data/edit/email.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vOWf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-horizontal-stepper [linear]=\"true\" [disableRipple]=\"true\" #stepper>\r\n  <mat-step [stepControl]=\"emailCtrl\" [editable]=\"false\">\r\n    <ng-template matStepLabel>이메일 입력</ng-template>\r\n    <mat-form-field fxFlex=\"100\" [floatLabel]=\"'never'\">\r\n      <input matInput type=\"email\" placeholder=\"Email\" [formControl]=\"emailCtrl\" />\r\n      <mat-hint *ngIf=\"emailCtrl.touched && emailCtrl.invalid && emailCtrl.errors.__proto__.constructor.keys(emailCtrl.errors)[0] == 'required'\">\r\n        이메일을 입력하세요.\r\n      </mat-hint>\r\n      <mat-hint *ngIf=\"emailCtrl.touched && emailCtrl.invalid && emailCtrl.errors.__proto__.constructor.keys(emailCtrl.errors)[0] == 'email'\">\r\n        이메일 형식이 아닙니다.\r\n      </mat-hint>\r\n      <mat-hint *ngIf=\"emailCtrl.touched && emailCtrl.invalid && emailCtrl.errors.__proto__.constructor.keys(emailCtrl.errors)[0] == 'exist'\">\r\n        이미 존재하는 이메일 입니다.\r\n      </mat-hint>\r\n      <mat-hint *ngIf=\"emailCtrl.touched && emailCtrl.invalid && emailCtrl.errors.__proto__.constructor.keys(emailCtrl.errors)[0] == 'same'\">\r\n        현재 사용중인 이메일 입니다.\r\n      </mat-hint>\r\n    </mat-form-field>\r\n  </mat-step>\r\n  <mat-step [stepControl]=\"emailVerifier.codeCtrl\" [editable]=\"false\">\r\n    <ng-template matStepLabel>이메일 확인</ng-template>\r\n    <email-verifier #emailVerifier></email-verifier>\r\n  </mat-step>\r\n</mat-horizontal-stepper>\r\n";
      /***/
    },

    /***/
    "ybGF":
    /*!***********************************************************!*\
      !*** ./src/app/element/user-data/edit/email.component.ts ***!
      \***********************************************************/

    /*! exports provided: EmailEditUserDataComponent */

    /***/
    function ybGF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailEditUserDataComponent", function () {
        return EmailEditUserDataComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_email_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./email.component.html */
      "vOWf");
      /* harmony import */


      var _email_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./email.component.scss */
      "GZRZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_element_user_data_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/element/user-data/edit.component */
      "b9AW");
      /* harmony import */


      var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/service/auth.service */
      "6uu6");
      /* harmony import */


      var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/service/http.service */
      "9NvV");
      /* harmony import */


      var src_app_service_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/service/storage.service */
      "xOb2");

      var EmailEditUserDataComponent = /*#__PURE__*/function (_src_app_element_user) {
        _inherits(EmailEditUserDataComponent, _src_app_element_user);

        var _super = _createSuper(EmailEditUserDataComponent);

        function EmailEditUserDataComponent() {
          var _this;

          _classCallCheck(this, EmailEditUserDataComponent);

          _this = _super.call(this);
          _this.hasNext = true;
          _this.emailCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email, function (control) {
              return control.value == src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"].getUser().getAttrs().email ? {
                same: true
              } : null;
            }],
            asyncValidators: [function (control) {
              return src_app_service_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"].api().get('users', {
                params: {
                  email: control.value
                }
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) {
                return users.length != 0 ? {
                  exist: true
                } : null;
              }));
            }]
          });
          return _this;
        }

        _createClass(EmailEditUserDataComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.form.addControl('code', this.emailVerifier.codeCtrl);
          }
        }, {
          key: "next$",
          value: function next$() {
            var _this2 = this;

            if (this.hasNext) {
              return src_app_service_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"].api().post('auth-user/emails', {
                email: this.emailCtrl.value
              }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (token) {
                _this2.hasNext = false;

                _this2.stepper.next();

                _this2.emailVerifier.token = token;
                src_app_service_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"].get('snack-bar').open('변경할 이메일로 메일을 보냈습니다. 확인하여 변경을 완료해주세요.', 'close', {
                  duration: 5000,
                  verticalPosition: 'bottom'
                });
              }));
            }
          }
        }, {
          key: "submit$",
          value: function submit$() {
            return src_app_service_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"].api().patch('auth-user', {
              token: this.emailVerifier.verifiedToken
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
              src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"].setUser(user);
            }));
          }
        }]);

        return EmailEditUserDataComponent;
      }(src_app_element_user_data_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserDataEditComponent"]);

      EmailEditUserDataComponent.ctorParameters = function () {
        return [];
      };

      EmailEditUserDataComponent.propDecorators = {
        emailVerifier: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['emailVerifier']
        }]
      };
      EmailEditUserDataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_email_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_email_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EmailEditUserDataComponent);
      /***/
    }
  }]);
})();