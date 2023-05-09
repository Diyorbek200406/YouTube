import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useFetch from "../useFetchApi/useFetch";

const SingleVideo = () => {
  const { id } = useParams();
  const url = `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "47fc6574c5msh4cd22bef46fcac6p155ab1jsn4b1422a668fc",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };
  const { data, loading, error } = useFetch(url, options);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error}</h1>
        {console.log(error)}
      </div>
    );
  }
  return (
    <div>
      <h1>Data Fetch</h1>
      <h1>{data.length}</h1>
      <h1>Hello</h1>
    </div>
  );
};

export default SingleVideo;
