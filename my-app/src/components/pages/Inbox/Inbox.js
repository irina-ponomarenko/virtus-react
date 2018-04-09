import React  from 'react';
import './Inbox.css';
import Select from '../atoms/Select';
import { Link } from 'react-router-dom';
import InboxLis from './InboxList';
import ChatList from './ChatList';
import UserInfoList from './UserInfoList';
import Profile5 from '../../../assets/image/profileImg-5.png';
import Profile1 from '../../../assets/image/profileImg.png';
import BigProphileIcon from '../../../assets/image/big_prophile.png';

const fullList = [
    {
        userInfo: {
            class: 'fa-circle fa-2x',
            profileIcon: BigProphileIcon,
            titleSpan: 'UX/UI Designer',
            userName: 'Lyall Roach',
            desc: 'Lorem ipsum dolor sit amet,consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad '
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
            username: "Kevin Hsu",
            content: 'Hello World!',
            img: Profile5,
            date: new Date()
        }, {
            username: "Alice Chen",
            content: 'Love it! :heart:',
            img: Profile1,
            date: new Date()
        }, {
            username: "Kevin Hsu",
            content: 'Check out my Github at https://github.com/WigoHunter',
            img: Profile5,
            date: new Date()
        }, {
            username: "KevHs",
            content: 'Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed. Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.',
            img: Profile1,
            date: new Date()
        }]
    },
    {
        userInfo: {
            username: 'ss',
            desc: 'dddds'
        },
        listMsg: [{
            username: "Kevin Hsu",
            content: 'Hello World!',
            img: Profile5,
            date: new Date()
        }, {
            username: "Alice Chen",
            content: 'Love it! :heart:',
            img: Profile1,
            date: new Date()
        }, {
            username: "Kevin Hsu",
            content: 'Check out my Github at https://github.com/WigoHunter',
            img: Profile5,
            date: new Date()
        }, {
            username: "KevHs",
            content: 'Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed. Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.',
            img: Profile1,
            date: new Date()
        }, {
            username: "Kevin Hsu",
            content: 'So',
            img: Profile5,
            date: new Date()
        }, {
            username: "Kevin Hsu",
            content: 'Chilltime is going to be an app for you to view videos with friends',
            img: Profile5,
            date: new Date()
        }, {
            username: "Kevin Hsu",
            content: 'You can sign-up now to try out our private beta!',
            img: Profile5,
            date: new Date()
        }, {
            username: "Alice Chen",
            content: 'Definitely! Sounds great!',
            img: Profile1,
            date: new Date()
        }]
    }
];

class Inbox extends React.Component{
    constructor(props) {
        super(props);
        // if (this.props.history.params.counter === 1) {
        if (props.match.params.counter === '1') {
            this.list = fullList[0];
        }
        else if (props.match.params.counter === '2') {
            this.list = fullList[1];
        }
        else {
            this.list = fullList[0];
        }

        // this.list.userInfo
        // this.list.listMsg
    }
    render() {
        const forPagesSelect = ["Date","Week","Month"];
        return(
            <div className="WrapperProject">
                <header className="PageHeader">
                    <div className="TitleHeader">
                        <Link to=" " className="marginLink">
                            <i className="fa fa-inbox" aria-hidden="true"></i>
                            <h2>Inbox (2)</h2>
                        </Link>
                        <Link  to=" " className="activeLink marginLink">
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
                    <InboxLis/>
                    <ChatList listMessage={this.list.listMsg}  />
                    <UserInfoList listUsersInfo={this.list.userInfo}/>
                </div>
            </div>
        );
    }
}
export default Inbox;