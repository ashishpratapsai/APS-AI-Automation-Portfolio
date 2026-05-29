"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface ScrollTypedTextProps {
  text: string;
  speed?: number;
  className?: string;
  tag?: "p" | "span" | "h2" | "h3";
}

export function ScrollTypedText({
  text,
  speed = 12,
  className = "",
  tag: Tag = "p",
}: ScrollTypedTextProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!isInView) return;
    if (displayed.length >= text.length) return;

    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [isInView, displayed, text, speed]);

  return (
    // @ts-expect-error - dynamic tag element
    <Tag ref={ref} className={className}>
      {isInView ? displayed : "\u00A0"}
      {isInView && displayed.length < text.length && (
        <span className="inline-block w-[2px] h-[0.9em] bg-primary ml-0.5 animate-pulse align-text-bottom" />
      )}
    </Tag>
  );
}
