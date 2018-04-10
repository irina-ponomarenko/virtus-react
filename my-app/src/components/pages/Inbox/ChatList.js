import React from 'react';
import Profile1 from '../../../assets/image/profileImg.png';
import ButtonSend from '../../../assets/image/send_chat.svg';


class ChatList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            chats: props.listMessage
        };

        this.scrollToBot = this.scrollToBot.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }
    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        this.chats.scrollTop = this.chats.scrollHeight;
    }
    handlerMsg() {
        var sendButtom = this.sendButton.style;

        if (/[А-Яа-я]/.test(this.value)) {
            sendButtom.display = "none";
        }
        else {
            sendButtom.display = "block";
        }
    }
    submitMessage(e){
        e.preventDefault();
        const newMessage = this.sendText.value.trim();
        const newChatsList = [].concat(this.state.chats);

        newChatsList.push({
            username: "Rey Colin",
            content: newMessage,
            img: Profile1,
            date: new Date()
        });
        this.setState({
            chats: newChatsList
        }, () => {
           this.sendText.value = "";
        });

    }
    componentWillReceiveProps(nextProps){
        this.setState({
            chats: nextProps.listMessage
        });
    }

    render(){
        const username = "Rey Colin";
        const listMonth = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'augest'];
        const { chats } = this.state;


        return(
            <div className="ChatList">
                <ul ref={el => this.chats = el} >
                    {
                        this.state.chats.map((item,index)=>{
                            return(
                                <li className="WrapperMessageChat" key={index}>
                                    <div className={`InboxChat ${username === item.username ? "NextUserMessage" : " "}`}>
                                        <img src={item.img}/>
                                        <div className="ChatMessage">
                                            <div className="MessageText">
                                                <p>{item.content}</p>
                                            </div>
                                            <span>{item.date.getDate()} {listMonth[item.date.getMonth()]} {item.date.getFullYear()}, {item.date.getHours()}:{item.date.getMinutes()}:{item.date.getSeconds()}</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <form className="WriteMessage" onSubmit={(e) => this.submitMessage(e)}>
                    <input type="text" ref={el => this.sendText = el} onKeyUp={this.handlerMsg.bind(this)} id="Message" placeholder="Write a message"/>
                    <button type="submit" id="SendButton" ref={el => this.sendButton = el}><img src={ButtonSend}/></button>
                    <i className="fa fa-paperclip" aria-hidden="true"></i>
                </form>
            </div>
        );
    }
}

export default ChatList;
