import React, { Component } from 'react'
import estudiante from './estudiante.json'

export default class Crud extends Component {


    state = {
        post: estudiante,
        nombre: '',
        apellido: '',
        profecion: ''
    }


    //data binding
    handInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    enviarDatos = (e) => {
        e.preventDefault();

        const agregar ={
             nombre: this.state.nombre,
             apellido : this.state.apellido,
             profecion: this.state.apellido   
        };

        this.state.post.push(agregar);
        this.setState({nombre:'' ,apellido:'' ,profecion:''});
    }


    eliminar=(id)=>{
        this.state.post.splice(id,1);
        this.setState({nombre:'' ,apellido:'' ,profecion:''});
    }

    render() {
        return (


            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form onSubmit={this.enviarDatos}>

                            <div className="card">
                                <div className="card-body">
                                    <input type="text"
                                        className="form-control"
                                        name="nombre"
                                        value={this.state.nombre}
                                        onChange={this.handInput}
                                        placeholder="Write your name"
                                    /><br />

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="apellido"
                                        value={this.state.apellido}
                                        onChange={this.handInput}
                                        placeholder="Write your Lastname"
                                    /><br />

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="profecion"
                                        value={this.state.profecion}
                                        onChange={this.handInput}
                                        placeholder="Write your ocupation"
                                    /><br />
                                    <button className="btn btn-primary btn-block">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>


                    <div className="col-md-6">

                        <table className="table">

                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Profecion</th>
                                </tr>
                            </thead>



                            {
                                this.state.post.map((e, i) => {
                                    return (
                                        <tbody  key={i}>
                                            <tr>
                                                <td>{e.nombre}</td>
                                                <td>{e.apellido}</td>
                                                <td>{e.profecion}</td>
                                                <td><button 
                                                          className="btn btn-danger"
                                                          onClick={()=>this.eliminar(e._id)}
                                                          >X</button></td>
                                            </tr>
                                        </tbody>
                                    )

                                })
                            }


                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
