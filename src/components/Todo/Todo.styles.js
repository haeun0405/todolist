import styled from "styled-components";

export const TodoWrapper = styled.div`
border: 2px solid green;
border-radius: 5px;
padding: 15px;
`;

export const TodoTitle = styled.h3`
  margin: 0;
  margin-bottom: 10px;
`;

export const TodoContent = styled.p`
  margin: 0;
  margin-bottom: 10px;
`;

export const TodoButtons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  margin-left: 5px;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  background-color: #ccc;
  cursor: pointer;

  &:hover {
    background-color: #bbb;
  }
`;
