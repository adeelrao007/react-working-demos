import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const item = await prisma.test.create({ data: {} });
  return NextResponse.json(item);
}
