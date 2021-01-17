import { Component, OnInit } from '@angular/core';
import { Videojuegos } from '../../Interfaces/videojuegos';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  public ver:boolean

  public videojuegos:Array<Videojuegos> = []

  constructor() { }

  deploy(): void{
    if(this.ver){
      this.ver = false

    }else{
      this.ver = true
    } 
  }
  ngOnInit(): void {
    this.videojuegos = [{
      'name':'Smite',
      'category':'MOBA',
      'nvESRB':'+18',
      'releaseYear':'2014',
      'platform':'PC, XBOX ONE, PS4, NSwitch',
      'resource': '../../../assets/Nueva carpeta/smite.jpg'

    },
    {
      'name':'Hitman',
      'category':'Action',
      'nvESRB':'+18',
      'releaseYear':'2015',
      'platform':'PC, XBOX ONE, PS4, NSwitch',
      'resource':'../../../assets/Nueva carpeta/hitman.jpg'
    },
    {
      'name':'The Evil Within',
      'category':'Survival Horror',
      'nvESRB':'+18',
      'releaseYear':'2014',
      'platform':'PC, XBOX ONE, PS4, NSwitch',
      'resource':'../../../assets/Nueva carpeta/tew.jpg'

    },
    {
      'name':'Outlast',
      'category':'Survival Horror',
      'nvESRB':'+18',
      'releaseYear':'2013',
      'platform':'PC, XBOX ONE, PS4, NSwitch',
      'resource':'../../../assets/Nueva carpeta/outlast.jpg'

    }]
  }

}
