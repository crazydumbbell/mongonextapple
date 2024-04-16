import { connectDB } from "@/util/database";
import Link from "next/link";
import React from "react";
import DetailLink from "./DetailLink";

const List = async () => {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((a, i) => {
        return (
          <div className="list-item" key={i}>
            <Link prefetch={false} href={`/detail/${a._id.toString()}`}>
              <h4>{a.title}</h4>
            </Link>
            <Link href={"/edit/" + a._id.toString()}>수정</Link>
            <DetailLink />
            <p>{a.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
