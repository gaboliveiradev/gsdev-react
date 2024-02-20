import React from 'react';
import Logo from './../../Assets/logo.png';
import Button from './Button';

export default function Header() {
    return (
        <nav class="bg-transparent">
            <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between m-3">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span class="absolute -inset-0.5"></span>
                            <span class="sr-only">Open main menu</span>
                            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex flex-1 items-center justify-between">
                        <div class="flex flex-shrink-0 items-center">
                            <img class="h-14 w-auto" src={Logo} alt="GSDEV" />
                        </div>
                        <div class="flex justify-center items-center">
                            <div class="flex space-x-4">
                                <a href="/" class="bg-transparent text-primary-color rounded-md px-3 py-2 text-sm font-bold" aria-current="page">Início</a>
                                <a href="/" class="bg-transparent text-gray hover:text-primary-color rounded-md px-3 py-2 text-sm font-bold">Sobre</a>
                                <a href="/" class="bg-transparent text-gray hover:text-primary-color rounded-md px-3 py-2 text-sm font-bold">Serviços</a>
                                <a href="/" class="bg-transparent text-gray hover:text-primary-color rounded-md px-3 py-2 text-sm font-bold">Projetos</a>
                                <a href="/" class="bg-transparent text-gray hover:text-primary-color rounded-md px-3 py-2 text-sm font-bold">Profissional</a>
                                <a href="/" class="bg-transparent text-gray hover:text-primary-color rounded-md px-3 py-2 text-sm font-bold">Depoimentos</a>
                                <a href="/" class="bg-transparent text-gray hover:text-primary-color rounded-md px-3 py-2 text-sm font-bold">Contatos</a>
                            </div>
                        </div>
                        <div>
                            <Button>Fale Comigo</Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}