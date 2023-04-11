import { useState } from "react";
import styled from "styled-components";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddIcon from "@mui/icons-material/Add";
import ToDo from "./ToDo";

const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const CategoryLists = styled.div`
  transition: background-color 0.2s;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: orange;
  h3 {
    margin-bottom: 15px;
    color: ${(props) => props.theme.accentColor};
    font-weight: 600;
    font-size: 24px;
  }
  button {
    color: ${(props) => props.theme.textColor};
    background: transparent;
    padding: 10px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 16px;
    text-align: start;
  }
  button[disabled] {
    background-color: ${(props) => props.theme.categoryBgColor};
    cursor: default;
  }
  button:last-child {
    position: absolute;
    bottom: 0;
    margin-top: 50px;
    background: transparent;
    opacity: 0.6;
    & svg {
      font-size: 10px;
      background: none;
      border: 1px solid ${(props) => props.theme.textColor};
      color: ${(props) => props.theme.textColor};
    }
  }
`;

const CategoryButton = styled.button`
  display: flex;
  align-items: center;
  svg {
    margin-right: 5px;
    padding: 5px;
    font-size: 20px;
    border-radius: 100%;
    background-color: #f98c07;
    color: white;
  }
`;

const ToDoLists = styled.div`
  transition: background-color 0.2s;
  padding: 20px;
  background-color: ${(props) => props.theme.rightBgColor};
  h3 {
    margin-bottom: 15px;
    color: ${(props) => props.theme.accentColor};
    font-weight: 600;
    font-size: 24px;
  }
`;

const ToDoList = ({ categories, todos }) => {
  const [category, setCategory] = useState("");

  const handleCategoryClick = (categoryName) => {
    setCategory(categoryName);
  };

  const handleAddCategory = () => {};
  return (
    <Container>
      <CategoryLists>
        <h3>나의 목록</h3>
        {categories.map((useableCategory) => (
          <CategoryButton
            onClick={() => handleCategoryClick(useableCategory.name)}
            disabled={useableCategory.name === category}
            key={useableCategory.id}
          >
            <FormatListBulletedIcon />
            {useableCategory.name}
          </CategoryButton>
        ))}
        <CategoryButton onClick={handleAddCategory}>
          <AddIcon /> 목록 추가
        </CategoryButton>
      </CategoryLists>

      <ToDoLists>
        <h3>{category}</h3>
        {todos.map((todo) => (
          <ToDo key={todo.id} {...todo}></ToDo>
        ))}
      </ToDoLists>
    </Container>
  );
};

export default ToDoList;
