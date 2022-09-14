import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { AuthenticacionDataInterface } from '../../shared/interfaces/authentication-interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  public form: FormGroup;
  public detectChangesSubcription!: Subscription;
  public regNumber = /^[0-9a-zA-Z]*$/;

  constructor(
    public fb: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    private authenticationService: AuthenticationService
  ) {
    this.form = fb.group({
      documentNumber: [null, [Validators.required, Validators.maxLength(11)]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      remenberUser: [false],
    });
  }

  ngOnInit() {}

  detectChangeForm() {
    this.detectChangesSubcription = this.form.valueChanges.subscribe(() =>
      this.changeDetectorRef.detectChanges()
    );
  }

  errorControl() {
    return this.form.controls;
  }

  submitForm() {
    if (this.form.valid) {
      const payload: AuthenticacionDataInterface = {
        documentNumber: this.form.value.documentNumber,
        password: this.form.value.password,
      };

      this.authenticationService.postLogin(payload).subscribe({
        next: (response) => {
          console.log(response);
        },
      });
    }
  }

  ngOnDestroy(): void {
    this.detectChangesSubcription.unsubscribe();
  }
}
