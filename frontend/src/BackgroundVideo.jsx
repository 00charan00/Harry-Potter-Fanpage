// BackgroundVideo.jsx
import React, { useRef, useEffect } from 'react';

const BackgroundVideo = ({ videoSource, onVideoEnd }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => {
      video.pause();
      video.currentTime = 0;
      if (onVideoEnd) {
        onVideoEnd();
      }
    };

    video.addEventListener('ended', handleVideoEnd);

    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, [onVideoEnd]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      className="absolute inset-0 object-cover w-full h-full"
    >
      <source src={videoSource} type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
