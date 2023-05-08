import React from "react";
import { useParams } from "react-router-dom";

const SingleVideo = () => {
  const id = useParams();
  console.log(id);
  return <div>SingleVideo</div>;
};

export default SingleVideo;
