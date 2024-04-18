"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DarkMode() {
  let router = useRouter();
  let [isDark, setIsDark] = useState(false);

  useEffect(() => {
    let 쿠키값 = ("; " + document.cookie).split(`; mode=`).pop().split(";")[0];
    if (쿠키값 == "") {
      document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
      setIsDark(false);
    }
  }, []);

  return (
    <span
      onClick={() => {
        if (isDark) {
          document.cookie = "mode=light; max-age=" + 3600 * 24 * 400;
          setIsDark(false);
          router.refresh();
        } else {
          document.cookie = "mode=dark; max-age=" + 3600 * 24 * 400;
          setIsDark(true);
          router.refresh();
        }
      }}
    >
      {isDark == true ? "🌙" : "☀️"}
    </span>
  );
}
