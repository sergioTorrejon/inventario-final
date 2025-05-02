import {
  Component,
  OnInit,
} from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { first } from 'rxjs/operators';

import { AuthenticationService } from '../services/authentication.service';

/**
 * La clase LoginComponent
 *
 * @author J. Alvaro Mamani <jmamani@aps.gob.bo>
*/
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form!: UntypedFormGroup;
  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private authenticationService: AuthenticationService
    ) {
    }

  ngOnInit() {
    this.form = this.fb.group({
      uname: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    });
  }

  onSubmit() {
    //this.router.navigate(['/dashboard']);
    this.authenticationService.login(this.form.controls['uname'].value, this.form.controls['password'].value)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate(['/consultas']);
          },
        )
  }

  changeUser(usuario:string){
    console.log('Aqui en change user: ',usuario);
    this.form.controls['uname'].setValue(usuario);
    this.form.controls['password'].setValue('clave123');
  }
}
