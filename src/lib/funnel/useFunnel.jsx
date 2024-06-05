import { createContext, useContext } from "react";

export const FunnelContext = createContext(null);

const useFunnel = () => {
  const { currentStep, setCurrentStep, nextStep, prevStep, updateStep } =
    useContext(FunnelContext);

  return { currentStep, setCurrentStep, nextStep, prevStep, updateStep };
};

export default useFunnel;
