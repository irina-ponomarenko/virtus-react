import React from 'react';

import Logo from '../../../assets/image/logo.png';
import Tabs from './Tabs';
class HeaderLogin extends  React.Component {
    render() {
        return(
            <div className="HeaderLogin">
                <div className="WrapperTabs">
                    <Tabs history={this.props.history}/>
                </div>
            </div>
        );
    }
}
export default HeaderLogin;