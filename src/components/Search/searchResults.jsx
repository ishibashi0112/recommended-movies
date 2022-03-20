import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useSearchMedia } from "src/hooks/useSearchMedia";
import { imageUrl } from "src/utils/requestUrl";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Pagination } from "@mantine/core";

export const SerachResults = (props) => {
  const [activePage, setPage] = useState(1);
  const { data, error, isLoading } = useSearchMedia(props.text, activePage);

  const filterExculdePerson = data
    ? data.results.filter((data) => data.media_type !== "person")
    : null;

  const handleOnChangePage = (page) => {
    setPage(page);
    window.scrollTo(0, 50);
  };

  if (isLoading) {
    return (
      <div className="flex items-center text-xl mt-10">
        <AiOutlineLoading3Quarters className="animate-spin mr-1" />
        <p>Loading...</p>
      </div>
    );
  }
  console.log(data);
  if (error) {
    return <div className="mt-10 text-xl">{error.messege}</div>;
  }

  if (data && filterExculdePerson.length === 0) {
    return <div className="mt-10 text-xl">検索結果0件</div>;
  }

  if (data.total_results > 200) {
    return (
      <div className="mt-10 text-xl">
        検索結果が200件を超えるため、キーワードを絞り込んでください
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col items-center">
        <p className=" text-lg">{`検索結果${data.total_results}件`}</p>
        <div className="mt-1">
          {data.total_pages > 1 && (
            <Pagination
              page={activePage}
              onChange={handleOnChangePage}
              total={data.total_pages}
              color="dark"
            />
          )}
        </div>
      </div>

      <ul className="flex flex-wrap gap-5 justify-center mt-4 ">
        {filterExculdePerson
          ? filterExculdePerson.map((result) => (
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
                        {result.media_type === "tv"
                          ? result.name
                          : result.title}
                      </p>
                      <p>{result.media_type}</p>
                    </div>
                  </a>
                </Link>
              </li>
            ))
          : null}
      </ul>
      <div className="flex justify-center my-6">
        {data.total_pages > 1 && (
          <Pagination
            page={activePage}
            onChange={handleOnChangePage}
            total={data.total_pages}
            color="dark"
          />
        )}
      </div>
    </div>
  );
};
