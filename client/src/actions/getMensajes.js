import axios from "axios";

export default function getMensajes() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/mensajes`);
      return dispatch({ type: "GET_MENSAJES", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
}
