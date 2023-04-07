import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

const Container = styled.div`
  margin: 10px;
  border-radius: 5px;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
`;

const Form = styled.form`
  display: flex;
  padding: 5px;
`;

const Input = styled.input`
  background: transparent;
  border: none;
  width: 90%;
`;

const Search = () => {
  const handleSubmit = (e) => {
    e.preventDeafult();
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <SearchIcon />
        <Input placeholder="검색" />
      </Form>
    </Container>
  );
};

export default Search;
