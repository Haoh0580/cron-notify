import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import { Ping } from "@/models/Ping";

export async function GET() {
  await connectToDatabase();
  const ping = await Ping.create({});

  return NextResponse.json({
    message: "Ping recorded",
    createdAt: ping.createdAt,
  });
}
