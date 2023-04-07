import styled from "styled-components";
import Search from "./Search";

const Container = styled.div`
  background-color: rgba(5, 5, 5, 0.75);
  height: 100vh;
  width: 30vw;
`;

const Categories = () => {
  return (
    <Container>
      <Search />
    </Container>
  );
};

export default Categories;
