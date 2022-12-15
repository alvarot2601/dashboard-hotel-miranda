import React from "react";
import Nav from "./Nav";
import Aside from "./Aside";
import { Outlet } from "react-router";
const Root = () => {
    return (
        <>
            <Nav />
            <Aside/>
        </>
    );
}
export default Root;