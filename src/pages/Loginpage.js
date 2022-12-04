import React from "react";
import Form from "../components/login/LoginForm";
import Navigationbar from "../components/Navigationbar";

function Loginpage() {
    document.title = 'Login Page'
    return (
        <div className="px-[70px]">
            <Navigationbar />
            <Form />
        </div>
    );
}

export default Loginpage;
