import React, { useState, useEffect } from "react";
import Link from "next/link";
import SEO from "@/components/essential/Seo";
import Navbar from "@/components/essential/Navbar";
import Footer from "@/components/essential/Footer";
import { Home, Gamepad2, Ghost, Trophy, Timer } from "lucide-react";

export default function Custom404() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [position, setPosition] = useState({ top: "50%", left: "50%" });

  // Handle Game Timer
  useEffect(() => {
    let timer;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0 && isPlaying) {
      setIsPlaying(false);
      setGameOver(true);
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  // Handle Ghost Movement
  useEffect(() => {
    let mover;
    if (isPlaying) {
      // Moves every 750ms to make it challenging
      mover = setInterval(moveTarget, 750);
    }
    return () => clearInterval(mover);
  }, [isPlaying]);

  const moveTarget = () => {
    // Keep within 10% to 85% bounds so it doesn't overflow
    const top = Math.floor(Math.random() * 75) + 10;
    const left = Math.floor(Math.random() * 75) + 10;
    setPosition({ top: `${top}%`, left: `${left}%` });
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(15);
    setGameOver(false);
    setIsPlaying(true);
    moveTarget();
  };

  const handleCatch = (e) => {
    // Prevent clicking the background
    e.stopPropagation();
    if (!isPlaying) return;
    setScore((s) => s + 1);
    moveTarget();
  };

  return (
    <>
      <SEO
        title="404 - Page Not Found | Visuura"
        description="Oops! You found a broken link. Play a quick game before you head back!"
        noIndex
      />

      <Navbar />

      <main className="min-h-screen bg-background text-foreground pt-24 pb-16 px-4 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Funky Background Blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-[120px] opacity-30 animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-foreground rounded-full mix-blend-overlay filter blur-[120px] opacity-10 pointer-events-none"></div>

        <div className="text-center z-10 mb-8">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary to-foreground drop-shadow-sm">
            404
          </h1>
          <p className="text-xl md:text-2xl font-bold mt-2">
            Looks like you're lost in the void.
          </p>
        </div>

        {/* Game Area Container */}
        <div className="w-full max-w-3xl h-[450px] bg-[#161616] rounded-[2.5rem] border border-border shadow-2xl relative overflow-hidden cursor-crosshair">
          {/* Game Header / HUD */}
          <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-black/40 backdrop-blur-md border-b border-white/5 z-20">
            <div className="flex items-center gap-2 text-primary font-bold">
              <Trophy className="w-5 h-5" />
              <span>Score: {score}</span>
            </div>
            <div className="flex items-center gap-2 text-white font-bold">
              <Timer className="w-5 h-5" />
              <span
                className={timeLeft <= 5 ? "text-red-500 animate-pulse" : ""}
              >
                00:{timeLeft.toString().padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Game States */}
          {!isPlaying && !gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#161616]/80 backdrop-blur-sm z-30">
              <Ghost className="w-16 h-16 text-primary mb-4 animate-bounce" />
              <h2 className="text-3xl font-black text-white mb-2">
                Catch the 404 Ghost!
              </h2>
              <p className="text-zinc-400 mb-6 max-w-sm text-center">
                You have 15 seconds to catch as many rogue 404 ghosts as
                possible.
              </p>
              <button
                onClick={startGame}
                className="bg-primary text-[#161616] px-8 py-3.5 rounded-full font-black text-lg shadow-[0_0_20px_rgba(245,198,22,0.4)] hover:scale-105 transition-transform flex items-center gap-2"
              >
                <Gamepad2 className="w-6 h-6" /> Start Game
              </button>
            </div>
          )}

          {gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#161616]/90 backdrop-blur-md z-30">
              <Trophy className="w-20 h-20 text-primary mb-4 drop-shadow-[0_0_15px_rgba(245,198,22,0.5)]" />
              <h2 className="text-4xl font-black text-white mb-2">
                Time's Up!
              </h2>
              <p className="text-xl text-zinc-300 mb-6">
                You caught{" "}
                <span className="text-primary font-bold text-3xl mx-2">
                  {score}
                </span>{" "}
                ghosts!
              </p>
              <div className="flex gap-4">
                <button
                  onClick={startGame}
                  className="bg-white text-[#161616] px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
                >
                  Play Again
                </button>
                <Link
                  href="/"
                  className="bg-primary text-[#161616] px-6 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(245,198,22,0.3)] hover:scale-105 transition-transform flex items-center gap-2"
                >
                  <Home className="w-5 h-5" /> Go Home
                </Link>
              </div>
            </div>
          )}

          {/* The Target (Ghost) */}
          {isPlaying && (
            <button
              onClick={handleCatch}
              style={{
                top: position.top,
                left: position.left,
                transform: "translate(-50%, -50%)",
              }}
              className="absolute transition-all duration-300 ease-out z-10 p-4 group"
            >
              <div className="relative">
                {/* Glow effect behind the ghost */}
                <div className="absolute inset-0 bg-primary blur-md opacity-50 rounded-full group-hover:scale-150 transition-transform"></div>
                <Ghost className="w-12 h-12 text-primary relative z-10 drop-shadow-[0_0_10px_rgba(245,198,22,1)]" />
              </div>
            </button>
          )}
        </div>

        {/* Fallback Home Link */}
        <div className="mt-8 z-10">
          <Link
            href="/"
            className="text-foreground-muted hover:text-primary font-medium transition-colors border-b border-transparent hover:border-primary pb-1"
          >
            I don't want to play, just take me home &rarr;
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
