import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  background-color: #6b6b6b;
  height: 100vh;
  width: 70vw;
`;

const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/todos").then((res) => setTodos(res.data));
  }, []);
  return (
    <Container>
      {todos.map((todo) => (
        <span key={todo.id}>{todo.title}</span>
      ))}
    </Container>
  );
};

export default Todos;
