import React, { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { DIVISIONS, HUB, CITIES, routePath } from "./mapData";

/*
  Persistent, colourful, low-key-animated Bangladesh map that sits behind
  the entire site (position: fixed, negative z-index). Routes radiate
  continuously from the Narsingdi hub out to the major coverage cities.
  Purely decorative: pointer-events disabled, aria-hidden.

  🗺️ বাস্তবসম্মত 3D সংস্করণ:
  - ম্যাপটা হালকা 3D তে কাত করা, নিচে পাতলা পুরুত্ব ও ছায়া
  - স্ক্রল করলে ধীরে ঘোরে, মাউস নাড়ালে সামান্য হেলে যায়
  - সংযত রং (লজিস্টিক্স ম্যাপের মতো), পাতলা রুট লাইন, রুট ধরে ছোট আলো-বিন্দু চলে
  - শহরের নাম ছোট ধূসর লেখায়
*/

// A distinct, muted-but-colourful tone per division so it reads like a
// real administrative map rather than a flat silhouette.
// (সংযত, বাস্তবসম্মত টোন — কার্টুনের মতো উজ্জ্বল রং নয়)
const DIVISION_COLORS = {
  Dhaka: "#cfdbe6",
  Chittagong: "#d6e2db",
  Sylhet: "#dbe4d6",
  Khulna: "#d3dfe8",
  Barishal: "#d9e3e0",
  Rajshahi: "#e1ddd3",
  Rangpur: "#dde3d8"
};

// নিচের পুরুত্বের স্তর কতগুলো
const EXTRUDE_LAYERS = 3;

const MapWatermark = () => {
  const reduceMotion = useReducedMotion();
  const groupRef = useRef(null);
  // Fallback to the full original canvas until the real bounds are measured
  const [viewBox, setViewBox] = useState("0 0 435 600");

  useEffect(() => {
    if (!groupRef.current) return;
    try {
      const box = groupRef.current.getBBox();
      const pad = Math.max(box.width, box.height) * 0.06;
      setViewBox(
        `${box.x - pad} ${box.y - pad} ${box.width + pad * 2} ${box.height + pad * 2}`
      );
    } catch {
      // getBBox can fail on some browsers before layout is ready — keep fallback
    }
  }, []);

  // ---------- স্ক্রল অনুযায়ী 3D ঘোরা ----------
  const { scrollYProgress } = useScroll();
  const rotZ = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [-4, 6]);
  const rotX = useTransform(scrollYProgress, [0, 0.5, 1], reduceMotion ? [24, 24, 24] : [26, 18, 26]);
  const shiftY = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : ["-2%", "6%"]);

  // ---------- মাউস অনুযায়ী হালকা হেলানো ----------
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const tiltY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 40, damping: 20 });
  const tiltX = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 40, damping: 20 });

  useEffect(() => {
    if (reduceMotion) return;
    const move = (e) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [reduceMotion, mx, my]);

  const rotateX = useTransform([rotX, tiltX], ([a, b]) => a + b);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
        pointerEvents: "none",
        background: "#f3f6f9",
        perspective: "1400px"
      }}
    >
      <style>{`
        @keyframes mw-dash { to { stroke-dashoffset: -40; } }
        @keyframes mw-glow { 50% { opacity: .35; } }
        .mw-route-glow { animation: mw-glow 3.2s ease-in-out infinite; }
        .mw-route-flow { animation: mw-dash 1.6s linear infinite; }
      `}</style>

      <motion.div
        style={{
          position: "absolute",
          inset: "-6% -4%",
          rotateX,
          rotateY: tiltY,
          rotateZ: rotZ,
          y: shiftY,
          transformStyle: "preserve-3d",
          transformOrigin: "50% 55%"
        }}
      >
        <svg
          viewBox={viewBox}
          preserveAspectRatio="xMidYMid meet"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }}
        >
          <defs>
            <linearGradient id="mw-route" x1="0" x2="1">
              <stop offset="0%" stopColor="#0f2957" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0f766e" stopOpacity="0.7" />
            </linearGradient>
            <filter id="mw-soft" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
          </defs>

          {/* মাটিতে পড়া ছায়া */}
          <g transform="translate(4 14)" filter="url(#mw-soft)" opacity="0.12">
            {DIVISIONS.map((div) => (
              <path key={`sh-${div.name}`} d={div.d} fill="#0f2957" />
            ))}
          </g>

          {/* পুরুত্ব (extrude) — নিচ থেকে উপরে স্তর */}
          {Array.from({ length: EXTRUDE_LAYERS }).map((_, i) => (
            <g key={`ex-${i}`} transform={`translate(0 ${(EXTRUDE_LAYERS - i) * 1.4})`}>
              {DIVISIONS.map((div) => (
                <path key={div.name} d={div.d} fill="#64748b" fillOpacity={0.12 + i * 0.03} />
              ))}
            </g>
          ))}

          {/* colourful land divisions (measured for the tight viewBox above) */}
          <g ref={groupRef}>
            {DIVISIONS.map((div) => (
              <path
                key={div.name}
                d={div.d}
                fill={DIVISION_COLORS[div.name] || "#9fd3ab"}
                fillOpacity="0.9"
                stroke="#ffffff"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            ))}
          </g>

          {/* routes radiating from the Narsingdi hub — নরম আলো + চলমান ড্যাশ */}
          {CITIES.map((city) => (
            <g key={`bg-route-${city.id}`}>
              <path
                className={reduceMotion ? undefined : "mw-route-glow"}
                d={routePath(city)}
                fill="none"
                stroke="#0f766e"
                strokeOpacity="0.12"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#mw-soft)"
              />
              <path
                className={reduceMotion ? undefined : "mw-route-flow"}
                d={routePath(city)}
                fill="none"
                stroke="url(#mw-route)"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeDasharray="4 4"
              />
            </g>
          ))}

          {/* রুট ধরে চলমান ছোট আলো-বিন্দু (চলমান গাড়ির প্রতীক) */}
          {!reduceMotion &&
            CITIES.map((city, i) => (
              <circle key={`bg-dot-${city.id}`} r="2.2" fill="#0f766e">
                <animateMotion dur={`${5 + i * 0.6}s`} begin={`${i * 0.7}s`} repeatCount="indefinite" path={routePath(city)} />
              </circle>
            ))}

          {/* শহরের মার্কার + নাম */}
          {CITIES.map((city, i) => (
            <g key={`city-${city.id}`} transform={`translate(${city.x} ${city.y})`}>
              {!reduceMotion && (
                <circle r="3" fill="none" stroke="#0f766e" strokeWidth="1">
                  <animate attributeName="r" values="3;10" dur="3.2s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.7;0" dur="2.6s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                </circle>
              )}
              <circle r="3" fill="#ffffff" stroke="#0f2957" strokeWidth="1.5" />
              <text
                y="-7"
                textAnchor="middle"
                fontSize="8.5"
                fontWeight="600"
                fill="#475569"
                fillOpacity="0.9"
                stroke="#ffffff"
                strokeWidth="3"
                paintOrder="stroke"
                style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
              >
                {city.name}
              </text>
            </g>
          ))}

          {/* radar pings spreading out from the hub */}
          {!reduceMotion &&
            [0, 1, 2].map((i) => (
              <circle key={`bg-ping-${i}`} cx={HUB.x} cy={HUB.y} r="5" fill="none" stroke="#dc2626" strokeWidth="1">
                <animate attributeName="r" values="5;30" dur="3s" begin={`${i * 1}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.35;0" dur="3s" begin={`${i * 1}s`} repeatCount="indefinite" />
              </circle>
            ))}

          {/* hub marker */}
          <g transform={`translate(${HUB.x} ${HUB.y})`}>
            <circle r="4.5" fill="#dc2626" stroke="#ffffff" strokeWidth="1.5" />
            <text
              y="-9"
              textAnchor="middle"
              fontSize="9"
              fontWeight="700"
              fill="#7f1d1d"
              stroke="#ffffff"
              strokeWidth="3"
              paintOrder="stroke"
              style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
            >
              {HUB.name}
            </text>
          </g>
        </svg>
      </motion.div>
    </div>
  );
};

export default MapWatermark;
