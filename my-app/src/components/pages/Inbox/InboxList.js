import React from 'react';
import Profile2 from '../../../assets/image/profileImg-2.png';
import Profile3 from '../../../assets/image/profileImg-3.png';
import Profile4 from '../../../assets/image/profileImg-4.png';
import Profile5 from '../../../assets/image/profileImg-5.png';
import { Link } from 'react-router-dom';

class InboxList extends React.Component{
    render(){
        const InboxList = [
            {
                icon: Profile2,
                title: 'Michelle Stewart',
                date: 'Today, 5:32 PM',
                messageUser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
                class: '',
                link: '/inbox/1',
            },
            {
                icon: Profile3,
                title: 'Jolene Slater',
                date: '10 April',
                messageUser: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
                class: '',
                link: '/inbox/2',
            },
            {
                icon: Profile5,
                title: 'Lyall Roach',
                date: '8 April',
                messageUser: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                class: 'OldMessage',
                link: '/inbox/3',
            },
            {
                icon: Profile4,
                title: 'Dominic Lynton',
                date: '2 April',
                messageUser: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
                class: 'OldMessage',
                link: '/inbox/4'
            },
        ];
        return(
            <div className="InboxList">
                {
                    InboxList.map((item, index) =>{
                        return(
                            <div className="WrapperPreview" key={index}>
                                <Link to={item.link} className="PreviewMessage">
                                    <div className="WrapperTitleMessage">
                                        <div className="IconTitleMessage">
                                            <img src={item.icon} alt="Profile"/>
                                            <h2>{item.title}</h2>
                                        </div>
                                        <span className={item.class}>{item.date}</span>
                                    </div>
                                    <p>{item.messageUser}</p>
                                </Link>
                            </div>
                        )
                    })
                }
                <button type="button"><i className="fa fa-plus" aria-hidden="true"></i>New coversation</button>
            </div>
        );
    }
}
export  default InboxList;