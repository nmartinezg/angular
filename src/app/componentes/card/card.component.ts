import { Component, OnInit,Input ,EventEmitter,Output, AfterViewInit,OnDestroy, OnChanges,
  SimpleChanges} from '@angular/core';
import { Libro } from 'src/app/modelos/libro';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit,AfterViewInit,OnDestroy,OnChanges {

  @Input('book') libro: Libro;
  
  public FueSeleccionado: boolean=false;
  @Input() categoria: string;
  @Output() cambioCategoria: EventEmitter<string>= new EventEmitter<string>();


  constructor() { 
    console.log(this.categoria);
  }

  ngOnInit() {
    console.log(this.categoria);
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit");
  }

  ngOnDestroy(){
    console.log("ngOnDestroy");
  }


  public seleccionado(event){
    console.log(event); 

    this.FueSeleccionado=  event;
    this.cambioCategoria.emit("Cuentos")



    /*if (this.FueSeleccionado==false){
      this.FueSeleccionado= event; 
      return;
    }

    if (this.FueSeleccionado==true){
      this.FueSeleccionado= false; 
      return;
    }*/
    
    
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if(propName='categoria'){
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      //this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      console.log("prev", prev);
      console.log("cur", cur);
    } 
    }
  }
}
