import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { email, emailSchema } from "../emailSchema";

export async function POST(req: Request) {
  const reqBody = await req.json();
  const { error, value }: { error: any; value: email } =
    emailSchema.validate(reqBody);
  if (error) return NextResponse.json(error.details[0].message);

  const htmlMsg = `
   <div style="display: flex; gap: 1rem;">
  <span style="font-weight: bold; font-size: 16px;">الاسم :</span>
  <span style="font-size: 16px;">${value.fullName}</span>
</div>

<div style="display: flex; gap: 1rem;">
  <span style="font-weight: bold; font-size: 16px;">رقم الهاتف :</span>
  <span style="font-size: 16px;">${value.phoneNumber}</span>
</div>

<div style="display: flex; gap: 1rem;">
  <span style="font-weight: bold; font-size: 16px;">الراتب :</span>
  <span style="font-size: 16px;">${value.salary}</span>
</div>

<div style="display: flex; gap: 1rem;">
  <span style="font-weight: bold; font-size: 16px;">البنك :</span>
  <span style="font-size: 16px;">${value.bank}</span>
</div>

<div style="display: flex; gap: 1rem;">
  <span style="font-weight: bold; font-size: 16px;">قطاع العمل :</span>
  <span style="font-size: 16px;">${value.work}</span>
</div>`;

  try {
    await nodemailer
      .createTransport({
        service: "gmail",
        auth: {
          user: "mharahone@gmail.com",
          pass: "evml syth bpib dtva",
        },
      })
      .sendMail({
        from: "mharahone@gmail.com",
        to: "mharahone@gmail.com",
        subject: "Message Received(mharahone)",
        html: htmlMsg,
      });

    return NextResponse.json("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json("Failed to send email");
  }
}
