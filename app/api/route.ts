// /api routes
import { NextResponse } from "next/server";
export function GET(req: any) {
  const data = req.json();

  return new NextResponse(data);
}
