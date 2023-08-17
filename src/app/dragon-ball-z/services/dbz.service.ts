import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
            nombre: 'Gokú',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 8500
        }
    ];
    
    get personajes(): Personaje[] { //Solo si quiero ser especifico
        return [...this._personajes] //Buena Practica -> Uso de operador spred -> Rompe referencias de Personajes al momento de manipular este get - e indica que es un arreglo.
    }
    
    constructor() {}

    agregarPersonaje( personaje: Personaje) {
        this._personajes.push( personaje );
    }

}