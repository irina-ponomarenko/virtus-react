import React from 'react';
import Profile2 from '../../../assets/image/profileImg-2.png';
import Profile3 from '../../../assets/image/profileImg-3.png';
import Profile4 from '../../../assets/image/profileImg-4.png';
import Profile5 from '../../../assets/image/profileImg-5.png';
import { NavLink } from 'react-router-dom';
import Select from '../atoms/Select';

class Send extends React.Component{
    render(){
        const SendList = [
            {
                icon: Profile2,
                username: 'Michelle Stewart',
                date: 'Today, 5:32 PM',
                messageUser: 'Lorem ipsum dolor sit amet, at nec simul iisque, in quo labores facilis. Vel quis scriptorem et. Prima consetetur ut sea. Ius eu illud munere forensibus, porro vulputate et duo.',
                class: '',
            },
            {
                icon: Profile3,
                username: 'Jolene Slater',
                date: '10 April',
                messageUser: 'Cum ad repudiare evertitur, his te tation postulant. Congue dissentias sit ex, at aperiri vivendo his. Vel probo magna ne, ea volutpat imperdiet mei, vel ignota necessitatibus ut. Quo deseruisse voluptatum no, no nec vocent constituto. Ei dicit iisque suavitate mea.',
                class: '',

            },
            {
                icon: Profile4,
                username: 'Dominic Lynton',
                date: '9 April',
                messageUser: 'Excepteur sint occaecat cupidatat non proident. Mei ei fugit vivendo persecuti, duo ut tibique honestatis, paulo dignissim usu ne. Te nam nonumy alterum gubergren, in harum mediocrem pri.',
                class: 'OldMessage',

            },
            {
                icon: Profile5,
                username: 'Lyall Roach',
                date: '8 April',
                messageUser: 'Suas ludus recteque an has, eos persius conclusionemque ex. Quot tantas qui ex. Duo ex modo tale aliquam, nam ea dolores accumsan vivendum. Assum accusata necessitatibus pri te, iriure maiestatis in has.',
                class: 'OldMessage',

            },
            {
                icon: Profile5,
                username: 'Lyall Roach',
                date: '8 April',
                messageUser: 'Id vel hinc zril, summo labores constituam eam te, timeam molestiae laboramus eam cu. Sanctus explicari mea te. Has aperiam inermis mediocritatem ea. Duo tale labitur definitionem ut, eam ut dicant audire adipisci. Atqui perfecto praesent sed an, quem suavitate ut sea. Paulo everti nostrum nam et.',
                class: 'OldMessage',

            },
            {
                icon: Profile4,
                username: 'Dominic Lynton',
                date: '2 April',
                messageUser: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.Eum probo inermis omnesque an, verterem gubergren torquatos per et. Autem scripserit eum eu, ea nibh dolores erroribus est, at tractatos tincidunt has. Mei ei fugit vivendo persecuti, duo ut tibique honestatis, paulo dignissim usu ne. Te nam nonumy alterum gubergren, in harum mediocrem pri.',
                class: 'OldMessage',

            },
            {
                icon: Profile4,
                username: 'Dominic Lynton',
                date: '2 April',
                messageUser: 'Excepteur sint occaecat cupidatat non proident. Autem scripserit eum eu, ea nibh dolores erroribus est, at tractatos tincidunt has. Mei ei fugit vivendo persecuti, duo ut tibique honestatis, paulo dignissim usu ne. Te nam nonumy alterum gubergren, in harum mediocrem pri.',
                class: 'OldMessage',

            },
        ];
        const forPagesSelect = ["Date","Recent","Old"];
        return(
            <div className="WrapperProject">
                <header className="PageHeader">
                    <div className="TitleHeader marginLink">
                        <NavLink exact to="/inbox/:counter?"  activeClassName="activeLinkInbox">
                            <i className="fa fa-inbox" aria-hidden="true"></i>
                            <h2>Inbox (2)</h2>
                        </NavLink>
                        <NavLink exact  to="/send"  activeClassName="activeLinkInbox">
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
                    <div className="InboxList SendBox">
                        {
                            SendList.map((item, index) =>{
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
                                            <p className="MessageSend">{item.messageUser}</p>
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
export  default Send;