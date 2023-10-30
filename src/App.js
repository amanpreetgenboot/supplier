
import { Route, Routes } from "react-router-dom";
import AddConfiguration from "./components/AddConfiguration";
import Config from "./components/Config"

function App() {
  return (
    <>
<Routes>
      
<Route path="/" element={<AddConfiguration />}/>
<Route path="config" element={<Config/>}/>

</Routes>

    </>
  );
}

export default App;
