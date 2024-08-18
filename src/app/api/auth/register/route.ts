import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  try {
    const { email, password, name } = await req.json();

    const userFound = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userFound) {
      return NextResponse.json(
        { message: 'User already exists' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    // Do your register logic here
    return NextResponse.json(newUser);
  } catch {
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
