"use client";

import { useEffect, useState } from "react";

export default function TechBackground() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      setCoords({ x: Math.round(e.clientX), y: Math.round(e.clientY) });
      setVisible(true);
    };
    const hide = () => setVisible(false);
    window.addEventListener("mousemove", handle);
    window.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", handle);
      window.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* faint grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(159,176,171,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(159,176,171,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* corner coordinate ticks */}
      <div className="absolute left-6 top-24 hidden font-mono text-[10px] text-mist/50 sm:block">
        N 14.5995&deg; &middot; E 120.9842&deg;
      </div>
      <div className="absolute right-6 top-24 hidden font-mono text-[10px] text-mist/50 sm:block">
        SYS.STATUS <span className="text-accent">ONLINE</span>
      </div>

      {/* live cursor coordinate readout */}
      <div
        className="absolute hidden select-none font-mono text-[10px] text-accent/70 transition-opacity duration-200 sm:block"
        style={{
          left: coords.x + 16,
          top: coords.y + 16,
          opacity: visible ? 1 : 0,
        }}
      >
        X {coords.x.toString().padStart(4, "0")} / Y {coords.y.toString().padStart(4, "0")}
      </div>
    </div>
  );
}
