import { cloneElement, useState } from "react";
import useFunnel, { FunnelContext } from "./useFunnel";
import useHistory from "./utils/useHistory/useHistory";

const FunnelStep = (props) => {
  const {
    name,
    children,
    onNext = () => {},
    onPrev = () => {},
    onUpdate = () => {},
  } = props;
  const { currentStep, nextStep, prevStep, updateStep } = useFunnel();

  const handleNextStep = (...data) => {
    onNext(...data);
    nextStep();
  };

  const handlePrevStep = (...data) => {
    onPrev(...data);
    prevStep();
  };

  const handleUpdateStep = (name, data) => {
    onUpdate(data);
    updateStep(name);
  };

  if (currentStep !== name) return null;
  return cloneElement(children, {
    onNext: handleNextStep,
    onPrev: handlePrevStep,
    onUpdate: handleUpdateStep,
  });
};

const Funnel = (props) => {
  const { children, steps } = props;
  const [currentStep, setCurrentStep] = useState(0);

  const handlePopState = (e) => {
    const state = e.state?.funnelStep || 0;

    setCurrentStep(state);
  };

  const pushState = useHistory(handlePopState);

  const nextStep = () => {
    const next = currentStep + 1;

    if (next < steps.length) {
      pushState({ funnelStep: next });
      setCurrentStep(next);
    }
  };

  const prevStep = () => {
    const prev = currentStep - 1;

    if (prev >= 0) {
      pushState({ funnelStep: prev });
      setCurrentStep(prev);
    }
  };

  const updateStep = (step) => {
    const index = steps.indexOf(step);

    if (index !== -1) {
      pushState({ funnelStep: index });
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
