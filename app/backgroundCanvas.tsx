"use client";

import { useEffect } from "react";
import backgroundAnimation from "./backgroundAnimation";

export default function BackgroundCanvas() {
  useEffect(() => {
    backgroundAnimation.init();
  }, []);

  return <canvas id="background" className="absolute inset-0 opacity-20" />;
}
