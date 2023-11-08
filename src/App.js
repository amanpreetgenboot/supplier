import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddConfiguration from "./components/AddConfiguration";
import Config from "./components/Config";
import AddUser from "./components/AddUsers";
import Master from "./components/DocumentMaster";

function App() {
  const [redirectToFirstPage, setRedirectToFirstPage] = useState(false);

  const handleButtonClick = () => {
    if (!redirectToFirstPage) {
      setRedirectToFirstPage(true);
    }
  };

  return (
    <>
      <div>
        {!redirectToFirstPage && (
          <button onClick={handleButtonClick}>Add User</button>
        )}
        <Routes>
          {redirectToFirstPage && <Route path="/" element={<AddUser />} />}
          <Route path="/config" element={<Config />} />
          <Route path="/AddUsers" element={<AddConfiguration />} />
          
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </>
  );
}

export default App;
