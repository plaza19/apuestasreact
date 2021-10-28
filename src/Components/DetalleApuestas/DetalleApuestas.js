import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Global from '../Global/Global';

export default class DetalleApuestas extends Component {


    state = {
        apuestas : [],
        status: false
    }

    cargarApuestas = () =>{
        var request = "/api/Apuestas";
        var url = Global.url_apuestas + request;

        axios.get(url).then(res=>{
            this.setState({
                apuestas : res.data,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.cargarApuestas();
    }


    render() {
        return (
            <div className="container">

                <NavLink to="/apuestas/nueva" className="btn btn-warning">Realizar apuesta</NavLink>
                {this.state.status == true ?
                (<table className="table table-info">
                    <thead>
                    <th>Usuario</th>
                    <th>Resultado</th>
                    <th>Fecha</th>
                    </thead>
                    <tbody>
                        {this.state.apuestas.map((apuesta,id)=>{
                            return(<tr>
                                <td>{apuesta.usuario}</td>
                                <td>{apuesta.resultado}</td>
                                <td>{apuesta.fecha}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>):
                (<h1>Loading data...</h1>)
                }
                
            </div>
        )
    }
}
