(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/anton/Documents/anton/Ardas/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Jlvc":
    /*!**********************************!*\
      !*** ./src/app/core/constans.ts ***!
      \**********************************/

    /*! exports provided: DEFAULT_FONT_SIZE, LOCAL_STORAGE_KEY */

    /***/
    function Jlvc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DEFAULT_FONT_SIZE", function () {
        return DEFAULT_FONT_SIZE;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE_KEY", function () {
        return LOCAL_STORAGE_KEY;
      });

      var DEFAULT_FONT_SIZE = 18;
      var LOCAL_STORAGE_KEY = 'storagedEditableItems';
      /***/
    },

    /***/
    "KwOa":
    /*!******************************************************!*\
      !*** ./src/app/pages/template/template.component.ts ***!
      \******************************************************/

    /*! exports provided: TemplateComponent */

    /***/
    function KwOa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplateComponent", function () {
        return TemplateComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_core_api_templates_templates_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/api/templates/templates.service */
      "SNkG");
      /* harmony import */


      var src_app_shared_directives_editable_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/directives/editable.directive */
      "waFC");

      var TemplateComponent = /*#__PURE__*/function () {
        function TemplateComponent(activateRoute, templatesService) {
          _classCallCheck(this, TemplateComponent);

          this.activateRoute = activateRoute;
          this.templatesService = templatesService;
          this.templates = [];
          this.templateId = -1;
          this.htmlTemplate = '';
          this.template = {};
        }

        _createClass(TemplateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var id;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      id = this.activateRoute.snapshot.params['id'];
                      this.templateId = id;
                      this.templates = this.templatesService.getParsedTemplates();
                      this.template = this.templates[this.templateId - 1];
                      this.htmlTemplate = this.template.template;

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return TemplateComponent;
      }();

      TemplateComponent.ɵfac = function TemplateComponent_Factory(t) {
        return new (t || TemplateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_api_templates_templates_service__WEBPACK_IMPORTED_MODULE_3__["TemplateService"]));
      };

      TemplateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: TemplateComponent,
        selectors: [["app-template"]],
        decls: 3,
        vars: 2,
        consts: [[1, "page-content"], [1, "wrapper"], ["editable", "", 3, "templateId", "innerHTML"]],
        template: function TemplateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("templateId", ctx.templateId)("innerHTML", ctx.htmlTemplate, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
          }
        },
        directives: [src_app_shared_directives_editable_directive__WEBPACK_IMPORTED_MODULE_4__["EditableDirective"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "Mg80":
    /*!*****************************************!*\
      !*** ./src/app/core/api/api.service.ts ***!
      \*****************************************/

    /*! exports provided: ApiService */

    /***/
    function Mg80(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http) {
          _classCallCheck(this, ApiService);

          this.http = http;
        }

        _createClass(ApiService, [{
          key: "formatErrors",
          value: function formatErrors(error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.error);
          }
        }, {
          key: "get",
          value: function get(path) {
            var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]();
            return this.http.get(path, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(this.formatErrors)).toPromise();
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]));
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac,
        providedIn: 'any'
      });
      /***/
    },

    /***/
    "Ojd6":
    /*!*********************************!*\
      !*** ./src/app/core/helpers.ts ***!
      \*********************************/

    /*! exports provided: formatTableDate */

    /***/
    function Ojd6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "formatTableDate", function () {
        return formatTableDate;
      });

      function formatTableDate(date) {
        var day = date.getDay();
        var month = date.toLocaleString('default', {
          month: 'long'
        });
        var year = date.getFullYear();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        var strTime = "".concat(hours, ":").concat(minutes < 10 ? '0' + minutes : minutes, " ").concat(ampm);
        return "".concat(day, " ").concat(month, ", ").concat(year, " ").concat(strTime);
      }
      /***/

    },

    /***/
    "PCNd":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _components_table_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/table/table.component */
      "Xv+k");
      /* harmony import */


      var _components_edit_template_dialog_edit_template_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/edit-template-dialog/edit-template-dialog.component */
      "gpU8");
      /* harmony import */


      var _components_header_Header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/header/Header.component */
      "WsEh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_components_table_table_component__WEBPACK_IMPORTED_MODULE_8__["TableComponent"], _components_edit_template_dialog_edit_template_dialog_component__WEBPACK_IMPORTED_MODULE_9__["EditTemplateDialog"], _components_header_Header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]],
          exports: [_components_table_table_component__WEBPACK_IMPORTED_MODULE_8__["TableComponent"], _components_edit_template_dialog_edit_template_dialog_component__WEBPACK_IMPORTED_MODULE_9__["EditTemplateDialog"], _components_header_Header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"]]
        });
      })();
      /***/

    },

    /***/
    "SNkG":
    /*!*********************************************************!*\
      !*** ./src/app/core/api/templates/templates.service.ts ***!
      \*********************************************************/

    /*! exports provided: TemplateService */

    /***/
    function SNkG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplateService", function () {
        return TemplateService;
      });
      /* harmony import */


      var _constans__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../constans */
      "Jlvc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../api.service */
      "Mg80");

      var TemplateService = /*#__PURE__*/function () {
        function TemplateService(api) {
          _classCallCheck(this, TemplateService);

          this.api = api;
        }

        _createClass(TemplateService, [{
          key: "getTemplates",
          value: function getTemplates() {
            return this.api.get('https://run.mocky.io/v3/f15072ac-8fb0-495a-9f89-61ac7e72c543');
          }
        }, {
          key: "getParsedTemplates",
          value: function getParsedTemplates() {
            var storagedEditableItems = localStorage.getItem(_constans__WEBPACK_IMPORTED_MODULE_0__["LOCAL_STORAGE_KEY"]);
            return typeof storagedEditableItems === 'string' ? this.parseTemplates(storagedEditableItems) : [];
          }
        }, {
          key: "parseTemplates",
          value: function parseTemplates(storagedEditableItems) {
            return JSON.parse(storagedEditableItems);
          }
        }]);

        return TemplateService;
      }();

      TemplateService.ɵfac = function TemplateService_Factory(t) {
        return new (t || TemplateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]));
      };

      TemplateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: TemplateService,
        factory: TemplateService.ɵfac,
        providedIn: 'any'
      });
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _core_constans__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./core/constans */
      "Jlvc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_api_templates_templates_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./core/api/templates/templates.service */
      "SNkG");
      /* harmony import */


      var _shared_components_header_Header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared/components/header/Header.component */
      "WsEh");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(templatesService) {
          _classCallCheck(this, AppComponent);

          this.templatesService = templatesService;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var isEmptyLocalStorage, data, editableAmounts, storagedEditableItems;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      isEmptyLocalStorage = !localStorage.getItem(_core_constans__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE_KEY"]);

                      if (!isEmptyLocalStorage) {
                        _context2.next = 8;
                        break;
                      }

                      _context2.next = 4;
                      return this.templatesService.getTemplates();

                    case 4:
                      data = _context2.sent;
                      editableAmounts = data.map(function (item) {
                        return item.template.split('editable').length - 1;
                      });
                      storagedEditableItems = data.map(function (template, id) {
                        var configs = [];

                        for (var i = 0; i < editableAmounts[id]; i++) {
                          configs.push(Object.assign({}, {
                            fontSize: _core_constans__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_FONT_SIZE"]
                          }));
                        }

                        return Object.assign({}, Object.assign(Object.assign({}, template), {
                          configs: configs
                        }));
                      });
                      localStorage.setItem(_core_constans__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE_KEY"], JSON.stringify(storagedEditableItems));

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_api_templates_templates_service__WEBPACK_IMPORTED_MODULE_3__["TemplateService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 2,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
          }
        },
        directives: [_shared_components_header_Header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "WsEh":
    /*!**************************************************************!*\
      !*** ./src/app/shared/components/header/Header.component.ts ***!
      \**************************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function WsEh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(router) {
          _classCallCheck(this, HeaderComponent);

          this.router = router;
        }

        _createClass(HeaderComponent, [{
          key: "goBackHome",
          value: function goBackHome() {
            this.router.navigate(['/']);
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 11,
        vars: 0,
        consts: [[1, "header"], [1, "header-content", "page-content"], [1, "logo-container"], ["src", "../../../../assets/logo-ardas.png", "alt", "logo", 1, "logo"], [1, "action"], ["mat-fab", "", "color", "warn", "aria-label", "home button", 3, "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Test task by");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Fedulov Anton");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_8_listener() {
              return ctx.goBackHome();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]],
        styles: ["[_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  height: 88px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background-color: #fff;\n  box-shadow: -1px 3px 10px -3px rgba(34, 60, 80, 0.2);\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  justify-content: space-between;\n  align-items: center;\n  letter-spacing: 0.5px;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: center;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 124px;\n  margin-right: 40px;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin: 0 6px;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .mat-fab.mat-warn[_ngcontent-%COMP%] {\n  background-color: #FE7C22;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2hlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0RBQUE7QUFGSjtBQUdJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFETjtBQUVNO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUFSO0FBQ1E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFDVjtBQUNRO0VBQ0UsYUFBQTtBQUNWO0FBR1E7RUFDRSx5QkM5Qks7QUQ2QmYiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XG5cbjpob3N0IHtcbiAgLmhlYWRlciB7XG4gICAgaGVpZ2h0OiA4OHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IC0xcHggM3B4IDEwcHggLTNweCByZ2JhKDM0LCA2MCwgODAsIDAuMik7XG4gICAgLmhlYWRlci1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XG4gICAgICAubG9nby1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICB3aWR0aDogMTI0cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgICAgICB9XG4gICAgICAgIGIge1xuICAgICAgICAgIG1hcmdpbjogMCA2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5hY3Rpb24ge1xuICAgICAgICAubWF0LWZhYi5tYXQtd2FybiB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLW9yYW5nZTtcbiAgICAgICAgfVxuICAgICAgfSBcbiAgICB9XG4gIH1cbn0iLCIkY29sb3ItZGFyazogIzMzMzMzMztcbiRjb2xvci1vcmFuZ2U6ICNGRTdDMjI7XG4kY29sb3ItbGlnaHQtZ3JleTogI0Y0RjRGNDtcbiRjb2xvci1uYXZ5LWJsdWU6ICMwNTQ0NUU7XG4kY29sb3ItYmx1ZS1ncmVlbjogIzc1RTZEQTtcbiRjb2xvci1ibHVlLWdyb3R0bzogIzE4OUFCNDtcbiRjb2xvci1iYWJ5LWJsdWU6ICNENEYxRjQ7XG5cbiR0ZW1wbGF0ZS1jb2xvcjogJGNvbG9yLW5hdnktYmx1ZTtcbiRjb250YWluZXItY29sb3I6ICRjb2xvci1ibHVlLWdyb3R0bztcbiRlZGl0YWJsZS1jb2xvcjogJGNvbG9yLWJsdWUtZ3JlZW47XG4kZWRpdGFibGUtaG92ZXItY29sb3I6ICRjb2xvci1iYWJ5LWJsdWU7XG5cblxuJGZvbnQtZmFtaWx5LWJhc2U6ICdSdWJpaycsIHNhbnMtc2VyaWY7XG4kZm9udC1zaXplLWJhc2U6IDE4cHg7XG4kbGluZS1oZWlnaHQtYmFzZS1zaXplOiAyMHB4O1xuXG4kcGFnZS1jb250ZW50LXdpZHRoOiAxMzYwcHg7Il19 */"]
      });
      /***/
    },

    /***/
    "Xv+k":
    /*!************************************************************!*\
      !*** ./src/app/shared/components/table/table.component.ts ***!
      \************************************************************/

    /*! exports provided: TableComponent */

    /***/
    function XvK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableComponent", function () {
        return TableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function TableComponent_ng_container_1_th_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r3);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "name": a0
        };
      };

      function TableComponent_ng_container_1_td_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_ng_container_1_td_3_Template_td_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var element_r8 = ctx.$implicit;

            var column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.handleCellClick(column_r3, element_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r8 = ctx.$implicit;

          var column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, column_r3 === "name"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r8[column_r3], " ");
        }
      }

      function TableComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_ng_container_1_th_2_Template, 2, 1, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableComponent_ng_container_1_td_3_Template, 2, 4, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var column_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r3);
        }
      }

      function TableComponent_tr_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 9);
        }
      }

      function TableComponent_tr_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 10);
        }
      }

      var TableComponent = /*#__PURE__*/function () {
        function TableComponent() {
          _classCallCheck(this, TableComponent);

          this.dataSource = [];
          this.displayedColumns = [];
          this.onCellClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(TableComponent, [{
          key: "handleCellClick",
          value: function handleCellClick(column, element) {
            if (column === 'name') this.onCellClick.emit(element.id);
          }
        }]);

        return TableComponent;
      }();

      TableComponent.ɵfac = function TableComponent_Factory(t) {
        return new (t || TableComponent)();
      };

      TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TableComponent,
        selectors: [["app-table"]],
        inputs: {
          dataSource: "dataSource",
          displayedColumns: "displayedColumns"
        },
        outputs: {
          onCellClick: "onCellClick"
        },
        decls: 4,
        vars: 4,
        consts: [["mat-table", "", 1, "mat-elevation-z8", "table-container", 3, "dataSource"], [4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "ngClass", "click", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", "", 3, "ngClass", "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function TableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_ng_container_1_Template, 4, 1, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_tr_2_Template, 1, 0, "tr", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableComponent_tr_3_Template, 1, 0, "tr", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTable"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatRow"]],
        styles: ["[_nghost-%COMP%]   .table-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 60px;\n}\n[_nghost-%COMP%]   .table-container[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-size: 18px;\n}\n[_nghost-%COMP%]   .table-container[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .table-container[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3RhYmxlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUZKO0FBR0k7RUFDRSwwQkFBQTtFQUNBLGVDT1c7QURSakI7QUFHSTtFQUNFLGVBQUE7QUFETjtBQUVNO0VBQ0UsMEJBQUE7QUFBUiIsImZpbGUiOiJ0YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xuXG46aG9zdCB7XG4gIC50YWJsZS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xuICAgIH1cbiAgICAubmFtZSB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59IiwiJGNvbG9yLWRhcms6ICMzMzMzMzM7XG4kY29sb3Itb3JhbmdlOiAjRkU3QzIyO1xuJGNvbG9yLWxpZ2h0LWdyZXk6ICNGNEY0RjQ7XG4kY29sb3ItbmF2eS1ibHVlOiAjMDU0NDVFO1xuJGNvbG9yLWJsdWUtZ3JlZW46ICM3NUU2REE7XG4kY29sb3ItYmx1ZS1ncm90dG86ICMxODlBQjQ7XG4kY29sb3ItYmFieS1ibHVlOiAjRDRGMUY0O1xuXG4kdGVtcGxhdGUtY29sb3I6ICRjb2xvci1uYXZ5LWJsdWU7XG4kY29udGFpbmVyLWNvbG9yOiAkY29sb3ItYmx1ZS1ncm90dG87XG4kZWRpdGFibGUtY29sb3I6ICRjb2xvci1ibHVlLWdyZWVuO1xuJGVkaXRhYmxlLWhvdmVyLWNvbG9yOiAkY29sb3ItYmFieS1ibHVlO1xuXG5cbiRmb250LWZhbWlseS1iYXNlOiAnUnViaWsnLCBzYW5zLXNlcmlmO1xuJGZvbnQtc2l6ZS1iYXNlOiAxOHB4O1xuJGxpbmUtaGVpZ2h0LWJhc2Utc2l6ZTogMjBweDtcblxuJHBhZ2UtY29udGVudC13aWR0aDogMTM2MHB4OyJdfQ== */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
        });
      })();
      /***/

    },

    /***/
    "dyCx":
    /*!********************************!*\
      !*** ./src/app/pages/index.ts ***!
      \********************************/

    /*! exports provided: TemplateComponent, TemplatesDashboardComponent */

    /***/
    function dyCx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _template_template_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./template/template.component */
      "KwOa");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TemplateComponent", function () {
        return _template_template_component__WEBPACK_IMPORTED_MODULE_0__["TemplateComponent"];
      });
      /* harmony import */


      var _templates_dashboard_templates_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./templates-dashboard/templates-dashboard.component */
      "tfqm");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TemplatesDashboardComponent", function () {
        return _templates_dashboard_templates_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["TemplatesDashboardComponent"];
      });
      /***/

    },

    /***/
    "gpU8":
    /*!******************************************************************************************!*\
      !*** ./src/app/shared/components/edit-template-dialog/edit-template-dialog.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: EditTemplateDialog */

    /***/
    function gpU8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditTemplateDialog", function () {
        return EditTemplateDialog;
      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      function EditTemplateDialog_mat_error_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Min size: 10px and Max size: 120px");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var EditTemplateDialog = /*#__PURE__*/function () {
        function EditTemplateDialog(dialogRef, data) {
          _classCallCheck(this, EditTemplateDialog);

          this.dialogRef = dialogRef;
          this.data = data;
          this.subscriptions = [];
          this.fontSizeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](data.fontSize, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(10), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].max(120)]);
        }

        _createClass(EditTemplateDialog, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.subscriptions.push(this.fontSizeControl.valueChanges.subscribe(function (value) {
              return _this.data.fontSize = value;
            }));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subscriptions.map(function (subscribe) {
              return subscribe.unsubscribe();
            });
          }
        }, {
          key: "onNoClick",
          value: function onNoClick() {
            this.dialogRef.close();
          }
        }]);

        return EditTemplateDialog;
      }();

      EditTemplateDialog.ɵfac = function EditTemplateDialog_Factory(t) {
        return new (t || EditTemplateDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      EditTemplateDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: EditTemplateDialog,
        selectors: [["app-edit-template-dialog"]],
        decls: 17,
        vars: 5,
        consts: [["mat-dialog-content", ""], ["matInput", "", 3, "ngModel", "ngModelChange"], ["matInput", "", "type", "number", "placeholder", "Ex. 12", "min", "10", 3, "formControl"], ["matSuffix", ""], [4, "ngIf"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close", "disabled"]],
        template: function EditTemplateDialog_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Editable element");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function EditTemplateDialog_Template_input_ngModelChange_4_listener($event) {
              return ctx.data.value = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Font size");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, EditTemplateDialog_mat_error_11_Template, 2, 0, "mat-error", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditTemplateDialog_Template_button_click_13_listener() {
              return ctx.onNoClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "No Thanks");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Ok");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.data.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.fontSizeControl);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.fontSizeControl.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", ctx.data)("disabled", ctx.fontSizeControl.invalid);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]],
        styles: ["[_nghost-%COMP%]   .mat-dialog-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VkaXQtdGVtcGxhdGUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7QUFBSiIsImZpbGUiOiJlZGl0LXRlbXBsYXRlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLm1hdC1kaWFsb2ctY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICB9XG59Il19 */"]
      });
      /***/
    },

    /***/
    "tfqm":
    /*!****************************************************************************!*\
      !*** ./src/app/pages/templates-dashboard/templates-dashboard.component.ts ***!
      \****************************************************************************/

    /*! exports provided: TemplatesDashboardComponent */

    /***/
    function tfqm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplatesDashboardComponent", function () {
        return TemplatesDashboardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var src_app_core_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/core/helpers */
      "Ojd6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_core_api_templates_templates_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/core/api/templates/templates.service */
      "SNkG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/components/table/table.component */
      "Xv+k");

      function TemplatesDashboardComponent_app_table_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onCellClick", function TemplatesDashboardComponent_app_table_1_Template_app_table_onCellClick_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r1.handleCellClick($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r0.tableData)("displayedColumns", ctx_r0.displayedTableColumns);
        }
      }

      var TemplatesDashboardComponent = /*#__PURE__*/function () {
        function TemplatesDashboardComponent(templatesService, router) {
          _classCallCheck(this, TemplatesDashboardComponent);

          this.templatesService = templatesService;
          this.router = router;
          this.tableData = [];
          this.displayedTableColumns = ['id', 'name', 'modified'];
        }

        _createClass(TemplatesDashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var test, data;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.templatesService.getTemplates();

                    case 2:
                      test = _context3.sent;
                      data = this.templatesService.getParsedTemplates();
                      this.tableData = this.getTableData(data);

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getTableData",
          value: function getTableData(templatesData) {
            return templatesData.map(function (_ref) {
              var id = _ref.id,
                  name = _ref.name,
                  modified = _ref.modified;
              var lastModifiedDate = Object(src_app_core_helpers__WEBPACK_IMPORTED_MODULE_1__["formatTableDate"])(new Date(modified));
              return Object.assign({}, {
                id: id,
                name: name,
                modified: lastModifiedDate
              });
            });
          }
        }, {
          key: "handleCellClick",
          value: function handleCellClick(id) {
            this.router.navigate(["/template/".concat(id)]);
          }
        }]);

        return TemplatesDashboardComponent;
      }();

      TemplatesDashboardComponent.ɵfac = function TemplatesDashboardComponent_Factory(t) {
        return new (t || TemplatesDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_api_templates_templates_service__WEBPACK_IMPORTED_MODULE_3__["TemplateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      TemplatesDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: TemplatesDashboardComponent,
        selectors: [["app-templates-dashboard"]],
        decls: 2,
        vars: 1,
        consts: [[1, "page-content"], [3, "dataSource", "displayedColumns", "onCellClick", 4, "ngIf"], [3, "dataSource", "displayedColumns", "onCellClick"]],
        template: function TemplatesDashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TemplatesDashboardComponent_app_table_1_Template, 1, 2, "app-table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.tableData);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_components_table_table_component__WEBPACK_IMPORTED_MODULE_6__["TableComponent"]],
        encapsulation: 2
      });
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages */
      "dyCx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [{
        path: '',
        component: _pages__WEBPACK_IMPORTED_MODULE_1__["TemplatesDashboardComponent"],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-templates-dashboard-templates-dashboard-module */
          "pages-templates-dashboard-templates-dashboard-module").then(__webpack_require__.bind(null,
          /*! ./pages/templates-dashboard/templates-dashboard.module */
          "Xs2S")).then(function (m) {
            return m.TemplatesDashboardModule;
          });
        }
      }, {
        path: 'template/:id',
        pathMatch: 'full',
        component: _pages__WEBPACK_IMPORTED_MODULE_1__["TemplateComponent"],
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-template-template-module */
          "pages-template-template-module").then(__webpack_require__.bind(null,
          /*! ./pages/template/template.module */
          "iL6n")).then(function (m) {
            return m.TemplateModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "waFC":
    /*!*********************************************************!*\
      !*** ./src/app/shared/directives/editable.directive.ts ***!
      \*********************************************************/

    /*! exports provided: EditableDirective */

    /***/
    function waFC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditableDirective", function () {
        return EditableDirective;
      });
      /* harmony import */


      var src_app_core_constans__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/core/constans */
      "Jlvc");
      /* harmony import */


      var _components_edit_template_dialog_edit_template_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../components/edit-template-dialog/edit-template-dialog.component */
      "gpU8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var src_app_core_api_templates_templates_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/core/api/templates/templates.service */
      "SNkG");

      var EditableDirective = /*#__PURE__*/function () {
        function EditableDirective(elementRef, renderer, dialog, templatesService) {
          _classCallCheck(this, EditableDirective);

          this.elementRef = elementRef;
          this.renderer = renderer;
          this.dialog = dialog;
          this.templatesService = templatesService;
          this.configs = [];
          this.templates = [];
          this.result = '';
          this.isOpenedDialog = false;
          this.templateId = -1;
          this.template = {};
        }

        _createClass(EditableDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.templates = this.templatesService.getParsedTemplates();
            this.template = this.templates[this.templateId - 1];
            this.initialtransform();
          }
        }, {
          key: "onMouseEnter",
          value: function onMouseEnter() {
            var _this2 = this;

            var editableElements = this.elementRef.nativeElement.querySelectorAll('.editable');
            editableElements.forEach(function (element, id) {
              return element.addEventListener('click', _this2.clickListener.bind(_this2, id, element));
            });
          }
        }, {
          key: "onMouseLeave",
          value: function onMouseLeave() {
            this.removeAllEventListeners();
          }
        }, {
          key: "initialtransform",
          value: function initialtransform() {
            var _this3 = this;

            var editableElements = this.elementRef.nativeElement.querySelectorAll('.editable');
            editableElements.forEach(function (element, id) {
              var fontSize = _this3.template.configs[id].fontSize;

              _this3.renderer.setStyle(element, "font-size", "".concat(fontSize, "px"));
            });
          }
        }, {
          key: "removeAllEventListeners",
          value: function removeAllEventListeners() {
            if (!this.isOpenedDialog) {
              var editableElements = this.elementRef.nativeElement.querySelectorAll('.editable');
              editableElements.forEach(function (element) {
                var new_element = element.cloneNode(true);
                if (element.parentNode) element.parentNode.replaceChild(new_element, element);
              });
            }
          }
        }, {
          key: "clickListener",
          value: function clickListener(id, element) {
            var config = this.template.configs[id];
            this.openDialog(element, config);
          }
        }, {
          key: "saveUpdatedTemplate",
          value: function saveUpdatedTemplate() {
            var templateHTML = this.elementRef.nativeElement.querySelectorAll('.template');
            this.template.template = templateHTML[0].outerHTML;
            this.templates[this.templateId - 1] = this.template;
            localStorage.setItem(src_app_core_constans__WEBPACK_IMPORTED_MODULE_0__["LOCAL_STORAGE_KEY"], JSON.stringify(this.templates));
          }
        }, {
          key: "openDialog",
          value: function openDialog(element, config) {
            var _this4 = this;

            this.isOpenedDialog = true;
            var fontSize = config.fontSize;
            var value = element.innerText;
            var dialogRef = this.dialog.open(_components_edit_template_dialog_edit_template_dialog_component__WEBPACK_IMPORTED_MODULE_1__["EditTemplateDialog"], {
              width: '30%',
              data: {
                fontSize: fontSize,
                value: value
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                var _value = result.value,
                    _fontSize = result.fontSize;
                element.innerHTML = _value;
                _this4.template.modified = +new Date();
                config.fontSize = _fontSize;

                _this4.renderer.setStyle(element, "font-size", "".concat(_fontSize, "px"));
              }

              _this4.isOpenedDialog = false;

              _this4.removeAllEventListeners();

              _this4.saveUpdatedTemplate();
            });
          }
        }]);

        return EditableDirective;
      }();

      EditableDirective.ɵfac = function EditableDirective_Factory(t) {
        return new (t || EditableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_core_api_templates_templates_service__WEBPACK_IMPORTED_MODULE_4__["TemplateService"]));
      };

      EditableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
        type: EditableDirective,
        selectors: [["", "editable", ""]],
        hostBindings: function EditableDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseenter", function EditableDirective_mouseenter_HostBindingHandler() {
              return ctx.onMouseEnter();
            })("mouseleave", function EditableDirective_mouseleave_HostBindingHandler() {
              return ctx.onMouseLeave();
            });
          }
        },
        inputs: {
          templateId: "templateId"
        }
      });
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map