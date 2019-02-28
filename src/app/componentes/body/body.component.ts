import { Component, OnInit, TemplateRef , ViewEncapsulation, Input} from '@angular/core';
import { Libro } from '../../modelos/libro';
import { _Libros } from '../../Datos/libros';
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LibrosComponent } from 'src/app/paginas/libros/libros.component';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
  //encapsulation: ViewEncapsulation.ShadowDom,
})
export class BodyComponent implements OnInit {
  public libros: Libro[] = _Libros;
  public indice: number = 0;
  public faMoneyBillAlt: any = faMoneyBillAlt;

  @Input() libro:Libro;

  modalRef: BsModalRef;

  public estilo: any = {
    'background-color': 'red'
  }

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }


  evaluarBorder(): string {
    switch (this.indice) {
      case 0:
        return 'border-red';

      case 1:
        return 'border-orange';

      case 2:
        return 'border-blue';
    }
  }

  Siguiente(): void {
    if (this.libros.length - 1 > this.indice) {
      this.indice++;
    } else if (this.libros.length - 1 == this.indice) {
      this.indice = 0;
    }

    switch (this.indice) {
      case 0:
        this.estilo['background-color'] = 'yellow';
        break;
      case 1:
        this.estilo['background-color'] = 'blue';
        break;
      case 2:
        this.estilo['background-color'] = 'green';
        break;


    }

  }

  indiceMasIno(): number {
    return this.indice + 1;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
