import { Injectable } from '@angular/core';
import { GlxCryptoService } from '../crypto/crypto.service';
import { GlxStorageModule } from './storage.module';

@Injectable({
  providedIn: GlxStorageModule
})
export class GlxStorageService {

  private keyToken = 'signInToken';

  constructor(private cryptoService: GlxCryptoService) { }

  setToken(token: string): void {
    const encrypt = this.cryptoService.encrypt(token);
    localStorage.setItem(this.keyToken, encrypt);
    // localStorage.setItem(this.keyToken, token);
  }

  getToken(): string {
    const encrypt = localStorage.getItem(this.keyToken);
    return this.cryptoService.decrypt(encrypt);
    // return localStorage.getItem(this.keyToken);
  }


}
