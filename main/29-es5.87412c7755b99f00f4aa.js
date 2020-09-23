(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29], {
    /***/
    "5V9Z":
    /*!***********************************************************!*\
      !*** ./src/app/element/user-data/show/email.component.ts ***!
      \***********************************************************/

    /*! exports provided: EmailShowUserDataComponent */

    /***/
    function V9Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailShowUserDataComponent", function () {
        return EmailShowUserDataComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_email_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./email.component.html */
      "Qktg");
      /* harmony import */


      var _email_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./email.component.scss */
      "UINE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_element_user_data_show_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/element/user-data/show.component */
      "dJuh");
      /* harmony import */


      var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/auth.service */
      "6uu6");

      var EmailShowUserDataComponent = /*#__PURE__*/function (_src_app_element_user) {
        _inherits(EmailShowUserDataComponent, _src_app_element_user);

        var _super = _createSuper(EmailShowUserDataComponent);

        function EmailShowUserDataComponent() {
          var _this;

          _classCallCheck(this, EmailShowUserDataComponent);

          _this = _super.call(this);
          _this.authService = src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"];
          return _this;
        }

        return EmailShowUserDataComponent;
      }(src_app_element_user_data_show_component__WEBPACK_IMPORTED_MODULE_4__["UserDataShowComponent"]);

      EmailShowUserDataComponent.ctorParameters = function () {
        return [];
      };

      EmailShowUserDataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_email_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_email_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EmailShowUserDataComponent);
      /***/
    },

    /***/
    "HDsC":
    /*!********************************************************!*\
      !*** ./src/app/element/user-data/show/email.module.ts ***!
      \********************************************************/

    /*! exports provided: EmailShowUserDataModule */

    /***/
    function HDsC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EmailShowUserDataModule", function () {
        return EmailShowUserDataModule;
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
      "5V9Z");

      var routes = [{
        path: '',
        component: _email_component__WEBPACK_IMPORTED_MODULE_7__["EmailShowUserDataComponent"]
      }];

      var EmailShowUserDataModule = function EmailShowUserDataModule() {
        _classCallCheck(this, EmailShowUserDataModule);
      };

      EmailShowUserDataModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_email_component__WEBPACK_IMPORTED_MODULE_7__["EmailShowUserDataComponent"]],
        exports: [_email_component__WEBPACK_IMPORTED_MODULE_7__["EmailShowUserDataComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)]
      })], EmailShowUserDataModule);
      /***/
    },

    /***/
    "Qktg":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/element/user-data/show/email.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Qktg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>\r\n  {{authService.getUser().getAttrs().email}}\r\n</p>\r\n";
      /***/
    },

    /***/
    "UINE":
    /*!*************************************************************!*\
      !*** ./src/app/element/user-data/show/email.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function UINE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    }
  }]);
})();