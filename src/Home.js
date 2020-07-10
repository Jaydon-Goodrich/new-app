import React from 'react';
import { MyCard } from './components/MyCard';
import { SmallCard } from './components/SmallCard';
import { Footer } from './components/Footer';

export const Home = () => (
    <div>
        <MyCard />
        <SmallCard />
        <Footer />
    </div>
)