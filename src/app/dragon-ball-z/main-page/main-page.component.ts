import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: 'Gokú',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    }
  ];

  agregarNuevo ( personaje: Personaje ) {
    this.personajes.push( personaje );
  }
  
}






// personaje: Personaje = { 
//   nombre: 'Maestro Roshi',
//   poder: 53700
// };
// cambiarNombre (event: any) {
  //   console.log(event.target.value);
// }
// trim() - punto trim() para borrar los espacios en blanco.
// push() - punto push() para subir o insertar valores.

