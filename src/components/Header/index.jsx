import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();

  const handleClickTitle = () => {
    router.push("/main");
  };

  if (router.pathname === "/signUp") {
    return (
      <header className="h-12 bg-gray-100  text-center font-bold text-2xl leading-[48px] ">
        Recomend Movie
      </header>
    );
  }

  return (
    <header className="flex justify-between items-center h-12 bg-gray-100 ">
      <button
        className="h-full leading-[48px] font-bold text-2xl"
        onClick={handleClickTitle}
      >
        Recomend Movie
      </button>

      <UserButton afterSignOutAllUrl="/" />
    </header>
  );
};

export default Header;
