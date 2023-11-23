import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddConfiguration from "./components/AddConfiguration";
import Config from "./components/Config";
import AddUser from "./components/AddUsers";
import Master from "./components/DocumentMaster";
import UpdateRecords from "./components/updateRecords";

function App() {
  const [redirectToFirstPage, setRedirectToFirstPage] = useState(false);

  const handleButtonClick = () => {
    if (!redirectToFirstPage) {
      setRedirectToFirstPage(true);
    }
  };

  return (
    <>
    {/* <UpdateRecords/> */}
      <div>
        {!redirectToFirstPage && (
          <button onClick={handleButtonClick}>Add User</button>
        )}
        <Routes>
          {redirectToFirstPage && <Route path="/" element={<AddUser />} />}
          <Route path="/config" element={<Config />} />
          <Route path="/AddUsers" element={<AddConfiguration />} />
          <Route path = "/Master" element = {<Master/>} />
          <Route path = "/UpdateRecords" element = {<UpdateRecords/>} />
          
        </Routes>
      </div>
    </>
  );
}

export default App;
