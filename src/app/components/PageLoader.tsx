"use client";

import CountUp from "react-countup";

interface PageLoaderProps {
  text: string;
  fadeOut: boolean;
}

export default function PageLoader({ text, fadeOut }: PageLoaderProps) {
  return (
    <div className={`page-loader ${fadeOut ? "fade-out" : ""}`}>
      <p>{text}</p>
      <h3>
        <CountUp start={0} end={100} duration={1.5} />%
      </h3>
    </div>
  );
}
