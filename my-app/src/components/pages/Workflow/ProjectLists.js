import React from 'react';
import IconImg from '../../../assets/image/profileImg-2.png';
import IconImg2 from '../../../assets/image/profileImg-4.png';
import IconImg3 from '../../../assets/image/profileImg.png';

class ProjectLists extends React.Component{
    render(){
        const projectList = [
            {
                icon: IconImg,
                title: 'Wordpress theme',
                text: {
                    text1: 'Symu.co',
                    text2: '$1500'
                },
                class: 'fa fa-ellipsis-v'
            }
        ];
        const projectList2 = [
            {
                icon: IconImg,
                title: 'Landing page',
                text: {
                    text1: 'Symu.co',
                    text2: '$1500'
                },
                class: 'fa fa-ellipsis-v'
            },
            {
                icon: IconImg2,
                title: 'New website',
                text: {
                    text1: 'Symu.co',
                    text2: '$1500'
                },
                class: 'fa fa-ellipsis-v'
            },
            {
                icon: IconImg,
                title: 'Dashboard',
                text: {
                    text1: 'Symu.co',
                    text2: '$1500'
                },
                class: 'fa fa-ellipsis-v'
            },
            {
                icon: IconImg3,
                title: 'Mobile App',
                text: {
                    text1: 'Symu.co',
                    text2: '$1500'
                },
                class: 'fa fa-ellipsis-v'
            }
        ];
        const projectList3 = [
            {
                icon: IconImg,
                title: 'New Logo',
                text: {
                    text1: 'Symu.co',
                    text2: '$1500'
                },
                class: 'fa fa-ellipsis-v'
            },
            {
                icon: IconImg3,
                title: 'New website',
                text: {
                    text1: 'Symu.co',
                    text2: '$1500'
                },
                class: 'fa fa-ellipsis-v'
            },
            {
                icon: IconImg,
                title: 'New Website',
                text: {
                    text1: 'Symu.co',
                    text2: '$1500'
                },
                class: 'fa fa-ellipsis-v'
            },
            {
                icon: IconImg3,
                title: 'Dashboard',
                text: {
                    text1: 'Symu.co',
                    text2: '$1500'
                },
                class: 'fa fa-ellipsis-v'
            }
        ];
        const projectList4 = [
            {
                icon: IconImg2,
                title: 'Mobile App',
                text: {
                    text1: 'Symu.co',
                    text2: '$1500'
                },
                class: 'fa fa-ellipsis-v'
            },
            {
                icon: IconImg,
                title: 'New website',
                text: {
                    text1: 'Symu.co',
                    text2: '$1500'
                },
                class: 'fa fa-ellipsis-v'
            },
            {
                icon: IconImg2,
                title: 'Dashboard',
                text: {
                    text1: 'Symu.co',
                    text2: '$1500'
                },
                class: 'fa fa-ellipsis-v'
            }
        ];
        const projectList5 = [
            {
                icon: IconImg,
                title: 'Landing page',
                text: {
                    text1: 'Symu.co',
                    text2: '$1500'
                },
                class: 'fa fa-ellipsis-v'
            }
        ];
        const projectList6 = [
            {
                icon: IconImg,
                title: 'Landing page',
                text: {
                    text1: 'Symu.co',
                    text2: '$1500'
                },
                class: 'fa fa-ellipsis-v'
            },
            {
                icon: IconImg2,
                title: 'New website',
                text: {
                    text1: 'Symu.co',
                    text2: '$1500'
                },
                class: 'fa fa-ellipsis-v'
            },
            {
                icon: IconImg,
                title: 'Dashboard',
                text: {
                    text1: 'Symu.co',
                    text2: '$1500'
                },
                class: 'fa fa-ellipsis-v'
            }
        ];
        return(
            <div className="AllProject">
                <div className="WrapperList MarginList">
                    <header className="ListHeader">
                        <div className="titleList">
                            <h2>Quened</h2>
                            <p>1 project &bull; <span>$1500</span></p>
                        </div>
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </header>
                    <ul className="ProjectList">
                        {
                            projectList.map((item, index) =>{
                                return(
                                    <li className="WrapperUserBlock MarginUserBlock" key={index}>
                                        <div className="UserBlock">
                                            <div className="IconUser">
                                                <img src={item.icon} alt="User icon"/>
                                            </div>
                                            <div className="TitleUser">
                                                <h3>{item.title}</h3>
                                                <p>{item.text.text1} &bull; <span>{item.text.text2}</span></p>
                                            </div>
                                        </div>
                                        <i className={item.class} aria-hidden="true"></i>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="WrapperList MarginList">
                    <header className="ListHeader">
                        <div className="titleList">
                            <h2>Planning</h2>
                            <p>4 project &bull; <span>$4100</span></p>
                        </div>
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </header>
                    <ul className="ProjectList">
                        {
                            projectList2.map((item, index) =>{
                                return(
                                    <li className="WrapperUserBlock MarginUserBlock" key={index}>
                                        <div className="UserBlock">
                                            <div className="IconUser">
                                                <img src={item.icon} alt="User icon"/>
                                            </div>
                                            <div className="TitleUser">
                                                <h3>{item.title}</h3>
                                                <p>{item.text.text1} &bull; <span>{item.text.text2}</span></p>
                                            </div>
                                        </div>
                                        <i className={item.class} aria-hidden="true"></i>
                                    </li>
                                )}
                            )
                        }
                    </ul>
                </div>

                <div className="WrapperList MarginList">
                    <header className="ListHeader">
                        <div className="titleList">
                            <h2>Design</h2>
                            <p>4 project &bull; <span>$5200</span></p>
                        </div>
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </header>
                    <ul className="ProjectList">
                        {
                            projectList3.map((item, index) =>{
                                return(
                                    <li className="WrapperUserBlock MarginUserBlock" key={index}>
                                        <div className="UserBlock">
                                            <div className="IconUser">
                                                <img src={item.icon} alt="User icon"/>
                                            </div>
                                            <div className="TitleUser">
                                                <h3>{item.title}</h3>
                                                <p>{item.text.text1} &bull; <span>{item.text.text2}</span></p>
                                            </div>
                                        </div>
                                        <i className={item.class} aria-hidden="true"></i>
                                    </li>
                                )}
                            )
                        }
                    </ul>
                </div>

                <div className="WrapperList MarginList">
                    <header className="ListHeader">
                        <div className="titleList">
                            <h2>Development</h2>
                            <p>4 project &bull; <span>$4200</span></p>
                        </div>
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </header>
                    <ul className="ProjectList">
                        {
                            projectList4.map((item, index) =>{
                                return(
                                    <li className="WrapperUserBlock MarginUserBlock" key={index}>
                                        <div className="UserBlock">
                                            <div className="IconUser">
                                                <img src={item.icon} alt="User icon"/>
                                            </div>
                                            <div className="TitleUser">
                                                <h3>{item.title}</h3>
                                                <p>{item.text.text1} &bull; <span>{item.text.text2}</span></p>
                                            </div>
                                        </div>
                                        <i className={item.class} aria-hidden="true"></i>
                                    </li>
                                )}
                            )
                        }
                    </ul>
                </div>

                <div className="WrapperList MarginList">
                    <header className="ListHeader">
                        <div className="titleList">
                            <h2>Testing</h2>
                            <p>1 project &bull; <span>$1500</span></p>
                        </div>
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </header>
                    <ul className="ProjectList">
                        {
                            projectList5.map((item, index) =>{
                                return(
                                    <li className="WrapperUserBlock MarginUserBlock" key={index}>
                                        <div className="UserBlock">
                                            <div className="IconUser">
                                                <img src={item.icon} alt="User icon"/>
                                            </div>
                                            <div className="TitleUser">
                                                <h3>{item.title}</h3>
                                                <p>{item.text.text1} &bull; <span>{item.text.text2}</span></p>
                                            </div>
                                        </div>
                                        <i className={item.class} aria-hidden="true"></i>
                                    </li>
                                )}
                            )
                        }
                    </ul>
                </div>

                <div className="WrapperList MarginList">
                    <header className="ListHeader">
                        <div className="titleList">
                            <h2>Completed</h2>
                            <p>3 project &bull; <span>$3700</span></p>
                        </div>
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </header>
                    <ul className="ProjectList">
                        {
                            projectList6.map((item, index) =>{
                                return(
                                    <li className="WrapperUserBlock MarginUserBlock" key={index}>
                                        <div className="UserBlock">
                                            <div className="IconUser">
                                                <img src={item.icon} alt="User icon"/>
                                            </div>
                                            <div className="TitleUser">
                                                <h3>{item.title}</h3>
                                                <p>{item.text.text1} &bull; <span>{item.text.text2}</span></p>
                                            </div>
                                        </div>
                                        <i className={item.class} aria-hidden="true"></i>
                                    </li>
                                )}
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
export default ProjectLists;