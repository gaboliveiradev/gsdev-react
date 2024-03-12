import React from 'react';
import Header from '../Components/SmallComponents.js/Header';
import Start from '../Components/Start';
import ParticlesBackground from '../Components/SmallComponents.js/ParticlesBackground';
import About from '../Components/About';
import Services from '../Components/Services';

export default function Home() {
    return (
        <main>
            <ParticlesBackground />
            <header className='min-h-screen'>
                <section>
                    <Header />
                </section>
                <section>
                    <Start />
                </section>
            </header>
            <section>
                <About />
            </section>
            <section>
                <Services />
            </section>
        </main>
    )
}