const initialState = {
  asistencias: [],
  fallutas: [],
  mensajes: [],
  fotos: [],
  fotoDetail:[],
  comentarios: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "BULK_FOTOS":
      return {
        ...state,
      };
    case "GET_FOTOS":
      return {
        ...state,
        fotos: action.payload,
      };

    case "GET_FOTO_DETAIL":
      return {
        ...state,
        fotoDetail: action.payload,
      };
    case "ADD_COMENTARIO":
      return {
        ...state,
        comentarios: [...state.comentarios, action.payload]
      };
    case "GET_COMENTARIOS":
      return {
        ...state,
        comentarios: action.payload,
      };
    case "GET_MENSAJES":
      return {
        ...state,
        mensajes: action.payload,
      };

    case "ADD_MENSAJE":
      return {
        ...state,
        mensajes: [...state.mensajes, action.payload]
      };

    case "ASISTIRA":
      return {
        ...state,
        asistencias: [action.payload, ...state.asistencias],
      };
    case "NO_ASISTIRA":
      return {
        ...state,
        fallutas: [action.payload, ...state.fallutas],
      };

    default:
      return state;
  }
}
