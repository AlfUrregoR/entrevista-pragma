import { Component, OnInit } from '@angular/core';
import { UserIdleService } from 'angular-user-idle';
import { take } from 'rxjs';
import { AuthenticationService } from './core/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private userIdle: UserIdleService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.initIdle();
  }

  initIdle() {
    this.userIdle.startWatching();

    this.userIdle.onTimerStart().subscribe();

    this.userIdle
      .onTimeout()
      .pipe(take(1))
      .subscribe(() => {
        this.authenticationService.logout();
      });
  }
}
