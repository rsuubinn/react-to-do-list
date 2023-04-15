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
    margin-right: 5px;
  }
  .checked {
    text-decoration: line-through;
  }
`;

const TodoList = ({ todo, handleCheck, handleEdit, handleDelete }) => {
  const { id, text, isChecked } = todo;
  const [isEditModal, setIsEditModal] = useState(false);

  const onEdit = () => {
    setIsEditModal(true);
  };

  const onDelete = () => {
    const ok = window.confirm("정말 삭제하시겠습니까?");
    if (ok) handleDelete(id);
  };

  return (
    <Container>
      {isChecked ? (
        <RadioButtonCheckedIcon onClick={() => handleCheck(id)} />
      ) : (
        <RadioButtonUncheckedIcon onClick={() => handleCheck(id)} />
      )}
      <span className={`${isChecked ? "checked" : ""}`}>{text}</span>
      <div>
        <EditIcon onClick={() => onEdit()} />
        <DeleteIcon onClick={() => onDelete()} />
      </div>
      {isEditModal && (
        <ToDoEdit
          todoText={todo.text}
          todoId={todo.id}
          setIsEditModal={setIsEditModal}
          handleEdit={handleEdit}
        />
      )}
    </Container>
  );
};


export default TodoList;

