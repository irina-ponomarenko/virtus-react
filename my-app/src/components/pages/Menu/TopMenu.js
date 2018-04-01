import React from 'react';
import './Menu.css';
import Logo from '../../../assets/image/logo.png';
import ProfileTopMenu from  './ProfileTopMenu';
import Search from './Search';

class TopMenu extends React.Component{
    render(){
        return(
            <div className="WrapperMenu">
                <div className="TopMenu">
                    <h1>
                        <img src={Logo} alt="Logo"/>
                    </h1>
                    <div className="NavProfileProject">
                        <button type="button" className="addButton">
                            Add
                            <i className="fa fa-plus"></i>
                        </button>
                        <Search/>
                        <button type="button" className="buttonProject"><i className="fa fa-bell"></i></button>
                        <ProfileTopMenu history={this.props.history}/>
                    </div>
                </div>
            </div>
        );
    }
}
export  default TopMenu;