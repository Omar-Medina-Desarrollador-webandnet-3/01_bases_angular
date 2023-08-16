import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  @Input() personaje: Personaje = { 
    nombre: '',
    poder: 0 
  };
  
  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  
  agregar() {
    if (this.personaje.nombre.trim().length === 0) {return;}
    if (this.personaje.poder === null || '') {this.personaje.poder = 0;}
    
    console.log(this.personaje);
    
    this.onNuevoPersonaje.emit(this.personaje);
    
    this.personaje = {
      nombre: '', 
      poder: 0
    }
  }
}







// @Input('data') personajes: Personaje[] = [];
// console.log(this.personajes);
// this.personajes.push(this.personaje)

