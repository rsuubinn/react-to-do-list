import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const CreateCategory = () => {
  return (
    <Container>
      <AddIcon />
      <span>목록 추가</span>
    </Container>
  );
};

export default CreateCategory;
