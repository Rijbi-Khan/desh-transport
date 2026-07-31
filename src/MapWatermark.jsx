import React from "react";
import { DIVISIONS } from "./CoverageMap";

/*
  A large, low-opacity Bangladesh outline fixed behind the entire page.
  Purely decorative — pointer-events disabled so it never blocks clicks,
  and it stays out of the tab order / screen-reader flow (aria-hidden).
*/
const MapWatermark = () => {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
        background: "#f1f5f9"
      }}
    >
      <svg
        viewBox="0 0 435 600"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "min(140vh, 1400px)",
          height: "auto",
          transform: "translate(-50%, -50%)",
          opacity: 0.06
        }}
      >
        {DIVISIONS.map((div) => (
          <path key={div.name} d={div.d} fill="#0f2957" />
        ))}
      </svg>
    </div>
  );
};

export default MapWatermark;
