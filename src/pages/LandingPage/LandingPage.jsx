import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Searchbox from '../../components/SearchBox/Searchbox';

const LandingPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Searchbox></Searchbox>
        </div>
    );
};

export default LandingPage;