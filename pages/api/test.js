import { connectDB } from "@/util/database";

const handler = async (요청, 응답) => {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();

  if (요청.method == "POST") return 응답.status(200).json({ result });
};

export default handler;
