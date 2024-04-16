"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const DetailLink = () => {
  let router = useRouter();
  let a = usePathname();
  let b = useSearchParams();

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
