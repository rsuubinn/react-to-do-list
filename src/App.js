import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import ToDoMain from "./components/ToDoMain";

const Globalstyle = createGlobalStyle`
  ${reset}
`;

function App() {
  return (
    <div>
      <Globalstyle />

      <Routes>
        <Route path="/" element={<ToDoMain />}></Route>
      </Routes>
    </div>
  );
}

export default App;
