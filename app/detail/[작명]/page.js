import { connectDB } from "@/util/database";
import Comment from "./Comment";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.작명) });

  console.log(result);
  console.log(props);

  return (
    <div>
      <h4>상세페이지</h4>
      {result && <h4>{result.title}</h4>}
      {result && <p>{result.content}</p>}
      <Comment />
    </div>
  );
}
