import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BASE_URL, REGISTER_PATH } from "../../api/api";
import { useNavigate } from "react-router-dom";
function RegisterForm() {
    const [userInfo, setUserInfo] = useState();
    const [errorMessage, setError] = useState();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        setError("");
        setUserInfo(data);
        registerUser(
            data.username,
            data.email,
            data.password,
            data.avatar,
            data.banner
        );
    };
    const registerUser = (user, email, password, avatar, banner) => {
        submitRegister(user, email, password, avatar, banner);
    };
    async function submitRegister(name, email, password, avatar, banner) {
        const url = BASE_URL + REGISTER_PATH;
        const data = JSON.stringify({
            name: name,
            email: email,
            password: password,
            avatar: avatar,
            banner: banner,
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
                setError(json.errors[0].message);
            } else {
                navigate("/login");
                console.log(userInfo);
            }
        } catch (error) {}
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div className="">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className=" bg-[#070707] my-[0] mx-[auto] flex flex-col w-[600px] h-[100%] items-center rounded-[10px]"
            >
                <h1 className="text-center">Register</h1>
                <div className="flex flex-col w-[100%] pl-[30px] pr-[41px]">
                    <input
                        type="name"
                        {...register("username", {
                            required:
                                "Username needs to be atleast 1 character",
                            pattern: {
                                value: /^[a-zA-Z0-9_]+$/,
                                message:
                                    "The name value must not contain punctuation symbols apart from underscore (_).",
                            },
                            minLength: 1,
                        })}
                        placeholder="Username"
                    />
                    <p>{errors.username?.message}</p>
                    <input
                        type="email"
                        {...register("email", {
                            required:
                                "Needs to be a valid stud.noroff.no or noroff.no email",
                            pattern: {
                                value: /\w+([-+.]\w+)*@(stud.noroff\.no|noroff\.no)/,
                                message: "Must use a noroff email",
                            },
                        })}
                        placeholder="Your Noroff email"
                    />
                    <p>{errors.email?.message}</p>
                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message:
                                    "Password must be 8 characters or more",
                            },
                        })}
                    />
                    <p>{errors.password?.message}</p>
                    <input
                        {...register("avatar")}
                        type="url"
                        placeholder="Avatar / optional"
                    />
                    <input
                        {...register("banner")}
                        type="url"
                        placeholder="Banner / optional"
                    />
                    <p className="text-red">{errorMessage}</p>
                </div>
                <div className="mt-[14px] mb-[40px]">
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;
