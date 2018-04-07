import React from 'react';
import Profile5 from '../../../assets/image/profileImg-5.png';
import Profile1 from '../../../assets/image/profileImg.png';
import ButtonSend from '../../../assets/image/send_chat.svg';

class ChatList extends React.Component{
    constructor(){
        super();

        var SendButton=document.querySelector("SendButton");
        var Message=document.querySelector("Message");

        Message.onInput=function(){
            if(this.value==="")
                return SendButton.style.display="none";
            SendButton.style.display="block"
        };
    }

    render(){
        return(
            <div className="ChatList">
                <div className="WrapperMessageChat">
                    <img src={Profile5}/>
                    <div className="ChatMessage">
                        <div className="MessageText">
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ulla pariatur.</p>
                        </div>
                        <span>4 April 2016, 5:32 PM</span>
                    </div>
                </div>
                <div className="WrapperMessageChat NextUserMessage">
                    <div className="ChatMessage">
                        <div className="MessageText NewBackground">
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ulla pariatur.</p>
                        </div>
                        <span className="RightAlign">4 April 2016, 5:32 PM</span>
                    </div>
                    <img src={Profile1}/>
                </div>
                <div className="WrapperMessageChat">
                    <img src={Profile5}/>
                    <div className="ChatMessage">
                        <div className="MessageText">
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ulla pariatur.</p>
                        </div>
                        <span>4 April 2016, 5:32 PM</span>
                    </div>
                </div>
                <div className="WrapperMessageChat NextUserMessage">
                    <div className="ChatMessage">
                        <div className="MessageText NewBackground">
                            <p>Ut enim ad minim veniam,ex ea commo! </p>
                        </div>
                        <span className="RightAlign">4 April 2016, 5:32 PM</span>
                    </div>
                    <img src={Profile1}/>
                </div>
                <div className="WrapperMessageChat NextUserMessage">
                    <div className="ChatMessage">
                        <div className="MessageText NewBackground">
                            <p>Ut enim ad minim </p>
                        </div>
                        <span className="RightAlign">4 April 2016, 5:32 PM</span>
                    </div>
                    <img src={Profile1}/>
                </div>
                <div className="WriteMessage">
                    <input type="text" id="Message" placeholder="Write a message"/>
                    <button id="SendButton"><img src={ButtonSend}/></button>
                    <i className="fa fa-paperclip" aria-hidden="true"></i>
                </div>
            </div>
        )
    }

}
export default ChatList;
