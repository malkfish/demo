import React, { Component } from 'react';
import { loginUser } from '../../actions/authActions';
import axios from 'axios';

class Login extends Component {
    // execute post method to login
    handleLogin() {
        console.log("Button clicked???")
        axios
            .get('/api/users/login')
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div>
                Login to your spotify account.
                <button onClick={this.handleLogin()}>
                    Login Please
                </button>
            </div>
        );
      }
}
export default Login;