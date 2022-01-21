import type { NextApiRequest, NextApiResponse } from "next";
import { sessionStorage } from "src/storage/sessionStorage";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(sessionStorage[0]);
  } else if (req.method === "POST") {
    sessionStorage.pop();

    const user = req.body.user;
    const sessionExist = req.body.sessionExist;

    const newSessionStorage = {
      user: user,
      sessionExist: sessionExist,
    };

    sessionStorage.push(newSessionStorage);
    res.status(200).json(sessionStorage);
  }
}
