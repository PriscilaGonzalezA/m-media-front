import {API} from "@/utils/api";


export async function getNotesRequest() {
    try {
        return await API("/note", 'get', null, null);
    } catch (e) {
        if (e.response) {
            return { error: e.response.data.message };
        } else if (e.request) {
            return { error: 'No se pudo conectar al servidor' };
        } else {
            return { error: 'Error al procesar la solicitud' };
        }
    }
}

export async function getNoteRequest(id) {
    try {
        return await API(`/note/${id}`,'get', null, null);
    } catch (e) {
        if (e.response) {
            return { error: e.response.data.message };
        } else if (e.request) {
            return { error: 'No se pudo conectar al servidor' };
        } else {
            return { error: 'Error al procesar la solicitud' };
        }
    }
}