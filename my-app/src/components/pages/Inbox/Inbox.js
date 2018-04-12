import React  from 'react';
import './Inbox.css';
import Select from '../atoms/Select';
import { NavLink } from 'react-router-dom';
import InboxLis from './InboxList';
import ChatList from './ChatList';
import UserInfoList from './UserInfoList';
import Profile5 from '../../../assets/image/profileImg-5.png';
import Profile1 from '../../../assets/image/profileImg.png';
import Profile2 from '../../../assets/image/profileImg-2.png';
import Profile3 from '../../../assets/image/profileImg-3.png';
import Profile4 from '../../../assets/image/profileImg-4.png';
import BigProphileIcon from '../../../assets/image/big_prophile.png';
import BigProphileIcon1 from '../../../assets/image/big_prophile1.png';
import BigProphileIcon5 from '../../../assets/image/big_prophile5.png';
import BigProphileIcon4 from '../../../assets/image/big_prophile4.png';


const fullList = [
    {
        userInfo: {
            class: 'fa-circle fa-2x',
            profileIcon: BigProphileIcon1,
            titleSpan: 'UX/UI Designer',
            userName: 'Michelle Stewart',
            desc: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ',
            emailTitle: 'Email',
            email: 'michelle@gma1il.com',
            phoneTitle: 'Phone',
            phone: '+48 500 400 300',
            adressTitle: 'Adress',
            adress: '65 Lorem St, Warsaw, PL',
            organizationTitle: 'Organization',
            organization: 'Symu.co'
        },
        listMsg: [{
            username: "Michelle Stewart",
            content: 'Hello World!',
            img: Profile2,
            date: new Date()
        }, {
            username: "Rey Colin",
            content: 'Love it! :heart:',
            img: Profile1,
            date: new Date()
        },{
            username: "Rey Colin",
            content: 'Love it!',
            img: Profile1,
            date: new Date()
        }, {
            username: "Michelle Stewart",
            content: 'Check out my Github at https://github.com/WigoHunter',
            img: Profile2,
            date: new Date()
        }, {
            username: "Rey Colin",
            content: 'Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed. Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.',
            img: Profile1,
            date: new Date()
        }, {
            username: "Michelle Stewart",
            content: 'Check out my Github!',
            img: Profile2,
            date: new Date()
        },]
    },
    {
        userInfo: {
            class: 'fa-circle fa-2x',
            profileIcon: BigProphileIcon5,
            titleSpan: 'UX/UI Designer',
            userName: 'Jolene Slater',
            desc: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ',
            emailTitle: 'Email',
            email: 'jolene@gmail.com',
            phoneTitle: 'Phone',
            phone: '+48 500 400 300',
            adressTitle: 'Adress',
            adress: '65 Lorem St, Warsaw, PL',
            organizationTitle: 'Organization',
            organization: 'Symu.co'
        },
        listMsg: [{
            username: "Jolene Slater",
            content: 'Hello World!',
            img: Profile3,
            date: new Date()
        }, {
            username: "Rey Colin",
            content: 'Love it! :heart:',
            img: Profile1,
            date: new Date()
        }, {
            username: "Jolene Slater",
            content: 'Check out my Github at https://github.com/WigoHunter',
            img: Profile3,
            date: new Date()
        }, {
            username: "Rey Colin",
            content: 'Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed. Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.',
            img: Profile1,
            date: new Date()
        }, {
            username: "Jolene Slater",
            content: 'So',
            img: Profile3,
            date: new Date()
        }, {
            username: "Jolene Slater",
            content: 'Chilltime is going to be an app for you to view videos with friends',
            img: Profile3,
            date: new Date()
        }, {
            username: "Jolene Slater",
            content: 'You can sign-up now to try out our private beta!',
            img: Profile3,
            date: new Date()
        }, {
            username: "Rey Colin",
            content: 'Definitely! Sounds great!',
            img: Profile1,
            date: new Date()
        }]
    },
    {
        userInfo: {
            class: 'fa-circle fa-2x',
            profileIcon: BigProphileIcon,
            titleSpan: 'UX/UI Designer',
            userName: 'Lyall Roach',
            desc: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ',
            emailTitle: 'Email',
            email: 'lyallroach@gmail.com',
            phoneTitle: 'Phone',
            phone: '+48 500 400 300',
            adressTitle: 'Adress',
            adress: '65 Lorem St, Warsaw, PL',
            organizationTitle: 'Organization',
            organization: 'Symu.co'
        },
        listMsg: [{
            username: "Lyall Roach",
            content: 'Hello World!',
            img: Profile5,
            date: new Date()
        },
            {
            username: "Rey Colin",
            content: 'Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed. Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.',
            img: Profile1,
            date: new Date()
        },
        {
            username: "Lyall Roach",
            content: 'Lorem ipsum dolor sit amet, nibh ipsum.',
            img: Profile5,
            date: new Date()
        },
        {
            username: "Rey Colin",
            content: 'Lorem ipsum dolor sit amet, nibh ipsum.  Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.',
            img: Profile1,
            date: new Date()
        },
        {
            username: "Lyall Roach",
            content: 'Lorem ipsum ',
            img: Profile5,
            date: new Date()
        },
        {
            username: "Rey Colin",
            content: 'Definitely! Sounds great!',
            img: Profile1,
            date: new Date()
        },
        ]
    },
    {
        userInfo: {
            class: 'fa-circle fa-2x',
            profileIcon: BigProphileIcon4,
            titleSpan: 'UX/UI Designer',
            userName: 'Dominic Lynton',
            desc: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad ',
            emailTitle: 'Email',
            email: 'dominic@gmail.com',
            phoneTitle: 'Phone',
            phone: '+48 500 400 300',
            adressTitle: 'Adress',
            adress: '65 Lorem St, Warsaw, PL',
            organizationTitle: 'Organization',
            organization: 'Symu.co'
        },
        listMsg: [{
            username: "Dominic Lyntonh",
            content: 'Hello World!',
            img: Profile4,
            date: new Date()
        }, {
            username: "Rey Colin",
            content: 'Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed. Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.',
            img: Profile1,
            date: new Date()
        }, {
            username: "Dominic Lyntonh",
            content: 'Hello!',
            img: Profile4,
            date: new Date()
        },{
            username: "Rey Colin",
            content: 'Definitely! Sounds great!',
            img: Profile1,
            date: new Date()
        }]
    }
];

class Inbox extends React.Component{
    render() {
        if (this.props.match.params.counter === '1') {
            this.list = fullList[0];
        }
        else if (this.props.match.params.counter === '2') {
            this.list = fullList[1];
        }
        else if (this.props.match.params.counter === '3') {
            this.list = fullList[2];
        }
        else if (this.props.match.params.counter === '4') {
            this.list = fullList[3];
        }
        else {
            this.list = fullList[0];
        }
        const forPagesSelect = ["Date","Week","Month"];
        return(
            <div className="WrapperProject">
                <header className="PageHeader">
                    <div className="TitleHeader marginLink">
                        <NavLink exact to="/inbox/:counter?"  activeClassName="activeLinkInbox">
                            <i className="fa fa-inbox" aria-hidden="true"></i>
                            <h2>Inbox (2)</h2>
                        </NavLink>
                        <NavLink exact to="/send" activeClassName="activeLinkInbox">
                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                            <h2>Sent</h2>
                        </NavLink>
                        <NavLink exact to="/trash"  activeClassName="activeLinkInbox">
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
                    <InboxLis/>
                    <ChatList listMessage={this.list.listMsg}  />
                    <UserInfoList listUsersInfo={this.list.userInfo}/>
                </div>
            </div>
        );
    }
}
export default Inbox;