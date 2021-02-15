(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-template-template-module"], {
    /***/
    "iL6n":
    /*!***************************************************!*\
      !*** ./src/app/pages/template/template.module.ts ***!
      \***************************************************/

    /*! exports provided: TemplateModule */

    /***/
    function iL6n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TemplateModule", function () {
        return TemplateModule;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./template.component */
      "KwOa");
      /* harmony import */


      var src_app_shared_directives_editable_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/directives/editable.directive */
      "waFC");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TemplateModule = function TemplateModule() {
        _classCallCheck(this, TemplateModule);
      };

      TemplateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: TemplateModule
      });
      TemplateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        factory: function TemplateModule_Factory(t) {
          return new (t || TemplateModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TemplateModule, {
          declarations: [_template_component__WEBPACK_IMPORTED_MODULE_1__["TemplateComponent"], src_app_shared_directives_editable_directive__WEBPACK_IMPORTED_MODULE_2__["EditableDirective"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=pages-template-template-module-es5.js.map