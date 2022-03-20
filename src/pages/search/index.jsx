import React from "react";
import { Search as SearchComponent } from "src/components/Search";
import Header from "src/components/Header";

const Search = () => {
  return (
    <div className="h-screen w-screen bg-gray-50">
      <Header />
      <SearchComponent />
    </div>
  );
};

export default Search;
