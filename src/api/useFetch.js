import { useEffect, useState } from "react";

// call this AFTER user clicks start btn

export const useFetch = (url) => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    setState((state) => ({ data: state.data, loading: true }));
    fetch(url)
      .then((res) => res.json())
      .then((res) => setState({ data: res.data, loading: false }))
      .catch((err) => console.log(err));
  }, [url, setState]);

  return state;
};
