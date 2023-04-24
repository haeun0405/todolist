import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  TodoDetailWrapper,
  TodoId,
  BackButton,
  TodoDetailContent,
  TodoDetailHeading,
  TodoDetailBody,
} from "./TodoDetail.styles";

const TodoDetail = ({ todos }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todo = todos.find((todo) => todo.id === parseInt(id, 10));

  if (!todo) {
    return <div>Todo not found.</div>;
  }

  const handleBackButtonClick = () => {
    navigate(-1);
  };

  return (
    <TodoDetailWrapper>
      <TodoId>ID: {todo.id}</TodoId>
      <TodoDetailContent>
        <TodoDetailHeading>{todo.title}</TodoDetailHeading>
        <TodoDetailBody>{todo.content}</TodoDetailBody>
      </TodoDetailContent>
      <BackButton onClick={handleBackButtonClick}>뒤로 가기</BackButton>
    </TodoDetailWrapper>
  );
};

export default TodoDetail;