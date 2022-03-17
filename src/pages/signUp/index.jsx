import React from "react";
import Header from "src/components/Header";
import SignUpForm from "src/components/SignUpForm";

const SignUp = () => {
  return (
    <div className="h-screen w-screen bg-gray-50">
      <Header />
      <SignUpForm />
    </div>
  );
};

export default SignUp;
