import React from 'react';
import './Menu.css';
import Logo from '../../../assets/image/logo.png';
import ProfileTopMenu from  './ProfileTopMenu';
import Search from './Search';

class TopMenu extends React.Component{
    render(){
        let updateTime = function(){
            document.getElementById("NewMessageBell").style.display = "block"
        };
        setTimeout(updateTime, 7000);
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
                        <button type="button" className="buttonProject"><i className="fa fa-bell"></i>
                            <div className="NewMessageBell" id="NewMessageBell">
                            </div>
                        </button>
                        <ProfileTopMenu history={this.props.history}/>
                    </div>
                </div>
            </div>
        );
    }
}
export  default TopMenu;