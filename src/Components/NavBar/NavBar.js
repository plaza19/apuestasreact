import React, { Component } from "react";
import Global from "../Global/Global";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {


    state = {
        equipos : [],
        status : false
    }


    populateTeams = () => {
        //rellenar los equipos en el dropdown
        var request =  "/api/Equipos/";
        var url = Global.url_apuestas + request;
        axios.get(url).then(res=> {
            this.setState({
                equipos: res.data,
                status: true
            });
        });

        
    }

    componentDidMount = () => {
        this.populateTeams();
    }





  render() {


    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <img src={Global.imagen_champions} style={{height:"40px", margin:"10px"}}></img>
          <a className="navbar-brand" href="#">
            Champions
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/apuestas">
                  Apuestas
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Equipos
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {this.state.status == true && 
                  (
                      this.state.equipos.map((equipo, index)=> {
                          console.log(equipo.nombre);
                          return(<li><NavLink className="dropdown-item" to={"/detallesequipo/" + equipo.idEquipo}>{equipo.nombre}</NavLink></li>);
                      })
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
