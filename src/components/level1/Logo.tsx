import Image from 'next/image';
import React from 'react';

export default function Logo({ option }: { option: 'large' | 'small' }) {
  return (
    <figure className="flex w-fit flex-col items-center">
      {option === 'large' ? (
        <Image src="./logo-icon.svg" alt="" width={42} height={55} />
      ) : (
        <Image src="./logo-icon.svg" alt="" width={24} height={31} />
      )}
      <figcaption
        className={`${option === 'large' ? 'text-heading-2xl' : 'text-heading-xl'} text-white`}
      >
        Lion Place
      </figcaption>
    </figure>
  );
}
