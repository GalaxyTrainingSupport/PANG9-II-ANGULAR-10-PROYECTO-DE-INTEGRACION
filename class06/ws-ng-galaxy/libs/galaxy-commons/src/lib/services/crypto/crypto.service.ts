import { Injectable } from '@angular/core';
import { GlxCryptoModule } from './crypto.module';
import { AES, enc } from 'crypto-js';

@Injectable({
  providedIn: GlxCryptoModule
})
export class GlxCryptoService {

  key = 'xne3WjcxBATlnGtcKPliYatnLcKGpAyK';

  constructor() { }

  encrypt(toEncrypt: string): string {
    return AES.encrypt(toEncrypt, this.key);
  }

  decrypt(toDecrypt: string): string {
    return toDecrypt ? AES.decrypt(toDecrypt, this.key).toString(enc.Utf8) : '';
  }

}
