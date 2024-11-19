import { NextResponse } from 'next/server'
import { getAuth } from '@clerk/nextjs/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const { userId } = getAuth();
    
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const boards = await prisma.board.findMany({
      where: {
        userId: userId
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(boards);
  } catch (error) {
    console.error("[BOARDS_GET]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = getAuth();
    
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { title } = await req.json();

    if (!title) {
      return new NextResponse("Title is required", { status: 400 });
    }

    const board = await prisma.board.create({
      data: {
        title,
        userId: userId
      }
    });

    return NextResponse.json(board);
  } catch (error) {
    console.error("[BOARDS_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
