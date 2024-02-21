import React from 'react';

export default function CardAbout(props) {
    return (
        <div className='border-2 p-3 w-[33%] rounded-md'>
            <div className='font-bold text-[58px] text-center text-primary-color'>
                + de {props.quantity}
            </div>
            <div className='text-center text-[24px] font-bold text-gray'>
                {props.title}
            </div>
            <div className='text-center text-[18px] pt-3'>
                {props.description}
            </div>
        </div>
    );
}