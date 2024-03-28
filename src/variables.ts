import { generarId } from "./funciones"

let editando = {
    value: false
}

// Objeto de Cita
const citaObj: Cita = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

export {
    editando,
    citaObj
}