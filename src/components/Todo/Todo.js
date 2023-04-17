import React from "react";
import { TodoWrapper, TodoTitle, TodoContent, TodoButtons, Button } from "./Todo.styles";

const Todo = ({ todo, toggleTodoStatus, deleteTodo }) => {
  const onToggleClick = () => {
    toggleTodoStatus(todo.id);
  };

  const onDeleteClick = () => {
    deleteTodo(todo.id);
  };

  return (
    <TodoWrapper>
      <TodoTitle>{todo.title}</TodoTitle>
      <TodoContent>{todo.content}</TodoContent>
      <TodoButtons>
        <Button onClick={onDeleteClick}>삭제</Button>
        <Button onClick={onToggleClick}>{todo.isDone ? "취소" : "완료"}</Button>
      </TodoButtons>
    </TodoWrapper>
  );
};

export default Todo;
