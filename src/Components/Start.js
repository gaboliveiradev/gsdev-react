import React from 'react';
import image from './../Assets/3.png';

export default function Start() {
    return (
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className='flex flex-wrap justify-between items-center pt-20'>
                <div>
                    <img class="h-50 w-auto" src={image} alt="Imagem Decorativa" />
                </div>
                <div className='w-[50%]'>
                    <h1 className='text-[48px] font-bold'>Transformando ideias em realidade digital</h1>
                    <p className='py-6 text-[22px] text-gray-ligth'>Inicie seu sucesso online com a GS DEV, uma empresa inovadora de desenvolvimento de software dedicada a transformar ideias em soluções digitais de excelência.</p>
                </div>
            </div>
        </div>
    );
}