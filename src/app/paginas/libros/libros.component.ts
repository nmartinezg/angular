import { Component, OnInit } from '@angular/core';
import { Libro } from '../../modelos/libro';
import { _Libros } from '../../Datos/libros';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {

  public libros: Libro[] =_Libros;
  public librosAux: Libro[] ;
  public categoria: string='Poemas';


  constructor() { }

  ngOnInit() {
    console.log("ngOnInit");
  }

  destruirTarjetas(){
    this.librosAux=this.libros;
    this.libros=[];
  }

  recuperarTarjetas(){
    this.libros=this.librosAux;
  }

}
