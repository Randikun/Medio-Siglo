import axios from "axios";

export default function addMensaje(body) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `http://localhost:3001/mensajes`,
        body
      );
      return dispatch({ type: "ADD_MENSAJE", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
}
