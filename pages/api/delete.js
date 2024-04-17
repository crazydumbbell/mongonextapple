import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

const handler = async (요청, 응답) => {
  let session = await getServerSession(요청, 응답, authOptions);

  if ((요청.method === "DELETE", session.user.email === 요청.body.email)) {
    const db = (await connectDB).db("forum");
    let result = await db
      .collection("post")
      .deleteOne({ _id: new ObjectId(요청.body) });
    응답.status(200).json("삭제완료");
  }
};

export default handler;
