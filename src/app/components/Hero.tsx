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
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);

  const handleVideoEnd = () => {
    // Move to next video in playlist
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoPlaylist.length);
  };

  useEffect(() => {
    // Play the new video when index changes
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(error => {
        console.log("Video play prevented:", error);
      });
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
      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src={bgmAudio} type="audio/mpeg" />
      </audio>

      {/* Fullscreen Video Background - Fixed to viewport height */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
          onEnded={handleVideoEnd}
        >
          <source src={videoPlaylist[currentVideoIndex]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </motion.div>

      {/* Video Progress Indicators */}
      <motion.div
        className="fixed bottom-24 sm:bottom-32 left-1/2 -translate-x-1/2 z-50 flex gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        {videoPlaylist.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentVideoIndex
                ? 'w-12 bg-white'
                : 'w-8 bg-white/40'
            }`}
          />
        ))}
      </motion.div>

      {/* Music Control Button */}
      <motion.button
        onClick={toggleAudio}
        className="fixed top-20 sm:top-32 right-4 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:bg-white/20 hover:scale-110 group"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Pause className="w-5 h-5 text-white transition-transform group-hover:scale-110" />
        ) : (
          <Play className="w-5 h-5 text-white ml-0.5 transition-transform group-hover:scale-110" />
        )}
      </motion.button>

      {/* Footer overlay on Hero image */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <Footer overlay />
      </div>
    </div>
  );
}