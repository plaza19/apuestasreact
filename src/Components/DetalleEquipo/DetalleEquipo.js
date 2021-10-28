import React, { Component } from "react";
import Global from "../Global/Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class DetalleEquipo extends Component {

    state = {
        equipo : {},
        status:false
    }

    cargarDetalleEquipo = () => {
        var request = "/api/Equipos/" + this.props.idEquipo;
        var url = Global.url_apuestas + request
        axios.get(url).then(res=>{
            this.setState({
                equipo: res.data,
                status:true
            });
            console.log(this.state);
        })
        
    }

    componentDidMount = () => {
        this.cargarDetalleEquipo();
    }

    componentDidUpdate = (oldProps) =>{
        if (oldProps != this.props) {
            this.cargarDetalleEquipo();
        }
    }


  render() {
    return (
      <div className="container">
        {this.state.status == true ?
        (<div className="card">
        <h5 className="card-header">{this.state.equipo.nombre}</h5>
        <div className="card-body ">
        <img src={this.state.equipo.imagen} style={{height:"100px", width:"100px", margin:"auto"}}></img>
          <h5 className="card-title">Champions: {this.state.equipo.champions}</h5>
          <p className="card-text">
            {this.state.equipo.descripcion}
          </p>
          <NavLink to={"/detallesjugadores/" + this.state.equipo.idEquipo} className="btn btn-success">
            Jugadores
          </NavLink>
          <NavLink to="/" className="btn btn-primary">
            Volver
          </NavLink>
        </div>
      </div>):
      (<h1>Loading data....</h1>)}
        
      </div>
    );
  }
}
