"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

interface VoxelPixel {
  id: string;
  r: number;
  c: number;
  active: boolean;
  color: string;
  borderColor: string;
  delay: number;
  duration: number;
}

const MATRIX_COLS = 16;
const MATRIX_ROWS = 16;

export default function PixelCluster() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [voxels, setVoxels] = useState<VoxelPixel[]>([]);
  const voxelRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    // High quality Minecraft slate & obsidian palette
    const PALETTE = [
      { bg: "bg-zinc-950", border: "border-zinc-800" },
      { bg: "bg-zinc-900", border: "border-zinc-700" },
      { bg: "bg-zinc-800", border: "border-zinc-600" },
      { bg: "bg-zinc-700", border: "border-zinc-500" },
      { bg: "bg-zinc-500", border: "border-zinc-400" },
      { bg: "bg-zinc-300", border: "border-zinc-200" },
      { bg: "bg-zinc-200", border: "border-zinc-300" },
      { bg: "bg-zinc-100", border: "border-zinc-200" },
    ];

    const list: VoxelPixel[] = [];

    for (let r = 0; r < MATRIX_ROWS; r++) {
      for (let c = 0; c < MATRIX_COLS; c++) {
        // Distance to top-right corner (r=0, c=15)
        const dist = Math.hypot(MATRIX_COLS - 1 - c, r);
        const maxDist = MATRIX_COLS * 0.95;
        const normalized = Math.max(0, 1 - dist / maxDist);

        // Deterministic pseudo-random seed
        const seed = Math.sin(r * 12.9898 + c * 78.233) * 43758.5453;
        const rand = seed - Math.floor(seed);

        // Always activate perimeter pixels touching top and right borders
        const isCornerPerimeter = (r === 0 && c >= 10) || (c === MATRIX_COLS - 1 && r <= 5);
        const active = isCornerPerimeter || (normalized > 0.08 && rand < Math.pow(normalized, 1.1) * 1.4);

        const colorIndex = Math.min(
          PALETTE.length - 1,
          Math.floor((1 - normalized + rand * 0.25) * PALETTE.length)
        );

        const chosen = PALETTE[colorIndex];
        // Fast, energetic delay and duration for snappy open-close flips
        const delay = (r * 0.08 + (MATRIX_COLS - 1 - c) * 0.06 + rand * 0.8);
        const duration = 0.75 + rand * 0.65; // ~0.75s - 1.4s per flip

        list.push({
          id: `${r}-${c}`,
          r,
          c,
          active,
          color: chosen.bg,
          borderColor: chosen.border,
          delay,
          duration,
        });
      }
    }

    setVoxels(list);
  }, []);

  // GSAP Ambient Box Open/Close Loop
  useEffect(() => {
    if (voxels.length === 0) return;

    const ctx = gsap.context(() => {
      voxels.forEach((p) => {
        if (!p.active) return;
        const el = voxelRefs.current.get(p.id);
        if (!el) return;

        gsap.set(el, {
          transformOrigin: "center center",
          transformPerspective: 400,
        });

        // Faster Ambient Open/Close cycle using GSAP
        gsap.to(el, {
          scale: 0.12,
          rotateX: 90,
          opacity: 0.15,
          duration: p.duration,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: p.delay,
          repeatDelay: 0.4,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [voxels]);

  const handlePixelMouseEnter = (p: VoxelPixel) => {
    if (!p.active) return;
    const el = voxelRefs.current.get(p.id);
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.timeline()
      .to(el, {
        scale: 0.1,
        rotateX: 90,
        duration: 0.1,
        ease: "power2.in",
      })
      .to(el, {
        scale: 1.3,
        rotateX: 0,
        opacity: 1,
        duration: 0.2,
        ease: "back.out(2)",
      });
  };

  const handlePixelMouseLeave = (p: VoxelPixel) => {
    if (!p.active) return;
    const el = voxelRefs.current.get(p.id);
    if (!el) return;

    gsap.to(el, {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      duration: 0.2,
      ease: "power2.out",
      onComplete: () => {
        // Resume faster GSAP ambient cycle
        gsap.to(el, {
          scale: 0.12,
          rotateX: 90,
          opacity: 0.15,
          duration: p.duration,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: 0.3,
          repeatDelay: 0.4,
        });
      },
    });
  };

  return (
    <div
      ref={containerRef}
      className="absolute top-0 right-0 w-32 sm:w-44 md:w-56 lg:w-64 h-32 sm:h-44 md:h-56 lg:h-64 pointer-events-auto select-none z-0 bg-transparent overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="w-full h-full grid p-0 m-0"
        style={{
          gridTemplateColumns: `repeat(${MATRIX_COLS}, 1fr)`,
          gridTemplateRows: `repeat(${MATRIX_ROWS}, 1fr)`,
          gap: "1px",
        }}
      >
        {voxels.map((p) => {
          if (!p.active) {
            return (
              <div
                key={p.id}
                className="w-full h-full bg-transparent"
              />
            );
          }

          return (
            <div
              key={p.id}
              onMouseEnter={() => handlePixelMouseEnter(p)}
              onMouseLeave={() => handlePixelMouseLeave(p)}
              className="w-full h-full flex items-center justify-center cursor-pointer"
            >
              <div
                ref={(el) => {
                  if (el) voxelRefs.current.set(p.id, el);
                  else voxelRefs.current.delete(p.id);
                }}
                className={`w-full h-full border ${p.borderColor} ${p.color}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
