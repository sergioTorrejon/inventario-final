"use strict";
(self["webpackChunkproject"] = self["webpackChunkproject"] || []).push([["src_app_pages_03-verificaciones_verificacion_module_ts"],{

/***/ 2031:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/03-verificaciones/dialog-update/dialog-update.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogUpdateComponent": () => (/* binding */ DialogUpdateComponent)
/* harmony export */ });
/* harmony import */ var D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material-moment-adapter */ 6561);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 4369);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var src_app_models_words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/words */ 8046);
/* harmony import */ var _notificados_dialog_notificados_insert_dialog_notificados_insert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notificados/dialog-notificados-insert/dialog-notificados-insert.component */ 9883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _verificacion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../verificacion.service */ 5378);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 8369);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-pdf-viewer */ 2214);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 2288);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 5342);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 6246);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 9757);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 1412);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);
























function DialogUpdateComponent_mat_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r6.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r6.label);
  }
}

function DialogUpdateComponent_mat_option_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r7.cod_ele);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r7.descrip);
  }
}

function DialogUpdateComponent_div_110_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Ciudad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Fecha/Hora ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Emitida a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " A trav\u00E9s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}

function DialogUpdateComponent_div_110_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 35)(2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 37)(5, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 38)(9, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 39)(12, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const data_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r10.t_ciudad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 5, data_r10.t_fecha, "dd/MM/yyyy"), "-", data_r10.t_hora, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r10.t_aquien, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r10.t_atraves, " ");
  }
}

function DialogUpdateComponent_div_110_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, DialogUpdateComponent_div_110_div_3_Template, 9, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DialogUpdateComponent_div_110_div_4_Template, 14, 8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2._words.esp.registroNotificaciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.dataNotificaciones.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.dataNotificaciones);
  }
}

function DialogUpdateComponent_div_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "pdf-viewer", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r3.src)("render-text", true)("original-size", false);
  }
}

function DialogUpdateComponent_div_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "El archivo no fue registrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}

function DialogUpdateComponent_div_128_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25)(1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogUpdateComponent_div_128_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.downloadPdf());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Descargar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}

class DialogUpdateComponent {
  constructor(formBuilder, dialogRef, data, rest, dialog, _snackBar) {
    this.formBuilder = formBuilder;
    this.dialogRef = dialogRef;
    this.data = data;
    this.rest = rest;
    this.dialog = dialog;
    this._snackBar = _snackBar; //Palabras Internacionalizadas

    this._words = src_app_models_words__WEBPACK_IMPORTED_MODULE_1__.Words;
    this.dataRow = [];
    this.dataNotificaciones = [];
    this.disabledNotificaciones = false;
    this.disabled = false;
    this.disabledObservaciones = false;
    this.dataAutoComplete = [];
    this.nameFileValidation = {
      numero: '',
      fecha: '',
      tipo: '',
      val: '',
      status: ''
    };
    this.dataOptions = []; //fileUpload: ElementRef;

    this.publicar = [{
      value: true,
      label: 'Publicar'
    }, {
      value: false,
      label: 'No publicar'
    }];
    this.formControl = {
      'rc_inten': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      'rc_tipo': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      'rc_mercado': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      'rc_subtipo': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      'rc_publicar_web': [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      'rc_numero': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(4)]],
      'rc_alfa': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(1)]],
      'rc_fecha': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      'rc_titulo': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(1000)]],
      'rc_comentarios': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(2000)]],
      'rc_filename': [''],
      'observaciones': ['']
    };
    this.formControlNotificaciones = {
      'id': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      'rc_id': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      't_ciudad': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      't_fecha': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      't_hora': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      't_aquien': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(300)]],
      't_atraves': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(300)]],
      'estado': [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
    };
    this.src = "";
    this.formGroup = this.formBuilder.group(this.formControl);
    this.formGroupNotificacion = this.formBuilder.group(this.formControlNotificaciones);
  }

  ngOnInit() {
    var _this = this;

    return (0,D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('dddd', _this.data);

      _this.rest.getNotificaciones('notificaciones', _this.data.data.id).subscribe(data => {
        _this.dataNotificaciones = data.data;
      });

      _this.rest.getOptions().subscribe(data => {
        _this.dataOptions = data.data;
        console.log(_this.dataOptions);
      });

      _this.formControl = {
        rc_inten: [_this.data.data.rc_inten, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        rc_tipo: [_this.data.data.rc_tipo, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        rc_mercado: [_this.data.data.rc_mercado, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        rc_subtipo: [_this.data.data.rc_subtipo, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        rc_publicar_web: [_this.data.data.rc_publicar_web, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        rc_numero: [_this.data.data.rc_numero, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(4)]],
        rc_alfa: [_this.data.data.rc_alfa, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(1)]],
        rc_fecha: [_this.data.data.rc_fecha, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        rc_titulo: [_this.data.data.rc_titulo, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(1000)]],
        rc_comentarios: [_this.data.data.rc_comentarios, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(2000)]],
        rc_filename: [_this.data.data.rc_filename],
        observaciones: ['']
      };
      _this.nameFileValidation.tipo = _this.data.data.rc_tipo;
      _this.nameFileValidation.numero = _this.data.data.rc_numero;
      _this.nameFileValidation.fecha = new Date(_this.data.data.rc_fecha).getFullYear().toString().substring(2, 4);

      _this.validationNameFile();

      _this.formGroup = _this.formBuilder.group(_this.formControl);

      _this.formOnchange();

      _this.getNotificados();

      _this.formGroup.controls['rc_subtipo'].disable(); //this.formGroup.controls['rc_fileName'].disable();


      _this.formGroup.controls['rc_alfa'].disable();

      if (_this.data.data.rc_tipo == 'RA') {
        _this.formGroup.controls['rc_subtipo'].enable();

        _this.disabledNotificaciones = true;
      }

      _this.formGroup.controls['observaciones'].valueChanges.subscribe( /*#__PURE__*/function () {
        var _ref = (0,D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          _this.disabledObservaciones = true;

          if (data.length < 2) {
            _this.disabledObservaciones = false;
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());

      _this.formGroup.controls['rc_tipo'].valueChanges.subscribe( /*#__PURE__*/function () {
        var _ref2 = (0,D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          _this.disabledNotificaciones = true;
          _this.dataNotificaciones = [];

          _this.formGroup.controls['rc_subtipo'].enable();

          if (data != 'RA') {
            _this.disabledNotificaciones = false;

            _this.formGroup.controls['rc_subtipo'].disable();

            _this.formGroup.controls['rc_subtipo'].setValue('');
          }
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());

      _this.formGroup.controls['rc_numero'].disable();

      _this.formGroup.controls['rc_inten'].disable();

      _this.formGroup.controls['rc_tipo'].disable();

      _this.formGroup.controls['rc_filename'].disable();

      _this.formGroup.controls['rc_mercado'].disable(); //this.formGroup.controls['rc_mercado'].disable();


      _this.formGroupNotificacion.controls['t_aquien'].valueChanges.subscribe( /*#__PURE__*/function () {
        var _ref3 = (0,D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          console.log(data);

          _this.rest.getNotificadosFilter('notificados', data).subscribe(data => {
            _this.dataAutoComplete = data;
            console.log(data);
          });
        });

        return function (_x3) {
          return _ref3.apply(this, arguments);
        };
      }());

      _this.openPdf();
    })();
  }

  openPdf() {
    const pdf = this.formGroup.controls['rc_filename'].value;

    if (pdf != '') {
      this.rest.getFile('cartas_resoluciones', this.data.data.id).subscribe(res => {
        const fileURL = URL.createObjectURL(res);
        this.src = fileURL; //window.open(fileURL, '_blank');
      });
    }
  }

  onSelectFile(event) {
    this.file = event.target.files[0];
    const fileName = this.file.name.substring(0, 10);

    if (fileName == this.nameFileValidation.val) {
      this.formGroup.controls.rc_filename.setValue(this.file.name);
      this.nameFileValidation.status = 'valido';
    } else {
      this.openSnackBar('Nombre de Archivo Invalido: ' + this.file.name, '', 'error');
      this.clearFile();
    }
  }

  clearFile() {
    this.file = '';
    this.formGroup.controls.rc_filename.setValue('');
    this.nameFileValidation.status = 'invalido';
  }

  formOnchange() {
    var _this2 = this;

    this.formGroup.controls['rc_tipo'].valueChanges.subscribe( /*#__PURE__*/function () {
      var _ref4 = (0,D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        _this2.nameFileValidation.tipo = data;

        _this2.validationNameFile();
      });

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }());
    this.formGroup.controls['rc_numero'].valueChanges.subscribe( /*#__PURE__*/function () {
      var _ref5 = (0,D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        _this2.nameFileValidation.numero = data;

        _this2.validationNameFile();
      });

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }());
    this.formGroup.controls['rc_fecha'].valueChanges.subscribe( /*#__PURE__*/function () {
      var _ref6 = (0,D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        _this2.nameFileValidation.fecha = new Date(data).getFullYear().toString().substring(2, 4);

        _this2.validationNameFile();
      });

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }());
  }

  validationNameFile() {
    this.nameFileValidation.val = '';
    this.nameFileValidation.status = '';
    const nameVal = this.nameFileValidation.numero + '-' + this.nameFileValidation.fecha + '-' + this.nameFileValidation.tipo;

    if (nameVal.length == 10) {
      this.nameFileValidation.val = nameVal;
      this.formGroup.controls['rc_filename'].enable();
    }

    if (this.nameFileValidation.val != this.formGroup.controls.rc_filename.value.substring(0, 10) && this.formGroup.controls.rc_inten.value == 'PS') {
      this.formGroup.controls.rc_filename.setValue('');
    }
  }

  deleteRow(rowSelect) {
    var i = this.dataNotificaciones.indexOf(rowSelect);

    if (rowSelect.id != 0) {
      this.rest.delete('notificaciones', rowSelect.id).subscribe(data => {});
    }

    this.dataNotificaciones.splice(i, 1);
  }

  saveNotificaciones(data) {
    this.dataNotificaciones.push(data);
    this.formGroupNotificacion = this.formBuilder.group(this.formControlNotificaciones);
  }

  onSubmit(post) {
    const dto = this.formGroup.getRawValue();
    const formData = new FormData();
    formData.append('file', this.file);

    for (let i in post) {
      formData.append(i, post[i]);
    }

    formData.append('notificaciones', JSON.stringify(this.dataNotificaciones));
    this.rest.update('cartas_resoluciones', this.data.data.id, post, formData).subscribe(data => {
      this.dataRow = data.data;
      console.log(this.dataRow, data);
      this.close('confirm');
    });
  }

  refuse(post) {
    this.rest.refuse('cartas_resoluciones', this.data.data.id, post).subscribe(data => {
      this.dataRow = data.data;
      console.log(this.dataRow, data);
      this.close('confirm');
    });
  }

  checker(post) {
    console.log(post);
    this.rest.checker('cartas_resoluciones', this.data.data.id, post).subscribe(data => {
      this.dataRow = data.data;
      this.close('confirm');
    });
  }

  enableAlpha(event) {
    this.formGroup.controls['rc_alfa'].enable();

    if (!event) {
      this.formGroup.controls['rc_alfa'].disable();
      this.formGroup.controls['rc_alfa'].setValue('');
    }

    this.formGroup.controls['rc_alfa'].setValue('');
    console.log(event);
  }

  insertNotificados() {
    var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogConfig();
    dialogConfig.width = '600px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {};
    let dialogRef = this.dialog.open(_notificados_dialog_notificados_insert_dialog_notificados_insert_component__WEBPACK_IMPORTED_MODULE_2__.DialogNotificadosInsertComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.rest.getNotificadosFilter('notificados').subscribe(data => {
        this.dataAutoComplete = data;
        console.log(data);
      });
    });
  }

  getAutoComplete() {
    this.rest.getData('notificados').subscribe(data => {
      this.dataOptions = data.data;
      console.log(data);
    });
  }

  getNotificados() {
    this.rest.getNotificadosFilter('notificados').subscribe(data => {
      this.dataAutoComplete = data;
    });
  }

  close(state) {
    this.dialogRef.close(state);
  } //SNACKBAR


  openSnackBar(message, action, type) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [type]
    });
  }

}

DialogUpdateComponent.ɵfac = function DialogUpdateComponent_Factory(t) {
  return new (t || DialogUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_verificacion_service__WEBPACK_IMPORTED_MODULE_3__.VerificacionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar));
};

DialogUpdateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DialogUpdateComponent,
  selectors: [["app-dialog-update"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MAT_DATE_LOCALE,
    useValue: 'es-BO'
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.DateAdapter,
    useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__.MomentDateAdapter,
    deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MAT_DATE_LOCALE, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MAT_DATE_FORMATS,
    useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__.MAT_MOMENT_DATE_FORMATS
  }])],
  decls: 143,
  vars: 27,
  consts: [["fxLayout", "row wrap"], ["src", "assets/images/logo-aps.png", "alt", "homepage", 1, "light-logo"], ["fxFlex", ""], ["mat-icon-button", "", "color", "warn", "matDialogClose", "cancel", "matTooltip", "Salir", 3, "click"], ["mat-dialog-title", "", 1, "head-dialog", 2, "text-align", "center"], ["mat-dialog-content", ""], ["fxFlex.gt-lg", "100", "fxFlex.gt-md", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-lg", "50", "fxFlex.gt-md", "50", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-lg", "20", "fxFlex.gt-md", "20", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "formulario"], ["fxFlex.gt-lg", "80", "fxFlex.gt-md", "80", "fxFlex.gt-xs", "100", "fxFlex", "100"], [3, "formGroup"], ["appearance", "outline", 1, "form-element"], ["formControlName", "rc_publicar_web"], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex.gt-lg", "80", "fxFlex.gt-md", "80", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "formulario"], ["formControlName", "rc_subtipo"], ["matInput", "", "formControlName", "rc_titulo", "maxlength", "1000"], ["matInput", "", "formControlName", "rc_comentarios", "maxlength", "2000"], [4, "ngIf"], ["style", "text-align: center;", "fxFlex.gt-lg", "50", "fxFlex.gt-md", "50", "fxFlex.gt-xs", "100", "fxFlex", "100", 4, "ngIf"], ["mat-dialog-actions", "", "fxLayout", "row wrap"], ["matInput", "", "formControlName", "observaciones", "maxlength", "250"], ["fxFlex.gt-lg", "20", "fxFlex.gt-md", "20", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["class", "form-element", 4, "ngIf"], ["fxFlex.gt-lg", "15", "fxFlex.gt-md", "15", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "form-element"], ["mat-raised-button", "", "color", "warn", "matTooltip", "Registrar", 1, "form-element", 3, "disabled", "click"], ["mat-raised-button", "", "matTooltip", "Registrar", 1, "form-element", 2, "background-color", "green", "color", "white", 3, "disabled", "click"], [3, "value"], ["fxLayout", "row wrap", 4, "ngIf"], ["fxLayout", "row wrap", 4, "ngFor", "ngForOf"], ["fxFlex.gt-lg", "10", "fxFlex.gt-md", "10", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-label"], ["fxFlex.gt-lg", "20", "fxFlex.gt-md", "20", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-label"], ["fxFlex.gt-lg", "40", "fxFlex.gt-md", "40", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-label"], ["fxFlex.gt-lg", "30", "fxFlex.gt-md", "30", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-label"], ["fxFlex.gt-lg", "10", "fxFlex.gt-md", "10", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-search"], [1, "form-search"], ["fxFlex.gt-lg", "30", "fxFlex.gt-md", "30", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-search"], ["fxFlex.gt-lg", "40", "fxFlex.gt-md", "40", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-search"], ["fxFlex.gt-lg", "20", "fxFlex.gt-md", "20", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-search"], ["fxFlex.gt-lg", "50", "fxFlex.gt-md", "50", "fxFlex.gt-xs", "100", "fxFlex", "100", 2, "text-align", "center"], [2, "height", "400px", 3, "src", "render-text", "original-size"], ["src", "assets/images/pdf-error.png", "alt", "homepage", 1, "light-logo", 2, "height", "300px"], ["mat-button", "", "color", "primary", 3, "click"]],
  template: function DialogUpdateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogUpdateComponent_Template_button_click_4_listener() {
        return ctx.close("close");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Aprobaci\u00F3n de documentos");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5)(10, "mat-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 0)(13, "div", 6)(14, "div", 0)(15, "div", 7)(16, "div", 0)(17, "div", 6)(18, "div", 8)(19, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Publicado:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 9)(22, "form", 10)(23, "mat-form-field", 11)(24, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Publicar en la web");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, DialogUpdateComponent_mat_option_27_Template, 2, 2, "mat-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 6)(29, "div", 8)(30, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Documento:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 6)(35, "div", 8)(36, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Tipo Resoluci\u00F3n:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 14)(39, "form", 10)(40, "mat-form-field", 11)(41, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Tipo de Resoluci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "mat-select", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, DialogUpdateComponent_mat_option_44_Template, 2, 2, "mat-option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Seleccione el tipo de Resolucion");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 6)(48, "div", 8)(49, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Fecha:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](53, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 6)(55, "div", 8)(56, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "N\u00FAmero:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 6)(61, "div", 8)(62, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Mercado:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 6)(67, "div", 8)(68, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, "Titulo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "div", 14)(71, "form", 10)(72, "mat-form-field", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "input", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, "Ingrese el titulo de la Resolucion");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 6)(77, "div", 8)(78, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "Comentario:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 14)(81, "form", 10)(82, "mat-form-field", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "Ingrese un comentario");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 6)(87, "div", 8)(88, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "Nombre del Archivo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 6)(93, "div", 8)(94, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "Creado por:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "div", 6)(99, "div", 8)(100, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "Derivado a:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "div", 6)(105, "div", 8)(106, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "Estado:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](110, DialogUpdateComponent_div_110_Template, 5, 3, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](111, DialogUpdateComponent_div_111_Template, 2, 3, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](112, DialogUpdateComponent_div_112_Template, 4, 0, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "div", 20)(114, "div", 7)(115, "div", 6)(116, "div", 8)(117, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, "Observaciones:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "div", 14)(120, "form", 10)(121, "mat-form-field", 11)(122, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](123, "*Requerido solo en caso de rechazo del registro");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](124, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, "Ingrese un comentario");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](128, DialogUpdateComponent_div_128_Template, 5, 0, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "div", 24)(130, "form", 10)(131, "div", 25)(132, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogUpdateComponent_Template_button_click_132_listener() {
        return ctx.refuse(ctx.formGroup.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](134, "cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](135, " Rechazar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "div", 24)(137, "form", 10)(138, "div", 25)(139, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogUpdateComponent_Template_button_click_139_listener() {
        return ctx.checker(ctx.formGroup.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](140, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](141, "done");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](142, " Aprobar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx._words.esp.datosDocumento);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.dataOptions.publicar);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.data.tipo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.dataOptions.tipo);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](53, 24, ctx.data.data.rc_fecha, "dd/MM/yyyy"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.data.rc_numero, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.data.mercado, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.data.rc_filename, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.data.usuario_creacion, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.data.usuario, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.data.etapa, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.disabledNotificaciones);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.data.rc_filesize > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.data.rc_filesize == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.data.rc_filesize > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.disabledObservaciones);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_10__.PdfViewerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardSubtitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: [".form-element[_ngcontent-%COMP%] {\r\n  padding: 0.1px 2px;\r\n  width: 100%;\r\n}\r\n\r\n  .mat-form-field-flex > .mat-form-field-infix { padding: 0.6em 0px !important;}\r\n\r\n  .mat-form-field-subscript-wrapper {\r\n  font-size: 65%;\r\n  margin-top: 0.2em;\r\n  top: calc(100% - 2em);\r\n}\r\n\r\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\r\n    transform: translateY(-1.7em) scale(.75);\r\n    width: 100%;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  font-weight: 300;\r\n  line-height: 1.2;\r\n  font-family: Poppins, sans-serif;\r\n  letter-spacing: normal;\r\n}\r\n\r\n.close-button[_ngcontent-%COMP%]{\r\n  float: right;\r\n  top:-5px;\r\n  right:-5px;\r\n  color: red;\r\n}\r\n\r\n.image-logo[_ngcontent-%COMP%]{\r\n  float: left;\r\n  top:-5px;\r\n  left:-5px;\r\n}\r\n\r\n.formulario[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  font-weight: 300;\r\n  padding-top: 1px;\r\n  line-height: 1.2;\r\n  font-family: Poppins, sans-serif;\r\n  letter-spacing: normal;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .form-label[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (min-width: 800px) {\r\n  .form-label[_ngcontent-%COMP%]{\r\n    padding: 5px 2px;\r\n    font-size: 10px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    background-color: #007CC3;\r\n    color: aliceblue;\r\n  }\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .form-search[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (min-width: 800px) {\r\n  .form-search[_ngcontent-%COMP%]{\r\n    padding: 3px 2px;\r\n    font-size: 12px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  }\r\n}\r\n\r\n.form-table[_ngcontent-%COMP%]{\r\n  padding-top: 0.3em;\r\n\r\n}\r\n\r\n.buttonTable[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  min-width: 0;\r\n  width: 40px;\r\n  height: 20px;\r\n  flex-shrink: 0;\r\n  line-height: 20px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.form-element[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.mat-card-actions[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n  .error{\r\n  color:white;\r\n  background: rgb(253, 180, 177) !important;\r\n}\r\n\r\n  .ok{\r\n  color:white;\r\n  background: rgb(204, 250, 218) !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy11cGRhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUEseURBQXlELDZCQUE2QixDQUFDOztBQUN2RjtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLFdBQVc7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osUUFBUTtFQUNSLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnREFBZ0Q7SUFDaEQseUJBQXlCO0lBQ3pCLGdCQUFnQjtFQUNsQjtBQUNGOztBQUlBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnREFBZ0Q7RUFDbEQ7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBR0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLFdBQVc7RUFDWCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUNBQXlDO0FBQzNDIiwiZmlsZSI6ImRpYWxvZy11cGRhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWVsZW1lbnQge1xyXG4gIHBhZGRpbmc6IDAuMXB4IDJweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4ID4gLm1hdC1mb3JtLWZpZWxkLWluZml4IHsgcGFkZGluZzogMC42ZW0gMHB4ICFpbXBvcnRhbnQ7fVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcclxuICBmb250LXNpemU6IDY1JTtcclxuICBtYXJnaW4tdG9wOiAwLjJlbTtcclxuICB0b3A6IGNhbGMoMTAwJSAtIDJlbSk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS43ZW0pIHNjYWxlKC43NSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbn1cclxuXHJcbi5jbG9zZS1idXR0b257XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHRvcDotNXB4O1xyXG4gIHJpZ2h0Oi01cHg7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4uaW1hZ2UtbG9nb3tcclxuICBmbG9hdDogbGVmdDtcclxuICB0b3A6LTVweDtcclxuICBsZWZ0Oi01cHg7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMsIHNhbnMtc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmZvcm0tbGFiZWx7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XHJcbiAgLmZvcm0tbGFiZWx7XHJcbiAgICBwYWRkaW5nOiA1cHggMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0NDMztcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5mb3JtLXNlYXJjaHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAuZm9ybS1zZWFyY2h7XHJcbiAgICBwYWRkaW5nOiAzcHggMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tdGFibGV7XHJcbiAgcGFkZGluZy10b3A6IDAuM2VtO1xyXG5cclxufVxyXG5cclxuLmJ1dHRvblRhYmxlIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1pbi13aWR0aDogMDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5mb3JtLWVsZW1lbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLm1hdC1jYXJkLWFjdGlvbnMsIC5tYXQtY2FyZC1zdWJ0aXRsZSwgLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgLmVycm9ye1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTMsIDE4MCwgMTc3KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm9re1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyMDQsIDI1MCwgMjE4KSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 644:
/*!******************************************************************************************!*\
  !*** ./src/app/pages/03-verificaciones/dialog-verificado/dialog-verificado.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogVerificadoComponent": () => (/* binding */ DialogVerificadoComponent)
/* harmony export */ });
/* harmony import */ var D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material-moment-adapter */ 6561);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 4369);
/* harmony import */ var src_app_models_words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/words */ 8046);
/* harmony import */ var _notificados_dialog_notificados_insert_dialog_notificados_insert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notificados/dialog-notificados-insert/dialog-notificados-insert.component */ 9883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _02_registros_registros_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../02-registros/registros.service */ 9524);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 8369);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-pdf-viewer */ 2214);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 6246);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 9757);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 338);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);





















function DialogVerificadoComponent_b_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function DialogVerificadoComponent_pdf_viewer_118_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "pdf-viewer", 17);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.src)("render-text", true)("original-size", false);
  }
}

function DialogVerificadoComponent_div_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "El archivo no fue registrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}

function DialogVerificadoComponent_div_123_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19)(1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogVerificadoComponent_div_123_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.downloadPdf());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "file_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Descargar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}

class DialogVerificadoComponent {
  constructor(formBuilder, dialogRef, data, rest, dialog, _snackBar) {
    this.formBuilder = formBuilder;
    this.dialogRef = dialogRef;
    this.data = data;
    this.rest = rest;
    this.dialog = dialog;
    this._snackBar = _snackBar; //Palabras Internacionalizadas

    this._words = src_app_models_words__WEBPACK_IMPORTED_MODULE_1__.Words;
    this.dataRow = [];
    this.dataNotificaciones = [];
    this.disabledNotificaciones = false;
    this.disabled = false;
    this.dataAutoComplete = [];
    this.nameFileValidation = {
      numero: '',
      fecha: '',
      tipo: '',
      val: '',
      status: ''
    };
    this.dataOptions = []; //fileUpload: ElementRef;

    this.publicar = [{
      value: true,
      label: 'Publicar'
    }, {
      value: false,
      label: 'No publicar'
    }];
    this.formControl = {
      'rc_inten': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      'rc_tipo': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      'rc_mercado': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      'rc_subtipo': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      'rc_publicar_web': [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      'rc_numero': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(4)]],
      'rc_alfa': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(1)]],
      'rc_fecha': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      'rc_titulo': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(300)]],
      'rc_comentarios': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(200)]],
      'rc_filename': ['']
    };
    this.formControlNotificaciones = {
      'id': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      'rc_id': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      't_ciudad': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      't_fecha': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      't_hora': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      't_aquien': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(300)]],
      't_atraves': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(300)]],
      'estado': [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
    };
    this.src = "";
    this.formGroup = this.formBuilder.group(this.formControl);
    this.formGroupNotificacion = this.formBuilder.group(this.formControlNotificaciones);
  }

  ngOnInit() {
    var _this = this;

    return (0,D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.rest.getNotificaciones('notificaciones', _this.data.data.id).subscribe(data => {
        _this.dataNotificaciones = data.data;
      });

      _this.rest.getOptions().subscribe(data => {
        _this.dataOptions = data.data;
        console.log(_this.dataOptions);
      });

      _this.formControl = {
        rc_inten: [_this.data.data.rc_inten, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        rc_tipo: [_this.data.data.rc_tipo, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        rc_mercado: [_this.data.data.rc_mercado, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        rc_subtipo: [_this.data.data.rc_subtipo, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        rc_publicar_web: [_this.data.data.rc_publicar_web, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        rc_numero: [_this.data.data.rc_numero, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(4)]],
        rc_alfa: [_this.data.data.rc_alfa, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(1)]],
        rc_fecha: [_this.data.data.rc_fecha, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        rc_titulo: [_this.data.data.rc_titulo, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(300)]],
        rc_comentarios: [_this.data.data.rc_comentarios, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(300)]],
        rc_filename: [_this.data.data.rc_filename]
      };
      _this.nameFileValidation.tipo = _this.data.data.rc_tipo;
      _this.nameFileValidation.numero = _this.data.data.rc_numero;
      _this.nameFileValidation.fecha = new Date(_this.data.data.rc_fecha).getFullYear().toString().substring(2, 4);

      _this.validationNameFile();

      _this.formGroup = _this.formBuilder.group(_this.formControl);

      _this.formOnchange();

      _this.formGroup.controls['rc_subtipo'].disable();

      _this.formGroup.controls['rc_alfa'].disable();

      if (_this.data.data.rc_tipo == 'RA') {
        _this.formGroup.controls['rc_subtipo'].enable();

        _this.disabledNotificaciones = true;
      }

      _this.formGroup.controls['rc_tipo'].valueChanges.subscribe( /*#__PURE__*/function () {
        var _ref = (0,D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          _this.disabledNotificaciones = true;
          _this.dataNotificaciones = [];

          _this.formGroup.controls['rc_subtipo'].enable();

          if (data != 'RA') {
            _this.disabledNotificaciones = false;

            _this.formGroup.controls['rc_subtipo'].disable();

            _this.formGroup.controls['rc_subtipo'].setValue('');
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());

      _this.formGroup.controls['rc_numero'].disable();

      _this.formGroup.controls['rc_inten'].disable();

      _this.formGroup.controls['rc_tipo'].disable(); //this.formGroup.controls['rc_mercado'].disable();


      _this.formGroupNotificacion.controls['t_aquien'].valueChanges.subscribe( /*#__PURE__*/function () {
        var _ref2 = (0,D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          console.log(data);

          _this.rest.getNotificadosFilter('notificados', data).subscribe(data => {
            _this.dataAutoComplete = data;
            console.log(data);
          });
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());

      _this.openPdf();
    })();
  }

  openPdf() {
    const pdf = this.formGroup.controls['rc_filename'].value;

    if (pdf != '') {
      this.rest.getFile('cartas_resoluciones', this.data.data.id).subscribe(res => {
        const fileURL = URL.createObjectURL(res);
        this.src = fileURL; //window.open(fileURL, '_blank');
      });
    }
  }

  onSelectFile(event) {
    this.file = event.target.files[0];
    const fileName = this.file.name.substring(0, 10);

    if (fileName == this.nameFileValidation.val) {
      this.formGroup.controls.rc_filename.setValue(this.file.name);
      this.nameFileValidation.status = 'valido';
    } else {
      this.openSnackBar('Nombre de Archivo Invalido: ' + this.file.name, '', 'error');
      this.clearFile();
    }
  }

  clearFile() {
    this.file = '';
    this.formGroup.controls.rc_filename.setValue('');
    this.nameFileValidation.status = 'invalido';
  }

  formOnchange() {
    var _this2 = this;

    this.formGroup.controls['rc_tipo'].valueChanges.subscribe( /*#__PURE__*/function () {
      var _ref3 = (0,D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        _this2.nameFileValidation.tipo = data;

        _this2.validationNameFile();
      });

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }());
    this.formGroup.controls['rc_numero'].valueChanges.subscribe( /*#__PURE__*/function () {
      var _ref4 = (0,D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        _this2.nameFileValidation.numero = data;

        _this2.validationNameFile();
      });

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }());
    this.formGroup.controls['rc_fecha'].valueChanges.subscribe( /*#__PURE__*/function () {
      var _ref5 = (0,D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        _this2.nameFileValidation.fecha = new Date(data).getFullYear().toString().substring(2, 4);

        _this2.validationNameFile();
      });

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }());
  }

  validationNameFile() {
    this.nameFileValidation.val = '';
    this.nameFileValidation.status = '';
    const nameVal = this.nameFileValidation.numero + '-' + this.nameFileValidation.fecha + '-' + this.nameFileValidation.tipo;

    if (nameVal.length == 10) {
      this.nameFileValidation.val = nameVal;
      this.formGroup.controls['rc_filename'].enable();
    }

    if (this.nameFileValidation.val != this.formGroup.controls.rc_filename.value.substring(0, 10) && this.formGroup.controls.rc_inten.value == 'PS') {
      this.formGroup.controls.rc_filename.setValue('');
    }
  }

  deleteRow(rowSelect) {
    var i = this.dataNotificaciones.indexOf(rowSelect);

    if (rowSelect.id != 0) {
      this.rest.delete('notificaciones', rowSelect.id).subscribe(data => {});
    }

    this.dataNotificaciones.splice(i, 1);
  }

  saveNotificaciones(data) {
    this.dataNotificaciones.push(data);
    this.formGroupNotificacion = this.formBuilder.group(this.formControlNotificaciones);
  }

  onSubmit(post) {
    const formData = new FormData();
    formData.append('file', this.file);

    for (let i in post) {
      formData.append(i, post[i]);
    }

    formData.append('notificaciones', JSON.stringify(this.dataNotificaciones));
    this.rest.update('cartas_resoluciones', this.data.data.id, post, formData).subscribe(data => {
      this.dataRow = data.data;
      console.log(this.dataRow, data);
      this.close('confirm');
    });
  }

  enableAlpha(event) {
    this.formGroup.controls['rc_alfa'].enable();

    if (!event) {
      this.formGroup.controls['rc_alfa'].disable();
      this.formGroup.controls['rc_alfa'].setValue('');
    }

    this.formGroup.controls['rc_alfa'].setValue('');
    console.log(event);
  }

  insertNotificados() {
    var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogConfig();
    dialogConfig.width = '600px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {};
    let dialogRef = this.dialog.open(_notificados_dialog_notificados_insert_dialog_notificados_insert_component__WEBPACK_IMPORTED_MODULE_2__.DialogNotificadosInsertComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.rest.getNotificadosFilter('notificados').subscribe(data => {
        this.dataAutoComplete = data;
        console.log(data);
      });
    });
  }

  getAutoComplete() {
    this.rest.getData('notificados').subscribe(data => {
      this.dataOptions = data.data;
      console.log(data);
    });
  }

  getNotificados() {
    this.rest.getNotificadosFilter('notificados').subscribe(data => {
      this.dataAutoComplete = data;
    });
  }

  close(state) {
    this.dialogRef.close(state);
  } //SNACKBAR


  openSnackBar(message, action, type) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [type]
    });
  }

  downloadPdf() {
    this.rest.getFile('cartas_resoluciones', this.data.data.id).subscribe(res => {
      const fileURL = URL.createObjectURL(res);
      window.open(fileURL, '_blank');
    });
  }

}

DialogVerificadoComponent.ɵfac = function DialogVerificadoComponent_Factory(t) {
  return new (t || DialogVerificadoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_02_registros_registros_service__WEBPACK_IMPORTED_MODULE_3__.RegistrosService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar));
};

DialogVerificadoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DialogVerificadoComponent,
  selectors: [["app-dialog-verificado"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MAT_DATE_LOCALE,
    useValue: 'es-BO'
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.DateAdapter,
    useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__.MomentDateAdapter,
    deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MAT_DATE_LOCALE, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MAT_DATE_FORMATS,
    useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__.MAT_MOMENT_DATE_FORMATS
  }])],
  decls: 124,
  vars: 23,
  consts: [["fxLayout", "row wrap"], ["src", "assets/images/logo-aps.png", "alt", "homepage", 1, "light-logo"], ["fxFlex", ""], ["mat-icon-button", "", "color", "warn", "matDialogClose", "cancel", "matTooltip", "Salir", 3, "click"], ["mat-dialog-title", "", 1, "head-dialog", 2, "text-align", "center"], ["mat-dialog-content", ""], ["fxFlex.gt-lg", "100", "fxFlex.gt-md", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-lg", "50", "fxFlex.gt-md", "50", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-lg", "20", "fxFlex.gt-md", "20", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "formulario"], ["fxFlex.gt-lg", "80", "fxFlex.gt-md", "80", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "formulario"], [4, "ngIf"], ["fxFlex.gt-lg", "50", "fxFlex.gt-md", "50", "fxFlex.gt-xs", "100", "fxFlex", "100", 2, "text-align", "center"], ["style", "height: 400px;", 3, "src", "render-text", "original-size", 4, "ngIf"], ["mat-dialog-actions", "", "fxLayout", "row wrap"], ["fxFlex.gt-lg", "80", "fxFlex.gt-md", "80", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-lg", "20", "fxFlex.gt-md", "20", "fxFlex.gt-xs", "100", "fxFlex", "100", 2, "text-align", "right"], ["class", "form-element", 4, "ngIf"], [2, "height", "400px", 3, "src", "render-text", "original-size"], ["src", "assets/images/pdf-error.png", "alt", "homepage", 1, "light-logo", 2, "height", "200px"], [1, "form-element"], ["mat-button", "", "color", "primary", 3, "click"]],
  template: function DialogVerificadoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogVerificadoComponent_Template_button_click_4_listener() {
        return ctx.close("close");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Ficha del documento");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5)(10, "mat-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 0)(13, "div", 6)(14, "div", 0)(15, "div", 7)(16, "div", 0)(17, "div", 6)(18, "div", 8)(19, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Publicado:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " El documento ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, DialogVerificadoComponent_b_23_Template, 2, 0, "b", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " se encuentra publicado en la Web. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "mat-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 6)(27, "div", 8)(28, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Entidad:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 6)(33, "div", 8)(34, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Documento:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 6)(39, "div", 8)(40, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Tipo Resoluci\u00F3n:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 6)(45, "div", 8)(46, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "N\u00FAmero:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 6)(51, "div", 8)(52, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Geti\u00F3n:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 6)(57, "div", 8)(58, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Fecha:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](62, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 6)(64, "div", 8)(65, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "T\u00EDtulo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 6)(70, "div", 8)(71, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "Mercado:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 6)(76, "div", 8)(77, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "Comentarios:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 6)(82, "div", 8)(83, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "Nombre del Archivo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "div", 6)(88, "div", 8)(89, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "Tama\u00F1o del archivo:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "div", 6)(94, "div", 8)(95, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, "Creado por:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "div", 6)(100, "div", 8)(101, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "Derivado a:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "div", 6)(106, "div", 8)(107, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108, "Estado:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "div", 6)(112, "div", 8)(113, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114, "N\u00FAmero:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](116);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](118, DialogVerificadoComponent_pdf_viewer_118_Template, 1, 3, "pdf-viewer", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](119, DialogVerificadoComponent_div_119_Template, 4, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](121, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](123, DialogVerificadoComponent_div_123_Template, 5, 0, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx._words.esp.datosDocumento);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.data.data.rc_publicar_web);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.data.entidad, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.data.tipo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.data.subtipo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.data.rc_numero, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.data.rc_year, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](62, 20, ctx.data.data.rc_fecha, "dd/MM/yyyy"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.data.rc_titulo, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.data.rc_mercado, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.data.rc_comentarios, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.data.rc_filename, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.data.rc_filesize, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.data.usuario_creacion, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.data.usuario, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.data.rc_numero, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.data.rc_numero, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.data.rc_filesize > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.data.rc_filesize == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.data.rc_filesize > 0);
    }
  },
  dependencies: [ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_10__.PdfViewerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardSubtitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: [".form-element[_ngcontent-%COMP%] {\r\n  padding: 0.1px 2px;\r\n  width: 100%;\r\n}\r\n\r\n  .mat-form-field-flex > .mat-form-field-infix { padding: 0.6em 0px !important;}\r\n\r\n  .mat-form-field-subscript-wrapper {\r\n  font-size: 65%;\r\n  margin-top: 0.2em;\r\n  top: calc(100% - 2em);\r\n}\r\n\r\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\r\n    transform: translateY(-1.7em) scale(.75);\r\n    width: 100%;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  font-weight: 300;\r\n  line-height: 1.2;\r\n  font-family: Poppins, sans-serif;\r\n  letter-spacing: normal;\r\n}\r\n\r\n.close-button[_ngcontent-%COMP%]{\r\n  float: right;\r\n  top:-5px;\r\n  right:-5px;\r\n  color: red;\r\n}\r\n\r\n.image-logo[_ngcontent-%COMP%]{\r\n  float: left;\r\n  top:-5px;\r\n  left:-5px;\r\n}\r\n\r\n.formulario[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  font-weight: 300;\r\n  line-height: 1.2;\r\n  padding-top: 1px;\r\n  font-family: Poppins, sans-serif;\r\n  letter-spacing: normal;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .form-label[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (min-width: 800px) {\r\n  .form-label[_ngcontent-%COMP%]{\r\n    padding: 5px 2px;\r\n    font-size: 10px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    background-color: #007CC3;\r\n    color: aliceblue;\r\n  }\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .form-search[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (min-width: 800px) {\r\n  .form-search[_ngcontent-%COMP%]{\r\n    padding: 3px 2px;\r\n    font-size: 12px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  }\r\n}\r\n\r\n.form-table[_ngcontent-%COMP%]{\r\n  padding-top: 0.3em;\r\n\r\n}\r\n\r\n.buttonTable[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  min-width: 0;\r\n  width: 40px;\r\n  height: 20px;\r\n  flex-shrink: 0;\r\n  line-height: 20px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.form-element[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.mat-card-actions[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n  .error{\r\n  color:white;\r\n  background: rgb(253, 180, 177) !important;\r\n}\r\n\r\n  .ok{\r\n  color:white;\r\n  background: rgb(204, 250, 218) !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy12ZXJpZmljYWRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBLHlEQUF5RCw2QkFBNkIsQ0FBQzs7QUFDdkY7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxXQUFXO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFFBQVE7RUFDUixVQUFVO0VBQ1YsVUFBVTtBQUNaOztBQUNBO0VBQ0UsV0FBVztFQUNYLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0RBQWdEO0lBQ2hELHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFJQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0RBQWdEO0VBQ2xEO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUdBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxXQUFXO0VBQ1gseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlDQUF5QztBQUMzQyIsImZpbGUiOiJkaWFsb2ctdmVyaWZpY2Fkby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZWxlbWVudCB7XHJcbiAgcGFkZGluZzogMC4xcHggMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWZsZXggPiAubWF0LWZvcm0tZmllbGQtaW5maXggeyBwYWRkaW5nOiAwLjZlbSAwcHggIWltcG9ydGFudDt9XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xyXG4gIGZvbnQtc2l6ZTogNjUlO1xyXG4gIG1hcmdpbi10b3A6IDAuMmVtO1xyXG4gIHRvcDogY2FsYygxMDAlIC0gMmVtKTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjdlbSkgc2NhbGUoLjc1KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMsIHNhbnMtc2VyaWY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxufVxyXG5cclxuLmNsb3NlLWJ1dHRvbntcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgdG9wOi01cHg7XHJcbiAgcmlnaHQ6LTVweDtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbi5pbWFnZS1sb2dve1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHRvcDotNXB4O1xyXG4gIGxlZnQ6LTVweDtcclxufVxyXG5cclxuLmZvcm11bGFyaW8ge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgcGFkZGluZy10b3A6IDFweDtcclxuICBmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuZm9ybS1sYWJlbHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAuZm9ybS1sYWJlbHtcclxuICAgIHBhZGRpbmc6IDVweCAycHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0MzO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmZvcm0tc2VhcmNoe1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xyXG4gIC5mb3JtLXNlYXJjaHtcclxuICAgIHBhZGRpbmc6IDNweCAycHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS10YWJsZXtcclxuICBwYWRkaW5nLXRvcDogMC4zZW07XHJcblxyXG59XHJcblxyXG4uYnV0dG9uVGFibGUge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBmbGV4LXNocmluazogMDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmZvcm0tZWxlbWVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4ubWF0LWNhcmQtYWN0aW9ucywgLm1hdC1jYXJkLXN1YnRpdGxlLCAubWF0LWNhcmQtY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAuZXJyb3J7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1MywgMTgwLCAxNzcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAub2t7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIwNCwgMjUwLCAyMTgpICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 9883:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/03-verificaciones/notificados/dialog-notificados-insert/dialog-notificados-insert.component.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogNotificadosInsertComponent": () => (/* binding */ DialogNotificadosInsertComponent)
/* harmony export */ });
/* harmony import */ var D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material-moment-adapter */ 6561);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 4369);
/* harmony import */ var src_app_models_words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/words */ 8046);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _verificacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../verificacion.service */ 5378);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 2288);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 5342);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 6246);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);


















function DialogNotificadosInsertComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "button", 16)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r0.formGroup.invalid);
  }
}

class DialogNotificadosInsertComponent {
  constructor(formBuilder, dialogRef, data, rest, dialog) {
    this.formBuilder = formBuilder;
    this.dialogRef = dialogRef;
    this.data = data;
    this.rest = rest;
    this.dialog = dialog; //Palabras Internacionalizadas

    this._words = src_app_models_words__WEBPACK_IMPORTED_MODULE_1__.Words;
    this.dataRow = [];
    this.dataNotificaciones = [];
    this.dataOptions = [];
    this.disabledNotificaciones = false;
    this.disabled = false;
    this.publicar = [{
      value: true,
      label: 'publicar'
    }, {
      value: false,
      label: 'No Publicar'
    }];
    this.formControl = {
      'descripcion': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(300)]]
    };
    this.formGroup = this.formBuilder.group(this.formControl);
  }

  ngOnInit() {
    var _this = this;

    return (0,D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.rest.getOptions().subscribe(data => {
        _this.dataOptions = data.data;
      }); //this.formGroup.controls['rc_subtipo'].disable();
      //this.formGroup.controls['rc_alfa'].disable();
      //this.formGroup.controls['rc_tipo'].valueChanges.subscribe(async data => {
      //  this.disabledNotificaciones = true
      //  this.dataNotificaciones=[];
      //  this.formGroup.controls['rc_subtipo'].enable();
      //  if (data!='RA'){
      //    this.disabledNotificaciones = false;
      //    this.formGroup.controls['rc_subtipo'].disable();
      //    this.formGroup.controls['rc_subtipo'].setValue('');
      //  }
      //})

    })();
  }

  onSubmit(post) {
    this.rest.createSimple('notificados', post).subscribe(data => {
      this.dataRow = data.data;
      this.close();
    });
  }

  close() {
    this.dialogRef.close();
  }

}

DialogNotificadosInsertComponent.ɵfac = function DialogNotificadosInsertComponent_Factory(t) {
  return new (t || DialogNotificadosInsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_verificacion_service__WEBPACK_IMPORTED_MODULE_2__.VerificacionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog));
};

DialogNotificadosInsertComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: DialogNotificadosInsertComponent,
  selectors: [["app-dialog-notificados-insert"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MAT_DATE_LOCALE,
    useValue: 'es-BO'
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.DateAdapter,
    useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__.MomentDateAdapter,
    deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MAT_DATE_LOCALE, _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  }, {
    provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MAT_DATE_FORMATS,
    useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__.MAT_MOMENT_DATE_FORMATS
  }])],
  decls: 24,
  vars: 3,
  consts: [["fxLayout", "row wrap"], ["src", "assets/images/logo-aps.png", "alt", "homepage", 1, "light-logo"], ["fxFlex", ""], ["mat-icon-button", "", "color", "warn", "matTooltip", "Salir", 3, "click"], [2, "text-align", "left"], ["mat-dialog-content", ""], ["fxFlex.gt-lg", "100", "fxFlex.gt-md", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], [3, "formGroup"], ["appearance", "outline", 1, "form-element"], ["matInput", "", "formControlName", "descripcion", "onkeypress", "return (event.charCode != 39)"], ["mat-dialog-actions", "", "fxLayout", "row wrap"], ["fxFlex.gt-lg", "80", "fxFlex.gt-md", "80", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-lg", "20", "fxFlex.gt-md", "20", "fxFlex.gt-xs", "100", "fxFlex", "100"], [3, "formGroup", "ngSubmit"], ["class", "form-element", 4, "ngIf"], [1, "form-element"], ["mat-raised-button", "", "color", "primary", "type", "submit", "matTooltip", "Registrar", 1, "form-element", 3, "disabled"]],
  template: function DialogNotificadosInsertComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DialogNotificadosInsertComponent_Template_button_click_4_listener() {
        return ctx.close();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h5", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Agregar nuevo notificado");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5)(10, "div", 0)(11, "div", 6)(12, "form", 7)(13, "mat-form-field", 8)(14, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Nombre o Descripci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Ingrese el titulo de la Resolucion");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 12)(22, "form", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function DialogNotificadosInsertComponent_Template_form_ngSubmit_22_listener() {
        return ctx.onSubmit(ctx.formGroup.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, DialogNotificadosInsertComponent_div_23_Template, 5, 1, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.dataRow.length == 0);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip],
  styles: [".form-element[_ngcontent-%COMP%] {\r\n  padding: 0.1px 2px;\r\n  width: 100%;\r\n}\r\n.head-dialog[_ngcontent-%COMP%] {\r\n  padding: 0.1px 2px;\r\n  width: 100%;\r\n  margin-bottom: 5px;\r\n}\r\n  .mat-form-field-flex > .mat-form-field-infix { padding: 0.6em 0px !important;}\r\n  .mat-form-field-subscript-wrapper {\r\n  font-size: 65%;\r\n  margin-top: 0.2em;\r\n  top: calc(100% - 2em);\r\n}\r\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\r\n    transform: translateY(-1.7em) scale(.75);\r\n    width: 100%;\r\n}\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  font-weight: 300;\r\n  line-height: 1.2;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  letter-spacing: normal;\r\n}\r\n.close-button[_ngcontent-%COMP%]{\r\n  float: right;\r\n  top:-5px;\r\n  right:-5px;\r\n  color: red;\r\n}\r\n.image-logo[_ngcontent-%COMP%]{\r\n  float: left;\r\n  top:-5px;\r\n  left:-5px;\r\n}\r\n@media (max-width: 800px) {\r\n  .form-label[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n@media (min-width: 800px) {\r\n  .form-label[_ngcontent-%COMP%]{\r\n    padding: 5px 2px;\r\n    font-size: 10px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    background-color: #007CC3;\r\n    color: aliceblue;\r\n  }\r\n}\r\n@media (max-width: 800px) {\r\n  .form-search[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n@media (min-width: 800px) {\r\n  .form-search[_ngcontent-%COMP%]{\r\n    padding: 3px 2px;\r\n    font-size: 12px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  }\r\n}\r\n.form-element[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-frame[_ngcontent-%COMP%] {\r\n        border-radius: 70% !important;\r\n    }\r\n.bot[_ngcontent-%COMP%]{\r\n      border-radius: 70% !important;\r\n      border-radius: 50% !important;\r\n      background-color: aqua;\r\n    }\r\n  .mat-checkbox-background {\r\n      background-color: mat-color(primary, 200);\r\n  }\r\n.mat-card-actions[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 5px;\r\n  margin-bottom: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy1ub3RpZmljYWRvcy1pbnNlcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBRUEseURBQXlELDZCQUE2QixDQUFDO0FBQ3ZGO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxXQUFXO0FBQ2Y7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdEQUFnRDtFQUNoRCxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLFlBQVk7RUFDWixRQUFRO0VBQ1IsVUFBVTtFQUNWLFVBQVU7QUFDWjtBQUNBO0VBQ0UsV0FBVztFQUNYLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnREFBZ0Q7SUFDaEQseUJBQXlCO0lBQ3pCLGdCQUFnQjtFQUNsQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0RBQWdEO0VBQ2xEO0FBQ0Y7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBOztRQUVRLDZCQUE2QjtJQUNqQztBQUNBO01BQ0UsNkJBQTZCO01BQzdCLDZCQUE2QjtNQUM3QixzQkFBc0I7SUFDeEI7QUFDQTtNQUNFLHlDQUF5QztFQUM3QztBQUVGO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiZGlhbG9nLW5vdGlmaWNhZG9zLWluc2VydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZWxlbWVudCB7XHJcbiAgcGFkZGluZzogMC4xcHggMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5oZWFkLWRpYWxvZyB7XHJcbiAgcGFkZGluZzogMC4xcHggMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4ID4gLm1hdC1mb3JtLWZpZWxkLWluZml4IHsgcGFkZGluZzogMC42ZW0gMHB4ICFpbXBvcnRhbnQ7fVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcclxuICBmb250LXNpemU6IDY1JTtcclxuICBtYXJnaW4tdG9wOiAwLjJlbTtcclxuICB0b3A6IGNhbGMoMTAwJSAtIDJlbSk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS43ZW0pIHNjYWxlKC43NSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9ue1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB0b3A6LTVweDtcclxuICByaWdodDotNXB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLmltYWdlLWxvZ297XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdG9wOi01cHg7XHJcbiAgbGVmdDotNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuZm9ybS1sYWJlbHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAuZm9ybS1sYWJlbHtcclxuICAgIHBhZGRpbmc6IDVweCAycHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0MzO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5mb3JtLXNlYXJjaHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAuZm9ybS1zZWFyY2h7XHJcbiAgICBwYWRkaW5nOiAzcHggMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tZWxlbWVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCxcclxuICAgIC5tYXQtY2hlY2tib3gtZnJhbWUge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDcwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmJvdHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNzAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcihwcmltYXJ5LCAyMDApO1xyXG4gIH1cclxuXHJcbi5tYXQtY2FyZC1hY3Rpb25zLCAubWF0LWNhcmQtc3VidGl0bGUsIC5tYXQtY2FyZC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 4892:
/*!*******************************************************************!*\
  !*** ./src/app/pages/03-verificaciones/verificacion.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificacionComponent": () => (/* binding */ VerificacionComponent)
/* harmony export */ });
/* harmony import */ var D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var src_app_models_words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/words */ 8046);
/* harmony import */ var _dialog_update_dialog_update_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog-update/dialog-update.component */ 2031);
/* harmony import */ var _dialog_verificado_dialog_verificado_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog-verificado/dialog-verificado.component */ 644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _verificacion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verificacion.service */ 5378);
/* harmony import */ var _authentication_services_authorization_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../authentication/services/authorization.service */ 1637);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ 8369);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 2288);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 5342);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 1223);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 4369);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 6246);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 9757);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ 9181);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ 338);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ 9421);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/paginator */ 9272);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 1412);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);



























function VerificacionComponent_div_0_div_19_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", option_r14.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](option_r14.label);
  }
}

function VerificacionComponent_div_0_div_19_mat_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", option_r15.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](option_r15.label);
  }
}

function VerificacionComponent_div_0_div_19_mat_option_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", option_r16.cod_ele);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](option_r16.descrip);
  }
}

function VerificacionComponent_div_0_div_19_mat_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", option_r17.cod_ele);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](option_r17.descrip);
  }
}

function VerificacionComponent_div_0_div_19_mat_option_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", option_r18.cod_ele);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](option_r18.descrip);
  }
}

function VerificacionComponent_div_0_div_19_button_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VerificacionComponent_div_0_div_19_button_54_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r19.formGroup.controls["numero"].setValue(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}

function VerificacionComponent_div_0_div_19_button_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VerificacionComponent_div_0_div_19_button_61_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r21.formGroup.controls["titulo"].setValue(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}

function VerificacionComponent_div_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "div", 15)(2, "div", 1)(3, "div", 16)(4, "form", 17)(5, "mat-form-field", 18)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-select", 19)(9, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "TODOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, VerificacionComponent_div_0_div_19_mat_option_11_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 22)(13, "form", 17)(14, "mat-form-field", 18)(15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Gesti\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "mat-select", 23)(18, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "TODOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, VerificacionComponent_div_0_div_19_mat_option_20_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 25)(22, "form", 17)(23, "mat-form-field", 18)(24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Tipo de documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "mat-select", 26)(27, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "TODOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, VerificacionComponent_div_0_div_19_mat_option_29_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 27)(31, "form", 17)(32, "mat-form-field", 18)(33, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Tipo de resoluci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "mat-select", 28)(36, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "TODOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, VerificacionComponent_div_0_div_19_mat_option_38_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 22)(40, "form", 17)(41, "mat-form-field", 18)(42, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Mercado");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "mat-select", 29)(45, "mat-option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "TODOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](47, VerificacionComponent_div_0_div_19_mat_option_47_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 16)(49, "form", 17)(50, "mat-form-field", 18)(51, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "N\u00FAmero");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](53, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, VerificacionComponent_div_0_div_19_button_54_Template, 3, 0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 32)(56, "form", 17)(57, "mat-form-field", 18)(58, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "T\u00EDtulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](60, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, VerificacionComponent_div_0_div_19_button_61_Template, 3, 0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 34)(63, "form", 17)(64, "mat-form-field", 18)(65, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "Desde");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VerificacionComponent_div_0_div_19_Template_input_click_67_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);

      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](69);

      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r12.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](68, "mat-datepicker", null, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 34)(71, "form", 17)(72, "mat-form-field", 18)(73, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "Hasta");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VerificacionComponent_div_0_div_19_Template_input_click_75_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);

      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](77);

      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](_r13.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](76, "mat-datepicker", null, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 39)(79, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VerificacionComponent_div_0_div_19_Template_button_click_79_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r26.setForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](81, "autorenew");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, " Limpiar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](69);

    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](77);

    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r2.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.estado);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r2.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.dataOptions.years);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r2.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.dataOptions.documentos);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r2.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.dataOptions.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r2.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.dataOptions.mercado);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r2.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.formGroup.controls["numero"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r2.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.formGroup.controls["titulo"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r2.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r2.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r13);
  }
}

function VerificacionComponent_div_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mat-sort-header", config_r27.name)("fxFlex.gt-lg", config_r27.width)("fxFlex.gt-md", config_r27.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", config_r27.label, " ");
  }
}

function VerificacionComponent_div_0_div_23_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VerificacionComponent_div_0_div_23_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33);
      const config_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r31.documentRow(config_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "verified_user");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}

function VerificacionComponent_div_0_div_23_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VerificacionComponent_div_0_div_23_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const config_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r34.updateRow(config_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "privacy_tip");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}

function VerificacionComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "div", 44)(2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 46)(5, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 47)(8, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 47)(11, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 48)(15, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, VerificacionComponent_div_0_div_23_button_18_Template, 3, 0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, VerificacionComponent_div_0_div_23_button_19_Template, 3, 0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", config_r28["tipo"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", config_r28["subtipo"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", config_r28["rc_numero"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](13, 7, config_r28["rc_fecha"], "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", config_r28["rc_titulo"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", config_r28.etapa == "APROBADO");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", config_r28.etapa == "PENDIENTE");
  }
}

const _c0 = function () {
  return [5, 10, 25, 100];
};

function VerificacionComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "mat-card", 3)(3, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Verificaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6)(9, "button", 7)(10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-menu", null, 8)(15, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VerificacionComponent_div_0_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r37.downloadpdf());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VerificacionComponent_div_0_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r39.downloadxlsx());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, VerificacionComponent_div_0_div_19_Template, 83, 18, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("matSortChange", function VerificacionComponent_div_0_Template_div_matSortChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r40.sortData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, VerificacionComponent_div_0_div_21_Template, 2, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](22, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, VerificacionComponent_div_0_div_23_Template, 21, 10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div")(25, "mat-paginator", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("page", function VerificacionComponent_div_0_Template_mat_paginator_page_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r38);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r41.dataTableUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](14);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matMenuTriggerFor", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0._words.esp.opciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0._words.esp.reportePDF);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0._words.esp.reporteExcel);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.authorizationService.isAuthorized("supervisor"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.headersTable);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("length", ctx_r0.count)("pageSize", ctx_r0.page.size)("pageIndex", ctx_r0.page.index)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c0));
  }
}

class VerificacionComponent {
  constructor(formBuilder, dialog, rest, authorizationService, _snackBar) {
    this.formBuilder = formBuilder;
    this.dialog = dialog;
    this.rest = rest;
    this.authorizationService = authorizationService;
    this._snackBar = _snackBar; //Palabras Internacionalizadas

    this._words = src_app_models_words__WEBPACK_IMPORTED_MODULE_1__.Words;
    this.formControl = {
      model: ['cartas_resoluciones'],
      entidad: ['PS'],
      modulo: ['VERIFICACION'],
      etapa: ['PENDIENTE'],
      year: ['0'],
      tipo: [''],
      subtipo: [''],
      mercado: [''],
      numero: [''],
      titulo: [''],
      del: [''],
      al: ['']
    }; //sort

    this.sort = '';
    this.order = '';
    this.count = 0;
    this.dataOptions = [];
    this.page = {
      length: 10,
      size: 10,
      index: 0
    };
    this.headersTable = [//FORMULARIO
    {
      name: 'rc_tipo',
      label: 'Documento',
      width: 15
    }, {
      name: 'rc_tipo',
      label: 'Tipo de Resolución',
      width: 19
    }, {
      name: 'rc_numero',
      label: 'Número',
      width: 8
    }, {
      name: 'rc_fecha',
      label: 'Fecha',
      width: 8
    }, {
      name: 'rc_titulo',
      label: 'Título / Referencia',
      width: 40
    }];
    this.estado = [//FORMULARIO
    //{value:'CREADO', label:'CREADO'},
    {
      value: 'PENDIENTE',
      label: 'PENDIENTE'
    }, {
      value: 'APROBADO',
      label: 'APROBADO'
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

    this.dataTableUpdate({
      pageSize: 10,
      pageIndex: 0
    });
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

  openSnackBar(message, action, type) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [type]
    });
  }

  updateRow(rowSelect) {
    var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
    dialogConfig.width = '1200px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      data: rowSelect
    };
    let dialogRef = this.dialog.open(_dialog_update_dialog_update_component__WEBPACK_IMPORTED_MODULE_2__.DialogUpdateComponent, dialogConfig);
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

  documentRow(rowSelect) {
    var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
    dialogConfig.width = '1200px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      data: rowSelect
    };
    let dialogRef = this.dialog.open(_dialog_verificado_dialog_verificado_component__WEBPACK_IMPORTED_MODULE_3__.DialogVerificadoComponent, dialogConfig);
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

}

VerificacionComponent.ɵfac = function VerificacionComponent_Factory(t) {
  return new (t || VerificacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_verificacion_service__WEBPACK_IMPORTED_MODULE_4__.VerificacionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_authentication_services_authorization_service__WEBPACK_IMPORTED_MODULE_5__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__.MatSnackBar));
};

VerificacionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: VerificacionComponent,
  selectors: [["app-verificacion"]],
  decls: 1,
  vars: 1,
  consts: [["fxLayout", "row wrap", 4, "ngIf"], ["fxLayout", "row wrap"], ["fxFlex", "100"], [1, "card"], ["mat-card-avatar", "", "src", "assets/images/img/documentos1.jpg", 1, "header-image"], ["fxFlex", ""], ["fxFlex.gt-lg", "10", "fxFlex.gt-md", "10", "fxFlex.gt-xs", "100", "fxFlex", "100", 2, "text-align", "right"], ["mat-button", "", "color", "primary", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["fxLayout", "row wrap", "matSort", "", "matSortActive", "rc_fecha", "matSortDirection", "desc", "matSortDisableClear", "", 3, "matSortChange"], ["class", "form-table-head", "fxFlex.gt-xs", "100", "fxFlex", "100", 3, "mat-sort-header", "fxFlex.gt-lg", "fxFlex.gt-md", 4, "ngFor", "ngForOf"], ["fxFlex.gt-lg", "10", "fxFlex.gt-md", "10", "fxFlex.gt-xs", "10", "fxFlex", "10", 1, "form-table-head"], ["fxLayout", "row wrap", 4, "ngFor", "ngForOf"], [3, "length", "pageSize", "pageIndex", "pageSizeOptions", "page"], ["fxFlex.gt-lg", "100", "fxFlex.gt-md", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-lg", "20", "fxFlex.gt-md", "20", "fxFlex.gt-xs", "100", "fxFlex", "100"], [3, "formGroup"], ["appearance", "outline", 1, "form-search"], ["formControlName", "etapa"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex.gt-lg", "10", "fxFlex.gt-md", "10", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["formControlName", "year"], ["value", "0"], ["fxFlex.gt-lg", "25", "fxFlex.gt-md", "25", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["formControlName", "tipo"], ["fxFlex.gt-lg", "35", "fxFlex.gt-md", "35", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["formControlName", "subtipo"], ["formControlName", "mercado"], ["type", "text", "matInput", "", "formControlName", "numero", "maxlength", "4", "autocomplete", "off", "onkeypress", "return (event.charCode >= 48 && event.charCode <= 57)"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "color", "warn", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["fxFlex.gt-lg", "40", "fxFlex.gt-md", "40", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["type", "text", "maxlength", "100", "matInput", "", "formControlName", "titulo", "onkeypress", "return (event.charCode != 39)"], ["fxFlex.gt-lg", "15", "fxFlex.gt-md", "15", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["matInput", "", "formControlName", "del", "readonly", "", 3, "matDatepicker", "click"], ["desde", ""], ["matInput", "", "formControlName", "al", "readonly", "", 3, "matDatepicker", "click"], ["hasta", ""], ["fxFlex.gt-lg", "10", "fxFlex.gt-md", "10", "fxFlex.gt-xs", "100", "fxFlex", "100", 2, "text-align", "center"], ["mat-button", "", "color", "primary", 1, "form-search", 3, "click"], [3, "value"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "color", "warn", "aria-label", "Clear", 3, "click"], ["fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-table-head", 3, "mat-sort-header", "fxFlex.gt-lg", "fxFlex.gt-md"], ["fxFlex.gt-lg", "15", "fxFlex.gt-md", "15", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-table-body"], [1, "form-table-body"], ["fxFlex.gt-lg", "19", "fxFlex.gt-md", "19", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-table-body"], ["fxFlex.gt-lg", "8", "fxFlex.gt-md", "8", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-table-body"], ["fxFlex.gt-lg", "40", "fxFlex.gt-md", "40", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-table-body"], ["fxFlex.gt-lg", "10", "fxFlex.gt-md", "10", "fxFlex.gt-xs", "10", "fxFlex", "10", 2, "text-align", "right"], ["mat-icon-button", "", "matTooltip", "Aprobado", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Pendiente", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Aprobado", 3, "click"], [2, "color", "green"], ["mat-icon-button", "", "matTooltip", "Pendiente", 3, "click"], ["color", "warn"]],
  template: function VerificacionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, VerificacionComponent_div_0_Template, 26, 12, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.authorizationService.isAuthorized("supervisor"));
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortHeader, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardAvatar, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__.MatDatepickerInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__.MatDivider, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__._MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuTrigger, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__.MatPaginator, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelect, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_24__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
  styles: ["@media (min-width: 800px) {\r\n  .form-label[_ngcontent-%COMP%]{\r\n    padding: 5px 2px;\r\n    font-size: 12px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    background-color: #007CC3;\r\n    color: aliceblue;\r\n  }\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .form-search[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (min-width: 800px) {\r\n  .form-search[_ngcontent-%COMP%]{\r\n    padding: 2px 2px;\r\n    font-size: 12px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  }\r\n}\r\n\r\n.form-element[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.form-table-head[_ngcontent-%COMP%]{\r\n  padding: 2px 2px;\r\n  font-size: 12px;\r\n  text-align: left;\r\n  background-color: #f4f8fa;\r\n}\r\n\r\n.form-table-body[_ngcontent-%COMP%]{\r\n  padding: 2px 2px;\r\n  font-size: 12px;\r\n}\r\n\r\n.example-header-image[_ngcontent-%COMP%] {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\n  .error{\r\n  color:white;\r\n  background: rgb(253, 180, 177) !important;\r\n}\r\n\r\n  .ok{\r\n  color:white;\r\n  background: rgb(204, 250, 218) !important;\r\n}\r\n\r\n  .mat-form-field-wrapper {\r\n  padding-bottom: .75em;\r\n}\r\n\r\n.input[_ngcontent-%COMP%] {\r\n  width:80%;\r\n  display:block;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n  position:relative;\r\n  height:20px;\r\n  line-height:20px;\r\n  padding-left:10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmaWNhY2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnREFBZ0Q7SUFDaEQseUJBQXlCO0lBQ3pCLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnREFBZ0Q7RUFDbEQ7QUFDRjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUZBQW1GO0VBQ25GLHNCQUFzQjtBQUN4Qjs7QUFHQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFJQTtFQUNFLFdBQVc7RUFDWCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJ2ZXJpZmljYWNpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAuZm9ybS1sYWJlbHtcclxuICAgIHBhZGRpbmc6IDVweCAycHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0MzO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5mb3JtLXNlYXJjaHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAuZm9ybS1zZWFyY2h7XHJcbiAgICBwYWRkaW5nOiAycHggMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxufVxyXG4uZm9ybS1lbGVtZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0tdGFibGUtaGVhZHtcclxuICBwYWRkaW5nOiAycHggMnB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY4ZmE7XHJcbn1cclxuXHJcbi5mb3JtLXRhYmxlLWJvZHl7XHJcbiAgcGFkZGluZzogMnB4IDJweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5cclxuXHJcbjo6bmctZGVlcCAuZXJyb3J7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1MywgMTgwLCAxNzcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAub2t7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIwNCwgMjUwLCAyMTgpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgcGFkZGluZy1ib3R0b206IC43NWVtO1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIHdpZHRoOjgwJTtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgaGVpZ2h0OjIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6MjBweDtcclxuICBwYWRkaW5nLWxlZnQ6MTBweDtcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 6430:
/*!****************************************************************!*\
  !*** ./src/app/pages/03-verificaciones/verificacion.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificacionModule": () => (/* binding */ VerificacionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ 1378);
/* harmony import */ var _verificacion_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verificacion.component */ 4892);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 5342);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ 3186);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ 1223);
/* harmony import */ var src_app_app_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app-material-module */ 1552);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 5642);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _dialog_update_dialog_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog-update/dialog-update.component */ 2031);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-pdf-viewer */ 2214);
/* harmony import */ var _notificados_dialog_notificados_insert_dialog_notificados_insert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notificados/dialog-notificados-insert/dialog-notificados-insert.component */ 9883);
/* harmony import */ var _dialog_verificado_dialog_verificado_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog-verificado/dialog-verificado.component */ 644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
















class VerificacionModule {
}
VerificacionModule.ɵfac = function VerificacionModule_Factory(t) { return new (t || VerificacionModule)(); };
VerificacionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: VerificacionModule, bootstrap: [_verificacion_component__WEBPACK_IMPORTED_MODULE_0__.VerificacionComponent] });
VerificacionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_8__.PdfViewerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.FlexLayoutModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortModule,
        src_app_app_material_module__WEBPACK_IMPORTED_MODULE_1__.AppMaterialModule,
        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild([
            {
                path: '',
                component: _verificacion_component__WEBPACK_IMPORTED_MODULE_0__.VerificacionComponent
            },
        ])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](VerificacionModule, { declarations: [_verificacion_component__WEBPACK_IMPORTED_MODULE_0__.VerificacionComponent, _dialog_update_dialog_update_component__WEBPACK_IMPORTED_MODULE_3__.DialogUpdateComponent, _notificados_dialog_notificados_insert_dialog_notificados_insert_component__WEBPACK_IMPORTED_MODULE_4__.DialogNotificadosInsertComponent, _dialog_verificado_dialog_verificado_component__WEBPACK_IMPORTED_MODULE_5__.DialogVerificadoComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_8__.PdfViewerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__.FlexLayoutModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInputModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__.MatSortModule,
        src_app_app_material_module__WEBPACK_IMPORTED_MODULE_1__.AppMaterialModule,
        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] }); })();


/***/ }),

/***/ 5378:
/*!*****************************************************************!*\
  !*** ./src/app/pages/03-verificaciones/verificacion.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificacionService": () => (/* binding */ VerificacionService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_app_app_globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.globals */ 4842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' }) };
class VerificacionService {
    constructor(http) {
        this.http = http;
        this.url = '';
        this.url = src_app_app_globals__WEBPACK_IMPORTED_MODULE_0__.Globals.api;
    }
    /** CARTAS RESOLUCIONES */
    /**TRAE DOCUMENTOS PAGINADOS */
    getDocs(dto, page = 0, limit = 0, sort = '', order = '') {
        return this.http.get(`${this.url}/${dto.model}?` +
            (page === 0 ? `` : `&page=${page}`) +
            (limit === 0 ? `` : `&limit=${limit}`) +
            (sort === '' ? `` : `&sort=${sort}`) +
            (order === '' ? `` : `&order=${order}`) +
            (dto.modulo === '' ? `` : `&modulo=${dto.modulo}`) +
            (dto.etapa === '' ? `` : `&etapa=${dto.etapa}`) +
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
    /** TRAE DATA DE ESTADISTICAS */
    getStatsDynamic() {
        console.log('alguno');
        return this.http.get(`${this.url}/cartas_resoluciones/stat`).pipe();
    }
    /** DOWNLOAD PDF */
    getData(model) {
        return this.http.get(`${this.url}/${model}`).pipe();
    }
    /**TRAE DOCUMENTOS PAGINADOS */
    getNotificadosFilter(model, descripcion = '') {
        return this.http.get(`${this.url}/${model}` +
            (descripcion === '' ? `` : `?`) +
            (descripcion === '' ? `` : `descripcion=${descripcion}`)).pipe();
    }
    /** NOTIFICACIONES */
    /** TRAE NOTIFICACIONES POR CODIGO DE DOCUMENTOS */
    getNotificaciones(model, id = 0) {
        return this.http.get(`${this.url}/${model}/getNotificaciones/${id}`).pipe();
    }
    /** CATALOGOS */
    /** TRAE LISTA DE OPCIONES DE CATALOGOS PARA SELECT */
    getOptions() {
        return this.http.get(`${this.url}/catalogos/options`).pipe();
    }
    //#region CRUD
    /** INSERT CON FORMDATA */
    create(model, data, file) {
        return this.http.post(`${this.url}/${model}`, file).pipe();
    }
    /** INSERT SIMPLE */
    createSimple(model, data) {
        return this.http.post(`${this.url}/${model}`, data).pipe();
    }
    /** MODIFICACION CON FORMDATA */
    update(model, id, data, file) {
        return this.http.put(`${this.url}/${model}/${id}`, file).pipe();
    }
    /** MODIFICACION CON FORMDATA */
    refuse(model, id, data) {
        return this.http.put(`${this.url}/${model}/refuse/${id}`, data).pipe();
    }
    /** MODIFICACION CON FORMDATA */
    checker(model, id, data) {
        return this.http.put(`${this.url}/${model}/checker/${id}`, data).pipe();
    }
    /** ELIMINACION LOGICA */
    delete(model, id) {
        return this.http.delete(`${this.url}/${model}/${id}`);
    }
    //#endregion
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
            (dto.entidad === '' ? `` : `&entidad=${dto.entidad}`) +
            (dto.year === 0 ? `` : `&year=${dto.year}`) +
            (dto.tipo === '' ? `` : `&tipo=${dto.tipo}`) +
            (dto.numero === '' ? `` : `&numero=${dto.numero}`) +
            (dto.titulo === '' ? `` : `&titulo=${dto.titulo}`);
        return this.http.get(returl, { responseType: "blob" });
    }
    /** REPORTE EN PDF */
    getPdf(dto, sort = '', order = '') {
        const returl = `${this.url}/${dto.model}/downloadpdf?` +
            (sort === '' ? `` : `&sort=${sort}`) +
            (order === '' ? `` : `&order=${order}`) +
            (dto.entidad === '' ? `` : `&rc_entidad=${dto.entidad}`) +
            (dto.year === 0 ? `` : `&rc_year=${dto.year}`) +
            (dto.tipo === '' ? `` : `&rc_tipo=${dto.tipo}`) +
            (dto.numero === '' ? `` : `&rc_numero=${dto.numero}`) +
            (dto.titulo === '' ? `` : `&rc_titulo=${dto.titulo}`);
        return this.http.get(returl, { responseType: "blob" });
    }
    //#endregion
    formatDate(date) {
        const dateFormat = new Date(date);
        return dateFormat.getFullYear() + '-' + (dateFormat.getMonth() + 1) + '-' + dateFormat.getDate();
    }
    getUsuarios() {
        return this.http.get(`${this.url}/usuarios/usuario`).pipe();
    }
}
VerificacionService.ɵfac = function VerificacionService_Factory(t) { return new (t || VerificacionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
VerificacionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: VerificacionService, factory: VerificacionService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_03-verificaciones_verificacion_module_ts.js.map