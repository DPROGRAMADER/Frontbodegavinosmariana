import { Component } from '@angular/core';
import { Mercancia } from '../interfaces/mercancia';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public mercancias:Mercancia[]=[]

  public mercancias1:Mercancia={
    iup:1,
    nombre:"David Garcia",
    descripcion:"Vino rojo",
    fecha:"25/09/2003",
    motivo:"Cosecha",
    volumen:"30",
    almacenamiento:{
      iup:1,
      zona:"a",
      unidadescubicas:"234324"
    }
    
  }
   public mercancias2:Mercancia={
    iup:1,
    nombre:"Mariana Zapata",
    descripcion:"Vino tinto",
    fecha:"22/08/1990",
    motivo:"Recoleccion",
    volumen:"20",
    almacenamiento:{
      iup:1,
      zona:"c",
      unidadescubicas:"234324"
    }

}
public mercancias3:Mercancia={
  iup:1,
  nombre:"Estefany lopez",
  descripcion:"Vino espumoso",
  fecha:"31/08/2020",
  motivo:"Nueva cosecha",
  volumen:"30",
  almacenamiento:{
    iup:1,
    zona:"B",
    unidadescubicas:"2343ewe24"
  }}
public constructor(){
  this.mercancias.push(this.mercancias1)
    this.mercancias.push(this.mercancias2)
    this.mercancias.push(this.mercancias3)
    console.log(this.mercancias)
}
}
