"use client";

import { useEffect, useState } from "react";

const SPLASH_DURATION_MS = 3200;
const FADE_OUT_MS = 600;

// Linear art version of the Visuura logo paths — stroke-only, no fill
const LinearLogo = ({ animate }) => (
  <svg
    viewBox="0 0 1080 1080"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    style={{ overflow: "visible" }}
  >
    <defs>
      <style>{`
        .line-path {
          fill: none;
          stroke: currentColor;
          stroke-width: 3;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .line-path-thick {
          fill: none;
          stroke: #f5c616;
          stroke-width: 4;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        /* Draw-on animation */
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes drawGold {
          to { stroke-dashoffset: 0; }
        }
        @keyframes glowPulse {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(245,198,22,0.3)); }
          50% { filter: drop-shadow(0 0 16px rgba(245,198,22,0.8)); }
        }

        ${animate ? `
        .p1 { stroke-dasharray: 1200; stroke-dashoffset: 1200; animation: draw 0.7s cubic-bezier(.4,0,.2,1) 0.1s forwards; }
        .p2 { stroke-dasharray: 1200; stroke-dashoffset: 1200; animation: draw 0.7s cubic-bezier(.4,0,.2,1) 0.25s forwards; }
        .p3 { stroke-dasharray: 800; stroke-dashoffset: 800; animation: draw 0.6s cubic-bezier(.4,0,.2,1) 0.4s forwards; }
        .p4 { stroke-dasharray: 300; stroke-dashoffset: 300; animation: draw 0.5s cubic-bezier(.4,0,.2,1) 0.6s forwards; }
        .pg { stroke-dasharray: 2000; stroke-dashoffset: 2000; animation: drawGold 1.1s cubic-bezier(.4,0,.2,1) 0.7s forwards, glowPulse 2.5s ease-in-out 1.8s infinite; }
        .pv { stroke-dasharray: 600; stroke-dashoffset: 600; animation: draw 0.5s cubic-bezier(.4,0,.2,1) 0.85s forwards; }
        ` : `
        .p1, .p2, .p3, .p4 { stroke-dasharray: none; stroke-dashoffset: 0; }
        .pg { stroke-dasharray: none; stroke-dashoffset: 0; filter: drop-shadow(0 0 8px rgba(245,198,22,0.5)); }
        .pv { stroke-dasharray: none; stroke-dashoffset: 0; }
        `}
      `}</style>
    </defs>

    {/* Inner wing right */}
    <path className="line-path p1" stroke="#e8e8e8"
      d="M573.39,601.76l135.91-337,10.54,15.48A206.25,206.25,0,0,1,591.72,597.93Zm140-293.68L708.7,319.7,606.42,573.36c75.82-24.46,129.05-96.14,129.05-177.26A185.3,185.3,0,0,0,713.39,308.08Z"/>

    {/* Inner wing left */}
    <path className="line-path p2" stroke="#e8e8e8"
      d="M525.16,601.76l-18.33-3.84a206.25,206.25,0,0,1-128.12-317.7l10.54-15.48,19.15,47.48Zm-140-293.68a185.3,185.3,0,0,0-22.08,88c0,81.12,53.24,152.8,129.05,177.26L389.85,319.7Z"/>

    {/* Center bottom arc */}
    <path className="line-path p3" stroke="#e8e8e8"
      d="M549.28,560.23,451.18,317l8.42-4.07a206.59,206.59,0,0,1,179.36,0l8.42,4.07ZM476.82,327.06l72.46,179.68,72.46-179.68a186.87,186.87,0,0,0-144.92,0Z"/>

    {/* Center circle */}
    <path className="line-path p4" stroke="#f5c616"
      d="M550,401.28a30.7,30.7,0,1,1,30.69-30.7A30.73,30.73,0,0,1,550,401.28Zm0-41.39a10.69,10.69,0,1,0,10.69,10.69A10.71,10.71,0,0,0,550,359.89Z"/>

    {/* Outer gold wing — main hero mark */}
    <path className="line-path-thick pg"
      d="M733.51,237.91l-80.8,12.34L549.28,506.74,445.8,250.15l-80.73-12.33-.26,11.37a38.67,38.67,0,0,0,2.8,15.38l145,359.5a38.89,38.89,0,0,0,35.78,24.37h1.82A38.9,38.9,0,0,0,586,624.07l145-359.5a38.61,38.61,0,0,0,2.81-15.25Zm-167.39,379a18.86,18.86,0,0,1-10.32,10.18,18.4,18.4,0,0,1-6.68,1.36h-.49a19,19,0,0,1-17.5-11.84L388,261.55l43.54,6.66,23.16,57.45L540,537.24l26.29,65.17A18.79,18.79,0,0,1,566.12,616.89Zm124-304.67L580.5,584.15l-20.44-50.67,83.82-207.82L667,268.31l43.55-6.65Z"/>

    {/* Wordmark — ISURA letters (simplified as linear paths) */}
    {/* I */}
    <path className="line-path pv" stroke="#e8e8e8"
      d="M315.38,791.81a8.8,8.8,0,0,0,6.48-2.69,9.4,9.4,0,0,0,2.85-6.49V701.75a9.14,9.14,0,0,0-2.85-6.41,8.93,8.93,0,0,0-6.48-2.62h-1.89v-1.46h44.3l-.15,1.46h-1.75a9.19,9.19,0,0,0-6.55,2.62,8.49,8.49,0,0,0-2.77,6.41v80.88a8.72,8.72,0,0,0,2.77,6.49,9,9,0,0,0,6.55,2.69h1.75l.15,1.46h-44.3v-1.46Z"/>
    {/* S */}
    <path className="line-path pv" stroke="#e8e8e8"
      d="M370.9,779.72q0-10.5,4.52-17.93h1.31a18.32,18.32,0,0,0-.14,2.33,24.51,24.51,0,0,0,7.21,17.56q7.21,7.52,19.75,7.51,9.75,0,15.23-4.66a14.87,14.87,0,0,0,5.46-11.81q0-8.6-11.66-15L387.22,741q-7.58-4.37-10.85-10.56a26.62,26.62,0,0,1-3.28-12.61q0-13.69,8.67-21.13T404,689.22a164.89,164.89,0,0,1,19.82,1.46H433l-1.89,21.42h-1.46A14.94,14.94,0,0,0,424,699.93q-5.61-4.59-14.94-4.59-11.35,0-16.46,7a12,12,0,0,0-2.63,7.58q0,7,10.2,13L428,741q13.11,7.59,13.11,22.3,0,15.6-10.56,23.83t-28.05,8.23a66.18,66.18,0,0,1-18.29-2.4q-8.39-2.42-12.32-6.49A19.43,19.43,0,0,1,370.9,779.72Z"/>
    {/* U1 */}
    <path className="line-path pv" stroke="#e8e8e8"
      d="M561.23,692.72h-2.48a7.85,7.85,0,0,0-5.32,2,6.2,6.2,0,0,0-2.26,4.88V756.4q0,17.93-11.22,28.42T509.2,795.31q-23,0-35.27-10.27t-12.24-28.49V700a6.73,6.73,0,0,0-2.26-5.24,7.86,7.86,0,0,0-5.46-2h-2.33v-1.46h42v1.46h-2.33a7.79,7.79,0,0,0-5.4,2,7,7,0,0,0-2.33,5v55.67q0,15.45,7.58,24.48t20.84,9q13.26,0,21-8.53t7.87-23.1V699.71a6.39,6.39,0,0,0-2.26-5,8.05,8.05,0,0,0-5.47-2h-2.33v-1.46h30.46Z"/>
    {/* U2 */}
    <path className="line-path pv" stroke="#e8e8e8"
      d="M680.87,692.72H678.4a7.83,7.83,0,0,0-5.32,2,6.2,6.2,0,0,0-2.26,4.88V756.4q0,17.93-11.22,28.42t-30.75,10.49q-23,0-35.27-10.27t-12.24-28.49V700a6.73,6.73,0,0,0-2.26-5.24,7.87,7.87,0,0,0-5.46-2h-2.34v-1.46h42v1.46h-2.33a7.76,7.76,0,0,0-5.39,2,6.9,6.9,0,0,0-2.33,5v55.67q0,15.45,7.58,24.48t20.84,9q13.26,0,21-8.53t7.87-23.1V699.71a6.36,6.36,0,0,0-2.26-5,8,8,0,0,0-5.46-2h-2.33v-1.46h30.45Z"/>
    {/* R */}
    <path className="line-path pv" stroke="#e8e8e8"
      d="M730.42,697.67h-6.7v85a9,9,0,0,0,4.66,8,9.76,9.76,0,0,0,4.67,1.16h1.89v1.46h-44.3v-1.46h1.89a8.87,8.87,0,0,0,8-4.51,10.2,10.2,0,0,0,1.31-4.52V701.9a9.39,9.39,0,0,0-2.84-6.49,8.83,8.83,0,0,0-6.49-2.69h-1.89v-1.46h50q14.13,0,23.9,6.12a22,22,0,0,1,7.87,8.52,26,26,0,0,1,2.91,12.39,33.13,33.13,0,0,1-2.4,12.75,25,25,0,0,1-8,10.2,26.06,26.06,0,0,1-13.48,5.25q8.45,2.78,14.86,12.82,15.75,25.22,23.32,30a18.64,18.64,0,0,0,9.48,2.48v1.46H784.78q-12.39,0-20.69-3.42a29,29,0,0,1-13.56-11.74,143,143,0,0,1-6.7-12.75q-4.08-8.52-5.39-12.17-3.93-8.75-9.91-9.76V742h4.52A18.27,18.27,0,0,0,744.63,738q5-3.94,6.78-12.83a27.15,27.15,0,0,0,.58-4.81q0-11.94-4.81-17.26a16.37,16.37,0,0,0-12.38-5.47Z"/>
    {/* A */}
    <path className="line-path pv" stroke="#e8e8e8"
      d="M898.6,791.81h1.31v1.46H853.42v-1.46h1.32a5.62,5.62,0,0,0,4.73-2,6.2,6.2,0,0,0,1.53-3.72,9,9,0,0,0-.73-3.5l-7.14-17.92H819l-7.58,17.92a10.16,10.16,0,0,0-.73,3.57,6.14,6.14,0,0,0,1.53,3.65q1.53,2,4.89,2h1.16v1.46H787.11v-1.46h1.32a12.73,12.73,0,0,0,6.7-2,15.56,15.56,0,0,0,5.54-6.12l33.66-76.22q6.85-14.41,7.29-19.09h1.31l43.28,95a15.92,15.92,0,0,0,5.54,6.34A12.68,12.68,0,0,0,898.6,791.81Zm-77.09-33.22h29.14l-14.13-35.85Z"/>
    {/* V (the small V mark bottom-left) */}
    <path className="line-path pv" stroke="#e8e8e8"
      d="M337.53,655.12a52.44,52.44,0,0,1,6.12.29v1.45a32.94,32.94,0,0,0-15.59,4.38q-7.44,4.51-10.57,8.38t-4.95,6.26a40.49,40.49,0,0,0-3.57,5.76q-2.78,5.1-5.1,10.06l-39.06,85.39q-6.71,14.43-7.14,19.09h-1.31L212.2,701a16.06,16.06,0,0,0-5.54-6.19,12.66,12.66,0,0,0-6.85-2.11h-1.16v-1.46H245v1.46h-1.16a5.63,5.63,0,0,0-4.74,2,6.17,6.17,0,0,0-1.53,3.72,11,11,0,0,0,.58,3.5l24.78,60.18,30.16-70.38q6.85-16.19,16-24.34Q322.67,655.12,337.53,655.12Z"/>
  </svg>
);

export default function HomeSplash({ onComplete }) {
  const [show, setShow] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const animTimer = setTimeout(() => setAnimate(true), 50);

    const fadeTimer = setTimeout(
      () => setFadeOut(true),
      SPLASH_DURATION_MS - FADE_OUT_MS,
    );

    const hideTimer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
      onComplete?.();
    }, SPLASH_DURATION_MS);

    return () => {
      clearTimeout(animTimer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-[600ms] ease-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "#0a0a0a" }}
      aria-hidden="true"
    >
      {/* Subtle radial glow behind logo */}
      <div
        style={{
          position: "absolute",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(245,198,22,0.07) 0%, transparent 70%)",
          transition: "opacity 1s ease",
          opacity: animate ? 1 : 0,
          pointerEvents: "none",
        }}
      />

      {/* Fine grid texture overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(245,198,22,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,198,22,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      {/* Logo container */}
      <div
        style={{
          width: "min(340px, 72vw)",
          height: "min(340px, 72vw)",
          color: "#c8c8c8",
          position: "relative",
          transform: animate ? "scale(1)" : "scale(0.94)",
          transition: "transform 0.8s cubic-bezier(.34,1.56,.64,1)",
        }}
      >
        <LinearLogo animate={animate} />
      </div>
    </div>
  );
}