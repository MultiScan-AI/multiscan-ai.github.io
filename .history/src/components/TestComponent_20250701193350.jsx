import React from 'react';

const TestComponent = () => {
  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-xl shadow-md flex flex-col items-center">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Tailwind Test</h2>
      <p className="text-blue-900 mb-4">
        If you can see this with styling, then Tailwind CSS is working properly!
      </p>
      <div className="flex space-x-4">
        <button className="btn btn-blue">Blue Button</button>
        <button className="btn btn-green">Green Button</button>
      </div>
      <div className="mt-6 w-full h-24 pattern-dots"></div>
    </div>
  );
};

export default TestComponent;
