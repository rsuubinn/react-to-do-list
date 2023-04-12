import styled from "styled-components";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  padding: 1rem;
  border-bottom: 1px solid #dddddd;
  svg {
    cursor: pointer;
  }
`;

const TodoList = ({ todo, handleCheck, handleEdit, handleDelete }) => {
  const { id, text, isChecked } = todo;

  return (
    <Container>
      {isChecked ? (
        <RadioButtonCheckedIcon onClick={() => handleCheck(id)} />
      ) : (
        <RadioButtonUncheckedIcon onClick={() => handleCheck(id)} />
      )}
      {text}
      <div>
        <EditIcon onClick={() => handleEdit()} />
        <DeleteIcon onClick={() => handleDelete(id)} />
      </div>
    </Container>
  );
};


export default TodoList;

