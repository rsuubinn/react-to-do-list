import { useEffect, useState } from "react";
import styled from "styled-components";
import ToDoHeader from "./ToDoHeader";
import TodoLists from "./ToDoLists";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ToDoCreate from "./ToDoCreate";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: whitesmoke;
`;

const ToDoMain = () => {
  const [todos, setTodos] = useState([]);
  const [isAddModal, setIsAddModal] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error));
  }, []);

  // 체크 박스
  const handleCheck = (id) => {
    let findTodo = todos.filter((todo) => todo.id === id)[0];
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...findTodo, isChecked: !findTodo.isChecked }),
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));

    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !findTodo.isChecked } : todo
      ),
    ]);
  };

  // 수정

  const handleEdit = () => {};

  // 삭제

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((error) => console.log(error));

    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleCreate = (newText) => {
    const newToDo = {
      text: newText,
      isChecked: false,
    };
    fetch(`http://localhost:3001/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newToDo),
    }).then((res) => setTodos([...todos, newToDo]));
  };

  const checkedTodos = todos.filter((todo) => todo.isChecked);

  return (
    <Container>
      <ToDoHeader
        todosLength={todos.length}
        checkedTodosLength={checkedTodos.length}
      />
      <TodoLists
        todos={todos}
        handleCheck={handleCheck}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      <AddCircleIcon onClick={() => setIsAddModal(true)} />
      {isAddModal && (
        <ToDoCreate
          handleCreate={handleCreate}
          setTodos={setTodos}
          setIsAddModal={setIsAddModal}
        />
      )}
    </Container>
  );
};

export default ToDoMain;
