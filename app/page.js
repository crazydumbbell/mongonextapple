import { connectDB } from "@/util/database";

const Home = async () => {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return <div>하이</div>;
};

export default Home;
