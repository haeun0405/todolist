import React from "react";
import { TodoWrapper, TodoTitle, TodoContent, TodoButtons, Button, DetailButton } from "./Todo.styles";
import { Link } from "react-router-dom";

const Todo = ({ todo, toggleTodoStatus, deleteTodo }) => {
  return (
    <TodoWrapper>
      <TodoTitle>
        {todo.title}
        <DetailButton as={Link} to={`/todo/${todo.id}`}>
          상세보기
        </DetailButton>
      </TodoTitle>
      <TodoContent>{todo.content}</TodoContent>
      <TodoButtons>
        <Button onClick={() => toggleTodoStatus(todo.id)}>{todo.completed ? "완료 취소" : "완료"}</Button>
        <Button onClick={() => deleteTodo(todo.id)}>삭제</Button>
      </TodoButtons>
    </TodoWrapper>
  );
};

export default Todo;