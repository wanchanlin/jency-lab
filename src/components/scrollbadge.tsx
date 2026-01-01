"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollBadgeProps = React.HTMLAttributes<HTMLDivElement>;

export default function ScrollBadge({ className = "", ...props }: ScrollBadgeProps) {
  const animatedTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const animatedText = animatedTextRef.current;
    if (!animatedText) return;

    // Triple the text to ensure a seamless loop
    const originalText = animatedText.textContent?.trim() || "";
    animatedText.innerHTML = `${originalText} &nbsp;•&nbsp; ${originalText} &nbsp;•&nbsp; ${originalText}`;

    const scrollTrigger = gsap.to(animatedText, {
      x: "-33.33%", 
      ease: "none",
      scrollTrigger: {
        trigger: animatedText,
        start: "top bottom",
        end: "bottom top",
        scrub: 1, // Smooths the movement
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <div 
      {...props} 
      // We apply the rotation classes here. 'py-8' gives room for rotated text.
      className={`w-full overflow-hidden whitespace-nowrap bg-black py-6 my-4 shadow-2xl ${className}`}
    >
      <h1 
        ref={animatedTextRef} 
        className="text-white text-4xl md:text-6xl font-bold uppercase inline-block "
      >
        We will talk to you soon! We will love to hear from you! Collaborate with us!
      </h1>
    </div>
  );
}