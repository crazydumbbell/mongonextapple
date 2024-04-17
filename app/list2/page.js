import { connectDB } from "@/util/database";
import ListItem from "./ListItem";

export const dynamic = "force-dynamic";
//스태틱 페이지도 다이나믹하게 보여줌

const List = async () => {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  result = result.map((item) => ({ ...item, _id: item._id.toString() }));

  return (
    <div className="list-bg">
      <ListItem result={result} />
    </div>
  );
};

export default List;
