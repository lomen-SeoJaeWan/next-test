"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home({ data }) {
  const router = useRouter();

  useEffect(() => {
    console.log(window.history.state);
  }, []);

  return (
    <>
      <button onClick={() => router.push("/other")}>다른 페이지 이동</button>
    </>
  );
}
