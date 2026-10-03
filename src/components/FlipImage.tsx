"use client";

import {
    useRef,
    useEffect,
    useState,
    type CSSProperties,
} from "react";

export interface ImageItem {
    image?: { src?: string; alt?: string } | string;
    focusY?: number;
}

export interface TransitionConfig {
    duration?: number;
    ease?: string | [number, number, number, number];
    delay?: number;
}

export interface FlipImageProps {
    mode?: "single" | "multi";
    images?: ImageItem[];
    singleImage?: { src?: string; alt?: string } | string;
    singleFocusY?: number;
    cardWidth?: number;
    cardHeight?: number;
    animate?: boolean;
    tiles?: number;
    angle?: number;
    flip?: number;
    transition?: TransitionConfig;
    style?: CSSProperties;
}

const DEFAULTS = {
    mode: "multi" as "single" | "multi",
    cardWidth: 713,
    cardHeight: 554,
    focusY: 50,
    singleImage: {
        src: "/images/royal-kanjivaram-bridal-saree.jpg",
    },
    singleFocusY: 19,
    animate: true,
    tiles: 44,
    angle: 209,
    flip: 46,
    transition: {
        ease: "linear",
        mass: 1,
        type: "tween",
        delay: 1,
        damping: 60,
        duration: 1.2,
        stiffness: 800,
    } as TransitionConfig,
};

const FALLBACK_IMAGES: ImageItem[] = [
    {
        image: {
            src: "/images/royal-kanjivaram-bridal-saree.jpg",
        },
        focusY: 19,
    },
    {
        image: {
            src: "/images/banarasi-gold-brocade-saree.jpg",
        },
        focusY: 10,
    },
    {
        image: {
            src: "/images/paithani-peacock-teal-saree.jpg",
        },
        focusY: 15,
    },
    {
        image: {
            src: "/images/kanjivaram-pink-pure-silk.png",
        },
        focusY: 20,
    },
    {
        image: {
            src: "/images/kanjivaram-gold-dual-tone.png",
        },
        focusY: 25,
    },
    {
        image: {
            src: "/images/chanderi-tissue-gold-saree.jpg",
        },
        focusY: 15,
    },
    {
        image: {
            src: "/images/patan-patola-double-ikat-saree.jpg",
        },
        focusY: 20,
    },
    {
        image: {
            src: "/images/blue-woven-pure-silk-saree.jpg",
        },
        focusY: 30,
    },
];

function resolveImageSrc(image: unknown): string {
    if (!image) return "";
    if (typeof image === "string") return image.trim();
    return (image as { src?: string }).src || "";
}

const focusOf = (item: ImageItem | undefined) =>
    typeof item?.focusY === "number" ? item.focusY : DEFAULTS.focusY;

const NAMED_EASES: Record<string, [number, number, number, number]> = {
    linear: [0, 0, 1, 1],
    easeIn: [0.42, 0, 1, 1],
    easeOut: [0, 0, 0.58, 1],
    easeInOut: [0.42, 0, 0.58, 1],
};

function cubicBezierEase(x1: number, y1: number, x2: number, y2: number) {
    const cx = 3 * x1;
    const bx = 3 * (x2 - x1) - cx;
    const ax = 1 - cx - bx;
    const cy = 3 * y1;
    const by = 3 * (y2 - y1) - cy;
    const ay = 1 - cy - by;
    const sampleX = (t: number) => ((ax * t + bx) * t + cx) * t;
    const sampleY = (t: number) => ((ay * t + by) * t + cy) * t;
    const dX = (t: number) => (3 * ax * t + 2 * bx) * t + cx;
    return (p: number) => {
        let t = p;
        for (let i = 0; i < 8; i++) {
            const x = sampleX(t) - p;
            const d = dX(t);
            if (Math.abs(x) < 1e-4 || Math.abs(d) < 1e-6) break;
            t -= x / d;
        }
        t = t < 0 ? 0 : t > 1 ? 1 : t;
        return sampleY(t);
    };
}

function makeEase(ease: TransitionConfig["ease"]) {
    if (Array.isArray(ease) && ease.length === 4)
        return cubicBezierEase(ease[0], ease[1], ease[2], ease[3]);
    const b =
        (typeof ease === "string" && NAMED_EASES[ease]) || NAMED_EASES.easeOut;
    return cubicBezierEase(b[0], b[1], b[2], b[3]);
}

const durationOf = (transition: TransitionConfig | undefined, fallback: number) =>
    typeof transition?.duration === "number" ? transition.duration : fallback;
const delayOf = (transition: TransitionConfig | undefined, fallback: number) =>
    typeof transition?.delay === "number" ? transition.delay : fallback;

function __OriginkitBase_FlipImage(props: FlipImageProps) {
    const {
        mode = DEFAULTS.mode,
        images = FALLBACK_IMAGES,
        singleImage = DEFAULTS.singleImage,
        singleFocusY = DEFAULTS.singleFocusY,
        cardWidth = DEFAULTS.cardWidth,
        cardHeight = DEFAULTS.cardHeight,
        animate = DEFAULTS.animate,
        tiles = DEFAULTS.tiles,
        angle = DEFAULTS.angle,
        flip = DEFAULTS.flip,
        transition = DEFAULTS.transition,
        style,
    } = props;

    const items =
        mode === "single"
            ? [
                  {
                      image: singleImage || FALLBACK_IMAGES[0].image,
                      focusY: singleFocusY,
                  },
              ]
            : images?.length
              ? images.filter((img) => resolveImageSrc(img?.image).length > 0)
              : FALLBACK_IMAGES;

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const sourcesKey = JSON.stringify(
        items.map((item) => [resolveImageSrc(item?.image), focusOf(item)])
    );

    const freeze = false;
    const focusKey = JSON.stringify(items.map(focusOf));
    const [shown, setShown] = useState(0);
    const lastFocusRef = useRef<number[] | null>(null);

    useEffect(() => {
        const next: number[] = JSON.parse(focusKey);
        const last = lastFocusRef.current;
        lastFocusRef.current = next;
        if (!last) return;
        const moved = next.findIndex((f, i) => i < last.length && last[i] !== f);
        if (moved >= 0) setShown(moved);
    }, [focusKey]);

    useEffect(() => {
        const canvasEl = canvasRef.current;
        if (!canvasEl) return;
        const context = canvasEl.getContext("2d");
        if (!context) return;
        const canvas: HTMLCanvasElement = canvasEl;
        const ctx: CanvasRenderingContext2D = context;

        const entries: Array<[string, number]> = JSON.parse(sourcesKey);
        const sources = entries.map(([src]) => src);
        const focusAt = (i: number) => entries[i]?.[1] ?? DEFAULTS.focusY;
        const ease = makeEase(transition?.ease);

        const total = Math.max(0.1, durationOf(transition, 1.2)) * 1000;
        const hold = Math.max(0, delayOf(transition, 1.5)) * 1000;
        const flipDur = Math.max(80, total * (flip / 100));
        const spread = Math.max(0, total - flipDur);

        const flaps = Math.max(2, Math.min(6, Math.round(flipDur / 110)));

        let alive = true;
        let raf = 0;
        let dpr = 1;
        let cols = 0;
        let rows = 0;
        let cw = 0;
        let ch = 0;
        let cellW = 0;
        let cellH = 0;
        let offsets: number[] = [];
        let loaded: HTMLImageElement[] = [];
        let index = 0;
        let startTime = -1;
        let reveal = 0;
        let previous: { img: HTMLImageElement; focusY: number } | null = null;

        function build() {
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.round(cardWidth * dpr);
            canvas.height = Math.round(cardHeight * dpr);
            cw = canvas.width;
            ch = canvas.height;
            cols = Math.max(4, Math.round(tiles));
            cellW = cw / cols;
            rows = Math.max(1, Math.round(ch / cellW));
            cellH = ch / rows;

            const rad = (angle * Math.PI) / 180;
            const ux = Math.cos(rad);
            const uy = Math.sin(rad);
            const raw: number[] = [];
            let lo = Infinity;
            let hi = -Infinity;
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const x = (c + 0.5) / cols;
                    const y = (r + 0.5) / rows;
                    const p = x * ux + y * uy;
                    raw.push(p);
                    if (p < lo) lo = p;
                    if (p > hi) hi = p;
                }
            }
            const range = hi - lo || 1;
            offsets = raw.map((p) => (p - lo) / range);
            startTime = -1;
        }

        function cover(img: HTMLImageElement, focusY: number) {
            const scale = Math.max(cw / img.width, ch / img.height);
            const dx = (cw - img.width * scale) / 2;
            const slack = ch - img.height * scale;
            const f = Math.min(100, Math.max(0, focusY)) / 100;
            return { scale, dx, dy: slack * f };
        }

        function tile(
            img: HTMLImageElement,
            cov: { scale: number; dx: number; dy: number },
            cellX: number,
            cellY: number,
            srcX: number,
            srcY: number,
            scaleY: number
        ) {
            const srcW = cellW / cov.scale;
            const srcH = cellH / cov.scale;
            const sx = Math.max(0, Math.min(img.width - srcW, srcX));
            const sy = Math.max(0, Math.min(img.height - srcH, srcY));
            ctx.save();
            ctx.translate(cellX + cellW / 2, cellY + cellH / 2);
            ctx.scale(1, scaleY);
            ctx.drawImage(
                img,
                sx,
                sy,
                srcW,
                srcH,
                -cellW / 2,
                -cellH / 2,
                cellW + 0.8,
                cellH + 0.8
            );
            ctx.restore();
        }

        function draw(time: number) {
            if (startTime < 0) startTime = time;
            const elapsed = time - startTime;
            ctx.clearRect(0, 0, cw, ch);

            const img = loaded[index];
            if (!img || !img.width) return false;
            const cov = cover(img, focusAt(index));

            const behind = previous;
            const behindCov = behind ? cover(behind.img, behind.focusY) : null;

            const reversed = reveal % 2 === 1;

            let settled = true;

            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const idx = r * cols + c;
                    const u = reversed ? 1 - offsets[idx] : offsets[idx];
                    const start = ease(u) * spread;
                    const cellX = c * cellW;
                    const cellY = r * cellH;

                    if (elapsed < start) {
                        settled = false;
                        if (behind && behindCov) {
                            tile(
                                behind.img,
                                behindCov,
                                cellX,
                                cellY,
                                (cellX - behindCov.dx) / behindCov.scale,
                                (cellY - behindCov.dy) / behindCov.scale,
                                1
                            );
                        }
                        continue;
                    }

                    if (elapsed < start + flipDur) {
                        settled = false;
                        const local = (elapsed - start) / flipDur;
                        const tick = Math.floor(local * flaps);
                        const hash =
                            (idx * 73 + tick * 131 + 17) % (cols * rows);
                        const hashCol = hash % cols;
                        const hashRow = Math.floor(hash / cols) % rows;
                        const scaleY =
                            0.12 +
                            Math.abs(Math.cos(local * flaps * Math.PI)) * 0.88;
                        tile(
                            img,
                            cov,
                            cellX,
                            cellY,
                            (hashCol * cellW - cov.dx) / cov.scale,
                            (hashRow * cellH - cov.dy) / cov.scale,
                            scaleY
                        );
                        continue;
                    }

                    tile(
                        img,
                        cov,
                        cellX,
                        cellY,
                        (cellX - cov.dx) / cov.scale,
                        (cellY - cov.dy) / cov.scale,
                        1
                    );
                }
            }
            return settled;
        }

        function paintStill(slot: number) {
            const img = loaded[slot];
            if (!img || !img.width) return;
            const cov = cover(img, focusAt(slot));
            ctx.clearRect(0, 0, cw, ch);
            ctx.drawImage(
                img,
                cov.dx,
                cov.dy,
                img.width * cov.scale,
                img.height * cov.scale
            );
        }

        function nextReady(from: number): number {
            const count = sources.length;
            for (let step = 1; step <= count; step++) {
                const candidate = (from + step) % count;
                if (loaded[candidate]) return candidate;
            }
            return from;
        }

        function loop(time: number) {
            if (!alive) return;
            const settled = draw(time);
            if (settled) {
                previous = loaded[index]
                    ? { img: loaded[index], focusY: focusAt(index) }
                    : previous;
                const ready = loaded.filter(Boolean).length;
                if (
                    ready > 1 &&
                    startTime >= 0 &&
                    time - startTime > total + hold
                ) {
                    index = nextReady(index);
                    reveal++;
                    startTime = -1;
                }
            }
            raf = requestAnimationFrame(loop);
        }

        const stillSlot = Math.min(
            Math.max(shown, 0),
            Math.max(0, sources.length - 1)
        );

        let built = false;
        let running = false;
        sources.forEach((src, i) => {
            if (!src) return;
            const im = new Image();
            im.crossOrigin = "anonymous";
            im.onload = () => {
                if (!alive) return;
                loaded[i] = im;
                if (!built) {
                    built = true;
                    build();
                }
                if (freeze) {
                    if (i === stillSlot) paintStill(stillSlot);
                    return;
                }
                if (!running) {
                    running = true;
                    raf = requestAnimationFrame(loop);
                }
            };
            im.src = src;
        });

        return () => {
            alive = false;
            cancelAnimationFrame(raf);
        };
    }, [
        sourcesKey,
        freeze,
        shown,
        cardWidth,
        cardHeight,
        tiles,
        angle,
        flip,
        JSON.stringify(transition),
    ]);

    return (
        <canvas
            ref={canvasRef}
            style={{
                ...style,
                display: "block",
                width: "100%",
                height: "auto",
                maxWidth: cardWidth,
                maxHeight: cardHeight,
                aspectRatio: `${cardWidth}/${cardHeight}`,
            }}
        />
    );
}

const __originkitPresetProps = {
    mode: "multi",
    singleImage: {
        src: "/images/royal-kanjivaram-bridal-saree.jpg",
    },
    singleFocusY: 19,
    images: FALLBACK_IMAGES,
    cardWidth: 713,
    cardHeight: 554,
    animate: true,
    tiles: 44,
    angle: 209,
    flip: 46,
    transition: {
        ease: "linear",
        mass: 1,
        type: "tween",
        delay: 1,
        damping: 60,
        duration: 1.2,
        stiffness: 800,
    },
};

export default function FlipImage(props: Record<string, unknown>) {
    return (
        <__OriginkitBase_FlipImage
            {...(__originkitPresetProps as Record<string, unknown>)}
            {...props}
        />
    );
}
