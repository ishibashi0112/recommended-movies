import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { imageUrl, searchUrl } from "src/utils/requestUrl";

const Main = () => {
  const [serachResults, setSerachResults] = useState([]);
  const inputRef = useRef(null);

  const searchMedia = async (text) => {
    const res = await fetch(searchUrl(text), { mode: "cors" });
    const resJson = await res.json();
    const medias = resJson.results;
    const filterExculdePerson = medias.filter(
      (data) => data.media_type !== "person"
    );
    console.log(medias);
    setSerachResults(filterExculdePerson);
  };

  const handleClickSearch = () => {
    const text = inputRef.current.value;
    searchMedia(text);
  };

  return (
    <div className="h-full w-full flex flex-col  items-center">
      <div className="flex my-3">
        <input className="block border" type="text" ref={inputRef} />
        <button className="block border" onClick={handleClickSearch}>
          検索
        </button>
      </div>

      <ul className="flex flex-wrap gap-5 justify-center">
        {serachResults.map((result) => (
          <li className=" w-80 h-96 rounded-md shadow-md" key={result.id}>
            <Link
              href={{
                pathname: `/media/${result.id}`,
                query: { media: result.media_type },
              }}
            >
              <a href="a">
                <Image
                  className="rounded-t-md"
                  src={`${imageUrl}${result.poster_path}`}
                  alt="image"
                  layout="responsive"
                  width={300}
                  height={300}
                />
                <div className="flex justify-between">
                  <p className="text-xl font-bold">
                    {result.media_type === "tv" ? result.name : result.title}
                  </p>
                  <p>{result.media_type}</p>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
