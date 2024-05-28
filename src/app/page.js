import axios from "axios";

export default function Home() {
  console.log("page");

  // https://bum-developer.tistory.com/
  axios.get("https://lomen.co.kr/").then((res) => {
    console.log(res.data);
  });

  return <main>테스트</main>;
}
