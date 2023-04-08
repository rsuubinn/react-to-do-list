import styled from "styled-components";
import Search from "./Search";
import InboxIcon from "@mui/icons-material/Inbox";
import Category from "./Category";
import { useEffect, useState } from "react";
import axios from "axios";

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

const List = styled.div``;

const Categories = ({ categories }) => {
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
          <List key={category.id}>{category.name}</List>
        ))}
      </Lists>
    </Container>
  );
};

export default Categories;
