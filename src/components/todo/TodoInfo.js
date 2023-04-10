import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Overlay = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  width: 50vw;
  height: 60vh;
  background-color: orange;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
`;

const Btns = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`;

const CloseBtn = styled.div`
  cursor: pointer;
`;

const EditBtn = styled.button``;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  margin-bottom: 3rem;
`;

const Description = styled.div`
  margin-bottom: 3rem;
`;

const Category = styled.div``;

const TodoInfo = ({ todo, categories, setTodoInfoModal }) => {
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);
  const [category, setCategory] = useState(todo.category);

  const navigate = useNavigate();
  const { id } = useParams(0);

  const handleEditTodo = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/todos", {
      method: "PUT",
    });
  };

  const handleDeleteTodo = (e) => {
    const ok = window.confirm("정말 삭제하시겠습니까?");
    if (ok) {
      fetch(`http://localhost:3001/todos/${id}`, {
        method: "DELETE",
      }).then(() => {
        setTodoInfoModal(false);
        navigate("/");
      });
    }
  };

  const handleCloseBtnClick = () => {
    navigate("/");
    setTodoInfoModal(false);
  };
  return (
    <>
      <Overlay onClick={handleCloseBtnClick} />
      <Container>
        <Btns>
          <CloseBtn onClick={handleCloseBtnClick}>
            <CloseIcon />
          </CloseBtn>
          <EditBtn onClick={handleEditTodo}>Edit</EditBtn>
        </Btns>
        <Form onSubmit={handleEditTodo}>
          <Title>
            <h3>제목</h3>
            <input
              value={title}
              placeholder="제목"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </Title>
          <Description>
            <h3>내용</h3>
            <textarea
              value={description}
              placeholder="내용"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </Description>
          <Category>
            <h3>카테고리</h3>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </Category>
        </Form>
        <button onClick={handleDeleteTodo}>Delete</button>
      </Container>
    </>
  );
};

export default TodoInfo;
