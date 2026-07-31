import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion
} from "framer-motion";
import { DIVISIONS, HUB, CITIES, routePath } from "./mapData";

export { DIVISIONS, HUB, CITIES, routePath };

const CoverageMap = () => {
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(null);
  const wrapRef = useRef(null);

  // Mouse-parallax tilt values
  const rotateX = useMotionValue(8);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 120, damping: 14 });
  const springY = useSpring(rotateY, { stiffness: 120, damping: 14 });

  const handleMouseMove = (e) => {
    if (reduceMotion || !wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 14);
    rotateX.set(8 - py * 10);
  };

  const handleMouseLeave = () => {
    rotateX.set(8);
    rotateY.set(0);
  };

  const activeCity = hovered === "narsingdi" ? HUB : CITIES.find((c) => c.id === hovered);

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "0 20px"
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h2 style={{ color: "#0f2957", fontSize: "28px", margin: "0 0 8px" }}>
          আমাদের সার্ভিস কভারেজ
        </h2>
        <p style={{ color: "#64748b", margin: 0, fontSize: "15px" }}>
          নরসিংদী হাব থেকে সারাদেশে — মানচিত্রে হোভার করে দেখুন এলাকাভিত্তিক ট্রিপের সংখ্যা
        </p>
      </div>

      <div style={{ perspective: "1400px" }}>
        <motion.div
          ref={wrapRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            position: "relative",
            background: "linear-gradient(180deg, rgba(248,250,252,0.92), rgba(238,242,247,0.92))",
            backdropFilter: "blur(8px)",
            borderRadius: "24px",
            boxShadow: "0 30px 60px rgba(15,41,87,.18)",
            padding: "30px",
            rotateX: reduceMotion ? 0 : springX,
            rotateY: reduceMotion ? 0 : springY,
            transformStyle: "preserve-3d",
            border: "1px solid rgba(20,184,166,0.2)"
          }}
        >
          <svg
            viewBox="0 0 435 600"
            style={{ width: "100%", maxHeight: "560px", display: "block", margin: "0 auto" }}
          >
            {/* division outlines */}
            {DIVISIONS.map((div) => (
              <path
                key={div.name}
                d={div.d}
                fill="#dbe6f3"
                stroke="#a9c2e0"
                strokeWidth="1.2"
              />
            ))}

            {/* animated routes from the hub */}
            {CITIES.map((city, i) => (
              <motion.path
                key={city.id}
                d={routePath(city)}
                fill="none"
                stroke="#14b8a6"
                strokeWidth="2"
                strokeDasharray="5 4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: reduceMotion ? 0 : 1.4,
                  delay: reduceMotion ? 0 : i * 0.15,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* travelling dot along each route, native SVG animateMotion */}
            {!reduceMotion &&
              CITIES.map((city, i) => (
                <circle key={`dot-${city.id}`} r="3.2" fill="#0f2957">
                  <animateMotion
                    dur="3.5s"
                    begin={`${1.2 + i * 0.15}s`}
                    repeatCount="indefinite"
                    path={routePath(city)}
                  />
                </circle>
              ))}

            {/* radar ping rings at the hub */}
            {!reduceMotion &&
              [0, 1, 2].map((i) => (
                <circle
                  key={`ping-${i}`}
                  cx={HUB.x}
                  cy={HUB.y}
                  r="6"
                  fill="none"
                  stroke="#14b8a6"
                  strokeWidth="2"
                >
                  <animate
                    attributeName="r"
                    values="6;26"
                    dur="2.4s"
                    begin={`${i * 0.8}s`}
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.7;0"
                    dur="2.4s"
                    begin={`${i * 0.8}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              ))}

            {/* hub marker */}
            <g
              onMouseEnter={() => setHovered("narsingdi")}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "pointer" }}
            >
              <circle cx={HUB.x} cy={HUB.y + 2} r="7" fill="rgba(15,41,87,.25)" />
              <circle
                cx={HUB.x}
                cy={HUB.y}
                r={hovered === "narsingdi" ? 9 : 7}
                fill="#ef4444"
                stroke="white"
                strokeWidth="2"
                style={{ transition: "r .2s ease" }}
              />
            </g>

            {/* city markers */}
            {CITIES.map((city) => (
              <g
                key={city.id}
                onMouseEnter={() => setHovered(city.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ cursor: "pointer" }}
              >
                <circle cx={city.x} cy={city.y + 1.5} r="5" fill="rgba(15,41,87,.2)" />
                <circle
                  cx={city.x}
                  cy={city.y}
                  r={hovered === city.id ? 7 : 5}
                  fill="#0f2957"
                  stroke="white"
                  strokeWidth="1.6"
                  style={{ transition: "r .2s ease" }}
                />
              </g>
            ))}
          </svg>

          {/* hover tooltip, positioned by percentage over the svg viewBox */}
          {activeCity && (
            <div
              style={{
                position: "absolute",
                left: `${(activeCity.x / 435) * 100}%`,
                top: `${(activeCity.y / 600) * 100}%`,
                transform: "translate(-50%, -135%)",
                background: "#0f2957",
                color: "white",
                padding: "8px 14px",
                borderRadius: "10px",
                fontSize: "13px",
                fontWeight: "600",
                whiteSpace: "nowrap",
                boxShadow: "0 10px 25px rgba(0,0,0,.25)",
                pointerEvents: "none",
                zIndex: 5
              }}
            >
              {activeCity.name}
              <div style={{ color: "#5eead4", fontWeight: "500", fontSize: "12px" }}>
                {activeCity.trips}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CoverageMap;
