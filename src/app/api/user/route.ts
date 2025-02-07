import { db } from "prisma/prisma";
import { NextResponse } from "next/server";


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password }= body
    const newUser = await db.user.create({
      data: {
        email,
        password
      },
    });
    return NextResponse.json({ newUser, message: "User created successfully" }, { status: 201 });
  } catch (error) {
    console.log("Error creating user:", error);
    return NextResponse.json({ error: "Unable to create user" }, { status: 500 });
  }finally{
    await db.$disconnect();
  }
}