import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, Pause } from 'lucide-react';
import heroVideo1 from '../../imports/video-5acb0bce9a825adda2ffa07fbaa17593-1.mp4';
import heroVideo2 from '../../imports/veo-video-1775536229826.mp4';
import heroVideo3 from '../../imports/veo-video-1775536694898.mp4';
import bgmAudio from '../../imports/Marc-Andr_Hamelin_-_William_Bolcom_Three_Ghost_Rags_-_1._Graceful_Ghost_Rag_(SkySound.cc).mp3';

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
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100dvh',
      overflow: 'hidden',
      backgroundColor: '#000',
    }}>
      <audio ref={audioRef} loop>
        <source src={bgmAudio} type="audio/mpeg" />
      </audio>

      {/* Video fills section — object-fit:cover centers the crop automatically */}
      <motion.video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100dvw',
          height: '100dvh',
          objectFit: 'cover',
          objectPosition: '55% center',
        }}
      >
        <source src={videoPlaylist[currentVideoIndex]} type="video/mp4" />
      </motion.video>

      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)', zIndex: 1 }} />

      {/* Music button */}
      <motion.button
        onClick={toggleAudio}
        style={{
          position: 'absolute',
          top: '5rem',
          right: '1rem',
          zIndex: 10,
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
    </div>
  );
}
