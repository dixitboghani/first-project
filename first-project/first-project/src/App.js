import React, { Component } from 'react'
import Loader from 'react-loader-spinner';
import Header from './components/header';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         loading: true,
         users_data: []
    }
  }

  async componentDidMount() {
    


    // setTimeout( () => {
    //   this.setState( {
    //     loading: false
    //   })
    // } ,  2000)

    
    let result = await axios.get('https://jsonplaceholder.typicode.com/users')
    this.setState({
      users_data: result.data,
      loading: false
    })
    console.log(this.state.users_data)
    
    
  }


  some_test = (users) => {
    const data = users.map( (user) => {
        return (
          <div>

  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
      <Card.Title>{ user.name }</Card.Title>
    <Card.Text>
      Website: {user.website}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
        );
    });
    return data;
  }
  render() {
    let some_data = this.state.users_data
    if(this.state.loading){
      return (
        <div>
<Header />
<div style={{textAlign: 'center'}}>
          <Loader
         type="Oval"
         color="#00BFFF"
         height={100}
         width={100}

      />
      </div>

        </div>
      )
    }
    else{

      return (
        <div>
          <Header />
          {
        this.some_test(this.state.users_data)
        }
        </div>
        
        )
    }
    
  }
}

export default App
