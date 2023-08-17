import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  
  constructor ( private dbzService: DbzService ) {}
}








// personajes: Personaje[] = [];

// agregarNuevo ( personaje: Personaje ) {
//   this.personajes.push( personaje );
// }

// get personajes() : Personaje[] {
  //   return this.dbzService.personajes
  // }
  
  // constructor ( private dbzService: DbzService ) {
//   this.personajes = this.dbzService.personajes;
//   // inyección de dependencia
// }

// personaje: Personaje = { 
//   nombre: 'Maestro Roshi',
//   poder: 53700
// };
// cambiarNombre (event: any) {
  //   console.log(event.target.value);
// }
// trim() - punto trim() para borrar los espacios en blanco.
// push() - punto push() para subir o insertar valores.

