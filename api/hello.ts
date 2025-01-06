import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  debugger;
  const { name = "World" } = req.query;

  console.log("This is a log message from the serverless function");

  return res.json({
    message: `Hello ${name}!`,
  });
}
