import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/constants";

export const alt = `${SITE_CONFIG.name} | ${SITE_CONFIG.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0f1419",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#e05a3a",
            fontSize: 28,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          {SITE_CONFIG.title}
        </div>
        <div
          style={{
            display: "flex",
            color: "#fafaf9",
            fontSize: 84,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 32,
          }}
        >
          {SITE_CONFIG.name}
        </div>
        <div
          style={{
            display: "flex",
            color: "#a8a29e",
            fontSize: 32,
            lineHeight: 1.4,
            maxWidth: 900,
          }}
        >
          I build AI systems that serve businesses.
        </div>
        <div
          style={{
            display: "flex",
            color: "#57534e",
            fontSize: 26,
            marginTop: 56,
          }}
        >
          ashishpratapsingh.vercel.app
        </div>
      </div>
    ),
    size
  );
}
