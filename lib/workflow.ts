import { Client as WorkflowClient } from "@upstash/workflow";
import { Client as QStashClient, resend } from "@upstash/qstash";
import config from "@/lib/config";
// import WelcomeEmail from "@/emails/WelcomeEmail";
// import BasicEmail from "@/emails/BasicEmail";

export const workflowClient = new WorkflowClient({
  baseUrl: config.env.upstash.qstashUrl,
  token: config.env.upstash.qstashToken,
});

const qstashClient = new QStashClient({
  token: config.env.upstash.qstashToken,
});

export const sendEmail = async ({
  email,
  subject,
  message,
}: {
  email: string;
  subject: string;
  message: string;
}) => {
  await qstashClient.publishJSON({
    api: {
      name: "email",
      provider: resend({ token: config.env.resendToken }),
    },
    body: {
      from: "Cesar Hertz <info@cesarhertz.com>",
      to: [email],
      subject,
      // react: WelcomeEmail({ username: "Cesar", company: "何赛" }),
      // react: BasicEmail(),
      html: message,
    },
  });
};
