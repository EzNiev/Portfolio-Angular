export class Datoseze {
    id?: number;
    nombre: string;
    posicion: string;
    edad: number;
    instagram: string;
    linkedin: string;
    github: string;
    fotoperfil: string;
    aboutme: string;
    rutacv: string;
    usuario_id: number;
    
    constructor(nombre: string, posicion: string, edad: number, instagram: string, linkedin: string, github: string, fotoperfil: string, aboutme: string, rutacv: string, usuario_id: number) {
        this.nombre = nombre;
        this.posicion = posicion;
        this.edad = edad;
        this.instagram = instagram;
        this.linkedin = linkedin;
        this.github = github;
        this.fotoperfil = fotoperfil;
        this.aboutme = aboutme;
        this.rutacv = rutacv;
        this.usuario_id = usuario_id;
    }
}