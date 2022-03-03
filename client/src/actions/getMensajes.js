import axios from "axios";

export default function getMensajes() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/mensajes`);
      return dispatch({ type: "GET_MENSAJES", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
}
