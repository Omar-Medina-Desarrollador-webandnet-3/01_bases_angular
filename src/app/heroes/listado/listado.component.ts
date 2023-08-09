import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes: string[] = ['Superman', 'Ironman', 'Hulk', 'THOR', 'Spiderman','Capitan América'];
  heroeBorrado: string = '';

  borrarHeroe ():void {
    this.heroeBorrado = this.heroes.shift() || '';
    console.log('Borrando... ' + this.heroeBorrado);
  }
}
