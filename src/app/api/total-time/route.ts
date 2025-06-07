import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  const visits = await prisma.visit.findMany();
  const totalSeconds = visits.reduce(
    (sum: number, visit: any) => sum + visit.duration,
    0,
  );
  const totalHours = totalSeconds / 3600;

  return NextResponse.json({ totalHours });
}
