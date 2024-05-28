import axios from "axios";

export default function Home() {
  console.log("page");

  // https://bum-developer.tistory.com/
  axios.get("http://210.116.101.168:3012/").then((res) => {
    console.log(res.data);
  });

  return (
    <main>
      테스트
      <div>
        <div>
          <h1>컨텐츠 1</h1>
        </div>
      </div>
      <div>
        <h2>컨텐츠 1</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          numquam laudantium nobis itaque illo ipsa, dignissimos, ab autem vel
          animi eveniet debitis vero necessitatibus cum sed. Aliquid accusamus
          veritatis similique.
        </p>
      </div>
      <div>
        <h2>컨텐츠 1</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          numquam laudantium nobis itaque illo ipsa, dignissimos, ab autem vel
          animi eveniet debitis vero necessitatibus cum sed. Aliquid accusamus
          veritatis similique.
        </p>
      </div>
      <div>
        <h2>컨텐츠 1</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
          numquam laudantium nobis itaque illo ipsa, dignissimos, ab autem vel
          animi eveniet debitis vero necessitatibus cum sed. Aliquid accusamus
          veritatis similique.
        </p>
      </div>
    </main>
  );
}
