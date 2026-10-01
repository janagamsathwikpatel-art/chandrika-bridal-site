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
    <section id="hero" style={{ position: "relative", width: "100vw", height: "220vh", background: "#fbfaf8" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* ── Full-bleed Video ── */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden" }}>
          <video
            ref={videoRef}
            src="/videos/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              pointerEvents: "none",
              transform: `scale(${1 + scrollProgress * 0.1})`,
              filter: `brightness(${Math.max(0.55, 0.9 - scrollProgress * 0.3)})`,
            }}
          />
          {/* Dark gradient overlay — stronger at top & bottom */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.12) 40%, rgba(0,0,0,0.55) 100%)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* ── Controls (play / mute) ── */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 32,
            zIndex: 30,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          {[
            { onClick: togglePlay, label: isPlaying ? "Pause" : "Play", icon: isPlaying ? <Pause size={14} /> : <Play size={14} /> },
            { onClick: toggleMute, label: isMuted ? "Unmute" : "Mute", icon: isMuted ? <VolumeX size={14} /> : <Volume2 size={14} /> },
          ].map(({ onClick, label, icon }) => (
            <button
              key={label}
              onClick={onClick}
              aria-label={label}
              style={{
                padding: 12,
                background: "rgba(255,255,255,0.18)",
                border: "1px solid rgba(255,255,255,0.35)",
                borderRadius: "50%",
                color: "#fff",
                cursor: "pointer",
                backdropFilter: "blur(8px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s",
              }}
            >
              {icon}
            </button>
          ))}
        </div>

        {/* ── Typographic Centrepiece ── */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            transform: `translateY(calc(-50% - ${scrollProgress * 50}px))`,
            opacity: Math.max(0, 1 - scrollProgress * 1.15),
            zIndex: 20,
            pointerEvents: "none",
            userSelect: "none",
            paddingLeft: "clamp(20px, 5vw, 90px)",
            paddingRight: "clamp(20px, 5vw, 60px)",
          }}
        >
          {/* Big headline */}
          <div
            className="hero-title"
            style={{ color: "#fff", textShadow: "0 2px 20px rgba(0,0,0,0.35)" }}
          >
            {/* A NEW */}
            <div style={{ display: "block", lineHeight: "inherit" }}>A NEW</div>

            {/* CHAPTER */}
            <div style={{ display: "block", lineHeight: "inherit" }}>CHAPTER</div>

            {/* begins — italic serif, indented */}
            <div
              style={{
                display: "block",
                lineHeight: "inherit",
                paddingLeft: "clamp(36px, 7vw, 160px)",
                fontStyle: "italic",
                fontFamily: "Georgia, 'Times New Roman', serif",
                textTransform: "lowercase",
                fontSize: "0.82em",
                letterSpacing: "0.01em",
                fontWeight: 400,
                color: "rgba(255,255,255,0.93)",
              }}
            >
              begins
            </div>
          </div>

          {/* Subtitle */}
          <p
            style={{
              marginTop: "clamp(16px, 2.5vh, 32px)",
              fontSize: "clamp(10px, 1.1vw, 13px)",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              fontWeight: 300,
              color: "rgba(255,255,255,0.78)",
              maxWidth: 440,
              lineHeight: 1.6,
              opacity: Math.max(0, 1 - scrollProgress * 1.6),
            }}
          >
            Modern wedding dresses defined by clean lines,&nbsp;sculpted form, and understated luxury.
          </p>
        </div>

        {/* ── Scroll Indicator ── */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            pointerEvents: "none",
            opacity: Math.max(0, 1 - scrollProgress * 4),
          }}
        >
          <span
            style={{
              fontSize: 10,
              letterSpacing: "0.25em",
              color: "rgba(255,255,255,0.72)",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Scroll to Discover
          </span>
          <ChevronDown
            size={16}
            color="rgba(255,255,255,0.65)"
            style={{ animation: "bounce 1.5s infinite" }}
          />
        </div>
      </div>
    </section>
  );
}
