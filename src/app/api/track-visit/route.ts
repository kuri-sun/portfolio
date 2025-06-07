import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { userId, duration } = body;

  if (!userId || !duration) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  await prisma.visit.create({
    data: {
      userId,
      duration,
    },
  });

  return NextResponse.json({ success: true });
}
