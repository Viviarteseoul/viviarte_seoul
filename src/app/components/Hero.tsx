import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, Pause } from 'lucide-react';
import { Footer } from './Footer';
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
    <div className="h-[220vh] md:h-[150vh] bg-black relative">
      <audio ref={audioRef} loop>
        <source src={bgmAudio} type="audio/mpeg" />
      </audio>

      {/* Fixed video — always fills viewport; tall container provides scroll space */}
      <motion.div
        style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '100dvh', overflow: 'hidden', zIndex: 0 }}
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
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '47% center' }}
        >
          <source src={videoPlaylist[currentVideoIndex]} type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.3)' }} />
      </motion.div>

      {/* Music button — fixed, opacity-only animation (no x offset to prevent iOS overflow) */}
      <motion.button
        onClick={toggleAudio}
        className="fixed top-20 sm:top-32 right-4 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white" />
        ) : (
          <Play className="w-5 h-5 text-white ml-0.5" />
        )}
      </motion.button>

      {/* Footer overlay — sits at the bottom of the 220vh scroll container */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <Footer overlay />
      </div>
    </div>
  );
}
