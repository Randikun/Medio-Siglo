import axios from "axios";

export default function bulkFotos(body) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `http://localhost:3001/fotos/bulk`,
        body
      );
      return dispatch({ type: "BULK_FOTOS", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
}
