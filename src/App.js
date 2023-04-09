import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Home from "./routes/Home";

const Globalstyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <div>
      <Globalstyle />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Home />}></Route>
        <Route path="/edit" element={<Home />}></Route>
        <Route path="/search" element={<Home />}></Route>
        <Route path="/todo/:id" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
