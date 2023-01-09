export class Estudios {
    id?: number;
    institucion: string;
    titulo: string;
    inicio: string;
    fin: string;
    descripcion: string;
    imagen: string;
    alt: string;
    datoseze_id: number;

    constructor(institucion: string, titulo: string, inicio: string, fin: string, descripcion: string, imagen: string, alt: string, datoseze_id: number) {
        this.institucion = institucion;
        this.titulo = titulo;
        this.inicio = inicio;
        this.fin = fin;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.alt = alt;
        this.datoseze_id = datoseze_id;
    }
}