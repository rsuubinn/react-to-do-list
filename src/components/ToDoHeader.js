import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Today = styled.span`
  margin-bottom: 15px;
  font-size: 2rem;
  font-weight: 600;
`;

const ToDoHeader = ({ todosLength, checkedTodosLength }) => {
  const today = new Date();
  const formatDate = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <Container>
      <Today>오늘은 {formatDate}</Today>
      <span>
        전체 {todosLength}개 중 {checkedTodosLength}개 완료
      </span>
    </Container>
  );
};

export default ToDoHeader;
