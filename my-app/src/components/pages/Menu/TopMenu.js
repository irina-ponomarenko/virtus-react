import React from 'react';
import './Menu.css';
import Logo from '../../../assets/image/logo.png';
import ProfileTopMenu from  './ProfileTopMenu';
import Search from './Search';
import IncomingMessage from '../Home/IncomingMessage';

class TopMenu extends React.Component{
    constructor(){
        super();
        this.state = {
            dropdownOpen: false
        };
    }
    toggleClick = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    };
    render(){
        let DropdownContent;
        if (this.state.dropdownOpen) {
            DropdownContent = (
                <div className="IncomingMessage">
                    <IncomingMessage/>
                </div>
            )
        }
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
                        <button type="button" className="buttonProject" onClick={this.toggleClick}>
                            <i className="fa fa-bell"></i>
                            <div className="NewMessageBell" id="NewMessageBell">
                            </div>
                        </button>
                        {DropdownContent}
                        <ProfileTopMenu history={this.props.history}/>
                    </div>
                </div>
            </div>
        );
    }
}
export  default TopMenu;