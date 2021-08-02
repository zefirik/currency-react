import { useState, useEffect } from "react";


function useFetch(url) {

  const [rates, setRates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchUrl() {
    try{
      const response = await fetch(url);
      const json = await response.json();
      setRates(json);
      setLoading(false);}
    catch (error){
      setLoading(false);
      setError(error);
  }
  }
  useEffect(() => {
    fetchUrl();
  },[]);
  return [rates, loading, error];
}
export { useFetch };