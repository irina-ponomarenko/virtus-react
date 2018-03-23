import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/image/logo.png';
import ProfileTopMenu from  './ProfileTopMenu';
import AddButton from './AddButton';
import LeftBar from './LeftBar';

class TopMenu extends React.Component{
    render(){
        return(
            <div className="WrapperMenu">
                <div className="TopMenu">
                    <h1>
                        <img src={Logo} alt="Logo"/>
                    </h1>
                    <div className="NavProfileProject">
                        <AddButton/>
                        <Link to =""><i className="fa fa-search"></i></Link>
                        <Link to =""><i className="fa fa-bell"></i></Link>
                        <ProfileTopMenu history={this.props.history}/>
                    </div>
                </div>
            </div>
        );
    }
}
export  default TopMenu;