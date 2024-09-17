import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { auth } from '@clerk/nextjs/server'; 

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { userId } = auth(); 
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const videos = await prisma.video.findMany({
      where: { userId }, // Fetch videos only for the logged-in user
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(videos);
  } catch (error) {
    return NextResponse.json({ error: "Error fetching videos" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}