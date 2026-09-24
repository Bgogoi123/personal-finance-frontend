"use client";

import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay: number = 800) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, [value]);

  return debounceValue;
};
