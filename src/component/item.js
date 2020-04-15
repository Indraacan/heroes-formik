import React from 'react';
import {Card} from 'react-bootstrap';


const Item = (props) => {
    console.log(props.data)
    const { data } = props
    console.log(data._id)
    return (
            <Card>
            <Card.Img
                style={{
                    width: '200px'
                }}
            variant="top" src={`${data.values.imgurl}`}/>
            <Card.Body>
                
                <Card.Text>
                    {data.values.fullname} <br/>
                    Born : {data.values.born} <br/>
                    Died : {data.values.died} <br/>
                    Description : {data.values.description} <br/>
                    Establishment : {data.values.establishment}
                </Card.Text>
                
            </Card.Body>
            </Card>
    )
}

export default Item 