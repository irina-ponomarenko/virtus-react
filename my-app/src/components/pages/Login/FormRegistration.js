import React from 'react';
import Logo from '../../../assets/image/logo.png';

class FormRegistration extends  React.Component {
    constructor(props) {
        super(props);


        this.state = {
            signUpForm: {
                email: '',
                password: ''
            },
        };

        this.collectUserData = this.collectUserData.bind(this);
        this.updateUserData = this.updateUserData.bind(this);

    }

    updateUserData(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            signUpForm: Object.assign(this.state.signUpForm, {
                [name]: value
            })
        });
    }

    collectUserData(event) {
        event.preventDefault();
        localStorage.setItem('userData', JSON.stringify(this.state.signUpForm));
    }

    render() {
        return(
            <div className="FormWrapper">
                <img src={Logo}/>
                <h2>Register</h2>
                <form className="form-signin" onSubmit={this.collectUserData}>
                    <div className="form-group">
                        <i className="fa fa-unlock-alt"></i>
                        <input type="email"
                               name="email"
                               placeholder="Username"
                               className="userName"
                               value={this.state.signUpForm.email}
                               onChange={this.updateUserData}
                        />
                    </div>
                    <div className="form-group">
                        <i className="fa fa-user"></i>
                        <input type="password"
                               name="password"
                               placeholder="Password"
                               className="Password"
                               value={this.state.signUpForm.password}
                               onChange={this.updateUserData}
                        />
                    </div>
                    <button type="submit" className="submitButton"><p>Enter</p><i className="fa fa-chevron-right"></i></button>
                </form>
            </div>
        );
    }
}
export default FormRegistration;