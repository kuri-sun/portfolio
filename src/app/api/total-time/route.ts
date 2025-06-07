import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const visits = await prisma.visit.findMany();

    const totalSeconds = visits.reduce((sum, visit) => sum + visit.duration, 0);
    const totalHours = (totalSeconds / 3600).toFixed(1);
    const uniqueVisitors = visits.length;

    return NextResponse.json(
      {
        totalHours,
        uniqueVisitors,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error in GET /api/analytics:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
