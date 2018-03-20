import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TopMenu from '../pages/Menu/TopMenu';

const DefaultLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => {
            const checkLogin = localStorage.getItem('checkLogin');
            if (checkLogin === 'logged') {
                return (
                    <div className="Wrapper">
                        <TopMenu history={matchProps.history} />
                        <Component {...matchProps} />
                    </div>
                );
            }
            else {
                return <Redirect to = "/Login"/>
            }
        }} />
    )
};

export default DefaultLayout;