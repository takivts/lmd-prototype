import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { password } = req.body;

  // Get password from environment variable, fallback to default
  const correctPassword = process.env.APP_PASSWORD;

  if (password === correctPassword) {
    // Set a secure HTTP-only cookie
    res.setHeader("Set-Cookie", [
      `auth-token=authenticated; HttpOnly; Path=/; Max-Age=${7 * 24 * 60 * 60}; SameSite=Strict${
        process.env.NODE_ENV === "production" ? "; Secure" : ""
      }`,
    ]);

    return res.status(200).json({ success: true });
  } else {
    return res.status(401).json({ error: "Invalid password" });
  }
}
