'use client';

import { Button } from '@/components/ui/button';

export default function ButtonHeader() {
  // Smooth scroll to the main section
  const handleScroll = () => {
    const mainElement = document.getElementById('main');
    if (mainElement) {
      const mainPosition =
        mainElement.getBoundingClientRect().top + window.pageYOffset; // Get the target position
      const scrollDuration = 300; // Scroll duration in ms
      const startPosition = window.pageYOffset;
      const distance = mainPosition - startPosition;
      let startTime = null;

      // Easing function for smoother scrolling
      const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

      const step = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / scrollDuration, 1); // Ensure it doesn't overshoot
        const easedProgress = easeInOutQuad(progress);
        window.scrollTo(0, startPosition + distance * easedProgress);

        if (timeElapsed < scrollDuration) {
          window.requestAnimationFrame(step); // Continue until we reach the target
        }
      };

      window.requestAnimationFrame(step);
    }
  };

  return (
    <Button
      variant="outline"
      className="px-12 py-7 mt-20 text-lg bg-transparent border-white text-white text-md hover:bg-[#00000099] hover:text-white duration-200 shadow-md rounded-xl"
      onClick={handleScroll}
    >
      Show Cars
    </Button>
  );
}
