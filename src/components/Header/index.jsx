import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  const router = useRouter();

  const handleClickTitle = () => {
    router.push("/main");
  };

  return (
    <header className="flex justify-between items-center h-12 px-4 bg-gray-100 ">
      <button
        className="h-full leading-[48px] font-bold text-2xl"
        onClick={handleClickTitle}
      >
        Recomend Movie
      </button>

      <div className="flex item-center">
        {router.pathname !== "/search" && (
          <Link href="/search">
            <a
              href="a"
              className="flex justify-center items-center w-9 h-9 mr-5 rounded-full transition hover:transition hover:bg-gray-200  hover:text-blue-400  "
            >
              <BsSearch size="23px" />
            </a>
          </Link>
        )}
        <UserButton afterSignOutAllUrl="/" />
      </div>
    </header>
  );
};

export default Header;
