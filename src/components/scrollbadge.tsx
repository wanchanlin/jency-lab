import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger with GSAP (important for global access)
gsap.registerPlugin(ScrollTrigger);

export default function ScrollBadge() {
  // 1. Create a ref to attach to the animated text element
  const animatedTextRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Ensure the ref is attached to the element
    const animatedText = animatedTextRef.current;

    if (!animatedText) return;

    // --- GSAP Setup Logic ---

    // 2. Safely get the original text content
    const originalText = animatedText.textContent?.trim() || "";

    // 3. Duplicate the text and apply styling
    // We only duplicate it once to handle the horizontal loop.
    animatedText.innerHTML = `${originalText} ${originalText}`;
    
    // Set overflow hidden on the container (CSS needed) to clip the doubled text.

    // 4. Apply GSAP ScrollTrigger animation
    const scrollTrigger = gsap.to(animatedText, {
      // The x property will move the duplicated text container to the left by 50%
      // of its total width, causing the second copy to slide into view
      // just as the first copy moves out.
      x: "-50%",
      ease: "none",
      scrollTrigger: {
        trigger: animatedText.parentElement, // Use the parent as the trigger
        start: "top bottom", // Start when the text enters the bottom of the viewport
        end: "bottom top", // End when the text leaves the top of the viewport
        scrub: true, // Link the animation progress directly to the scroll
      },
    });

    // Optional: Cleanup function to revert ScrollTrigger instances on unmount
    return () => {
        scrollTrigger.scrollTrigger?.kill();
    };

  }, []); // Empty dependency array ensures this runs once on mount

  // The className 'animated-text-container' is needed for CSS overflow: hidden
  return (
    <section className="container-fluid vh-100 d-flex align-items-center justify-content-center position-relative effect-section" data-effect="carousel-scroll">
      {/* Utility button/elements */}
     
      
      <div className="row w-100 animated-text-container" style={{ overflow: 'hidden' }}>
        <div className="col-12 text-center">
          {/* 5. Attach the ref to the element we want to animate */}
          {/* text-nowrap is essential to keep the duplicated text on one line */}
          <h1 
            ref={animatedTextRef} 
            className=" rotate-25 text-white mt-5 py-5 text-5xl font-bold animated-text text-nowrap display-1 fw-bold bg-black" 
            style={{ display: 'inline-block' }} 
          >
            We will talk to you soon! We will love to hear from you! We will be happy to help you! collaborate with us!
          </h1>
        </div>
      </div>
    </section>
  );
}