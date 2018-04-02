import React from 'react';
import IconImg from '../../../assets/image/profileImg-2.png';
import IconImg2 from '../../../assets/image/profileImg-4.png';
import IconImg3 from '../../../assets/image/profileImg.png';
import Sortable from 'sortablejs';
import store from '../../../redux/store';

class ProjectLists extends React.Component{
    componentDidMount(){
        var Project1 = this.firstBlock;
        var sortable = Sortable.create(Project1, {
            group: {
                name: 'Project1',
                put: ['Project2', 'Project3','Project4','Project5','Project6'],
                pull: ['Project6', 'Project5','Project4','Project3','Project2']
            },
            animation: 100
        });

        var Project2 = this.secondBlock;
        var sortable = Sortable.create(Project2, {
            group: {
                name: 'Project2',
                put: ['Project1', 'Project3','Project4','Project5','Project6'],
                pull: ['Project6', 'Project5','Project4','Project3','Project1']
            },
            animation: 100
        });

        var Project3 = this.thirdBlock;
        var sortable = Sortable.create(Project3, {
            group: {
                name: 'Project3',
                put: ['Project1', 'Project2','Project4','Project5','Project6'],
                pull: ['Project6', 'Project5','Project4','Project2','Project1']
            },
            animation: 100
        });
        var Project4 = this.fourthBlock;
        var sortable = Sortable.create(Project4, {
            group: {
                name: 'Project4',
                put: ['Project1', 'Project2','Project3','Project5','Project6'],
                pull: ['Project6', 'Project5','Project3','Project2','Project1']
            },
            animation: 100
        });
        var Project5 = this.fifthBlock;
        var sortable = Sortable.create(Project5, {
            group: {
                name: 'Project5',
                put: ['Project1', 'Project2','Project3','Project4','Project6'],
                pull: ['Project6', 'Project4','Project3','Project2','Project1']
            },
            animation: 100
        });
        var Project6 = this.sixthBlock;
        var sortable = Sortable.create(Project6, {
            group: {
                name: 'Project6',
                put: ['Project1', 'Project2','Project3','Project4','Project5'],
                pull: ['Project5', 'Project4','Project3','Project2','Project1']
            },
            animation: 100
        });
    }
    render(){
        const projectListUser =[
            {
                titleHeader: 'Quened',
                id: 'Project1',
                ref: 'firstBlock',
                price: 1500,
                classHeader: 'fa-chevron-right',
                projectList:  [
                    {
                        icon: IconImg,
                        title: 'Wordpress theme',
                        text: {
                            text1: 'Symu.co',
                            priceProject: 1500
                        },
                        class: 'fa fa-ellipsis-v'
                    }
                ]
            },
            {
                titleHeader: 'Planning',
                id: 'Project2',
                ref: 'secondBlock',
                price: 4100,
                classHeader: 'fa-chevron-right',
                projectList: [
                    {
                        icon: IconImg,
                        title: 'Landing page',
                        text: {
                            text1: 'Symu.co',
                            priceProject: 1500
                        },
                        class: 'fa fa-ellipsis-v'
                    },
                    {
                        icon: IconImg2,
                        title: 'New website',
                        text: {
                            text1: 'Symu.co',
                            priceProject: 1500
                        },
                        class: 'fa fa-ellipsis-v'
                    },
                    {
                        icon: IconImg,
                        title: 'Dashboard',
                        text: {
                            text1: 'Symu.co',
                            priceProject: 1500
                        },
                        class: 'fa fa-ellipsis-v'
                    },
                    {
                        icon: IconImg3,
                        title: 'Mobile App',
                        text: {
                            text1: 'Symu.co',
                            priceProject: 1500
                        },
                        class: 'fa fa-ellipsis-v'
                    }
                ]
            },
            {
                titleHeader: 'Design',
                id: 'Project3',
                ref: 'thirdBlock',
                price: 5200,
                classHeader: 'fa-chevron-right',
                projectList: [
                    {
                        icon: IconImg,
                        title: 'New Logo',
                        text: {
                            text1: 'Symu.co',
                            priceProject: 1500
                        },
                        class: 'fa fa-ellipsis-v'
                    },
                    {
                        icon: IconImg3,
                        title: 'New website',
                        text: {
                            text1: 'Symu.co',
                            priceProject: 1500
                        },
                        class: 'fa fa-ellipsis-v'
                    },
                    {
                        icon: IconImg,
                        title: 'New Website',
                        text: {
                            text1: 'Symu.co',
                            priceProject: 1500
                        },
                        class: 'fa fa-ellipsis-v'
                    },
                    {
                        icon: IconImg3,
                        title: 'Dashboard',
                        text: {
                            text1: 'Symu.co',
                            priceProject: 1500
                        },
                        class: 'fa fa-ellipsis-v'
                    }
                ]
            },
            {
                titleHeader: 'Development',
                id: 'Project4',
                ref: 'fourthBlock',
                price: 4200,
                classHeader: 'fa-chevron-right',
                projectList: [
                    {
                        icon: IconImg2,
                        title: 'Mobile App',
                        text: {
                            text1: 'Symu.co',
                            priceProject: 1500
                        },
                        class: 'fa fa-ellipsis-v'
                    },
                    {
                        icon: IconImg,
                        title: 'New website',
                        text: {
                            text1: 'Symu.co',
                            priceProject: 1500
                        },
                        class: 'fa fa-ellipsis-v'
                    },
                    {
                        icon: IconImg2,
                        title: 'Dashboard',
                        text: {
                            text1: 'Symu.co',
                            priceProject: 1500
                        },
                        class: 'fa fa-ellipsis-v'
                    }
                ]
            },
            {
                titleHeader: 'Testing',
                id: 'Project5',
                ref: 'fifthBlock',
                price: 1500,
                classHeader: 'fa-chevron-right',
                projectList: [
                    {
                        icon: IconImg,
                        title: 'Landing page',
                        text: {
                            text1: 'Symu.co',
                            priceProject: 1500
                        },
                        class: 'fa fa-ellipsis-v'
                    }
                ]
            },
            {
                titleHeader: 'Completed',
                id: 'Project6',
                ref: 'sixthBlock',
                price: 3700,
                classHeader: 'fa-chevron-right',
                projectList: [
                    {
                        icon: IconImg,
                        title: 'Landing page',
                        text: {
                            text1: 'Symu.co',
                            priceProject: 1500
                        },
                        class: 'fa fa-ellipsis-v'
                    },
                    {
                        icon: IconImg2,
                        title: 'New website',
                        text: {
                            text1: 'Symu.co',
                            priceProject: 1500
                        },
                        class: 'fa fa-ellipsis-v'
                    },
                    {
                        icon: IconImg,
                        title: 'Dashboard',
                        text: {
                            text1: 'Symu.co',
                            priceProject: 1500
                        },
                        class: 'fa fa-ellipsis-v'
                    }
                ]
            }
        ];
        let sumItems = 0;

        projectListUser.forEach((item)=>{
            sumItems += item.projectList.length;
        });

        store.dispatch({
            type: 'PROJECT_LENGTH',
            payload: {
                sumProject: sumItems
            }
        });

        return(
            <div className="AllProject">
                    {
                        projectListUser.map((item, index) =>{
                            let projectName;
                            let projectNumber = item.projectList.length;
                            if (projectNumber === 1){
                                projectName = 'project';
                            }
                            else if (projectNumber >1){
                                projectName = 'projects';
                            }
                            let sumaProjects = 0;
                            item.projectList.forEach(function (mapItem, mapIndex){
                                sumaProjects += mapItem.text.priceProject;
                            });
                            return(
                                <div className="WrapperList MarginList" key={index}>
                                    <header className="ListHeader">
                                        <div className="titleList">
                                            <h2>{item.titleHeader}</h2>
                                            <p>{item.projectList.length} {projectName} &bull; <span>${sumaProjects}</span></p>
                                        </div>
                                        <i className={item.classHeader + " fa"} aria-hidden="true"></i>
                                    </header>
                                    <ul className="ProjectList" id={item.id} ref={el => this[item.ref] = el}>
                                        {
                                            item.projectList.map((newItem, newIndex) =>{
                                                return(
                                                    <li className="WrapperUserBlock MarginUserBlock" key={newIndex}>
                                                        <div className="UserBlock">
                                                            <div className="IconUser">
                                                                <img src={newItem.icon} alt="User icon"/>
                                                            </div>
                                                            <div className="TitleUser">
                                                                <h3>{newItem.title}</h3>
                                                                <p>{newItem.text.text1} &bull; <span>${newItem.text.priceProject}</span></p>
                                                            </div>
                                                        </div>
                                                        <i className={newItem.class} aria-hidden="true"></i>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
            </div>
        );
    }
}

export default ProjectLists;

