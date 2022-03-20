import React, { useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { SerachResults } from "./searchResults";

export const Search = () => {
  const [serachText, setSerachText] = useState(null);
  const inputRef = useRef(null);

  const handleClickSearch = () => {
    const text = inputRef.current.value;
    if (text) {
      setSerachText(text);
    }
  };

  const handleOnKeyUpInput = (e) => {
    const text = inputRef.current.value;
    if (e.key === "Enter" && text) {
      setSerachText(text);
    }
  };

  return (
    <div className="h-full w-full flex flex-col  items-center ">
      <div className="flex  my-3 ">
        <div className="flex w-72 border border-gray-300 rounded-md transition-all  focus-within:ring-2 focus-within:transition ">
          <p className="flex items-center p-1">
            <BiSearch className="text-xl " />
          </p>

          <input
            className="block w-full rounded-r-md outline-none "
            type="text"
            placeholder="映画、ドラマを検索"
            onKeyUp={handleOnKeyUpInput}
            ref={inputRef}
          />
        </div>

        <button
          className="block ml-2 p-1 border rounded-md text-sm hover:text-blue-400 hover:border-blue-400 "
          onClick={handleClickSearch}
        >
          検索
        </button>
      </div>
      {serachText && <SerachResults text={serachText} />}
    </div>
  );
};
