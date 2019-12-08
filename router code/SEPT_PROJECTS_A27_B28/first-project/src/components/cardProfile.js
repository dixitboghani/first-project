import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
class CardProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                hello
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{this.props.profileName}</Card.Title>
                    <Card.Text>
                    {this.props.some_data}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
            </div>
        )
    }
}

export default CardProfile
