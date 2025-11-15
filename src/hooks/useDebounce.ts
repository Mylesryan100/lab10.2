import { useEffect } from "react";





function useDebounce(value: string, delay: number = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

    return (

    )


}

    useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

//  useEffect(() => {
//     // Skip the initial delay on first mount so the UI feels responsive
//     if (firstRender.current) {
//       firstRender.current = false;
//       setDebounced(value);
//       return;
//     }

    const id = setTimeout(() => setDebounced(value), Math.max(0, delay));
    return () => clearTimeout(id);
  }, [value, delay]);

  return debouncedValue;
} 

export default useDebounce;