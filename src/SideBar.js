import React from 'react';

const SideBar = (props) => {

    return (
        <div
            style={{
                backgroundImage: "linear-gradient(rgb(58, 91, 95), rgb(6, 9, 10) 85%"
            }}
            className="w1-3 h-screen border-2 m-2 p-10 border-black" >
            {props.children}
        </div>
    );
};

export default SideBar;