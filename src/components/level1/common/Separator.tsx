import React from 'react';

function Separator({ color = 'bg-gray600' }) {
  return <div className={`h-4/5 w-[1.5px] ${color}`}></div>;
}

export default Separator;
