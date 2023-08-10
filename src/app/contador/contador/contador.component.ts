import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <form action="post">
            <div>
                <h1>{{title}}</h1> <br><br>
                <h3>La base del número es: <strong>{{base}}</strong></h3> <br>
            </div>
            <div>
                <button type="button" (click)="acumular(base)"> + {{base}}</button>
                <span> {{numero}} </span>
                <button type="button" (click)="acumular(-base)"> - {{base}}</button>
            </div>
        </form>
    `
})

export class ContadorComponent {
    title : string = 'Contador App';
    numero: number = 30;
    base  : number = 5;  

    acumular(valor:number) {
        this.numero += valor;
    }
    // constructor() {
    // }
}


