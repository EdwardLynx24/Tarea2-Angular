import { Component, OnInit, Input } from '@angular/core';
import {Videojuegos} from '../../Interfaces/videojuegos'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public ver:boolean
  public cambio:boolean

  @Input() dataVideojuegos:Videojuegos
  constructor() { }

  ngOnInit(): void {
    this.ver = false
  }

  mostrar(): void{
    if(this.ver){
      this.ver = false

    }else{
      this.ver = true
    } 
  }
  ocultar(): void{
    if(this.cambio){
      this.cambio = false

    }else{
      this.cambio = true
    } 
  }

}
