import { SignInButton, SignUpButton } from "@clerk/nextjs";
import React from "react";

const Public = () => {
  return (
    <div className="h-screen w-full bg-gray-50 flex justify-center">
      <div className="mt-20">
        <h1 className="text-[80px] text-center">Recomend Movie</h1>

        <SignUpButton redirectUrl="/main">
          <button className="block w-48 mx-auto p-3 mt-44 border rounded-md  text-center text-xl transition hover:text-blue-400 hover:transition hover:border-blue-400 active:opacity-70 ">
            さあ、はじめよう
          </button>
        </SignUpButton>

        <SignInButton redirectUrl="/main">
          <button className="block mx-auto mt-12 text-gray-500 transition hover:text-blue-400 hover:transition active:opacity-70">
            既にアカウントをお持ちの方はこちらからログイン
          </button>
        </SignInButton>
      </div>
    </div>
  );
};

export default Public;
