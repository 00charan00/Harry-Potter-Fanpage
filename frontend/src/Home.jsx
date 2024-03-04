import React from 'react';
import Navbar from './Navbar';
import bgimg from "./assets/vidbg.png";

const Home = () => {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <div className="relative flex-1 flex items-center justify-center">
                <img
                    src={bgimg}
                    alt="background"
                    className="absolute inset-0 w-full h-full object-cover glow-animation animate-brightness-increase"
                />
            </div>
        </div>
    );
};

export default Home;
