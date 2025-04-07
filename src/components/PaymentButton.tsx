// 'use client'

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// // import Loading from "@/app/loading";
// // import { useSession } from "next-auth/react";
// import { Button, buttonVariants } from "@/components/ui/button";
// import { cn } from "@/lib/utils";

// const PaymentButton = ({ amount }: { amount: number }) => {
//     const router = useRouter();
//     const [isLoading, setIsLoading] = useState(false);

//     const makePayment = async () => {
//         setIsLoading(true);

//         // make an endpoint to get this key
//         const key = "rzp_test_HAyTJByKW1qr5r";
//         const data = await fetch("/api/order/create?amount=" + amount);
//         const { order } = await data?.json();
//         console.log(order)
//         const options = {
//             key: key,
//             currency: order.currency,
//             amount: order.amount,
//             order_id: order.id,
//             modal: {
//                 ondismiss: function () {
//                     setIsLoading(false);
//                 },
//             },
//             handler: async function (response) {
//                 const data = await fetch("/api/order/verify", {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                         razorpayPaymentId: response.razorpay_payment_id,
//                         razorpayOrderId: response.razorpay_order_id,
//                         razorpaySignature: response.razorpay_signature,
//                         email:'codesharad@gmail.com',
//                         workshop_id:'cm971qlb80001i1ogs0o210ll'
//                         // email: userData.user?.email,
//                     }),
//                 });

//                 const res = await data.json();
//                 if (res?.error === false) {
//                     // redirect to success page
//                     router.push("/success");
//                 }
//             },
//         };

//         const paymentObject = new window.Razorpay(options);
//         paymentObject.open();

//         paymentObject.on("payment.failed", function (response) {
//             alert("Payment failed. Please try again.");
//             setIsLoading(false);
//         });
//     };

//     return (
//         <>
//             <Button
//                 className={cn(buttonVariants({ size: "lg" }))}
//                 // disabled={isLoading}
//                 onClick={makePayment}
//             >
//                 Pay Now
//             </Button>
//             {/* </Suspense> */}
//         </>
//     );
// };

// export default PaymentButton;