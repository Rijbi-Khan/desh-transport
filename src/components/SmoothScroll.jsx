import { useEffect } from "react";
import Lenis from "lenis";

// 🧈 সিনেমার মতো মসৃণ স্ক্রল (Lenis) — "কম অ্যানিমেশন" সেটিং চালু থাকলে বন্ধ
const SmoothScroll = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true, anchors: { offset: -70 } });
    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
  return null;
};

export default SmoothScroll;
