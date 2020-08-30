import { useState, useEffect } from "react";
import usePrevious from "./usePrevious";

export default function useFormValue(inputName, initialValue) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(false);

  const previousValue = usePrevious(initialValue);

  const handleChange = (event) => setValue(event.target.value);

  useEffect(() => {
    if (previousValue !== "" && value === "") {
      setError(true);
    }

    if (previousValue !== "" && value === "") {
      setError(false);
    }
  }, [value, previousValue]);

  return [value, handleChange, error, setError];
}
