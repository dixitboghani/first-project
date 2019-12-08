import React, { Component } from 'react'
import Loader from 'react-loader-spinner';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import CardProfile from '../cardProfile'



class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            users_data: "test Name",
            x: 23
       }
    }


    componentDidMount = async () => {


      let users_some_data = await axios.get('https://jsonplaceholder.typicode.com/users')

      console.log(users_some_data)
        
        this.setState({loading:false, user_data: users_some_data})



    }

      render() {
        if ( this.state.loading ) {
          return (
            <div>
                  <Loader
                       type="Puff"
                       color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={0} //3 secs

                                  />
            </div>
          )
        }
        
        else{
          return (
            <div>
             
             <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                      This is a simple hero unit, a simple jumbotron-style component for calling
                      extra attention to featured content or information.
                    </p>
                    <p>
                      <Button variant="primary">Learn more</Button>
                    </p>
              </Jumbotron>
              test
              <CardProfile profileName={this.state.users_data} some_data="this is an example" />
            </div>
            
            )
        }
          
        
        
      }
}

export default HomePage
