export class Skills {
    id?: number;
    titulo: string;
    descripcion: string;
    imagen: number;
    alt: string;
    porcentaje: number;
    datoseze_id: number;
    
    constructor(titulo: string, descripcion: string, imagen: number, alt: string, porcentaje: number, datoseze_id: number) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.alt = alt;
        this.porcentaje = porcentaje;
        this.datoseze_id = datoseze_id;
    }
}