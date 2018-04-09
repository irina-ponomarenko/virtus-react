import React from 'react';

class UserInfoList extends React.Component{

    render(){
        const userInfo = this.props.listUsersInfo;
        return(
            <div className="WrapperUserInfo">
                <div className="UserInfoChat">
                    <div className="ProphileIconWrapper">
                        <i className={"fa " + userInfo.class} aria-hidden="true"></i>
                        <img src={userInfo.profileIcon} alt="About User"/>
                    </div>
                    <div className="TitleName">
                        <h2>{userInfo.userName}</h2>
                        <span>{userInfo.titleSpan}</span>
                    </div>
                    <p>{userInfo.desc}</p>
                    <ul className="ContactInfo">
                        <li>
                            <span>{userInfo.emailTitle}</span>
                            <h3>{userInfo.email}</h3>
                        </li>
                        <li>
                            <span>{userInfo.phoneTitle}</span>
                            <h3>{userInfo.phone}</h3>
                        </li>
                        <li>
                            <span>{userInfo.adressTitle}</span>
                            <h3>{userInfo.adress}</h3>
                        </li>
                        <li>
                            <span>{userInfo.organizationTitle}</span>
                            <h3>{userInfo.organization}</h3>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default UserInfoList;