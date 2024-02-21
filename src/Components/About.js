import React from 'react';
import CardAbout from './SmallComponents.js/CardAbout';

export default function About() {
    return (
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className='flex flex-col justify-center items-center'>
                <h3 className='uppercase font-bold text-secondary-color text-[20px]'>Soluções Digitais Sob Medida</h3>
                <h1 className='text-center w-[50%] font-bold text-[48px]'>Defina sua presença digital com a GS DEV</h1>
            </div>
            <div className='pt-6 flex flex-wrap justify-between items-center'>
                <CardAbout
                    quantity={10}
                    title='Sistes criados do ZERO'
                    description='Soluções web feitas sob medida, cada uma delas uma vitrine digital do seu negócio.'
                />
                <CardAbout
                    quantity={5}
                    title='Projetos Concluídos'
                    description='Executados com maestria em diversas tecnologias e plataformas.'
                />
                <CardAbout
                    quantity={28}
                    title='Clientes Satisfeitos'
                    description='Pelo mundo com suas expectativas superadas e suas marcas fortalecidas.'
                />
            </div>
        </div>
    );
}