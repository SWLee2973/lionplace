'use client';

import { Toaster } from 'react-hot-toast';

function ToasterContext() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        className: '',
        duration: 10000,
        style: {},
      }}
    />
  );
}

export default ToasterContext;
