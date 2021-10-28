import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DetalleApuestas from './DetalleApuestas/DetalleApuestas';
import DetalleEquipo from './DetalleEquipo/DetalleEquipo';
import DetalleJugador from './DetalleJugador/DetalleJugador';
import DetalleJugadores from './DetalleJugadores/DetalleJugadores';
import Home from './Home/Home';
import NavBar from './NavBar/NavBar';
import NuevaApuesta from './NuevaApuesta/NuevaApuesta';

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
            <NavBar></NavBar>
            <Switch>
                <Route exact path ="/detallesequipo/:idEquipo" render= {
                    props=>{
                        return(<DetalleEquipo idEquipo = {props.match.params.idEquipo}></DetalleEquipo>)
                    }
                }></Route>
                <Route exact path="/detallesjugadores/:idEquipo" render= {
                    props=>{
                        return(<DetalleJugadores idEquipo={props.match.params.idEquipo}></DetalleJugadores>)
                    }
                }></Route>
                <Route exact path="/detallesjugador/:nombre/:idEquipo" render= {
                    props=>{
                        return(<DetalleJugador nombre={props.match.params.nombre} idEquipo={props.match.params.idEquipo}></DetalleJugador>)
                    }
                }></Route>
                <Route exact path="/apuestas" component={DetalleApuestas}></Route>
                <Route exact path="/apuestas/nueva" component={NuevaApuesta}></Route>
                <Route exact path ="/" component={Home}></Route>
            </Switch>
            </BrowserRouter>
        )
    }
}
