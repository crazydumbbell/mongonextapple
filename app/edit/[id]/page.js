import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

const Edit = async (props) => {
  console.log(props);
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <div className="p-20">
        <div>수정페이지</div>
        <form action="/api/post/edit" method="POST">
          <input name="title" defaultValue={result.title} />
          <input name="content" defaultValue={result.content} />
          <input
            style={{ display: "none" }}
            name="_id"
            defaultValue={result._id.toString()}
          />
          <button type="submit">전송</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
