import React from 'react';

export default function Button({children}) {
    return (
        <button className="hover:text-white hover:bg-primary-color uppercase font-bold text-primary-color border-2 py-3 px-6 border-primary-color text-[12px] rounded-md">
            {children}
        </button>
    );
}