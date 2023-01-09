export class Usuarios {
    id?: number;
    nombre: string;
    apellido: string;
    mail: string;
    contraseña: number;

    constructor(nombre: string, apellido: string, mail: string, contraseña: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.mail = mail;
        this.contraseña = contraseña;
    }
}
