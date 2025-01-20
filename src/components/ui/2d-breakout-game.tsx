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
  const brickColumnCount = 9;
  const maxScore = brickColumnCount * brickRowCount;

  // 2D breakout game ref: https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript
  const startGame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Game variables
    const canvasWidth = 900;
    const canvasHeight = 350;
    let ballX = canvasWidth / 2;
    let ballY = canvasHeight - 30;
    let ballDX = 2;
    let ballDY = -2;
    const ballRadius = 7;

    const paddleHeight = 10;
    const paddleWidth = 100;
    let paddleX = (canvasWidth - paddleWidth) / 2;
    let rightPressed = false;
    let leftPressed = false;
    let isGameOver = false;

    const brickWidth = 70;
    const brickHeight = 18;
    const brickPaddingX = 20;
    const brickPaddingY = 20;
    const brickOffsetTop = 30;
    const brickOffsetLeft = 45;

    const bricks: { x: number; y: number; status: number }[][] = [];
    for (let c = 0; c < brickColumnCount; c++) {
      bricks[c] = [];
      for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
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
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          if (bricks[c][r].status === 1) {
            const brickX = c * (brickWidth + brickPaddingX) + brickOffsetLeft;
            const brickY = r * (brickHeight + brickPaddingY) + brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#fff";
            ctx.fill();
            ctx.closePath();
          }
        }
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
      if (gameState !== "playing" || isGameOver) return; // Stop drawing if the game is not active

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      drawBricks(ctx);
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

        ballDX = Math.sin(bounceAngle) * 4; // Adjust speed as needed
        ballDY = -Math.cos(bounceAngle) * 4; // Ensure it moves upward
      } else if (ballY + ballDY > canvasHeight - ballRadius) {
        setGameState("game-over");
        isGameOver = true;
        return;
      }

      ballX += ballDX;
      ballY += ballDY;

      if (rightPressed && paddleX < canvasWidth - paddleWidth) {
        paddleX += 7;
      } else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
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
    <div className="font-mono text-white flex flex-col px-14 md:px-18 lg:px-24 xl:px-36 gap-24">
      <div
        className={twMerge(
          "relative flex flex-col items-center bg-gradient-to-b from-black to-neutral-700 rounded-lg pt-8 pb-24 gap-4",
          className
        )}
      >
        {/* score */}
        <p>
          {t("You score:")} {point} pt
        </p>
        {/* game */}
        <canvas
          ref={canvasRef}
          width="900"
          height="350"
          className="border-white border-2 rounded-lg"
        />
        <div className="absolute bottom-28 flex flex-col items-center gap-4">
          {point === maxScore && (
            <p className="text-yellow-600 font-bold text-2xl">
              {t("Perfect Score!")}
            </p>
          )}
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
