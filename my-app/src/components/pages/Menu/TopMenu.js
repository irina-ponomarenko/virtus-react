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
                    <img src={Logo} alt="Logo"/>
                    <div className="NavProfileProject">
                        <AddButton/>
                        <Link to =""><i className="fa fa-search"></i></Link>
                        <Link to =""><i className="fa fa-bell"></i></Link>
                        <ProfileTopMenu history={this.props.history}/>
                    </div>
                </div>
                <LeftBar/>
            </div>
        );
    }
}
export  default TopMenu;