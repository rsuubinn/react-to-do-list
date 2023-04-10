import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const Name = styled.div`
  margin-bottom: 3rem;
`;

const CreateCategory = ({ setCreateCategoryModal }) => {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleCreateBtnClick = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    }).then(() => {
      setCreateCategoryModal(false);
      navigate("/");
    });
  };

  const handleCloseBtnClick = () => {
    navigate("/");
    setCreateCategoryModal(false);
  };
  return (
    <>
      <Overlay onClick={handleCloseBtnClick} />
      <Container>
        <Btns>
          <CloseBtn onClick={handleCloseBtnClick}>
            <CloseIcon />
          </CloseBtn>
          <EditBtn onClick={handleCreateBtnClick}>Create</EditBtn>
        </Btns>
        <Form onSubmit={handleCreateBtnClick}>
          <Name>
            <h3>카테고리 이름</h3>
            <input
              value={name}
              placeholder="이름"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </Name>
        </Form>
      </Container>
    </>
  );
};

export default CreateCategory;
