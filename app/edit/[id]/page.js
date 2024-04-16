import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

const Edit = async (props) => {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <form action="/api/post/new" method="GET"></form>
      <div className="p-20">
        <form action="/api/post/new" method="POST">
          <div>수정페이지</div>
          <input name="title" placeholder="글제목" />
          <input name="content" placeholder="글내용" />
          <button type="submit">PUT버튼</button>
          <button type="submit">PUT버튼</button>
          <button type="submit">PUT버튼</button>
          <button type="submit">PUT버튼</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
