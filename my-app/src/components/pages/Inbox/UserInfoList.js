import React from 'react';
import BigProphileIcon from '../../../assets/image/big_prophile.png';

class UserInfoList extends React.Component{
    render(){
        return(
            <div className="WrapperUserInfo">
                <div className="UserInfoChat">
                    <div className="ProphileIconWrapper">
                        <i className="fa fa-circle fa-2x" aria-hidden="true"></i>
                        <img src={BigProphileIcon} alt="About User"/>
                    </div>
                    <div className="TitleName">
                        <h2>Lyall Roach</h2>
                        <span>UX/UI Designer</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad </p>
                    <ul className="ContactInfo">
                        <li>
                            <span>Email</span>
                            <h3>lyallroach@gmail.com</h3>
                        </li>
                        <li>
                            <span>Phone</span>
                            <h3>+48 500 400 300</h3>
                        </li>
                        <li>
                            <span>Adress</span>
                            <h3>65 Lorem St, Warsaw, PL</h3>
                        </li>
                        <li>
                            <span>Organization</span>
                            <h3>Symu.co</h3>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default UserInfoList;