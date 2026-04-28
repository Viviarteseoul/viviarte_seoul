import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, Pause } from 'lucide-react';
import heroVideo1 from '../../imports/video-5acb0bce9a825adda2ffa07fbaa17593-1.mp4';
import heroVideo2 from '../../imports/veo-video-1775536229826.mp4';
import heroVideo3 from '../../imports/veo-video-1775536694898.mp4';
import bgmAudio from '../../imports/Marc-Andr_Hamelin_-_William_Bolcom_Three_Ghost_Rags_-_1._Graceful_Ghost_Rag_(SkySound.cc).mp3';
import { Footer } from './Footer';

const videoPlaylist = [heroVideo1, heroVideo2, heroVideo3];

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prev) => (prev + 1) % videoPlaylist.length);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentVideoIndex]);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    // Scroll container: tall enough so footer appears after scrolling
    <div style={{ position: 'relative', height: '180vh', background: 'transparent' }}>
      <audio ref={audioRef} loop>
        <source src={bgmAudio} type="audio/mpeg" />
      </audio>

      {/* Fixed video — z-index:1, inset-0 + overflow:hidden clips all internal content */}
      <div style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        overflow: 'hidden',
        zIndex: 1,
      }}>
        <motion.div
          style={{ position: 'absolute', inset: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
            }}
          >
            <source src={videoPlaylist[currentVideoIndex]} type="video/mp4" />
          </video>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }} />
        </motion.div>
      </div>

      {/* Progress indicators — z-index:20, above video */}
      <motion.div
        style={{
          position: 'fixed',
          bottom: '6rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          display: 'flex',
          gap: '0.5rem',
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        {videoPlaylist.map((_, index) => (
          <div
            key={index}
            style={{
              height: '4px',
              borderRadius: '9999px',
              transition: 'all 0.5s',
              width: index === currentVideoIndex ? '3rem' : '2rem',
              background: index === currentVideoIndex ? 'white' : 'rgba(255,255,255,0.4)',
            }}
          />
        ))}
      </motion.div>

      {/* Music button — z-index:20, above video */}
      <motion.button
        onClick={toggleAudio}
        style={{
          position: 'fixed',
          top: '5rem',
          right: '1rem',
          zIndex: 20,
          width: '3rem',
          height: '3rem',
          borderRadius: '9999px',
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <Pause style={{ width: '1.25rem', height: '1.25rem', color: 'white' }} />
        ) : (
          <Play style={{ width: '1.25rem', height: '1.25rem', color: 'white', marginLeft: '2px' }} />
        )}
      </motion.button>

      {/* Footer — z-index:30, always above video, appears when scrolled to bottom */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        zIndex: 30,
      }}>
        <Footer overlay />
      </div>
    </div>
  );
}
