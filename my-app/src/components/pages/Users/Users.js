import React from 'react';
import './Users.css';
import { connect } from 'react-redux';

import SelectSort from '../atoms/SelectSort';
import Pagination from 'material-ui-pagination';
import Picture1 from '../../../assets/image/profileImg.png';
import Picture2 from '../../../assets/image/profileImg-2.png';
import Picture3 from '../../../assets/image/profileImg-3.png';
import Picture4 from '../../../assets/image/profileImg-4.png';
import Picture5 from '../../../assets/image/profileImg-5.png';


class Users extends  React.Component{
    constructor() {
        super();
        this.TableUserList = [
            {
                picture: {
                    pictureProfile: Picture4,
                    title: "Dominic Lynton",
                    text: "Front End Dev"
                },
                statusUser: {
                    class: "noActive",
                    classIcon: "fa fa-clock-o",
                    text:"2 days ago",
                },
                email: "dominicly@design.com",
                phone: "(000) 111 222 333",
                class: "fa fa-ellipsis-v"
            },
            {
                picture: {
                    pictureProfile: Picture2,
                    title: "Michelle Stewart",
                    text: "Account"
                },
                statusUser: {
                    class: "",
                    classIcon: "fa fa-clock-o",
                    text:"Online now!",
                },
                email: "michelle@design.com",
                phone: "(000) 111 222 333",
                class: "fa fa-ellipsis-v"
            },
            {
                picture: {
                    pictureProfile: Picture5,
                    title: "Lyan Roach",
                    text: "UX/UI Designer"
                },
                statusUser: {
                    class: "",
                    classIcon: "fa fa-clock-o",
                    text:"Online now!",
                },
                email: "lyan@design.com",
                phone: "(000) 111 222 333",
                class: "fa fa-ellipsis-v"
            },
            {
                picture: {
                    pictureProfile: Picture1,
                    title: "Andrea Bonita",
                    text: "Designer"
                },
                statusUser: {
                    class: "noActive",
                    classIcon: "fa fa-clock-o",
                    text:"20 minutes ago",
                },
                email: "andrea@design.com",
                phone: "(000) 111 222 333",
                class: "fa fa-ellipsis-v"
            },
            {
                picture: {
                    pictureProfile: Picture3,
                    title: "Glen Stephano",
                    text: "Designer"
                },
                statusUser: {
                    class: "noActive",
                    classIcon: "fa fa-clock-o",
                    text:"40 minutes ago",
                },
                email: "glen@design.com",
                phone: "(000) 111 222 333",
                class: "fa fa-ellipsis-v"
            },
        ];

        const leftItems = this.TableUserList.length % 5;
        let countPages = (this.TableUserList.length - leftItems) / 5;

        this.state = {
            total: countPages,
            display: 4,
            number: 1,
        };
    }

    render(){
        let activeFirst;
        const listActive = this.TableUserList.filter((item) => {
            if (item.statusUser.class !== "noActive"){
                return item;
            }
        });
        const listNonActive = this.TableUserList.filter((item) => {
            if (item.statusUser.class === "noActive"){
                return item;
            }

        });
        console.log(listNonActive);
        const status = this.props.statusProps || "Active first";

        if (status === "Active first") {
            activeFirst = listActive.concat(listNonActive);
        }
        else if (status === "No Active") {
            activeFirst = listNonActive.concat(listActive);
        }

        const indexStart = this.state.number * 5 - 5;
        const indexEnd = this.state.number * 5;
        const list = activeFirst.slice(indexStart,  indexEnd);
        const forSelectSort = ["Active first","No Active"];
        return(
            <div className="WrapperAllPage">
                <header className="TableHeader">
                    <div className="SelectWrapper">
                        <h2>Sort:</h2>
                        <SelectSort data={forSelectSort} className="HeaderSelect"/>
                    </div>
                </header>
                <table className="TableUsers">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last activity</th>
                        <th>Mail</th>
                        <th>Phone</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        list.map((item, index) =>{
                            return(
                                <tr className="User" key={index}>
                                    <td className="PictureUser">
                                        <div className="WrapperUsers">
                                            <span><img src={item.picture.pictureProfile} alt="profilePictures"/></span>
                                            <div className="fioUser">
                                                <p>{item.picture.title}</p>
                                                <span>{item.picture.text}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="statusUser">
                                        <p className={item.statusUser.class}><i className={item.statusUser.classIcon}></i> {item.statusUser.text}</p>
                                    </td>
                                    <td className="emailUser">
                                        <p>{item.email}</p>
                                    </td>
                                    <td className="phoneUsers">
                                        <p>{item.phone}</p>
                                    </td>
                                    <td className="settingUser">
                                        <i className={item.class}></i>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
                <div className="PaginationWrapper">
                    <Pagination
                        total = { this.state.total }
                        current = { this.state.number }
                        display = { this.state.display }
                        onChange = { number => this.setState({ number }) }
                    />
                </div>
            </div>
        );
    }
}
const mapState = (state, props) => {
    return {
        statusProps: state.status
    }
};
export  default connect (mapState)(Users);