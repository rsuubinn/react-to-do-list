import styled from "styled-components";
import RemoveIcon from "@mui/icons-material/Remove";

const List = styled.li``;

const Text = styled.span``;

const ToDo = ({ id, title }) => {
  const handleDeleteTodo = () => {};
  return (
    <List>
      <button className="deleteBtn" onClick={handleDeleteTodo}>
        <RemoveIcon />
      </button>
      <Text>{title}</Text>
    </List>
  );
};

export default ToDo;
