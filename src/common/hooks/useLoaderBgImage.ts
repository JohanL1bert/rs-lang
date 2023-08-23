import { useEffect, useState } from 'react';

export const useLoaderBgImage = (src: string) => {
  const [loadImg, setLoadIMg] = useState<any>(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => setLoadIMg(src);
  }, [src]);

  return [loadImg, setLoadIMg];
};
