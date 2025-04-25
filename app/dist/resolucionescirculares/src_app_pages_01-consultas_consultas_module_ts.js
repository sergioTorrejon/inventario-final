"use strict";
(self["webpackChunkproject"] = self["webpackChunkproject"] || []).push([["src_app_pages_01-consultas_consultas_module_ts"],{

/***/ 6040:
/*!***********************************************************!*\
  !*** ./src/app/pages/01-consultas/consultas.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultasComponent": () => (/* binding */ ConsultasComponent)
/* harmony export */ });
/* harmony import */ var D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material-moment-adapter */ 6561);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 4369);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var src_app_models_words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/words */ 8046);
/* harmony import */ var _dialog_aprobado_dialog_aprobado_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog-aprobado/dialog-aprobado.component */ 8900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _consultas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consultas.service */ 7580);
/* harmony import */ var _authentication_services_authorization_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../authentication/services/authorization.service */ 1637);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 8369);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 2288);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 5342);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sort */ 1223);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 6246);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 9757);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ 9181);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ 338);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ 9421);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/paginator */ 9272);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 1412);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);




























function ConsultasComponent_mat_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r15.cod_ele);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](option_r15.descrip);
  }
}

function ConsultasComponent_mat_option_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r16.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](option_r16.label);
  }
}

function ConsultasComponent_mat_option_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r17.cod_ele);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](option_r17.descrip);
  }
}

function ConsultasComponent_mat_option_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r18.cod_ele);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](option_r18.descrip);
  }
}

function ConsultasComponent_mat_option_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", option_r19.cod_ele);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](option_r19.descrip);
  }
}

function ConsultasComponent_button_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConsultasComponent_button_77_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r20.formGroup.controls["numero"].setValue(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}

function ConsultasComponent_button_84_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConsultasComponent_button_84_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r22.formGroup.controls["titulo"].setValue(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}

function ConsultasComponent_button_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConsultasComponent_button_91_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r24.formGroup.controls["del"].setValue(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}

function ConsultasComponent_button_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConsultasComponent_button_100_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r26.formGroup.controls["al"].setValue(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}

function ConsultasComponent_div_109_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mat-sort-header", config_r28.name)("fxFlex.gt-lg", config_r28.width)("fxFlex.gt-md", config_r28.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", config_r28.label, " ");
  }
}

function ConsultasComponent_div_111_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConsultasComponent_div_111_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r33);
      const config_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r31.documentRow(config_r29));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "verified_user");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
}

function ConsultasComponent_div_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 45)(2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 47)(5, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 47)(8, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 48)(11, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 49)(14, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 50)(18, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, ConsultasComponent_div_111_button_21_Template, 3, 0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", config_r29["entidad"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", config_r29["tipo"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", config_r29["subtipo"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", config_r29["rc_numero"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](16, 7, config_r29["rc_fecha"], "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", config_r29["rc_titulo"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", config_r29.etapa == "APROBADO");
  }
}

const _c0 = function () {
  return [5, 10, 25, 100];
};

class ConsultasComponent {
  constructor(formBuilder, dialog, rest, authorizationService, _snackBar) {
    this.formBuilder = formBuilder;
    this.dialog = dialog;
    this.rest = rest;
    this.authorizationService = authorizationService;
    this._snackBar = _snackBar; //Palabras Internacionalizadas

    this._words = src_app_models_words__WEBPACK_IMPORTED_MODULE_1__.Words;
    this.formControl = {
      model: ['cartas_resoluciones'],
      modulo: [''],
      entidad: ['PS'],
      year: ['0'],
      tipo: [''],
      subtipo: [''],
      mercado: [''],
      numero: [''],
      titulo: [''],
      del: [''],
      al: ['']
    }; //Pagination and Sort
    //sort

    this.sort = '';
    this.order = ''; // Pagination Table

    this.page = {
      size: 10,
      index: 0
    };
    this.count = 0;
    this.dataOptions = []; //Congif Table

    this.headersTable = [{
      name: 'rc_inten',
      label: 'Institución',
      width: 15
    }, {
      name: 'rc_tipo',
      label: 'Documento',
      width: 10
    }, {
      name: 'rc_subtipo',
      label: 'Tipo Resolución',
      width: 10
    }, {
      name: 'rc_numero',
      label: 'Número',
      width: 7
    }, {
      name: 'rc_fecha',
      label: 'Fecha',
      width: 8
    }, {
      name: 'rc_titulo',
      label: 'Título / Referencia',
      width: 45
    }];
    this.formGroup = this.formBuilder.group([]);
  }

  ngOnInit() {
    this.setForm();
    this.getParams();
  }

  setForm() {
    this.formGroup = this.formBuilder.group(this.formControl);
    this.formGroup.controls['subtipo'].disable();
    this.formOnchange();
    this.dataTableUpdate(this.page);
  }

  getParams() {
    this.rest.getOptions().subscribe(data => {
      this.dataOptions = data.data;
    });
  }

  formOnchange() {
    var _this = this;

    this.formGroup.valueChanges.subscribe( /*#__PURE__*/function () {
      var _ref = (0,D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        _this.dataTableUpdate(_this.page);
      });

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    this.formGroup.controls['tipo'].valueChanges.subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        _this.formGroup.controls['subtipo'].enable();

        if (data != 'RA') {
          _this.formGroup.controls['subtipo'].disable();

          _this.formGroup.controls['subtipo'].setValue('');
        }
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  }

  sortData(event) {
    this.sort = event.active;
    this.order = event.direction;

    if (this.order == "") {
      this.sort = 'id';
    }

    this.dataTableUpdate(this.page);
  }

  dataTableUpdate(event) {
    this.page.size = event.pageSize !== undefined ? event.pageSize : 10;
    this.page.index = event.pageIndex !== undefined ? event.pageIndex : 0;
    const dto = this.formGroup.getRawValue();
    this.rest.getDocs(dto, this.page.index + 1, this.page.size, this.sort, this.order).subscribe(data => {
      this.data = data.data;
      this.count = data.count;
    });
    this.rest.getUsuarios().subscribe(data => {});
  }

  documentRow(rowSelect) {
    var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogConfig();
    dialogConfig.width = '1200px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      data: rowSelect
    };
    let dialogRef = this.dialog.open(_dialog_aprobado_dialog_aprobado_component__WEBPACK_IMPORTED_MODULE_2__.DialogAprobadoComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.openSnackBar('Se ACTUALIZO el registro correctamente', '', 'ok');
        this.dataTableUpdate({
          pageSize: 10,
          pageIndex: 0
        });
      }
    });
  }

  openSnackBar(message, action, type) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [type]
    });
  }

  openPdf(row) {
    this.rest.getFile(this.formGroup.controls.model.value, row.id).subscribe(res => {
      const fileURL = URL.createObjectURL(res);
      window.open(fileURL, '_blank');
    });
  }

  downloadxlsx() {
    const dto = this.formGroup.getRawValue();
    this.rest.getCsv(dto, this.sort, this.order).subscribe(result => {
      const newBlob = new Blob([result], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      });
      const data = window.URL.createObjectURL(newBlob);
      const link = document.createElement('a');
      link.style.display = 'none';
      link.href = data;
      link.target = '_blank';
      link.download = 'Reporte' + this.formGroup.controls.model.value + '' + '.xlsx';
      link.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      }));
      setTimeout(function () {
        window.URL.revokeObjectURL(data);
      }, 100);
    }, error => {
      console.log(error);
    });
  }

  downloadpdf() {
    const dto = this.formGroup.getRawValue();
    this.rest.getPdf(dto, this.sort, this.order).subscribe(res => {
      var newBlob = new Blob([res], {
        type: "application/pdf"
      });
      const data = window.URL.createObjectURL(newBlob);
      var link = document.createElement('a');
      link.href = data;
      link.download = "ReporteCartas Resoluciones.pdf";
      link.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      }));
      setTimeout(function () {
        window.URL.revokeObjectURL(data);
      }, 100);
    }, error => {
      console.log(error);
    });
  }

  downloadManual() {
    this.rest.getManual().subscribe(res => {
      var newBlob = new Blob([res], {
        type: "application/pdf"
      });
      const data = window.URL.createObjectURL(newBlob);
      var link = document.createElement('a');
      link.href = data;
      link.download = "Manual de Usuario.pdf";
      link.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      }));
      setTimeout(function () {
        window.URL.revokeObjectURL(data);
      }, 100);
    }, error => {
      console.log(error);
    });
  }

}

ConsultasComponent.ɵfac = function ConsultasComponent_Factory(t) {
  return new (t || ConsultasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_consultas_service__WEBPACK_IMPORTED_MODULE_3__.ConsultasService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_authentication_services_authorization_service__WEBPACK_IMPORTED_MODULE_4__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar));
};

ConsultasComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ConsultasComponent,
  selectors: [["app-consultas"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MAT_DATE_LOCALE,
    useValue: 'es-BO'
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.DateAdapter,
    useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_10__.MomentDateAdapter,
    deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MAT_DATE_LOCALE, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_10__.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MAT_DATE_FORMATS,
    useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_10__.MAT_MOMENT_DATE_FORMATS
  }])],
  decls: 114,
  vars: 32,
  consts: [["fxLayout", "row wrap"], ["fxFlex", "100"], [1, "card"], ["mat-card-avatar", "", "src", "assets/images/img/documentos1.jpg", 1, "header-image"], ["fxFlex", ""], ["fxFlex.gt-lg", "10", "fxFlex.gt-md", "10", "fxFlex.gt-xs", "100", "fxFlex", "100", 2, "text-align", "right"], ["mat-button", "", "color", "primary", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["reportes", "matMenu"], ["mat-menu-item", "", 3, "click"], ["fxFlex.gt-lg", "100", "fxFlex.gt-md", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-lg", "20", "fxFlex.gt-md", "20", "fxFlex.gt-xs", "100", "fxFlex", "100"], [3, "formGroup"], ["appearance", "outline", 1, "form-search"], ["formControlName", "entidad"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex.gt-lg", "10", "fxFlex.gt-md", "10", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["formControlName", "year"], ["value", "0"], ["fxFlex.gt-lg", "25", "fxFlex.gt-md", "25", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["formControlName", "tipo"], ["fxFlex.gt-lg", "35", "fxFlex.gt-md", "35", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["formControlName", "subtipo"], ["formControlName", "mercado"], ["type", "text", "matInput", "", "formControlName", "numero", "maxlength", "4", "autocomplete", "off", "onkeypress", "return (event.charCode >= 48 && event.charCode <= 57)"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "color", "warn", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["fxFlex.gt-lg", "40", "fxFlex.gt-md", "40", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["type", "text", "maxlength", "100", "matInput", "", "formControlName", "titulo", "onkeypress", "return (event.charCode != 39)"], ["fxFlex.gt-lg", "15", "fxFlex.gt-md", "15", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["matInput", "", "formControlName", "del", "readonly", "", 3, "matDatepicker", "click"], ["desde", ""], ["matInput", "", "formControlName", "al", "readonly", "", 3, "matDatepicker", "click"], ["hasta", ""], ["fxFlex.gt-lg", "10", "fxFlex.gt-md", "10", "fxFlex.gt-xs", "100", "fxFlex", "100", 2, "text-align", "center"], ["mat-button", "", "color", "primary", 1, "form-search", 3, "click"], ["fxLayout", "row wrap", "matSort", "", "matSortActive", "rc_fecha", "matSortDirection", "desc", "matSortDisableClear", "", 2, "text-align", "left !important", 3, "matSortChange"], ["class", "form-table-head", "fxFlex.gt-xs", "100", "fxFlex", "100", 3, "mat-sort-header", "fxFlex.gt-lg", "fxFlex.gt-md", 4, "ngFor", "ngForOf"], ["fxFlex.gt-lg", "5", "fxFlex.gt-md", "5", "fxFlex.gt-xs", "5", "fxFlex", "5", 1, "form-table-head"], ["fxLayout", "row wrap", 4, "ngFor", "ngForOf"], [3, "length", "pageSize", "pageIndex", "pageSizeOptions", "page"], [3, "value"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "color", "warn", "aria-label", "Clear", 3, "click"], ["fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-table-head", 3, "mat-sort-header", "fxFlex.gt-lg", "fxFlex.gt-md"], ["fxFlex.gt-lg", "15", "fxFlex.gt-md", "15", "fxFlex.gt-xs", "85", "fxFlex", "85", 1, "form-table-body"], [1, "form-table-body"], ["fxFlex.gt-lg", "10", "fxFlex.gt-md", "10", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-table-body"], ["fxFlex.gt-lg", "7", "fxFlex.gt-md", "7", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-table-body"], ["fxFlex.gt-lg", "8", "fxFlex.gt-md", "8", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-table-body"], ["fxFlex.gt-lg", "45", "fxFlex.gt-md", "45", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-table-body"], ["fxFlex.gt-lg", "5", "fxFlex.gt-md", "5", "fxFlex.gt-xs", "10", "fxFlex", "10", 2, "text-align", "center"], ["mat-icon-button", "", "matTooltip", "Aprobado", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Aprobado", 3, "click"], [2, "color", "green"]],
  template: function ConsultasComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mat-card", 2)(3, "mat-card-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-card-title");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Consultas");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 5)(9, "button", 6)(10, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-menu", null, 7)(15, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Reportes");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-menu", null, 9)(19, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConsultasComponent_Template_button_click_19_listener() {
        return ctx.downloadpdf();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConsultasComponent_Template_button_click_21_listener() {
        return ctx.downloadxlsx();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 0)(24, "div", 11)(25, "div", 0)(26, "div", 12)(27, "form", 13)(28, "mat-form-field", 14)(29, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Instituci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-select", 15)(32, "mat-option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "TODOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, ConsultasComponent_mat_option_34_Template, 2, 2, "mat-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 18)(36, "form", 13)(37, "mat-form-field", 14)(38, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Gesti\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-select", 19)(41, "mat-option", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "TODOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, ConsultasComponent_mat_option_43_Template, 2, 2, "mat-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 21)(45, "form", 13)(46, "mat-form-field", 14)(47, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Tipo de documento");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "mat-select", 22)(50, "mat-option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "TODOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, ConsultasComponent_mat_option_52_Template, 2, 2, "mat-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 23)(54, "form", 13)(55, "mat-form-field", 14)(56, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Tipo de resoluci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "mat-select", 24)(59, "mat-option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "TODOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](61, ConsultasComponent_mat_option_61_Template, 2, 2, "mat-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 18)(63, "form", 13)(64, "mat-form-field", 14)(65, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Mercado");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "mat-select", 25)(68, "mat-option", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "TODOS");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](70, ConsultasComponent_mat_option_70_Template, 2, 2, "mat-option", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 12)(72, "form", 13)(73, "mat-form-field", 14)(74, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "N\u00FAmero");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](76, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](77, ConsultasComponent_button_77_Template, 3, 0, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 28)(79, "form", 13)(80, "mat-form-field", 14)(81, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](82, "T\u00EDtulo");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](83, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](84, ConsultasComponent_button_84_Template, 3, 0, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 30)(86, "form", 13)(87, "mat-form-field", 14)(88, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, "Desde");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConsultasComponent_Template_input_click_90_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r34);

        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](93);

        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r10.open());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](91, ConsultasComponent_button_91_Template, 3, 0, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](92, "mat-datepicker", null, 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 30)(95, "form", 13)(96, "mat-form-field", 14)(97, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, "Hasta");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConsultasComponent_Template_input_click_99_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r34);

        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](102);

        return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](_r12.open());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](100, ConsultasComponent_button_100_Template, 3, 0, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](101, "mat-datepicker", null, 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 35)(104, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ConsultasComponent_Template_button_click_104_listener() {
        return ctx.setForm();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](106, "autorenew");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](107, " Limpiar");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matSortChange", function ConsultasComponent_Template_div_matSortChange_108_listener($event) {
        return ctx.sortData($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](109, ConsultasComponent_div_109_Template, 2, 4, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](110, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](111, ConsultasComponent_div_111_Template, 23, 10, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div")(113, "mat-paginator", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function ConsultasComponent_Template_mat_paginator_page_113_listener($event) {
        return ctx.dataTableUpdate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](14);

      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](18);

      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](93);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](102);

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx._words.esp.opciones);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx._words.esp.reportePDF);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx._words.esp.reporteExcel);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.dataOptions.institucion);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.dataOptions.years);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.dataOptions.documentos);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.dataOptions.tipo);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.dataOptions.mercado);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["numero"].value);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["titulo"].value);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["del"].value);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matDatepicker", _r12);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.controls["al"].value);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.headersTable);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.data);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("length", ctx.count)("pageSize", ctx.page.size)("pageIndex", ctx.page.index)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](31, _c0));
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_15__.MatSortHeader, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardAvatar, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__.MatDivider, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__._MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuTrigger, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__.MatPaginator, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelect, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: ["@media (min-width: 800px) {\r\n  .form-label[_ngcontent-%COMP%]{\r\n    padding: 5px 2px;\r\n    font-size: 12px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    background-color: #007CC3;\r\n    color: aliceblue;\r\n  }\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .form-search[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (min-width: 800px) {\r\n  .form-search[_ngcontent-%COMP%]{\r\n    padding: 2px 2px;\r\n    font-size: 12px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  }\r\n}\r\n\r\n.form-element[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.form-table-head[_ngcontent-%COMP%]{\r\n  padding: 2px 2px;\r\n  font-size: 12px;\r\n  text-align: left;\r\n  background-color: #f4f8fa;\r\n}\r\n\r\n.form-table-body[_ngcontent-%COMP%]{\r\n  padding: 2px 2px;\r\n  font-size: 12px;\r\n}\r\n\r\n.example-header-image[_ngcontent-%COMP%] {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\n  .error{\r\n  color:white;\r\n  background: rgb(253, 180, 177) !important;\r\n}\r\n\r\n  .ok{\r\n  color:white;\r\n  background: rgb(204, 250, 218) !important;\r\n}\r\n\r\n  .mat-form-field-wrapper {\r\n  padding-bottom: .5em;\r\n}\r\n\r\n.input[_ngcontent-%COMP%] {\r\n  width:80%;\r\n  display:block;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n  position:relative;\r\n  height:20px;\r\n  line-height:20px;\r\n  padding-left:10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnREFBZ0Q7SUFDaEQseUJBQXlCO0lBQ3pCLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnREFBZ0Q7RUFDbEQ7QUFDRjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUZBQW1GO0VBQ25GLHNCQUFzQjtBQUN4Qjs7QUFHQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFJQTtFQUNFLFdBQVc7RUFDWCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUNBQXlDO0FBQzNDOztBQUdBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJjb25zdWx0YXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAuZm9ybS1sYWJlbHtcclxuICAgIHBhZGRpbmc6IDVweCAycHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0MzO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5mb3JtLXNlYXJjaHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAuZm9ybS1zZWFyY2h7XHJcbiAgICBwYWRkaW5nOiAycHggMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxufVxyXG4uZm9ybS1lbGVtZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0tdGFibGUtaGVhZHtcclxuICBwYWRkaW5nOiAycHggMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY4ZmE7XHJcbn1cclxuXHJcbi5mb3JtLXRhYmxlLWJvZHl7XHJcbiAgcGFkZGluZzogMnB4IDJweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5cclxuXHJcbjo6bmctZGVlcCAuZXJyb3J7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1MywgMTgwLCAxNzcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAub2t7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIwNCwgMjUwLCAyMTgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAuNWVtO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIHdpZHRoOjgwJTtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgaGVpZ2h0OjIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6MjBweDtcclxuICBwYWRkaW5nLWxlZnQ6MTBweDtcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 5970:
/*!********************************************************!*\
  !*** ./src/app/pages/01-consultas/consultas.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultasModule": () => (/* binding */ ConsultasModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ 1378);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 5342);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 3186);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ 1223);
/* harmony import */ var src_app_app_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app-material-module */ 1552);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/components.module */ 5642);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-pdf-viewer */ 2214);
/* harmony import */ var _consultas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consultas.component */ 6040);
/* harmony import */ var _dialog_aprobado_dialog_aprobado_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog-aprobado/dialog-aprobado.component */ 8900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);














class ConsultasModule {
}
ConsultasModule.ɵfac = function ConsultasModule_Factory(t) { return new (t || ConsultasModule)(); };
ConsultasModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ConsultasModule, bootstrap: [_consultas_component__WEBPACK_IMPORTED_MODULE_2__.ConsultasComponent] });
ConsultasModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__.PdfViewerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortModule,
        src_app_app_material_module__WEBPACK_IMPORTED_MODULE_0__.AppMaterialModule,
        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild([
            {
                path: '',
                component: _consultas_component__WEBPACK_IMPORTED_MODULE_2__.ConsultasComponent
            },
        ])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ConsultasModule, { declarations: [_consultas_component__WEBPACK_IMPORTED_MODULE_2__.ConsultasComponent, _dialog_aprobado_dialog_aprobado_component__WEBPACK_IMPORTED_MODULE_3__.DialogAprobadoComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_6__.PdfViewerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__.MatSortModule,
        src_app_app_material_module__WEBPACK_IMPORTED_MODULE_0__.AppMaterialModule,
        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule] }); })();


/***/ }),

/***/ 7580:
/*!*********************************************************!*\
  !*** ./src/app/pages/01-consultas/consultas.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultasService": () => (/* binding */ ConsultasService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_app_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.globals */ 4842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' }) };
class ConsultasService {
    constructor(http) {
        this.http = http;
        this.url = '';
        this.url = src_app_app_globals__WEBPACK_IMPORTED_MODULE_0__.Globals.api;
    }
    /** DATA DOCUMENTOS PAGINADOS */
    getDocs(dto, page = 0, limit = 0, sort = '', order = '') {
        return this.http.get(`${this.url}/${dto.model}?` +
            (page === 0 ? `` : `&page=${page}`) +
            (limit === 0 ? `` : `&limit=${limit}`) +
            (sort === '' ? `` : `&sort=${sort}`) +
            (order === '' ? `` : `&order=${order}`) +
            (dto.modulo === '' ? `` : `&modulo=${dto.modulo}`) +
            (dto.entidad === '' ? `` : `&rc_inten=${dto.entidad}`) +
            (dto.year === 0 ? `` : `&rc_year=${dto.year}`) +
            (dto.tipo === '' ? `` : `&rc_tipo=${dto.tipo}`) +
            (dto.numero === '' ? `` : `&rc_numero=${dto.numero}`) +
            (dto.titulo === '' ? `` : `&rc_titulo=${dto.titulo}`) +
            (dto.subtipo === '' ? `` : `&rc_subtipo=${dto.subtipo}`) +
            (dto.mercado === '' ? `` : `&rc_mercado=${dto.mercado}`) +
            (dto.del === '' ? `` : `&del=${this.formatDate(dto.del)}`) +
            (dto.al === '' ? `` : `&al=${this.formatDate(dto.al)}`)).pipe();
    }
    /** LISTA DE OPCIONES DE CATALOGOS PARA SELECT */
    getOptions() {
        return this.http.get(`${this.url}/catalogos/options`).pipe();
    }
    getUsuarios() {
        return this.http.get(`${this.url}/usuarios/usuario`).pipe();
    }
    //#region DOWNLOAD
    /** DOWNLOAD GET FILE */
    getFile(model, id) {
        const returl = `${this.url}/${model}/download/${id}`;
        return this.http.get(returl, { responseType: "blob" });
    }
    /**REPORTE EN CSV */
    getCsv(dto, sort = '', order = '') {
        const returl = `${this.url}/${dto.model}/downloadcsv?` +
            (sort === '' ? `` : `&sort=${sort}`) +
            (order === '' ? `` : `&order=${order}`) +
            (dto.modulo === '' ? `` : `&modulo=${dto.modulo}`) +
            (dto.entidad === '' ? `` : `&rc_inten=${dto.entidad}`) +
            (dto.year === 0 ? `` : `&rc_year=${dto.year}`) +
            (dto.tipo === '' ? `` : `&rc_tipo=${dto.tipo}`) +
            (dto.numero === '' ? `` : `&rc_numero=${dto.numero}`) +
            (dto.titulo === '' ? `` : `&rc_titulo=${dto.titulo}`) +
            (dto.subtipo === '' ? `` : `&rc_subtipo=${dto.subtipo}`) +
            (dto.mercado === '' ? `` : `&rc_mercado=${dto.mercado}`) +
            (dto.del === '' ? `` : `&del=${this.formatDate(dto.del)}`) +
            (dto.al === '' ? `` : `&al=${this.formatDate(dto.al)}`);
        return this.http.get(returl, { responseType: "blob" });
    }
    /** REPORTE EN PDF */
    getPdf(dto, sort = '', order = '') {
        const returl = `${this.url}/${dto.model}/downloadpdf?` +
            (sort === '' ? `` : `&sort=${sort}`) +
            (order === '' ? `` : `&order=${order}`) +
            (dto.modulo === '' ? `` : `&modulo=${dto.modulo}`) +
            (dto.entidad === '' ? `` : `&rc_inten=${dto.entidad}`) +
            (dto.year === 0 ? `` : `&rc_year=${dto.year}`) +
            (dto.tipo === '' ? `` : `&rc_tipo=${dto.tipo}`) +
            (dto.numero === '' ? `` : `&rc_numero=${dto.numero}`) +
            (dto.titulo === '' ? `` : `&rc_titulo=${dto.titulo}`) +
            (dto.subtipo === '' ? `` : `&rc_subtipo=${dto.subtipo}`) +
            (dto.mercado === '' ? `` : `&rc_mercado=${dto.mercado}`) +
            (dto.del === '' ? `` : `&del=${this.formatDate(dto.del)}`) +
            (dto.al === '' ? `` : `&al=${this.formatDate(dto.al)}`);
        return this.http.get(returl, { responseType: "blob" });
    }
    /** TRAE NOTIFICACIONES POR CODIGO DE DOCUMENTOS */
    getNotificaciones(model, id = 0) {
        return this.http.get(`${this.url}/${model}/getNotificaciones/${id}`).pipe();
    }
    /** TRAE NOTIFICACIONES POR CODIGO DE DOCUMENTOS */
    getSeguimientos(id = 0) {
        return this.http.get(`${this.url}/seguimiento/${id}`).pipe();
    }
    //#endregion
    formatDate(date) {
        const dateFormat = new Date(date);
        return dateFormat.getFullYear() + '-' + (dateFormat.getMonth() + 1) + '-' + dateFormat.getDate();
        //return dateFormat
        //return 'sergio'+
    }
    /** DOWNLOAD GET FILE */
    getManual() {
        const returl = `${this.url}/cartas_resoluciones/manual`;
        return this.http.get(returl, { responseType: "blob" });
    }
}
ConsultasService.ɵfac = function ConsultasService_Factory(t) { return new (t || ConsultasService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ConsultasService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ConsultasService, factory: ConsultasService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8900:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/01-consultas/dialog-aprobado/dialog-aprobado.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogAprobadoComponent": () => (/* binding */ DialogAprobadoComponent)
/* harmony export */ });
/* harmony import */ var D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material-moment-adapter */ 6561);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 4369);
/* harmony import */ var src_app_models_words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/words */ 8046);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _consultas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../consultas.service */ 7580);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-pdf-viewer */ 2214);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 6246);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 338);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ 3177);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);

















function DialogAprobadoComponent_b_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}

function DialogAprobadoComponent_div_139_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 27)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 29)(5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 30)(9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 12)(12, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r6.t_ciudad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 5, data_r6.t_fecha, "dd/MM/yyyy"), "-", data_r6.t_hora, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r6.t_aquien, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r6.t_atraves, " ");
  }
}

function DialogAprobadoComponent_div_149_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 12)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 30)(5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 30)(8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r7.accion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r7.usuario, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 3, data_r7.fechaCreacion, "dd/MM/yyyy hh:mm"), " ");
  }
}

function DialogAprobadoComponent_pdf_viewer_152_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "pdf-viewer", 31);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r3.src)("render-text", true)("original-size", false);
  }
}

function DialogAprobadoComponent_div_153_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Sin documento adjunto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

function DialogAprobadoComponent_div_157_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 33)(1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DialogAprobadoComponent_div_157_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.downloadpdf());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Descargar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}

class DialogAprobadoComponent {
  constructor(dialogRef, data, rest) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.rest = rest; //Palabras Internacionalizadas

    this._words = src_app_models_words__WEBPACK_IMPORTED_MODULE_1__.Words;
    this.dataNotificaciones = [];
    this.dataSeguimientos = [];
    this.disabledNotificaciones = false;
    this.src = "";
  }

  ngOnInit() {
    var _this = this;

    return (0,D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.data.data.rc_tipo == 'RA') {
        _this.disabledNotificaciones = true;
      }

      _this.rest.getNotificaciones('notificaciones', _this.data.data.id).subscribe(data => {
        _this.dataNotificaciones = data.data;
      });

      yield _this.rest.getSeguimientos(_this.data.data.id).subscribe(data => {
        _this.dataSeguimientos = data.data;
        console.log('datadatadatadatadatadatadatadatadatadatadatadatadatadatadatadata', data.data);
      });

      _this.openPdf();
    })();
  }

  openPdf() {
    const pdf = this.data.data.rc_filename;

    if (pdf != '') {
      this.rest.getFile('cartas_resoluciones', this.data.data.id).subscribe(res => {
        const fileURL = URL.createObjectURL(res);
        this.src = fileURL;
      });
    }
  }

  downloadPdf() {
    this.rest.getFile('cartas_resoluciones', this.data.data.id).subscribe(res => {
      const fileURL = URL.createObjectURL(res);
      window.open(fileURL, '_blank');
    });
  }

  downloadpdf() {
    this.rest.getFile('cartas_resoluciones', this.data.data.id).subscribe(res => {
      var newBlob = new Blob([res], {
        type: "application/pdf"
      });
      const data = window.URL.createObjectURL(newBlob);
      var link = document.createElement('a');
      link.href = data;
      link.download = this.data.data.rc_numero + "-" + this.data.data.rc_year + "-" + this.data.data.entidad_short + this.data.data.rc_tipo;
      link.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      }));
      setTimeout(function () {
        window.URL.revokeObjectURL(data);
      }, 100);
    }, error => {
      this.dialogRef.close();
      console.log(error);
    });
  }

  close(state) {
    this.dialogRef.close(state);
  }

}

DialogAprobadoComponent.ɵfac = function DialogAprobadoComponent_Factory(t) {
  return new (t || DialogAprobadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_consultas_service__WEBPACK_IMPORTED_MODULE_2__.ConsultasService));
};

DialogAprobadoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: DialogAprobadoComponent,
  selectors: [["app-dialog-aprobado"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_LOCALE,
    useValue: 'es-BO'
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.DateAdapter,
    useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__.MomentDateAdapter,
    deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_LOCALE, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MAT_DATE_FORMATS,
    useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_6__.MAT_MOMENT_DATE_FORMATS
  }])],
  decls: 158,
  vars: 23,
  consts: [["fxLayout", "row wrap"], ["src", "assets/images/logo-aps.png", "alt", "homepage", 1, "light-logo"], ["fxFlex", ""], ["mat-icon-button", "", "color", "warn", "matDialogClose", "cancel", "matTooltip", "Salir", 3, "click"], ["mat-dialog-title", "", 1, "head-dialog", 2, "text-align", "center"], ["mat-dialog-content", ""], ["fxLayout", "row"], ["fxFlex.gt-lg", "100", "fxFlex.gt-md", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-lg", "50", "fxFlex.gt-md", "50", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["label", "Documento"], ["fxFlex.gt-lg", "20", "fxFlex.gt-md", "20", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-label"], ["fxFlex.gt-lg", "80", "fxFlex.gt-md", "80", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-label"], ["fxFlex.gt-lg", "20", "fxFlex.gt-md", "20", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "formulario"], ["fxFlex.gt-lg", "80", "fxFlex.gt-md", "80", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "formulario"], [4, "ngIf"], ["label", "Notificaciones"], ["fxFlex.gt-lg", "10", "fxFlex.gt-md", "10", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-label"], ["fxFlex.gt-lg", "30", "fxFlex.gt-md", "30", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-label"], ["fxFlex.gt-lg", "40", "fxFlex.gt-md", "40", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-label"], ["fxLayout", "row wrap", 4, "ngFor", "ngForOf"], ["label", "Seguimiento"], ["fxFlex.gt-lg", "50", "fxFlex.gt-md", "50", "fxFlex.gt-xs", "100", "fxFlex", "100", 2, "text-align", "center"], ["style", "height: 400px;", 3, "src", "render-text", "original-size", 4, "ngIf"], ["mat-dialog-actions", "", "fxLayout", "row wrap"], ["fxFlex.gt-lg", "80", "fxFlex.gt-md", "80", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-lg", "20", "fxFlex.gt-md", "20", "fxFlex.gt-xs", "100", "fxFlex", "100", 2, "text-align", "right"], ["class", "form-element", 4, "ngIf"], ["fxFlex.gt-lg", "10", "fxFlex.gt-md", "10", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "formulario"], [1, "formulario"], ["fxFlex.gt-lg", "30", "fxFlex.gt-md", "30", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "formulario"], ["fxFlex.gt-lg", "40", "fxFlex.gt-md", "40", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "formulario"], [2, "height", "400px", 3, "src", "render-text", "original-size"], ["src", "assets/images/pdf-error.png", "alt", "homepage", 1, "light-logo", 2, "height", "200px"], [1, "form-element"], ["mat-button", "", "color", "primary", 3, "click"]],
  template: function DialogAprobadoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DialogAprobadoComponent_Template_button_click_4_listener() {
        return ctx.close("close");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Ficha de documento");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "mat-tab-group")(14, "mat-tab", 9)(15, "div", 0)(16, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Atributo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Descripci\u00F3n ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 7)(21, "div", 12)(22, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Publicado:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " El documento ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, DialogAprobadoComponent_b_26_Template, 2, 0, "b", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " se encuentra publicado en la Web. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 7)(30, "div", 12)(31, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Entidad:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 7)(37, "div", 12)(38, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Documento:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 7)(44, "div", 12)(45, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Tipo Resoluci\u00F3n:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 7)(51, "div", 12)(52, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "N\u00FAmero:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 7)(58, "div", 12)(59, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Geti\u00F3n:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 7)(65, "div", 12)(66, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Fecha:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](70, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 7)(73, "div", 12)(74, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "T\u00EDtulo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](78, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 7)(80, "div", 12)(81, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Mercado:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](85, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 7)(87, "div", 12)(88, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, "Comentarios:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](92, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 7)(94, "div", 12)(95, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Nombre del Archivo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](99, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 7)(101, "div", 12)(102, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "Tama\u00F1o del archivo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](106, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 7)(108, "div", 12)(109, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Creado por:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](113, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 7)(115, "div", 12)(116, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "Derivado a:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](120, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "div", 7)(122, "div", 12)(123, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "Estado:");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](127, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "mat-tab", 15)(129, "div")(130, "div", 0)(131, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, " Ciudad ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](134, " Fecha/Hora ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, " Emitida a ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, " A trav\u00E9s ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](139, DialogAprobadoComponent_div_139_Template, 14, 8, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](140, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "mat-tab", 20)(142, "div", 0)(143, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, " Accion ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, " Usuario ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, " Fecha y Hora ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](149, DialogAprobadoComponent_div_149_Template, 11, 6, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](150, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](152, DialogAprobadoComponent_pdf_viewer_152_Template, 1, 3, "pdf-viewer", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](153, DialogAprobadoComponent_div_153_Template, 4, 0, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](155, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](157, DialogAprobadoComponent_div_157_Template, 5, 0, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.data.data.rc_publicar_web);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.data.data.entidad, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.data.data.tipo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.data.data.subtipo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.data.data.rc_numero, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.data.data.rc_year, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](70, 20, ctx.data.data.rc_fecha, "dd/MM/yyyy"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.data.data.rc_titulo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.data.data.mercado, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.data.data.rc_comentarios, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.data.data.rc_filename, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.data.data.rc_filesize, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.data.data.usuario_creacion, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.data.data.usuario, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.data.data.etapa, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.dataNotificaciones);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.dataSeguimientos);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.data.rc_filesize > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.data.rc_filesize == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.data.rc_filesize > 0);
    }
  },
  dependencies: [ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_7__.PdfViewerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDivider, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__.MatTab, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
  styles: [".form-element[_ngcontent-%COMP%] {\r\n  padding: 0.1px 2px;\r\n  width: 100%;\r\n}\r\n\r\n  .mat-form-field-flex > .mat-form-field-infix { padding: 0.6em 0px !important;}\r\n\r\n  .mat-form-field-subscript-wrapper {\r\n  font-size: 65%;\r\n  margin-top: 0.2em;\r\n  top: calc(100% - 2em);\r\n}\r\n\r\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\r\n    transform: translateY(-1.7em) scale(.75);\r\n    width: 100%;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  font-weight: 300;\r\n  line-height: 1.2;\r\n  font-family: Poppins, sans-serif;\r\n  letter-spacing: normal;\r\n}\r\n\r\n.close-button[_ngcontent-%COMP%]{\r\n  float: right;\r\n  top:-5px;\r\n  right:-5px;\r\n  color: red;\r\n}\r\n\r\n.image-logo[_ngcontent-%COMP%]{\r\n  float: left;\r\n  top:-5px;\r\n  left:-5px;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .form-label[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n\r\n.formulario[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  font-weight: 300;\r\n  line-height: 1.2;\r\n  padding-top: 1px;\r\n  font-family: Poppins, sans-serif;\r\n  letter-spacing: normal;\r\n}\r\n\r\n@media (min-width: 800px) {\r\n  .form-label[_ngcontent-%COMP%]{\r\n    padding: 5px 2px;\r\n    font-size: 10px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    background-color: #007CC3;\r\n    color: aliceblue;\r\n  }\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .form-search[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (min-width: 800px) {\r\n  .form-search[_ngcontent-%COMP%]{\r\n    padding: 3px 2px;\r\n    font-size: 12px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  }\r\n}\r\n\r\n.form-table[_ngcontent-%COMP%]{\r\n  padding-top: 0.3em;\r\n\r\n}\r\n\r\n.buttonTable[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  min-width: 0;\r\n  width: 40px;\r\n  height: 20px;\r\n  flex-shrink: 0;\r\n  line-height: 20px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.form-element[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.mat-card-actions[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n  .error{\r\n  color:white;\r\n  background: rgb(253, 180, 177) !important;\r\n}\r\n\r\n  .ok{\r\n  color:white;\r\n  background: rgb(204, 250, 218) !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy1hcHJvYmFkby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQSx5REFBeUQsNkJBQTZCLENBQUM7O0FBQ3ZGO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsV0FBVztBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixRQUFRO0VBQ1IsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUdBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdEQUFnRDtJQUNoRCx5QkFBeUI7SUFDekIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBSUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdEQUFnRDtFQUNsRDtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFHQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUdBO0VBQ0UsV0FBVztFQUNYLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5Q0FBeUM7QUFDM0MiLCJmaWxlIjoiZGlhbG9nLWFwcm9iYWRvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1lbGVtZW50IHtcclxuICBwYWRkaW5nOiAwLjFweCAycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7IHBhZGRpbmc6IDAuNmVtIDBweCAhaW1wb3J0YW50O31cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XHJcbiAgZm9udC1zaXplOiA2NSU7XHJcbiAgbWFyZ2luLXRvcDogMC4yZW07XHJcbiAgdG9wOiBjYWxjKDEwMCUgLSAyZW0pO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuN2VtKSBzY2FsZSguNzUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9ue1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB0b3A6LTVweDtcclxuICByaWdodDotNXB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLmltYWdlLWxvZ297XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdG9wOi01cHg7XHJcbiAgbGVmdDotNXB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmZvcm0tbGFiZWx7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm11bGFyaW8ge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxuICBmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAuZm9ybS1sYWJlbHtcclxuICAgIHBhZGRpbmc6IDVweCAycHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0MzO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmZvcm0tc2VhcmNoe1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xyXG4gIC5mb3JtLXNlYXJjaHtcclxuICAgIHBhZGRpbmc6IDNweCAycHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS10YWJsZXtcclxuICBwYWRkaW5nLXRvcDogMC4zZW07XHJcblxyXG59XHJcblxyXG4uYnV0dG9uVGFibGUge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBmbGV4LXNocmluazogMDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmZvcm0tZWxlbWVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4ubWF0LWNhcmQtYWN0aW9ucywgLm1hdC1jYXJkLXN1YnRpdGxlLCAubWF0LWNhcmQtY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAuZXJyb3J7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1MywgMTgwLCAxNzcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAub2t7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIwNCwgMjUwLCAyMTgpICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_pages_01-consultas_consultas_module_ts.js.map