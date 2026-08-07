"use server";

import { ContactTemplate } from "@/components/email-templates";
import {
  contactFormSchema,
  ContactFormSchemaType,
} from "@/constants/form-schema/contact.schema";
import { sendEmail } from "@/lib/send-email";
import { prisma } from "@/prisma/prisma-client";

export const sendMessageContactAction = async (
  dataObj: ContactFormSchemaType,
) => {
  const parsedData = contactFormSchema.safeParse(dataObj);

  if (!parsedData.success) {
    return {
      success: false,
      message: parsedData.error.message,
    };
  }

  try {
    const data = parsedData.data;

    await prisma.contact.create({
      data,
    });

    await sendEmail({
      to: "vaa.hovanisyan@gmail.com",
      subject: "Next Ceramic new Contact",
      react: ContactTemplate(data),
    });

    return {
      success: true,
      message: "Message sent successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Something went wrong",
    };
  }
};
