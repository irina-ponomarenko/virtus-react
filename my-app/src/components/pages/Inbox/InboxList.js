import React from 'react';
import Profile2 from '../../../assets/image/profileImg-2.png';
import Profile3 from '../../../assets/image/profileImg-3.png';
import Profile4 from '../../../assets/image/profileImg-4.png';
import Profile5 from '../../../assets/image/profileImg-5.png';
import { Link } from 'react-router-dom';

class InboxList extends React.Component{
    constructor() {
        super();

        this.state = {
            inboxList: [
                {
                    icon: Profile2,
                    username: 'Michelle Stewart',
                    date: 'Today, 5:32 PM',
                    messageUser: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
                    class: '',
                    link: '/inbox/1',
                    classStyle: ''
                },
                {
                    icon: Profile3,
                    username: 'Jolene Slater',
                    date: '10 April',
                    messageUser: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
                    class: '',
                    link: '/inbox/2',
                    classStyle: ''
                },
                {
                    icon: Profile5,
                    username: 'Lyall Roach',
                    date: '8 April',
                    messageUser: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                    class: 'OldMessage',
                    link: '/inbox/3',
                    classStyle: ''
                },
                {
                    icon: Profile4,
                    username: 'Dominic Lynton',
                    date: '2 April',
                    messageUser: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
                    class: 'OldMessage',
                    link: '/inbox/4',
                    classStyle: ''
                },
            ]
        };
    }
    handleClick() {
        const newUser = {
            icon: Profile3,
            username: 'Jolene Slater',
            date: '11 April',
            messageUser: '',
            class: '',
            link: '/inbox/5',
            classStyle: 'NewConwersation'
        };

        const oldList = [].concat(this.state.inboxList);

        oldList.push(newUser);

        this.setState({
            inboxList: oldList
        });
    }
    render(){
        return(
            <div className="InboxList">
                {
                    this.state.inboxList.map((item, index) =>{
                        return(
                            <div className={"WrapperPreview " + item.classStyle} key={index}>
                                <Link to={item.link} className="PreviewMessage">
                                    <div className="WrapperTitleMessage">
                                        <div className="IconTitleMessage">
                                            <img src={item.icon} alt="Profile"/>
                                            <h2>{item.username}</h2>
                                        </div>
                                        <span className={item.class}>{item.date}</span>
                                    </div>
                                    <p>{item.messageUser}</p>
                                </Link>
                            </div>
                        )
                    })
                }
                <button
                    onClick={this.handleClick.bind(this)}
                    type="button">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    New coversation
                </button>
            </div>
        );
    }
}
export  default InboxList;