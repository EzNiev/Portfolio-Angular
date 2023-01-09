export class Proyects {
    id?: number;
    titulo: string;
    descripcion: string;
    link: string;
    site: string;
    imagen: string;
    alt: string;
    datoseze_id: number;

    constructor(titulo: string, descripcion: string, link: string, site: string, imagen: string, alt: string, datoseze_id: number) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.link = link;
        this.site = site;
        this.imagen = imagen;
        this.alt = alt;
        this.datoseze_id = datoseze_id;
    }
}
