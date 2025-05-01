"use client";

import SignupStepsWrapper from "@/components/auth/signup/SignupStepsWrapper";
import AuthLayout from "@/components/auth/AuthLayout";

export default function SignupPage() {
  return (
    <AuthLayout
      imageSrc="/images/Authentication/image.JPG"
      imageAlt="ثبت‌نام"
      caption="برای ثبت‌نام در آلفا، مراحل را تکمیل کنید."
    >
      <SignupStepsWrapper />
    </AuthLayout>
  );
}
