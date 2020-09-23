(function () {
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19], {
    /***/
    "caVD":
    /*!**************************************************!*\
      !*** ./src/app/content/post/edit.component.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function caVD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    "o7Kr":
    /*!************************************************!*\
      !*** ./src/app/content/post/edit.component.ts ***!
      \************************************************/

    /*! exports provided: PostEditComponent */

    /***/
    function o7Kr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostEditComponent", function () {
        return PostEditComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./edit.component.html */
      "uB+H");
      /* harmony import */


      var _edit_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./edit.component.scss */
      "caVD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/service/http.service */
      "9NvV");
      /* harmony import */


      var src_app_service_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/service/storage.service */
      "xOb2");

      var PostEditComponent = /*#__PURE__*/function () {
        function PostEditComponent(location, route, viewRef) {
          _classCallCheck(this, PostEditComponent);

          var post = route.snapshot.data.post;
          this.post = post;
          this.location = location;
          this.viewRef = viewRef;
          this.contentCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](post.getAttrs().content, {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
          });
          this.titleCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](post.getAttrs().title, {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
          });
          this.typeCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](post.getAttrs().type, {
            validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, function (control) {
              return ['free'].indexOf(control.value) == -1 ? {
                pattern: true
              } : null;
            }]
          });
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            type: this.typeCtrl,
            title: this.titleCtrl,
            content: this.contentCtrl
          });
        }

        _createClass(PostEditComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            src_app_service_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"].get('classic-editor').create(this.viewRef.element.nativeElement.querySelector('#editor')).then(function (editor) {
              _this.viewRef.element.nativeElement.querySelector('.ck-editor').classList.add('w-100');

              editor.setData(_this.post.getAttrs().content);
              editor.model.document.on('change:data', function () {
                _this.contentCtrl.setValue(editor.getData());
              });
            });
          }
        }, {
          key: "confirm",
          value: function confirm() {
            var _this2 = this;

            src_app_service_http_service__WEBPACK_IMPORTED_MODULE_7__["HttpService"].api().patch('posts/' + this.post.getAttrs().id, {
              type: this.typeCtrl.value,
              title: this.titleCtrl.value,
              content: this.contentCtrl.value
            }).subscribe(function (post) {
              _this2.location.back();
            });
          }
        }]);

        return PostEditComponent;
      }();

      PostEditComponent.ctorParameters = function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }];
      };

      PostEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        template: _raw_loader_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PostEditComponent);
      /***/
    },

    /***/
    "tPkJ":
    /*!*********************************************!*\
      !*** ./src/app/content/post/edit.module.ts ***!
      \*********************************************/

    /*! exports provided: PostEditModule */

    /***/
    function tPkJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostEditModule", function () {
        return PostEditModule;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var src_app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/material.module */
      "vvyD");
      /* harmony import */


      var src_app_service_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/service/http.service */
      "9NvV");
      /* harmony import */


      var _edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./edit.component */
      "o7Kr");

      var routes = [{
        path: '',
        component: _edit_component__WEBPACK_IMPORTED_MODULE_10__["PostEditComponent"],
        resolve: {
          post: 'post$$'
        },
        canActivate: ['canActivate$$']
      }];

      var PostEditModule = function PostEditModule() {
        _classCallCheck(this, PostEditModule);
      };

      PostEditModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_edit_component__WEBPACK_IMPORTED_MODULE_10__["PostEditComponent"]],
        exports: [_edit_component__WEBPACK_IMPORTED_MODULE_10__["PostEditComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)],
        providers: [{
          provide: 'post$$',
          useValue: function useValue(snapshot) {
            return src_app_service_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"].api().get('posts/' + snapshot.params.id, {
              params: {
                expands: 'user'
              }
            });
          }
        }, {
          provide: 'canActivate$$',
          deps: ['post$$', 'auth$$'],
          useFactory: function useFactory(post$$, auth$$) {
            return function (snapshot) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])([post$$(snapshot), auth$$(snapshot)]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    post = _ref2[0],
                    authUser = _ref2[1];

                return post.getAttrs().user_id == authUser.getAttrs().id;
              }));
            };
          }
        }]
      })], PostEditModule);
      /***/
    },

    /***/
    "uB+H":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/content/post/edit.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function uBH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n  <h2>게시판 수정</h2>\r\n  <mat-form-field [floatLabel]=\"'never'\">\r\n    <mat-label>게시판 종류</mat-label>\r\n    <mat-select [formControl]=\"typeCtrl\">\r\n      <mat-option>---선택하세요---</mat-option>\r\n      <mat-option value=\"free\" [routerLink]=\"['./']\" [queryParams]=\"{type: 'free'}\">자유게시판</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n</div>\r\n<div fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n  <mat-form-field fxFlex=\"100\" [floatLabel]=\"'never'\">\r\n    <mat-label>제목</mat-label>\r\n    <input matInput type=\"text\" placeholder=\"Subject\" [formControl]=\"titleCtrl\" />\r\n    <mat-hint *ngIf=\"titleCtrl.touched && titleCtrl.invalid && titleCtrl.errors.__proto__.constructor.keys(titleCtrl.errors)[0] == 'required'\">\r\n      제목을 입력하세요.\r\n    </mat-hint>\r\n  </mat-form-field>\r\n</div>\r\n<div class=\"mt-3\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\r\n  <div id=\"editor\" class=\"w-100\">\r\n  </div>\r\n</div>\r\n<div class=\"mt-3\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n  <button mat-raised-button color=\"primary\" (click)=\"confirm()\" [disabled]=\"form.invalid\">\r\n    작성 완료\r\n  </button>\r\n</div>\r\n";
      /***/
    }
  }]);
})();