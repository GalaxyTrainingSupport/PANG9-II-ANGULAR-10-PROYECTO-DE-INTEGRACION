import { Injectable } from '@angular/core';
import { GlxCryptoModule } from './crypto.module';
import { AES, enc } from 'crypto-js';

@Injectable({
  providedIn: GlxCryptoModule
})
export class GlxCrypto {
  private key = 'uMkFKx9nrJSq7dkYTYUVrIxu2OoV4Xkt';

  encrypt(toEncrypt: string): string {
    return AES.encrypt(toEncrypt, this.key).toString();
  }

  decrypt(toDecrypt: string): string {
    return toDecrypt ? AES.decrypt(toDecrypt, this.key).toString(enc.Utf8) : '';
  }

}
