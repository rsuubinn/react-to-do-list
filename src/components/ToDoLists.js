import styled from "styled-components";
import TodoList from "./ToDoList";

const Container = styled.div`
  width: 30%;
  margin-bottom: 3rem;
`;

const TodoLists = ({
  todos,
  isModal,
  setIsModal,
  handleCheck,
  handleEdit,
  handleDelete,
}) => {
  return (
    <Container>
      {todos.map((todo) => (
        <TodoList
          key={todo.id}
          todo={todo}
          isModal={isModal}
          setIsModal={setIsModal}
          handleCheck={handleCheck}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </Container>
  );
};

export default TodoLists;
