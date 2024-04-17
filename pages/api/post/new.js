import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";
import { connectDB } from "@/util/database";

const handler = async (요청, 응답) => {
  let session = await getServerSession(요청, 응답, authOptions);

  console.log(session.user.email);

  if (session) {
    요청.body.author = session.user.email;
  }
  console.log(요청.body);
  if (요청.method == "POST") {
    if (요청.body.title == "") {
      return 응답.status(500).json("너 왜 제목 안씀");
    }

    const db = (await connectDB).db("forum");
    let result = await db.collection("post").insertOne(요청.body);

    return 응답.status(200).redirect("/list");
  }
};

export default handler;
