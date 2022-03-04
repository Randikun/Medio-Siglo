import axios from "axios";

export default function addMensaje(body) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `/mensajes`,
        body
      );
      return dispatch({ type: "ADD_MENSAJE", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
}
