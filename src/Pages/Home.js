import React from 'react';
import Header from '../Components/SmallComponents.js/Header';
import Start from '../Components/Start';
import ParticlesBackground from '../Components/SmallComponents.js/ParticlesBackground';

export default function Home() {
    return (
        <main>
            <ParticlesBackground />
            <section>
                <Header />
            </section>
            <section>
                <Start />
            </section>
        </main>
    )
}