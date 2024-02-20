import React from 'react';
import Header from '../Components/SmallComponents.js/Header';
import Start from '../Components/Start';

export default function Home() {
    return (
        <main>
            <section>
                <Header />
            </section>
            <section>
                <Start />
            </section>
        </main>
    )
}