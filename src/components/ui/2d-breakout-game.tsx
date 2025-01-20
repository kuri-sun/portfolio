"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { t } from "i18next";
import React from "react";
import { twMerge } from "tailwind-merge";

const BreakoutGame2D = ({ className = "" }: { className: string }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = React.useState<
    "before-start" | "playing" | "game-over"
  >("before-start");
  const [gameKey, setGameKey] = React.useState(0);
  const [point, setPoint] = React.useState(0);

  const brickRowCount = 4;
  const brickColumnCount = 21;
  const letters = [
    // "H"
    { x: 0, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: 2 },
    { x: 0, y: 3 },
    { x: 1, y: 2 },
    { x: 2, y: 0 },
    { x: 2, y: 1 },
    { x: 2, y: 2 },
    { x: 2, y: 3 },
    // "A"
    { x: 4, y: 0 },
    { x: 4, y: 1 },
    { x: 4, y: 2 },
    { x: 4, y: 3 },
    { x: 5, y: 0 },
    { x: 5, y: 2 },
    { x: 6, y: 0 },
    { x: 6, y: 1 },
    { x: 6, y: 2 },
    { x: 6, y: 3 },
    // "R"
    { x: 8, y: 0 },
    { x: 8, y: 1 },
    { x: 8, y: 2 },
    { x: 8, y: 3 },
    { x: 9, y: 0 },
    { x: 9, y: 2 },
    { x: 10, y: 1 },
    { x: 10, y: 3 },
    // "U"
    { x: 12, y: 0 },
    { x: 12, y: 1 },
    { x: 12, y: 2 },
    { x: 12, y: 3 },
    { x: 14, y: 0 },
    { x: 14, y: 1 },
    { x: 14, y: 2 },
    { x: 14, y: 3 },
    { x: 13, y: 3 },
    // "K"
    { x: 16, y: 0 },
    { x: 16, y: 1 },
    { x: 16, y: 2 },
    { x: 16, y: 3 },
    { x: 17, y: 1 },
    { x: 18, y: 0 },
    { x: 18, y: 2 },
    { x: 18, y: 3 },
    // "I"
    { x: 20, y: 0 },
    { x: 20, y: 1 },
    { x: 20, y: 2 },
    { x: 20, y: 3 },
  ];
  const maxScore = letters.length;

  // 2D breakout game ref: https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript
  const startGame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const randomVelocity = (min: number, max: number) => {
      const value = Math.random() * (max - min) + min;
      return Math.random() < 0.5 ? -value : value; // Randomize direction
    };

    // Game variables
    const canvasWidth = 1150;
    const canvasHeight = 350;
    let ballX = canvasWidth / 2;
    let ballY = canvasHeight - 30;
    let ballDX = randomVelocity(1, 2); // Reduced X velocity
    let ballDY = randomVelocity(1, 2); // Reduced Y velocity
    const ballRadius = 6;

    const paddleHeight = 10;
    const paddleWidth = 100;
    let paddleX = (canvasWidth - paddleWidth) / 2;
    let rightPressed = false;
    let leftPressed = false;
    let isGameOver = false;

    const brickWidth = 35;
    const brickHeight = 13;
    const brickPaddingX = 10;
    const brickPaddingY = 14;
    const brickOffsetTop = 30;
    const brickOffsetLeft = 110;

    const bricks: { x: number; y: number; status: number }[][] = [];
    for (let c = 0; c < brickColumnCount; c++) {
      bricks[c] = [];
      for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 }; // Default brick initialization
      }
    }

    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
      } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
      }
    };

    const keyUpHandler = (e: KeyboardEvent) => {
      if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
      } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
      }
    };

    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);

    const drawBall = (ctx: CanvasRenderingContext2D) => {
      ctx.beginPath();
      ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.fill();
      ctx.closePath();
    };

    const drawPaddle = (ctx: CanvasRenderingContext2D) => {
      ctx.beginPath();
      ctx.rect(paddleX, canvasHeight - paddleHeight, paddleWidth, paddleHeight);
      ctx.fillStyle = "#FFD700";
      ctx.fill();
      ctx.closePath();
    };

    const drawBricks = (ctx: CanvasRenderingContext2D) => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      for (const { x, y } of letters) {
        const brickX = x * (brickWidth + brickPaddingX) + brickOffsetLeft;
        const brickY = y * (brickHeight + brickPaddingY) + brickOffsetTop;

        // Update the bricks array with these positions
        if (bricks[x] && bricks[x][y]) {
          bricks[x][y].x = brickX;
          bricks[x][y].y = brickY;
        }

        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = bricks[x]?.[y]?.status === 1 ? "#fff" : "transparent";
        ctx.fill();
        ctx.closePath();
      }
    };

    const collisionDetection = () => {
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          const b = bricks[c][r];
          if (b.status === 1) {
            const closestX = Math.max(b.x, Math.min(ballX, b.x + brickWidth));
            const closestY = Math.max(b.y, Math.min(ballY, b.y + brickHeight));
            const distanceX = ballX - closestX;
            const distanceY = ballY - closestY;
            const distanceSquared =
              distanceX * distanceX + distanceY * distanceY;

            if (distanceSquared < ballRadius * ballRadius) {
              ballDY = -ballDY; // Reverse vertical direction
              b.status = 0; // Mark brick as hit
              if (point + 1 === maxScore) {
                setGameState("game-over");
                isGameOver = true;
              }
              setPoint((prevPoint) => prevPoint + 1);
            }
          }
        }
      }
    };

    const draw = (ctx: CanvasRenderingContext2D) => {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      drawBricks(ctx);

      if (gameState !== "playing" || isGameOver) return; // Stop drawing if the game is not active

      drawBall(ctx);
      drawPaddle(ctx);

      collisionDetection();

      if (
        ballX + ballDX > canvasWidth - ballRadius ||
        ballX + ballDX < ballRadius
      ) {
        ballDX = -ballDX;
      }
      if (ballY + ballDY < ballRadius) {
        ballDY = -ballDY;
      }

      if (
        ballY + ballRadius >= canvasHeight - paddleHeight &&
        ballX + ballRadius >= paddleX &&
        ballX - ballRadius <= paddleX + paddleWidth
      ) {
        const relativeHitPoint =
          (ballX - (paddleX + paddleWidth / 2)) / (paddleWidth / 2);
        const maxBounceAngle = Math.PI / 3; // 60 degrees
        const bounceAngle = relativeHitPoint * maxBounceAngle;

        ballDX = Math.sin(bounceAngle) * 3; // Adjust speed as needed
        ballDY = -Math.cos(bounceAngle) * 3; // Ensure it moves upward
      } else if (ballY + ballDY > canvasHeight - ballRadius) {
        setGameState("game-over");
        isGameOver = true;
        return;
      }

      ballX += ballDX;
      ballY += ballDY;

      if (rightPressed && paddleX < canvasWidth - paddleWidth) {
        paddleX += 8;
      } else if (leftPressed && paddleX > 0) {
        paddleX -= 8;
      }

      requestAnimationFrame(() => draw(ctx));
    };

    if (ctx) {
      draw(ctx);
    }

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
      document.removeEventListener("keyup", keyUpHandler);
    };
  };

  React.useEffect(() => {
    startGame();
  }, [gameKey]);

  const onStart = () => {
    setGameState("playing");
    setPoint(0);
    setGameKey((prevKey) => prevKey + 1); // Change the key to restart
  };

  return (
    <div className="font-mono text-white flex flex-col px-4">
      <div
        className={twMerge(
          "relative flex flex-col items-center bg-gradient-to-b from-black to-neutral-700 rounded-lg py-8 gap-4",
          className
        )}
      >
        {/* game */}
        <canvas
          ref={canvasRef}
          width="1150"
          height="350"
          className="border-white border-2 rounded-lg"
        />
        <div className="absolute bottom-24 flex flex-col items-center gap-4">
          <p
            className={twMerge(
              "text-yellow-600 font-bold text-2xl",
              gameState !== "game-over" ? "hidden" : ""
            )}
          >
            {point === maxScore ? t("Perfect Score!") + " 🎉" : point + "pt"}
          </p>
          <button
            className={twMerge(
              "font-light cursor-pointer cursor-pointer text-green-500 text-lg animate-pulse",
              gameState === "playing" ? "hidden" : ""
            )}
            onClick={onStart}
          >
            {gameState === "game-over"
              ? t("[ Start again? ]")
              : t("[ Start the Game ]")}
          </button>
          <p
            className={twMerge(
              "flex flex-row items-center text-sm",
              gameState === "playing" ? "hidden" : ""
            )}
          >
            {t("(Paddle) Press")} <IconArrowLeft size={20} className="mx-1" />{" "}
            {t("to move left, and")}{" "}
            <IconArrowRight size={20} className="mx-1" /> {t("to move right")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreakoutGame2D;
