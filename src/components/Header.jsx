import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();

  const handleClickTitle = () => {
    router.push("/");
  };
  return (
    <header className="h-12 flex-1 bg-gray-100">
      <button
        aria
        className="h-full leading-[48px] font-bold text-2xl"
        onClick={handleClickTitle}
      >
        Movie Share
      </button>
    </header>
  );
};

export default Header;
