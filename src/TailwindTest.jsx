import React from 'react';

const TailwindTest = () => {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 my-4">
      <div>
        <div className="text-xl font-medium text-black">Tailwind Test</div>
        <p className="text-gray-500">Checking if Tailwind styles work</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
          Click me
        </button>
      </div>
    </div>
  );
};

export default TailwindTest;
