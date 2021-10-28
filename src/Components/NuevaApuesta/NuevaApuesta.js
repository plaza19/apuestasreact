import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global/Global';
import Swal from 'sweetalert2';
import { Redirect } from 'react-router';

export default class NuevaApuesta extends Component {


    cajaUsuario = React.createRef();
    cajaReal = React.createRef();
    cajaAtleti = React.createRef();
    cajaFecha = React.createRef();

    state = {
        status:false
    }

    guardarApuesta = (e) => {
        e.preventDefault();
        var request = "/api/Apuestas"
        var url = Global.url_apuestas + request;

        var apuesta = {
            usuario: this.cajaUsuario.current.value,
            resultado: this.cajaReal.current.value + "-" + this.cajaAtleti.current.value,
            fecha: this.cajaFecha.current.value
        }

        axios.post(url, apuesta).then(res=>{
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Se ha hecho la apuesta',
                showConfirmButton: false,
                timer: 1500
              });
              this.setState({
                status:true
              })
              
        }).catch(err=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        })
    }

    render() {
        return (
            <div className="container">
                {this.state.status == true && 
                (<Redirect to="/apuestas"></Redirect>)}
                <form onSubmit={this.guardarApuesta}>
                    <label className="form-label">Usuario</label>
                    <input type="text" className="form-control" ref={this.cajaUsuario}></input>
                    <label className="form-label">Real Madrid</label>
                    <input type="number" className="form-control"  ref={this.cajaReal}></input>
                    <label className="form-label">Atlético de Madrid</label>
                    <input type="number" className="form-control" ref={this.cajaAtleti}></input>
                    <label className="form-label">Fecha</label>
                    <input type="text" className="form-control" ref={this.cajaFecha} placeholder="dd/mm/yyyy"></input>
                    <button className="btn btn-secondary" type="submit">Hacer apuesta</button>
                </form>
            </div>
        )
    }
}
