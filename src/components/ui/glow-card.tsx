"use client";

import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

export function GlowCard({ children, className }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setGlowPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-card transition-colors duration-300",
        className
      )}
      style={
        isHovered
          ? { borderColor: "rgba(232, 115, 90, 0.2)" }
          : undefined
      }
    >
      {/* Glow effect - positioned absolutely, doesn't affect layout */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: `radial-gradient(400px circle at ${glowPos.x}px ${glowPos.y}px, rgba(232, 115, 90, 0.08), transparent 60%)`,
          }}
        />
      )}

      {/* Children rendered directly - no wrapper div */}
      {children}
    </div>
  );
}
