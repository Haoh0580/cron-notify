import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import { Ping } from "@/models/Ping";

export async function GET(request: NextRequest) {
  const secret = request.headers.get("x-cron-secret");

  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  await connectToDatabase();
  const ping = await Ping.create({});

  return NextResponse.json({
    message: "Ping recorded",
    createdAt: ping.createdAt,
  });
}
