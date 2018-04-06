import React from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { connect } from 'react-redux';

import ProfileIcon4 from '../../../assets/image/profileImg-4.png';
import ProfileIcon2 from '../../../assets/image/profileImg-2.png';
import ProfileIcon5 from '../../../assets/image/profileImg-5.png';
import store from '../../../redux/store';

class ProjectUserList extends  React.Component{
//     ProjectUserList.defaultProps = {
//       status: false
// };
    constructor(){
        super();

        this.userList = [
            {
                titleProject: 'New website',
                nameCompany: 'Microsoft',
                titlePrice: '$2300',
                date: '15 May 2016',
                leftTime: '10 days left',
                lasting: '40 hours',
                progress: 70,
                completedInfo: 'Development',
                imgIcon: ProfileIcon4,
                namePerfomer: 'Dominic Lynton',
                post: 'Front End Dev',
                class: 'fa fa-ellipsis-v',
                classBorder: 'BlueBorder'
            },
            {
                titleProject: 'Landing page',
                nameCompany: 'Google',
                titlePrice: '$1250',
                date: '21 May 2016',
                leftTime: '23 days left',
                lasting: '7 hours',
                progress: 15,
                completedInfo: 'Planning',
                imgIcon: ProfileIcon5,
                namePerfomer: 'Lyan Roach',
                post: 'UX/UI Designer',
                class: 'fa fa-ellipsis-v',
                classBorder: 'BlueBorder'
            },
            {
                titleProject: 'New dashboard',
                nameCompany: 'Symu.co',
                titlePrice: '$5100',
                date: '15 May 2016',
                leftTime: '2 days left',
                lasting: '56 hours',
                progress: 90,
                completedInfo: 'Testing',
                imgIcon: ProfileIcon2,
                namePerfomer: 'Michelle Stewart',
                post: 'Account',
                class: 'fa fa-ellipsis-v',
                classBorder: 'BlueBorder'
            },
            {
                titleProject: 'New logo',
                nameCompany: 'JCD.pl',
                titlePrice: '$900',
                date: '15 June 2015',
                leftTime: '30 days left',
                lasting: '10 hours',
                progress: 40,
                completedInfo: 'Design',
                imgIcon: ProfileIcon5,
                namePerfomer: 'Lyan Roach',
                post: 'UX/UI Designer',
                class: 'fa fa-ellipsis-v',
                classBorder: 'BlueBorder'
            },
            {
                titleProject: 'Landing page',
                nameCompany: 'Symu.co',
                titlePrice: '$1500',
                date: '8 August 2016',
                leftTime: '2 months left',
                lasting: '0 hours',
                progress: 0,
                completedInfo: 'Quened',
                imgIcon: ProfileIcon2,
                namePerfomer: 'Michelle Stewart',
                post: 'Account',
                class: 'fa fa-ellipsis-v',
                classBorder: 'WhiteBorder'
            },
            {
                titleProject: 'Mobile app',
                nameCompany: 'Facebook',
                titlePrice: '$4300',
                date: '5th May 2016',
                leftTime: 'Completed',
                lasting: '59 hours',
                progress: 100,
                completedInfo: 'Completed',
                imgIcon: ProfileIcon2,
                namePerfomer: 'Michelle Stewart',
                post: 'Account',
                class: 'fa fa-ellipsis-v',
                classBorder: 'GreenBorder'
            },
            {
                titleProject: 'Wordpress theme',
                nameCompany: 'Themeforest',
                titlePrice: '$1300',
                date: '2th May 2016',
                leftTime: 'Completed',
                lasting: '30 hours',
                progress: 100,
                completedInfo: 'Completed',
                imgIcon: ProfileIcon2,
                namePerfomer: 'Michelle Stewart',
                post: 'Account',
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
        render() {

        const sortList = this.userList.filter((item) =>{
            if (item.nameCompany === this.props.status){
                return item;
            }
            else if (this.props.status === 'All') {
                return true;
            }
        });

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
                        sortList.map((item,index) =>{
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
                                        <h2>{item.titleProject}</h2>
                                        <p>{item.nameCompany}</p>
                                    </td>
                                    <td className="valueProject">
                                        <h2>{item.titlePrice}</h2>
                                    </td>
                                    <td className="infoProject">
                                        <h2>{item.date}</h2>
                                        <p>{item.leftTime}</p>
                                    </td>
                                    <td className="timeProject">
                                        <h2>{item.lasting}</h2>
                                    </td>
                                    <td className="progressProject">
                                        <Progress percent={item.progress} />
                                    </td>
                                    <td className="statusProject">
                                        <h2>{item.completedInfo}</h2>
                                    </td>
                                    <td className="profileUser">
                                        <div className="userInfo">
                                            <div className="UserBlock positionBlock">
                                                <div className="IconUser">
                                                    <img src={item.imgIcon} alt="User icon"/>
                                                </div>
                                                <div className="TitleUser">
                                                    <h2>{item.namePerfomer}</h2>
                                                    <p>{item.post}</p>
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
const mapState = (state, props) => {
    return {
        status: state.status
    }
};
export default connect (mapState) (ProjectUserList);