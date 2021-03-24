import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'mi-componente',
    template: `
        <h1>{{titulo}}</h1> <br>
        <p>{{comentario}}</p><br>
        <p>{{year}}</p>
    `
})

// tslint:disable-next-line: component-class-suffix
export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;

    constructor(){

        this.titulo = 'Hola, soy un titulo';
        this.comentario = 'Hola, soy un comentario';
        this.year = 2021;

        console.log('Componente cargado');
        console.log(this.titulo, this.comentario, this.year);
    }

}
