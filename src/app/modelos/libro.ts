export interface Libro {
    id:number;
    descripcion:string;
    titulo:string;
    autor_id:number;
    numero_paginas:number;
    sinopsis:string;
    categoria_id:number;
    gratuito:boolean;
    tipo:string;
    fecha_publicacion:Date;
}
