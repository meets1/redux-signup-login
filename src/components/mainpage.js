import React from 'react'

const mainpage = () => {
    const handleLogout = () => {
        localStorage.clear();
        window.location.pathname = "/";
    };
    return (
        <div className="test">
            <h1>Welcome User</h1>
            <button className="btn btn-primary" onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}

export default mainpage
