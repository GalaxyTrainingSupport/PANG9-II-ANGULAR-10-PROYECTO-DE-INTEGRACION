import { FormControl } from '@angular/forms';

export class GlxValidators {
  /*
    // Validacion sin parametros
    const extension = (control: FormControl) => {
      // si es valido -> return null
      // si no es valido -> return { extension: '' }
    };
  */

  // Validacion con parametros
  static extension(validExtensions: string[]) {
    return (control: FormControl) => {
      const file = control.value;
      const fileName = file?.name || '';
      const fileExtension = fileName.split('.')[1];

      const message = `Por favor seleccionar un archivo con las siguientes extensiones ${validExtensions.join(', ')}`;

      return validExtensions.includes(fileExtension) ? null : { extension: message};
    };
  }
}
