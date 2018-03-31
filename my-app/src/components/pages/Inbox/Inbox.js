import React  from 'react';
import './Inbox.css';
import Select from '../atoms/Select';
import { Link } from 'react-router-dom';
import InboxLis from './InboxList';
import ChatList from './ChatList';
import UserListInfo from './UserInfoList';

class Inbox extends React.Component{
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
                    <ChatList/>
                    <UserInfoList/>
                </div>
            </div>
        );
    }
}
export default Inbox;