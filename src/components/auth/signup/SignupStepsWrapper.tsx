"use client";

import { useState } from "react";
import Step1Email from "./Step1Email";
import Step2VerifyCode from "./Step2VerifyCode";
import Step3SetPassword from "./Step3SetPassword";
import { useRouter } from "next/navigation";

export default function SignupStepsWrapper() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  return (
    <div className="w-full">
      {step === 1 && <Step1Email onNext={() => setStep(2)} />}
      {step === 2 && <Step2VerifyCode onNext={() => setStep(3)} />}
      {step === 3 && <Step3SetPassword onComplete={() => router.push("/")} />}
    </div>
  );
}
