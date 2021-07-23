import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes: string[]= ['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  index: number = 1;

  heroeBorrado: string = '';

  borrarHeroe(){
    //this.heroes.splice( this.index, 1);//borro desde la pos 1 del arreglo
    this.heroeBorrado = this.heroes.shift() || '';
    
     

  }

}
