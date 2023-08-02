import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title:string = 'Contador App';

  count: number = 10;
  base: number = 5;  

  acumular(valor:number) {
    this.count += valor;
  }
}


