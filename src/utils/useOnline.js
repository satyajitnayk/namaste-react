import { useEffect, useState } from 'react';

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.ononline = () => {
      setIsOnline(true);
    };
    window.onoffline = () => {
      setIsOnline(false);
    };
  }, []);

  return isOnline;
};

export default useOnline;
