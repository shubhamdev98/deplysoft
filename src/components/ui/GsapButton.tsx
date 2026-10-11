"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

interface GsapButtonProps {
  href?: string;
  onClick?: (e?: React.MouseEvent) => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function GsapButton({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  type = "button",
}: GsapButtonProps) {
  const containerRef = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);
  const iconRef = useRef<HTMLSpanElement | null>(null);

  const childrenArray = React.Children.toArray(children);
  const hasMultiple = childrenArray.length > 1;
  const textChild = hasMultiple ? childrenArray[0] : null;
  const iconChild = hasMultiple ? childrenArray.slice(1) : null;

  useEffect(() => {
    return () => {
      if (textRef.current) gsap.killTweensOf(textRef.current);
      if (iconRef.current) gsap.killTweensOf(iconRef.current);
      if (containerRef.current) gsap.killTweensOf(containerRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    // Smooth text fade/slide & arrow leftward shift + rotation
    if (hasMultiple && textRef.current && iconRef.current) {
      const textWidth = textRef.current.offsetWidth;
      // 8px corresponds to mr-2 gap between text and icon
      const shift = (textWidth + 8) / 2;

      gsap.killTweensOf(textRef.current);
      gsap.killTweensOf(iconRef.current);

      gsap.to(textRef.current, {
        opacity: 0,
        x: -12,
        duration: 0.35,
        ease: "power2.out",
      });

      gsap.to(iconRef.current, {
        x: -shift,
        rotate: -45,
        scale: 1.1,
        duration: 0.35,
        ease: "power2.out",
      });
    }
  };

  const handleMouseLeave = () => {
    // Smooth restore text and icon
    if (hasMultiple && textRef.current && iconRef.current) {
      gsap.killTweensOf(textRef.current);
      gsap.killTweensOf(iconRef.current);

      gsap.to(textRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(iconRef.current, {
        x: 0,
        rotate: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { scale: 0.96 },
        { scale: 1, duration: 0.2, ease: "power1.out" }
      );
    }

    if (onClick) {
      onClick(e);
    }
  };

  const baseStyles =
    "group relative overflow-hidden inline-flex items-center justify-center font-semibold text-sm transition-colors border cursor-pointer select-none shadow-none";

  const variantStyles = {
    primary: "bg-zinc-950 text-white border-zinc-950",
    secondary: "bg-zinc-100 text-zinc-900 border-zinc-200",
    outline: "bg-transparent text-zinc-900 border-zinc-950",
  }[variant];

  const content = (
    <>
      {hasMultiple && textChild && iconChild ? (
        <span className="relative z-10 flex items-center justify-center leading-none">
          <span
            ref={textRef}
            className="inline-flex items-center whitespace-nowrap mr-2 pointer-events-none"
          >
            {textChild}
          </span>
          <span
            ref={iconRef}
            className="inline-flex items-center justify-center shrink-0 origin-center pointer-events-none"
          >
            {iconChild}
          </span>
        </span>
      ) : (
        <span className="relative z-10 flex items-center justify-center gap-2 leading-none">
          {children}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        ref={containerRef as React.Ref<HTMLAnchorElement>}
        href={href}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={`${baseStyles} ${variantStyles} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      ref={containerRef as React.Ref<HTMLButtonElement>}
      type={type}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {content}
    </button>
  );
}
