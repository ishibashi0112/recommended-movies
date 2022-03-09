import React, { useEffect, useRef, useState } from "react";

const Main = () => {
  const [serachResults, setSerachResults] = useState([]);

  const baseURL = "https://api.themoviedb.org";
  const fetchApi = async (text) => {
    const res = await fetch(
      `${baseURL}/3/search/multi?api_key=baa7af1f304682eb49bcbb6db49c1579&language=en-US&query=${text}&page=1&include_adult=false`,
      { mode: "cors" }
    );
    const resJson = await res.json();
    const results = resJson.results;
    setSerachResults(results);
  };

  const inputRef = useRef(null);

  const handleClick = () => {
    const text = inputRef.current.value;
    fetchApi(text);
  };

  return (
    <div>
      <input className="border" type="text" ref={inputRef} />
      <button onClick={handleClick}>検索</button>
      <ul>
        {serachResults.map((result) => (
          <li key={result.id}>
            <p>{result.media_type}</p>
            <p>{result.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
