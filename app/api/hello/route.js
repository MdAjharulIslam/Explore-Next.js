// app/api/hello/route.js
import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json({ msg: "Hello from App Router API!", success:true });
}
