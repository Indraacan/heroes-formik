import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';

import Item from './item';

class index extends Component {

    state = {
        data: []
    }

    componentDidMount(){
        axios.get('http://localhost:3001/heroes')
            .then( response => {
                this.setState({ data: response.data });
            })
    }

    render(){
        let tampilkan ;

        tampilkan = this.state.data.map( (item, index) => {
            return <Item key={index} data={item}></Item>
        })

        return (
            <div>
                
                <Container>
                <h1>List of Hero</h1>
                    {tampilkan}
                </Container>
            </div>
        )
    }
}

export default index;