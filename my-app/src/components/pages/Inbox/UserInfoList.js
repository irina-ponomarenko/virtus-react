import React from 'react';

class UserInfoList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            userInfoList: props.listUsersInfo
        };
    }
    render(){
        return(
            <div className="WrapperUserInfo">
                {
                    this.state.userInfoList.map((item,index)=>{
                        return(
                            <div className="UserInfoChat" key={index}>
                                <div className="ProphileIconWrapper">
                                    <i className={"fa " + item.class} aria-hidden="true"></i>
                                    <img src={item.profileIcon} alt="About User"/>
                                </div>
                                <div className="TitleName">
                                    <h2>{item.userName}</h2>
                                    <span>{item.titleSpan}</span>
                                </div>
                                <p>{item.desc}</p>
                                <ul className="ContactInfo">
                                    <li>
                                        <span>{item.emailTitle}</span>
                                        <h3>{item.email}</h3>
                                    </li>
                                    <li>
                                        <span>{item.phoneTitle}</span>
                                        <h3>{item.phone}</h3>
                                    </li>
                                    <li>
                                        <span>{item.adressTitle}</span>
                                        <h3>{item.adress}</h3>
                                    </li>
                                    <li>
                                        <span>{item.organizationTitle}</span>
                                        <h3>{item.organization}</h3>
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
export default UserInfoList;