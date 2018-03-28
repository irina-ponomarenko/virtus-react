import React from 'react';
import IconImg from '../../../assets/image/profileImg-2.png';
import IconImg2 from '../../../assets/image/profileImg-4.png';
import IconImg3 from '../../../assets/image/profileImg.png';

class ProjectLists extends React.Component{
    render(){
        const projectListUser =[
            {
                titleHeader: 'Quened',
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
                            return(
                                <div className="WrapperList MarginList" key={index}>
                                    <header className="ListHeader">
                                        <div className="titleList">
                                            <h2>{item.titleHeader}</h2>
                                            <p>{item.projectList.length} {projectName} &bull; <span>${item.price}</span></p>
                                        </div>
                                        <i className={item.classHeader + " fa"} aria-hidden="true"></i>
                                    </header>
                                    <ul className="ProjectList">
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

