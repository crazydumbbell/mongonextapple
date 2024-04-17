"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const DetailLink = () => {
  let router = useRouter();

  return (
    <button
      onClick={() => {
        router.forward();
      }}
    >
      버튼
    </button>
  );
};

export default DetailLink;
