import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const loadingRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate progress bar
    tl.to(progressRef.current, {
      width: '100%',
      duration: 3,
      ease: 'power2.inOut',
      onUpdate: function() {
        if (progressTextRef.current) {
          const progress = Math.round(this.progress() * 100);
          progressTextRef.current.textContent = `${progress}%`;
        }
      },
      onComplete: () => {
        // Fade out loader after progress completes
        gsap.to(loadingRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.inOut',
          onComplete: () => {
            if (loadingRef.current) {
              loadingRef.current.style.display = 'none';
            }
            onComplete();
          }
        });
      }
    });

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={loadingRef}
      className="fixed w-screen h-screen inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-[#191917] transition-colors duration-500"
    >
      <div className="w-full max-w-md px-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-1 w-full bg-gray-200 dark:bg-[#191917] overflow-hidden rounded-full">
          <div
            ref={progressRef}
            className="h-full bg-[#191917] dark:bg-white w-0"
          />
        </div>
        <h1 className=" mt-4 text-center text-xl font-extralight text-[#191917] dark:text-white">
          Setting the stage..
        </h1>
        <div
          ref={progressTextRef}
          className="mt-4 text-center text-sm font-medium text-[#191917] dark:text-white "
        >
          0%
        </div>
      </div>
    </div>
  );
};
