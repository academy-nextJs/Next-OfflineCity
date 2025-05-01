"use client";

import { useState } from "react";
import Step1Email from "./Step1Email";
// import Step2VerifyCode from "./Step2VerifyCode";
// import Step3SetPassword from "./Step3SetPassword";

export default function SignupStepsWrapper() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");

  const goToStep2 = (emailValue: string) => {
    setEmail(emailValue);
    setStep(2);
  };

  return (
    <div className="w-full">
      {step === 1 && <Step1Email onNext={goToStep2} />}

      {step === 2 && <div></div>}
      {step === 3 && <div></div>}
    </div>
  );
}
