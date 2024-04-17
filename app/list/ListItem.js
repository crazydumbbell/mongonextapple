"use client";

import Link from "next/link";
import DetailLink from "./DetailLink";
import { redirect } from "next/dist/server/api-utils";

const ListItem = ({ result }) => {
  return (
    <div>
      {result.map((item, index) => (
        <div className="list-item" key={index}>
          <Link prefetch={false} href={"/detail/" + item._id.toString()}>
            <h4>{item.title.toString()}</h4>
          </Link>
          {<Link href={"/edit/" + item._id.toString()}>수정</Link>}
          <span
            onClick={(e) => {
              fetch("/api/delete", {
                method: "DELETE",
                body: result[index]._id,
              })
                .then((r) => {
                  return r.json();
                })
                .then(() => {
                  e.target.parentElement.opacity = 0;
                  setTimeout(() => {
                    e.target.parentElement.style.display = "none";
                  }, 1000);
                });
            }}
          >
            🗑️
          </span>
          <DetailLink />
          <p>{item.content.toString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ListItem;
