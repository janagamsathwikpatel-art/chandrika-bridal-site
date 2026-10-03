"use client";

import { useEffect, useRef } from "react";

export interface RoundCarouselImage {
  src: string;
}

export interface RoundCarouselProps {
  images?: RoundCarouselImage[];
  imageWidth?: number;
  imageHeight?: number;
  spacing?: number;
  speed?: number;
  direction?: "right" | "left";
  drag?: boolean;
  sensitivity?: number;
  tilt?: number;
  perspective?: number;
  cornerRadius?: number;
  innerDim?: number;
  background?: string;
  style?: React.CSSProperties;
}

const DEFAULT_IMAGES: RoundCarouselImage[] = [
  { src: "/images/our-col-1.png" },
  { src: "/images/our-col-2.jpg" },
  { src: "/images/our-col-3.jpg" },
  { src: "/images/our-col-4.jpg" },
  { src: "/images/royal-kanjivaram-bridal-saree.jpg" },
  { src: "/images/banarasi-gold-brocade-saree.jpg" },
  { src: "/images/paithani-peacock-teal-saree.jpg" },
  { src: "/images/patan-patola-double-ikat-saree.jpg" },
  { src: "/images/tussar-silk-handloom-saree.jpg" },
  { src: "/images/chanderi-tissue-gold-saree.jpg" },
  { src: "/images/blue-woven-pure-silk-saree.jpg" },
  { src: "/images/magenta-pink-woven-silk-saree.jpg" },
];

function __OriginkitBase_RoundCarousel({
  images = DEFAULT_IMAGES,
  imageWidth = 280,
  imageHeight = 360,
  spacing = 3,
  speed = 4,
  direction = "right",
  drag = true,
  sensitivity = 5,
  tilt = -2,
  perspective = 3000,
  cornerRadius = 24,
  innerDim = 3.5,
  background = "transparent",
  style = {},
}: RoundCarouselProps) {
  const items = images.length > 0 ? images : DEFAULT_IMAGES;
  const count = items.length;

  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const rotYRef = useRef(0);
  const velRef = useRef(0);
  const lastRef = useRef(0);
  const dragRef = useRef({ active: false, x: 0 });

  const angle = 360 / count;
  const factor = 1 + spacing * 0.15;
  const radius = (imageWidth * factor) / (2 * Math.tan(Math.PI / count));
  const radiusPx = cornerRadius;
  const degPerSec = speed * 6 * (direction === "left" ? -1 : 1);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;
    const apply = () =>
      (ring.style.transform = `translateZ(${-radius}px) rotateY(${rotYRef.current}deg)`);
    apply();

    const draw = (now: number) => {
      const dt = lastRef.current ? (now - lastRef.current) / 1000 : 0;
      lastRef.current = now;
      const f = Math.min(dt, 0.1);
      const d = dragRef.current;
      if (!d.active) {
        if (Math.abs(velRef.current) > 0.01) {
          rotYRef.current += velRef.current * f;
          velRef.current *= 0.94;
        } else {
          rotYRef.current += degPerSec * f;
        }
      }
      apply();
      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [radius, degPerSec, count]);

  const onPointerDown = (e: React.PointerEvent) => {
    if (!drag) return;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    dragRef.current = { active: true, x: e.clientX };
    velRef.current = 0;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const d = dragRef.current;
    if (!d.active) return;
    const dx = e.clientX - d.x;
    d.x = e.clientX;
    const k = 0.3 * sensitivity;
    rotYRef.current += dx * k;
    velRef.current = dx * k * 60;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    e.currentTarget.releasePointerCapture?.(e.pointerId);
    dragRef.current.active = false;
  };

  const faceBase: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    borderRadius: radiusPx,
    overflow: "hidden",
    backfaceVisibility: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      style={{
        ...style,
        width: "100%",
        height: "100%",
        minHeight: "440px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background,
        perspective: `${perspective}px`,
        cursor: drag ? "grab" : "default",
        touchAction: "none",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: `rotateX(${tilt}deg)`,
        }}
      >
        <div
          ref={ringRef}
          style={{
            position: "relative",
            width: imageWidth,
            height: imageHeight,
            transformStyle: "preserve-3d",
          }}
        >
          {items.map((img, i) => {
            const src = img?.src;
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  inset: 0,
                  transform: `rotateY(${i * angle}deg) translateZ(${radius}px)`,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Front Face: Unique Saree Photo */}
                <div
                  style={{
                    ...faceBase,
                    backgroundColor: src ? "transparent" : "#222",
                    backgroundImage: src ? `url(${src})` : undefined,
                    boxShadow: "0 12px 35px rgba(0,0,0,0.45)",
                    border: "2px solid rgba(255, 215, 0, 0.4)",
                  }}
                />
                {/* Back Face: Solid Dark Backing Cover (prevents double image repetition) */}
                <div
                  style={{
                    ...faceBase,
                    transform: "rotateY(180deg)",
                    backgroundColor: "#05084a",
                    backgroundImage: "radial-gradient(circle at center, #0a0f54 0%, #030526 100%)",
                    border: "2px solid rgba(255, 215, 0, 0.3)",
                    boxShadow: "inset 0 0 30px rgba(0,0,0,0.9)",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const __originkitPresetProps = {
  images: DEFAULT_IMAGES,
  imageWidth: 280,
  imageHeight: 360,
  spacing: 3,
  speed: 3,
  direction: "right",
  tilt: -2,
  cornerRadius: 24,
  innerDim: 3,
  perspective: 3000,
  drag: true,
  sensitivity: 5,
  background: "transparent",
};

export default function RoundCarousel(props: Record<string, unknown>) {
  return <__OriginkitBase_RoundCarousel {...(__originkitPresetProps as Record<string, unknown>)} {...props} />;
}
