import styled from "styled-components";

export const Layout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;


export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const Container = styled.div`
  // 여기에 Container 스타일을 입력하세요.
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  // 여기에 InputContainer 스타일을 입력하세요.
`;

export const Input = styled.input`
  padding: 5px;
  margin-right: 5px;
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  background-color: #ccc;
  cursor: pointer;

  &:hover {
    background-color: #bbb;
  }
`;

export const TodoContainer = styled.div`
  // 여기에 TodoContainer 스타일을 입력하세요.
`;

export const TodoSection = styled.div`
  // 여기에 TodoSection 스타일을 입력하세요.
`;

export const Title = styled.h2`
  // 여기에 Title 스타일을 입력하세요.
`;

export const ListContainer = styled.div`
  // ListContainer 스타일을 입력하세요.
  width: 100%;
`;

export const ListTitle = styled.h2`
  // ListTitle 스타일을 입력하세요.
  margin-bottom: 10px;
  text-align: left;
`;

export const ListWrapper = styled.div`
  // ListWrapper 스타일을 입력하세요.
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;