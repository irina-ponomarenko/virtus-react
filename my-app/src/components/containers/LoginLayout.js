import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const DefaultLoginLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => {
            const checkLogin = localStorage.getItem('checkLogin');
            if (checkLogin === 'logged') {
                return (
                    <Redirect to = "/"/>
                );
            }
            else {
                return (
                    <div className="Wrapper">
                        <Component {...matchProps} />
                    </div>
                )
            }
        }} />
    )
};

export default DefaultLoginLayout;