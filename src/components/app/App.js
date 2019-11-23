import React from "react";

function App({ children }) {
  return (
    <>
      <main className="relative bg-gray-100 w-full h-full min-h-screen">
        {children}
      </main>
    </>
  );
}

export default App;
