import React from 'react'
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { BASE_URL } from "../../api/api";
import { getUser, getToken } from "../storage/Storage"
function UpdateMedia(props) {
    const user = getUser()
    const token = getToken()
    const regex = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
    let avatar = ""
    let banner = ""
    const onSubmit = (data) => {
        avatar = data.avatar;
        banner = data.banner;
        submitUpdate(avatar, banner)
    }
    async function submitUpdate (avatar, banner) {
        const url = BASE_URL + "/social/profiles/" + user + "/media"
        const data = JSON.stringify({
            avatar: avatar,
            banner: banner,
        });
        const headers = {
            method: "PUT",
            body: data,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },

        };

        try {
            const res = await fetch(url, headers)
            const json = await res.json()
        }catch{}
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='my-[0] mx-[auto] flex flex-col w-[100%] max-w-[600px] h-[100%] items-center rounded-[10px]'>
                <div className='flex flex-col w-[100%] pl-[30px] pr-[41px]'>
                    <input {...register("avatar", {pattern: {
                        value: regex,
                        message: "needs to be a full link"
                    }})} type="text"  placeholder="Avatar / optional" />
                    <p>{errors.avatar?.message}</p>
                    <input {...register("banner")} type="text" placeholder="Banner / optional" />
                </div>
                <div className='flex flex-col items-center mt-[24px]'>
                    <button>Update</button>
                </div>
            </form>
        </div>
  )
}

export default UpdateMedia