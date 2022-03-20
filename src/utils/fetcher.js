export const fetcher = async (url) => {
  const res = await fetch(url, { mode: "cors" });

  if (!res.ok) {
    throw new Error("エラーが発生したため、データの取得に失敗いたしました");
  }

  const json = await res.json();
  return json;
};
