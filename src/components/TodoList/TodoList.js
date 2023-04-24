import React, { useState } from "react";
import {
  Layout,
  Header,
  InputContainer,
  ListContainer,
  ListTitle,
  ListWrapper,
} from "./TodoList.styles";
import Todo from "../Todo/Todo";

const TodoList = ({ todos, setTodos }) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  const onChangeHandler = (e) => {
    if (e.target.name === "title") {
      setInputTitle(e.target.value);
    } else {
      setInputContent(e.target.value);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (inputTitle.trim() !== "" && inputContent.trim() !== "") {
      setTodos([
        ...todos,
        {
          id: new Date().getTime(),
          title: inputTitle,
          content: inputContent,
          isDone: false,
        },
      ]);
      setInputTitle("");
      setInputContent("");
    }
  };

  const toggleTodoStatus = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <Layout>
      <Header>
        <span>My Todo List</span>
        <span>React</span>
      </Header>
      <InputContainer>
        <form onSubmit={onSubmitHandler}>
          <label>제목</label>
          <input
            type="text"
            name="title"
            value={inputTitle}
            onChange={onChangeHandler}
          />
          <label>내용</label>
          <input
            type="text"
            name="content"
            value={inputContent}
            onChange={onChangeHandler}
          />
          <button type="submit">추가하기</button>
        </form>
      </InputContainer>
      <ListContainer>
        <ListTitle>Working.. 🔥</ListTitle>
        <ListWrapper>
          {workingTodos.map((todo) => (
            <Todo
            key={todo.id}
            todo={todo}
            toggleTodoStatus={toggleTodoStatus}
            deleteTodo={deleteTodo}
          />
          ))}
        </ListWrapper>
        <ListTitle>Done..! 🎉</ListTitle>
        <ListWrapper>
          {doneTodos.map((todo) => (
            <Todo
            key={todo.id}
            todo={todo}
            toggleTodoStatus={toggleTodoStatus}
            deleteTodo={deleteTodo}
          />
          ))}
        </ListWrapper>
      </ListContainer>
    </Layout>
  );
};

export default TodoList;