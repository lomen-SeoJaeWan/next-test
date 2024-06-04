import { useEffect } from "react";

const useHistory = (popState) => {
  const pustState = (state) => {
    window.history.pushState(state, "");
  };

  // 뒤로가기, 앞으로가기 버튼을 누를 때마다 실행
  useEffect(() => {
    window.addEventListener("popstate", popState);
    return () => {
      window.removeEventListener("popstate", popState);
    };
  }, [popState]);

  // 페이지를 닫을 때 경고창
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return pustState;
};

export default useHistory;
