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
      <h1>아 페이지다!</h1>
    </>
  );
};

export default Other;
