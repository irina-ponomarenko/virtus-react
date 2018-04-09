import React from 'react';

import IconUser from '../../../assets/image/profileImg.png';

class ListUser extends React.Component{

    constructor(props) {
        super(props);

       this.ListUser = [
            {
                icon: IconUser,
                title: 'Mobile App',
                text: {
                    text1: 'Symu.co',
                    text2: '$1500'
                },
                class: 'fa fa-ellipsis-v'
            },
            {
                icon: IconUser,
                title: 'Dashboard',
                text: {
                    text1: 'Symu.co',
                    text2: '$1500'
                },
                class: 'fa fa-ellipsis-v'
            },
            {
                icon: IconUser,
                title: 'New website',
                text: {
                    text1: 'Symu.co',
                    text2: '$1500'
                },
                class: 'fa fa-ellipsis-v'
            },
            {
                icon: IconUser,
                title: 'Landing page',
                text: {
                    text1: 'Symu.co',
                    text2: '$1500'
                },
                class: 'fa fa-ellipsis-v'
            }
        ];
    }
        render(){

        return(
            <div className="Container">
                <header className="HeaderContainer">
                    <h2>Your projects</h2>
                </header>
                {
                    this.ListUser.map((item,index) =>
                        <div className="WrapperUserBlock" key={index}>
                            <div className="UserBlock">
                                <div className="IconUser">
                                    <img src={item.icon} alt="Icon user"/>
                                </div>
                                <div className="TitleUser">
                                    <h3>{item.title}</h3>
                                    <p>{item.text.text1} &bull; <span>{item.text.text2}</span></p>
                                </div>
                            </div>
                            <i className={item.class} aria-hidden="true"></i>
                        </div>
                    )
                }
            </div>
        );
    }
}
export  default ListUser;