import React from 'react';
import IconImage1 from '../../../assets/image/profileImg-2.png';
import IconImage2 from '../../../assets/image/profileImg-3.png';
import IconImage3 from '../../../assets/image/profileImg-4.png';
class ListInBox extends  React.Component{
    render(){
        const ListInBox = [
            {
                iconImage: IconImage1,
                title: 'Michelle Stewart',
                titleDate: 'Today, 5:32 PM',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
                classNew: ''
            },
            {
                iconImage: IconImage2,
                title: 'Jolene Slater',
                titleDate: 'Today, 5:32 PM',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
                classNew: ''
            },
            {
                iconImage: IconImage3,
                title: 'Lyall Roach',
                titleDate: 'Today, 5:32 PM',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusm.',
                classNew: 'OldMessage'
            },
        ];
        return(
            <div className="Container">
                <header className="HeaderContainer">
                    <h2>Inbox (<span>2</span>)</h2>
                </header>
                <div className="ScrollContainer">
                    {
                        ListInBox.map((item, index) =>
                            <div className="WrapperInbox" key={index}>
                                <div className="IconUser">
                                    <img src={item.iconImage} alt="Icon user"/>
                                </div>
                                <div className="WrapperInfoUser">
                                    <div className="TitleInbox">
                                        <h3>{item.title}</h3>
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
export  default ListInBox;