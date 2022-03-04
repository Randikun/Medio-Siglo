import axios from "axios";

export default function asistira(body) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `/asistencias/falluta`,
        body
      );
      return dispatch({ type: "NO_ASISTIRA", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
}
