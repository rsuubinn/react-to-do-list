import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import ToDoList from "./components/ToDoList";
import { useEffect, useState } from "react";

const Globalstyle = createGlobalStyle`
  ${reset}
`;

function App() {
  const [categories, setCategories] = useState([]);
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/categories")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.log(error);
      });
    fetch("http://localhost:3001/todos")
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Globalstyle />
      <Routes>
        <Route
          path="/"
          element={<ToDoList categories={categories} todos={todos} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
