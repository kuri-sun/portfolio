import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient().$extends(withAccelerate());

export async function POST(req: NextRequest) {
  try {
    const { userId, duration } = (await req.json()) as {
      userId: string;
      duration: number;
    };

    if (typeof userId !== "string" || typeof duration !== "number") {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    await prisma.visit.upsert({
      where: { userId },
      update: {
        duration: {
          increment: duration,
        },
      },
      create: {
        userId,
        duration,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in POST /api/visit:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
