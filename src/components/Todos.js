import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import InfoIcon from "@mui/icons-material/Info";
import CreateTodo from "./CreateTodo";
import TodoInfo from "./TodoInfo";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  background-color: #6b6b6b;
  height: 100vh;
  width: 70vw;
`;

const CreateToDoBtn = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const Title = styled.h1`
  margin-top: 10vh;
  font-size: 4rem;
  margin-left: 20px;
  margin-bottom: 20px;
  font-weight: 600;
`;

const Lists = styled.ul`
  padding: 20px;
  margin: 0 10px;
`;

const List = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.5);
`;

const Checkbox = styled.input``;

const Todos = ({ categories }) => {
  const [todos, setTodos] = useState([]);
  const [createTodoModal, setCreateTodoModal] = useState(false);
  const [todoInfoModal, setTodoInfoModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/todos").then((res) => setTodos(res.data));
  }, []);

  const handleCreateTodoModal = () => {
    navigate("/create");
    setCreateTodoModal(true);
  };
  //   const handleTodoInfoModal = () => {

  //     setTodoInfoModal(true);
  //   };
  return (
    <Container>
      <CreateToDoBtn onClick={handleCreateTodoModal}>
        <AddIcon sx={{ fontSize: 35 }} />
      </CreateToDoBtn>
      {createTodoModal && (
        <CreateTodo
          categories={categories}
          setCreateTodoModal={setCreateTodoModal}
        />
      )}
      <Title>전체</Title>
      <Lists>
        {todos.map((todo) => (
          <List key={todo.id}>
            <Checkbox type="checkbox" />
            {todo.title}
            <InfoIcon
              onClick={() => {
                navigate(`todo/${todo.id}`);
                setTodoInfoModal(true);
              }}
            />
            {todoInfoModal && (
              <TodoInfo
                todo={todo}
                categories={categories}
                setTodoInfoModal={setTodoInfoModal}
              />
            )}
          </List>
        ))}
      </Lists>
    </Container>
  );
};

export default Todos;
