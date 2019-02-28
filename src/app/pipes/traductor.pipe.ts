import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'traductor'
})
export class TraductorPipe implements PipeTransform {

  transform(value: string, trad?: string): string {
    switch (trad.toLowerCase()) {
      case 'usd':
        return 'Title';
        break;
      case 'spa':
        return 'Titulo'
        break;
    }
  }

}
