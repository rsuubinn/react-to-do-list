import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

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

  const handleEditTodo = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Overlay onClick={() => setTodoInfoModal(false)} />
      <Container>
        <Btns>
          <CloseBtn onClick={() => setTodoInfoModal(false)}>
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
      </Container>
    </>
  );
};

export default TodoInfo;
