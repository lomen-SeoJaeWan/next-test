import { useState } from "react";

const useFunnel = (props) => {
  const { step } = props;
  const [currentStep, setCurrentStep] = useState(step[0]);

  const Funnel = (props) => {
    const { children, name } = props;

    if (name !== currentStep) return null;
    return children;
  };

  return [currentStep, Funnel];
};

export default useFunnel;
