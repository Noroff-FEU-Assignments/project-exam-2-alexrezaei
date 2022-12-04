import React from "react";
import { getToken } from "./storage/Storage";
import { useNavigate } from "react-router-dom";
function Hero() {
    const navigate = useNavigate();
    const token = getToken();

    const redirectForLogin = () => {
        if(token.length < 1) {
            navigate("/login")
        } else {
            navigate("/")
        }
    }

    const redirectForRegister = () => {
        if(token.length < 1) {
            navigate("/register")
        } else {
            navigate("/")
        }
    }
    return (
        <div className="">
            <div
                className="w-full mt-11 h-[430px] rounded-[10px] bg-center bg-cover bg-[url('assets/prateek-katyal-xv7-GlvBLFw-unsplash.jpg')]
        flex flex-col align items-center"
            >
                <h1 className="mt-11 max-w-[590px] text-center">
                    Try out Social you today!
                </h1>
                <div className="mt-11 flex flex-col items-center sm:flex-row">
                    <button onClick={redirectForLogin} className="mr-[10px] mb-[20px] sm:mr-[37px] sm:mb-[0px]">Login</button>
                    <button onClick={redirectForRegister}>signup</button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
