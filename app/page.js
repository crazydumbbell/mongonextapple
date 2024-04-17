import { connectDB } from "@/util/database";

export const revalidate = 60;
//60초 동안 캐싱

const Home = async () => {
  // const client = await connectDB;
  // const db = client.db("forum");
  // let result = await db.collection("post").find().toArray();

  return <div>하이</div>;
};

export default Home;
