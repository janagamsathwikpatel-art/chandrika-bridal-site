"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Play, Pause, ChevronDown } from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

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

  const scrollToNext = () => {
    const nextSection = document.getElementById("experience");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      style={{ 
        position: "relative", 
        width: "100vw", 
        height: "100vh", 
        minHeight: "100vh",
        overflow: "hidden",
        backgroundColor: "#000000"
      }}
    >
      {/* ── Full-bleed Background Video ── */}
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
            filter: "brightness(0.88)",
          }}
        />
        {/* Cinematic gradient overlay matching reference screenshot */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.2) 65%, rgba(0,0,0,0.6) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* ── Center Typography in Middle of Hero Page ── */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 20,
          pointerEvents: "none",
          userSelect: "none",
          width: "100%",
          maxWidth: "1100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <h1
          className="hero-title"
          style={{
            color: "#ffffff",
            textShadow: "0 2px 28px rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            margin: 0,
            padding: 0,
            letterSpacing: "-0.01em",
          }}
        >
          {/* A NEW */}
          <span style={{ display: "block", textAlign: "center", width: "100%" }}>
            A NEW
          </span>

          {/* CHAPTER */}
          <span style={{ display: "block", textAlign: "center", width: "100%" }}>
            CHAPTER
          </span>

          {/* begins */}
          <span
            style={{
              display: "block",
              textAlign: "center",
              fontStyle: "italic",
              fontFamily: "Georgia, 'Times New Roman', serif",
              textTransform: "lowercase",
              fontSize: "0.85em",
              letterSpacing: "0.01em",
              fontWeight: 400,
              color: "rgba(255,255,255,0.96)",
              marginTop: "-4px",
            }}
          >
            begins
          </span>
        </h1>

        {/* Subtitle centered in middle */}
        <p
          style={{
            marginTop: "24px",
            fontSize: "clamp(10px, 1.1vw, 13px)",
            letterSpacing: "0.26em",
            textTransform: "uppercase",
            fontWeight: 300,
            color: "rgba(255,255,255,0.85)",
            maxWidth: 520,
            lineHeight: 1.65,
            textAlign: "center",
            textShadow: "0 1px 10px rgba(0,0,0,0.6)",
          }}
        >
          Modern wedding dresses defined by clean lines, sculpted form, and understated luxury.
        </p>
      </div>

      {/* ── Scroll To Discover (Centered at Bottom) ── */}
      <div
        onClick={scrollToNext}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 25,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          cursor: "pointer",
          pointerEvents: "auto",
        }}
      >
        <span
          style={{
            fontSize: 10,
            letterSpacing: "0.25em",
            color: "rgba(255,255,255,0.75)",
            textTransform: "uppercase",
            fontWeight: 500,
            userSelect: "none",
          }}
        >
          Scroll to Discover
        </span>
        <ChevronDown
          size={16}
          color="rgba(255,255,255,0.7)"
          style={{ animation: "bounce 1.5s infinite" }}
        />
      </div>

      {/* ── Floating Play / Mute Controls (Bottom Right) ── */}
      <div
        style={{
          position: "absolute",
          bottom: 28,
          right: 28,
          zIndex: 30,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        {[
          { 
            onClick: togglePlay, 
            label: isPlaying ? "Pause Video" : "Play Video", 
            icon: isPlaying ? <Pause size={14} /> : <Play size={14} /> 
          },
          { 
            onClick: toggleMute, 
            label: isMuted ? "Unmute Video" : "Mute Video", 
            icon: isMuted ? <VolumeX size={14} /> : <Volume2 size={14} /> 
          },
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
              color: "#ffffff",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.18)";
            }}
          >
            {icon}
          </button>
        ))}
      </div>
    </section>
  );
}
