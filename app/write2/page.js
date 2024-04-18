import { connectDB } from "@/util/database";
import { revalidatePath } from "next/cache";

export default async function Write2() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post_text").find().toArray();

  async function handleSubmit(formData) {
    "use server";
    const db = (await connectDB).db("forum");
    db.collection("post_text").insertOne({ title: formData.get("title") });
    console.log(formData.get("title"));
    revalidatePath("write2");
  }

  return (
    <div>
      <form action={handleSubmit}>
        <input name="title"></input>
        <button type="submit">버튼</button>
      </form>
      {result
        ? result.map((a, i) => <div key={i}>글제목 : {a.title}</div>)
        : null}
    </div>
  );
}
