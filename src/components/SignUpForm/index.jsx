import { SignIn, useClerk, useSignUp } from "@clerk/nextjs";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SignUpForm = () => {
  const { register, handleSubmit, setValue, reset } = useForm({
    defaultValues: {},
  });
  const [formStep, setFormStep] = useState("form");

  const clerk = useClerk();

  const signUp = useSignUp();

  const onSubmit = async (data) => {
    const { emailAddress, password } = data;
    try {
      const signUpAttempt = await signUp.create({ emailAddress, password });
      console.log(signUpAttempt);
      //   await signUpAttempt.prepareEmailAddressVerification();
      setFormStep("code");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(clerk);

  return (
    <div className="h-[calc(100vh-48px)] w-screen bg-gray-50 ">
      <div className="h-1/2 flex flex-col items-center justify-center">
        <h1 className="text-xl  ">Sign Up</h1>

        {formStep === "form" && (
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <label className="">
              Email
              <input
                className="block"
                type="text"
                {...register("emailAddress", { required: true })}
              />
            </label>
            <label className="">
              password
              <input
                className="block"
                type="text"
                {...register("password", { required: true })}
              />
            </label>

            <input className="block" type="submit" />
          </form>
        )}
        {formStep === "code" && (
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <label className="">
              password
              <input
                type="text"
                {...register("password", { required: true })}
              />
              <input className="block" type="submit" />
            </label>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUpForm;
