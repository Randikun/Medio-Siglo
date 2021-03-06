import axios from "axios";

export default function asistira(body) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        `/asistencias`,
        body
      );
   
      return dispatch({ type: "ASISTIRA", payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };
}
