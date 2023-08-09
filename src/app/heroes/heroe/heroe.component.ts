import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
    styleUrls: ['heroe.component.css']
})

export class HeroeComponent {
    title: string = 'SUPERMAN Y SUS PELICULAS';
    nombre: string = 'SUPER MAN';
    apellido: string = 'PARKERT';
    edad: number = 35;
    peliculas = Peliculas;

    get peliculaCapitalizada():string {
        return this.peliculas.segunda.toUpperCase();
    }

    //Función dentro de clase
    obtenerNombre():string {
        this.peliculaCapitalizada;
        return `${this.nombre} - ${this.edad}`;
        // return this.nombre + ' - ' + this.edad; vasicamente lo mismo
        // return this.nombre + ' - ' + this.edad.toString(); vasicamente lo mismo
    }

    cambiarNombre():void {
        this.nombre = 'Spiderman'.toUpperCase();
    }

    cambiarEdad():void{
        this.edad = 67;
    }
}

const Peliculas: Pelicula = {
    primera: 'El Hombre de Acero',
    segunda: 'La liga de la Justicia',
    tercera: 'Superman Regresa',
    cuarta:  'The Death of Superman'
}

interface Pelicula {
    primera: string;
    segunda: string;
    tercera: string;
    cuarta:  string;
}

