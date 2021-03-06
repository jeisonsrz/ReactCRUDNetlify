import { MOSTRAR_PRODUCTOS, GUARDAR_PRODUCTO, ELIMINAR_PRODUCTO } from "./types";

//axios
import axios from "axios";

//

export const mostrarProductos = id => async dispatch => {
  const respuesta = await axios.get("http://localhost:5000/usuarios");
  //https://my-json-server.typicode.com/jeisonsrz/ReactNetlify/productos
  console.log(respuesta);

  dispatch({
    type: MOSTRAR_PRODUCTOS,
    payload: respuesta.data
  });
  //return { type: MOSTRAR_PRODUCTOS };
};

export const guardarProducto = producto => async dispatch => {
  const respuesta = await axios.post(
    "http://localhost:5000/usuario",
    producto
  );
  console.log(respuesta);

  dispatch({
    type: GUARDAR_PRODUCTO,
    payload: respuesta.data
  });
  //return { type: MOSTRAR_PRODUCTOS };
};

export const eliminarProducto = id => async dispatch => {
const respuesta=await axios.post(
   /* 'https://my-json-server.typicode.com/jeisonsrz/ReactNetlify/productos/'+producto,producto   */
'http://localhost:5000/borrarusuario',id
  );
  console.log(respuesta);    


  dispatch({
    type: ELIMINAR_PRODUCTO,
    payload: id
  });
  //return { type: MOSTRAR_PRODUCTOS };
};
