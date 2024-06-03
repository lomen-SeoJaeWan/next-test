"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Other = () => {
  const [state, setState] = useState(0);
  const router = useRouter();

  const update = () => {
    setState((prev) => prev + 1);
  };

  const pushState = () => {
    window.history.pushState({ state: "push" }, "", "/other/child");
    console.log(window.history.state);
  };

  const replaceState = () => {
    window.history.replaceState({ state: "replace" }, "", "/other/child");
    console.log(window.history.state);
  };

  return (
    <>
      <Link href="/">홈으로</Link>
      <Link href="/other/child">자식 페이지 이동</Link>
      <a href={window.location.href}>현재 URL</a>
      <button onClick={() => pushState()}>pushState</button>
      <button onClick={() => replaceState()}>replaceState</button>
      <button onClick={() => router.push("/")}>다른 페이지 이동</button>
      <button onClick={update}>업데이트</button>
    </>
  );
};

export default Other;