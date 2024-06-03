import { useContext, useState } from "react";
import { FunnelContext } from "./useFunnel";

const FunnelStep = (props) => {
  const { name, children } = props;
  const { currentStep } = useContext(FunnelContext);

  if (currentStep !== name) return null;
  return children;
};

const Funnel = (props) => {
  const { children, steps } = props;
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevStep) => {
      const next = prevStep + 1;

      if (next < steps.length) {
        return next;
      } else {
        return prevStep;
      }
    });
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => {
      const next = prevStep - 1;

      if (next >= 0) {
        return next;
      } else {
        return prevStep;
      }
    });
  };

  const updateStep = (step) => {
    const index = steps.indexOf(step);

    if (index !== -1) {
      setCurrentStep(index);
    }
  };

  return (
    <FunnelContext.Provider
      value={{
        currentStep: steps[currentStep],
        setCurrentStep,
        nextStep,
        prevStep,
        updateStep,
      }}
    >
      {children}
    </FunnelContext.Provider>
  );
};

Funnel.Step = FunnelStep;

export default Funnel;
