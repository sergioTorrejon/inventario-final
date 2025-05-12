import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageBoxComponent } from 'src/app/components/message-box/message-box.component';
import { AuthorizationService } from '../../authentication/services/authorization.service';
import { DialogDocumentComponent } from './dialog-document/dialog-document.component';
import { DialogInsertComponent } from './dialog-insert/dialog-insert.component';
import { DialogUpdateComponent } from './dialog-update/dialog-update.component';
import { ProductosService } from './productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {

  // Variables del Formulario
  formGroup: UntypedFormGroup;
  
  formControl:any=
  {
    tipoProducto:[''],
    marca:[''],
    medida:[''],
    modelo:[''],
    unidad:[''],
    descripcion:[''],
  };

  //sort
  sort: string = '';
  order: string = '';

  //table
  data: any ;
  count = 0;
  dataOptions: any = [];
  page = {
    length: 10,
    size: 10,
    index: 0,
  };


  headersTable: any =
  [
    //FORMULARIO
    {name:'tipo_producto', label:'Tipo de Producto',  width:15},
    {name:'marca', label:'Marca',  width:15},
    {name:'medida', label:'Medida',  width:15},
    {name:'modelo', label:'Modelo',  width:15},
    {name:'unidad', label:'Unidad Medida', width:15},
    {name:'descripcion', label:'Descripción', width:15},
  ];

  estado: any =
  [
    //FORMULARIO
    {value:'CREADO', label:'CREADO'},
    {value:'PENDIENTE', label:'PENDIENTE'},
    {value:'APROBADO', label:'APROBADO'},
  ];

  constructor(
    private formBuilder: UntypedFormBuilder,
    private dialog: MatDialog,
    public rest: ProductosService,
    public authorizationService: AuthorizationService,
    private _snackBar: MatSnackBar
    ) {
      this.formGroup =this.formBuilder.group([]);
    }

    ngOnInit() {
      this.rest.getOptions().
      subscribe((data:any) => {
        this.dataOptions = data.data;
      });
      this.setForm();
      this.getParams();
    }

    setForm(){
      this.formGroup =this.formBuilder.group(this.formControl);
      this.formOnchange();
      this.dataTableUpdate(this.page);
    }

    getParams(){
      this.rest.getOptions().subscribe((data:any) => {
        this.dataOptions = data.data;
      });
    }

    formOnchange(){
      this.formGroup.valueChanges.subscribe(async data => {
        this.dataTableUpdate(this.page);
      })
    }

    sortData(event:any){
      this.sort = event.active;
      this.order = event.direction;
      if (this.order == ""){
        this.sort = 'id';
      }
      this.dataTableUpdate(this.page);
    }

    dataTableUpdate(event: any){
      this.page.size = event.pageSize !== undefined? event.pageSize: 10;
      this.page.index = event.pageIndex !== undefined? event.pageIndex: 0;
      const dto = (this.formGroup).getRawValue();
      this.rest.getAll(dto,this.page.index+1, this.page.size,this.sort, this.order)
      .subscribe((data:any) => {
        this.data = data.data;
        this.count = data.count;
      });
    }

    openSnackBar(message: string, action: string, type:string) {
      this._snackBar.open(message, action, {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
        panelClass: [type]
      })
    }

  insertRow()
  {
    var dialogConfig = new MatDialogConfig();
    dialogConfig.width = '1200px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
    };
    let dialogRef = this.dialog.open(DialogInsertComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result:any) => {
      if (result.status === 'success') {
        this.openSnackBar(result.message,'','ok')
        this.dataTableUpdate({ pageSize: 10, pageIndex: 0 });
      }
      if (result.status === 'error') {
        this.openSnackBar(result.message,'','error')
      }

    });
  }

  updateRow(rowSelect: any) {
    var dialogConfig = new MatDialogConfig();
    dialogConfig.width = '1200px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      data: rowSelect
      };
    let dialogRef = this.dialog.open(DialogUpdateComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        this.openSnackBar('Se ACTUALIZO el registro correctamente','','ok')
        this.dataTableUpdate({ pageSize: 10, pageIndex: 0 });
      }
    });
  }

  documentRow(rowSelect: any) {
    var dialogConfig = new MatDialogConfig();
    dialogConfig.width = '1200px';
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      data: rowSelect
      };
    let dialogRef = this.dialog.open(DialogDocumentComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        this.openSnackBar('Se ACTUALIZO el registro correctamente','','ok')
        this.dataTableUpdate({ pageSize: 10, pageIndex: 0 });
      }
    });
  }

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
        this.rest.delete(this.formGroup.controls.model.value, rowSelect.id)
          .subscribe((data: any) => {
            this.openSnackBar('Se eliminó el registro correctamente','','warning')
            this.dataTableUpdate({ pageSize: 10, pageIndex: 0, sort: '' });
          });
      }
    });
  }

  openPdf(row:any){
    this.rest.getFile(this.formGroup.controls.model.value, row.id ).subscribe(
      (res:any) => {
        const fileURL = URL.createObjectURL(res);
        window.open(fileURL, '_blank');
      });
  }

  downloadxlsx() {
    const dto = (this.formGroup).getRawValue();
    this.rest.getCsv(dto,this.page.index+1, this.page.size,this.sort, this.order)
    .subscribe((result: any) => {
        const newBlob = new Blob([result], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const data = window.URL.createObjectURL(newBlob);
        const link = document.createElement('a');
        link.style.display = 'none';
        link.href = data;
        link.target = '_blank';
        link.download = 'Reporte'+this.formGroup.controls.model.value+ ''+'.xlsx';
        link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
        setTimeout(function () {
            window.URL.revokeObjectURL(data);
        }, 100);
    }, (error: any) => {
        console.log(error);
    });
  }

  downloadpdf() {
      const dto = (this.formGroup).getRawValue();
      this.rest.getPdf(dto,this.page.index+1, this.page.size,this.sort, this.order)
    .subscribe((res: any) => {
      var newBlob = new Blob([res], { type: "application/pdf" });
      const data = window.URL.createObjectURL(newBlob);
      var link = document.createElement('a');
      link.href = data;
      link.download = "ReporteCartas Resoluciones.pdf";
      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
      setTimeout(function () {
          window.URL.revokeObjectURL(data);
      }, 100);
    }, (error: any) => {
        console.log(error);
    });
  }

}

