import React from 'react';
import IconImage1 from '../../../assets/image/profileImg-2.png';
import IconImage2 from '../../../assets/image/profileImg-3.png';
import IconImage3 from '../../../assets/image/profileImg-4.png';
class IncomingMessage extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            read: false
        };
        this.ListInBox = [
            {
                iconImage: IconImage1,
                username: 'Michelle Stewart',
                titleDate: 'Today, 5:32 PM',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
                classNew: 'MessageCame'
            },
            {
                iconImage: IconImage2,
                username: 'Jolene Slater',
                titleDate: 'Today, 5:32 PM',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
                classNew: 'MessageCame'
            },
            {
                iconImage: IconImage3,
                username: 'Lyall Roach',
                titleDate: 'Today, 5:32 PM',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
                classNew: ''
            },
            {
                iconImage: IconImage3,
                username: 'Lyall Roach',
                titleDate: 'Today, 5:30 PM',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
                classNew: ''
            },
        ];

    }
    messageClick = () => {
        this.setState({
            read: !this.state.read && 'MessageCame'
        });
    };

    render(){
        return(
            <div className="IncomingMessage">
                <div className="ScrollContainer">
                    {
                        this.ListInBox.map((item, index) =>
                            <div className="WrapperInbox" key={index} onClick={this.messageClick}>
                                <div className="IconUser">
                                    <img src={item.iconImage} alt="Icon user"/>
                                </div>
                                <div className="WrapperInfoUser">
                                    <div className="TitleInbox">
                                        <h3>{item.username}</h3>
                                        <span className={item.classNew}>{item.titleDate}</span>
                                    </div>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}
export  default IncomingMessage;