import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Global from "../Global/Global";

export default class DetalleJugadores extends Component {
  state = {
    jugadores: [],
    status: false,
  };

  cargarJugadores = () => {
    var request = "/api/Jugadores/JugadoresEquipo/" + this.props.idEquipo;
    var url = Global.url_apuestas + request;
    console.log(url);

    axios.get(url).then((res) => {
      this.setState({
        jugadores: res.data,
        status: true,
      });
      console.log(this.state.jugadores);
    });
  };



  componentDidMount = () => {
      this.cargarJugadores();
  }

  render() {
    return (
      <div className="container">
        <NavLink to={"/detallesequipo/" + this.props.idEquipo} className="btn btn-success">
          Volver
        </NavLink>

        {this.state.status == true ? (
          <table className="table">
              <thead>
                  <th>Nombre</th>
                  <th>Imagen</th>
                  <th>Detalles</th>
              </thead>
              <tbody>
                {this.state.jugadores.map((jugador,equipo)=>{
                    return(<tr>
                        <td>{jugador.nombre}</td>
                        <td><img src={jugador.imagen}></img></td>
                        <td><NavLink to={"/detallesjugador/"+ jugador.nombre + "/" + this.props.idEquipo}  className="btn btn-secondary">Detalles</NavLink></td>
                    </tr>);
                })}
              </tbody>
          </table>
        ) : (
          <h1>Loading data...</h1>
        )}
      </div>
    );
  }
}
