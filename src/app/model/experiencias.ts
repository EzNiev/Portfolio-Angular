export class Experiencias {
    id?: number;
    logo: string;
    altimg: string;
    puesto: string;
    modalidad: string;
    empresa: string;
    inicio: string;
    fin: string;
    ubicacion: string;
    descripcion: string;
    datoseze_id: number;

    constructor(id: number, logo: string, altimg: string, puesto: string, modalidad: string, empresa: string, inicio: string, fin: string, ubicacion: string, descripcion: string, datoseze_id: number) {
        this.logo = logo;
        this.altimg = altimg;
        this.puesto = puesto;
        this.modalidad = modalidad;
        this.empresa = empresa;
        this.inicio = inicio;
        this.fin = fin;
        this.ubicacion = ubicacion;
        this.descripcion = descripcion;
        this.datoseze_id = datoseze_id;
    }
}
