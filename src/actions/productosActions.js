import { MOSTRAR_PRODUCTOS, GUARDAR_PRODUCTO, ELIMINAR_PRODUCTO } from "./types";

//axios
import axios from "axios";

//

export const mostrarProductos = id => async dispatch => {
  const respuesta = await axios.get("https://my-json-server.typicode.com/jeisonsrz/ReactNetlify/productos");
  console.log(respuesta);

  dispatch({
    type: MOSTRAR_PRODUCTOS,
    payload: respuesta.data
  });
  //return { type: MOSTRAR_PRODUCTOS };
};

export const guardarProducto = producto => async dispatch => {
  const respuesta = await axios.post(
    "https://my-json-server.typicode.com/jeisonsrz/ReactNetlify/productos",
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
  await axios.delete(
   /* 'https://my-json-server.typicode.com/jeisonsrz/ReactNetlify/productos/'+producto,producto   */
`https://my-json-server.typicode.com/jeisonsrz/ReactNetlify/productos/${id}`
  );
  //console.log(respuesta);    


  dispatch({
    type: ELIMINAR_PRODUCTO,
    payload: id
  });
  //return { type: MOSTRAR_PRODUCTOS };
};
