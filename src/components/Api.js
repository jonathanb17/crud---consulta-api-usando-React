import React, { Component } from 'react'
import axios from 'axios'

export default class Api extends Component {

    state = {
        post: []
    }

    async componentDidMount() {
        const res = await axios('https://jsonplaceholder.typicode.com/posts');
        console.log(res.data);
        this.setState({ post: res.data })

    }


    render() {
        return (
            <div>
                <h1 className="text-center">Datos api</h1>
                {this.state.post.map((e, i) => {
                    return (
                        <div className="container"  key={i}>
                            <div className="row">
                                <div className="col-md-12">
                                    <ul>
                                        <li>{e.id}</li>
                                        <li>{e.title}</li>
                                        <li>{e.body}</li>
                                        <hr/>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        )
    }
}
