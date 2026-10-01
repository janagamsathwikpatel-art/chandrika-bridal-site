"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause, ChevronDown } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(Math.max(scrollY / (windowHeight * 1.5), 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section id="hero" className="relative h-[220vh] md:h-[280vh] w-screen bg-[#fbfaf8]">
      <div className="sticky top-0 left-0 w-screen h-screen overflow-hidden flex flex-col justify-center items-center">
        {/* Full-bleed background cinematic video */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <video
            ref={videoRef}
            src="/videos/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover pointer-events-none transition-transform duration-700 ease-out"
            style={{
              transform: `scale(${1 + scrollProgress * 0.15})`,
              filter: `brightness(${0.92 - scrollProgress * 0.25})`,
            }}
          />
          {/* Subtle editorial warm gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/50 pointer-events-none" />
        </div>

        {/* Floating Controls (Sound & Playback) */}
        <div className="absolute bottom-8 right-8 z-30 flex items-center gap-3">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause Video" : "Play Video"}
            className="p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all duration-300 border border-white/30"
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute Video" : "Mute Video"}
            className="p-3 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-all duration-300 border border-white/30"
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        </div>

        {/* Typography — positioned left-center matching reference screenshot */}
        <div
          className="relative z-20 select-none pointer-events-none w-full"
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: `translateY(calc(-50% - ${scrollProgress * 60}px))`,
            opacity: Math.max(0, 1 - scrollProgress * 1.2),
            paddingLeft: "clamp(24px, 6vw, 100px)",
          }}
        >
          <h1
            style={{ lineHeight: 0.88, margin: 0, padding: 0, letterSpacing: "-0.01em" }}
            className="title text-white drop-shadow-md"
          >
            <span style={{ display: "block", textAlign: "left" }} className="text-white">
              A NEW
            </span>
            <span style={{ display: "block", textAlign: "left" }} className="text-white">
              CHAPTER
            </span>
            <span
              style={{
                display: "block",
                textAlign: "left",
                paddingLeft: "clamp(40px, 8vw, 180px)",
                fontStyle: "italic",
                fontFamily: "Georgia, serif",
                textTransform: "lowercase",
                fontSize: "0.85em",
                letterSpacing: "0.01em",
                fontWeight: 400,
                color: "rgba(255,255,255,0.92)",
              }}
            >
              begins
            </span>
          </h1>

          <p
            style={{
              marginTop: "28px",
              fontSize: "clamp(10px, 1vw, 13px)",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              fontWeight: 300,
              color: "rgba(255,255,255,0.80)",
              maxWidth: "420px",
              opacity: Math.max(0, 1 - scrollProgress * 1.5),
            }}
          >
            Modern wedding dresses defined by clean lines, sculpted form, and understated luxury.
          </p>
        </div>

        {/* Scroll Indicator Prompt */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-300"
          style={{ opacity: Math.max(0, 1 - scrollProgress * 3) }}
        >
          <span className="text-[10px] tracking-[0.25em] text-white/75 uppercase font-medium">
            Scroll to Discover
          </span>
          <ChevronDown className="w-4 h-4 text-white/70 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
