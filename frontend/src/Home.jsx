import React from 'react';
import Navbar from './Navbar';
import bgimg from "./assets/vidbg.png";

const Home = () => {
    return (
        <div className="relative w-screen h-screen overflow-hidden">
            <Navbar />
            <div className="absolute inset-0 flex justify-center items-center">
                <img src={bgimg} alt="Hogwarts Letter" className="object-cover w-full h-full" />
            </div>
        </div>
    );
};

export default Home;
