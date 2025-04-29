import {
  Component,
  OnInit,
} from '@angular/core';

import {
  AuthenticationService,
} from 'src/app/authentication/services/authentication.service';
import { AuthorizationService } from 'src/app/authentication/services/authorization.service';
import { SettingsService } from './settings.service';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CrudService } from 'src/app/services/crud/crud.service';
import { MessageBoxComponent } from 'src/app/components/message-box/message-box.component';
import { DialogInsertComponent } from './formularios/dialog-insert/dialog-insert.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {

  //#region VARIABLES

  // Variables del Formulario
  formGroup: UntypedFormGroup;  

  //table
  data: any =[];
  count = 0;

  //sort
  sort: string = '';
  order: string = 'desc';
  page = {
    size: 10,
    index: 0
  };


  //#region CONFIG
  //CAMPOS DEL FOMRULARIO DE BUSQUEDA
  formControl = {
    descripcion:['']
  }

  //CAMPOS DE LAS COLUMNAS DE LAS TABLAS
  columnsTable=
  [
    {name:'codigo', label:'Codigo', width:10},
    {name:'descripcion', label:'Descripción',  width:20},
    {name:'valor', label:'Valor',  width:10},
  ]  


  constructor(
    public authorizationService: AuthorizationService,
    public authenticationService: AuthenticationService,
    private formBuilder: UntypedFormBuilder,
    private dialog: MatDialog,
    public service: SettingsService,
    public appService: CrudService,
    ) {
      this.formGroup =this.formBuilder.group([]);
    }

  ngOnInit() {
    this.setForm()
  }

  setForm(){
    this.formGroup =this.formBuilder.group(this.formControl);
    this.formOnchange();
    this.dataTableUpdate(this.page);
  }

  formOnchange(){
    this.formGroup.valueChanges.subscribe(async data => {
      this.dataTableUpdate(this.page);
    })
  }
  
  //#region CRUD
  //ACTUALIZA LA TABLA DEL MÓDULO
  dataTableUpdate(event: any){
    this.page.size = event.pageSize !== undefined? event.pageSize: 10;
    this.page.index = event.pageIndex !== undefined? event.pageIndex: 0;
    var searchDto = (this.formGroup).getRawValue()
    this.service.getAll(searchDto,this.page.index+1, this.page.size,this.sort, this.order)
    .subscribe((data:any) => {
      const result = data.data
      this.data = result.data;
      this.count = result.count;
    });
  }

  //FUNCIÓN PARA ABRIR LA VENTANA DE INSERTAR
  insertRow()
  {
    var dialogConfig = new MatDialogConfig();
    dialogConfig.width = '1200px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    let dialogRef = this.dialog.open(DialogInsertComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result:any) => {
      if (result.success === true) {
        this.appService.openSnackBar(result.message,'','ok')
        this.dataTableUpdate({ pageSize: 10, pageIndex: 0 });
      }
      if (result.success === false) {
        this.appService.openSnackBar(result.message,'','error')
      }
    });
  }

  //FUNCIÓN PARA ABRIR LA VENTANA DE ACTUALIZAR
  updateRow(rowSelect: any) {
    var dialogConfig = new MatDialogConfig();
    dialogConfig.width = '1200px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      data: rowSelect
    };
/*     let dialogRef = this.dialog.open(DialogUpdateComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result.success === true) {
        this.appService.openSnackBar(result.message,'','ok')
        this.dataTableUpdate({ pageSize: 10, pageIndex: 0 });
      }
      if (result.success === false) {
        this.appService.openSnackBar(result.message,'','error')
      }
    }); */
  }

  //FUNCIÓN PARA ELIMINAR
  deleteRow(rowSelect: any) {
    let dialogMessage = this.dialog.open(MessageBoxComponent, {
      disableClose: true,
      autoFocus: true,
      data: {
        cancelarBtn: true,
        aceptarBtn: true,
        titulo: 'Mensaje',
        descripcion: 'Se eliminara el registro Seleccionado',
      },
    });
    dialogMessage.afterClosed().subscribe((result1) => {
      if (result1 === 'confirm') {
        this.appService.delete('settings', rowSelect.id)
        .subscribe((data: any) => {
          this.appService.openSnackBar('Se eliminó el registro correctamente','','warning')
          this.dataTableUpdate({ pageSize: 10, pageIndex: 0, sort: '' });
        });
      }
    });
  }

  // DESCARGAR EN EXCEL
  downloadCsv() {
    const dto = (this.formGroup).getRawValue();
    this.service.getCsv(dto)
    .subscribe((result: any) => {
      var newBlob = new Blob([result], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const data = window.URL.createObjectURL(newBlob);
      const link = document.createElement('a');
      link.href = data;
      link.download = "Reporte.xlsx";
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      setTimeout(function () {
          window.URL.revokeObjectURL(data);
      }, 100);
    }, (error: any) => {
      console.log(error);
    });
  }

  // DESCARGAR EN PDF
  downloadpdf() {
    const dto = (this.formGroup).getRawValue();
    this.service.getPdf(dto)
    .subscribe((result: any) =>  {
      var newBlob = new Blob([result], { type: "application/pdf" });
      const data = window.URL.createObjectURL(newBlob);
      var link = document.createElement('a');
      link.href = data;
      link.download = "Reporte.pdf";
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      setTimeout(function () {
        window.URL.revokeObjectURL(data);
      }, 100);
    }, (error: any) => {
      console.log(error);
    });
  }
  //#region END CRUD


}

