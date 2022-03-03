import axios from "axios";

export default  function getFotoDetail(id){
    return async function(dispatch){
      try{
          console.log("ENTRA ACCION")
      const response = await axios(`http://localhost:3001/fotos/${id}`)
     console.log("RESPUESTA DEL BACK", response.data)
      return dispatch({ type: 'GET_FOTO_DETAIL', payload: response.data })
      }catch(e){console.log(e)}
    }

}  