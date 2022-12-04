import React from "react";

function Card(props) {
    return (
        <div className="flex flex-col items-center h-[100%] w-[320px] rounded-[10px] bg-[#070707] py-[45px] bg-[#1A1919] mb-[70px] ">
            <div className="flex justify-center ">
                <img className="w-[50px]" src={props.image} />
            </div>
            <h3 className="text-[20px] pt-[20px]  max-w-[145px] text-center font-bold">
                {props.title}
            </h3>
            <p className="max-w-[200px] pt-[20px] text-center text-[16px]">
                {props.description}
            </p>
        </div>
    );
}

export default Card;
