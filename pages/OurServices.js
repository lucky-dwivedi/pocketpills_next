import React from 'react'
import Header from './common/Header';
import Footer from './common/Footer';
import Navigator from './components/ourservices/Navigator';
import Navigator2 from './components/ourservices/Navigator2';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import Navigator from '../common/Navigator';
//import Navigator from './secondpage/Navigator';
//import Navigator2 from './secondpage/Navigator2';
//import Footer from '../common/Footer';
//import Navigator3 from './secondpage/Navigator3';

export default function OurServices() {
    return (
        <>
            <Header/>
            <Navigator/>
            <Navigator2/>
            <Footer/>
        </>
    )
}
