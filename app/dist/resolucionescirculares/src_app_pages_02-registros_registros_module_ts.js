"use strict";
(self["webpackChunkproject"] = self["webpackChunkproject"] || []).push([["src_app_pages_02-registros_registros_module_ts"],{

/***/ 914:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/02-registros/dialog-document/dialog-document.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogDocumentComponent": () => (/* binding */ DialogDocumentComponent)
/* harmony export */ });
/* harmony import */ var D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material-moment-adapter */ 6561);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 4369);
/* harmony import */ var src_app_models_words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/words */ 8046);
/* harmony import */ var _notificados_dialog_notificados_insert_dialog_notificados_insert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notificados/dialog-notificados-insert/dialog-notificados-insert.component */ 5737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _registros_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../registros.service */ 9524);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 8369);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-pdf-viewer */ 2214);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 6246);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 9757);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 338);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);





















function DialogDocumentComponent_b_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function DialogDocumentComponent_pdf_viewer_112_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "pdf-viewer", 17);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.src)("render-text", true)("original-size", false);
  }
}

function DialogDocumentComponent_div_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "El archivo no fue registrado");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}

function DialogDocumentComponent_div_117_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19)(1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogDocumentComponent_div_117_Template_button_click_1_listener() {
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

class DialogDocumentComponent {
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

DialogDocumentComponent.ɵfac = function DialogDocumentComponent_Factory(t) {
  return new (t || DialogDocumentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_registros_service__WEBPACK_IMPORTED_MODULE_3__.RegistrosService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar));
};

DialogDocumentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DialogDocumentComponent,
  selectors: [["app-dialog-document"]],
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
  decls: 118,
  vars: 23,
  consts: [["fxLayout", "row wrap"], ["src", "assets/images/logo-aps.png", "alt", "homepage", 1, "light-logo"], ["fxFlex", ""], ["mat-icon-button", "", "color", "warn", "matDialogClose", "cancel", "matTooltip", "Salir", 3, "click"], ["mat-dialog-title", "", 1, "head-dialog", 2, "text-align", "center"], ["mat-dialog-content", ""], ["fxFlex.gt-lg", "100", "fxFlex.gt-md", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-lg", "50", "fxFlex.gt-md", "50", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-lg", "20", "fxFlex.gt-md", "20", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "formulario"], ["fxFlex.gt-lg", "80", "fxFlex.gt-md", "80", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "formulario"], [4, "ngIf"], ["fxFlex.gt-lg", "50", "fxFlex.gt-md", "50", "fxFlex.gt-xs", "100", "fxFlex", "100", 2, "text-align", "center"], ["style", "height: 400px;", 3, "src", "render-text", "original-size", 4, "ngIf"], ["mat-dialog-actions", "", "fxLayout", "row wrap"], ["fxFlex.gt-lg", "80", "fxFlex.gt-md", "80", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-lg", "20", "fxFlex.gt-md", "20", "fxFlex.gt-xs", "100", "fxFlex", "100", 2, "text-align", "right"], ["class", "form-element", 4, "ngIf"], [2, "height", "400px", 3, "src", "render-text", "original-size"], ["src", "assets/images/pdf-error.png", "alt", "homepage", 1, "light-logo", 2, "height", "200px"], [1, "form-element"], ["mat-button", "", "color", "primary", 3, "click"]],
  template: function DialogDocumentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogDocumentComponent_Template_button_click_4_listener() {
        return ctx.close("close");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5)(10, "mat-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 0)(13, "div", 6)(14, "div", 0)(15, "div", 7)(16, "div", 0)(17, "div", 6)(18, "div", 8)(19, "b");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Publicado:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " El documento ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, DialogDocumentComponent_b_23_Template, 2, 0, "b", 10);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](112, DialogDocumentComponent_pdf_viewer_112_Template, 1, 3, "pdf-viewer", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](113, DialogDocumentComponent_div_113_Template, 4, 0, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](115, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](117, DialogDocumentComponent_div_117_Template, 5, 0, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx._words.esp.titulo, "(APROBADO)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.data.data.etapa, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.data.rc_filesize > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.data.rc_filesize == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.data.rc_filesize > 0);
    }
  },
  dependencies: [ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_10__.PdfViewerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__.DefaultFlexDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardSubtitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDivider, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
  styles: [".form-element[_ngcontent-%COMP%] {\r\n  padding: 0.1px 2px;\r\n  width: 100%;\r\n}\r\n\r\n  .mat-form-field-flex > .mat-form-field-infix { padding: 0.6em 0px !important;}\r\n\r\n  .mat-form-field-subscript-wrapper {\r\n  font-size: 65%;\r\n  margin-top: 0.2em;\r\n  top: calc(100% - 2em);\r\n}\r\n\r\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\r\n    transform: translateY(-1.7em) scale(.75);\r\n    width: 100%;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  font-weight: 300;\r\n  line-height: 1.2;\r\n  font-family: Poppins, sans-serif;\r\n  letter-spacing: normal;\r\n}\r\n\r\n.close-button[_ngcontent-%COMP%]{\r\n  float: right;\r\n  top:-5px;\r\n  right:-5px;\r\n  color: red;\r\n}\r\n\r\n.image-logo[_ngcontent-%COMP%]{\r\n  float: left;\r\n  top:-5px;\r\n  left:-5px;\r\n}\r\n\r\n.formulario[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  font-weight: 300;\r\n  line-height: 1.2;\r\n  font-family: Poppins, sans-serif;\r\n  letter-spacing: normal;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .form-label[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (min-width: 800px) {\r\n  .form-label[_ngcontent-%COMP%]{\r\n    padding: 5px 2px;\r\n    font-size: 10px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    background-color: #007CC3;\r\n    color: aliceblue;\r\n  }\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .form-search[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (min-width: 800px) {\r\n  .form-search[_ngcontent-%COMP%]{\r\n    padding: 3px 2px;\r\n    font-size: 12px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  }\r\n}\r\n\r\n.form-table[_ngcontent-%COMP%]{\r\n  padding-top: 0.3em;\r\n\r\n}\r\n\r\n.buttonTable[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  min-width: 0;\r\n  width: 40px;\r\n  height: 20px;\r\n  flex-shrink: 0;\r\n  line-height: 20px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.form-element[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.mat-card-actions[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n  .error{\r\n  color:white;\r\n  background: rgb(253, 180, 177) !important;\r\n}\r\n\r\n  .ok{\r\n  color:white;\r\n  background: rgb(204, 250, 218) !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy1kb2N1bWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQSx5REFBeUQsNkJBQTZCLENBQUM7O0FBQ3ZGO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsV0FBVztBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixRQUFRO0VBQ1IsVUFBVTtFQUNWLFVBQVU7QUFDWjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtBQUN4Qjs7QUFHQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0RBQWdEO0lBQ2hELHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFJQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0RBQWdEO0VBQ2xEO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUdBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxXQUFXO0VBQ1gseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlDQUF5QztBQUMzQyIsImZpbGUiOiJkaWFsb2ctZG9jdW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWVsZW1lbnQge1xyXG4gIHBhZGRpbmc6IDAuMXB4IDJweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4ID4gLm1hdC1mb3JtLWZpZWxkLWluZml4IHsgcGFkZGluZzogMC42ZW0gMHB4ICFpbXBvcnRhbnQ7fVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcclxuICBmb250LXNpemU6IDY1JTtcclxuICBtYXJnaW4tdG9wOiAwLjJlbTtcclxuICB0b3A6IGNhbGMoMTAwJSAtIDJlbSk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS43ZW0pIHNjYWxlKC43NSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbn1cclxuXHJcbi5jbG9zZS1idXR0b257XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHRvcDotNXB4O1xyXG4gIHJpZ2h0Oi01cHg7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4uaW1hZ2UtbG9nb3tcclxuICBmbG9hdDogbGVmdDtcclxuICB0b3A6LTVweDtcclxuICBsZWZ0Oi01cHg7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlvIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuZm9ybS1sYWJlbHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAuZm9ybS1sYWJlbHtcclxuICAgIHBhZGRpbmc6IDVweCAycHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0MzO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmZvcm0tc2VhcmNoe1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xyXG4gIC5mb3JtLXNlYXJjaHtcclxuICAgIHBhZGRpbmc6IDNweCAycHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG59XHJcblxyXG4uZm9ybS10YWJsZXtcclxuICBwYWRkaW5nLXRvcDogMC4zZW07XHJcblxyXG59XHJcblxyXG4uYnV0dG9uVGFibGUge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBmbGV4LXNocmluazogMDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmZvcm0tZWxlbWVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4ubWF0LWNhcmQtYWN0aW9ucywgLm1hdC1jYXJkLXN1YnRpdGxlLCAubWF0LWNhcmQtY29udGVudCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuXHJcbjo6bmctZGVlcCAuZXJyb3J7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1MywgMTgwLCAxNzcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAub2t7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIwNCwgMjUwLCAyMTgpICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"]
});

/***/ }),

/***/ 6712:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/02-registros/dialog-insert/dialog-insert.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DialogInsertComponent": () => (/* binding */ DialogInsertComponent),
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material-moment-adapter */ 6561);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 4369);
/* harmony import */ var src_app_models_words__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/words */ 8046);
/* harmony import */ var _notificados_dialog_notificados_insert_dialog_notificados_insert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notificados/dialog-notificados-insert/dialog-notificados-insert.component */ 5737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _registros_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../registros.service */ 9524);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 8369);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 2288);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 5342);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ 9129);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 6246);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 9757);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 9181);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 338);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 1412);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9765);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);



























function DialogInsertComponent_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r10.cod_ele);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r10.descrip);
  }
}

function DialogInsertComponent_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r11.cod_ele);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r11.descrip);
  }
}

function DialogInsertComponent_mat_option_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r12.cod_ele);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r12.descrip);
  }
}

function DialogInsertComponent_mat_option_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r13.cod_ele);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r13.descrip);
  }
}

function DialogInsertComponent_mat_option_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r14.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r14.label);
  }
}

function DialogInsertComponent_b_104_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function DialogInsertComponent_b_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DialogInsertComponent_b_104_mat_icon_1_Template, 2, 0, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.nameFileValidation.status == "valido");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" (Nombre del documento: ", ctx_r6.nameFileValidation.val, "APSDD DESCRIPCION.pdf)");
  }
}

function DialogInsertComponent_button_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogInsertComponent_button_110_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](113);

      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r8.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}

function DialogInsertComponent_div_119_mat_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r25.cod_ele);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r25.descrip);
  }
}

function DialogInsertComponent_div_119_mat_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r26.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r26.descripcion, " ");
  }
}

function DialogInsertComponent_div_119_button_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 64)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Agregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function DialogInsertComponent_div_119_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Ciudad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Fecha ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Hora ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Emitida a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " A trav\u00E9s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function DialogInsertComponent_div_119_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 69)(2, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 69)(5, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 69)(9, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 71)(12, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 72)(15, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 73)(18, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogInsertComponent_div_119_div_52_Template_button_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);
      const data_r27 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r28.deleteRow(data_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-icon", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const data_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r27.t_ciudad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 5, data_r27.t_fecha, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r27.t_hora, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r27.t_aquien, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r27.t_atraves, " ");
  }
}

function DialogInsertComponent_div_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0)(4, "div", 45)(5, "form", 7)(6, "mat-form-field", 46)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Ciudad");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, DialogInsertComponent_div_119_mat_option_10_Template, 2, 2, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 45)(12, "form", 7)(13, "mat-form-field", 46)(14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogInsertComponent_div_119_Template_input_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31);

      const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);

      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r19.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "mat-datepicker", null, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 45)(20, "form", 7)(21, "mat-form-field", 46)(22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 51)(26, "form", 7)(27, "mat-form-field", 46)(28, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Emitida a:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function DialogInsertComponent_div_119_Template_input_change_30_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r32.valNotificados($event.target.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-autocomplete", 53, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("optionSelected", function DialogInsertComponent_div_119_Template_mat_autocomplete_optionSelected_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r33.handler($event.option));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogInsertComponent_div_119_Template_mat_option_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r34.insertNotificados());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " + Agregar nuevo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Ninguno");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, DialogInsertComponent_div_119_mat_option_39_Template, 2, 2, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Seleccione el Mercado");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 57)(43, "form", 7)(44, "mat-form-field", 46)(45, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "A trav\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 59)(49, "form", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogInsertComponent_div_119_Template_form_click_49_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r35.saveNotificaciones(ctx_r35.formGroupNotificacion.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, DialogInsertComponent_div_119_button_50_Template, 4, 0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, DialogInsertComponent_div_119_div_51_Template, 12, 0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, DialogInsertComponent_div_119_div_52_Template, 21, 8, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);

    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](32);

    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r9._words.esp.registroNotificaciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r9.formGroupNotificacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r9.dataOptions.ciudad);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r9.formGroupNotificacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matDatepicker", _r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r9.formGroupNotificacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r9.formGroupNotificacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matAutocomplete", _r20)("formControl", ctx_r9.filterNotificados);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r9.dataAutoComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r9.formGroupNotificacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r9.formGroupNotificacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.formGroupNotificacion.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r9.dataNotificaciones.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r9.dataNotificaciones);
  }
}

class User {
  constructor(name) {
    this.name = name;
  }

}
class DialogInsertComponent {
  constructor(formBuilder, dialogRef, data, rest, dialog, _snackBar) {
    this.formBuilder = formBuilder;
    this.dialogRef = dialogRef;
    this.data = data;
    this.rest = rest;
    this.dialog = dialog;
    this._snackBar = _snackBar; //prueba

    this.filterNotificados = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormControl(''); //Palabras Internacionalizadas

    this._words = src_app_models_words__WEBPACK_IMPORTED_MODULE_1__.Words;
    this.dataRow = [];
    this.dataNotificaciones = [];
    this.dataOptions = [];
    this.disabledNotificaciones = false;
    this.disabled = false;
    this.inputNotificados = '';
    this.nameFileValidation = {
      numero: '',
      fecha: '',
      tipo: '',
      val: '',
      status: ''
    };
    this.dataAutoComplete = [];
    this.formControl = {
      'rc_inten': ['PS', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      'rc_tipo': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      'rc_mercado': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      'rc_subtipo': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      'rc_publicar_web': [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      'rc_numero': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(4)]],
      'rc_alfa': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(1)]],
      'rc_fecha': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      'rc_titulo': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(1000)]],
      'rc_comentarios': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(2000)]],
      'rc_filename': [''],
      'etapa': [''],
      'derivado': ['']
    };
    this.formControlNotificaciones = {
      't_ciudad': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      't_fecha': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      't_hora': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      't_aquien': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(300)]],
      't_atraves': ['REPRESENTANTE LEGAL', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(300)]]
    };
    this.formGroup = this.formBuilder.group(this.formControl);
    this.formGroupNotificacion = this.formBuilder.group(this.formControlNotificaciones);
  }

  ngOnInit() {
    var _this = this;

    this.rest.getOptions().subscribe(data => {
      this.dataOptions = data.data;
    });
    this.getNotificados();
    this.formOnchange();
    this.formGroupNotificacion.controls['t_aquien'].setValue('');
    this.formGroup.controls['rc_subtipo'].disable();
    this.formGroup.controls['rc_filename'].disable();
    this.formGroup.controls['rc_alfa'].disable();
    this.formGroup.controls['rc_tipo'].valueChanges.subscribe( /*#__PURE__*/function () {
      var _ref = (0,D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        _this.disabledNotificaciones = true;
        _this.dataNotificaciones = [];

        _this.formGroup.controls['rc_titulo'].setValue('');

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
    this.filterNotificados.valueChanges.subscribe( /*#__PURE__*/function () {
      var _ref2 = (0,D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        console.log('333', data);

        _this.rest.getNotificadosFilter('notificados', data).subscribe(data => {
          _this.dataAutoComplete = data;
          console.log('111', data);
        });
      });

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
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
    this.clearFile();
    const nameVal = this.nameFileValidation.numero + '-' + this.nameFileValidation.fecha + '-' + this.nameFileValidation.tipo;

    if (nameVal.length == 10) {
      this.nameFileValidation.val = nameVal;
      this.formGroup.controls['rc_filename'].enable();
    }
  }

  deleteRow(rowSelect) {
    var i = this.dataNotificaciones.indexOf(rowSelect);
    this.dataNotificaciones.splice(i, 1);
  }

  saveNotificaciones(data) {
    this.dataNotificaciones.push(data);
    this.formGroupNotificacion = this.formBuilder.group(this.formControlNotificaciones);
    this.filterNotificados.setValue('');
    this.formGroupNotificacion.controls['t_aquien'].setValue('');
    this.getNotificados(); //this.getAutoComplete();
  }

  getNotificados() {
    this.rest.getNotificadosFilter('notificados').subscribe(data => {
      this.dataAutoComplete = data;
    });
  }

  valNotificados(event) {
    this.inputNotificados = event;
  }

  handler(event) {
    this.filterNotificados.setValue(event.value);
    this.formGroupNotificacion.controls['t_aquien'].setValue(event.value);
  }

  openSnackBar(message, action, type) {
    this._snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [type]
    });
  }

  insertNotificados() {
    var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogConfig();
    dialogConfig.width = '600px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {};
    let dialogRef = this.dialog.open(_notificados_dialog_notificados_insert_dialog_notificados_insert_component__WEBPACK_IMPORTED_MODULE_2__.DialogNotificadosInsertComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      this.getNotificados();
    });
  }

  onSubmit(post) {
    const formData = new FormData();
    formData.append('file', this.file);

    for (let i in post) {
      formData.append(i, post[i]);
    }

    formData.append('notificaciones', JSON.stringify(this.dataNotificaciones));
    this.rest.create('cartas_resoluciones', post, formData).subscribe(data => {
      if (data.status === 'error') {
        this.openSnackBar(data.message, '', 'error');
      } else {
        this.close(data);
      }
    });
  }

  close(data) {
    this.dialogRef.close(data);
  }

}

DialogInsertComponent.ɵfac = function DialogInsertComponent_Factory(t) {
  return new (t || DialogInsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_registros_service__WEBPACK_IMPORTED_MODULE_3__.RegistrosService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar));
};

DialogInsertComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: DialogInsertComponent,
  selectors: [["app-dialog-insert"]],
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
  decls: 130,
  vars: 26,
  consts: [["fxLayout", "row wrap"], ["src", "assets/images/logo-aps.png", "alt", "homepage", 1, "light-logo"], ["fxFlex", ""], ["mat-icon-button", "", "color", "warn", "matDialogClose", "cancel", "matTooltip", "Salir", 3, "click"], ["mat-dialog-title", "", 1, "head-dialog", 2, "text-align", "center"], ["mat-dialog-content", ""], ["fxFlex", "50"], [3, "formGroup"], ["appearance", "outline", 1, "form-element"], ["formControlName", "rc_inten"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "rc_mercado"], ["fxFlex.gt-lg", "30", "fxFlex.gt-md", "30", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["formControlName", "rc_tipo"], ["fxFlex.gt-lg", "15", "fxFlex.gt-md", "15", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["matInput", "", "formControlName", "rc_fecha", "readonly", "", 3, "matDatepicker", "click"], ["picker", ""], ["fxFlex.gt-lg", "60", "fxFlex.gt-md", "60", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["formControlName", "rc_subtipo"], ["matInput", "", "formControlName", "rc_numero", "maxlength", "4", "onkeypress", "return (event.charCode >= 48 && event.charCode <= 57)"], ["fxFlex.gt-lg", "5", "fxFlex.gt-md", "5", "fxFlex.gt-xs", "0", "fxFlex", "0"], ["fxFlex.gt-lg", "5", "fxFlex.gt-md", "5", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "form-element", 3, "ngModel", "ngModelChange", "change"], ["matInput", "", "formControlName", "rc_alfa", "maxlength", "1"], ["fxFlex.gt-lg", "100", "fxFlex.gt-md", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["matInput", "", "formControlName", "rc_titulo", "maxlength", "1000"], ["fxFlex.gt-lg", "70", "fxFlex.gt-md", "70", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["matInput", "", "formControlName", "rc_comentarios", "maxlength", "2000"], ["formControlName", "derivado"], [4, "ngIf"], ["mat-icon-button", "", "matPrefix", "", 3, "click", 4, "ngIf"], ["type", "text", "formControlName", "rc_filename", "readonly", "", "matInput", "", 3, "click"], ["type", "file", "hidden", "", "accept", "application/pdf", 3, "change"], ["file", ""], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "color", "warn", "aria-label", "Clear", 3, "click"], ["mat-dialog-actions", "", "fxLayout", "row wrap"], ["fxFlex.gt-lg", "80", "fxFlex.gt-md", "80", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-lg", "20", "fxFlex.gt-md", "20", "fxFlex.gt-xs", "100", "fxFlex", "100"], [3, "formGroup", "ngSubmit"], [1, "form-element"], ["mat-raised-button", "", "color", "primary", "type", "submit", "matTooltip", "Registrar", 1, "form-element", 3, "disabled"], [3, "value"], ["color", "primary", 4, "ngIf"], ["color", "primary"], ["mat-icon-button", "", "matPrefix", "", 3, "click"], ["fxFlex.gt-lg", "10", "fxFlex.gt-md", "10", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["appearance", "outline", 1, "form-search"], ["formControlName", "t_ciudad"], ["matInput", "", "formControlName", "t_fecha", "readonly", "", 3, "matDatepicker", "click"], ["pickerNotificacion", ""], ["matInput", "", "type", "time", "formControlName", "t_hora", "placeholder", "start date"], ["fxFlex.gt-lg", "33", "fxFlex.gt-md", "33", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["type", "text", "matInput", "", "onkeypress", "return(event.charCode != 39)", 3, "matAutocomplete", "formControl", "change"], [3, "optionSelected"], ["auto1", "matAutocomplete"], [3, "click"], ["value", "Ninguno"], ["fxFlex.gt-lg", "25", "fxFlex.gt-md", "25", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["matInput", "", "formControlName", "t_atraves"], ["fxFlex.gt-lg", "12", "fxFlex.gt-md", "12", "fxFlex.gt-xs", "10", "fxFlex", "10"], [1, "form-search", 3, "formGroup", "click"], ["mat-raised-button", "", "color", "primary", "matTooltip", "Registrar", 4, "ngIf"], ["fxLayout", "row wrap", 4, "ngIf"], ["fxLayout", "row wrap", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", "matTooltip", "Registrar"], ["fxFlex.gt-lg", "10", "fxFlex.gt-md", "10", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-label"], ["fxFlex.gt-lg", "35", "fxFlex.gt-md", "35", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-label"], ["fxFlex.gt-lg", "30", "fxFlex.gt-md", "30", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-label"], ["fxFlex.gt-lg", "5", "fxFlex.gt-md", "5", "fxFlex.gt-xs", "10", "fxFlex", "10", 1, "form-label"], ["fxFlex.gt-lg", "10", "fxFlex.gt-md", "10", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-search"], [1, "form-search"], ["fxFlex.gt-lg", "35", "fxFlex.gt-md", "35", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-search"], ["fxFlex.gt-lg", "30", "fxFlex.gt-md", "30", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-search"], ["fxFlex.gt-lg", "5", "fxFlex.gt-md", "5", "fxFlex.gt-xs", "5", "fxFlex", "5"], ["mat-icon-button", "", "matTooltip", "Eliminar", 1, "buttonTable", 3, "click"], ["color", "warn"]],
  template: function DialogInsertComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogInsertComponent_Template_button_click_4_listener() {
        return ctx.close("close");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h2", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5)(10, "mat-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 0)(13, "div", 6)(14, "form", 7)(15, "mat-form-field", 8)(16, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Institucion");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, DialogInsertComponent_mat_option_19_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Seleccione una instititucion");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 6)(23, "form", 7)(24, "mat-form-field", 8)(25, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Mercado");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, DialogInsertComponent_mat_option_28_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Seleccione el Mercado");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 12)(32, "form", 7)(33, "mat-form-field", 8)(34, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Tipo de documento");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, DialogInsertComponent_mat_option_37_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Seleccione una tipo de documento");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 14)(41, "form", 7)(42, "mat-form-field", 8)(43, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Fecha");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogInsertComponent_Template_input_click_45_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36);

        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](47);

        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r3.open());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "mat-datepicker", null, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 17)(49, "form", 7)(50, "mat-form-field", 8)(51, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Tipo de Resoluci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "mat-select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, DialogInsertComponent_mat_option_54_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Seleccione un tipo de resoluci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 14)(58, "form", 7)(59, "mat-form-field", 8)(60, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "N\u00FAmero ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "*N\u00FAmero 4 d\u00EDgitos Ej.0025");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 21)(67, "div")(68, "mat-slide-toggle", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DialogInsertComponent_Template_mat_slide_toggle_ngModelChange_68_listener($event) {
        return ctx.disabled = $event;
      })("change", function DialogInsertComponent_Template_mat_slide_toggle_change_68_listener($event) {
        return ctx.enableAlpha($event.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 14)(70, "form", 7)(71, "mat-form-field", 8)(72, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Alfabetico");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Alfanumerico");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 24)(78, "form", 7)(79, "mat-form-field", 8)(80, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "Titulo");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](82, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "Ingrese el titulo de la Resolucion");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "div", 26)(86, "form", 7)(87, "mat-form-field", 8)(88, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "Comentario");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](90, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "Ingrese un comentario");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "div", 12)(94, "form", 7)(95, "mat-form-field", 8)(96, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "Asignar a:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "mat-select", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](99, DialogInsertComponent_mat_option_99_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "Seleccione el Mercado");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "mat-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](104, DialogInsertComponent_b_104_Template, 3, 2, "b", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "div", 24)(106, "form", 7)(107, "mat-form-field", 8)(108, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, "Documento digitalizado");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](110, DialogInsertComponent_button_110_Template, 3, 0, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogInsertComponent_Template_input_click_111_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36);

        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](113);

        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r8.click());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "input", 32, 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function DialogInsertComponent_Template_input_change_112_listener($event) {
        return ctx.onSelectFile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogInsertComponent_Template_button_click_114_listener() {
        return ctx.clearFile();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](116, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, "Adjunte un documento v\u00E1lido");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](119, DialogInsertComponent_div_119_Template, 53, 15, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](120, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](121, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "div", 37)(123, "form", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function DialogInsertComponent_Template_form_ngSubmit_123_listener() {
        return ctx.onSubmit(ctx.formGroup.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "div", 39)(125, "button", 40)(126, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](127, "save");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](128, " Guardar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](129, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](47);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx._words.esp.titulo);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx._words.esp.datosDocumento);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.dataOptions.institucion);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.dataOptions.mercado);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.dataOptions.documentos);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matDatepicker", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.dataOptions.tipo);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.dataOptions.usuarios);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx._words.esp.adjuntarDocumento, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nameFileValidation.val.length == 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nameFileValidation.val.length == 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.disabledNotificaciones);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardSubtitle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerInput, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDivider, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__.MatSlideToggle, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
  styles: [".form-element[_ngcontent-%COMP%] {\r\n  padding: 0.1px 2px;\r\n  width: 100%;\r\n}\r\n.head-dialog[_ngcontent-%COMP%] {\r\n  padding: 0.1px 2px;\r\n  width: 100%;\r\n  margin-bottom: 5px;\r\n}\r\n  .mat-form-field-flex > .mat-form-field-infix { padding: 0.6em 0px !important;}\r\n  .mat-form-field-subscript-wrapper {\r\n  font-size: 65%;\r\n  margin-top: 0.2em;\r\n  top: calc(100% - 2em);\r\n}\r\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\r\n    transform: translateY(-1.7em) scale(.75);\r\n    width: 100%;\r\n}\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  font-weight: 300;\r\n  line-height: 1.2;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  letter-spacing: normal;\r\n}\r\n.close-button[_ngcontent-%COMP%]{\r\n  float: right;\r\n  top:-5px;\r\n  right:-5px;\r\n  color: red;\r\n}\r\n.image-logo[_ngcontent-%COMP%]{\r\n  float: left;\r\n  top:-5px;\r\n  left:-5px;\r\n}\r\n@media (max-width: 800px) {\r\n  .form-label[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n@media (min-width: 800px) {\r\n  .form-label[_ngcontent-%COMP%]{\r\n    padding: 5px 2px;\r\n    font-size: 10px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    background-color: #007CC3;\r\n    color: aliceblue;\r\n  }\r\n}\r\n@media (max-width: 800px) {\r\n  .form-search[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n@media (min-width: 800px) {\r\n  .form-search[_ngcontent-%COMP%]{\r\n    padding: 3px 2px;\r\n    font-size: 12px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  }\r\n}\r\n.form-element[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.mat-checkbox-background[_ngcontent-%COMP%], .mat-checkbox-frame[_ngcontent-%COMP%] {\r\n        border-radius: 70% !important;\r\n    }\r\n.bot[_ngcontent-%COMP%]{\r\n      border-radius: 70% !important;\r\n      border-radius: 50% !important;\r\n      background-color: aqua;\r\n    }\r\n  .mat-checkbox-background {\r\n      background-color: mat-color(primary, 200);\r\n  }\r\n.mat-card-actions[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n  .error{\r\n  color:white;\r\n  background: rgb(253, 180, 177) !important;\r\n}\r\n  .ok{\r\n  color:white;\r\n  background: rgb(204, 250, 218) !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy1pbnNlcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBRUEseURBQXlELDZCQUE2QixDQUFDO0FBQ3ZGO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxXQUFXO0FBQ2Y7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdEQUFnRDtFQUNoRCxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLFlBQVk7RUFDWixRQUFRO0VBQ1IsVUFBVTtFQUNWLFVBQVU7QUFDWjtBQUNBO0VBQ0UsV0FBVztFQUNYLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnREFBZ0Q7SUFDaEQseUJBQXlCO0lBQ3pCLGdCQUFnQjtFQUNsQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGO0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0RBQWdEO0VBQ2xEO0FBQ0Y7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBOztRQUVRLDZCQUE2QjtJQUNqQztBQUNBO01BQ0UsNkJBQTZCO01BQzdCLDZCQUE2QjtNQUM3QixzQkFBc0I7SUFDeEI7QUFDQTtNQUNFLHlDQUF5QztFQUM3QztBQUVGO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLFdBQVc7RUFDWCx5Q0FBeUM7QUFDM0M7QUFFQTtFQUNFLFdBQVc7RUFDWCx5Q0FBeUM7QUFDM0MiLCJmaWxlIjoiZGlhbG9nLWluc2VydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZWxlbWVudCB7XHJcbiAgcGFkZGluZzogMC4xcHggMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5oZWFkLWRpYWxvZyB7XHJcbiAgcGFkZGluZzogMC4xcHggMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1mbGV4ID4gLm1hdC1mb3JtLWZpZWxkLWluZml4IHsgcGFkZGluZzogMC42ZW0gMHB4ICFpbXBvcnRhbnQ7fVxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcclxuICBmb250LXNpemU6IDY1JTtcclxuICBtYXJnaW4tdG9wOiAwLjJlbTtcclxuICB0b3A6IGNhbGMoMTAwJSAtIDJlbSk7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS43ZW0pIHNjYWxlKC43NSk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9ue1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB0b3A6LTVweDtcclxuICByaWdodDotNXB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLmltYWdlLWxvZ297XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdG9wOi01cHg7XHJcbiAgbGVmdDotNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuZm9ybS1sYWJlbHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAuZm9ybS1sYWJlbHtcclxuICAgIHBhZGRpbmc6IDVweCAycHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3Q0MzO1xyXG4gICAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5mb3JtLXNlYXJjaHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAuZm9ybS1zZWFyY2h7XHJcbiAgICBwYWRkaW5nOiAzcHggMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tZWxlbWVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCxcclxuICAgIC5tYXQtY2hlY2tib3gtZnJhbWUge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDcwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmJvdHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNzAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcihwcmltYXJ5LCAyMDApO1xyXG4gIH1cclxuXHJcbi5tYXQtY2FyZC1hY3Rpb25zLCAubWF0LWNhcmQtc3VidGl0bGUsIC5tYXQtY2FyZC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmVycm9ye1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTMsIDE4MCwgMTc3KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm9re1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyMDQsIDI1MCwgMjE4KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */"]
});

/***/ }),

/***/ 4879:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/02-registros/dialog-update/dialog-update.component.ts ***!
  \*****************************************************************************/
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
/* harmony import */ var _notificados_dialog_notificados_insert_dialog_notificados_insert_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../notificados/dialog-notificados-insert/dialog-notificados-insert.component */ 5737);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _registros_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../registros.service */ 9524);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 8369);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 2288);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 5342);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ 9129);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 6246);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 9757);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 9181);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 338);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 1412);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/slide-toggle */ 9765);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);



























function DialogUpdateComponent_mat_option_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r12.cod_ele);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r12.descrip);
  }
}

function DialogUpdateComponent_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r13.cod_ele);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r13.descrip);
  }
}

function DialogUpdateComponent_mat_option_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r14.cod_ele);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r14.descrip);
  }
}

function DialogUpdateComponent_mat_option_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r15.cod_ele);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r15.descrip);
  }
}

function DialogUpdateComponent_mat_option_99_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r16.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r16.label);
  }
}

function DialogUpdateComponent_b_104_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" (Nombre del documento: ", ctx_r6.nameFileValidation.val, "APSDD DESCRIPCION.pdf)");
  }
}

function DialogUpdateComponent_mat_icon_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function DialogUpdateComponent_button_111_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogUpdateComponent_button_111_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](114);

      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r9.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}

function DialogUpdateComponent_div_120_mat_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r26.cod_ele);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](option_r26.descrip);
  }
}

function DialogUpdateComponent_div_120_mat_option_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", option_r27.descripcion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", option_r27.descripcion, " ");
  }
}

function DialogUpdateComponent_div_120_button_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 63)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Agregar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function DialogUpdateComponent_div_120_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Ciudad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Fecha ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Hora ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Emitida a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " A trav\u00E9s ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function DialogUpdateComponent_div_120_div_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 68)(2, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 68)(5, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 68)(9, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 70)(12, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 71)(15, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 72)(18, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogUpdateComponent_div_120_div_50_Template_button_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30);
      const data_r28 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r29.deleteRow(data_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-icon", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const data_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r28.t_ciudad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 5, data_r28.t_fecha, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r28.t_hora, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r28.t_aquien, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r28.t_atraves, " ");
  }
}

function DialogUpdateComponent_div_120_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "mat-card-subtitle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 0)(4, "div", 46)(5, "form", 7)(6, "mat-form-field", 47)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Ciudad");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, DialogUpdateComponent_div_120_mat_option_10_Template, 2, 2, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 46)(12, "form", 7)(13, "mat-form-field", 47)(14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogUpdateComponent_div_120_Template_input_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32);

      const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);

      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r20.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "mat-datepicker", null, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 46)(20, "form", 7)(21, "mat-form-field", 47)(22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 52)(26, "form", 7)(27, "mat-form-field", 47)(28, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Emitida a:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogUpdateComponent_div_120_Template_input_click_30_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32);

      const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](32);

      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r21);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-autocomplete", null, 54)(33, "mat-option", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogUpdateComponent_div_120_Template_mat_option_click_33_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r34.insertNotificados());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, " + Agregar nuevo");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "mat-option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Ninguno");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](38, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, DialogUpdateComponent_div_120_mat_option_39_Template, 2, 2, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 6)(41, "form", 7)(42, "mat-form-field", 47)(43, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "A trav\u00E9s");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 58)(47, "form", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogUpdateComponent_div_120_Template_form_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r35.saveNotificaciones(ctx_r35.formGroupNotificacion.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, DialogUpdateComponent_div_120_button_48_Template, 4, 0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, DialogUpdateComponent_div_120_div_49_Template, 12, 0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, DialogUpdateComponent_div_120_div_50_Template, 21, 8, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);

    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](32);

    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r10._words.esp.registroNotificaciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r10.formGroupNotificacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r10.dataOptions.ciudad);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r10.formGroupNotificacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matDatepicker", _r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r10.formGroupNotificacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r10.formGroupNotificacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matAutocomplete", _r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("blue-bg");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r10.dataAutoComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r10.formGroupNotificacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r10.formGroupNotificacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r10.formGroupNotificacion.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r10.dataNotificaciones.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r10.dataNotificaciones);
  }
}

function DialogUpdateComponent_div_123_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24)(1, "div", 75)(2, "mat-icon", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "privacy_tip");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "RECHAZADO:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r11.data.data.observaciones, " ");
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
      'etapa': ['CREADO'],
      'derivado': ['']
    };
    this.formControlNotificaciones = {
      'id': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      'rc_id': [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      't_ciudad': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      't_fecha': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      't_hora': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      't_aquien': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(300)]],
      't_atraves': ['REPRESENTANTE LEGAL', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(300)]],
      'estado': [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]]
    };
    this.formGroup = this.formBuilder.group(this.formControl);
    this.formGroupNotificacion = this.formBuilder.group(this.formControlNotificaciones);
  }

  ngOnInit() {
    var _this = this;

    return (0,D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this.data);

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
        derivado: ['']
      };
      _this.setFecha = _this.formatDate(_this.data.data.rc_fecha);
      _this.nameFileValidation.tipo = _this.data.data.rc_tipo;
      _this.nameFileValidation.numero = _this.data.data.rc_numero;
      _this.nameFileValidation.fecha = new Date(_this.data.data.rc_fecha).getFullYear().toString().substring(2, 4);

      _this.validationNameFile();

      _this.formGroup = _this.formBuilder.group(_this.formControl);

      _this.formOnchange();

      _this.getNotificados();

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
    })();
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

  formatDate(date) {
    const dateFormat = new Date(date);
    const auxMax = dateFormat.getFullYear() + '-12-31';
    const auxMin = dateFormat.getFullYear() + '-01-01';
    const max = new Date(auxMax);
    const min = new Date(auxMin);
    return {
      max: max,
      min: min
    };
  }

}

DialogUpdateComponent.ɵfac = function DialogUpdateComponent_Factory(t) {
  return new (t || DialogUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_registros_service__WEBPACK_IMPORTED_MODULE_3__.RegistrosService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar));
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
  decls: 131,
  vars: 30,
  consts: [["fxLayout", "row wrap"], ["src", "assets/images/logo-aps.png", "alt", "homepage", 1, "light-logo"], ["fxFlex", ""], ["mat-icon-button", "", "color", "warn", "matDialogClose", "cancel", "matTooltip", "Salir", 3, "click"], ["mat-dialog-title", "", 1, "head-dialog", 2, "text-align", "center"], ["mat-dialog-content", ""], ["fxFlex.gt-lg", "25", "fxFlex.gt-md", "25", "fxFlex.gt-xs", "100", "fxFlex", "100"], [3, "formGroup"], ["appearance", "outline", 1, "form-element"], ["formControlName", "rc_inten"], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex.gt-lg", "30", "fxFlex.gt-md", "30", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["formControlName", "rc_tipo"], ["fxFlex.gt-lg", "15", "fxFlex.gt-md", "15", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["matInput", "", "formControlName", "rc_fecha", "readonly", "", 3, "min", "max", "matDatepicker", "click"], ["picker", ""], ["formControlName", "rc_mercado"], ["fxFlex.gt-lg", "60", "fxFlex.gt-md", "60", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["formControlName", "rc_subtipo"], ["matInput", "", "formControlName", "rc_numero", "maxlength", "4", "onkeypress", "return (event.charCode >= 48 && event.charCode <= 57)"], ["fxFlex.gt-lg", "5", "fxFlex.gt-md", "5", "fxFlex.gt-xs", "0", "fxFlex", "0"], ["fxFlex.gt-lg", "5", "fxFlex.gt-md", "5", "fxFlex.gt-xs", "100", "fxFlex", "100"], [1, "form-element", 3, "ngModel", "ngModelChange", "change"], ["matInput", "", "formControlName", "rc_alfa", "maxlength", "1"], ["fxFlex.gt-lg", "100", "fxFlex.gt-md", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["matInput", "", "formControlName", "rc_titulo", "maxlength", "1000"], ["fxFlex.gt-lg", "70", "fxFlex.gt-md", "70", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["matInput", "", "formControlName", "rc_comentarios", "maxlength", "2000"], ["formControlName", "derivado"], [4, "ngIf"], ["color", "primary", 4, "ngIf"], ["mat-icon-button", "", "matPrefix", "", 3, "click", 4, "ngIf"], ["type", "text", "formControlName", "rc_filename", "readonly", "", "matInput", "", 3, "click"], ["type", "file", "hidden", "", "accept", "application/pdf", 3, "change"], ["file", ""], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "color", "warn", "aria-label", "Clear", 3, "click"], ["mat-dialog-actions", "", "fxLayout", "row wrap"], ["fxFlex.gt-lg", "80", "fxFlex.gt-md", "80", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-lg", "100", "fxFlex.gt-md", "100", "fxFlex.gt-xs", "100", "fxFlex", "100", 4, "ngIf"], ["fxFlex.gt-lg", "20", "fxFlex.gt-md", "20", "fxFlex.gt-xs", "100", "fxFlex", "100"], [3, "formGroup", "ngSubmit"], [1, "form-element"], ["mat-raised-button", "", "color", "primary", "type", "submit", "matTooltip", "Registrar", 1, "form-element", 3, "disabled"], [3, "value"], ["color", "primary"], ["mat-icon-button", "", "matPrefix", "", 3, "click"], ["fxFlex.gt-lg", "10", "fxFlex.gt-md", "10", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["appearance", "outline", 1, "form-search"], ["formControlName", "t_ciudad"], ["matInput", "", "formControlName", "t_fecha", "readonly", "", 3, "matDatepicker", "click"], ["pickerNotificacion", ""], ["matInput", "", "type", "time", "formControlName", "t_hora", "placeholder", "start date"], ["fxFlex.gt-lg", "33", "fxFlex.gt-md", "33", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["type", "text", "aria-label", "Choose one option", "matInput", "", "formControlName", "t_aquien", "onkeypress", "return (event.charCode != 39)", 3, "matAutocomplete", "click"], ["auto1", "matAutocomplete"], [3, "click"], ["value", "Ninguno"], ["matInput", "", "formControlName", "t_atraves"], ["fxFlex.gt-lg", "12", "fxFlex.gt-md", "12", "fxFlex.gt-xs", "10", "fxFlex", "10"], [1, "form-search", 3, "formGroup", "click"], ["mat-raised-button", "", "color", "primary", "matTooltip", "Registrar", 4, "ngIf"], ["fxLayout", "row wrap", 4, "ngIf"], ["fxLayout", "row wrap", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", "matTooltip", "Registrar"], ["fxFlex.gt-lg", "10", "fxFlex.gt-md", "10", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-label"], ["fxFlex.gt-lg", "35", "fxFlex.gt-md", "35", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-label"], ["fxFlex.gt-lg", "30", "fxFlex.gt-md", "30", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-label"], ["fxFlex.gt-lg", "5", "fxFlex.gt-md", "5", "fxFlex.gt-xs", "10", "fxFlex", "10", 1, "form-label"], ["fxFlex.gt-lg", "10", "fxFlex.gt-md", "10", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-search"], [1, "form-search"], ["fxFlex.gt-lg", "35", "fxFlex.gt-md", "35", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-search"], ["fxFlex.gt-lg", "30", "fxFlex.gt-md", "30", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-search"], ["fxFlex.gt-lg", "5", "fxFlex.gt-md", "5", "fxFlex.gt-xs", "5", "fxFlex", "5"], ["mat-icon-button", "", "matTooltip", "Eliminar", 1, "buttonTable", 3, "click"], ["color", "warn"], ["fxFlex.gt-lg", "20", "fxFlex.gt-md", "20", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "formulario"], ["fxFlex.gt-lg", "80", "fxFlex.gt-md", "80", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "formulario"]],
  template: function DialogUpdateComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5)(10, "mat-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 0)(13, "div", 6)(14, "form", 7)(15, "mat-form-field", 8)(16, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Institucion");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, DialogUpdateComponent_mat_option_19_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Seleccione una instititucion");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 11)(23, "form", 7)(24, "mat-form-field", 8)(25, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Tipo de documento");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, DialogUpdateComponent_mat_option_28_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Seleccione una instititucion");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 13)(32, "form", 7)(33, "mat-form-field", 8)(34, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Fecha");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogUpdateComponent_Template_input_click_36_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36);

        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](38);

        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r2.open());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "mat-datepicker", null, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 13)(40, "form", 7)(41, "mat-form-field", 8)(42, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Mercado");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "mat-select", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, DialogUpdateComponent_mat_option_45_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Seleccione el Mercado");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 17)(49, "form", 7)(50, "mat-form-field", 8)(51, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Tipo de Resoluci\u00F3n");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "mat-select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, DialogUpdateComponent_mat_option_54_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, "Seleccione el Mercado");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 13)(58, "form", 7)(59, "mat-form-field", 8)(60, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "N\u00FAmero ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "*Obligatorio 4 d\u00EDgitos Ej.0025");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 21)(67, "div")(68, "mat-slide-toggle", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DialogUpdateComponent_Template_mat_slide_toggle_ngModelChange_68_listener($event) {
        return ctx.disabled = $event;
      })("change", function DialogUpdateComponent_Template_mat_slide_toggle_change_68_listener($event) {
        return ctx.enableAlpha($event.checked);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 13)(70, "form", 7)(71, "mat-form-field", 8)(72, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "Alfabetico");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](74, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Alfanumerico");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 24)(78, "form", 7)(79, "mat-form-field", 8)(80, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "Titulo");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](82, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "Ingrese el titulo de la Resolucion");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "div", 26)(86, "form", 7)(87, "mat-form-field", 8)(88, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "Comentario");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](90, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "Ingrese un comentario");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "div", 11)(94, "form", 7)(95, "mat-form-field", 8)(96, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, "Asignar a:");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "mat-select", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](99, DialogUpdateComponent_mat_option_99_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "Seleccione el Mercado");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "mat-card-subtitle");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](103);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](104, DialogUpdateComponent_b_104_Template, 2, 1, "b", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](105, DialogUpdateComponent_mat_icon_105_Template, 2, 0, "mat-icon", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "div", 24)(107, "form", 7)(108, "mat-form-field", 8)(109, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110, "Documento digitalizado");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](111, DialogUpdateComponent_button_111_Template, 3, 0, "button", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogUpdateComponent_Template_input_click_112_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r36);

        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](114);

        return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r9.click());
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "input", 33, 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function DialogUpdateComponent_Template_input_change_113_listener($event) {
        return ctx.onSelectFile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DialogUpdateComponent_Template_button_click_115_listener() {
        return ctx.clearFile();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](117, "close");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "mat-error");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](119, "Adjunte un documento v\u00E1lido");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](120, DialogUpdateComponent_div_120_Template, 51, 16, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "div", 36)(122, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](123, DialogUpdateComponent_div_123_Template, 8, 1, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "div", 39)(125, "form", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function DialogUpdateComponent_Template_form_ngSubmit_125_listener() {
        return ctx.onSubmit(ctx.formGroup.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "div", 41)(127, "button", 42)(128, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, "save");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130, " Guardar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](38);

      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx._words.esp.titulo);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx._words.esp.datosDocumento);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.dataOptions.institucion);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.dataOptions.documentos);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("min", ctx.setFecha.min)("max", ctx.setFecha.max)("matDatepicker", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.dataOptions.mercado);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.dataOptions.tipo);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.disabled);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.dataOptions.usuarios);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx._words.esp.adjuntarDocumento, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nameFileValidation.val.length == 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nameFileValidation.status == "valido");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.nameFileValidation.val.length == 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.disabledNotificaciones);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data.data.observaciones != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.formGroup.invalid);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteTrigger, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardSubtitle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerInput, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDivider, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__.MatSlideToggle, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
  styles: [".form-element[_ngcontent-%COMP%] {\r\n  padding: 0.1px 2px;\r\n  width: 100%;\r\n}\r\n\r\n  .mat-form-field-flex > .mat-form-field-infix { padding: 0.6em 0px !important;}\r\n\r\n  .mat-form-field-subscript-wrapper {\r\n  font-size: 65%;\r\n  margin-top: 0.2em;\r\n  top: calc(100% - 2em);\r\n}\r\n\r\n  .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\r\n    transform: translateY(-1.7em) scale(.75);\r\n    width: 100%;\r\n}\r\n\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  font-weight: 300;\r\n  line-height: 1.2;\r\n  font-family: Poppins, sans-serif;\r\n  letter-spacing: normal;\r\n}\r\n\r\n.close-button[_ngcontent-%COMP%]{\r\n  float: right;\r\n  top:-5px;\r\n  right:-5px;\r\n  color: red;\r\n}\r\n\r\n.image-logo[_ngcontent-%COMP%]{\r\n  float: left;\r\n  top:-5px;\r\n  left:-5px;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .form-label[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (min-width: 800px) {\r\n  .form-label[_ngcontent-%COMP%]{\r\n    padding: 5px 2px;\r\n    font-size: 10px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    background-color: #007CC3;\r\n    color: aliceblue;\r\n  }\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .form-search[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (min-width: 800px) {\r\n  .form-search[_ngcontent-%COMP%]{\r\n    padding: 3px 2px;\r\n    font-size: 12px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  }\r\n}\r\n\r\n.form-table[_ngcontent-%COMP%]{\r\n  padding-top: 0.3em;\r\n\r\n}\r\n\r\n.buttonTable[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  min-width: 0;\r\n  width: 40px;\r\n  height: 20px;\r\n  flex-shrink: 0;\r\n  line-height: 20px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.form-element[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.mat-card-actions[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%], .mat-card-content[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-bottom: 5px;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n  .error{\r\n  color:white;\r\n  background: rgb(253, 180, 177) !important;\r\n}\r\n\r\n  .ok{\r\n  color:white;\r\n  background: rgb(204, 250, 218) !important;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZy11cGRhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUEseURBQXlELDZCQUE2QixDQUFDOztBQUN2RjtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0lBQ0ksd0NBQXdDO0lBQ3hDLFdBQVc7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osUUFBUTtFQUNSLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFHQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0RBQWdEO0lBQ2hELHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFJQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0RBQWdEO0VBQ2xEO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUdBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxXQUFXO0VBQ1gseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlDQUF5QztBQUMzQyIsImZpbGUiOiJkaWFsb2ctdXBkYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1lbGVtZW50IHtcclxuICBwYWRkaW5nOiAwLjFweCAycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtZmxleCA+IC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7IHBhZGRpbmc6IDAuNmVtIDBweCAhaW1wb3J0YW50O31cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XHJcbiAgZm9udC1zaXplOiA2NSU7XHJcbiAgbWFyZ2luLXRvcDogMC4yZW07XHJcbiAgdG9wOiBjYWxjKDEwMCUgLSAyZW0pO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuN2VtKSBzY2FsZSguNzUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9ue1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB0b3A6LTVweDtcclxuICByaWdodDotNXB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLmltYWdlLWxvZ297XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdG9wOi01cHg7XHJcbiAgbGVmdDotNXB4O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmZvcm0tbGFiZWx7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XHJcbiAgLmZvcm0tbGFiZWx7XHJcbiAgICBwYWRkaW5nOiA1cHggMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0NDMztcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5mb3JtLXNlYXJjaHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAuZm9ybS1zZWFyY2h7XHJcbiAgICBwYWRkaW5nOiAzcHggMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0tdGFibGV7XHJcbiAgcGFkZGluZy10b3A6IDAuM2VtO1xyXG5cclxufVxyXG5cclxuLmJ1dHRvblRhYmxlIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1pbi13aWR0aDogMDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5mb3JtLWVsZW1lbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuLm1hdC1jYXJkLWFjdGlvbnMsIC5tYXQtY2FyZC1zdWJ0aXRsZSwgLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgLmVycm9ye1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTMsIDE4MCwgMTc3KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm9re1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyMDQsIDI1MCwgMjE4KSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 5737:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/02-registros/notificados/dialog-notificados-insert/dialog-notificados-insert.component.ts ***!
  \*****************************************************************************************************************/
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
/* harmony import */ var _registros_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../registros.service */ 9524);
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
  return new (t || DialogNotificadosInsertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_registros_service__WEBPACK_IMPORTED_MODULE_2__.RegistrosService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog));
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

/***/ 8698:
/*!***********************************************************!*\
  !*** ./src/app/pages/02-registros/registros.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrosComponent": () => (/* binding */ RegistrosComponent)
/* harmony export */ });
/* harmony import */ var D_2024_01_APS_02_Desarrollo_05_sireci_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 6991);
/* harmony import */ var src_app_components_dialogs_message_box_message_box_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/dialogs/message-box/message-box.component */ 4401);
/* harmony import */ var src_app_models_words__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/words */ 8046);
/* harmony import */ var _dialog_document_dialog_document_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog-document/dialog-document.component */ 914);
/* harmony import */ var _dialog_insert_dialog_insert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog-insert/dialog-insert.component */ 6712);
/* harmony import */ var _dialog_update_dialog_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog-update/dialog-update.component */ 4879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _registros_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registros.service */ 9524);
/* harmony import */ var _authentication_services_authorization_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../authentication/services/authorization.service */ 1637);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 8369);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8281);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 2288);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 5342);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 1223);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 4369);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 6246);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ 9757);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/datepicker */ 9181);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 2544);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/divider */ 338);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ 9421);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/paginator */ 9272);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ 1412);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tooltip */ 6178);





























function RegistrosComponent_div_0_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegistrosComponent_div_0_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r6.insertRow());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, " Nuevo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}

function RegistrosComponent_div_0_div_21_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r19.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](option_r19.label);
  }
}

function RegistrosComponent_div_0_div_21_mat_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r20.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](option_r20.label);
  }
}

function RegistrosComponent_div_0_div_21_mat_option_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r21.cod_ele);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](option_r21.descrip);
  }
}

function RegistrosComponent_div_0_div_21_mat_option_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r22.cod_ele);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](option_r22.descrip);
  }
}

function RegistrosComponent_div_0_div_21_mat_option_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", option_r23.cod_ele);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](option_r23.descrip);
  }
}

function RegistrosComponent_div_0_div_21_button_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegistrosComponent_div_0_div_21_button_54_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r24.formGroup.controls["numero"].setValue(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function RegistrosComponent_div_0_div_21_button_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegistrosComponent_div_0_div_21_button_61_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r26.formGroup.controls["titulo"].setValue(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function RegistrosComponent_div_0_div_21_button_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegistrosComponent_div_0_div_21_button_67_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r28.formGroup.controls["del"].setValue(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function RegistrosComponent_div_0_div_21_button_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegistrosComponent_div_0_div_21_button_77_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r30.formGroup.controls["al"].setValue(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function RegistrosComponent_div_0_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "div", 17)(2, "div", 1)(3, "div", 18)(4, "form", 19)(5, "mat-form-field", 20)(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "mat-select", 21)(9, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "TODOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, RegistrosComponent_div_0_div_21_mat_option_11_Template, 2, 2, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 24)(13, "form", 19)(14, "mat-form-field", 20)(15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Gesti\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "mat-select", 25)(18, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "TODOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, RegistrosComponent_div_0_div_21_mat_option_20_Template, 2, 2, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 27)(22, "form", 19)(23, "mat-form-field", 20)(24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Tipo de documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "mat-select", 28)(27, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](28, "TODOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](29, RegistrosComponent_div_0_div_21_mat_option_29_Template, 2, 2, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 29)(31, "form", 19)(32, "mat-form-field", 20)(33, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "Tipo de resoluci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "mat-select", 30)(36, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "TODOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](38, RegistrosComponent_div_0_div_21_mat_option_38_Template, 2, 2, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 24)(40, "form", 19)(41, "mat-form-field", 20)(42, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Mercado");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "mat-select", 31)(45, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "TODOS");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](47, RegistrosComponent_div_0_div_21_mat_option_47_Template, 2, 2, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 18)(49, "form", 19)(50, "mat-form-field", 20)(51, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52, "N\u00FAmero");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](53, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](54, RegistrosComponent_div_0_div_21_button_54_Template, 3, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div", 34)(56, "form", 19)(57, "mat-form-field", 20)(58, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "T\u00EDtulo");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](60, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](61, RegistrosComponent_div_0_div_21_button_61_Template, 3, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "div", 36)(63, "form", 19)(64, "mat-form-field", 20)(65, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66, "Desde");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](67, RegistrosComponent_div_0_div_21_button_67_Template, 3, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](68, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegistrosComponent_div_0_div_21_Template_input_click_68_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33);

      const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](70);

      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r16.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](69, "mat-datepicker", null, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "div", 36)(72, "form", 19)(73, "mat-form-field", 20)(74, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](75, "Hasta");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegistrosComponent_div_0_div_21_Template_input_click_76_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33);

      const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](79);

      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](_r18.open());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](77, RegistrosComponent_div_0_div_21_button_77_Template, 3, 0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](78, "mat-datepicker", null, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 41)(81, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegistrosComponent_div_0_div_21_Template_button_click_81_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r35.setForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](83, "autorenew");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](84, " Limpiar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](70);

    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](79);

    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r3.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.estado);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r3.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.dataOptions.years);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r3.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.dataOptions.documentos);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r3.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.dataOptions.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r3.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.dataOptions.mercado);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r3.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.formGroup.controls["numero"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r3.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.formGroup.controls["titulo"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r3.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.formGroup.controls["del"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matDatepicker", _r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r3.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matDatepicker", _r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.formGroup.controls["al"].value);
  }
}

function RegistrosComponent_div_0_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("mat-sort-header", config_r36.name)("fxFlex.gt-lg", config_r36.width)("fxFlex.gt-md", config_r36.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", config_r36.label, " ");
  }
}

function RegistrosComponent_div_0_div_25_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegistrosComponent_div_0_div_25_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r45);
      const config_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r43.openPdf(config_r37));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "picture_as_pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function RegistrosComponent_div_0_div_25_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegistrosComponent_div_0_div_25_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r48);
      const config_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r46.updateRow(config_r37));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function RegistrosComponent_div_0_div_25_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegistrosComponent_div_0_div_25_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r51);
      const config_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r49.deleteRow(config_r37));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function RegistrosComponent_div_0_div_25_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegistrosComponent_div_0_div_25_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r54);
      const config_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r52.documentRow(config_r37));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "verified_user");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function RegistrosComponent_div_0_div_25_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegistrosComponent_div_0_div_25_button_22_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r57);
      const config_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r55.documentRow(config_r37));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "privacy_tip");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function RegistrosComponent_div_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "div", 46)(2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 48)(5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 49)(8, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 49)(11, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 50)(15, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, RegistrosComponent_div_0_div_25_button_18_Template, 3, 0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, RegistrosComponent_div_0_div_25_button_19_Template, 3, 0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, RegistrosComponent_div_0_div_25_button_20_Template, 3, 0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, RegistrosComponent_div_0_div_25_button_21_Template, 3, 0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, RegistrosComponent_div_0_div_25_button_22_Template, 3, 0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const config_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", config_r37["tipo"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", config_r37["subtipo"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", config_r37["rc_numero"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](13, 10, config_r37["rc_fecha"], "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", config_r37["rc_titulo"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", config_r37.rc_filesize > 0 && config_r37.etapa == "CREADO");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", config_r37.etapa == "CREADO");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", config_r37.etapa == "CREADO");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", config_r37.etapa == "APROBADO");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", config_r37.etapa == "PENDIENTE");
  }
}

const _c0 = function () {
  return [5, 10, 25, 100];
};

function RegistrosComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "mat-card", 3)(3, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Registros");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, RegistrosComponent_div_0_button_9_Template, 4, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 6)(11, "button", 8)(12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "mat-menu", null, 9)(17, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegistrosComponent_div_0_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r59);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r58.downloadpdf());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function RegistrosComponent_div_0_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r59);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r60.downloadxlsx());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, RegistrosComponent_div_0_div_21_Template, 85, 20, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("matSortChange", function RegistrosComponent_div_0_Template_div_matSortChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r59);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r61.sortData($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, RegistrosComponent_div_0_div_23_Template, 2, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](25, RegistrosComponent_div_0_div_25_Template, 24, 13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div")(27, "mat-paginator", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("page", function RegistrosComponent_div_0_Template_mat_paginator_page_27_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r59);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r62.dataTableUpdate($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](16);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.authorizationService.isAuthorized("operador"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0._words.esp.opciones);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0._words.esp.reportePDF);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r0._words.esp.reporteExcel);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.authorizationService.isAuthorized("operador"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.headersTable);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("length", ctx_r0.count)("pageSize", ctx_r0.page.size)("pageIndex", ctx_r0.page.index)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](12, _c0));
  }
}

class RegistrosComponent {
  constructor(formBuilder, dialog, rest, authorizationService, _snackBar) {
    this.formBuilder = formBuilder;
    this.dialog = dialog;
    this.rest = rest;
    this.authorizationService = authorizationService;
    this._snackBar = _snackBar; //Palabras Internacionalizadas

    this._words = src_app_models_words__WEBPACK_IMPORTED_MODULE_2__.Words;
    this.formControl = {
      model: ['cartas_resoluciones'],
      entidad: ['PS'],
      modulo: ['REGISTRO'],
      etapa: [''],
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
    {
      value: 'CREADO',
      label: 'CREADO'
    }, {
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
  }

  openSnackBar(message, action, type) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [type]
    });
  }

  insertRow() {
    var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
    dialogConfig.width = '1200px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {};
    let dialogRef = this.dialog.open(_dialog_insert_dialog_insert_component__WEBPACK_IMPORTED_MODULE_4__.DialogInsertComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result.status === 'success') {
        this.openSnackBar(result.message, '', 'ok');
        this.dataTableUpdate({
          pageSize: 10,
          pageIndex: 0
        });
      }

      if (result.status === 'error') {
        this.openSnackBar(result.message, '', 'error');
      }
    });
  }

  updateRow(rowSelect) {
    var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
    dialogConfig.width = '1200px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      data: rowSelect
    };
    let dialogRef = this.dialog.open(_dialog_update_dialog_update_component__WEBPACK_IMPORTED_MODULE_5__.DialogUpdateComponent, dialogConfig);
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

  documentRow(rowSelect) {
    var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogConfig();
    dialogConfig.width = '1200px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      data: rowSelect
    };
    let dialogRef = this.dialog.open(_dialog_document_dialog_document_component__WEBPACK_IMPORTED_MODULE_3__.DialogDocumentComponent, dialogConfig);
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

  deleteRow(rowSelect) {
    let dialogMessage = this.dialog.open(src_app_components_dialogs_message_box_message_box_component__WEBPACK_IMPORTED_MODULE_1__.MessageBoxComponent, {
      disableClose: true,
      autoFocus: true,
      data: {
        cancelarBtn: true,
        aceptarBtn: true,
        titulo: 'Mensaje',
        descripcion: 'Se eliminara el registro Seleccionado'
      }
    });
    dialogMessage.afterClosed().subscribe(result1 => {
      if (result1 === 'confirm') {
        this.rest.delete(this.formGroup.controls.model.value, rowSelect.id).subscribe(data => {
          this.openSnackBar('Se eliminó el registro correctamente', '', 'warning');
          this.dataTableUpdate({
            pageSize: 10,
            pageIndex: 0,
            sort: ''
          });
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
    this.rest.getCsv(dto, this.page.index + 1, this.page.size, this.sort, this.order).subscribe(result => {
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
    this.rest.getPdf(dto, this.page.index + 1, this.page.size, this.sort, this.order).subscribe(res => {
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

}

RegistrosComponent.ɵfac = function RegistrosComponent_Factory(t) {
  return new (t || RegistrosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_registros_service__WEBPACK_IMPORTED_MODULE_6__.RegistrosService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_authentication_services_authorization_service__WEBPACK_IMPORTED_MODULE_7__.AuthorizationService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar));
};

RegistrosComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: RegistrosComponent,
  selectors: [["app-registros"]],
  decls: 1,
  vars: 1,
  consts: [["fxLayout", "row wrap", 4, "ngIf"], ["fxLayout", "row wrap"], ["fxFlex", "100"], [1, "card"], ["mat-card-avatar", "", "src", "assets/images/img/documentos1.jpg", 1, "header-image"], ["fxFlex", ""], ["fxFlex.gt-lg", "10", "fxFlex.gt-md", "10", "fxFlex.gt-xs", "100", "fxFlex", "100", 2, "text-align", "right"], ["mat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "primary", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["fxLayout", "row wrap", "matSort", "", "matSortActive", "rc_fecha", "matSortDirection", "desc", "matSortDisableClear", "", 3, "matSortChange"], ["class", "form-table-head", "fxFlex.gt-xs", "100", "fxFlex", "100", 3, "mat-sort-header", "fxFlex.gt-lg", "fxFlex.gt-md", 4, "ngFor", "ngForOf"], ["fxFlex.gt-lg", "10", "fxFlex.gt-md", "10", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-table-head"], ["fxLayout", "row wrap", 4, "ngFor", "ngForOf"], [3, "length", "pageSize", "pageIndex", "pageSizeOptions", "page"], ["mat-button", "", "color", "primary", 3, "click"], ["fxFlex.gt-lg", "100", "fxFlex.gt-md", "100", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["fxFlex.gt-lg", "20", "fxFlex.gt-md", "20", "fxFlex.gt-xs", "100", "fxFlex", "100"], [3, "formGroup"], ["appearance", "outline", 1, "form-search"], ["formControlName", "etapa"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["fxFlex.gt-lg", "10", "fxFlex.gt-md", "10", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["formControlName", "year"], ["value", "0"], ["fxFlex.gt-lg", "25", "fxFlex.gt-md", "25", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["formControlName", "tipo"], ["fxFlex.gt-lg", "35", "fxFlex.gt-md", "35", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["formControlName", "subtipo"], ["formControlName", "mercado"], ["type", "text", "matInput", "", "formControlName", "numero", "maxlength", "4", "autocomplete", "off", "onkeypress", "return (event.charCode >= 48 && event.charCode <= 57)"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "color", "warn", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["fxFlex.gt-lg", "40", "fxFlex.gt-md", "40", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["type", "text", "maxlength", "100", "matInput", "", "formControlName", "titulo", "onkeypress", "return (event.charCode != 39)"], ["fxFlex.gt-lg", "15", "fxFlex.gt-md", "15", "fxFlex.gt-xs", "100", "fxFlex", "100"], ["matInput", "", "formControlName", "del", "readonly", "", 3, "matDatepicker", "click"], ["desde", ""], ["matInput", "", "formControlName", "al", "readonly", "", 3, "matDatepicker", "click"], ["hasta", ""], ["fxFlex.gt-lg", "10", "fxFlex.gt-md", "10", "fxFlex.gt-xs", "100", "fxFlex", "100", 2, "text-align", "center"], ["mat-button", "", "color", "primary", 1, "form-search", 3, "click"], [3, "value"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "color", "warn", "aria-label", "Clear", 3, "click"], ["fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-table-head", 3, "mat-sort-header", "fxFlex.gt-lg", "fxFlex.gt-md"], ["fxFlex.gt-lg", "15", "fxFlex.gt-md", "15", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-table-body"], [1, "form-table-body"], ["fxFlex.gt-lg", "19", "fxFlex.gt-md", "19", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-table-body"], ["fxFlex.gt-lg", "8", "fxFlex.gt-md", "8", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-table-body"], ["fxFlex.gt-lg", "40", "fxFlex.gt-md", "40", "fxFlex.gt-xs", "100", "fxFlex", "100", 1, "form-table-body"], ["fxFlex.gt-lg", "10", "fxFlex.gt-md", "10", "fxFlex.gt-xs", "10", "fxFlex", "10", 2, "text-align", "right"], ["mat-icon-button", "", "matTooltip", "ver adjunto", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Editar", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Eliminar", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Aprobado", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Pendiente", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "ver adjunto", 3, "click"], ["color", "warn"], ["mat-icon-button", "", "matTooltip", "Editar", 3, "click"], ["color", "accent"], ["mat-icon-button", "", "matTooltip", "Eliminar", 3, "click"], ["mat-icon-button", "", "matTooltip", "Aprobado", 3, "click"], [2, "color", "green"], ["mat-icon-button", "", "matTooltip", "Pendiente", 3, "click"]],
  template: function RegistrosComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, RegistrosComponent_div_0_Template, 28, 13, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.authorizationService.isAuthorized("operador"));
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortHeader, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_19__.MatCardAvatar, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__.MatDatepickerInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_22__.MatDivider, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__._MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuTrigger, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginator, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__.MatSelect, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
  styles: ["@media (min-width: 800px) {\r\n  .form-label[_ngcontent-%COMP%]{\r\n    padding: 5px 2px;\r\n    font-size: 12px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n    background-color: #007CC3;\r\n    color: aliceblue;\r\n  }\r\n}\r\n\r\n@media (max-width: 800px) {\r\n  .form-search[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (min-width: 800px) {\r\n  .form-search[_ngcontent-%COMP%]{\r\n    padding: 2px 2px;\r\n    font-size: 12px;\r\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  }\r\n}\r\n\r\n.form-element[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.form-table-head[_ngcontent-%COMP%]{\r\n  padding: 2px 2px;\r\n  font-size: 12px;\r\n  text-align: left;\r\n  background-color: #f4f8fa;\r\n}\r\n\r\n.form-table-body[_ngcontent-%COMP%]{\r\n  padding: 2px 2px;\r\n  font-size: 12px;\r\n}\r\n\r\n.example-header-image[_ngcontent-%COMP%] {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\n  .error{\r\n  color:white;\r\n  background: rgb(253, 180, 177) !important;\r\n}\r\n\r\n  .ok{\r\n  color:white;\r\n  background: rgb(204, 250, 218) !important;\r\n}\r\n\r\n.input[_ngcontent-%COMP%] {\r\n  width:80%;\r\n  display:block;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n  position:relative;\r\n  height:20px;\r\n  line-height:20px;\r\n  padding-left:10px;\r\n}\r\n\r\n  .mat-form-field-wrapper {\r\n  padding-bottom: 1.2em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdEQUFnRDtJQUNoRCx5QkFBeUI7SUFDekIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdEQUFnRDtFQUNsRDtBQUNGOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtRkFBbUY7RUFDbkYsc0JBQXNCO0FBQ3hCOztBQUdBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InJlZ2lzdHJvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XHJcbiAgLmZvcm0tbGFiZWx7XHJcbiAgICBwYWRkaW5nOiA1cHggMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0NDMztcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuZm9ybS1zZWFyY2h7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XHJcbiAgLmZvcm0tc2VhcmNoe1xyXG4gICAgcGFkZGluZzogMnB4IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICB9XHJcbn1cclxuLmZvcm0tZWxlbWVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLXRhYmxlLWhlYWR7XHJcbiAgcGFkZGluZzogMnB4IDJweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmOGZhO1xyXG59XHJcblxyXG4uZm9ybS10YWJsZS1ib2R5e1xyXG4gIHBhZGRpbmc6IDJweCAycHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRoLm1hdC1zb3J0LWhlYWRlci1zb3J0ZWQge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuOjpuZy1kZWVwIC5lcnJvcntcclxuICBjb2xvcjp3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjUzLCAxODAsIDE3NykgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5va3tcclxuICBjb2xvcjp3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjA0LCAyNTAsIDIxOCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICB3aWR0aDo4MCU7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gIG1hcmdpbi1yaWdodDphdXRvO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIGhlaWdodDoyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OjIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEuMmVtO1xyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 6501:
/*!********************************************************!*\
  !*** ./src/app/pages/02-registros/registros.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrosModule": () => (/* binding */ RegistrosModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ 1378);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 5342);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 3186);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 1223);
/* harmony import */ var src_app_app_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app-material-module */ 1552);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/components/components.module */ 5642);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-pdf-viewer */ 2214);
/* harmony import */ var _registros_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registros.component */ 8698);
/* harmony import */ var _dialog_insert_dialog_insert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog-insert/dialog-insert.component */ 6712);
/* harmony import */ var _notificados_dialog_notificados_insert_dialog_notificados_insert_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notificados/dialog-notificados-insert/dialog-notificados-insert.component */ 5737);
/* harmony import */ var _dialog_update_dialog_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog-update/dialog-update.component */ 4879);
/* harmony import */ var _dialog_document_dialog_document_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-document/dialog-document.component */ 914);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);

















class RegistrosModule {
}
RegistrosModule.ɵfac = function RegistrosModule_Factory(t) { return new (t || RegistrosModule)(); };
RegistrosModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: RegistrosModule, bootstrap: [_registros_component__WEBPACK_IMPORTED_MODULE_2__.RegistrosComponent] });
RegistrosModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_9__.PdfViewerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__.FlexLayoutModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortModule,
        src_app_app_material_module__WEBPACK_IMPORTED_MODULE_0__.AppMaterialModule,
        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild([
            {
                path: '',
                component: _registros_component__WEBPACK_IMPORTED_MODULE_2__.RegistrosComponent
            },
        ])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](RegistrosModule, { declarations: [_registros_component__WEBPACK_IMPORTED_MODULE_2__.RegistrosComponent, _dialog_insert_dialog_insert_component__WEBPACK_IMPORTED_MODULE_3__.DialogInsertComponent, _dialog_update_dialog_update_component__WEBPACK_IMPORTED_MODULE_5__.DialogUpdateComponent, _notificados_dialog_notificados_insert_dialog_notificados_insert_component__WEBPACK_IMPORTED_MODULE_4__.DialogNotificadosInsertComponent, _dialog_document_dialog_document_component__WEBPACK_IMPORTED_MODULE_6__.DialogDocumentComponent], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_9__.PdfViewerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__.FlexLayoutModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortModule,
        src_app_app_material_module__WEBPACK_IMPORTED_MODULE_0__.AppMaterialModule,
        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_02-registros_registros_module_ts.js.map