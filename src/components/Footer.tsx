import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-200">
      <div className="flex-grow">
        <h1 className="text-4xl font-bold text-center mt-8">Welcome to My Website</h1>
        <p className="text-center mt-4">This is an example page with TailwindCSS.</p>
      </div>

      <footer className="bg-gray-800 text-white text-center py-4">
        &copy; 2024 My Website. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
