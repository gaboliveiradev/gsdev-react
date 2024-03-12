import React from 'react';

export default function CardServices(props) {
    return (
        <div className='max-h-[400px] my-1 bg-white border-2 shadow-md p-6 w-[33%] rounded-md'>
            <div className='flex justify-center items-center p-3'>
                <img class="h-14 w-auto" src={props.image} alt="GSDEV" />
            </div>
            <div className='text-center text-[22px] font-bold text-gray'>
                {props.title}
            </div>
            <div className='text-left text-[18px] pt-3'>
                {props.description}
            </div>
        </div>
    );
}