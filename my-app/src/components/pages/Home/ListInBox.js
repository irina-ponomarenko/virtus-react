import React from 'react';
import IconImage1 from '../../../assets/image/profileImg-2.png';
import IconImage2 from '../../../assets/image/profileImg-3.png';
import IconImage3 from '../../../assets/image/profileImg-4.png';
class ListInBox extends  React.Component{
    constructor() {
        super();
        // this.state = {
        //     read: false
        // };
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
        ];

    }


    // messageClick = () => {
    //     this.setState({
    //         read: !this.state.read && MessageCame
    //     });
    // };


    render(){

        let MessageCameNumber = this.ListInBox.filter((item)=>{
            if (item.classNew === 'MessageCame'){
                return item;
            }
        });
       let MessageCame = MessageCameNumber.length;

        return(
            <div className="Container">
                <header className="HeaderContainer">
                    <h2>Inbox (<span>{MessageCame}</span>)</h2>
                </header>
                <div className="ScrollContainer">
                    {
                        this.ListInBox.map((item, index) =>
                            <div className="WrapperInbox" key={index}>
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
export  default ListInBox;