import React, { useEffect, useState } from "react";

const RapidApi = () => {
  const [data, setData] = useState([]);
  //  fetch data
  const url =
    "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "47fc6574c5msh4cd22bef46fcac6p155ab1jsn4b1422a668fc",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  // getData api
  const getData = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result.items);
      console.log(result.items);
    } catch (error) {
      console.error(error);
    }
  };
  // useEffect
  useEffect(() => {
    getData();
  }, []);

  console.log(data[0]?.id.videoId);

  return (
    <div>
      {
        <iframe
          width="250"
          height="150"
          src={`https://www.youtube.com/embed/${data[0]?.id.videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      }
    </div>
  );
};

export default RapidApi;
