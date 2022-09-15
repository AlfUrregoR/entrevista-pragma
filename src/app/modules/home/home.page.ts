import { Component, OnInit } from '@angular/core';
import { StorageService } from '@core/services/store/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private storeService: StorageService) {}

  ngOnInit() {}
}
