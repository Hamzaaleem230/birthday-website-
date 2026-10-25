"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export const MusicControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio("/audio/birthday-music.mp3");
    audioRef.current.loop = true;
    
    // Error handling
    audioRef.current.onerror = () => {
      // Silently handle missing audio to prevent console spam
      setError(null); 
    };

    // Cleanup on unmount
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((e) => {
        console.error("Playback failed:", e);
        setError("Playback failed.");
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={togglePlay}
        className="p-3 bg-[#19263A]/80 border border-[#E7C77B]/30 rounded-full hover:border-[#E7C77B] transition-all focus:outline-none focus:ring-2 focus:ring-[#E7C77B]/50"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 size={20} className="text-[#E7C77B]" />
        ) : (
          <VolumeX size={20} className="text-[#94A3B8]" />
        )}
      </button>
      {error && (
        <p className="absolute top-14 right-0 w-max text-xs text-red-400 bg-[#080D18]/90 px-2 py-1 rounded">
          {error}
        </p>
      )}
    </div>
  );
};
