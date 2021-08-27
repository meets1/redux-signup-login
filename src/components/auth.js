import React from "react";
import { Redirect, Route } from "react-router-dom";
import mainpage from "./mainpage";

function ProtectedRoute({ component: Component, ...restOfProps }) {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    console.log("AUTH TRUE");

    return (
        <Route
            {...restOfProps}
            render={() =>
                isAuthenticated ? <Route to='/welcome' component={mainpage} /> : <Redirect to="/" />
            }
        />
    );
}

export default ProtectedRoute;