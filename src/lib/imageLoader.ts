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
  let imgSrc: string = `${src}?w=${width}&q=${quality || 75}`;
  if (process.env.NODE_ENV === 'production') {
    imgSrc = `${process.env.REACT_IMG_URL}/${src}?w=${width}&q=${quality || 75}`;
  }

  return imgSrc;
}
