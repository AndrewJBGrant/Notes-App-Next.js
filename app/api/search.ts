import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

console.log("In the api!!")
res.status(200).json({ message: "Well hello, coming from search file on api folder"});
}
