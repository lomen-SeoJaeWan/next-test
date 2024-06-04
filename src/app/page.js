"use client";

import { Funnel } from "@/lib/funnel";

const Step1 = (props) => {
  const { onNext, onPrev, onUpdate } = props;

  return (
    <div>
      <h1>Step 1</h1>

      <button onClick={() => onPrev({ data: 123 }, 123)}>이전</button>
      <button onClick={() => onNext(1, 2, 3, 4)}>다음</button>
      <button onClick={() => onUpdate("step3")}>3번째로</button>
    </div>
  );
};

const Step2 = (props) => {
  const { onNext, onPrev } = props;

  return (
    <div>
      <h1>Step 2</h1>

      <button onClick={() => onPrev({ data: 123 }, 123)}>이전</button>
      <button onClick={() => onNext(1, 2, 3, 4)}>다음</button>
    </div>
  );
};

const Step3 = (props) => {
  const { onNext, onPrev } = props;

  return (
    <div>
      <h1>Step 3</h1>

      <button onClick={() => onPrev({ data: 123 }, 123)}>이전</button>
      <button onClick={() => onNext(1, 2, 3, 4)}>다음</button>
    </div>
  );
};

export default function Home() {
  return (
    <Funnel steps={["step1", "step2", "step3"]}>
      <Funnel.Step name="step1" onNext={(data) => console.log(data)}>
        <Step1 />
      </Funnel.Step>
      <Funnel.Step name="step2">
        <Step2 />
      </Funnel.Step>
      <Funnel.Step name="step3">
        <Step3 />
      </Funnel.Step>
    </Funnel>
  );
}
