import React from "react";
import { fetcher } from "../../../api/fetcher";
import NewsCard from "./NewsCard";
import useSwr from "swr";
import { newsUrl } from "../../../utils/constants/apis";
import Spinner from "../../Reusable/Spinner";

function News() {
  const { data } = useSwr(newsUrl, fetcher);
  const newsInfo = data?.data.new;
  const error = data?.error;
  console.log(data?.data);
  return (
    <>
      {" "}
      {!newsInfo && !error && <Spinner />}
      {newsInfo &&
        !error &&
        newsInfo.map((item, idx) => <NewsCard key={idx} item={item} />)}
    </>
  );
}

export default News;
