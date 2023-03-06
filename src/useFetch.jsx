import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    
      axios
        .get(url)

        .then((d) => {
          const data = d.data;
          setData(data);
          setLoading(false);
          setError(false);
        })

        .catch(() => {
          setError(true);
          setLoading(false);
          console.log(error);
        });
        
    }, [url]);
  return { data, loading, error };
};

export default useFetch;
