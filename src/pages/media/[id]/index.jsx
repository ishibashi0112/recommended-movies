import { useRouter } from "next/router";
import React from "react";
import Header from "src/components/Header";
import { Media } from "src/components/Media";

const mediaId = () => {
  return (
    <div className="h-screen w-screen bg-gray-50">
      <Header />

      <Media />
    </div>
  );
};

export default mediaId;
