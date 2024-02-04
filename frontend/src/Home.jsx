// Home.jsx
import React, { useState } from 'react';
import videoSource from './assets/newint.mp4'; // Replace with your video file
import backgroundImage from './assets/vidbg.png'; // Replace with your image file
import Navbar from './Navbar';
import BackgroundVideo from './BackgroundVideo';
import ShowImage from './ShowImage';

const Home = () => {
  const [showImage, setShowImage] = useState(false);

  const handleVideoEnd = () => {
    setShowImage(true);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {showImage ? (
        <ShowImage imageUrl={backgroundImage} />
      ) : (
        <BackgroundVideo videoSource={videoSource} onVideoEnd={handleVideoEnd} />
      )}
      <Navbar />
      {/* Additional content for your home page */}
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>
      </div>
    </div>
  );
};

export default Home;
