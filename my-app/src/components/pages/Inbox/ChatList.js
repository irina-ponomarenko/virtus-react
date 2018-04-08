import React from 'react';
import Profile5 from '../../../assets/image/profileImg-5.png';
import Profile1 from '../../../assets/image/profileImg.png';
import ButtonSend from '../../../assets/image/send_chat.svg';



// const userFirst = [{
//     username: "Kevin Hsu",
//     content: 'Hello World!',
//     img: Profile5,
//     date: new Date()
// }, {
//     username: "Alice Chen",
//     content: 'Love it! :heart:',
//     img: Profile1,
//     date: new Date()
// }, {
//     username: "Kevin Hsu",
//     content: 'Check out my Github at https://github.com/WigoHunter',
//     img: Profile5,
//     date: new Date()
// }, {
//     username: "KevHs",
//     content: 'Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed. Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.',
//     img: Profile1,
//     date: new Date()
// }, {
//     username: "Kevin Hsu",
//     content: 'So',
//     img: Profile5,
//     date: new Date()
// }, {
//     username: "Kevin Hsu",
//     content: 'Chilltime is going to be an app for you to view videos with friends',
//     img: Profile5,
//     date: new Date()
// }, {
//     username: "Kevin Hsu",
//     content: 'You can sign-up now to try out our private beta!',
//     img: Profile5,
//     date: new Date()
// }, {
//     username: "Alice Chen",
//     content: 'Definitely! Sounds great!',
//     img: Profile1,
//     date: new Date()
// }];
//
//
// const userSecond = [{
//     username: "Kevin Hsu",
//     content: 'Hello World!',
//     img: Profile5,
//     date: new Date()
// }, {
//     username: "Alice Chen",
//     content: 'Love it! :heart:',
//     img: Profile1,
//     date: new Date()
// }, {
//     username: "Kevin Hsu",
//     content: 'Check out my Github at https://github.com/WigoHunter',
//     img: Profile5,
//     date: new Date()
// }, {
//     username: "KevHs",
//     content: 'Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed. Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.',
//     img: Profile1,
//     date: new Date()
// }]

class ChatList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            chats: props.listMessage
        };

        this.submitMessage = this.submitMessage.bind(this);
    }
    // componentDidMount(){
    //     document.getElementById("Message").onkeyup= function(){
    //         var sendButtom = document.getElementById("SendButton").style;
    //         if (/[А-Яа-я]/.test(this.value))
    //             sendButtom.display= "none";
    //         else
    //             sendButtom.display= "block";
    //     };
    // }

    handlerMsg() {
        var sendButtom = this.sendButton.style;

        if (/[А-Яа-я]/.test(this.value)) {
            sendButtom.display = "none";
        }
        else {
            sendButtom.display = "block";
        }
    }
    //
    // submitMessage(e) {
    //     e.preventDefault();
    //
    //     const input = this.refs.msg;
    //     const newList = [].concat(this.state.chats);
    //
    //     newList.push({
    //         username: "Kevin Hsu",
    //         content: <p>{ReactDOM.findDOMNode(input).value}</p>,
    //         img: "http://i.imgur.com/Tj5DGiO.jpg",
    //     });
    //
    //     this.setState({
    //         chats: newList
    //     }, () => {
    //         ReactDOM.findDOMNode(input).value = "";
    //     });
    // }
    submitMessage(e){
        e.preventDefault();
        const newMessage = this.sendText.value.trim();
        const newChatsList = [].concat(this.state.chats);

        newChatsList.push({
            username: "Kevin Hsu",
            content: newMessage,
            img: Profile5,
            date: new Date()
        });
        this.setState({
            chats: newChatsList
        }, () => {
           this.sendText.value = "";
        })
    }
    render(){
        const username = "Kevin Hsu";
        const listMonth = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'augest']

        return(
            <div className="ChatList">
                <ul>
                    {
                        this.state.chats.map((item,index)=>{
                            return(
                                <li className={`WrapperMessageChat ${username === item.username ? "NextUserMessage" : " "}`} key={index}>
                                    <img src={item.img}/>
                                    <div className="ChatMessage">
                                        <div className="MessageText">
                                            <p>{item.content}</p>
                                        </div>
                                        <span>{item.date.getDate()} {listMonth[item.date.getMonth()]} {item.date.getFullYear()}, {item.date.getHours()}:{item.date.getMinutes()}:{item.date.getSeconds()}</span>
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
