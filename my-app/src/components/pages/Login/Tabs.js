import React from 'react';
import FormRegistration from './FormRegistration';
import {Tabs, Tab} from 'material-ui/Tabs';
import Form from './Form';

export default class NavAutentefiv extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    render() {
        const self = this;
        return (
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
            >
                <Tab label="Register" value="a" className="Register">
                    <FormRegistration/>
                </Tab>
                <Tab label="Login" value="b" className="Login">
                    <Form history={self.props.history} />
                </Tab>
            </Tabs>
        );
    }
}