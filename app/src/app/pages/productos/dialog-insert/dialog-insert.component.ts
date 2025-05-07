import { AfterViewInit, Component, ElementRef, Inject, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { Words } from 'src/app/models/words';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductosService } from '../productos.service';
export class User {
  constructor(public name: string) { }
}


@Component({
  selector: 'app-dialog-insert',
  templateUrl: './dialog-insert.component.html',
  styleUrls: ['./dialog-insert.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'es-BO'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class DialogInsertComponent implements OnInit  {
 //prueba

 filterNotificados = new UntypedFormControl('');

  //Palabras Internacionalizadas
  _words = Words;
  //Formularios
  formGroup: UntypedFormGroup;

  dataRow: any = [];
  dataNotificaciones: any = [];

  dataOptions: any = [] ;
  file:any;

  disabledNotificaciones = false;
  disabled = false;

  inputNotificados:string=''

  nameFileValidation:any={numero:'',fecha:'',tipo:'', val:'', status:''};

  dataAutoComplete: any =[] ;

  formControl:any=
  {
    'tipoProducto':  ['PS', [Validators.required]],
    'marca':  ['', [Validators.required]],
    'medida':  [null, [Validators.required]],
    'modelo':  ['', [Validators.required]],
    'unidad': [null, [Validators.required ]],
    'descripcion': ['', [ Validators.minLength(2), Validators.maxLength(2000)]],
  };

  constructor
  (
    private formBuilder: UntypedFormBuilder,
    private dialogRef: MatDialogRef<DialogInsertComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public rest: ProductosService,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar
  )
  {
    this.formGroup =this.formBuilder.group(this.formControl);
  }


  ngOnInit( )
  {
    this.rest.getOptions().
    subscribe((data:any) => {
      this.dataOptions = data.data;
    });
  }

  openSnackBar(message: string, action: string, type:string) {
    this._snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: [type]
    })
  }

  onSubmit(post:any) {
    this.rest.create('productos', post).
    subscribe((data:any) => {
      if (data.status === 'error') {
        this.openSnackBar(data.message,'','error')
      }
      else{
        this.close(data);
      }
    });
  }

  close(data:any) {
    this.dialogRef.close(data);
  }
}
