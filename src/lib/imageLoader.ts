'use client';

export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: number;
  width: number;
  quality: number;
}) {
  let imgSrc: string = `${process.env.REACT_IMG_URL}/${src}?w=${width}&q=${quality || 75}`;
  if (process.env.NODE_ENV === 'development') {
    imgSrc = `${src}?w=${width}&q=${quality || 75}`;
  }

  console.log(process.env.NODE_ENV);
  console.log(process.env.REACT_IMG_URL);

  return imgSrc;
}
