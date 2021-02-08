import React from 'react';
import Content from "../Content/Content";
import Sidebar from "../Sidebar/Sidebar";

function Layout(props) {
    return (
        <>
                <Sidebar/>
                <Content/>
        </>
    );
}

export default Layout;