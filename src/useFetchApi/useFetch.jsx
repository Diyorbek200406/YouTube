import React, { useEffect, useState } from "react";

function useFetch(url, options) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    try {
    //   const res = await fetch(url, options);
    //   const data = await res.json();
      setData(data.items);
      setLoading(false);
    } catch (error) {
      setError("Something went wrong");
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getData();
  }, [url]);
  return {
    data: data,
    loading: loading,
    error: error,
  };
}

export default useFetch;
