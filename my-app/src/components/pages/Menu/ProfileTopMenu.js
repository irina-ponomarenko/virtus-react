import React from 'react';
import ProfileTopImage from '../../../assets/image/profileImg.png';

 class ProfileTopMenu extends React.Component {
     handleClick = (e) => {
         const { history } = this.props;
         localStorage.setItem('checkLogin', 'nologged');
         history.push('/Login');
         console.log(e);
     };
     render () {
         return(
             <div className="WrapperProfile">
                 <div className="ProfileTopMenu">
                     <img src={ ProfileTopImage } alt="Profile"/>
                 </div>
                 <i className="fa fa-chevron-down" onClick={this.handleClick}></i>
             </div>
         );
     }
 }
 export  default ProfileTopMenu;