import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { redirect } from "next/dist/server/api-utils";

const edit = async (요청, 응답) => {
  let session = await getServerSession(요청, 응답, authOptions);

  if ((요청.method == "POST", session.user.email === 요청.body.email)) {
    let 바꿀거 = {
      title: 요청.body.title,
      content: 요청.body.content,
    };
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").updateOne(
      {
        _id: new ObjectId(요청.body._id),
      },
      {
        $set: 바꿀거,
      }
    );
    응답.status(200).redirect("/list");
  }
};

export default edit;
