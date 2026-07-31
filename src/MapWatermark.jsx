import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { DIVISIONS, HUB, CITIES, routePath } from "./mapData";

/*
  Persistent, colourful, low-key-animated Bangladesh map that sits behind
  the entire site (position: fixed, negative z-index). Routes radiate
  continuously from the Narsingdi hub out to the major coverage cities.
  Purely decorative: pointer-events disabled, aria-hidden.
*/

// A distinct, muted-but-colourful tone per division so it reads like a
// real administrative map rather than a flat silhouette.
const DIVISION_COLORS = {
  Dhaka: "#f4c66b",
  Chittagong: "#5fb894",
  Sylhet: "#a3d977",
  Khulna: "#7ec8d8",
  Barishal: "#7fd0a4",
  Rajshahi: "#f0a860",
  Rangpur: "#93cf9a"
};

const MapWatermark = () => {
  const reduceMotion = useReducedMotion();
  const groupRef = useRef(null);
  // Fallback to the full original canvas until the real bounds are measured
  const [viewBox, setViewBox] = useState("0 0 435 600");

  useEffect(() => {
    if (!groupRef.current) return;
    try {
      const box = groupRef.current.getBBox();
      const pad = Math.max(box.width, box.height) * 0.02;
      setViewBox(
        `${box.x - pad} ${box.y - pad} ${box.width + pad * 2} ${box.height + pad * 2}`
      );
    } catch (e) {
      // getBBox can fail on some browsers before layout is ready — keep fallback
    }
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
        pointerEvents: "none",
        background: "#f4f7f5"
      }}
    >
      <svg
        viewBox={viewBox}
        preserveAspectRatio="xMidYMid meet"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          transform: "scale(1.18)",
          transformOrigin: "center"
        }}
      >
        {/* colourful land divisions (measured for the tight viewBox above) */}
        <g ref={groupRef}>
          {DIVISIONS.map((div) => (
            <path
              key={div.name}
              d={div.d}
              fill={DIVISION_COLORS[div.name] || "#9fd3ab"}
              fillOpacity="0.55"
              stroke="#ffffff"
              strokeWidth="1.6"
            />
          ))}
        </g>

        {/* routes radiating from the Narsingdi hub, always visible */}
        {CITIES.map((city) => (
          <path
            key={`bg-route-${city.id}`}
            d={routePath(city)}
            fill="none"
            stroke="#0f2957"
            strokeOpacity="0.35"
            strokeWidth="1.6"
            strokeDasharray="5 5"
          />
        ))}

        {/* continuously travelling dots along each route */}
        {!reduceMotion &&
          CITIES.map((city, i) => (
            <circle key={`bg-dot-${city.id}`} r="3" fill="#14b8a6">
              <animateMotion
                dur={`${4 + i * 0.4}s`}
                begin={`${i * 0.5}s`}
                repeatCount="indefinite"
                path={routePath(city)}
              />
            </circle>
          ))}

        {/* radar pings spreading out from the hub */}
        {!reduceMotion &&
          [0, 1, 2].map((i) => (
            <circle
              key={`bg-ping-${i}`}
              cx={HUB.x}
              cy={HUB.y}
              r="6"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
            >
              <animate
                attributeName="r"
                values="6;40"
                dur="3s"
                begin={`${i * 1}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.6;0"
                dur="3s"
                begin={`${i * 1}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}

        {/* hub marker */}
        <circle cx={HUB.x} cy={HUB.y} r="6" fill="#ef4444" stroke="#ffffff" strokeWidth="2" />
      </svg>
    </div>
  );
};

export default MapWatermark;
