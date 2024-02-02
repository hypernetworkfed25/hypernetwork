import { useState, useMemo, useEffect } from "react";

const useFetch = (url, body) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = useMemo(
    () => ({
      method: "POST",
      body: JSON.stringify(body),
    }),
    [body]
  );

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]); // Refetch when url or options change

  return { data, loading, error };
};

export default useFetch;
