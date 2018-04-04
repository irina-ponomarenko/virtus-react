import React from 'react';
import ProfileTopImage from '../../../assets/image/profileImg.png';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

 class ProfileTopMenu extends React.Component {
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

     handleClick = (e) => {
         const { history } = this.props;
         localStorage.setItem('checkLogin', 'nologged');
         history.push('/Login');
         console.log(e);
     };

     render () {
         let DropdownContent;
         if (this.state.dropdownOpen) {
             DropdownContent = (
                 <div className="DropDownUser">
                     <Link to="">
                         <i className="fa fa-cogs" aria-hidden="true"></i>
                         Setting
                     </Link>
                     <button type="button" onClick={this.handleClick}>
                         <i className="fa fa-sign-out"></i>
                         Log out
                     </button>
                 </div>
             )
         }
         return(
             <div className="WrapperProfile">
                 <div className="ProfileTopMenu">
                     <img src={ ProfileTopImage } alt="Profile"/>
                 </div>
                 <i className="fa fa-chevron-down" onClick={this.toggleClick}></i>
                 <ReactCSSTransitionGroup
                     transitionName="toggle"
                     transitionEnterTimeout={300}
                     transitionLeaveTimeout={300}>
                     {DropdownContent}
                 </ReactCSSTransitionGroup>
             </div>
         );
     }
 }
 export  default ProfileTopMenu;