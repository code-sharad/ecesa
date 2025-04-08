import { NextResponse } from "next/server";
// import Razorpay from "razorpay";
// import crypto from "crypto";
import { prisma } from "@/lib/prisma";

// const instance = new Razorpay({
//     key_id: 'rzp_test_HAyTJByKW1qr5r',
//     key_secret: 'qeZvOnDIs3OmQYxLCKQmUIbs',
// });

export async function POST(req:Request) {
    const {
        razorpayOrderId,
        // razorpaySignature,
        razorpayPaymentId,
        email,
        workshop_id,
    } = await req.json();
    // const body = razorpayOrderId + "|" + razorpayPaymentId;

    // const expectedSignature = crypto
    //     .createHmac("sha256", 'rzp_test_HAyTJByKW1qr5r')
    //     .update(body.toString())
    //     .digest("hex");

    // const isAuthentic = expectedSignature === razorpaySignature;

    // if (!isAuthentic) {
    //     return NextResponse.json({ message: "invalid payment signature", error: true }, { status: 400 });
    // }

    // connect db and update data
    // await connectDB();
    
    await prisma.order.create({
        data: {
            student: { connect: { email:email } },
            workshop: { connect: { id: workshop_id } },
            status: "COMPLETED",
            paymentId: razorpayPaymentId,
            id: razorpayOrderId,
            amount: 1000,
        }
    })

    return NextResponse.json({ message: "payment success", error: false }, { status: 200 });
}