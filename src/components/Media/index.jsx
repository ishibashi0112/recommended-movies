import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { fetcher } from "src/utils/fetcher";
import { getMovieUrl, getTvUrl, imageUrl } from "src/utils/requestUrl";
import useSWR from "swr";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const Media = () => {
  const router = useRouter();
  const mediaId = router.query.id;
  const mediaType = router.query.media;

  const { data: media, error } = useSWR(
    mediaType === "tv" ? getTvUrl(mediaId) : getMovieUrl(mediaId),
    fetcher
  );

  const watchProviders = media
    ? media["watch/providers"].results.JP?.flatrate
    : null;

  if (!error && !media) {
    return (
      <div className="flex justify-center items-center text-xl mt-10">
        <AiOutlineLoading3Quarters className="animate-spin mr-1" />
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return <div className="mt-10 text-xl">{error.message}</div>;
  }

  // const netflixUrl = `https://www.netflix.com/search?q=${
  //   mediaType === "tv" ? media.name : media.title
  // }`;

  return (
    <div className="h-full w-full flex ">
      <div className="min-w-[20rem] w-80 m-3 rounded-md bg-slate-600 ">
        <Image
          className="rounded-t-md"
          src={
            media.poster_path
              ? `${imageUrl}${media?.poster_path}`
              : "/images/noImage.png"
          }
          alt="image"
          layout="responsive"
          width={300}
          height={500}
        />
        <div className="flex justify-center items-center mt-3">
          <ul className="flex flex-wrap mr-4">
            {watchProviders
              ? watchProviders.map((provider) => {
                  return (
                    <li className="mr-2" key={provider.provider_id}>
                      <Image
                        className="rounded"
                        src={`${imageUrl}${provider.logo_path}`}
                        alt="image"
                        layout="fixed"
                        width={40}
                        height={40}
                      />
                    </li>
                  );
                })
              : null}
          </ul>

          <div className="w-24">
            <p className=" text-base text-gray-100 ">
              {watchProviders ? "配信中" : "配信無し"}
            </p>
            <p className=" text-base text-gray-100 font-bold">
              {watchProviders ? "今すぐ見る" : ""}
            </p>
          </div>
        </div>
        <div className="ml-2 truncate">
          {media && (
            <a
              className="text-gray-100 "
              href={media?.homepage}
              target="_blank"
              rel="noopener noreferrer"
            >{`HP : ${media?.homepage}`}</a>
          )}
        </div>
      </div>

      <div className="flex flex-col m-3 max-w-3xl">
        <div className="flex text-3xl  ">
          <p className="font-bold ">
            {mediaType === "tv" ? media.name : media.title}
          </p>
          <p>{media.first_air_date && `(${media.first_air_date})`}</p>
        </div>
        <div className="flex">
          <p>{mediaType === "tv" ? "TV" : "MOVIE"}</p>
          <ul className="flex">
            {media
              ? media.genres.map((genre) => (
                  <li className="ml-2" key={genre.id}>
                    {genre.name}
                  </li>
                ))
              : null}
          </ul>
        </div>
        <div className="mt-3 pr-3">
          <h1 className="text-xl font-bold">概要</h1>
          <p>{media.overview}</p>
        </div>
        <div className="mt-3 ">
          <h1 className="text-xl font-bold">ディスコグラフィ</h1>
          <ul className="flex overflow-scroll">
            {media.seasons &&
              media.seasons.map((season) => (
                <li className="mr-2" key={season.id}>
                  <Image
                    src={
                      season.poster_path
                        ? `${imageUrl}${season.poster_path}`
                        : "/images/noImage.png"
                    }
                    alt="image"
                    layout="fixed"
                    width={200}
                    height={200}
                  />
                  <p>{`${season.name}：${season.episode_count}話`}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
