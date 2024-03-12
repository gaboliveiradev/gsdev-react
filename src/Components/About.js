import React from 'react';
import CardAbout from './SmallComponents.js/CardAbout';
import about from './../Assets/about.png';

export default function About() {
    return (
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className='flex flex-col justify-center items-center'>
                <h3 className='uppercase font-bold text-secondary-color text-[20px]'>Soluções Digitais Sob Medida</h3>
                <h1 className='text-center w-[50%] font-bold text-[58px]'>Defina sua presença digital com a GS DEV</h1>
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
            <div className='pt-20 flex justify-between items-center'>
                <div className='w-[50%]'>
                    <h1 className='text-[26px] font-bold text-gray'>Personalizando o amanhã digital</h1>
                    <p className='py-2'>
                        Em 2024, a GS DEV emergiu com uma missão singular: elevar negócios em todo o Brasil ao patamar digital com sites que não só apresentam, mas performam. Especialista em e-commerce, websites corporativos e landing pages que não apenas atraem, mas convertem, a GS DEV é a força criativa por trás de soluções web que refletem a individualidade e as aspirações de cada marca, empresa ou profissional. Aqui, cada projeto é mais que uma entrega; é a materialização da sua visão digital, esculpida com precisão técnica e uma estética inovadora.
                    </p>
                </div>
                <div>
                    <img class="h-80 w-auto" src={about} alt="Imagem Decorativa" />
                </div>
            </div>
        </div>
    );
}