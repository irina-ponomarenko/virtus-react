import React from 'react';
import Profile2 from '../../../assets/image/profileImg-2.png';
import Profile3 from '../../../assets/image/profileImg-3.png';
import Profile4 from '../../../assets/image/profileImg-4.png';
import Profile5 from '../../../assets/image/profileImg-5.png';
import { NavLink } from 'react-router-dom';
import Select from '../atoms/Select';

class Trash extends React.Component{
    render(){
        const TrashList = [
            {
                icon: Profile3,
                username: 'Jolene Slater',
                date: 'Today, 5:32 PM',
                messageUser: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
                class: '',

            },
            {
                icon: Profile3,
                username: 'Jolene Slater',
                date: 'Today, 5:32 PM',
                messageUser: ' Eum probo inermis omnesque an, verterem gubergren torquatos per et. Autem scripserit eum eu, ea nibh dolores erroribus est, at tractatos tincidunt has. Mei ei fugit vivendo persecuti, duo ut tibique honestatis.',
                class: '',

            },
            {
                icon: Profile2,
                username: 'Michelle Stewart',
                date: '10 April',
                messageUser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
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
                icon: Profile2,
                username: 'Michelle Stewart',
                date: '7 April',
                messageUser: 'Illud dolor inimicus ut sea. Hinc ridens dissentiet sit ex, utinam argumentum te vix, malis reformidans ea est. Hinc timeam ex vis, sed possit euismod no.',
                class: '',
            },
            {
                icon: Profile4,
                username: 'Dominic Lynton',
                date: '2 April',
                messageUser: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
                class: 'OldMessage',

            },
            {
                icon: Profile4,
                username: 'Dominic Lynton',
                date: '2 April',
                messageUser: ' Autem scripserit eum eu, ea nibh dolores erroribus est, at tractatos tincidunt has. Mei ei fugit vivendo persecuti, duo ut tibique honestatis, paulo dignissim usu ne. ',
                class: 'OldMessage',

            },
        ];
        const forPagesSelect = ["Date","Week","Month"];
        return(
            <div className="WrapperProject">
                <header className="PageHeader">
                    <div className="TitleHeader marginLink">
                        <NavLink exact to="/inbox/:counter?" activeClassName="activeLinkInbox">
                            <i className="fa fa-inbox" aria-hidden="true"></i>
                            <h2>Inbox (2)</h2>
                        </NavLink>
                        <NavLink exact  to="/send"  activeClassName="activeLinkInbox">
                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                            <h2>Sent</h2>
                        </NavLink>
                        <NavLink exact to="/trash" activeClassName="activeLinkInbox">
                            <i className="fa fa-trash" aria-hidden="true"></i>
                            <h2>Trash</h2>
                        </NavLink>
                    </div>
                    <div className="ButtonHeader">
                        <h2>Filter messages:</h2>
                        <Select data={forPagesSelect}/>
                    </div>
                </header>
                <div className="WrapperContentChat">
                    <div className="InboxList TrashBox">
                        {
                           TrashList.map((item, index) =>{
                                return(
                                    <div className="WrapperPreview SendPreview" key={index}>
                                        <div className="PreviewMessage SendMessage">
                                            <div className="WrapperTitleMessage">
                                                <div className="IconTitleMessage">
                                                    <img src={item.icon} alt="Profile"/>
                                                    <h2>{item.username}</h2>
                                                </div>
                                                <span className={item.class}>{item.date}</span>
                                            </div>
                                            <p className="MessageTrash">{item.messageUser}</p>
                                    </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export  default Trash;