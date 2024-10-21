import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Ensure this import is included
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useState, useEffect, useRef } from 'react';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const videoRef = useRef(null); // Reference for the video element

  const handleSetVideoSrc = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    // Update video source on window resize
    window.addEventListener('resize', handleSetVideoSrc);
    
    // Cleanup the event listener on unmount
    return () => window.removeEventListener('resize', handleSetVideoSrc);
  }, []);

  useGSAP(() => {
    // Initialize ScrollTrigger for the hero section
    const scrollTrigger = ScrollTrigger.create({
      trigger: '#hero',
      toggleActions: 'play pause reverse restart',
      start: '-0% bottom',
      onEnter: () => {
        videoRef.current.play(); // Play video on entering the section
      },
      
      onEnterBack: () => {
        videoRef.current.play(); // Play video again when scrolling back
      },
      
    });

    gsap.to('#cta', { opacity: 1, delay: 2, y: -50 });

    // Cleanup ScrollTrigger on component unmount
    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">iPhone 15 Pro</p>

        <div className="md:w-10/12 w-9/12">
          <video
            ref={videoRef} // Attach the videoRef
            autoPlay
            muted
            playsInline
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
        <a href="#highlights" className="btn">BUY</a>
        <p className="font-normal text-xl">Starting from Rs.1,20,000</p>
      </div>
    </section>
  );
};

export default Hero;
