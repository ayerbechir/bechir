import { NextResponse } from "next/server";
import { connectmangodb } from "../../../../lib/mangodb";
import bcrypt from "bcryptjs"
export async function POST(req) {
  try {
    const { name, lastname, email, password } = await req.json();
    const hashedPassword=await bcrypt.hash(password,10);
    await connectmangodb();
    await User.create({name, lastname, email, password:hashedPassword });
    return NextResponse.json({ message: "user registered" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "an error occurred while registering user" },
      { status: 500 }
    );
  }
}
