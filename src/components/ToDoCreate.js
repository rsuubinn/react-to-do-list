import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 25%;
  background-color: white;
  border-radius: 20px;
  padding: 1.5rem;
  overflow-y: hidden;
`;

const Btns = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  svg {
    border-radius: 50%;
    padding: 5px;
    cursor: pointer;
  }
  .close_icon {
    background-color: #ff5151;
  }
  .add_icon {
    background-color: #64f46b;
  }
`;

const Form = styled.form`
  h3 {
    font-size: 20px;
    margin-bottom: 2rem;
  }

  textarea {
    border: none;
    resize: none;
    width: 100%;
    font-size: 20px;
    &:focus {
      outline: none;
    }
  }
`;

const ToDoCreate = ({ handleCreate, setIsAddModal }) => {
  const [newText, setNewText] = useState("");

  const handleTextChange = (e) => {
    setNewText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAddModal(false);
    setNewText(e.target.value);
    handleCreate(newText);
  };

  return (
    <>
      <Overlay onClick={() => setIsAddModal(false)} />
      <Container>
        <Btns>
          <CloseIcon
            onClick={() => setIsAddModal(false)}
            className="close_icon"
          />
          <AddIcon onClick={handleSubmit} className="add_icon" />
        </Btns>
        <Form onSubmit={handleSubmit}>
          <h3>오늘의 할 일을 입력해주세요 ✏️</h3>
          <textarea
            value={newText}
            onChange={handleTextChange}
            required
          ></textarea>
        </Form>
      </Container>
    </>
  );
};

export default ToDoCreate;
