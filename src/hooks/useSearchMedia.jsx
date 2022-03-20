import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";
import { searchUrl } from "src/utils/requestUrl";

export const useSearchMedia = (text, page) => {
  const { data, error } = useSWR(searchUrl(text, page), fetcher);

  return {
    data,
    error,
    isLoading: !error && !data,
  };
};
