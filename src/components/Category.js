import styled from "styled-components";

const Container = styled.div`
  background-color: orange;
  height: 10vh;
  border-radius: 10px;
  padding: 10px;
`;

const Category = ({ title }) => {
  return <Container>{title}</Container>;
};

export default Category;
