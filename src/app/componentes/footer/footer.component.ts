import { Component, OnInit ,Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() paginas: number;


  public fue_Emitidido: boolean=false;

  @Output() OnSeleccionar: EventEmitter<boolean>= new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  public seleccionar(){
    this.fue_Emitidido= !this.fue_Emitidido;
    this.OnSeleccionar.emit(this.fue_Emitidido);

  }

}
