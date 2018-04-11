import React from 'react';
import Profile2 from '../../../assets/image/profileImg-2.png';
import Profile3 from '../../../assets/image/profileImg-3.png';
import Profile4 from '../../../assets/image/profileImg-4.png';
import Profile5 from '../../../assets/image/profileImg-5.png';
import { Link } from 'react-router-dom';
import Select from '../atoms/Select';

class Trash extends React.Component{
    render(){
        const TrashList = [
            {
                icon: Profile2,
                username: 'Michelle Stewart',
                date: 'Today, 5:32 PM',
                messageUser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
                class: '',
            },
            {
                icon: Profile3,
                username: 'Jolene Slater',
                date: '10 April',
                messageUser: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
                class: '',

            },
            {
                icon: Profile5,
                username: 'Lyall Roach',
                date: '8 April',
                messageUser: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                class: 'OldMessage',

            },
            {
                icon: Profile4,
                username: 'Dominic Lynton',
                date: '2 April',
                messageUser: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
                class: 'OldMessage',

            },
        ];
        const forPagesSelect = ["Date","Week","Month"];
        return(
            <div className="WrapperProject">
                <header className="PageHeader">
                    <div className="TitleHeader">
                        <Link to="/inbox/:counter?" className="marginLink">
                            <i className="fa fa-inbox" aria-hidden="true"></i>
                            <h2>Inbox (2)</h2>
                        </Link>
                        <Link  to="/send" className="activeLink marginLink">
                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                            <h2>Sent</h2>
                        </Link>
                        <Link  to=" " className="activeLink marginLink">
                            <i className="fa fa-trash" aria-hidden="true"></i>
                            <h2>Trash</h2>
                        </Link>
                    </div>
                    <div className="ButtonHeader">
                        <h2>Filter messages:</h2>
                        <Select data={forPagesSelect}/>
                    </div>
                </header>
                <div className="WrapperContentChat">
                    <div className="InboxList">
                        {
                           TrashList.map((item, index) =>{
                                return(
                                    <div className="WrapperPreview" key={index}>
                                        <div className="PreviewMessage">
                                            <div className="WrapperTitleMessage">
                                                <div className="IconTitleMessage">
                                                    <img src={item.icon} alt="Profile"/>
                                                    <h2>{item.username}</h2>
                                                </div>
                                                <span className={item.class}>{item.date}</span>
                                            </div>
                                            <p>{item.messageUser}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <button type="button"><i className="fa fa-plus" aria-hidden="true"></i>New conversation</button>
                    </div>
                </div>
            </div>
        );
    }
}
export  default Trash;