import styled from "styled-components";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import ToDoEdit from "./ToDoEdit";

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
  .checked > span {
    text-decoration: line-through;
  }
`;

const TodoList = ({ todo, handleCheck, handleEdit, handleDelete }) => {
  const { id, text, isChecked } = todo;
  const [isEditModal, setIsEditModal] = useState(false);

  const onEdit = () => {
    setIsEditModal(true);
  };

  return (
    <Container className={`${isChecked ? "checked" : ""}`}>
      {isChecked ? (
        <RadioButtonCheckedIcon onClick={() => handleCheck(id)} />
      ) : (
        <RadioButtonUncheckedIcon onClick={() => handleCheck(id)} />
      )}
      <span>{text}</span>
      <div>
        <EditIcon onClick={() => onEdit()} />
        <DeleteIcon onClick={() => handleDelete(id)} />
      </div>
      {isEditModal && <ToDoEdit todoId={id} setIsEditModal={setIsEditModal} />}
    </Container>
  );
};


export default TodoList;

