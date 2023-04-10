import styled from "styled-components";
import Search from "./Search";
import Category from "./Category";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import CreateCategory from "./CreateCategory";

const Container = styled.div`
  background-color: rgba(5, 5, 5, 0.75);
  height: 100vh;
  width: 30vw;
`;

const Grid = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const Lists = styled.div`
  padding: 10px;

  h3 {
    font-size: 14px;
    color: white;
    margin-bottom: 15px;
  }
`;

const List = styled.div`
  margin-bottom: 10px;
`;

const Categories = ({ categories }) => {
  const [createCategoryModal, setCreateCategoryModal] = useState(false);
  const navigate = useNavigate();

  const handleCreateCategory = (e) => {
    navigate("/create/category");
    setCreateCategoryModal(true);
  };
  return (
    <Container>
      <Search />
      <Grid>
        <Category title="전체" />
        <Category title="완료" />
      </Grid>
      <Lists>
        <h3>나의 목록</h3>
        {categories.map((category) => (
          <Link key={category.id} to={`/${category.name}`}>
            <List>{category.name}</List>
          </Link>
        ))}
      </Lists>
      <button onClick={handleCreateCategory}>목록 추가</button>
      {createCategoryModal && (
        <CreateCategory setCreateCategoryModal={setCreateCategoryModal} />
      )}
    </Container>
  );
};

export default Categories;
