import React from 'react';
import { FormErrors } from './FormErrors';

class Form extends  React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }
    handlePasswordChange = (e) => {
        console.log('handlePasswordChange', this);
        this.setState({password: e.target.value});

    };

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    };

    validateField = (fieldName, value) => {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': ' is too short';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    };

    validateForm = () => {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    };
    handleSubmit = (e, res) => {
        e.preventDefault();
        const {history} = this.props;
        const userData = JSON.parse(localStorage.getItem('userData'));
        const userDataUsername = userData.email;
        const userDataPass = userData.password;

        const { email, password } = this.state;
        localStorage.setItem('checkLogin', 'logged');
        if (userDataUsername === email && userDataPass === password) {
            localStorage.setItem('username', userDataUsername);
            history.push('/');
        }
    };
    errorClass = (error) => {
        return(error.length === 0 ? '' : 'has-error');
    };

    render() {
        return(
            <div className="FormWrapper">
                <h2>Welcome <span>back!</span></h2>
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <div className="panel panel-default">
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>
                    <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                        <i className="fa fa-user"></i>
                        <input type="email" name="email" placeholder="Username" className="userName"
                               value={this.state.email}
                               onChange={this.handleUserInput}/>
                    </div>
                    <div className={`form-group PasswordWrapper ${this.errorClass(this.state.formErrors.password)}`}>
                        <i className="fas fa-unlock-alt"></i>
                        <input type="password" name="password" placeholder="Password" className="Password"
                               value={this.state.password}
                               onChange={this.handleUserInput}/>
                    </div>
                    <button type="submit" className="submitButton" disabled={!this.state.formValid}><p>Enter</p><i className="fa fa-chevron-right"></i></button>
                </form>
            </div>
        );
    }
}
export  default Form;