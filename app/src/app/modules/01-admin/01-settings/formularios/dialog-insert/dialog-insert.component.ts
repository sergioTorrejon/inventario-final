import {
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';

import {
  MessageBoxComponent,
} from 'src/app/components/message-box/message-box.component';
import { CrudService } from 'src/app/services/crud/crud.service';

import { SettingsService } from '../../settings.service';

@Component({
  selector: 'app-dialog-insert',
  templateUrl: './dialog-insert.component.html',
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
  //Formularios
  formGroup: UntypedFormGroup;
  
/*   dataOptions: any = [] ;

  dataSelect: any=[];
 */
  formControl:any=
  {
    'codigo':  ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'valor': ['', [Validators.required]],
  };


  constructor
  (
    private dialog: MatDialog,
    private formBuilder: UntypedFormBuilder,
    private dialogRef: MatDialogRef<DialogInsertComponent>,
    //@Inject(MAT_DIALOG_DATA) public data: any,
    public service: SettingsService,
    public appService: CrudService,
  )
  {
    this.formGroup =this.formBuilder.group(this.formControl);
    //this.dataOptions = this.data.model.dataOptions;
  }

  ngOnInit( )
  {

  }

  onSubmit(post:any) {
    let dialogMessage = this.dialog.open(MessageBoxComponent, {
      height: '200px',
      width: '600px',
      disableClose: true,
      autoFocus: true,
      data: {
        cancelarBtn: true,
        aceptarBtn: true,
        titulo: 'Mensaje',
        descripcion: 'Se realizará el registro',
      },
    });
    dialogMessage.afterClosed().subscribe((result1) => {
      if (result1 === 'confirm') {
        this.appService.create(this.service.name, post).
        subscribe((result:any) => {
          if (result.success === true) {
            this.appService.openSnackBar(result.message,'','ok')
            this.dialogRef.close(result);
          }
          if (result.success === false) {
            this.appService.openSnackBar(result.message,'','error')
          }
        });
      }
    });

  }

  close(data:any) {
    this.dialogRef.close(data);
  }
}
