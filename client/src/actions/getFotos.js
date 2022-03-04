import axios from "axios";

export default function getFotos() {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/fotos`);
      return dispatch({ type: "GET_FOTOS", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
}
