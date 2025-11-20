// app/api/hello/route.js
import { NextResponse } from "next/server";

export async function GET(req) {
     const {proq}= req.json();
    const product = {
        name:"apple", 
        price:255,
        isStock:true
    }
  return NextResponse.json({ msg: "Hello from App Router API!", success:true , product});
}
