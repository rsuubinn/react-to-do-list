import Categories from "../components/Categories";
import styled from "styled-components";
import Todos from "../components/Todos";

const Container = styled.div`
  display: flex;
`;

function Home() {
  return (
    <Container>
      <Categories />
      <Todos />
    </Container>
  );
}

export default Home;
