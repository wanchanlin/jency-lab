"use client";

import { useEffect, useRef } from "react";

interface YouTubeBackgroundProps {
  videoId: string;
  className?: string;
}

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export default function YouTubeBackground({ videoId, className = "" }: YouTubeBackgroundProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<any>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;

    const initializePlayer = () => {
      if (iframeRef.current && window.YT && window.YT.Player && !initializedRef.current) {
        try {
          initializedRef.current = true;
          playerRef.current = new window.YT.Player(iframeRef.current, {
            videoId: videoId,
            playerVars: {
              autoplay: 1,
              loop: 1,
              playlist: videoId, // Required for looping
              mute: 1,
              controls: 0,
              showinfo: 0,
              rel: 0,
              iv_load_policy: 3,
              modestbranding: 1,
              playsinline: 1,
              enablejsapi: 1,
              start: 0,
            },
            events: {
              onReady: (event: any) => {
                try {
                  // Set high quality for better playback
                  event.target.setPlaybackQuality('highres');
                  // Start playing immediately
                  event.target.playVideo();
                  
                  // Monitor video progress to preload for seamless loop
                  const checkProgress = setInterval(() => {
                    try {
                      if (event.target && event.target.getCurrentTime && event.target.getDuration) {
                        const currentTime = event.target.getCurrentTime();
                        const duration = event.target.getDuration();
                        
                        // When near the end (last 0.5 seconds), preload the restart
                        if (duration > 0 && currentTime > 0 && duration - currentTime < 0.5) {
                          // Pre-seek to start to reduce loading time
                          event.target.seekTo(0, true);
                        }
                      }
                    } catch (error) {
                      // Ignore errors during progress check
                    }
                  }, 100);
                  
                  // Store interval for cleanup
                  (event.target as any)._progressInterval = checkProgress;
                } catch (error) {
                  console.error("Error playing video:", error);
                }
              },
              onStateChange: (event: any) => {
                // When video ends, immediately restart for seamless loop
                if (event.data === window.YT.PlayerState.ENDED) {
                  // Immediately seek to start and play - this reduces visible loading
                  event.target.seekTo(0, true);
                  // Small delay to ensure seek completes before play
                  setTimeout(() => {
                    event.target.playVideo();
                  }, 50);
                }
                // Keep video playing if it gets paused
                if (event.data === window.YT.PlayerState.PAUSED) {
                  event.target.playVideo();
                }
              },
            },
          });
        } catch (error) {
          console.error("Error initializing YouTube player:", error);
          initializedRef.current = false;
        }
      }
    };

    // Check if API is already loaded
    if (window.YT && window.YT.Player) {
      initializePlayer();
      return;
    }

    // Load YouTube iframe API
    const existingScript = document.querySelector('script[src="https://www.youtube.com/iframe_api"]');
    if (!existingScript) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Set up callback for when API is ready
    const originalCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (originalCallback) originalCallback();
      initializePlayer();
    };

    // If API loads before our callback is set
    const checkInterval = setInterval(() => {
      if (window.YT && window.YT.Player && !initializedRef.current) {
        initializePlayer();
        clearInterval(checkInterval);
      }
    }, 100);

    return () => {
      clearInterval(checkInterval);
      if (playerRef.current) {
        try {
          // Clear any progress monitoring intervals
          if ((playerRef.current as any)._progressInterval) {
            clearInterval((playerRef.current as any)._progressInterval);
          }
          playerRef.current.destroy();
          initializedRef.current = false;
        } catch (error) {
          console.error("Error destroying player:", error);
        }
      }
    };
  }, [videoId]);

  return (
    <div className={`absolute inset-0 w-full h-full ${className}`}>
      <iframe
        ref={iframeRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77777778vh] h-[56.25vw] min-w-full min-h-full"
        src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&autoplay=1&loop=1&playlist=${videoId}&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&start=0&load_policy=3`}
        title="YouTube video player"
        allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ 
          pointerEvents: 'none',
          opacity: 1,
        }}
      />
    </div>
  );
}

