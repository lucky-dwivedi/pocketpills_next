import React, { useState, useEffect } from 'react'
import Header from './components/homepage/Header';
import Navigator from './components/homepage/Navigator';
import Navigator2 from './components/homepage/Navigator2';
//import Footer from './common/Footer';
import Navigator3 from './components/homepage/Navigator3';

export default function HomePage() {
        
    return (
        <>
            <Header/>
            <Navigator/>
            <Navigator2/>
            <Navigator3/>
        </>
    )
}
