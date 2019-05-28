import React, { Component } from "react";
import { connect } from "react-redux";
import { eliminarProducto } from "../actions/productosActions";

class Producto extends Component {


  eliminarCambios = () => {
  
    //Guardar el producto
    console.log("guardando el producto");
    this.props.eliminarProducto(this.props.producto.id);
   // console.log(this.props.producto.id);
   // this.props.history.push("/");
  };

  render() {
    const { producto } = this.props;
    return (
      <div>
         <li>
        <p>{producto.nombre}</p>
        <button onClick={this.eliminarCambios} className="btn btn-danger">Borrar</button>
      </li>
        
        </div>
     
    );
  }
  
}



export default connect(
  null,
  { eliminarProducto }
)(Producto);
