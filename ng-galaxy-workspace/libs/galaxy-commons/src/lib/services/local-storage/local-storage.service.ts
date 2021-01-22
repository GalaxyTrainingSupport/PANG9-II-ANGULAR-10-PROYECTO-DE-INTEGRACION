import { Injectable } from '@angular/core';
import { GlxLocalStorageModule } from './local-storage.module';
import { GlxCrypto } from '../crypto/crypto.service';

@Injectable({
  providedIn: GlxLocalStorageModule
})
export class GlxLocalStorage {

  constructor(private crypto: GlxCrypto) { }

  setItem(key: string, value: string) {
    const encryptedValue = this.crypto.encrypt(value);
    localStorage.setItem(key, encryptedValue);
  }

  getItem(key: string) {
    const encryptedValue = localStorage.getItem(key);
    return this.crypto.decrypt(encryptedValue);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

}
