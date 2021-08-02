import { useState, useEffect } from "react";


function useFetch(url) {

  const [rate, setRates] = useState([]);
  const [load, setLoading] = useState(true);
  const [err, setError] = useState(null);

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
  return {rates : rate, 
          loading : load,
          error : err}; //переписать под объект(ключ : значение)б чтоб при перестановки массив не ломал
}
export { useFetch };