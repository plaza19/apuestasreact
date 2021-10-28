import React, { Component } from "react";
import axios from "axios";
import Global from "../Global/Global";
import { NavLink } from "react-router-dom";

export default class DetalleJugador extends Component {

    state = {
        jugador : {},
        status : false
    }


    cargarJugador = () => {

        var request =  "/api/Jugadores/BuscadorJugadores/" + this.props.nombre;
        var url = Global.url_apuestas + request;

        axios.get(url).then(res=>{
            this.setState({
                jugador : res.data[0],
                status:true
            });
            console.log(this.state);
            console.log(this.props);
        })

    }

    componentDidMount = () => {
        this.cargarJugador();
    }


  render() {
    return (
      <div className="container">
          {this.state.status == true ? 
          (
            <div className="card">
            <h5 className="card-header">{this.state.jugador.nombre}</h5>
            <div className="card-body">
                <img src={this.state.jugador.imagen}></img>
              <h5 className="card-title">{this.state.jugador.posicion}</h5>
              <p className="card-text">
                {this.state.jugador.fechaNacimiento}
              </p>
              <p className="card-text">
                {this.state.jugador.pais}
              </p>
              <NavLink to={"/detallesjugadores/" + this.props.idEquipo} className="btn btn-success">
                Jugadores
              </NavLink>
            </div>
          </div>
          ):
          (
              <h1>Loading data...</h1>
          )}
        
      </div>
    );
  }
}
