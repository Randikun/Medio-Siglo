export function getFotos(payload){
    return{
        type: "GET_FOTOS",
        payload
    }
}

export function getFotoDetail(payload){
    return{
        type: "GET_FOTO_DETAIL",
        payload
    }
}

export function addComentario(payload){
    return{
        type: "ADD_COMENTARIO",
        payload
    }
}

export function getComentarios(payload){
    return{
        type: "GET_COMENTARIOS",
        payload
    }
}


export function getMensajes(payload){
    return{
        type: "GET_MENSAJES",
        payload
    }
}


export function addMensaje(payload){
    return{
        type: "ADD_MENSAJE",
        payload
    }
}

export function asistira(payload){
    return{
        type: "ASISTIRA",
        payload
    }
}

export function noAsistira(payload){
    return{
        type: "NO_ASISTIRA",
        payload
    }
}