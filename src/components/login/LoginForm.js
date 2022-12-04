import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { saveToken, saveUser, saveAvatar } from "../storage/Storage";
import { BASE_URL, TOKEN_PATH } from "../../api/api";
import { useNavigate } from "react-router-dom";
function Form() {
    const navigate = useNavigate();
    const [errorMessage, setError] = useState();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        login(data.email, data.password);
    };

    function login(userEmail, userPassword) {
        setError("");
        submitLogin(userEmail, userPassword);
    }

    async function submitLogin(email, password) {
        const url = BASE_URL + TOKEN_PATH;
        const data = JSON.stringify({
            email: email,
            password: password,
        });
        const headers = {
            method: "POST",
            body: data,
            headers: {
                "Content-Type": "application/json",
            },
        };
        try {
            const res = await fetch(url, headers);
            const json = await res.json();
            console.log(json);
            if (json.errors) {
                console.log("wrong password");
                setError("Wrong Password or email");
            } else {
                saveToken(json.accessToken);
                saveUser(json.name);
                saveAvatar(json.avatar)
                navigate("/");
                console.log("right password");
            }
        } catch (error) {}
    }

    return (
        <div className="mt-[70px]">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className=" my-[0] mx-[auto] flex flex-col w-[100%] max-w-[600px] h-[100%] items-center rounded-[10px]"
            >
                <h1 className="text-center">Login</h1>
                <div className="flex flex-col w-[100%] pl-[30px] pr-[41px]">
                    <input
                        {...register("email", { required: true })}
                        type="email"
                        placeholder="Your Noroff email"
                    />
                    <p>
                        {errors.email?.type == "required" &&
                            "Email is required"}
                    </p>
                    <input
                        {...register("password", { required: true })}
                        type="password"
                        placeholder="Password"
                    />
                    <p>
                        {errors.password?.type == "required" &&
                            "password is required"}
                    </p>
                </div>
                <div className="flex flex-col md:flex-row  mt-[14px] mb-[40px]">
                    <button type="submit" className="mx-[auto] md:mr-[19px]">
                        Login
                    </button>
                    <button className="mt-[14px] md:mt-[0px]">Register</button>
                </div>
                <p>{errorMessage}</p>
            </form>
        </div>
    );
}

export default Form;
