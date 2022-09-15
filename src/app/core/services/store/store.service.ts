import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private store: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this.store = storage;
  }

  public set(key: string, value: any) {
    this.store?.set(key, value);
  }

  public async get(key: string) {
    return await this.store?.get(key);
  }

  public async clear() {
    await this.storage.clear();
  }
}
