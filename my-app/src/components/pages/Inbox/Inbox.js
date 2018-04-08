import React  from 'react';
import './Inbox.css';
import Select from '../atoms/Select';
import { Link } from 'react-router-dom';
import InboxLis from './InboxList';
import ChatList from './ChatList';
import UserInfoList from './UserInfoList';

const fullList = [
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
    constructor() {
        super();
        // if (this.props.history.params.counter === 1) {
        if (this.props.match.params === '1') {
            this.list = fullList[0];
        }
        else if (this.props.match.params.counter === '2') {
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
                    <ChatList listMessage={this.list.listMsg} />
                    <UserInfoList/>
                </div>
            </div>
        );
    }
}
export default Inbox;