import React from 'react';
import CardServices from './SmallComponents.js/CardServices';

import createWebsite from './../Assets/Icons/create-website.png';
import advancedCustomize from './../Assets/Icons/advanced-customize.png';
import eccommerce from './../Assets/Icons/eccommerce.png';
import otimizeWebsite from './../Assets/Icons/otimize-website.png';
import seoCustom from './../Assets/Icons/seo-custom.png';
import supportTechnic from './../Assets/Icons/support-technic.png';

export default function Services() {
    return (
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className='flex flex-col justify-end pt-20'>
                <h3 className='uppercase font-bold text-secondary-color text-[20px] text-right'>Serviços integrados para impulsionar seu negócio</h3>
                <div className='flex justify-end items-center'>
                    <h1 className='w-[50%] text-right font-bold text-[58px]'>Soluções completas para seu negócio</h1>
                </div>
            </div>
            <div className='pt-6 flex flex-wrap justify-between items-center'>
                <CardServices
                    image={createWebsite}
                    title='Criação de Sites Personalizados'
                    description='Desenvolvimento de sites sob medida para atender às suas necessidades exclusivas, com alta qualidade.'
                />
                <CardServices
                    image={otimizeWebsite}
                    title='Otimização de Sites'
                    description='Melhoria do desempenho e velocidade do seu site para uma experiência melhor do usuário.'
                />
                <CardServices
                    image={advancedCustomize}
                    title='Customizações Avançadas'
                    description='Personalizações avançadas para atender às suas necessidades específicas e deixar o projeto do seu jeito.'
                />
                 <CardServices
                    image={supportTechnic}
                    title='Suporte Técnico'
                    description='Suporte técnico especializado para manter seu site funcionando sem nenhum problema.'
                />
                <CardServices
                    image={seoCustom}
                    title='SEO Personalizado'
                    description='Estratégias de SEO adaptadas para melhorar a visibilidade do seu site e alcançar maior público.'
                />
                <CardServices
                    image={eccommerce}
                    title='Desenvolvimento de E-commerce'
                    description='Criação de lojas online completas e personalizadas especialmentes para seus produtos ou serviços.'
                />
            </div>
        </div>
    );
}