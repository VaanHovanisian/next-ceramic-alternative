/* eslint-disable @typescript-eslint/no-explicit-any */
<<<<<<< HEAD

import { Resend } from "resend";

=======
import { Resend } from "resend";
>>>>>>> main
interface Props {
  to: string;
  subject: string;
  react: any;
}
<<<<<<< HEAD

=======
>>>>>>> main
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ to, subject, react }: Props) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Next Ceramic <onboarding@resend.dev>",
      to,
      subject,
      react,
    });

    if (error) {
<<<<<<< HEAD
      throw error;
=======
      throw new Error();
>>>>>>> main
    }

    return data;
  } catch (error) {
    return error;
  }
}
