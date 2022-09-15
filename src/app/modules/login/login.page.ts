import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '@core/authentication/authentication.service';
import { authenticationUser } from '@core/store/actions/authentication/athentication.actions';
import { selectAuthentication } from '@core/store/selector/authentication.selector';
import { Store } from '@ngrx/store';
import { AuthenticacionDataInterface } from '@shared/interfaces/authentication-interface';
import { UserInfoInterface } from '@shared/interfaces/user-interface';
import { Observable, Subscription } from 'rxjs';
import { NavController } from '@ionic/angular';
import { StorageService } from '@core/services/store/store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  public form: FormGroup;
  public detectChangesSubcription!: Subscription;
  public regNumber = /^[0-9a-zA-Z]*$/;
  private store$: Observable<UserInfoInterface> = new Observable();
  private storeSubscription: Subscription;

  constructor(
    public fb: FormBuilder,
    private changeDetectorRef: ChangeDetectorRef,
    private authenticationService: AuthenticationService,
    private store: Store,
    private nav: NavController,
    private storageService: StorageService
  ) {
    this.form = fb.group({
      documentNumber: [null, [Validators.required, Validators.maxLength(11)]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      remenberUser: [false],
    });
  }

  ngOnInit() {
    this.validToken();

    this.store$ = this.store.select(selectAuthentication);

    this.storeSubscription = this.store$.subscribe((res: any) => {
      const token = res.authenticationReducer.token;

      this.goToHome(token);
    });
  }

  async validToken() {
    const token = await this.storageService.get('token');

    this.goToHome(token);
  }

  goToHome(token: string) {
    if (token) {
      this.nav.navigateRoot(['/home']);
    }
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

      this.store.dispatch(authenticationUser(payload));
    }
  }

  ngOnDestroy(): void {
    this.storeSubscription.unsubscribe();
  }
}
