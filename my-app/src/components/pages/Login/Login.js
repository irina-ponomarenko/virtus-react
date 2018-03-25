import React from 'react';
import Form from './Form';
import './Login.css';

class Login extends React.Component {
    render() {
        return (
            <div className="WrapperLogin">
                <Form history={this.props.history}/>
            </div>
        );
    }
}
export  default Login;