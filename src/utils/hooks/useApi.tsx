import { useState, useEffect } from "react";

interface ApiState<T> {
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  data: T | null;
  error: Error | null;
}

type FetchFunc<T> = () => Promise<T>;
type triggerType = boolean;
export function useApi<T>(
  fetchFunc: FetchFunc<T>,
  trigger: triggerType,
  dependencies: any[] = []
): ApiState<T> {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchFunc();
        setIsSuccess(true);
        setData(result);
      } catch (error: any) {
        setIsError(true);
        setError(error.message);
      }
      setIsLoading(false);
    };
    if (trigger) {
      fetchData();
    }
  }, [trigger]);

  return { isError, isSuccess, isLoading, data, error };
}
