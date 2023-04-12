import styled from "styled-components";
import TodoList from "./ToDoList";

const Container = styled.div`
  width: 30%;
`;

const TodoLists = ({ todos, handleCheck, handleEdit, handleDelete }) => {
  return (
    <Container>
      {todos.map((todo) => (
        <TodoList
          key={todo.id}
          todo={todo}
          handleCheck={handleCheck}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </Container>
  );
};

export default TodoLists;
