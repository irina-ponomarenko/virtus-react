import React from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

import ProfileIcon4 from '../../../assets/image/profileImg-4.png';
import ProfileIcon1 from '../../../assets/image/profileImg.png';
import ProfileIcon2 from '../../../assets/image/profileImg-2.png';
import ProfileIcon3 from '../../../assets/image/profileImg-3.png';
import ProfileIcon5 from '../../../assets/image/profileImg-5.png';
import store from '../../../redux/store';

class ProjectUserList extends  React.Component{
    constructor(){
        super();

        this.userList = [
            {
                title1: 'New website',
                text1: 'Microsoft',
                title2: '$2300',
                title3: '15 May 2016',
                text2: '10 days left',
                title4: '40 hours',
                progress: 70,
                title5: 'Development',
                imgIcon: ProfileIcon4,
                title6: 'Dominic Lynton',
                text3: 'Front End Dev',
                class: 'fa fa-ellipsis-v',
                classBorder: 'BlueBorder'
            },
            {
                title1: 'Landing page',
                text1: 'Google',
                title2: '$1250',
                title3: '21 May 2016',
                text2: '23 days left',
                title4: '7 hours',
                progress: 15,
                title5: 'Planning',
                imgIcon: ProfileIcon5,
                title6: 'Lyan Roach',
                text3: 'UX/UI Designer',
                class: 'fa fa-ellipsis-v',
                classBorder: 'BlueBorder'
            },
            {
                title1: 'New dashboard',
                text1: 'Symu.co',
                title2: '$5100',
                title3: '15 May 2016',
                text2: '2 days left',
                title4: '56 hours',
                progress: 90,
                title5: 'Testing',
                imgIcon: ProfileIcon2,
                title6: 'Michelle Stewart',
                text3: 'Account',
                class: 'fa fa-ellipsis-v',
                classBorder: 'BlueBorder'
            },
            {
                title1: 'New logo',
                text1: 'JCD.pl',
                title2: '$900',
                title3: '15 June 2015',
                text2: '30 days left',
                title4: '10 hours',
                progress: 40,
                title5: 'Design',
                imgIcon: ProfileIcon5,
                title6: 'Lyan Roach',
                text3: 'UX/UI Designer',
                class: 'fa fa-ellipsis-v',
                classBorder: 'BlueBorder'
            },
            {
                title1: 'Landing page',
                text1: 'Symu.co',
                title2: '$1500',
                title3: '8 August 2016',
                text2: '2 months left',
                title4: '0 hours',
                progress: 0,
                title5: 'Quened',
                imgIcon: ProfileIcon2,
                title6: 'Michelle Stewart',
                text3: 'Account',
                class: 'fa fa-ellipsis-v',
                classBorder: 'WhiteBorder'
            },
            {
                title1: 'Mobile app',
                text1: 'Facebook',
                title2: '$4300',
                title3: '5th May 2016',
                text2: 'Completed',
                title4: '59 hours',
                progress: 100,
                title5: 'Completed',
                imgIcon: ProfileIcon2,
                title6: 'Michelle Stewart',
                text3: 'Account',
                class: 'fa fa-ellipsis-v',
                classBorder: 'GreenBorder'
            },
            {
                title1: 'Wordpress theme',
                text1: 'Themeforest',
                title2: '$1300',
                title3: '2th May 2016',
                text2: 'Completed',
                title4: '30 hours',
                progress: 100,
                title5: 'Completed',
                imgIcon: ProfileIcon2,
                title6: 'Michelle Stewart',
                text3: 'Account',
                class: 'fa fa-ellipsis-v',
                classBorder: 'GreenBorder'
            }
        ];
    }

    componentDidMount(){
        let sumItemsUsers = this.userList.length;

        store.dispatch({
            type: 'PROJECT_LENGTH',
            payload: {
                sumProject: sumItemsUsers
            }
        });
    }

    render(){
        return(
            <div className="AllProjectList noneOverflow">
                <table className="ProjectUserList">
                    <thead>
                    <tr>
                        <th>Project title</th>
                        <th>Value</th>
                        <th>Deadline</th>
                        <th>Time spent</th>
                        <th>Progress</th>
                        <th>Status</th>
                        <th>Assigned to</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.userList.map((item,index) =>{
                            let rowClass;
                            if (item.progress === 0) {
                                rowClass = "WhiteBorder";
                            }
                            else if (item.progress >= 1 && item.progress <= 99) {
                                rowClass = "BlueBorder";
                            }
                            else if (item.progress === 100) {
                                rowClass = "GreenBorder";
                            }
                            return(
                                <tr className="userInfo" key={index}>
                                    <td className={rowClass + " infoProject"}>
                                        <h2>{item.title1}</h2>
                                        <p>{item.text1}</p>
                                    </td>
                                    <td className="valueProject">
                                        <h2>{item.title2}</h2>
                                    </td>
                                    <td className="infoProject">
                                        <h2>{item.title3}</h2>
                                        <p>{item.text2}</p>
                                    </td>
                                    <td className="timeProject">
                                        <h2>{item.title4}</h2>
                                    </td>
                                    <td className="progressProject">
                                        <Progress percent={item.progress} />
                                    </td>
                                    <td className="statusProject">
                                        <h2>{item.title5}</h2>
                                    </td>
                                    <td className="profileUser">
                                        <div className="userInfo">
                                            <div className="UserBlock positionBlock">
                                                <div className="IconUser">
                                                    <img src={item.imgIcon} alt="User icon"/>
                                                </div>
                                                <div className="TitleUser">
                                                    <h2>{item.title6}</h2>
                                                    <p>{item.text3}</p>
                                                </div>
                                                <i className={item.class} aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default ProjectUserList;