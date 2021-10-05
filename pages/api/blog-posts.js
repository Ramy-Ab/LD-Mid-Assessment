// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getBlogPosts } from "../../helpers/api/getBlogPosts";

export default async function handler(req, res) {
  res.status(200).json(await getBlogPosts());
}
