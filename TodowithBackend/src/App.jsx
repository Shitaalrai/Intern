import React, { use, useEffect, useState } from "react";

import NavBar from "./components/NavBar";
import Cardsection from "./components/Cardsection";

function App() {
  return (
    <div className=" pb-20 flex justify-center items-center p-3 flex-col gap-2">
      <div className="bg-amber-100 p-5 border-2 rounded-xl shadow-lg shadow-gray-700">
        <NavBar />
        <Cardsection  />
      </div>
    </div>
  );
}

export default App;